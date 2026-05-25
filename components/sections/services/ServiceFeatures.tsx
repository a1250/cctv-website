import type { Service } from "@/types";

interface ServiceFeaturesProps {
  service: Service;
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section
      style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "100px 40px",
      }}
      className="svc-features-responsive"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px 80px",
          alignItems: "start",
        }}
        className="svc-features-grid-responsive"
      >
        {/* Left — editorial heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
            }}
          >
            <span style={{ display: "block", width: 22, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
            What&rsquo;s Included
          </div>
          <h2
            style={{
              fontFamily: "var(--font-brand, 'Cinzel', serif)",
              fontWeight: 400,
              fontSize: "clamp(22px, 2.8vw, 40px)",
              lineHeight: 1.12,
              letterSpacing: "0.04em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Every detail{" "}
            <span style={{ color: "var(--champagne, #d4b896)" }}>
              considered.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: 14,
              lineHeight: 1.7,
              color: "var(--ink-2)",
              margin: 0,
              maxWidth: 420,
            }}
          >
            Each system is designed from first principles around your property&rsquo;s
            specific requirements — not templated packages or off-the-shelf configurations.
          </p>

          {/* Decorative rule with tick marks */}
          <div
            aria-hidden="true"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              marginTop: 8,
            }}
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: i % 6 === 0 ? 1.5 : 1,
                  height: i % 6 === 0 ? 12 : 6,
                  marginInlineEnd: 4,
                  background: i % 6 === 0
                    ? "rgba(212,184,150,0.55)"
                    : "rgba(255,255,255,0.12)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right — frosted glass feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
          className="svc-feature-items-responsive"
        >
          {service.features.map((feature, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "20px 18px",
                background: "rgba(255,255,255,0.028)",
                border: "0.5px solid rgba(222,194,155,0.20)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                transition: "background .25s ease, border-color .25s ease",
              }}
              className="svc-feature-card"
            >
              {/* Champagne index glyph */}
              <div
                aria-hidden="true"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  flexShrink: 0,
                  paddingTop: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "8.5px",
                    letterSpacing: "0.08em",
                    color: "rgba(212,184,150,0.55)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    display: "block",
                    width: 1,
                    height: 18,
                    background: "rgba(212,184,150,0.20)",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: 1.55,
                  color: "var(--ink-2)",
                }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-feature-card:hover {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(222,194,155,0.42) !important;
        }
        @media (max-width: 920px) {
          .svc-features-grid-responsive { grid-template-columns: 1fr !important; gap: 48px !important; }
          .svc-features-responsive { padding: 72px 28px !important; }
        }
        @media (max-width: 600px) {
          .svc-feature-items-responsive { grid-template-columns: 1fr !important; }
          .svc-features-responsive { padding: 56px 22px !important; }
        }
      `}</style>
    </section>
  );
}
