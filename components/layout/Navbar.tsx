"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, NAV_CTA, COMPANY } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          background: "linear-gradient(to bottom, rgba(6,6,10,0.72), rgba(6,6,10,0.4))",
          WebkitBackdropFilter: "blur(22px) saturate(140%)",
          backdropFilter: "blur(22px) saturate(140%)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "18px 40px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: 24,
          }}
          className="nav-inner-responsive"
        >
          {/* Brand — left */}
          <Link
            href="/"
            aria-label={`${COMPANY.name} home`}
            style={{
              display: "flex",
              alignItems: "center",
              justifySelf: "start",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {/* Plain img — Next.js Image wrapper creates isolating compositing layer */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={COMPANY.logoHeaderSrc}
              alt={`${COMPANY.name} Logo`}
              className="header-logo-img"
              style={{ height: 42, width: "auto", display: "block", objectFit: "contain", background: "none", border: "none", boxShadow: "none", padding: 0 }}
            />
          </Link>

          {/* Desktop nav links — center */}
          <nav
            aria-label="Primary"
            style={{ display: "flex", alignItems: "center", gap: 36, justifySelf: "center" }}
            className="nav-links-desktop"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: "relative",
                    padding: "6px 2px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "12.5px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: active ? "var(--champagne)" : "var(--ink-2)",
                    textDecoration: "none",
                    transition: "color .25s ease",
                  }}
                  className="nav-link-item"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right — CTA + burger */}
          <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: 14 }}>
            <Link
              href={NAV_CTA.href}
              style={{
                padding: "11px 22px",
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
                transition: "background .25s ease, box-shadow .25s ease",
                whiteSpace: "nowrap",
              }}
              className="btn-contact-nav hidden md:inline-block"
            >
              {NAV_CTA.label}
            </Link>

            {/* Mobile burger */}
            <button
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(true)}
              style={{
                display: "none",
                width: 36,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--line-strong)",
                borderRadius: 0,
                background: "none",
                cursor: "pointer",
                color: "var(--ink)",
                flexDirection: "column",
                gap: 5,
              }}
              className="nav-burger-btn"
            >
              <span style={{ display: "block", width: 16, height: 1, background: "var(--ink)" }} />
              <span style={{ display: "block", width: 11, height: 1, background: "var(--ink)" }} />
            </button>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 920px) {
          .nav-links-desktop { display: none !important; }
          .btn-contact-nav { display: none !important; }
          .nav-burger-btn { display: flex !important; }
          .nav-inner-responsive {
            grid-template-columns: 1fr auto !important;
            padding: 16px 22px !important;
          }
          .header-logo-img { height: 34px !important; }
        }
        .nav-link-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: var(--champagne);
          transform-origin: left;
          transform: scaleX(0);
          transition: transform .35s cubic-bezier(.2,.7,.2,1);
        }
        .nav-link-item:hover { color: var(--ink) !important; }
        .nav-link-item:hover::after { transform: scaleX(1); }
        .btn-contact-nav:hover {
          background: var(--accent-soft) !important;
          box-shadow: 0 0 24px rgba(212,184,150,0.45);
        }
      `}</style>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
