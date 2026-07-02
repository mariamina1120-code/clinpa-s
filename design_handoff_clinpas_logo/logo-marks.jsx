// logo-marks.jsx
// Refined ClinPA-S marks — sophisticated icons with depth, shading,
// and crafted detail. Each Mark accepts size, tone, accent, font.

// ─────────────────────────────────────────────────────────────
// Wordmark base
// ─────────────────────────────────────────────────────────────
function WordmarkBase({
  size = 64, tone = 'light', accent = 'var(--teal-700)',
  font = "'Fraunces', serif", weight = 600, tracking = '-0.02em',
  italic = true, slot
}) {
  const ink = tone === 'light' ? 'var(--ink)' : 'var(--paper)';
  const isSerif = /Fraunces|Newsreader|Spectral|Garamond|Caslon|DM Serif|Instrument|Plex Serif|serif/i.test(font);
  return (
    <span style={{
      fontFamily: font, fontWeight: weight, letterSpacing: tracking,
      fontSize: size, lineHeight: 1, color: ink,
      display: 'inline-flex', alignItems: 'baseline', whiteSpace: 'nowrap',
      fontStyle: italic && isSerif ? 'italic' : 'normal',
      fontVariationSettings: /Fraunces/i.test(font) ? '"opsz" 96, "SOFT" 30' : 'normal'
    }}>
      <span style={{ color: ink, fontFamily: "monospace", fontWeight: "100" }}>ClinPA</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '1em' }}>{slot}</span>
      <span style={{ color: ink }}>S</span>
    </span>);

}

// ─────────────────────────────────────────────────────────────
// Common SVG defs — embedded per-icon for self-containment.
// Provides a subtle radial highlight, deep inner shadow,
// vignette, and a soft "lens" gloss for that sophisticated app-icon feel.
// ─────────────────────────────────────────────────────────────
function IconChrome({ id, accent, deep = true }) {
  return (
    <defs>
      {/* gradient base — subtle vertical depth */}
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="oklch(0.56 0.12 200)" />
        <stop offset="1" stopColor="oklch(0.36 0.08 200)" />
      </linearGradient>
      {/* top highlight */}
      <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="white" stopOpacity="0.18" />
        <stop offset="0.5" stopColor="white" stopOpacity="0.04" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      {/* radial inner glow */}
      <radialGradient id={`${id}-vig`} cx="0.5" cy="0.45" r="0.7">
        <stop offset="0" stopColor="white" stopOpacity="0.0" />
        <stop offset="1" stopColor="black" stopOpacity="0.22" />
      </radialGradient>
      {/* inner shadow filter for cut elements */}
      <filter id={`${id}-inset`} x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" />
        <feOffset dy="0.6" />
        <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.25 0" />
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
      {/* soft drop for foreground */}
      <filter id={`${id}-drop`} x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0.6" stdDeviation="0.8" floodColor="black" floodOpacity="0.25" />
      </filter>
    </defs>);

}

// ─────────────────────────────────────────────────────────────
// 01 — Pulse Hyphen mark (used inline in wordmark)
// ECG with QRS, fine grid trace, twin terminals
// ─────────────────────────────────────────────────────────────
function PulseDash({ width, height, accent, weight = 6 }) {
  const sw = Math.max(2.4, weight);
  return (
    <svg viewBox="0 0 50 40" preserveAspectRatio="none" style={{ display: 'block', width, height }}>
      <circle cx="3" cy="20" r={sw * 0.7} fill={accent} />
      <path d="M 6 20 L 13 20 L 17 16 L 21 28 L 26 6 L 31 32 L 35 20 L 44 20"
      fill="none" stroke={accent} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{ strokeWidth: "3.321739px", opacity: "0.75" }} />
      <circle cx="47" cy="20" r={sw * 0.7} fill={accent} />
    </svg>);

}

// ─────────────────────────────────────────────────────────────
// 02 — Cross Hyphen (refined chamfered cross)
// ─────────────────────────────────────────────────────────────
function CrossDash({ size, accent }) {
  return (
    <svg viewBox="0 0 100 100" style={{ display: 'block', width: size, height: size }}>
      <defs>
        <mask id="cd-notch">
          <rect width="100" height="100" fill="white" />
          <circle cx="36" cy="36" r="3" fill="black" />
          <circle cx="64" cy="36" r="3" fill="black" />
          <circle cx="36" cy="64" r="3" fill="black" />
          <circle cx="64" cy="64" r="3" fill="black" />
        </mask>
      </defs>
      <rect x="36" y="6" width="28" height="88" rx="6" fill={accent} mask="url(#cd-notch)" />
      <rect x="6" y="36" width="88" height="28" rx="6" fill={accent} mask="url(#cd-notch)" />
    </svg>);

}

