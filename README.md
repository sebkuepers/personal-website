# Sebastian Küpers — personal website

The personal brand & reputation site for **sebastian-kuepers.com** (English) and
**sebastian-kuepers.de** (German, planned). A calm, editorial, type-led site built
from a Claude Design hand-off (design tokens, type system, layout, and copy lifted
verbatim and reimplemented idiomatically).

Built with **[Astro](https://astro.build)** (static output) + **MDX** for the essay/venture
content pipeline, served by a **Cloudflare Worker with static assets**. No client framework — interactivity
is a few small vanilla-JS islands (sticky nav, mobile menu, language banner, newsletter form).

## Stack

| Concern        | Choice                                                         |
|----------------|----------------------------------------------------------------|
| Framework      | Astro 5, `output: 'static'`                                    |
| Content        | MDX content collections (`src/content/essays`, `.../ventures`) |
| Styling        | Plain CSS with design tokens (`src/styles/`), no framework     |
| Fonts          | Newsreader (serif) + Hanken Grotesk (UI), self-hosted (Fontsource) |
| Hosting        | Cloudflare Worker + static assets (`wrangler.jsonc`, `worker/`) |
| Newsletter     | MailerLite via `POST /api/subscribe` (double opt-in)           |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # serve the production build locally
npm run check    # astro check (types + template diagnostics)
```

Requires Node 18+ (see `.nvmrc` → 22).

## Project structure

```
src/
  layouts/BaseLayout.astro     Document shell: head/meta/OG, fonts, Nav, Footer
  components/                  Icon, Wordmark, Nav, Newsletter, Footer
  data/home.ts                 Static home-section copy (principles, topics, threads)
  site.ts                      Site metadata, nav links, footer columns, social URLs
  lib/icons.ts                 Inline-SVG icon set (lucide-style)
  content.config.ts            Collection schemas (essays, ventures)
  content/
    essays/*.mdx               Writing — one MDX file per essay
    ventures/*.mdx             Ventures — one MDX file per venture
  styles/                      global, components, home, article, venture CSS
  pages/
    index.astro                Home (hero, thesis, writing, ventures, speaking, beyond)
    writing/index.astro        Writing archive
    writing/[slug].astro       Essay reading template
    ventures/[slug].astro      Venture detail template
    impressum.astro, datenschutz.astro   German legal pages (noindex)
    rss.xml.ts                   RSS feed of published essays
    404.astro
worker/index.js                Canonical-host 301s + /api/subscribe → MailerLite
public/
  images/  sebastian-portrait.jpg, og-default.jpg (1200×630 share card), covers/
  favicon.ico, favicon-32.png, icon-192.png, apple-touch-icon.png, robots.txt, _headers
```

See [`src/content/README.md`](./src/content/README.md) for how to add essays and ventures.

## Design system

Design tokens (colour, type scale, spacing, motion) are lifted verbatim from the hand-off
and live in `src/styles/global.css` (`:root`). The aesthetic is paper-and-ink with one
maritime accent (`--accent-base: #2a5446`, deep sea-green). Hierarchy comes from **hairline
borders and surface shifts, not shadows**.

**Light mode only at launch.** The dark ("Ink") token block (`[data-theme="dark"]`) is kept
in `global.css` so a user-facing theme toggle can be added later with no restructuring — it
just needs a control that sets `data-theme="dark"` on `<html>` plus a flash-prevention script.

## Bilingual (EN / DE)

English is authored. The nav **EN / DE** toggle is hidden (`SITE.showLanguageToggle` in
`src/site.ts`) until German content exists. When it does, the natural next step is Astro's i18n
routing (`/` for EN, `/de/` for DE). Until then the Worker 301s `sebastian-kuepers.de` (and the
`www` variants) to the canonical `.com`.

## Deploy — Cloudflare Worker

Pushing to `main` auto-deploys via Cloudflare Workers Builds (`npm run build` → `wrangler deploy`).
`wrangler.jsonc` serves `dist/` through the `ASSETS` binding with `run_worker_first`, so the Worker
can redirect alias hosts; everything else is passed straight to the static assets
(`public/_headers` and the 404 page still apply).

- **Secret:** `MAILERLITE_API_KEY` (Worker → Settings → Variables and Secrets, type *Secret*).
- **Custom domains:** `sebastian-kuepers.com`, `sebastian-kuepers.de` and both `www` variants are
  attached as Custom Domains (Worker → Settings → Domains & Routes — not hand-edited DNS). The
  aliases 301 to the apex `.com` in `worker/index.js`.
- **Local test of the Worker:** `npm run build && npx wrangler dev`.

`astro.config.mjs` `site` is the canonical `.com` — update it if the canonical domain changes.

## Legal & privacy

`/impressum` and `/datenschutz` (German, noindex) read their details from `LEGAL` in
`src/site.ts`. The site sets **no cookies and loads nothing from third parties** (fonts are
self-hosted), so no consent banner is needed. If analytics or embeds are ever added, update the
Datenschutz page and add a consent gate first (telsche.blog has a working pattern).

## Still to do

- Remaining photography: an image for the Masumi page, a sizzle reel (the Speaking section links
  to the DLD 2025 panel until then), optionally a boat image for "Beyond the work".
- The three "In progress" essays and the Plan.Net Studios venture page.
- German content + i18n routing.
- Optional: dark-mode toggle; standalone About/Vita, Speaking and Contact pages.
