interface BrandMarkProps {
  size?: number;
  className?: string;
}

export default function BrandMark({ size = 24, className = "" }: BrandMarkProps) {
  const cx = size / 2;
  const r = size * 0.42;
  const tick = size * 0.12;
  const stroke = Math.max(0.8, size / 28);
  const tickStroke = Math.max(0.8, size / 30);
  const others = [90, 180, 270];

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 12px rgba(212,184,150,0.18))" }}
    >
      {/* outer ring */}
      <circle
        cx={cx}
        cy={cx}
        r={r}
        fill="none"
        stroke="rgba(240,232,217,0.5)"
        strokeWidth={stroke}
      />
      {/* N tick — champagne, slightly longer */}
      <line
        x1={cx}
        y1={cx - r + stroke / 2}
        x2={cx}
        y2={cx - r + tick + 2}
        stroke="var(--champagne, #d4b896)"
        strokeWidth={tickStroke * 1.3}
        strokeLinecap="round"
      />
      {/* E / S / W ticks */}
      {others.map((deg) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        const x1 = cx + (r - stroke / 2) * Math.cos(rad);
        const y1 = cx + (r - stroke / 2) * Math.sin(rad);
        const x2 = cx + (r - tick) * Math.cos(rad);
        const y2 = cx + (r - tick) * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(240,232,217,0.55)"
            strokeWidth={tickStroke}
            strokeLinecap="round"
          />
        );
      })}
      {/* centre dot */}
      <circle
        cx={cx}
        cy={cx}
        r={Math.max(1, size * 0.055)}
        fill="var(--champagne, #d4b896)"
      />
    </svg>
  );
}
