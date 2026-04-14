import type { LabValue, ImagingFinding } from "@/types";

export const emergencyMedicineLabs: LabValue[] = [
  {
    id: "em-lab-troponin",
    name: "High-Sensitivity Troponin I/T",
    abbreviation: "hs-TnI / hs-TnT",
    rotation: ["emergency-medicine", "internal-medicine"],
    normalRangeStructured: {
      adult: "hs-TnI: < 26 ng/L (male), < 16 ng/L (female) — 99th percentile URL; conventional TnI: < 0.04 ng/mL",
      units: "ng/L (high-sensitivity) or ng/mL (conventional)",
    },
    interpretation: {
      elevated: {
        clinicalMeaning:
          "Elevation above 99th percentile URL = myocardial injury. ACUTE MI diagnosis: elevation + rise/fall pattern (delta troponin). ESC 0h/3h rapid rule-out: if hs-Tn < 5 ng/L at 0h = rule-out; if 0h 5–52 ng/L AND delta at 3h < 6 ng/L = rule-out. Rule-IN: 0h hs-Tn ≥ 52 ng/L OR delta ≥ 6 ng/L at 3h. Non-ACS causes: myocarditis, PE (RV strain), sepsis, renal failure (reduced clearance), demand ischemia (type 2 MI), cardiac contusion, Takotsubo/stress cardiomyopathy, post-cardioversion.",
        nextSteps:
          "Serial troponins at 0h and 3h (ESC rapid protocol) or 0h and 6h (conventional). Delta troponin ≥ 20% change from baseline with elevated absolute value = acute MI. EKG interpretation, risk stratification (HEART score), cardiology consultation for confirmed NSTEMI.",
      },
      decreased: {
        clinicalMeaning:
          "Levels below detection limit are reassuring. Falling troponin (after initial rise) indicates peak of injury has passed and is prognostically reassuring in serial measurement.",
        nextSteps:
          "If troponin is undetectable (< 5 ng/L) at 0h AND clinical pretest probability is low → very high negative predictive value (> 99%) → can safely discharge with outpatient follow-up.",
      },
    },
    clinicalPearl:
      "Troponin is cardiospecific but NOT ACS-specific — 30% of ED patients with elevated troponin do NOT have ACS. The clinical context (chest pain pattern, EKG, delta troponin, HEART score) is required. HEART score ≥ 7 = high risk, admit; 4–6 = moderate, serial troponins; 0–3 = low risk, can discharge with follow-up. Troponin rises 3–6 hours after MI onset, peaks 12–24 hours, normalizes 7–14 days — useful for timing of infarction.",
  },
  {
    id: "em-lab-ddimer",
    name: "D-Dimer",
    abbreviation: "D-dimer",
    rotation: ["emergency-medicine", "internal-medicine"],
    normalRangeStructured: {
      adult: "< 0.50 mcg/mL (500 ng/mL) by conventional ELISA — age-adjusted threshold: age × 10 mcg/L (for patients > 50 years)",
      units: "mcg/mL (FEU) or mcg/L",
    },
    interpretation: {
      elevated: {
        clinicalMeaning:
          "D-dimer is a fibrin degradation product elevated with ANY thrombus formation AND dissolution. Positive in: PE/DVT, DIC, aortic dissection, sepsis, malignancy, pregnancy, liver disease, recent surgery/trauma, inflammatory states. Very low specificity for VTE — a positive result does NOT diagnose PE. Useful only to EXCLUDE PE in low-to-intermediate pretest probability (Wells PE ≤ 4 + PERC incomplete).",
        nextSteps:
          "Positive D-dimer in low/intermediate probability: proceed to CTPA. Positive D-dimer in high probability (Wells > 6): go directly to CTPA (d-dimer not needed). Age-adjusted threshold: age × 10 mcg/L increases specificity in elderly patients while maintaining sensitivity.",
      },
      decreased: {
        clinicalMeaning:
          "Negative D-dimer (< age-adjusted threshold) in a patient with low-to-intermediate Wells PE score effectively RULES OUT PE — NPV > 99%. No further imaging needed.",
        nextSteps:
          "Discharge if clinical picture is otherwise reassuring. Do not send D-dimer in high pretest probability — go straight to CTPA. Do not send D-dimer in PERC-negative low probability — no workup needed.",
      },
    },
    clinicalPearl:
      "The most common pitfall: ordering D-dimer in high pretest probability patients — a positive result adds nothing (you still need CTPA) and a negative result doesn't reliably exclude PE at high probability. Apply the Wells criteria BEFORE ordering any test. PERC rule: if all 8 criteria negative in low-probability patients → no D-dimer, no CTPA needed. Age-adjusted D-dimer (age × 10 for age > 50) increases specificity from 35% to 60% with minimal loss of sensitivity.",
  },
  {
    id: "em-lab-lactate",
    name: "Serum Lactate",
    abbreviation: "Lactate",
    rotation: ["emergency-medicine", "internal-medicine"],
    normalRangeStructured: {
      adult: "0.5–2.0 mmol/L (venous lactate slightly higher than arterial)",
      units: "mmol/L",
    },
    interpretation: {
      elevated: {
        clinicalMeaning:
          "Lactate > 2.0 mmol/L = hyperlactatemia. Lactate > 4.0 mmol/L = severe hyperlactatemia / lactic acidosis. Type A lactic acidosis: tissue hypoperfusion (septic shock, cardiogenic shock, mesenteric ischemia, carbon monoxide poisoning). Type B lactic acidosis: without hypoperfusion (metformin toxicity, cyanide, linezolid, thiamine deficiency, mitochondrial disease, severe liver failure, leukemia). Cryptic septic shock: lactate > 4 with normal BP — same mortality as overt septic shock.",
        nextSteps:
          "Lactate > 2: evaluate for sepsis, initiate sepsis resuscitation if clinical picture consistent, repeat lactate in 2 hours. Lactate > 4: immediate aggressive resuscitation (30 mL/kg IV crystalloid, vasopressors for MAP < 65, source control). Serial lactate clearance: goal ≥ 10% reduction at 2 hours = adequate treatment response. Persistent elevation despite resuscitation = poor prognosis, consider vasopressin, ICU admission.",
      },
      decreased: {
        clinicalMeaning: "Lactate < 2.0 mmol/L = normal tissue perfusion (in context of normal clinical exam).",
        nextSteps:
          "Reassuring in a patient with presumed sepsis — low-risk for 28-day mortality. Repeat if clinical status worsens.",
      },
    },
    clinicalPearl:
      "The Surviving Sepsis Campaign 2021 guidelines include lactate in the 1-hour bundle: 'Obtain blood lactate — remeasure lactate if initial > 2 mmol/L.' Lactate clearance (≥ 10% at 2h) is an alternative resuscitation endpoint to ScvO2. Non-sepsis causes of elevated lactate are critically important: mesenteric ischemia ('pain out of proportion' + lactate > 4 = mesenteric ischemia until proven otherwise), cyanide toxicity (smoke inhalation victim with lactate ≥ 10 mmol/L = suspect CN poisoning → hydroxycobalamin immediately), metformin toxicity in renal failure.",
  },
  {
    id: "em-lab-abg",
    name: "Arterial Blood Gas",
    abbreviation: "ABG",
    rotation: ["emergency-medicine", "internal-medicine"],
    normalRangeStructured: {
      adult: "pH 7.35–7.45; PaO2 80–100 mmHg; PaCO2 35–45 mmHg; HCO3 22–26 mEq/L; SaO2 ≥ 95%; Base excess −2 to +2",
      units: "Various (pH unitless; gases in mmHg; HCO3 in mEq/L)",
    },
    interpretation: {
      elevated: {
        clinicalMeaning:
          "Elevated pH (> 7.45) = alkalosis: Metabolic alkalosis (elevated HCO3 — vomiting, diuretics, Cushings) or Respiratory alkalosis (decreased PaCO2 — hyperventilation from anxiety, PE, early sepsis, pregnancy). Elevated PaCO2 = CO2 retention = respiratory acidosis (COPD exacerbation, opioid overdose, NMB, severe asthma). Elevated HCO3 (> 26) = metabolic alkalosis or renal compensation for chronic respiratory acidosis. Elevated PaO2 = hyperoxia (avoid in STEMI, stroke, prematurity — oxygen toxicity).",
        nextSteps:
          "Step-wise acid-base interpretation: (1) pH → acidosis or alkalosis; (2) Primary disorder: PaCO2 (respiratory) vs HCO3 (metabolic); (3) Compensation: respiratory for metabolic (Winter's formula for metabolic acidosis: expected PaCO2 = 1.5 × HCO3 + 8 ± 2; if actual PaCO2 < predicted = concurrent respiratory alkalosis; if > predicted = concurrent respiratory acidosis); (4) Anion gap if metabolic acidosis: AG = Na − (Cl + HCO3), normal 8–12; (5) Delta-delta ratio if elevated AG: (AG − 12)/(24 − HCO3) — ratio < 1: concurrent non-gap metabolic acidosis; ratio > 2: concurrent metabolic alkalosis.",
      },
      decreased: {
        clinicalMeaning:
          "Decreased pH (< 7.35) = acidosis: Metabolic acidosis (low HCO3 — DKA, lactic acidosis, renal failure) or Respiratory acidosis (elevated PaCO2 — COPD, hypoventilation, opioid OD). Decreased PaCO2 = hyperventilation = respiratory alkalosis or compensation for metabolic acidosis. Decreased HCO3 = metabolic acidosis or compensation for chronic respiratory alkalosis. Decreased PaO2 = hypoxemia: evaluate A-a gradient.",
        nextSteps:
          "A-a gradient = [150 − (PaCO2 / 0.8)] − PaO2. Normal A-a gradient (room air): < 15–20 mmHg (increases with age: age/4 + 4). Normal A-a gradient with low PaO2 = hypoventilation (opioid OD, CNS depression). Elevated A-a gradient = V/Q mismatch (PE, pneumonia) or diffusion impairment.",
      },
    },
    clinicalPearl:
      "The A-a gradient differentiates hypoventilation from parenchymal/vascular causes of hypoxemia. A patient with PaO2 55 mmHg from opioid overdose will have NORMAL A-a gradient (hypoventilation — give naloxone). A patient with PaO2 55 mmHg from PE will have ELEVATED A-a gradient (V/Q mismatch). VBG (venous blood gas) is acceptable for pH, PaCO2, HCO3, and glucose monitoring in most clinical situations — use ABG when accurate PaO2 is needed (pulmonary disease, weaning ventilator, calculating A-a gradient).",
  },
  {
    id: "em-lab-bmp-ag",
    name: "Basic Metabolic Panel / Anion Gap",
    abbreviation: "BMP / AG",
    rotation: ["emergency-medicine", "internal-medicine"],
    normalRangeStructured: {
      adult: "Anion Gap: 8–12 mEq/L (if albumin-corrected: add 2.5 for each 1 g/dL albumin below normal 4.0); Osmol gap: < 10 mOsm/kg",
      units: "mEq/L (AG); mOsm/kg (osmol gap)",
    },
    interpretation: {
      elevated: {
        clinicalMeaning:
          "Elevated AG (> 12) = MUDPILES mnemonic: Methanol, Uremia, DKA (most common), Propylene glycol, Iron/Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates. Also: alcoholic ketoacidosis (AKA), starvation ketosis. Osmol gap = measured osmolality − calculated osmolality [(2 × Na) + (glucose/18) + (BUN/2.8)] > 10 = toxic alcohol (methanol or ethylene glycol) until proven otherwise. BMP abnormalities in emergencies: hyponatremia (SIADH, CHF, cirrhosis — corrected slowly to prevent central pontine myelinolysis ≤ 8–10 mEq/L per 24h); hyperkalemia (peaked T waves, PR prolongation, wide QRS, sine wave, VF — treat with calcium gluconate first, then insulin/glucose, kayexalate, dialysis).",
        nextSteps:
          "Elevated AG: calculate delta-delta (rule out concurrent non-gap acidosis). Osmol gap > 10 with AG metabolic acidosis: toxic alcohol (ethylene glycol or methanol) → fomepizole (alcohol dehydrogenase inhibitor) + emergent nephrology for hemodialysis. Hyperkalemia with EKG changes: calcium gluconate 1g IV immediately (membrane stabilization), insulin 10 units + dextrose, bicarbonate, albuterol nebulizer, kayexalate, dialysis for refractory.",
      },
      decreased: {
        clinicalMeaning:
          "Low anion gap (< 6): hypoalbuminemia (correct AG: add 2.5 for each g/dL below 4.0), multiple myeloma (cationic paraproteins), hypermagnesemia, lithium toxicity. Hyponatremia: Na < 135; severe < 120. Hypoglycemia: glucose < 70 — treat emergently.",
        nextSteps:
          "Hyponatremia: assess volume status, calculate urine Na and osmolality. Severe symptomatic hyponatremia (seizures, coma): 3% NaCl at 1–2 mL/kg/hr, target 1–2 mEq/L increase per hour, maximum 8–10 mEq/L per 24 hours to prevent central pontine myelinolysis.",
      },
    },
    clinicalPearl:
      "The osmol gap is the critical lab for detecting EARLY toxic alcohol ingestion BEFORE the anion gap has had time to develop (methanol and ethylene glycol are osmotically active before they are metabolized to organic acids that cause the anion gap). If osmol gap > 10 + AG metabolic acidosis: the toxic alcohol has BOTH — this is LATE and severe poisoning (high mortality). Fomepizole (4-methylpyrazole): 15 mg/kg IV loading dose — inhibits alcohol dehydrogenase, prevents conversion to toxic metabolites (formic acid from methanol → blindness; oxalic acid from ethylene glycol → renal failure and calcium oxalate crystals in urine).",
  },
  {
    id: "em-lab-glucose-poc",
    name: "Point-of-Care Glucose",
    abbreviation: "POC BGL",
    rotation: ["emergency-medicine", "pediatrics"],
    normalRangeStructured: {
      adult: "70–99 mg/dL (fasting); 70–140 mg/dL (random)",
      pediatric: "Neonates: 40–80 mg/dL; children: 70–100 mg/dL",
      units: "mg/dL",
    },
    interpretation: {
      elevated: {
        clinicalMeaning:
          "Hyperglycemia: Glucose > 200 with symptoms = diabetes mellitus (ADA diagnostic criteria: fasting ≥ 126, random ≥ 200 with symptoms, 2h OGTT ≥ 200, A1c ≥ 6.5%). DKA: glucose > 250 + ketonemia + anion gap metabolic acidosis (pH < 7.3). HHS (HONK): glucose > 600 + serum osmolality > 320 + minimal ketones — most common in elderly Type 2 DM. Stress hyperglycemia: non-diabetic patient with glucose 140–180 in critical illness (associated with worse outcomes — target 140–180 in ICU with insulin infusion).",
        nextSteps:
          "Glucose 250–500 with ketones and acidosis: DKA protocol (fluids, insulin drip, electrolyte replacement). Glucose > 600 without acidosis: HHS protocol (aggressive fluid resuscitation — deficit 8–10 L, slow correction of glucose, avoid rapid osmolality shifts). Critical illness hyperglycemia: insulin infusion targeting 140–180 mg/dL (NICE-SUGAR trial: tight control 80–110 → increased hypoglycemia mortality).",
      },
      decreased: {
        clinicalMeaning:
          "Hypoglycemia: glucose < 70 mg/dL — symptoms: adrenergic (shakiness, diaphoresis, tachycardia, anxiety) followed by neuroglycopenic (confusion, seizure, coma) at < 50 mg/dL. Causes: insulin excess, oral hypoglycemics (especially sulfonylureas — prolonged effect), insulin-secreting tumors (insulinoma), adrenal insufficiency, alcohol, sepsis, neonatal hypoglycemia.",
        nextSteps:
          "Alert patient: oral glucose (15 g fast carbohydrates — juice, glucose tablets). Obtunded patient without IV access: glucagon 1 mg IM/SQ (stimulates hepatic glycogenolysis; less effective in alcoholics and glycogen-depleted patients). IV access available: dextrose 25g IV (50 mL D50W) — repeat every 15 minutes until glucose > 70 mg/dL. Sulfonylurea overdose: prolonged hypoglycemia — admit for observation (may require octreotide 50 mcg IV to suppress endogenous insulin secretion); D10W infusion preferred over repeated D50W (prevents hyperglycemia/hyperkalemia with high dextrose boluses).",
      },
    },
    clinicalPearl:
      "Point-of-care glucose is the FIRST test in any patient with altered mental status — before CT, before LP, before extensive workup. 'Dextrostix before CT' is the rule. A glucose < 50 should ALWAYS be treated before attributing AMS to other causes. Glucagon is ineffective in chronic alcoholics and malnourished patients (depleted glycogen stores — these patients need IV dextrose). Sulfonylurea-induced hypoglycemia recurs after D50W bolus — always admit these patients and use octreotide + D10W infusion.",
  },
];

