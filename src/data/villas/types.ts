import type { ImageMetadata } from 'astro';
import type { Locale } from '../../i18n';

export type PhotoCategory =
  | 'pool'
  | 'garden'
  | 'terrace'
  | 'living'
  | 'kitchen'
  | 'bedroom'
  | 'bathroom'
  | 'aerial';

export interface Photo {
  src: ImageMetadata;
  category: PhotoCategory;
}

export interface VillaText {
  name: string;
  tagline: string;
  /** One or two sentences for cards and meta descriptions. */
  summary: string;
  intro: string[];
  highlights: string[];
  rooms: { title: string; text: string }[];
  outdoors: string[];
  amenitiesInside: string[];
  amenitiesOutside: string[];
  included: string[];
  onRequest: string[];
  distances: { place: string; distance: string }[];
  faq: { q: string; a: string }[];
  photoCategories: Record<PhotoCategory, string>;
}

export interface Villa {
  slug: string;
  /** Position on the homepage and in menus. */
  order: number;
  airbnbUrl: string;
  /** Private Airbnb iCal export link (Availability → Sync calendars → Export). Read from an env variable. */
  ical?: string;
  coords: { lat: number; lng: number };
  /** The villa's own Google Maps place page. */
  mapsUrl: string;
  stats: { bedrooms: number; bathrooms: number; guests: number; interiorM2: number; plotM2: number };
  checkIn: string;
  checkOut: string;
  hero: ImageMetadata;
  card: ImageMetadata;
  /** Photos shown in the editorial mosaic near the top of the villa page. */
  featured: ImageMetadata[];
  /** Morning, afternoon and evening photos for "A day at Belle Helene". */
  moments: [ImageMetadata, ImageMetadata, ImageMetadata];
  gallery: Photo[];
  text: Record<Locale, VillaText>;
}
