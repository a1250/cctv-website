"use client";

import { useEffect, useRef, useMemo } from "react";

const BASE = "#040508";
const COLORS = ["#0a1a4a", "#1a3a8c", "#050a24", "#c9a86a", "#e8c98a"];
const SIZES = ["140vmax", "110vmax", "150vmax", "85vmax", "70vmax"];
const DURATIONS = [88000, 72000, 96000, 64000, 78000];
const AMPS = [22, 28, 18, 36, 42];
const BLURS = [120, 90, 140, 70, 60];
const OPACITIES = [0.95, 0.85, 0.7, 0.75, 0.6];

function makePath(seed: number, amplitude = 30, points = 6): Keyframe[] {
  let s = seed * 9301 + 49297;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const sx = (rnd() - 0.5) * amplitude;
  const sy = (rnd() - 0.5) * amplitude;
  const ss = 0.9 + rnd() * 0.25;
  const frames: Keyframe[] = [];
  for (let i = 0; i < points; i++) {
    const x = (rnd() - 0.5) * amplitude;
    const y = (rnd() - 0.5) * amplitude;
    const sc = 0.85 + rnd() * 0.35;
    frames.push({ transform: `translate(${x}%, ${y}%) scale(${sc})` });
  }
  frames.unshift({ transform: `translate(${sx}%, ${sy}%) scale(${ss})` });
  frames.push({ transform: `translate(${sx}%, ${sy}%) scale(${ss})` });
  return frames;
}

interface BlobConfig {
  color: string;
  size: string;
  path: Keyframe[];
  duration: number;
  delay: number;
  opacity: number;
  blur: number;
  blend: string;
}

function Blob({ color, size, path, duration, delay, opacity, blur, blend }: BlobConfig) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const anim = el.animate(path, {
      duration,
      delay: -delay,
      iterations: Infinity,
      easing: "linear",
    });
    return () => anim.cancel();
  }, [path, duration, delay]);

  const num = parseFloat(size);
  const unit = size.replace(/[0-9.]/g, "");

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        borderRadius: "50%",
        width: size,
        height: size,
        left: `calc(50% - ${num / 2}${unit})`,
        top: `calc(50% - ${num / 2}${unit})`,
        background: `radial-gradient(circle at 50% 50%, ${color} 0%, ${color}cc 35%, ${color}00 70%)`,
        opacity,
        filter: `blur(${blur}px) saturate(120%)`,
        mixBlendMode: blend as React.CSSProperties["mixBlendMode"],
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}

export default function AmbientBackground() {
  const blobs = useMemo<BlobConfig[]>(
    () =>
      COLORS.map((color, i) => ({
        color,
        size: SIZES[i],
        path: makePath(i + 1, AMPS[i]),
        duration: DURATIONS[i],
        delay: i * 4000,
        opacity: OPACITIES[i],
        blur: BLURS[i],
        blend: i === 2 ? "multiply" : "screen",
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        background: BASE,
        overflow: "hidden",
        isolation: "isolate",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {blobs.map((b, i) => (
        <Blob key={i} {...b} />
      ))}

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: "-10%",
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 28%, rgba(0,0,0,0.40) 70%, rgba(0,0,0,0.90) 100%)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 2px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0) 4px)",
          pointerEvents: "none",
          zIndex: 6,
          opacity: 0.6,
        }}
      />

      {/* Grain */}
      <div
        className="grain-overlay"
        style={{
          position: "absolute",
          inset: "-10%",
          pointerEvents: "none",
          zIndex: 7,
          opacity: 0.12,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
        }}
      />
    </div>
  );
}
