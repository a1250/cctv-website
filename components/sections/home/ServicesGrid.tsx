import Link from "next/link";
import { SERVICES, HOME_STRINGS } from "@/lib/constants";
import { resolveProjectImage } from "@/lib/utils";

/* Custom SVG service icons — composed only from geometric primitives */
function ServiceIcon({ kind }: { kind: string }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "cameras":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="15" />
          <circle cx="20" cy="20" r="10" />
          <circle cx="20" cy="20" r="5" />
          <circle cx="20" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="33" cy="9" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "alarm-systems":
      return (
        <svg {...common}>
          <path d="M20 4 L33 8 V19 C33 26.5 27.2 32 20 35 C12.8 32 7 26.5 7 19 V8 Z" />
          <circle cx="20" cy="20" r="3.2" />
          <line x1="20" y1="13" x2="20" y2="16" />
          <line x1="20" y1="24" x2="20" y2="27" />
        </svg>
      );
    case "intercom-access":
      return (
        <svg {...common}>
          <rect x="9" y="5" width="22" height="30" rx="1.5" />
          <circle cx="15" cy="13" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="20" cy="13" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="25" cy="13" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="15" cy="19" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="20" cy="19" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="25" cy="19" r="1.4" fill="currentColor" stroke="none" />
          <line x1="13" y1="27" x2="27" y2="27" />
          <line x1="13" y1="30" x2="22" y2="30" />
        </svg>
      );
    case "networks-wifi":
      return (
        <svg {...common}>
          <rect x="6" y="7" width="28" height="7" rx="1" />
          <rect x="6" y="17" width="28" height="7" rx="1" />
          <rect x="6" y="27" width="28" height="7" rx="1" />
          <circle cx="10" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="10" cy="20.5" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="10" cy="30.5" r="0.9" fill="currentColor" stroke="none" />
          <line x1="25" y1="10.5" x2="30" y2="10.5" />
          <line x1="25" y1="20.5" x2="30" y2="20.5" />
          <line x1="25" y1="30.5" x2="30" y2="30.5" />
        </svg>
      );
    case "sound-systems":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="2.4" fill="currentColor" stroke="none" />
          <path d="M12 12 A12 12 0 0 1 28 12" />
          <path d="M7 7 A20 20 0 0 1 33 7" />
          <path d="M12 28 A12 12 0 0 0 28 28" />
          <path d="M7 33 A20 20 0 0 0 33 33" />
        </svg>
      );
    case "home-cinema":
      return (
        <svg {...common}>
          <rect x="4" y="11" width="22" height="18" rx="1.5" />
          <circle cx="11" cy="20" r="3.5" />
          <circle cx="11" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <path d="M26 15 L34 11 V29 L26 25 Z" />
        </svg>
      );
    case "led-lighting":
      return (
        <svg {...common}>
          <circle cx="20" cy="16" r="8" />
          <line x1="20" y1="4" x2="20" y2="7" />
          <line x1="20" y1="33" x2="20" y2="36" />
          <line x1="8" y1="8" x2="10.1" y2="10.1" />
          <line x1="29.9" y1="21.9" x2="32" y2="24" />
          <line x1="4" y1="16" x2="7" y2="16" />
          <line x1="33" y1="16" x2="36" y2="16" />
          <line x1="8" y1="24" x2="10.1" y2="21.9" />
          <line x1="29.9" y1="10.1" x2="32" y2="8" />
          <line x1="15" y1="25" x2="25" y2="25" />
          <line x1="16" y1="28.5" x2="24" y2="28.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesGrid() {
  const { services } = HOME_STRINGS;

  return (
    <section
      id="services"
      style={{
        position: "relative",
        maxWidth: 1320,
        margin: "0 auto",
        padding: "140px 40px",
      }}
      className="section-responsive"
    >
      {/* Section header */}
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto 80px",
          display: "flex",
          flexDirection: "column",
          gap: 22,
          alignItems: "center",
          textAlign: "center",
        }}
        className="section-head-responsive"
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
          {services.eyebrow}
          <span style={{ display: "block", width: 28, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
        </div>
        <h2
          style={{
            fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
            fontWeight: 300,
            fontSize: "clamp(34px, 4.6vw, 68px)",
            lineHeight: 1.04,
            letterSpacing: "0.005em",
            margin: 0,
            color: "var(--ink)",
          }}
        >
          {services.title}
          <span style={{ display: "inline-block", width: "0.4em" }} aria-hidden="true" />
          <span style={{ fontStyle: "italic", color: "var(--champagne, #d4b896)", fontWeight: 300 }}>
            {services.titleAccent}
          </span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--ink-2)",
            margin: 0,
            maxWidth: 540,
          }}
        >
          {services.subtitle}
        </p>
      </div>

      {/* Services grid — champagne dividers via gap:1px trick */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "rgba(212,184,150,0.18)",
        }}
        className="services-grid-responsive"
      >
        {SERVICES.map((service, i) => {
          const isWide = i === SERVICES.length - 1;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              style={{
                position: "relative",
                padding: isWide ? "44px 56px" : "44px 36px 96px",
                minHeight: isWide ? 200 : 340,
                overflow: "hidden",
                display: "block",
                textDecoration: "none",
                color: "inherit",
                gridColumn: isWide ? "1 / -1" : undefined,
              }}
              className="service-card"
            >
              {/* Layer 1 — background image */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${resolveProjectImage(service.unsplashId, "auto=format&fit=crop&w=800&q=65")})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />

              {/* Layer 2 — frosted glass overlay */}
              <span
                aria-hidden="true"
                className="card-glass"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(6,7,12,0.62)",
                  WebkitBackdropFilter: "blur(20px) saturate(130%)",
                  backdropFilter: "blur(20px) saturate(130%)",
                  zIndex: 1,
                }}
              />

              {/* Layer 3 — champagne vignette */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(212,184,150,0.07) 0%, transparent 50%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 3, height: "100%" }}>
                {/* Index */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    letterSpacing: "0.22em",
                    color: "var(--ink-3)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {isWide ? (
                  /* ── Wide (full-row) layout ── */
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 64,
                      height: "100%",
                    }}
                    className="card-wide-inner"
                  >
                    {/* Icon */}
                    <div
                      style={{ color: "var(--champagne, #d4b896)", flexShrink: 0 }}
                      className="card-icon-inner"
                    >
                      <ServiceIcon kind={service.slug} />
                    </div>

                    {/* Text group */}
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                          fontWeight: 400,
                          fontSize: 26,
                          lineHeight: 1.2,
                          color: "var(--ink)",
                          margin: "0 0 12px",
                        }}
                      >
                        {service.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 300,
                          fontSize: "13.5px",
                          lineHeight: 1.65,
                          color: "var(--ink-2)",
                          margin: 0,
                          maxWidth: 640,
                        }}
                      >
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Arrow — far right */}
                    <span
                      aria-hidden="true"
                      style={{
                        display: "block",
                        width: 18,
                        height: 1,
                        background: "var(--ink-3)",
                        flexShrink: 0,
                        position: "relative",
                      }}
                      className="card-arrow-inner"
                    >
                      <span
                        style={{
                          position: "absolute",
                          right: 0,
                          top: "50%",
                          width: 6,
                          height: 6,
                          borderTop: "1px solid var(--ink-3)",
                          borderRight: "1px solid var(--ink-3)",
                          transform: "translateY(-50%) rotate(45deg)",
                          display: "block",
                        }}
                        className="card-arrow-tip"
                      />
                    </span>
                  </div>
                ) : (
                  /* ── Standard card layout ── */
                  <>
                    {/* Icon */}
                    <div
                      style={{ color: "var(--champagne, #d4b896)", marginBottom: 40 }}
                      className="card-icon-inner"
                    >
                      <ServiceIcon kind={service.slug} />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                        fontWeight: 400,
                        fontSize: 26,
                        lineHeight: 1.2,
                        color: "var(--ink)",
                        margin: "0 0 14px",
                      }}
                    >
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: "13.5px",
                        lineHeight: 1.65,
                        color: "var(--ink-2)",
                        margin: 0,
                      }}
                    >
                      {service.shortDescription}
                    </p>

                    {/* Arrow */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        display: "block",
                        width: 18,
                        height: 1,
                        background: "var(--ink-3)",
                      }}
                      className="card-arrow-inner"
                    >
                      <span
                        style={{
                          position: "absolute",
                          right: 0,
                          top: "50%",
                          width: 6,
                          height: 6,
                          borderTop: "1px solid var(--ink-3)",
                          borderRight: "1px solid var(--ink-3)",
                          transform: "translateY(-50%) rotate(45deg)",
                          display: "block",
                        }}
                        className="card-arrow-tip"
                      />
                    </span>
                  </>
                )}
              </div>

              {/* Hover champagne gradient reveal */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(160deg, rgba(212,184,150,0.10), rgba(212,184,150,0) 55%)",
                  opacity: 0,
                  transition: "opacity .5s ease",
                  pointerEvents: "none",
                  zIndex: 4,
                }}
                className="card-hover-bg"
              />
            </Link>
          );
        })}
      </div>

      <style>{`
        .service-card { transition: transform .5s cubic-bezier(.2,.7,.2,1), box-shadow .4s ease; }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: inset 0 0 0 1px rgba(212,184,150,0.40), 0 30px 80px rgba(0,0,0,0.40);
        }
        .service-card:hover .card-glass {
          background: rgba(6,7,12,0.38) !important;
        }
        .service-card:hover .card-hover-bg { opacity: 1 !important; }
        .service-card:hover .card-icon-inner { transform: scale(1.06); }
        .card-icon-inner { transition: transform .5s cubic-bezier(.2,.7,.2,1); }
        .service-card:hover .card-arrow-inner {
          width: 34px !important;
          background: var(--champagne) !important;
        }
        .card-arrow-inner { transition: width .4s ease, background .4s ease; }
        .service-card:hover .card-arrow-tip {
          border-color: var(--champagne) !important;
        }
        @media (max-width: 1100px) {
          .services-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; }
          /* On 2-col tablet the wide card still spans full width */
        }
        @media (max-width: 720px) {
          .services-grid-responsive { grid-template-columns: 1fr !important; }
          .service-card { min-height: auto !important; padding: 36px 28px 80px !important; }
          /* Collapse wide-card inner row to column on mobile */
          .card-wide-inner { flex-direction: column !important; align-items: flex-start !important; gap: 28px !important; }
        }
        @media (max-width: 920px) {
          .section-responsive { padding: 100px 28px !important; }
          .section-head-responsive { margin-bottom: 56px !important; }
        }
        @media (max-width: 720px) {
          .section-responsive { padding: 90px 22px !important; }
        }
      `}</style>
    </section>
  );
}
