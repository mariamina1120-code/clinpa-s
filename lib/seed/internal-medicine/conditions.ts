import type { Condition } from "@/types";

export const internalMedicineConditions: Condition[] = [
  {
    id: "im-chf",
    name: "Congestive Heart Failure",
    icdCode: "I50.9",
    rotation: "internal-medicine",
    category: "Cardiology",
    definition:
      "Congestive heart failure (CHF) is a clinical syndrome in which the heart cannot pump sufficient blood to meet the metabolic demands of the body or does so only at elevated filling pressures. It may be classified as heart failure with reduced ejection fraction (HFrEF, EF <40%), heart failure with mildly reduced EF (HFmrEF, EF 40–49%), or heart failure with preserved ejection fraction (HFpEF, EF ≥50%). The syndrome results in fluid accumulation (congestion) and reduced tissue perfusion.",
    diagnosticCriteria:
      "Framingham criteria require 2 major OR 1 major + 2 minor criteria. Major: PND, orthopnea, elevated JVP, pulmonary rales, cardiomegaly on CXR, acute pulmonary edema, S3 gallop, hepatojugular reflux, weight loss >4.5 kg in 5 days on treatment. Minor: bilateral ankle edema, nocturnal cough, dyspnea on exertion, hepatomegaly, pleural effusion, vital capacity reduced by 1/3. BNP >100 pg/mL or NT-proBNP >300 pg/mL supports diagnosis.",
    presentation: {
      chiefComplaint: [
        "Shortness of breath",
        "Swelling in legs",
        "Can't lie flat",
        "Waking up short of breath at night",
        "Weight gain",
      ],
      associatedSymptoms: [
        "Orthopnea (2–3 pillow)",
        "Paroxysmal nocturnal dyspnea",
        "Exertional dyspnea",
        "Peripheral pitting edema",
        "Fatigue and exercise intolerance",
        "Nocturia",
        "Decreased appetite, early satiety (right HF)",
        "Bendopnea (dyspnea when bending forward)",
      ],
      demographics:
        "Affects ~6.7 million Americans; prevalence rises sharply after age 65. HFpEF predominates in older women with hypertension, obesity, and diabetes. HFrEF more common in men with ischemic heart disease or dilated cardiomyopathy.",
    },
    distinguishingFeatures:
      "S3 gallop (volume overload), elevated JVP, bilateral crackles, pitting edema to the sacrum or lower extremities, and CXR showing cardiomegaly with pulmonary vascular congestion, Kerley B lines, or bat-wing perihilar edema. BNP/NT-proBNP elevation distinguishes cardiac from pulmonary cause of dyspnea.",
    redFlags: [
      "Oxygen saturation <90% on room air",
      "Respiratory rate >30 bpm",
      "SBP <90 mmHg (cardiogenic shock)",
      "New S3 or S4 with rapid clinical deterioration",
      "Worsening renal function (cardiorenal syndrome)",
      "Altered mental status",
    ],
    mnemonics: [
      {
        name: "FACES (HF symptoms)",
        content:
          "Fatigue, Activity limitation, Chest congestion/cough, Edema (ankle), Shortness of breath",
      },
      {
        name: "LMNOP (acute HF management)",
        content:
          "Lasix (furosemide), Morphine (cautious use), Nitrates, Oxygen, Position (upright)",
      },
    ],
    pimpingQuestions: [
      "What is the difference between HFrEF and HFpEF, and how does management differ?",
      "What is the pathophysiology of the S3 gallop in heart failure?",
      "Why does BNP elevation not always indicate heart failure?",
      "How do you classify heart failure severity using the NYHA functional classification?",
      "What is cardiorenal syndrome, and which type is most relevant in acute decompensated HF?",
    ],
  },
  {
    id: "im-copd-exacerbation",
    name: "COPD Exacerbation",
    icdCode: "J44.1",
    rotation: "internal-medicine",
    category: "Pulmonology",
    definition:
      "An acute exacerbation of COPD (AECOPD) is defined as an acute worsening of respiratory symptoms beyond normal day-to-day variation that leads to a change in medication. The three cardinal symptoms are increased dyspnea, increased sputum production, and change in sputum color (purulence). Exacerbations accelerate lung function decline and carry significant morbidity and mortality.",
    diagnosticCriteria:
      "Anthonisen criteria classify exacerbations: Type 1 (severe) — all three cardinal symptoms; Type 2 (moderate) — two of three; Type 3 (mild) — one symptom plus one of: URI within 5 days, fever, increased wheeze, increased cough, or increased RR/HR by 20% over baseline. Spirometry FEV1/FVC <0.70 post-bronchodilator confirms underlying COPD. ABG guides severity assessment.",
    presentation: {
      chiefComplaint: [
        "Worsening shortness of breath",
        "Increased cough with colored sputum",
        "Wheezing",
        "Chest tightness",
      ],
      associatedSymptoms: [
        "Pursed-lip breathing",
        "Use of accessory muscles",
        "Barrel chest (chronic finding)",
        "Cyanosis (severe)",
        "Altered mental status (hypercapnic encephalopathy)",
        "Pedal edema (cor pulmonale)",
      ],
      demographics:
        "Primarily affects adults >40 years with significant smoking history (>10 pack-years). Also seen with occupational dust/chemical exposure. Alpha-1 antitrypsin deficiency causes COPD in younger, non-smoking patients.",
    },
    distinguishingFeatures:
      "Prolonged expiratory phase, diffuse expiratory wheezes, diminished breath sounds, hyperresonance on percussion, and signs of air trapping (barrel chest, low diaphragm on CXR). Hypercapnia (PaCO2 >45) with compensated respiratory acidosis is characteristic of severe COPD; hypoxia is present but patient often tolerates SpO2 88–92% (hypoxic drive concern).",
    redFlags: [
      "SpO2 <88% or PaO2 <60 mmHg on supplemental O2",
      "pH <7.25 (severe respiratory acidosis)",
      "PaCO2 rising despite treatment (impending respiratory failure)",
      "Altered mental status or somnolence",
      "Accessory muscle use with paradoxical breathing",
      "New right heart failure signs",
    ],
    mnemonics: [
      {
        name: "COPD PANIC (triggers)",
        content:
          "Pneumonia, Air pollution, Non-compliance with medications, Infection (viral URI), Cardiac failure",
      },
      {
        name: "STAMP (AECOPD treatment)",
        content:
          "Steroids, Theophylline (rarely), Antibiotics, Magnesium (rarely), Pulmonary rehab post-discharge",
      },
    ],
    pimpingQuestions: [
      "What are the GOLD criteria for COPD staging, and what FEV1 defines each stage?",
      "Why do we target SpO2 88–92% rather than >95% in COPD exacerbations?",
      "What are the indications for BiPAP/NIV in AECOPD versus intubation?",
      "Which antibiotics are recommended for AECOPD, and when are they indicated?",
      "How does auto-PEEP develop in COPD, and why is it dangerous during mechanical ventilation?",
    ],
  },
  {
    id: "im-cap",
    name: "Community-Acquired Pneumonia",
    icdCode: "J18.9",
    rotation: "internal-medicine",
    category: "Pulmonology / Infectious Disease",
    definition:
      "Community-acquired pneumonia (CAP) is an acute infection of the lung parenchyma occurring in a patient who has not been hospitalized within the preceding 90 days and does not reside in a long-term care facility. It is characterized by alveolar consolidation caused by bacterial, viral, or atypical pathogens. CAP is the most common infectious cause of death in the United States.",
    diagnosticCriteria:
      "Clinical criteria: new infiltrate on CXR PLUS two of the following — fever (>38°C) or hypothermia (<36°C), leukocytosis (WBC >10,000) or leukopenia (<4,000), purulent sputum, signs/symptoms of pneumonia (cough, dyspnea, pleuritic chest pain, altered breath sounds). Severity stratified by PSI/PORT score or CURB-65 (Confusion, Urea >7 mmol/L, RR ≥30, BP <90/60, Age ≥65) — score ≥2 warrants hospitalization.",
    presentation: {
      chiefComplaint: [
        "Fever and cough",
        "Shortness of breath",
        "Productive cough with green or rust-colored sputum",
        "Pleuritic chest pain",
      ],
      associatedSymptoms: [
        "Rigors/chills",
        "Night sweats",
        "Fatigue and malaise",
        "Decreased appetite",
        "Confusion (elderly)",
        "Pleuritic chest pain",
        "Hemoptysis (rare)",
      ],
      demographics:
        "Affects all age groups; highest mortality in elderly (>65), immunocompromised, and those with comorbidities (DM, COPD, CHF, CKD). Streptococcus pneumoniae is the most common bacterial pathogen. Atypical pathogens (Mycoplasma, Legionella, Chlamydophila) more common in younger, healthy patients.",
    },
    distinguishingFeatures:
      "Classic 'lobar pneumonia' with S. pneumoniae presents with abrupt fever, rigors, rust-colored sputum, and lobar consolidation on CXR. Atypical 'walking pneumonia' (Mycoplasma) presents subacutely with dry cough, headache, and patchy bilateral infiltrates. Legionella causes Pontiac fever phenotype with GI symptoms, hyponatremia, and relative bradycardia.",
    redFlags: [
      "SpO2 <90% or PaO2/FiO2 <250 (severe CAP — ICU criterion)",
      "Septic shock requiring vasopressors",
      "RR >30 bpm",
      "Multilobar or bilateral infiltrates",
      "Requirement for mechanical ventilation",
      "Cavitation on imaging (think Staph, Klebsiella, TB)",
    ],
    mnemonics: [
      {
        name: "CURB-65",
        content:
          "Confusion, Urea >7 mmol/L (BUN >19), Respiratory rate ≥30, Blood pressure <90/60, Age ≥65 — score 0–1: outpatient; 2: consider admission; ≥3: hospitalize/ICU",
      },
      {
        name: "CAP Pathogens by Patient Type",
        content:
          "Typical (S. pneumo, H. flu, Klebsiella) vs. Atypical (Mycoplasma, Chlamydia, Legionella) vs. Aspiration (anaerobes) vs. Immunocompromised (PCP, Aspergillus)",
      },
    ],
    pimpingQuestions: [
      "What is the difference between CAP, HAP, and HCAP pathogens and empiric antibiotic selection?",
      "What are the ATS/IDSA major and minor criteria for severe CAP requiring ICU admission?",
      "Why is hyponatremia a clue to Legionella pneumonia?",
      "When is sputum culture indicated in CAP management?",
      "What is the recommended antibiotic regimen for inpatient non-ICU CAP versus ICU CAP?",
    ],
  },
  {
    id: "im-hap",
    name: "Hospital-Acquired Pneumonia",
    icdCode: "J95.851",
    rotation: "internal-medicine",
    category: "Pulmonology / Infectious Disease",
    definition:
      "Hospital-acquired pneumonia (HAP) is pneumonia not incubating at the time of hospital admission that occurs ≥48 hours after admission. Ventilator-associated pneumonia (VAP) is HAP occurring >48–72 hours after endotracheal intubation. HAP/VAP is caused predominantly by gram-negative bacilli and Staphylococcus aureus (including MRSA) rather than the typical community pathogens.",
    diagnosticCriteria:
      "New or progressive pulmonary infiltrate on CXR occurring ≥48 hours after admission PLUS at least two of: fever >38°C or hypothermia <36°C, leukocytosis or leukopenia, and purulent secretions. Clinical Pulmonary Infection Score (CPIS) >6 supports diagnosis. Quantitative cultures from BAL (≥10^4 CFU/mL) or protected specimen brush (≥10^3 CFU/mL) confirm VAP.",
    presentation: {
      chiefComplaint: [
        "New fever in hospitalized patient",
        "Increased oxygen requirement",
        "Increased or purulent secretions in intubated patient",
        "Clinical deterioration after initial improvement",
      ],
      associatedSymptoms: [
        "New infiltrate on CXR",
        "Decreased urine output (sepsis)",
        "Hypotension",
        "Altered mental status",
        "Increasing ventilator requirements (VAP)",
      ],
      demographics:
        "Risk factors: mechanical ventilation, prolonged hospitalization, ICU admission, aspiration risk (depressed consciousness, dysphagia), broad-spectrum antibiotics (altering flora), immunosuppression, prior antibiotics (risk for MDR organisms).",
    },
    distinguishingFeatures:
      "Unlike CAP, HAP/VAP requires empiric coverage for MDR gram-negatives (Pseudomonas, Acinetobacter, ESBL-producing Enterobacteriaceae) and MRSA. Anti-pseudomonal coverage is standard. Clinical presentation is identical to CAP but context (≥48 hours hospitalized, intubated patient) defines it.",
    redFlags: [
      "Hemodynamic instability",
      "Failure to improve on initial antibiotics after 72 hours",
      "Cavitation or empyema on imaging",
      "Pan-resistant organism on culture",
      "Necrotizing pneumonia pattern",
    ],
    mnemonics: [
      {
        name: "HAP vs CAP Bug Spectrum",
        content:
          "HAP = SPACE bugs: Serratia, Pseudomonas, Acinetobacter, MRSA (Staph aureus), Community gram-negatives + Enterobacter",
      },
      {
        name: "VAP Prevention Bundle (ABCDE)",
        content:
          "Awaken daily, Breathing trials (SAT/SBT), Coordinate care, Delirium assessment, Early mobility",
      },
    ],
    pimpingQuestions: [
      "What empiric antibiotic regimen covers both MDR gram-negatives and MRSA in HAP?",
      "What is the VAP prevention bundle and what is the evidence behind each component?",
      "How does the Clinical Pulmonary Infection Score (CPIS) aid in VAP diagnosis?",
      "When can antibiotic de-escalation be performed in HAP/VAP?",
      "What is the recommended duration of antibiotic therapy for HAP and VAP?",
    ],
  },
  {
    id: "im-pe",
    name: "Pulmonary Embolism",
    icdCode: "I26.99",
    rotation: "internal-medicine",
    category: "Pulmonology / Hematology",
    definition:
      "Pulmonary embolism (PE) occurs when a thrombus (most commonly from deep veins of the lower extremities or pelvis) lodges in the pulmonary arterial circulation, obstructing blood flow to the lung parenchyma. This leads to ventilation-perfusion mismatch, hypoxemia, right ventricular strain, and potentially obstructive shock. PE is classified as massive (hemodynamic instability), submassive (RV dysfunction without shock), or low-risk.",
    diagnosticCriteria:
      "Pretest probability assessed via Wells PE score: score ≤4 = low probability (D-dimer to rule out); score >4 = high probability (proceed to CT-PA). CT pulmonary angiography (CT-PA) is the gold standard with sensitivity >95%. V/Q scan used when CT-PA contraindicated. Diagnosis confirmed by filling defect in pulmonary artery. PERC criteria (8 criteria) can rule out PE without D-dimer in very low-risk patients.",
    presentation: {
      chiefComplaint: [
        "Sudden-onset shortness of breath",
        "Pleuritic chest pain",
        "Palpitations",
        "Syncope",
        "Leg swelling and pain",
      ],
      associatedSymptoms: [
        "Tachycardia (most common sign)",
        "Tachypnea",
        "Hypoxemia",
        "Hemoptysis (pulmonary infarction)",
        "Signs of DVT (unilateral leg swelling, erythema, warmth)",
        "Anxiety or sense of impending doom",
      ],
      demographics:
        "Risk factors follow Virchow's triad: stasis (prolonged immobility, long-haul travel), hypercoagulability (malignancy, thrombophilia, OCP use, pregnancy, antiphospholipid syndrome), and endothelial injury (surgery, trauma). Annual incidence ~600,000 cases in the USA.",
    },
    distinguishingFeatures:
      "Classic triad of dyspnea, pleuritic chest pain, and hemoptysis present in only ~20% of cases. Tachycardia is the most consistent sign. EKG may show S1Q3T3, sinus tachycardia, or new right bundle branch block. Massive PE presents with obstructive shock (hypotension, elevated JVP, right ventricular dilation).",
    redFlags: [
      "SBP <90 mmHg or drop >40 mmHg (massive PE — systemic thrombolysis indicated)",
      "RV dilation on echo (McConnell sign: free wall akinesis with apical sparing)",
      "Elevated troponin or BNP (submassive PE with RV strain)",
      "Cardiac arrest",
      "SpO2 <90% despite supplemental oxygen",
    ],
    mnemonics: [
      {
        name: "PERC Rule (all must be absent to rule out PE)",
        content:
          "Age <50, HR <100, SpO2 ≥95%, No unilateral leg swelling, No hemoptysis, No recent surgery/trauma, No prior DVT/PE, No hormone use",
      },
      {
        name: "Wells PE Criteria",
        content:
          "Clinical signs of DVT (+3), PE most likely diagnosis (+3), HR >100 (+1.5), Immobilization/surgery in 4 weeks (+1.5), Prior DVT/PE (+1.5), Hemoptysis (+1), Malignancy (+1)",
      },
    ],
    pimpingQuestions: [
      "What is the Wells score and how does it direct workup for PE?",
      "What are the indications for systemic thrombolysis versus catheter-directed thrombolysis in PE?",
      "What does S1Q3T3 on EKG indicate, and what is its sensitivity?",
      "When is an IVC filter indicated in PE management?",
      "What is the recommended duration of anticoagulation for provoked versus unprovoked PE?",
    ],
  },
  {
    id: "im-dvt",
    name: "Deep Vein Thrombosis",
    icdCode: "I82.409",
    rotation: "internal-medicine",
    category: "Hematology / Vascular",
    definition:
      "Deep vein thrombosis (DVT) is the formation of a thrombus within the deep venous system, most commonly in the lower extremity (calf, popliteal, femoral, or iliac veins). Proximal DVT (above the knee) carries a significantly higher risk of PE than distal (isolated calf) DVT. DVT and PE together constitute venous thromboembolism (VTE), a major cause of preventable hospital mortality.",
    diagnosticCriteria:
      "Pretest probability assessed with Wells DVT score: score ≥2 = high probability (proceed to duplex ultrasound); score <2 = low probability (check D-dimer first). Compression duplex ultrasonography is the diagnostic standard (sensitivity 97%, specificity 98% for proximal DVT). Non-compressibility of the vein is the key finding. D-dimer <500 ng/mL (normal sensitivity assay) with low Wells score effectively rules out DVT.",
    presentation: {
      chiefComplaint: [
        "Unilateral leg swelling",
        "Leg pain or tenderness",
        "Redness or warmth of the leg",
      ],
      associatedSymptoms: [
        "Unilateral pitting edema",
        "Erythema and warmth over affected vein",
        "Dilation of superficial veins",
        "Phlegmasia cerulea dolens (severe, limb-threatening)",
        "New shortness of breath (concurrent PE)",
      ],
      demographics:
        "Annual incidence ~1–2 per 1,000. Risk factors: recent surgery (especially orthopedic), hospitalization, immobility, malignancy, OCP/HRT, pregnancy, thrombophilia, prior VTE, obesity, inflammatory bowel disease.",
    },
    distinguishingFeatures:
      "Unilateral nature distinguishes DVT from bilateral edema of CHF or hypoalbuminemia. Homans sign (calf pain with dorsiflexion) is unreliable (sensitivity 10–54%). Duplex US confirming non-compressibility of the popliteal or femoral vein is definitive. Upper extremity DVT is seen with central venous catheters or Paget-Schroetter syndrome (effort thrombosis).",
    redFlags: [
      "Phlegmasia cerulea dolens (massive iliofemoral DVT with limb ischemia)",
      "Concurrent signs of PE (dyspnea, tachycardia, pleuritic chest pain)",
      "Unprovoked DVT in young patient (evaluate for hypercoagulable state)",
      "Bilateral DVT or clot in unusual location (splanchnic, cerebral — think malignancy or thrombophilia)",
    ],
    mnemonics: [
      {
        name: "Wells DVT Score",
        content:
          "Active cancer (+1), Paralysis/immobilization (+1), Bedridden >3 days or surgery <12 weeks (+1), Calf tenderness (+1), Entire leg swollen (+1), Calf swelling >3cm (+1), Pitting edema unilateral (+1), Collateral superficial veins (+1), Prior DVT (+1), Alternative diagnosis as likely (-2)",
      },
      {
        name: "Virchow's Triad",
        content: "Stasis + Hypercoagulability + Endothelial injury = DVT/PE",
      },
    ],
    pimpingQuestions: [
      "What is the Wells DVT score, and how does it guide diagnostic workup?",
      "When is anticoagulation indicated for isolated distal (calf) DVT?",
      "What thrombophilia workup should be ordered for unprovoked DVT, and when should it be sent?",
      "What is the role of compression ultrasonography versus CT venography for DVT diagnosis?",
      "Which direct oral anticoagulants (DOACs) are FDA-approved for VTE treatment?",
    ],
  },
  {
    id: "im-acs",
    name: "Acute Coronary Syndrome (NSTEMI/STEMI)",
    icdCode: "I21.9",
    rotation: "internal-medicine",
    category: "Cardiology",
    definition:
      "Acute coronary syndrome (ACS) encompasses a spectrum of coronary artery disease presentations including unstable angina (UA), non-ST-elevation MI (NSTEMI), and ST-elevation MI (STEMI). NSTEMI involves myocardial necrosis (elevated troponin) without ST elevation; STEMI involves transmural ischemia with ST elevation requiring emergent revascularization. All result from disruption of an atherosclerotic plaque with thrombus formation causing acute coronary occlusion or severe stenosis.",
    diagnosticCriteria:
      "STEMI: ST elevation ≥1 mm in ≥2 contiguous limb leads or ≥2 mm in V1–V4, or new LBBB with ischemic symptoms — requires emergent reperfusion within 90 minutes (PCI) or 30 minutes (fibrinolysis if PCI unavailable). NSTEMI: ischemic symptoms + elevated troponin (above 99th percentile URL) without ST elevation. UA: ischemic symptoms without troponin elevation. Serial troponins (0h/1h or 0h/3h high-sensitivity protocol) confirm MI.",
    presentation: {
      chiefComplaint: [
        "Crushing substernal chest pain",
        "Pressure radiating to arm or jaw",
        "Chest tightness at rest",
        "Shortness of breath with chest pain",
        "Epigastric pain (inferior MI)",
      ],
      associatedSymptoms: [
        "Diaphoresis",
        "Nausea and vomiting",
        "Dyspnea",
        "Palpitations",
        "Syncope",
        "Radiation to left arm, jaw, or back",
        "Anxiety or sense of impending doom",
      ],
      demographics:
        "Risk increases with age, male sex, diabetes, hypertension, hyperlipidemia, smoking, family history, obesity, chronic kidney disease. Women and diabetics more frequently present with atypical symptoms (nausea, fatigue, dyspnea) without classic chest pain.",
    },
    distinguishingFeatures:
      "STEMI: ST elevation in contiguous leads localizes the culprit vessel (II/III/aVF = inferior/RCA; V1–V4 = anterior LAD; I/aVL = lateral LCx). Inferior STEMI: check right-sided leads for RV MI (ST elevation in V4R). Posterior MI: ST depression in V1–V3 with tall R waves (mirror image). NSTEMI: ST depression ± T-wave inversions, rising troponin, no ST elevation.",
    redFlags: [
      "ST elevation — call cath lab immediately (door-to-balloon <90 minutes)",
      "Hemodynamic instability (cardiogenic shock, acute severe MR, free wall rupture)",
      "Ventricular tachycardia or fibrillation",
      "Complete heart block (inferior STEMI)",
      "Signs of acute pulmonary edema",
    ],
    mnemonics: [
      {
        name: "MONA-B (ACS initial management)",
        content:
          "Morphine (if refractory pain), Oxygen (if SpO2 <90%), Nitroglycerin, Aspirin, Beta-blocker",
      },
      {
        name: "Coronary Artery Territories",
        content:
          "LAD = Anterior (V1–V4); RCA = Inferior (II, III, aVF) + Right ventricle; LCx = Lateral (I, aVL, V5–V6)",
      },
    ],
    pimpingQuestions: [
      "What is the door-to-balloon time goal for STEMI, and what are the indications for fibrinolysis?",
      "How do you differentiate pericarditis from STEMI on EKG?",
      "What is the HEART score, and when is it used in ACS risk stratification?",
      "What is the culprit vessel in an inferior STEMI, and what complication should you screen for with right-sided leads?",
      "What antiplatelet agents are used in ACS, and how does P2Y12 inhibitor selection differ between STEMI and NSTEMI?",
    ],
  },
  {
    id: "im-afib",
    name: "Atrial Fibrillation",
    icdCode: "I48.91",
    rotation: "internal-medicine",
    category: "Cardiology",
    definition:
      "Atrial fibrillation (AF) is the most common sustained cardiac arrhythmia, characterized by disorganized, rapid atrial electrical activity (350–600 bpm) resulting in an irregularly irregular ventricular response. The loss of organized atrial contraction reduces cardiac output by 15–30% and creates atrial stasis, predisposing to thrombus formation (particularly in the left atrial appendage) and embolic stroke. AF is classified as paroxysmal (<7 days, spontaneously terminating), persistent (>7 days), long-standing persistent (>12 months), or permanent.",
    diagnosticCriteria:
      "Diagnosis confirmed on EKG: absence of discrete P waves replaced by fibrillatory baseline (f-waves), irregularly irregular RR intervals, and narrow QRS (unless aberrant conduction or pre-excitation). 12-lead EKG distinguishes AF from atrial flutter (regular sawtooth P waves at 300 bpm, typically 2:1 block at 150 bpm), multifocal atrial tachycardia (≥3 different P-wave morphologies), and other SVTs.",
    presentation: {
      chiefComplaint: [
        "Palpitations",
        "Fatigue",
        "Shortness of breath",
        "Lightheadedness or dizziness",
        "Chest discomfort",
      ],
      associatedSymptoms: [
        "Reduced exercise tolerance",
        "Near-syncope",
        "Polyuria (ANP release)",
        "Anxiety",
        "Asymptomatic (discovered incidentally on EKG)",
      ],
      demographics:
        "Prevalence ~3–6 million in the USA; rises from <1% in <60 years to >10% in >80 years. Risk factors: hypertension (most common), HF, valvular disease, obesity, obstructive sleep apnea, hyperthyroidism, alcohol excess ('holiday heart'), post-cardiac surgery.",
    },
    distinguishingFeatures:
      "Irregularly irregular pulse on physical exam is pathognomonic. EKG confirms absence of P waves and irregular RR intervals. Thyroid function tests (hyperthyroidism is a reversible cause). Echocardiogram evaluates for structural heart disease, LV function, and valvular pathology. CHA2DS2-VASc score determines stroke risk and anticoagulation need.",
    redFlags: [
      "Rapid ventricular rate >150 bpm with hemodynamic instability (urgent synchronized cardioversion)",
      "AF with Wolff-Parkinson-White (wide irregular complex — AV nodal blockers contraindicated; amiodarone or procainamide IV)",
      "Acute stroke symptoms (embolic stroke)",
      "Signs of acute decompensated heart failure",
      "Acute decompensation from rapid ventricular rate",
    ],
    mnemonics: [
      {
        name: "CHA2DS2-VASc Score",
        content:
          "CHF (1), Hypertension (1), Age ≥75 (2), Diabetes (1), Stroke/TIA history (2), Vascular disease (1), Age 65–74 (1), Sex category female (1) — anticoagulate if score ≥2 (men) or ≥3 (women)",
      },
      {
        name: "PIRATES (AF causes)",
        content:
          "Pulmonary disease, Ischemia, Rheumatic heart disease, Anemia/thyroid, TE (thromboembolism trigger), Ethanol, Sepsis/Surgery",
      },
    ],
    pimpingQuestions: [
      "When is electrical cardioversion preferred over pharmacologic cardioversion in AF?",
      "What is the 48-hour rule in AF and why does it matter for cardioversion safety?",
      "How do you choose between rate control and rhythm control strategies?",
      "What anticoagulants are preferred in non-valvular AF and when is warfarin preferred over DOACs?",
      "Why are AV nodal blocking agents (diltiazem, beta-blockers, digoxin) contraindicated in AF with WPW?",
    ],
  },
  {
    id: "im-hypertensive-emergency",
    name: "Hypertensive Emergency",
    icdCode: "I16.1",
    rotation: "internal-medicine",
    category: "Cardiology / Nephrology",
    definition:
      "A hypertensive emergency is a severe elevation of blood pressure (typically SBP >180 mmHg and/or DBP >120 mmHg) with acute target organ damage (TOD). This is distinguished from hypertensive urgency, where BP is similarly elevated without end-organ injury. Target organs affected include the brain (hypertensive encephalopathy, hemorrhagic or ischemic stroke), heart (ACS, acute HF), kidneys (AKI, TMA), aorta (aortic dissection), and eyes (papilledema, retinal hemorrhages).",
    diagnosticCriteria:
      "No absolute BP threshold — diagnosis requires severe hypertension PLUS evidence of new or worsening end-organ damage. Evaluation: fundoscopy (papilledema, grade III/IV retinopathy), urinalysis (hematuria, proteinuria, casts), BMP (creatinine, electrolytes), troponin, ECG, CXR, head CT (or MRI), and echocardiography as indicated by clinical presentation.",
    presentation: {
      chiefComplaint: [
        "Severe headache (worst of life)",
        "Altered mental status or confusion",
        "Chest pain",
        "Shortness of breath",
        "Visual disturbances",
        "Focal neurologic deficits",
      ],
      associatedSymptoms: [
        "Nausea and vomiting",
        "Blurry vision or diplopia",
        "Seizure (posterior reversible encephalopathy syndrome — PRES)",
        "Oliguria",
        "Back pain (aortic dissection)",
        "Epistaxis (common but nonspecific)",
      ],
      demographics:
        "More common in African Americans, elderly, chronic hypertensives, those with CKD, primary aldosteronism, renovascular hypertension, pheochromocytoma, or medication non-compliance. Cocaine and sympathomimetic drug use are important precipitants in younger patients.",
    },
    distinguishingFeatures:
      "The specific target organ determines treatment priorities. Aortic dissection (tearing back pain, pulse differentials) requires SBP <120 mmHg rapidly with beta-blocker + vasodilator. Ischemic stroke: permissive hypertension (do not lower unless >220/120 unless tPA candidate). Hemorrhagic stroke/AKI/pulmonary edema: lower SBP by 10–25% in the first hour, to 160/100 over 6 hours.",
    redFlags: [
      "Signs of aortic dissection (tearing back pain, pulse deficit) — BP control and immediate CT aortography",
      "Posterior reversible encephalopathy syndrome (PRES): headache, seizure, visual loss, altered consciousness",
      "Acute pulmonary edema with severe hypertension",
      "Acute MI with hypertension",
      "Subarachnoid hemorrhage",
    ],
    mnemonics: [
      {
        name: "STAT treatment agents",
        content:
          "Sodium nitroprusside (most potent), clevidinpine, labetalol, nicardipine — IV agents for hypertensive emergency (not oral nifedipine)",
      },
      {
        name: "TOD in Hypertensive Emergency",
        content:
          "Brain (encephalopathy, stroke), Heart (ACS, HF, aortic dissection), Eyes (papilledema), Kidneys (AKI, TMA), Eclampsia (pregnancy)",
      },
    ],
    pimpingQuestions: [
      "What is the difference between hypertensive emergency and urgency, and how does management differ?",
      "What is the target blood pressure reduction in the first hour for hypertensive emergency (non-stroke)?",
      "Why is oral nifedipine contraindicated in hypertensive emergency?",
      "What blood pressure target is appropriate in acute ischemic stroke being considered for tPA?",
      "What causes PRES, and what is the treatment?",
    ],
  },
  {
    id: "im-stroke-tia",
    name: "Ischemic Stroke / TIA",
    icdCode: "I63.9",
    rotation: "internal-medicine",
    category: "Neurology",
    definition:
      "Ischemic stroke is a sudden neurologic deficit caused by focal cerebral, spinal, or retinal infarction due to vascular occlusion. It accounts for ~87% of all strokes. A transient ischemic attack (TIA) is a transient neurologic deficit due to focal ischemia without infarction, lasting <24 hours (typically <60 minutes) with no evidence of infarction on MRI DWI. TIA is a medical emergency because 10–15% of TIA patients have a stroke within 90 days, with highest risk in the first 48 hours.",
    diagnosticCriteria:
      "Acute ischemic stroke: sudden focal neurologic deficit + exclusion of hemorrhage on non-contrast CT head (must be done before tPA). MRI DWI (more sensitive) shows restricted diffusion within hours. NIHSS quantifies deficit severity. TIA: clinical diagnosis with normal DWI MRI. ABCD2 score risk-stratifies TIA (Age, Blood pressure, Clinical features, Duration, Diabetes).",
    presentation: {
      chiefComplaint: [
        "Sudden facial drooping",
        "Arm weakness or numbness",
        "Speech difficulty",
        "Worst headache of life (hemorrhagic stroke)",
        "Sudden vision loss in one eye (amaurosis fugax)",
        "Sudden loss of balance",
      ],
      associatedSymptoms: [
        "Contralateral hemiparesis/hemisensory loss",
        "Aphasia (dominant hemisphere) or neglect (non-dominant)",
        "Hemianopia",
        "Dysarthria",
        "Ataxia (posterior circulation)",
        "Diplopia, vertigo, dysphagia (brainstem)",
      ],
      demographics:
        "Incidence increases with age; 55–74% of strokes occur in patients >65. AF is the most common cardioembolic cause. Hypertension is the most prevalent modifiable risk factor. Younger strokes: cardioembolic (PFO, AF), arterial dissection, hypercoagulable states, illicit drug use.",
    },
    distinguishingFeatures:
      "FAST acronym: Face drooping, Arm weakness, Speech difficulty, Time to call 911. Middle cerebral artery (MCA) stroke = contralateral face and arm > leg weakness, aphasia (dominant) or neglect (non-dominant). Posterior circulation (PICA) = crossed findings (ipsilateral face, contralateral body), ataxia, Horner syndrome, dysphagia. Lacunar infarcts = pure motor or pure sensory deficit without cortical signs.",
    redFlags: [
      "Last known well >4.5 hours ago (exceeds tPA window)",
      "NIHSS >22 (severe stroke — thrombolysis higher risk vs. benefit)",
      "Signs of herniation (blown pupil, Cushing triad)",
      "Large vessel occlusion — emergent thrombectomy window up to 24 hours (DAWN/DEFUSE-3 criteria)",
      "Stroke in anticoagulated patient (hemorrhagic transformation risk)",
    ],
    mnemonics: [
      {
        name: "FAST (stroke recognition)",
        content:
          "Face drooping, Arm weakness, Speech difficulty, Time to act — call 911 immediately",
      },
      {
        name: "tPA Contraindications (key absolute)",
        content:
          "Hemorrhage on CT, BP >185/110 uncontrolled, seizure at onset, prior ICH, INR >1.7, platelets <100,000, glucose <50 or >400, symptom onset >4.5 hours",
      },
    ],
    pimpingQuestions: [
      "What is the tPA eligibility window for ischemic stroke, and what are absolute contraindications?",
      "How does MRI DWI distinguish acute ischemic stroke from TIA or stroke mimic?",
      "What is the ABCD2 score, and how does it guide TIA management and disposition?",
      "What is mechanical thrombectomy, and what are the criteria for patient selection?",
      "How does antiplatelet vs. anticoagulation choice differ for cardioembolic vs. atherothrombotic stroke?",
    ],
  },
  {
    id: "im-gout",
    name: "Gout",
    icdCode: "M10.9",
    rotation: "internal-medicine",
    category: "Rheumatology",
    definition:
      "Gout is a crystal arthropathy caused by deposition of monosodium urate (MSU) crystals in joints and periarticular tissues due to chronic hyperuricemia (serum uric acid >6.8 mg/dL). It presents in four stages: asymptomatic hyperuricemia, acute gouty arthritis, intercritical gout, and chronic tophaceous gout. Acute attacks result from crystal-induced NLRP3 inflammasome activation, triggering intense IL-1β–mediated inflammation.",
    diagnosticCriteria:
      "Gold standard: synovial fluid analysis demonstrating negatively birefringent, needle-shaped MSU crystals under polarized light microscopy. Clinical diagnosis (ACP 2020 criteria) when classic podagra with hyperuricemia is present. Serum uric acid may be normal during an acute attack (inflammatory state). ACR/EULAR 2015 classification criteria score ≥8 points for gout diagnosis (joint involvement, symptom characteristics, time course, lab, imaging).",
    presentation: {
      chiefComplaint: [
        "Severe pain in great toe (podagra)",
        "Red, hot, swollen joint — woke from sleep",
        "Ankle or knee pain and swelling",
        "Cannot tolerate bedsheet touching the foot",
      ],
      associatedSymptoms: [
        "Erythema, warmth, and swelling of affected joint",
        "Dramatic joint tenderness (hyperalgesia)",
        "Low-grade fever",
        "Tophi (chronic gout): firm nodules on helix, olecranon, Achilles tendon",
        "Renal colic (urate nephrolithiasis)",
      ],
      demographics:
        "Predominant in men >40 years; in women, incidence rises post-menopause (estrogen is uricosuric). Risk factors: purine-rich diet (red meat, shellfish), alcohol (especially beer/spirits), diuretics (thiazides, loop diuretics), CKD, cyclosporine, low-dose aspirin, obesity, hypertension.",
    },
    distinguishingFeatures:
      "First MTP joint involvement (podagra) is highly specific (~50% of first attacks). Acute attacks reach maximum intensity within 24 hours, resolve spontaneously in 7–14 days. Chronic tophaceous gout: MSU deposits in cartilage, bone, soft tissue. Pseudogout (calcium pyrophosphate dihydrate — CPPD) affects the knee most commonly, crystals are positively birefringent rhomboid-shaped.",
    redFlags: [
      "Fever + acute monoarthritis — must rule out septic arthritis (joint aspiration with cell count, culture mandatory)",
      "WBC >50,000 in synovial fluid raises concern for septic arthritis",
      "Tophi compressing nerves or tendons",
      "Urate nephropathy causing AKI (tumor lysis syndrome analog)",
    ],
    mnemonics: [
      {
        name: "Gout Crystal vs. Pseudogout Crystal",
        content:
          "Gout = Negative birefringence, Needle-shaped, Urate (NU); Pseudogout = Positive birefringence, rhomboid-shaped, Calcium pyrophosphate (PRCC)",
      },
      {
        name: "ACUTE (gout attack treatment)",
        content:
          "Anti-inflammatories ASAP (NSAIDs first-line), Colchicine (within 24 hours), Urate-lowering therapy (do NOT start or stop during acute attack), Treat comorbidities, Educate on triggers",
      },
    ],
    pimpingQuestions: [
      "Why should urate-lowering therapy (allopurinol, febuxostat) not be initiated during an acute gout attack?",
      "What is the mechanism of colchicine in acute gout?",
      "What lab finding is pathognomonic for gout, and what must be excluded when doing joint aspiration?",
      "Which medications are known to cause hyperuricemia and gout?",
      "What is the target serum uric acid level for patients on urate-lowering therapy?",
    ],
  },
  {
    id: "im-sepsis",
    name: "Sepsis / Septic Shock",
    icdCode: "A41.9",
    rotation: "internal-medicine",
    category: "Infectious Disease / Critical Care",
    definition:
      "Sepsis is life-threatening organ dysfunction caused by a dysregulated host response to infection (Sepsis-3 definition, 2016). Organ dysfunction is identified by an increase in SOFA score ≥2 points. Septic shock is a subset of sepsis with vasopressor requirement to maintain MAP ≥65 mmHg despite adequate fluid resuscitation AND serum lactate >2 mmol/L, carrying a hospital mortality >40%.",
    diagnosticCriteria:
      "Sepsis-3: Suspected infection + SOFA score increase ≥2 (or qSOFA ≥2 for screening: altered mentation, RR ≥22, SBP ≤100). Septic shock: sepsis + vasopressor requirement for MAP ≥65 + lactate >2 mmol/L despite adequate fluid resuscitation. SIRS criteria are no longer part of the official definition but are still widely referenced.",
    presentation: {
      chiefComplaint: [
        "Fever with rigors",
        "Confusion or altered mental status",
        "Low blood pressure",
        "Not acting right",
        "Signs of infection (pneumonia, UTI, wound)",
      ],
      associatedSymptoms: [
        "Tachycardia (HR >90)",
        "Tachypnea (RR >20)",
        "Hypotension (SBP <90 or MAP <65)",
        "Warm flushed skin (early) or mottled cold extremities (late)",
        "Decreased urine output (<0.5 mL/kg/h)",
        "Altered mental status (confusion, agitation)",
        "Elevated lactate",
      ],
      demographics:
        "Highest risk: elderly, immunocompromised, ICU patients, post-surgical, neonates, DM, cirrhosis, CKD. Most common sources: pneumonia (most common), UTI/urosepsis, intra-abdominal infection, skin/soft tissue infection, line-associated bacteremia.",
    },
    distinguishingFeatures:
      "Elevated lactate (>2 mmol/L) indicates tissue hypoperfusion even with normal BP (cryptic shock). Distributive pattern of septic shock: vasodilated, warm extremities, high CO, low SVR (early) progressing to multi-organ failure. Sepsis-3 emphasizes organ dysfunction over SIRS. Hour-1 bundle: blood cultures x2, broad-spectrum antibiotics, 30 mL/kg IVF bolus, vasopressors for MAP <65, lactate measurement.",
    redFlags: [
      "Lactate >4 mmol/L (septic shock regardless of BP — mortality >30%)",
      "Refractory hypotension despite 30 mL/kg crystalloid",
      "Purpura fulminans (meningococcemia — bilateral adrenal hemorrhage, DIC)",
      "Multi-organ dysfunction (AKI, coagulopathy, liver failure, ARDS)",
      "Necrotizing fasciitis (surgical emergency)",
    ],
    mnemonics: [
      {
        name: "Sepsis Hour-1 Bundle (SSC 2018)",
        content:
          "1: Measure lactate; 2: Blood cultures x2 before antibiotics; 3: Broad-spectrum antibiotics; 4: 30 mL/kg crystalloid if hypotensive or lactate ≥4; 5: Vasopressors (norepinephrine first-line) if MAP <65",
      },
      {
        name: "qSOFA (screen for sepsis outside ICU)",
        content:
          "Altered mental status + RR ≥22 + SBP ≤100 — any 2 of 3 = high risk, warrants full SOFA assessment",
      },
    ],
    pimpingQuestions: [
      "How does the Sepsis-3 definition differ from the older SIRS-based criteria?",
      "What is the first-line vasopressor in septic shock, and at what dose is vasopressin added?",
      "What is the significance of a lactate >4 mmol/L even without hypotension?",
      "When should steroids be given in septic shock, and which steroid is preferred?",
      "What are the most common source organisms in pneumonia-source versus urosepsis septic shock?",
    ],
  },
  {
    id: "im-aki",
    name: "Acute Kidney Injury",
    icdCode: "N17.9",
    rotation: "internal-medicine",
    category: "Nephrology",
    definition:
      "Acute kidney injury (AKI) is an abrupt decline in renal function defined by KDIGO criteria as any of: rise in serum creatinine ≥0.3 mg/dL within 48 hours, rise in creatinine ≥1.5x baseline within 7 days, or urine output <0.5 mL/kg/h for ≥6 hours. AKI is classified by cause into pre-renal (decreased perfusion), intrinsic renal (ATN, glomerulonephritis, AIN), and post-renal (obstruction).",
    diagnosticCriteria:
      "KDIGO staging: Stage 1: Cr ≥0.3 rise or 1.5–1.9x baseline, UO <0.5 mL/kg/h for 6–12h; Stage 2: Cr 2–2.9x baseline, UO <0.5 for ≥12h; Stage 3: Cr ≥3x baseline or ≥4 mg/dL or RRT initiation, UO <0.3 for ≥24h or anuria ≥12h. Fractional excretion of sodium (FENa): <1% suggests pre-renal (avid Na retention); >2% suggests intrinsic/ATN. FEUrea <35% is more accurate in patients on diuretics.",
    presentation: {
      chiefComplaint: [
        "Decreased urine output",
        "Leg swelling",
        "Fatigue",
        "Nausea and vomiting",
        "Found to have elevated creatinine on labs",
      ],
      associatedSymptoms: [
        "Oliguria or anuria",
        "Fluid overload and edema",
        "Uremic symptoms (nausea, pruritus, altered mentation — in severe cases)",
        "Flank pain (obstruction, papillary necrosis)",
        "Hematuria (glomerulonephritis, obstruction)",
        "Rash and eosinophilia (AIN)",
      ],
      demographics:
        "Affects ~20% of hospitalized patients; up to 50% of ICU patients. Common etiologies: pre-renal (volume depletion, low EF states), ATN (ischemic — most common intrinsic; nephrotoxic — contrast, aminoglycosides, NSAIDs, vancomycin, cisplatin), obstruction (BPH, malignancy, calculi), AIN (NSAIDs, beta-lactams, PPIs, sulfonamides).",
    },
    distinguishingFeatures:
      "Pre-renal AKI: FENa <1%, bland urine sediment, hyaline casts, responds to volume resuscitation. ATN: granular 'muddy brown' casts, FENa >2%, renal tubular epithelial cells, preceded by nephrotoxic exposure or prolonged hypoperfusion. AIN: WBC casts, eosinophiluria (insensitive), rash-fever-eosinophilia triad (classic but present in <10%). Post-renal: hydronephrosis on renal US.",
    redFlags: [
      "Hyperkalemia >6.5 mEq/L with EKG changes (peaked T waves, widened QRS — medical emergency)",
      "Severe metabolic acidosis (pH <7.1, bicarb <10)",
      "Pulmonary edema from volume overload (indication for emergent dialysis)",
      "Uremic pericarditis or encephalopathy",
      "Anuria >24 hours",
    ],
    mnemonics: [
      {
        name: "AEIOU (indications for emergent dialysis)",
        content:
          "Acidosis (severe metabolic), Electrolyte abnormality (hyperkalemia refractory), Intoxication (dialyzable toxins — lithium, methanol, ethylene glycol, ASA), Overload (fluid unresponsive to diuretics), Uremia (pericarditis, encephalopathy)",
      },
      {
        name: "Pre-Renal vs. ATN",
        content:
          "Pre-renal: FENa <1%, BUN:Cr >20:1, hyaline casts, responds to fluids; ATN: FENa >2%, muddy brown granular casts, BUN:Cr <20:1, does not respond to fluids",
      },
    ],
    pimpingQuestions: [
      "What are the KDIGO staging criteria for AKI?",
      "How does FENa differentiate pre-renal AKI from ATN, and when is FEUrea more reliable?",
      "What are the indications for emergent renal replacement therapy (dialysis) in AKI?",
      "Which nephrotoxins are common causes of AKI in hospitalized patients?",
      "What urine sediment findings suggest acute interstitial nephritis versus ATN versus glomerulonephritis?",
    ],
  },
  {
    id: "im-ckd",
    name: "Chronic Kidney Disease",
    icdCode: "N18.9",
    rotation: "internal-medicine",
    category: "Nephrology",
    definition:
      "Chronic kidney disease (CKD) is defined as abnormalities of kidney structure or function lasting ≥3 months, with implications for health. It is classified by GFR category (G1–G5) and albuminuria category (A1–A3). The most common causes in the USA are diabetic nephropathy (most common), hypertensive nephrosclerosis, and glomerulonephritis. CKD is an independent cardiovascular risk factor and leads to complications including anemia, CKD-MBD, metabolic acidosis, hyperkalemia, and hypertension.",
    diagnosticCriteria:
      "KDIGO CKD criteria (≥3 months of any): eGFR <60 mL/min/1.73m² (G3a–G5) OR markers of kidney damage (albuminuria ≥30 mg/g, urine sediment abnormalities, electrolyte disorders from tubular dysfunction, pathologic abnormalities on biopsy, structural abnormalities on imaging, or prior kidney transplant). eGFR staging: G1 (≥90), G2 (60–89), G3a (45–59), G3b (30–44), G4 (15–29), G5 (<15 or dialysis).",
    presentation: {
      chiefComplaint: [
        "Fatigue and weakness",
        "Swelling in legs",
        "Decreased urine output (advanced stages)",
        "Found to have elevated creatinine or protein in urine",
        "Uremic symptoms (nausea, itching, confusion) — late",
      ],
      associatedSymptoms: [
        "Hypertension (often difficult to control)",
        "Anemia (normocytic, normochromic — decreased EPO production)",
        "Peripheral neuropathy (uremic neuropathy)",
        "Pruritus (uremic frost in severe cases)",
        "Bone pain (renal osteodystrophy)",
        "Volume overload",
      ],
      demographics:
        "~15% of US adults have CKD; highest prevalence in those with DM, HTN, age >60, African American race, family history of CKD. Diabetic nephropathy most common cause worldwide.",
    },
    distinguishingFeatures:
      "Small kidneys on renal US (bilateral), anemia of CKD (low reticulocyte count, low EPO), secondary hyperparathyroidism (elevated PTH, low calcium, high phosphorus), metabolic acidosis with normal anion gap, hyperkalemia, and proteinuria on UA (nephrotic range >3.5 g/day in diabetic nephropathy). Urinalysis: waxy broad casts in advanced CKD.",
    redFlags: [
      "Rapidly rising creatinine (AKI on CKD — identify reversible cause)",
      "Hyperkalemia with EKG changes",
      "Uremic pericarditis (friction rub) — indication for urgent dialysis",
      "eGFR <15 — nephrology referral and preparation for renal replacement therapy",
      "Nephrotic syndrome with >3.5 g/day proteinuria (biopsy consideration)",
    ],
    mnemonics: [
      {
        name: "CKD Complications AHHH",
        content:
          "Anemia (EPO deficiency), Hyperkalemia, Hypertension, Hyperphosphatemia/Hypocalcemia, Metabolic acidosis",
      },
      {
        name: "CKD Stages by GFR",
        content:
          "G1: ≥90 (normal/high), G2: 60–89 (mildly decreased), G3a: 45–59, G3b: 30–44, G4: 15–29 (prepare for RRT), G5: <15 (kidney failure)",
      },
    ],
    pimpingQuestions: [
      "What is the KDIGO definition of CKD, and what are the G and A classification stages?",
      "What two medications are first-line for slowing CKD progression in diabetic nephropathy?",
      "Why do CKD patients develop secondary hyperparathyroidism, and how is it treated?",
      "At what eGFR should metformin be dose-reduced or discontinued?",
      "What are indications for nephrology referral in CKD?",
    ],
  },
  {
    id: "im-cirrhosis",
    name: "Cirrhosis",
    icdCode: "K74.60",
    rotation: "internal-medicine",
    category: "Gastroenterology / Hepatology",
    definition:
      "Cirrhosis is the end-stage of chronic liver disease characterized by extensive fibrosis and nodular regeneration of the hepatic parenchyma, resulting in architectural distortion and compromised liver function. Major etiologies include alcohol-related liver disease (ALD), non-alcoholic steatohepatitis (NASH/NAFLD), chronic hepatitis B and C, autoimmune hepatitis, and cholestatic liver disease (PBC, PSC). Complications include portal hypertension, ascites, spontaneous bacterial peritonitis (SBP), hepatic encephalopathy, esophageal varices, and hepatocellular carcinoma.",
    diagnosticCriteria:
      "Liver biopsy remains the gold standard but is not required when clinical, laboratory, and imaging findings are consistent. Child-Pugh score (bilirubin, albumin, PT/INR, ascites, encephalopathy) and MELD score (bilirubin, creatinine, INR) assess severity and prognosis. MELD-Na ≥15 is threshold for liver transplant listing. Non-invasive markers: FIB-4 index, liver stiffness measurement (Fibroscan) for staging fibrosis.",
    presentation: {
      chiefComplaint: [
        "Abdominal swelling (ascites)",
        "Jaundice",
        "Confusion or altered mental status",
        "Vomiting blood",
        "Leg swelling",
      ],
      associatedSymptoms: [
        "Fatigue and weakness",
        "Anorexia and muscle wasting",
        "Pruritus (cholestatic disease)",
        "Gynecomastia (hyperestrogenism)",
        "Amenorrhea",
        "Easy bruising and bleeding",
        "Dark urine, pale stools",
      ],
      demographics:
        "Alcohol-related cirrhosis: typically men >40 with heavy alcohol use (>80 g/day for >10 years). NASH cirrhosis: associated with metabolic syndrome (obesity, DM, hypertriglyceridemia). Hepatitis C: baby boomer generation (born 1945–1965) has highest prevalence in USA.",
    },
    distinguishingFeatures:
      "Classic physical exam findings: spider angiomata (>5 is significant), palmar erythema, gynecomastia, caput medusae (collateral veins on abdomen), asterixis (hepatic encephalopathy — flapping tremor of wrists), testicular atrophy, Dupuytren contracture (alcoholic), leukonychia (white nails), Terry nails, hepatomegaly (early) then small shrunken liver (late), splenomegaly (portal hypertension).",
    redFlags: [
      "Fever + ascites — rule out SBP (paracentesis: PMNs ≥250/mm³ is diagnostic)",
      "Hematemesis from variceal bleeding — emergent endoscopy + octreotide + antibiotics",
      "Hepatic encephalopathy — identify and treat precipitant (lactulose, rifaximin)",
      "Hepatorenal syndrome (AKI in cirrhosis with no other cause — 2-week mortality >80% untreated)",
      "Rising bilirubin + coagulopathy in alcoholic hepatitis (MELD >20 — consider steroids)",
    ],
    mnemonics: [
      {
        name: "MELD Score Components",
        content:
          "Bilirubin + Creatinine + INR (3.78 × ln[bilirubin] + 11.2 × ln[INR] + 9.57 × ln[creatinine] + 6.43) — higher score = higher 3-month mortality without transplant",
      },
      {
        name: "Child-Pugh Score (A/B/C)",
        content:
          "Bilirubin, Albumin, PT (INR), ascites (none/mild/moderate), Encephalopathy (none/grade I-II/grade III-IV) — A (5–6) = compensated; B (7–9) = moderate; C (10–15) = decompensated",
      },
    ],
    pimpingQuestions: [
      "What is the MELD score used for and how is it calculated?",
      "How is spontaneous bacterial peritonitis (SBP) diagnosed and treated?",
      "What is hepatorenal syndrome and how does it differ from pre-renal AKI?",
      "What are the treatment options for hepatic encephalopathy, and what are common precipitants?",
      "When are beta-blockers (propranolol or carvedilol) indicated in cirrhosis?",
    ],
  },
  {
    id: "im-dka",
    name: "Diabetic Ketoacidosis",
    icdCode: "E11.10",
    rotation: "internal-medicine",
    category: "Endocrinology",
    definition:
      "Diabetic ketoacidosis (DKA) is an acute, life-threatening complication of diabetes mellitus characterized by the triad of hyperglycemia (glucose usually >250 mg/dL, though euglycemic DKA exists with SGLT2 inhibitors), ketosis (positive serum/urine ketones), and anion gap metabolic acidosis (pH <7.3, bicarbonate <18 mEq/L). It results from absolute or relative insulin deficiency combined with counter-regulatory hormone excess (glucagon, catecholamines, cortisol, GH), leading to unregulated lipolysis and ketogenesis.",
    diagnosticCriteria:
      "ADA criteria for DKA: glucose >250 mg/dL (or euglycemic DKA in SGLT2 inhibitor use), pH <7.3, bicarbonate <18 mEq/L, anion gap >12 mEq/L, positive serum ketones (beta-hydroxybutyrate >3 mmol/L). Severity: mild (pH 7.25–7.30, bicarb 15–18, AG elevated, alert); moderate (pH 7.0–7.25, bicarb 10–15, drowsy); severe (pH <7.0, bicarb <10, stupor/coma). Concurrent electrolyte derangements: hypokalemia common with insulin therapy.",
    presentation: {
      chiefComplaint: [
        "Nausea and vomiting",
        "Abdominal pain",
        "Polyuria and polydipsia",
        "Altered mental status",
        "Weakness",
      ],
      associatedSymptoms: [
        "Kussmaul breathing (deep, rapid respirations to compensate for metabolic acidosis)",
        "Fruity breath (acetone)",
        "Dehydration (dry mucous membranes, poor skin turgor)",
        "Tachycardia",
        "Hypotension (severe dehydration)",
        "Abdominal pain (mimics acute abdomen)",
        "Confusion → coma (severe DKA)",
      ],
      demographics:
        "Most common in Type 1 DM, but 30–40% of DKA occurs in Type 2 DM. Precipitants: infection (most common), insulin non-compliance (no. 2), new-onset T1DM, myocardial infarction, stroke, pancreatitis, medications (SGLT2 inhibitors — euglycemic DKA, corticosteroids, antipsychotics).",
    },
    distinguishingFeatures:
      "Anion gap metabolic acidosis with positive ketones distinguishes DKA from HHS (hyperosmolar hyperglycemic state). HHS: glucose >600 mg/dL, serum osmolality >320, minimal or no ketosis, pH usually >7.3. Euglycemic DKA (glucose <250 mg/dL) occurs with SGLT2 inhibitors — check ketones even with near-normal glucose. Potassium shifts: serum K+ may be elevated initially (acidosis drives K+ extracellularly) but total body K+ is depleted; hypokalemia emerges as insulin is given.",
    redFlags: [
      "pH <7.0 (severe DKA — consider IV bicarbonate if pH <6.9 per ADA guidelines)",
      "Serum K+ <3.5 mEq/L before starting insulin (replace first — risk of fatal arrhythmia)",
      "Altered mental status/coma",
      "Cerebral edema (complication more common in pediatric DKA — headache, papilledema, bradycardia)",
      "Concurrent acute MI or sepsis as precipitant",
    ],
    mnemonics: [
      {
        name: "DKA Treatment 3 Keys",
        content:
          "1. Fluids (NS 1L/hr initially — correct dehydration); 2. Insulin drip (0.1 units/kg/hr — start AFTER K+ ≥3.5); 3. Potassium replacement (add K+ to IVF when K+ <5.5 and adequate urine output)",
      },
      {
        name: "MUDPILES (causes of anion gap metabolic acidosis)",
        content:
          "Methanol, Uremia, DKA, Propylene glycol/Paracetamol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates",
      },
    ],
    pimpingQuestions: [
      "Why must you replace potassium before starting insulin in DKA?",
      "What is the anion gap, how is it calculated, and what are common causes of elevated AG metabolic acidosis?",
      "What is euglycemic DKA and which medication class causes it?",
      "How does DKA differ from HHS in glucose levels, pH, and osmolality?",
      "What is the role of sodium bicarbonate in DKA management?",
    ],
  },
  {
    id: "im-hyponatremia",
    name: "Hyponatremia",
    icdCode: "E87.1",
    rotation: "internal-medicine",
    category: "Nephrology / Endocrinology",
    definition:
      "Hyponatremia is defined as serum sodium <135 mEq/L and is the most common electrolyte disorder in hospitalized patients. It reflects excess free water relative to sodium and is characterized by low plasma osmolality in most cases (hypotonic hyponatremia). Classification by volume status: hypovolemic (total body Na+ and water both decreased, water loss < Na+ loss), euvolemic (most commonly SIADH, hypothyroidism, adrenal insufficiency), and hypervolemic (CHF, cirrhosis, nephrotic syndrome — sodium retained but water retained more).",
    diagnosticCriteria:
      "Initial evaluation: plasma osmolality, urine osmolality, urine sodium, volume status assessment. SIADH criteria (Schwartz-Bartter): hypotonic hyponatremia (Posm <280), inappropriately concentrated urine (Uosm >100, typically >300), euvolemia, urine Na >40 mEq/L (on normal-salt diet), normal thyroid and adrenal function, no diuretic use. Correction rate: chronic hyponatremia — no faster than 8–10 mEq/L per 24 hours (risk of osmotic demyelination syndrome — ODS).",
    presentation: {
      chiefComplaint: [
        "Nausea and headache",
        "Confusion or altered mental status",
        "Found to have low sodium on labs",
        "Lethargy and fatigue",
        "Seizure (severe, acute hyponatremia)",
      ],
      associatedSymptoms: [
        "Muscle cramps and weakness",
        "Gait disturbances",
        "Lethargy, somnolence",
        "Seizures (Na+ <120 mEq/L or rapid decline)",
        "Coma (Na+ <110 mEq/L)",
        "Signs of underlying cause (volume depletion, CHF, cirrhosis)",
      ],
      demographics:
        "Extremely common in hospitalized patients (up to 30% prevalence). SIADH most common cause in euvolemic hyponatremia — causes: pulmonary disease (pneumonia, TB), CNS disease (meningitis, SAH, brain tumor), malignancy (SCLC most common — ectopic ADH), medications (SSRIs, antipsychotics, cyclophosphamide, carbamazepine, NSAIDs), postoperative state.",
    },
    distinguishingFeatures:
      "Urine Na >20 mEq/L in hypervolemic states suggests intrinsic renal Na-wasting (CKD) or early diuretic effect. Urine Na <20 mEq/L in hypervolemic hyponatremia suggests effective circulating volume depletion (CHF, cirrhosis, nephrotic syndrome). In hypovolemic hyponatremia, urine Na <20 = extrarenal loss (vomiting, diarrhea, third-spacing); urine Na >40 = renal loss (diuretics, Addison disease, cerebral salt wasting).",
    redFlags: [
      "Na+ <120 mEq/L with seizures or coma — give 3% saline (hypertonic) immediately, target 4–6 mEq/L rise in first 2 hours",
      "Correction >10–12 mEq/L in 24 hours — risk of osmotic demyelination syndrome (central pontine myelinolysis)",
      "Adrenal crisis mimicking SIADH — morning cortisol before empiric treatment",
      "Sodium <130 mEq/L in postoperative patient (hypotonic fluids + ADH surge)",
    ],
    mnemonics: [
      {
        name: "SIADH Causes (SIADH)",
        content:
          "S — Stroke/CNS disease, I — Infection (pneumonia, meningitis), A — Antidepressants/medications, D — Disease of lung (SCLC, TB), H — Hypothyroidism (can cause hyponatremia but actually a distinct cause)",
      },
      {
        name: "Hyponatremia Volume Status",
        content:
          "HYPOvolemic (vomiting, diarrhea, Addisons, diuretics) — EUvolemic (SIADH, hypothyroid) — HYPERvolemic (CHF, cirrhosis, nephrotic syndrome)",
      },
    ],
    pimpingQuestions: [
      "What is the maximum safe correction rate for chronic hyponatremia, and why?",
      "How does SIADH differ from cerebral salt wasting (volume status, urine Na, treatment)?",
      "What is osmotic demyelination syndrome, and what neurologic findings does it cause?",
      "What is the initial treatment for symptomatic severe hyponatremia (seizures)?",
      "How does pseudohyponatremia differ from true hyponatremia, and what causes it?",
    ],
  },
  {
    id: "im-t2dm-inpatient",
    name: "Type 2 Diabetes (Inpatient Management)",
    icdCode: "E11.9",
    rotation: "internal-medicine",
    category: "Endocrinology",
    definition:
      "Inpatient diabetes management addresses hyperglycemia in hospitalized patients with known or newly discovered type 2 diabetes mellitus (T2DM). Hyperglycemia in the hospital is defined as blood glucose >140 mg/dL and is associated with increased risk of infection, delayed wound healing, longer LOS, and mortality. Inpatient management relies primarily on insulin therapy rather than oral agents, as most oral medications are contraindicated or suboptimal in acute illness.",
    diagnosticCriteria:
      "Inpatient glycemic targets (ADA): ICU patients — glucose 140–180 mg/dL (avoid tight control: NICE-SUGAR trial showed harm with target 80–110 mg/dL); non-ICU patients — premeal glucose <140 mg/dL, random glucose <180 mg/dL. HbA1c >6.5% in undiagnosed patient on admission suggests pre-existing diabetes. Insulin is the preferred agent for inpatient management; metformin and SGLT2 inhibitors are typically held.",
    presentation: {
      chiefComplaint: [
        "Admitted for another condition with poor glucose control",
        "Newly discovered hyperglycemia on admission labs",
        "Known diabetic with glucose out of range on monitoring",
      ],
      associatedSymptoms: [
        "Polyuria and polydipsia (if glucose very elevated)",
        "Blurry vision",
        "Fatigue",
        "Poor wound healing",
        "Signs of underlying illness (precipitating hyperglycemia)",
      ],
      demographics:
        "T2DM prevalence ~11% of US adults; ~38% have prediabetes. In the hospital, ~40% of patients have hyperglycemia; about half have no prior diabetes diagnosis. Stress hyperglycemia occurs with acute illness (surgery, MI, sepsis, stroke) due to counter-regulatory hormones.",
    },
    distinguishingFeatures:
      "Basal-bolus-correction insulin regimen is the preferred inpatient protocol (basal insulin + prandial insulin + correction scale). Sliding scale insulin alone is inadequate (reactive, not proactive). Metformin: hold if eGFR <30, iodinated contrast within 48 hours, acute illness, hemodynamic instability. SGLT2 inhibitors: hold in all hospitalized patients (euglycemic DKA risk). Dexamethasone-induced hyperglycemia peaks in the afternoon — coverage timing matters.",
    redFlags: [
      "Glucose >500 mg/dL — check ketones and pH (risk of HHS or DKA)",
      "Hypoglycemia <70 mg/dL — treat immediately (15-15 rule: 15g fast-acting carbs, recheck in 15 min)",
      "Severe hypoglycemia <54 mg/dL — IV dextrose in NPO or altered patient",
      "Glucose remaining persistently elevated >250 despite insulin — reassess insulin dosing, rule out DKA",
    ],
    mnemonics: [
      {
        name: "Inpatient Insulin Regimen 3Bs",
        content:
          "Basal (long-acting — glargine/detemir once daily), Bolus/Prandial (rapid-acting — lispro/aspart before meals), Bedtime correctional dose if needed",
      },
      {
        name: "Drugs to HOLD in Hospital",
        content:
          "Metformin (hold if contrast, AKI, hemodynamic instability), SGLT2-i (DKA risk), GLP-1 RA (nausea, limited data), Sulfonylureas (hypoglycemia risk in NPO/variable eating)",
      },
    ],
    pimpingQuestions: [
      "What are the ADA inpatient glycemic targets for ICU versus non-ICU patients?",
      "Why is sliding scale insulin alone inadequate for inpatient glycemic management?",
      "What is the preferred insulin regimen for a non-ICU hospitalized diabetic patient who is eating?",
      "Why should metformin be held in hospitalized patients receiving IV contrast?",
      "What is stress hyperglycemia and how does it differ from true diabetes in the hospital setting?",
    ],
  },
  {
    id: "im-anemia",
    name: "Anemia (Multifactorial)",
    icdCode: "D64.9",
    rotation: "internal-medicine",
    category: "Hematology",
    definition:
      "Anemia is defined as hemoglobin below the lower limit of normal for age and sex: <13 g/dL in men, <12 g/dL in women, <11 g/dL in pregnant women. In the internal medicine setting, anemia is frequently multifactorial, involving combinations of iron deficiency (most common nutritional cause globally), anemia of chronic disease/inflammation (ACD), vitamin B12 or folate deficiency, hemolytic anemia, and anemia of CKD (EPO deficiency). Characterization by MCV (microcytic, normocytic, macrocytic) guides the diagnostic approach.",
    diagnosticCriteria:
      "Initial workup: CBC with differential, reticulocyte count and reticulocyte production index (RPI), peripheral smear, iron studies (serum iron, TIBC, ferritin, transferrin saturation), B12, folate. Further testing based on morphology: Coombs test (hemolytic anemia), LDH, haptoglobin, bilirubin (hemolysis markers), bone marrow biopsy (if aplasia, myelophthisic, or myelodysplastic process suspected).",
    presentation: {
      chiefComplaint: [
        "Fatigue and weakness",
        "Shortness of breath on exertion",
        "Palpitations",
        "Dizziness or lightheadedness",
        "Pallor noted by others",
      ],
      associatedSymptoms: [
        "Pallor (conjunctival, palmar, sublingual)",
        "Tachycardia (compensatory)",
        "Flow murmur (systolic ejection murmur in severe anemia)",
        "Pica (iron deficiency — craving non-food items: ice, clay)",
        "Koilonychia (spoon nails — iron deficiency)",
        "Glossitis and angular cheilitis (B12/folate or iron deficiency)",
        "Neurologic symptoms (subacute combined degeneration — B12 deficiency)",
        "Jaundice and dark urine (hemolytic anemia)",
      ],
      demographics:
        "Iron deficiency anemia: most common in premenopausal women, vegetarians, GI blood loss. ACD: most common anemia in hospitalized patients; associated with chronic infection, autoimmune diseases, malignancy. B12 deficiency: vegans, pernicious anemia (autoimmune gastritis), post-gastrectomy, metformin use. Folate deficiency: malnutrition, alcohol use disorder, methotrexate, pregnancy.",
    },
    distinguishingFeatures:
      "Microcytic (MCV <80): iron deficiency (low ferritin, high TIBC), ACD (normal/high ferritin, low TIBC), thalassemia (low MCV out of proportion to Hgb drop, target cells, elevated RBC count). Normocytic (MCV 80–100): ACD, hemolytic anemia, aplastic anemia, AKI/CKD, early iron/B12/folate deficiency. Macrocytic (MCV >100): megaloblastic (B12, folate — hypersegmented neutrophils), non-megaloblastic (alcohol, hypothyroidism, liver disease, medications).",
    redFlags: [
      "Hgb <7 g/dL or symptomatic anemia — consider transfusion (target Hgb ≥7–8, or ≥8 in cardiac disease)",
      "Rapidly falling Hgb — suspect active bleeding or hemolysis",
      "Hemolytic anemia with LDH elevation, low haptoglobin, positive Coombs test — investigate for autoimmune, TTP, or drug-induced cause",
      "New anemia with lymphadenopathy, splenomegaly, or constitutional symptoms — workup for malignancy",
      "Neurologic symptoms with macrocytic anemia — B12 deficiency (subacute combined degeneration of spinal cord)",
    ],
    mnemonics: [
      {
        name: "Microcytic Anemia (TAILS)",
        content:
          "Thalassemia, Anemia of chronic disease, Iron deficiency, Lead poisoning, Sideroblastic anemia",
      },
      {
        name: "Macrocytic Anemia (BAD FARMS)",
        content:
          "B12 deficiency, Alcohol, Drug-induced (MTX, hydroxyurea, AZT), Folate deficiency, Aplastic anemia, Reticulocytosis, MDS, Symptoms of hypothyroidism/liver disease",
      },
    ],
    pimpingQuestions: [
      "How do you distinguish iron deficiency anemia from anemia of chronic disease using iron studies?",
      "What is the reticulocyte production index (RPI) and how does it classify the bone marrow response?",
      "What neurologic complication occurs in B12 deficiency, and why can folate supplementation worsen it?",
      "What are the indications for red blood cell transfusion in a stable hospitalized patient?",
      "What is the most common cause of macrocytic anemia in a patient on methotrexate?",
    ],
  },
  {
    id: "im-siadh",
    name: "SIADH",
    icdCode: "E22.2",
    rotation: "internal-medicine",
    category: "Endocrinology / Nephrology",
    definition:
      "Syndrome of inappropriate antidiuretic hormone secretion (SIADH) is the most common cause of euvolemic hypotonic hyponatremia. It results from excessive and inappropriate ADH (vasopressin) secretion or action causing renal free water retention, plasma dilution, and hyponatremia, despite normal-to-low plasma osmolality. The kidneys continue to excrete concentrated urine (Uosm typically >300 mOsm/kg) despite reduced serum osmolality, which is the hallmark of inappropriateness.",
    diagnosticCriteria:
      "Essential criteria (Schwartz-Bartter): (1) hyponatremia with hypotonicity (Posm <275 mOsm/kg); (2) urine osmolality >100 mOsm/kg (inappropriately concentrated); (3) euvolemia (no orthostatic hypotension, no edema, no hypoalbuminemia); (4) urine sodium >40 mEq/L on normal sodium diet; (5) normal thyroid function (TSH); (6) normal adrenal function (cortisol); (7) no recent diuretic use. Supplemental criteria: serum uric acid <4 mg/dL (due to uricosuria), BUN <10 mg/dL (due to dilution), fractional urate excretion >12%.",
    presentation: {
      chiefComplaint: [
        "Nausea and headache",
        "Confusion or altered mental status",
        "Found to have low sodium on routine labs",
        "Fatigue and malaise",
        "Seizure (severe or acute SIADH)",
      ],
      associatedSymptoms: [
        "Muscle cramps",
        "Lethargy and somnolence",
        "Gait abnormality and falls (common in elderly)",
        "Seizures and coma (Na+ <120 mEq/L rapidly)",
        "Symptoms related to the underlying cause (pulmonary, CNS, malignancy)",
      ],
      demographics:
        "Most common in elderly, institutionalized patients on multiple medications. Common etiologies: CNS disorders (meningitis, encephalitis, SAH, stroke, brain tumors, head trauma); pulmonary (pneumonia, TB, lung abscess, mechanical ventilation); malignancy with ectopic ADH production (SCLC most important, pancreatic, prostate, lymphoma); medications (SSRIs, SNRIs, tricyclics, carbamazepine, oxcarbazepine, chlorpropamide, cyclophosphamide, NSAIDs, opioids); postoperative state; HIV/AIDS.",
    },
    distinguishingFeatures:
      "SIADH vs. cerebral salt wasting (CSW): Both cause hyponatremia with high urine sodium. Key difference — volume status: SIADH is euvolemic; CSW is hypovolemic (natriuresis drives volume depletion, orthostasis). Treatment is opposite: SIADH = fluid restriction; CSW = salt and volume replacement. SIADH vs. hypothyroidism/adrenal insufficiency: Thyroid and cortisol levels must be normal to diagnose SIADH (both can independently cause SIADH-like picture).",
    redFlags: [
      "Na+ <120 mEq/L with neurologic symptoms — 3% hypertonic saline (100 mL IV over 10–20 min, repeat up to 3 times for seizures/coma)",
      "Overcorrection by >10–12 mEq/L in 24 hours — risk of ODS (demyelination), treat by re-lowering sodium with DDAVP + hypotonic fluid",
      "Failure to identify underlying malignancy (SCLC — chest imaging mandatory)",
      "Adrenal insufficiency masquerading as SIADH — give stress-dose steroids if suspected",
    ],
    mnemonics: [
      {
        name: "SIADH Causes (6 Cs)",
        content:
          "CNS disorders, Cancer (SCLC), Chest/pulmonary disease, Cortisol deficiency (excluded — it's a mimicker), Carbamazepine and other drugs, Chest surgery/post-op",
      },
      {
        name: "SIADH vs CSW",
        content:
          "SIADH: euvolemic, urine Na+ high, treat with fluid restriction; CSW: hypovolemic, urine Na+ high, treat with salt/fluid replacement — Volume status is the KEY differentiator",
      },
    ],
    pimpingQuestions: [
      "What are the diagnostic criteria for SIADH (Schwartz-Bartter criteria)?",
      "How do you differentiate SIADH from cerebral salt wasting, and why does the distinction matter?",
      "What is the mechanism by which SCLC causes SIADH?",
      "What pharmacologic treatments are used for chronic SIADH refractory to fluid restriction?",
      "What is the risk of correcting hyponatremia too rapidly, and how is it managed if overcorrection occurs?",
    ],
  },

  // ─── CARDIOLOGY (PAEA IM Blueprint) ─────────────────────────────────────────

  {
    id: "im-hypertension",
    name: "Essential Hypertension",
    icdCode: "I10",
    rotation: "internal-medicine",
    category: "Cardiology",
    definition:
      "Sustained elevation of arterial BP. Confirmed with ≥2 readings on ≥2 separate occasions, or ambulatory/home BP monitoring.",
    diagnosticCriteria:
      "ACC/AHA 2017 BP Categories:\n• Normal:        <120 / <80\n• Elevated:      120–129 / <80\n• Stage 1 HTN:   130–139 / 80–89\n• Stage 2 HTN:   ≥140 / ≥90\n• Hypertensive crisis: >180 / >120\n\nWorkup (initial): CMP, lipids, HbA1c, TSH, UA, EKG. Screen for secondary causes if young (<30), resistant (≥3 drugs), or abrupt onset.",
    presentation: {
      chiefComplaint: [
        "Found to have high blood pressure on routine visit",
        "Headache (occipital, morning)",
        "Most patients are asymptomatic",
      ],
      associatedSymptoms: [
        "Asymptomatic in most patients (the 'silent killer')",
        "Headache, dizziness (uncommon, usually severe HTN)",
        "Vision changes, nosebleeds (severe)",
        "Signs of end-organ damage on exam",
      ],
      demographics:
        "~47% of US adults; rises with age, obesity, Black race, family history, high sodium intake, alcohol use, sedentary lifestyle.",
    },
    distinguishingFeatures:
      "Secondary HTN clues (consider workup if present):\n• Young onset (<30) or sudden severe onset\n• Resistant to ≥3 drugs (incl. diuretic)\n• Hypokalemia → primary aldosteronism\n• Episodic spells/sweating → pheochromocytoma\n• Abdominal bruit → renovascular (renal artery stenosis)\n• Truncal obesity, striae → Cushing's\n• Snoring/daytime fatigue → OSA",
    redFlags: [
      "BP >180/120 with end-organ damage = hypertensive emergency (separate condition)",
      "Suspected secondary cause in young patient",
      "Severe HTN with chest/back pain → r/o aortic dissection",
      "Headache + papilledema → check for hypertensive encephalopathy/PRES",
    ],
    mnemonics: [
      {
        name: "First-Line Tx (ACC/AHA)",
        content:
          "ACE-I / ARB, Thiazide (chlorthalidone preferred), CCB (amlodipine). In Black non-CKD patients: thiazide or CCB first. CKD or DM with proteinuria: ACE-I/ARB first.",
      },
      {
        name: "End-Organ Damage Screen",
        content:
          "Brain (stroke, TIA), Eyes (retinopathy), Heart (LVH, CAD, HF), Kidneys (CKD, proteinuria), Vasculature (PAD, AAA)",
      },
    ],
    pimpingQuestions: [
      "What BP threshold defines stage 1 vs stage 2 hypertension per ACC/AHA?",
      "When should secondary HTN workup be pursued and what tests for which cause?",
      "What is the BP target in patients ≥65 vs those with diabetes or CKD?",
      "Which antihypertensive class is preferred in CKD with proteinuria, and why?",
    ],
  },

  {
    id: "im-hyperlipidemia",
    name: "Hyperlipidemia / Dyslipidemia",
    icdCode: "E78.5",
    rotation: "internal-medicine",
    category: "Cardiology / Preventive",
    definition:
      "Abnormal lipid panel — typically elevated LDL-C, total cholesterol, or triglycerides — that increases ASCVD risk.",
    diagnosticCriteria:
      "Fasting Lipid Panel Targets (ACC/AHA 2018):\n• LDL-C:  <100 mg/dL ideal; <70 if ASCVD or DM + risk factors\n• HDL-C:  ≥40 (M), ≥50 (F)\n• Trig:   <150 mg/dL\n• TC:     <200 mg/dL\n\nStatin-Benefit Groups (4 groups):\n1. Clinical ASCVD (post-MI, stroke, PAD)\n2. LDL ≥190 mg/dL\n3. DM age 40–75 + LDL 70–189\n4. Age 40–75 + LDL 70–189 + 10-yr ASCVD risk ≥7.5%",
    presentation: {
      chiefComplaint: [
        "Asymptomatic, found on routine screening",
        "Family history of early CAD",
        "Xanthomas or xanthelasma noted",
      ],
      associatedSymptoms: [
        "Asymptomatic in most",
        "Xanthelasma (eyelid plaques)",
        "Tendinous xanthomas (Achilles, knuckles) — familial",
        "Corneal arcus (premature in <45 yo)",
        "Eruptive xanthomas (severe HTG, TG >1000)",
      ],
      demographics:
        "Universal screening age 40–75; earlier if family history of premature CAD (<55 M, <65 F) or familial hyperlipidemia.",
    },
    distinguishingFeatures:
      "Statin Intensity:\n• High-intensity (↓LDL ≥50%):  atorvastatin 40–80, rosuvastatin 20–40\n• Moderate (↓LDL 30–49%):     atorva 10–20, rosuva 5–10, simvastatin 20–40\n• Low (<30%):                  pravastatin, fluvastatin\n\nSecondary causes: hypothyroidism, nephrotic syndrome, cholestasis, DM, alcohol, obesity, certain meds (thiazides, beta-blockers, steroids).",
    redFlags: [
      "Triglycerides >500 mg/dL → risk of acute pancreatitis (treat with fibrate or omega-3)",
      "LDL ≥190 → suspect familial hypercholesterolemia, screen first-degree relatives",
      "New muscle pain on statin + dark urine → rhabdomyolysis (stop statin, check CK)",
      "Unexplained transaminitis on statin (>3× ULN)",
    ],
    mnemonics: [
      {
        name: "Statin SE (M.E.M.S.)",
        content:
          "Myalgia/Myopathy, Elevated LFTs, Memory complaints (rare), Sugar (DM risk slightly increased)",
      },
      {
        name: "Add-On Agents",
        content:
          "Ezetimibe (block intestinal absorption, +20% LDL drop), PCSK9 inhibitors (alirocumab, evolocumab — for FH or refractory), Bempedoic acid, Fibrates (TG-lowering), Niacin (rarely used)",
      },
    ],
    pimpingQuestions: [
      "Which patients qualify as 'statin benefit groups' per ACC/AHA?",
      "What is the difference between high- and moderate-intensity statins?",
      "What is the threshold TG level requiring fibrate therapy to prevent pancreatitis?",
      "When are PCSK9 inhibitors indicated as add-on therapy?",
    ],
  },

  {
    id: "im-stable-angina",
    name: "Stable Angina / Chronic Coronary Disease",
    icdCode: "I25.10",
    rotation: "internal-medicine",
    category: "Cardiology",
    definition:
      "Predictable, exertional chest discomfort due to fixed coronary stenosis causing demand-supply mismatch. Relieved with rest or nitroglycerin.",
    diagnosticCriteria:
      "Classic Angina (3 features):\n1. Substernal chest discomfort with characteristic quality/duration\n2. Provoked by exertion or emotional stress\n3. Relieved by rest or NTG within 5 min\n\n• Typical: all 3 features\n• Atypical: 2 of 3\n• Non-cardiac: ≤1\n\nWorkup: EKG (often normal at rest), stress test (exercise EKG, stress echo, nuclear), CT coronary angio (anatomic), invasive cath (gold standard).",
    presentation: {
      chiefComplaint: [
        "Chest pressure/tightness with exertion",
        "Discomfort radiating to arm or jaw with activity",
        "Shortness of breath with exertion",
      ],
      associatedSymptoms: [
        "Pressure/squeezing/heaviness (NOT sharp/stabbing)",
        "Substernal, may radiate to L arm, jaw, back",
        "Lasts 2–10 minutes; relieved by rest/NTG",
        "Reproducible threshold of activity",
        "Anginal equivalents in elderly/diabetic/female: dyspnea, fatigue, nausea",
      ],
      demographics:
        "Risk factors: age, male sex, smoking, DM, HTN, hyperlipidemia, family history of premature CAD, obesity, sedentary lifestyle.",
    },
    distinguishingFeatures:
      "Stable vs Unstable Angina:\n• Stable:    predictable, exertional, relieved by rest/NTG, no troponin rise\n• Unstable:  new-onset, at rest, or worsening pattern → ACS workup\n\nFirst-line meds (anti-anginal):\n1. Beta-blocker (metoprolol, bisoprolol) — first-line\n2. CCB (amlodipine, diltiazem) — alternative or add-on\n3. Long-acting nitrate (ISMN) — symptom control\n4. Ranolazine — refractory\n\nSecondary prevention (everyone): aspirin + statin + ACE-I/ARB if indicated.",
    redFlags: [
      "New rest pain or pain at lower threshold → unstable angina, ACS workup",
      "Pain >20 minutes not relieved by NTG → r/o MI",
      "Hemodynamic compromise during pain",
      "New diaphoresis, nausea, syncope with chest pain",
    ],
    mnemonics: [
      {
        name: "ABCDE Secondary Prevention",
        content:
          "Aspirin/Antianginal, Beta-blocker/BP control, Cholesterol (statin)/Cigarette cessation, Diet/Diabetes control, Exercise/Education",
      },
      {
        name: "Levine Sign",
        content: "Patient clenches fist over chest describing angina — classic finding",
      },
    ],
    pimpingQuestions: [
      "When is stress testing preferred over coronary CT angiography?",
      "What are the first-line anti-anginal medications and why beta-blockers?",
      "When is revascularization (PCI vs CABG) indicated in stable CAD?",
      "What is the difference between Prinzmetal (variant) angina and stable angina?",
    ],
  },

  {
    id: "im-aortic-dissection",
    name: "Aortic Dissection",
    icdCode: "I71.00",
    rotation: "internal-medicine",
    category: "Cardiology / Vascular",
    definition:
      "Tear in aortic intima allowing blood to enter the medial layer, creating a false lumen. Life-threatening emergency.",
    diagnosticCriteria:
      "Stanford Classification:\n• Type A:  involves ASCENDING aorta → SURGICAL emergency\n• Type B:  descending only (distal to L subclavian) → medical management first\n\nDeBakey:\n• I: ascending + descending\n• II: ascending only\n• III: descending only\n\nDiagnosis: CT angiography (gold standard, fast). TEE if unstable or contrast contraindicated. CXR may show widened mediastinum.",
    presentation: {
      chiefComplaint: [
        "Sudden tearing/ripping chest or back pain",
        "Worst pain of life",
        "Pain that migrates",
      ],
      associatedSymptoms: [
        "Sharp, tearing, ripping pain — maximal at onset",
        "Migration of pain (anterior → back as it propagates)",
        "Pulse deficit between arms (>20 mmHg SBP difference)",
        "New aortic regurgitation murmur (Type A)",
        "Neuro deficits (carotid involvement, spinal cord ischemia)",
        "Syncope, hypotension, cardiac tamponade (Type A)",
      ],
      demographics:
        "Risk: HTN (most common), connective tissue disease (Marfan, Ehlers-Danlos, Loeys-Dietz), bicuspid aortic valve, cocaine use, pregnancy (3rd trimester), trauma, prior aortic surgery.",
    },
    distinguishingFeatures:
      "MI vs Dissection:\n• MI:        crushing, gradual buildup, ST changes\n• Dissection: tearing, max at onset, normal EKG (usually), pulse/BP differential\n\nKey trap: never give thrombolytics for chest pain until dissection is ruled out!",
    redFlags: [
      "Type A dissection — call CT surgery STAT (mortality 1–2% per hour untreated)",
      "Hypotension or tamponade physiology (cardiac tamponade from rupture into pericardium)",
      "New aortic regurgitation murmur",
      "Pulse or BP differential between extremities",
      "Neurologic deficit (CVA, paraplegia)",
    ],
    mnemonics: [
      {
        name: "BP Goal",
        content:
          "SBP <120, HR <60. Use IV beta-blocker FIRST (esmolol, labetalol) THEN nitroprusside. Beta-blocker before vasodilator to avoid reflex tachycardia → worsening shear stress.",
      },
      {
        name: "Pain Description",
        content: "Tearing > Ripping > Sharp > Stabbing — and migrates as it dissects",
      },
    ],
    pimpingQuestions: [
      "Why must you give beta-blockers before vasodilators in aortic dissection?",
      "What is the Stanford classification and how does it guide management?",
      "What is the BP and HR target in acute dissection management?",
      "Which connective tissue diseases predispose to dissection?",
    ],
  },

  {
    id: "im-aaa",
    name: "Abdominal Aortic Aneurysm (AAA)",
    icdCode: "I71.4",
    rotation: "internal-medicine",
    category: "Cardiology / Vascular",
    definition:
      "Focal aortic dilation ≥3.0 cm. Risk of rupture rises sharply with size — classic 'silent killer' until it ruptures.",
    diagnosticCriteria:
      "Size & Management:\n• <3.0 cm:    normal\n• 3.0–3.9:    surveillance every 2–3 yrs\n• 4.0–4.9:    surveillance every 6–12 mo\n• 5.0–5.4:    surveillance every 6 mo\n• ≥5.5 cm:    elective REPAIR (open or EVAR)\n• Growth >0.5 cm/6 mo:  repair regardless of size\n• Symptomatic / ruptured:  emergent repair\n\nUSPSTF screening: one-time abdominal US in men 65–75 with smoking history.",
    presentation: {
      chiefComplaint: [
        "Asymptomatic, found incidentally on imaging",
        "Pulsatile abdominal mass on exam",
        "Sudden severe abdominal/back/flank pain (rupture)",
      ],
      associatedSymptoms: [
        "Most are ASYMPTOMATIC until rupture",
        "Pulsatile periumbilical mass",
        "Abdominal bruit",
        "Triad of rupture: abdominal pain + hypotension + pulsatile mass",
        "Flank or back pain mimicking renal colic",
        "Syncope (from hemorrhage)",
      ],
      demographics:
        "Risk: male (5×), age >65, smoking (strongest modifiable), HTN, family history, atherosclerosis, COPD. Less common in women, Black, Hispanic, and diabetic patients.",
    },
    distinguishingFeatures:
      "Suspect rupture in any older male smoker with:\n• New severe abdominal/flank/back pain\n• Hypotension\n• Pulsatile mass\n→ STAT bedside US, do NOT wait for CT if unstable\n\nMisdiagnosis trap: rupture often mistaken for renal colic in elderly men.",
    redFlags: [
      "Abdominal/back pain + hypotension + pulsatile mass = rupture, OR until proven otherwise",
      "Rapid expansion (>0.5 cm in 6 months)",
      "New tenderness over known AAA (impending rupture)",
      "AAA ≥5.5 cm in low-risk surgical candidate (delaying repair = unacceptable risk)",
    ],
    mnemonics: [
      {
        name: "AAA Risk Factors (SMOKER)",
        content: "Smoking, Male, Older age, Kin (family hx), Elevated BP, Race (white)",
      },
      {
        name: "Repair Threshold",
        content: "≥5.5 cm OR symptomatic OR growth >0.5 cm/6 mo OR >1 cm/yr",
      },
    ],
    pimpingQuestions: [
      "What is the USPSTF screening recommendation for AAA?",
      "At what size is elective repair indicated, and why this threshold?",
      "How does rupture present clinically, and what is the diagnostic test of choice if unstable?",
      "What is the difference between EVAR and open repair, and when is each preferred?",
    ],
  },

  {
    id: "im-pericarditis",
    name: "Acute Pericarditis",
    icdCode: "I30.9",
    rotation: "internal-medicine",
    category: "Cardiology",
    definition:
      "Inflammation of the pericardium. Most common cause: viral or idiopathic. Diagnosis requires ≥2 of 4 features.",
    diagnosticCriteria:
      "Diagnosis (need ≥2 of 4):\n1. Pleuritic chest pain — sharp, worse supine, better leaning forward\n2. Pericardial friction rub (best at LLSB, leaning forward)\n3. EKG changes: diffuse ST elevation + PR depression\n4. New or worsening pericardial effusion on echo\n\nSupportive: elevated CRP, mild troponin (myopericarditis if elevated).",
    presentation: {
      chiefComplaint: [
        "Sharp chest pain, worse with deep breath",
        "Pain better leaning forward",
        "Recent viral illness preceded onset",
      ],
      associatedSymptoms: [
        "Pleuritic, sharp chest pain (substernal or precordial)",
        "Worse: lying flat, deep inspiration, swallowing",
        "Better: sitting up, leaning forward",
        "Pericardial friction rub (3-component scratchy sound)",
        "Low-grade fever, malaise",
        "Recent URI in 1–2 weeks before onset",
      ],
      demographics:
        "Most common in young/middle-aged adults. Causes: idiopathic/viral (most common), post-MI (Dressler 2–10 wks post-MI), uremia, autoimmune (SLE, RA), TB, malignancy, post-cardiac surgery.",
    },
    distinguishingFeatures:
      "EKG: Pericarditis vs STEMI:\n• Pericarditis: diffuse ST↑ (concave up), PR depression, NO reciprocal changes\n• STEMI:        regional ST↑, reciprocal ST depression, Q-waves develop\n\n4 EKG Stages:\n1. Diffuse ST↑, PR depression\n2. Normalization\n3. T-wave inversion\n4. Return to baseline",
    redFlags: [
      "Hypotension + JVD + muffled heart sounds = Beck's triad → cardiac tamponade",
      "Pulsus paradoxus >10 mmHg → tamponade physiology",
      "Troponin elevation → myopericarditis (admit, restrict exercise)",
      "Fever >38°C, large effusion, immunocompromised, oral anticoagulation → poor prognostic markers, admit",
      "Failure to respond after 1 week of NSAIDs",
    ],
    mnemonics: [
      {
        name: "Treatment (1st-line)",
        content:
          "NSAIDs (high-dose ibuprofen 600–800 mg TID or aspirin 750–1000 mg TID × 1–2 wks) + COLCHICINE 0.5 mg BID × 3 months (reduces recurrence ~50%, COPE/CORP trials). Avoid steroids unless refractory or specific etiology.",
      },
      {
        name: "Beck's Triad (Tamponade)",
        content: "Hypotension + Distended neck veins (↑JVP) + Muffled heart sounds",
      },
    ],
    pimpingQuestions: [
      "What 4 features make up the diagnostic criteria for acute pericarditis?",
      "How do you differentiate the EKG of pericarditis from STEMI?",
      "Why is colchicine added to NSAIDs as first-line, and what trial supports this?",
      "What are signs of tamponade, and what is the immediate intervention?",
    ],
  },

  {
    id: "im-tamponade",
    name: "Cardiac Tamponade",
    icdCode: "I31.4",
    rotation: "internal-medicine",
    category: "Cardiology / Critical Care",
    definition:
      "Pericardial fluid accumulation that exceeds the pericardium's compliance, compressing cardiac chambers and impairing filling. Obstructive shock.",
    diagnosticCriteria:
      "Clinical: Beck's Triad (only ~30%):\n1. Hypotension\n2. Elevated JVP (with prominent x-descent)\n3. Muffled heart sounds\n\nSupportive:\n• Pulsus paradoxus >10 mmHg\n• EKG: low voltage, electrical alternans\n• Echo (gold standard): effusion + RV/RA collapse during diastole, IVC plethora, septal bounce",
    presentation: {
      chiefComplaint: [
        "Sudden shortness of breath",
        "Lightheadedness, near-syncope",
        "Chest fullness or pressure",
      ],
      associatedSymptoms: [
        "Dyspnea (most sensitive symptom)",
        "Tachycardia, hypotension",
        "Elevated JVP with prominent x-descent, blunted/absent y-descent",
        "Pulsus paradoxus (SBP drops >10 mmHg with inspiration)",
        "Muffled heart sounds",
        "Cool extremities, oliguria (shock)",
      ],
      demographics:
        "Causes: malignancy (most common in chronic), uremia, infection (viral, TB, bacterial), post-cardiac surgery/procedure, trauma, aortic dissection (Type A), post-MI free wall rupture, anticoagulation.",
    },
    distinguishingFeatures:
      "Acute vs Chronic Tamponade:\n• Acute (trauma, dissection): small volume (~150 mL) can tamponade — rapid decompensation\n• Chronic (malignancy, uremia): liters can accumulate before tamponade — slow stretching\n\nKey distinction from constrictive pericarditis:\n• Tamponade: pulsus paradoxus prominent, no Kussmaul's sign\n• Constriction: Kussmaul's sign +, pericardial knock, pulsus paradoxus rare",
    redFlags: [
      "Hemodynamic instability — emergent pericardiocentesis",
      "Pulsus paradoxus >10 mmHg → tamponade physiology",
      "Echo showing RV diastolic collapse → preload-dependent — give IVF, AVOID diuretics",
      "PEA arrest with known effusion → emergent decompression",
    ],
    mnemonics: [
      {
        name: "Tamponade Management",
        content:
          "STABILIZE: IVF bolus (preload-dependent — do NOT diurese!), avoid hypotension, no PPV if possible. DEFINITIVE: pericardiocentesis (echo-guided) or surgical pericardial window.",
      },
      {
        name: "Pulsus Paradoxus",
        content:
          "Inspiration → ↑venous return to RV → septum pushes into LV → ↓LV filling → ↓CO → SBP drops >10 mmHg. Also seen in severe asthma/COPD, massive PE.",
      },
    ],
    pimpingQuestions: [
      "Why is IV fluid bolus indicated in tamponade despite elevated JVP?",
      "What echocardiographic findings are diagnostic of tamponade?",
      "How is pulsus paradoxus measured, and what does it indicate?",
      "How does tamponade differ from constrictive pericarditis on exam and hemodynamics?",
    ],
  },

  {
    id: "im-endocarditis",
    name: "Infective Endocarditis",
    icdCode: "I33.0",
    rotation: "internal-medicine",
    category: "Cardiology / Infectious Disease",
    definition:
      "Infection of the endocardium, typically affecting valves. Diagnosed using Modified Duke Criteria.",
    diagnosticCriteria:
      "Modified Duke Criteria — Definite IE if:\n• 2 major OR\n• 1 major + 3 minor OR\n• 5 minor\n\nMAJOR:\n1. Blood culture +: typical organism × 2, or persistent bacteremia\n2. Endocardial involvement: vegetation/abscess on echo, or new regurgitation murmur\n\nMINOR (FROM JANE):\n• Fever >38°C\n• Roth spots (retinal hemorrhages with pale center)\n• Osler nodes (painful fingertip nodules)\n• Murmur (new regurgitation)\n• Janeway lesions (painless palmar/plantar macules)\n• Anemia / Atypical organism\n• Nailbed splinter hemorrhages\n• Emboli (septic, mycotic aneurysm)\n• Predisposing condition (IVDU, prosthetic valve, prior IE)",
    presentation: {
      chiefComplaint: [
        "Fever and chills lasting weeks",
        "Fatigue and weight loss",
        "New murmur",
        "Embolic event (stroke, splenic infarct)",
      ],
      associatedSymptoms: [
        "Fever (most common — 90%)",
        "New or worsening regurgitation murmur",
        "Constitutional: fatigue, weight loss, night sweats, anorexia",
        "Embolic phenomena: stroke, splenic/renal infarcts, septic pulmonary emboli",
        "Peripheral stigmata: Janeway lesions, Osler nodes, Roth spots, splinters",
        "Splenomegaly, glomerulonephritis (hematuria)",
      ],
      demographics:
        "Predisposing: IVDU (right-sided, S. aureus), prosthetic valves, rheumatic heart disease (developing countries), congenital heart disease, prior IE, structural heart disease (MVP w/ regurg, bicuspid AV), poor dentition, immunosuppression.",
    },
    distinguishingFeatures:
      "Organisms by Setting:\n• Native valve, community:    S. viridans (subacute), S. aureus (acute)\n• IVDU (right-sided/tricuspid): S. aureus (most common), Pseudomonas\n• Prosthetic <2 mo:           S. epidermidis, S. aureus\n• Prosthetic >2 mo:           S. viridans, S. aureus, S. epi\n• Colon cancer association:   S. bovis (S. gallolyticus) → colonoscopy!\n• Culture-negative:           HACEK, Coxiella, Bartonella, fungi\n\nEcho: TTE first (sensitivity ~70%), TEE if negative TTE with high suspicion or prosthetic (sensitivity >95%).",
    redFlags: [
      "S. aureus bacteremia — assume endocarditis until proven otherwise (TEE indicated)",
      "S. bovis bacteremia → colonoscopy for occult colon malignancy",
      "Heart failure from acute regurgitation → urgent valve surgery",
      "Large vegetation >10 mm + embolic event → consider surgery",
      "Perivalvular abscess on TEE → surgical indication",
      "Persistent bacteremia >5–7 days despite appropriate antibiotics",
    ],
    mnemonics: [
      {
        name: "FROM JANE (Minor Criteria)",
        content:
          "Fever, Roth spots, Osler nodes, Murmur, Janeway lesions, Anemia/Atypical, Nailbed splinters, Embolic phenomena (+ Predisposing condition)",
      },
      {
        name: "Empiric Antibiotics",
        content:
          "Native valve: Vancomycin + ceftriaxone (or gentamicin). Prosthetic: Vancomycin + gentamicin + rifampin. Adjust based on cultures and organism.",
      },
      {
        name: "Painful Painless",
        content:
          "Osler nodes = Ouchy (painful, fingertips). Janeway = Just a stain (painless, palms/soles).",
      },
    ],
    pimpingQuestions: [
      "What are the Modified Duke Criteria for definite IE?",
      "What is the most common organism in IVDU endocarditis, and which valve is affected?",
      "Why does S. bovis bacteremia warrant colonoscopy?",
      "What are surgical indications in IE?",
      "How long is antibiotic therapy for native vs prosthetic valve IE?",
    ],
  },

  {
    id: "im-aortic-stenosis",
    name: "Aortic Stenosis",
    icdCode: "I35.0",
    rotation: "internal-medicine",
    category: "Cardiology / Valvular",
    definition:
      "Narrowing of the aortic valve obstructing LV outflow. Most common valvular disease in adults — typically calcific (degenerative) in elderly.",
    diagnosticCriteria:
      "Severity (Echo) — Severe AS:\n• Mean gradient ≥40 mmHg\n• Peak velocity ≥4.0 m/s\n• Aortic valve area ≤1.0 cm²\n\nLow-flow / low-gradient AS: severe AVA but reduced LVEF — needs dobutamine stress echo to confirm.",
    presentation: {
      chiefComplaint: [
        "Chest pain with exertion",
        "Syncope or near-syncope with exertion",
        "Shortness of breath with activity (heart failure)",
      ],
      associatedSymptoms: [
        "Classic triad (SAD): Syncope, Angina, Dyspnea — once symptoms appear, prognosis is poor without surgery",
        "Crescendo-decrescendo systolic ejection murmur, RUSB, radiates to carotids",
        "Diminished/delayed carotid pulse (pulsus parvus et tardus)",
        "S4 gallop (LV hypertrophy)",
        "Soft/absent A2 in severe AS",
        "Sustained PMI",
      ],
      demographics:
        "Calcific (most common, age >65), bicuspid aortic valve (presents 40–60s), rheumatic heart disease (developing countries — usually with mitral involvement).",
    },
    distinguishingFeatures:
      "Murmur Comparison:\n• AS:        crescendo-decrescendo, RUSB → carotids, radiates UP\n• MR:        holosystolic, apex → axilla\n• HOCM:      systolic, increases with Valsalva (decreased preload)\n• AS vs HOCM: handgrip ↓ AS murmur (↑afterload), ↑ MR murmur\n\nSurvival once symptoms appear:\n• Angina: 5 yrs\n• Syncope: 3 yrs\n• HF: 2 yrs",
    redFlags: [
      "Symptomatic severe AS — refer for AVR (TAVR or SAVR)",
      "Asymptomatic severe AS with LVEF <50% — AVR indicated",
      "Syncope with exertion in elderly — get echo, r/o severe AS",
      "Sudden cardiac death risk increases dramatically once symptoms appear",
    ],
    mnemonics: [
      {
        name: "Symptoms (SAD)",
        content: "Syncope (exertional), Angina, Dyspnea (HF) — symptoms = surgical indication",
      },
      {
        name: "Murmur",
        content:
          "Systolic crescendo-decrescendo at RUSB, radiates to carotids, soft S2 in severe disease, paradoxically split S2",
      },
    ],
    pimpingQuestions: [
      "What is the classic triad of symptoms in severe AS, and what is the survival once each appears?",
      "What echocardiographic criteria define severe AS?",
      "When is TAVR preferred over SAVR?",
      "Why do bicuspid aortic valves cause AS earlier than tricuspid?",
    ],
  },

  {
    id: "im-mitral-regurg",
    name: "Mitral Regurgitation",
    icdCode: "I34.0",
    rotation: "internal-medicine",
    category: "Cardiology / Valvular",
    definition:
      "Backflow of blood from LV to LA during systole due to mitral valve incompetence.",
    diagnosticCriteria:
      "Echo features — severe MR:\n• Vena contracta ≥0.7 cm\n• Regurgitant volume ≥60 mL\n• Regurgitant fraction ≥50%\n• EROA ≥0.40 cm²\n• Pulmonary vein flow reversal\n\nClassification:\n• Primary (degenerative): MVP, flail leaflet, rheumatic, IE\n• Secondary (functional): from LV dilation/dysfunction (ischemic CM, dilated CM)",
    presentation: {
      chiefComplaint: [
        "Shortness of breath with exertion",
        "Palpitations",
        "Heart failure symptoms (orthopnea, edema)",
      ],
      associatedSymptoms: [
        "Holosystolic (pansystolic) murmur at apex, radiates to L axilla",
        "Increases with handgrip (↑afterload)",
        "S3 gallop (volume overload)",
        "Laterally displaced PMI",
        "Acute MR (papillary rupture post-MI): flash pulmonary edema, cardiogenic shock",
        "Atrial fibrillation (LA dilation)",
      ],
      demographics:
        "MVP most common cause in young (women > men), ischemic MR after inferior MI, rheumatic in developing countries, IE-related, functional in HFrEF.",
    },
    distinguishingFeatures:
      "Acute vs Chronic MR:\n• Acute (papillary muscle rupture, IE, chordal rupture):\n  - Severe pulmonary edema, cardiogenic shock\n  - Soft murmur (small LA, rapid pressure equalization)\n  - Surgical emergency\n• Chronic (MVP, rheumatic):\n  - Compensated for years; LA dilates\n  - A-fib, then HF symptoms\n\nManeuvers:\n• Handgrip (↑afterload): ↑ MR murmur, ↓ AS, ↓ HOCM",
    redFlags: [
      "Acute severe MR (post-MI papillary rupture) — emergent surgery",
      "Symptomatic severe MR — surgical referral",
      "Asymptomatic severe MR with LVEF 30–60% or LVESD ≥40 mm — surgery indicated",
      "New MR murmur post-MI = papillary muscle dysfunction or rupture",
    ],
    mnemonics: [
      {
        name: "Murmur",
        content:
          "Holosystolic, blowing, apex → left axilla. Increased with handgrip. Best in left lateral decubitus.",
      },
      {
        name: "MVP",
        content:
          "Mid-systolic click + late systolic murmur. Click moves earlier with ↓preload (Valsalva, standing), later with ↑preload (squat).",
      },
    ],
    pimpingQuestions: [
      "What is the difference between primary and secondary (functional) MR?",
      "How does acute MR present differently from chronic MR?",
      "Why does the MR murmur increase with handgrip?",
      "When is mitral valve repair preferred over replacement?",
    ],
  },

  {
    id: "im-pad",
    name: "Peripheral Arterial Disease (PAD)",
    icdCode: "I73.9",
    rotation: "internal-medicine",
    category: "Cardiology / Vascular",
    definition:
      "Atherosclerotic narrowing of arteries supplying limbs, most commonly lower extremities. Marker of systemic atherosclerosis (high MI/stroke risk).",
    diagnosticCriteria:
      "Ankle-Brachial Index (ABI):\n• Normal:           1.00–1.40\n• Borderline:       0.91–0.99\n• Mild PAD:         0.71–0.90\n• Moderate PAD:     0.41–0.70\n• Severe PAD:       ≤0.40 (critical limb ischemia)\n• >1.40:            non-compressible (calcified — DM, CKD) → use TBI\n\nFontaine / Rutherford stages classify severity from claudication → rest pain → ulceration → gangrene.",
    presentation: {
      chiefComplaint: [
        "Calf pain with walking, relieved by rest",
        "Cold feet, hair loss on legs",
        "Non-healing foot ulcer",
        "Foot pain at rest, especially at night",
      ],
      associatedSymptoms: [
        "Intermittent claudication (calf, thigh, or buttock — depends on level)",
        "Diminished/absent peripheral pulses",
        "Cool, hairless, shiny skin distal to lesion",
        "Nail thickening, slow capillary refill",
        "Dependent rubor, elevation pallor",
        "Rest pain in critical limb ischemia (worst at night, relieved by dangling)",
        "Non-healing ulcers (lateral malleolus or toes — arterial)",
      ],
      demographics:
        "Strongest risk factor: smoking. Others: DM (most rapidly progressive), HTN, hyperlipidemia, CKD, age >65. Coexists with CAD/CVD ≥50% of the time.",
    },
    distinguishingFeatures:
      "Arterial vs Venous Ulcers:\n• Arterial: lateral malleolus or toes, punched-out, painful, dry, ↓pulses\n• Venous:   medial malleolus, irregular, less painful, weeping, hemosiderin staining, varicosities\n\nPAD vs Spinal stenosis (pseudoclaudication):\n• PAD: relieved by REST (in any position)\n• Spinal: relieved by FLEXION/sitting; walking downhill worse",
    redFlags: [
      "Rest pain → critical limb ischemia, urgent revascularization",
      "Non-healing ulcer or gangrene → urgent vascular surgery referral",
      "Acute limb ischemia (6 P's): Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia → emergent (golden 6 hours)",
      "Sudden onset = embolic; gradual = thrombotic",
    ],
    mnemonics: [
      {
        name: "6 P's of Acute Limb Ischemia",
        content: "Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia (cold)",
      },
      {
        name: "Treatment",
        content:
          "Risk reduction (cornerstone): SMOKING CESSATION (most important), statin, ACE-I/ARB, antiplatelet (aspirin or clopidogrel), supervised exercise. Symptomatic: cilostazol (PDE3 inhibitor — contraindicated in HF). Revascularization (endo or bypass) for critical limb ischemia or refractory.",
      },
    ],
    pimpingQuestions: [
      "What is the ABI and how is it interpreted?",
      "What is the most important modifiable risk factor in PAD?",
      "How do arterial and venous ulcers differ on exam?",
      "What are the 6 P's of acute limb ischemia, and what is the treatment window?",
      "Why is cilostazol contraindicated in heart failure?",
    ],
  },

  {
    id: "im-syncope",
    name: "Syncope",
    icdCode: "R55",
    rotation: "internal-medicine",
    category: "Cardiology / Neurology",
    definition:
      "Transient loss of consciousness due to global cerebral hypoperfusion, with rapid onset, short duration, and spontaneous complete recovery.",
    diagnosticCriteria:
      "Initial Workup (everyone):\n• History + physical (most important)\n• 12-lead EKG\n• Orthostatic vital signs\n• Glucose\n\nFurther evaluation by suspected etiology:\n• Cardiac suspected: echo, telemetry, stress test, +/- EP study\n• Neurogenic: tilt-table test\n• Unclear with red flags: hospital admission for monitoring\n\nSan Francisco Syncope Rule (CHESS): predicts 7-day serious outcome — CHF, Hct <30, EKG abnormal, SOB, SBP <90.",
    presentation: {
      chiefComplaint: [
        "Passed out and woke up",
        "Lightheadedness then loss of consciousness",
        "Brief unresponsive episode",
      ],
      associatedSymptoms: [
        "Brief LOC with spontaneous recovery (<1–2 min)",
        "Premonitory: lightheadedness, nausea, diaphoresis (vasovagal)",
        "Sudden, no warning, with exertion — concerning for cardiac",
        "Palpitations preceding LOC — arrhythmia",
        "Convulsive movements possible (myoclonic jerks — not seizure)",
        "Tongue bite (lateral) suggests seizure not syncope",
      ],
      demographics:
        "Most common: vasovagal/neurocardiogenic (young, situational). Cardiac syncope (older, structural HD, exertional) carries highest mortality. Orthostatic in elderly, dehydrated, or polypharmacy.",
    },
    distinguishingFeatures:
      "Etiology Categories:\n┌──────────────┬────────────────────────────────────────────────┐\n│ Reflex (50%) │ Vasovagal, situational, carotid sinus           │\n│ Orthostatic  │ Volume depletion, autonomic failure, meds       │\n│ Cardiac (10%)│ Arrhythmia, structural (AS, HOCM), PE, MI       │\n│ Neurologic   │ Rare — usually seizure or vertebrobasilar       │\n└──────────────┴────────────────────────────────────────────────┘\n\nSyncope vs Seizure:\n• Syncope: brief, no postictal state, pale, may have brief myoclonus\n• Seizure: longer, postictal confusion, tongue bite (lateral), incontinence, aura",
    redFlags: [
      "Exertional syncope — concerning for AS, HOCM, anomalous coronaries → echo urgently",
      "Syncope with chest pain, dyspnea — r/o ACS, PE, dissection",
      "Family history of sudden cardiac death — get EKG (long QT, Brugada, HOCM)",
      "Abnormal EKG: long QT, Brugada pattern, WPW, complete heart block, paced/AICD",
      "Structural heart disease known — admit, telemetry",
      "Recurrent unexplained syncope",
    ],
    mnemonics: [
      {
        name: "High-Risk EKG (admission)",
        content:
          "Long QT, Brugada (V1–V3 ST↑), Mobitz II / 3rd degree block, sustained VT, sinus pause >3 sec, WPW, paced rhythm with symptoms",
      },
      {
        name: "Cardiac Syncope Clues",
        content:
          "Exertional, no prodrome, supine, palpitations preceding, FHx sudden death, abnormal EKG, structural heart disease",
      },
    ],
    pimpingQuestions: [
      "How do you differentiate syncope from seizure on history?",
      "Which features make cardiac syncope more likely than vasovagal?",
      "What workup is recommended for first episode of syncope?",
      "When is admission warranted for syncope?",
      "What is the San Francisco Syncope Rule and when is it used?",
    ],
  },
];
