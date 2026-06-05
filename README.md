# Sebastian Küpers — personal website

The personal brand & reputation site for **sebastian-kuepers.com** (English) and
**sebastian-kuepers.de** (German, planned). A calm, editorial, type-led site built
from a Claude Design hand-off (design tokens, type system, layout, and copy lifted
verbatim and reimplemented idiomatically).

Built with **[Astro](https://astro.build)** (static output) + **MDX** for the essay/venture
content pipeline, and deployed to **Cloudflare Pages**. No client framework — interactivity
is a few small vanilla-JS islands (sticky nav, mobile menu, language banner, newsletter form).

## Stack

| Concern        | Choice                                                         |
|----------------|----------------------------------------------------------------|
| Framework      | Astro 5, `output: 'static'`                                    |
| Content        | MDX content collections (`src/content/essays`, `.../ventures`) |
| Styling        | Plain CSS with design tokens (`src/styles/`), no framework     |
| Fonts          | Newsreader (serif) + Hanken Grotesk (UI), via Google Fonts     |
| Hosting        | Cloudflare Pages (static)                                      |

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
    404.astro
public/
  images/sebastian-portrait.jpg
  favicon.svg, robots.txt, _headers
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

English is authored. The nav **EN / DE** toggle currently reveals a dismissible banner
("Die deutsche Fassung folgt in Kürze…") — German content is a future task. The structure is
i18n-ready: when DE content is written, the natural next step is Astro's i18n routing
(`/` for EN, `/de/` for DE) with both domains pointing at the same Pages project and a
domain→locale rule. Until then, both domains serve the English build.

## Deploy — Cloudflare Pages

This is a static site; Cloudflare Pages serves `dist/` directly.

**One-time setup (Git integration — recommended):**

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick this repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** set env var `NODE_VERSION = 22` (or rely on `.nvmrc`).
4. **Custom domains** (Pages project → Custom domains): add `sebastian-kuepers.com` and
   `sebastian-kuepers.de` (and `www` variants if desired). Point the domains' DNS at
   Cloudflare and create the CNAME/records Pages prompts for.

`public/_headers` already sets long-cache for hashed assets and basic security headers.
`astro.config.mjs` `site` is the canonical `.com` — update it if the canonical domain changes.

**Direct upload (alternative):** `npm run build` then `npx wrangler pages deploy dist`.

## Still to do (from the hand-off)

- Real photography for the placeholder (`.ph`) blocks: essay/venture covers, sizzle-reel
  still, the "boat" image, article-card covers. Briefed as real, human, natural-material
  imagery — never abstract tech/stock.
- Wire the newsletter form ("The Drift Letter") to a real provider — see the marked
  integration point in `src/components/Newsletter.astro`.
- Fill in real outbound URLs in `src/site.ts` (`SOCIAL`: LinkedIn, Leading Minds, CIF).
- German content + i18n routing.
- Optional: dark-mode toggle; the remaining standalone pages (About/Vita, Speaking, Contact)
  reuse the existing patterns.
```
