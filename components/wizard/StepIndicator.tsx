"use client";

const STEP_LABELS = ["Services", "Property", "Budget", "Timeline", "Contact"];

interface StepIndicatorProps {
  current: number;
  total: number;
}

export default function StepIndicator({ current, total }: StepIndicatorProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Segment track */}
      <div style={{ display: "flex", gap: 5 }}>
        {Array.from({ length: total }).map((_, i) => {
          const completed = i + 1 < current;
          const active = i + 1 === current;
          return (
            <div
              key={i}
              style={{
                flex: 1,
                height: 2,
                background: completed || active
                  ? "var(--champagne, #d4b896)"
                  : "rgba(255,255,255,0.10)",
                opacity: completed ? 0.50 : 1,
                transition: "background .35s ease, opacity .35s ease",
              }}
            />
          );
        })}
      </div>

      {/* Step labels */}
      <div style={{ display: "flex" }}>
        {STEP_LABELS.slice(0, total).map((label, i) => {
          const completed = i + 1 < current;
          const active = i + 1 === current;
          return (
            <div
              key={i}
              style={{
                flex: 1,
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "8.5px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: active
                  ? "var(--champagne, #d4b896)"
                  : completed
                  ? "rgba(222,194,155,0.65)"
                  : "var(--ink-3)",
                transition: "color .35s ease",
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
