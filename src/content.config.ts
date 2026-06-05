import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Essays — the "Writing" pipeline. Each essay is an MDX file in
 * src/content/essays/. `status: 'published'` essays get a standalone reading
 * page at /writing/<slug>; `status: 'upcoming'` ones appear as teaser cards in
 * the Writing list and link to the archive until written.
 */
const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(), // listing kicker, e.g. "Manifesto" · "Essay" · "Field note"
    deck: z.string(), // short deck shown in the Writing list
    date: z.coerce.date(),
    readTime: z.string(), // e.g. "14 min"
    featured: z.boolean().default(false), // the flagship block
    status: z.enum(['published', 'upcoming']).default('published'),
    order: z.number().default(0), // lower = earlier in the list
    authorRole: z.string().default('Founder & writer'),
    // Article-page header overrides (fall back to the listing kicker/deck):
    pageKicker: z.string().optional(), // e.g. "Manifesto · The flagship essay"
    pageDeck: z.string().optional(), // longer standfirst on the article page
    coverCaption: z.string().optional(),
    coverPlaceholder: z.string().default('Cover image — supply later'),
    tags: z.array(z.string()).default([]),
    // Optional pointer to a related venture slug for the "Next:" foot link.
    nextVenture: z.string().optional(),
  }),
});

/**
 * Ventures — the "Ventures & projects" list and detail pages. All ventures
 * appear in the home list; only `status: 'published'` ones get a detail page at
 * /ventures/<slug> (the rest render a muted "Detail coming").
 */
const ventures = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ventures' }),
  schema: z.object({
    name: z.string(),
    sub: z.string().optional(),
    role: z.string(),
    years: z.string(),
    thesis: z.enum(['Sovereignty', 'Trust', 'Intentionality']),
    heart: z.boolean().default(false), // the "ethical heart" accent star
    blurb: z.string(),
    order: z.number().default(0),
    status: z.enum(['published', 'upcoming']).default('upcoming'),
    // Detail-page fields (only required for published ventures):
    eyebrow: z.string().optional(),
    detailTitle: z.string().optional(), // detail-page h1 (e.g. "Ongiini AI"); falls back to name
    deck: z.string().optional(),
    coverPlaceholder: z.string().default('In context — supply later'),
    facts: z.array(z.object({ k: z.string(), v: z.string() })).default([]),
    throughline: z.string().optional(),
    relatedEssay: z.string().optional(),
  }),
});

export const collections = { essays, ventures };
