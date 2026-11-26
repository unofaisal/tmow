# The Minister of Wellness: React site

Vite + React 18 + React Router 6.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs /dist
```

## Routes
Every navbar/dropdown link has its own destination:

| Area | Routes |
| --- | --- |
| Home / story | `/` · `/about` |
| Wellness | `/wellness` · `/wellness/nutrition` · `/wellness/journey` · `/wellness/education` |
| Coaching | `/coaching` (enquiry form at `/coaching#enquire`) |
| Teachings | `/teachings` · `/teachings/video-series` · `/teachings/interviews-podcasts` · `/teachings/messages` · `/events` |
| Shop | `/shop` · `/shop/category/:category` · `/shop/:slug` |
| Other | `/give` · `*` (404) |

The shop's search, sort and "saved only" filters live in the query string (`/shop/category/packages?q=bundle&sort=az&saved=1`),
so any filtered view can be bookmarked or shared.

Hosting note: this is a single-page app using clean URLs, so the host must serve `index.html` for unknown paths
(Netlify: `/* /index.html 200` in `_redirects`; Vercel: a rewrite to `/index.html`).

## Where to edit
- `src/data.js`: nav, wellness topics, teaching groups, shop categories, products, teachings, giving methods, images.
  Start here for content changes; adding an entry to `WELLNESS_TOPICS`, `TEACHING_GROUPS` or `SHOP_FILTERS` creates its page.
- `SITE.preview` in `src/data.js`: `true` shows the preview banner and "preview only" messages on forms.
  Set to `false` when the site goes live.
- Newsletter (`components/Newsletter.jsx`) and coaching enquiry (`pages/Coaching.jsx`) have a `TODO` where the real
  submit call belongs. Nothing is sent anywhere until you add it.
- `SOCIALS` in `src/data.js` still has `#` placeholders for Facebook, Instagram and LinkedIn.

## Styles
- `styles.css`: tokens, base, buttons, hero, newsletter, footer
- `nav.css`: top strip, header, mega menu, mobile nav
- `components.css`: section headers, product + teaching cards, tabs, testimonial
- `home.css`: home sections, path cards, events page cards
- `shop.css`: shop banner, filter sidebar / mobile drawer, results bar
- `pages.css`: inner-page layouts, forms, FAQ, give
