import type { Condition } from "@/types";

export const emergencyMedicineConditions: Condition[] = [
  {
    id: "em-stemi",
    name: "ST-Elevation Myocardial Infarction (STEMI)",
    icdCode: "I21.9",
    rotation: "emergency-medicine",
    category: "Cardiac Emergency",
    definition:
      "STEMI is a life-threatening acute myocardial infarction caused by complete, sustained occlusion of a coronary artery, resulting in transmural myocardial ischemia and necrosis. It is characterized by ST-segment elevation on EKG meeting diagnostic criteria and requires emergent reperfusion therapy within defined time windows.",
    diagnosticCriteria:
      "EKG: ST elevation ≥ 1 mm in ≥ 2 contiguous limb leads, OR ≥ 2 mm in ≥ 2 contiguous precordial leads. New LBBB in a patient with ischemic symptoms is treated as STEMI equivalent. Wellens syndrome (deep symmetric T-wave inversions in V2–V3 = LAD critical stenosis — pre-infarction pattern). De Winter T-waves (upsloping ST depression + tall peaked T-waves in V1–V6 = LAD occlusion without classic ST elevation). Posterior STEMI: prominent ST depression in V1–V3 + tall R waves → check posterior leads V7–V9 for ST elevation. Door-to-balloon time goal: < 90 minutes for primary PCI.",
    presentation: {
      chiefComplaint: [
        "Crushing, pressure-like, or squeezing chest pain radiating to left arm/jaw",
        "Diaphoresis, nausea, vomiting",
        "Dyspnea, palpitations",
        "Syncope or near-syncope",
        "Atypical: jaw pain, epigastric pain, back pain (posterior MI), or silent MI (diabetics, elderly, women)",
      ],
      associatedSymptoms: [
        "Diaphoresis (most predictive symptom of ACS)",
        "Nausea and vomiting (inferior MI — vagal response)",
        "Dyspnea from acute pulmonary edema (pump failure)",
        "Palpitations (VT/VF from myocardial irritability)",
        "Syncope (complete heart block in inferior MI, Bezold-Jarisch reflex)",
      ],
      demographics:
        "Men > 45 years, women > 55 years (post-menopausal); risk factors: HTN, DM, hyperlipidemia, smoking, family history (first-degree relative with CAD < 55 male, < 65 female), obesity, cocaine use (vasospasm in young patients).",
    },
    distinguishingFeatures:
      "Levine's sign (clenched fist over sternum while describing chest pain = classic MI gesture). Diaphoresis + pressure-type chest pain = 90% predictive for ACS. ST elevation + troponin rise = transmural infarction. Reciprocal ST depression (e.g., inferior STEMI: STE II/III/aVF + ST depression in I/aVL) confirms STEMI territory. Killip classification (I: no CHF, II: rales/S3, III: pulmonary edema, IV: cardiogenic shock) predicts prognosis.",
    redFlags: [
      "Hemodynamic instability (cardiogenic shock): BP < 90 systolic, HR > 100, cold/clammy extremities → emergent PCI + vasopressors + IABP",
      "New complete heart block or Mobitz II (inferior STEMI) → transcutaneous pacing",
      "VF or pulseless VT → defibrillate 200J immediately",
      "Mechanical complications (day 3–5 post-MI): papillary muscle rupture (acute severe MR, pulmonary edema), VSR (ventricular septal rupture — harsh holosystolic murmur + step-up in O2 saturation from RV to PA), free wall rupture (sudden death)",
      "STEMI with LBBB and negative Sgarbossa criteria — discuss with cardiology (may still be STEMI-equivalent)",
    ],
    mnemonics: [
      {
        name: "STEMI territories",
        content:
          "Inferior MI = II, III, aVF (RCA occlusion 85%, LCx 15%). Anterior MI = V1–V4 (LAD). Lateral MI = I, aVL, V5–V6 (LCx). Posterior MI = reciprocal changes V1–V3 (tall R, ST depression) → confirm V7–V9.",
      },
      {
        name: "Sgarbossa criteria (LBBB + STEMI)",
        content:
          "Concordant STE ≥ 1 mm (5 points) + Concordant ST depression ≥ 1 mm in V1–V3 (3 points) + Discordant STE ≥ 5 mm (2 points). Score ≥ 3 = STEMI equivalent (92% specific). Modified Sgarbossa: discordant STE/S ratio > 0.25 is more sensitive.",
      },
    ],
    pimpingQuestions: [
      "What is the door-to-balloon time goal for primary PCI in STEMI? (< 90 minutes from first medical contact)",
      "What does Wellens syndrome represent on EKG? (Deep symmetric T-wave inversions V2–V3 = critical LAD stenosis = 'pre-STEMI' warning — patient at high risk for anterior MI)",
      "Why does inferior STEMI often cause bradycardia? (RCA supplies SA and AV nodes in 85% of people — Bezold-Jarisch reflex causing vasovagal response)",
      "What is the most common cause of death in the first 24 hours of STEMI? (Ventricular fibrillation — treated with immediate defibrillation)",
    ],
  },
  {
    id: "em-stroke",
    name: "Acute Ischemic Stroke",
    icdCode: "I63.9",
    rotation: "emergency-medicine",
    category: "Neurological Emergency",
    definition:
      "Acute ischemic stroke is sudden neurological dysfunction caused by focal cerebral ischemia from arterial occlusion (thrombotic or embolic). It accounts for 87% of all strokes. Time-sensitive treatment with IV alteplase (tPA) within 4.5 hours and mechanical thrombectomy for large vessel occlusion (LVO) within 24 hours dramatically improves outcomes.",
    diagnosticCriteria:
      "Clinical diagnosis + neuroimaging. NIHSS (National Institutes of Health Stroke Scale): 0–42 points assessing 11 domains (consciousness, gaze, vision, facial palsy, motor arms/legs, limb ataxia, sensory, language, dysarthria, extinction/neglect). LVO suspected: NIHSS ≥ 6 + imaging evidence. CT head non-contrast first (rules out hemorrhage before tPA). CT angiography (CTA) head/neck for vessel occlusion assessment. MRI DWI (diffusion-weighted imaging) is more sensitive for early ischemia (restricted diffusion = acute stroke) but not required before tPA. tPA eligibility: symptom onset < 4.5 hours, no hemorrhage on CT, no absolute contraindications, BP < 185/110 mmHg (treat if higher before giving tPA).",
    presentation: {
      chiefComplaint: [
        "Sudden unilateral weakness or numbness (arm + leg = MCA; leg only = ACA)",
        "Sudden speech difficulty (aphasia = dominant hemisphere MCA; dysarthria)",
        "Sudden vision loss or diplopia (posterior circulation)",
        "Sudden severe headache ('thunderclap') — hemorrhagic stroke or SAH",
        "Sudden gait disturbance or balance loss (cerebellum or brainstem)",
      ],
      associatedSymptoms: [
        "Hemiplegia/hemiparesis (contralateral to stroke)",
        "Hemisensory loss",
        "Homonymous hemianopia (visual field cut, contralateral)",
        "Aphasia (Broca's = non-fluent, Wernicke's = fluent but nonsensical)",
        "Neglect (non-dominant parietal lobe)",
        "Nausea/vomiting, ataxia, diplopia, vertigo (posterior circulation — vertebrobasilar)",
      ],
      demographics:
        "Risk increases with age; mean age 70 years. Risk factors: AF (cardioembolic — most common cause in elderly), HTN (#1 modifiable risk factor), DM, hyperlipidemia, carotid stenosis, smoking, prior TIA/stroke. Young stroke (< 45): patent foramen ovale (PFO), hypercoagulable state, cervical artery dissection (neck pain + Horner's syndrome), cocaine, oral contraceptives.",
    },
    distinguishingFeatures:
      "HINTS exam (posterior stroke vs peripheral vertigo): Head Impulse (normal corrective saccade = CENTRAL — dangerous; abnormal catch-up saccade = peripheral vestibular, benign), Nystagmus (direction-changing = CENTRAL; unidirectional with fast phase away from lesion = peripheral), Test of Skew (vertical skew deviation = CENTRAL). A 'reassuring' HINTS (normal HI + direction-changing nystagmus + skew) suggests posterior stroke even with negative CT. TIA: same symptoms but complete resolution within 24 hours (most < 1 hour); ABCD2 score determines stroke risk and hospitalization.",
    redFlags: [
      "BP > 185/110 mmHg — must treat before tPA (labetalol or nicardipine to target < 185/110)",
      "NIHSS > 20 with basilar artery occlusion — mortality > 80% without thrombectomy; WAKE-UP trial: tPA safe if DWI-FLAIR mismatch (MRI-guided)",
      "Hemorrhagic transformation (10% of ischemic strokes) — symptoms worsen after initial improvement",
      "Malignant MCA syndrome (large MCA infarct + edema) — herniation risk at 24–96 hours; hemicraniectomy within 48 hours reduces mortality",
      "Posterior circulation stroke mimicking benign vertigo — HINTS exam critical; missed posterior stroke is a common medico-legal case",
    ],
    mnemonics: [
      {
        name: "tPA absolute contraindications",
        content:
          "STROKE: Stroke/TIA in prior 3 months, Thrombocytopenia (< 100K) or coagulopathy, Recent major surgery/trauma < 14 days, Oral anticoagulants with elevated INR/levels, Known intracranial hemorrhage ever, Elevated BP > 185/110 unresponsive to treatment. Additional: glucose < 50 or > 400 (correct first), active internal bleeding, intracranial neoplasm/AVM/aneurysm.",
      },
      {
        name: "FAST stroke recognition",
        content:
          "Face drooping, Arm weakness, Speech difficulty, Time to call 911. Cincinnati Prehospital Stroke Scale: facial droop + arm drift + abnormal speech = high sensitivity for stroke.",
      },
    ],
    pimpingQuestions: [
      "What is the tPA dosing for ischemic stroke? (0.9 mg/kg IV, max 90 mg total; 10% as IV bolus over 1 minute, 90% as infusion over 60 minutes)",
      "What is the DAWN trial window for mechanical thrombectomy? (6–24 hours from last known well for LVO with clinical-imaging mismatch — expanded window with CT perfusion)",
      "Posterior circulation stroke classic triad? (Vertigo + diplopia + ataxia — 'crossed findings': ipsilateral cranial nerve deficits + contralateral limb findings)",
      "What is the most common cardiac etiology of embolic stroke? (Atrial fibrillation — cardioembolic stroke, largest LAA thrombus, often large cortical infarction)",
    ],
  },
  {
    id: "em-pe",
    name: "Pulmonary Embolism (PE)",
    icdCode: "I26.99",
    rotation: "emergency-medicine",
    category: "Cardiopulmonary Emergency",
    definition:
      "Pulmonary embolism is obstruction of the pulmonary arterial circulation, most commonly by thrombus from deep venous thrombosis (DVT). PE ranges from subsegmental (incidentally found, controversial treatment) to massive (hemodynamically unstable) and represents a spectrum requiring risk-stratified management.",
    diagnosticCriteria:
      "Wells PE criteria (pretest probability): prior DVT/PE (+1.5), HR > 100 (+1.5), recent surgery/immobilization (+1.5), clinical signs of DVT (+3), PE most likely diagnosis (+3), hemoptysis (+1), malignancy (+1). Score ≤ 1 = low probability; 2–6 = moderate; > 6 = high. PERC rule (excludes PE without d-dimer if ALL 8 negative): age < 50, HR < 100, SpO2 ≥ 95%, no unilateral leg swelling, no hemoptysis, no recent surgery/trauma, no prior DVT/PE, no exogenous estrogen. sPESI score: age > 80 (1), cancer (1), chronic cardiopulmonary disease (1), HR ≥ 110 (1), SBP < 100 (1), SpO2 < 90% (1). Score 0 = low-risk (consider outpatient). CTPA: filling defect in pulmonary arteries (sensitivity > 95%). RV:LV ratio > 0.9 on 4-chamber CT view = RV strain (submassive PE).",
    presentation: {
      chiefComplaint: [
        "Sudden pleuritic chest pain (worse with inspiration)",
        "Dyspnea at rest or on exertion",
        "Hemoptysis (pulmonary infarction)",
        "Syncope or near-syncope (massive PE, obstruction of cardiac output)",
        "Tachycardia (most common vital sign abnormality)",
      ],
      associatedSymptoms: [
        "Tachycardia (most sensitive vital sign; HR > 100 in 40%)",
        "Hypoxemia (A-a gradient widened)",
        "Hypotension (massive PE — SBP < 90 or drop > 40 mmHg)",
        "Pleuritic chest pain ± friction rub (infarction)",
        "Signs of DVT: unilateral calf swelling, erythema, warmth",
        "Anxiety and sense of impending doom",
      ],
      demographics:
        "Virchow's triad: hypercoagulability (OCP, pregnancy, malignancy, thrombophilia — Factor V Leiden, prothrombin mutation), venous stasis (immobilization, long travel, paralysis), endothelial injury (surgery, trauma, prior DVT). DVT/PE most common in hospitalized patients. Incidental PE increasingly found on staging CTs for malignancy.",
    },
    distinguishingFeatures:
      "Classic triad (only in 20%): dyspnea + pleuritic chest pain + hemoptysis. EKG most common finding: sinus tachycardia. S1Q3T3 (S wave lead I, Q wave lead III, T inversion lead III) is classic but only in 20%. Right heart strain on EKG: right axis deviation, RBBB, T inversions V1–V4. McConnell's sign on echo: RV free wall akinesis with preserved apical contractility (highly specific for PE). Saddle embolism: clot at main PA bifurcation — high mortality, consider thrombolysis.",
    redFlags: [
      "Massive PE: SBP < 90 mmHg or > 40 mmHg drop — systemic thrombolysis (alteplase 100 mg IV over 2 hours) if no contraindications; surgical embolectomy or catheter-directed therapy if thrombolysis contraindicated",
      "Submassive PE: hemodynamically stable + RV dysfunction on imaging/echo — catheter-directed thrombolysis (CDT) consideration, close monitoring in ICU",
      "Pulseless electrical activity (PEA) from massive PE — consider empiric thrombolysis in arrest",
      "High-risk bleeding (recent surgery, hemorrhagic stroke) — catheter-directed therapy or surgical embolectomy preferred over systemic thrombolysis",
      "Pregnancy + PE: CTPA preferred over V/Q for diagnosis (V/Q acceptable but often indeterminate); anticoagulate with LMWH throughout pregnancy (not warfarin first trimester — teratogenic; not DOACs — no safety data)",
    ],
    mnemonics: [
      {
        name: "PERC Rule (all must be negative)",
        content:
          "Age < 50, Pulse < 100, pO2 (SpO2) ≥ 95%, no Prior DVT/PE, no Recent surgery/trauma (within 4 weeks), no unilateral leg swelling, no Estrogen use, no Hemoptysis. If ALL 8 criteria met → PE effectively excluded without d-dimer in low pretest probability patients.",
      },
      {
        name: "Anticoagulation for PE",
        content:
          "DOACs preferred for most: rivaroxaban 15 mg BID × 21 days then 20 mg daily; apixaban 10 mg BID × 7 days then 5 mg BID. LMWH + warfarin (target INR 2–3) if DOAC contraindicated. Heparin infusion if unstable/thrombolysis anticipated. Duration: provoked (reversible risk factor) 3 months; unprovoked 3–6 months minimum (consider indefinite); cancer-associated VTE: LMWH or rivaroxaban/apixaban preferred over warfarin.",
      },
    ],
    pimpingQuestions: [
      "What is the PERC rule and when is it applied? (Applied only to low pretest probability patients — if all 8 criteria negative, no further workup for PE needed)",
      "What EKG finding is classically associated with PE? (S1Q3T3 and sinus tachycardia, but tachycardia alone is most common)",
      "When is systemic thrombolysis indicated for PE? (Massive PE with hemodynamic instability — SBP < 90 mmHg or drop > 40 mmHg — if no contraindications)",
      "What is McConnell's sign? (RV free wall akinesis with preserved apical contractility on echo — highly specific for acute PE)",
    ],
  },
  {
    id: "em-sepsis",
    name: "Sepsis and Septic Shock",
    icdCode: "A41.9",
    rotation: "emergency-medicine",
    category: "Infectious/Critical Care Emergency",
    definition:
      "Sepsis (Sepsis-3 definition, 2016): life-threatening organ dysfunction caused by dysregulated host response to infection, defined as SOFA score ≥ 2 above baseline. Septic shock: subset of sepsis with circulatory and cellular/metabolic dysfunction (vasopressor requirement to maintain MAP ≥ 65 mmHg AND serum lactate > 2 mmol/L despite adequate fluid resuscitation) — mortality > 40%.",
    diagnosticCriteria:
      "qSOFA (quick SOFA): ≥ 2 of (RR ≥ 22, altered mentation, SBP ≤ 100) = suspect sepsis, evaluate SOFA. SOFA score: PaO2/FiO2 (respiratory), platelets (hematologic), bilirubin (hepatic), MAP/vasopressors (cardiovascular), Glasgow Coma Scale (neurologic), creatinine (renal) — each 0–4, total 0–24. SIRS criteria (older, now replaced): ≥ 2 of (Temp > 38°C or < 36°C, HR > 90, RR > 20, WBC > 12K or < 4K or > 10% bands). Surviving Sepsis Campaign 1-Hour Bundle: (1) Measure lactate (remeasure if initial > 2), (2) Blood cultures × 2 before antibiotics, (3) Broad-spectrum IV antibiotics, (4) 30 mL/kg IV crystalloid for hypotension or lactate ≥ 4, (5) Vasopressors for persistent hypotension (MAP < 65).",
    presentation: {
      chiefComplaint: [
        "Fever, rigors, or hypothermia (worse prognosis)",
        "Altered mental status — confusion, agitation (most common presentation in elderly)",
        "Tachycardia and hypotension",
        "Dyspnea (sepsis-induced respiratory failure)",
        "Signs of infection source: cough (pneumonia), dysuria (UTI), abdominal pain (peritonitis), skin redness (cellulitis)",
      ],
      associatedSymptoms: [
        "Warm/flushed skin (early distributive shock — vasodilation); cool/mottled skin (late, decompensated)",
        "Oliguria (renal hypoperfusion)",
        "Altered mentation (cerebral hypoperfusion or direct CNS infection)",
        "Nausea, vomiting, diarrhea",
        "Petechiae/purpura (meningococcemia, DIC)",
        "Jaundice (hepatic dysfunction or cholangitis)",
      ],
      demographics:
        "Most common in elderly (> 65), immunocompromised (HIV, chemotherapy, steroids, splenectomy), very young (< 1 year), diabetics, patients with indwelling lines/catheters. Most common sources: respiratory (35%), urinary (25%), intra-abdominal (20%), bloodstream (primary bacteremia — especially with lines).",
    },
    distinguishingFeatures:
      "Distributive shock (low SVR, high CO early): warm extremities, bounding pulse, high cardiac output — differentiates from cardiogenic shock (cold extremities, low CO). Cryptic septic shock: lactate > 4 mmol/L despite normal BP — meets criteria for septic shock without overt hypotension. Serial lactate monitoring: clearance ≥ 10% at 2 hours = treatment response goal (associated with improved survival). Procalcitonin: useful for de-escalation decisions (decline ≥ 80% from peak = consider discontinuing antibiotics).",
    redFlags: [
      "Lactate > 4 mmol/L (even with normal BP = cryptic septic shock — treat aggressively)",
      "Purpuric rash + fever = meningococcemia until proven otherwise — ceftriaxone IV IMMEDIATELY",
      "Neutropenic fever (ANC < 500): immediate cefepime or piperacillin-tazobactam + vancomycin",
      "No improvement in 30 minutes after initial fluid resuscitation → start norepinephrine, reassess source control",
      "MRSA risk factors (prior MRSA, healthcare-associated, skin/soft tissue infection) → add vancomycin",
    ],
    mnemonics: [
      {
        name: "Vasopressor hierarchy in septic shock",
        content:
          "Norepinephrine FIRST (α1 > β1 — vasoconstriction + mild inotropy; most evidence, reduces arrhythmia vs dopamine). Add vasopressin 0.03 units/min as second agent (catecholamine-sparing, reduces NE requirements — VASST trial: benefit in less severe shock). Epinephrine: third-line (increases lactate, may obscure resuscitation monitoring). Dopamine: NOT preferred (more arrhythmias — SOAP II trial). Phenylephrine: if tachyarrhythmia (pure α1, no β effect).",
      },
      {
        name: "Sepsis 1-hour bundle ABCDE",
        content:
          "A — Assess lactate; B — Blood cultures × 2; C — Cover with antibiotics (broad-spectrum within 1 hour); D — Drip fluids (30 mL/kg crystalloid); E — Elevate BP (vasopressors if MAP < 65 after fluid).",
      },
    ],
    pimpingQuestions: [
      "What is the Sepsis-3 definition of septic shock? (Sepsis + vasopressor requirement to maintain MAP ≥ 65 + lactate > 2 mmol/L despite adequate resuscitation — mortality > 40%)",
      "What is the first-line vasopressor for septic shock? (Norepinephrine — superior to dopamine in SOAP II trial, lower arrhythmia rate)",
      "Why is lactate important in sepsis even when BP is normal? (Lactate > 4 = cryptic septic shock — tissue dysoxia without overt hypotension; associated with same mortality as overt shock)",
      "What is the target of the 1-hour sepsis bundle? (Blood cultures, antibiotics, lactate measurement, fluid 30 mL/kg, vasopressors if needed — all within 1 hour of sepsis recognition)",
    ],
  },
  {
    id: "em-anaphylaxis",
    name: "Anaphylaxis",
    icdCode: "T78.2XXA",
    rotation: "emergency-medicine",
    category: "Allergic Emergency",
    definition:
      "Anaphylaxis is a severe, potentially life-threatening systemic hypersensitivity reaction involving multiple organ systems. Most cases are IgE-mediated (Type I hypersensitivity) causing massive mast cell degranulation with histamine, leukotrienes, and tryptase release. Non-IgE mechanisms (anaphylactoid) also occur (radiocontrast media, NSAIDs, aspirin — direct mast cell activation).",
    diagnosticCriteria:
      "Clinical diagnosis — one of three criteria: (1) Acute onset illness with skin/mucosal involvement + either respiratory compromise OR hypotension/end-organ dysfunction; (2) ≥ 2 of the following minutes-hours after allergen exposure: skin/mucosal involvement, respiratory compromise, hypotension, or GI symptoms; (3) Reduced BP after exposure to known allergen. Common triggers: food (peanuts, tree nuts, shellfish, fish, milk, eggs — #1 in children), medications (beta-lactam antibiotics #1, aspirin, NSAIDs, contrast dye), insect stings (Hymenoptera), latex, idiopathic.",
    presentation: {
      chiefComplaint: [
        "Skin: urticaria (hives), angioedema, flushing, pruritus",
        "Respiratory: throat tightness, stridor (laryngeal edema), wheezing (bronchospasm), dyspnea",
        "Cardiovascular: hypotension, tachycardia, syncope",
        "GI: nausea, vomiting, crampy abdominal pain, diarrhea",
        "Neurological: anxiety, sense of impending doom, altered consciousness",
      ],
      associatedSymptoms: [
        "Urticaria in 90% of cases (absence does NOT rule out anaphylaxis — 'silent anaphylaxis')",
        "Stridor and hoarseness (angioedema of larynx — life-threatening airway obstruction)",
        "Biphasic anaphylaxis: recurrence of symptoms 4–12 hours after initial reaction (in 20%)",
        "Rhinorrhea, lacrimation, metallic taste in mouth (early symptoms)",
        "Pallor, cyanosis, shock (cardiovascular collapse — rare early, common late without treatment)",
      ],
      demographics:
        "Any age; prior mild reaction does NOT predict severity of next reaction. Asthma + anaphylaxis = higher risk of severe bronchospasm. Beta-blocker use: impairs epinephrine response and causes paradoxical bradycardia — may need glucagon 1 mg IV. ACEi use: increases risk of angioedema (bradykinin-mediated — does NOT respond to epinephrine; may need icatibant or fresh frozen plasma).",
    },
    distinguishingFeatures:
      "Vasovagal syncope: bradycardia (anaphylaxis = tachycardia), no urticaria, no angioedema, resolves with supine position. Carcinoid syndrome: flushing without urticaria, diarrhea, wheezing — elevated urine 5-HIAA. Kounis syndrome: anaphylaxis-induced myocardial ischemia (mast cells in coronary arteries → vasospasm + plaque rupture) — chest pain + EKG changes during anaphylaxis. Samter's triad: aspirin-exacerbated respiratory disease (asthma + nasal polyps + aspirin sensitivity — via COX-1 inhibition increasing leukotriene production).",
    redFlags: [
      "Stridor, hoarseness, or inability to swallow — laryngeal edema, impending airway loss — early intubation (before complete obstruction makes intubation impossible)",
      "Hypotension not responding to epinephrine — push IV fluids aggressively (1–2L NS), second epinephrine dose, norepinephrine drip",
      "Patient on beta-blockers — epinephrine may be less effective; give glucagon 1 mg IV (activates adenyl cyclase independently of beta receptors)",
      "Biphasic reaction — observe all anaphylaxis patients ≥ 4–6 hours (some guidelines: 8–24 hours for severe reactions); discharge with epinephrine auto-injector × 2",
      "ACEi-associated angioedema — does NOT respond to epinephrine/antihistamines/steroids; use icatibant (bradykinin B2 receptor antagonist) or FFP",
    ],
    mnemonics: [
      {
        name: "Anaphylaxis treatment hierarchy",
        content:
          "E — Epinephrine 0.3 mg (0.01 mg/kg in children, max 0.5 mg) IM anterolateral thigh IMMEDIATELY (NOT IV unless cardiac arrest — IV epinephrine causes fatal hypertension); P — Position supine + legs elevated (or sit up if respiratory distress); I — IV access + fluids; N — Not antihistamines first (H1 + H2 blockers only adjuncts — do NOT replace epinephrine); E — Establish airway; P — Prednisolone (steroids reduce biphasic reaction — evidence limited but commonly used); H — Home with epinephrine auto-injector × 2 + allergist referral.",
      },
    ],
    pimpingQuestions: [
      "What is the ONLY first-line treatment for anaphylaxis? (Epinephrine 0.3 mg IM anterolateral thigh — nothing else is equivalent; antihistamines and steroids are adjuncts only)",
      "Why can anaphylaxis occur without urticaria? (Urticaria absent in 10% — 'silent anaphylaxis' — do not dismiss anaphylaxis due to absence of skin findings if other criteria are met)",
      "What is Kounis syndrome? (Anaphylaxis triggering acute coronary syndrome via mast cell degranulation in coronary arteries — EKG changes during anaphylaxis warrant cardiac workup)",
      "What is the treatment for ACEi-related angioedema? (Icatibant (bradykinin B2 antagonist) or FFP — does NOT respond to epinephrine or antihistamines; hold ACEi permanently)",
    ],
  },
  {
    id: "em-dka",
    name: "Diabetic Ketoacidosis (DKA)",
    icdCode: "E11.10",
    rotation: "emergency-medicine",
    category: "Endocrine Emergency",
    definition:
      "DKA is a life-threatening metabolic emergency defined by the triad of: (1) hyperglycemia (glucose > 250 mg/dL, though can be < 250 in euglycemic DKA — SGLT2 inhibitor-associated or pregnancy), (2) metabolic acidosis (pH < 7.3, HCO3 < 18 mEq/L), and (3) ketonemia/ketonuria. It results from absolute or relative insulin deficiency causing lipolysis and ketogenesis. Most common in Type 1 DM but can occur in Type 2 (especially under severe stress, illness, or with insulin omission).",
    diagnosticCriteria:
      "Diagnostic triad: glucose > 250 (euglycemic DKA: < 250 + ketosis + SGLT2 inhibitor use or pregnancy), pH < 7.3, HCO3 < 18, positive serum ketones. Anion gap (AG) = Na − (Cl + HCO3), normal 8–12; elevated AG metabolic acidosis in DKA. Corrected Na = measured Na + 1.6 × [(glucose − 100) / 100]. Beta-hydroxybutyrate (β-OHB) is predominant ketone (urine ketones measure acetoacetate — may underestimate severity). Severity: Mild (pH 7.25–7.30, AG > 10, HCO3 15–18); Moderate (pH 7.00–7.24, AG > 12, HCO3 10–14); Severe (pH < 7.0, AG > 12, HCO3 < 10, obtunded).",
    presentation: {
      chiefComplaint: [
        "Polyuria, polydipsia, nocturia (hyperglycemia osmotic diuresis)",
        "Nausea, vomiting, abdominal pain (especially in children — can mimic acute abdomen)",
        "Altered mental status, fatigue, weakness",
        "Kussmaul respirations (deep, rapid breathing to compensate for metabolic acidosis)",
        "Fruity-smelling breath (acetone from ketone body metabolism)",
      ],
      associatedSymptoms: [
        "Dehydration signs (dry mucous membranes, decreased skin turgor, tachycardia, orthostasis)",
        "Weight loss (days to weeks)",
        "Precipitating illness symptoms: fever (infection — most common precipitant), polyuria (new or worsening diabetes)",
        "Blurred vision (osmotic lens changes from hyperglycemia)",
      ],
      demographics:
        "Type 1 DM (absolute insulin deficiency) most common. Type 2 DM under severe metabolic stress. New diagnosis T1DM in young patients (DKA as first presentation in 30%). Precipitants: infection (most common — 50%: UTI, pneumonia), insulin omission/pump failure, new onset T1DM, MI, cocaine use, SGLT2 inhibitors (euglycemic DKA).",
    },
    distinguishingFeatures:
      "HHS (Hyperosmolar Hyperglycemic State): glucose > 600, osmolality > 320, minimal ketosis (pH > 7.30), profound dehydration, more common in elderly Type 2 DM. DKA vs HHS: DKA = ketoacidosis + glucose 250–800; HHS = no significant ketosis + glucose 600–1,800 + severe hyperosmolarity. Delta-delta (delta AG / delta HCO3): if > 2, concurrent metabolic alkalosis (vomiting, diuretics); if < 1, concurrent non-gap metabolic acidosis (normal saline-induced hyperchloremia).",
    redFlags: [
      "Potassium < 3.5 mEq/L before starting insulin — must replace K+ to ≥ 3.5 before giving insulin (insulin drives K+ intracellularly → life-threatening hypokalemia and cardiac arrhythmias)",
      "Cerebral edema (pediatric DKA) — headache + altered mentation 4–6 hours into treatment; treat with mannitol 0.5–1 g/kg IV; mortality 20–40%; risk factors: younger age, new diagnosis, aggressive fluid repletion",
      "pH < 7.0 or bicarbonate consideration — bicarbonate use controversial in DKA (no benefit in moderate DKA; consider in pH < 6.9 with hemodynamic instability)",
      "Euglycemic DKA (SGLT2 inhibitor) — glucose may be < 200; index of suspicion required; stop SGLT2i, glucose infusion + insulin",
      "Phosphate < 1 mg/dL — replace phosphate to prevent respiratory muscle weakness",
    ],
    mnemonics: [
      {
        name: "DKA management FLUID-K+",
        content:
          "F — Fluids: 1L NS/hr × 2 hours (or 0.9% NS 15–20 mL/kg in first hour), then 0.45% NS at 250–500 mL/hr; switch to D5W in fluids when glucose < 250; L — Lytes: check K+, Mg, Phos q2–4h; U — Under insulin: DO NOT start insulin until K+ ≥ 3.5 (replace first); I — Insulin: regular insulin 0.1 units/kg/hr IV drip (no bolus); D — Dextrose: add D5 or D10 to fluids when glucose < 250 (maintain glucose 150–250 until AG closed); K+ — Potassium: give 20–40 mEq/hr KCl if K+ 3.5–5.0; hold insulin if K+ < 3.5.",
      },
      {
        name: "MUDPILES (elevated AG metabolic acidosis)",
        content:
          "Methanol, Uremia, DKA, Propylene glycol, Iron/Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates. Also: SLUMPED — Salicylates, Lactic acidosis, Uremia, Methanol, Propylene glycol/Paraldehyde, Ethylene glycol/Ethanol (starvation or AKA), DKA.",
      },
    ],
    pimpingQuestions: [
      "What is the single most dangerous electrolyte abnormality to check before starting insulin in DKA? (Potassium — must be ≥ 3.5 before insulin; insulin drives K+ intracellularly causing potentially fatal hypokalemia)",
      "When do you add dextrose to IV fluids in DKA management? (When glucose falls below 250 mg/dL — prevents hypoglycemia while anion gap continues to close; close AG before stopping insulin)",
      "What is euglycemic DKA and what causes it? (DKA with glucose < 250 mg/dL — caused by SGLT2 inhibitors [empagliflozin, canagliflozin] by increasing urinary glucose excretion; also seen in pregnancy)",
      "What complication of DKA treatment is most feared in pediatrics? (Cerebral edema — occurs 4–6 hours into treatment; treat with mannitol; risk factors: age < 5, new-onset DM, rapid fluid repletion)",
    ],
  },
  {
    id: "em-hypertensive-emergency",
    name: "Hypertensive Emergency",
    icdCode: "I16.1",
    rotation: "emergency-medicine",
    category: "Cardiovascular Emergency",
    definition:
      "Hypertensive emergency is defined as severely elevated blood pressure (typically > 180/120 mmHg) with evidence of acute target organ damage (TOD). It is distinguished from hypertensive urgency (BP > 180/120 without TOD) which can be managed with oral agents and close outpatient follow-up. Target organ damage determines the clinical syndrome and directs specific antihypertensive choice.",
    diagnosticCriteria:
      "Severely elevated BP (> 180/120 mmHg) + evidence of end-organ damage. Common hypertensive emergency syndromes: (1) Hypertensive encephalopathy (headache, confusion, papilledema, seizures); (2) Aortic dissection (sudden tearing back/chest pain, pulse differential); (3) Acute pulmonary edema (dyspnea, rales); (4) Acute coronary syndrome; (5) Acute kidney injury (creatinine rise); (6) Hemorrhagic stroke; (7) Preeclampsia/eclampsia; (8) Hypertensive nephropathy; (9) Catecholamine excess (pheochromocytoma, cocaine — use phentolamine; DO NOT use beta-blocker alone — unmasks alpha-agonism → paradoxical BP increase). MAP reduction target: reduce by no more than 25% in first hour, then to 160/100 over next 2–6 hours.",
    presentation: {
      chiefComplaint: [
        "Severe headache ('worst headache') — hypertensive encephalopathy or hemorrhagic stroke",
        "Tearing chest/back pain — aortic dissection",
        "Dyspnea — acute pulmonary edema",
        "Visual changes — papilledema, retinal hemorrhages, blurred vision",
        "Neurological deficits — stroke, encephalopathy",
      ],
      associatedSymptoms: [
        "Nausea and vomiting (elevated ICP from hypertensive encephalopathy)",
        "Chest pain (ACS or aortic dissection)",
        "Epistaxis (dilated nasal vessels — does not indicate HTN emergency alone)",
        "Anxiety, tremor, diaphoresis (catecholamine excess — pheochromocytoma or cocaine)",
        "Oliguria, hematuria (hypertensive nephropathy)",
      ],
      demographics:
        "History of chronic hypertension (most common) — non-adherence to antihypertensives, new medication interaction. Cocaine/stimulant use (young patients). Renovascular hypertension (renal artery stenosis). Pheochromocytoma (paroxysmal HTN + headache + diaphoresis + palpitations). Preeclampsia (pregnant women ≥ 20 weeks).",
    },
    distinguishingFeatures:
      "Aortic dissection: BP differential between arms > 20 mmHg, pulse deficit, widened mediastinum on CXR, confirmed by CTA chest/abdomen/pelvis. Agent of choice: IV labetalol or esmolol (HR control) + sodium nitroprusside. Target HR < 60 and SBP < 120. Hypertensive encephalopathy (PRES — posterior reversible encephalopathy syndrome): CT/MRI shows posterior white matter edema (occipital/parietal), symptoms reverse with BP reduction. Cocaine/amphetamine: alpha-adrenergic surge — benzodiazepines first-line; phentolamine (alpha-blocker); AVOID beta-blockers alone (phenytolamine + labetalol combination acceptable).",
    redFlags: [
      "Aortic dissection with suspected Type A (ascending) — emergent cardiothoracic surgery (NOT thrombolysis, NOT anticoagulation alone)",
      "Hypertensive emergency in pregnancy — magnesium for seizure prophylaxis, labetalol/hydralazine for acute BP control (NO nitroprusside — CN toxicity to fetus; NO ACEi/ARBs — teratogenic)",
      "Acute ischemic stroke with hypertension — DO NOT aggressively lower BP (BP may be compensatory for penumbra perfusion); lower only if > 220/120 (no tPA) or to < 185/110 before tPA",
      "Sublingual nifedipine — ABSOLUTELY CONTRAINDICATED (unpredictable rapid BP drop → stroke, MI, death; removed from market in US for this use)",
      "Renal failure from hypertensive nephropathy — avoid IV contrast; fenoldopam (dopamine D1 agonist) increases renal blood flow — useful in renal hypertensive emergency",
    ],
    mnemonics: [
      {
        name: "IV antihypertensives by syndrome",
        content:
          "Labetalol (α+β blocker): most HTN emergencies, aortic dissection (with nitroprusside), stroke (to get below 185/110 for tPA). Nicardipine (Ca channel blocker): hypertensive encephalopathy, perioperative HTN, stroke. Clevidipine (Ca channel blocker, ultra-short acting): OR/ICU use, aortic dissection adjunct. Nitroprusside: most severe HTN; concern for CN toxicity with prolonged use (> 72h) especially renal failure; must monitor thiocyanate. Hydralazine: preeclampsia. Phentolamine: pheochromocytoma, cocaine. Fenoldopam: renal-protective, dopamine D1 agonist.",
      },
    ],
    pimpingQuestions: [
      "How much should MAP be reduced in the first hour of hypertensive emergency? (No more than 25% reduction in first hour — rapid reduction can cause watershed infarction)",
      "What antihypertensive is absolutely contraindicated in hypertensive emergency? (Sublingual nifedipine — unpredictable and precipitous BP drop associated with stroke and MI)",
      "Why must you AVOID beta-blocker monotherapy in cocaine-induced hypertensive emergency? (Unopposed alpha-adrenergic stimulation causes paradoxical worsening hypertension — use benzodiazepines first, then phentolamine or combined alpha/beta-blocker like labetalol)",
      "What is PRES syndrome? (Posterior Reversible Encephalopathy Syndrome — hypertensive emergency with posterior white matter edema on MRI, causing headache, seizures, vision changes, confusion; reverses with BP control)",
    ],
  },
  {
    id: "em-appendicitis",
    name: "Acute Appendicitis",
    icdCode: "K37",
    rotation: "emergency-medicine",
    category: "Surgical Emergency",
    definition:
      "Acute appendicitis is inflammation of the vermiform appendix, most commonly caused by luminal obstruction (fecalith, lymphoid hyperplasia from infection, foreign body) leading to bacterial overgrowth, ischemia, and perforation. It is the most common cause of acute abdominal pain requiring emergent surgery. Peak incidence: 10–30 years of age.",
    diagnosticCriteria:
      "Alvarado score (MANTRELS): Migration of pain to RLQ (1), Anorexia (1), Nausea/Vomiting (1), Tenderness RLQ (2), Rebound tenderness (1), Elevated temperature > 37.3°C (1), Leukocytosis > 10K (2), Left shift/neutrophilia (1) — max 10 points. Score ≤ 4: low risk (observe/discharge); 5–6: intermediate (CT); 7–10: high risk (surgical consultation, OR). CT abdomen/pelvis with IV contrast: sensitivity 94–98%, specificity 95%; diameter > 6 mm, periappendiceal fat stranding, fecolith, free fluid, perforation signs (extraluminal air/phlegmon). US (first-line in children and pregnant women): non-compressible appendix > 6 mm, echogenic peri-appendiceal fat. MRI: preferred in pregnancy (avoids radiation — safe in all trimesters).",
    presentation: {
      chiefComplaint: [
        "Periumbilical pain migrating to RLQ (McBurney's point — 1/3 from ASIS to umbilicus)",
        "Anorexia (extremely sensitive — 90%)",
        "Nausea and vomiting (after pain onset)",
        "Low-grade fever",
        "Pain worsened by movement (peritoneal signs)",
      ],
      associatedSymptoms: [
        "Leukocytosis (most common lab finding — WBC 10,000–15,000; > 18,000 suggests perforation)",
        "Anorexia (most sensitive symptom for appendicitis)",
        "Rebound tenderness at McBurney's point",
        "Perforation signs: sudden pain relief followed by diffuse peritonitis",
        "Diarrhea or dysuria (pelvic appendix — atypical presentation)",
        "Pregnancy: appendix displaced superiorly → RUQ pain in third trimester (difficult diagnosis)",
      ],
      demographics:
        "Most common 10–30 years; slight male predominance. Lifetime risk: 7–8% (8% males, 7% females). Highest perforation risk: very young (< 5 years — 50% perforated at diagnosis), elderly (> 70 years — 30–50% perforated), and immunocompromised patients (atypical presentation).",
    },
    distinguishingFeatures:
      "Psoas sign: pain with right hip extension (retrocecal appendix). Obturator sign: pain with right hip internal rotation (pelvic appendix). Rovsing's sign: RLQ pain with LLQ pressure (peritoneal irritation). Markle test: heel-drop jar — worsens peritoneal pain. Non-operative management (antibiotics-first approach): APPAC trial (Finland) — IV antibiotics (ertapenem) vs appendectomy for uncomplicated appendicitis — 72% success rate at 1 year without surgery; however, 20% recurrence rate and 40% eventual appendectomy. Patient selection crucial: no fecalith (fecalith = high recurrence risk), no perforation, no abscess.",
    redFlags: [
      "Perforated appendicitis: diffuse peritonitis (rigid abdomen, rebound throughout), high fever > 39°C, WBC > 18,000 → emergent appendectomy (laparoscopic)",
      "Appendiceal abscess/phlegmon: contained perforation — CT-guided drainage + IV antibiotics (interval appendectomy in 6–8 weeks)",
      "Pregnancy + appendicitis: MRI preferred for diagnosis; laparoscopic appendectomy safe in all trimesters; missed appendicitis in pregnancy = fetal loss",
      "Elderly: presentation atypical (minimal pain, minimal fever), high perforation rate — CT liberally",
      "Pylephlebitis: septic thrombophlebitis of portal vein from appendicitis — liver abscesses, bacteremia, very high mortality",
    ],
    mnemonics: [
      {
        name: "Alvarado score MANTRELS",
        content:
          "M — Migration (periumbilical to RLQ) = 1; A — Anorexia = 1; N — Nausea/Vomiting = 1; T — Tenderness RLQ = 2; R — Rebound tenderness = 1; E — Elevated temperature = 1; L — Leukocytosis = 2; S — Shift to left (neutrophilia) = 1. Total max 10. Score ≥ 7 = high probability, surgical consult.",
      },
    ],
    pimpingQuestions: [
      "What is McBurney's point? (Junction of medial 1/3 and lateral 2/3 of line between right ASIS and umbilicus — point of maximal tenderness in appendicitis)",
      "Why does appendicitis pain start periumbilical then migrate to RLQ? (Visceral pain from appendix distension = periumbilical via T10; once parietal peritoneum is irritated = somatic RLQ pain from parietal branches)",
      "What is the APPAC trial significance? (Antibiotic-first (ertapenem) vs appendectomy for uncomplicated appendicitis — 72% avoided surgery at 1 year, suggesting antibiotics are a safe initial option for selected patients)",
      "Which appendicitis finding on CT mandates immediate surgery (cannot do antibiotics first)? (Fecalith — associated with very high recurrence and perforation risk; also: free perforation, abscess needing drainage, appendicolith in lumen)",
    ],
  },
];
