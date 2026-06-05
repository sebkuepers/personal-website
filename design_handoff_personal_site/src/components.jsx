/* global React */
const { useState, useEffect, useRef, useCallback } = React;

/* ── Icon set (lucide-style, 24x24, 1.6 stroke) ───────────────────────────── */
const ICON_PATHS = {
  arrowRight: '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
  arrowUpRight: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  arrowDown: '<path d="M12 5v14"/><path d="m5 12 7 7 7-7"/>',
  anchor: '<circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  close: '<path d="M18 6 6 18"/><path d="M6 6l12 12"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1Z"/><path d="M14 21c3 0 7-1 7-8V5c0-1.25-.757-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h.5c.5 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1Z"/>',
  feather: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a.5.5 0 0 1-.41-.07A.5.5 0 0 1 12 21.6V18a8 8 0 0 1 8-8z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  mic: '<rect width="6" height="12" x="9" y="2" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a.5.5 0 0 1-.41-.07A.5.5 0 0 1 12 21.6 21 21 0 0 1 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  watch: '<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1 1"/><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"/><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/>',
  home2: '<path d="M3 9 12 2l9 7"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/><path d="M9 21v-6h6v6"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  star: '<path d="M11.5 2.5 14 8l6 .5-4.5 4 1.4 6L11.5 15 6.1 18.5l1.4-6L3 8.5 9 8z"/>',
};
function Icon({ name, size = 18, cls = '' }) {
  return (
    <svg className={`ico ${cls}`} width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICON_PATHS[name] || '' }} />
  );
}

/* ── Reveal: entrance is now pure CSS (see .reveal in styles.css). This hook
   just hands back a ref so existing call sites keep working. ───────────────── */
function useReveal() {
  return useRef(null);
}

/* ── Wordmark ─────────────────────────────────────────────────────────────── */
function Wordmark({ onClick, small }) {
  return (
    <button className="wordmark" onClick={onClick} aria-label="Sebastian Küpers — home">
      <span className="wm-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="100%" height="100%" fill="none">
          <rect x="1" y="1" width="30" height="30" rx="15" stroke="currentColor" strokeWidth="1.3" opacity="0.5"/>
          <path d="M16 5 V27 M9 12 Q16 9 23 12 M9 20 Q16 23 23 20" stroke="currentColor"
            strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.85"/>
        </svg>
      </span>
      <span className="wm-text">
        <span className="wm-name">Sebastian Küpers</span>
        {!small && <span className="wm-sub">Agentic economy · advisory</span>}
      </span>
    </button>
  );
}

/* ── Top navigation ───────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'writing', label: 'Writing' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'speaking', label: 'Speaking' },
  { id: 'contact', label: 'Contact' },
];
function Nav({ navigate, view, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = (id) => { setOpen(false); navigate(id); };
  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner wrap-wide">
        <Wordmark onClick={() => go('home')} />
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <button key={l.id}
              className={`nav-link ${view === l.id ? 'is-active' : ''}`}
              onClick={() => go(l.id)}>{l.label}</button>
          ))}
        </nav>
        <div className="nav-end">
          <div className="lang" role="group" aria-label="Language">
            <button className={lang === 'EN' ? 'on' : ''} onClick={() => setLang('EN')}>EN</button>
            <span aria-hidden="true">/</span>
            <button className={lang === 'DE' ? 'on' : ''} onClick={() => setLang('DE')}>DE</button>
          </div>
          <button className="btn btn-primary nav-cta" onClick={() => go('contact')}>
            Work with me<Icon name="arrowRight" size={15} cls="arrow" />
          </button>
          <button className="nav-burger" aria-label="Menu" aria-expanded={open}
            onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-sheet">
          {NAV_LINKS.map((l) => (
            <button key={l.id} className="nav-sheet-link" onClick={() => go(l.id)}>{l.label}</button>
          ))}
          <button className="btn btn-primary" style={{ marginTop: '0.5rem' }} onClick={() => go('contact')}>
            Work with me<Icon name="arrowRight" size={15} cls="arrow" />
          </button>
        </div>
      )}
    </header>
  );
}

/* ── Newsletter capture ───────────────────────────────────────────────────── */
function Newsletter({ variant = 'band' }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e) => { e.preventDefault(); if (email.trim()) setDone(true); };
  return (
    <section className={`news news-${variant}`} aria-labelledby="news-h">
      <div className="wrap news-grid">
        <div className="news-copy">
          <p className="eyebrow accent">The Drift Letter</p>
          <h2 id="news-h" className="display news-title">Notes on building AI that keeps people in command.</h2>
          <p className="news-sub">An occasional letter — new essays, what I am learning across the ventures, and the
            thinking behind <em>Slow Intelligence</em>. No cadence promises, no noise.</p>
        </div>
        <div className="news-form-wrap">
          {done ? (
            <div className="news-done">
              <Icon name="feather" size={20} />
              <div>
                <strong>You are on the list.</strong>
                <span>A short confirmation is on its way to {email}.</span>
              </div>
            </div>
          ) : (
            <form className="news-form" onSubmit={submit}>
              <label className="meta" htmlFor="news-email">Email address</label>
              <div className="news-row">
                <input id="news-email" type="email" required placeholder="you@company.com"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="btn btn-primary" type="submit">
                  Subscribe<Icon name="arrowRight" size={15} cls="arrow" />
                </button>
              </div>
              <p className="meta news-fine">A few times a year. Unsubscribe in one click.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────────────────────── */
function Footer({ navigate }) {
  const cols = [
    { h: 'Explore', links: [['About', 'about'], ['Writing', 'writing'], ['Ventures', 'ventures'], ['Speaking', 'speaking']] },
    { h: 'Work together', links: [['Advisory & boards', 'contact'], ['Speaking (via Leading Minds)', 'speaking'], ['Press & speaker kit', 'about']] },
  ];
  return (
    <footer className="footer">
      <div className="wrap-wide footer-inner">
        <div className="footer-brand">
          <Wordmark onClick={() => navigate('home')} small />
          <p className="footer-thesis read">
            Sovereignty, trust, and intentionality as the design principles
            for an age of autonomous systems.
          </p>
        </div>
        <div className="footer-cols">
          {cols.map((c) => (
            <div key={c.h} className="footer-col">
              <p className="eyebrow">{c.h}</p>
              <ul>
                {c.links.map(([label, id]) => (
                  <li key={label}><button className="footer-link" onClick={() => navigate(id)}>{label}</button></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-col">
            <p className="eyebrow">Elsewhere</p>
            <ul>
              <li><a className="footer-link" href="#" onClick={(e)=>e.preventDefault()}>LinkedIn</a></li>
              <li><a className="footer-link" href="#" onClick={(e)=>e.preventDefault()}>Leading Minds profile</a></li>
              <li><a className="footer-link" href="#" onClick={(e)=>e.preventDefault()}>Common Intelligence Foundation</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap-wide footer-base">
        <span className="meta">© {new Date().getFullYear()} Sebastian Küpers</span>
        <span className="meta footer-place">Made slowly · Hamburg & at sea</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, useReveal, Wordmark, Nav, Newsletter, Footer, NAV_LINKS });
