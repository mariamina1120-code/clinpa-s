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
    category: "Pulmonary / Allergic Emergency",
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
    category: "Gastroenterology / Surgical Emergency",
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
  // ── NEW CONDITIONS ─────────────────────────────────────────────────────────
  {
    id: "em-tension-pneumothorax",
    name: "Tension Pneumothorax",
    icdCode: "J93.0",
    rotation: "emergency-medicine",
    category: "Pulmonary / Respiratory Emergency",
    definition:
      "A life-threatening emergency in which air accumulates under positive pressure in the pleural space, causing progressive ipsilateral lung collapse, contralateral mediastinal shift, and compression of the heart and great vessels. Results in obstructive shock. Requires immediate needle decompression — diagnosis is clinical and treatment must NOT be delayed for imaging.",
    diagnosticCriteria:
      "Clinical diagnosis — do NOT wait for CXR if hemodynamically unstable. Classic findings: respiratory distress + hypotension + absent breath sounds ipsilaterally + tracheal deviation AWAY from affected side (late sign) + neck vein distension (JVD — obstructed venous return). Hypoxia and tachycardia. In ventilated patients: sudden rise in peak airway pressures + hemodynamic deterioration. CXR (if patient stable enough): hyperlucent hemithorax, flattened diaphragm, mediastinal shift. Simple pneumothorax: < 20% lung collapse without hemodynamic compromise — can observe small ones or aspirate; large (>20%) → chest tube.",
    presentation: {
      chiefComplaint: [
        "\"I suddenly can't breathe and my chest hurts\"",
        "\"Trauma patient with rapid deterioration after intubation\"",
        "Sudden respiratory distress and hypotension in ventilated patient",
      ],
      associatedSymptoms: [
        "Sudden severe dyspnea and hypoxia",
        "Hypotension (obstructive shock — SBP < 90)",
        "Tachycardia",
        "Absent or decreased breath sounds ipsilaterally",
        "Tracheal deviation away from affected side (late, unreliable sign)",
        "JVD (jugular venous distension) from elevated intrathoracic pressure",
        "Cyanosis (late)",
      ],
      demographics:
        "Spontaneous: tall, thin young males with subpleural blebs (primary spontaneous PTX). Secondary: underlying lung disease (COPD, cystic fibrosis, PCP — HIV). Traumatic: penetrating or blunt chest trauma, rib fractures, iatrogenic (central line placement, mechanical ventilation). Highest risk of tension: positive pressure ventilation, CPR.",
    },
    distinguishingFeatures:
      "Classic 4 findings: Absent breath sounds + Hypotension + Tracheal deviation + JVD — but all 4 rarely present simultaneously; absent breath sounds + hypotension = act immediately. Distinguish from hemothorax (dull to percussion vs hyperresonant), cardiac tamponade (muffled heart sounds vs absent breath sounds, trachea midline in tamponade). Beck's triad (tamponade): JVD + hypotension + muffled heart sounds.",
    redFlags: [
      "Hemodynamically unstable + absent breath sounds ipsilaterally — IMMEDIATE needle decompression",
      "Tension developing during mechanical ventilation — check peak pressures, assess breath sounds",
      "Bilateral pneumothorax (rare but occurs in trauma/barotrauma)",
      "Subcutaneous emphysema (crepitus in neck/chest wall) — indicates significant air leak",
    ],
    mnemonics: [
      {
        name: "Tension PTX = HALT",
        content:
          "H — Hypotension (obstructive shock)\nA — Absent breath sounds (ipsilateral)\nL — Low O2 saturation (hypoxia)\nT — Tracheal deviation (AWAY from affected side — late sign)\n\nTreatment: Needle decompression → 2nd intercostal space, midclavicular line → THEN definitive chest tube (4th or 5th ICS, anterior axillary line)",
      },
    ],
    pimpingQuestions: [
      "Where do you perform needle decompression for tension pneumothorax?",
      "What is the definitive treatment after needle decompression?",
      "How does tension pneumothorax cause obstructive shock?",
      "Distinguish tension pneumothorax from cardiac tamponade at the bedside.",
      "What is the ATLS threshold for chest tube insertion in pneumothorax?",
    ],
  },
  {
    id: "em-sah",
    name: "Subarachnoid Hemorrhage (SAH)",
    icdCode: "I60.9",
    rotation: "emergency-medicine",
    category: "Neurologic Emergency",
    definition:
      "Spontaneous bleeding into the subarachnoid space (between the arachnoid and pia mater), most commonly from rupture of a saccular (Berry) aneurysm (85%). Classically presents with sudden-onset 'thunderclap headache' — the worst headache of the patient's life. SAH carries 30-day mortality of 40–50%; of survivors, 30% have significant neurological deficits. All thunderclap headaches require urgent evaluation.",
    diagnosticCriteria:
      "CT head non-contrast (first-line): hyperdense blood in basal cisterns, Sylvian fissures, or cortical sulci — sensitivity 98% within 12 hours, drops to 93% at 24h and 60% at 5 days. Lumbar puncture: if CT negative but clinical suspicion high (within 6–12 hours of onset) — xanthochromia (yellow CSF from hemoglobin breakdown products) is the key finding; CSF RBCs that do NOT decrease from tube 1 to tube 4. CT angiography (CTA) or digital subtraction angiography (DSA — gold standard) for aneurysm localization. MRI/FLAIR: may detect SAH when CT is negative (days later).",
    presentation: {
      chiefComplaint: [
        "\"This is the worst headache of my life — it came on suddenly\"",
        "\"My head exploded in pain while I was exercising\"",
        "\"I had a sudden headache then briefly passed out\"",
      ],
      associatedSymptoms: [
        "Thunderclap headache — sudden onset, maximum intensity within seconds",
        "Neck stiffness / meningismus (blood irritating meninges)",
        "Nausea and vomiting",
        "Photophobia",
        "Brief loss of consciousness or syncope at onset (from sudden ICP rise)",
        "Focal neurological deficits (cranial nerve III palsy — posterior communicating artery aneurysm compressing CN III → ptosis + mydriasis)",
        "Sentinel headache (weeks before rupture — 'warning leak') in 30–50%",
      ],
      demographics:
        "Mean age 55 years; women > men; peak incidence 40–60 years. Risk factors: HTN (#1 modifiable), smoking (2–3× risk), family history of SAH or polycystic kidney disease (PKD — Berry aneurysms associated), connective tissue disorders (Ehlers-Danlos, Marfan), cocaine use, alcohol, sympathomimetics.",
    },
    distinguishingFeatures:
      "Thunderclap headache: any headache reaching maximum intensity within 60 seconds — SAH must be excluded regardless of patient age or prior headache history. Sentinel headache (30–50% of SAH): mild headache days-weeks before rupture — often dismissed as 'tension headache.' CN III palsy in SAH: ptosis + mydriasis + eye deviating down and out (posterior communicating artery aneurysm). Hypertensive or migraine headache: gradual onset; SAH: sudden onset 'like being hit with a bat.'",
    redFlags: [
      "Thunderclap headache — CT non-contrast STAT; if negative → LP for xanthochromia",
      "CN III palsy (ptosis + mydriasis + down-and-out gaze) — posterior communicating artery aneurysm until proven otherwise",
      "Sentinel headache — may precede major bleed by days/weeks; do NOT reassure and discharge without workup",
      "Re-bleeding (first 24h carries 4% risk, day 1–14 carries 1–2%/day) — BP control is critical (SBP < 160)",
      "Vasospasm (days 3–14) — leading cause of delayed neurological deficits; nimodipine (calcium channel blocker) reduces vasospasm-related morbidity",
    ],
    mnemonics: [
      {
        name: "SAH Workup: CT → LP → CTA",
        content:
          "Step 1: CT head non-contrast (98% sensitive if done within 6–12h)\nStep 2: If CT negative → Lumbar Puncture (xanthochromia — KEY finding)\nStep 3: If SAH confirmed → CTA or DSA for aneurysm localization\n\nThunderclap headache = SAH until proven otherwise\nNimodipine: reduces vasospasm (days 3–14) — give ALL confirmed SAH patients",
      },
    ],
    pimpingQuestions: [
      "What is the classic description of SAH headache and why is it important?",
      "What is xanthochromia and when does it appear after SAH?",
      "What cranial nerve palsy is associated with posterior communicating artery aneurysm?",
      "What is the role of nimodipine in SAH management?",
      "What is a sentinel headache?",
      "What conditions are associated with Berry aneurysm formation?",
    ],
  },
  {
    id: "em-hyperkalemia",
    name: "Hyperkalemia (Severe)",
    icdCode: "E87.5",
    rotation: "emergency-medicine",
    category: "Renal / Electrolyte Emergency",
    definition:
      "Serum potassium > 5.5 mEq/L; life-threatening at > 6.5 mEq/L or with EKG changes. The most immediately dangerous electrolyte abnormality because of risk of fatal cardiac arrhythmia (ventricular fibrillation). Multiple organ systems regulate potassium — renal excretion is the primary long-term mechanism. Immediate treatment priority: stabilize cardiac membrane, shift K+ intracellularly, eliminate K+ from body.",
    diagnosticCriteria:
      "Serum K+ > 5.5 mEq/L (confirm in non-hemolyzed sample). EKG changes by severity: peaked/tall T-waves (earliest, > 5.5–6.0); PR prolongation; QRS widening; sine wave pattern; VF/asystole. EKG does NOT correlate perfectly with K+ level — some patients with K+ 7.0 have minimal EKG changes. CMP (BUN/Cr — assess renal function), ABG (acidosis shifts K+ extracellularly by 0.6 mEq/L per 0.1 pH unit decrease), glucose (pseudohyperkalemia if hemolyzed).",
    presentation: {
      chiefComplaint: [
        "\"I've been feeling weak and my heart is racing\"",
        "\"I have kidney disease and missed dialysis\"",
        "EKG abnormality found on routine labs",
      ],
      associatedSymptoms: [
        "Muscle weakness (ascending — may progress to flaccid paralysis)",
        "Palpitations, bradycardia",
        "Paresthesias (tingling in extremities)",
        "Nausea, vomiting, abdominal cramping",
        "EKG changes (peaked T waves → wide QRS → sine wave → VF)",
        "Oliguria/anuria (renal failure — most common cause)",
      ],
      demographics:
        "Chronic kidney disease (impaired excretion — #1 cause). ACE inhibitors/ARBs/aldosterone antagonists (spironolactone — drug-induced). Missed dialysis. DKA (insulin deficiency + acidosis shift K+ out of cells). Rhabdomyolysis (massive intracellular K+ release). Tumor lysis syndrome (rapid cell death). Hypoaldosteronism. Succinylcholine (depolarizing NMJ blocker — raises K+ by 0.5–1 mEq/L; dangerous in burns, crush injury, denervation).",
    },
    distinguishingFeatures:
      "EKG changes are key risk stratifier — any EKG change = treat empirically before awaiting labs. Peaked T waves: narrow base, symmetric, tall — early; differs from hyperacute T waves of STEMI (wider base, one territory). Acidosis raises K+ (0.6 per 0.1 pH drop); alkalosis lowers K+. Pseudohyperkalemia: hemolyzed sample, thrombocytosis, leukocytosis — repeat in non-hemolyzed sample.",
    redFlags: [
      "EKG changes (any change) — stabilize cardiac membrane with calcium FIRST",
      "K+ > 7.0 mEq/L regardless of EKG — treat as emergency",
      "Sine wave pattern or wide QRS — imminent VF risk",
      "Missed dialysis in ESRD patient — hyperkalemia + volume overload + uremia triad",
    ],
    mnemonics: [
      {
        name: "Hyperkalemia Treatment: C-BIG-K-Drop",
        content:
          "C — Calcium gluconate or calcium chloride (1g IV) → STABILIZE cardiac membrane (10 min, no effect on K+ level)\nB — Bicarb (50–100 mEq IV) → SHIFT K+ into cells (slower onset)\nI — Insulin (10 units regular IV) + Glucose (25g D50) → SHIFT K+ into cells (20–30 min)\nG — Give albuterol (beta-2 agonist, 10–20 mg nebulized) → SHIFT K+ into cells\nK — Kayexalate (sodium polystyrene sulfonate) or Patiromer → ELIMINATE K+ (hours-days)\nDrop → Dialysis: fastest and most reliable elimination for severe/refractory hyperkalemia",
      },
    ],
    pimpingQuestions: [
      "What is the first treatment given for life-threatening hyperkalemia and what is its mechanism?",
      "How does insulin lower potassium, and why must glucose be given with it?",
      "List the EKG changes in order of severity as potassium rises.",
      "Why is calcium NOT given to correct the serum potassium level?",
      "What causes pseudohyperkalemia?",
      "Why is succinylcholine contraindicated in burn or crush injury patients?",
    ],
  },
  {
    id: "em-acetaminophen-overdose",
    name: "Acetaminophen (Tylenol) Overdose",
    icdCode: "T39.1X1A",
    rotation: "emergency-medicine",
    category: "Gastroenterology / Hepatology Toxicology",
    definition:
      "The most common cause of acute liver failure in the US and leading cause of intentional overdose presenting to emergency departments. Acetaminophen (APAP) is hepatotoxic when its toxic metabolite NAPQI (N-acetyl-p-benzoquinone imine) overwhelms glutathione stores, causing centrilobular hepatic necrosis. The antidote is N-acetylcysteine (NAC), which is highly effective if given within 8–10 hours of ingestion.",
    diagnosticCriteria:
      "Serum acetaminophen level drawn at ≥4 hours post-ingestion (earlier levels unreliable). Plot on Rumack-Matthew nomogram: treatment line — level > 150 mcg/mL at 4h (or > 37.5 at 12h) = NAC indicated. LFTs (AST/ALT — peak at 72–96h in untreated overdose; AST > 1,000 = hepatotoxicity), INR, BMP, creatinine, bilirubin. Stages: Stage I (0–24h): nausea/vomiting, malaise (normal LFTs); Stage II (24–72h): RUQ pain, elevated LFTs, beginning hepatocellular injury; Stage III (72–96h): peak LFT elevation, peak hepatotoxicity (AST/ALT > 10,000 in severe cases), coagulopathy, encephalopathy; Stage IV (4d–2 weeks): recovery or liver failure/transplant.",
    presentation: {
      chiefComplaint: [
        "\"I took a lot of Tylenol to hurt myself\"",
        "\"I've been taking Tylenol every few hours for days for pain\"",
        "\"I feel sick to my stomach and I'm jaundiced\"",
      ],
      associatedSymptoms: [
        "Stage I (0–24h): nausea, vomiting, malaise, diaphoresis — may look well (falsely reassuring)",
        "Stage II (24–72h): RUQ pain/tenderness, elevated LFTs",
        "Stage III (72–96h): jaundice, coagulopathy, encephalopathy (fulminant hepatic failure)",
        "May be co-ingested with other substances (opioids, sedatives) — always check coingestants",
      ],
      demographics:
        "Most common agent in intentional overdose presenting to US EDs. Chronic alcohol use greatly increases risk (alcohol induces CYP2E1 which produces more NAPQI + depletes glutathione). Chronic therapeutic overdose (taking slightly more than 4g/day): elderly, pain patients, patients with underlying liver disease — may develop toxicity without 'acute overdose.'",
    },
    distinguishingFeatures:
      "APAP is in > 600 OTC products — always check hidden sources (cold/flu remedies, prescription opioid combos like Vicodin, Percocet). Early presentation may appear trivial (nausea only) — never dismiss based on initial appearance. The 4-hour rule: NAC is most effective if started within 8 hours of ingestion; NEVER delay while waiting for symptoms to worsen.",
    redFlags: [
      "Any intentional overdose — psychiatric evaluation mandatory",
      "Unknown ingestion time — treat empirically if level is in toxic range",
      "Elevated LFTs at presentation — hepatotoxicity already established, NAC still indicated",
      "INR > 2 (coagulopathy) + jaundice + encephalopathy = King's College Criteria for liver transplant evaluation",
      "Co-ingestion of hepatotoxins (alcohol, isoniazid, anticonvulsants) — lower threshold for NAC",
    ],
    mnemonics: [
      {
        name: "Acetaminophen Toxicity Stages: NOEL",
        content:
          "Stage I (0–24h): Nausea, vomiting, malaise (Normal LFTs)\nStage II (24–72h): onset of hepatotoxicity (RUQ pain, Elevated LFTs)\nStage III (72–96h): peak hepatic necrosis (ALT/AST > 10k, coagulopathy, encephalopathy)\nStage IV: Recovery or Liver failure\n\nTreatment: NAC (N-acetylcysteine)\nMechanism: replenishes glutathione, directly conjugates NAPQI\nMost effective if given within 8–10 hours of ingestion",
      },
    ],
    pimpingQuestions: [
      "What is NAPQI and why is it toxic?",
      "What is the antidote for acetaminophen overdose and what is its mechanism?",
      "How is the Rumack-Matthew nomogram used?",
      "Why is chronic alcohol use a risk factor for acetaminophen toxicity at even therapeutic doses?",
      "What are the King's College Criteria for liver transplant evaluation in acetaminophen-induced liver failure?",
    ],
  },

  // ─── Cardiovascular Emergencies ───────────────────────────────────────────

  {
    id: "em-arrhythmias",
    name: "Cardiac Arrhythmias: Afib, SVT, VT/VF, and Cardiac Tamponade",
    icdCode: "I49.9",
    rotation: "emergency-medicine",
    category: "Cardiovascular / Arrhythmia",
    definition:
      "Atrial fibrillation (AF): most common sustained arrhythmia — irregularly irregular rhythm, absent P waves, ventricular rate typically 100–160; complications: stroke (Afib-related stroke accounts for 15–20% of all strokes → CHA₂DS₂-VASc score guides anticoagulation) and heart failure. SVT (narrow complex tachycardia): AVNRT most common (re-entrant circuit in AV node) — 150–250 bpm, regular, retrograde P waves. VT: sustained VT (≥30s, or hemodynamically unstable) vs. nonsustained; wide complex tachycardia — if uncertain, treat as VT. VF: chaotic ventricular activity, no cardiac output — immediate defibrillation (unsynchronized). Cardiac tamponade: pericardial effusion with hemodynamic compromise — Beck's triad: hypotension + JVD + muffled heart sounds; pulsus paradoxus >10 mmHg.",
    diagnosticCriteria:
      "AF: EKG (no P waves, irregularly irregular QRS); echocardiogram (assess LV function, LA size, exclude valvular disease); TSH (thyrotoxicosis — cause). SVT: vagal maneuvers first (Valsalva, carotid massage — not if bruit) → adenosine (6 mg rapid IV, then 12 mg) if no response. VT: wide complex regular tachycardia — adenosine NOT first-line; cardioversion if unstable; amiodarone IV if stable. VF: immediate defibrillation (200J biphasic) → CPR → epinephrine 1 mg q3–5 min → amiodarone after 3rd shock. Tamponade: FAST ultrasound (pericardial effusion + right heart collapse); pericardiocentesis (Seldinger technique under US guidance) — diagnostic and therapeutic.",
    presentation: {
      chiefComplaint: [
        "\"My heart is racing and I feel lightheaded\"",
        "\"I feel my heart fluttering irregularly\"",
        "\"I'm dizzy and my blood pressure is dropping\"",
      ],
      associatedSymptoms: [
        "AF: palpitations, fatigue, dyspnea, possible syncope; irregularly irregular pulse on exam; HF if rapid ventricular rate",
        "SVT: sudden onset rapid regular palpitations ('racing heart'), dizziness, chest tightness, pre-syncope; may terminate spontaneously",
        "VT: wide complex tachycardia, hemodynamically unstable VT → syncope, hypotension, cardiac arrest",
        "Tamponade: dyspnea, Beck's triad (hypotension + JVD + muffled heart sounds), pulsus paradoxus (BP falls >10 mmHg on inspiration), electrical alternans on EKG",
      ],
      demographics: "AF: age >65, hypertension, HF, valvular disease, alcohol ('holiday heart'). SVT: young women (AVNRT 2:1 female). VT: structural heart disease (prior MI, cardiomyopathy). Tamponade: malignancy (most common cause of large effusion), uremia, viral pericarditis, post-cardiac surgery.",
    },
    distinguishingFeatures:
      "AF vs. SVT: AF = irregularly irregular; SVT = regular. VT vs. SVT with aberrancy: if hemodynamically unstable → cardiovert regardless; if stable: Brugada criteria, AV dissociation (more QRS than P waves), fusion beats, concordance in precordial leads all favor VT; use amiodarone for VT, adenosine for SVT. Tamponade vs. tension PTX: both cause obstructive shock; PTX = absent breath sounds + hyperresonance; tamponade = muffled heart sounds + FAST shows effusion.",
    redFlags: [
      "VF / pulseless VT: immediate unsynchronized defibrillation → ACLS protocol (CPR + epinephrine + amiodarone)",
      "Hemodynamically unstable AF, SVT, or VT: synchronized cardioversion (100J–200J) immediately — do NOT delay for rate control or adenosine",
      "Cardiac tamponade: emergent pericardiocentesis; avoid intubation (positive pressure ventilation = worsens venous return, causes cardiac arrest)",
      "AF with WPW (Wolff-Parkinson-White, delta waves): DO NOT give AV nodal blockers (adenosine, digoxin, diltiazem, verapamil) — can cause VF; use procainamide",
    ],
    mnemonics: [
      {
        name: "Arrhythmia Treatment Algorithm",
        content:
          "UNSTABLE (hypotensive, AMS, signs of shock): CARDIOVERT IMMEDIATELY\n→ AF: 120J–200J synchronized\n→ SVT: 50J–100J synchronized\n→ VT with pulse: 100J synchronized\n→ VF or pulseless VT: 200J UNsynchronized → CPR\n\nSTABLE AF Rate Control:\nHR <110 target: Metoprolol (IV beta-blocker) or Diltiazem (IV CCB)\nDO NOT cardiovert AF >48h without anticoagulation (TEE to exclude LAA thrombus)\n\nSTABLE SVT:\nVagal maneuvers → Adenosine 6mg rapid IVP → Adenosine 12mg → Diltiazem/verapamil\n\nWPW + AF: Procainamide (NOT adenosine, digoxin, diltiazem, verapamil)\n\nTamponade: Beck's Triad + Pulsus Paradoxus + Electrical Alternans\n→ Pericardiocentesis immediately",
      },
    ],
    pimpingQuestions: [
      "What is the CHA₂DS₂-VASc score and when is anticoagulation indicated in AF?",
      "How do you manage hemodynamically unstable AF?",
      "What is the danger of giving AV nodal blockers in AF with WPW?",
      "How do you distinguish VT from SVT with aberrancy?",
      "What is Beck's triad and what does it indicate?",
    ],
  },

  {
    id: "em-acs-heart-failure",
    name: "ACS (NSTEMI/Unstable Angina) and Acute Decompensated Heart Failure",
    icdCode: "I21.4",
    rotation: "emergency-medicine",
    category: "Cardiovascular / Acute Coronary Syndrome",
    definition:
      "Acute coronary syndrome (ACS) spectrum: STEMI (ST elevation MI — complete occlusion, needs emergent PCI), NSTEMI (non-ST elevation MI — partial occlusion, elevated troponin), Unstable Angina (no troponin elevation, new angina at rest or crescendo pattern). Differentiation: STEMI → immediate PCI (door-to-balloon <90 min); NSTEMI/UA → HEART score risk stratification → early invasive strategy for high-risk. Acute decompensated heart failure (ADHF): volume overload/pulmonary edema — systolic (EF <40%, cardiomegaly, systolic dysfunction) vs. diastolic (HFpEF — preserved EF, stiff ventricle, common in elderly hypertensive women); acute on chronic HF triggered by dietary indiscretion, medication non-adherence, infection, arrhythmia, ACS.",
    diagnosticCriteria:
      "ACS: EKG + troponin (serial q3–6h) + CXR; echocardiogram. TIMI score (NSTEMI/UA) and HEART score for risk stratification. ADHF: CXR (cardiomegaly, Kerley B lines, bilateral perihilar pulmonary edema — 'bat wing'), BNP (>500 strongly suggests HF), echo (EF), troponin (ischemia as precipitant). Lung US: 'B-lines' (comet-tail artifacts = interstitial pulmonary edema — bedside diagnosis within minutes).",
    presentation: {
      chiefComplaint: [
        "\"I'm having chest pain at rest and it's not going away\" (ACS)",
        "\"I can't breathe lying down and my legs are swollen\" (ADHF)",
      ],
      associatedSymptoms: [
        "NSTEMI/UA: chest pain (pressing/squeezing), diaphoresis, nausea, radiation to left arm/jaw; new ST depression or T-wave inversions; troponin elevation",
        "ADHF: dyspnea (orthopnea, PND), bilateral leg edema, weight gain, JVD, crackles (bilateral rales), S3 gallop (ventricular diastolic overload), displaced PMI",
        "Cardiogenic shock: hypotension + cool extremities + oliguria + pulmonary congestion — worst prognosis in ACS",
      ],
      demographics: "ACS: men peak 55–65, women peak 65–75 (later onset, more atypical presentations). ADHF: HFrEF (reduced EF) more common in men; HFpEF (preserved EF) more common in elderly women with HTN.",
    },
    distinguishingFeatures:
      "STEMI vs. NSTEMI: STEMI = STE ≥1 mm in ≥2 contiguous leads (or LBBB, or posterior — ST depression in V1–V3) → cath lab now. NSTEMI = elevated troponin without STE → risk stratify, early invasive vs. conservative. HFrEF vs. HFpEF: HFrEF (EF <40%) — treat with ACE-I/ARB, beta-blockers, SGLT2 inhibitors, spironolactone; HFpEF (EF ≥50%) — control heart rate, BP, volume.",
    redFlags: [
      "Cardiogenic shock (ACS + hemodynamic compromise): intra-aortic balloon pump + emergent PCI; vasopressors (norepinephrine) if MAP <65",
      "ADHF with respiratory failure: BiPAP (non-invasive positive pressure — reduces preload, reduces work of breathing); intubate only if failing NIV",
      "New LBBB + chest pain: treat as STEMI equivalent (Sgarbossa criteria for MI in LBBB)",
      "Flash pulmonary edema: nitroglycerin IV (aggressive vasodilation) + furosemide IV (diuresis) + BiPAP — sit patient upright",
    ],
    mnemonics: [
      {
        name: "ADHF Treatment — LMNOP",
        content:
          "L — Lasix (furosemide IV — diuresis)\nM — Morphine (vasodilation, reduces preload — use cautiously, avoid in cardiogenic shock)\nN — Nitrates (nitroglycerin — most effective at reducing preload; avoid if SBP <90 or PDE5 inhibitor use)\nO — Oxygen (target SpO2 >94%)\nP — Position (upright, dangle legs to pool blood in extremities)\n\n+ BiPAP for respiratory failure\n\nHFrEF Medical Therapy — ABCDE:\nA — ACE-I or ARB (reduce preload/afterload)\nB — Beta-blocker (metoprolol succinate, carvedilol — reduce mortality)\nC — Carvedilol or aldosterone antagonist (spironolactone)\nD — Diuretics (furosemide for congestion)\nE — SGLT2 inhibitor (empagliflozin/dapagliflozin — reduces hospitalizations/death)",
      },
    ],
    pimpingQuestions: [
      "What is the door-to-balloon time target for STEMI?",
      "What is the difference between NSTEMI and unstable angina?",
      "What are the four medications proven to reduce mortality in HFrEF?",
      "What is cardiogenic shock and how do you manage it?",
      "What is the benefit of BiPAP vs. intubation in acute pulmonary edema?",
    ],
  },

  {
    id: "em-aortic-dissection",
    name: "Aortic Dissection and Vascular Emergencies",
    icdCode: "I71.00",
    rotation: "emergency-medicine",
    category: "Cardiovascular / Vascular",
    definition:
      "Aortic dissection: tear in aortic intima → blood enters media → false lumen propagates. Stanford Type A: involves ascending aorta (most common, most dangerous, up to aortic valve) — surgical emergency. Stanford Type B: confined to descending aorta (distal to left subclavian) — medical management unless complicated (ischemia, rupture, rapid expansion). Risk factors: hypertension (#1), Marfan syndrome (medial cystic necrosis), bicuspid aortic valve, cocaine, pregnancy (aortic root dissection), trauma. De Bakey classification: I (ascending + descending), II (ascending only), III (descending only = Type B).",
    diagnosticCriteria:
      "CT angiography chest/abdomen/pelvis: gold standard; sensitivity >98%; shows intimal flap, false lumen, extent. CXR: widened mediastinum (>8 cm) in 60–90% — NOT specific; aortic knob enlargement. EKG: sinus tachycardia typically; inferior STEMI if RCA ostium involved (tear extends into coronary ostia) — thrombolytics CONTRAINDICATED. Transesophageal echo (TEE): excellent for Type A if patient too unstable for CT. D-dimer: highly sensitive when negative (can rule out dissection when combined with low pre-test probability).",
    presentation: {
      chiefComplaint: [
        "\"I have the worst tearing pain in my back that came on suddenly\"",
        "\"I have severe chest pain that radiates straight to my back\"",
      ],
      associatedSymptoms: [
        "Classic: sudden onset severe tearing/ripping pain in chest, back, or abdomen — at maximum intensity at onset (unlike MI which builds over minutes)",
        "Pulse differential: unequal pulses or BP difference ≥20 mmHg between arms (subclavian involvement)",
        "Aortic regurgitation: new diastolic murmur (Type A — proximal extension to aortic root)",
        "Neurologic deficits: stroke, cord ischemia (paraplegia), Horner syndrome (periadvential hematoma affecting stellate ganglion)",
        "Coronary involvement: inferior MI pattern (Type A extending to RCA ostium — do NOT give thrombolytics)",
      ],
      demographics: "Peak incidence 60–70 years; male 2:1. Marfan, EDS, Turner, bicuspid aortic valve patients younger at presentation. 40% mortality for Type A if not operated on within 24 hours.",
    },
    distinguishingFeatures:
      "Dissection vs. MI: dissection = tearing pain maximal at onset, pulse differential, widened mediastinum; MI = crushing pain building over minutes, no pulse differential, STE on EKG. Type A vs. Type B: Type A = ascending aorta involved = emergent surgery (aortic valve repair/replacement + ascending replacement); Type B = medical management (heart rate control + BP control with labetalol or esmolol — target HR <60, SBP <120). Thrombolytics in dissection: absolutely contraindicated (causes catastrophic hemorrhage).",
    redFlags: [
      "Suspected Type A dissection: emergent cardiothoracic surgery consultation — mortality 1–2% per hour without surgery",
      "Dissection with inferior STEMI on EKG: type A involving RCA — DO NOT give thrombolytics; emergent surgery, not PCI",
      "Dissection causing paraplegia (cord ischemia): spinal cord perfusion pressure optimization; emergency surgery/endovascular repair",
      "BP control target: SBP 100–120 mmHg + HR <60 — labetalol IV (combined α/β) or esmolol (titratable) then nitroprusside for additional BP reduction if needed",
    ],
    mnemonics: [
      {
        name: "Aortic Dissection — SHARP Pain",
        content:
          "S — Sudden onset (pain at MAXIMUM at onset)\nH — Hypertension (#1 risk factor)\nA — Ascending (Type A — surgery) vs. Descending (Type B — medical)\nR — Ripping/tearing quality\nP — Pulse differential (unequal BP between arms)\n\nStanford Type A = Ascending → Surgery\nStanford Type B = Below subclavian → Medical (labetalol)\n\nDO NOT give thrombolytics to a chest pain patient with:\n→ Widened mediastinum on CXR\n→ Pulse differential\n→ Maximum-at-onset tearing pain\n→ Neurological deficits\n\nWidened mediastinum on CXR = aortic dissection until CT proves otherwise",
      },
    ],
    pimpingQuestions: [
      "What is the difference between Stanford Type A and Type B dissection?",
      "Why is thrombolysis absolutely contraindicated in aortic dissection?",
      "What is the classic quality of pain in aortic dissection and how does it differ from MI?",
      "What are the blood pressure and heart rate targets in Type B dissection?",
      "What imaging modality is the gold standard for aortic dissection?",
    ],
  },

  // ─── Musculoskeletal Emergencies ──────────────────────────────────────────

  {
    id: "em-fractures-dislocations",
    name: "Emergency Fractures and Dislocations",
    icdCode: "S42.202A",
    rotation: "emergency-medicine",
    category: "Musculoskeletal / Orthopedic Emergencies",
    definition:
      "High-priority fractures and dislocations requiring emergency management: Hip fractures (femoral neck and intertrochanteric — elderly women, fall, high mortality, urgent surgical fixation), Shoulder dislocation (anterior 95% — subcoracoid, arm abducted/externally rotated, positive apprehension sign), Knee dislocation (popliteal artery injury risk >40%), Ankle fractures (Ottawa ankle rules for X-ray indication), Colles'/Smith's fracture (distal radius), Scaphoid fracture (snuffbox tenderness — may not be visible on initial X-ray), Cervical spine fractures (Jefferson's C1, Hangman's C2 — neurological catastrophe if missed). Cauda equina syndrome: compression of lumbosacral nerve roots → bowel/bladder dysfunction + saddle anesthesia + bilateral leg weakness — surgical emergency.",
    diagnosticCriteria:
      "Ottawa Ankle Rules: X-ray if tenderness at posterior tip/base of fibula or medial malleolus + unable to bear weight 4 steps. Ottawa Knee Rules: X-ray if age >55, tenderness at fibular head, isolated patellar tenderness, inability to flex knee to 90°, inability to bear weight. Scaphoid: snuffbox tenderness → X-ray; if negative but high suspicion → MRI or CT (most sensitive for occult fracture). Hip fracture: X-ray (AP pelvis + lateral hip); if negative but patient can't bear weight → MRI (occult fracture). Knee dislocation: CT angiography or ABI for vascular injury (popliteal artery) even if pulses present. Cervical spine: NEXUS criteria or Canadian C-spine rules for clearance without imaging. Cauda equina: urgent MRI lumbosacral spine.",
    presentation: {
      chiefComplaint: [
        "\"I fell on my outstretched hand\" or \"I fell from standing\"",
        "\"My knee was hit hard and something popped\"",
        "\"I can't feel anything between my legs and I can't urinate\"",
      ],
      associatedSymptoms: [
        "Hip fracture: severe groin/hip pain, inability to bear weight, leg shortened and externally rotated",
        "Anterior shoulder dislocation: arm held in abduction/external rotation, empty glenoid fossa on palpation, loss of deltoid contour, assess axillary nerve (lateral deltoid sensation) before and after reduction",
        "Knee dislocation: spontaneous reduction may occur — assess popliteal pulse, ABI, and vascular injury even if knee appears reduced",
        "Cauda equina: bowel/bladder dysfunction (urinary retention most common, fecal incontinence), saddle anesthesia (perineum/inner thighs), bilateral leg weakness, loss of rectal tone",
      ],
      demographics: "Hip fracture: elderly women with osteoporosis (30-day mortality 5–10%); most common injury in elderly. Shoulder dislocation: young males (sports, trauma) — anterior 95%, posterior (seizure, electrocution — arm internally rotated). Cauda equina: large central disc herniation, tumor, epidural abscess, epidural hematoma.",
    },
    distinguishingFeatures:
      "Anterior vs. posterior shoulder dislocation: anterior = arm abducted, externally rotated, subcoracoid; posterior = arm internally rotated, adducted (seizure, electric shock, often missed). Scaphoid fracture: avascular necrosis risk (proximal pole has end-artery supply) — treat all scaphoid fractures (even X-ray negative) with thumb spica casting ± MRI. Cauda equina vs. conus medullaris syndrome: cauda equina = flaccid bowel/bladder (LMN), saddle anesthesia, bilateral leg weakness; conus = upper AND lower motor neuron features. Both are emergencies.",
    redFlags: [
      "Cauda equina syndrome: MRI STAT + emergent neurosurgical decompression (within 24–48h) — delay worsens permanent bladder/bowel dysfunction",
      "Knee dislocation with absent pulse: emergent vascular surgery — popliteal artery injury (risk of limb loss); vascular repair within 6h",
      "Posterior shoulder dislocation (missed): diagnose with Y-view or axillary X-ray (AP X-ray often appears near normal — 'lightbulb sign' on internal rotation)",
      "Open fracture: IV cefazolin within 3 hours, emergent OR debridement, orthopedic surgery consult",
    ],
    mnemonics: [
      {
        name: "Cauda Equina — SADDLE Mnemonic",
        content:
          "S — Saddle anesthesia (perineum, inner thighs, genitalia)\nA — Areflexia (flaccid lower extremities — LMN)\nD — Deficits bilateral (bilateral leg weakness)\nD — Dysfunction (bowel and bladder — urinary retention first symptom)\nL — Large disk herniation (most common cause, usually L4-L5 or L5-S1)\nE — Emergency (MRI STAT + neurosurgery)\n\nOttawa Ankle Rules — X-ray ONLY if:\nMalleolus tenderness (posterior tip/base) OR\nCannot bear weight × 4 steps\n\nScaphoid: Snuffbox tenderness = fracture until proven otherwise\n→ Thumb spica cast even if X-ray negative\n→ MRI if high suspicion + negative X-ray",
      },
    ],
    pimpingQuestions: [
      "What are the Ottawa Ankle Rules?",
      "Why is the scaphoid bone particularly susceptible to avascular necrosis?",
      "What is the neurovascular complication of knee dislocation?",
      "What are the cardinal features of cauda equina syndrome?",
      "How does posterior shoulder dislocation occur and what is its characteristic appearance on X-ray?",
    ],
  },

  {
    id: "em-septic-arthritis-back",
    name: "Septic Arthritis, Low Back Pain, and Spinal Emergencies",
    icdCode: "M00.9",
    rotation: "emergency-medicine",
    category: "Musculoskeletal / Infection and Spine",
    definition:
      "Septic arthritis: infectious joint inflammation — medical emergency (cartilage destroyed within hours by proteolytic enzymes); most common organism: S. aureus (all ages); N. gonorrhoeae in sexually active adults <40 (most common in young adults; migratory polyarthritis → monoarthritis). Joint aspiration is diagnostic AND mandatory before antibiotics. Osteomyelitis: bone infection — hematogenous (most common in children — metaphysis of long bones), contiguous (diabetic foot wound), or vascular insufficiency. Low back pain: most common cause of disability in adults 45–65; mechanical (muscle strain most common, 97%), herniated disc, spondylolisthesis, spinal stenosis, malignancy, infection (osteomyelitis/discitis). Red flag symptoms require imaging: 'WOLF': Worst pain of life, Old age (>50), Loss of weight (cancer, infection), Fever (infection).",
    diagnosticCriteria:
      "Septic arthritis: joint aspiration — WBC >50,000/mm³ (>75% PMNs = septic until proven otherwise), glucose <40 mg/dL less than serum, positive Gram stain/culture. WBC >100,000 = highly specific for septic arthritis. Osteomyelitis: MRI (most sensitive, 90%) + bone scan; plain X-ray changes lag 10–21 days. Lab: WBC, ESR, CRP; blood cultures. Low back pain red flags (WOOF LOSS): Weight loss, Old age, Onset with fever, Focus on night pain, Loss of bowel/bladder, Osteoporosis/steroids, Spine tenderness (focal), Significant trauma. Spinal cord compression: MRI urgently.",
    presentation: {
      chiefComplaint: [
        "\"My knee is hot, red, and extremely painful — I can barely move it\"",
        "\"My lower back has been hurting for weeks and now I have pain going down my leg\"",
        "\"I have fever and bone pain\"",
      ],
      associatedSymptoms: [
        "Septic arthritis: acute onset monoarthritis, hot/red/swollen joint, fever, extreme pain with any movement, refusal to move joint; skin lesions in gonococcal DGI (pustular skin lesions on extremities)",
        "Osteomyelitis: localized bone tenderness, overlying soft tissue swelling, erythema, fever; in children: reluctance to use extremity, limp",
        "Low back pain: mechanical strain = worse with activity, better with rest, no radiation, paraspinal muscle spasm; herniated disc = radiculopathy (shooting pain down leg in dermatomal distribution, + straight leg raise test); spinal stenosis = neurogenic claudication (leg pain/weakness with walking, relieved by sitting forward)",
      ],
      demographics: "Septic arthritis: S. aureus most common all ages; GC most common in sexually active adults. Osteomyelitis: children (hematogenous), elderly/DM (contiguous). Gonococcal arthritis: young sexually active adults; female > male (due to asymptomatic GC infections); skin lesions in 2/3 of GC DGI.",
    },
    distinguishingFeatures:
      "Crystal arthropathy vs. septic arthritis: gout (sodium urate — needle-shaped, negatively birefringent) and pseudogout (calcium pyrophosphate — rhomboid, positively birefringent) — MUST aspirate joint to differentiate from septic (both can coexist!). Herniated disc vs. spinal stenosis: herniated disc = young patient, acute, worse with flexion, straight leg raise positive; spinal stenosis = older patient, neurogenic claudication worse with extension/walking, relieved by sitting. Discitis/vertebral osteomyelitis: nocturnal back pain + fever + elevated ESR — MRI; most common organism S. aureus.",
    redFlags: [
      "Septic joint: aspiration (synovial WBC >50,000) → IV antibiotics + surgical lavage (washout) urgently; delay → irreversible cartilage destruction within hours",
      "Back pain with cauda equina signs (saddle anesthesia + urinary retention): MRI immediately + neurosurgery",
      "Spinal epidural abscess: fever + back pain + neurological deficits — MRI spine STAT; surgical decompression + IV antibiotics; risk factors: IV drug use, diabetes, immunosuppression",
      "Back pain in patient with known cancer: MRI (metastatic epidural cord compression) — start dexamethasone immediately if cord compression suspected; emergent radiation oncology",
    ],
    mnemonics: [
      {
        name: "Septic Arthritis and Back Pain Red Flags",
        content:
          "Septic Arthritis: JJJJ rule\nJ — Joint aspiration (mandatory — do NOT skip)\nJ — Joint WBC >50,000 = septic until proven otherwise\nJ — Joint lavage (OR/arthroscopic washout)\nJ — Just treat with antibiotics immediately\n\nGC Arthritis: Migratory polyarthritis → Monoarthritis + Skin lesions (pustular)\n→ Treat: Ceftriaxone IM/IV\n\nBack Pain Red Flags — WOOF LOSS:\nW — Weight loss, Worst pain of life\nO — Old age >50, Onset at night\nO — Onset with fever\nF — Focus: unrelenting pain\nL — Loss of bowel/bladder\nO — Osteoporosis/steroid use\nS — Spine focal tenderness\nS — Significant trauma\n→ Any red flag → IMAGING (MRI preferred)",
      },
    ],
    pimpingQuestions: [
      "What synovial fluid WBC count is diagnostic of septic arthritis?",
      "What is the most common organism in septic arthritis?",
      "What is the most common organism in septic arthritis in sexually active adults?",
      "What are the red flag symptoms of low back pain that require imaging?",
      "What is neurogenic claudication and what condition does it suggest?",
    ],
  },

  // ─── GI Emergencies ───────────────────────────────────────────────────────

  {
    id: "em-gi-emergencies",
    name: "GI Emergencies: Pancreatitis, GI Bleed, and Bowel Obstruction",
    icdCode: "K85.9",
    rotation: "emergency-medicine",
    category: "Gastroenterology / Emergencies",
    definition:
      "Acute pancreatitis: inflammation of pancreas — most common causes: gallstones (40%) and alcohol (30%). Severity: Ranson's criteria, BISAP score, SIRS criteria — severe pancreatitis mortality 15–20%. GI hemorrhage: upper GI bleeding (proximal to ligament of Treitz — PUD most common: 50%) vs. lower GI bleeding (diverticulosis most common). Small bowel obstruction (SBO): most common cause adhesions (60–75%); strangulation = surgical emergency (fever + leukocytosis + peritoneal signs). Incarcerated hernia: hernia that cannot be manually reduced → strangulation → bowel necrosis.",
    diagnosticCriteria:
      "Pancreatitis: lipase >3× upper limit of normal (more sensitive/specific than amylase); abdominal ultrasound (gallstones, biliary dilation); CT abdomen/pelvis with contrast for severe/complications (pancreatic necrosis = peripancreatic fluid + no enhancement). Ranson's criteria: at admission (CAGE): Glucose >200, Age >55, WBC >16,000, ALT/AST >250; at 48h (5 criteria including Ca, Hematocrit, PO₂, BUN, fluid sequestration). GI bleed: EGD (upper GI) or colonoscopy (lower GI); CT angiography; tagged RBC scan. SBO: abdominal X-ray (dilated loops + air-fluid levels + no colonic gas); CT (transition point, strangulation).",
    presentation: {
      chiefComplaint: [
        "\"I have severe upper abdominal pain that goes to my back after drinking\"",
        "\"I'm vomiting blood\" or \"I'm passing tarry black stools\"",
        "\"I haven't had a bowel movement in 4 days and my belly is distended\"",
      ],
      associatedSymptoms: [
        "Pancreatitis: epigastric pain radiating to back, nausea/vomiting, worse after eating fatty meal (gallstones) or alcohol, Grey-Turner sign (flank ecchymosis — severe), Cullen's sign (periumbilical ecchymosis — severe, retroperitoneal hemorrhage)",
        "UGIB: hematemesis (bright red — arterial) or coffee-ground emesis (slower) or melena (tarry black); hypotension, tachycardia, pre-syncope; BUN:Cr >20:1",
        "SBO: colicky (intermittent) abdominal pain, nausea/vomiting, abdominal distension, obstipation (no gas or stool)",
        "Strangulated hernia: severe constant pain at hernia site, unable to reduce, tender, no bowel sounds, fever, leukocytosis",
      ],
      demographics: "Gallstone pancreatitis: women, obese, pregnant. Alcoholic pancreatitis: men, 35–50. PUD: H. pylori (80%), NSAIDs (#2), stress. SBO: prior abdominal surgery (adhesions most common cause).",
    },
    distinguishingFeatures:
      "Pancreatitis treatment: aggressive IV fluid resuscitation (Lactated Ringer's preferred over NS — less SIRS activation), pain control, NPO initially then early enteral nutrition (don't keep NPO for weeks — feeding protects gut barrier). ERCP: only if cholangitis or persistent biliary obstruction (not routinely for pancreatitis). SBO: initial conservative management (NGT decompression, IV fluids) for 48–72h if no strangulation; surgery for strangulation or failure to resolve. Urgent EGD for GI bleed: within 24h for hemodynamically stable; immediately for hemodynamic instability.",
    redFlags: [
      "Pancreatitis with shock, respiratory failure (ARDS), renal failure: severe pancreatitis → ICU admission, aggressive resuscitation",
      "Pancreatic necrosis (CT shows non-enhancing pancreatic parenchyma): infection risk at 2–3 weeks; infected necrosis → percutaneous drainage or necrosectomy",
      "Gastrointestinal bleeding with hemodynamic instability: resuscitate first, then endoscopy; do NOT transfuse to Hgb >10 (liberal transfusion worsens rebleeding in variceal bleed) — target Hgb 7–8",
      "Strangulation (fever + peritoneal signs + leukocytosis with SBO): emergent surgery — bowel ischemia",
    ],
    mnemonics: [
      {
        name: "Pancreatitis — GET SMASHED",
        content:
          "Causes of Acute Pancreatitis:\nG — Gallstones (#1)\nE — Ethanol (#2)\nT — Trauma\nS — Steroids\nM — Mumps (viral)\nA — Autoimmune\nS — Scorpion sting\nH — Hyperlipidemia/Hypercalcemia/Hypothermia\nE — ERCP (procedure-related)\nD — Drugs (thiazides, azathioprine, furosemide, sulfonamides, tetracycline, valproic acid)\n\nSBO Treatment: NGT + IVF + NPO → Watch 48–72h → Surgery if strangulation or no improvement\n\nGI Bleed resuscitation: Transfuse to Hgb 7–8 (restrictive strategy); treat coagulopathy; Octreotide for variceal bleed",
      },
    ],
    pimpingQuestions: [
      "What are the two most common causes of acute pancreatitis?",
      "What IV fluid is preferred in pancreatitis and why?",
      "What are Grey-Turner and Cullen's signs in pancreatitis?",
      "What is the initial management of small bowel obstruction?",
      "What is the transfusion target for GI bleeding and why is a restrictive strategy preferred in variceal bleeding?",
    ],
  },

  // ─── Pulmonary Emergencies ────────────────────────────────────────────────

  {
    id: "em-respiratory-emergencies",
    name: "Pulmonary Emergencies: Asthma, Pneumonia, and ARDS",
    icdCode: "J45.901",
    rotation: "emergency-medicine",
    category: "Pulmonary / Emergencies",
    definition:
      "Acute severe asthma exacerbation: status asthmaticus = asthma unresponsive to initial bronchodilators; silent chest (no wheeze) = severe impending respiratory failure. Pneumonia: CAP most common — S. pneumoniae #1; Legionella (smoker/HVAC/immunocompromised — extrapulmonary features: hyponatremia, GI, elevated LFTs); atypical (Mycoplasma, Chlamydophila — gradual onset, responds to azithromycin). CURB-65 score: Confusion, Urea >7 mmol/L, RR ≥30, BP <90/60, age ≥65 — score ≥2 = hospitalize; ≥3 = consider ICU. ARDS: acute diffuse inflammatory lung injury — bilateral infiltrates + PaO2/FiO2 <300 + not explained by heart failure/fluid overload. Treatment: low tidal volume ventilation (6 mL/kg IBW — reduces ventilator-induced lung injury), prone positioning (>12h/day), neuromuscular blockade, no liberal fluids.",
    diagnosticCriteria:
      "Asthma: peak flow, SpO2, ABG (hypercapnia in severe asthma = respiratory fatigue — impending failure). Pneumonia: CXR (infiltrate, lobar consolidation vs. interstitial), CBC, BMP, blood cultures for severe/ICU cases, urinary Legionella antigen (detects serogroup 1, most common), Strep pneumoniae urinary antigen. ARDS: Berlin criteria — PaO2/FiO2 <100 (severe), 100–200 (moderate), 200–300 (mild).",
    presentation: {
      chiefComplaint: [
        "\"I can't breathe and my inhaler isn't working\"",
        "\"I have a fever, cough, and difficulty breathing\"",
        "\"I was admitted for pneumonia but keep getting worse\"",
      ],
      associatedSymptoms: [
        "Severe asthma: inability to complete sentences, accessory muscle use, tripod positioning, SpO2 <92%, silent chest (no wheeze = no air movement), paradoxical pulse, HR >120",
        "Pneumonia: fever, productive cough (rusty sputum = Strep pneumo), pleuritic chest pain, tachypnea, decreased breath sounds, egophony (E→A change), dullness to percussion; Legionella: relative bradycardia, hyponatremia, GI symptoms, travel history",
        "ARDS: diffuse crackles, severe hypoxemia (resistant to O2 therapy), bilateral infiltrates, no improvement despite O2 administration, requires mechanical ventilation",
      ],
      demographics: "Asthma mortality: highest in African Americans, those with prior intubation, and those who delay seeking care. ARDS: mortality 40–60% severe; sepsis most common precipitant. CAP hospitalization: immunocompromised, elderly, comorbidities.",
    },
    distinguishingFeatures:
      "Silent chest in asthma: do NOT be reassured — severe obstruction with no airflow to generate wheeze; impending respiratory arrest. ARDS vs. cardiogenic pulmonary edema: ARDS = normal PCWP (<18 mmHg), bilateral infiltrates, diffuse alveolar damage; cardiogenic PE = elevated PCWP, elevated BNP, responds to diuresis. Legionella pneumonia: Pontiac fever (mild, flu-like, no pneumonia) vs. Legionnaires' disease (severe pneumonia with extrapulmonary features — treat with fluoroquinolone or azithromycin).",
    redFlags: [
      "Status asthmaticus with impending respiratory failure (hypercapnia, silent chest, altered consciousness): prepare for intubation; Heliox, IV magnesium sulfate 2g, IV ketamine (bronchodilator + anesthetic) before intubating if possible",
      "ARDS: avoid high tidal volumes (VILI — ventilator-induced lung injury); LTV 6 mL/kg IBW; target plateau pressure <30 cmH2O; PEEP titration; prone positioning ≥12h/day for severe ARDS",
      "Legionella in ICU patient: fluoroquinolone (levofloxacin) or azithromycin IV; not adequately treated by beta-lactams",
    ],
    mnemonics: [
      {
        name: "Asthma Severity and ARDS Berlin Criteria",
        content:
          "Severe Asthma Signs: CHEST\nC — Can't complete sentences\nH — High HR (>120) or PEF <50%\nE — Extra muscles (accessory muscle use)\nS — Silent chest (worst — near-fatal)\nT — Tachypnea >30, SpO2 <92%\n\nStatus Asthmaticus Treatment:\n1. Albuterol + Ipratropium (continuous nebulizer)\n2. IV/PO Steroids (methylprednisolone 125mg IV)\n3. IV Magnesium 2g (bronchodilator, smooth muscle relaxant)\n4. Heliox (low-density gas mixture — reduces work of breathing)\n5. Intubate if above fails (ketamine + succinylcholine)\n\nARDS Berlin: P/F ratio\n<300 = ARDS\n<200 = Moderate\n<100 = Severe\nTreatment: LTV 6 mL/kg + Proning + PEEP",
      },
    ],
    pimpingQuestions: [
      "What does a silent chest in asthma indicate?",
      "What is the CURB-65 score and how does it guide disposition in pneumonia?",
      "What are the Berlin criteria for ARDS?",
      "What is lung-protective ventilation and what are the targets?",
      "What extrapulmonary features suggest Legionella pneumonia?",
    ],
  },

  // ─── Neurologic Emergencies ───────────────────────────────────────────────

  {
    id: "em-neuro-emergencies",
    name: "Neurologic Emergencies: Meningitis, Seizures, and Spinal Cord Injury",
    icdCode: "G03.9",
    rotation: "emergency-medicine",
    category: "Neurology / Emergencies",
    definition:
      "Bacterial meningitis: medical emergency — bacteria in CSF → meningeal inflammation → cerebral edema → herniation. Empiric treatment: ceftriaxone + vancomycin + dexamethasone (before LP if CT needed first, but DO NOT delay antibiotics). Seizure/status epilepticus: benzodiazepines within 5 minutes (IV lorazepam or IM midazolam — most effective for 5–10 min stop); second-line agents at 20 min (fosphenytoin, valproate, levetiracetam, or phenobarbital). Spinal cord injury: immediate stabilization; methylprednisolone controversial; neurogenic shock (bradycardia + hypotension) vs. spinal shock (flaccid paralysis + areflexia → spasticity with recovery). TIA: transient focal neurologic deficit resolving <24h (most <1h); urgently evaluate — ABCD² score for early stroke risk.",
    diagnosticCriteria:
      "Meningitis: LP findings — bacterial: WBC >1000 (PMN predominance), elevated protein (>100 mg/dL), low glucose (<40 or CSF:serum ratio <0.6), positive Gram stain and culture. CT before LP: if papilledema, focal neurologic deficit, new seizure, immunocompromised, or altered consciousness. Seizure: glucose (hypoglycemia — most reversible cause), Na, Ca, EEG (identify focus, confirm status epilepticus). Spinal cord: CT (fracture), MRI (cord contusion, epidural hematoma, ligamentous injury). TIA workup: MRI-DWI (may show early infarct), CTA (carotid stenosis, intracranial), echo (cardiac source), Holter (paroxysmal AF).",
    presentation: {
      chiefComplaint: [
        "\"My child has a stiff neck, fever, and a rash\" (Meningococcal meningitis)",
        "\"My patient is having continuous seizures\" (Status epilepticus)",
        "\"I dove into a pool and can't move my arms or legs\" (Spinal cord injury)",
      ],
      associatedSymptoms: [
        "Bacterial meningitis: fever + stiff neck + headache (classic triad, only 44% have all three); photophobia, phonophobia, Kernig's sign (hip/knee flex, then extend knee → pain), Brudzinski's sign (passive neck flexion → hip/knee flexion); petechial/purpuric rash = meningococcemia",
        "Status epilepticus: continuous seizure >5 min OR ≥2 seizures without return to baseline — airway protection (don't intubate before benzos), IV access, glucose, lorazepam",
        "Spinal cord injury: complete (no motor/sensory below level), incomplete (some preservation — central cord most common — arm > leg weakness); spinal shock = flaccid + areflexia + urinary retention initially",
      ],
      demographics: "Bacterial meningitis: peak in neonates and adolescents (meningococcal); S. pneumoniae most common in adults. N. meningitidis: outbreaks in college dorms, military recruits — Meningococcal vaccine. SE: no age predilection — structural cause (tumor, stroke) more common in elderly.",
    },
    distinguishingFeatures:
      "CT before LP in meningitis: CT FIRST if papilledema/focal deficit/immunocompromised/new seizure/altered MS — but start antibiotics BEFORE CT results. Time is crucial. Viral vs. bacterial meningitis: viral = WBC lower (10–500, lymphocytic predominance), normal glucose, normal-mildly elevated protein, Gram stain negative. Neurogenic shock vs. hypovolemic: neurogenic = bradycardia (loss of sympathetic tone) + hypotension; hypovolemic = tachycardia + hypotension.",
    redFlags: [
      "Bacterial meningitis: start antibiotics (ceftriaxone + vancomycin + dexamethasone) BEFORE LP results — every minute of delay increases mortality",
      "Petechial/purpuric non-blanching rash + fever + stiff neck: meningococcemia → emergent ceftriaxone IV/IM even in pre-hospital setting if available",
      "Status epilepticus >30 minutes: refractory SE → anesthetic doses of propofol, midazolam infusion, or pentobarbital coma; continuous EEG monitoring",
      "Central cord syndrome (hyperextension injury in elderly with cervical spondylosis): arm > leg weakness — most common incomplete SCI; MRI urgently; surgical decompression if appropriate",
    ],
    mnemonics: [
      {
        name: "Meningitis Treatment and Status Epilepticus Protocol",
        content:
          "MENINGITIS: Don't Wait — Give Antibiotics First!\nEmpiric: Ceftriaxone + Vancomycin + Dexamethasone\n(Dexamethasone: reduces mortality in S. pneumo meningitis — 0.15 mg/kg q6h × 4 days)\nAdd Ampicillin if age >50 or immunocompromised (covers Listeria)\n\nLumbar Puncture Bacterial CSF:\nWBC: >1000 (PMN dominant)\nProtein: >100 mg/dL\nGlucose: <40 mg/dL\nCulture: Positive\n\nStatus Epilepticus — '0-5-20-40' Rule:\n0 min: ASSESS (glucose, ABCs, IV access)\n5 min: BENZODIAZEPINE (Lorazepam 0.1 mg/kg IV or Midazolam 10mg IM)\n20 min: 2ND LINE (Fosphenytoin, Valproate, Levetiracetam, or Phenobarbital)\n40 min: ANESTHETIC (Propofol, Midazolam infusion, Pentobarbital)",
      },
    ],
    pimpingQuestions: [
      "What is the empiric treatment for bacterial meningitis?",
      "When should CT be performed before lumbar puncture?",
      "What is the first-line treatment for status epilepticus?",
      "What is the 0-5-20-40 protocol for status epilepticus?",
      "What is neurogenic shock and how does it differ from hemorrhagic shock?",
    ],
  },

  // ─── EENOT Emergencies ────────────────────────────────────────────────────

  {
    id: "em-eye-emergencies",
    name: "Ophthalmic Emergencies: Acute Angle-Closure Glaucoma, Retinal Detachment, and Corneal Abrasion",
    icdCode: "H40.211",
    rotation: "emergency-medicine",
    category: "EENOT / Ophthalmic Emergencies",
    definition:
      "Acute angle-closure glaucoma (AACG): sudden rise in IOP from blocked aqueous drainage → optic nerve ischemia → permanent vision loss within hours if untreated. Risk: hyperopic (farsighted) women, Asian ancestry, mydriatic medications (atropine, antihistamines), dim lighting. Retinal detachment: separation of neurosensory retina from RPE — rhegmatogenous (tear) most common; risk: myopia, prior vitreous detachment, trauma. Central retinal artery occlusion (CRAO): 'stroke of the eye' — painless sudden monocular vision loss; cherry-red spot on fundoscopy. Corneal abrasion: most common eye injury in ED — fluorescein staining + Wood's lamp (cobalt blue) reveals defect; contact lens wearers at risk for Pseudomonas infection.",
    diagnosticCriteria:
      "AACG: tonometry (IOP >21 mmHg — often 40–80 mmHg in acute), mid-dilated non-reactive pupil, corneal edema (hazy), red eye, gonioscopy confirms closed angle. Retinal detachment: fundoscopy (gray-white billowing retina, tobacco dust in vitreous — Shafer's sign, horseshoe-shaped tear); dilated ophthalmoscopy; ultrasound B-scan if view is poor. CRAO: fundoscopy (pale/white retina from ischemia + cherry-red spot at fovea), FFA (fluorescein angiography). Corneal abrasion: fluorescein + slit lamp (defect under cobalt blue light).",
    presentation: {
      chiefComplaint: [
        "\"My eye is extremely painful and red, and I'm seeing halos around lights\" (AACG)",
        "\"I see a dark curtain coming over my vision\" (Retinal detachment)",
        "\"Something got in my eye and it feels like it's still there\" (Corneal abrasion)",
      ],
      associatedSymptoms: [
        "AACG: acute severe eye pain, headache, nausea/vomiting, blurred vision, halos around lights, rock-hard eye on palpation, mid-dilated non-reactive pupil, corneal edema",
        "Retinal detachment: floaters (Weiss ring = posterior vitreous detachment, precursor), photopsia (flashes of light from traction on retina), then dark curtain or shadow from periphery (which part goes dark = opposite side of detachment)",
        "CRAO: sudden painless complete monocular vision loss; afferent pupillary defect (APD = Marcus Gunn pupil); pale retina with cherry-red spot (fovea retains blood supply from choroid)",
        "Corneal abrasion: foreign body sensation (even without visible FB), tearing, photophobia, blepharospasm, erythema",
      ],
      demographics: "AACG: hyperopic, older (>60), female, Asian. Retinal detachment: myopic patients, elderly, trauma. CRAO: atherosclerosis, AF, carotid artery disease, elderly.",
    },
    distinguishingFeatures:
      "AACG: RED EYE + PAIN + DECREASED VISION + HALOS + NAUSEA. The key features distinguishing AACG from conjunctivitis: AACG = hazy cornea, mid-dilated non-reactive pupil, hard eye, severely reduced vision; conjunctivitis = clear cornea, reactive pupil, normal vision. CRAO vs. CRVO: CRAO = pale retina, arterial, cherry-red spot; CRVO = 'blood and thunder' (flame hemorrhages in all 4 quadrants), venous. Treatment: CRAO — ocular massage (dislodge embolus), hypercarbia (5% CO2 or rebreathing), IOP lowering, stroke workup (embolic source).",
    redFlags: [
      "AACG: ophthalmology emergency — IOP lowering within minutes (timolol + brimonidine + dorzolamide eye drops) + IV acetazolamide (systemic CAI) + pilocarpine (miotic — opens angle) + IV mannitol; definitive = laser peripheral iridotomy",
      "Retinal detachment involving macula: visual outcome much worse if macula involved; urgent vitreoretinal surgery within 24h for macula-on detachment; same-day for macula-off",
      "CRAO: no proven definitive treatment; must initiate TIA workup (find embolic source — treat to prevent stroke)",
    ],
    mnemonics: [
      {
        name: "Eye Emergency Distinctions",
        content:
          "AACG (Acute Angle-Closure Glaucoma):\nRed eye + Pain + Hazy cornea + Mid-dilated NON-reactive pupil\n+ Halos + Nausea/vomiting + Rock-hard eye\n→ OPHTHALMOLOGY STAT\n→ Timolol + Brimonidine + Pilocarpine + IV Acetazolamide\n\nRetinal Detachment:\nFlashes → Floaters → Dark curtain from periphery\n'Tobacco dust' = Shafer's sign in vitreous (RPE cells)\n→ Urgent vitreoretinal surgery\n\nCRAO (Retinal 'Stroke'):\nPainless sudden monocular vision loss\nPale retina + Cherry-red spot at fovea\n→ Ocular massage + IOP lowering + Stroke workup\n\nCorneal Abrasion:\nFluorescein + Cobalt blue light = Green glow\nContact lens wearers: anti-Pseudomonal coverage (ciprofloxacin eye drops)\nNo eye patch for contact lens wearers",
      },
    ],
    pimpingQuestions: [
      "What are the classic features of acute angle-closure glaucoma?",
      "What is the initial emergency treatment for AACG?",
      "What is Shafer's sign in retinal detachment?",
      "What is the fundoscopic appearance of central retinal artery occlusion?",
      "Why should contact lens wearers with corneal abrasion NOT be patched?",
    ],
  },

  {
    id: "em-ent-emergencies",
    name: "ENT Emergencies: Epistaxis, Peritonsillar Abscess, and Vertigo",
    icdCode: "R04.0",
    rotation: "emergency-medicine",
    category: "EENOT / ENT Emergencies",
    definition:
      "Epistaxis (nosebleed): anterior (most common, 90%) — Kiesselbach's plexus (Little's area), superficial veins, easier to visualize and control; posterior (10%, more serious) — Woodruff's plexus, sphenopalatine artery — associated with hypertension, arterial, can compromise airway. Peritonsillar abscess (PTA): most common deep space infection — pus between tonsil and pharyngeal constrictor; treat with needle aspiration + antibiotics (PCN G or amoxicillin-clavulanate). Retropharyngeal abscess (RPA): posterior pharyngeal wall — young children, stiff neck, stridor, life-threatening airway compromise. Vertigo: vestibular system dysfunction — central (brainstem/cerebellum — DANGEROUS) vs. peripheral (inner ear — BPPV most common, vestibular neuritis, Meniere's). HINTS exam distinguishes peripheral from central.",
    diagnosticCriteria:
      "Epistaxis: direct visualization with headlamp; identify Kiesselbach's area (anterior) vs. visualize posterior source. Management: Anterior — pinch nose 15 min + oxymetazoline (nasal decongestant vasoconstrictor); if fails → silver nitrate cauterization or Rapid Rhino/Merocel packing; Posterior — bilateral balloon packing or interventional radiology (sphenopalatine artery embolization). Vertigo: HINTS exam (Head Impulse test, Nystagmus, Test of Skew) — peripheral: abnormal head impulse + unidirectional nystagmus + no skew deviation; central: normal head impulse (concerning!) + direction-changing nystagmus or vertical nystagmus + skew deviation. MRI-DWI: gold standard for posterior fossa stroke.",
    presentation: {
      chiefComplaint: [
        "\"My nose won't stop bleeding\"",
        "\"I have severe sore throat with muffled voice and drooling\"",
        "\"The room is spinning when I roll over in bed\"",
      ],
      associatedSymptoms: [
        "Epistaxis: visible bleeding from nostril; anterior = unilateral, easily visualized; posterior = bilateral, blood draining into pharynx, worse with anticoagulants",
        "PTA: unilateral throat swelling, uvular deviation, hot potato voice, trismus, drooling, odynophagia",
        "BPPV (Benign Paroxysmal Positional Vertigo): brief episodes of vertigo (<1 min) with position change (rolling over in bed, looking up); positive Dix-Hallpike test; treat with Epley maneuver",
        "Vestibular neuritis: sudden onset persistent vertigo (days), nausea/vomiting, positive head impulse test (VOR failure), no hearing loss, normal HINTS (peripheral pattern)",
        "Meniere's disease: episodic vertigo + unilateral sensorineural hearing loss + tinnitus + aural fullness; treat with diuretics, low-sodium diet, meclizine for acute attacks",
      ],
      demographics: "Epistaxis: children (anterior — digital trauma), elderly/hypertensive (posterior — arterial). PTA: adolescents and young adults. BPPV: most common cause of vertigo, posterior semicircular canal most common; women >men.",
    },
    distinguishingFeatures:
      "HINTS exam for vertigo in ED: peripheral vertigo (safe = BPPV, vestibular neuritis) vs. central vertigo (stroke/cerebellar — DANGEROUS): Normal head impulse test = CENTRAL (more concerning — VOR intact means the lesion is NOT peripheral); direction-changing nystagmus or vertical nystagmus = CENTRAL; skew deviation = CENTRAL. HINTS has higher sensitivity for posterior fossa stroke than early MRI. Meniere's vs. vestibular neuritis: Meniere's = episodic + hearing loss + tinnitus; vestibular neuritis = continuous + no hearing loss.",
    redFlags: [
      "Posterior epistaxis: bilateral posterior packing → hospital admission (can cause airway compromise, hypoxia in elderly) → IR embolization if refractory",
      "PTA with airway compromise: emergent drainage + airway management (ENT, anesthesia, nasopharyngoscopy)",
      "Central vertigo (stroke): HINTS exam with central features → MRI-DWI immediately; posterior circulation stroke — NIHSS may be deceptively low",
      "RPA: CT neck with contrast → OR for incision and drainage + airway protection",
    ],
    mnemonics: [
      {
        name: "HINTS Exam for Vertigo — Central vs. Peripheral",
        content:
          "HINTS Exam (done in acute vertigo):\nH — Head Impulse test: PERIPHERAL if corrective saccade (VOR failure = good!)\n    CENTRAL if normal (VOR intact = bad!)\nI — (pattern of) nystagmus: PERIPHERAL = unidirectional, suppressed by fixation\n    CENTRAL = direction-changing or VERTICAL (always CENTRAL)\nT — Test of Skew deviation: CENTRAL if present\n\nMemory: 'INFARCT = Central'\nImpulse Normal, Fast-phase Alternating, Refixation on Cover Test → = STROKE\n\nBPPV: Positional + Brief (<1 min) + Dix-Hallpike positive\n→ Epley maneuver (canal repositioning)\n\nMeniere's: Episodic Vertigo + Hearing Loss + Tinnitus + Aural Fullness\n→ Diuretics + Low-sodium diet",
      },
    ],
    pimpingQuestions: [
      "What is Kiesselbach's plexus and why is it important in epistaxis?",
      "What are the HINTS exam findings that suggest central vs. peripheral vertigo?",
      "What is the Epley maneuver and when is it used?",
      "How do you treat anterior epistaxis?",
      "What distinguishes vestibular neuritis from Meniere's disease?",
    ],
  },

  // ─── Psychiatric Emergencies ──────────────────────────────────────────────

  {
    id: "em-psych-emergencies",
    name: "Psychiatric Emergencies: Suicidality, Alcohol Withdrawal, and Acute Psychosis",
    icdCode: "T14.91XA",
    rotation: "emergency-medicine",
    category: "Psychiatric / Behavioral Health",
    definition:
      "Suicidal ideation and assessment: SLAP mnemonic for lethality assessment (Specific plan, Lethality of plan, Availability of means, Proximity to help). Risk factors: prior attempt (strongest predictor), depression, male (higher lethality), elderly, white, social isolation, substance use, access to firearms. Alcohol withdrawal: spectrum from mild (tremors, diaphoresis, anxiety — 6–24h) to moderate (seizures — peak 24–48h) to severe (delirium tremens — DTs, peak 48–72h; autonomic instability, confusion, hallucinations — mortality 5–15% if untreated). Acute psychosis: new onset psychosis in ED — broad differential (schizophrenia, bipolar, substance-induced, medical causes). Excited delirium (ExD): agitation + hyperthermia + diaphoresis + superhuman strength + impaired pain perception — high risk of sudden death; often associated with cocaine, stimulants.",
    diagnosticCriteria:
      "Alcohol withdrawal: CIWA-Ar scale (Clinical Institute Withdrawal Assessment for Alcohol) — guides benzodiazepine dosing. Delirium tremens: confusion + autonomic hyperactivity (tachycardia, hypertension, diaphoresis, fever) + hallucinations (visual/tactile — 'pink elephants,' crawling skin). Labs for alcohol withdrawal: BMP, Mg, phosphate, thiamine level; glucose; CBC; LFTs. Acute psychosis workup: rule out organic cause — glucose, BMP, CBC, thyroid, urine drug screen, LFTs, B12, RPR/HIV (if first-episode psychosis), head CT. MSE (Mental Status Examination) components: Appearance, Behavior, Cooperation, Speech, Mood/Affect, Thought process/content, Perceptions, Insight/Judgment, Cognition.",
    presentation: {
      chiefComplaint: [
        "\"I'm thinking about killing myself\"",
        "\"I've been drinking heavily and stopped yesterday — now I'm trembling\"",
        "\"This patient is combative and saying things that don't make sense\"",
      ],
      associatedSymptoms: [
        "Alcohol withdrawal: tremors, diaphoresis, nausea/vomiting, tachycardia, hypertension, anxiety, insomnia (early, 6–24h); seizures at 24–48h (generalized tonic-clonic — brief, self-limited); DTs (48–72h): visual/tactile hallucinations, confusion, fever, autonomic instability",
        "Suicidality: active ideation with plan/intent (psychiatric emergency, often requires involuntary hold), passive ideation (depressive thoughts without plan)",
        "Acute psychosis: delusions (fixed false beliefs), hallucinations (auditory most common in schizophrenia), disorganized speech/behavior, agitation, negative symptoms (avolition, flat affect, alogia)",
      ],
      demographics: "Alcohol withdrawal seizures: occur 24–48h after last drink; single seizure is typical (multiple = check for other causes). DTs: develops in ~5% of withdrawing alcoholics; mortality 1–5% with treatment, higher if untreated. Suicide: leading cause of death 10–34 years in US.",
    },
    distinguishingFeatures:
      "Alcohol withdrawal vs. alcohol intoxication: withdrawal = tremors, anxiety, autonomic hyperactivity AFTER stopping; intoxication = CNS depression, ataxia, slurred speech, sedation. DTs hallucinations vs. Wernicke's encephalopathy: DTs = agitation + autonomic instability; Wernicke's = triad of confusion + ophthalmoplegia (lateral gaze palsy or nystagmus) + ataxia — treat with thiamine 500mg IV BEFORE glucose. Medical mimics of psychosis: hypoglycemia, hyper/hypothyroidism, encephalitis, uremia, hepatic encephalopathy, stimulant use, steroid psychosis — must rule out.",
    redFlags: [
      "Delirium tremens (DTs): ICU level care; IV benzodiazepines (lorazepam or diazepam) — CIWA-guided; phenobarbital for refractory DTs; IV thiamine 500mg TID × 3 days; monitor for aspiration, electrolyte derangements",
      "Active suicidal ideation with plan: psychiatric hold (5150 in California, Baker Act in Florida — involuntary 72h evaluation); remove access to means; psychiatric consultation",
      "Excited delirium: do NOT leave alone; avoid prone restraint (positional asphyxia); IM ketamine (fastest chemical sedation) or IM droperidol; active cooling (hyperthermia kills)",
      "First-episode psychosis in young patient: rule out autoimmune encephalitis (anti-NMDA receptor — young women, ovarian teratoma, CSF pleocytosis) before labeling as schizophrenia",
    ],
    mnemonics: [
      {
        name: "Alcohol Withdrawal Timeline — '6-12-48-72'",
        content:
          "6–24 HOURS: Tremors, anxiety, diaphoresis, nausea, insomnia (minor withdrawal)\n24–48 HOURS: SEIZURES (generalized tonic-clonic; give benzodiazepines)\n48–72 HOURS: DELIRIUM TREMENS (DTs) — agitation + autonomic instability + visual/tactile hallucinations\n\nDTs Treatment: IV Benzodiazepines (lorazepam, diazepam) guided by CIWA-Ar\n+ Thiamine 500mg IV (before glucose — Wernicke's prevention)\n+ Correct electrolytes (hypomagnesemia, hypophosphatemia, hypokalemia)\n\nWernicke's Triad: Confusion + Ophthalmoplegia + Ataxia\n→ Thiamine FIRST before any glucose (glucose without thiamine → precipitates Wernicke's)\n\nSuicide Risk: Prior attempt = STRONGEST risk factor\nLethal means counseling (firearms removal) reduces mortality",
      },
    ],
    pimpingQuestions: [
      "What is the timeline of alcohol withdrawal and when do DTs typically occur?",
      "What is the first-line treatment for delirium tremens?",
      "Why must thiamine be given before glucose in alcoholic patients?",
      "What is Wernicke's encephalopathy and what is its classic triad?",
      "What is the strongest risk factor for completed suicide?",
    ],
  },

  // ─── Toxicology Emergencies ───────────────────────────────────────────────

  {
    id: "em-toxicology",
    name: "Toxicologic Emergencies: Opioid OD, Carbon Monoxide, and Drug Toxidromes",
    icdCode: "T40.0X1A",
    rotation: "emergency-medicine",
    category: "Toxicology / Poisoning",
    definition:
      "Opioid overdose: classic triad — respiratory depression (RR <12, apnea) + miosis (pinpoint pupils) + decreased consciousness. Naloxone (IV, IM, IN) reverses rapidly — but duration of opioid may exceed naloxone (re-narcotization risk). Carbon monoxide (CO) poisoning: odorless, colorless gas → binds hemoglobin 250× affinity over O2 → functional anemia; SpO2 falsely NORMAL on pulse oximetry (carboxyhemoglobin and oxyhemoglobin look the same to pulse ox). Toxidromes: recognizable syndromes from specific drug classes — cholinergic (DUMBELS: Diarrhea, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Salivation — organophosphates, nerve agents → treat with atropine + pralidoxime), anticholinergic ('Mad as a hatter, blind as a bat, red as a beet, hot as a hare, dry as a bone'), sympathomimetic (cocaine, amphetamines — HTN, tachycardia, diaphoresis, mydriasis), opioid (miosis, respiratory depression, decreased consciousness).",
    diagnosticCriteria:
      "Opioid OD: clinical diagnosis; urine toxicology (screens, but doesn't identify all opioids — fentanyl often missed); trial of naloxone (both diagnostic and therapeutic). CO poisoning: co-oximetry (arterial or venous blood gas — measures carboxyhemoglobin, COHgb); pulse ox unreliable. Organophosphate poisoning: clinical + decreased RBC cholinesterase (serum pseudocholinesterase — indirect marker). Tricyclic antidepressant (TCA) overdose: QRS widening (>100 ms) on EKG → sodium bicarbonate IV (narrows QRS, prevents dysrhythmia).",
    presentation: {
      chiefComplaint: [
        "\"Someone found unconscious with needle marks and isn't breathing well\" (Opioid OD)",
        "\"Multiple people in a house with headaches and flu-like symptoms\" (CO poisoning)",
        "\"My patient has excessive secretions, bradycardia, and muscle fasciculations\" (Organophosphate)",
      ],
      associatedSymptoms: [
        "Opioid OD: GCS decreased, RR <12, pinpoint miosis, slow breathing or apnea, cyanosis; needle track marks; do NOT give flumazenil if co-ingestion uncertain (precipitates seizures in benzo-dependent)",
        "CO poisoning: headache (first symptom — often dismissed as flu), dizziness, confusion, nausea, syncope; cherry-red skin (late, unreliable finding); patient found on natural gas appliances or in enclosed space in winter",
        "Anticholinergic: tachycardia, hyperthermia, dry flushed skin, mydriasis, urinary retention, ileus, agitation, hallucinations — treatment: physostigmine (if severe) or benzodiazepines for agitation",
        "Sympathomimetic (cocaine/amphetamines): hypertension, tachycardia, diaphoresis, hyperthermia, agitation, mydriasis, chest pain (coronary vasospasm); do NOT use beta-blockers in cocaine-induced MI (unopposed alpha — worsens vasospasm) — use benzodiazepines, phentolamine (alpha-blocker)",
      ],
      demographics: "Opioid OD: increasing across all demographics; prescription opioids + fentanyl-contaminated street drugs. CO poisoning: most common in winter (faulty heating systems, enclosed garages, fires); house fires; cannot be smelled.",
    },
    distinguishingFeatures:
      "CO poisoning diagnosis: NEVER rely on pulse oximetry (falsely normal). Diagnose with ABG co-oximetry (COHgb >25% = severe toxicity). Treatment: 100% O2 via NRB mask (reduces CO half-life from 5h to 60–90 min); hyperbaric O2 (COHgb >25%, neurologic symptoms, cardiac toxicity, pregnancy — reduces CO half-life to <30 min, prevents delayed neurological sequelae). TCA overdose: QRS >100 ms + RV in aVR → sodium bicarbonate bolus 1–2 mEq/kg → target arterial pH 7.45–7.55 (alkalinization increases protein binding of TCAs).",
    redFlags: [
      "Opioid OD with respiratory failure: naloxone 0.4–2 mg IV/IM/IN immediately; repeat q2–3 min up to 10 mg; if no response after 10 mg → NOT purely opioid OD",
      "CO poisoning in pregnant patient: treat more aggressively with hyperbaric O2 (fetal hemoglobin has even higher affinity for CO; fetal COHgb level twice maternal level)",
      "Organophosphate poisoning: atropine (LARGE doses — 2–4 mg IV q5–10 min until secretions dry — NOT for reversal of bradycardia) + pralidoxime (2-PAM, reactivates cholinesterase before 'aging'); remove clothing, decontaminate (provider protection!)",
      "TCA overdose with wide QRS: sodium bicarbonate IV bolus → infusion; avoid physostigmine (can cause seizures/cardiac arrest in TCA toxicity)",
    ],
    mnemonics: [
      {
        name: "Toxidromes — DUMBELS and ABCDE",
        content:
          "CHOLINERGIC (DUMBELS):\nD — Diarrhea/Defecation\nU — Urination\nM — Miosis\nB — Bradycardia/Bronchospasm/Bronchorrhea\nE — Emesis\nL — Lacrimation\nS — Salivation/Sweating\n→ Organophosphates → Atropine + Pralidoxime\n\nANTICHOLINERGIC ('mad, blind, red, hot, dry'):\nMad as a hatter (agitation, delirium)\nBlind as a bat (mydriasis, blurred vision)\nRed as a beet (flushed skin)\nHot as a hare (hyperthermia)\nDry as a bone (anhidrosis, constipation)\n\nCO Poisoning: Pulse Ox = FALSELY NORMAL\n→ Only ABG co-oximetry is accurate\n→ 100% O2 → hyperbaric if severe/pregnant\n\nOpioid Triad: Respiratory depression + Miosis + Decreased consciousness\n→ Naloxone (may need repeat doses — fentanyl)",
      },
    ],
    pimpingQuestions: [
      "Why is pulse oximetry unreliable in carbon monoxide poisoning?",
      "What is the antidote for opioid overdose and how is it dosed?",
      "What are the indications for hyperbaric oxygen in CO poisoning?",
      "What is the treatment for organophosphate poisoning?",
      "Why are beta-blockers contraindicated in cocaine-induced chest pain?",
    ],
  },

  // ─── Other Emergency Conditions ───────────────────────────────────────────

  {
    id: "em-endocrine-hematologic",
    name: "Endocrine and Hematologic Emergencies: HHS, Adrenal Crisis, Thyroid Storm, and Sickle Cell Crisis",
    icdCode: "E11.01",
    rotation: "emergency-medicine",
    category: "Endocrine / Hematologic Emergencies",
    definition:
      "Hyperosmolar hyperglycemic state (HHS): type 2 DM — very high glucose (>600 mg/dL), severe hyperosmolality (>320 mOsm/L), minimal ketosis, profound dehydration; mortality 5–20% (higher than DKA); more insidious onset than DKA. Adrenal crisis (Addisonian crisis): acute adrenal insufficiency — severe hypotension + hyponatremia + hyperkalemia + hypoglycemia; triggered by physiologic stress (surgery, illness) in patient with known or unknown adrenal insufficiency or chronic steroid use. Thyroid storm: life-threatening thyroid hormone excess — fever + tachycardia + altered mental status + GI symptoms (Burch-Wartofsky score ≥45). Sickle cell crisis (vaso-occlusive episode, VOE): most common ED presentation — severe pain from vascular occlusion; acute complications: acute chest syndrome (#1 cause of SCD death), aplastic crisis (parvovirus B19), stroke, priapism, splenic sequestration.",
    diagnosticCriteria:
      "HHS: glucose >600 + serum osmolality >320 + pH >7.3 (no significant acidosis) + minimal ketones. Treatment: aggressive IV fluids (isotonic NS first, then 0.45% NS when hemodynamically stable), insulin (after hydration — glucose drops fast with fluids alone in HHS), electrolyte replacement. Adrenal crisis: cortisol level (low, ideally before steroids) + ACTH stimulation test to distinguish primary vs. secondary; hyperkalemia + hyponatremia + eosinophilia + hypoglycemia on labs. Thyroid storm: TSH, free T4, CBC (leukocytosis), LFTs; no single lab confirms. Sickle cell: CBC (Hgb 6–10, elevated reticulocytes), peripheral smear (sickle cells), chest X-ray (acute chest syndrome — new infiltrate), exchange transfusion for ACS/stroke.",
    presentation: {
      chiefComplaint: [
        "\"I have type 2 diabetes and haven't felt right for days, becoming confused\" (HHS)",
        "\"I take steroids and now I'm hypotensive and vomiting\" (Adrenal crisis)",
        "\"I have sickle cell disease and severe bone pain\" (Sickle cell VOE)",
      ],
      associatedSymptoms: [
        "HHS: profound dehydration, polydipsia, polyuria for days/weeks, no Kussmaul breathing (no acidosis), confusion, seizures, focal neurological deficits; elderly type 2 DM",
        "Adrenal crisis: hypotension unresponsive to IV fluids, weakness, abdominal pain, nausea/vomiting, electrolyte abnormalities (hyponatremia + hyperkalemia); hyperpigmentation in primary AI (Addison's)",
        "Thyroid storm: hyperthermia (>38.5°C), tachycardia (AF most common arrhythmia), agitation, confusion, diarrhea, tremor; precipitated by surgery, infection, iodine exposure, RAI",
        "Sickle cell VOE: severe bone pain (dactylitis — 'hand-foot syndrome' in young children), fever; ACS = new infiltrate + chest pain + hypoxia in SCD patient = EMERGENCY (leading cause of death)",
      ],
      demographics: "HHS: elderly type 2 DM; often triggered by infection, missed medications, new illness. Adrenal crisis: chronic steroid users who suddenly stop or don't increase dose with illness. Thyroid storm: patients with untreated/undertreated Graves' disease. SCD: African Americans, Mediterranean, Middle Eastern.",
    },
    distinguishingFeatures:
      "DKA vs. HHS: DKA = type 1 DM, younger, glucose 250–600, pH <7.3, anion gap acidosis, ketones present; HHS = type 2 DM, older, glucose >600, pH >7.3, minimal ketones, profound dehydration, higher mortality. Thyroid storm treatment (PTU first, then iodine — never give iodine before blocking new hormone synthesis): PTU (propylthiouracil — blocks synthesis AND peripheral conversion) or methimazole + iodine (Lugol's — given 1h after PTU) + propranolol (HR control) + steroids (dexamethasone — reduces T4→T3 conversion) + antipyretics (acetaminophen, NOT aspirin — displaces T4 from binding proteins).",
    redFlags: [
      "Adrenal crisis: hydrocortisone 100 mg IV IMMEDIATELY (life-saving) + IV saline; do NOT delay for labs when clinical suspicion is high",
      "Acute chest syndrome in SCD: O2 therapy + analgesics + exchange transfusion (Hgb S <30%) + bronchodilators; escalates rapidly to respiratory failure",
      "Thyroid storm: cooling blankets + acetaminophen (NOT aspirin); PTU first → then Lugol's iodine 1h later → propranolol IV → hydrocortisone",
      "Sickle cell priapism (>4 hours): urologic emergency → IV hydration + analgesics + aspiration/irrigation of corpora cavernosa; exchange transfusion; delay causes permanent erectile dysfunction",
    ],
    mnemonics: [
      {
        name: "Thyroid Storm vs. DKA vs. HHS",
        content:
          "THYROID STORM Treatment (ABCDE):\nA — Anti-thyroid drugs FIRST (PTU 600mg load then 200mg q8h)\nB — Block conversion: Dexamethasone (reduces T4→T3)\nC — Control HR: Propranolol (IV beta-blocker)\nD — Delay iodine 1 hour after PTU (Lugol's iodine)\nE — Extra support: cooling, acetaminophen, fluids, ICU\n\nDKA vs. HHS:\nDKA: Young T1DM, pH <7.3, AG acidosis, ketones, glucose 250–600\nHHS: Elderly T2DM, pH >7.3, minimal ketones, glucose >600, severe dehydration\n\nAdrenal Crisis: 'Stress dose steroids' = Hydrocortisone 100mg IV STAT\n\nSickle Cell ACS: New infiltrate + Chest pain + Hypoxia in SCD = EXCHANGE TRANSFUSION",
      },
    ],
    pimpingQuestions: [
      "How does HHS differ from DKA?",
      "What is the first treatment for adrenal crisis?",
      "What is the order of drug administration in thyroid storm and why is iodine given after PTU?",
      "What is acute chest syndrome and why is it life-threatening in sickle cell disease?",
      "What is the treatment for sickle cell priapism?",
    ],
  },
];
