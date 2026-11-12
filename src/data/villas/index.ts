import type { Villa } from './types';

// Every villa lives in its own file in this folder (e.g. belle-helene.ts) and
// exports `villa` as default. New files are picked up automatically.
const modules = import.meta.glob<{ default: Villa }>('./*.ts', { eager: true });

export const villas: Villa[] = Object.entries(modules)
  .filter(([path]) => !/\/(index|types)\.ts$/.test(path))
  .map(([, mod]) => mod.default)
  .sort((a, b) => a.order - b.order);

export function getVilla(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}

export const villaPath = (slug: string) => `/villas/${slug}/`;

export type { Villa, VillaText, Photo, PhotoCategory } from './types';
