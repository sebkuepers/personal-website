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
  place: 'Made slowly · Hamburg & at sea',
  // Speaking is booked through Leading Minds; advisory/contact currently routes
  // to the Speaking section on home until a dedicated contact page exists.
  contactAnchor: '/#speaking',
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
  { id: 'contact', label: 'Contact', href: '/#speaking' },
];

// Outbound links — fill in real URLs as they become available.
export const SOCIAL = {
  linkedin: '#',
  leadingMinds: 'https://leading-minds.com/experte/sebastian-kuepers/',
  commonIntelligence: '#',
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
      { label: 'Writing', href: '/#writing' },
      { label: 'Ventures', href: '/#ventures' },
      { label: 'Speaking', href: '/#speaking' },
    ],
  },
  {
    heading: 'Work together',
    links: [
      { label: 'Advisory & boards', href: '/#speaking' },
      { label: 'Speaking (via Leading Minds)', href: '/#speaking' },
      { label: 'Press & speaker kit', href: '/#thesis' },
    ],
  },
  {
    heading: 'Elsewhere',
    links: [
      { label: 'LinkedIn', href: SOCIAL.linkedin, external: true },
      { label: 'Leading Minds profile', href: SOCIAL.leadingMinds, external: true },
      { label: 'Common Intelligence Foundation', href: SOCIAL.commonIntelligence, external: true },
    ],
  },
];
