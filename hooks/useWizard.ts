"use client";

import { useReducer } from "react";
import type { WizardState, WizardAction } from "@/types";

const initialState: WizardState = {
  step: 1,
  selectedServices: [],
  propertyType: null,
  budget: null,
  timeline: null,
  contact: { name: "", email: "", phone: "", notes: "" },
};

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "SET_SERVICES":
      return { ...state, selectedServices: action.payload };
    case "SET_PROPERTY_TYPE":
      return { ...state, propertyType: action.payload };
    case "SET_BUDGET":
      return { ...state, budget: action.payload };
    case "SET_TIMELINE":
      return { ...state, timeline: action.payload };
    case "SET_CONTACT":
      return { ...state, contact: { ...state.contact, ...action.payload } };
    case "NEXT_STEP":
      return { ...state, step: Math.min(state.step + 1, 5) as WizardState["step"] };
    case "PREV_STEP":
      return { ...state, step: Math.max(state.step - 1, 1) as WizardState["step"] };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function useWizard() {
  const [state, dispatch] = useReducer(wizardReducer, initialState);
  return { state, dispatch };
}