export const emergencyMedicineImaging: ImagingFinding[] = [
  {
    id: "em-img-ekg-stemi",
    modality: "EKG",
    finding: "ST-Elevation Pattern — STEMI and Equivalents",
    suggestsDiagnosis: ["STEMI", "LBBB equivalent", "Wellens syndrome", "De Winter T-waves", "Posterior STEMI"],
    keyFeatures: [
      "Classic STEMI: ST elevation ≥ 1 mm in ≥ 2 contiguous limb leads OR ≥ 2 mm in ≥ 2 contiguous precordial leads",
      "LBBB (new or presumably new): treated as STEMI equivalent — Sgarbossa criteria: concordant STE ≥ 1 mm (5 pts), concordant STD ≥ 1 mm in V1–V3 (3 pts), excessively discordant STE ≥ 5 mm (2 pts); score ≥ 3 = highly specific",
      "Wellens syndrome (Type A: biphasic T waves V2–V3; Type B: deep symmetric T-wave inversions V2–V3): LAD critical stenosis — pre-infarction pattern, pain-free patient should NOT undergo stress testing (will precipitate MI)",
      "De Winter T-waves: upsloping ST depression + tall peaked T-waves in V1–V6 with no classic STE = anterior STEMI equivalent (LAD occlusion), activate cath lab",
      "Posterior STEMI: ST depression + tall R waves in V1–V3 (mirror of STE in posterior leads) → confirm with posterior leads V7–V9 (STE ≥ 0.5 mm in V7–V9)",
      "Reciprocal changes: inferior STEMI (STE II/III/aVF + STD in I/aVL) confirm and localize territory",
    ],
    interpretationTip:
      "Never interpret STEMI EKG in isolation — always compare with old EKG if available. LBBB does NOT automatically = STEMI equivalent; use Sgarbossa to assess. Hyperkalemia mimics STEMI ('sine wave' EKG, peaked T's, wide QRS) — always check potassium. Aortic dissection can cause inferior STEMI (RCA ostium involvement) — CXR + clinical context before cath lab activation.",
    rotation: ["emergency-medicine", "internal-medicine"],
  },
  {
    id: "em-img-ct-head",
    modality: "CT",
    finding: "Non-Contrast CT Head — Intracranial Hemorrhage Patterns",
    suggestsDiagnosis: ["Subarachnoid hemorrhage", "Subdural hematoma", "Epidural hematoma", "Intracerebral hemorrhage"],
    keyFeatures: [
      "Acute blood on non-contrast CT = HYPERDENSE (bright white) — because hemoglobin is dense; subacute (1–3 weeks) = isodense (same as brain — easily missed); chronic (> 3 weeks) = hypodense (dark)",
      "Subarachnoid hemorrhage (SAH): hyperdense blood in basal cisterns (star-shaped), Sylvian fissures, sulci; Fisher grade I (no SAH) to IV (thick + IVH); classic cause: ruptured berry aneurysm; 'thunderclap headache' — worst headache of life",
      "Subdural hematoma (SDH): crescent-shaped hyperdensity that CROSSES suture lines (follows brain contour); bridging vein tear (traumatic or spontaneous in anticoagulated/elderly); acute SDH = bright; chronic = dark (hypodense); mixed = both (rebleed)",
      "Epidural hematoma (EDH): biconvex/lenticular hyperdensity that does NOT cross suture lines (limited by dural attachments at sutures); associated with temporal bone fracture + MMA tear; classic: lucid interval then rapid decline",
      "Intracerebral hemorrhage (ICH): hyperdense intraparenchymal blood; hypertensive hemorrhage most common in basal ganglia, thalamus, cerebellum, pons; edema ring around hemorrhage; volume = A × B × C / 2 (ABC/2 formula for ICH volume)",
      "Midline shift: > 5 mm = surgical emergency (SDH, EDH, large ICH); herniation signs: effacement of ipsilateral sulci, compression of cisterns",
    ],
    interpretationTip:
      "CT is highly sensitive for acute hemorrhage but misses 2–5% of SAH in the first 6 hours and 5–10% at 12 hours — if CT head is negative and SAH is suspected (thunderclap headache), LP is required (xanthochromia = bilirubin in CSF = pathognomonic for SAH, present within 2 hours, persists 2 weeks). CT without contrast is the FIRST imaging for stroke (to rule out hemorrhage before tPA) — do not order CT with contrast for acute stroke workup.",
    rotation: ["emergency-medicine", "internal-medicine"],
  },
  {
    id: "em-img-cxr-emergency",
    modality: "CXR",
    finding: "Emergency CXR — Critical Findings",
    suggestsDiagnosis: ["Tension pneumothorax", "Aortic dissection", "Pulmonary edema", "PE (Hampton's hump)", "Hemothorax"],
    keyFeatures: [
      "Tension PTX: absent/absent lung markings on one side, tracheal deviation AWAY, ipsilateral diaphragm depression, contralateral mediastinal shift — TREAT BEFORE CXR if hemodynamically unstable",
      "Widened mediastinum > 8 cm: aortic dissection until proven otherwise → emergent CTA chest/abdomen/pelvis; also: aortic aneurysm, hematoma, mediastinal mass, AP film artifactual widening",
      "Cardiomegaly (CTR > 0.5): chronic CHF, pericardial effusion; 'water bottle heart' silhouette = massive effusion",
      "Pulmonary edema: bat-wing/butterfly central opacification, Kerley B lines (1–2 cm perpendicular horizontal lines at lung bases = thickened interlobular septa), cephalization (upper lobe vessel prominence), pleural effusions, cardiomegaly",
      "Hampton's hump: wedge-shaped pleural-based density (apex toward hilum) = pulmonary infarction from PE; Westermark sign: oligemia/hyperlucency distal to PE (pruned vascular markings)",
      "Pneumonia: lobar consolidation (air bronchograms), aspiration (RLL most common), round pneumonia (children), interstitial infiltrates (atypical/viral)",
      "Hemothorax vs pleural effusion: effusion (meniscus sign, blunts costophrenic angle ≥ 200 mL); massive hemothorax (opaque hemithorax, mediastinal shift away)",
    ],
    interpretationTip:
      "Read every CXR in the same systematic order (ABCDE): A — Airway (trachea, carina, ETT position — tip 2–3 cm above carina at T4–T6 on CXR); B — Bones (fractures, lytic lesions); C — Cardiac (size, silhouette, mediastinum width); D — Diaphragm (free air under diaphragm = perforation, bowel gas pattern); E — Everything else (lungs, pleura, lines/tubes). AP portable films artifactually widen the mediastinum (magnification) — do not diagnose dissection from portable AP CXR alone.",
    rotation: ["emergency-medicine", "internal-medicine", "general-surgery"],
  },
  {
    id: "em-img-fast-exam",
    modality: "US",
    finding: "FAST Exam (Focused Assessment with Sonography in Trauma)",
    suggestsDiagnosis: ["Hemoperitoneum", "Cardiac tamponade", "Pneumothorax (eFAST)", "Hemothorax"],
    keyFeatures: [
      "RUQ view (Morrison's pouch): probe at right midaxillary line 8th–11th rib, coronal view — identifies liver, right kidney, hepatorenal space; anechoic (black) stripe = blood; diaphragm should be visible, assess for hemothorax above",
      "LUQ view (splenorenal recess): probe at left posterior axillary line 8th–11th rib — identifies spleen, left kidney; blood in splenorenal recess or above diaphragm (hemothorax)",
      "Suprapubic view: transverse and longitudinal through full bladder — identifies uterus (women) or prostate (men); free fluid posterior to bladder (Douglas pouch = most dependent in supine position)",
      "Cardiac view: subxiphoid (70°, probe angled toward left shoulder) OR parasternal long-axis — identify pericardial effusion (anechoic stripe > 1 cm); RV/LV size ratio (RV > LV = RV strain from PE or tension PTX)",
      "eFAST (extended) — bilateral lung: probe at 2nd–4th ICS MCL, longitudinal — identify pleural line (bright horizontal line); lung sliding (shimmering at pleural line = normal); absent lung sliding = PTX; M-mode: 'seashore sign' (granular below pleural line) = normal; 'stratosphere/barcode sign' = PTX",
      "Positive FAST + hemodynamic instability = OR immediately (do NOT get CT); positive FAST + stable = CT for injury characterization",
    ],
    interpretationTip:
      "The FAST exam is a SCREENING tool — it detects FREE FLUID but cannot identify solid organ injury without free fluid (grade I–II injuries may be FAST negative). Sensitivity for hemoperitoneum: RUQ 76%, LUQ 42%, suprapubic 59% — combined FAST sensitivity 73–88% for significant hemoperitoneum. A NEGATIVE FAST in an unstable patient does NOT exclude hemorrhage — retroperitoneal hemorrhage (pelvic fracture, renal injury) is FAST negative. The FAST exam can be learned in 1–2 months of focused training and is a core PA emergency medicine competency.",
    rotation: ["emergency-medicine", "general-surgery"],
  },
  {
    id: "em-img-ctpa",
    modality: "CT",
    finding: "CT Pulmonary Angiography (CTPA) — PE Findings",
    suggestsDiagnosis: ["Pulmonary embolism", "Saddle embolism", "Right heart strain"],
    keyFeatures: [
      "Filling defect: low-density (dark) filling defect within pulmonary artery lumen surrounded by contrast (bright) = thrombus; can be central (main PA), lobar, segmental, or subsegmental",
      "Saddle embolism: large filling defect straddling the main PA bifurcation (right + left main PA simultaneously) — high mortality, often hemodynamically unstable",
      "RV strain signs on CTPA (4-chamber view): RV:LV ratio > 0.9 = RV dilation/strain (submassive PE); interventricular septal bowing ('D-sign') = RV pressure overload pushing septum into LV",
      "McConnell's sign: RV free wall akinesis with preserved apical contractility — highly specific for PE (also seen on echo)",
      "Ancillary findings: pulmonary infarction (Hampton's hump — peripheral wedge-shaped consolidation), pleural effusion (blood), mosaic perfusion pattern",
      "Weiss and Waxman criteria for high-risk CTPA: main PA or bilateral PA involvement, PA obstruction index > 50%",
    ],
    interpretationTip:
      "CTPA requires IV contrast — check creatinine/eGFR before ordering (hold metformin, hydrate in CKD). Sensitivity > 95%, specificity > 95% for PE. Subsegmental PE (2–5% of scans): clinical significance uncertain, treatment individualized. Pregnancy: CTPA preferred over V/Q in most centers (V/Q acceptable but more often indeterminate in pregnancy; CTPA fetal radiation dose acceptable). Chronic PE vs acute: chronic PE shows eccentric intraluminal lesions, vessel recanalization, and web/stenosis; acute PE shows central/homogeneous filling defect. CTA cannot reliably assess for DVT — separate bilateral leg US if DVT suspected.",
    rotation: ["emergency-medicine", "internal-medicine"],
  },
];
