"use client";

import { PLANNER_STRINGS } from "@/lib/constants";
import type { TimelineOption } from "@/types";

interface Props {
  value: TimelineOption | null;
  onChange: (v: TimelineOption) => void;
}

const { options } = PLANNER_STRINGS.steps.timeline;

export default function Step4_Timeline({ value, onChange }: Props) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
      className="wizard-opt-grid"
    >
      {options.map((opt, i) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value as TimelineOption)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "20px 22px",
              textAlign: "left",
              background: active ? "var(--champagne, #d4b896)" : "rgba(255,255,255,0.025)",
              border: active
                ? "1px solid var(--champagne, #d4b896)"
                : "0.5px solid rgba(255,255,255,0.09)",
              borderRadius: 0,
              cursor: "pointer",
              transition: "background .25s ease, border-color .25s ease",
              width: "100%",
            }}
            aria-pressed={active}
          >
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "9px",
                letterSpacing: "0.28em",
                color: active ? "rgba(10,10,12,0.45)" : "var(--ink-3)",
                flexShrink: 0,
                transition: "color .25s ease",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: active ? 500 : 300,
                fontSize: "13.5px",
                lineHeight: 1.4,
                color: active ? "#0a0a0c" : "var(--ink-2)",
                transition: "color .25s ease",
              }}
            >
              {opt.label}
            </span>
          </button>
        );
      })}

      <style>{`
        @media (max-width: 520px) {
          .wizard-opt-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
