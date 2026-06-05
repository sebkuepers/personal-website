# Handoff: Sebastian Küpers — Personal Site

## Overview

A calm, editorial, high-craft **personal brand & reputation platform** for Sebastian Küpers — founder, advisor, and writer on the agentic economy and AI sovereignty. Its job: make a senior decision-maker (or their assistant) think *"this is the person we want in the room"* within thirty seconds, and give them an easy way to act on it. It sits **upstream** of his speaker-agency profile (Leading Minds) — the place where the depth, the breadth, and the person come through.

The throughline that unifies everything: **he builds AI that strengthens human agency rather than eroding it — sovereignty, trust, and intentionality as the design principles for an age of autonomous systems.**

The design is deliberately **not** "AI startup." No neon gradients, glowing orbs, circuit motifs, or particle networks. It reads like a serious essay publication crossed with a design-forward founder's journal: paper-and-ink, type-led, generous whitespace, one restrained maritime accent.

## About the Design Files

The files in `src/` are a **design reference created in HTML + React (via in-browser Babel)** — a working prototype showing the intended look, copy, and behavior. **They are not production code to ship directly.** The Babel-in-the-browser setup, the global `window` component exports, and the `?v=N` cache-busting query strings are prototype scaffolding, not patterns to carry forward.

Your task is to **recreate these designs in a real environment**. If a codebase already exists, use its established framework, component patterns, and conventions. If none exists yet, the natural target is **Next.js (App Router) + React + TypeScript**, with a real CSS solution (CSS Modules, vanilla-extract, or Tailwind configured to the tokens below) and an MDX-backed article pipeline so Sebastian can publish essays over time. Either way: lift the **exact** design tokens, type system, layout, and copy — but implement them idiomatically.

## Fidelity

**High-fidelity (hifi).** Final colors, typography, spacing, layout, interactions, and copy are all here and intentional. Recreate the UI faithfully. The exact hex values, font families, type scale, and spacing rhythm are specified in **Design Tokens** below and are authoritative.

Two things to know:
- The prototype's entrance motion is intentionally **transform-only (content always at `opacity: 1`)** and theme switching is **instant (no transition)**, because the preview environment this was built in pauses CSS animations/transitions. In a real browser you may reintroduce a gentle opacity fade-in on scroll (e.g. IntersectionObserver) and a smooth theme transition — just ensure content is **never** left hidden if animations don't run, and respect `prefers-reduced-motion`.
- All photography except the portrait is a **labeled placeholder** (`.ph` blocks). Real assets to be supplied by Sebastian.

## Information Architecture

The prototype implements **three views** of a larger proposed site, navigated client-side (no full page reloads) so the Tweaks panel state persists across them:

1. **Home** (`home.jsx`) — single scrolling page, sections: Hero → Credibility strip → Thesis → Writing → Ventures → Speaking → Beyond the work → Newsletter → Footer. The top-nav links (About / Writing / Ventures / Speaking / Contact) scroll to the relevant section on Home rather than loading separate pages (these are stubs for future standalone pages).
2. **Article** (`article.jsx`) — the flagship "Slow Intelligence" reading template.
3. **Venture detail** (`venture.jsx`) — the Ongiini AI case study.

Proposed full architecture (not all built yet): Home · About/Vita · Writing (archive + article template ✓) · Ventures (overview + detail ✓) · Speaking · Contact. Build the three views first; the rest reuse these patterns.

---

## Screens / Views

### 1. Home

**Purpose:** Land the positioning instantly and offer two conversion paths — "Work with me" (advisory) and "Read my thinking" (writing).

**Global chrome (all views):**

- **Top nav** (`Nav` in `components.jsx`, styles in `components.css`): sticky, transparent at top, gains an 86%-opacity paper background + blur + bottom hairline after 24px scroll. Left: wordmark (a small inline-SVG compass/anchor mark in accent + name "Sebastian Küpers" in display serif, with an uppercase micro-label "Agentic economy · advisory"). Center: text nav links. Right: an EN/DE language toggle, a primary "Work with me" button, and (under 880px) a hamburger that opens a full-width sheet with serif links. Active nav link gets a 1.5px accent underline.
- **Language toggle:** EN is authored. Selecting DE shows a dismissible accent-tinted banner ("Die deutsche Fassung folgt in Kürze…") — German content is a future task; structure should support it (i18n-ready).
- **Footer** (`Footer` in `components.jsx`): two-tier. Top: wordmark + thesis line on the left, three link columns (Explore / Work together / Elsewhere) on the right. Bottom: copyright + "Made slowly · Hamburg & at sea". Background `--paper-2`, top hairline.

