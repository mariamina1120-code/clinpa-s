// ER "Shift" cards — one screen per chief complaint, written for a student
// standing in the hallway. Study and reference aid only: no doses, no orders.
// Every rule and threshold carries a named source with its year.
// Sources verified Oct 21, 2026.

export interface ShiftSource {
  label: string;
  year: number;
}

export interface ShiftRule {
  name: string;
  useWhen: string;
  items: string[];
  result: string;
  source: ShiftSource;
}

export interface ShiftCard {
  slug: string;
  title: string;
  tagline: string;
  icon:
    | "heart"
    | "wind"
    | "stomach"
    | "brain"
    | "confusion"
    | "syncope"
    | "stroke"
    | "fever"
    | "trauma"
    | "back"
    | "pregnancy"
    | "pill";
  dontMiss: { dx: string; clue: string }[];
  askLookLabel?: string;
  askLook: string[];
  workup: string[];
  rule?: ShiftRule;
  firstMoves: string[];
  pimp: { q: string; a: string }[];
  sources: ShiftSource[];
}

const S = {
  chestPain2021: { label: "AHA/ACC Chest Pain Guideline", year: 2021 },
  acs2025: { label: "ACC/AHA Acute Coronary Syndromes Guideline", year: 2025 },
  heart: { label: "HEART score — Six et al.", year: 2008 },
  perc: { label: "PERC rule — Kline et al.", year: 2004 },
  acepVte: { label: "ACEP Clinical Policy: Acute Venous Thromboembolic Disease", year: 2018 },
  alvarado: { label: "Alvarado score — Alvarado", year: 1986 },
  acrRlq: { label: "ACR Appropriateness Criteria: Right Lower Quadrant Pain", year: 2022 },
  ottawaSah: { label: "Ottawa SAH Rule — Perry et al., JAMA", year: 2013 },
  acepHeadache: { label: "ACEP Clinical Policy: Acute Headache", year: 2019 },
  cam: { label: "Confusion Assessment Method — Inouye et al.", year: 1990 },
  syncope2017: { label: "ACC/AHA/HRS Syncope Guideline", year: 2017 },
  stroke2026: { label: "AHA/ASA Guideline for Early Management of Acute Ischemic Stroke", year: 2026 },
  ssc2026: { label: "Surviving Sepsis Campaign Adult Guidelines", year: 2026 },
  sepsis3: { label: "Sepsis-3 definitions — Singer et al., JAMA", year: 2016 },
  atls11: { label: "ATLS, 11th edition (American College of Surgeons)", year: 2025 },
  cchr: { label: "Canadian CT Head Rule — Stiell et al.", year: 2001 },
  nexus: { label: "NEXUS criteria — Hoffman et al.", year: 2000 },
  acepTbi: { label: "ACEP Clinical Policy: Mild Traumatic Brain Injury", year: 2023 },
  acrLbp: { label: "ACR Appropriateness Criteria: Low Back Pain", year: 2021 },
  acpLbp: { label: "ACP Guideline: Acute, Subacute, and Chronic Low Back Pain", year: 2017 },
  acepEarlyPreg: { label: "ACEP Clinical Policy: Early Pregnancy", year: 2017 },
  acogRh: { label: "ACOG Clinical Practice Update: Rh D Immune Globulin <12 Weeks", year: 2024 },
  apap2023: { label: "Acetaminophen poisoning consensus — Dart et al., JAMA Netw Open", year: 2023 },
} satisfies Record<string, ShiftSource>;

