"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWizard } from "@/hooks/useWizard";
import { PLANNER_STRINGS } from "@/lib/constants";
import { plannerContactSchema } from "@/lib/validations";
import type { ServiceSlug, PropertyType, BudgetRange, TimelineOption, WizardState, PlannerSubmitPayload } from "@/types";
import StepIndicator from "./StepIndicator";
import WizardSummary from "./WizardSummary";
import Step1_Services from "./steps/Step1_Services";
import Step2_PropertyType from "./steps/Step2_PropertyType";
import Step3_Budget from "./steps/Step3_Budget";
import Step4_Timeline from "./steps/Step4_Timeline";
import Step5_ContactInfo from "./steps/Step5_ContactInfo";

type SubmitState = "idle" | "loading" | "success" | "error";

const TOTAL_STEPS = 5;

const STEP_CONFIG = [
  PLANNER_STRINGS.steps.services,
  PLANNER_STRINGS.steps.propertyType,
  PLANNER_STRINGS.steps.budget,
  PLANNER_STRINGS.steps.timeline,
  PLANNER_STRINGS.steps.contact,
] as const;

function canAdvance(state: WizardState): boolean {
  switch (state.step) {
    case 1: return state.selectedServices.length > 0;
    case 2: return state.propertyType !== null;
    case 3: return state.budget !== null;
    case 4: return state.timeline !== null;
    case 5: return true;
    default: return false;
  }
}