**Sections, top to bottom:**

**Hero** (`Hero` in `home.jsx`, `.hero*` in `home.css`) — has **three layout variants** (a Tweak; default = `split`):
- `split`: two columns (1.15fr text / 0.85fr portrait). Eyebrow "Architect of the agentic economy" (uppercase, accent) → mega serif headline → lead paragraph → two CTAs. Portrait is a 4:5 image. Under 860px collapses to one column, portrait on top at 16:10.
- `stacked`: full-width eyebrow + extra-large headline, then a row of lead + CTAs, then a wide 21:9 portrait below.
- `overlay`: full-bleed portrait with a semi-transparent blurred paper card (max 40rem) laid over the bottom-left holding the hero copy.
- **Headline copy:** "I build AI that *widens* human agency — not the kind that quietly trades it away." The word "widens" is italic + accent-colored.
- **Lead copy:** "Founder, advisor, and writer working at the front edge of autonomous systems. I help companies and institutions adopt AI without surrendering the judgment, sovereignty, and intent that make them worth trusting."
- **CTAs:** Primary (accent fill) "Work with me" → contact; Ghost (hairline border) "Read my thinking" → writing.

**Credibility strip** (`Credibility`) — eyebrow "Currently" + an inline middot-separated list in display serif: "Founder, Sokosumi · Common Intelligence Foundation · Masumi Network · Plan.Net Studios · Serviceplan Group". Separators are accent-colored. Reads as curated, **not** a logo wall.

**Thesis** (`Thesis`) — eyebrow "The throughline" → a large display-serif statement ("One idea runs under everything I build: technology should widen human agency, not quietly trade it away for convenience.") → a 3-column grid (top hairline) of principles: **Sovereignty**, **Trust**, **Intentionality**. Each: a 22px accent icon (shield / compass / waves), an uppercase micro-label, a 1.5rem serif one-liner, and a 14px description. Collapses to stacked rows under 820px.

**Writing** (`Writing`) — background `--paper-2`. Section head ("Writing" / "The heartbeat of the work." + an "All essays" link). Then a **flagship block**: a 2-col button (5:4 cover placeholder / body). Body: meta line with accent dot ("Manifesto · 14 min · March 2025"), large serif title "Slow Intelligence", lead deck, "Read the manifesto" link. Clicking navigates to the Article view. Below: a 3-column row of smaller article cards (kicker · read-time, serif title, deck, date), separated by hairlines; title turns accent on hover.

**Ventures** (`Ventures`) — section head ("Ventures & projects" / "A coherent body of work." + a note). A vertical list (hairline-separated rows), each: a tabular index ("01"), the venture name in serif (with optional italic sub-label), a pill "thesis tag" (Sovereignty / Trust / Intentionality) in accent outline, a lead-size blurb, and a footer row (role · years + either a "Read the story" link for Ongiini or a muted "Detail coming"). Row tints to `--paper-2` on hover. Ongiini carries a small accent star icon (the "ethical heart" marker).

**Speaking** (`Speaking`) — 2-col. Left: eyebrow + title ("Bring the agentic economy into the room — without the hype.") + lead + a hairline-separated topics list (each with a mic icon) + CTA row ("Book me to speak" primary + a note "Speaking is booked through **Leading Minds**."). Right: a 16:10 sizzle-reel placeholder with a round accent play button, plus a 3-up stats row (Stages / Formats / Languages).

**Beyond the work** (`Beyond`) — the human layer; **prominence is a Tweak** (`subtle` / `balanced` / `prominent`, default `balanced`):
- `subtle`: a single quiet row — anchor icon + one serif sentence.
- `balanced`: section head + a 3-column "threads" grid: **Sailing**, **Mechanical watches**, **An engineer's home** (icon, serif title, description).
- `prominent`: adds a 21:8 full-bleed "the boat" image above the threads and a closing serif paragraph about skateboarding/climbing/family below.

**Newsletter** (`Newsletter`, variant `band`) — full-width **accent-filled** band. Left: eyebrow "The Drift Letter" + serif title + sub. Right: email form (label, input + "Subscribe" button, fine print). On submit, swaps to a confirmation state with a feather icon. (Prototype is client-only; wire to a real list provider.)

