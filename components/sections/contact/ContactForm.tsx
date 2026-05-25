"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { CONTACT_STRINGS, SERVICES } from "@/lib/constants";

type SubmitState = "idle" | "loading" | "success" | "error";

/* ── Shared input / textarea base styles ── */
const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  fontFamily: "var(--font-sans)",
  fontWeight: 300,
  fontSize: 14,
  lineHeight: 1.5,
  color: "var(--ink)",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(222,194,155,0.22)",
  borderRadius: 0,
  outline: "none",
  WebkitBackdropFilter: "blur(12px)",
  backdropFilter: "blur(12px)",
  transition: "border-color .2s ease, background .2s ease, box-shadow .2s ease",
  appearance: "none",
  WebkitAppearance: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono, monospace)",
  fontSize: "9.5px",
  fontWeight: 400,
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: "var(--ink-2)",
  marginBottom: 8,
};

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "11.5px",
  color: "rgba(220,80,80,0.9)",
  marginTop: 6,
};

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={labelStyle}>{label}</label>
      {children}
      {error && <span style={errorStyle}>{error}</span>}
    </div>
  );
}

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitState("success");
        reset();
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  }

  /* ── Success screen ── */
  if (submitState === "success") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          padding: "56px 40px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          WebkitBackdropFilter: "blur(24px)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Champagne check ring */}
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <circle cx="28" cy="28" r="26" stroke="rgba(212,184,150,0.35)" strokeWidth="1" />
          <circle cx="28" cy="28" r="20" stroke="#d4b896" strokeWidth="1.5" />
          <polyline
            points="17,28 24,35 39,20"
            stroke="#d4b896"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <p
            style={{
              fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
              fontWeight: 300,
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "var(--ink)",
              margin: "0 0 10px",
            }}
          >
            {CONTACT_STRINGS.form.success.split("!")[0]}
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: 14,
              lineHeight: 1.65,
              color: "var(--ink-2)",
              margin: 0,
            }}
          >
            A senior specialist will follow up within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setSubmitState("idle")}
          style={{
            marginTop: 8,
            padding: "11px 28px",
            fontFamily: "var(--font-sans)",
            fontSize: "11.5px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--ink-2)",
            background: "transparent",
            border: "1px solid var(--line-strong)",
            borderRadius: 0,
            cursor: "pointer",
            transition: "color .2s ease, border-color .2s ease",
          }}
          className="contact-reset-btn"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: "44px 40px 48px",
        background: "rgba(10,10,18,0.60)",
        border: "1px solid rgba(222,194,155,0.18)",
        WebkitBackdropFilter: "blur(24px) saturate(140%)",
        backdropFilter: "blur(24px) saturate(140%)",
      }}
      className="contact-form-glass"
    >
      {/* Row: Name + Email */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="contact-row-responsive">
        <Field label={CONTACT_STRINGS.form.name} error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            style={inputBase}
            className="contact-input"
          />
        </Field>
        <Field label={CONTACT_STRINGS.form.email} error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            style={inputBase}
            className="contact-input"
          />
        </Field>
      </div>

      {/* Row: Phone + Service */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="contact-row-responsive">
        <Field label={CONTACT_STRINGS.form.phone} error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="+1 (310) 000-0000"
            style={inputBase}
            className="contact-input"
          />
        </Field>
        <Field label={CONTACT_STRINGS.form.service} error={errors.service?.message}>
          <select
            {...register("service")}
            style={{
              ...inputBase,
              cursor: "pointer",
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><polyline points='1,1 6,7 11,1' fill='none' stroke='rgba(222,194,155,0.70)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
              paddingRight: 38,
            }}
            className="contact-input"
          >
            <option value="" style={{ background: "#0a0a14", color: "#f1f1f1" }}>Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug} style={{ background: "#0a0a14", color: "#f1f1f1" }}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field label={CONTACT_STRINGS.form.message} error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder={CONTACT_STRINGS.form.messagePlaceholder}
          style={{ ...inputBase, resize: "vertical", minHeight: 120 }}
          className="contact-input"
        />
      </Field>

      {/* Error banner */}
      {submitState === "error" && (
        <div
          style={{
            padding: "12px 16px",
            background: "rgba(220,60,60,0.08)",
            border: "1px solid rgba(220,60,60,0.22)",
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "rgba(255,130,130,0.9)",
          }}
        >
          {CONTACT_STRINGS.form.error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitState === "loading"}
        style={{
          alignSelf: "flex-start",
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          padding: "18px 40px",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "#0a0a0c",
          background: submitState === "loading" ? "var(--accent-soft)" : "var(--champagne, #d4b896)",
          border: "1px solid var(--champagne, #d4b896)",
          borderRadius: 0,
          cursor: submitState === "loading" ? "wait" : "pointer",
          boxShadow: "0 14px 40px rgba(212,184,150,0.18)",
          transition: "transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease, background .25s ease",
          opacity: submitState === "loading" ? 0.8 : 1,
        }}
        className="contact-submit-btn"
      >
        {submitState === "loading" ? (
          <>
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 14,
                height: 14,
                border: "2px solid rgba(10,10,12,0.3)",
                borderTop: "2px solid #0a0a0c",
                borderRadius: "50%",
                animation: "contactSpin 0.7s linear infinite",
              }}
            />
            {CONTACT_STRINGS.form.submitting}
          </>
        ) : (
          <>
            <span>{CONTACT_STRINGS.form.submit}</span>
            <span
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block", width: 14, height: 1, background: "currentColor" }}
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
          </>
        )}
      </button>
    </form>
  );
}
