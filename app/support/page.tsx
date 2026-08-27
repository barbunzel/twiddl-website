import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = {
  title: "Support",
  description: "Help with Twiddl, the chromatic tuner for iPhone and Android.",
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="document-page shell support-page">
        <p className="eyebrow">Need a hand?</p>
        <h1>Support</h1>
        <p className="document-intro">
          Try the quick fixes below. If Twiddl still feels off, send me a note
          using the support button.
        </p>

        <div className="support-list">
          <section>
            <span>01</span>
            <div>
              <h2>No note appears</h2>
              <p>Play one steady note close to your device’s microphone. If you’re tuning an unplugged electric guitar or bass, bring the device closer to the strings or body—particularly for the lowest strings. Keep the microphone uncovered, mute neighboring strings, and let the note ring.</p>
            </div>
          </section>
          <section>
            <span>02</span>
            <div>
              <h2>Microphone access is off</h2>
              <p>Open your device settings, find Twiddl, and allow microphone access. On Android, this is usually under Apps, Twiddl, then Permissions. Return to the app and it will begin listening.</p>
            </div>
          </section>
          <section>
            <span>03</span>
            <div>
              <h2>The reading seems unusual</h2>
              <p>Move closer, tune one string at a time, and reduce competing sound from fans, conversation, or speakers. Disconnect Bluetooth audio if the input seems unexpected.</p>
            </div>
          </section>
          <section>
            <span>04</span>
            <div>
              <h2>Listening stopped after a call or voice assistant</h2>
              <p>Twiddl normally reconnects automatically. If it does not, pause and resume listening once.</p>
            </div>
          </section>
        </div>

        <section className="contact-card">
          <div>
            <p className="eyebrow">Still wobbling?</p>
            <h2>Tell me what happened.</h2>
            <p>Include your device model, operating-system version, and the instrument or sound you were tuning.</p>
          </div>
          <a href="mailto:hello@twiddl.app?subject=Twiddl%20support">
            Email Twiddl Support
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
