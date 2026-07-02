// app.jsx — ClinPA-S logo exploration canvas with tweakable type system

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "fontFamily": "Lora",
  "fontWeight": 500,
  "italic": false,
  "tracking": -25,
  "accentHue": 200,
  "accentChroma": 10,
  "accentLightness": 46,
  "iconBg": "primary",
  "showCaduceus2": false
} /*EDITMODE-END*/;

const FONT_OPTIONS = {
  'Lora': { stack: "'Lora', serif", weights: [400, 500, 600, 700], serif: true, desc: "Calligraphic serif · graceful + clinical" },
  'Fraunces': { stack: "'Fraunces', serif", weights: [400, 500, 600, 700, 800], serif: true, desc: "Editorial serif · soft optical sizes" },
  'Newsreader': { stack: "'Newsreader', serif", weights: [400, 500, 600, 700], serif: true, desc: "Refined editorial serif · graceful" },
  'Spectral': { stack: "'Spectral', serif", weights: [400, 500, 600, 700], serif: true, desc: "Sophisticated text serif · long-form" },
  'EB Garamond': { stack: "'EB Garamond', serif", weights: [400, 500, 600, 700], serif: true, desc: "Classical Garamond · timeless" },
  'Cormorant Garamond': { stack: "'Cormorant Garamond', serif", weights: [400, 500, 600, 700], serif: true, desc: "High-contrast display serif · refined" },
  'Libre Caslon': { stack: "'Libre Caslon Text', serif", weights: [400, 700], serif: true, desc: "Caslon revival · academic" },
  'DM Serif Display': { stack: "'DM Serif Display', serif", weights: [400], serif: true, desc: "High-contrast display serif · bold" },
  'Plus Jakarta Sans': { stack: "'Plus Jakarta Sans', sans-serif", weights: [400, 500, 600, 700, 800], serif: false, desc: "Geometric sans · modern alternative" },
  'Manrope': { stack: "'Manrope', sans-serif", weights: [400, 500, 600, 700, 800], serif: false, desc: "Friendly grotesque" }
};

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────
function ABMeta({ num, tag, name }) {
  return (
    <div className="ab-meta">
      <div><span className="num">{num}</span> &nbsp; {name}</div>
      <div className="tag">{tag}</div>
    </div>);

}
function ABCap({ left, right }) {
  return (
    <div className="ab-cap">
      <span>{left}</span>
      <span>{right}</span>
    </div>);

}

function buildAccent(t, lOverride) {
  const l = (lOverride ?? t.accentLightness) / 100;
  const c = t.accentChroma / 100;
  return `oklch(${l} ${c} ${t.accentHue})`;
}

