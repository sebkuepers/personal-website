/* global React, Icon, Newsletter */
const { useState: useStateH } = React;

/* ── Data ─────────────────────────────────────────────────────────────────── */
const CURRENTLY = [
  'Founder, Sokosumi',
  'Common Intelligence Foundation',
  'Masumi Network',
  'Plan.Net Studios · Serviceplan Group',
];

const PRINCIPLES = [
  { icon: 'shield', k: 'Sovereignty',
    t: 'Keep capability close to the people and places it serves.',
    d: 'Ongiini runs on hardware located in Namibia and speaks Oshiwambo first. Sovereignty is a design decision, not a press release.' },
  { icon: 'compass', k: 'Trust',
    t: 'Make accountability part of the architecture, not a promise bolted on.',
    d: 'Sokosumi keeps a permanent human Trust & Accountability layer. Masumi makes identity and audit the moat. Trust you can inspect.' },
  { icon: 'waves', k: 'Intentionality',
    t: 'Spend convenience deliberately — never drift into it.',
    d: 'Slow Intelligence is the discipline of resisting the gradual surrender of human capability. Choose what to automate, on purpose.' },
];

const ARTICLES = [
  { id: 'slow-intelligence', flagship: true, kicker: 'Manifesto',
    title: 'Slow Intelligence', read: '14 min',
    deck: 'On the Drift — the quiet surrender of human capability through accumulated convenience — and the discipline that resists it.',
    date: 'March 2025' },
  { kicker: 'Essay', title: 'Trust is an architecture, not a feeling', read: '9 min',
    deck: 'Why accountability has to be built into agentic systems at the structural level — and what it costs when it is not.',
    date: 'January 2025' },
  { kicker: 'Field note', title: 'Sovereignty begins with where the server sits', read: '7 min',
    deck: 'What building an AI assistant for Namibia taught me about extraction, language, and the geography of intelligence.',
    date: 'November 2024' },
  { kicker: 'Note', title: 'The agentic economy needs boring infrastructure', read: '6 min',
    deck: 'Identity, payment, and audit are unglamorous. They are also the difference between a demo and an economy.',
    date: 'September 2024' },
];

const VENTURES = [
  { id: 'ongiini', name: 'Common Intelligence Foundation', sub: 'with Ongiini AI', role: 'Founder', years: '2024 —',
    thesis: 'Sovereignty', heart: true,
    blurb: 'A free, WhatsApp-based AI assistant for Namibia, built around the Oshiwambo language — with the hardware deliberately located in-country. Non-extractive by design.' },
  { id: 'sokosumi', name: 'Sokosumi', role: 'Founder', years: '2023 —',
    thesis: 'Trust',
    blurb: 'An agentic platform for European SMBs, built EU-AI-Act-compliant with a permanent human Trust & Accountability layer. Trust as architecture.' },
  { id: 'masumi', name: 'Masumi Network', role: 'Co-founder', years: '2023 —',
    thesis: 'Trust',
    blurb: 'Identity and payment infrastructure for agent commerce, with compliance and auditability as the moat. The plumbing the agentic economy runs on.' },
  { id: 'plannet', name: 'Plan.Net Studios', sub: 'Serviceplan Group', role: 'Strategic lead', years: '2019 —',
    thesis: 'Intentionality',
    blurb: 'Bringing applied AI into one of Europe’s largest independent agency networks — translating frontier capability into work that holds up in the real world.' },
];

