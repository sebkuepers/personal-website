/* global React, Icon, Newsletter, useReveal */

function ArticleMeta() {
  return (
    <div className="art-byline">
      <div className="art-author">
        <img className="art-avatar" src="images/sebastian-portrait.jpg?v=2" alt="Sebastian Küpers" />
        <div>
          <span className="art-author-name serif">Sebastian Küpers</span>
          <span className="meta art-author-role">Founder & writer</span>
        </div>
      </div>
      <div className="art-meta-facts">
        <span className="meta">March 2025</span>
        <span className="meta art-dot">·</span>
        <span className="meta">14 min read</span>
      </div>
    </div>
  );
}

function Article({ navigate }) {
  const ref = useReveal();
  return (
    <main className="article" ref={ref}>
      <div className="wrap art-wrap">
        <button className="art-back link-u" onClick={() => navigate('writing')}>
          <Icon name="arrowRight" size={15} cls="back-arrow" />Writing
        </button>
      </div>

      <header className="wrap art-head">
        <p className="eyebrow accent art-kicker">Manifesto · The flagship essay</p>
        <h1 className="display art-title">Slow Intelligence</h1>
        <p className="lead art-deck">
          We rarely decide to give up a capability. We simply accept one convenience, then another,
          until the muscle has quietly gone. This is the Drift — and the discipline that resists it.
        </p>
        <ArticleMeta />
      </header>

      <figure className="art-cover-wrap wrap-wide">
        <div className="ph art-cover" role="img" aria-label="Cover image">
          <span className="ph-tag"><Icon name="waves" size={13} />Cover image — supply later</span>
        </div>
        <figcaption className="meta art-cap">Calm water, read carefully. The boat is the better metaphor for this essay than any machine.</figcaption>
      </figure>

      <article className="wrap art-body">
        <p className="art-lede-p">
          <span className="dropcap">T</span>here is a particular kind of loss that never announces itself. You do not
          wake up one morning unable to navigate without a map on your phone, or unable to write a difficult
          paragraph without help, or unable to sit with a hard problem long enough for an answer to surface.
          It happens the way erosion happens: one reasonable convenience at a time, each defensible on its own,
          none of them the moment you would point to and say <em>that is where I stopped being able</em>.
        </p>
        <p>
          I have started calling this the Drift. It is not the dramatic story we tell about artificial
          intelligence — the one with the rupture, the takeover, the line in the sand. It is quieter and, I
          think, more important. The Drift is the gradual surrender of human capability through accumulated
          convenience. And because each step is small and rational, there is rarely any point at which
          resistance feels urgent.
        </p>

        <h2 className="serif art-h2">Convenience is not free; it is deferred</h2>
        <p>
          Every tool makes a trade. It takes on some part of a task so that we no longer have to. Most of the
          time this is exactly what we want — I have no wish to grind my own flour or compute logarithms by
          hand. The trouble begins when the trade is invisible, when we accept the convenience without ever
          registering what we handed over to get it. A capability we no longer exercise does not stay in
          reserve. It fades. And the faster the convenience arrives, the less likely we are to notice the
          fading until it is well advanced.
        </p>
        <p>
          Agentic systems sharpen this enormously. A tool that completes a sentence is one thing. A system that
          can pursue a goal — research, decide, act, follow up — is something else. It does not just save you a
          step; it can stand in for the whole sequence of judgement that the step was teaching you. The risk is
          not that these systems are bad at the work. The risk is that they are good enough that we stop doing
          it, and then stop being able to.
        </p>

        <blockquote className="art-quote">
          <Icon name="quote" size={28} cls="art-quote-mark" />
          <p className="serif">Slow intelligence is not a rejection of speed. It is the discipline of choosing, on
            purpose, which capabilities to keep close.</p>
        </blockquote>

        <h2 className="serif art-h2">A discipline, not a nostalgia</h2>
        <p>
          I want to be careful here, because the easy version of this argument is reactionary, and I do not
          believe it. Slow intelligence is not a romance about doing everything the hard way. It is not a
          suspicion of tools. I build agentic systems for a living; I think they are among the most consequential
          things we will make this century. The point is not to refuse them. The point is to remain the kind of
          person — and the kind of institution — that <em>could</em> do the work without them, and to decide
          deliberately when to.
        </p>
        <p>
          This turns out to be a design principle as much as a personal one. When I work on a system, the
          question I keep returning to is whether it leaves its user more capable or less. A good agentic tool
          should widen the range of what a person can intend and achieve. A bad one narrows it — it makes the
          easy path so smooth that the capable path quietly closes. Same technology, opposite effect, and the
          difference is almost entirely in the design.
        </p>

        <h2 className="serif art-h2">Three ways to hold the line</h2>
        <p>
          I do not have a manifesto with ten commandments. But three commitments have held up, across the
          ventures and in my own life, and they are the closest thing I have to a method.
        </p>
        <ol className="art-list">
          <li><strong>Keep capability close to where it is used.</strong> Sovereignty is not abstract. When we
            built an AI assistant for Namibia, we put the hardware in Namibia and built it around the Oshiwambo
            language. Where intelligence lives, and in whose language it speaks, decides who stays capable.</li>
          <li><strong>Make trust inspectable.</strong> An accountable system is one whose judgements you can
            examine, contest, and override. We keep a permanent human layer in the loop not as a courtesy but as
            architecture. If you cannot see how a decision was reached, you have not delegated the work — you
            have surrendered it.</li>
          <li><strong>Spend convenience deliberately.</strong> Automate the things that were never teaching you
            anything. Guard the things that were. The discipline is in knowing the difference, and in being
            willing to keep doing some work slowly even when a faster path exists.</li>
        </ol>

        <p>
          None of this is comfortable, exactly. It asks you to leave some efficiency on the table on purpose,
          which runs against every incentive a market provides. But I have come to think that is the whole
          point. The capabilities worth keeping are precisely the ones it would be most convenient to give up.
        </p>
        <p>
          The sea taught me this before any of the technology did. You can have every instrument on the boat and
          still need to read the water yourself, because the day will come when the instruments are wrong and
          the only thing between you and the rocks is a skill you kept alive when it would have been easier not
          to. Slow intelligence is just that, generalised. Stay able. Choose your conveniences. Do not drift.
        </p>

        <div className="art-sign">
          <span className="serif">— S.K.</span>
        </div>
      </article>

      <div className="wrap art-foot">
        <div className="art-foot-row">
          <span className="meta">Filed under</span>
          <div className="art-tags">
            <span className="art-tag">Slow Intelligence</span>
            <span className="art-tag">Agency</span>
            <span className="art-tag">Design ethics</span>
          </div>
        </div>
        <button className="link-u" onClick={() => navigate('ongiini')}>
          Next: the venture this thinking built — Ongiini<Icon name="arrowRight" size={15} cls="arrow" />
        </button>
      </div>

      <Newsletter variant="band" />
    </main>
  );
}

Object.assign(window, { Article });
