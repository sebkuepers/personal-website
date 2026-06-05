/* global React, ReactDOM, Nav, Footer, Home, Article, Venture,
   useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakColor, Icon */
const { useState, useEffect, useCallback } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mode": "light",
  "serif": "Newsreader",
  "accent": "#2a5446",
  "heroLayout": "split",
  "personal": "balanced"
}/*EDITMODE-END*/;

const SERIF_STACKS = {
  "Newsreader": "'Newsreader', Georgia, serif",
  "Spectral": "'Spectral', Georgia, serif",
  "Playfair Display": "'Playfair Display', Georgia, serif",
  "Instrument Serif": "'Instrument Serif', Georgia, serif",
};

const VIEWS = {
  home: { comp: 'home' },
  about: { comp: 'home', scroll: 'thesis' },
  writing: { comp: 'home', scroll: 'writing' },
  ventures: { comp: 'home', scroll: 'ventures' },
  speaking: { comp: 'home', scroll: 'speaking' },
  contact: { comp: 'home', scroll: 'speaking' },
  'slow-intelligence': { comp: 'article' },
  ongiini: { comp: 'venture' },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [view, setView] = useState('home');
  const [lang, setLang] = useState('EN');
  const [pendingScroll, setPendingScroll] = useState(null);

  /* Apply tweak-driven design tokens */
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', t.mode === 'dark' ? 'dark' : 'light');
    root.style.setProperty('--accent-base', t.accent);
    root.style.setProperty('--font-display', SERIF_STACKS[t.serif] || SERIF_STACKS.Newsreader);
  }, [t.mode, t.accent, t.serif]);

  const navigate = useCallback((id) => {
    const target = VIEWS[id] || VIEWS.home;
    const sameComp = (VIEWS[view] || {}).comp === target.comp;
    if (target.scroll) {
      setView(target.comp === 'home' ? 'home' : id);
      // keep nav highlight on the chosen section id
      setView(id);
      setPendingScroll(target.scroll);
      if (sameComp && target.comp === 'home') {
        const el = document.getElementById(target.scroll);
        if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); setPendingScroll(null); return; }
      }
    } else {
      setView(id);
      setPendingScroll(null);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [view]);

  /* Resolve a pending in-page scroll after the home view mounts */
  useEffect(() => {
    if (!pendingScroll) return;
    const el = document.getElementById(pendingScroll);
    if (el) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'auto' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    setPendingScroll(null);
  }, [view, pendingScroll]);

  const comp = (VIEWS[view] || VIEWS.home).comp;

  return (
    <React.Fragment>
      <Nav navigate={navigate} view={view} lang={lang} setLang={setLang} />
      {lang === 'DE' && (
        <div className="lang-note">
          <div className="wrap-wide lang-note-inner">
            <Icon name="globe" size={15} />
            <span>Die deutsche Fassung folgt in Kürze. Diese Seite ist vorerst auf Englisch.</span>
            <button onClick={() => setLang('EN')} aria-label="Dismiss"><Icon name="close" size={15} /></button>
          </div>
        </div>
      )}

      {comp === 'home' && <Home navigate={navigate} heroLayout={t.heroLayout} personalProminence={t.personal} />}
      {comp === 'article' && <Article navigate={navigate} />}
      {comp === 'venture' && <Venture navigate={navigate} />}

      <Footer navigate={navigate} />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio label="Mode" value={t.mode} options={[
          { value: 'light', label: 'Paper' }, { value: 'dark', label: 'Ink' },
        ]} onChange={(v) => setTweak('mode', v)} />
        <TweakColor label="Accent" value={t.accent} options={[
          '#2a5446', '#1f3a4d', '#8a6a3a', '#415a64',
        ]} onChange={(v) => setTweak('accent', v)} />

        <TweakSection label="Typography" />
        <TweakSelect label="Headline serif" value={t.serif} options={[
          'Newsreader', 'Spectral', 'Playfair Display', 'Instrument Serif',
        ]} onChange={(v) => setTweak('serif', v)} />

        <TweakSection label="Layout" />
        <TweakRadio label="Hero" value={t.heroLayout} options={[
          { value: 'split', label: 'Split' }, { value: 'stacked', label: 'Stacked' }, { value: 'overlay', label: 'Overlay' },
        ]} onChange={(v) => setTweak('heroLayout', v)} />
        <TweakRadio label="Personal layer" value={t.personal} options={[
          { value: 'subtle', label: 'Subtle' }, { value: 'balanced', label: 'Balanced' }, { value: 'prominent', label: 'Prominent' },
        ]} onChange={(v) => setTweak('personal', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
