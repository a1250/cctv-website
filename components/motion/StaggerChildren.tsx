"use client";

// Phase 7 — TODO: implement Framer Motion stagger container for list animations

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerChildren({ children, className }: StaggerChildrenProps) {
  return <div className={className}>{children}</div>;
}
