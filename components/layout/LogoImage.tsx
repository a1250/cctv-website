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
      alt="360 Integrated Systems Logo"
      width={320}
      height={80}
      priority
      onError={() => setErr(true)}
      className={className}
      style={{
        height,
        width: "auto",
        objectFit: "contain",
        objectPosition: "left center",
        filter: "drop-shadow(0 0 16px rgba(222,194,155,0.20))",
      }}
    />
  );
}