// ─────────────────────────────────────────────────────────────
// 03 — Caduceus glyph
// ─────────────────────────────────────────────────────────────
function CaduceusGlyph({ size, accent, weight = 2.6 }) {
  return (
    <svg viewBox="0 0 48 64" style={{ display: 'block', width: size, height: size * 1.33 }}>
      <g stroke={accent} strokeWidth={weight} strokeLinecap="round" fill="none">
        <line x1="24" y1="6" x2="24" y2="58" />
        <line x1="17" y1="11" x2="31" y2="11" />
        <path d="M 24 18 C 10 24, 38 30, 24 36 C 10 42, 38 48, 24 54" />
        <path d="M 24 18 C 38 24, 10 30, 24 36 C 38 42, 10 48, 24 54" opacity="0.35" />
        <path d="M 16 14 C 10 13, 6 15, 4 18" />
        <path d="M 32 14 C 38 13, 42 15, 44 18" />
      </g>
    </svg>);

}

// ─────────────────────────────────────────────────────────────
// 04 — Stethoscope glyph
// ─────────────────────────────────────────────────────────────
function StethGlyph({ size, accent, weight = 4 }) {
  return (
    <svg viewBox="0 0 64 64" style={{ display: 'block', width: size, height: size }}>
      <path d="M 18 8 C 10 8, 8 16, 8 24 C 8 38, 18 48, 30 48"
      fill="none" stroke={accent} strokeWidth={weight} strokeLinecap="round" />
      <path d="M 46 8 C 54 8, 56 16, 56 24 C 56 38, 46 48, 34 48"
      fill="none" stroke={accent} strokeWidth={weight} strokeLinecap="round" />
      <circle cx="32" cy="54" r="6" fill={accent} />
      <circle cx="32" cy="54" r="3" fill="white" opacity="0.25" />
    </svg>);

}

// ─────────────────────────────────────────────────────────────
// 05 — Bracket halves
// ─────────────────────────────────────────────────────────────
function BracketHalf({ side, size, accent }) {
  const d = side === 'left' ?
  "M 9 4 L 4 4 L 4 26 L 9 26" :
  "M 3 4 L 8 4 L 8 26 L 3 26";
  return (
    <span style={{ display: 'inline-block', width: size * 0.18, height: size * 0.74 }}>
      <svg viewBox="0 0 12 30" style={{ display: 'block', width: '100%', height: '100%' }}>
        <path d={d} fill="none" stroke={accent} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>);

}

// ─────────────────────────────────────────────────────────────
// Wordmark variants
// ─────────────────────────────────────────────────────────────
function MarkPulse({ size = 64, tone = 'light', accent = 'var(--teal-700)', font, weight, italic }) {
  const w = size * 0.42,h = size * 0.44;
  return (
    <WordmarkBase size={size} tone={tone} accent={accent} font={font} weight={weight} italic={italic}
    slot={
    <span style={{ display: 'inline-block', width: w, height: h, margin: `0 ${size * 0.04}px`, transform: `translateY(${-size * 0.06}px)` }}>
          <PulseDash width={w} height={h} accent={accent} weight={size * 0.085} />
        </span>
    } />);

}

function MarkCross({ size = 64, tone = 'light', accent = 'var(--teal-700)', font, weight, italic }) {
  const cs = size * 0.46;
  return (
    <WordmarkBase size={size} tone={tone} accent={accent} font={font} weight={weight} italic={italic}
    slot={
    <span style={{ display: 'inline-block', width: cs, height: cs, margin: `0 ${size * 0.08}px`, transform: `translateY(${-size * 0.04}px)` }}>
          <CrossDash size={cs} accent={accent} />
        </span>
    } />);

}

