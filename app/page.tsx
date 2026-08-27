import { Footer, Header } from "./site-chrome";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">A chromatic tuner for iPhone · Android in closed testing</p>
            <h1>Open it.<br />Play. Tune.</h1>
            <p className="lede">
              Twiddl starts listening the moment it opens and follows your pitch
              as it moves. No setup, no account, no ceremony.
            </p>
            <div className="hero-actions">
              <a
                className="launch-pill"
                href="https://apps.apple.com/app/twiddl-chromatic-tuner/id6800441300"
                target="_blank"
                rel="noreferrer"
                aria-label="Download Twiddl free on the App Store (opens in a new tab)"
              >
                <span className="pulse" aria-hidden="true" />
                Download free on the App Store
                <span className="external-arrow" aria-hidden="true">↗</span>
              </a>
              <span className="platform-pill" aria-label="Twiddl for Android is in closed testing">
                <span className="platform-dot" aria-hidden="true" />
                Android closed test
              </span>
              <a href="#why" className="text-link">Why Twiddl? <span>↓</span></a>
            </div>
            <ul className="trust-list" aria-label="Twiddl highlights">
              <li>No ads</li>
              <li>No accounts</li>
              <li>No audio uploads</li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="Twiddl showing an A in tune">
            <div className="echo echo-one" />
            <div className="echo echo-two" />
            <div className="phone">
              <img
                src="/twiddl-in-tune.jpg"
                alt="Twiddl tuner showing A4 at 440 hertz, perfectly in tune"
              />
            </div>
          </div>
        </section>

        <section className="feature-strip" aria-label="What makes Twiddl different">
          <div className="shell feature-grid">
            <article>
              <span className="feature-number">01</span>
              <h2>Just tune</h2>
              <p>A clear note and cents readout, with nothing between you and the pitch.</p>
            </article>
            <article>
              <span className="feature-number">02</span>
              <h2>Stays ready</h2>
              <p>It listens immediately and keeps the screen awake while you tune.</p>
            </article>
            <article>
              <span className="feature-number">03</span>
              <h2>Sound stays yours</h2>
              <p>Audio is analyzed on your device. Nothing is recorded, saved, or uploaded.</p>
            </article>
          </div>
        </section>

        <section className="settle shell" id="why">
          <div className="settle-phone">
            <img
              src="/twiddl-flat.jpg"
              alt="Twiddl showing a G3 that is 13.8 cents flat"
            />
          </div>
          <div className="settle-copy">
            <p className="eyebrow">Nothing in the way</p>
            <h2>Open it. You’re already tuning.</h2>
            <p>
              There’s no start button, account prompt, ad, or upgrade pitch
              between opening Twiddl and tuning a note. It listens immediately
              and stays focused on the one thing you came to do.
            </p>
            <div className="mini-gauge" aria-hidden="true">
              <span className="wave left-wave" />
              <span className="center-line" />
              <span className="wave right-wave" />
            </div>
          </div>
        </section>

        <section className="quiet-section">
          <div className="shell quiet-inner">
            <img src="/twiddl-icon.png" alt="" aria-hidden="true" />
            <div>
              <p className="eyebrow">One small app</p>
              <h2>One job, done calmly.</h2>
              <p>
                Twiddl is free. No subscriptions, gamification, pop-ups, or
                features competing with the note in front of you.
              </p>
            </div>
          </div>
        </section>

        <section className="changelog-teaser shell" aria-labelledby="latest-update-title">
          <div className="changelog-teaser-heading">
            <div>
              <p className="eyebrow">Latest update</p>
              <h2 id="latest-update-title">Small changes, kept in the open.</h2>
            </div>
            <a href="/changelog" className="text-link">
              Read the changelog <span aria-hidden="true">→</span>
            </a>
          </div>
          <article className="latest-card">
            <div className="release-meta">
              <span className="status-badge status-testing">In testing</span>
              <span>0.1.1</span>
            </div>
            <h3>Quieter notes, easier to hear.</h3>
            <p>
              The next update focuses on picking up soft low notes from
              unplugged electric guitars and basses, with a wider set of audio
              tests behind it.
            </p>
          </article>
        </section>

        <section className="maker shell">
          <p className="maker-label">A personal note</p>
          <div className="maker-copy">
            <h2>I built the tuner I wanted to use.</h2>
            <p>
              Twiddl started because I wanted a tuner that opened ready to use
              and didn’t surround a simple job with accounts, ads, or clutter.
              So I made one for myself that stays out of the way.
            </p>
            <p>
              I’m sharing it in case it feels better to someone else, too. This
              tuner is free, and it will stay free.
            </p>
            <a href="https://barbunzel.com" target="_blank" rel="noreferrer">
              More things I make at barbunzel.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
