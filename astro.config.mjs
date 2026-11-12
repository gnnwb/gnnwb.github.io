// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const villa = '/villas/belle-helene/';

export default defineConfig({
  site: 'https://villabellehelene.gr',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', el: 'el', de: 'de', fr: 'fr', it: 'it' },
      },
    }),
  ],
  // Old WordPress URLs, kept alive so search rankings and bookmarks survive the move.
  redirects: {
    '/the-villa': villa,
    '/facilities-services': villa,
    '/blog': '/explore/',
    '/aquarium-of-crete-cretaquarium': '/explore/',
    '/hersonissos-crete-beaches': '/explore/',
    '/top-tourist-attractions-heraklion': '/explore/',
    '/category/luxury-villa-for-rent-heraklion': '/',
    '/guest-book': '/contact/',
    '/site-map': '/',
    '/sample-page': '/',
  },
});
