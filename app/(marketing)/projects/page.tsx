import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS, PROJECTS_STRINGS } from "@/lib/constants";
import { resolveProjectImage } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description: PROJECTS_STRINGS.subtitle,
};

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        textDecoration: "none",
        color: "inherit",
      }}
      className="proj-card-link"
    >
      {/* Media — real Unsplash image with hover scale */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          border: "0.5px solid rgba(222,194,155,0.14)",
          background: project.tint,
        }}
        className="proj-card-media"
      >
        {/* Background image */}
        <div
          className="proj-card-bg"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${resolveProjectImage(project.unsplashId, "auto=format&fit=crop&w=900&q=70")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform .65s cubic-bezier(.2,.7,.2,1)",
          }}
          aria-hidden="true"
        />

        {/* Gradient overlay */}
        <div
          className="proj-card-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(4,5,8,0.78) 0%, rgba(4,5,8,0.22) 45%, rgba(4,5,8,0.08) 100%)",
            transition: "opacity .4s ease",
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
              width: 12,
              height: 12,
              zIndex: 2,
              ...(pos === "tl"
                ? { top: 14, left: 14, borderTop: "1px solid rgba(212,184,150,0.50)", borderLeft: "1px solid rgba(212,184,150,0.50)" }
                : {}),
              ...(pos === "tr"
                ? { top: 14, right: 14, borderTop: "1px solid rgba(212,184,150,0.50)", borderRight: "1px solid rgba(212,184,150,0.50)" }
                : {}),
              ...(pos === "bl"
                ? { bottom: 14, left: 14, borderBottom: "1px solid rgba(212,184,150,0.50)", borderLeft: "1px solid rgba(212,184,150,0.50)" }
                : {}),
              ...(pos === "br"
                ? { bottom: 14, right: 14, borderBottom: "1px solid rgba(212,184,150,0.50)", borderRight: "1px solid rgba(212,184,150,0.50)" }
                : {}),
            }}
          />
        ))}

        {/* Category badge — top-right */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "8.5px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(212,184,150,0.70)",
            background: "rgba(4,5,8,0.60)",
            padding: "4px 12px",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "0.5px solid rgba(212,184,150,0.18)",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Info */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "9.5px",
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
            fontSize: "clamp(22px, 2.2vw, 30px)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "var(--ink)",
            marginTop: 4,
          }}
        >
          {project.title}
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "13.5px",
            lineHeight: 1.6,
            color: "var(--ink-2)",
            margin: 0,
          }}
        >
          {project.shortDescription}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 8,
            paddingTop: 14,
            borderTop: "1px solid var(--line)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "9.5px",
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
              gap: 10,
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "11px",
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
                width: 12,
                height: 1,
                background: "currentColor",
                position: "relative",
              }}
              className="proj-arrow"
            >
              <span
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  width: 5,
                  height: 5,
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
  );
}

export default function ProjectsPage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main>
        {/* Header section */}
        <section
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "120px 40px 80px",
          }}
          className="proj-page-header-responsive"
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
              {PROJECTS_STRINGS.eyebrow}
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
              {PROJECTS_STRINGS.title}
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
              {PROJECTS_STRINGS.subtitle}
            </p>
          </div>
        </section>

        {/* Featured — 2-column */}
        <section
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "0 40px 80px",
          }}
          className="proj-grid-responsive"
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 48 }}
            className="proj-featured-grid"
          >
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        {/* Additional projects */}
        {rest.length > 0 && (
          <section
            style={{
              borderTop: "1px solid var(--line)",
              maxWidth: 1320,
              margin: "0 auto",
              padding: "72px 40px 100px",
            }}
            className="proj-grid-responsive"
          >
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "10px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 48,
              }}
            >
              More Work
            </div>
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 48 }}
              className="proj-rest-grid"
            >
              {rest.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />

      <style>{`
        .proj-card-link:hover .proj-card-bg { transform: scale(1.04); }
        .proj-card-link:hover .proj-card-overlay { opacity: 0.78; }
        .proj-card-link:hover .proj-arrow { width: 22px !important; }
        .proj-arrow { transition: width .3s ease; }
        @media (max-width: 920px) {
          .proj-featured-grid, .proj-rest-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
          .proj-page-header-responsive { padding: 80px 28px 60px !important; }
          .proj-grid-responsive { padding-left: 28px !important; padding-right: 28px !important; }
        }
        @media (max-width: 720px) {
          .proj-page-header-responsive { padding: 64px 22px 48px !important; }
          .proj-grid-responsive { padding-left: 22px !important; padding-right: 22px !important; }
        }
      `}</style>
    </>
  );
}
