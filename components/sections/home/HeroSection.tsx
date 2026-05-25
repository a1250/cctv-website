import Link from "next/link";
import { HOME_STRINGS } from "@/lib/constants";

export default function HeroSection() {
  const { hero } = HOME_STRINGS;

  return (
    <section
      id="top"
      style={{
        minHeight: "calc(100svh - var(--nav-h, 70px))",
        display: "grid",
        placeItems: "center",
        padding: "60px 40px 100px",
        position: "relative",
      }}
      className="hero-responsive"
    >
      {/* Main content */}
      <div
        style={{
          maxWidth: 1080,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 30,
        }}
      >
        {/* Eyebrow with flanking rules */}
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
          {hero.eyebrow}
          <span style={{ display: "block", width: 28, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
            fontWeight: 300,
            fontSize: "clamp(38px, 7vw, 100px)",
            lineHeight: 1.02,
            letterSpacing: "0.005em",
            color: "var(--ink)",
            margin: 0,
            textWrap: "balance",
            textShadow: "0 2px 40px rgba(0,0,0,0.4)",
          }}
        >
          {hero.headline}
          <span style={{ display: "inline-block", width: "0.6em" }} aria-hidden="true" />
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--champagne, #d4b896)",
            }}
          >
            {hero.headlineAccent}
          </span>
        </h1>

        {/* Thin vertical rule */}
        <div
          aria-hidden="true"
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0))",
          }}
        />

        {/* Subheadline */}
        <p
          style={{
            maxWidth: 620,
            margin: 0,
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "clamp(14px, 1.1vw, 16px)",
            lineHeight: 1.65,
            color: "var(--ink-2)",
          }}
        >
          {hero.subheadline}
        </p>

        {/* CTA row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 8,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          className="hero-cta-responsive"
        >
          <Link
            href="/planner"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 28px",
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.22em",
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
            className="btn-primary-hero"
          >
            <span>{hero.primaryCta}</span>
            <BtnArrow />
          </Link>

          <Link
            href="/services"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 28px",
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--ink)",
              background: "transparent",
              border: "1px solid var(--line-strong)",
              borderRadius: 0,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "transform .3s cubic-bezier(.2,.7,.2,1), border-color .25s ease, background .25s ease",
            }}
            className="btn-ghost-hero"
          >
            <span>{hero.secondaryCta}</span>
            <BtnArrow />
          </Link>
        </div>
      </div>

      {/* Telemetry corners */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 28,
          left: 36,
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "9.5px",
          letterSpacing: "0.18em",
          color: "var(--ink-3)",
          textTransform: "uppercase",
          pointerEvents: "none",
          lineHeight: 1.6,
        }}
        className="corner-bl-responsive"
      >
        <div style={{ color: "rgba(255,255,255,0.18)" }}>{hero.telemetry.bl.dim}</div>
        <div>{hero.telemetry.bl.label}</div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 28,
          right: 36,
          textAlign: "right",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "9.5px",
          letterSpacing: "0.18em",
          color: "var(--ink-3)",
          textTransform: "uppercase",
          pointerEvents: "none",
          lineHeight: 1.6,
        }}
        className="corner-br-responsive"
      >
        <div style={{ color: "rgba(255,255,255,0.18)" }}>{hero.telemetry.br.dim}</div>
        <div>{hero.telemetry.br.label}</div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "9.5px",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
        }}
        className="scroll-hint-responsive"
      >
        <span>{hero.scrollLabel}</span>
        <span
          style={{
            width: 1,
            height: 36,
            background: "linear-gradient(to bottom, rgba(212,184,150,0.6), rgba(212,184,150,0))",
            animation: "scrollPulse 2.4s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        .btn-primary-hero:hover {
          background: var(--accent-soft) !important;
          transform: translateY(-1px);
          box-shadow: 0 0 30px rgba(212,184,150,0.35), 0 18px 50px rgba(212,184,150,0.25) !important;
        }
        .btn-ghost-hero:hover {
          border-color: rgba(255,255,255,0.65) !important;
          background: rgba(255,255,255,0.04) !important;
          transform: translateY(-1px);
        }
        @media (max-width: 920px) {
          .corner-br-responsive { font-size: 9px !important; }
          .corner-bl-responsive { font-size: 9px !important; }
        }
        @media (max-width: 720px) {
          .hero-responsive { padding: 50px 22px 100px !important; }
          .hero-cta-responsive { flex-direction: column; width: 100%; gap: 12px !important; }
          .hero-cta-responsive a { width: 100%; justify-content: space-between; padding: 16px 22px !important; }
          .corner-br-responsive { display: none !important; }
          .scroll-hint-responsive { display: none !important; }
        }
        @media (max-width: 480px) {
          .corner-bl-responsive { left: 22px !important; bottom: 22px !important; }
        }
      `}</style>
    </section>
  );
}

function BtnArrow() {
  return (
    <span
      aria-hidden="true"
      style={{ position: "relative", display: "inline-block", width: 14, height: 1, background: "currentColor" }}
      className="btn-arrow-inner"
    >
      <span
        style={{
          content: "",
          position: "absolute",
          right: 0,
          top: "50%",
          width: 6,
          height: 6,
          borderTop: "1px solid currentColor",
          borderRight: "1px solid currentColor",
          transform: "translateY(-50%) rotate(45deg)",
        }}
      />
    </span>
  );
}