function MarkCaduceus({ size = 64, tone = 'light', accent = 'var(--teal-700)', font, weight, italic, stacked = false }) {
  const wordmark =
  <WordmarkBase size={size} tone={tone} accent={accent} font={font} weight={weight} italic={italic}
  slot={
  <span style={{ display: 'inline-block', width: size * 0.32, height: size * 0.10,
    background: accent, borderRadius: size * 0.06,
    margin: `0 ${size * 0.08}px`, transform: `translateY(${-size * 0.18}px)` }} />
  } />;

  const monogram = <CaduceusGlyph size={size * 0.95} accent={accent} weight={3.2} />;
  if (stacked) return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.25 }}>{monogram}{wordmark}</div>;
  return <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.40 }}>{monogram}{wordmark}</div>;
}

function MarkSteth({ size = 64, tone = 'light', accent = 'var(--teal-700)', font, weight, italic }) {
  const ink = tone === 'light' ? 'var(--ink)' : 'var(--paper)';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.32 }}>
      <span style={{ position: 'relative', width: size * 1.15, height: size * 1.15 }}>
        <StethGlyph size={size * 1.15} accent={accent} weight={4.2} />
        <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: font || "'Fraunces', serif", fontWeight: 600, color: ink, fontSize: size * 0.55,
          fontStyle: italic ? 'italic' : 'normal',
          transform: `translateY(${-size * 0.05}px)`, letterSpacing: '-0.02em' }}>S</span>
      </span>
      <WordmarkBase size={size} tone={tone} accent={accent} font={font} weight={weight} italic={italic}
      slot={
      <span style={{ display: 'inline-block', width: size * 0.30, height: size * 0.10,
        background: accent, borderRadius: size * 0.06,
        margin: `0 ${size * 0.08}px`, transform: `translateY(${-size * 0.18}px)` }} />
      } />
    </div>);

}

function MarkBracket({ size = 64, tone = 'light', accent = 'var(--teal-700)', font, weight, italic }) {
  const ink = tone === 'light' ? 'var(--ink)' : 'var(--paper)';
  const isSerif = /Fraunces|Newsreader|Spectral|Garamond|Caslon|DM Serif|serif/i.test(font || 'Fraunces');
  return (
    <span style={{ fontFamily: font || "'Fraunces', serif", fontWeight: weight || 600,
      letterSpacing: '-0.02em', fontSize: size, lineHeight: 1, color: ink,
      display: 'inline-flex', alignItems: 'baseline', whiteSpace: 'nowrap',
      fontStyle: italic && isSerif ? 'italic' : 'normal' }}>
      ClinPA
      <span style={{ display: 'inline-flex', alignItems: 'center', margin: `0 ${size * 0.04}px`, height: '1em', transform: `translateY(${-size * 0.05}px)` }}>
        <BracketHalf side="left" size={size} accent={accent} />
      </span>
      <span style={{ color: ink }}>S</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: size * 0.04, height: '1em', transform: `translateY(${-size * 0.05}px)` }}>
        <BracketHalf side="right" size={size} accent={accent} />
      </span>
    </span>);

}

// ─────────────────────────────────────────────────────────────
// SOPHISTICATED APP ICONS
// Each icon is now a single SVG with: gradient base, gloss highlight,
// inner shadow on cut shapes, drop on foreground, and crafted detail.
// ─────────────────────────────────────────────────────────────

// Pulse — ECG on a tinted bg with embossed grid
function IconPulse({ size = 96, fg = 'white', bg }) {
  const id = `pulse-${Math.random().toString(36).slice(2, 7)}`;
  const r = size * 0.22;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', borderRadius: r, boxShadow: '0 18px 40px -18px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.25) inset' }}>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.58 0.13 200)" />
          <stop offset="1" stopColor="oklch(0.34 0.08 200)" />
        </linearGradient>
        <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-vig`} cx="0.5" cy="0.4" r="0.75">
          <stop offset="0.5" stopColor="black" stopOpacity="0" />
          <stop offset="1" stopColor="black" stopOpacity="0.32" />
        </radialGradient>
        <filter id={`${id}-drop`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0.6" stdDeviation="0.8" floodColor="black" floodOpacity="0.35" />
        </filter>
        <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0.3" />
          <stop offset="0.15" stopColor="white" />
          <stop offset="0.85" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* base */}
      <rect width="100" height="100" rx="22" fill={`url(#${id}-bg)`} />
      {/* faint grid */}
      <g opacity="0.10" stroke="white" strokeWidth="0.4">
        {[20, 30, 40, 50, 60, 70, 80].map((y) => <line key={y} x1="10" x2="90" y1={y} y2={y} />)}
        {[20, 30, 40, 50, 60, 70, 80].map((x) => <line key={x} y1="20" y2="80" x1={x} x2={x} />)}
      </g>
      {/* major center axes */}
      <g opacity="0.18" stroke="white" strokeWidth="0.6">
        <line x1="10" x2="90" y1="50" y2="50" />
        <line x1="50" x2="50" y1="20" y2="80" />
      </g>
      {/* ECG trace */}
      <g filter={`url(#${id}-drop)`}>
        <circle cx="14" cy="50" r="2.4" fill="white" />
        <path
          d="M 16 50 L 36 50 L 40 50 L 43 44 L 47 60 L 53 26 L 59 70 L 63 50 L 86 50"
          fill="none" stroke={`url(#${id}-stroke)`} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="86" cy="50" r="2.4" fill="white" />
      </g>
      {/* gloss + vignette */}
      <rect width="100" height="100" rx="22" fill={`url(#${id}-gloss)`} />
      <rect width="100" height="100" rx="22" fill={`url(#${id}-vig)`} />
      {/* inner stroke */}
      <rect x="0.5" y="0.5" width="99" height="99" rx="21.5" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="0.8" />
    </svg>);

}

