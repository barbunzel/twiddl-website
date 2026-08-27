export function Header() {
  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Main navigation">
        {/* A plain anchor keeps navigation reliable in the deployed worker. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="brand" aria-label="Twiddl home">
          <img src="/twiddl-icon.png" alt="" />
          <span>TWIDDL</span>
        </a>
        <div className="nav-links">
          <a href="/changelog">Changelog</a>
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <div>
          <strong>TWIDDL</strong>
          <p>A small tuner for iPhone and Android, made by <a href="https://barbunzel.com">Barbunzel</a>.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://apps.apple.com/app/twiddl-chromatic-tuner/id6800441300"
            target="_blank"
            rel="noreferrer"
          >
            App Store
          </a>
          <span className="footer-status">Android beta</span>
          <a href="/changelog">Changelog</a>
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
        </div>
        <p className="copyright">© 2026 Twiddl</p>
      </div>
    </footer>
  );
}
