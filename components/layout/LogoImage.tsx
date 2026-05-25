"use client";

import { useState } from "react";
import Image from "next/image";
import BrandMark from "./BrandMark";
import { COMPANY } from "@/lib/constants";

interface LogoImageProps {
  height?: number;
  className?: string;
}

export default function LogoImage({ height = 36, className = "" }: LogoImageProps) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
        className={className}
      >
        <BrandMark size={Math.round(height * 0.9)} />
        <span
          style={{
            fontFamily: "var(--font-brand, var(--font-cinzel), 'Times New Roman', serif)",
            fontWeight: 500,
            fontSize: Math.round(height * 0.38),
            letterSpacing: "0.28em",
            color: "var(--ink)",
          }}
        >
          {COMPANY.name.toUpperCase()}
        </span>
      </span>
    );
  }

  return (
    <Image
      src={COMPANY.logoSrc}
      alt={COMPANY.name}
      width={220}
      height={52}
      unoptimized
      priority
      onError={() => setErr(true)}
      className={className}
      style={{
        height,
        width: "auto",
        objectFit: "contain",
        objectPosition: "left center",
        filter: "drop-shadow(0 0 14px rgba(212,184,150,0.16))",
      }}
    />
  );
}