/* ── Hero ─────────────────────────────────────────────────────────────────── */
function Hero({ navigate, layout }) {
  const eyebrow = 'Architect of the agentic economy';
  const head = (
    <>I build AI that <em>widens</em> human agency<br className="hide-sm" /> — not the kind that quietly trades it&nbsp;away.</>
  );
  const lead = 'Founder, advisor, and writer working at the front edge of autonomous systems. I help companies and institutions adopt AI without surrendering the judgment, sovereignty, and intent that make them worth trusting.';
  const ctas = (
    <div className="hero-ctas">
      <button className="btn btn-primary" onClick={() => navigate('contact')}>
        Work with me<Icon name="arrowRight" size={15} cls="arrow" />
      </button>
      <button className="btn btn-ghost" onClick={() => navigate('writing')}>
        Read my thinking<Icon name="arrowUpRight" size={15} />
      </button>
    </div>
  );
  const portrait = () => (
    <figure className="hero-portrait img-frame" aria-label="Sebastian Küpers">
      <img src="images/sebastian-portrait.jpg?v=2" alt="Sebastian Küpers" />
    </figure>
  );

  if (layout === 'overlay') {
    return (
      <section className="hero hero-overlay">
        <figure className="hero-bleed img-frame" aria-label="Sebastian Küpers">
          <img src="images/sebastian-portrait.jpg?v=2" alt="Sebastian Küpers" />
        </figure>
        <div className="wrap-wide hero-overlay-inner">
          <div className="hero-overlay-card reveal revealed">
            <p className="eyebrow accent">{eyebrow}</p>
            <h1 className="display hero-head">{head}</h1>
            <p className="lead hero-lead">{lead}</p>
            {ctas}
          </div>
        </div>
      </section>
    );
  }
  if (layout === 'stacked') {
    return (
      <section className="hero hero-stacked wrap-wide">
        <p className="eyebrow accent reveal revealed">{eyebrow}</p>
        <h1 className="display hero-head hero-head-xl reveal revealed d1">{head}</h1>
        <div className="hero-stacked-row">
          <p className="lead hero-lead reveal revealed d2">{lead}</p>
          <div className="reveal revealed d2">{ctas}</div>
        </div>
        <div className="reveal revealed d3">{portrait()}</div>
      </section>
    );
  }
  /* default: split */
  return (
    <section className="hero hero-split wrap-wide">
      <div className="hero-col">
        <p className="eyebrow accent reveal revealed">{eyebrow}</p>
        <h1 className="display hero-head reveal revealed d1">{head}</h1>
        <p className="lead hero-lead reveal revealed d2">{lead}</p>
        <div className="reveal revealed d3">{ctas}</div>
      </div>
      <div className="hero-aside reveal revealed d2">{portrait()}</div>
    </section>
  );
}

