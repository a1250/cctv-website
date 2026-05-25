import { HOME_STRINGS } from "@/lib/constants";

export default function WhyUsSection() {
  const { whyUs } = HOME_STRINGS;

  return (
    <section
      id="about"
      style={{
        position: "relative",
        maxWidth: 1320,
        margin: "0 auto",
        padding: "140px 40px",
      }}
      className="whyus-section-responsive"
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
        className="whyus-head-responsive"
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
          {whyUs.eyebrow}
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
          {whyUs.title}
          <span style={{ display: "inline-block", width: "0.4em" }} aria-hidden="true" />
          <span style={{ fontStyle: "italic", color: "var(--champagne, #d4b896)", fontWeight: 300 }}>
            {whyUs.titleAccent}
          </span>
        </h2>
      </div>

      {/* 3-column pillars grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 56,
        }}
        className="pillars-grid-responsive"
      >
        {whyUs.pillars.map((pillar) => (
          <div
            key={pillar.num}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Large italic number */}
            <div
              style={{
                fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                fontStyle: "italic",
                fontSize: 56,
                fontWeight: 300,
                lineHeight: 1,
                color: "var(--champagne, #d4b896)",
              }}
            >
              {pillar.num}
            </div>

            {/* Thin rule */}
            <div
              aria-hidden="true"
              style={{
                width: 36,
                height: 1,
                background: "var(--line-strong)",
                margin: "26px 0 22px",
              }}
            />

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: "0.04em",
                color: "var(--ink)",
                margin: "0 0 14px",
              }}
            >
              {pillar.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                margin: 0,
              }}
            >
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 920px) {
          .pillars-grid-responsive { grid-template-columns: 1fr !important; gap: 40px !important; }
          .whyus-section-responsive { padding: 100px 28px !important; }
          .whyus-head-responsive { margin-bottom: 56px !important; }
        }
        @media (max-width: 720px) {
          .whyus-section-responsive { padding: 90px 22px !important; }
        }
      `}</style>
    </section>
  );
}
