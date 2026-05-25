"use client";

import { PLANNER_STRINGS } from "@/lib/constants";
import type { WizardState } from "@/types";

type ContactData = WizardState["contact"];
type ContactErrors = Partial<Record<keyof ContactData, string>>;

interface Props {
  contact: ContactData;
  onChange: (field: keyof ContactData, value: string) => void;
  errors: ContactErrors;
}

const { fields } = PLANNER_STRINGS.steps.contact;

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono, monospace)",
  fontSize: "9px",
  letterSpacing: "0.34em",
  textTransform: "uppercase",
  color: "var(--ink-3)",
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 14px",
  fontFamily: "var(--font-sans)",
  fontWeight: 300,
  fontSize: 14,
  lineHeight: 1.5,
  color: "var(--ink)",
  background: "rgba(255,255,255,0.04)",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: 0,
  outline: "none",
  transition: "border-color .2s ease, background .2s ease",
  boxSizing: "border-box",
  appearance: "none",
  WebkitAppearance: "none",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "11px",
  color: "rgba(220,80,80,0.9)",
  marginTop: 5,
};

export default function Step5_ContactInfo({ contact, onChange, errors }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {/* Row: Name + Email */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        className="wizard-contact-row"
      >
        <div>
          <label style={labelStyle}>{fields.name}</label>
          <input
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={contact.name}
            onChange={(e) => onChange("name", e.target.value)}
            style={{
              ...inputStyle,
              borderColor: errors.name ? "rgba(220,80,80,0.55)" : "rgba(255,255,255,0.12)",
            }}
            className="wizard-input"
          />
          {errors.name && <span style={errorStyle}>{errors.name}</span>}
        </div>
        <div>
          <label style={labelStyle}>{fields.email}</label>
          <input
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            value={contact.email}
            onChange={(e) => onChange("email", e.target.value)}
            style={{
              ...inputStyle,
              borderColor: errors.email ? "rgba(220,80,80,0.55)" : "rgba(255,255,255,0.12)",
            }}
            className="wizard-input"
          />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label style={labelStyle}>{fields.phone}</label>
        <input
          type="tel"
          autoComplete="tel"
          placeholder="+1 (310) 000-0000"
          value={contact.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          style={inputStyle}
          className="wizard-input"
        />
      </div>

      {/* Notes */}
      <div>
        <label style={labelStyle}>{fields.notes}</label>
        <textarea
          rows={4}
          placeholder={fields.notesPlaceholder}
          value={contact.notes}
          onChange={(e) => onChange("notes", e.target.value)}
          style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
          className="wizard-input"
        />
      </div>

      <style>{`
        .wizard-input:focus {
          border-color: rgba(212,184,150,0.55) !important;
          background: rgba(255,255,255,0.06) !important;
          box-shadow: 0 0 0 1px rgba(212,184,150,0.14), 0 0 20px rgba(212,184,150,0.06);
        }
        .wizard-input::placeholder { color: rgba(255,255,255,0.20); }
        @media (max-width: 560px) {
          .wizard-contact-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
