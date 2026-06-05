import type { SERVICES, PROJECTS } from "@/lib/constants";

// ─────────────────────────────────────────────────────────
// Service
// ─────────────────────────────────────────────────────────

export type ServiceSlug =
  | "cameras"
  | "alarm-systems"
  | "intercom-access"
  | "networks-wifi"
  | "sound-systems"
  | "home-cinema"
  | "led-lighting";

export type Service = (typeof SERVICES)[number];

// ─────────────────────────────────────────────────────────
// Project
// ─────────────────────────────────────────────────────────

export type ProjectCategory = "Residential" | "Commercial" | "Hospitality";

export type Project = (typeof PROJECTS)[number];

// ─────────────────────────────────────────────────────────
// Planner Wizard
// ─────────────────────────────────────────────────────────

export type PropertyType =
  | "residential-new"
  | "residential-existing"
  | "commercial"
  | "hospitality"
  | "other";

export type BudgetRange =
  | "under-25k"
  | "25k-75k"
  | "75k-250k"
  | "250k-plus"
  | "unsure";

export type TimelineOption =
  | "asap"
  | "1-3-months"
  | "3-6-months"
  | "6-plus-months"
  | "flexible";

export interface WizardState {
  step: 1 | 2 | 3 | 4 | 5;
  selectedServices: ServiceSlug[];
  propertyType: PropertyType | null;
  budget: BudgetRange | null;
  timeline: TimelineOption | null;
  contact: {
    name: string;
    email: string;
    phone: string;
    notes: string;
  };
}

export type WizardAction =
  | { type: "SET_SERVICES"; payload: ServiceSlug[] }
  | { type: "SET_PROPERTY_TYPE"; payload: PropertyType }
  | { type: "SET_BUDGET"; payload: BudgetRange }
  | { type: "SET_TIMELINE"; payload: TimelineOption }
  | { type: "SET_CONTACT"; payload: Partial<WizardState["contact"]> }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "RESET" };

// ─────────────────────────────────────────────────────────
// Forms
// ─────────────────────────────────────────────────────────

export interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  service?: ServiceSlug | "";
  message: string;
}

export interface PlannerSubmitPayload extends WizardState {
  submittedAt: string;
}

// ─────────────────────────────────────────────────────────
// API Responses
// ─────────────────────────────────────────────────────────

export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data?: T;
}

// ─────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}
