# Authoring content

Essays and ventures are **MDX content collections**. One file per entry. Schemas are defined
in [`src/content.config.ts`](../content.config.ts) — if you add a frontmatter field, add it
there too.

## Add an essay (Writing)

Create `src/content/essays/<slug>.mdx`. The filename (without extension) is the URL slug:
`my-essay.mdx` → `/writing/my-essay`.

```mdx
---
title: My new essay
kicker: Essay              # listing label: Manifesto · Essay · Field note · Note
deck: One-line standfirst shown in the Writing list.
date: 2025-06-01           # YYYY-MM-DD
readTime: 8 min
status: published          # 'published' builds a page; 'upcoming' is a teaser card only
order: 0                   # lower sorts earlier in the list
featured: false            # true = the big flagship block (use on one essay only)
# Optional article-page overrides (fall back to kicker/deck):
pageKicker: Essay · A longer label for the article header
pageDeck: A longer standfirst shown on the article page itself.
coverCaption: Optional caption under the cover image.
coverPlaceholder: Cover image — supply later
tags: [Agency, Design ethics]
nextVenture: ongiini       # optional "Next:" foot link to a venture slug
---
import Icon from '@/components/Icon.astro';

<p class="art-lede-p">
  <span class="dropcap">F</span>irst paragraph. The first letter is the accent drop cap.
</p>

<p>A normal paragraph. Use <em>…</em> for emphasis.</p>

<h2 class="serif art-h2">A subhead</h2>

<blockquote class="art-quote">
  <Icon name="quote" size={28} cls="art-quote-mark" />
  <p class="serif">A pull quote that breaks out of the reading measure.</p>
</blockquote>

<ol class="art-list">
  <li><strong>A lead-in.</strong> Body of the numbered point.</li>
</ol>

<div class="art-sign"><span class="serif">— S.K.</span></div>
```

**Why the explicit classes?** The reading template's styling (drop cap, accent subheads,
counter list, pull quote) is keyed to those class names so it stays pixel-faithful to the
design. Copy the structure above for a new essay. A `status: upcoming` essay needs only the
frontmatter — its body is ignored until you flip it to `published`.

## Add a venture

Create `src/content/ventures/<slug>.mdx`.

```mdx
---
name: Venture Name         # shown in the home Ventures list
sub: optional sub-label    # e.g. "with Ongiini AI" / "Serviceplan Group"
role: Founder
years: 2024 —
thesis: Sovereignty        # Sovereignty | Trust | Intentionality (drives the pill)
heart: false               # true adds the accent "ethical heart" star
order: 0
status: upcoming           # 'published' builds /ventures/<slug>; 'upcoming' = "Detail coming"
blurb: One-paragraph description shown in the list.
# Detail-page fields (only needed when status: published) —
eyebrow: Parent org or context line
detailTitle: Detail-page H1 (falls back to name)
deck: Standfirst on the detail page.    # quote it if it contains a colon
coverPlaceholder: In context — supply later
facts:
  - { k: Founded, v: "2024" }
  - { k: Location, v: Namibia }
throughline: A closing line tying it back to the throughline.
relatedEssay: slow-intelligence         # optional "Read the thinking behind it" link
---
import Icon from '@/components/Icon.astro';

<section class="vp-section">
  <h2 class="serif vp-h2">What it is</h2>
  <div class="vp-prose">
    <p>…</p>
  </div>
</section>
```

## YAML gotcha

If a frontmatter value contains a colon followed by a space (e.g. `everything I believe: …`),
**wrap the whole value in double quotes** or YAML will fail to parse.
