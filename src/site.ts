/**
 * Site-wide configuration and shared content data.
 *
 * Nav section links point at anchors on the home page (e.g. `/#writing`) so they
 * resolve correctly from any route (article / venture pages included). The
 * standalone routes (`/writing/...`, `/ventures/...`) are real pages.
 */

export const SITE = {
  name: 'Sebastian Küpers',
  wordmarkSub: 'Agentic economy · advisory',
  thesis:
    'Sovereignty, trust, and intentionality as the design principles for an age of autonomous systems.',
  url: 'https://sebastian-kuepers.com',
  description:
    'Sebastian Küpers — founder, advisor, and writer on the agentic economy and AI sovereignty. Building AI that widens human agency rather than quietly trading it away.',
  place: 'Made slowly · Berlin & at sea',
  email: 'hello@sebastian-kuepers.com',
  // Flip on once German content exists — shows the EN / DE switch in the nav.
  showLanguageToggle: false,
  // "Work with me" / Contact → the contact block in the Speaking section on
  // home (email for advisory, Leading Minds for speaking).
  contactAnchor: '/#contact',
} as const;

// Legal / Impressum details (§ 5 DDG). Mirrors telsche.blog's Impressum.
export const LEGAL = {
  name: 'Sebastian Küpers',
  street: 'Hibiskusweg 17b',
  city: '13089 Berlin',
  country: 'Deutschland',
  phone: '+49 170 2372987',
  email: SITE.email,
} as const;

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About', href: '/#thesis' },
  { id: 'writing', label: 'Writing', href: '/#writing' },
  { id: 'ventures', label: 'Ventures', href: '/#ventures' },
  { id: 'speaking', label: 'Speaking', href: '/#speaking' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

// Outbound links. Empty string = not known yet → the link is not rendered.
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/sebastiankuepers/',
  leadingMinds: 'https://leading-minds.com/experte/sebastian-kuepers/',
  commonIntelligence: 'https://common-intelligence.org/',
  github: 'https://github.com/sebkuepers',
};

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Explore',
    links: [
      { label: 'About', href: '/#thesis' },
      { label: 'Writing', href: '/writing' },
      { label: 'Ventures', href: '/#ventures' },
      { label: 'Speaking', href: '/#speaking' },
    ],
  },
  {
    heading: 'Work together',
    links: [
      { label: 'Advisory & boards', href: `mailto:${SITE.email}?subject=Advisory` },
      { label: 'Speaking (via Leading Minds)', href: SOCIAL.leadingMinds, external: true },
      { label: 'Write to me', href: `mailto:${SITE.email}` },
    ],
  },
  {
    heading: 'Elsewhere',
    links: [
      { label: 'LinkedIn', href: SOCIAL.linkedin, external: true },
      { label: 'Leading Minds profile', href: SOCIAL.leadingMinds, external: true },
      { label: 'Common Intelligence Foundation', href: SOCIAL.commonIntelligence, external: true },
      { label: 'GitHub', href: SOCIAL.github, external: true },
      { label: 'RSS', href: '/rss.xml' },
    ],
  },
].map((col) => ({ ...col, links: col.links.filter((l) => l.href) }))
  .filter((col) => col.links.length > 0);

export const LEGAL_LINKS = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];
