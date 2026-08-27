import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Twiddl app handles audio and data on iPhone and Android.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="document-page shell">
        <p className="eyebrow">Plain-language policy</p>
        <h1>Privacy</h1>
        <p className="document-intro">
          Twiddl does not collect personal data. This policy covers the Twiddl
          app for iPhone and Android.
        </p>
        <p className="updated">Effective August 22, 2026</p>

        <div className="document-grid">
          <section>
            <h2>Microphone</h2>
            <p>
              Twiddl uses the microphone only while the tuner is listening.
              Audio is analyzed in memory on your device. It is never recorded,
              saved, uploaded, or transmitted.
            </p>
          </section>
          <section>
            <h2>Local settings</h2>
            <p>
              Your concert-pitch preference is stored on your device so Twiddl
              can remember it. Removing the app also removes this local setting.
            </p>
          </section>
          <section>
            <h2>Data collection</h2>
            <p>
              The app has no accounts, advertising, analytics, tracking, or
              third-party data collection. There is no account or audio data for
              us to retain or delete.
            </p>
          </section>
          <section>
            <h2>Your control</h2>
            <p>
              You can pause listening inside Twiddl or revoke microphone access
              at any time in your device settings.
            </p>
          </section>
          <section>
            <h2>Changes</h2>
            <p>
              If Twiddl’s data practices change, this policy and the relevant
              app-store privacy disclosures will be updated before the change
              ships.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Questions about privacy are welcome. Please use the{" "}
              <a href="/support">Support page</a> to get in touch.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
