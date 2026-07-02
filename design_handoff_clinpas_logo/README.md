# Handoff: ClinPA-S Logo & Brand Identity

## Overview

ClinPA-S is a mobile + desktop tool for students in their clinical year of the MPAS (Master of Physician Assistant Studies) program. The name plays on **MPAS** and incorporates the clinical setting — the hyphen is treated as a meaningful design element (an ECG pulse trace).

This handoff package contains the **final logo system**: a wordmark with a stylized ECG-pulse hyphen, paired with a caduceus monogram watermark sitting behind the wordmark. The package includes light/dark horizontal lockups, a stacked variant, an app icon, and a splash mockup.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing the intended look and behavior of the brand mark, not production code to copy directly. Your task is to **recreate these designs in the clinical year resource project's existing environment** (React Native, SwiftUI, web, etc.) using its established patterns and component libraries — or, if no environment exists yet, choose the most appropriate framework for the project and implement the designs there.

The HTML mocks use React + Babel inline JSX with a custom design canvas. They are not meant to be embedded directly. Instead, port the SVG geometry and the typographic rules into the target stack.

## Fidelity

**High-fidelity (hifi).** Final colors, typography, spacing, and SVG geometry are pixel-locked. Recreate the wordmark + monogram pixel-perfectly using the codebase's existing libraries; the SVGs in `logo-marks.jsx` are the source of truth for the geometry of the pulse trace, caduceus, and app-icon chrome.

---

## The Logo System

### Primary lockup
The primary mark is **"ClinPA[pulse]S"** — the literal text `ClinPA` and `S` set in **Lora @ 500**, with an **ECG pulse-trace hyphen** sitting between `ClinPA` and `S`. A faint **caduceus monogram** sits behind the wordmark as a watermark at ~13% opacity, ~1.9× the size of the wordmark.

### Variants
1. **Horizontal · light** — black-ish ink (`oklch(0.22 0.01 230)`) on warm paper (`#f0eee9` / `oklch(0.985 0.005 220)`), accent in primary teal.
2. **Stacked · light** — same composition, vertical centering.
3. **Horizontal · dark** — paper-color ink on the deep teal ground; accent shifts to teal-400 (`oklch(0.72 0.10 200)`).
4. **App icon** — caduceus glyph centered on a teal gradient tile, full chrome (gloss + vignette + drop shadow + 1px inner stroke). 1024×1024 export size.
5. **Splash** — phone splash screen with stacked lockup centered on warm paper background.

---

## Wordmark Construction

### Typography
- **Font family:** Lora (Google Fonts), serif. Variable weights 400–700.
- **Default weight:** 500
- **Italic:** off (toggleable but default upright)
- **Letter-spacing:** `-0.02em` (tight)
- **Color (light):** `oklch(0.22 0.01 230)` (`--ink`)
- **Color (dark):** `oklch(0.985 0.005 220)` (`--paper`)
- **Optical sizing:** if the chosen font supports it, prefer display optical size at logo scale.

The wordmark is a single inline-flex line:
```
[ClinPA] [pulse-svg] [S]
```
- The pulse SVG sits inline at baseline, vertically nudged up by `~6%` of the type size.
- Margin around the pulse: `~4%` of the type size, left/right.

### Pulse hyphen geometry (the most important asset)

This is the brand's signature element. Construct it as an SVG. Inline geometry (viewBox `0 0 50 40`):

```svg
<svg viewBox="0 0 50 40" preserveAspectRatio="none">
  <!-- left terminal dot -->
  <circle cx="3" cy="20" r="<sw*0.7>" fill="<accent>"/>
  <!-- ECG trace (PR–QRS–T abstraction) -->
  <path d="M 6 20 L 13 20 L 17 16 L 21 28 L 26 6 L 31 32 L 35 20 L 44 20"
    fill="none" stroke="<accent>" stroke-width="<sw>"
    stroke-linecap="round" stroke-linejoin="round"/>
  <!-- right terminal dot -->
  <circle cx="47" cy="20" r="<sw*0.7>" fill="<accent>"/>
</svg>
```

