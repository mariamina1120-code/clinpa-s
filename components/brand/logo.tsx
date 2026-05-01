// ClinPAS brand components — ported from design handoff (ClinPA-S.zip)
// Wordmark: "ClinPA" + ECG pulse hyphen + "S" in Lora, weight 100
// Caduceus watermark sits behind the wordmark at 13% opacity

interface PulseDashProps {
  fontSize: number;
  accent: string;
}

function PulseDash({ fontSize, accent }: PulseDashProps) {
  const sw = Math.max(2.4, fontSize * 0.085);
  return (
    <svg
      viewBox="0 0 50 40"
      preserveAspectRatio="none"
      style={{
        display: "block",
        width: fontSize * 0.42,
        height: fontSize * 0.44,
        position: "relative",
        top: -(fontSize * 0.06),
        flexShrink: 0,
        margin: `0 ${fontSize * 0.04}px`,
      }}
    >
      <circle cx="3" cy="20" r={sw * 0.7} fill={accent} />
      <path
        d="M 6 20 L 13 20 L 17 16 L 21 28 L 26 6 L 31 32 L 35 20 L 44 20"
        fill="none"
        stroke={accent}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="47" cy="20" r={sw * 0.7} fill={accent} />
    </svg>
  );
}

interface CaduceusProps {
  size: number;
  color: string;
}

function Caduceus({ size, color }: CaduceusProps) {
  return (
    <svg
      viewBox="0 0 48 64"
      style={{ width: size, height: size * (64 / 48), display: "block" }}
    >
      <g stroke={color} strokeWidth="2.4" strokeLinecap="round" fill="none">
        <line x1="24" y1="6" x2="24" y2="58" />
        <line x1="17" y1="11" x2="31" y2="11" />
        <path d="M 24 18 C 10 24, 38 30, 24 36 C 10 42, 38 48, 24 54" />
        <path d="M 24 18 C 38 24, 10 30, 24 36 C 38 42, 10 48, 24 54" opacity="0.35" />
        <path d="M 16 14 C 10 13, 6 15, 4 18" />
        <path d="M 32 14 C 38 13, 42 15, 44 18" />
      </g>
    </svg>
  );
}

export interface ClinPASLockupProps {
  /** Cap-height of the wordmark in px */
  size?: number;
  tone?: "light" | "dark";
  className?: string;
}

export function ClinPASLockup({ size = 32, tone = "light", className }: ClinPASLockupProps) {
  const ink     = tone === "light" ? "#1e293b" : "#f8fafc";
  const accent  = tone === "light" ? "#0369a1" : "#38bdf8";
  const padV    = size * 0.30;
  const padH    = size * 0.50;

  return (
    <span
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `${padV}px ${padH}px`,
      }}
    >
      {/* Caduceus watermark — centered behind wordmark */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.13,
          pointerEvents: "none",
          zIndex: 0,
          display: "flex",
        }}
      >
        <Caduceus size={size * 1.9} color={ink} />
      </span>

      {/* Wordmark */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-lora), Lora, Georgia, serif",
          fontWeight: 100,
          letterSpacing: "-0.02em",
          fontSize: size,
          lineHeight: 1,
          color: ink,
          display: "inline-flex",
          alignItems: "baseline",
          whiteSpace: "nowrap",
        }}
      >
        <span>ClinPA</span>
        <PulseDash fontSize={size} accent={accent} />
        <span>S</span>
      </span>
    </span>
  );
}

export interface ClinPASIconProps {
  size?: number;
  className?: string;
}

export function ClinPASIcon({ size = 64, className }: ClinPASIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{
        borderRadius: size * 0.22,
        boxShadow:
          "0 18px 40px -18px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
        display: "block",
        flexShrink: 0,
      }}
    >
      <defs>
        <linearGradient id="cpas-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0284c7" />
          <stop offset="1" stopColor="#075985" />
        </linearGradient>
        <linearGradient id="cpas-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"    stopColor="white" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="white" stopOpacity="0.02" />
          <stop offset="1"    stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="cpas-vig" cx="50%" cy="40%" r="75%">
          <stop offset="0" stopColor="black" stopOpacity="0" />
          <stop offset="1" stopColor="black" stopOpacity="0.30" />
        </radialGradient>
        <filter id="cpas-drop">
          <feDropShadow dx="0" dy="0.6" stdDeviation="0.8" floodColor="black" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* 1 — gradient base */}
      <rect width="100" height="100" fill="url(#cpas-base)" />

      {/* 2 — laurel arc texture */}
      <path d="M 18 50 A 32 32 0 0 1 82 50" stroke="white" strokeWidth="0.6" opacity="0.10" fill="none" />

      {/* 3 — caduceus in white */}
      <g filter="url(#cpas-drop)" transform="translate(50,52) scale(0.85) translate(-24,-32)">
        <g stroke="white" strokeWidth="2.4" strokeLinecap="round" fill="none">
          <line x1="24" y1="6"  x2="24" y2="58" />
          <line x1="17" y1="11" x2="31" y2="11" />
          <path d="M 24 18 C 10 24, 38 30, 24 36 C 10 42, 38 48, 24 54" />
          <path d="M 24 18 C 38 24, 10 30, 24 36 C 38 42, 10 48, 24 54" opacity="0.35" />
          <path d="M 16 14 C 10 13, 6 15, 4 18" />
          <path d="M 32 14 C 38 13, 42 15, 44 18" />
        </g>
      </g>

      {/* 4 — gloss */}
      <rect width="100" height="100" fill="url(#cpas-gloss)" />

      {/* 5 — vignette */}
      <rect width="100" height="100" fill="url(#cpas-vig)" />

      {/* 6 — inner stroke */}
      <rect x="0.5" y="0.5" width="99" height="99" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
    </svg>
  );
}
