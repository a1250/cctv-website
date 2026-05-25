"use client";

import { SERVICES } from "@/lib/constants";
import type { ServiceSlug } from "@/types";

interface Props {
  selected: ServiceSlug[];
  onToggle: (slug: ServiceSlug) => void;
}

export default function Step1_Services({ selected, onToggle }: Props) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}
      className="wizard-svc-grid"
    >
      {SERVICES.map((s, i) => {
        const active = selected.includes(s.slug);
        return (
          <button
            key={s.slug}
            type="button"
            onClick={() => onToggle(s.slug)}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "22px 18px 20px",
              textAlign: "left",
              background: active
                ? "rgba(222,194,155,0.10)"
                : "rgba(255,255,255,0.03)",
              border: active
                ? "1px solid rgba(222,194,155,0.88)"
                : "0.5px solid rgba(222,194,155,0.16)",
              borderRadius: 0,
              cursor: "pointer",
              transition: "border-color .25s ease, background .25s ease, box-shadow .25s ease",
              boxShadow: active
                ? "0 0 28px rgba(222,194,155,0.14), inset 0 0 0 0.5px rgba(222,194,155,0.10)"
                : "none",
              width: "100%",
            }}
            aria-pressed={active}
            className={`wizard-svc-card${active ? " wizard-svc-card--active" : ""}`}
          >
            {/* Index */}
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "9px",
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                color: active ? "#dec29b" : "rgba(222,194,155,0.55)",
                transition: "color .25s ease",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Service name */}
            <span
              style={{
                fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                fontWeight: 300,
                fontSize: "clamp(15px, 1.3vw, 19px)",
                lineHeight: 1.2,
                color: active ? "var(--ink)" : "var(--ink-2)",
                transition: "color .25s ease",
              }}
            >
              {s.name}
            </span>

            {/* Check indicator */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                opacity: active ? 1 : 0,
                transform: active ? "scale(1)" : "scale(0.6)",
                transition: "opacity .2s ease, transform .2s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="rgba(222,194,155,0.70)" strokeWidth="0.8" />
                <polyline
                  points="4.5,8.2 6.8,10.5 11.5,5.5"
                  stroke="#dec29b"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Champagne bottom accent line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 1.5,
                background: "var(--champagne, #d4b896)",
                transform: active ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform .3s cubic-bezier(.2,.7,.2,1)",
              }}
            />
          </button>
        );
      })}

      <style>{`
        .wizard-svc-card:not(.wizard-svc-card--active):hover {
          border-color: rgba(222,194,155,0.45) !important;
          background: rgba(222,194,155,0.05) !important;
        }
        @media (max-width: 680px) {
          .wizard-svc-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 420px) {
          .wizard-svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