### 2. Article — "Slow Intelligence" (`article.jsx`, `article.css`)

**Purpose:** The crown jewel — a genuinely beautiful long-form reading experience. A board member should read two paragraphs and think "depth, judgment, trustworthy."

- **Back link** ("← Writing"), then a **header** (max 52rem): accent eyebrow "Manifesto · The flagship essay", an enormous serif title ("Slow Intelligence", `clamp(3rem, 8vw, 6.5rem)`, line-height 0.98), a serif deck, and a **byline** (round portrait avatar + name/role on the left; "March 2025 · 14 min read" on the right, separated by a top hairline).
- **Cover:** a 21:9 placeholder (`.art-cover`) at page width, with an italic-free caption.
- **Body** (max **40rem** — the reading measure): set in the **serif reading face** at `--t-read` (1.275rem) / line-height 1.66. Opens with a **drop cap** (float-left, display serif, accent, ~4.6rem). Includes `<h2>` subheads in serif, a **pull quote** (`.art-quote` — quote-mark icon + large serif, breaks out of the measure), and a **numbered list** (`.art-list` — CSS counters rendered as accent `01 / 02 / 03`). Ends with an em-dash signature "— S.K."
- **Foot:** "Filed under" + tag pills (top & bottom hairline), and a "Next: …Ongiini" link → Venture view.
- Newsletter band repeats at the bottom.

### 3. Venture detail — Ongiini AI (`venture.jsx`, `venture.css`)

**Purpose:** The emotional and ethical heart of the portfolio — AI sovereignty made concrete.

- **Back link** ("← Ventures"), **header** (max 52rem): a top row with eyebrow "Common Intelligence Foundation" + a "Sovereignty" pill, a big serif title "Ongiini AI", and a serif deck.
- **Cover:** 21:9 placeholder.
- **Facts strip:** a 4-up `<dl>` (top & bottom hairline) — Founded 2024 · Location Namibia · Language Oshiwambo first · Access Free · via WhatsApp. Labels in meta/UI, values in serif. Two columns under 620px.
- **Body** (max 44rem): sections "What it is" / "Why it matters" / "How it holds to the principle", serif prose, a pull quote ("Where intelligence lives, and in whose language it speaks, decides who stays capable."), and a 3-item principles list (Non-extractive / Language-preserving / In-country by design) with uppercase accent sub-labels.
- **Foot card:** a `--paper-2` bordered card — eyebrow "The throughline" + a large serif line tying it back to Slow Intelligence + a "Read the thinking behind it" link → Article view.
- Newsletter band at the bottom.

---

## Interactions & Behavior

- **Client-side view switching** (`app.jsx`): a tiny router maps view ids → one of three components (`home` / `article` / `venture`). Section-targeting nav ids (about/writing/ventures/speaking/contact) resolve to Home + a scroll target. In a real app, make these **real routes** (`/`, `/writing/slow-intelligence`, `/ventures/ongiini`, plus future `/about`, `/speaking`, `/contact`) and the Home section links anchor-scroll.
- **Sticky nav** gains background/blur/border past 24px scroll.
- **Hover states:** nav links darken; the active link shows an accent underline; ghost button border darkens to ink; primary button darkens to `--accent-deep`; the `.link-u` editorial link has an animated left-to-right accent underline (background-size transition) and its arrow icon nudges right; venture rows tint to `--paper-2`; article-card titles turn accent; the round reel play button scales to 1.06.
- **Buttons** use `white-space: nowrap` and a 2px radius. Arrow icons inside translate +3px on hover.
- **Newsletter** submit → confirmation state (client-only in prototype).
- **Language toggle** → dismissible banner; default content English.
- **Entrance motion:** `.reveal` elements rise 16px via a transform-only keyframe with staggered `animation-delay` (`.d1`–`.d4`); **opacity stays 1** so content is never hidden. Disabled under `prefers-reduced-motion`.
- **Responsive:** every multi-column section collapses to single column at its own breakpoint (820–880px range); nav switches to a hamburger sheet at 880px; type scales fluidly via `clamp()`. Must be flawless on mobile — organizers and assistants browse on phones.
- **Accessibility:** semantic landmarks (`header`/`main`/`footer`/`section` with `aria-label`s), `:focus-visible` outlines (2px accent, 3px offset), `aria-expanded` on the menu button, alt text on images, sufficient contrast in both themes.

