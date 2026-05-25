import type { Metadata } from "next";
import { ABOUT_STRINGS, COMPANY } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT_STRINGS.story.slice(0, 160),
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero band */}
        <section
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "120px 40px 80px",
          }}
          className="about-header-responsive"
        >
          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 24,
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
              {ABOUT_STRINGS.eyebrow}
              <span style={{ display: "block", width: 28, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                fontWeight: 300,
                fontSize: "clamp(32px, 4.6vw, 68px)",
                lineHeight: 1.06,
                margin: 0,
                color: "var(--ink)",
                textWrap: "balance",
              }}
            >
              {ABOUT_STRINGS.title}{" "}
              <span style={{ fontStyle: "italic", color: "var(--champagne, #d4b896)" }}>
                {ABOUT_STRINGS.titleAccent}
              </span>
            </h1>
          </div>
        </section>

        {/* Story section */}
        <section
          style={{
            borderTop: "1px solid var(--line)",
            maxWidth: 1320,
            margin: "0 auto",
            padding: "80px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "60px 80px",
            alignItems: "start",
          }}
          className="about-story-responsive"
        >
          {/* Left label */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "9.5px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 16,
              }}
            >
              Est. 2014
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(28px, 3vw, 44px)",
                lineHeight: 1.1,
                color: "var(--champagne, #d4b896)",
              }}
            >
              {COMPANY.name}
            </div>
          </div>

          {/* Right — story text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--ink-2)",   /* ← correct contrast on dark bg */
                margin: "0 0 28px",
                maxWidth: 680,
              }}
            >
              {ABOUT_STRINGS.story}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                margin: 0,
                maxWidth: 680,
              }}
            >
              Today, 360 Integrated Systems operates across Southern California,
              specialising in pre-construction wiring programs, renovation retrofits, and
              commercial installations for hotels, corporate campuses, and multi-family
              developments. Every project is led by a senior engineer — not a salesperson.
            </p>
          </div>
        </section>

        {/* Values grid */}
        <section
          style={{
            borderTop: "1px solid var(--line)",
            maxWidth: 1320,
            margin: "0 auto",
            padding: "80px 40px 120px",
          }}
          className="about-values-responsive"
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "10px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
              marginBottom: 56,
            }}
          >
            <span style={{ display: "block", width: 22, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
            {ABOUT_STRINGS.valuesTitle}
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 56 }}
            className="about-values-grid"
          >
            {ABOUT_STRINGS.values.map((value, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                {/* Number */}
                <div
                  style={{
                    fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                    fontStyle: "italic",
                    fontSize: 52,
                    fontWeight: 300,
                    lineHeight: 1,
                    color: "var(--champagne, #d4b896)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  aria-hidden="true"
                  style={{ width: 32, height: 1, background: "var(--line-strong)", margin: "22px 0 18px" }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 15,
                    letterSpacing: "0.04em",
                    color: "var(--ink)",
                    margin: "0 0 12px",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--ink-2)",   /* ← correct contrast */
                    margin: 0,
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 920px) {
          .about-story-responsive { grid-template-columns: 1fr !important; gap: 36px !important; padding: 56px 28px !important; }
          .about-values-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-header-responsive { padding: 80px 28px 56px !important; }
          .about-values-responsive { padding: 56px 28px 80px !important; }
        }
        @media (max-width: 720px) {
          .about-header-responsive { padding: 64px 22px 48px !important; }
          .about-story-responsive { padding: 48px 22px !important; }
          .about-values-responsive { padding: 48px 22px 72px !important; }
        }
      `}</style>
    </>
  );
}