// Cross — geometric with inset shadow + corner reliefs + gloss
function IconCross({ size = 96, fg = 'white', bg }) {
  const id = `cross-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', borderRadius: size * 0.22, boxShadow: '0 18px 40px -18px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.25) inset' }}>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.58 0.13 200)" />
          <stop offset="1" stopColor="oklch(0.34 0.08 200)" />
        </linearGradient>
        <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-cross`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" />
          <stop offset="1" stopColor="oklch(0.92 0.02 200)" />
        </linearGradient>
        <radialGradient id={`${id}-vig`} cx="0.5" cy="0.4" r="0.75">
          <stop offset="0.5" stopColor="black" stopOpacity="0" />
          <stop offset="1" stopColor="black" stopOpacity="0.30" />
        </radialGradient>
        <mask id={`${id}-notch`}>
          <rect width="100" height="100" fill="white" />
          <circle cx="36" cy="36" r="3.2" fill="black" />
          <circle cx="64" cy="36" r="3.2" fill="black" />
          <circle cx="36" cy="64" r="3.2" fill="black" />
          <circle cx="64" cy="64" r="3.2" fill="black" />
        </mask>
        <filter id={`${id}-drop`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0.8" stdDeviation="1" floodColor="black" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect width="100" height="100" rx="22" fill={`url(#${id}-bg)`} />
      {/* concentric tile pattern for texture */}
      <g opacity="0.08" stroke="white" strokeWidth="0.5" fill="none">
        <rect x="10" y="10" width="80" height="80" rx="6" />
        <rect x="18" y="18" width="64" height="64" rx="4" />
      </g>
      {/* cross with shading */}
      <g filter={`url(#${id}-drop)`} mask={`url(#${id}-notch)`}>
        <rect x="36" y="6" width="28" height="88" rx="5.5" fill={`url(#${id}-cross)`} />
        <rect x="6" y="36" width="88" height="28" rx="5.5" fill={`url(#${id}-cross)`} />
      </g>
      {/* center lozenge — adds craft */}
      <rect x="44" y="44" width="12" height="12" rx="2" fill="oklch(0.92 0.02 200)" opacity="0.6" />
      <rect x="46" y="46" width="8" height="8" rx="1" fill="oklch(0.46 0.10 200)" opacity="0.4" />
      <rect width="100" height="100" rx="22" fill={`url(#${id}-gloss)`} />
      <rect width="100" height="100" rx="22" fill={`url(#${id}-vig)`} />
      <rect x="0.5" y="0.5" width="99" height="99" rx="21.5" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="0.8" />
    </svg>);

}

