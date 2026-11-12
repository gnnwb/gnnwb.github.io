# Belle Helene Villas

Static website for Belle Helene Villas (villabellehelene.gr), built with [Astro](https://astro.build) and deployed to GitHub Pages.

Languages: English (default, at `/`), Greek `/el/`, German `/de/`, French `/fr/`, Italian `/it/`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

## Where things live

| What | File |
|---|---|
| Phone, email, social links, form key | `src/data/site.ts` |
| Villa content (all languages), photos, amenities | `src/data/villas/<slug>.ts` |
| Villa photos | `src/assets/villas/<slug>/` |
| Area guide (Explore Crete) | `src/data/explore.ts` |
| Interface text (menus, buttons, home page copy) | `src/i18n/ui.ts` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Old WordPress URL redirects | `astro.config.mjs` |

## Adding a new villa

1. Put its photos in `src/assets/villas/<new-slug>/`.
2. Copy `src/data/villas/belle-helene.ts` to `src/data/villas/<new-slug>.ts`, change `slug`, `order`, `airbnbUrl`, `coords`, `stats`, the photo names and the text in each language.
3. That's it: the home page, menu, footer and sitemap pick it up automatically, in all five languages.

## Contact form

The form uses [Web3Forms](https://web3forms.com) (free). Create an access key for `info@villabellehelene.gr` and paste it into `web3formsKey` in `src/data/site.ts`. Until then, the form opens the visitor's email app with the message pre-filled.

## Deploying

Every push to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Moving the domain

1. GitHub: **Settings → Pages → Custom domain** → `villabellehelene.gr`, then tick **Enforce HTTPS** once the certificate is issued.
2. At the domain registrar, change **only the website records**:
   - `A` records for `villabellehelene.gr` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `gnnwb.github.io`
3. Leave the `MX` (and any `TXT`/SPF) records untouched so `info@` email keeps working.
