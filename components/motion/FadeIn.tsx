"use client";

// Phase 7 — TODO: implement Framer Motion fade-in with configurable delay/duration

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, className }: FadeInProps) {
  return <div className={className}>{children}</div>;
}