## State Management

The prototype's state is intentionally minimal:
- **`view`** — current view id (replace with the router in a real app).
- **`lang`** — `'EN' | 'DE'` (lift to an i18n provider / locale routing).
- **Tweak state** (`useTweaks` in `tweaks-panel.jsx`) — `mode`, `serif`, `accent`, `heroLayout`, `personal`. **This is prototype-only tooling** (a live design-exploration panel). In production, **drop the Tweaks panel entirely** and bake in the chosen values: **Paper (light) + dark mode toggle if desired, Newsreader serif, `#2a5446` accent, `split` hero, `balanced` personal layer** — unless Sebastian has chosen otherwise. Keep light/dark as a real user-facing theme if wanted; the token structure already supports it.
- **Newsletter** — local `email` + `submitted` flag → replace with a real subscription API.

The Tweak values drive three document-level properties (see `app.jsx` effect): `data-theme` on `<html>`, `--accent-base`, and `--font-display`. If you keep a light/dark toggle, reuse the `data-theme="dark"` token block in `styles.css`.

## Design Tokens

All defined in `styles.css` `:root` (and a `[data-theme="dark"]` override block). **These are authoritative.**

### Color — Light ("Paper")
| Token | Value | Use |
|---|---|---|
| `--paper` | `#f5f3ec` | Page surface (warm off-white) |
| `--paper-2` | `#efece2` | Recessed bands / cards (Writing, Speaking, footer) |
| `--paper-3` | `#e7e3d6` | Deepest plate / image placeholder base |
| `--ink` | `#1c1b16` | Primary text (warm near-black) |
| `--ink-2` | `#4b483f` | Secondary text |
| `--ink-3` | `#837e70` | Tertiary / meta / captions |
| `--line` | `rgba(28,27,22,0.14)` | Hairline rules |
| `--line-soft` | `rgba(28,27,22,0.08)` | Softer dividers |
| `--on-accent` | `#f5f3ec` | Text on accent fills |

### Color — Dark ("Ink")
`--paper #15140f` · `--paper-2 #1d1b15` · `--paper-3 #26241c` · `--ink #f0ece0` · `--ink-2 #c4bfb0` · `--ink-3 #8d8775` · `--line rgba(240,236,224,0.16)` · `--line-soft rgba(240,236,224,0.08)` · `--on-accent #14130f`. In dark mode the accent is **lightened** via `color-mix` so it stays legible on ink.

### Accent (the single confident color)
Driven by **`--accent-base`** (default **`#2a5446`**, a deep sea-green). Derived: `--accent` (= base in light; lightened in dark), `--accent-deep` (hover, darker in light), `--accent-tint` (faint wash). The four maritime options offered: **`#2a5446` deep sea-green** (default) · `#1f3a4d` ink-navy · `#8a6a3a` oxidized brass · `#415a64` slate. Pick one; the accent should be used **sparingly and meaningfully** — eyebrows, the italic hero word, icons, links, the newsletter band, separators.

### Typography
- **Display / headlines & long-form reading:** **Newsreader** (Google Fonts; weights 300/400/500/600, italics, optical sizing `opsz 6..72`). Fallback `Georgia, 'Times New Roman', serif`. `--font-display` and `--font-read` both point here.
  - Alternate display faces wired as Tweak options (each loaded from Google Fonts): **Spectral**, **Playfair Display**, **Instrument Serif**. Ship with Newsreader unless told otherwise.
- **UI / labels / meta / nav / buttons:** **Hanken Grotesk** (Google Fonts; 400/500/600/700). Fallback `system-ui, -apple-system, 'Segoe UI', sans-serif`. `--font-ui`.
- **Display style:** weight 400, line-height ~1.04, letter-spacing `-0.02em`, `text-wrap: balance`.
- **Eyebrow:** UI font, 0.75rem, weight 600, `letter-spacing 0.16em`, uppercase, `--ink-3` (or accent).
- **Lead/deck:** reading serif, weight 300, fluid size, line-height 1.5, `text-wrap: pretty`.
- **Type scale (clamps):** `--t-mega clamp(2.9rem,6.4vw,5.6rem)` · `--t-h1 clamp(2.4rem,5vw,4rem)` · `--t-h2 clamp(1.9rem,3.4vw,2.9rem)` · `--t-h3 clamp(1.4rem,2.2vw,1.85rem)` · `--t-lead clamp(1.18rem,1.7vw,1.5rem)` · `--t-body 1.0625rem` · `--t-read 1.275rem` · `--t-sm 0.9375rem` · `--t-xs 0.8125rem` · `--t-eyebrow 0.75rem`.
- **Reading measure:** `--measure 38rem` (article body capped at 40rem, venture body 44rem).