// ─────────────────────────────────────────────────────────────
// Phone splash mockup
// ─────────────────────────────────────────────────────────────
function PhoneSplash({ children }) {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="notch" />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--paper)' }}>
          {children}
          <div style={{
            position: 'absolute', bottom: 30, left: 0, right: 0, textAlign: 'center',
            fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'oklch(0.78 0.04 220)'
          }}>
            clinical companion · pa-s
          </div>
          <div style={{
            position: 'absolute', top: 14, left: 14, right: 14,
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--mono)', fontSize: 9, color: 'oklch(0.85 0.03 220)'
          }}>
            <span>9:41</span>
            <span>● ● ● ● ●</span>
          </div>
        </div>
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// Phone homescreen
// ─────────────────────────────────────────────────────────────
function PhoneHome({ icon }) {
  return (
    <div className="phone">
      <div className="phone-screen" style={{
        background: 'linear-gradient(180deg, oklch(0.32 0.05 230) 0%, oklch(0.18 0.04 240) 100%)'
      }}>
        <div className="notch" />
        <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--mono)', fontSize: 9, color: 'oklch(0.92 0.02 220)' }}>
          <span>9:41</span>
          <span>● ● ● ● ●</span>
        </div>
        <div style={{ position: 'absolute', top: 60, left: 14, right: 14, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, rowGap: 22 }}>
          {Array.from({ length: 8 }).map((_, i) => {
            if (i === 4) {
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 36, height: 36, position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, transform: 'scale(0.281)', transformOrigin: 'top left' }}>{icon}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 8, color: 'white', fontWeight: 500 }}>ClinPA-S</div>
                </div>);

            }
            const hues = [40, 140, 280, 200, 0, 320, 90, 170];
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: `oklch(0.72 0.10 ${hues[i]})`, opacity: 0.6 }} />
                <div style={{ fontFamily: 'var(--sans)', fontSize: 8, color: 'oklch(0.95 0.02 220)', opacity: 0.7 }}>App</div>
              </div>);

          })}
        </div>
        <div style={{ position: 'absolute', bottom: 16, left: 14, right: 14, height: 54, borderRadius: 16,
          background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 14px'
        }}>
          {[0, 1, 2, 3].map((i) =>
          <div key={i} style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.2)' }} />
          )}
        </div>
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// Favicon strip
// ─────────────────────────────────────────────────────────────
function FaviconStrip({ kind, font }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
      <div className="label-mono">64 · 32 · 16</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18 }}>
        {[64, 32, 16].map((s) =>
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <window.IconGlyph kind={kind} size={s} fg="white" bg="var(--teal-700)" font={font} />
            <span className="label-mono" style={{ fontSize: 9 }}>{s}</span>
          </div>
        )}
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// Per-direction artboards
// ─────────────────────────────────────────────────────────────
function DirectionRow({ dir, t, accent, accent400, font }) {
  const { id, num, name, blurb, Wordmark, iconKind } = dir;
  const wmProps = { font, weight: t.fontWeight, italic: t.italic };

  const iconPrimary =
  <window.IconGlyph kind={iconKind} size={128} fg="white" bg={accent} font={font} />;


  return (
    <DCSection id={`dir-${id}`} title={`${num} · ${name}`} subtitle={blurb}>
      <DCArtboard id={`${id}-primary`} label="Primary lockup · light" width={620} height={360}>
        <div className="ab">
          <ABMeta num={num} name={name} tag="primary" />
          <div className="stage">
            <Wordmark size={72} accent={accent} {...wmProps} />
          </div>
          <ABCap left="01 / Wordmark · light" right="—" />
        </div>
      </DCArtboard>

      <DCArtboard id={`${id}-dark`} label="Wordmark · dark" width={620} height={360}>
        <div className="ab dark">
          <ABMeta num={num} name={name} tag="dark" />
          <div className="stage">
            <Wordmark size={72} tone="dark" accent={accent400} {...wmProps} />
          </div>
          <ABCap left="02 / Wordmark · dark" right="—" />
        </div>
      </DCArtboard>

      <DCArtboard id={`${id}-icon`} label="App icon · 1024" width={300} height={360}>
        <div className="ab paper2">
          <ABMeta num={num} name={name} tag="icon" />
          <div className="stage">
            <div style={{ width: 128, height: 128 }}>
              <window.IconGlyph kind={iconKind} size={128} fg="white" bg={accent} font={font} />
            </div>
          </div>
          <ABCap left="03 / App icon" right="1024 × 1024" />
        </div>
      </DCArtboard>

      <DCArtboard id={`${id}-home`} label="iOS · home screen" width={300} height={560}>
        <div className="ab" style={{ background: 'var(--paper-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ABMeta num={num} name={name} tag="ios" />
          <div style={{ transform: 'scale(0.92)', transformOrigin: 'center' }}>
            <PhoneHome icon={iconPrimary} />
          </div>
          <ABCap left="04 / Home screen" right="iOS" />
        </div>
      </DCArtboard>

      <DCArtboard id={`${id}-splash`} label="Splash · launch" width={300} height={560}>
        <div className="ab" style={{ background: 'var(--paper-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ABMeta num={num} name={name} tag="splash" />
          <div style={{ transform: 'scale(0.92)', transformOrigin: 'center' }}>
            <PhoneSplash>
              <Wordmark size={28} tone="dark" accent={accent400} {...wmProps} />
            </PhoneSplash>
          </div>
          <ABCap left="05 / Splash" right="iOS" />
        </div>
      </DCArtboard>

      <DCArtboard id={`${id}-web`} label="Web app · header" width={620} height={360}>
        <div className="ab paper2" style={{ padding: 22, boxSizing: 'border-box' }}>
          <ABMeta num={num} name={name} tag="web" />
          <div className="browser" style={{ marginTop: 30, height: 'calc(100% - 50px)' }}>
            <div className="browser-bar">
              <div className="dot" style={{ background: '#ff5f57' }} />
              <div className="dot" style={{ background: '#febc2e' }} />
              <div className="dot" style={{ background: '#28c840' }} />
              <div className="url">
                <span style={{ color: accent }}>●</span>
                clinpa-s.app /dashboard
              </div>
            </div>
            <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Wordmark size={22} accent={accent} {...wmProps} />
                <div style={{ display: 'flex', gap: 14, alignItems: 'center', fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--ink-soft)' }}>
                  <span>Patients</span><span>Charting</span><span>Guidelines</span>
                  <span style={{ width: 22, height: 22, borderRadius: 999, background: accent, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 10 }}>JD</span>
                </div>
              </div>
              <div style={{ height: 1, background: 'oklch(0.92 0.005 220)', margin: '2px 0' }} />
              <div className="label-mono">Today · rotation 4 of 6</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 10, flex: 1 }}>
                <div style={{ background: 'var(--paper)', borderRadius: 8, padding: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div className="label-mono" style={{ color: accent }}>SOAP · Mr. R, 64M</div>
                  <div style={{ height: 6, background: 'var(--paper-2)', borderRadius: 3, width: '90%' }} />
                  <div style={{ height: 6, background: 'var(--paper-2)', borderRadius: 3, width: '70%' }} />
                  <div style={{ height: 6, background: 'var(--paper-2)', borderRadius: 3, width: '85%' }} />
                  <div style={{ height: 6, background: 'var(--paper-2)', borderRadius: 3, width: '60%' }} />
                </div>
                <div style={{ background: 'var(--paper)', borderRadius: 8, padding: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div className="label-mono">Quick refs</div>
                  <div style={{ height: 6, background: 'var(--paper-2)', borderRadius: 3, width: '80%' }} />
                  <div style={{ height: 6, background: 'var(--paper-2)', borderRadius: 3, width: '65%' }} />
                  <div style={{ height: 6, background: 'var(--paper-2)', borderRadius: 3, width: '90%' }} />
                </div>
              </div>
            </div>
          </div>
          <ABCap left="06 / Web app · header" right="desktop" />
        </div>
      </DCArtboard>

      <DCArtboard id={`${id}-favicon`} label="Favicon · scale test" width={300} height={360}>
        <div className="ab paper2" style={{ padding: 22, boxSizing: 'border-box' }}>
          <ABMeta num={num} name={name} tag="favicon" />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaviconStrip kind={iconKind} font={font} />
          </div>
          <ABCap left="07 / Favicon" right="px" />
        </div>
      </DCArtboard>
    </DCSection>);

}

// ─────────────────────────────────────────────────────────────
// Overview
// ─────────────────────────────────────────────────────────────
function OverviewRow({ DIRECTIONS, t, accent, accent400, font }) {
  const wmProps = { font, weight: t.fontWeight, italic: t.italic };
  return (
    <DCSection id="overview" title="System overview" subtitle="Refined type + tweakable system. Pick a lane and we'll push it further.">
      <DCArtboard id="all-marks" label="All directions · wordmarks" width={1280} height={520}>
        <div className="ab" style={{ padding: '40px 48px', boxSizing: 'border-box' }}>
          <ABMeta num="00" name="ClinPA-S" tag="systems" />
          <div style={{ position: 'absolute', top: 60, left: 48, right: 48, bottom: 70,
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: 10, alignItems: 'center', fontFamily: "\"Times New Roman\"" }}>
            {DIRECTIONS.map((d) =>
            <div key={d.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 28, paddingLeft: 8 }}>
                <span className="label-mono" style={{ color: accent, minWidth: 28 }}>{d.num}</span>
                <d.Wordmark size={42} accent={accent} {...wmProps} />
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 28, paddingLeft: 8 }}>
              <span className="label-mono" style={{ minWidth: 28 }}>—</span>
              <span className="label-mono">5 directions · open Tweaks (top right) to shift type & color</span>
            </div>
          </div>
          <ABCap left="00 / Overview" right="ClinPA-S · v2" />
        </div>
      </DCArtboard>

      <DCArtboard id="all-icons" label="All directions · app icons" width={1280} height={300}>
        <div className="ab paper2" style={{ padding: '36px 48px', boxSizing: 'border-box' }}>
          <ABMeta num="00" name="App icons" tag="systems" />
          <div style={{ position: 'absolute', top: 50, left: 48, right: 48, bottom: 50,
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', alignItems: 'center', justifyItems: 'center' }}>
            {DIRECTIONS.map((d) =>
            <div key={d.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <window.IconGlyph kind={d.iconKind} size={96} fg="white" bg={accent} font={font} />
                <div className="label-mono">{d.num} · {d.name}</div>
              </div>
            )}
          </div>
          <ABCap left="00 / Icon overview" right="1024 → 96" />
        </div>
      </DCArtboard>
    </DCSection>);

}

// ─────────────────────────────────────────────────────────────
// Tweaks panel
// ─────────────────────────────────────────────────────────────
function TweaksUI({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Typography" />
      <TweakSelect label="Family" value={t.fontFamily}
      options={Object.keys(FONT_OPTIONS)}
      onChange={(v) => setTweak('fontFamily', v)} />
      <TweakSlider label="Weight" value={t.fontWeight} min={400} max={800} step={100}
      onChange={(v) => setTweak('fontWeight', v)} />
      <TweakToggle label="Italic" value={t.italic}
      onChange={(v) => setTweak('italic', v)} />

      <TweakSection label="Accent color · oklch" />
      <TweakSlider label="Hue" value={t.accentHue} min={140} max={260} step={1}
      onChange={(v) => setTweak('accentHue', v)} />
      <TweakSlider label="Chroma" value={t.accentChroma} min={2} max={20} step={1}
      onChange={(v) => setTweak('accentChroma', v)} />
      <TweakSlider label="Lightness" value={t.accentLightness} min={30} max={70} step={1}
      onChange={(v) => setTweak('accentLightness', v)} />
    </TweaksPanel>);

}

// ─────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────
// FINAL LOCKUP — Pulse hyphen wordmark + Caduceus monogram
// ─────────────────────────────────────────────────────────────
function FinalLockup({ size = 96, accent, font, weight, italic, tone = 'light', stacked = false }) {
  const wordmark = <window.MarkPulse size={size} tone={tone} accent={accent} font={font} weight={weight} italic={italic} />;
  const monoSize = size * 1.9;
  const monogram =
  <div style={{
    position: 'absolute',
    left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.13,
    pointerEvents: 'none',
    zIndex: 0
  }}>
      <window.CaduceusGlyph size={monoSize} accent={accent} weight={2.4} />
    </div>;

  if (stacked) {
    return (
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: `${size * 0.3}px ${size * 0.5}px`, fontWeight: "100", fontFamily: "Lora" }}>
        {monogram}
        <div style={{ position: 'relative', zIndex: 1 }}>{wordmark}</div>
      </div>);

  }
  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: `${size * 0.25}px ${size * 0.4}px`, fontFamily: "Lora", fontWeight: "100" }}>
      {monogram}
      <div style={{ position: 'relative', zIndex: 1 }}>{wordmark}</div>
    </div>);

}

function FinalRow({ t, accent, accent400, font }) {
  const wmProps = { font, weight: t.fontWeight, italic: t.italic };
  return (
    <DCSection id="final" title="★ Final · Pulse + Caduceus" subtitle="Caduceus monogram paired with the shortened pulse-hyphen wordmark.">
      <DCArtboard id="final-horiz" label="Horizontal lockup · light" width={820} height={360}>
        <div className="ab">
          <ABMeta num="★" name="Final lockup" tag="primary" />
          <div className="stage" style={{ fontFamily: "Lora" }}><FinalLockup size={72} accent={accent} {...wmProps} /></div>
          <ABCap left="Horizontal · light" right="primary" />
        </div>
      </DCArtboard>
      <DCArtboard id="final-stack" label="Stacked · light" width={460} height={420}>
        <div className="ab">
          <ABMeta num="★" name="Stacked" tag="lockup" />
          <div className="stage" style={{ fontFamily: "Lora" }}><FinalLockup size={56} accent={accent} {...wmProps} stacked /></div>
          <ABCap left="Stacked · light" right="—" />
        </div>
      </DCArtboard>
      <DCArtboard id="final-dark" label="Horizontal · dark" width={820} height={360}>
        <div className="ab dark">
          <ABMeta num="★" name="Dark" tag="dark" />
          <div className="stage" style={{ fontFamily: "Lora", fontWeight: "100" }}><FinalLockup size={72} accent={accent400} tone="dark" {...wmProps} /></div>
          <ABCap left="Horizontal · dark" right="—" />
        </div>
      </DCArtboard>
      <DCArtboard id="final-icon" label="App icon · caduceus" width={300} height={360}>
        <div className="ab paper2">
          <ABMeta num="★" name="App icon" tag="icon" />
          <div className="stage"><window.IconGlyph kind="caduceus" size={128} fg="white" bg={accent} font={font} /></div>
          <ABCap left="App icon" right="1024 × 1024" />
        </div>
      </DCArtboard>
      <DCArtboard id="final-splash" label="Splash" width={300} height={560}>
        <div className="ab" style={{ background: 'var(--paper-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ABMeta num="★" name="Splash" tag="ios" />
          <div style={{ transform: 'scale(0.92)', transformOrigin: 'center' }}>
            <PhoneSplash><FinalLockup size={26} tone="dark" accent={accent400} {...wmProps} stacked /></PhoneSplash>
          </div>
          <ABCap left="Splash" right="iOS" />
        </div>
      </DCArtboard>
    </DCSection>);

}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const font = FONT_OPTIONS[t.fontFamily]?.stack || "'Lora', serif";
  const accent = buildAccent(t);
  const accent400 = buildAccent(t, Math.min(80, t.accentLightness + 26));

  // Push CSS variables so the rest of the design (chrome, etc.) shifts too
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--teal-700', accent);
    r.style.setProperty('--teal-400', accent400);
  }, [accent, accent400]);

  const DIRECTIONS = [
  { id: 'pulse', num: '01', name: 'Pulse Hyphen', blurb: 'Composed ECG trace as the dash — clinical without being literal.', Wordmark: window.MarkPulse, iconKind: 'pulse' },
  { id: 'cross', num: '02', name: 'Cross Hyphen', blurb: 'Crafted medical cross with subtle joinery — the most legible cue.', Wordmark: window.MarkCross, iconKind: 'cross' },
  { id: 'caduceus', num: '03', name: 'Caduceus Monogram', blurb: 'Bespoke staff with twin serpentine S-curves — badge-forward.', Wordmark: window.MarkCaduceus, iconKind: 'caduceus' },
  { id: 'steth', num: '04', name: 'Stethoscope C+S', blurb: 'The stethoscope cradles the S — daily-tool feeling.', Wordmark: window.MarkSteth, iconKind: 'steth' },
  { id: 'bracket', num: '05', name: 'Bracket Hyphen', blurb: 'Clinical chart brackets frame the S — quiet nod to charting.', Wordmark: window.MarkBracket, iconKind: 'bracket' }];


  return (
    <React.Fragment>
      <DesignCanvas>
        <FinalRow t={t} accent={accent} accent400={accent400} font={font} />
      </DesignCanvas>
      <TweaksUI t={t} setTweak={setTweak} />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);