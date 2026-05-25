import Link from "next/link";
import { PROJECTS, HOME_STRINGS } from "@/lib/constants";
import { resolveProjectImage } from "@/lib/utils";

const featured = PROJECTS.filter((p) => p.featured);

function ProjectMedia({
  unsplashId,
  tint,
  title,
}: {
  unsplashId: string;
  tint: string;
  title: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "16 / 10",
        overflow: "hidden",
        border: "0.5px solid rgba(222,194,155,0.14)",
        background: tint,
      }}
      className="proj-media-wrapper"
    >
      {/* Real Unsplash background — scale on hover via CSS */}
      <div
        className="proj-media-bg"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${resolveProjectImage(unsplashId, "auto=format&fit=crop&w=900&q=72")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform .65s cubic-bezier(.2,.7,.2,1)",
        }}
        aria-hidden="true"
      />

      {/* Glassmorphic overlay — lightens slightly on hover */}
      <div
        className="proj-media-glass"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(4,5,8,0.82) 0%, rgba(4,5,8,0.28) 45%, rgba(4,5,8,0.10) 100%)",
          transition: "opacity .45s ease",
        }}
        aria-hidden="true"
      />

      {/* Corner crosshairs */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <div
          key={pos}
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            zIndex: 2,
            ...(pos === "tl"
              ? { top: 14, left: 14, borderTop: "1px solid rgba(212,184,150,0.55)", borderLeft: "1px solid rgba(212,184,150,0.55)" }
              : {}),
            ...(pos === "tr"
              ? { top: 14, right: 14, borderTop: "1px solid rgba(212,184,150,0.55)", borderRight: "1px solid rgba(212,184,150,0.55)" }
              : {}),
            ...(pos === "bl"
              ? { bottom: 14, left: 14, borderBottom: "1px solid rgba(212,184,150,0.55)", borderLeft: "1px solid rgba(212,184,150,0.55)" }
              : {}),
            ...(pos === "br"
              ? { bottom: 14, right: 14, borderBottom: "1px solid rgba(212,184,150,0.55)", borderRight: "1px solid rgba(212,184,150,0.55)" }
              : {}),
          }}
        />
      ))}

      {/* Visually hidden alt text anchor */}
      <span
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </span>
    </div>
  );
}

export default function FeaturedProjects() {
  const { featuredProjects } = HOME_STRINGS;

  return (
    <section
      id="portfolio"
      style={{
        position: "relative",
        maxWidth: 1320,
        margin: "0 auto",
        padding: "140px 40px",
      }}
      className="projects-section-responsive"
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
        className="projects-head-responsive"
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
          {featuredProjects.eyebrow}
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
          {featuredProjects.title}
          <span style={{ display: "inline-block", width: "0.4em" }} aria-hidden="true" />
          <span style={{ fontStyle: "italic", color: "var(--champagne, #d4b896)", fontWeight: 300 }}>
            {featuredProjects.titleAccent}
          </span>
        </h2>
      </div>

      {/* Project cards */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}
        className="projects-grid-responsive"
      >
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
            className="project-card-link"
          >
            <ProjectMedia
              unsplashId={project.unsplashId}
              tint={project.tint}
              title={project.title}
            />

            {/* Info row */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--ink-2)",
                }}
              >
                <span>{project.kind}</span>
                <span style={{ color: "var(--ink-3)" }}>{project.loc}</span>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                  fontSize: "clamp(26px, 2.5vw, 36px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: "var(--ink)",
                  marginTop: 4,
                }}
              >
                {project.title}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  marginTop: 10,
                  paddingTop: 14,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: "var(--ink-2)",
                    textTransform: "uppercase",
                  }}
                >
                  {project.meta}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "11.5px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--champagne, #d4b896)",
                  }}
                >
                  <span>Case study</span>
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      width: 14,
                      height: 1,
                      background: "currentColor",
                      position: "relative",
                    }}
                    className="project-link-arrow"
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
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .project-card-link:hover .proj-media-bg { transform: scale(1.05); }
        .project-card-link:hover .proj-media-glass { opacity: 0.75; }
        .project-card-link:hover .project-link-arrow { width: 24px !important; }
        .project-link-arrow { transition: width .3s ease; }
        @media (max-width: 920px) {
          .projects-grid-responsive { grid-template-columns: 1fr !important; gap: 40px !important; }
          .projects-section-responsive { padding: 100px 28px !important; }
          .projects-head-responsive { margin-bottom: 56px !important; }
        }
        @media (max-width: 720px) {
          .projects-section-responsive { padding: 90px 22px !important; }
        }
      `}</style>
    </section>
  );
}
