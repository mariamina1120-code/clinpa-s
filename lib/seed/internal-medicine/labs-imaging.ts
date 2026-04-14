// @ts-nocheck
import type { LabValue, ImagingFinding } from "@/types";

export const internalMedicineLabValues: LabValue[] = [
  {
    id: "im-lab-troponin",
    name: "High-Sensitivity Troponin I / Troponin T",
    abbreviation: "hsTnI / hsTnT",
    category: "Cardiac Biomarkers",
    normalRange: { min: 0, max: 0.04, unit: "ng/mL (conventional); hsTn: <52 ng/L (hsTnI) or <14 ng/L (hsTnT)" },
    criticalValues: { high: 0.1 },
    rotations: ["internal-medicine", "emergency-medicine"],
    interpretation: {
      low: "Troponin undetectable or at baseline: ACS very unlikely (high negative predictive value with serial testing). Single negative hsTn at presentation + low clinical probability = rule out in 0/1 hour algorithm.",
      normal: "No myocardial injury detectable",
      high: "Troponin elevation with rise and/or fall pattern = acute MI (AMI). STEMI: clinical dx + EKG; troponin not needed to activate cath lab. NSTEMI: troponin rise in appropriate clinical context. Other causes of troponin elevation: myocarditis, PE (RV strain), cardiac contusion, sepsis, renal failure (reduced clearance), heart failure, cardioversion, ablation."
    },
    clinicalContext: "Serial troponins required: 0 and 3 hours (conventional) or 0 and 1 hour (high-sensitivity rapid rule-out protocol). A delta troponin (rising pattern) is more specific for ACS than a single elevated value. 99th percentile URL (upper reference limit) used as cutoff. Troponin I is more cardiac-specific than troponin T (skeletal muscle can produce cTnT).",
    associatedConditions: ["NSTEMI", "STEMI", "myocarditis", "pulmonary embolism", "Takotsubo cardiomyopathy", "sepsis-related cardiomyopathy"],
    commonOrders: ["EKG", "BNP", "CXR", "CMP", "CBC"],
    boardPearl: "NSTEMI vs. unstable angina: both have no ST elevation on EKG, but NSTEMI has elevated troponin and UA does not. Both require dual antiplatelet therapy, anticoagulation, and risk stratification for PCI timing."
  },
  {
    id: "im-lab-ck-mb",
    name: "CK-MB (Creatine Kinase MB Fraction)",
    abbreviation: "CK-MB",
    category: "Cardiac Biomarkers",
    normalRange: { min: 0, max: 5, unit: "ng/mL (or <3–5% of total CK)" },
    rotations: ["internal-medicine", "emergency-medicine"],
    interpretation: {
      low: "Not clinically significant",
      normal: "No acute myocardial injury",
      high: "Elevated CK-MB with CK-MB index (CK-MB/total CK) >3–5%: myocardial injury. Peaks at 12–24 hours post-MI (faster than troponin) and returns to normal in 36–48 hours. Useful for detecting reinfarction (troponin remains elevated for 7–10 days after MI — CK-MB can detect a new MI on top of old)."
    },
    clinicalContext: "CK-MB has been largely replaced by high-sensitivity troponin for MI diagnosis. CK-MB is LESS specific than troponin (skeletal muscle injury elevates total CK and CK-MB). CK-MB index (CK-MB/total CK × 100) >3% helps distinguish cardiac from skeletal muscle source. Total CK >10× ULN without elevated CK-MB index = rhabdomyolysis (skeletal muscle).",
    associatedConditions: ["Acute MI (especially reinfarction detection)", "Rhabdomyolysis (total CK elevated, CK-MB index low)", "Myocarditis"],
    commonOrders: ["Troponin (preferred)", "total CK", "EKG"],
    boardPearl: "Timing of cardiac biomarkers post-MI: Myoglobin rises first (1–3h, non-specific), CK-MB peaks at 12–24h and normalizes at 48–72h, Troponin rises at 4–6h and persists for 7–10 days. CK-MB advantage: detects reinfarction within 72h of initial MI when troponin is still elevated."
  },
  {
    id: "im-lab-abg",
    name: "Arterial Blood Gas (ABG)",
    abbreviation: "ABG",
    category: "Pulmonary / Acid-Base",
    normalRange: { min: 0, max: 0, unit: "pH 7.35–7.45; PaCO2 35–45 mmHg; PaO2 80–100 mmHg; HCO3 22–26 mEq/L; SpO2 95–100%", note: "A-a gradient normal: <10 mmHg (young); <(age/4 + 4)" },
    criticalValues: { low: 7.2, high: 7.6 },
    rotations: ["internal-medicine", "emergency-medicine"],
    interpretation: {
      low: "Acidemia (pH <7.35): Respiratory acidosis: pH↓, PaCO2↑, HCO3 normal (acute) or ↑ (compensated). Causes: hypoventilation, COPD exacerbation, neuromuscular disease, opioid overdose. Metabolic acidosis: pH↓, HCO3↓, PaCO2↓ (compensated). Wide anion gap: MUDPILES (Methanol, Uremia, DKA, Propylene glycol, INH/Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates). Normal anion gap: HARDASS (Hyperalimentation, Addison's, Renal tubular acidosis, Diarrhea, Acetazolamide, Spironolactone, Saline).",
      normal: "pH 7.35–7.45, PaCO2 35–45, PaO2 80–100, HCO3 22–26",
      high: "Alkalemia (pH >7.45): Respiratory alkalosis: pH↑, PaCO2↓, HCO3 normal (acute) or ↓ (compensated). Causes: anxiety/hyperventilation, PE, high altitude, pregnancy, hepatic failure, salicylate toxicity (early). Metabolic alkalosis: pH↑, HCO3↑, PaCO2↑ (compensated). Causes: vomiting, loop/thiazide diuretics, hyperaldosteronism, milk-alkali syndrome."
    },
    clinicalContext: "Step-by-step ABG interpretation: (1) Look at pH — acidosis or alkalosis; (2) Look at PaCO2 — if pH and PaCO2 move in OPPOSITE directions = respiratory; if same direction = metabolic; (3) Check compensation — expected compensation using Winter's formula (metabolic acidosis: PaCO2 = 1.5×HCO3 + 8 ± 2) or rule of 10 (for metabolic alkalosis); (4) Calculate anion gap if metabolic acidosis: AG = Na − (Cl + HCO3), normal 8–12. (5) If elevated AG, check delta-delta ratio: (AG−12)/(24−HCO3) — >2 = pure HAGMA; 1–2 = HAGMA + metabolic alkalosis; <1 = HAGMA + NAGMA.",
    associatedConditions: ["DKA", "lactic acidosis", "COPD exacerbation", "pulmonary embolism", "sepsis", "respiratory failure"],
    commonOrders: ["BMP (HCO3, AG calculation)", "lactate", "serum ketones", "BUN/Cr", "CBC"],
    boardPearl: "Winter's formula for metabolic acidosis compensation: Expected PaCO2 = 1.5×(HCO3) + 8 ± 2. If actual PaCO2 < expected = additional respiratory alkalosis. If actual PaCO2 > expected = additional respiratory acidosis. Check both primary and secondary disorders."
  },
  {
    id: "im-lab-lactate",
    name: "Serum Lactate",
    abbreviation: "Lactate",
    category: "Metabolic / Sepsis",
    normalRange: { min: 0.5, max: 2.0, unit: "mmol/L" },
    criticalValues: { high: 4.0 },
    rotations: ["internal-medicine", "emergency-medicine"],
    interpretation: {
      low: "Not clinically significant",
      normal: "Adequate tissue perfusion and aerobic metabolism",
      high: "Lactate 2–4 mmol/L: mild elevation — tissue hypoperfusion, early sepsis, hepatic clearance impairment, vigorous exercise. Lactate >4 mmol/L: severe lactic acidosis (Type A: tissue hypoxia — septic shock, cardiogenic shock, mesenteric ischemia; Type B: no tissue hypoxia — metformin toxicity, cyanide poisoning, thiamine deficiency, malignancy, liver failure, nucleoside reverse transcriptase inhibitors)."
    },
    clinicalContext: "Lactate is a key component of Sepsis-3 definition: septic shock = sepsis + vasopressors needed to maintain MAP ≥65 + lactate ≥2 mmol/L. Lactate clearance (>10% reduction in 2 hours with treatment) is a resuscitation target. Serial lactate every 2 hours until <2 mmol/L in septic shock. Metformin causes Type B lactic acidosis in renal failure (biguanide impairs mitochondrial complex I).",
    associatedConditions: ["Septic shock", "cardiogenic shock", "mesenteric ischemia", "DKA", "metformin toxicity", "hepatic failure"],
    commonOrders: ["ABG", "BMP", "blood cultures", "lactate repeat in 2h after resuscitation"],
    boardPearl: "Lactate >4 + hypotension despite 30 mL/kg IV fluid resuscitation = septic shock (Sepsis-3). Start vasopressors (norepinephrine first-line). Lactate predicts mortality independently of BP — even normotensive patients with lactate >4 have high mortality ('cryptic shock')."
  },
  {
    id: "im-lab-procalcitonin",
    name: "Procalcitonin",
    abbreviation: "PCT",
    category: "Infectious/Inflammatory",
    normalRange: { min: 0, max: 0.1, unit: "ng/mL" },
    rotations: ["internal-medicine", "emergency-medicine"],
    interpretation: {
      low: "PCT <0.1 ng/mL: bacterial infection very unlikely. PCT <0.25 ng/mL: antibiotics not recommended (viral/non-infectious etiology likely). Supports antibiotic stewardship decisions.",
      normal: "No significant bacterial infection",
      high: "PCT 0.25–0.5 ng/mL: borderline — consider antibiotics based on clinical context. PCT >0.5 ng/mL: bacterial infection likely — antibiotic recommended. PCT >2 ng/mL: severe bacterial infection, sepsis. PCT >10 ng/mL: septic shock, high mortality risk."
    },
    clinicalContext: "Procalcitonin is produced in response to bacterial infections (not viral). Useful for antibiotic stewardship in CAP and COPD exacerbation — can guide decision to withhold or discontinue antibiotics (serial PCT-guided therapy reduces antibiotic duration without increasing mortality in ABROGATE trial). DOES NOT substitute for clinical judgment. False positives: burns, trauma, pancreatitis, C. diff, cardiac surgery. CRP is less specific (rises with any inflammation).",
    associatedConditions: ["Bacterial pneumonia", "sepsis", "COPD exacerbation (bacterial vs. viral distinction)", "antibiotic stewardship"],
    commonOrders: ["Blood cultures", "CBC", "CRP", "BMP", "CXR"],
    boardPearl: "PCT-guided antibiotic stewardship in CAP: discontinue antibiotics when PCT falls <0.25 ng/mL (or drops >80% from peak) regardless of planned antibiotic course duration. Validated in ABROGATE and PROHOSP trials — reduces antibiotic exposure without worse outcomes."
  },
  {
    id: "im-lab-dimer",
    name: "D-Dimer",
    abbreviation: "D-dimer",
    category: "Coagulation / Thrombosis",
    normalRange: { min: 0, max: 0.5, unit: "µg/mL FEU (500 ng/mL)" },
    rotations: ["internal-medicine", "emergency-medicine"],
    interpretation: {
      low: "Negative D-dimer (<0.5 µg/mL FEU): high negative predictive value for PE and DVT in low-to-intermediate pre-test probability patients. Rules out PE in combination with low Wells score.",
      normal: "No significant clot formation or fibrinolysis",
      high: "Elevated D-dimer: not specific. Causes: DVT/PE, DIC, surgery, trauma, MI, stroke, malignancy, pregnancy, infection, inflammation, old age (age-adjusted cutoff: age × 10 ng/mL in patients >50 years). Cannot diagnose DVT/PE — only used to RULE OUT in low/intermediate probability."
    },
    clinicalContext: "Age-adjusted D-dimer threshold: for patients >50 years, use age × 10 ng/mL instead of fixed 500 ng/mL. This reduces false positives in elderly without missing PEs. PERC criteria (8 variables): if all met, D-dimer NOT needed (clinical rule-out). Pregnancy increases D-dimer physiologically — standard threshold not applicable; use trimester-specific cutoffs.",
    associatedConditions: ["DVT", "PE", "DIC", "aortic dissection screening (NPV)", "thrombophilia workup"],
    commonOrders: ["Wells PE or DVT score first", "CTPA if intermediate/high probability", "lower extremity doppler ultrasound"],
    boardPearl: "D-dimer is a RULE-OUT test, not a rule-in test. Negative D-dimer + low Wells = VTE ruled out (no imaging needed). Positive D-dimer + high Wells = VTE not ruled out — proceed with CTPA or ultrasound. Never order D-dimer in high clinical probability (always image directly)."
  },
  {
    id: "im-lab-lfts-hepatic",
    name: "Model for End-Stage Liver Disease (MELD) Score Components",
    abbreviation: "MELD (INR, Cr, Bili)",
    category: "Hepatic Function",
    normalRange: { min: 0, max: 0, unit: "MELD score: <10 = compensated; 10–19 = moderate; ≥20 = decompensated", note: "Components: INR, serum creatinine, total bilirubin" },
    rotations: ["internal-medicine"],
    interpretation: {
      low: "MELD <10: low 90-day mortality risk (~2%). Most patients with MELD <15 are better served by medical management than transplant.",
      normal: "MELD 10–14: intermediate risk (~6% 90-day mortality)",
      high: "MELD 15–19: high risk (~20% 90-day mortality). MELD ≥20: very high risk (≥50% 90-day mortality). MELD ≥15: transplant benefit outweighs risk — list for liver transplant. MELD-Na (includes serum sodium) is now preferred — hyponatremia worsens prognosis."
    },
    clinicalContext: "MELD = 3.78 × ln(total bilirubin mg/dL) + 11.2 × ln(INR) + 9.57 × ln(creatinine mg/dL) + 6.43. MELD-Na additionally incorporates serum Na (MELD-Na = MELD + 1.32 × (137 - Na) - (0.24 × MELD × (137 - Na))). Used for organ allocation priority for liver transplant. Precipitating events causing acute decompensation (ACLF): infection, variceal bleeding, hepatic encephalopathy.",
    associatedConditions: ["Hepatic cirrhosis", "acute liver failure", "liver transplant candidacy", "SBP", "hepatorenal syndrome"],
    commonOrders: ["INR", "total bilirubin", "creatinine", "sodium", "CBC", "ammonia"],
    boardPearl: "Hepatorenal syndrome (HRS): AKI in cirrhosis + ascites after excluding other causes (no improvement with 2 days albumin 1g/kg + stopping diuretics). HRS-1 (rapidly progressive, <2 weeks): treat with terlipressin + albumin. HRS-2 (insidious, in refractory ascites): manage with TIPS."
  },
  {
    id: "im-lab-complement",
    name: "Complement Levels (C3, C4, CH50)",
    abbreviation: "C3 / C4 / CH50",
    category: "Immunology / Rheumatology",
    normalRange: { min: 0, max: 0, unit: "C3: 90–180 mg/dL; C4: 16–47 mg/dL; CH50: 41–90 U/mL" },
    rotations: ["internal-medicine"],
    interpretation: {
      low: "Low C3 + Low C4 = classical pathway activation: SLE (most common cause), cryoglobulinemia, membranoproliferative GN, subacute bacterial endocarditis. Low C3 + Normal C4 = alternative pathway activation: post-streptococcal GN, C3 glomerulopathy (dense deposit disease), atypical HUS. Normal C3 + Low C4: hereditary or acquired C4 deficiency, early SLE (C4 drops before C3 in active lupus).",
      normal: "Intact complement cascade; no active complement consumption",
      high: "Complement elevation is nonspecific: acute phase response (infection, inflammation). Not diagnostically useful when elevated."
    },
    clinicalContext: "In active SLE: complement levels fall (consumption by immune complexes) while anti-dsDNA antibody levels RISE — used to monitor disease activity. Low complement + high anti-dsDNA = lupus flare. Serially monitor in lupus nephritis. CH50 = total hemolytic complement (screens entire cascade); if CH50 = 0, consider complement component deficiency (C5–C9 deficiency → recurrent Neisseria infections).",
    associatedConditions: ["SLE", "post-streptococcal GN", "cryoglobulinemia", "membranoproliferative GN", "endocarditis"],
    commonOrders: ["ANA", "anti-dsDNA", "anti-Smith", "ANCA", "antiphospholipid antibodies", "urinalysis"],
    boardPearl: "C5–C9 (membrane attack complex) deficiency: recurrent Neisseria meningitidis and gonorrhea infections — screen with CH50 (will be 0 or very low). Vaccinate against Neisseria if complement deficiency confirmed. Eculizumab (anti-C5 antibody) targets MAC — risk of Neisseria infection requires prophylactic penicillin."
  }
];

