import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SERVICES_STRINGS } from "@/lib/constants";
import { resolveProjectImage } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Services",
  description: SERVICES_STRINGS.overview.subtitle,
};

export default function ServicesOverviewPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "120px 40px 80px",
          }}
          className="svc-overview-header-responsive"
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 22,
              alignItems: "center",
              textAlign: "center",
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
              {SERVICES_STRINGS.overview.eyebrow}
              <span style={{ display: "block", width: 28, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
            </div>
            <h1
              style={{
                fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                fontWeight: 300,
                fontSize: "clamp(34px, 4.8vw, 72px)",
                lineHeight: 1.04,
                margin: 0,
                color: "var(--ink)",
              }}
            >
              {SERVICES_STRINGS.overview.title}
            </h1>
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
              {SERVICES_STRINGS.overview.subtitle}
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "0 40px 120px",
          }}
          className="svc-overview-grid-responsive"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "rgba(212,184,150,0.16)",
            }}
            className="svc-overview-grid"
          >
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                style={{
                  position: "relative",
                  padding: "40px 32px 80px",
                  background: "rgba(8,8,14,0.88)",
                  WebkitBackdropFilter: "blur(16px)",
                  backdropFilter: "blur(16px)",
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  overflow: "hidden",
                  transition: "transform .4s cubic-bezier(.2,.7,.2,1)",
                }}
                className="svc-overview-card"
              >
                {/* Background image */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${resolveProjectImage(service.unsplashId, "auto=format&fit=crop&w=600&q=55")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                    opacity: 0.22,
                    transition: "opacity .5s ease",
                  }}
                  className="svc-overview-bg"
                />

                {/* Index */}
                <div
                  style={{
                    position: "absolute",
                    top: 22,
                    right: 26,
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    color: "var(--ink-3)",
                    zIndex: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                      fontWeight: 400,
                      fontSize: 24,
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
                    }}
                  >
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: 30,
                    right: 32,
                    display: "block",
                    width: 16,
                    height: 1,
                    background: "var(--ink-3)",
                    zIndex: 1,
                  }}
                  className="svc-overview-arrow"
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
                    className="svc-overview-arrow-tip"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .svc-overview-card:hover { transform: translateY(-3px); box-shadow: inset 0 0 0 1px rgba(212,184,150,0.35), 0 20px 60px rgba(0,0,0,0.3); }
        .svc-overview-card:hover .svc-overview-bg { opacity: 0.42 !important; }
        .svc-overview-card:hover .svc-overview-arrow { width: 30px !important; background: var(--champagne) !important; }
        .svc-overview-arrow { transition: width .35s ease, background .35s ease; }
        .svc-overview-card:hover .svc-overview-arrow-tip { border-color: var(--champagne) !important; }
        @media (max-width: 1100px) {
          .svc-overview-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 720px) {
          .svc-overview-grid { grid-template-columns: 1fr !important; }
          .svc-overview-header-responsive { padding: 64px 22px 48px !important; }
          .svc-overview-grid-responsive { padding: 0 22px 80px !important; }
        }
        @media (max-width: 920px) {
          .svc-overview-header-responsive { padding: 80px 28px 56px !important; }
          .svc-overview-grid-responsive { padding: 0 28px 100px !important; }
        }
      `}</style>
    </>
  );
}
