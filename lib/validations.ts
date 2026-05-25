import { z } from "zod";

// Phase 6 — Zod schemas for contact and planner forms

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const plannerContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  notes: z.string().optional(),
});

export type PlannerContactValues = z.infer<typeof plannerContactSchema>;