Where:
- `sw` (stroke width) = `fontSize * 0.085` — i.e., the trace is roughly 8.5% of the type cap height. Floor at `2.4`px.
- Render width = `fontSize * 0.42`. Render height = `fontSize * 0.44`. Slightly taller than wide.
- `preserveAspectRatio="none"` is intentional — it lets the dimensions stretch to the wordmark sizing rules above.

### Caduceus monogram (watermark behind the wordmark)

Built as line art. Inline geometry (viewBox `0 0 48 64`):

```svg
<svg viewBox="0 0 48 64">
  <g stroke="<accent>" stroke-width="<weight>" stroke-linecap="round" fill="none">
    <!-- staff -->
    <line x1="24" y1="6"  x2="24" y2="58"/>
    <!-- crossbar -->
    <line x1="17" y1="11" x2="31" y2="11"/>
    <!-- two serpents (twin sine waves) -->
    <path d="M 24 18 C 10 24, 38 30, 24 36 C 10 42, 38 48, 24 54"/>
    <path d="M 24 18 C 38 24, 10 30, 24 36 C 38 42, 10 48, 24 54" opacity="0.35"/>
    <!-- wing strokes -->
    <path d="M 16 14 C 10 13, 6 15, 4 18"/>
    <path d="M 32 14 C 38 13, 42 15, 44 18"/>
  </g>
</svg>
```

Stroke weight: `2.4` for the watermark behind the wordmark.

### Lockup composition

Wrap the wordmark in a `position: relative` container; absolutely position the caduceus centered behind it:

```css
/* container */
position: relative;
display: inline-flex;
align-items: center;
justify-content: center;
padding: 25% 40% (of base size);

/* monogram */
position: absolute;
left: 50%; top: 50%;
transform: translate(-50%, -50%);
opacity: 0.13;
pointer-events: none;
z-index: 0;
/* monogram size = base size × 1.9 */

/* wordmark */
position: relative;
z-index: 1;
```

For the **stacked** variant, change `padding` to `30% 50%` and the same composition holds (the watermark caduceus is still centered).

---

## App Icon

A 100×100 SVG, rounded corners 22 (`borderRadius: size * 0.22` in CSS). Layers, bottom to top:

1. **Base** — vertical linear gradient: `oklch(0.58 0.13 200)` → `oklch(0.34 0.08 200)`.
2. **Texture** — faint laurel arc behind the caduceus: `<path d="M 18 50 A 32 32 0 0 1 82 50" stroke="white" stroke-width="0.6" opacity="0.10"/>`
3. **Caduceus** — same geometry as the monogram above, scaled into the icon canvas, in white with a subtle gradient (`white` → `oklch(0.88 0.03 200)`), with a drop-shadow filter (`feDropShadow dx=0 dy=0.6 stdDeviation=0.8 floodOpacity=0.4`).
4. **Gloss** — top-down white gradient: 0.22 alpha at top → 0.02 at 55% → 0 at bottom.
5. **Vignette** — radial gradient centered at `(0.5, 0.4)` r=0.75: transparent at center → black 0.30 alpha at edge.
6. **Inner stroke** — 1px white at 0.18 alpha, inset by 0.5px on all sides, same border radius.

Plus a CSS box-shadow on the icon container: `0 18px 40px -18px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.25) inset`.

---

## Design Tokens

### Colors (oklch — convert to hex/sRGB for the target platform)

