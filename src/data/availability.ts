// Booked nights, read from each villa's Airbnb calendar (iCal export) when the site is built.
//
// The iCal link is private, so it never goes in the code: it is read from an environment
// variable (a GitHub Actions secret in production, `.env` locally). The deploy workflow
// rebuilds the site every few hours so the calendar stays in step with Airbnb.

/** A booked stay: `start` is the first booked night, `end` the checkout day (not booked). */
export interface BookedRange {
  start: string;
  end: string;
}

export interface Availability {
  /** True when the calendar was actually read from Airbnb. */
  synced: boolean;
  /** When it was read (ISO timestamp). */
  updated: string;
  booked: BookedRange[];
}

const cache = new Map<string, Promise<Availability>>();

export function getAvailability(icalUrl: string | undefined): Promise<Availability> {
  const key = icalUrl ?? '';
  if (!cache.has(key)) cache.set(key, load(icalUrl));
  return cache.get(key)!;
}

async function load(icalUrl: string | undefined): Promise<Availability> {
  const updated = new Date().toISOString();
  if (!icalUrl) return { synced: false, updated, booked: [] };
  try {
    const res = await fetch(icalUrl, { signal: AbortSignal.timeout(20_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { synced: true, updated, booked: parseIcs(await res.text()) };
  } catch (err) {
    // A failed sync must not break the build; the calendar then shows every date as open
    // and requests are confirmed by email as usual.
    console.warn(`[availability] Could not read the Airbnb calendar: ${(err as Error).message}`);
    return { synced: false, updated, booked: [] };
  }
}

/** Pull the date ranges out of an iCal file, merged and sorted, dropping anything already past. */
export function parseIcs(text: string): BookedRange[] {
  const lines = text.replace(/\r?\n[ \t]/g, '').split(/\r?\n/);
  const ranges: BookedRange[] = [];
  let start = '';
  let end = '';
  for (const line of lines) {
    if (line.startsWith('BEGIN:VEVENT')) start = end = '';
    else if (line.startsWith('DTSTART')) start = toDate(line);
    else if (line.startsWith('DTEND')) end = toDate(line);
    else if (line.startsWith('END:VEVENT') && start) {
      // An all-day event without DTEND lasts one night.
      ranges.push({ start, end: end && end > start ? end : addDays(start, 1) });
    }
  }

  const today = new Date().toISOString().slice(0, 10);
  const merged: BookedRange[] = [];
  for (const r of ranges.filter((r) => r.end > today).sort((a, b) => a.start.localeCompare(b.start))) {
    const last = merged.at(-1);
    if (last && r.start <= last.end) {
      if (r.end > last.end) last.end = r.end;
    } else merged.push({ ...r });
  }
  return merged;
}

function toDate(line: string): string {
  const m = line.slice(line.indexOf(':') + 1).match(/^(\d{4})(\d{2})(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : '';
}

function addDays(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
