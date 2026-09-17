# Blueprint Clean Co. — Website

Astro static site, built for deployment on Cloudflare Pages.

## Commands

| Command           | Action                                      |
| ------------------ | -------------------------------------------- |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Local dev server at `localhost:4321`        |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview the production build locally        |

## Deploying to Cloudflare Pages

1. Push this repo to GitHub/GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add the custom domain (`blueprintclean.com` / `www.blueprintclean.com`) under the Pages project's **Custom domains** tab.

## Still needs your input before launch

These are intentionally left as placeholders — swap them in, then rebuild/redeploy:

1. **Google Analytics 4** — `src/layouts/Layout.astro`, constant `GA_MEASUREMENT_ID`.
   - Create a GA4 property at [analytics.google.com](https://analytics.google.com), grab the Measurement ID (`G-XXXXXXXXXX`), paste it in.
2. **Google Search Console** — `src/layouts/Layout.astro`, constant `GSC_VERIFICATION`.
   - Add the property at [search.google.com/search-console](https://search.google.com/search-console), choose the **HTML tag** verification method, paste the content value in.
   - Once verified, submit `https://www.blueprintclean.com/sitemap-index.xml` under Sitemaps.
3. **Quote/booking form submissions** — `src/lib/site.ts`, constant `formEndpoint`.
   - Sign up free at [formspree.io](https://formspree.io), create a form, and paste its endpoint URL in (`https://formspree.io/f/xxxxxxx`). Until this is set, the quote form will not deliver submissions anywhere.
4. **Real Google/Facebook/Instagram URLs** — `src/lib/site.ts`, `social` object — add these once profiles are confirmed, and I can wire up footer/header icons.
5. **Contact phone/email** are already live: 629-932-6356 / savannah.s@sidonioenterprises.com. Flag me if either changes.

## SEO notes

- Every page has a unique title/description, canonical URL, Open Graph + Twitter card tags, and JSON-LD structured data (LocalBusiness, Service, FAQPage, Review schema).
- `robots.txt` and an auto-generated `sitemap-index.xml` are included (via `@astrojs/sitemap`).
- Core service pages (`/post-construction-cleaning/`, `/pre-listing-cleaning/`, `/move-in-move-out-cleaning/`, `/airbnb-turnover-cleaning/`) are dedicated landing pages targeting their own keyword clusters rather than folded into one page — this is deliberate for search visibility.
- Photos are processed through Astro's image pipeline at build time (auto WebP + responsive sizing) — large source photos in `src/assets/photos/` are fine to keep large; Astro compresses them.

## Content sourced from the old site

Copy, testimonials, and photos were pulled from the previous blueprintclean.com (Wix). Original full-resolution photos (including ones not used on the new site) are kept in `assets/photos/` at the project root for future use.
