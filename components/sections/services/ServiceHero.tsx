import Link from "next/link";
import type { Service } from "@/types";
import { SERVICES_STRINGS } from "@/lib/constants";
import { resolveProjectImage } from "@/lib/utils";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "68vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Cinematic background from Unsplash */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${resolveProjectImage(service.heroUnsplashId, "auto=format&fit=crop&w=1920&q=72")})`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          zIndex: 0,
        }}
      />

      {/* Multi-layer overlay — gradient from near-black bottom to partially transparent top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(4,5,8,0.92) 0%, rgba(4,5,8,0.55) 40%, rgba(4,5,8,0.22) 70%, rgba(4,5,8,0.08) 100%)",
          zIndex: 1,
        }}
      />

      {/* Vignette edges */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 100% at 50% 100%, transparent 30%, rgba(4,5,8,0.45) 80%, rgba(4,5,8,0.80) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* All 4 corner crosshairs */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <div
          key={pos}
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 18,
            height: 18,
            zIndex: 5,
            ...(pos === "tl" ? { top: 24, left: 40, borderTop: "1px solid rgba(212,184,150,0.50)", borderLeft: "1px solid rgba(212,184,150,0.50)" } : {}),
            ...(pos === "tr" ? { top: 24, right: 40, borderTop: "1px solid rgba(212,184,150,0.50)", borderRight: "1px solid rgba(212,184,150,0.50)" } : {}),
            ...(pos === "bl" ? { bottom: 24, left: 40, borderBottom: "1px solid rgba(212,184,150,0.50)", borderLeft: "1px solid rgba(212,184,150,0.50)" } : {}),
            ...(pos === "br" ? { bottom: 24, right: 40, borderBottom: "1px solid rgba(212,184,150,0.50)", borderRight: "1px solid rgba(212,184,150,0.50)" } : {}),
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 6,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 40px 72px",
          width: "100%",
        }}
        className="service-hero-content-responsive"
      >
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "10px",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--ink-3)",
            marginBottom: 24,
          }}
        >
          <Link
            href="/services"
            style={{ color: "var(--ink-3)", textDecoration: "none" }}
            className="breadcrumb-link"
          >
            {SERVICES_STRINGS.serviceHero.breadcrumbRoot}
          </Link>
          <span style={{ color: "rgba(255,255,255,0.22)" }}>·</span>
          <span style={{ color: "var(--champagne, #d4b896)" }}>{service.name}</span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-brand, 'Cinzel', serif)",
            fontWeight: 400,
            fontSize: "clamp(32px, 5vw, 72px)",
            lineHeight: 1.02,
            letterSpacing: "0.005em",
            color: "var(--ink)",
            margin: "0 0 24px",
            maxWidth: 820,
            textShadow: "0 4px 40px rgba(0,0,0,0.5)",
          }}
        >
          {service.name}
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--ink-2)",
            maxWidth: 620,
            margin: "0 0 36px",
          }}
        >
          {service.description}
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link
            href="/planner"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 28px",
              fontFamily: "var(--font-sans)",
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#0a0a0c",
              background: "var(--champagne, #d4b896)",
              border: "1px solid var(--champagne, #d4b896)",
              borderRadius: 0,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            className="svc-cta-primary"
          >
            {SERVICES_STRINGS.serviceHero.plannerLabel}
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 28px",
              fontFamily: "var(--font-sans)",
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--ink)",
              background: "transparent",
              border: "1px solid var(--line-strong)",
              borderRadius: 0,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            className="svc-cta-ghost"
          >
            {SERVICES_STRINGS.serviceHero.ctaLabel}
          </Link>
        </div>
      </div>

      <style>{`
        .breadcrumb-link:hover { color: var(--ink) !important; }
        .svc-cta-primary:hover { background: var(--accent-soft) !important; }
        .svc-cta-ghost:hover { border-color: rgba(255,255,255,0.6) !important; background: rgba(255,255,255,0.04) !important; }
        @media (max-width: 720px) {
          .service-hero-content-responsive { padding: 0 22px 56px !important; }
        }
      `}</style>
    </section>
  );
}
