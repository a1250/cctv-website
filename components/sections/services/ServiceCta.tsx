import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function ServiceCta() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "100px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="svc-cta-responsive"
    >
      {/* Ambient champagne glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: 600,
          maxHeight: 600,
          background: "radial-gradient(circle, rgba(212,184,150,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 700,
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
          Ready to Begin
          <span style={{ display: "block", width: 28, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-brand, 'Cinzel', serif)",
            fontWeight: 400,
            fontSize: "clamp(26px, 3.8vw, 56px)",
            lineHeight: 1.10,
            letterSpacing: "0.04em",
            color: "var(--ink)",
            margin: 0,
            textWrap: "balance",
          }}
        >
          Let&rsquo;s design your{" "}
          <span style={{ color: "var(--champagne, #d4b896)" }}>
            perfect system.
          </span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--ink-2)",
            maxWidth: 500,
            margin: 0,
          }}
        >
          A 45-minute discovery call with our design engineering team — no script, no
          package decks. Just your space and your ambition.
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/planner"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "18px 36px",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#0a0a0c",
              background: "var(--champagne, #d4b896)",
              border: "1px solid var(--champagne, #d4b896)",
              borderRadius: 0,
              textDecoration: "none",
              boxShadow: "0 14px 40px rgba(212,184,150,0.18)",
              transition: "transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease, background .25s ease",
            }}
            className="svc-cta-primary-btn"
          >
            <span>Launch Project Planner</span>
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
          <Link
            href={`tel:${COMPANY.phoneRaw}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "18px 36px",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-2)",
              background: "transparent",
              border: "1px solid var(--line-strong)",
              borderRadius: 0,
              textDecoration: "none",
              transition: "color .25s ease, border-color .25s ease",
            }}
            className="svc-cta-phone-btn"
          >
            {COMPANY.phone}
          </Link>
        </div>
      </div>

      <style>{`
        .svc-cta-primary-btn:hover {
          background: var(--accent-soft) !important;
          transform: translateY(-1px);
          box-shadow: 0 0 30px rgba(212,184,150,0.35), 0 18px 50px rgba(212,184,150,0.22) !important;
        }
        .svc-cta-phone-btn:hover { color: var(--ink) !important; border-color: rgba(255,255,255,0.55) !important; }
        @media (max-width: 720px) {
          .svc-cta-responsive { padding: 72px 22px !important; }
        }
      `}</style>
    </section>
  );
}
