"use client";

import Link from "next/link";
import { NAV_LINKS, NAV_CTA, COMPANY } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "rgba(4,5,8,0.92)",
        WebkitBackdropFilter: "blur(32px) saturate(140%)",
        backdropFilter: "blur(32px) saturate(140%)",
        display: open ? "flex" : "none",
        flexDirection: "column",
        padding: "80px 32px 40px",
        borderRight: "1px solid var(--line)",
      }}
    >
      {/* Close button */}
      <button
        aria-label="Close menu"
        onClick={onClose}
        style={{
          position: "absolute",
          top: 22,
          right: 22,
          width: 36,
          height: 36,
          display: "grid",
          placeItems: "center",
          border: "1px solid var(--line-strong)",
          background: "none",
          color: "var(--ink)",
          fontSize: 14,
          cursor: "pointer",
          borderRadius: 0,
        }}
      >
        ✕
      </button>

      {/* Brand logo */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={COMPANY.logoFooterSrc}
          alt={`${COMPANY.name} Logo`}
          style={{
            width: 180,
            height: "auto",
            display: "block",
            objectFit: "contain",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Nav links */}
      <nav aria-label="Mobile navigation">
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              padding: "18px 0",
              borderBottom: "1px solid var(--line)",
              fontFamily: "var(--font-sans)",
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "9.5px",
                letterSpacing: "0.22em",
                color: "var(--champagne, #d4b896)",
                minWidth: 22,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <Link
        href={NAV_CTA.href}
        onClick={onClose}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          marginTop: 28,
          alignSelf: "flex-start",
          padding: "14px 28px",
          fontFamily: "var(--font-sans)",
          fontSize: "11.5px",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#0a0a0c",
          background: "var(--champagne)",
          border: "1px solid var(--champagne)",
          borderRadius: 0,
          textDecoration: "none",
        }}
      >
        {NAV_CTA.label}
        <span
          aria-hidden="true"
          style={{ display: "block", width: 12, height: 1, background: "currentColor", position: "relative" }}
        >
          <span
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              width: 5,
              height: 5,
              borderTop: "1px solid currentColor",
              borderRight: "1px solid currentColor",
              transform: "translateY(-50%) rotate(45deg)",
              display: "block",
            }}
          />
        </span>
      </Link>

      {/* Bottom credentials */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: 28,
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "9.5px",
          letterSpacing: "0.22em",
          color: "var(--ink-3)",
          textTransform: "uppercase",
          lineHeight: 1.8,
        }}
      >
        <div>{COMPANY.phone}</div>
        <div style={{ color: "rgba(255,255,255,0.2)" }}>LIC. 4012 · CEDIA · ATMOS</div>
      </div>
    </div>
  );
}