// Caduceus — staff + serpentine helix + small wings, with gloss
function IconCaduceus({ size = 96, fg = 'white', bg }) {
  const id = `cad-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', borderRadius: size * 0.22, boxShadow: '0 18px 40px -18px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.25) inset' }}>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.58 0.13 200)" />
          <stop offset="1" stopColor="oklch(0.34 0.08 200)" />
        </linearGradient>
        <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-vig`} cx="0.5" cy="0.4" r="0.75">
          <stop offset="0.5" stopColor="black" stopOpacity="0" />
          <stop offset="1" stopColor="black" stopOpacity="0.30" />
        </radialGradient>
        <linearGradient id={`${id}-fg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" />
          <stop offset="1" stopColor="oklch(0.88 0.03 200)" />
        </linearGradient>
        <filter id={`${id}-drop`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0.6" stdDeviation="0.8" floodColor="black" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect width="100" height="100" rx="22" fill={`url(#${id}-bg)`} />
      {/* faint laurel arc */}
      <g opacity="0.10" stroke="white" strokeWidth="0.6" fill="none">
        <path d="M 18 50 A 32 32 0 0 1 82 50" />
      </g>
      {/* caduceus */}
      <g filter={`url(#${id}-drop)`}>
        {/* wings */}
        <g fill={`url(#${id}-fg)`} opacity="0.95">
          <path d="M 50 22 C 42 19, 32 19, 26 24 C 32 25, 38 26, 44 28 Z" />
          <path d="M 50 22 C 58 19, 68 19, 74 24 C 68 25, 62 26, 56 28 Z" />
          <ellipse cx="50" cy="22" rx="2.6" ry="3.2" />
        </g>
        {/* staff */}
        <line x1="50" y1="22" x2="50" y2="86" stroke={`url(#${id}-fg)`} strokeWidth="3.2" strokeLinecap="round" />
        {/* serpents — twin helix */}
        <path d="M 50 32 C 36 38, 64 46, 50 54 C 36 62, 64 70, 50 78"
        fill="none" stroke={`url(#${id}-fg)`} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 50 32 C 64 38, 36 46, 50 54 C 64 62, 36 70, 50 78"
        fill="none" stroke={`url(#${id}-fg)`} strokeWidth="2.6" strokeLinecap="round" opacity="0.55" />
        {/* serpent heads */}
        <circle cx="38" cy="34" r="2" fill={`url(#${id}-fg)`} />
        <circle cx="62" cy="34" r="2" fill={`url(#${id}-fg)`} opacity="0.6" />
        {/* base */}
        <rect x="44" y="84" width="12" height="3" rx="1.5" fill={`url(#${id}-fg)`} />
      </g>
      <rect width="100" height="100" rx="22" fill={`url(#${id}-gloss)`} />
      <rect width="100" height="100" rx="22" fill={`url(#${id}-vig)`} />
      <rect x="0.5" y="0.5" width="99" height="99" rx="21.5" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="0.8" />
    </svg>);

}

// Stethoscope — full instrument with tubing, bell, diaphragm, hardware
function IconSteth({ size = 96, fg = 'white', bg }) {
  const id = `steth-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', borderRadius: size * 0.22, boxShadow: '0 18px 40px -18px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.25) inset' }}>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.58 0.13 200)" />
          <stop offset="1" stopColor="oklch(0.34 0.08 200)" />
        </linearGradient>
        <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-vig`} cx="0.5" cy="0.4" r="0.75">
          <stop offset="0.5" stopColor="black" stopOpacity="0" />
          <stop offset="1" stopColor="black" stopOpacity="0.30" />
        </radialGradient>
        <linearGradient id={`${id}-tube`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" />
          <stop offset="1" stopColor="oklch(0.85 0.04 200)" />
        </linearGradient>
        <radialGradient id={`${id}-bell`} cx="0.5" cy="0.35" r="0.7">
          <stop offset="0" stopColor="white" />
          <stop offset="0.6" stopColor="oklch(0.86 0.03 200)" />
          <stop offset="1" stopColor="oklch(0.55 0.10 200)" />
        </radialGradient>
        <radialGradient id={`${id}-diaph`} cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="oklch(0.95 0.02 200)" />
          <stop offset="1" stopColor="oklch(0.65 0.07 200)" />
        </radialGradient>
        <filter id={`${id}-drop`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0.8" stdDeviation="1" floodColor="black" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect width="100" height="100" rx="22" fill={`url(#${id}-bg)`} />
      {/* heartline behind */}
      <path d="M 12 70 L 30 70 L 34 65 L 38 78 L 44 58 L 50 70 L 88 70"
      fill="none" stroke="white" strokeOpacity="0.14" strokeWidth="1" strokeLinecap="round" />
      <g filter={`url(#${id}-drop)`}>
        {/* earpieces */}
        <circle cx="26" cy="14" r="3" fill={`url(#${id}-tube)`} />
        <circle cx="74" cy="14" r="3" fill={`url(#${id}-tube)`} />
        {/* binaural tubes */}
        <path d="M 26 17 C 26 30, 32 38, 40 44" fill="none" stroke={`url(#${id}-tube)`} strokeWidth="3.2" strokeLinecap="round" />
        <path d="M 74 17 C 74 30, 68 38, 60 44" fill="none" stroke={`url(#${id}-tube)`} strokeWidth="3.2" strokeLinecap="round" />
        {/* yoke */}
        <rect x="44" y="42" width="12" height="6" rx="2" fill={`url(#${id}-tube)`} />
        {/* main tube */}
        <path d="M 50 48 C 50 56, 38 60, 36 70 C 34 80, 44 86, 50 86" fill="none" stroke={`url(#${id}-tube)`} strokeWidth="3.6" strokeLinecap="round" />
        {/* chestpiece — bell + diaphragm */}
        <circle cx="62" cy="78" r="11" fill={`url(#${id}-bell)`} />
        <circle cx="62" cy="78" r="8" fill={`url(#${id}-diaph)`} />
        <circle cx="62" cy="78" r="8" fill="none" stroke="oklch(0.45 0.08 200)" strokeWidth="0.6" opacity="0.5" />
        <circle cx="59" cy="75" r="2" fill="white" opacity="0.55" />
        {/* connector */}
        <rect x="56" y="69" width="4" height="6" rx="1" fill={`url(#${id}-tube)`} />
      </g>
      <rect width="100" height="100" rx="22" fill={`url(#${id}-gloss)`} />
      <rect width="100" height="100" rx="22" fill={`url(#${id}-vig)`} />
      <rect x="0.5" y="0.5" width="99" height="99" rx="21.5" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="0.8" />
    </svg>);

}