export const internalMedicineImagingFindings: ImagingFinding[] = [
  {
    id: "im-img-ekg-stemi",
    name: "STEMI Patterns on EKG",
    modality: "EKG",
    region: "Cardiac",
    rotation: "internal-medicine",
    normalAppearance: "Normal sinus rhythm, ST segments at isoelectric baseline, T waves upright in most leads, no pathologic Q waves.",
    abnormalFindings: [
      "Anterior STEMI (LAD occlusion): ST elevation in V1–V4 ± V5 (anterior wall). New LBBB with chest pain = treat as STEMI.",
      "Inferior STEMI (RCA 80%, LCx 20%): ST elevation in II, III, aVF. Always check right-sided leads (V4R): ST elevation in V4R = RV infarction (50% of inferior STEMIs). RV MI contraindication: nitrates (preload dependent — causes severe hypotension).",
      "Lateral STEMI (LCx): ST elevation in I, aVL, V5–V6.",
      "Posterior STEMI: tall R waves + ST depression in V1–V3 (posterior 'mirror image'). Check V7–V9 leads: ST elevation in posterior leads = posterior STEMI.",
      "Reciprocal changes: ST depression in leads 'opposite' to infarct zone (e.g., inferior STEMI → ST depression in I, aVL).",
      "Hyperacute T waves: tall, peaked, broad-based T waves — earliest EKG change in STEMI (precede ST elevation).",
      "Wellens syndrome: deep symmetric T-wave inversions in V2–V3 (Type A: biphasic; Type B: symmetric deep inverted) = critical LAD stenosis in the PAIN-FREE interval — high risk for anterior STEMI if unstressed."
    ],
    keyFindings: "ST elevation ≥1 mm in ≥2 contiguous limb leads or ≥2 mm in ≥2 contiguous precordial leads = STEMI diagnosis",
    clinicalCorrelation: "Activate cath lab immediately — door-to-balloon time ≤90 min. Concurrent treatment: aspirin 325 mg, P2Y12 inhibitor (ticagrelor 180 mg or prasugrel 60 mg preferred over clopidogrel for STEMI), heparin bolus, supplemental O2 only if SpO2 <90%. Do NOT give nitrates in RV MI (hypotension risk). Do NOT give beta-blockers in cardiogenic shock.",
    differentialConsiderations: ["Pericarditis (diffuse ST elevation in multiple leads, no reciprocal changes, PR depression)", "Early repolarization (benign variant — concave-up ST elevation, J-point notching, young patients)", "LBBB (Sgarbossa criteria to diagnose STEMI in LBBB)", "Hyperkalemia (peaked T waves, PR prolongation, wide QRS)"],
    boardPearl: "Sgarbossa criteria for STEMI diagnosis in LBBB: (1) ST elevation ≥1 mm concordant with QRS (same direction) = 5 points; (2) ST depression ≥1 mm in V1–V3 = 3 points; (3) ST elevation ≥5 mm discordant with QRS = 2 points. Score ≥3 = STEMI highly likely."
  },
  {
    id: "im-img-echo-findings",
    name: "Echocardiographic Findings — Key Pathology",
    modality: "Ultrasound (Echo)",
    region: "Cardiac",
    rotation: "internal-medicine",
    normalAppearance: "LVEF 55–70%. Normal LV wall motion (all segments contract symmetrically). Normal valve morphology and leaflet motion. No pericardial effusion. IVC <2.1 cm with >50% inspiratory collapse (RAP 0–5 mmHg).",
    abnormalFindings: [
      "Regional wall motion abnormality (RWMA): segment of LV that is hypokinetic, akinetic, or dyskinetic — corresponds to coronary territory (LAD: anterior wall + apex; RCA: inferior wall; LCx: lateral wall). RWMA = ischemia or infarction in that territory.",
      "Reduced LVEF: HFrEF defined as EF <40%. Mild 41–49% (HFmrEF), Moderate <40% (HFrEF). Concentric hypertrophy (increased wall thickness, normal/reduced cavity): chronic HTN, AS, HCM. Eccentric hypertrophy (dilated cavity, normal/thin walls): volume overload (AR, MR, DCM).",
      "Pericardial effusion: echo-free space surrounding heart. Cardiac tamponade signs: RV diastolic collapse (most sensitive), RA systolic collapse, respiratory variation of mitral/tricuspid inflow >25%, IVC plethora (no respiratory collapse), swinging heart on echo.",
      "McConnell's sign: RV free wall hypokinesis with preserved RV apical function — highly specific for acute massive pulmonary embolism.",
      "Septal flattening (D-sign): interventricular septum flattens in diastole (D-shaped LV cross-section on parasternal short axis) = RV pressure or volume overload (PE, pulmonary hypertension, RV infarction).",
      "Aortic stenosis grading: severe AS — peak velocity ≥4 m/s, mean gradient ≥40 mmHg, valve area ≤1.0 cm², or dimensionless index ≤0.25.",
      "Mitral stenosis: planimetry of MV area, Wilkins score (predicts balloon valvuloplasty suitability: score ≤8 = favorable), mean gradient, PHT (pressure half-time; MVA = 220/PHT)."
    ],
    keyFindings: "RWMA + reduced EF + wall motion abnormalities = ischemic cardiomyopathy until proven otherwise",
    clinicalCorrelation: "Point-of-care ultrasound (POCUS) echo in the ED/ICU: rapidly assess EF, RV size, pericardial effusion, volume status (IVC), and regional WMAs. Full transthoracic echo (TTE) for detailed valve assessment. Transesophageal echo (TEE) for: suspected endocarditis (prosthetic valve), aortic dissection, cardiac source of embolism, inadequate TTE windows.",
    differentialConsiderations: ["Takotsubo cardiomyopathy: apical ballooning with preserved basal function (opposite of RWMA pattern); stress-induced; typically resolves in weeks", "ARVC: RV dilation and dysfunction, fatty infiltration, epsilon waves on EKG"],
    boardPearl: "Cardiac tamponade vs. constrictive pericarditis: tamponade — IVC plethora, RV collapse, respiratory variation >25%; constriction — septal bounce, normal or preserved EF, respiratory variation of mitral inflow >25%, tissue Doppler e' >8 cm/s (normal myocardial relaxation differentiates from restrictive CMP)."
  },
  {
    id: "im-img-ct-abdomen",
    name: "CT Abdomen and Pelvis — Key Internal Medicine Findings",
    modality: "CT",
    region: "Abdomen / Pelvis",
    rotation: "internal-medicine",
    normalAppearance: "Liver, spleen, pancreas, kidneys normal in size and attenuation. No free fluid, free air, lymphadenopathy, or masses. Normal bowel caliber (<3 cm small bowel, <6 cm colon, <9 cm cecum).",
    abnormalFindings: [
      "Acute pancreatitis: pancreatic edema, peripancreatic fat stranding, fluid collections. Modified CT Severity Index (CTSI) grades extent. Pancreatic necrosis: lack of enhancement (contrast-enhanced CT required). Walled-off necrosis (WON) or pseudocyst: fluid-filled collections >4 weeks after onset.",
      "Bowel obstruction: dilated small bowel (>3 cm) proximal to collapsed bowel distally = mechanical obstruction. Transition point identifies cause. Free air (pneumoperitoneum) = perforation. Portal venous gas = intestinal ischemia (very bad).",
      "Diverticulitis: pericolonic fat stranding + bowel wall thickening + pericolic fluid adjacent to sigmoid colon ± abscess ± free perforation. Hinchey classification guides surgical vs. medical management.",
      "Renal calculi: hyperdense calculi in collecting system, ureter. Ureteral jet absent on CT = obstruction. Secondary signs: hydronephrosis, perinephric fat stranding.",
      "Liver lesions: simple cyst (water density, no enhancement), hemangioma (peripheral nodular enhancement with fill-in pattern), HCC (arterial enhancement with portal phase washout in cirrhotic liver — LI-RADS 5 = HCC). Metastases: multiple, rim-enhancing. Abscess: rim-enhancing fluid collection with surrounding edema.",
      "Retroperitoneal lymphadenopathy: nodes >1 cm short axis in retroperitoneum = lymphoma, metastatic disease, TB."
    ],
    keyFindings: "Free air (perforation), free fluid (hemorrhage, ascites, exudate), bowel dilation pattern (obstruction vs. ileus), organ enhancement pattern (ischemia, tumor)",
    clinicalCorrelation: "CT scan for pancreatitis: not needed at presentation unless diagnosis uncertain — severity established clinically (Ranson's criteria, BISAP score). CT with contrast at 72–96 hours if patient not improving (assess for necrosis). Do not perform contrast CT in patients with contrast allergy or eGFR <45 without pre-treatment.",
    differentialConsiderations: ["Ileus vs. obstruction: ileus — dilated small AND large bowel uniformly, no transition point, gas in rectum preserved; obstruction — dilated proximal bowel, collapsed distal bowel, transition point, no rectal gas"],
    boardPearl: "Pneumoperitoneum (free air under diaphragm on upright CXR or CT): most common cause = perforated peptic ulcer. Best detected on upright CXR (as little as 1 mL) or left lateral decubitus CXR. CT is most sensitive."
  },
  {
    id: "im-img-mri-brain",
    name: "MRI Brain — Acute Ischemic Stroke and CNS Pathology",
    modality: "MRI",
    region: "Brain",
    rotation: "internal-medicine",
    normalAppearance: "Gray-white matter differentiation preserved. No areas of diffusion restriction. No mass effect, midline shift, or herniation. Normal enhancement pattern with gadolinium (blood-brain barrier intact).",
    abnormalFindings: [
      "Acute ischemic stroke: DWI (diffusion-weighted imaging) — bright signal within minutes of infarction (restricted diffusion of water in cytotoxic edema). ADC map: dark (confirms true diffusion restriction, not T2 shine-through). Corresponding FLAIR abnormality: appears at 4–6 hours (DWI-FLAIR mismatch = stroke onset unknown but likely <4.5 hours = can give tPA per WAKE-UP trial).",
      "Hemorrhagic stroke: CT preferred acutely (faster, detects blood). MRI: hypointense (dark) on GRE/SWI sequences — 'blooming artifact' for hemosiderin. Gradient echo best for detecting microbleeds (CAA, hypertensive hemorrhage).",
      "Brain mass lesion: ring-enhancing lesion differential: CNS lymphoma (solid enhancement in AIDS), metastasis (multiple, at gray-white junction), glioblastoma (central necrosis, crossing corpus callosum — 'butterfly' pattern), abscess (thin ring, restricted diffusion center on DWI), toxoplasma (AIDS — multiple, subcortical, responds to pyrimethamine-sulfadiazine).",
      "Multiple sclerosis: periventricular white matter lesions, 'Dawson fingers' (lesions perpendicular to corpus callosum on sagittal FLAIR), infratentorial lesions, spinal cord lesions. Active plaques: gadolinium enhancing. McDonald criteria used for diagnosis.",
      "Herpes simplex encephalitis: T2/FLAIR hyperintensity in TEMPORAL LOBES bilaterally (asymmetric), ± hemorrhage, medial temporal + insular cortex. Treat empirically with acyclovir."
    ],
    keyFindings: "DWI bright + ADC dark = acute ischemic infarction (cytotoxic edema) — specific for stroke in first 1–7 days",
    clinicalCorrelation: "CT head without contrast first in any acute neurologic presentation (faster, rules out hemorrhage — contraindication to tPA). MRI DWI is far superior for detecting acute ischemic stroke (especially posterior fossa strokes invisible on CT). MRI ordered when: CT negative but high suspicion for stroke, posterior circulation symptoms (vertigo, ataxia, diplopia), TIA workup, or dementia evaluation.",
    differentialConsiderations: ["Vasogenic edema (tumor, abscess): T2 bright + ADC bright (water moves freely — not restricted). Cytotoxic edema (stroke): DWI bright + ADC dark (restricted diffusion)"],
    boardPearl: "CT head has <80% sensitivity for posterior fossa ischemic stroke (bone artifact). MRI DWI is >95% sensitive. In suspected posterior circulation stroke (vertigo + ataxia + gaze palsy + dysphagia), obtain MRI DWI — a normal CT does NOT rule out brainstem or cerebellar infarct."
  }
];
