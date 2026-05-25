interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      style={{ textAlign: centered ? "center" : "start" }}
      className={className ?? ""}
    >
      {eyebrow && (
        <p
          style={{
            marginBottom: 12,
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "10px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.35em",
            color: "var(--champagne, #d4b896)",
          }}
        >
          {eyebrow}
        </p>
      )}

      <h2
        style={{
          fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
          fontWeight: 300,
          fontSize: "clamp(28px, 4vw, 52px)",
          lineHeight: 1.08,
          color: "var(--ink)",
          margin: 0,
        }}
      >
        {title}
        {titleAccent && (
          <>
            {" "}
            <span
              style={{
                fontStyle: "italic",
                color: "var(--champagne, #d4b896)",
              }}
            >
              {titleAccent}
            </span>
          </>
        )}
      </h2>

      {subtitle && (
        <p
          style={{
            marginTop: 16,
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--ink-2)",           /* ← enforced: rgba(255,255,255,0.62) on dark bg */
            maxWidth: centered ? 560 : 640,
            marginLeft: centered ? "auto" : undefined,
            marginRight: centered ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
