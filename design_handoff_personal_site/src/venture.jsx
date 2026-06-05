/* global React, Icon, Newsletter, useReveal */

const ONGIINI_FACTS = [
  { k: 'Founded', v: '2024' },
  { k: 'Location', v: 'Namibia' },
  { k: 'Language', v: 'Oshiwambo first' },
  { k: 'Access', v: 'Free · via WhatsApp' },
];

function Venture({ navigate }) {
  const ref = useReveal();
  return (
    <main className="venture-page" ref={ref}>
      <div className="wrap art-wrap">
        <button className="art-back link-u" onClick={() => navigate('ventures')}>
          <Icon name="arrowRight" size={15} cls="back-arrow" />Ventures
        </button>
      </div>

      <header className="wrap vp-head">
        <div className="vp-head-top">
          <p className="eyebrow accent">Common Intelligence Foundation</p>
          <span className="venture-thesis-tag">Sovereignty</span>
        </div>
        <h1 className="display vp-title">Ongiini AI</h1>
        <p className="lead vp-deck">
          A free, WhatsApp-based AI assistant for Namibia, built around the Oshiwambo language —
          with the hardware deliberately kept in-country. The clearest expression of everything I believe:
          intelligence that belongs to the people it serves.
        </p>
      </header>

      <figure className="vp-cover-wrap wrap-wide">
        <div className="ph vp-cover" role="img" aria-label="Ongiini in context">
          <span className="ph-tag"><Icon name="globe" size={13} />Ongiini in context — supply later</span>
        </div>
      </figure>

      <section className="wrap vp-facts-wrap">
        <dl className="vp-facts">
          {ONGIINI_FACTS.map((f) => (
            <div key={f.k} className="vp-fact">
              <dt className="meta">{f.k}</dt>
              <dd className="serif">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <article className="wrap vp-body">
        <section className="vp-section">
          <h2 className="serif vp-h2">What it is</h2>
          <div className="vp-prose">
            <p>Most people in Namibia reach the internet through WhatsApp, not a browser. So Ongiini lives where
              people already are: a free assistant you message like any other contact, in the language you actually
              think in. No app to download, no account to create, no fee at the door.</p>
            <p>It is a project of the Common Intelligence Foundation — a non-profit built on a simple conviction
              that useful AI should not be something that happens <em>to</em> a community from somewhere else.</p>
          </div>
        </section>

        <blockquote className="art-quote vp-quote">
          <Icon name="quote" size={28} cls="art-quote-mark" />
          <p className="serif">Where intelligence lives, and in whose language it speaks, decides who stays capable.</p>
        </blockquote>

        <section className="vp-section">
          <h2 className="serif vp-h2">Why it matters</h2>
          <div className="vp-prose">
            <p>An assistant that does not speak Oshiwambo well is not a smaller version of the same tool — it is a
              different tool, one that quietly tells you your language is a second-class way to think. Building
              Oshiwambo in first, rather than bolting it on, is the whole point. Language is not a feature here.
              It is the foundation.</p>
            <p>Keeping the hardware in Namibia is the same decision in physical form. Sovereignty is not a slogan
              you can hold while the servers, the data, and the value all flow somewhere else. We put the
              infrastructure in the country whose intelligence it carries.</p>
          </div>
        </section>

        <section className="vp-section">
          <h2 className="serif vp-h2">How it holds to the principle</h2>
          <div className="vp-prose">
            <ul className="vp-principles">
              <li><span className="vp-pk">Non-extractive</span> Value, data, and capability stay close to the
                community. The project is structured so that it cannot quietly become an extraction pipeline.</li>
              <li><span className="vp-pk">Language-preserving</span> Every interaction strengthens, rather than
                erodes, a living language — the opposite of the homogenising pull most technology exerts.</li>
              <li><span className="vp-pk">In-country by design</span> The hardware is located where it is used,
                making sovereignty a fact of the architecture rather than a promise in a charter.</li>
            </ul>
          </div>
        </section>
      </article>

      <div className="wrap vp-foot">
        <div className="vp-foot-card">
          <div>
            <p className="eyebrow accent">The throughline</p>
            <p className="serif vp-foot-line">This is Slow Intelligence applied to a whole society — intelligence
              that keeps people capable, in their own language, on their own ground.</p>
          </div>
          <button className="link-u" onClick={() => navigate('slow-intelligence')}>
            Read the thinking behind it<Icon name="arrowRight" size={15} cls="arrow" />
          </button>
        </div>
      </div>

      <Newsletter variant="band" />
    </main>
  );
}

Object.assign(window, { Venture });