export default function PlannerWizard() {
  const { state, dispatch } = useWizard();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [contactErrors, setContactErrors] = useState<Partial<Record<keyof WizardState["contact"], string>>>({});

  const step = state.step;
  const stepCfg = STEP_CONFIG[step - 1];
  const isLastStep = step === TOTAL_STEPS;

  const handleNext = async () => {
    if (isLastStep) {
      const result = plannerContactSchema.safeParse(state.contact);
      if (!result.success) {
        const errs: Record<string, string> = {};
        result.error.issues.forEach((issue) => {
          const key = issue.path[0] as string;
          if (!errs[key]) errs[key] = issue.message;
        });
        setContactErrors(errs);
        return;
      }
      setContactErrors({});
      setSubmitState("loading");
      try {
        const payload: PlannerSubmitPayload = { ...state, submittedAt: new Date().toISOString() };
        const res = await fetch("/api/planner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setSubmitState("success");
        } else {
          setSubmitState("error");
        }
      } catch {
        setSubmitState("error");
      }
      return;
    }
    if (canAdvance(state)) {
      dispatch({ type: "NEXT_STEP" });
    }
  };

  const handleBack = () => {
    setContactErrors({});
    dispatch({ type: "PREV_STEP" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
    setSubmitState("idle");
    setContactErrors({});
  };

  const handleContactChange = (field: keyof WizardState["contact"], value: string) => {
    dispatch({ type: "SET_CONTACT", payload: { [field]: value } });
    if (contactErrors[field]) {
      setContactErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const isAdvanceable = canAdvance(state);

  return (
    <div
      style={{
        width: "100%",
        padding: "72px 24px 96px",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "50%",
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,184,150,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Page header */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 600,
          margin: "0 auto 52px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "10px",
            letterSpacing: "0.40em",
            textTransform: "uppercase",
            color: "var(--champagne, #d4b896)",
            marginBottom: 20,
          }}
        >
          <span style={{ display: "block", width: 24, height: 1, background: "var(--champagne, #d4b896)" }} aria-hidden="true" />
          {PLANNER_STRINGS.pageTitle}
          <span style={{ display: "block", width: 24, height: 1, background: "var(--champagne, #d4b896)" }} aria-hidden="true" />
        </div>
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
          {PLANNER_STRINGS.pageSubtitle}
        </p>
      </div>

      {/* Glass card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 860,
          margin: "0 auto",
          background: "rgba(10,10,18,0.65)",
          border: "0.5px solid rgba(222,194,155,0.32)",
          backdropFilter: "blur(24px) saturate(140%)",
          WebkitBackdropFilter: "blur(24px) saturate(140%)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.03) inset",
        }}
      >
        {submitState === "success" ? (
          <WizardSummary state={state} onReset={handleReset} />
        ) : (
          <>
            {/* Card top: step indicator */}
            <div
              style={{
                padding: "32px 48px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                paddingBottom: 24,
              }}
              className="wizard-card-pad"
            >
              <StepIndicator current={step} total={TOTAL_STEPS} />
            </div>

            {/* Step content */}
            <div
              style={{ padding: "40px 48px 0" }}
              className="wizard-card-pad"
            >
              {/* Step header */}
              <div style={{ marginBottom: 32 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
                    fontWeight: 300,
                    fontSize: "clamp(22px, 2.8vw, 36px)",
                    lineHeight: 1.1,
                    color: "var(--ink)",
                    margin: "0 0 10px",
                  }}
                >
                  {stepCfg.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 13.5,
                    color: "var(--ink-2)",
                    margin: 0,
                  }}
                >
                  {stepCfg.subtitle}
                </p>
              </div>

              {/* Animated step content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {step === 1 && (
                    <Step1_Services
                      selected={state.selectedServices}
                      onToggle={(slug: ServiceSlug) => {
                        const cur = state.selectedServices;
                        const next = cur.includes(slug)
                          ? cur.filter((s) => s !== slug)
                          : [...cur, slug];
                        dispatch({ type: "SET_SERVICES", payload: next });
                      }}
                    />
                  )}
                  {step === 2 && (
                    <Step2_PropertyType
                      value={state.propertyType}
                      onChange={(v: PropertyType) =>
                        dispatch({ type: "SET_PROPERTY_TYPE", payload: v })
                      }
                    />
                  )}
                  {step === 3 && (
                    <Step3_Budget
                      value={state.budget}
                      onChange={(v: BudgetRange) =>
                        dispatch({ type: "SET_BUDGET", payload: v })
                      }
                    />
                  )}
                  {step === 4 && (
                    <Step4_Timeline
                      value={state.timeline}
                      onChange={(v: TimelineOption) =>
                        dispatch({ type: "SET_TIMELINE", payload: v })
                      }
                    />
                  )}
                  {step === 5 && (
                    <Step5_ContactInfo
                      contact={state.contact}
                      onChange={handleContactChange}
                      errors={contactErrors}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation row */}
            <div
              style={{
                padding: "32px 48px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
              className="wizard-card-pad"
            >
              {/* Left: step counter + back */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "9.5px",
                    letterSpacing: "0.28em",
                    color: "var(--ink-2)",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {String(step).padStart(2, "0")} / {String(TOTAL_STEPS).padStart(2, "0")}
                </span>

                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={submitState === "loading"}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "11px 20px",
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
                    className="wizard-back-btn"
                  >
                    {PLANNER_STRINGS.navigation.back}
                  </button>
                )}
              </div>

              {/* Right: error + next/submit */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                {submitState === "error" && (
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      color: "rgba(220,80,80,0.9)",
                      margin: 0,
                    }}
                  >
                    Something went wrong. Please try again.
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={(!isLastStep && !isAdvanceable) || submitState === "loading"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 40px",
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "#0a0a0c",
                    background:
                      submitState === "loading"
                        ? "var(--accent-soft)"
                        : "var(--champagne, #d4b896)",
                    border: "1px solid var(--champagne, #d4b896)",
                    borderRadius: 0,
                    cursor:
                      submitState === "loading"
                        ? "wait"
                        : (!isLastStep && !isAdvanceable)
                        ? "not-allowed"
                        : "pointer",
                    opacity: !isLastStep && !isAdvanceable ? 0.42 : 1,
                    boxShadow: "0 10px 32px rgba(212,184,150,0.16)",
                    transition:
                      "transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease, background .25s ease, opacity .2s ease",
                  }}
                  className={
                    !isLastStep && !isAdvanceable ? "" : "wizard-next-btn"
                  }
                >
                  {submitState === "loading" ? (
                    <>
                      <span
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          width: 13,
                          height: 13,
                          border: "2px solid rgba(10,10,12,0.3)",
                          borderTop: "2px solid #0a0a0c",
                          borderRadius: "50%",
                          animation: "contactSpin 0.7s linear infinite",
                        }}
                      />
                      {PLANNER_STRINGS.navigation.submitting}
                    </>
                  ) : isLastStep ? (
                    <>
                      <span>{PLANNER_STRINGS.navigation.submit}</span>
                      <span
                        aria-hidden="true"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          width: 14,
                          height: 1,
                          background: "currentColor",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            right: 0,
                            top: "50%",
                            width: 6,
                            height: 6,
                            borderTop: "1.5px solid currentColor",
                            borderRight: "1.5px solid currentColor",
                            transform: "translateY(-50%) rotate(45deg)",
                            display: "block",
                          }}
                        />
                      </span>
                    </>
                  ) : (
                    <>
                      <span>{PLANNER_STRINGS.navigation.next}</span>
                      <span
                        aria-hidden="true"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          width: 14,
                          height: 1,
                          background: "currentColor",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            right: 0,
                            top: "50%",
                            width: 6,
                            height: 6,
                            borderTop: "1.5px solid currentColor",
                            borderRight: "1.5px solid currentColor",
                            transform: "translateY(-50%) rotate(45deg)",
                            display: "block",
                          }}
                        />
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        .wizard-back-btn:hover {
          color: var(--ink) !important;
          border-color: rgba(255,255,255,0.50) !important;
        }
        .wizard-next-btn:hover:not(:disabled) {
          background: var(--accent-soft) !important;
          transform: translateY(-1px);
          box-shadow: 0 0 28px rgba(212,184,150,0.35), 0 16px 44px rgba(212,184,150,0.20) !important;
        }
        @media (max-width: 680px) {
          .wizard-card-pad { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 480px) {
          .wizard-card-pad { padding-left: 18px !important; padding-right: 18px !important; }
        }
      `}</style>
    </div>
  );
}
