import Link from "next/link";
import { HOME_STRINGS } from "@/lib/constants";

export default function CtaSection() {
  const { cta } = HOME_STRINGS;

  return (
    <section
      style={{
        padding: "160px 40px",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        textAlign: "center",
      }}
      className="cta-section-responsive"
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        {/* Eyebrow */}
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
          {cta.eyebrow}
          <span style={{ display: "block", width: 28, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
            fontWeight: 300,
            fontSize: "clamp(42px, 5.6vw, 80px)",
            lineHeight: 1.04,
            margin: 0,
            textWrap: "balance",
            color: "var(--ink)",
          }}
        >
          {cta.titleBefore}{" "}
          <span style={{ fontStyle: "italic", color: "var(--champagne, #d4b896)", fontWeight: 300 }}>
            {cta.titleAccent}
          </span>
          <br />
          {cta.titleAfter}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--ink-2)",
            maxWidth: 540,
            margin: 0,
          }}
        >
          {cta.subtitle}
        </p>

        {/* Primary CTA */}
        <Link
          href="/planner"
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "20px 36px",
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#0a0a0c",
            background: "var(--champagne)",
            border: "1px solid var(--champagne)",
            borderRadius: 0,
            textDecoration: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 14px 40px rgba(212,184,150,0.18)",
            transition: "transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease, background .25s ease",
          }}
          className="cta-btn-primary"
        >
          <span>{cta.primaryCta}</span>
          <span
            aria-hidden="true"
            style={{ position: "relative", display: "inline-block", width: 14, height: 1, background: "currentColor" }}
          >
            <span
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                width: 6,
                height: 6,
                borderTop: "1px solid currentColor",
                borderRight: "1px solid currentColor",
                transform: "translateY(-50%) rotate(45deg)",
                display: "block",
              }}
            />
          </span>
        </Link>
      </div>

      <style>{`
        .cta-btn-primary:hover {
          background: var(--accent-soft) !important;
          transform: translateY(-1px);
          box-shadow: 0 0 30px rgba(212,184,150,0.35), 0 18px 50px rgba(212,184,150,0.25) !important;
        }
        @media (max-width: 720px) {
          .cta-section-responsive { padding: 110px 28px !important; }
        }
        @media (max-width: 720px) {
          .cta-section-responsive { padding: 90px 22px !important; }
        }
      `}</style>
    </section>
  );
}