/* ── Credibility strip ────────────────────────────────────────────────────── */
function Credibility() {
  return (
    <section className="cred" aria-label="Current roles">
      <div className="wrap-wide cred-inner">
        <span className="eyebrow cred-label">Currently</span>
        <ul className="cred-list">
          {CURRENTLY.map((c, i) => (
            <li key={c}><span className="cred-item">{c}</span>{i < CURRENTLY.length - 1 && <span className="cred-sep" aria-hidden="true">·</span>}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Thesis ───────────────────────────────────────────────────────────────── */
function Thesis() {
  const ref = useReveal();
  return (
    <section className="section thesis" id="thesis" ref={ref}>
      <div className="wrap">
        <p className="eyebrow accent reveal">The throughline</p>
        <h2 className="display thesis-statement reveal d1">
          One idea runs under everything I build: technology should widen human agency,
          not quietly trade it away for convenience.
        </h2>
        <div className="thesis-grid">
          {PRINCIPLES.map((p, i) => (
            <article key={p.k} className={`principle reveal d${i + 1}`}>
              <span className="principle-ico"><Icon name={p.icon} size={22} /></span>
              <h3 className="principle-k">{p.k}</h3>
              <p className="principle-t serif">{p.t}</p>
              <p className="principle-d">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Selected writing ─────────────────────────────────────────────────────── */
function Writing({ navigate }) {
  const ref = useReveal();
  const flagship = ARTICLES.find((a) => a.flagship);
  const rest = ARTICLES.filter((a) => !a.flagship);
  return (
    <section className="section writing" id="writing" ref={ref}>
      <div className="wrap">
        <header className="sec-head reveal">
          <div>
            <p className="eyebrow accent">Writing</p>
            <h2 className="display sec-title">The heartbeat of the work.</h2>
          </div>
          <button className="link-u" onClick={() => navigate('writing')}>
            All essays<Icon name="arrowRight" size={15} cls="arrow" />
          </button>
        </header>

        <button className="flagship reveal d1" onClick={() => navigate('slow-intelligence')}>
          <div className="ph flagship-img" role="img" aria-label="Slow Intelligence cover">
            <span className="ph-tag"><Icon name="waves" size={13} />Manifesto cover — supply later</span>
          </div>
          <div className="flagship-body">
            <p className="meta flagship-kicker"><span className="dot" /> {flagship.kicker} · {flagship.read} · {flagship.date}</p>
            <h3 className="display flagship-title">{flagship.title}</h3>
            <p className="lead flagship-deck">{flagship.deck}</p>
            <span className="link-u">Read the manifesto<Icon name="arrowRight" size={15} cls="arrow" /></span>
          </div>
        </button>

        <div className="article-grid">
          {rest.map((a, i) => (
            <button key={a.title} className={`article-card reveal d${i + 1}`}
              onClick={() => navigate('writing')}>
              <p className="meta article-kicker">{a.kicker} · {a.read}</p>
              <h4 className="serif article-title">{a.title}</h4>
              <p className="article-deck">{a.deck}</p>
              <span className="article-date meta">{a.date}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Ventures ─────────────────────────────────────────────────────────────── */
function Ventures({ navigate }) {
  const ref = useReveal();
  return (
    <section className="section ventures" id="ventures" ref={ref}>
      <div className="wrap">
        <header className="sec-head reveal">
          <div>
            <p className="eyebrow accent">Ventures &amp; projects</p>
            <h2 className="display sec-title">A coherent body of work.</h2>
          </div>
          <p className="sec-note">Different surfaces, one philosophy. Each tied back to sovereignty, trust, or intentionality.</p>
        </header>
        <div className="venture-list">
          {VENTURES.map((v, i) => (
            <article key={v.id} className={`venture reveal d${(i % 3) + 1}`}>
              <div className="venture-idx meta tnum">{String(i + 1).padStart(2, '0')}</div>
              <div className="venture-main">
                <div className="venture-headrow">
                  <h3 className="serif venture-name">
                    {v.name}{v.sub && <span className="venture-sub"> {v.sub}</span>}
                    {v.heart && <span className="venture-heart" title="The ethical heart of the portfolio"><Icon name="star" size={14} /></span>}
                  </h3>
                  <span className="venture-thesis-tag">{v.thesis}</span>
                </div>
                <p className="venture-blurb">{v.blurb}</p>
                <div className="venture-foot">
                  <span className="meta">{v.role} · {v.years}</span>
                  {v.id === 'ongiini'
                    ? <button className="link-u" onClick={() => navigate('ongiini')}>Read the story<Icon name="arrowRight" size={15} cls="arrow" /></button>
                    : <span className="meta venture-soon">Detail coming</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Speaking ─────────────────────────────────────────────────────────────── */
const TOPICS = [
  'The agentic economy — what actually changes, and when',
  'AI sovereignty: who owns the intelligence a society runs on',
  'Slow Intelligence — resisting the Drift in your organisation',
  'Trust as architecture: building AI institutions can stand behind',
];
function Speaking() {
  const ref = useReveal();
  return (
    <section className="section speaking" id="speaking" ref={ref}>
      <div className="wrap speaking-grid">
        <div className="speaking-copy reveal">
          <p className="eyebrow accent">Speaking</p>
          <h2 className="display sec-title">Bring the agentic economy into the room — without the hype.</h2>
          <p className="speaking-lead read">Keynotes and conversations that place technology in context. Calm, precise,
            grounded in things I have actually built. Audiences leave with judgement, not jargon.</p>
          <ul className="topics">
            {TOPICS.map((t) => (
              <li key={t}><Icon name="mic" size={16} /><span>{t}</span></li>
            ))}
          </ul>
          <div className="speaking-cta">
            <a className="btn btn-primary" href="#" onClick={(e) => e.preventDefault()}>
              Book me to speak<Icon name="arrowUpRight" size={15} />
            </a>
            <span className="meta">Speaking is booked through <strong>Leading Minds</strong>.</span>
          </div>
        </div>
        <div className="speaking-aside reveal d1">
          <div className="ph speaking-reel" role="img" aria-label="Talk sizzle reel">
            <span className="ph-tag"><Icon name="mic" size={13} />Sizzle reel — supply later</span>
            <button className="reel-play" aria-label="Play talk reel"><Icon name="arrowRight" size={22} /></button>
          </div>
          <dl className="speaking-stats">
            <div><dt className="meta">Stages</dt><dd className="serif">DLD · OMR · re:publica</dd></div>
            <div><dt className="meta">Formats</dt><dd className="serif">Keynote · fireside · workshop</dd></div>
            <div><dt className="meta">Languages</dt><dd className="serif">English · German</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ── Beyond the work (personal layer) ─────────────────────────────────────── */
const THREADS = [
  { icon: 'anchor', k: 'Sailing', d: 'I own and maintain a boat. Reading conditions, patience, self-reliance, slowness done on purpose — most of what I believe about technology, I first learned on the water.' },
  { icon: 'watch', k: 'Mechanical watches', d: 'Collected as objects of craft, not status — things I intend to pass to my children. Slow Intelligence, made physical.' },
  { icon: 'home2', k: 'An engineer’s home', d: 'Solar, EVs, dynamic energy tariffs. Hands-on and systems-minded — sustainability as something you tinker with, not outsource.' },
];
function Beyond({ prominence }) {
  const ref = useReveal();
  if (prominence === 'subtle') {
    return (
      <section className="section-sm beyond beyond-subtle" id="beyond" ref={ref}>
        <div className="wrap beyond-subtle-row reveal">
          <Icon name="anchor" size={20} />
          <p className="serif">Away from the screen: a boat to maintain, mechanical watches to wind, an engineer’s
            home to tend, and a family that keeps me present. The same philosophy, off duty.</p>
        </div>
      </section>
    );
  }
  const big = prominence === 'prominent';
  return (
    <section className={`section beyond ${big ? 'beyond-big' : ''}`} id="beyond" ref={ref}>
      <div className="wrap">
        <header className="sec-head reveal">
          <div>
            <p className="eyebrow accent">Beyond the work</p>
            <h2 className="display sec-title">The same philosophy, off duty.</h2>
          </div>
          <p className="sec-note">A person, not a headline. The slowness is the point.</p>
        </header>
        {big && (
          <div className="ph beyond-hero reveal d1" role="img" aria-label="Sailing">
            <span className="ph-tag"><Icon name="anchor" size={13} />The boat — supply later</span>
          </div>
        )}
        <div className="threads">
          {THREADS.map((t, i) => (
            <article key={t.k} className={`thread reveal d${i + 1}`}>
              <span className="thread-ico"><Icon name={t.icon} size={20} /></span>
              <h3 className="serif thread-k">{t.k}</h3>
              <p className="thread-d">{t.d}</p>
            </article>
          ))}
        </div>
        {big && (
          <p className="beyond-foot read reveal">
            Skateboarding, climbing, and time with family round it out — deliberate practice at keeping real-world
            capability alive. The anti-Drift, lived rather than written.
          </p>
        )}
      </div>
    </section>
  );
}

/* ── Home ─────────────────────────────────────────────────────────────────── */
function Home({ navigate, heroLayout, personalProminence }) {
  return (
    <main className="home">
      <Hero navigate={navigate} layout={heroLayout} />
      <Credibility />
      <hr className="rule wrap-rule" />
      <Thesis />
      <Writing navigate={navigate} />
      <Ventures navigate={navigate} />
      <Speaking />
      <Beyond prominence={personalProminence} />
      <Newsletter variant="band" />
    </main>
  );
}

Object.assign(window, { Home });
