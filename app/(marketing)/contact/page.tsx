import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_STRINGS, COMPANY } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: CONTACT_STRINGS.subtitle,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Page header ── */}
        <section
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "110px 40px 72px",
          }}
          className="contact-header-responsive"
        >
          <div
            style={{
              maxWidth: 680,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "10.5px",
                letterSpacing: "0.42em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
              }}
            >
              <span style={{ display: "block", width: 28, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
              {CONTACT_STRINGS.eyebrow}
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                fontWeight: 300,
                fontSize: "clamp(36px, 5vw, 76px)",
                lineHeight: 1.02,
                color: "var(--ink)",
                margin: 0,
                textWrap: "balance",
              }}
            >
              {CONTACT_STRINGS.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ fontStyle: "italic", color: "var(--champagne, #d4b896)" }}>
                {CONTACT_STRINGS.title.split(" ").slice(-1)[0]}
              </span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--ink-2)",
                maxWidth: 520,
                margin: 0,
              }}
            >
              {CONTACT_STRINGS.subtitle}
            </p>
          </div>
        </section>

        {/* ── Two-column body ── */}
        <section
          style={{
            borderTop: "1px solid var(--line)",
            maxWidth: 1320,
            margin: "0 auto",
            padding: "72px 40px 120px",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "60px 80px",
            alignItems: "start",
          }}
          className="contact-body-responsive"
        >
          {/* ── Left: company info panel ── */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 40, position: "sticky", top: 96 }}>
            {/* Phone */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "9.5px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  paddingBottom: 10,
                  borderBottom: "1px solid var(--line)",
                }}
              >
                Phone
              </div>
              <Link
                href={`tel:${COMPANY.phone}`}
                style={{
                  fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                  fontWeight: 300,
                  fontSize: "clamp(18px, 1.8vw, 26px)",
                  color: "var(--ink)",
                  textDecoration: "none",
                  transition: "color .2s ease",
                }}
                className="contact-info-link"
              >
                {COMPANY.phone}
              </Link>
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "9.5px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  paddingBottom: 10,
                  borderBottom: "1px solid var(--line)",
                }}
              >
                Email
              </div>
              <Link
                href={`mailto:${COMPANY.email}`}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "var(--ink-2)",
                  textDecoration: "none",
                  transition: "color .2s ease",
                  wordBreak: "break-all",
                }}
                className="contact-info-link"
              >
                {COMPANY.email}
              </Link>
            </div>

            {/* Location */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "9.5px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  paddingBottom: 10,
                  borderBottom: "1px solid var(--line)",
                }}
              >
                Location
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  margin: 0,
                }}
              >
                {COMPANY.address}
                <br />
                Serving Greater Los Angeles
              </p>
            </div>

            {/* Response time callout */}
            <div
              style={{
                padding: "18px 20px",
                background: "rgba(212,184,150,0.06)",
                border: "1px solid rgba(212,184,150,0.18)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "9.5px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "var(--champagne, #d4b896)",
                }}
              >
                Response Time
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "var(--ink-2)",
                  margin: 0,
                }}
              >
                We respond to all enquiries within one business day. For urgent
                matters, call us directly.
              </p>
            </div>
          </aside>

          {/* ── Right: glassmorphic form ── */}
          <ContactForm />
        </section>
      </main>
      <Footer />

      <style>{`
        .contact-info-link:hover { color: var(--champagne, #d4b896) !important; }
        @media (max-width: 960px) {
          .contact-body-responsive {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 56px 28px 80px !important;
          }
          .contact-header-responsive { padding: 80px 28px 56px !important; }
        }
        @media (max-width: 720px) {
          .contact-header-responsive { padding: 64px 22px 40px !important; }
          .contact-body-responsive { padding: 40px 22px 72px !important; }
        }
      `}</style>
    </>
  );
}
