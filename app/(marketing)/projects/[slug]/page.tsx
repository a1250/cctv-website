import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS, SERVICES } from "@/lib/constants";
import { resolveProjectImage } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

const GALLERY_ASPECTS = ["3 / 2", "4 / 3", "4 / 3", "3 / 2", "4 / 3", "16 / 9"];

function GalleryCard({
  unsplashId,
  tint,
  index,
}: {
  unsplashId: string;
  tint: string;
  index: number;
}) {
  const aspect = GALLERY_ASPECTS[index % GALLERY_ASPECTS.length];

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: aspect,
        overflow: "hidden",
        border: "0.5px solid rgba(222,194,155,0.14)",
        background: tint,
      }}
      className="gallery-card"
    >
      {/* Unique image per slot */}
      <div
        className="gallery-card-bg"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${resolveProjectImage(unsplashId, "auto=format&fit=crop&w=800&q=72")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform .55s cubic-bezier(.2,.7,.2,1)",
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(4,5,8,0.55) 0%, transparent 55%)",
        }}
      />

      {/* 4-corner champagne crosshairs */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <div
          key={pos}
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 10,
            height: 10,
            zIndex: 2,
            ...(pos === "tl" ? { top: 10, left: 10, borderTop: "1px solid rgba(212,184,150,0.45)", borderLeft: "1px solid rgba(212,184,150,0.45)" } : {}),
            ...(pos === "tr" ? { top: 10, right: 10, borderTop: "1px solid rgba(212,184,150,0.45)", borderRight: "1px solid rgba(212,184,150,0.45)" } : {}),
            ...(pos === "bl" ? { bottom: 10, left: 10, borderBottom: "1px solid rgba(212,184,150,0.45)", borderLeft: "1px solid rgba(212,184,150,0.45)" } : {}),
            ...(pos === "br" ? { bottom: 10, right: 10, borderBottom: "1px solid rgba(212,184,150,0.45)", borderRight: "1px solid rgba(212,184,150,0.45)" } : {}),
          }}
        />
      ))}

      {/* Index label */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 12,
          zIndex: 2,
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "8px",
          letterSpacing: "0.26em",
          color: "rgba(255,255,255,0.50)",
          textTransform: "uppercase",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

/* Telemetry sidebar row */
function TelRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        paddingBottom: 14,
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "8.5px",
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          fontWeight: 400,
          color: "var(--ink-2)",
          lineHeight: 1.5,
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectServices = SERVICES.filter((s) =>
    (project.services as readonly string[]).includes(s.slug)
  );

  return (
    <>
      <Navbar />
      <main>
        {/* ── Cinematic hero with real Unsplash image ── */}
        <section
          style={{
            position: "relative",
            minHeight: "72vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            overflow: "hidden",
            background: project.tint,
          }}
        >
          {/* Real background image */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${resolveProjectImage(project.unsplashId, "auto=format&fit=crop&w=1920&q=78")})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              zIndex: 0,
            }}
          />

          {/* Multi-layer gradient overlay */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(4,5,8,0.96) 0%, rgba(4,5,8,0.55) 40%, rgba(4,5,8,0.18) 75%, rgba(4,5,8,0.06) 100%)",
              zIndex: 1,
            }}
          />

          {/* Left/right side vignette */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(130% 100% at 50% 100%, transparent 25%, rgba(4,5,8,0.35) 70%, rgba(4,5,8,0.65) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* All 4 champagne corner crosshairs */}
          {(["tl", "tr", "bl", "br"] as const).map((pos) => (
            <div
              key={pos}
              aria-hidden="true"
              style={{
                position: "absolute",
                width: 20,
                height: 20,
                zIndex: 5,
                ...(pos === "tl" ? { top: 28, left: 40, borderTop: "1px solid rgba(212,184,150,0.60)", borderLeft: "1px solid rgba(212,184,150,0.60)" } : {}),
                ...(pos === "tr" ? { top: 28, right: 40, borderTop: "1px solid rgba(212,184,150,0.60)", borderRight: "1px solid rgba(212,184,150,0.60)" } : {}),
                ...(pos === "bl" ? { bottom: 28, left: 40, borderBottom: "1px solid rgba(212,184,150,0.60)", borderLeft: "1px solid rgba(212,184,150,0.60)" } : {}),
                ...(pos === "br" ? { bottom: 28, right: 40, borderBottom: "1px solid rgba(212,184,150,0.60)", borderRight: "1px solid rgba(212,184,150,0.60)" } : {}),
              }}
            />
          ))}

          {/* Hero content */}
          <div
            style={{
              position: "relative",
              zIndex: 6,
              maxWidth: 1320,
              margin: "0 auto",
              padding: "0 40px 72px",
              width: "100%",
            }}
            className="proj-hero-content-responsive"
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
                marginBottom: 28,
              }}
            >
              <Link
                href="/projects"
                style={{ color: "var(--ink-3)", textDecoration: "none" }}
                className="proj-breadcrumb-link"
              >
                Projects
              </Link>
              <span style={{ color: "rgba(255,255,255,0.22)" }}>·</span>
              <span style={{ color: "var(--champagne, #d4b896)" }}>{project.kind}</span>
            </div>

            {/* Meta row */}
            <div
              style={{
                display: "flex",
                gap: 24,
                marginBottom: 20,
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--ink-2)",
                flexWrap: "wrap",
              }}
            >
              <span>{project.loc}</span>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
              <span>{project.meta}</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                fontWeight: 300,
                fontSize: "clamp(42px, 6.5vw, 100px)",
                lineHeight: 1.0,
                letterSpacing: "0.005em",
                color: "var(--ink)",
                margin: "0 0 28px",
                maxWidth: 900,
                textShadow: "0 4px 48px rgba(0,0,0,0.55)",
              }}
            >
              {project.title}
            </h1>

            {/* Short description */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--ink-2)",
                maxWidth: 580,
                margin: 0,
              }}
            >
              {project.shortDescription}
            </p>
          </div>
        </section>

        {/* ── Editorial body ── */}
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "100px 40px",
          }}
          className="proj-body-responsive"
        >
          {/* Two-column editorial layout */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px 80px", alignItems: "start" }}
            className="proj-editorial-responsive"
          >
            {/* Left — engineering telemetry sidebar */}
            <aside
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "sticky",
                top: 96,
                padding: "24px 0",
                borderTop: "0.5px solid rgba(212,184,150,0.30)",
              }}
            >
              {/* Telemetry header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 22,
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: 6,
                    height: 6,
                    background: "var(--champagne, #d4b896)",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "9px",
                    letterSpacing: "0.36em",
                    textTransform: "uppercase",
                    color: "var(--champagne, #d4b896)",
                  }}
                >
                  Project Telemetry
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <TelRow label="Location" value={project.location} />
                <TelRow label="Category" value={project.category} />
                <TelRow label="Completion" value={project.year} />
                <TelRow label="Scope" value={project.kind} />

                {/* Systems deployed */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    paddingBottom: 14,
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "8.5px",
                      letterSpacing: "0.34em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 8,
                    }}
                  >
                    Systems Deployed
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {projectServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          fontFamily: "var(--font-sans)",
                          fontSize: 13,
                          fontWeight: 400,
                          color: "var(--ink-2)",
                          textDecoration: "none",
                          transition: "color .2s ease",
                        }}
                        className="proj-service-link"
                      >
                        <span
                          style={{
                            display: "block",
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "var(--champagne, #d4b896)",
                            flexShrink: 0,
                          }}
                        />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA link */}
                <Link
                  href="/planner"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 8,
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "9px",
                    letterSpacing: "0.30em",
                    textTransform: "uppercase",
                    color: "var(--champagne, #d4b896)",
                    textDecoration: "none",
                    transition: "opacity .2s ease",
                  }}
                  className="proj-brief-link"
                >
                  Start a similar project
                  <span
                    aria-hidden="true"
                    style={{ display: "inline-block", width: 18, height: 1, background: "currentColor" }}
                  />
                </Link>
              </div>
            </aside>

            {/* Right — editorial content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
              {/* The Challenge */}
              <article>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.38em",
                    textTransform: "uppercase",
                    color: "var(--champagne, #d4b896)",
                    marginBottom: 20,
                  }}
                >
                  <span style={{ display: "block", width: 18, height: 1, background: "var(--champagne, #d4b896)" }} aria-hidden="true" />
                  The Challenge
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                    fontWeight: 300,
                    fontSize: "clamp(22px, 2.4vw, 34px)",
                    lineHeight: 1.28,
                    color: "var(--ink)",
                    margin: "0 0 20px",
                  }}
                >
                  A property of this scale demands invisible integration — no visible
                  hardware, no compromises to the design intent.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 15,
                    lineHeight: 1.72,
                    color: "var(--ink-2)",
                    margin: 0,
                  }}
                >
                  {project.shortDescription} The scope required coordinating with the
                  lead architect, interior design team, and structural engineers to
                  pre-wire before finishes were applied — a process requiring absolute
                  precision and zero margin for error.
                </p>
              </article>

              {/* Our Approach */}
              <article>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.38em",
                    textTransform: "uppercase",
                    color: "var(--champagne, #d4b896)",
                    marginBottom: 20,
                  }}
                >
                  <span style={{ display: "block", width: 18, height: 1, background: "var(--champagne, #d4b896)" }} aria-hidden="true" />
                  Our Approach
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 15,
                    lineHeight: 1.72,
                    color: "var(--ink-2)",
                    margin: 0,
                  }}
                >
                  Working from pre-construction drawings, we developed a complete
                  infrastructure plan mapping every conduit run, equipment location, and
                  termination point before groundbreaking. All systems were commissioned
                  during a multi-day on-site session with the client, and documented in
                  our proprietary handover package — giving the homeowner a full
                  operational manual and 24/7 support line from day one.
                </p>
              </article>

              {/* Result stat cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 1,
                  background: "rgba(212,184,150,0.12)",
                }}
                className="proj-result-cards-responsive"
              >
                {[
                  { stat: "47", label: "Zones Covered" },
                  { stat: "99.97%", label: "Uptime SLA" },
                  { stat: "< 4ms", label: "Network Latency" },
                ].map((item) => (
                  <div
                    key={item.stat}
                    style={{
                      background: "rgba(6,7,12,0.92)",
                      padding: "28px 24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                        fontWeight: 300,
                        fontSize: "clamp(28px, 3vw, 44px)",
                        color: "var(--champagne, #d4b896)",
                        lineHeight: 1.0,
                      }}
                    >
                      {item.stat}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "9px",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Masonry gallery ── */}
          <div style={{ marginTop: 96 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 36,
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
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
                Project Gallery
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(212,184,150,0.50)",
                }}
              >
                6 Images
              </div>
            </div>

            {/* 3-column masonry grid — hero image first, then 5 unique gallery shots */}
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}
              className="proj-gallery-responsive"
            >
              {[project.unsplashId, ...project.galleryUnsplashIds].map((imgId, i) => (
                <GalleryCard
                  key={i}
                  unsplashId={imgId}
                  tint={project.tint}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Related Projects CTA ── */}
        <section
          style={{
            borderTop: "1px solid var(--line)",
            padding: "64px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
            maxWidth: 1320,
            margin: "0 auto",
          }}
          className="proj-cta-bar-responsive"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "10px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                margin: "0 0 8px",
              }}
            >
              Continue Exploring
            </p>
            <p
              style={{
                fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                fontWeight: 300,
                fontSize: "clamp(22px, 2.4vw, 36px)",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              View all{" "}
              <span style={{ fontStyle: "italic", color: "var(--champagne, #d4b896)" }}>
                projects.
              </span>
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/projects"
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
                transition: "background .25s ease",
              }}
              className="proj-back-btn"
            >
              All Projects
            </Link>
            <Link
              href="/planner"
              style={{
                display: "inline-flex",
                alignItems: "center",
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
                transition: "border-color .25s ease",
              }}
              className="proj-planner-btn"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .proj-breadcrumb-link:hover { color: var(--ink) !important; }
        .proj-service-link:hover { color: var(--ink) !important; }
        .proj-brief-link:hover { opacity: 0.7; }
        .proj-back-btn:hover { background: var(--accent-soft) !important; }
        .proj-planner-btn:hover { border-color: rgba(255,255,255,0.55) !important; }
        .gallery-card:hover .gallery-card-bg { transform: scale(1.04); }
        @media (max-width: 920px) {
          .proj-editorial-responsive { grid-template-columns: 1fr !important; gap: 40px !important; }
          .proj-body-responsive { padding: 72px 28px !important; }
          .proj-hero-content-responsive { padding: 0 28px 56px !important; }
        }
        @media (max-width: 720px) {
          .proj-gallery-responsive { grid-template-columns: 1fr 1fr !important; }
          .proj-result-cards-responsive { grid-template-columns: 1fr !important; }
          .proj-hero-content-responsive { padding: 0 22px 48px !important; }
          .proj-body-responsive { padding: 56px 22px !important; }
          .proj-cta-bar-responsive { padding: 48px 22px !important; flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .proj-gallery-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
