/**
 * Static content for the home page sections that are not (yet) backed by a
 * content collection: the credibility strip, the three thesis principles, the
 * speaking topics + stats, and the "Beyond the work" threads.
 *
 * Essays (Writing) and ventures are loaded from content collections instead —
 * see src/content.config.ts.
 */
import type { IconName } from '@/lib/icons';

// ── Hero ────────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'Architect of the agentic economy',
  lead:
    'Founder, advisor, and writer working at the front edge of autonomous systems. I help companies and institutions adopt AI without surrendering the judgment, sovereignty, and intent that make them worth trusting.',
};

// ── Credibility strip ───────────────────────────────────────────────────────
export const CURRENTLY: string[] = [
  'Founder, Sokosumi',
  'Common Intelligence Foundation',
  'Masumi Network',
  'Plan.Net Studios · Serviceplan Group',
];

// ── Thesis principles ───────────────────────────────────────────────────────
export interface Principle {
  icon: IconName;
  k: string;
  t: string;
  d: string;
}
export const PRINCIPLES: Principle[] = [
  {
    icon: 'shield',
    k: 'Sovereignty',
    t: 'Keep capability close to the people and places it serves.',
    d: 'Ongiini runs on hardware located in Namibia and speaks Oshiwambo first. Sovereignty is a design decision, not a press release.',
  },
  {
    icon: 'compass',
    k: 'Trust',
    t: 'Make accountability part of the architecture, not a promise bolted on.',
    d: 'Sokosumi keeps a permanent human Trust & Accountability layer. Masumi makes identity and audit the moat. Trust you can inspect.',
  },
  {
    icon: 'waves',
    k: 'Intentionality',
    t: 'Spend convenience deliberately — never drift into it.',
    d: 'Slow Intelligence is the discipline of resisting the gradual surrender of human capability. Choose what to automate, on purpose.',
  },
];

// ── Speaking ────────────────────────────────────────────────────────────────
export const SPEAKING = {
  lead:
    'Keynotes and conversations that place technology in context. Calm, precise, grounded in things I have actually built. Audiences leave with judgement, not jargon.',
  topics: [
    'The agentic economy — what actually changes, and when',
    'AI sovereignty: who owns the intelligence a society runs on',
    'Slow Intelligence — resisting the Drift in your organisation',
    'Trust as architecture: building AI institutions can stand behind',
  ],
  stats: [
    { label: 'Stages', value: 'DLD · OMR · re:publica' },
    { label: 'Formats', value: 'Keynote · fireside · workshop' },
    { label: 'Languages', value: 'English · German' },
  ],
};

// ── Beyond the work (personal layer — "balanced") ───────────────────────────
export interface Thread {
  icon: IconName;
  k: string;
  d: string;
}
export const THREADS: Thread[] = [
  {
    icon: 'anchor',
    k: 'Sailing',
    d: 'I own and maintain a boat. Reading conditions, patience, self-reliance, slowness done on purpose — most of what I believe about technology, I first learned on the water.',
  },
  {
    icon: 'watch',
    k: 'Mechanical watches',
    d: 'Collected as objects of craft, not status — things I intend to pass to my children. Slow Intelligence, made physical.',
  },
  {
    icon: 'home2',
    k: 'An engineer’s home',
    d: 'Solar, EVs, dynamic energy tariffs. Hands-on and systems-minded — sustainability as something you tinker with, not outsource.',
  },
];
