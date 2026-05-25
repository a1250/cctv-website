"use client";

// Phase 7 — TODO: implement Framer Motion slide-up entrance animation

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function SlideUp({ children, className }: SlideUpProps) {
  return <div className={className}>{children}</div>;
}