| Token        | OKLCH                       | Use                           |
|--------------|-----------------------------|-------------------------------|
| `teal-900`   | `oklch(0.28 0.05 200)`      | Deepest backgrounds           |
| `teal-800`   | `oklch(0.36 0.07 200)`      | Icon gradient bottom          |
| `teal-700`   | `oklch(0.46 0.10 200)`      | **Primary accent (light bg)** |
| `teal-600`   | `oklch(0.56 0.12 200)`      | Icon gradient top             |
| `teal-500`   | `oklch(0.66 0.13 200)`      | Hover states                  |
| `teal-400`   | `oklch(0.72 0.10 200)`      | **Accent on dark bg**         |
| `teal-200`   | `oklch(0.90 0.04 200)`      | Tinted surfaces               |
| `teal-100`   | `oklch(0.96 0.02 200)`      | Faint tints                   |
| `ink`        | `oklch(0.22 0.01 230)`      | Wordmark on light             |
| `ink-soft`   | `oklch(0.42 0.01 230)`      | Secondary text                |
| `paper`      | `oklch(0.985 0.005 220)`    | Background, wordmark on dark  |
| `paper-2`    | `oklch(0.96 0.008 220)`     | Tinted paper background       |

### Typography
- **Display / wordmark:** Lora, weight 500, letter-spacing -0.02em
- **UI fallback (if needed):** Plus Jakarta Sans
- **Mono (numerics, labels):** JetBrains Mono

### Sizing rules for the wordmark
| Slot                        | Size            |
|-----------------------------|-----------------|
| Pulse SVG width             | `fontSize × 0.42` |
| Pulse SVG height            | `fontSize × 0.44` |
| Pulse stroke width          | `fontSize × 0.085` (min 2.4) |
| Pulse Y offset              | `-fontSize × 0.06` |
| Pulse left/right margin     | `fontSize × 0.04` |
| Caduceus watermark size     | `fontSize × 1.9`  |
| Caduceus watermark opacity  | `0.13`            |
| Wordmark letter-spacing     | `-0.02em`         |

### Border radius / shadow
- App icon corner radius: 22% of icon size
- App icon shadow: `0 18px 40px -18px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.25) inset`

---

## Files in This Package

| File | What's in it |
|------|----|
| `ClinPA-S Logo Explorations.html` | Entry HTML — loads React/Babel and the JSX modules below. Open this in a browser to see the live design. |
| `app.jsx` | App composition: tweak defaults, font options, the `FinalLockup` and `FinalRow` components, the design canvas wiring, and the Tweaks panel. **The `FinalLockup` function (~line 360) is the canonical lockup recipe.** |
| `logo-marks.jsx` | All the SVG primitives. Look at: `WordmarkBase`, `PulseDash`, `CaduceusGlyph`, `MarkPulse`, `IconCaduceus`, `IconGlyph`. These contain the exact geometry to port. |
| `design-canvas.jsx` | The pan/zoom canvas wrapper used to lay out artboards. **Not needed for production** — it's just the presentation shell. |
| `tweaks-panel.jsx` | The in-page tweak controls. **Not needed for production** — it's just for live exploration in the HTML mock. |

The two files you actually need to port from are **`app.jsx`** (composition) and **`logo-marks.jsx`** (SVG geometry). Everything else is presentation scaffolding.

---

## Implementation Checklist

1. Load **Lora** in your app (Google Fonts: `https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap`).
2. Build a `Wordmark` component that renders `ClinPA` + `<PulseSVG/>` + `S` in a flex row, with the sizing rules above.
3. Build a `Caduceus` SVG component with the geometry above.
4. Build a `Lockup` component that composes the wordmark with the absolutely-positioned watermark caduceus behind it.
5. Build an `AppIcon` SVG with the 6 layers described in the App Icon section above.
6. Export the lockup at: 1× horizontal, 1× stacked, dark/light each. Export the app icon at the platform sizes you need (1024 master).
7. Use the **teal-700** as the brand accent on light surfaces, **teal-400** as the brand accent on dark surfaces.

---

## Out of Scope (Not Provided in This Handoff)

- Color, animation, and motion specs for the broader app UI — this handoff covers the **logo & brand mark only**.
- Iconography for in-app features.
- Marketing site / store-listing imagery.

If you need any of the above, ask and we'll spin up another handoff.
