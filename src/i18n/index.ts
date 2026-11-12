import { ui, type UIStrings } from './ui';

export const locales = ['en', 'el', 'de', 'fr', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  el: 'Ελληνικά',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
};

/** Locales other than the default, which live under a /{locale}/ prefix. */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale);

export function t(locale: Locale): UIStrings {
  return ui[locale];
}

/** Build a URL for `path` (locale-neutral, e.g. "/explore/") in the given locale. */
export function localizePath(locale: Locale, path = '/'): string {
  const clean = '/' + path.replace(/^\/+/, '');
  return locale === defaultLocale ? clean : `/${locale}${clean === '/' ? '/' : clean}`;
}

/** Strip a locale prefix from a pathname, giving the locale-neutral path. */
export function neutralPath(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && (prefixedLocales as readonly string[]).includes(parts[0])) parts.shift();
  return '/' + parts.join('/') + (parts.length ? '/' : '');
}

export function getStaticLocalePaths() {
  return prefixedLocales.map((lang) => ({ params: { lang } }));
}
