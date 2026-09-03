import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What is new in Twiddl, and what is being tested next.",
};

export default function Changelog() {
  return (
    <>
      <Header />
      <main className="changelog-page shell">
        <header className="changelog-intro">
          <p className="eyebrow">Changelog</p>
          <h1>What’s new in Twiddl.</h1>
          <p>
            A small, honest record of what has shipped and what is still being
            tested. No pretending that work in progress is already in your
            pocket.
          </p>
        </header>

        <div className="release-list">
          <article className="release-entry">
            <div className="release-date">
              <span className="status-badge status-released">Released</span>
              <time dateTime="2026-09">September 2026</time>
            </div>
            <div className="release-copy">
              <p className="release-version">0.1.2 · iPhone and Android</p>
              <h2>Faster pickup, steadier tuning.</h2>
              <p>
                Version 0.1.2 is live on iPhone and available to Android testers
                through Google Play closed testing.
              </p>
              <ul>
                <li>
                  Better pickup of quiet low strings, including unplugged
                  electric guitars and basses.
                </li>
                <li>
                  More reliable octave selection when neighboring harmonics
                  ring together, including on 12-string guitars.
                </li>
                <li>
                  Smoother transitions between notes and better response around
                  background noise.
                </li>
              </ul>
            </div>
          </article>

          <article className="release-entry">
            <div className="release-date">
              <span className="status-badge status-released">Released</span>
              <time dateTime="2026-08">August 2026</time>
            </div>
            <div className="release-copy">
              <p className="release-version">0.1.1 · iPhone and Android</p>
              <h2>Quieter strings, clearer high notes.</h2>
              <p>
                Version 0.1.1 is live on iPhone and available to Android testers
                through Google Play closed testing.
              </p>
              <ul>
                <li>
                  Better pickup of soft low notes, especially from unplugged
                  electric guitars and basses.
                </li>
                <li>More accurate tracking at the very top of the tuner’s range.</li>
                <li>
                  A broader audio test suite covering plucks, note decay,
                  harmonics, background noise, and common recording formats.
                </li>
              </ul>
            </div>
          </article>

          <article className="release-entry">
            <div className="release-date">
              <span className="status-badge status-beta">Closed test</span>
              <time dateTime="2026-08">August 2026</time>
            </div>
            <div className="release-copy">
              <p className="release-version">Android beta</p>
              <h2>Twiddl comes to Android.</h2>
              <p>
                The native Android version entered closed testing on Google
                Play, carrying over the same focused interface, automatic
                listening, adjustable concert pitch, and on-device audio
                processing.
              </p>
            </div>
          </article>

          <article className="release-entry">
            <div className="release-date">
              <span className="status-badge status-released">Released</span>
              <time dateTime="2026-08">August 2026</time>
            </div>
            <div className="release-copy">
              <p className="release-version">0.1.0 · iPhone</p>
              <h2>The first public release.</h2>
              <p>
                Twiddl launched as a free chromatic tuner that opens ready to
                use: no accounts, ads, subscriptions, tracking, or audio
                uploads.
              </p>
              <ul>
                <li>Automatic listening and chromatic detection from A0 to C8.</li>
                <li>Note, octave, frequency, and cents readouts.</li>
                <li>Adjustable A4 reference pitch from 430 to 450 Hz.</li>
              </ul>
              <a
                className="release-link"
                href="https://apps.apple.com/app/twiddl-chromatic-tuner/id6800441300"
                target="_blank"
                rel="noreferrer"
              >
                View on the App Store <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