// Bracket — bracketed S in serif, with embossed paper texture
function IconBracket({ size = 96, fg = 'white', bg, font }) {
  const id = `brk-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', borderRadius: size * 0.22, boxShadow: '0 18px 40px -18px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.25) inset' }}>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.58 0.13 200)" />
          <stop offset="1" stopColor="oklch(0.34 0.08 200)" />
        </linearGradient>
        <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-vig`} cx="0.5" cy="0.4" r="0.75">
          <stop offset="0.5" stopColor="black" stopOpacity="0" />
          <stop offset="1" stopColor="black" stopOpacity="0.30" />
        </radialGradient>
        <filter id={`${id}-drop`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0.6" stdDeviation="0.6" floodColor="black" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect width="100" height="100" rx="22" fill={`url(#${id}-bg)`} />
      {/* faint chart rules */}
      <g opacity="0.10" stroke="white" strokeWidth="0.5">
        <line x1="14" y1="32" x2="86" y2="32" />
        <line x1="14" y1="50" x2="86" y2="50" />
        <line x1="14" y1="68" x2="86" y2="68" />
      </g>
      <g filter={`url(#${id}-drop)`}>
        {/* brackets */}
        <path d="M 26 28 L 18 28 L 18 72 L 26 72" fill="none" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 74 28 L 82 28 L 82 72 L 74 72" fill="none" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        {/* the S — serif */}
        <text x="50" y="68" textAnchor="middle"
        fontFamily={font || "'Fraunces', serif"} fontWeight="600" fontStyle="italic"
        fontSize="48" fill="white" letterSpacing="-1">S</text>
      </g>
      <rect width="100" height="100" rx="22" fill={`url(#${id}-gloss)`} />
      <rect width="100" height="100" rx="22" fill={`url(#${id}-vig)`} />
      <rect x="0.5" y="0.5" width="99" height="99" rx="21.5" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="0.8" />
    </svg>);

}

// Dispatcher
function IconGlyph({ kind, size = 96, fg = 'white', bg = 'var(--teal-700)', font }) {
  if (kind === 'pulse') return <IconPulse size={size} fg={fg} bg={bg} />;
  if (kind === 'cross') return <IconCross size={size} fg={fg} bg={bg} />;
  if (kind === 'caduceus') return <IconCaduceus size={size} fg={fg} bg={bg} />;
  if (kind === 'steth') return <IconSteth size={size} fg={fg} bg={bg} />;
  if (kind === 'bracket') return <IconBracket size={size} fg={fg} bg={bg} font={font} />;
  return null;
}

Object.assign(window, {
  WordmarkBase, PulseDash, CrossDash, CaduceusGlyph, StethGlyph, BracketHalf,
  MarkPulse, MarkCross, MarkCaduceus, MarkSteth, MarkBracket,
  IconGlyph, IconPulse, IconCross, IconCaduceus, IconSteth, IconBracket
});