export const emergencyShiftCards: ShiftCard[] = [
  // ── Chest pain ─────────────────────────────────────────────────────────────
  {
    slug: "chest-pain",
    title: "Chest pain",
    tagline: "Rule out the killers first. ECG within 10 minutes.",
    icon: "heart",
    dontMiss: [
      { dx: "ACS / STEMI", clue: "Pressure, exertional, diaphoresis" },
      { dx: "Aortic dissection", clue: "Tearing pain to back, pulse or BP difference" },
      { dx: "Pulmonary embolism", clue: "Pleuritic pain, tachycardia, hypoxia" },
      { dx: "Tension pneumothorax", clue: "Absent breath sounds, hypotension" },
      { dx: "Cardiac tamponade", clue: "Hypotension, JVD, muffled heart sounds" },
      { dx: "Esophageal rupture", clue: "After forceful vomiting, neck crepitus" },
    ],
    askLook: [
      "Onset, quality, radiation, exertion",
      "Risk factors: HTN, DM, smoking, lipids, family history",
      "Cocaine or stimulant use",
      "BP in both arms, pulses",
      "Leg swelling, recent surgery or travel",
    ],
    workup: [
      "ECG within 10 min",
      "High-sensitivity troponin (repeat)",
      "Chest X-ray",
      "CBC, BMP",
      "D-dimer if PE risk is low",
      "Bedside echo (POCUS)",
    ],
    rule: {
      name: "HEART score",
      useWhen: "Undifferentiated chest pain, suspected ACS, no STEMI",
      items: [
        "History: slightly / moderately / highly suspicious (0–2)",
        "ECG: normal / nonspecific / ST deviation (0–2)",
        "Age: <45 / 45–64 / ≥65 (0–2)",
        "Risk factors: none / 1–2 / ≥3 or known atherosclerosis (0–2)",
        "Troponin: normal / 1–3× / >3× upper limit (0–2)",
      ],
      result: "0–3 low risk · 4–6 moderate · 7–10 high",
      source: S.heart,
    },
    firstMoves: [
      "STEMI on ECG → activate the cath lab",
      "Suspected ACS → aspirin unless allergy or dissection",
      "Suspected dissection → no antithrombotics, get CTA",
      "Repeat ECG if pain persists or changes",
    ],
    pimp: [
      {
        q: "Inferior STEMI: which leads, which artery?",
        a: "II, III, aVF — usually the RCA. Get right-sided leads (V4R) to check for RV infarct.",
      },
      {
        q: "Why be careful with nitroglycerin in RV infarct?",
        a: "The RV is preload-dependent — nitrates drop preload and can crash the blood pressure.",
      },
    ],
    sources: [S.chestPain2021, S.acs2025, S.heart],
  },

  // ── Shortness of breath ────────────────────────────────────────────────────
  {
    slug: "shortness-of-breath",
    title: "Shortness of breath",
    tagline: "Look at the patient, the sats, and the work of breathing.",
    icon: "wind",
    dontMiss: [
      { dx: "Pulmonary embolism", clue: "Tachycardia, pleuritic pain, risk factors" },
      { dx: "Tension pneumothorax", clue: "One-sided absent breath sounds, hypotension" },
      { dx: "Acute heart failure", clue: "Orthopnea, crackles, JVD, edema" },
      { dx: "Anaphylaxis", clue: "Hives, wheeze, hypotension after exposure" },
      { dx: "ACS", clue: "Dyspnea can be the only symptom" },
      { dx: "Upper airway obstruction", clue: "Stridor, drooling, voice change" },
    ],
    askLook: [
      "Sudden or gradual onset?",
      "Orthopnea, PND, leg swelling",
      "Fever, cough, sputum",
      "Wheeze vs crackles vs a quiet chest",
      "Full sentences? Accessory muscles?",
    ],
    workup: [
      "Continuous SpO₂ + monitor",
      "ECG",
      "Chest X-ray",
      "VBG or ABG",
      "BNP, troponin",
      "D-dimer if PE risk is low",
      "POCUS: B-lines, lung sliding",
    ],
    rule: {
      name: "PERC rule",
      useWhen: "Only when your gut says PE risk is LOW",
      items: [
        "Age ≥50",
        "Heart rate ≥100",
        "SpO₂ <95%",
        "One-sided leg swelling",
        "Hemoptysis",
        "Surgery or trauma in the last 4 weeks",
        "Prior PE or DVT",
        "Estrogen use (OCPs, hormone therapy)",
      ],
      result: "All 8 absent → no D-dimer needed. Any present → D-dimer (age-adjusted if >50).",
      source: S.perc,
    },
    firstMoves: [
      "Sit them up; oxygen to target saturation",
      "Tension pneumothorax → decompress now, don't wait for X-ray",
      "Anaphylaxis → IM epinephrine first",
      "Wheeze → bronchodilators early",
      "Pulmonary edema → noninvasive ventilation if tiring",
    ],
    pimp: [
      {
        q: "Most common ECG finding in PE?",
        a: "Sinus tachycardia. S1Q3T3 is classic but uncommon.",
      },
      {
        q: "Why not use PERC in a moderate-risk patient?",
        a: "It was built for low pretest probability — in higher-risk patients a negative PERC misses PE.",
      },
    ],
    sources: [S.perc, S.acepVte],
  },

  // ── Abdominal pain ─────────────────────────────────────────────────────────
  {
    slug: "abdominal-pain",
    title: "Abdominal pain",
    tagline: "Pregnancy test on anyone who could be pregnant. Older + pain = worry.",
    icon: "stomach",
    dontMiss: [
      { dx: "Ruptured AAA", clue: "Older, pain to back or flank, hypotension" },
      { dx: "Mesenteric ischemia", clue: "Pain out of proportion to exam, AFib" },
      { dx: "Ectopic pregnancy", clue: "Missed period, bleeding, positive hCG" },
      { dx: "Perforated viscus", clue: "Rigid abdomen, free air" },
      { dx: "Bowel obstruction", clue: "Distension, vomiting, no flatus" },
      { dx: "Testicular or ovarian torsion", clue: "Sudden one-sided pain, vomiting" },
    ],
    askLook: [
      "Where did it start, where is it now?",
      "Last menstrual period, sexual history",
      "Last BM, flatus, vomiting (bilious?)",
      "Prior abdominal surgeries",
      "Guarding, rebound, rigidity",
    ],
    workup: [
      "hCG",
      "CBC, CMP, lipase",
      "Urinalysis",
      "Lactate if ischemia suspected",
      "RUQ ultrasound for biliary pain",
      "CT abdomen/pelvis with IV contrast (adults)",
      "Bedside ultrasound for AAA",
    ],
    rule: {
      name: "Alvarado score (MANTRELS)",
      useWhen: "Suspected appendicitis",
      items: [
        "Migration of pain to RLQ (1)",
        "Anorexia (1)",
        "Nausea or vomiting (1)",
        "Tenderness in RLQ (2)",
        "Rebound tenderness (1)",
        "Elevated temperature ≥37.3 °C (1)",
        "Leukocytosis >10,000 (2)",
        "Shift to the left (1)",
      ],
      result: "≤4 unlikely · 5–6 equivocal, image · ≥7 likely",
      source: S.alvarado,
    },
    firstMoves: [
      "Unstable + suspected AAA → surgery now, not the CT scanner",
      "Treat pain early — it doesn't hide peritonitis",
      "Peritonitis or free air → surgery consult",
      "Ultrasound first in children and pregnancy",
    ],
    pimp: [
      {
        q: "Pain out of proportion to exam in a patient with AFib?",
        a: "Acute mesenteric ischemia until proven otherwise — get a CTA.",
      },
      {
        q: "Most common cause of small bowel obstruction?",
        a: "Adhesions from prior abdominal surgery.",
      },
    ],
    sources: [S.alvarado, S.acrRlq],
  },

  // ── Headache ───────────────────────────────────────────────────────────────
  {
    slug: "headache",
    title: "Headache",
    tagline: "Sudden worst headache = subarachnoid hemorrhage until proven otherwise.",
    icon: "brain",
    dontMiss: [
      { dx: "Subarachnoid hemorrhage", clue: "Thunderclap, peaks within an hour" },
      { dx: "Meningitis", clue: "Fever, neck stiffness, confusion" },
      { dx: "Giant cell arteritis", clue: "Over 50, jaw pain with chewing, vision change" },
      { dx: "Carbon monoxide", clue: "Others at home sick too, winter" },
      { dx: "Cerebral venous thrombosis", clue: "Pregnancy, postpartum, estrogen" },
      { dx: "Acute angle-closure glaucoma", clue: "Red painful eye, halos, nausea" },
    ],
    askLook: [
      "Time to peak — seconds or hours?",
      "First or worst? Different from usual?",
      "Fever, rash, neck stiffness",
      "Neuro deficits, papilledema",
      "Anticoagulants, pregnancy, immunocompromise",
    ],
    workup: [
      "Noncontrast CT head",
      "LP if CT negative and concern remains",
      "ESR/CRP if over 50",
      "Carboxyhemoglobin if CO suspected",
      "hCG",
      "Eye pressure if red eye",
    ],
    rule: {
      name: "Ottawa SAH Rule",
      useWhen: "Alert, ≥15 years, new severe non-traumatic headache peaking within 1 hour",
      items: [
        "Age ≥40",
        "Neck pain or stiffness",
        "Witnessed loss of consciousness",
        "Onset during exertion",
        "Thunderclap — instantly peaking pain",
        "Limited neck flexion on exam",
      ],
      result: "Any one present → work up for SAH. None → SAH ruled out clinically.",
      source: S.ottawaSah,
    },
    firstMoves: [
      "Thunderclap → CT head now",
      "Suspected meningitis → antibiotics first; don't wait for CT or LP",
      "Suspected CO → high-flow oxygen",
      "Normal neuro exam + normal CT within 6 h of onset → SAH ruled out",
    ],
    pimp: [
      {
        q: "Neuro exam normal, CT done 4 hours after onset is normal. LP?",
        a: "Not needed — ACEP (2019): a normal CT within 6 hours of onset rules out SAH in these patients.",
      },
      {
        q: "Why wait to do the LP when CT is late?",
        a: "Xanthochromia takes up to ~12 hours to develop after the bleed.",
      },
    ],
    sources: [S.ottawaSah, S.acepHeadache],
  },

  // ── Altered mental status ──────────────────────────────────────────────────
  {
    slug: "altered-mental-status",
    title: "Altered mental status",
    tagline: "Check the glucose first. Then think AEIOU TIPS.",
    icon: "confusion",
    dontMiss: [
      { dx: "Hypoglycemia", clue: "Fingerstick before anything else" },
      { dx: "Hypoxia or hypercarbia", clue: "SpO₂, VBG" },
      { dx: "Stroke", clue: "Focal deficits — find the last known well" },
      { dx: "Sepsis or meningitis", clue: "Fever; older adult with UTI or pneumonia" },
      { dx: "Ingestion or withdrawal", clue: "Toxidrome, pupils, alcohol" },
      { dx: "Intracranial bleed", clue: "Fall, anticoagulants" },
    ],
    askLook: [
      "What's their baseline? Call family or facility",
      "New meds, sedatives, anticholinergics",
      "When were they last normal?",
      "Pupils, focal deficits, asterixis",
      "Full vitals including temperature",
    ],
    workup: [
      "Fingerstick glucose",
      "ECG",
      "CBC, CMP (sodium, calcium, BUN)",
      "Urinalysis",
      "VBG + lactate",
      "Acetaminophen, salicylate, alcohol levels",
      "Ammonia if liver disease",
      "CT head",
    ],
    rule: {
      name: "Confusion Assessment Method (CAM)",
      useWhen: "Is this delirium?",
      items: [
        "1. Acute onset and fluctuating course",
        "2. Inattention",
        "3. Disorganized thinking",
        "4. Altered level of consciousness",
      ],
      result: "1 + 2 + (3 or 4) = delirium",
      source: S.cam,
    },
    firstMoves: [
      "Low glucose → treat now",
      "Can't protect the airway → secure it",
      "Opioid toxidrome → naloxone",
      "Treat the cause — delirium is a symptom, not a diagnosis",
    ],
    pimp: [
      {
        q: "AEIOU TIPS?",
        a: "Alcohol · Epilepsy/Electrolytes/Encephalopathy · Insulin · Opioids/Overdose · Uremia · Trauma/Temperature · Infection · Psych/Poisons · Stroke/Shock",
      },
      {
        q: "Delirium vs dementia?",
        a: "Delirium is acute, fluctuates, and impairs attention. Dementia is gradual with attention preserved early.",
      },
    ],
    sources: [S.cam],
  },

  // ── Syncope ────────────────────────────────────────────────────────────────
  {
    slug: "syncope",
    title: "Syncope",
    tagline: "Cardiac syncope kills. Every patient gets an ECG.",
    icon: "syncope",
    dontMiss: [
      { dx: "Arrhythmia", clue: "No warning, exertional, palpitations" },
      { dx: "Aortic stenosis or HCM", clue: "Murmur, syncope with exertion" },
      { dx: "Pulmonary embolism", clue: "Dyspnea, tachycardia" },
      { dx: "Hemorrhage (GI bleed)", clue: "Melena, pallor, orthostatic" },
      { dx: "Ruptured ectopic", clue: "Positive hCG, abdominal pain" },
    ],
    askLook: [
      "What were they doing? Exertion, standing, urinating",
      "Warning signs: warmth, nausea, tunnel vision?",
      "Palpitations or chest pain before?",
      "Family history of sudden death",
      "Tongue bite, confusion afterward (seizure?)",
    ],
    workup: [
      "ECG — everyone",
      "Orthostatic vitals",
      "Fingerstick glucose",
      "hCG",
      "CBC (hemoglobin)",
      "BMP",
      "Troponin if cardiac concern",
    ],
    rule: {
      name: "Short-term high-risk features",
      useWhen: "Deciding who needs monitoring or a cardiac workup",
      items: [
        "Older age (>60), male",
        "No warning before passing out",
        "Syncope during exertion",
        "Palpitations right before",
        "Structural heart disease or heart failure",
        "Family history of sudden cardiac death",
        "Abnormal ECG or positive troponin",
        "Bleeding or persistently abnormal vitals",
      ],
      result: "Any present → evaluate for a cardiac or serious cause. Classic vasovagal story with none → often outpatient.",
      source: S.syncope2017,
    },
    firstMoves: [
      "Cardiac monitor",
      "Unstable rhythm → ACLS",
      "Pregnant + hypotensive → ruptured ectopic until proven otherwise",
      "Seizure features → work up as seizure",
    ],
    pimp: [
      {
        q: "ECG findings that make syncope scary?",
        a: "Long QT, Brugada pattern, WPW delta wave, high-grade AV block — also ischemia and HCM.",
      },
      {
        q: "Syncope while lifting weights in a young athlete with a murmur that gets louder with Valsalva?",
        a: "Hypertrophic cardiomyopathy.",
      },
    ],
    sources: [S.syncope2017],
  },

  // ── Stroke symptoms ────────────────────────────────────────────────────────
  {
    slug: "stroke-symptoms",
    title: "Stroke symptoms",
    tagline: "Time is brain. Last known well + glucose, first.",
    icon: "stroke",
    dontMiss: [
      { dx: "Large vessel occlusion", clue: "Aphasia, gaze deviation, neglect" },
      { dx: "Intracerebral hemorrhage", clue: "Headache, vomiting, very high BP" },
      { dx: "Hypoglycemia (mimic)", clue: "Check before anything else" },
      { dx: "Seizure with Todd's paralysis (mimic)", clue: "Witnessed seizure, then weakness" },
      { dx: "Aortic dissection", clue: "Chest or back pain + neuro deficit" },
    ],
    askLook: [
      "Last known well — the exact time",
      "Anticoagulants?",
      "BE-FAST: Balance, Eyes, Face, Arm, Speech, Time",
      "NIHSS",
      "Recent surgery, bleeding, prior brain bleed",
    ],
    workup: [
      "Fingerstick glucose",
      "Noncontrast CT head — now",
      "CTA head and neck",
      "ECG + troponin (don't delay treatment)",
      "Coags if on anticoagulants",
    ],
    rule: {
      name: "Treatment windows",
      useWhen: "Suspected acute ischemic stroke",
      items: [
        "IV thrombolysis: within 4.5 h of last known well",
        "Selected patients: 4.5–9 h with salvageable brain on perfusion imaging",
        "Thrombectomy: large vessel occlusion, selected patients up to 24 h",
        "Don't delay thrombolysis to get CTA or perfusion imaging",
      ],
      result: "Call the stroke team early — eligibility is their decision.",
      source: S.stroke2026,
    },
    firstMoves: [
      "Activate stroke alert",
      "Check and treat low glucose",
      "Nothing by mouth until swallow screen",
      "Blood pressure goals per stroke protocol",
    ],
    pimp: [
      {
        q: "Most important time in the stroke history?",
        a: "Last known well — not when symptoms were found.",
      },
      {
        q: "Why check glucose before the CT?",
        a: "Hypoglycemia mimics stroke and is fixable in minutes.",
      },
    ],
    sources: [S.stroke2026],
  },

  // ── Fever / sepsis ─────────────────────────────────────────────────────────
  {
    slug: "fever-sepsis",
    title: "Fever / possible sepsis",
    tagline: "Find the source. Septic shock gets antibiotics within the hour.",
    icon: "fever",
    dontMiss: [
      { dx: "Septic shock", clue: "Hypotension, high lactate, mottled skin" },
      { dx: "Meningitis", clue: "Headache, neck stiffness, confusion" },
      { dx: "Necrotizing soft tissue infection", clue: "Pain out of proportion, crepitus" },
      { dx: "Neutropenic fever", clue: "On chemo — any fever counts" },
      { dx: "Spinal epidural abscess", clue: "IV drug use, back pain + fever" },
    ],
    askLook: [
      "Source hunt: lungs, urine, skin, abdomen, lines",
      "Chemo, steroids, transplant, HIV",
      "Recent hospital stay or antibiotics",
      "Any change in mental status",
      "Skin: petechiae, wounds",
    ],
    workup: [
      "Lactate",
      "Blood cultures ×2 (before antibiotics if no delay)",
      "CBC, CMP",
      "Urinalysis + culture",
      "Chest X-ray",
      "Imaging for the source",
    ],
    rule: {
      name: "Screening and definitions",
      useWhen: "Adult who looks sick with suspected infection",
      items: [
        "Screen with NEWS/NEWS2, MEWS, or SIRS — not qSOFA alone",
        "Sepsis = infection + organ dysfunction",
        "Septic shock = vasopressors for MAP ≥65 and lactate >2 despite fluids",
      ],
      result: "Positive screen → lactate, cultures, antibiotics, reassess.",
      source: S.ssc2026,
    },
    firstMoves: [
      "Septic shock → antibiotics immediately, ideally within 1 h",
      "Balanced crystalloid for hypoperfusion",
      "Target MAP around 65",
      "Source control: drain, debride, remove infected lines",
    ],
    pimp: [
      {
        q: "Sepsis-3 definition of septic shock?",
        a: "Needs vasopressors to keep MAP ≥65 and lactate >2 mmol/L despite adequate fluids.",
      },
      {
        q: "Why not screen with qSOFA?",
        a: "Surviving Sepsis (2026) recommends NEWS, MEWS, or SIRS over qSOFA alone — qSOFA misses too many.",
      },
    ],
    sources: [S.ssc2026, S.sepsis3],
  },

  // ── Trauma ─────────────────────────────────────────────────────────────────
  {
    slug: "trauma",
    title: "Trauma",
    tagline: "Stop the bleeding first: xABCDE.",
    icon: "trauma",
    dontMiss: [
      { dx: "Exsanguinating hemorrhage", clue: "Control it before the airway" },
      { dx: "Tension pneumothorax", clue: "Absent breath sounds, hypotension" },
      { dx: "Cardiac tamponade", clue: "Beck's triad, penetrating chest" },
      { dx: "Massive hemothorax", clue: "Dull, absent breath sounds, shock" },
      { dx: "Intra-abdominal bleeding", clue: "Positive FAST, hypotension" },
      { dx: "Epidural hematoma", clue: "Lucid interval, then decline" },
    ],
    askLookLabel: "Primary survey",
    askLook: [
      "x — Exsanguinating hemorrhage: pressure, tourniquet",
      "A — Airway; spinal motion restriction if indicated",
      "B — Breath sounds, sats, chest wall",
      "C — Pulses, BP, FAST",
      "D — GCS, pupils",
      "E — Expose, then keep them warm",
    ],
    workup: [
      "eFAST",
      "Chest + pelvis X-ray",
      "Type and crossmatch",
      "CBC, BMP, lactate, coags",
      "hCG",
      "CT based on mechanism and stability",
    ],
    rule: {
      name: "Canadian CT Head Rule",
      useWhen: "GCS 13–15 after witnessed LOC, amnesia, or disorientation (not for age <16, anticoagulants, or seizure)",
      items: [
        "GCS <15 two hours after injury",
        "Suspected open or depressed skull fracture",
        "Signs of basal skull fracture",
        "Vomiting ≥2 times",
        "Age ≥65",
        "Amnesia before impact ≥30 minutes",
        "Dangerous mechanism (pedestrian struck, ejection, fall >3 ft or 5 stairs)",
      ],
      result: "Any present → CT head.",
      source: S.cchr,
    },
    firstMoves: [
      "Hemorrhage control comes before airway",
      "Blood products early; limit crystalloid",
      "Tranexamic acid within 3 h for major bleeding",
      "Permissive hypotension until bleeding is controlled (not with head injury)",
    ],
    pimp: [
      {
        q: "NEXUS: when can you skip C-spine imaging?",
        a: "No midline tenderness, no focal deficit, normal alertness, no intoxication, no painful distracting injury.",
      },
      {
        q: "Beck's triad?",
        a: "Hypotension, JVD, muffled heart sounds — cardiac tamponade.",
      },
    ],
    sources: [S.atls11, S.cchr, S.nexus, S.acepTbi],
  },

  // ── Back pain ──────────────────────────────────────────────────────────────
  {
    slug: "back-pain",
    title: "Back pain",
    tagline: "Most back pain is benign. Find the one that isn't.",
    icon: "back",
    dontMiss: [
      { dx: "Cauda equina syndrome", clue: "Saddle numbness, retention, both legs weak" },
      { dx: "Spinal epidural abscess", clue: "Fever, IV drug use, recent procedure" },
      { dx: "AAA", clue: "Older, vascular risk factors, pulsatile mass" },
      { dx: "Spinal metastasis", clue: "Cancer history, weight loss, night pain" },
      { dx: "Vertebral fracture", clue: "Trauma, osteoporosis, steroids" },
    ],
    askLook: [
      "Bladder or bowel changes, saddle numbness",
      "Fever, IV drug use, immunosuppression",
      "Cancer history, weight loss",
      "Strength, reflexes, sensation (L4–S1)",
      "Rectal tone if cauda equina suspected",
    ],
    workup: [
      "None for uncomplicated pain <6 weeks",
      "Bladder scan / post-void residual if cauda equina",
      "MRI if red flags",
      "ESR/CRP, CBC if infection suspected",
      "Bedside ultrasound for AAA",
      "Urinalysis (stone, pyelonephritis)",
    ],
    rule: {
      name: "When to image",
      useWhen: "Acute low back pain",
      items: [
        "No red flags, <6 weeks → no imaging",
        "Suspected cauda equina → MRI now",
        "Fever, IV drug use, or immunosuppression → MRI",
        "Cancer history → MRI",
        "Trauma or osteoporosis → X-ray or CT",
      ],
      result: "Routine imaging doesn't improve outcomes in uncomplicated back pain.",
      source: S.acrLbp,
    },
    firstMoves: [
      "Uncomplicated → heat, NSAIDs, keep moving",
      "Opioids are not first-line",
      "Cauda equina → spine surgery consult now",
      "Unstable + suspected AAA → vascular surgery",
    ],
    pimp: [
      {
        q: "Most sensitive finding for cauda equina?",
        a: "Urinary retention — check a post-void residual.",
      },
      {
        q: "Classic triad of spinal epidural abscess?",
        a: "Back pain, fever, neuro deficit — but all three together is uncommon.",
      },
    ],
    sources: [S.acrLbp, S.acpLbp],
  },

  // ── Bleeding in early pregnancy ────────────────────────────────────────────
  {
    slug: "early-pregnancy-bleeding",
    title: "Bleeding in early pregnancy",
    tagline: "Ectopic until an intrauterine pregnancy is seen.",
    icon: "pregnancy",
    dontMiss: [
      { dx: "Ruptured ectopic", clue: "Unstable, peritoneal signs, free fluid" },
      { dx: "Unruptured ectopic", clue: "Pain + bleeding, no IUP on ultrasound" },
      { dx: "Heterotopic pregnancy", clue: "IUP seen, but on fertility treatment" },
      { dx: "Septic abortion", clue: "Fever, foul discharge, retained tissue" },
      { dx: "Hemorrhage from miscarriage", clue: "Soaking pads, unstable vitals" },
    ],
    askLook: [
      "Last menstrual period, gestational age",
      "IVF, prior ectopic, tubal surgery, IUD",
      "How much bleeding? Passed tissue?",
      "Pelvic exam: cervical os open or closed",
      "Orthostatic vitals",
    ],
    workup: [
      "Quantitative β-hCG",
      "Pelvic ultrasound",
      "Blood type and Rh",
      "CBC",
      "Bedside FAST if unstable",
    ],
    rule: {
      name: "Reading the ultrasound",
      useWhen: "First-trimester pain or bleeding",
      items: [
        "Intrauterine pregnancy seen → ectopic very unlikely (unless fertility treatment)",
        "No IUP + adnexal mass or free fluid → ectopic likely",
        "Nothing seen → pregnancy of unknown location",
        "A low β-hCG does NOT rule out ectopic",
      ],
      result: "Unstable or free fluid → OB/GYN now. Unknown location → close follow-up with repeat hCG.",
      source: S.acepEarlyPreg,
    },
    firstMoves: [
      "Unstable → two large IVs, blood, OB/GYN to the OR",
      "Ultrasound even when hCG is low",
      "Know the Rh status",
      "Stable, unknown location → arrange repeat hCG and follow-up",
    ],
    pimp: [
      {
        q: "Does a low β-hCG rule out ectopic?",
        a: "No — ectopics occur at any hCG level (ACEP, 2017).",
      },
      {
        q: "Rh-negative, miscarriage at 8 weeks — RhIG?",
        a: "ACOG (2024) suggests routine RhIG may be forgone before 12 weeks; decide with the patient.",
      },
    ],
    sources: [S.acepEarlyPreg, S.acogRh],
  },

  // ── Overdose / ingestion ───────────────────────────────────────────────────
  {
    slug: "overdose",
    title: "Overdose / ingestion",
    tagline: "What, when, how much — and check acetaminophen in everyone.",
    icon: "pill",
    dontMiss: [
      { dx: "Acetaminophen", clue: "Often no symptoms early" },
      { dx: "Salicylates", clue: "Tinnitus, fast breathing, acidosis" },
      { dx: "TCA / sodium-channel blockers", clue: "Wide QRS, seizures" },
      { dx: "Opioids", clue: "Pinpoint pupils, slow breathing" },
      { dx: "Toxic alcohols", clue: "High anion gap + osmolar gap" },
      { dx: "Co-ingestion", clue: "Assume more than one substance" },
    ],
    askLook: [
      "What, how much, when — and why (intent)",
      "Pill bottles, meds of others at home",
      "Toxidrome: pupils, skin, HR, temp, bowel sounds",
      "Suicidal intent → safety precautions",
      "Alcohol on board?",
    ],
    workup: [
      "Fingerstick glucose",
      "ECG (QRS, QTc)",
      "Acetaminophen level at 4 h",
      "Salicylate level",
      "BMP (anion gap), VBG",
      "Serum osmolality if toxic alcohol",
      "hCG",
    ],
    rule: {
      name: "Acetaminophen: when to treat",
      useWhen: "Single acute ingestion",
      items: [
        "Draw the level ≥4 h after ingestion",
        "Plot on the Rumack-Matthew nomogram (treatment line starts at 150 mcg/mL at 4 h)",
        "On or above the line → acetylcysteine (NAC)",
        "Unknown time or late presentation with detectable level or high AST → treat",
      ],
      result: "When in doubt, start NAC and call Poison Control: 1-800-222-1222.",
      source: S.apap2023,
    },
    firstMoves: [
      "Opioid toxidrome + slow breathing → naloxone, support ventilation",
      "Wide QRS → sodium bicarbonate",
      "Seizures → benzodiazepines",
      "Intentional → 1:1 observation",
      "Call Poison Control: 1-800-222-1222",
    ],
    pimp: [
      {
        q: "Hot, dry, flushed, dilated pupils, urinary retention?",
        a: "Anticholinergic toxidrome — 'red as a beet, dry as a bone, blind as a bat, mad as a hatter.'",
      },
      {
        q: "Why repeat salicylate levels?",
        a: "Absorption can be delayed (enteric-coated pills, bezoars) — levels can keep rising for hours.",
      },
    ],
    sources: [S.apap2023],
  },
];

export function getShiftCard(slug: string): ShiftCard | undefined {
  return emergencyShiftCards.find((c) => c.slug === slug);
}
