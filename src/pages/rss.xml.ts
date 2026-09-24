import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '@/site';

// Published essays only — upcoming teasers have no page to link to.
export async function GET(context: APIContext) {
  const essays = (await getCollection('essays', (e) => e.data.status === 'published')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  return rss({
    title: `${SITE.name} — Writing`,
    description: SITE.thesis,
    site: context.site ?? SITE.url,
    items: essays.map((e) => ({
      title: e.data.title,
      description: e.data.pageDeck ?? e.data.deck,
      pubDate: e.data.date,
      link: `/writing/${e.id}/`,
      categories: e.data.tags,
    })),
  });
}
