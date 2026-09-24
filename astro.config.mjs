// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Static site, served by a Cloudflare Worker with static assets (wrangler.jsonc).
// Primary canonical domain is the .com; the .de domain currently serves the
// same English build (German content is a future task — see README).
export default defineConfig({
  site: 'https://sebastian-kuepers.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    // Legal pages are noindex — keep them out of the sitemap too.
    sitemap({ filter: (page) => !/\/(impressum|datenschutz)\/?$/.test(page) }),
  ],
  build: {
    // Emit clean URLs as /writing/slow-intelligence/index.html
    format: 'directory',
  },
});
