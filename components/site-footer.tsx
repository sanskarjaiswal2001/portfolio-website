export function SiteFooter() {
  return (
    <footer className="pg-footer">
      <div className="pg-container">
        {/* Main footer row */}
        <div className="row">
          <div>© {new Date().getFullYear()} Sanskar Jaiswal. All rights reserved.</div>
          <div className="footer-links">
            <a href="mailto:sanskar.jaiswal.work@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
            <span className="sep">·</span>
            <a href="https://github.com/sanskarjaiswal2001" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className="sep">·</span>
            <a href="https://linkedin.com/in/sanskarjaiswal" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="footer-meta">
          <div className="footer-block">
            <span className="footer-tag">Privacy</span>
            <span>
              This site collects no personal data, uses no cookies, and runs no third-party
              trackers. Analytics are privacy-preserving and anonymized.
            </span>
          </div>
          <div className="footer-block">
            <span className="footer-tag">Security</span>
            <span>
              Found a vulnerability? Report it securely via email — I take disclosure
              seriously and aim to respond within 48 hours.
            </span>
          </div>
          <div className="footer-block">
            <span className="footer-tag">Guidelines</span>
            <span>
              Content is original unless credited. Code snippets are MIT-licensed unless
              noted. Reach out for reuse permissions.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
