import Link from "next/link";
import { NAV_LINKS, FOOTER_STRINGS, COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(to bottom, transparent 0%, #09090b 72px, #09090b 100%)",
      }}
    >
    <div
      className="footer-inner"
      style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "64px 40px 36px",
      }}
    >
      {/* Top row: brand + nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 40,
          flexWrap: "wrap",
        }}
        className="footer-top-responsive"
      >
        {/* Brand */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: 0, background: "none" }}
          className="footer-brand-col"
        >
          {/* Plain img — Next.js Image wrapper creates isolating compositing layer */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={COMPANY.logoFooterSrc}
            alt={`${COMPANY.name} Logo`}
            className="footer-logo-img"
            style={{
              width: "100%",
              maxWidth: 200,
              height: "auto",
              display: "block",
              objectFit: "contain",
              background: "none",
              border: "none",
              boxShadow: "none",
              padding: 0,
            }}
          />
          <div
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "9.5px",
              letterSpacing: "0.22em",
              color: "var(--ink-3)",
              textTransform: "uppercase",
              marginTop: 16,
            }}
            className="footer-tagline"
          >
            {FOOTER_STRINGS.tagline}
          </div>
        </div>

        {/* Nav */}
        <nav
          aria-label="Footer"
          style={{ display: "flex", gap: 32, flexWrap: "wrap" }}
          className="footer-nav-responsive"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "11.5px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-2)",
                textDecoration: "none",
                transition: "color .25s ease",
              }}
              className="footer-nav-link"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/planner"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "11.5px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--champagne, #d4b896)",
              textDecoration: "none",
              transition: "color .25s ease",
            }}
            className="footer-nav-link"
          >
            Start Project
          </Link>
        </nav>
      </div>

      {/* Rule */}
      <div
        style={{
          height: 1,
          background: "var(--line)",
          margin: "40px 0 22px",
        }}
        aria-hidden="true"
      />

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "9.5px",
          letterSpacing: "0.2em",
          color: "var(--ink-3)",
          textTransform: "uppercase",
        }}
        className="footer-bottom-responsive"
      >
        <div>{FOOTER_STRINGS.copyright}</div>
        <div style={{ color: "rgba(255,255,255,0.22)" }}>
          LIC. 4012 · INSURED · CEDIA · ATMOS CERTIFIED
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover { color: var(--ink) !important; }
@media (max-width: 720px) {
          .footer-top-responsive {
            flex-direction: column;
            align-items: center !important;
            gap: 32px;
          }
          .footer-brand-col {
            align-items: center !important;
            text-align: center;
            width: 100%;
          }
          .footer-tagline { text-align: center; }
          .footer-nav-responsive {
            gap: 16px 28px;
            justify-content: center;
          }
          .footer-logo-img { max-width: 288px !important; }
        }
        @media (max-width: 480px) {
          .footer-inner { padding: 48px 22px 28px !important; }
          .footer-bottom-responsive { flex-direction: column; align-items: center; gap: 10px; text-align: center; }
          .footer-logo-img { max-width: 260px !important; }
        }
      `}</style>
    </div>
    </footer>
  );
}