### Spacing, layout, shape, motion
- **Spacing ramp:** `--s-1 0.5rem` · `--s-2 1rem` · `--s-3 1.5rem` · `--s-4 2rem` · `--s-5 3rem` · `--s-6 4.5rem` · `--s-7 6.5rem` · `--s-8 9rem`. Section vertical padding = `--s-7` (`.section`) / `--s-6` (`.section-sm`).
- **Widths:** `--maxw 78rem` (default), `--maxw-wide 90rem` (full-bleed rows), page gutter `--gut clamp(1.25rem,5vw,4.5rem)`.
- **Radius:** conservative. Buttons/inputs/covers 2px; cards 3px; pills/avatars/round buttons 999px.
- **Elevation:** **borders, not shadows.** Hierarchy comes from 1px hairlines (`--line`) and `--paper-2/3` surface shifts. The nav blur is the only "lifted" effect.
- **Motion easing:** `--ease cubic-bezier(0.22,0.61,0.36,1)`. Transitions ~0.15–0.25s on hover; entrance ~0.8s transform-only. **Minimal and purposeful** — nothing that draws attention to itself.
- **Selection:** accent background, `--on-accent` text.

## Iconography

Custom inline-SVG set in `components.jsx` (`ICON_PATHS` + `<Icon>`), drawn in a **Lucide-compatible** style (24×24, 1.7 stroke, round caps/joins, `currentColor`). Names used: arrowRight, arrowUpRight, anchor, compass, mail, menu, close, sun, moon, quote, feather, globe, mic, shield, network, waves, watch, home2, download, star. In a real codebase, swap to **`lucide-react`** (most names map directly: `Anchor`, `Compass`, `Waves`, `Mic`, `Shield`, `Quote`, `Feather`, `Globe`, `Watch`, `Home`, `ArrowRight`, etc.). Keep sizes 16px in buttons/nav, 20–24px in cards/section heads. **No emoji.**

## Assets

| Asset | Status | Notes |
|---|---|---|
| `images/sebastian-portrait.jpg` | **Real** (provided) | Used in hero (all layouts) + article byline avatar. `object-fit: cover; object-position: center 22%`. A higher-res version is welcome. |
| Article cover, venture cover, Ongiini-in-context, sizzle-reel still, "the boat" image, article-card covers | **Placeholders** (`.ph` blocks with labels) | To be supplied by Sebastian. Brief calls for real, well-shot, human, natural-material imagery (water, light, craft) — never abstract tech/stock. |

No third-party logos are used (deliberately — no logo wall).

## Files (in `src/`)

| File | Contents |
|---|---|
| `Sebastian Küpers.html` | Entry point — loads fonts, CSS, React + Babel (prototype only), and the JSX modules. |
| `app.jsx` | Root: view router, language state, Tweak→token wiring, Tweaks panel definition. |
| `components.jsx` | Icon set, `useReveal`, `Wordmark`, `Nav`, `Newsletter`, `Footer`, nav links. |
| `home.jsx` | All Home sections + the page data (principles, articles, ventures, topics, threads). |
| `article.jsx` | "Slow Intelligence" reading template + full essay copy. |
| `venture.jsx` | Ongiini AI venture detail + copy. |
| `tweaks-panel.jsx` | **Prototype tooling — do not ship.** The design-exploration panel + `useTweaks`. |
| `styles.css` | Global: tokens (`:root` + dark), reset, type primitives, buttons/links, placeholders, reveal, focus. |
| `components.css` | Nav, language banner, newsletter, footer. |
| `home.css` | All Home section styles + hero variants. |
| `article.css` | Article reading template. |
| `venture.css` | Venture detail. |

## Voice & tone (for any new copy)

Calm, precise, confident, unhurried. **No hype, no exclamation marks, no buzzword soup.** Authority comes from clarifying complexity, not mystifying it. Sentence case everywhere except the uppercase eyebrow labels. The copy should feel like it has nothing to prove. Reuse the existing copy verbatim where present — it's final.
