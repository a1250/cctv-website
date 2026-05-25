"use client";

import Link from "next/link";
import { PLANNER_STRINGS, SERVICES } from "@/lib/constants";
import type { WizardState } from "@/types";

interface Props {
  state: WizardState;
  onReset: () => void;
}

export default function WizardSummary({ state, onReset }: Props) {
  const { title, subtitle, cta } = PLANNER_STRINGS.summary;

  const selectedServiceNames = SERVICES.filter((s) =>
    state.selectedServices.includes(s.slug)
  ).map((s) => s.name);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 32,
        padding: "48px 24px 40px",
      }}
    >
      {/* Animated champagne check ring */}
      <div aria-hidden="true">
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
          <circle cx="34" cy="34" r="32" stroke="rgba(212,184,150,0.22)" strokeWidth="1" />
          <circle
            cx="34"
            cy="34"
            r="24"
            stroke="rgba(212,184,150,0.45)"
            strokeWidth="1"
            strokeDasharray="150"
            strokeDashoffset="150"
            style={{ animation: "wizardRingDraw 0.7s ease 0.1s forwards" }}
          />
          <polyline
            points="22,34 30,42 46,26"
            stroke="#d4b896"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="50"
            strokeDashoffset="50"
            style={{ animation: "wizardCheckDraw 0.5s ease 0.6s forwards" }}
          />
        </svg>
      </div>

      {/* Text */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480 }}>
        <h2
          style={{
            fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
            fontWeight: 300,
            fontSize: "clamp(28px, 3.5vw, 44px)",
            color: "var(--ink)",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {title.split(" ").slice(0, -1).join(" ")}{" "}
          <span style={{ fontStyle: "italic", color: "var(--champagne, #d4b896)" }}>
            {title.split(" ").slice(-1)[0]}
          </span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--ink-2)",
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Selection summary */}
      {selectedServiceNames.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            maxWidth: 520,
          }}
        >
          {selectedServiceNames.map((name) => (
            <span
              key={name}
              style={{
                padding: "6px 14px",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(212,184,150,0.80)",
                background: "rgba(212,184,150,0.07)",
                border: "0.5px solid rgba(212,184,150,0.22)",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      )}

      {/* CTAs */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "16px 36px",
            fontFamily: "var(--font-sans)",
            fontSize: "11.5px",
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#0a0a0c",
            background: "var(--champagne, #d4b896)",
            border: "1px solid var(--champagne, #d4b896)",
            borderRadius: 0,
            textDecoration: "none",
            transition: "background .25s ease, box-shadow .25s ease",
          }}
          className="wizard-home-btn"
        >
          {cta}
          <span aria-hidden="true" style={{ display: "inline-block", width: 14, height: 1, background: "currentColor" }} />
        </Link>
        <button
          type="button"
          onClick={onReset}
          style={{
            padding: "16px 28px",
            fontFamily: "var(--font-sans)",
            fontSize: "11.5px",
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--ink-2)",
            background: "transparent",
            border: "1px solid var(--line-strong)",
            borderRadius: 0,
            cursor: "pointer",
            transition: "color .2s ease, border-color .2s ease",
          }}
          className="wizard-reset-btn"
        >
          Plan Another Project
        </button>
      </div>

      <style>{`
        @keyframes wizardRingDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes wizardCheckDraw {
          to { stroke-dashoffset: 0; }
        }
        .wizard-home-btn:hover {
          background: var(--accent-soft) !important;
          box-shadow: 0 0 28px rgba(212,184,150,0.35), 0 12px 40px rgba(212,184,150,0.18) !important;
        }
        .wizard-reset-btn:hover {
          color: var(--ink) !important;
          border-color: rgba(255,255,255,0.50) !important;
        }
      `}</style>
    </div>
  );
}
