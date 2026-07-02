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
    id: "im-asthma",
    name: "Asthma",
    icdCode: "J45.901",
    rotation: "internal-medicine",
    category: "Pulmonology",
    definition:
      "Asthma is a chronic inflammatory disease of the airways characterized by variable and recurring symptoms, airflow obstruction, bronchial hyperresponsiveness, and an underlying inflammatory process. Acute exacerbations (asthma attacks) occur when airway inflammation and bronchoconstriction worsen, leading to dyspnea, wheezing, chest tightness, and cough. The disease is driven by mast cell activation, eosinophilic inflammation, and Th2 immune responses.",
    diagnosticCriteria:
      "Spirometry showing FEV1/FVC <0.70 that improves ≥12% and ≥200 mL after bronchodilator (reversibility) confirms obstructive physiology. Methacholine challenge (positive at PC20 ≤16 mg/mL) confirms hyperresponsiveness when spirometry is normal. Peak flow variability >20% over 2 weeks supports the diagnosis. Acute severity classified by NAEPP guidelines: mild intermittent, mild persistent, moderate persistent, severe persistent — based on symptom frequency, nighttime awakenings, and FEV1.",
    presentation: {
      chiefComplaint: [
        "Shortness of breath",
        "Wheezing",
        "Chest tightness",
        "Cough (often worse at night or early morning)",
      ],
      associatedSymptoms: [
        "Accessory muscle use (moderate-severe)",
        "Pulsus paradoxus >10 mmHg (severe)",
        "Diaphoresis",
        "Cyanosis (life-threatening)",
        "Silent chest (no audible wheeze = critical obstruction)",
        "Triggers: allergens, exercise, cold air, NSAIDs, beta-blockers, URI, stress",
      ],
      demographics:
        "Affects ~10% of US population; often onset in childhood but can occur at any age. Atopic triad: asthma + allergic rhinitis + eczema. Aspirin-exacerbated respiratory disease (AERD) = asthma + nasal polyps + NSAID sensitivity.",
    },
    distinguishingFeatures:
      "Diffuse expiratory wheezing with prolonged expiratory phase; reversible with bronchodilators (distinguishes from COPD). Absent fever (distinguishes from pneumonia). Normal chest X-ray or mild hyperinflation. Peak flow <50% predicted indicates severe exacerbation. Silent chest (no wheeze despite severe distress) is ominous — complete obstruction.",
    redFlags: [
      "Silent chest (absent wheeze despite severe distress)",
      "SpO2 <90% or PaO2 <60 mmHg",
      "PaCO2 ≥40 in acute attack (impending respiratory failure — normal CO2 is abnormally high)",
      "Altered mental status or agitation",
      "Pulsus paradoxus >25 mmHg",
      "Unable to speak in full sentences",
      "Peak flow <25% predicted",
    ],
    mnemonics: [
      {
        name: "ASTHMA Triggers",
        content:
          "Allergens, Smoke/irritants, Temperature (cold air), Humidity/weather, Medications (NSAIDs, beta-blockers), Activity (exercise)",
      },
      {
        name: "Stepwise NAEPP Management",
        content:
          "Step 1: SABA PRN → Step 2: add low-dose ICS → Step 3: medium ICS or + LABA → Step 4: medium ICS + LABA → Step 5: high ICS + LABA → Step 6: add oral corticosteroid",
      },
    ],
    pimpingQuestions: [
      "What is the significance of a normal PaCO2 in a patient with an acute asthma exacerbation?",
      "How does aspirin-exacerbated respiratory disease (AERD/Samter's Triad) present and how is it managed?",
      "What distinguishes asthma from COPD on spirometry and clinically?",
      "What are the indications for intubation in status asthmaticus, and what ventilator strategy is used?",
      "When do you add an inhaled corticosteroid versus a LABA in chronic asthma management?",
    ],
  },
  {
    id: "im-pneumothorax",
    name: "Pneumothorax",
    icdCode: "J93.9",
    rotation: "internal-medicine",
    category: "Pulmonology",
    definition:
      "Pneumothorax is the accumulation of air in the pleural space, causing partial or complete lung collapse. Primary spontaneous pneumothorax (PSP) occurs in tall, thin young males without underlying lung disease (due to subpleural bleb rupture). Secondary spontaneous pneumothorax (SSP) complicates underlying lung disease (COPD, asthma, cystic fibrosis, Pneumocystis pneumonia). Tension pneumothorax — air enters with each breath but cannot escape — is a life-threatening emergency causing mediastinal shift and hemodynamic compromise.",
    diagnosticCriteria:
      "CXR shows visceral pleural line with absent lung markings peripherally. CT chest (more sensitive) confirms size and guides management. Size estimated by interpleural distance at apex: <2 cm = small, ≥2 cm = large (British Thoracic Society) or by Collins formula. Tension pneumothorax is a clinical diagnosis — do NOT wait for imaging if hemodynamically unstable (tracheal deviation away, absent breath sounds, hypotension, distended neck veins).",
    presentation: {
      chiefComplaint: [
        "Sudden onset unilateral pleuritic chest pain",
        "Shortness of breath",
      ],
      associatedSymptoms: [
        "Decreased breath sounds ipsilaterally",
        "Hyperresonance to percussion",
        "Tracheal deviation away (tension)",
        "Hypotension and tachycardia (tension)",
        "Distended jugular veins (tension)",
        "Subcutaneous emphysema (crepitus)",
      ],
      demographics:
        "PSP: tall thin males 20–40 years, Marfan syndrome risk. SSP: any age with underlying lung disease (COPD most common). Iatrogenic: after central line placement (subclavian > internal jugular), thoracentesis, positive pressure ventilation.",
    },
    distinguishingFeatures:
      "PSP: young healthy male, ipsilateral pleuritic chest pain, decreased breath sounds; hemodynamically stable. SSP: older patient with known lung disease, more symptomatic because less pulmonary reserve. Tension: the above PLUS tracheal deviation away, hypotension, distended neck veins — hemodynamically unstable. Distinguish from PE (no chest wall findings) and MI (no breath sound changes).",
    redFlags: [
      "Hypotension with absent unilateral breath sounds (tension — needle decompression immediately)",
      "Tracheal deviation away from affected side",
      "SpO2 <90%",
      "Bilateral pneumothorax",
      "SSP (less reserve — more dangerous)",
      "Tension pneumothorax (clinical diagnosis — treat before CXR)",
    ],
    mnemonics: [
      {
        name: "Tension PTX (DOPE mnemonic for causes during intubation)",
        content:
          "Displacement of tube, Obstruction, Pneumothorax, Equipment failure",
      },
      {
        name: "Tension Pneumothorax Findings",
        content:
          "Trachea Deviates Away, Absent breath sounds, No BP (hypotension), Distended neck veins, Hyperresonance",
      },
    ],
    pimpingQuestions: [
      "What is the immediate treatment for tension pneumothorax, and where do you place the needle?",
      "How does primary spontaneous pneumothorax differ from secondary in terms of management?",
      "What is the recurrence rate of PSP after first episode, and when is pleurodesis indicated?",
      "How does pneumothorax appear on CXR and how do you estimate size?",
      "Which underlying conditions predispose to secondary spontaneous pneumothorax?",
    ],
  },
  {
    id: "im-pleural-effusion",
    name: "Pleural Effusion",
    icdCode: "J90",
    rotation: "internal-medicine",
    category: "Pulmonology",
    definition:
      "A pleural effusion is an abnormal accumulation of fluid in the pleural space. Effusions are classified as transudates (from altered hydrostatic/oncotic pressures) or exudates (from pleural/lung inflammation or malignancy) using Light's criteria. The most common causes are congestive heart failure (transudate), malignancy (exudate), and parapneumonic effusion (exudate). Massive effusions cause compressive atelectasis and respiratory compromise.",
    diagnosticCriteria:
      "CXR: blunting of costophrenic angle (>200 mL needed), meniscus sign, opacification; lateral decubitus view shows layering (differentiates free from loculated). Ultrasound: most sensitive for detecting and guiding thoracentesis. Thoracentesis fluid analysis: Light's criteria for exudate — pleural/serum protein ratio >0.5 OR pleural/serum LDH ratio >0.6 OR pleural LDH >2/3 upper limit of normal serum LDH. Additional tests: pH, glucose, cell count, cytology, culture, amylase.",
    presentation: {
      chiefComplaint: [
        "Shortness of breath (especially positional)",
        "Pleuritic chest pain (if exudate/parapneumonic)",
        "Cough",
        "Asymptomatic (found incidentally)",
      ],
      associatedSymptoms: [
        "Dullness to percussion at base",
        "Decreased breath sounds at base",
        "Egophony at upper effusion border",
        "Friction rub (early pleuritis before fluid accumulates)",
        "Signs of underlying cause (peripheral edema in CHF, fever in parapneumonic)",
      ],
      demographics:
        "CHF (most common overall), malignancy (lung, breast, lymphoma), parapneumonic, PE, cirrhosis (hepatic hydrothorax — right-sided), nephrotic syndrome, TB (lymphocyte-predominant exudate).",
    },
    distinguishingFeatures:
      "Transudate bilateral in CHF; unilateral right-sided hepatic hydrothorax. Malignant effusion: bloody exudate, cytology positive in 60%. Parapneumonic complicated: pH <7.2, glucose <60, LDH >1000 → empyema requires drainage. Chylothorax: milky fluid, high triglycerides (>110 mg/dL). Hemothorax: hematocrit of fluid >50% of serum hematocrit.",
    redFlags: [
      "Tension hydrothorax (massive effusion causing mediastinal shift and hemodynamic compromise)",
      "Empyema (pH <7.2, glucose <60, frank pus) — requires chest tube drainage",
      "Bilateral effusions with mediastinal widening (malignancy)",
      "SpO2 <90% from compressive atelectasis",
      "Rapid re-accumulation after thoracentesis",
    ],
    mnemonics: [
      {
        name: "Light's Criteria (EXudate = any ONE of these)",
        content:
          "Protein ratio >0.5, LDH ratio >0.6, LDH >2/3 upper limit normal — if none met → transudate",
      },
      {
        name: "CHAMPS (Transudate causes)",
        content:
          "CHF (most common), Hepatic hydrothorax (cirrhosis), Atelectasis, Myxedema, PE (can be either), SVC obstruction",
      },
    ],
    pimpingQuestions: [
      "What are Light's criteria, and how do you use them to classify a pleural effusion?",
      "What pleural fluid findings indicate a complicated parapneumonic effusion requiring chest tube drainage?",
      "How does hepatic hydrothorax develop, and why is it usually right-sided?",
      "What are the causes of a pleural effusion with very low glucose (<30 mg/dL)?",
      "When is pleurodesis indicated for a recurrent pleural effusion?",
    ],
  },
  {
    id: "im-lung-cancer",
    name: "Lung Cancer",
    icdCode: "C34.90",
    rotation: "internal-medicine",
    category: "Pulmonology / Oncology",
    definition:
      "Lung cancer is the leading cause of cancer death in the United States. It is divided into non-small cell lung cancer (NSCLC — 85%: adenocarcinoma, squamous cell, large cell) and small cell lung cancer (SCLC — 15%). NSCLC is typically treated surgically if localized; SCLC is usually metastatic at presentation and treated with chemotherapy/radiation. Cigarette smoking accounts for ~85% of cases. The Surgeon General's landmark 1964 report established this association.",
    diagnosticCriteria:
      "CXR/CT chest: mass, hilar adenopathy, pleural effusion. CT-guided biopsy or bronchoscopy (BAL, transbronchial biopsy) for tissue diagnosis. PET scan for staging (metabolically active metastases). Brain MRI for staging (SCLC always, NSCLC if stage III-IV). Staging: NSCLC TNM system (I–IV); SCLC: limited stage (one hemithorax, can be encompassed by radiation port) vs. extensive stage. Molecular testing: EGFR, ALK, ROS1, PD-L1 (guides targeted therapy in NSCLC adenocarcinoma).",
    presentation: {
      chiefComplaint: [
        "Persistent cough or change in chronic cough",
        "Hemoptysis",
        "Chest pain",
        "Dyspnea",
        "Unintentional weight loss",
      ],
      associatedSymptoms: [
        "Hoarseness (left RLN compression)",
        "Dysphagia (esophageal compression)",
        "Facial/arm swelling (SVC syndrome)",
        "Bone pain (metastasis)",
        "Headache/seizures (brain metastasis)",
        "Paraneoplastic syndromes: SIADH/hyponatremia (SCLC), hypercalcemia (squamous cell, PTHrP), Cushing's (ectopic ACTH, SCLC), Eaton-Lambert syndrome (SCLC)",
        "Horner's syndrome + arm pain + apical mass = Pancoast tumor",
      ],
      demographics:
        "Peak incidence 65–70 years, male > female historically (now equalizing). Smoking: RR 15–30 × vs non-smokers. Other risks: radon (2nd leading cause), asbestos (synergistic with smoking), arsenic, chromium. Non-smokers: more likely adenocarcinoma with EGFR/ALK mutations.",
    },
    distinguishingFeatures:
      "Adenocarcinoma: peripheral, more common in non-smokers/women, EGFR/ALK mutations, BAC subtype. Squamous cell: central, cavitating, hypercalcemia (PTHrP). Large cell: peripheral, aggressive. SCLC: central, rapid doubling time, early extensive metastasis, neuroendocrine markers (synaptophysin, chromogranin), paraneoplastic syndromes common. Pancoast tumor: superior sulcus, Horner's + brachial plexopathy + rib destruction.",
    redFlags: [
      "Hemoptysis with weight loss and smoking history (lung cancer until proven otherwise)",
      "SVC syndrome (facial plethora, arm swelling, distended neck veins)",
      "Horner's syndrome with ipsilateral arm pain (Pancoast tumor)",
      "New neurologic symptoms (brain metastasis)",
      "Pathologic fracture (bone metastasis)",
      "Hyponatremia in smoker (SIADH from SCLC)",
    ],
    mnemonics: [
      {
        name: "SCLC Paraneoplastic (SCLC EACH)",
        content:
          "SIADH, Cushing's (ectopic ACTH), Eaton-Lambert syndrome, Antibodies (anti-Hu encephalopathy), Cerebellar degeneration, Hypercalcemia (less common in SCLC vs. squamous)",
      },
      {
        name: "Lung Cancer Type Memory",
        content:
          "Squamous = Sentral + Smoker + hypercalcemia + cavitates; Adeno = peripheral, non-smoker, women; SCLC = Small + paraneoplastic + chemo",
      },
    ],
    pimpingQuestions: [
      "What paraneoplastic syndromes are associated with SCLC versus squamous cell carcinoma?",
      "How does the Pancoast tumor present and what is the classic triad?",
      "What molecular markers are tested in NSCLC adenocarcinoma and why do they matter?",
      "What is the difference between limited and extensive stage SCLC?",
      "What are the USPSTF criteria for low-dose CT screening for lung cancer?",
    ],
  },
  {
    id: "im-osa",
    name: "Obstructive Sleep Apnea",
    icdCode: "G47.33",
    rotation: "internal-medicine",
    category: "Pulmonology",
    definition:
      "Obstructive sleep apnea (OSA) is characterized by repetitive episodes of complete (apnea) or partial (hypopnea) upper airway obstruction during sleep, causing oxyhemoglobin desaturations and arousals. The AHI (apnea-hypopnea index) defines severity: mild 5–14, moderate 15–29, severe ≥30 events/hour. OSA is associated with HTN, atrial fibrillation, stroke, metabolic syndrome, and pulmonary hypertension. Obesity is the strongest modifiable risk factor.",
    diagnosticCriteria:
      "Gold standard: in-lab polysomnography (PSG) measuring AHI, oxygen saturation, sleep stages, limb movements. Home sleep apnea testing (HSAT) acceptable for uncomplicated suspected OSA (no heart failure, COPD, or neuromuscular disease). AHI ≥5 events/hour with symptoms OR AHI ≥15 events/hour regardless of symptoms = OSA. STOP-BANG questionnaire: ≥3 positive = intermediate/high risk (sensitivity >90% for moderate-severe OSA).",
    presentation: {
      chiefComplaint: [
        "Witnessed apneic episodes during sleep (partner report)",
        "Loud snoring",
        "Excessive daytime sleepiness (Epworth Sleepiness Scale >10)",
        "Morning headaches",
        "Nocturia",
      ],
      associatedSymptoms: [
        "Non-restorative sleep",
        "Difficulty concentrating or memory impairment",
        "Irritability or mood changes",
        "Dry mouth on awakening",
        "Nocturnal diaphoresis",
        "Resistant hypertension",
      ],
      demographics:
        "Affects ~25% of adults. Male > female (2–3:1), though risk equalizes post-menopause. Strong association with obesity (BMI >30), large neck circumference (>17 inches male, >16 inches female), retrognathia, macroglossia, tonsillar hypertrophy. Hypothyroidism and acromegaly increase risk.",
    },
    distinguishingFeatures:
      "OSA vs. central sleep apnea: OSA has ongoing respiratory effort during apnea (obstructed airway); CSA has no effort (loss of central drive, seen in CHF, opioids). OSA vs. narcolepsy: narcolepsy has cataplexy, sleep paralysis, hypnagogic hallucinations, and normal AHI. Pickwickian syndrome = OSA + obesity hypoventilation (OHS): daytime hypercapnia, polycythemia, cor pulmonale.",
    redFlags: [
      "Witnessed apneas with severe desaturations (SpO2 <80%)",
      "Daytime hypercapnia (OHS/Pickwickian) — indicates ventilatory failure",
      "Cor pulmonale from OSA-related pulmonary hypertension",
      "Resistant hypertension not responding to multiple medications",
      "High-risk profession with untreated severe OSA (commercial driver, pilot)",
      "Perioperative setting: OSA dramatically increases anesthesia/sedation risk",
    ],
    mnemonics: [
      {
        name: "STOP-BANG Screening",
        content:
          "Snoring (loud), Tired (daytime sleepiness), Observed apneas, Pressure (HTN), BMI >35, Age >50, Neck >40 cm, Gender (male) — ≥3 = high risk",
      },
      {
        name: "OSA Consequences (CHASP)",
        content:
          "Car accidents, HTN (resistant), Atrial fibrillation, Stroke, Pulmonary HTN",
      },
    ],
    pimpingQuestions: [
      "What is the AHI, and how does it define OSA severity?",
      "How does OSA cause resistant hypertension, and what is the mechanism?",
      "What distinguishes obstructive from central sleep apnea on polysomnography?",
      "What are the cardiovascular consequences of untreated OSA?",
      "How does CPAP therapy improve atrial fibrillation in OSA patients?",
    ],
  },
  {
    id: "im-ild",
    name: "Interstitial Lung Disease / Pulmonary Fibrosis",
    icdCode: "J84.10",
    rotation: "internal-medicine",
    category: "Pulmonology",
    definition:
      "Interstitial lung disease (ILD) encompasses a heterogeneous group of diffuse parenchymal lung diseases affecting the lung interstitium (alveolar walls, perivascular tissue, and connective tissue). The most common is idiopathic pulmonary fibrosis (IPF), a progressive, irreversible fibrotic lung disease with usual interstitial pneumonia (UIP) pattern and a median survival of 3–5 years. Other ILDs include hypersensitivity pneumonitis (HP), connective tissue disease-associated ILD (CTD-ILD — RA, scleroderma, polymyositis), sarcoidosis, and drug-induced ILD.",
    diagnosticCriteria:
      "HRCT chest: IPF shows bilateral basal-predominant honeycombing with traction bronchiectasis (UIP pattern — confident diagnosis without biopsy). Other patterns (GGO, consolidation) require bronchoscopy or surgical lung biopsy. PFTs: restrictive pattern (reduced TLC, FVC, DLCO; normal or elevated FEV1/FVC). 6-minute walk test assesses severity and prognosis. BAL: lymphocytosis in sarcoidosis/HP, eosinophilia in eosinophilic pneumonia. Serology: ANA, RF, anti-Scl-70, anti-Jo-1 to exclude CTD-ILD.",
    presentation: {
      chiefComplaint: [
        "Progressive exertional dyspnea (insidious onset over months to years)",
        "Dry, non-productive cough",
      ],
      associatedSymptoms: [
        "Bibasilar fine inspiratory 'Velcro' crackles (characteristic of IPF)",
        "Clubbing of fingers (30–50% of IPF)",
        "Cyanosis (advanced disease)",
        "Signs of cor pulmonale (RV failure from pulmonary hypertension)",
        "Connective tissue disease features (joint pain, skin changes, Raynaud's)",
        "Occupational/environmental exposure history (asbestos, silica, bird feathers, hot tubs)",
      ],
      demographics:
        "IPF: age >60, male predominance, smoking history (unusual — most ILDs are non-smokers, but IPF is associated with smoking). HP: exposure to organic antigens (farmer's lung — thermophilic actinomyces, bird fancier's lung — avian proteins). CTD-ILD: younger, female, connective tissue disease features.",
    },
    distinguishingFeatures:
      "Velcro crackles + clubbing + progressive dyspnea + older male smoker → IPF until proven otherwise. HP: exposure history, upper lobe predominance, may improve with avoidance. Sarcoidosis: bilateral hilar adenopathy, erythema nodosum, elevated ACE, young patients. Drug-induced: amiodarone, methotrexate, nitrofurantoin, bleomycin. Asbestosis: basal fibrosis + pleural plaques + asbestos exposure.",
    redFlags: [
      "Acute exacerbation of IPF (AE-IPF): rapid deterioration with new bilateral GGO on CT — high mortality (>50%)",
      "Respiratory failure (SpO2 <88% at rest)",
      "Pulmonary hypertension complicating ILD",
      "FVC <50% predicted or DLCO <35% (severe disease, transplant evaluation)",
      "Rapid decline in FVC >10% over 6 months",
    ],
    mnemonics: [
      {
        name: "IPF 3 Hallmarks",
        content:
          "Progressive, Fibrotic, Irreversible — older male + smoking + Velcro crackles + honeycombing on HRCT",
      },
      {
        name: "Causes of ILD (SHIT Drugs)",
        content:
          "Sarcoidosis, Hypersensitivity pneumonitis (organic dusts), Idiopathic (IPF), CTD-ILD; Drugs: amiodarone, bleomycin, methotrexate, nitrofurantoin",
      },
    ],
    pimpingQuestions: [
      "What CT pattern is diagnostic of IPF, and when can biopsy be avoided?",
      "What is the mechanism of action of pirfenidone and nintedanib in IPF, and what do they achieve?",
      "How does hypersensitivity pneumonitis differ from IPF on CT and BAL?",
      "What connective tissue diseases are most commonly associated with ILD?",
      "What PFT pattern (obstructive vs. restrictive) is seen in ILD, and what does a low DLCO indicate?",
    ],
  },
  {
    id: "im-pulmonary-hypertension",
    name: "Pulmonary Hypertension",
    icdCode: "I27.20",
    rotation: "internal-medicine",
    category: "Pulmonology / Cardiology",
    definition:
      "Pulmonary hypertension (PH) is defined as mean pulmonary artery pressure (mPAP) ≥20 mmHg at rest on right heart catheterization (updated 2022 ESC/ERS criteria). It is classified by the WHO into 5 groups: Group 1 (PAH — idiopathic, heritable, drug-induced, connective tissue), Group 2 (left heart disease — most common), Group 3 (lung disease/hypoxia — COPD, ILD, OSA), Group 4 (chronic thromboembolic — CTEPH), Group 5 (unclear multifactorial). PAH causes proliferative vasculopathy with irreversible vascular remodeling.",
    diagnosticCriteria:
      "Screening: echocardiogram (estimated RVSP ≥40 mmHg suggests PH). Right heart catheterization (RHC): gold standard — mPAP ≥20 mmHg; PAWP ≤15 mmHg (pre-capillary PH, Group 1/3/4) vs. PAWP >15 (post-capillary PH, Group 2). PVR ≥3 WU confirms PAH. V/Q scan (CTEPH workup — sensitivity >96% vs. CT-PA). PFTs, 6MWT, BNP/NT-proBNP, ANA, anti-Scl-70 (baseline workup). WHO functional class (I–IV) guides treatment decisions.",
    presentation: {
      chiefComplaint: [
        "Progressive exertional dyspnea (most common, often delayed diagnosis by 2+ years)",
        "Fatigue",
        "Syncope or presyncope (exertional — due to fixed cardiac output)",
        "Chest pain (right ventricular ischemia)",
        "Leg edema",
      ],
      associatedSymptoms: [
        "Loud P2 (pulmonic component of S2)",
        "Right ventricular heave (RV hypertrophy)",
        "Tricuspid regurgitation murmur (from RV dilation)",
        "Ascites and peripheral edema (RV failure)",
        "JVD with prominent a and v waves",
        "Raynaud's phenomenon, telangiectasias (systemic sclerosis-related PAH)",
      ],
      demographics:
        "PAH: young women 20–40 years (female:male 3:1), connective tissue disease (scleroderma highest risk), HIV, portal hypertension, anorexigens (fenfluramine — historical). Group 2 (most common overall): any patient with HFpEF/HFrEF, valvular disease.",
    },
    distinguishingFeatures:
      "Loud P2 + RV heave + progressive dyspnea in young woman without HF = PAH. Group 2 PH (most common): PAWP >15 on RHC, responds to treating underlying HF. CTEPH (Group 4): mismatched perfusion defects on V/Q; potentially curable with pulmonary endarterectomy. Eisenmenger syndrome: congenital L→R shunt reverses to R→L (Eisenmenger physiology) due to PAH — cyanosis, clubbing.",
    redFlags: [
      "Exertional syncope (fixed cardiac output, impending RV failure)",
      "New-onset right heart failure (ascites, anasarca, severe TR)",
      "Rapidly progressive dyspnea in known PAH",
      "BNP >180 pg/mL in PAH (poor prognosis marker)",
      "Hemoptysis (rare, from pulmonary arterial aneurysm rupture)",
      "6MWT <300 m (severe functional limitation)",
    ],
    mnemonics: [
      {
        name: "WHO PH Groups (1-2-3-4-5)",
        content:
          "1=PAH (idiopathic/CTD), 2=Left heart (most common), 3=Lung disease/hypoxia, 4=CTEPH (clots), 5=Multifactorial/unclear",
      },
      {
        name: "PAH Treatment by Class",
        content:
          "Prostacyclins (epoprostenol, treprostinil), Endothelin receptor antagonists (bosentan, ambrisentan), PDE-5 inhibitors (sildenafil, tadalafil), sGC stimulators (riociguat)",
      },
    ],
    pimpingQuestions: [
      "What is the gold standard for diagnosing pulmonary hypertension and what values define each subtype?",
      "How does Group 2 pulmonary hypertension differ from PAH in hemodynamics and treatment?",
      "What is CTEPH and why is it important to diagnose — what curative treatment exists?",
      "What is Eisenmenger syndrome and why are vasodilators dangerous in this condition?",
      "What is the prognostic significance of BNP and the 6-minute walk test in PAH?",
    ],
  },
  {
    id: "im-tuberculosis",
    name: "Tuberculosis",
    icdCode: "A15.0",
    rotation: "internal-medicine",
    category: "Pulmonology / Infectious Disease",
    definition:
      "Tuberculosis (TB) is caused by Mycobacterium tuberculosis, an acid-fast bacillus (AFB) transmitted via respiratory droplets. Primary TB: initial infection (often asymptomatic, Ghon complex on CXR). Latent TB infection (LTBI): contained infection without active disease (TST or IGRA positive, no symptoms, non-infectious). Reactivation TB: occurs in immunosuppressed patients (HIV — most important risk factor, TNF-alpha inhibitors, diabetes, malnutrition, end-stage renal disease). TB is the leading infectious disease killer worldwide.",
    diagnosticCriteria:
      "Latent TB: TST (PPD) ≥5 mm (HIV/close contact), ≥10 mm (high-risk groups), ≥15 mm (low-risk); OR IGRA (QuantiFERON-TB Gold) — preferred in BCG-vaccinated persons. Active TB: AFB smear and culture (gold standard — 6–8 weeks), nucleic acid amplification (NAAT/Xpert MTB/RIF — rapid, detects rifampin resistance). CXR: primary = Ghon complex (parenchymal focus + hilar adenopathy); reactivation = upper lobe cavitary lesions, apical scarring. Bronchoscopy with BAL if sputum non-diagnostic.",
    presentation: {
      chiefComplaint: [
        "Chronic productive cough (>3 weeks)",
        "Hemoptysis",
        "Night sweats",
        "Fever and chills",
        "Unintentional weight loss",
      ],
      associatedSymptoms: [
        "Fatigue and malaise",
        "Pleuritic chest pain (pleural TB)",
        "Upper lobe infiltrate with cavitation on CXR",
        "Extrapulmonary TB: lymphadenitis (most common extrapulm), meningitis, pericarditis (constrictive), peritonitis, Pott's disease (vertebral TB), genitourinary TB, miliary TB (hematogenous dissemination)",
        "Erythema nodosum (hypersensitivity reaction)",
      ],
      demographics:
        "Risk factors: HIV (CD4 <200 markedly increases risk), immigrants from high-prevalence countries (Sub-Saharan Africa, Southeast Asia, Eastern Europe), close contacts, homeless/incarcerated, healthcare workers, TNF-alpha inhibitors (infliximab, adalimumab), diabetes, malnutrition, ESRD.",
    },
    distinguishingFeatures:
      "Upper lobe cavitary lesion + night sweats + weight loss + hemoptysis = TB until proven otherwise. Primary TB in children: lower/middle lobe, hilar lymphadenopathy, no cavitation. Miliary TB: millet seed nodules (2–3 mm) throughout both lungs — hematogenous dissemination, most common in immunocompromised. Pott's disease: vertebral body destruction with paravertebral abscess (gibbus deformity).",
    redFlags: [
      "AFB smear-positive (highly infectious — airborne isolation immediately)",
      "Miliary TB (disseminated, life-threatening)",
      "TB meningitis (high mortality, steroids reduce mortality)",
      "Multidrug-resistant TB (MDR-TB: resistant to INH + rifampin)",
      "Extensively drug-resistant TB (XDR-TB)",
      "Massive hemoptysis from Rasmussen aneurysm (cavitary TB)",
      "HIV co-infection with CD4 <50 (highest risk for dissemination)",
    ],
    mnemonics: [
      {
        name: "RIPE (First-Line TB Treatment)",
        content:
          "Rifampin + Isoniazid + Pyrazinamide + Ethambutol × 2 months (intensive phase), then Rifampin + Isoniazid × 4 months (continuation phase) = 6 months total LTBI",
      },
      {
        name: "INH Side Effects (HELPS)",
        content:
          "Hepatotoxicity, sEnsory neuropathy (B6 prevents), Lupus-like syndrome, Pyridoxine (B6) deficiency, SLE-like",
      },
    ],
    pimpingQuestions: [
      "What is the difference between latent TB infection and active TB, and how are they each treated?",
      "What are the classic CXR findings of primary TB versus reactivation TB?",
      "Why is IGRA preferred over TST in BCG-vaccinated individuals?",
      "What are the major side effects of isoniazid, rifampin, pyrazinamide, and ethambutol?",
      "What is miliary TB and what is the mechanism of its dissemination?",
    ],
  },
  {
    id: "im-ards",
    name: "Acute Respiratory Distress Syndrome (ARDS)",
    icdCode: "J80",
    rotation: "internal-medicine",
    category: "Pulmonology / Critical Care",
    definition:
      "ARDS is an acute, diffuse inflammatory lung injury leading to increased pulmonary vascular permeability, lung weight, and loss of aerated lung tissue. It is defined by the Berlin Criteria (2012): onset within 1 week of known insult or new/worsening respiratory symptoms; bilateral opacities not explained by effusions/collapse/nodules; respiratory failure not fully explained by cardiac failure or volume overload; PaO2/FiO2 ratio ≤300 on PEEP ≥5 cmH2O. Most common causes: sepsis (most common), aspiration, pneumonia, trauma, transfusion (TRALI), pancreatitis.",
    diagnosticCriteria:
      "Berlin Criteria: mild ARDS = PF ratio 200–300; moderate = 100–200; severe = <100. CXR/CT: bilateral alveolar infiltrates (ground-glass opacities), 'white-out' bilateral on CXR. Echo or CVP to exclude cardiogenic pulmonary edema (PAWP <18 mmHg in ARDS; elevated in cardiogenic edema). Diagnosis is clinical — no specific lab biomarker. ABG shows hypoxemia, often with respiratory alkalosis initially, then respiratory acidosis as patient tires.",
    presentation: {
      chiefComplaint: [
        "Acute onset severe dyspnea (within hours to 3 days of inciting event)",
        "Respiratory failure requiring mechanical ventilation",
      ],
      associatedSymptoms: [
        "Bilateral crackles",
        "Severe hypoxemia refractory to supplemental oxygen",
        "Tachycardia and tachypnea",
        "Decreased lung compliance (stiff lungs)",
        "Signs of the precipitating cause (fever in sepsis/pneumonia, abdominal pain in pancreatitis)",
        "Frothy or pink-tinged secretions",
      ],
      demographics:
        "Any age, any patient with a known ARDS risk factor. Most common ICU-associated causes: sepsis (#1), severe pneumonia, aspiration (alcoholics at risk), trauma/blood transfusion (TRALI), pancreatitis, drowning, inhalational injury. Mortality ranges 35–45% (severe ARDS).",
    },
    distinguishingFeatures:
      "ARDS vs. cardiogenic pulmonary edema: ARDS = PAWP <18, protein-rich edema fluid, no response to diuretics; cardiogenic = PAWP >18, responds to diuretics, elevated BNP. TRALI: occurs within 6 hours of transfusion, donor anti-HLA antibodies cause neutrophil activation. Refractory hypoxemia despite FiO2 1.0 is hallmark. Decreased static lung compliance <30 mL/cmH2O (stiff lungs).",
    redFlags: [
      "PaO2/FiO2 ratio <100 (severe ARDS — very high mortality)",
      "Refractory hypoxemia on FiO2 1.0 + PEEP 15+",
      "Failure to improve with lung-protective ventilation",
      "Multi-organ failure (concurrent AKI, liver failure, DIC)",
      "Barotrauma: pneumothorax from high peak pressures",
    ],
    mnemonics: [
      {
        name: "Berlin Criteria for ARDS",
        content:
          "Mild: PF 200–300 | Moderate: PF 100–200 | Severe: PF <100 — all require PEEP ≥5 cmH2O and bilateral opacities within 1 week of insult",
      },
      {
        name: "ARDS Lung-Protective Ventilation (ARMA Trial)",
        content:
          "Tidal volume 6 mL/kg IBW, Plateau pressure ≤30 cmH2O, PEEP 5–20 (titrate to oxygenation), Permissive hypercapnia accepted, Prone positioning if PF <150",
      },
    ],
    pimpingQuestions: [
      "What are the Berlin Criteria for ARDS and how do they classify severity?",
      "What is the evidence base for low tidal volume ventilation in ARDS, and what parameters guide it?",
      "How do you differentiate ARDS from cardiogenic pulmonary edema clinically and with invasive monitoring?",
      "What is prone positioning in ARDS and why does it improve oxygenation?",
      "What is TRALI and how does it differ from TACO?",
    ],
  },
  {
    id: "im-bronchiectasis",
    name: "Bronchiectasis",
    icdCode: "J47.9",
    rotation: "internal-medicine",
    category: "Pulmonology",
    definition:
      "Bronchiectasis is permanent, abnormal dilation of the bronchi resulting from chronic infection and inflammation that destroys the bronchial wall (mucosa, smooth muscle, and elastic tissue). This leads to impaired mucociliary clearance, chronic bacterial colonization, recurrent purulent infections, and progressive lung function decline. Common causes include post-infectious (childhood pneumonia, TB, whooping cough), cystic fibrosis, primary ciliary dyskinesia, allergic bronchopulmonary aspergillosis (ABPA), and hypogammaglobulinemia.",
    diagnosticCriteria:
      "HRCT chest: gold standard — dilated bronchi (airway diameter > adjacent pulmonary artery = 'signet ring sign'), lack of bronchial tapering, bronchi visible within 1 cm of pleura. CXR: 'tram-tracking' (parallel line shadows), 'ring shadows' (dilated bronchi end-on). Sputum culture: identify colonizing organisms (Pseudomonas — most morbid, Haemophilus influenzae most common). PFTs: variable — obstructive, mixed, or restrictive. Workup: sweat chloride test (CF), immunoglobulin levels, ciliary biopsy (PCD).",
    presentation: {
      chiefComplaint: [
        "Chronic productive cough (large volumes of mucopurulent sputum — 'cupful' per day)",
        "Recurrent respiratory infections (pneumonia, bronchitis)",
        "Hemoptysis (can be massive — from eroded bronchial arteries)",
        "Dyspnea",
      ],
      associatedSymptoms: [
        "Coarse crackles over affected areas (lower and middle lobes most common in non-CF)",
        "Clubbing (advanced disease)",
        "Purulent sputum (three-layered: frothy top, mucoid middle, purulent bottom — 'nummular sputum')",
        "Fetid breath (halitosis) from chronic bacterial colonization",
        "Sinus disease (especially PCD, CF, ABPA)",
        "Fatigue and weight loss",
      ],
      demographics:
        "Bimodal distribution: children with CF/PCD, and adults >50 post-infectious or idiopathic. CF: young patients with pancreatic insufficiency, infertility, nasal polyps, high sweat chloride. Non-CF: older adults, female predominance in idiopathic bronchiectasis, 'Lady Windermere syndrome' (right middle lobe + lingula, slender older women with postural drainage avoidance).",
    },
    distinguishingFeatures:
      "Massive daily mucopurulent sputum + recurrent infections + HRCT signet ring sign = bronchiectasis. Distinguish from chronic bronchitis (COPD): bronchiectasis has structural dilation on HRCT, larger sputum volumes, more frequent infections. CF: bilaterally, upper lobes, young patient, pancreatic insufficiency, infertility. ABPA: central bronchiectasis, elevated IgE, eosinophilia, Aspergillus sensitivity, mucus plugging.",
    redFlags: [
      "Massive hemoptysis (>300 mL/24h) — bronchial artery embolization",
      "Acute exacerbation with sepsis",
      "New Pseudomonas aeruginosa isolation (portends worse prognosis)",
      "Rapid FEV1 decline",
      "Respiratory failure",
      "Cor pulmonale from hypoxic pulmonary hypertension",
    ],
    mnemonics: [
      {
        name: "Bronchiectasis Causes (PAST WIDE)",
        content:
          "Post-infectious (TB, pertussis, pneumonia), ABPA, Structural (CF, PCD), Tumor/obstruction, Williams-Campbell (cartilage deficiency), Immune deficiency (hypogammaglobulinemia), Dyskinesia (PCD), EGPA/inflammatory",
      },
      {
        name: "HRCT Findings",
        content:
          "Signet ring sign (dilated airway > adjacent artery), Tram-tracking (parallel walls), Non-tapering bronchi, Visible bronchi to pleura",
      },
    ],
    pimpingQuestions: [
      "What is the 'signet ring sign' on HRCT and what does it indicate?",
      "How does cystic fibrosis cause bronchiectasis, and how does CF bronchiectasis differ in distribution from non-CF?",
      "What is ABPA and how does it cause central bronchiectasis?",
      "What organism most commonly colonizes bronchiectasis and portends worst prognosis?",
      "What is the management strategy for an acute exacerbation of bronchiectasis?",
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
  {
    id: "im-pud",
    name: "Peptic Ulcer Disease",
    icdCode: "K25.9",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Peptic ulcer disease (PUD) refers to disruption of the mucosal integrity of the stomach (gastric ulcer) or proximal duodenum (duodenal ulcer), extending through the muscularis mucosa. The two dominant causes are H. pylori infection (~70% of gastric, ~90% of duodenal ulcers) and NSAID/aspirin use. H. pylori disrupts the mucus-bicarbonate barrier; NSAIDs inhibit COX-1, reducing prostaglandin-mediated mucosal protection. Less common causes: Zollinger-Ellison syndrome (gastrinoma), stress ulcers (ICU patients), bisphosphonates, and steroids (when combined with NSAIDs).",
    diagnosticCriteria:
      "Upper endoscopy (EGD) is the gold standard — allows visualization, biopsy for H. pylori and malignancy (any gastric ulcer must be biopsied; duodenal ulcers rarely malignant). H. pylori testing: urea breath test (UBT) or stool antigen (non-invasive, preferred); CLO test on biopsy (invasive). Serology: not recommended for active infection (indicates prior exposure). Fasting serum gastrin if Zollinger-Ellison suspected (levels >1000 pg/mL diagnostic). Barium UGI series: largely replaced by EGD.",
    presentation: {
      chiefComplaint: [
        "Burning or gnawing epigastric pain",
        "Nausea and vomiting",
        "Vomiting blood or coffee-ground emesis",
        "Dark/black tarry stools",
      ],
      associatedSymptoms: [
        "Epigastric pain relieved by food (duodenal) or worsened by food (gastric)",
        "Early satiety",
        "Weight loss",
        "Belching, bloating",
        "Nocturnal awakening with pain (duodenal ulcer classic)",
        "Hematemesis or melena if bleeding",
        "Peritoneal signs if perforated",
      ],
      demographics:
        "H. pylori-associated PUD: prevalent in developing countries, immigrants, lower socioeconomic status; typically adults 30–60. NSAID-associated: older adults >60, especially women, those with prior ulcer history, concurrent anticoagulant use, or high-dose NSAID use.",
    },
    distinguishingFeatures:
      "Duodenal ulcer: pain 2–3 hours after meals, relieved by food or antacids, wakes patient at night. Gastric ulcer: pain worse with eating, associated with weight loss, higher malignancy risk (requires biopsy). Presence of melena or hematemesis = upper GI bleed requiring urgent endoscopy. Rigid abdomen with free air on upright CXR = perforation (surgical emergency).",
    redFlags: [
      "Hematemesis or melena — urgent EGD, IV PPI, GI consult",
      "Signs of perforation: sudden severe abdominal pain, rigid board-like abdomen, free air on upright CXR",
      "Obstruction: projectile vomiting, succussion splash, dilated stomach on imaging",
      "Unintentional weight loss with gastric ulcer — must biopsy to rule out gastric cancer",
      "Failed repeat endoscopy healing of gastric ulcer after 8–12 weeks — raises concern for malignancy",
    ],
    mnemonics: [
      {
        name: "H. pylori Treatment (Clarithromycin Triple)",
        content:
          "PCA: PPI + Clarithromycin + Amoxicillin × 14 days (if clarithromycin resistance <15% locally)",
      },
      {
        name: "Bismuth Quadruple Therapy",
        content:
          "BMAT: Bismuth + Metronidazole + tetracycline (or Amoxicillin) + PPI × 14 days — use in penicillin allergy or clarithromycin resistance",
      },
    ],
    pimpingQuestions: [
      "What distinguishes duodenal from gastric ulcer by symptom pattern?",
      "Which H. pylori tests are most reliable for confirming eradication, and when should they be performed?",
      "Why must all gastric ulcers undergo biopsy but duodenal ulcers typically do not?",
      "What is the Forrest classification, and how does it guide endoscopic management of ulcer bleeding?",
      "How does Zollinger-Ellison syndrome differ from typical PUD in presentation and management?",
    ],
  },
  {
    id: "im-gerd",
    name: "GERD / Barrett's Esophagus",
    icdCode: "K21.0",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Gastroesophageal reflux disease (GERD) is a condition where stomach acid and/or bile refluxes into the esophagus, causing symptoms or mucosal injury due to transient lower esophageal sphincter (LES) relaxations. Complications include erosive esophagitis (Los Angeles grades A–D), esophageal stricture, and Barrett's esophagus — metaplastic replacement of squamous epithelium with intestinal columnar epithelium (goblet cells), a premalignant condition that can progress to esophageal adenocarcinoma. Barrett's develops in ~10% of chronic GERD patients.",
    diagnosticCriteria:
      "Clinical diagnosis for typical GERD (heartburn + regurgitation). Upper endoscopy (EGD): indicated if alarm symptoms, failed PPI therapy, or suspected complications; confirms erosive esophagitis, stricture, or Barrett's. Ambulatory pH monitoring (24-hour or 48-hour Bravo capsule): gold standard for confirming pathologic acid exposure when diagnosis uncertain. Esophageal manometry: rules out achalasia before antireflux surgery. Barrett's: requires biopsy confirmation with intestinal metaplasia (goblet cells).",
    presentation: {
      chiefComplaint: [
        "Heartburn (burning sensation in chest/throat)",
        "Regurgitation of acidic or bitter fluid",
        "Chronic cough or throat clearing",
        "Difficulty swallowing",
      ],
      associatedSymptoms: [
        "Symptoms worse after meals, lying down, or bending over",
        "Nocturnal symptoms disrupting sleep",
        "Sour taste in mouth",
        "Hoarseness or laryngitis (laryngopharyngeal reflux)",
        "Globus sensation (lump in throat)",
        "Chest pain mimicking cardiac angina",
        "Dysphagia (if stricture or Barrett's with high-grade dysplasia)",
      ],
      demographics:
        "GERD affects ~20% of Western adults. Risk factors: obesity, hiatal hernia, pregnancy, smoking, alcohol, fatty/spicy foods, chocolate, coffee. Barrett's esophagus: middle-aged to older white males, long-standing GERD >5 years, obesity, smoking.",
    },
    distinguishingFeatures:
      "Classic GERD: postprandial heartburn relieved by antacids. Atypical/extraesophageal GERD: chronic cough, asthma, laryngitis without heartburn. Alarm symptoms (dysphagia, odynophagia, weight loss, hematemesis) mandate urgent EGD. Barrett's is asymptomatic on its own — detected on surveillance EGD in GERD patients.",
    redFlags: [
      "Dysphagia or odynophagia — EGD to rule out stricture, cancer, or eosinophilic esophagitis",
      "Unintentional weight loss — malignancy workup",
      "Hematemesis or melena — urgent EGD",
      "Chest pain not clearly GI — must rule out ACS first",
      "High-grade dysplasia on Barrett's biopsy — gastroenterology referral for endoscopic eradication therapy",
    ],
    mnemonics: [
      {
        name: "GERD Lifestyle Modifications",
        content:
          "HEAD: Head of bed elevated 6–8 inches, Eat smaller meals, Avoid trigger foods (fatty, spicy, mint, chocolate, caffeine, alcohol), Don't lie down within 3 hours of eating",
      },
      {
        name: "Barrett's Surveillance Intervals",
        content:
          "No dysplasia → every 3–5 years; Low-grade dysplasia → every 6–12 months or ablation; High-grade dysplasia → endoscopic eradication therapy (RFA or EMR)",
      },
    ],
    pimpingQuestions: [
      "What is the difference between GERD and laryngopharyngeal reflux (LPR) in presentation?",
      "When is 24-hour pH monitoring indicated over empiric PPI therapy for GERD?",
      "What histologic finding defines Barrett's esophagus, and why does it matter?",
      "What are the Los Angeles grades of erosive esophagitis?",
      "When is antireflux surgery (Nissen fundoplication) an option, and what are its indications?",
    ],
  },
  {
    id: "im-pancreatitis-acute",
    name: "Acute Pancreatitis",
    icdCode: "K85.9",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Acute pancreatitis is inflammation of the pancreas caused by premature activation of digestive enzymes within the gland, leading to autodigestion. The two most common causes account for ~80% of cases: gallstones (obstructing the pancreatic duct at the ampulla of Vater) and alcohol use. Other causes include hypertriglyceridemia (>1000 mg/dL), hypercalcemia, ERCP, medications (azathioprine, thiazides, valproic acid, tetracycline), trauma, and autoimmune. Severity ranges from mild (interstitial/edematous) to severe (necrotizing) with local complications (necrosis, abscess, pseudocyst) and systemic organ failure.",
    diagnosticCriteria:
      "Diagnosis requires ≥2 of 3 criteria (Atlanta Classification): (1) characteristic abdominal pain, (2) serum lipase or amylase ≥3× upper limit of normal, (3) characteristic imaging on CT/MRI. Lipase is preferred over amylase (more sensitive and specific, elevated longer). CT abdomen with contrast: Balthazar grading; CT Severity Index. Ultrasound: first-line imaging to identify gallstones. Severity scoring: Ranson criteria (on admission and at 48 hours), APACHE II, BISAP score, Modified Glasgow criteria.",
    presentation: {
      chiefComplaint: [
        "Severe epigastric pain radiating to the back",
        "Nausea and vomiting",
        "Abdominal distension",
      ],
      associatedSymptoms: [
        "Sudden-onset constant epigastric or periumbilical pain, often boring through to back",
        "Pain worse in supine position, relieved by leaning forward",
        "Fever and tachycardia",
        "Jaundice (if gallstone obstructing CBD)",
        "Cullen's sign (periumbilical ecchymosis) — hemorrhagic pancreatitis",
        "Grey Turner's sign (flank ecchymosis) — hemorrhagic pancreatitis",
        "Decreased or absent bowel sounds (ileus)",
      ],
      demographics:
        "Gallstone pancreatitis: more common in women, older adults, rapid weight loss, pregnancy, Native American descent. Alcohol-related: men ages 30–45 with heavy chronic alcohol use. Hypertriglyceridemia-induced: patients with uncontrolled DM or familial hypertriglyceridemia.",
    },
    distinguishingFeatures:
      "Epigastric pain radiating to the back is classic. Lipase ≥3× ULN clinches diagnosis. Key etiologic clues: gallstones on ultrasound (gallstone pancreatitis), recent alcohol binge, triglycerides >1000 mg/dL (hypertriglyceridemia-induced, amylase/lipase may be falsely low), recent ERCP. Fever + rising WBC + worsening pain after initial improvement = infected necrosis (worst complication).",
    redFlags: [
      "SIRS criteria met (fever, tachycardia, leukocytosis, tachypnea) — ICU-level monitoring",
      "Organ failure at admission (respiratory, renal, cardiovascular) — severe pancreatitis, mortality >30%",
      "Infected pancreatic necrosis: fever + worsening pain + gas in necrotic collection on CT → CT-guided FNA or necrosectomy",
      "Hemorrhagic pancreatitis: Cullen's or Grey Turner's signs, falling Hct, shock",
      "Persistent pain beyond 4–6 weeks — rule out pseudocyst or walled-off necrosis",
    ],
    mnemonics: [
      {
        name: "GET SMASHED (Causes of Pancreatitis)",
        content:
          "Gallstones, Ethanol, Trauma, Steroids, Mumps (and other viruses), Autoimmune, Scorpion sting, Hyperlipidemia/Hypercalcemia/Hypothermia, ERCP/Emboli, Drugs",
      },
      {
        name: "Ranson Criteria (On Admission)",
        content:
          "GA LAW: Glucose >200, Age >55, LDH >350, AST >250, WBC >16,000 — ≥3 criteria = severe pancreatitis",
      },
    ],
    pimpingQuestions: [
      "What are the Atlanta Classification criteria for diagnosing acute pancreatitis?",
      "How does lipase differ from amylase in sensitivity and specificity for pancreatitis?",
      "What are Cullen's and Grey Turner's signs, and what do they indicate?",
      "When is CT abdomen with contrast indicated in acute pancreatitis, and what does it show?",
      "What is the management of infected pancreatic necrosis?",
    ],
  },
  {
    id: "im-cholecystitis",
    name: "Cholelithiasis / Cholecystitis",
    icdCode: "K80.20",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Cholelithiasis refers to the presence of gallstones in the gallbladder, which are either cholesterol stones (80%, associated with obesity, female sex, multiparity, rapid weight loss, ileal disease) or pigment stones (black: hemolytic anemia; brown: infection/stasis). Biliary colic occurs when a stone transiently obstructs the cystic duct. Acute cholecystitis develops when prolonged obstruction leads to gallbladder wall inflammation, bacterial superinfection, and potentially gangrene or perforation. Choledocholithiasis (CBD stone) can cause obstructive jaundice, cholangitis (Charcot's triad), and gallstone pancreatitis.",
    diagnosticCriteria:
      "Ultrasound (first-line): >95% sensitive for gallstones; shows wall thickening >3 mm, pericholecystic fluid, sonographic Murphy's sign. HIDA scan (hepatobiliary iminodiacetic acid): gold standard for cholecystitis when US equivocal — non-filling of gallbladder indicates cystic duct obstruction. MRCP: preferred non-invasive test for CBD stones. ERCP: therapeutic for choledocholithiasis. Labs: elevated WBC, CRP, bilirubin (if CBD involved), elevated LFTs, alkaline phosphatase.",
    presentation: {
      chiefComplaint: [
        "Right upper quadrant or epigastric pain",
        "Nausea and vomiting after fatty meal",
        "Fever and chills (if cholecystitis/cholangitis)",
        "Jaundice (if CBD obstruction)",
      ],
      associatedSymptoms: [
        "Biliary colic: episodic RUQ pain 30–60 min after fatty meal, lasting 1–5 hours, then resolves",
        "Acute cholecystitis: constant RUQ pain >6 hours, fever, positive Murphy's sign",
        "Charcot's triad (cholangitis): fever/chills + jaundice + RUQ pain",
        "Reynolds' pentad (suppurative cholangitis): Charcot's triad + altered mental status + shock",
        "Radiation to right shoulder or scapula",
        "Nausea and vomiting, low-grade fever",
      ],
      demographics:
        "Classic 5 F's: Female, Fat (obesity), Fertile (multiparity), Forty (age >40), Fair (northern European ancestry). Pigment stones: hemolytic anemia (sickle cell, hereditary spherocytosis), cirrhosis, Crohn's disease (ileal resection).",
    },
    distinguishingFeatures:
      "Murphy's sign (inspiratory arrest with deep palpation of RUQ) is pathognomonic for acute cholecystitis. Biliary colic: intermittent pain, no fever, normal WBC. Cholecystitis: persistent pain >6h, fever, elevated WBC, positive Murphy's. Cholangitis: jaundice + fever + RUQ pain = medical emergency requiring urgent biliary decompression.",
    redFlags: [
      "Charcot's triad = cholangitis → urgent ERCP and IV antibiotics",
      "Reynolds' pentad (adding AMS + hypotension to Charcot's) = suppurative cholangitis → emergency biliary decompression + ICU",
      "Acalculous cholecystitis in critically ill patients (ICU, burns, TPN) — high mortality, difficult to diagnose",
      "Emphysematous cholecystitis (gas in gallbladder wall on CT) — gas-forming organisms, diabetics, urgent surgery",
      "Perforation with peritonitis — surgical emergency",
    ],
    mnemonics: [
      {
        name: "5 F's of Gallstones",
        content: "Female, Fat, Fertile, Forty, Fair (Caucasian/Northern European)",
      },
      {
        name: "Charcot's Triad vs Reynolds' Pentad",
        content:
          "Charcot's: Fever + Jaundice + RUQ Pain (cholangitis). Reynolds': add AMS + Shock = suppurative cholangitis (life-threatening)",
      },
    ],
    pimpingQuestions: [
      "What is Murphy's sign and what does it indicate?",
      "How do you differentiate biliary colic from acute cholecystitis clinically?",
      "What is the preferred imaging modality for suspected cholecystitis, and what are its findings?",
      "When is ERCP indicated in gallstone disease vs. MRCP?",
      "What is acalculous cholecystitis, and who is at risk?",
    ],
  },
  {
    id: "im-crohns",
    name: "Crohn's Disease",
    icdCode: "K50.90",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Crohn's disease is a chronic, transmural, granulomatous inflammatory bowel disease that can affect any segment of the GI tract from mouth to anus, most commonly the terminal ileum and proximal colon. It is characterized by skip lesions (discontinuous involvement), transmural inflammation (leading to fistulas, abscesses, and strictures), and non-caseating granulomas on pathology. The etiology involves dysregulation of intestinal mucosal immunity in genetically susceptible individuals (NOD2/CARD15 mutation most associated) exposed to environmental triggers.",
    diagnosticCriteria:
      "No single gold-standard test. Colonoscopy with ileoscopy + biopsy: cobblestone mucosa, skip lesions, aphthous ulcers, strictures, rectal sparing; biopsies show transmural inflammation, non-caseating granulomas. CT/MR enterography: wall thickening, fat stranding, fistulas, abscesses. Capsule endoscopy: small bowel Crohn's not visible on colonoscopy. Labs: elevated CRP, ESR, fecal calprotectin, anemia, low albumin. ASCA (anti-Saccharomyces cerevisiae antibodies) more specific for Crohn's; p-ANCA more specific for UC.",
    presentation: {
      chiefComplaint: [
        "Chronic or recurrent abdominal pain (often RLQ)",
        "Diarrhea (non-bloody or bloody)",
        "Weight loss and fatigue",
        "Perianal pain, fistulas, or skin tags",
      ],
      associatedSymptoms: [
        "Crampy RLQ pain (terminal ileum involvement)",
        "Non-bloody or bloody diarrhea (less bloody than UC)",
        "Fever during flares",
        "Perianal disease: fistulas, abscesses, skin tags, fissures",
        "Oral aphthous ulcers (canker sores)",
        "Extraintestinal manifestations: uveitis, episcleritis, erythema nodosum, pyoderma gangrenosum, primary sclerosing cholangitis, arthritis, ankylosing spondylitis, nephrolithiasis, gallstones",
      ],
      demographics:
        "Bimodal age distribution: peaks at 15–35 and 55–70. Equal sex distribution. Higher prevalence in industrialized countries, Jewish descent, non-smokers (smoking is paradoxically protective in Crohn's but worsens UC). Family history in 10–20%.",
    },
    distinguishingFeatures:
      "Crohn's vs UC: Crohn's has skip lesions, rectal sparing, transmural involvement, perianal disease, non-caseating granulomas, fistulas, and RLQ pain. UC involves the rectum continuously to the cecum, is mucosal only, has bloody diarrhea, and no perianal disease. Cobblestone appearance on endoscopy and string sign on barium follow-through (terminal ileal stricture) are classic Crohn's findings.",
    redFlags: [
      "Abdominal abscess (fever, tender mass, elevated WBC) — CT abdomen, drainage + antibiotics before surgery",
      "Fistula (enterocutaneous, enteroenteric, enterovesical, rectovaginal) — requires GI/surgical evaluation",
      "Bowel obstruction (colicky pain, distension, no flatus) — NG decompression; stricture vs. active inflammation",
      "Free perforation — surgical emergency",
      "Toxic megacolon (fever, distension, tachycardia, colonic dilation >6 cm on XR) — rare in Crohn's, more common in UC",
    ],
    mnemonics: [
      {
        name: "Crohn's vs UC: Key Differences",
        content:
          "Crohn's = Skip lesions, Transmural, Terminal ileum, Fistulas, Granulomas, RLQ pain, Rectal SPARING. UC = Continuous, Mucosal only, Rectum always involved, Bloody diarrhea, No fistulas",
      },
      {
        name: "Extraintestinal Manifestations (IBD)",
        content:
          "SPINE: Skin (erythema nodosum, pyoderma gangrenosum), Primary sclerosing cholangitis (UC >> Crohn's), Iritis/uveitis, Nephrolithiasis, Eye (episcleritis), Arthritis/Ankylosing spondylitis",
      },
    ],
    pimpingQuestions: [
      "What are the key histologic and endoscopic differences between Crohn's disease and ulcerative colitis?",
      "Why is perianal disease almost pathognomonic for Crohn's disease?",
      "What is the significance of NOD2/CARD15 mutations in Crohn's disease?",
      "What are the indications for biologic therapy (anti-TNF) in IBD, and which biologics are used?",
      "How does smoking affect Crohn's disease vs. ulcerative colitis differently?",
    ],
  },
  {
    id: "im-uc",
    name: "Ulcerative Colitis",
    icdCode: "K51.90",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Ulcerative colitis (UC) is a chronic relapsing-remitting inflammatory bowel disease characterized by diffuse, continuous mucosal inflammation of the colon, always involving the rectum and extending proximally in a continuous fashion. Inflammation is limited to the mucosa and submucosa (unlike Crohn's transmural). Disease extent is classified as proctitis (rectum only), left-sided colitis (to splenic flexure), or extensive/pancolitis (beyond splenic flexure). The etiology involves dysregulated innate and adaptive immunity in genetically susceptible individuals; p-ANCA is the serologic marker more associated with UC.",
    diagnosticCriteria:
      "Flexible sigmoidoscopy or colonoscopy with biopsy is the gold standard. Endoscopic findings: continuous mucosal erythema, friability, loss of vascular pattern, pseudopolyps, ulceration from rectum extending proximally. Histology: crypt architectural distortion, crypt abscesses, goblet cell depletion, mucosal inflammation without granulomas. Labs: elevated CRP/ESR, fecal calprotectin, anemia, thrombocytosis, hypoalbuminemia. Stool cultures/C. diff PCR to exclude infectious colitis. p-ANCA positive in ~60–70% of UC patients.",
    presentation: {
      chiefComplaint: [
        "Bloody diarrhea (hallmark)",
        "Urgency and tenesmus",
        "Crampy lower abdominal pain",
        "Fatigue and weight loss",
      ],
      associatedSymptoms: [
        "Bloody mucoid diarrhea, often >6 stools/day in severe disease",
        "Rectal urgency and tenesmus (feeling of incomplete evacuation)",
        "Lower abdominal cramping relieved with defecation",
        "Fever in moderate-to-severe flares",
        "Extraintestinal manifestations: primary sclerosing cholangitis (UC >> Crohn's), uveitis, erythema nodosum, pyoderma gangrenosum, peripheral arthritis, ankylosing spondylitis",
        "Increased colorectal cancer risk (8–10 years of pancolitis → annual surveillance colonoscopy)",
      ],
      demographics:
        "Bimodal distribution: peaks 15–30 and 50–70 years. Slightly higher in women. Higher prevalence in industrialized nations, Jewish descent, non-smokers (smoking is paradoxically protective in UC but worsens Crohn's). Appendectomy before age 20 is protective against UC.",
    },
    distinguishingFeatures:
      "UC always starts at the rectum and extends continuously — no skip lesions, no perianal disease, no fistulas. Bloody diarrhea with urgency and tenesmus is the hallmark. Pseudopolyps (regenerating mucosa after inflammation) seen on endoscopy. Primary sclerosing cholangitis (PSC) is strongly associated with UC (cholestatic LFT pattern, MRCP with beaded bile ducts).",
    redFlags: [
      "Toxic megacolon: colonic dilation >6 cm, fever, tachycardia, hypotension — IV steroids, surgical consult, NPO",
      "Severe UC (Truelove-Witts: >6 bloody stools/day + systemic toxicity) — hospitalization, IV steroids",
      "No response to IV steroids at 72 hours — add infliximab or cyclosporine (rescue therapy) or colectomy",
      "Rising WBC + worsening abdominal pain — rule out CMV superinfection in IBD patients on immunosuppression",
      "Long-standing pancolitis (>8–10 years) — annual surveillance colonoscopy for colorectal cancer",
    ],
    mnemonics: [
      {
        name: "Truelove-Witts Severity (Severe UC)",
        content:
          ">6 bloody stools/day + ANY of: fever >37.8°C, HR >90, Hgb <10.5 g/dL, ESR >30 mm/hr — meets criteria for severe UC requiring hospitalization",
      },
      {
        name: "UC vs Crohn's Mnemonic: UC = CARP",
        content:
          "Continuous, Always rectum involved, Rectal bleeding (bloody diarrhea), Pseudopolyps — No fistulas, No skip lesions, No granulomas",
      },
    ],
    pimpingQuestions: [
      "How does the endoscopic appearance of UC differ from Crohn's disease?",
      "What is toxic megacolon, and how is it managed?",
      "When is surgery (colectomy) indicated in UC, and what surgery is performed?",
      "What is the association between UC and primary sclerosing cholangitis?",
      "What is the colorectal cancer risk in UC, and when should surveillance colonoscopy begin?",
    ],
  },
  {
    id: "im-ibs",
    name: "Irritable Bowel Syndrome",
    icdCode: "K58.9",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Irritable bowel syndrome (IBS) is a functional GI disorder characterized by chronic abdominal pain associated with altered bowel habits in the absence of structural or biochemical abnormalities. It is the most common GI diagnosis worldwide, affecting 10–15% of adults. The pathophysiology involves visceral hypersensitivity, altered gut motility, dysregulation of the gut-brain axis, intestinal microbiome changes, low-grade mucosal inflammation, and psychosocial factors. IBS subtypes: IBS-C (constipation predominant), IBS-D (diarrhea predominant), IBS-M (mixed), IBS-U (unclassified).",
    diagnosticCriteria:
      "Rome IV Criteria: recurrent abdominal pain ≥1 day/week on average for the last 3 months, associated with ≥2 of: (1) related to defecation, (2) associated with change in frequency of stool, (3) associated with change in form/appearance of stool. Symptom onset ≥6 months prior. Diagnosis of exclusion — rule out organic disease first. Minimal workup: CBC, CMP, CRP/ESR, TSH, celiac serologies (anti-tTG IgA), stool O&P/C. diff in IBS-D. Colonoscopy: not routine unless alarm features or age >45–50.",
    presentation: {
      chiefComplaint: [
        "Chronic abdominal pain or cramping",
        "Alternating constipation and diarrhea",
        "Bloating and excessive gas",
        "Feeling of incomplete evacuation",
      ],
      associatedSymptoms: [
        "Abdominal pain relieved with defecation",
        "Mucus in stool (no blood)",
        "Urgency to defecate",
        "Abdominal distension",
        "Symptoms exacerbated by stress, certain foods (FODMAPs, dairy, gluten)",
        "High prevalence of anxiety, depression, somatic symptom disorder",
        "No nocturnal symptoms (absence supports functional diagnosis)",
      ],
      demographics:
        "More common in women (2:1), onset typically before age 50, often precipitated by GI infection (post-infectious IBS), antibiotics, or psychosocial stressors. Associated with fibromyalgia, chronic pelvic pain, interstitial cystitis, and other functional somatic syndromes.",
    },
    distinguishingFeatures:
      "Key features supporting functional diagnosis: symptoms correlate with bowel habits, relieved by defecation, no nocturnal symptoms, no weight loss, no rectal bleeding, no fever, normal inflammatory markers. Red flags that suggest organic disease and require further workup: onset >50, weight loss, rectal bleeding, nocturnal symptoms, family history of colorectal cancer or IBD, anemia, elevated CRP/ESR.",
    redFlags: [
      "Onset after age 50 — colonoscopy to exclude colorectal cancer",
      "Rectal bleeding — not explained by IBS; requires evaluation",
      "Unintentional weight loss — malignancy or IBD workup",
      "Nocturnal diarrhea waking from sleep — IBD, microscopic colitis, secretory diarrhea",
      "Elevated inflammatory markers (CRP, ESR, fecal calprotectin) — organic disease, not IBS",
      "Family history of colon cancer, IBD, or celiac disease — additional workup needed",
    ],
    mnemonics: [
      {
        name: "Rome IV Criteria (3-3-3 Rule)",
        content:
          "Recurrent abdominal pain ≥1 day/week × 3 months + ≥2 of 3: related to defecation, change in stool frequency, change in stool form — onset ≥6 months prior",
      },
      {
        name: "IBS Treatment Ladder",
        content:
          "IBS-D: Loperamide, rifaximin (non-absorbable antibiotic), eluxadoline, TCAs. IBS-C: Fiber, osmotic laxatives (PEG), lubiprostone, linaclotide/plecanatide. Both: low-FODMAP diet, CBT, antispasmodics (hyoscine)",
      },
    ],
    pimpingQuestions: [
      "What are the Rome IV criteria for diagnosing IBS?",
      "How do you differentiate IBS from inflammatory bowel disease clinically and with labs?",
      "What are alarm symptoms that should prompt further workup in a patient with suspected IBS?",
      "What is the role of the low-FODMAP diet in IBS management?",
      "What is post-infectious IBS, and what are its proposed mechanisms?",
    ],
  },
  {
    id: "im-colorectal-cancer",
    name: "Colorectal Cancer",
    icdCode: "C18.9",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Colorectal cancer (CRC) is the third most common cancer and second leading cause of cancer death in the US. ~95% are adenocarcinomas arising from colorectal adenomatous polyps via the adenoma-carcinoma sequence (APC → KRAS → p53 mutations). Risk factors include: age >50, personal/family history of adenomatous polyps or CRC, IBD (UC > Crohn's), hereditary syndromes (Lynch syndrome/HNPCC — MLH1, MSH2, MSH6, PMS2; FAP — APC mutation), low-fiber/high-fat diet, obesity, sedentary lifestyle, smoking, alcohol, type 2 diabetes. ~75% of CRC are sporadic.",
    diagnosticCriteria:
      "Colonoscopy: gold standard for diagnosis, staging, and polyp removal. CT colonography (virtual colonoscopy): alternative for those who refuse or cannot have colonoscopy. CEA (carcinoembryonic antigen): not diagnostic; used for monitoring after treatment. Staging: TNM (T = tumor depth, N = nodes, M = metastases). FOBT/FIT annually, stool DNA (Cologuard) every 3 years, flexible sigmoidoscopy every 5 years: non-invasive screening options. Screening begins at age 45 (ACS) or 50 (USPSTF) in average-risk individuals, earlier in high-risk.",
    presentation: {
      chiefComplaint: [
        "Change in bowel habits (constipation, diarrhea, pencil-thin stools)",
        "Rectal bleeding or blood in stool",
        "Abdominal pain or cramping",
        "Unintentional weight loss and fatigue",
      ],
      associatedSymptoms: [
        "Hematochezia (bright red blood per rectum — left-sided/rectal) or melena (right-sided)",
        "Iron deficiency anemia (right-sided colon cancer may bleed occultly)",
        "Feeling of incomplete evacuation, tenesmus (rectal cancer)",
        "Palpable abdominal or rectal mass",
        "Obstruction: progressive constipation, abdominal distension, nausea/vomiting",
        "Unexplained weight loss and anorexia",
      ],
      demographics:
        "Average-risk onset typically >50 but rising incidence in adults <50 (early-onset CRC). Lynch syndrome (HNPCC): autosomal dominant mismatch repair gene mutations — CRC risk 70–80% by age 70, also endometrial, ovarian, gastric, urothelial cancers. FAP: APC mutation, thousands of polyps by age 20s, nearly 100% CRC risk if untreated.",
    },
    distinguishingFeatures:
      "Right-sided colon cancer: occult blood loss → iron deficiency anemia; detected late, larger tumors. Left-sided/sigmoid colon cancer: change in bowel habits, hematochezia, obstruction. Rectal cancer: tenesmus, blood on toilet paper, palpable on DRE. Lynch syndrome clue: CRC diagnosed <50, multiple family members with Lynch-associated cancers, microsatellite instability on tumor testing.",
    redFlags: [
      "Iron deficiency anemia in a male or postmenopausal female — colonoscopy mandatory to exclude CRC",
      "Rectal bleeding in adults >40 should not be attributed to hemorrhoids without ruling out proximal source",
      "Acute colonic obstruction — CT abdomen, surgical evaluation for stenting vs. resection",
      "Rising CEA after CRC resection — surveillance imaging for recurrence",
      "Suspected Lynch syndrome (Amsterdam/Bethesda criteria) — genetic counseling and testing for family",
    ],
    mnemonics: [
      {
        name: "Duke's/TNM Stage Summary",
        content:
          "Stage I: T1–2, N0, M0 (mucosa/muscularis, 5-yr survival >90%). Stage II: T3–4, N0, M0 (through wall, ~70–85%). Stage III: any T, N1–2, M0 (lymph node mets, ~40–70%). Stage IV: any T, any N, M1 (distant mets, ~10–15%)",
      },
      {
        name: "Lynch Syndrome Cancers (HECCO)",
        content:
          "High-risk cancers in Lynch: colon, Endometrial, Colorectal, Ovarian, and urothelial/stomach — autosomal dominant MMR gene mutations",
      },
    ],
    pimpingQuestions: [
      "At what age does average-risk CRC screening begin, and what are the screening options?",
      "What is the adenoma-carcinoma sequence, and which mutations are involved?",
      "How does Lynch syndrome differ from FAP in genetics, polyp burden, and cancer risk?",
      "What is the role of CEA in colorectal cancer management?",
      "How does right-sided colon cancer typically present differently from left-sided colon cancer?",
    ],
  },
  {
    id: "im-gi-bleeding",
    name: "GI Bleeding (Upper and Lower)",
    icdCode: "K92.2",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "GI bleeding is classified by location relative to the ligament of Treitz. Upper GI bleeding (UGIB) originates proximal to the ligament (esophagus, stomach, duodenum) — most common causes: peptic ulcer disease (~40%), esophageal varices, Mallory-Weiss tear, erosive esophagitis/gastritis, Dieulafoy's lesion, AVM. Lower GI bleeding (LGIB) originates distal to the ligament — most common causes: diverticulosis (~40%), angiodysplasia, colorectal cancer, ischemic colitis, hemorrhoids, IBD, infectious colitis. Approximately 80% of LGIB stops spontaneously.",
    diagnosticCriteria:
      "UGIB: EGD within 24 hours (12–24h if hemodynamically stable after resuscitation; <12h if ongoing hemorrhage or cirrhosis). Forrest classification guides endoscopic therapy. LGIB: colonoscopy after prep (first-line for stable patients). CT angiography (CTA): localizes bleeding if >0.3–0.5 mL/min; faster than colonoscopy when actively bleeding. Tagged RBC scan: detects 0.1 mL/min but does not localize precisely. Angiography: therapeutic (embolization) if bleeding rate >0.5–1 mL/min. Glasgow-Blatchford score (UGIB): risk stratifies for inpatient vs. outpatient management.",
    presentation: {
      chiefComplaint: [
        "Vomiting blood or coffee-ground emesis (UGIB)",
        "Black tarry stools / melena (UGIB)",
        "Bright red blood per rectum (LGIB or massive UGIB)",
        "Lightheadedness, syncope, hemodynamic instability",
      ],
      associatedSymptoms: [
        "Hematemesis (fresh blood or coffee grounds) — UGIB",
        "Melena (black, tarry, foul-smelling stool) — UGIB or proximal small bowel",
        "Hematochezia (bright red blood per rectum) — LGIB or brisk UGIB",
        "Epigastric pain (PUD)",
        "Alcohol use, cirrhosis stigmata (variceal bleeding)",
        "NSAID/aspirin use (erosive disease)",
        "Hemodynamic instability: tachycardia, hypotension, orthostatic changes",
      ],
      demographics:
        "UGIB: PUD most common (any age, NSAID/H. pylori); varices (cirrhotic patients, alcoholics). LGIB: diverticulosis (older adults >60, painless large-volume hematochezia); angiodysplasia (elderly, chronic kidney disease, aortic stenosis — Heyde's syndrome); ischemic colitis (elderly with vascular disease, post-aortic surgery).",
    },
    distinguishingFeatures:
      "Melena almost always = UGIB (blood digested in small bowel, minimum ~150 mL blood). Bright red blood per rectum = LGIB (or massive rapid UGIB — check BUN:Cr ratio; >20:1 suggests UGIB due to blood protein digestion). Nasogastric lavage showing coffee grounds confirms UGIB. Variceal bleeding: massive hematemesis, known liver disease/cirrhosis stigmata, requires octreotide + EGD + antibiotic prophylaxis (ceftriaxone).",
    redFlags: [
      "Hemodynamic instability (HR >100, SBP <90) — 2 large-bore IV access, aggressive resuscitation, type & cross, urgent EGD",
      "Suspected variceal bleeding — IV octreotide + prophylactic ceftriaxone + urgent EGD; Blakemore tube if EGD fails",
      "Transfusion threshold: Hgb <7 g/dL generally (Hgb <8 in cardiac disease); avoid over-transfusion in varices",
      "Ongoing bleeding with hemodynamic instability despite endoscopy — interventional radiology (angioembolization) or surgery",
      "Anticoagulation reversal: warfarin → vitamin K + 4-factor PCC; DOACs → specific reversal agents (idarucizumab for dabigatran, andexanet alfa for Xa inhibitors)",
    ],
    mnemonics: [
      {
        name: "UGIB Causes (5 P's + V)",
        content:
          "Peptic ulcer disease, Portal hypertension (varices), Mallory-Weiss tear (Pressure/retching), erosive gastritis/esophagitis, Dieulafoy's lesion, Vascular malformations (AVM/Dieulafoy's)",
      },
      {
        name: "Glasgow-Blatchford Score: Low Risk (Can Discharge)",
        content:
          "BUN <18, Hgb ≥13 (M) / ≥12 (F), SBP ≥110, HR <100, no melena, no syncope, no liver disease, no cardiac failure → Score 0 = very low risk, can manage outpatient",
      },
    ],
    pimpingQuestions: [
      "How do you differentiate upper from lower GI bleeding based on clinical presentation?",
      "What is the Forrest classification, and how does it guide endoscopic management?",
      "What is the management of acute variceal hemorrhage?",
      "When should a nasogastric tube be placed in GI bleeding, and what does a negative lavage mean?",
      "What is Heyde's syndrome?",
    ],
  },
  {
    id: "im-viral-hepatitis",
    name: "Viral Hepatitis (A, B, C)",
    icdCode: "B19.9",
    rotation: "internal-medicine",
    category: "Gastroenterology / Hepatology",
    definition:
      "Viral hepatitis encompasses hepatic inflammation caused by hepatotropic viruses. Hepatitis A (HAV): RNA virus, fecal-oral transmission, self-limited, no chronicity, vaccine-preventable. Hepatitis B (HBV): DNA virus, parenteral/sexual/perinatal transmission, 5–10% adults → chronic (90% neonates), associated with cirrhosis and HCC. Hepatitis C (HCV): RNA virus, primarily parenteral (IVDU, transfusion pre-1992), ~75–85% → chronic, leading cause of liver transplant in the US, highly curable with direct-acting antivirals (DAAs). Hepatitis D (HDV): defective RNA virus, requires HBV co-infection. Hepatitis E (HEV): RNA virus, fecal-oral, self-limited except in pregnancy (high mortality).",
    diagnosticCriteria:
      "HAV: anti-HAV IgM (acute); anti-HAV IgG (immunity/past infection). HBV serology panel: HBsAg (surface antigen, active infection), anti-HBs (immunity), HBeAg (high replication/infectivity), anti-HBe, anti-HBc IgM (acute), anti-HBc IgG (past/chronic), HBV DNA (viral load for treatment decisions). HCV: anti-HCV (screening, antibody); HCV RNA (confirmatory, active infection); HCV genotype (guides DAA therapy). Liver enzymes: ALT/AST elevated (ALT > AST in viral hepatitis; AST:ALT >2:1 suggests alcoholic hepatitis).",
    presentation: {
      chiefComplaint: [
        "Jaundice (yellow eyes and skin)",
        "Fatigue and malaise",
        "Nausea, vomiting, and anorexia",
        "Right upper quadrant pain or discomfort",
      ],
      associatedSymptoms: [
        "Prodrome: flu-like illness, fatigue, anorexia, nausea, low-grade fever",
        "Icteric phase: jaundice, dark urine (bilirubinuria), pale/clay-colored stools, pruritus",
        "RUQ tenderness, hepatomegaly",
        "Chronic HBV/HCV may be asymptomatic for decades until cirrhosis develops",
        "HBV extrahepatic: polyarteritis nodosa, membranous nephropathy, serum sickness-like prodrome",
        "HCV extrahepatic: cryoglobulinemia (purpura, arthralgia, nephropathy), lichen planus",
      ],
      demographics:
        "HAV: travelers to endemic areas, MSM, IVDU, homeless populations, outbreaks in food establishments. HBV: IVDU, MSM, healthcare workers, immigrants from endemic regions (Asia, Africa, Eastern Europe). HCV: IVDU (highest risk), baby boomer generation (born 1945–1965) highest US prevalence — universal screening recommended.",
    },
    distinguishingFeatures:
      "HAV: acute illness, no chronic state, common with travel or shellfish ingestion. HBV: can be acute or chronic, transmitted sexually/parenterally/perinatally, vaccine available. HCV: usually asymptomatic chronically, needle exposure, no vaccine. Key distinction: ALT >> AST in viral hepatitis vs. AST:ALT >2:1 in alcoholic hepatitis. HCV is the most curable — >95% with 8–12 weeks of DAAs regardless of genotype.",
    redFlags: [
      "Acute liver failure (coagulopathy + encephalopathy) — urgent hepatology, consider liver transplant evaluation",
      "HBV reactivation in immunosuppressed patients (rituximab, chemotherapy, steroids) — prophylactic antivirals (entecavir) required",
      "HBV + HCC surveillance: ultrasound ± AFP every 6 months in cirrhotic HBV patients",
      "Fulminant hepatitis E in pregnancy — maternal mortality up to 25% in third trimester",
      "Acute HCV infection: spontaneous clearance rate ~15–25%; treat to prevent chronicity",
    ],
    mnemonics: [
      {
        name: "HBV Serology Cheat Sheet",
        content:
          "Acute HBV: HBsAg+ / anti-HBc IgM+ / anti-HBs−. Chronic HBV: HBsAg+ / anti-HBc IgG+ / anti-HBs−. Recovered: HBsAg− / anti-HBc IgG+ / anti-HBs+. Vaccinated: HBsAg− / anti-HBc− / anti-HBs+",
      },
      {
        name: "Hepatitis Transmission",
        content:
          "HAV, HEV = fecal-Oral (A and E = Enteric). HBV, HCV, HDV = blood/sexual/parenteral (B, C, D = Blood-borne)",
      },
    ],
    pimpingQuestions: [
      "How do you interpret the HBV serology panel (HBsAg, anti-HBs, anti-HBc IgM/IgG, HBeAg)?",
      "Which hepatitis viruses have vaccines available, and what is the schedule for HBV vaccination?",
      "What is HBV reactivation, and in which patients should prophylactic antivirals be given?",
      "What is the current treatment for chronic HCV, and what is the expected cure rate?",
      "What are the extrahepatic manifestations of HCV infection?",
    ],
  },
  {
    id: "im-diverticular-disease",
    name: "Diverticular Disease",
    icdCode: "K57.30",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Diverticulosis refers to the presence of outpouchings (diverticula) of the colonic mucosa and submucosa through weakened areas of the muscularis propria, most commonly at points where the vasa recta penetrate the bowel wall. Found predominantly in the sigmoid colon in Western populations. Affects >60% of adults >70. Most (~80%) remain asymptomatic. Diverticulitis occurs when a diverticulum becomes inflamed or microperforation occurs, causing pericolonic inflammation. Complications: abscess, fistula (colovesical most common), obstruction, free perforation. Diverticular bleeding: the most common cause of painless massive lower GI bleeding in adults >60.",
    diagnosticCriteria:
      "Diverticulitis: clinical diagnosis confirmed by CT abdomen/pelvis with IV contrast — pericolic fat stranding, wall thickening, diverticula ± abscess/free air. CBC (leukocytosis), CMP, CRP. Colonoscopy: performed 6–8 weeks after acute episode resolves to exclude malignancy and confirm diagnosis (never during acute episode — perforation risk). Hinchey classification grades severity of complicated diverticulitis (I: pericolic abscess, II: pelvic abscess, III: purulent peritonitis, IV: fecal peritonitis).",
    presentation: {
      chiefComplaint: [
        "LLQ abdominal pain (classic for sigmoid diverticulitis)",
        "Fever and chills",
        "Change in bowel habits",
        "Bright red blood per rectum (diverticular hemorrhage — painless)",
      ],
      associatedSymptoms: [
        "Constant LLQ pain, tenderness, and guarding",
        "Nausea and vomiting",
        "Low-grade fever, elevated WBC",
        "Constipation or diarrhea during flare",
        "Pneumaturia or fecaluria (colovesical fistula)",
        "Diverticular bleed: painless, large-volume hematochezia, often right-sided, stops spontaneously in 75–80%",
      ],
      demographics:
        "Strong association with low-fiber Western diet, sedentary lifestyle, obesity, and constipation. Incidence increases with age: <10% under 40, >60% over 70. Right-sided diverticula more common in Asian populations.",
    },
    distinguishingFeatures:
      "Classic LLQ pain + fever + elevated WBC = diverticulitis until proven otherwise. Distinguish from IBD (younger patients, systemic symptoms, rectal involvement) and colon cancer (weight loss, iron deficiency, mass on CT). Diverticular hemorrhage: older patient, painless massive hematochezia, no fever — contrast with ischemic colitis (painful, older vascular patient) and angiodysplasia.",
    redFlags: [
      "Free air on CT (Hinchey III/IV) — perforation with peritonitis; emergency surgery",
      "Abscess >4 cm — CT-guided percutaneous drainage + IV antibiotics, then interval sigmoid resection",
      "Colovesical fistula (pneumaturia, recurrent UTI with fecal organisms) — elective surgical repair",
      "Failure to improve on antibiotics at 48–72 hours — repeat CT, escalate or surgical consult",
      "Recurrent episodes — consider elective sigmoid resection (individualized decision, not automatic after 2nd episode)",
    ],
    mnemonics: [
      {
        name: "Hinchey Classification",
        content:
          "I: Pericolic abscess, II: Pelvic/distant abscess, III: Purulent peritonitis (ruptured abscess), IV: Fecal peritonitis (free perforation) — III/IV require emergency surgery",
      },
      {
        name: "Uncomplicated Diverticulitis Treatment",
        content:
          "Outpatient: clear liquid diet + oral antibiotics (ciprofloxacin + metronidazole or amoxicillin-clavulanate) × 7–10 days. Inpatient indications: severe pain, unable to tolerate PO, high fever, immunocompromised, failed outpatient treatment, or unable to follow up",
      },
    ],
    pimpingQuestions: [
      "What is the Hinchey classification of diverticulitis, and how does it guide management?",
      "Why is colonoscopy deferred during acute diverticulitis?",
      "How do you distinguish diverticular hemorrhage from angiodysplasia as a cause of lower GI bleeding?",
      "What is a colovesical fistula, and what are its clinical features?",
      "What dietary and lifestyle modifications reduce the risk of diverticular disease?",
    ],
  },
  {
    id: "im-celiac",
    name: "Celiac Disease",
    icdCode: "K90.0",
    rotation: "internal-medicine",
    category: "Gastroenterology",
    definition:
      "Celiac disease is an immune-mediated enteropathy triggered by ingestion of gluten (gliadin fraction of wheat, barley, and rye) in genetically susceptible individuals (HLA-DQ2 in ~95%, HLA-DQ8 in ~5%). Gliadin peptides are deamidated by tissue transglutaminase (tTG), presented by HLA-DQ2/DQ8 on antigen-presenting cells, and trigger CD4+ T-cell activation → crypt hyperplasia, villous atrophy, and mucosal inflammation in the proximal small intestine. Results in malabsorption of fat, fat-soluble vitamins (A, D, E, K), iron, calcium, folate, and B12. Complication: refractory celiac disease, enteropathy-associated T-cell lymphoma (EATL).",
    diagnosticCriteria:
      "Serology (on gluten-containing diet): anti-tissue transglutaminase IgA (anti-tTG IgA) — most sensitive and specific initial test; also anti-endomysial IgA (EMA), anti-deamidated gliadin peptide IgA/IgG. Check total IgA level first (IgA deficiency in 2–3% → false-negative IgA tests; use IgG-based tests if IgA deficient). Small bowel biopsy (EGD + duodenal biopsies): gold standard — shows villous atrophy, crypt hyperplasia, intraepithelial lymphocytosis (Marsh III). Diagnosis confirmed if: positive serology + characteristic biopsy + clinical response to gluten-free diet (GFD). HLA-DQ2/DQ8 testing: high negative predictive value; useful to exclude celiac in equivocal cases.",
    presentation: {
      chiefComplaint: [
        "Chronic diarrhea or fatty/foul-smelling stools (steatorrhea)",
        "Abdominal bloating and cramping",
        "Unintentional weight loss",
        "Fatigue and weakness",
      ],
      associatedSymptoms: [
        "Classic: steatorrhea, weight loss, abdominal pain, bloating",
        "Iron deficiency anemia (most common presentation in adults — refractory to oral iron)",
        "Osteoporosis/osteopenia (calcium and vitamin D malabsorption)",
        "Peripheral neuropathy, ataxia (neurologic celiac)",
        "Dermatitis herpetiformis — intensely pruritic vesicular rash on elbows, knees, buttocks (pathognomonic skin manifestation)",
        "Infertility, recurrent miscarriage, short stature in children",
        "Elevated transaminases (celiac hepatitis)",
        "Down syndrome, Turner syndrome, Type 1 DM, thyroid disease association",
      ],
      demographics:
        "Prevalence ~1% in Western populations; higher in first-degree relatives (10–15%), Down syndrome (5–12%), Turner syndrome, Type 1 DM (5–10%), autoimmune thyroid disease. More common in women (2:1). Can present at any age; bimodal peaks in childhood and 30–50s.",
    },
    distinguishingFeatures:
      "Refractory iron deficiency anemia not responding to oral iron in adults should prompt celiac screening. Dermatitis herpetiformis is pathognomonic. IgA anti-tTG is the first-line serologic test — but always check total IgA first. Biopsy under EGD is required for definitive diagnosis; positive serology alone is not sufficient in adults. Response to GFD supports diagnosis.",
    redFlags: [
      "Refractory celiac disease (no response to strict GFD) — consider non-compliance first, then refractory type I/II; risk of EATL",
      "Enteropathy-associated T-cell lymphoma (EATL): abdominal pain, fever, weight loss, lymphadenopathy in celiac patient — urgent evaluation",
      "Hyposplenism in celiac disease → increased risk of encapsulated organism infections; consider pneumococcal vaccination",
      "Osteoporosis at young age in unexplained cases — screen for celiac",
      "IgA deficiency (2–3% of celiac patients) → false-negative IgA-based serology → check IgG-based tests",
    ],
    mnemonics: [
      {
        name: "Celiac Disease Associations (ABCDE)",
        content:
          "Autoimmune thyroid disease, Type 1 Diabetes, Down syndrome/Dermatitis herpetiformis, IgA Deficiency, Turner syndrome, Type 1 DM, HLA-DQ2/DQ8",
      },
      {
        name: "Diagnosis Steps",
        content:
          "1. Check total IgA level → 2. Anti-tTG IgA (if IgA sufficient) → 3. EGD + duodenal biopsies (Marsh III) → 4. Gluten-free diet → 5. Clinical response confirms diagnosis",
      },
    ],
    pimpingQuestions: [
      "Why must total serum IgA be checked before ordering anti-tTG IgA in celiac disease?",
      "What are the Marsh criteria for grading small bowel biopsy findings in celiac disease?",
      "What is dermatitis herpetiformis, and how is it related to celiac disease?",
      "Which conditions are associated with increased risk of celiac disease?",
      "What is the complication of refractory celiac disease, and how does it present?",
    ],
  },
  {
    id: "im-nafld",
    name: "NAFLD / NASH",
    icdCode: "K76.0",
    rotation: "internal-medicine",
    category: "Gastroenterology / Hepatology",
    definition:
      "Non-alcoholic fatty liver disease (NAFLD) is a spectrum of liver disease ranging from simple steatosis (fat accumulation without inflammation, largely benign) to non-alcoholic steatohepatitis (NASH — steatosis + hepatocellular injury + lobular inflammation ± fibrosis), which can progress to cirrhosis and hepatocellular carcinoma. NAFLD is the most common liver disease worldwide (~25% global prevalence) and the leading cause of liver transplant listing. It is strongly associated with insulin resistance, obesity (especially visceral adiposity), type 2 diabetes, dyslipidemia, and metabolic syndrome. Also known as metabolic dysfunction-associated steatotic liver disease (MASLD) under newer nomenclature.",
    diagnosticCriteria:
      "Diagnosis of exclusion: significant alcohol use must be ruled out (<21 drinks/week in men, <14 in women). Liver biopsy: gold standard for distinguishing NASH from simple steatosis and for staging fibrosis — shows steatosis, lobular inflammation, hepatocyte ballooning, and Mallory-Denk bodies. Non-invasive staging: FIB-4 index (age × AST / [platelet × √ALT]) — FIB-4 <1.30 = low risk, >2.67 = advanced fibrosis. Liver stiffness (FibroScan/VCTE): stiffness >8 kPa suggests significant fibrosis. MRI-PDFF (proton density fat fraction): quantifies steatosis. Imaging: ultrasound shows echogenic liver; NAFLD is a diagnosis of exclusion of other chronic liver diseases.",
    presentation: {
      chiefComplaint: [
        "Usually asymptomatic (incidental finding on imaging or labs)",
        "Fatigue and malaise",
        "RUQ discomfort or fullness",
        "Symptoms of decompensated cirrhosis if advanced",
      ],
      associatedSymptoms: [
        "Most patients asymptomatic — detected by elevated ALT/AST on routine labs or echogenic liver on ultrasound",
        "Fatigue is most common symptom when present",
        "Hepatomegaly on exam",
        "Acanthosis nigricans, obesity, central adiposity (associated metabolic syndrome features)",
        "Signs of advanced disease: spider angiomata, splenomegaly, ascites, jaundice, encephalopathy (if cirrhotic)",
      ],
      demographics:
        "Parallel to obesity and T2DM epidemic. Affects ~25% of US adults; ~75% of obese patients have NAFLD. NASH cirrhosis: now the second most common indication for liver transplant in the US (and rapidly overtaking HCV). Risk of progression to cirrhosis: ~20% of NASH patients over 20 years. Independent risk factors for fibrosis progression: T2DM, hypertension, elevated ALT, older age, obesity.",
    },
    distinguishingFeatures:
      "NAFLD vs alcoholic fatty liver: both show similar histology (steatohepatitis, ballooning, Mallory-Denk bodies) but distinguished by alcohol intake history and AST:ALT ratio (alcoholic hepatitis: AST:ALT >2:1; NAFLD: AST:ALT <1). NAFLD is associated with features of metabolic syndrome. Elevated ALT/AST with hepatomegaly in an obese diabetic patient with no alcohol use = NAFLD until proven otherwise.",
    redFlags: [
      "FIB-4 >2.67 or FibroScan stiffness >8 kPa — refer to hepatology for biopsy and advanced fibrosis management",
      "Cirrhotic NAFLD: HCC surveillance (ultrasound ± AFP every 6 months)",
      "Rapid weight loss (>10% in <6 months) can paradoxically worsen NASH — avoid crash diets",
      "Medications that can worsen NAFLD: amiodarone, methotrexate, tamoxifen, corticosteroids, highly active antiretroviral therapy (HAART)",
      "New drug approvals: resmetirom (THR-β agonist) — first FDA-approved treatment for NASH with fibrosis (2024)",
    ],
    mnemonics: [
      {
        name: "FIB-4 Index Formula",
        content:
          "FIB-4 = (Age × AST) / (Platelet count × √ALT) — <1.30 low risk, 1.30–2.67 intermediate (liver biopsy or FibroScan), >2.67 high risk for advanced fibrosis",
      },
      {
        name: "NAFLD Management Pyramid",
        content:
          "Base: Weight loss 7–10% body weight (most effective), exercise, Mediterranean diet. Tier 2: Optimize metabolic comorbidities (DM, dyslipidemia, HTN). Tier 3: GLP-1 agonists (semaglutide — reduces steatosis/fibrosis). Top: Resmetirom (FDA-approved for NASH + fibrosis, 2024)",
      },
    ],
    pimpingQuestions: [
      "What distinguishes NASH from simple steatosis histologically?",
      "How do you use the FIB-4 index clinically in a patient with incidentally elevated liver enzymes?",
      "What is the most effective intervention for reducing liver fibrosis in NAFLD/NASH?",
      "How does alcoholic hepatitis differ from NASH on labs and liver biopsy?",
      "What is the newest FDA-approved pharmacologic therapy for NASH with fibrosis?",
    ],
  },

  // ── MUSCULOSKELETAL / RHEUMATOLOGY EXPANSION ──────────────────────────────
  {
    id: "im-ra",
    name: "Rheumatoid Arthritis",
    icdCode: "M05.9",
    rotation: "internal-medicine",
    category: "Rheumatology",
    definition:
      "A systemic autoimmune inflammatory disease primarily targeting synovial joints, characterized by symmetric polyarthritis, synovial pannus formation, and progressive joint destruction. RA is associated with significant extra-articular manifestations and elevated cardiovascular mortality. Characterized by anti-CCP antibodies (most specific) and rheumatoid factor (RF). Early aggressive treatment with DMARDs is the standard of care.",
    diagnosticCriteria:
      "2010 ACR/EULAR criteria: score ≥ 6/10 required. Joints (0–5): small joints involved; Serology (0–3): RF/anti-CCP positive/high titer; Acute-phase reactants (0–1): abnormal CRP or ESR; Duration (0–1): symptoms ≥ 6 weeks. Labs: RF (sensitivity ~70%, specificity ~80%), anti-CCP (sensitivity 70%, specificity 95% — most specific test). ESR, CRP elevated. X-ray: periarticular osteopenia → joint space narrowing → marginal erosions (late). MRI/US: detects synovitis and erosions earlier.",
    presentation: {
      chiefComplaint: [
        "\"My hands and wrists are stiff in the morning for over an hour\"",
        "\"My finger joints are swollen and painful on both hands\"",
        "\"I'm tired all the time and my joints hurt\"",
      ],
      associatedSymptoms: [
        "Morning stiffness > 1 hour (hallmark — improves with activity; distinguishes from OA where stiffness improves in < 30 min)",
        "Symmetric small joint arthritis (MCPs, PIPs, wrists, MTPs — NOT DIPs as in OA)",
        "Soft, boggy, tender joint swelling (synovitis)",
        "Fatigue, malaise, low-grade fever (systemic inflammation)",
        "Extra-articular: rheumatoid nodules, vasculitis, Sjögren overlap, pericarditis, pleuritis, scleritis",
        "Atlantoaxial instability (cervical spine — C1-C2 subluxation, risk with intubation)",
      ],
      demographics:
        "Prevalence 1%; female:male 3:1; peak onset 30–50 years; HLA-DR4 (shared epitope hypothesis). Smoking is the strongest environmental risk factor. Felty's syndrome: RA + splenomegaly + neutropenia. Caplan syndrome: RA + pneumoconiosis → pulmonary nodules.",
    },
    distinguishingFeatures:
      "RA: symmetric, small joints (MCPs, PIPs, wrists), morning stiffness > 1h, anti-CCP/RF positive, periarticular osteopenia. OA: asymmetric, weight-bearing joints (knees, hips), DIP involvement (Heberden's nodes), morning stiffness < 30 min, Bouchard's nodes (PIP OA). SLE: ANA positive (anti-dsDNA, anti-Sm), multi-system involvement, butterfly rash.",
    redFlags: [
      "Cervical spine subluxation — caution with neck manipulation and intubation (lateral C-spine x-ray)",
      "Wrist drop or foot drop (mononeuritis multiplex from vasculitis)",
      "Pulmonary fibrosis (ILD — complication of RA and methotrexate)",
      "Cardiovascular disease (2× increased MI risk — RA inflammation accelerates atherosclerosis)",
    ],
    mnemonics: [
      {
        name: "RA vs OA: 5 Key Differences",
        content:
          "RA: Synovitis, Symmetric, Small joints (MCP/PIP), Stiffness > 1h, Systemic\nOA: Degeneration, Asymmetric, Large joints + DIP, Stiffness < 30min, No systemic\n\nAnti-CCP: most specific test for RA (95%)\nRheumatoid factor: more sensitive but less specific (also + in HCV, SLE, Sjögren's)",
      },
    ],
    pimpingQuestions: [
      "What is the 2010 ACR/EULAR classification criteria for RA?",
      "What is the most specific serologic test for RA?",
      "What is the first-line DMARD for RA and what monitoring is required?",
      "Why is methotrexate the anchor DMARD in RA treatment?",
      "What is Felty's syndrome?",
      "What biologic agents are used when methotrexate is insufficient?",
    ],
  },
  {
    id: "im-sle",
    name: "Systemic Lupus Erythematosus (SLE)",
    icdCode: "M32.9",
    rotation: "internal-medicine",
    category: "Rheumatology",
    definition:
      "A multisystem autoimmune disease characterized by widespread immune complex deposition and complement activation, leading to inflammation in multiple organ systems. Hallmarked by antinuclear antibodies (ANA) and anti-dsDNA antibodies. Affects predominantly young women of reproductive age. Course is relapsing-remitting with significant organ damage over time (renal, neurologic, cardiovascular).",
    diagnosticCriteria:
      "2019 EULAR/ACR criteria: entry criterion ANA ≥ 1:80, then weighted criteria across 10 domains (total ≥ 10 = classified SLE). Key domains: acute cutaneous lupus (malar rash, photosensitive rash — 6pts), discoid rash, oral ulcers, non-scarring alopecia, arthritis (2+ joints, 6pts), serositis (pleuritis/pericarditis), renal (proteinuria > 500mg/24h or RBC casts — 4–8pts depending on severity), hematologic (hemolytic anemia, leukopenia, thrombocytopenia — 2–4pts), CNS (seizures, psychosis, 5pts), anti-dsDNA/anti-Sm antibodies (6pts), complement (C3/C4 low, 3pts). Labs: ANA (screening, sensitive but not specific), anti-dsDNA (specific, correlates with disease activity), anti-Sm (most specific), anti-Ro/SSA, anti-La/SSB, antiphospholipid antibodies (anticardiolipin, lupus anticoagulant, anti-β2GP1).",
    presentation: {
      chiefComplaint: [
        "\"I have a rash across my face that got worse in the sun\"",
        "\"I'm tired, my joints hurt, and I'm losing hair\"",
        "\"My urine is foamy and my legs are swollen\"",
      ],
      associatedSymptoms: [
        "Malar (butterfly) rash — spares nasolabial folds (classic, but only in 50%)",
        "Photosensitivity",
        "Discoid rash (scarring, hyperpigmentation/hypopigmentation)",
        "Non-scarring alopecia, oral ulcers (painless — hallmark)",
        "Arthritis: symmetric, non-erosive, small joints (Jaccoud's arthropathy)",
        "Serositis: pleuritis (chest pain), pericarditis",
        "Lupus nephritis: proteinuria, hematuria, hypertension",
        "Neuropsychiatric lupus (NPSLE): seizures, psychosis, cognitive dysfunction",
        "Hematologic: hemolytic anemia, leukopenia, thrombocytopenia",
      ],
      demographics:
        "Female:male 9:1; peak onset 15–45 years; more severe in Black, Hispanic, and Asian women (higher nephritis rates, worse outcomes). Drug-induced lupus (hydralazine, procainamide, isoniazid, minocycline): anti-histone antibodies, no nephritis or CNS involvement, resolves when drug stopped.",
    },
    distinguishingFeatures:
      "ANA positive in > 99% of SLE (most sensitive). Anti-dsDNA: specific (70%), correlates with nephritis activity. Anti-Sm: most specific (25–30%). Antiphospholipid syndrome overlap (30%): thrombosis + thrombocytopenia + pregnancy loss. C3/C4 consumption = disease activity marker. Drug-induced lupus: anti-histone antibodies (not anti-dsDNA).",
    redFlags: [
      "Lupus nephritis — early aggressive treatment prevents ESRD (hydroxychloroquine + MMF or cyclophosphamide)",
      "Macrophage activation syndrome (MAS) — high ferritin, pancytopenia, liver dysfunction, hemophagocytosis on biopsy",
      "Antiphospholipid syndrome (APS) — thrombosis + thrombocytopenia + fetal loss — anticoagulate long-term",
      "NPSLE (seizures, psychosis) — rule out CNS infection, stroke before attributing to SLE",
    ],
    mnemonics: [
      {
        name: "SLE Mnemonic: DOPAMINE RASH",
        content:
          "D — Discoid rash\nO — Oral ulcers (painless)\nP — Photosensitivity\nA — Arthritis (non-erosive, symmetric)\nM — Malar rash\nI — Immunologic (anti-dsDNA, anti-Sm, antiphospholipid Ab)\nN — Neurologic (seizures, psychosis)\nE — ESR/C3/C4 (low complement)\nR — Renal (nephritis — proteinuria, casts)\nA — ANA (screening test)\nS — Serositis (pleuritis, pericarditis)\nH — Hematologic (hemolytic anemia, thrombocytopenia, leukopenia)",
      },
    ],
    pimpingQuestions: [
      "What is the most specific serologic test for SLE?",
      "What antibodies correlate with SLE disease activity (especially nephritis)?",
      "What is the characteristic rash of SLE and what areas does it spare?",
      "What is drug-induced lupus and what antibody is associated?",
      "Describe the treatment approach for lupus nephritis.",
      "What is antiphospholipid antibody syndrome and how does it relate to SLE?",
    ],
  },

  // ── DERMATOLOGIC ──────────────────────────────────────────────────────────
  {
    id: "im-psoriasis",
    name: "Psoriasis",
    icdCode: "L40.9",
    rotation: "internal-medicine",
    category: "Dermatology",
    definition:
      "A chronic, immune-mediated inflammatory skin disease characterized by hyperproliferation of keratinocytes (epidermal turnover reduced from 28 days to 3–5 days), presenting as well-demarcated, erythematous plaques with silvery-white scale. Affects 2–3% of the population. Associated with significant comorbidities: psoriatic arthritis (30%), cardiovascular disease, metabolic syndrome, inflammatory bowel disease, depression.",
    diagnosticCriteria:
      "Clinical diagnosis: well-demarcated erythematous plaques with silvery scale in typical locations (scalp, extensor surfaces of elbows/knees, lumbosacral area, nail pits). Auspitz sign: pinpoint bleeding when scale is removed (dilated capillaries in papillary dermis). Koebner phenomenon: lesions appearing at sites of skin trauma. Nail findings: pitting (most common), onycholysis (nail separation), 'oil drop' sign (yellow-brown discoloration under nail), subungual hyperkeratosis. PASI score (Psoriasis Area and Severity Index): 0–72, guides treatment decisions. Skin biopsy if diagnosis uncertain: acanthosis, parakeratosis, Munro microabscesses (neutrophils in stratum corneum), absent granular layer.",
    presentation: {
      chiefComplaint: [
        "\"I have thick, scaly patches on my elbows and knees\"",
        "\"My scalp is covered in flaky scales\"",
        "\"My skin is covered in plaques and my joints are painful\"",
      ],
      associatedSymptoms: [
        "Plaque psoriasis (most common, 90%): well-demarcated erythematous plaques with silvery scale",
        "Nail involvement (50%): pitting, onycholysis, 'oil drop' sign",
        "Pruritus (variable — often less severe than eczema)",
        "Psoriatic arthritis (30%): inflammatory arthritis, DIP involvement (distinguishes from RA), dactylitis ('sausage digit'), enthesitis, axial involvement",
        "Inverse psoriasis: smooth, erythematous patches in skin folds (no scale — moisture prevents it)",
        "Guttate psoriasis: small drop-shaped lesions after streptococcal infection (children/young adults)",
        "Pustular psoriasis: sterile pustules (not infectious — Gram stain negative)",
      ],
      demographics:
        "Bimodal onset: 20–30 years and 50–60 years. Strong genetic component (HLA-Cw6 for type I early-onset). Triggers: infection (especially strep — guttate psoriasis), stress, alcohol, smoking, medications (beta-blockers, lithium, NSAIDs, antimalarials, TNF-inhibitor paradoxical psoriasis).",
    },
    distinguishingFeatures:
      "Classic: extensor surface (elbows, knees) — opposite of atopic dermatitis (flexural). Silvery scale + well-demarcated border. Nail pitting (psoriasis) vs nail ridging (RA) vs onycholysis (fungal). Psoriatic arthritis: DIP joints, asymmetric, nail involvement, dactylitis, enthesitis (Achilles, plantar fascia).",
    redFlags: [
      "Erythrodermic psoriasis (> 90% BSA involvement): medical emergency — hypothermia, sepsis, high-output cardiac failure",
      "Pustular psoriasis (generalized): fever, leukocytosis, sterile pustules — medical emergency",
      "Psoriatic arthritis with spine involvement (sacroiliitis) — refer rheumatology",
      "Starting TNF-inhibitor therapy: screen for TB (IGRA/TST), hepatitis B, and latent infections first",
    ],
    mnemonics: [
      {
        name: "Psoriasis vs Eczema: EXTensor vs FLEXor",
        content:
          "Psoriasis: EXTensor surfaces (elbows, knees, sacrum), well-demarcated silvery plaques, Auspitz sign\nEczema (Atopic Dermatitis): FLEXor surfaces (antecubital, popliteal fossa), poorly demarcated, oozing/crusting, atopy triad\n\nTreatment ladder:\nMild: Topical corticosteroids + Vitamin D analogues (calcipotriene)\nModerate: Phototherapy (NB-UVB)\nSevere: Biologics (anti-TNF, anti-IL-17, anti-IL-23) or Methotrexate/Cyclosporine",
      },
    ],
    pimpingQuestions: [
      "What is the Auspitz sign and what does it indicate histologically?",
      "What is the Koebner phenomenon?",
      "Describe the nail changes in psoriasis.",
      "What triggers guttate psoriasis?",
      "When are biologics indicated for psoriasis, and what class of medications is most effective?",
      "What screening is required before initiating TNF-inhibitor therapy for psoriasis?",
    ],
  },

  // ── EENT ──────────────────────────────────────────────────────────────────
  {
    id: "im-glaucoma",
    name: "Glaucoma",
    icdCode: "H40.9",
    rotation: "internal-medicine",
    category: "EENT / Ophthalmology",
    definition:
      "A group of optic neuropathies characterized by progressive optic nerve damage (cupping) and corresponding visual field loss, usually associated with elevated intraocular pressure (IOP) > 21 mmHg. Primary open-angle glaucoma (POAG) is the most common form (90%) — insidious, painless, bilateral, peripheral vision loss. Acute angle-closure glaucoma (AACG) is an ophthalmologic emergency with sudden onset of severe eye pain, decreased vision, halos around lights, nausea/vomiting, and corneal haziness.",
    diagnosticCriteria:
      "POAG: elevated IOP (> 21 mmHg) + optic disc cupping (cup-to-disc ratio > 0.6) + characteristic visual field defects on Humphrey visual field testing + OCT (optical coherence tomography) showing retinal nerve fiber layer thinning. IOP normal in 20–30% of POAG ('normal-tension glaucoma'). Risk factors: IOP > 21, family history (first-degree relative 4× risk), Black race (earlier onset, more severe), myopia, DM, HTN, thin corneal pachymetry. AACG: slit-lamp exam showing shallow anterior chamber, mid-dilated non-reactive pupil, corneal edema; IOP typically > 40 mmHg; gonioscopy confirms closed angle.",
    presentation: {
      chiefComplaint: [
        "\"I've noticed I'm losing my peripheral vision slowly\"",
        "\"Sudden severe eye pain, headache, and blurry vision with nausea\"",
        "\"My eye pressure is elevated on routine exam\"",
      ],
      associatedSymptoms: [
        "POAG: usually asymptomatic (silent until advanced) — peripheral vision loss is late symptom",
        "AACG: sudden severe unilateral eye and frontal headache pain, red eye, halos around lights, nausea/vomiting, blurred vision",
        "AACG: rock-hard eyeball to palpation, mid-dilated non-reactive pupil, corneal haziness (edema)",
        "POAG: gradual tunnel vision (central vision preserved until late)",
      ],
      demographics:
        "POAG: > 60 years, Black Americans (3–4× higher rate, earlier onset), family history, hyperopia. AACG: Asian and Inuit ancestry (shallow anterior chamber anatomically predisposed), women > men (shallower anterior chamber), hyperopic eyes, pupillary dilation (dim lighting, anticholinergic medications, sympathomimetics).",
    },
    distinguishingFeatures:
      "POAG (most common): bilateral, insidious, painless, peripheral field loss, cup-to-disc ratio > 0.6. AACG: unilateral, sudden, PAINFUL, nausea, halos, semi-dilated non-reactive pupil, rock-hard eye — ophthalmologic emergency. Normal-tension glaucoma: optic nerve damage despite IOP ≤ 21 mmHg — likely vascular etiology. Secondary glaucoma: neovascular (diabetic), pigmentary, pseudoexfoliation.",
    redFlags: [
      "AACG — ophthalmologic EMERGENCY: IV acetazolamide + topical timolol + pilocarpine IMMEDIATELY, then urgent laser peripheral iridotomy",
      "Sudden monocular vision loss (rule out CRAO, temporal arteritis)",
      "Any antihistamine, anticholinergic, or sympathomimetic medication can precipitate AACG in predisposed patients",
    ],
    mnemonics: [
      {
        name: "AACG vs POAG: PAIN vs PAINLESS",
        content:
          "AACG (Acute Angle-Closure): PAINFUL, Sudden, Unilateral, Red eye, Halos, Nausea, Elevated IOP > 40 → EMERGENCY\nPOAG (Primary Open-Angle): PainLESS, Insidious, Bilateral, Peripheral vision loss, Silent until advanced\n\nMedication trigger for AACG: anticholinergics (atropine, TCAs, antihistamines), sympathomimetics (pseudoephedrine)\nTreatment AACG: IV acetazolamide + topical beta-blockers + pilocarpine → laser iridotomy",
      },
    ],
    pimpingQuestions: [
      "What is the difference between open-angle and angle-closure glaucoma?",
      "What is the cup-to-disc ratio and what is the normal threshold?",
      "How does acute angle-closure glaucoma present and why is it an emergency?",
      "What medications can precipitate angle-closure glaucoma?",
      "What is the first-line medical treatment for open-angle glaucoma?",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 8 — HEMATOLOGY ADDITIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "im-leukemia-lymphoma",
    name: "Leukemia & Lymphoma",
    icdCode: "C91.00",
    rotation: "internal-medicine",
    category: "Hematologic / Neoplastic",
    definition:
      "Leukemia: malignancy of hematopoietic progenitor cells — classified by cell type (myeloid vs. lymphoid) and course (acute vs. chronic). Acute leukemias: blasts > 20% in marrow; aggressive without treatment. Chronic leukemias: more mature cells, indolent. Key types: ALL (most common childhood cancer), AML (most common acute leukemia in adults), CLL (most common adult leukemia overall), CML (BCR-ABL fusion — Philadelphia chromosome). Lymphoma: malignancy of lymphocytes in lymph nodes/extranodal sites. Hodgkin lymphoma (HL): Reed-Sternberg cells (owl-eye binucleated giant cells), young adults and bimodal elderly, highly curable. Non-Hodgkin lymphoma (NHL): diverse group, B-cell (85%) or T-cell; diffuse large B-cell lymphoma (DLBCL) most common aggressive; follicular lymphoma most common indolent.",
    diagnosticCriteria:
      "Leukemia: CBC (elevated or decreased WBC; blasts on smear for acute leukemia), peripheral blood smear, bone marrow biopsy + aspirate (gold standard — blast %, cytogenetics, immunophenotyping). AML: Auer rods (pink needle-like inclusions in myeloblasts — pathognomonic), myeloperoxidase positive. ALL: TdT positive, lymphoblasts; t(9;22) in adult ALL = poor prognosis. CML: Philadelphia chromosome t(9;22) → BCR-ABL fusion → constitutively active tyrosine kinase; markedly elevated WBC with full spectrum of myeloid cells; low LAP (leukocyte alkaline phosphatase). CLL: 'smudge cells' on smear, CD5+/CD19+/CD23+. Lymphoma: lymph node biopsy (excisional, not FNA), PET-CT for staging, bone marrow biopsy for NHL staging.",
    presentation: {
      chiefComplaint: [
        "\"My child has been pale, bruising easily, and having bone pain for 3 weeks\"",
        "\"I have painless lymph node swelling in my neck and I've been drenching my sheets with sweat\"",
        "\"My CBC shows WBC of 150,000 — I was told I may have leukemia\"",
      ],
      associatedSymptoms: [
        "Acute leukemia: triad of bone marrow failure — anemia (fatigue, pallor), neutropenia (infections, fever), thrombocytopenia (bleeding, petechiae, ecchymoses); bone pain (marrow expansion); lymphadenopathy, hepatosplenomegaly; hyperleukocytosis → leukostasis (respiratory failure, stroke)",
        "Hodgkin lymphoma: painless cervical/mediastinal LAD; B symptoms (drenching night sweats + fever > 38°C + unexplained weight loss > 10% in 6 months — staging/prognosis); alcohol-induced pain at lymph node sites (rare but classic board question); mediastinal mass (CXR) in young adult",
        "CML: symptomatic splenomegaly (LUQ fullness, early satiety), fatigue, night sweats, weight loss; leukocyte count often > 100,000 with full myeloid differentiation; low LAP (vs. leukemoid reaction — high LAP)",
        "CLL: often asymptomatic incidental finding (lymphocytosis on CBC); lymphadenopathy, splenomegaly; autoimmune hemolytic anemia (AIHA — warm IgG); hypogammaglobulinemia → recurrent infections",
      ],
      demographics:
        "ALL: peak 2–5 years; most curable childhood cancer (95% remission). AML: peak 65–70 years; most common acute leukemia in adults; worst prognosis (M3/APL — t(15;17) — treated with ATRA + arsenic trioxide; coagulopathy/DIC). CLL: most common adult leukemia in Western countries; median age 70; indolent. CML: peak 40–60; imatinib (BCR-ABL TKI) = paradigm shift in targeted therapy. HL: bimodal (20–35 and > 55); EBV-related (mixed cellularity subtype).",
    },
    distinguishingFeatures:
      "Leukemoid reaction (infection-induced leukocytosis) vs. CML: leukemoid — high LAP (> 100); CML — low LAP (< 10–20). Reed-Sternberg cells: large binucleated 'owl-eye' cells — pathognomonic for HL. DIC in AML-M3 (APL): treat with ATRA (all-trans retinoic acid) before chemotherapy to reduce DIC risk. Richter transformation: CLL → aggressive DLBCL — sudden clinical deterioration in CLL patient.",
    redFlags: [
      "Leukostasis (WBC > 100,000): respiratory failure, CNS symptoms → urgent leukapheresis + hydroxyurea",
      "AML-M3 (APL) with DIC: ATRA emergency + aggressive DIC management; give FFP, cryoprecipitate",
      "Tumor lysis syndrome: rapidly proliferating malignancy + treatment → ↑ uric acid, ↑ K+, ↑ phosphate, ↓ Ca2+ → AKI; prevent with rasburicase + aggressive hydration",
    ],
    mnemonics: [
      {
        name: "Leukemia Overview: CALL",
        content:
          "C — CML: Philadelphia chromosome t(9;22), BCR-ABL; imatinib; low LAP; myeloid differentiation spectrum\nA — AML: adults > 60; Auer rods (M3/APL = ATRA emergency); blasts ≥ 20%; MPO+\nL — ALL: children (#1 childhood cancer); TdT+; t(9;22) in adults = poor prognosis; CNS prophylaxis\nL — CLL: most common adult leukemia; smudge cells; CD5+; AIHA; indolent\nHL: Reed-Sternberg (owl-eye) cells; B symptoms; bimodal age; ABVD chemo; highly curable\nNHL: DLBCL = most common aggressive; Follicular = most common indolent",
      },
    ],
    pimpingQuestions: [
      "What is the pathognomonic cell type in Hodgkin lymphoma?",
      "What is the Philadelphia chromosome and which leukemia is it associated with?",
      "What are Auer rods and in which leukemia are they found?",
      "What is leukostasis and how is it treated?",
      "What is tumor lysis syndrome and how is it prevented?",
    ],
  },
  {
    id: "im-hematologic-disorders",
    name: "Sickle Cell, TTP/ITP, Multiple Myeloma & Coagulation Disorders",
    icdCode: "D57.1",
    rotation: "internal-medicine",
    category: "Hematologic / Disorders",
    definition:
      "Sickle cell disease (SCD): autosomal recessive HbS mutation (Glu→Val position 6) — RBCs sickle under low O2, acidosis, dehydration → vaso-occlusion, hemolysis. Thrombotic thrombocytopenic purpura (TTP): ADAMTS13 deficiency (congenital or autoimmune) → ultra-large vWF multimers → platelet microthrombi → pentad (MAHA + thrombocytopenia + neurologic + renal + fever). Immune thrombocytopenic purpura (ITP): autoimmune platelet destruction — IgG antibodies against GPIIb/IIIa → isolated thrombocytopenia, NO anemia, NO splenomegaly (distinguishes from TTP/HUS). Multiple myeloma (MM): plasma cell malignancy producing monoclonal protein (M-protein) — CRAB criteria. G6PD deficiency: X-linked enzyme deficiency → hemolytic anemia triggered by oxidative stress (infections, drugs, fava beans).",
    diagnosticCriteria:
      "SCD: Hgb electrophoresis (HbSS, HbSC, HbSβ-thal). TTP: peripheral smear — MAHA (schistocytes, helmet cells), severe thrombocytopenia (< 30,000), mildly elevated Cr; ADAMTS13 activity < 10% confirms TTP. ITP: isolated thrombocytopenia (< 100,000), normal PT/aPTT, peripheral smear (no schistocytes, large platelets), no other explanation. Multiple myeloma (CRAB): HyperCalcemia, Renal insufficiency, Anemia, Bone lesions (lytic, 'punched-out'); SPEP + urine PEP (M-spike); serum free light chains; BM biopsy: ≥ 10% plasma cells. G6PD: bite cells and Heinz bodies on smear during hemolytic episode; G6PD enzyme assay (may be falsely normal during crisis — reticulocytes have higher G6PD).",
    presentation: {
      chiefComplaint: [
        "\"I have severe pain in my chest and bones — I have sickle cell disease\"",
        "\"I'm confused, have bruising everywhere, and my platelets are critically low\"",
        "\"I have back pain, fatigue, and my blood protein levels are very high\"",
      ],
      associatedSymptoms: [
        "SCD vaso-occlusive crisis: severe bone pain (dactylitis in children — 'hand-foot syndrome'), acute chest syndrome (fever + chest pain + new infiltrate — most common cause of death in SCD), stroke (ischemic), priapism, splenic sequestration crisis (acute splenomegaly + drop in Hgb), avascular necrosis (femoral head), osteomyelitis (Salmonella most common in SCD — also S. aureus)",
        "TTP pentad: thrombocytopenia, MAHA (microangiopathic hemolytic anemia — schistocytes), neurologic symptoms (confusion, seizures, focal deficits), renal insufficiency, fever; NOT all 5 required for diagnosis",
        "ITP: purpura, petechiae, easy bruising, mucosal bleeding; NO lymphadenopathy, NO significant splenomegaly",
        "Multiple myeloma: bone pain (vertebral — pathologic fractures), hypercalcemia symptoms, renal failure (cast nephropathy from light chains — 'myeloma kidney'), anemia/fatigue; recurrent infections (immunoparesis)",
        "G6PD: jaundice, dark urine (hemoglobinuria), scleral icterus after trigger (primaquine, dapsone, nitrofurantoin, TMP-SMX, rasburicase, fava beans, infection)",
      ],
      demographics:
        "SCD: African Americans (8% trait, 1 in 400 disease), also Mediterranean, Middle East, India. TTP: more common in women, Black adults, autoimmune overlap. MM: Black Americans 2× white; peak 60–70; preceded by MGUS (monoclonal gammopathy of undetermined significance). G6PD: X-linked, males predominantly affected; African (A- variant — mild), Mediterranean variant (more severe).",
    },
    distinguishingFeatures:
      "TTP vs. HUS vs. ITP: TTP = MAHA + thrombocytopenia + neurologic + renal (ADAMTS13 < 10%) — treat with plasmapheresis; HUS = MAHA + thrombocytopenia + AKI (NO neuro) — E. coli O157:H7 STEC in children, complement-mediated in adults — do NOT give antibiotics or platelet transfusions; ITP = isolated thrombocytopenia, no MAHA, schistocytes absent. Myeloma vs. MGUS: MGUS = M-protein < 3 g/dL, < 10% plasma cells, NO end-organ damage; myeloma = CRAB criteria present.",
    redFlags: [
      "TTP: PLASMAPHERESIS is life-saving — mortality 90% untreated; add rituximab for refractory; NEVER give platelet transfusions (worsen thrombosis)",
      "SCD acute chest syndrome: exchange transfusion (NOT simple transfusion) → reduces HbS%, improves oxygenation; also hydroxyurea for prevention",
      "Myeloma + spinal cord compression: emergent dexamethasone + radiation/surgery; hypercalcemia → IV saline + zoledronic acid",
      "ITP with platelet < 30,000 and bleeding: IVIG (fastest) + prednisone; splenectomy for refractory chronic ITP",
    ],
    mnemonics: [
      {
        name: "TTP vs. HUS vs. ITP: The MAHA Trio",
        content:
          "TTP: Thrombocytopenia + MAHA + Neuro + Renal + Fever = PENTAD\n  → ADAMTS13 < 10%; treat = PLASMAPHERESIS (NO platelets!)\nHUS: Thrombocytopenia + MAHA + AKI (NO neuro)\n  → E. coli O157:H7 (children); complement-mediated (adults = aHUS)\n  → NO antibiotics, NO platelet transfusions; supportive\nITP: Isolated thrombocytopenia, NO MAHA, no schistocytes\n  → IgG vs. GPIIb/IIIa; treat = prednisone ± IVIG ± rituximab ± splenectomy",
      },
      {
        name: "Multiple Myeloma: CRAB",
        content:
          "C — HyperCalcemia (> 11 mg/dL from bone resorption/PTHrP)\nR — Renal insufficiency (cast nephropathy — Bence-Jones proteins; also hypercalcemia, amyloidosis)\nA — Anemia (normocytic normochromic — marrow replacement)\nB — Bone lesions (lytic 'punched-out' on X-ray; NO osteoblastic activity → bone scan often NEGATIVE — use PET/CT or skeletal survey)\nM-spike on SPEP; BM biopsy ≥ 10% clonal plasma cells",
      },
    ],
    pimpingQuestions: [
      "What is the treatment for TTP and why are platelet transfusions contraindicated?",
      "What are the CRAB criteria for multiple myeloma?",
      "What is the most common cause of death in sickle cell disease?",
      "What is the difference between TTP and HUS?",
      "What drugs trigger hemolysis in G6PD deficiency?",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 9 — INFECTIOUS DISEASE ADDITIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "im-hiv-im",
    name: "HIV/AIDS",
    icdCode: "B20",
    rotation: "internal-medicine",
    category: "Infectious Disease / Viral",
    definition:
      "Human immunodeficiency virus (HIV): RNA retrovirus targeting CD4+ T lymphocytes → progressive immune deficiency → AIDS (CD4 < 200 or AIDS-defining illness). Transmitted: sexual contact (MSM highest risk per act), shared needles, blood products, vertical (peripartum/breastfeeding). Modern ART (antiretroviral therapy): multiple drug classes suppress viral load to undetectable → normal lifespan. U=U: Undetectable = Untransmittable — core public health message.",
    diagnosticCriteria:
      "4th generation HIV-1/2 Ag/Ab combo assay (detects p24 antigen + antibodies, detects infection 18–45 days post-exposure) → positive → HIV-1/2 differentiation immunoassay → if indeterminate → HIV RNA PCR (viral load). USPSTF: screen all adults 15–65 once; high-risk annually; all pregnant women. CD4 count: immunologic staging (< 200 = AIDS). Viral load (HIV RNA): guides treatment response (goal: undetectable < 20 copies/mL). Resistance genotyping: before starting ART. Baseline: CD4, VL, CBC, CMP, LFTs, lipids, HLA-B*5701 (abacavir hypersensitivity), co-infection screening (HBV, HCV, TB, STIs).",
    presentation: {
      chiefComplaint: [
        "\"I've had fevers, weight loss, and swollen glands for a month — I've never been tested for HIV\"",
        "\"My CD4 is 45 and I have a new headache and neck stiffness\"",
        "\"I want to start PrEP — I'm at high risk for HIV\"",
      ],
      associatedSymptoms: [
        "Acute retroviral syndrome (ARS): 2–4 weeks post-exposure — mononucleosis-like: fever, LAD, pharyngitis (no exudate), maculopapular rash (trunk), myalgias, headache; high viremia, negative Ab (window period), positive HIV RNA",
        "Chronic asymptomatic phase: years; CD4 gradually declining 50–100 cells/yr",
        "Symptomatic HIV / AIDS-defining OIs by CD4:\n  < 500: oral thrush, oral hairy leukoplakia, herpes zoster\n  < 200: PCP (dry cough, exertional dyspnea, bilateral interstitial infiltrates, high LDH, low pO2 — treat with TMP-SMX; prophylaxis: CD4 < 200)\n  < 100: CMV retinitis (floaters, scotomata, painless vision loss, 'pizza pie' fundus), toxoplasmosis (ring-enhancing brain lesions, multiple, anti-Toxo IgG), Cryptococcal meningitis (severe headache, high ICP — India ink, CrAg; treat: amphotericin B + flucytosine → fluconazole)\n  < 50: MAC (disseminated — fever, night sweats, weight loss, ↑ LDH, ↑ alk phos; prophylaxis: azithromycin weekly)",
      ],
      demographics:
        "~ 1.2 million Americans with HIV; 13% undiagnosed. Highest new diagnoses: MSM, Black and Hispanic/Latino communities. PrEP (pre-exposure prophylaxis): tenofovir/emtricitabine (TDF/FTC daily) or cabotegravir IM q2months — reduces sexual HIV acquisition by > 99% with adherence. PEP: within 72 hours of exposure, × 28 days; 3-drug ART regimen.",
    },
    distinguishingFeatures:
      "Toxoplasmosis vs. CNS lymphoma in AIDS: both ring-enhancing brain lesions; Toxo = multiple, basal ganglia, responds to empiric pyrimethamine/sulfadiazine in 2 weeks (treatment trial); CNS lymphoma = solitary, periventricular, EBV-positive CSF PCR, does NOT respond to anti-Toxo treatment. PCP vs. bacterial pneumonia in AIDS: PCP = subacute onset, bilateral diffuse interstitial infiltrates, high LDH, normal or near-normal CXR in early disease; bacterial = acute, lobar, productive cough.",
    redFlags: [
      "Cryptococcal meningitis: elevated ICP (> 200 mmHg) → serial LPs or VP shunt for ICP management; do NOT give steroids (worsen outcomes in Crypto)",
      "IRIS (immune reconstitution inflammatory syndrome): paradoxical worsening after ART initiation → steroids for severe IRIS; do NOT stop ART",
      "Start ART in ALL HIV-positive patients regardless of CD4 count",
      "CMV retinitis: intravitreal or systemic ganciclovir — irreversible blindness without treatment",
    ],
    mnemonics: [
      {
        name: "HIV OI Prophylaxis by CD4",
        content:
          "CD4 < 200: TMP-SMX (PCP + Toxo prophylaxis) — also trimethoprim/dapsone if sulfa allergy\nCD4 < 100: Toxoplasma prophylaxis (if TMP-SMX not used, add dapsone + pyrimethamine)\nCD4 < 50: MAC prophylaxis — Azithromycin 1200 mg weekly\nAll HIV patients: TB screening (QuantiFERON); annual influenza; Pneumovax; HAV/HBV vaccination",
      },
    ],
    pimpingQuestions: [
      "At what CD4 count is Pneumocystis prophylaxis started and what drug is used?",
      "How do you differentiate CNS toxoplasmosis from CNS lymphoma in AIDS?",
      "What is the principle of U=U and why is it clinically important?",
      "What is IRIS and how is it managed?",
      "What screening tests are done at HIV diagnosis (baseline workup)?",
    ],
  },
  {
    id: "im-infectious-disease",
    name: "Key Infectious Diseases (Lyme, Syphilis, Herpes, CMV, Influenza, Fungal)",
    icdCode: "A69.20",
    rotation: "internal-medicine",
    category: "Infectious Disease / Mixed",
    definition:
      "A group of high-yield infectious diseases for internal medicine: Lyme disease (Borrelia burgdorferi — Ixodes tick, endemic Northeast/upper Midwest US), Syphilis (Treponema pallidum — stages: primary, secondary, tertiary, neurosyphilis), HSV (oral-labial HSV-1; genital HSV-2; HSV encephalitis HSV-1), CMV (cytomegalovirus — mononucleosis-like in immunocompetent; severe end-organ disease in immunocompromised), Influenza (already covered in detail under pulmonary), Histoplasmosis (Histoplasma capsulatum — Ohio/Mississippi River Valley, bird/bat droppings), Cryptococcus neoformans (HIV/AIDS; meningitis), Pneumocystis jirovecii (PCP — covered in HIV section).",
    diagnosticCriteria:
      "Lyme: Erythema migrans (> 5 cm expanding rash — clinical diagnosis, no test needed); disseminated/late Lyme: 2-tier testing (ELISA → Western blot confirmation). PCR/culture rarely needed. Syphilis: RPR/VDRL (nontreponemal — titers follow disease activity and treatment response); FTA-ABS or TP-PA (treponemal — confirm, remain positive for life). Neurosyphilis: CSF-VDRL (specific, not sensitive); CSF PCR. Dark-field microscopy: visualizes spirochetes in primary chancre. HSV: PCR (gold standard — CSF for HSV encephalitis, lesion swab for genital); tzanck smear: multinucleated giant cells (HSV/VZV — not type-specific). CMV: pp65 antigenemia assay, CMV PCR (serum); retinal exam for CMV retinitis; tissue biopsy: cytomegalic 'owl-eye' intranuclear inclusions. Histoplasmosis: urine Histoplasma antigen (most sensitive for disseminated/acute); serology (anti-Histo antibodies — less useful acutely); BAL culture; bone marrow/blood culture in severe disseminated.",
    presentation: {
      chiefComplaint: [
        "\"I found a tick on me last week and now I have a bullseye rash on my thigh\"",
        "\"I have a painless genital sore — it appeared after unprotected sex 3 weeks ago\"",
        "\"I've been in a medically induced coma and my CMV PCR is very high\"",
      ],
      associatedSymptoms: [
        "Lyme disease: Stage 1 (early localized): erythema migrans (expanding oval rash with central clearing, appears 3–30 days post-tick bite — NOT a bullseye in most cases). Stage 2 (early disseminated, days–weeks): multiple EM lesions, Lyme carditis (AV block — most common cardiac manifestation), cranial nerve palsy (CN VII bilateral facial palsy most common neurologic), aseptic meningitis. Stage 3 (late disseminated, months): Lyme arthritis (large joint monoarthritis — knee most common), chronic neurologic Lyme",
        "Syphilis stages: Primary = painless, indurated genital ulcer (chancre) with clean base + inguinal LAD, heals spontaneously. Secondary = diffuse maculopapular rash INCLUDING palms and soles, condyloma lata (moist raised plaques in warm/moist areas), patchy alopecia, 'moth-eaten' hair, mucous patches, systemic LAD, fever. Tertiary = gummas (granulomatous), aortitis (aortic root aneurysm, AR — treponemes in aortic wall), tabes dorsalis, general paresis. Neurosyphilis: any stage; Argyll Robertson pupils (accommodate but don't react — 'prostitute's pupils')",
        "CMV mononucleosis: monospot-negative, heterophile-negative mononucleosis syndrome — CMV EBV-negative mono in adults; more prominent hepatitis, less pharyngitis than EBV",
        "Histoplasmosis: acute pulmonary (2–3 weeks after heavy exposure — flu-like, bilateral infiltrates, mediastinal LAD); chronic pulmonary (mimics TB — upper lobe fibronodular); disseminated (immunocompromised — fever, weight loss, hepatosplenomegaly, pancytopenia, oral ulcers)",
      ],
      demographics:
        "Lyme: Ixodes scapularis (deer tick, black-legged tick) in Northeast US; I. pacificus in West. Reservoir: white-footed mouse. Tick must be attached ≥ 36–48 hours for transmission. Doxycycline prophylaxis: single 200 mg dose within 72 hours if tick attached ≥ 36 hours in endemic area. Syphilis: resurgence in US, especially congenital syphilis — screen all pregnant women; MSM at elevated risk.",
    },
    distinguishingFeatures:
      "Syphilis secondary rash: PALMS AND SOLES involvement = secondary syphilis; also Rocky Mountain spotted fever (petechial), hand-foot-mouth disease (children, Coxsackie). Argyll Robertson pupils (neurosyphilis): accommodate (near response intact) but do NOT react to light — 'light-near dissociation'. Lyme vs. Rocky Mountain spotted fever (RMSF): both tick-borne, rash; RMSF = petechial/purpuric rash STARTS on wrists/ankles then centripetal (spreads centrally); RMSF is more acute, more dangerous — treat immediately with doxycycline; culture/testing should not delay treatment.",
    redFlags: [
      "Neurosyphilis: treat with IV aqueous PCN G × 10–14 days (IM benzathine PCN does NOT achieve adequate CSF levels); any stage of syphilis can have neurosyphilis",
      "Congenital syphilis: treat all pregnant women with active syphilis → benzathine PCN G",
      "Lyme carditis with high-degree AV block → IV ceftriaxone + temporary pacing if needed",
      "Histoplasmosis severe/disseminated: IV amphotericin B then itraconazole; mild-moderate: itraconazole only",
    ],
    mnemonics: [
      {
        name: "Syphilis Stages: Primary, Secondary, Tertiary",
        content:
          "Primary: Painless chancre (clean base, indurated) + inguinal LAD\nSecondary: Systemic spread — 'RASH including palms/soles' + condylomata lata + alopecia + LAD\nLatent: No symptoms (early < 1 yr; late > 1 yr)\nTertiary: Gummas (granuloma), Aortitis (AR, aneurysm), Neurosyphilis (tabes dorsalis, general paresis, Argyll Robertson pupils)\nTreatment:\n  Primary/Secondary: Benzathine PCN G 2.4 MU IM × 1\n  Late latent/Tertiary (non-neuro): Benzathine PCN G × 3 doses (q week × 3)\n  Neurosyphilis: IV Aqueous PCN G × 10–14 days",
      },
      {
        name: "Lyme Disease Stages: FACE",
        content:
          "F — Facial nerve palsy (CN VII bilateral) — Stage 2 neurologic\nA — AV block/Carditis — Stage 2 cardiac (Lyme carditis)\nC — Cardiac + CNS involvement — early disseminated\nE — Erythema migrans (expanding oval rash > 5 cm, Stage 1)\nStage 3: Lyme arthritis (knee — large joint monoarthritis)\nTreatment: Doxycycline (most stages); IV ceftriaxone (meningitis, carditis, Lyme arthritis)",
      },
    ],
    pimpingQuestions: [
      "What are the 3 stages of Lyme disease and their manifestations?",
      "Describe the secondary syphilis rash — what is unique about its distribution?",
      "What are Argyll Robertson pupils and in what condition are they seen?",
      "Why is neurosyphilis treated with IV penicillin rather than IM benzathine penicillin?",
      "What is the minimum tick attachment time required for Lyme disease transmission?",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 7 — RENAL / UROLOGY ADDITIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "im-glomerulonephritis",
    name: "Glomerulonephritis, Nephrotic & Nephritic Syndromes",
    icdCode: "N05.9",
    rotation: "internal-medicine",
    category: "Renal / Glomerular Disease",
    definition:
      "Glomerular disease manifests as two main syndromes. Nephritic syndrome: hematuria (dysmorphic RBCs, RBC casts), hypertension, proteinuria (< 3.5 g/day), oliguria, azotemia — inflammation/proliferation. Nephrotic syndrome: massive proteinuria (> 3.5 g/day), hypoalbuminemia (< 3 g/dL), edema, hyperlipidemia, lipiduria — podocyte damage. Major nephritic causes: IgA nephropathy (#1 worldwide), post-infectious GN (post-strep — MPGN, subepithelial humps), anti-GBM disease (Goodpasture's), ANCA vasculitis (GPA, MPA), lupus nephritis. Major nephrotic causes: focal segmental glomerulosclerosis (FSGS — most common in Black adults in US), membranous nephropathy (most common in white adults — phospholipase A2 receptor antibody), minimal change disease (MCD — most common in children; steroid-responsive), diabetic nephropathy (#1 cause of ESRD worldwide).",
    diagnosticCriteria:
      "UA: nephritic — hematuria + proteinuria + RBC casts (pathognomonic for GN); nephrotic — oval fat bodies, fatty casts, lipiduria, heavy proteinuria. 24-hr urine protein OR spot urine PCR. Serum: BMP, albumin, lipids, CBC. Complement: C3/C4 (low in post-infectious GN, lupus, MPGN, cryoglobulinemia; normal in IgA nephro, anti-GBM, ANCA). ANCA: c-ANCA (PR3) = GPA; p-ANCA (MPO) = MPA/EGPA. Anti-GBM antibodies: Goodpasture's. ANA/anti-dsDNA: lupus. Renal biopsy: definitive diagnosis for most glomerular diseases (not needed if post-infectious GN resolving, diabetic nephropathy with typical presentation, or MCD in children).",
    presentation: {
      chiefComplaint: [
        "\"I had a strep throat 2 weeks ago and now my urine is brown and my face is puffy\"",
        "\"My urine is foamy, my legs are massively swollen, and my labs show low protein\"",
        "\"I have blood in my urine after every upper respiratory infection\"",
      ],
      associatedSymptoms: [
        "Post-infectious GN: 1–3 weeks after GAS pharyngitis (or 3–6 weeks after GAS skin infection); hematuria ('coca-cola/tea-colored' urine), edema (periorbital, dependent), HTN; low C3, normal C4; granular 'lumpy-bumpy' IF pattern",
        "IgA nephropathy (Berger's disease): synpharyngitic hematuria (concurrent with URTI — NO lag); most common GN worldwide; IgA deposits in mesangium",
        "Goodpasture's syndrome: anti-GBM antibodies → glomerulonephritis + pulmonary hemorrhage (hemoptysis); linear IgG IF pattern",
        "Minimal change disease: sudden-onset nephrotic syndrome in a child; responds to steroids; electron microscopy — effacement of foot processes",
        "Membranous nephropathy: insidious nephrotic syndrome in adult; 'spike and dome' pattern on EM; 25% spontaneously remit; anti-PLA2R antibody",
        "FSGS: nephrotic syndrome, hypertension, progressive CKD; associated with HIV, heroin, obesity, sickle cell; poor prognosis",
      ],
      demographics:
        "IgA nephropathy: 20–30s, male predominance, worldwide most common primary GN. FSGS: Black Americans >> white; HIV nephropathy (HIVAN) — FSGS pattern. Minimal change disease: children 2–6 years, adults with NSAIDs/lymphoma. Lupus nephritis: premenopausal women — full house IF ('full house' = IgG, IgA, IgM, C3, C4, C1q all positive).",
    },
    distinguishingFeatures:
      "Nephritic vs. nephrotic: RBC casts (nephritic only — pathognomonic for GN); oval fat bodies/fatty casts (nephrotic). Complement levels: low C3 + low C4 = classical pathway activation (lupus, cryoglobulinemia); low C3 + normal C4 = alternative pathway (post-infectious GN, MPGN); normal complement = IgA, anti-GBM, ANCA vasculitis. Pulmonary-renal syndromes: Goodpasture's (anti-GBM), ANCA vasculitis (GPA/MPA), SLE, Henoch-Schönlein purpura.",
    redFlags: [
      "Rapidly progressive GN (RPGN): crescent formation on biopsy → aggressive immunosuppression (pulse steroids + cyclophosphamide) ± plasmapheresis (anti-GBM, ANCA)",
      "Goodpasture's: pulmonary hemorrhage → urgent plasmapheresis + steroids + cyclophosphamide",
      "Nephrotic syndrome + renal vein thrombosis (membranous): flank pain + hematuria + sudden loss of renal function → anticoagulation",
      "FSGS in HIV → HAART alone can improve HIV-associated nephropathy (HIVAN)",
    ],
    mnemonics: [
      {
        name: "Complement in GN",
        content:
          "LOW C3 + LOW C4 (Classical pathway):\n  Lupus nephritis, Cryoglobulinemia, MPGN (type I, III)\nLOW C3 + NORMAL C4 (Alternative pathway):\n  Post-infectious GN (low C3, normal C4), MPGN type II (dense deposit disease)\nNORMAL COMPLEMENT:\n  IgA nephropathy, anti-GBM (Goodpasture's), ANCA vasculitis (GPA/MPA), MCD, FSGS, membranous",
      },
    ],
    pimpingQuestions: [
      "What urine finding is pathognomonic for glomerulonephritis?",
      "How do complement levels help differentiate glomerular diseases?",
      "What is the most common GN worldwide and how does it differ from post-infectious GN in timing?",
      "What is Goodpasture's syndrome and how is it treated?",
      "What is the most common cause of nephrotic syndrome in children vs. adults?",
    ],
  },
  {
    id: "im-renal-urologic",
    name: "Pyelonephritis, Nephrolithiasis, PKD & Renal Neoplasms",
    icdCode: "N10",
    rotation: "internal-medicine",
    category: "Renal / Urologic",
    definition:
      "Pyelonephritis: ascending bacterial infection from bladder → ureter → renal pelvis and parenchyma. Most common pathogen: E. coli (80%); also Klebsiella, Proteus, Enterococcus. Complicated if: pregnancy, male, anatomic abnormality, catheter, immunocompromised, obstruction. Nephrolithiasis: calcium oxalate most common (80%). Polycystic kidney disease (PKD): ADPKD — autosomal dominant (PKD1, PKD2) — most common inherited kidney disorder; bilateral renal cysts + extrarenal manifestations. Renal cell carcinoma (RCC): most common primary renal malignancy; clear cell (75%), parenchymal origin; associated with VHL syndrome; paraneoplastic syndromes common.",
    diagnosticCriteria:
      "Pyelonephritis: UA (pyuria, bacteriuria, WBC casts — specific for renal parenchymal infection), urine culture, blood cultures (bacteremic in 20–30%). CT abdomen/pelvis: perinephric stranding, renal enlargement, abscess. Nephrolithiasis: non-contrast CT (NCCT) — gold standard; UA: hematuria; urine pH: acidic = uric acid; basic = struvite. PKD: US or CT — bilateral enlarged kidneys with multiple cysts; renal MRI for intracranial aneurysm screening. RCC: CT abdomen (enhancing renal mass + central scar); urine cytology (negative in RCC); staging CT chest; needle biopsy if diagnosis uncertain.",
    presentation: {
      chiefComplaint: [
        "\"I have fever, chills, back pain, and burning when I urinate\"",
        "\"I have a family history of PKD — my father had a kidney transplant at 55\"",
        "\"They found a mass in my kidney on an abdominal CT done for another reason\"",
      ],
      associatedSymptoms: [
        "Pyelonephritis: fever > 38.5°C, rigors, costovertebral angle (CVA) tenderness (flank pain), nausea/vomiting, dysuria — triad of fever + flank pain + CVA tenderness",
        "PKD: hypertension (most common extrarenal complication — from RAAS activation), hematuria, flank pain, UTIs, palpable bilateral flank masses, CKD progression; extrarenal: intracranial berry aneurysms (risk of SAH — screen with MRA), liver cysts (most common extrarenal cyst), mitral valve prolapse",
        "RCC classic triad (uncommon, late presentation — < 10%): hematuria + flank pain + palpable abdominal mass = gross disease; paraneoplastic: polycythemia (EPO), hypercalcemia (PTHrP), Stauffer syndrome (non-metastatic hepatic dysfunction), hypertension, Cushing's (ACTH); 'internist's tumor' — mimics many systemic diseases",
        "Nephrolithiasis: severe colicky flank to groin pain, hematuria, nausea (covered in previous IM entries)",
      ],
      demographics:
        "Pyelonephritis: young women >> men (ascending from UTI); elderly/immunocompromised — often atypical. PKD: 1 in 400–1,000; PKD1 (85%) — chromosome 16, more severe; PKD2 (15%) — chromosome 4, milder; ESRD by age 60 in PKD1. RCC: male 2:1; peak 60–70; risk factors: smoking, obesity, hypertension, VHL syndrome (bilateral/multifocal), tuberous sclerosis.",
    },
    distinguishingFeatures:
      "Pyelonephritis vs. uncomplicated UTI (cystitis): cystitis = lower tract symptoms (dysuria, frequency, urgency), NO systemic symptoms, NO flank pain; pyelo = systemic (fever, rigors) + upper tract signs (CVA tenderness). WBC casts in urine = pyelonephritis (renal origin). PKD vs. simple cysts: PKD — bilateral, multiple, progressive, familial, ADPKD; simple cysts — unilateral, benign, common incidental finding in elderly. RCC vs. transitional cell carcinoma (TCC): RCC = solid parenchymal mass (Bosniak IV cyst); TCC = urothelial, fills renal pelvis, hematuria, associated with smoking/aniline dyes/phenacetin.",
    redFlags: [
      "Pyelonephritis + obstruction (stone, mass) → urologic emergency — drainage before antibiotics adequate",
      "Perinephric abscess: failure to improve on antibiotics → CT abdomen → percutaneous drainage",
      "PKD + sudden severe headache → ruptured intracranial aneurysm → urgent CT head + neurosurgery",
      "RCC with IVC tumor thrombus → surgical resection still possible; radical nephrectomy",
    ],
    mnemonics: [
      {
        name: "RCC Paraneoplastic Syndromes",
        content:
          "Polycythemia (EPO excess → ↑ RBC)\nHypercalcemia (PTHrP → osteolytic)\nHypertension (renin from tumor)\nCushing's (ectopic ACTH)\nStauffer syndrome (non-metastatic hepatic dysfunction — reversible after nephrectomy)\n'PHCCS' — RCC loves to cause systemic effects\nRCC treatment: localized → nephrectomy; metastatic → sunitinib/pazopanib (VEGF-TKI), pembrolizumab (PD-1 inhibitor)",
      },
    ],
    pimpingQuestions: [
      "What urine finding is specific for pyelonephritis (vs. cystitis)?",
      "What are the extrarenal manifestations of ADPKD and which is most dangerous?",
      "What is Stauffer syndrome and which cancer causes it?",
      "What are the risk factors for RCC?",
      "How does PKD1 differ from PKD2 in terms of genetics and prognosis?",
    ],
  },
  {
    id: "im-urologic-cancers",
    name: "Prostate Cancer & Bladder Cancer",
    icdCode: "C61",
    rotation: "internal-medicine",
    category: "Renal / Urologic Neoplasms",
    definition:
      "Prostate cancer: most common cancer in men (excluding skin); second leading cause of cancer death in men. Adenocarcinoma (95%); arises in peripheral zone. Graded by Gleason score (1–10; score ≥ 7 = high grade). Staged TNM; PSA key biomarker. Androgen-dependent growth → ADT (androgen deprivation therapy) for advanced disease. Bladder cancer: transitional/urothelial carcinoma (> 90%); most common presentation: painless hematuria in smoker; risk factors: smoking (#1), aniline dyes, cyclophosphamide, chronic Schistosoma haematobium infection (squamous cell). Most present with superficial (non-muscle-invasive) disease.",
    diagnosticCriteria:
      "Prostate cancer: PSA (prostate-specific antigen) + DRE (digital rectal exam — posterior/lateral nodule, induration, asymmetry). USPSTF (2018): individualized decision for PSA screening in men 55–69; not recommended < 40 or ≥ 70. Prostate biopsy (TRUS or MRI-fusion): Gleason grade, # of cores positive. MRI prostate (mpMRI): PI-RADS scoring for biopsy guidance. Bone scan: if PSA > 20, Gleason ≥ 8, or metastatic symptoms. Bladder cancer: cystoscopy + biopsy (gold standard); UA: hematuria; urine cytology: positive for high-grade; CT urogram (upper tract evaluation). Staging: CT/MRI pelvis for muscle invasion.",
    presentation: {
      chiefComplaint: [
        "\"I'm a 68-year-old man with a rising PSA on my annual physical\"",
        "\"I have painless blood in my urine — I've smoked for 40 years\"",
        "\"I have back pain and was told my PSA is very high\"",
      ],
      associatedSymptoms: [
        "Prostate cancer: early = asymptomatic (PSA elevation); locally advanced: obstructive urinary symptoms (similar to BPH — nocturia, weak stream, hesitancy); metastatic: bone pain (osteoblastic — lumbar spine most common), pathologic fractures, cord compression, weight loss, fatigue; DRE: rock-hard, fixed, nodular posterior gland",
        "Bladder cancer: painless hematuria (gross, intermittent — 'clue sign': painless, gross, intermittent); irritative LUTS (frequency, urgency — in CIS); flank pain (ureteral obstruction); pelvic pain (advanced)",
        "Bladder cancer staging: Ta/T1 (superficial, non-muscle-invasive — 75%); T2–T4 (muscle-invasive — 25%); N+/M+ = metastatic",
      ],
      demographics:
        "Prostate cancer: African American men — highest incidence + mortality; BRCA2 mutation increases risk; familial. Bladder cancer: men >> women (3:1); peak 60–70; smoking doubles risk; occupational exposures (aniline dyes, benzene, 4-aminobiphenyl). Schistosoma haematobium → squamous cell carcinoma of bladder (endemic areas — Africa, Middle East).",
    },
    distinguishingFeatures:
      "Prostate cancer bone mets: OSTEOBLASTIC (sclerotic, increased density on X-ray) — opposite of most cancers which are osteolytic; prostate = 'blastic.' PSA vs. BPH: BPH elevates PSA moderately (proportional to gland size); prostate cancer elevates PSA disproportionately (PSA velocity > 0.75 ng/mL/year or density > 0.15 suspicious). Bladder cancer painless hematuria vs. kidney stone (painful), glomerulonephritis (dysmorphic RBCs).",
    redFlags: [
      "Metastatic prostate cancer with cord compression → emergency: dexamethasone + urgent radiation or surgery",
      "Bladder cancer: all hematuria in adults → cystoscopy (no age cutoff for evaluation); do NOT attribute to anticoagulation alone",
      "Prostate cancer + rising PSA on ADT → castration-resistant prostate cancer (CRPC) → abiraterone, enzalutamide",
    ],
    mnemonics: [
      {
        name: "Prostate vs. Bladder Cancer",
        content:
          "Prostate: Painless, posterior zone, PSA, osteoBLASTic mets, ADT for advanced\nBladder: Painless hematuria, transitional cell, smoking #1 RF, cystoscopy diagnosis\nBladder superficial (non-invasive): intravesical BCG or chemotherapy\nBladder invasive (muscle): radical cystectomy + cisplatin-based chemo\nGleason grade: 3+3=6 (low risk) → 4+4=8 (high risk) → 5+5=10 (highest)",
      },
    ],
    pimpingQuestions: [
      "What are the risk factors for bladder cancer and what type of metastases does prostate cancer cause?",
      "What is the PSA screening recommendation per USPSTF?",
      "What is the management of non-muscle-invasive bladder cancer?",
      "What is castration-resistant prostate cancer (CRPC)?",
      "What organism is associated with squamous cell carcinoma of the bladder?",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 6 — NEUROLOGY ADDITIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "im-meningitis-encephalitis",
    name: "Meningitis & Encephalitis",
    icdCode: "G03.9",
    rotation: "internal-medicine",
    category: "Neurology / Infectious",
    definition:
      "Meningitis: inflammation of the meninges (leptomeninges — pia + arachnoid). Causes: bacterial (most dangerous — S. pneumoniae #1 in adults, N. meningitidis in young adults/teens, Listeria in elderly/immunocompromised/neonates, GBS in neonates), viral (most common overall — enteroviruses #1, HSV-2 in adults), fungal (Cryptococcus — immunocompromised), TB. Encephalitis: inflammation of brain parenchyma — altered consciousness + focal deficits. HSV-1 is the most common and treatable cause of sporadic encephalitis. West Nile virus: arborviral, flaccid paralysis, macular rash.",
    diagnosticCriteria:
      "LP (lumbar puncture): cornerstone of diagnosis. Bacterial: cloudy CSF, WBC > 1000 (PMN predominant), protein > 100, glucose < 45 (CSF:serum ratio < 0.6), + Gram stain (60–90%), + culture. Viral: clear CSF, WBC 10–500 (lymphocytic), protein mildly elevated, glucose normal. Fungal (Cryptococcal): India ink (50–80%), cryptococcal antigen (> 90% sensitive), culture. CT head BEFORE LP if: papilledema, focal neurologic deficit, immunocompromised, new seizure, altered consciousness — to rule out herniation risk. Blood cultures × 2 before antibiotics if LP delayed. HSV encephalitis: MRI temporal lobe changes + CSF PCR for HSV (most sensitive).",
    presentation: {
      chiefComplaint: [
        "\"My roommate has the worst headache of his life, stiff neck, and fever\"",
        "\"She was confused and seizing — she had a fever and her neck was stiff\"",
        "\"I have neck stiffness, headache, and light hurts my eyes\"",
      ],
      associatedSymptoms: [
        "Classic triad of bacterial meningitis: fever + headache + nuchal rigidity (only 44% have all 3 — treat empirically if any 2)",
        "Photophobia, phonophobia",
        "Kernig's sign: leg pain/resistance when knee extended with hip flexed at 90°",
        "Brudzinski's sign: involuntary hip/knee flexion with passive neck flexion",
        "Meningococcemia (N. meningitidis): petechial/purpuric rash (non-blanching) → rapidly progressing to DIC + Waterhouse-Friderichsen syndrome",
        "Encephalitis: altered consciousness, personality change, seizures, focal deficits; HSV1 — temporal lobe predilection → olfactory hallucinations, memory loss, aphasia",
      ],
      demographics:
        "S. pneumoniae: adults and elderly, post-splenectomy, asplenia, cochlear implants. N. meningitidis: college freshmen (dorms), military recruits, complement deficiency (C5–C9) — vaccine-preventable. Listeria: age > 50, immunocompromised, pregnancy, alcoholism — covers with ampicillin. Cryptococcal meningitis: HIV with CD4 < 100 — headache + elevated ICP, 'bobblehead doll' opening pressure > 200 mmHg.",
    },
    distinguishingFeatures:
      "Bacterial vs. viral meningitis CSF: bacterial = cloudy, PMN dominant, high protein, LOW glucose; viral = clear, lymphocytic, slightly elevated protein, NORMAL glucose. HSV encephalitis: temporal lobe involvement on MRI — do NOT wait for PCR results → start acyclovir empirically. 'Thunderclap' headache (worst of life, instantaneous) → SAH until proven otherwise → CT head first (before LP).",
    redFlags: [
      "Do NOT delay antibiotics for LP — if CT needed first, draw blood cultures and give antibiotics before CT",
      "Meningococcal purpuric rash → immediately IV penicillin G + ICU; close contact prophylaxis with rifampin or ciprofloxacin",
      "Empiric bacterial meningitis treatment: ceftriaxone + vancomycin + dexamethasone (before first dose of antibiotics — reduces inflammation); add ampicillin if Listeria risk",
      "HSV encephalitis: empiric IV acyclovir if encephalitis suspected — fatal without treatment",
    ],
    mnemonics: [
      {
        name: "Bacterial Meningitis Empiric Tx by Age",
        content:
          "Neonates (< 1 mo): Ampicillin + cefotaxime (GBS, E. coli, Listeria)\n1–23 mo: Ceftriaxone + vancomycin (S. pneumo, N. meningitidis)\n2–50 yrs: Ceftriaxone + vancomycin\n> 50 yrs/immunocomp: Ceftriaxone + vancomycin + AMPICILLIN (Listeria coverage)\nAlways add: Dexamethasone (0.15 mg/kg q6h × 4 days — before or with 1st abx dose)\nHSV encephalitis → IV Acyclovir 10 mg/kg q8h",
      },
    ],
    pimpingQuestions: [
      "What are Kernig's and Brudzinski's signs?",
      "What CSF findings differentiate bacterial from viral meningitis?",
      "Which organisms require ampicillin to be added to the empiric regimen and why?",
      "What is the role of dexamethasone in bacterial meningitis management?",
      "What is the most common treatable cause of sporadic encephalitis and how is it diagnosed?",
    ],
  },
  {
    id: "im-delirium-dementia",
    name: "Delirium & Dementia",
    icdCode: "F05",
    rotation: "internal-medicine",
    category: "Neurology / Cognitive Disorders",
    definition:
      "Delirium: acute, fluctuating disturbance in attention and cognition — superimposed on a baseline; always has an underlying medical cause; reversible. Hyperactive delirium: agitation, hallucinations (visual most common). Hypoactive delirium: lethargy, withdrawal — more common, often missed; worse prognosis. Dementia (Major Neurocognitive Disorder): chronic, progressive, insidious cognitive decline across ≥ 2 domains; no clouding of consciousness (until late). Alzheimer's disease accounts for 60–70% of dementia. Other types: vascular, Lewy body (LBD), frontotemporal (FTD).",
    diagnosticCriteria:
      "Delirium: CAM (Confusion Assessment Method) — gold standard bedside tool: (1) acute onset + fluctuating course, (2) inattention, (3) disorganized thinking or (4) altered LOC — positive if 1+2 + (3 or 4). Workup for delirium etiology: CBC, CMP, UA, blood cultures, CXR, ABG, TSH, B12, medication review (Beers criteria drugs), CT head if falls/trauma, LP if fever/meningismus. Dementia: cognitive screening (MoCA, MMSE), neuropsychological testing; lab workup to exclude reversible causes (DEMENTIA mnemonic); MRI brain (structural); PET amyloid or CSF biomarkers (Aβ42, tau) for AD.",
    presentation: {
      chiefComplaint: [
        "\"My 80-year-old father had hip surgery and tonight he's trying to pull out his IV and doesn't know where he is\"",
        "\"My mother has been slowly forgetting things for 3 years — now she can't manage her finances\"",
        "\"This patient was fine this morning but now he's confused and picking at imaginary things\"",
      ],
      associatedSymptoms: [
        "Delirium: acute onset (hours to days), fluctuating, inattention (can't follow commands, distractible), hallucinations (visual), sleep-wake reversal, autonomic instability",
        "Delirium common precipitants (MOVE IT): Medications (opioids, benzos, anticholinergics), Oxygen (hypoxia), Volume (dehydration, sepsis), Electrolytes (Na+, glucose, Ca2+), Infection, Trauma (surgery, falls)",
        "Alzheimer's: short-term memory loss (can't learn new info), word-finding difficulty, disorientation; preserved remote memory until late; gradual progression over years",
        "Lewy Body Dementia (LBD): cognitive fluctuation + visual hallucinations (complex, vivid) + parkinsonism + REM sleep behavior disorder (acting out dreams) — exquisitely sensitive to antipsychotics (severe neuroleptic sensitivity reactions)",
        "Frontotemporal dementia (FTD): personality/behavioral changes FIRST (disinhibition, apathy, loss of empathy), before memory — early onset (50s–60s)",
      ],
      demographics:
        "Delirium: 15–50% of hospitalized elderly; independent predictor of mortality, longer LOS, institutionalization. Risk factors: age > 65, dementia baseline, sensory impairment, immobility, dehydration, polypharmacy. LBD: Lewy body alpha-synuclein inclusions — crucial to recognize because antipsychotics (especially haloperidol) are DANGEROUS → severe neuroleptic sensitivity reaction, worsening parkinsonism, death.",
    },
    distinguishingFeatures:
      "Delirium vs. dementia: key difference — ACUITY and ATTENTION. Delirium = acute, fluctuating, attention impaired; dementia = insidious, progressive, attention relatively preserved until late. Delirium vs. psychiatric: delirium has organic cause, altered attention; psychosis has intact attention, gradual onset. LBD vs. Parkinson's dementia (PDD): LBD — dementia within 1 year of parkinsonism; PDD — Parkinson's motor symptoms ≥ 1 year before dementia.",
    redFlags: [
      "LBD: AVOID antipsychotics (haloperidol, olanzapine) — severe neuroleptic sensitivity reaction; use quetiapine or clonazepam for hallucinations if needed",
      "Delirium + fever + rigidity + autonomic instability → neuroleptic malignant syndrome (NMS) or serotonin syndrome → stop offending agent",
      "Rapidly progressive dementia (weeks) → CJD, autoimmune encephalitis (anti-NMDAR — young women, ovarian teratoma), paraneoplastic, or infectious",
    ],
    mnemonics: [
      {
        name: "Delirium Causes: MOVE IT",
        content:
          "M — Medications (opioids, benzos, anticholinergics, steroids)\nO — Oxygen/Organ failure (hypoxia, liver, renal)\nV — Volume/Vascular (dehydration, stroke, MI)\nE — Electrolytes (hypoNa, hypoCa, hypoglycemia)\nI — Infection (UTI, pneumonia, sepsis)\nT — Trauma/Toxins (surgery, alcohol withdrawal, CO poisoning)",
      },
      {
        name: "CAM Criteria for Delirium",
        content:
          "REQUIRED for delirium diagnosis:\n1. Acute onset + Fluctuating course AND\n2. Inattention (distractible, can't follow serial commands)\nPLUS at least one of:\n3. Disorganized thinking (rambling, incoherent)\n4. Altered level of consciousness (lethargic or agitated)",
      },
    ],
    pimpingQuestions: [
      "What are the CAM criteria for diagnosing delirium?",
      "What is the key clinical distinction between delirium and dementia?",
      "Why are antipsychotics dangerous in Lewy Body Dementia?",
      "What is the mnemonic for common causes of delirium?",
      "How does frontotemporal dementia present differently from Alzheimer's disease?",
    ],
  },
  {
    id: "im-headache-disorders",
    name: "Headache Disorders (Migraine, Cluster, Tension)",
    icdCode: "G43.909",
    rotation: "internal-medicine",
    category: "Neurology / Headache",
    definition:
      "Primary headaches have no underlying structural cause. Three main types: Migraine: pulsating, unilateral, moderate-severe, associated with nausea/photo/phonophobia, worsened by activity — with or without aura; pathophysiology: cortical spreading depression + trigeminovascular activation. Cluster: unilateral severe periorbital/retro-orbital pain + ipsilateral autonomic features (lacrimation, rhinorrhea, ptosis, miosis, conjunctival injection) — occur in clusters; men > women (3:1); 'alarm clock' headaches. Tension-type: bilateral pressing/tightening pain, mild-moderate, NOT worsened by activity, no significant nausea — most common primary headache overall.",
    diagnosticCriteria:
      "Clinical diagnosis using IHS (International Headache Society) criteria. Migraine without aura (POUND): Pulsating, 4–72 hr duration, Unilateral, Nausea/vomiting, Disabling. Migraine with aura: reversible focal neurologic symptoms (visual zigzag/scintillating scotoma, sensory, speech) preceding headache by 20–60 minutes. Cluster: strictly unilateral, 15–180 min, autonomic features, agitation (paces — vs. migraine prefers dark/quiet room). Tension: bilateral, pressing/band-like, no autonomic features, no vomiting. Imaging: NOT needed for typical primary headache; indicated for red flags.",
    presentation: {
      chiefComplaint: [
        "\"I get throbbing headaches on one side with nausea that last all day\"",
        "\"I wake up at 2 AM with excruciating eye pain and tears — it's been happening every night for 3 weeks\"",
        "\"I have a constant tight band around my head almost every day\"",
      ],
      associatedSymptoms: [
        "Migraine: prodrome (yawning, mood change, food craving 24 hrs before), aura (20–60 min — scintillating scotoma, zigzag 'fortification spectrum', hemianopia, sensory, aphasia), headache phase (4–72 hr), postdrome (fatigue, fog)",
        "Cluster: agitation (pacing the room), ipsilateral lacrimation, conjunctival injection, nasal congestion/rhinorrhea, ptosis, miosis, facial sweating; occurs in seasonal 'clusters' lasting weeks",
        "Tension: bilateral band-like pressure, mild-moderate, NO nausea/vomiting, NOT aggravated by routine activity; may have photophobia OR phonophobia (not both)",
        "Medication overuse headache (MOH/rebound): > 10–15 days/month of analgesic/triptan use → chronic daily headache",
      ],
      demographics:
        "Migraine: 12% of US population; women 3:1 after puberty (hormonal triggers); family history strong; triggers: stress, menstruation, sleep disruption, certain foods (tyramine, alcohol, MSG), bright lights. Cluster: men >> women (3–4:1); often smokers; most severe primary headache; 'suicidal headache.' Tension: most common headache overall (90% of adults have at some point).",
    },
    distinguishingFeatures:
      "Migraine vs. cluster: migraine — wants to be still in dark quiet room; cluster — PACES, agitated. Cluster autonomic features are IPSILATERAL (same side as pain). New thunderclap headache (worst of life, instantaneous peak) → SAH until proven otherwise → CT head STAT. Meningitis headache: subacute onset + fever + nuchal rigidity. GCA headache: age > 50 + temporal tenderness + elevated ESR.",
    redFlags: [
      "SNOOP4 red flags → imaging required: Systemic (fever, weight loss), Neurologic deficits, Onset sudden (thunderclap), Older (> 50 new headache), Positional, Papilledema, Progressive worsening, Precipitated by Valsalva",
      "Thunderclap headache → CT head → LP (xanthochromia if > 2 hrs) → CTA for aneurysm",
      "New headache in HIV patient → cryptococcal meningitis, CNS toxoplasmosis",
      "Medication overuse headache → stop offending medication (bridge with naproxen or prednisone taper)",
    ],
    mnemonics: [
      {
        name: "Migraine Treatment Ladder",
        content:
          "MILD-MODERATE: NSAIDs (ibuprofen, naproxen, ketorolac), acetaminophen, combination (Excedrin = ASA+APAP+caffeine)\nMODERATE-SEVERE (triptans — 5-HT1B/1D agonists): sumatriptan, rizatriptan (fastest onset PO)\n  Contraindicated in: CAD, uncontrolled HTN, basilar/hemiplegic migraine, within 24 hr of ergotamine\nSEVERE/ED: IV metoclopramide + IV diphenhydramine ± IV ketorolac, IV prochlorperazine\nPREVENTION (≥ 4 migraines/month or disabling): propranolol, topiramate, amitriptyline, valproate, CGRP antagonists (erenumab — 'mabs')\nCLUSTER acute: 100% O2 at 12 L/min × 15 min (first-line!), sumatriptan SC\nCLUSTER prevention: verapamil (first-line), lithium, steroids (bridge)",
      },
    ],
    pimpingQuestions: [
      "What is the acute treatment for cluster headache?",
      "What are the SNOOP4 red flags that require imaging in a headache patient?",
      "How does patient behavior differ between migraine and cluster headache?",
      "What is medication overuse headache and how is it managed?",
      "What is the mechanism of triptans and their contraindications?",
    ],
  },
  {
    id: "im-movement-disorders",
    name: "Parkinson's Disease, Essential Tremor & Huntington Disease",
    icdCode: "G20",
    rotation: "internal-medicine",
    category: "Neurology / Movement Disorders",
    definition:
      "Parkinson's disease (PD): progressive neurodegenerative disorder from loss of dopaminergic neurons in the substantia nigra (pars compacta) → dopamine deficiency in striatum. Pathologic hallmark: Lewy bodies (alpha-synuclein inclusions). Cardinal motor features: TRAP. Essential tremor (ET): most common movement disorder overall; postural/action tremor of hands, worse with movement/intention; improves with alcohol; first-line treatment: propranolol or primidone. Huntington disease (HD): autosomal dominant CAG trinucleotide repeat expansion in HTT gene on chromosome 4 — anticipation (earlier onset in successive generations); triad of chorea + cognitive decline + psychiatric symptoms; no disease-modifying treatment.",
    diagnosticCriteria:
      "Parkinson's: Clinical diagnosis. TRAP: Tremor (resting, pill-rolling, 4–6 Hz — decreases with intentional movement), Rigidity (cogwheel/lead pipe), Akinesia/bradykinesia, Postural instability (late feature — NOT early). Asymmetric onset. UPDRS (Unified Parkinson's Disease Rating Scale) for staging. Dopamine transporter (DaT) SPECT scan: reduced uptake in striatum — differentiates PD from ET (normal DaT in ET). MRI brain: normal in PD (rules out structural causes). Essential tremor: action/postural tremor, bilateral, improves with alcohol, NO resting tremor (distinguishes from PD). Huntington: genetic testing (CAG repeats > 36 = affected, > 40 = full penetrance); MRI — caudate nucleus atrophy ('boxcar' ventricles).",
    presentation: {
      chiefComplaint: [
        "\"My hand shakes when it's resting but gets better when I pick something up\"",
        "\"I walk with small shuffling steps and almost fell getting out of the car\"",
        "\"My father has jerky movements, is forgetting things, and his personality has changed — his father had the same thing\"",
      ],
      associatedSymptoms: [
        "PD motor: resting pill-rolling tremor (4–6 Hz), cogwheel rigidity, bradykinesia (slow movement, micrographia, hypomimia 'masked facies'), festinating gait (shuffling, forward-stooped), freezing of gait, postural instability → falls",
        "PD non-motor (often predate motor): REM sleep behavior disorder (acts out dreams), anosmia (loss of smell), constipation, depression, orthostatic hypotension, cognitive decline (Parkinson's dementia — > 1 year after motor onset)",
        "ET: bilateral postural/kinetic tremor of hands, head (titubation), voice; NO rest tremor, NO rigidity, NO bradykinesia; family history in 50%; improves with alcohol",
        "HD: chorea (dance-like involuntary writhing movements), psychiatric (depression, irritability, psychosis, OCD), cognitive decline → dementia; onset 30–50 years; each generation has earlier onset (anticipation)",
      ],
      demographics:
        "PD: second most common neurodegenerative disorder; affects 1% > 60 years. Substantia nigra loses 60–80% of dopamine neurons before symptoms appear. HD: 1 in 10,000; autosomal dominant (100% penetrance if > 40 CAG repeats); testing requires genetic counseling.",
    },
    distinguishingFeatures:
      "PD resting tremor vs. ET action tremor: PD tremor is most prominent at REST, improves with intentional movement; ET tremor is worst with INTENTIONAL/POSTURAL use, absent at rest. DaT scan differentiates: PD = reduced; ET = normal. PD vs. Parkinson's plus syndromes (MSA, PSP, LBD): poor levodopa response, early falls (PSP), ataxia/autonomic failure (MSA). Chorea in HD vs. Sydenham's (rheumatic fever) vs. drug-induced: HD = genetic, progressive, onset 30–50; Sydenham's = post-GAS, children, self-limited.",
    redFlags: [
      "PD + neuroleptic antipsychotics (haloperidol, metoclopramide) → worsen Parkinsonism → avoid; use quetiapine/clozapine if needed",
      "HD genetic testing: requires mandatory genetic counseling (presymptomatic testing — 50% risk to offspring)",
      "PD aspiration pneumonia — most common cause of death in advanced PD (dysphagia from bradykinesia)",
      "Parkinson's hypotension from dopaminergic drugs → midodrine, fludrocortisone, raise HOB",
    ],
    mnemonics: [
      {
        name: "PD Cardinal Features: TRAP",
        content:
          "T — Tremor (resting, pill-rolling, 4–6 Hz — decreases with movement)\nR — Rigidity (cogwheel or lead pipe)\nA — Akinesia/Bradykinesia (slow movements, micrographia, hypomimia)\nP — Postural instability (late feature → falls)\nOnset: asymmetric; levodopa/carbidopa is gold standard treatment\nLevodopa side effects: dyskinesias (on-off fluctuations), hallucinations, nausea",
      },
      {
        name: "PD Treatment: LADS",
        content:
          "L — Levodopa/Carbidopa: gold standard; carbidopa prevents peripheral conversion of L-DOPA → nausea/hypotension\nA — Amantadine: reduces dyskinesias; mild dopaminergic/anticholinergic\nD — Dopamine agonists (pramipexole, ropinirole, rotigotine): early PD, young patients; impulse control disorders\nS — Surgery: DBS (deep brain stimulation) — subthalamic nucleus; advanced PD with motor fluctuations\nMAOB inhibitors (selegiline, rasagiline): neuroprotective(?), mild symptomatic benefit",
      },
    ],
    pimpingQuestions: [
      "What are the 4 cardinal motor features of Parkinson's disease?",
      "How does Parkinson's resting tremor differ from essential tremor?",
      "What is the genetic basis of Huntington disease and what is anticipation?",
      "What is the gold-standard pharmacological treatment for Parkinson's disease?",
      "Which antipsychotics are safe vs. dangerous to use in Parkinson's disease?",
    ],
  },
  {
    id: "im-multiple-sclerosis",
    name: "Multiple Sclerosis (MS)",
    icdCode: "G35",
    rotation: "internal-medicine",
    category: "Neurology / Demyelinating Disease",
    definition:
      "A chronic autoimmune, demyelinating disease of the CNS (brain, spinal cord, optic nerves) — most common demyelinating disease in young adults. Pathology: periventricular plaques of demyelination (loss of myelin → slowed conduction). Course types: relapsing-remitting MS (RRMS, 85%) — episodes of symptoms followed by full or partial recovery; secondary progressive (SPMS); primary progressive (PPMS — no relapses, gradual worsening). T2 lesions on MRI must be separated in time AND space.",
    diagnosticCriteria:
      "McDonald Criteria (2017): MRI brain/spine (gold standard imaging) — T2 hyperintense periventricular, juxtacortical, infratentorial, or spinal cord lesions; dissemination in space (DIS) and time (DIT). Classic MRI: periventricular 'Dawson's fingers' (lesions perpendicular to corpus callosum on sagittal T2). LP/CSF: oligoclonal bands (OCBs, > 2 bands not in serum — 85–95% of MS patients); elevated IgG index. Evoked potentials (VEP): prolonged latency — detects subclinical optic nerve demyelination. MRI with gadolinium: enhancing lesion = active/new inflammation.",
    presentation: {
      chiefComplaint: [
        "\"I woke up with blurry vision in one eye and it's painful when I move it\"",
        "\"I have weakness in my legs that came on over days and then partly improved\"",
        "\"Every time I take a hot shower my vision gets blurry and I feel weak\"",
      ],
      associatedSymptoms: [
        "Optic neuritis: unilateral painful vision loss (retro-orbital pain worse with eye movement), afferent pupillary defect (Marcus-Gunn pupil), color desaturation — most common initial presentation in young women",
        "Internuclear ophthalmoplegia (INO): medial longitudinal fasciculus lesion → ipsilateral adduction palsy + contralateral nystagmus — bilateral INO in young adult = MS until proven otherwise",
        "Transverse myelitis: bilateral leg weakness/numbness, bowel/bladder dysfunction, sensory level",
        "Lhermitte's sign: electric shock sensation down spine with neck flexion (cervical cord demyelination)",
        "Uhthoff's phenomenon: worsening of symptoms with heat (hot shower, fever) — heat slows conduction in demyelinated axons",
        "Trigeminal neuralgia (young person), fatigue (most common symptom), cognitive impairment, depression",
      ],
      demographics:
        "Peak onset 20–40 years. Women:men 2–3:1. Higher prevalence: further from equator (vitamin D hypothesis). Northern European. HLA-DR2 (HLA-DRB1*15:01) genetic association. Pregnancy: relapse rate decreases in 3rd trimester; rebounds postpartum. Epstein-Barr virus prior infection associated.",
    },
    distinguishingFeatures:
      "MS vs. neuromyelitis optica (NMO/Devic): NMO = aquaporin-4 IgG antibody, longitudinally extensive transverse myelitis (≥ 3 vertebral segments), severe bilateral optic neuritis — different disease, different treatment (steroids + immunosuppression; natalizumab/fingolimod worsen NMO). MS vs. CNS vasculitis: vasculitis has gadolinium-enhancing lesions + CSF inflammatory but no OCBs typically. MS optic neuritis vs. NAION: NAION = anterior, painless, older patient with cardiovascular risk.",
    redFlags: [
      "MS relapse (acute exacerbation): high-dose IV methylprednisolone × 3–5 days → speeds recovery (does NOT change long-term prognosis)",
      "PPMS (progressive from onset): only ocrelizumab (anti-CD20) has proven benefit",
      "Natalizumab: risk of PML (progressive multifocal leukoencephalopathy — JC virus reactivation) → monitor JC virus antibody index",
      "Fingolimod: bradycardia/AV block at first dose → cardiac monitoring for 6 hours after first dose",
    ],
    mnemonics: [
      {
        name: "MS Unique Signs: LUNDI",
        content:
          "L — Lhermitte's sign (electric shock with neck flexion → cervical cord)\nU — Uhthoff's phenomenon (worsening with heat)\nN — Nystagmus + INO (internuclear ophthalmoplegia — MLF lesion)\nD — Dawson's fingers (periventricular T2 lesions perpendicular to corpus callosum)\nI — Internuclear ophthalmoplegia (bilateral = MS until proven otherwise)\nTreatment: Interferon-beta, glatiramer → older; Natalizumab, ocrelizumab, siponimod → newer",
      },
    ],
    pimpingQuestions: [
      "What is Uhthoff's phenomenon and what does it suggest?",
      "What is internuclear ophthalmoplegia (INO) and what lesion causes it?",
      "What is the significance of oligoclonal bands in CSF?",
      "What are Dawson's fingers on MRI?",
      "What serious infection risk is associated with natalizumab therapy?",
    ],
  },
  {
    id: "im-neuromuscular",
    name: "Guillain-Barré Syndrome & Myasthenia Gravis",
    icdCode: "G61.0",
    rotation: "internal-medicine",
    category: "Neurology / Neuromuscular Disease",
    definition:
      "Guillain-Barré syndrome (GBS): acute inflammatory demyelinating polyneuropathy (AIDP) — the most common cause of acute flaccid paralysis in developed countries. Post-infectious immune attack on peripheral nerve myelin. Most common trigger: Campylobacter jejuni (25–40%); also CMV, EBV, Zika, influenza vaccine (rare). Myasthenia gravis (MG): autoimmune NMJ disorder — acetylcholine receptor (AChR) antibodies block NMJ transmission → fatigable muscle weakness. Anti-MuSK antibodies (seronegative MG). Associated with thymoma (10–15%), thymic hyperplasia (70%).",
    diagnosticCriteria:
      "GBS: Clinical — ascending weakness + areflexia + autonomic dysfunction after antecedent illness. LP: albuminocytologic dissociation (elevated protein > 100 mg/dL with normal WBC < 10 — classic); may be normal in first week. EMG/NCS: demyelinating pattern (slowed conduction, prolonged F-waves). MRI spine: rule out cord compression. Anti-ganglioside antibodies (anti-GQ1b → Miller-Fisher variant: ataxia + ophthalmoplegia + areflexia). MG: acetylcholine receptor antibodies (AChR-Ab, 80–90% sensitivity); anti-MuSK (seronegative MG). Edrophonium (Tensilon) test: IV anticholinesterase → transient improvement in ptosis — positive confirms MG. EMG: decremental response at low-frequency stimulation. CT chest: thymoma screen.",
    presentation: {
      chiefComplaint: [
        "\"I had diarrhea 2 weeks ago and now I can't walk — my legs feel like rubber\"",
        "\"My eyelids are drooping by the end of the day and I have trouble chewing\"",
        "\"I'm getting progressively weaker from my legs upward since last week\"",
      ],
      associatedSymptoms: [
        "GBS: ascending symmetric weakness (legs → arms → respiratory muscles), areflexia, paresthesias (mild), back pain; autonomic instability (HR/BP fluctuations, urinary retention); peak at 2–4 weeks; respiratory failure requiring intubation in 30%",
        "Miller-Fisher syndrome (GBS variant): ophthalmoplegia + ataxia + areflexia (triad); anti-GQ1b positive; NO weakness",
        "MG: fatigable proximal muscle weakness (worse with repeated use/end of day); ptosis + diplopia (ocular MG — most common onset); dysphagia, dysphonia, facial weakness; respiratory failure = myasthenic crisis (triggered by infection, medications, stress)",
        "MG drugs that worsen: aminoglycosides, fluoroquinolones, beta-blockers, neuromuscular blockers, chloroquine, magnesium",
      ],
      demographics:
        "GBS: all ages; bimodal (young adults + elderly); annual incidence 1–2 per 100,000. MG: women < 40 (associated with autoimmune), men > 60 (often with thymoma). Neonatal MG: maternal AChR antibodies cross placenta → transient weakness in neonate.",
    },
    distinguishingFeatures:
      "GBS vs. transverse myelitis: GBS = flaccid (no upper motor neuron signs), areflexia, ascending; transverse myelitis = acute paraplegia with sensory level, bladder involvement, initial flaccid → spastic. GBS vs. botulism: both descending (botulism descends, GBS ascends — classic board distinction); botulism = toxin (canned food, wound, infant honey), fixed dilated pupils, NO sensory symptoms, normal CSF. MG vs. Lambert-Eaton (LEMS): LEMS = paraneoplastic (SCLC), proximal weakness IMPROVING with repeated activity (opposite of MG), decreased reflexes, autonomic dysfunction, anti-VGCC antibodies.",
    redFlags: [
      "GBS: monitor FVC q4–8h → intubate if FVC < 20 mL/kg or declining → ICU; treat with IVIG or plasmapheresis (equally effective, do NOT combine)",
      "GBS autonomic instability → continuous cardiac monitoring; avoid antihypertensives (paradoxical hypotension from autonomic lability)",
      "Myasthenic crisis: acute respiratory failure → plasmapheresis or IVIG + ChEI dose adjustment",
      "Cholinergic crisis (excess pyridostigmine): SLUDGE symptoms (salivation, lacrimation, urination, defecation, GI, emesis) + weakness → STOP pyridostigmine, atropine",
    ],
    mnemonics: [
      {
        name: "GBS vs. Botulism vs. MG vs. LEMS",
        content:
          "GBS: ASCENDING flaccid paralysis, areflexia, albuminocytologic dissociation; post-Campylobacter\nBotulism: DESCENDING paralysis, fixed dilated pupils, no sensory loss, normal CSF\nMG: fatigable weakness WORSE with repeated use (decremental); ptosis; AChR-Ab\nLEMS: weakness IMPROVES with repeated use (incremental); SCLC; anti-VGCC Ab",
      },
      {
        name: "MG Treatment: PITS",
        content:
          "P — Pyridostigmine (Mestinon) — acetylcholinesterase inhibitor; symptomatic only\nI — Immunosuppression (prednisone, azathioprine, mycophenolate)\nT — Thymectomy (for thymoma AND all generalized MG ≤ 60 yrs — improves outcomes)\nS — Swift intervention for crisis (IVIG or plasmapheresis)",
      },
    ],
    pimpingQuestions: [
      "What is albuminocytologic dissociation in GBS?",
      "When should intubation be considered in GBS and what FVC threshold guides this?",
      "How does Lambert-Eaton syndrome differ from myasthenia gravis?",
      "What distinguishes GBS from botulism in terms of direction of paralysis?",
      "What is myasthenic crisis and how is it treated?",
    ],
  },
  {
    id: "im-seizures-im",
    name: "Seizure Disorders & Status Epilepticus",
    icdCode: "G40.909",
    rotation: "internal-medicine",
    category: "Neurology / Seizure Disorders",
    definition:
      "Seizure: transient hypersynchronous neuronal discharge — focal (one hemisphere) or generalized (both). Epilepsy: ≥ 2 unprovoked seizures OR 1 unprovoked seizure with ≥ 60% recurrence risk. Provoked seizures (metabolic, toxic, febrile) are not epilepsy. Status epilepticus (SE): seizure lasting ≥ 5 minutes or repeated seizures without return to baseline — neurologic emergency with 20% mortality if untreated. In internal medicine, new-onset seizures in adults require workup for structural lesion, metabolic derangement, or toxin.",
    diagnosticCriteria:
      "First adult seizure workup: EEG, MRI brain (superior to CT for structural causes), CBC, CMP (glucose, Na+, Ca2+, Mg2+), toxicology screen, AED levels (if on medication), LP (if meningismus/fever). EEG: may show epileptiform discharges; normal EEG does NOT rule out epilepsy; prolonged EEG if seizures suspected but unwitnessed. MRI brain: rule out tumor, cortical dysplasia, cortical scarring, hippocampal sclerosis (temporal lobe epilepsy). Non-convulsive SE: suspected in unresponsive/altered consciousness without convulsions → EEG mandatory.",
    presentation: {
      chiefComplaint: [
        "\"My patient just had a witnessed grand mal seizure — never had one before\"",
        "\"The patient has been unresponsive for 10 minutes despite seeming to have stopped seizing\"",
        "\"She has hyponatremia and now she's having generalized convulsions\"",
      ],
      associatedSymptoms: [
        "Generalized tonic-clonic (GTC): tonic phase (apnea, stiffening) → clonic (rhythmic jerking) → postictal confusion/sleep; tongue bite (lateral), incontinence",
        "Focal impaired awareness: automatisms (lip smacking, picking), postictal confusion, temporal lobe most common",
        "Common inpatient precipitants: hyponatremia (most common electrolyte cause), hypoglycemia, drug withdrawal (alcohol, benzodiazepines), medication toxicity (TCAs, meperidine, isoniazid, bupropion), CNS infection/mass",
        "Non-convulsive SE: subtle — staring, eye deviation, automatisms, altered consciousness without obvious convulsions",
        "Todd's paralysis: focal weakness lasting minutes-hours after focal motor seizure — resolves spontaneously",
      ],
      demographics:
        "New seizures in adults: always requires brain imaging (MRI) + workup. Most common identifiable causes: alcohol withdrawal, metabolic (hypoNa, hypoglycemia), CNS tumor, head trauma, stroke (2nd most common cause in elderly), HIV/CNS infection. Alcohol withdrawal seizures: 6–48 hours after last drink; generalized; not epilepsy → treat acute episode with benzos; AEDs NOT needed if truly withdrawal-related.",
    },
    distinguishingFeatures:
      "Seizure vs. syncope: syncure = brief, rapid recovery (< 30 sec), triggers (postural, Valsalva), myoclonic jerks possible (convulsive syncope) but brief; seizure = prolonged, postictal confusion, lateral tongue bite, incontinence. Seizure vs. psychogenic non-epileptic attack (PNEA): PNEA = eye closure during event, pelvic thrusting, variable, prolonged without hypoxia, normal ictal EEG. Temporal lobe epilepsy: most common focal epilepsy; hippocampal sclerosis on MRI; aura (rising epigastric sensation, déjà vu, olfactory hallucinations).",
    redFlags: [
      "Status epilepticus (≥ 5 min or no return to baseline) → STAT benzodiazepine (lorazepam 0.1 mg/kg IV or IM midazolam) → fosphenytoin/levetiracetam/valproate IV → propofol/midazolam infusion",
      "Isoniazid toxicity seizures (INH-induced B6 depletion) → pyridoxine (B6) is the antidote — treat seizures AND give pyridoxine",
      "Hyponatremic seizures → 3% hypertonic saline 100 mL IV bolus × 1–2 doses → raise Na+ 4–6 mEq/L over 1–2 hours to stop seizures; then slow correction",
    ],
    mnemonics: [
      {
        name: "Status Epilepticus Protocol: 0-5-20-40",
        content:
          "0 min: Stabilize airway, IV access, check glucose (dextrose if hypoglycemic), vitals\n5 min: Benzodiazepine STAT\n  → Lorazepam 0.1 mg/kg IV (max 4 mg) OR IM midazolam 10 mg\n20 min: If still seizing → 2nd agent:\n  → Levetiracetam 60 mg/kg IV, OR Fosphenytoin 20 mg PE/kg IV, OR Valproate 40 mg/kg IV\n40 min: Refractory SE → 3rd agent:\n  → Propofol infusion OR Midazolam infusion OR Pentobarbital (continuous EEG monitoring required)",
      },
    ],
    pimpingQuestions: [
      "How long must a seizure last to define status epilepticus?",
      "What is the first-line treatment for status epilepticus?",
      "What is Todd's paralysis and how long does it last?",
      "What electrolyte abnormality most commonly causes seizures in hospitalized patients?",
      "What is the antidote for isoniazid-induced seizures?",
    ],
  },
  {
    id: "im-peripheral-neuro-bells",
    name: "Peripheral Neuropathies & Bell's Palsy",
    icdCode: "G62.9",
    rotation: "internal-medicine",
    category: "Neurology / Peripheral Nerve Disease",
    definition:
      "Peripheral neuropathy: dysfunction of peripheral nerves — classified by pattern (mononeuropathy, mononeuritis multiplex, polyneuropathy), fiber type (sensory, motor, autonomic), and pathology (axonal vs. demyelinating). Most common cause worldwide: diabetes mellitus (diabetic peripheral neuropathy — DPN). Other causes: alcohol, B12 deficiency, uremia (CKD), chemotherapy, HIV, hypothyroidism, Lyme disease, Guillain-Barré. Bell's palsy: idiopathic unilateral facial nerve (CN VII) palsy — most common cause of unilateral facial palsy; HSV-1 reactivation implicated; FOREHEAD INVOLVEMENT distinguishes peripheral from central CN VII palsy.",
    diagnosticCriteria:
      "Peripheral neuropathy: Clinical assessment — pattern of weakness/sensory loss, DTR changes; EMG/NCS: differentiates axonal (↓ amplitude) from demyelinating (↓ conduction velocity); lab workup (glucose/HbA1c, B12, TSH, CMP, SPEP, HIV, ANA, anti-ds-DNA, ANCA for vasculitis); skin punch biopsy: intraepidermal nerve fiber density (small fiber neuropathy). Bell's palsy: Clinical diagnosis — acute unilateral lower motor neuron CN VII palsy (ipsilateral forehead weakness = peripheral). MRI brain with gadolinium: indicated if atypical features, slow progression, or no recovery by 4 months. Lyme serology (endemic area). Exclude: parotid mass, trauma, Ramsay Hunt (ear vesicles), sarcoidosis.",
    presentation: {
      chiefComplaint: [
        "\"I woke up and the left side of my face won't move — I can't close my eye\"",
        "\"My feet feel like they're on fire and I have numbness up to my knees\"",
        "\"I have diabetes and my hands and feet are numb all the time\"",
      ],
      associatedSymptoms: [
        "Bell's palsy: sudden onset (hours), unilateral facial weakness (ALL muscles — forehead, eye, mouth), inability to close eye (lagophthalmos), eye tearing or dryness, hypersensitivity to sound (hyperacusis), taste disturbance (anterior 2/3 tongue — chorda tympani), post-auricular pain",
        "DPN: length-dependent, 'stocking-glove' pattern, burning/tingling/numbness of feet first, loss of vibration/proprioception (posterior column), diminished ankle reflexes, autonomic (orthostatic hypotension, gastroparesis, erectile dysfunction, bladder dysfunction)",
        "Alcoholic neuropathy: painful, sensory > motor, nutrition-related (B1, B12, folate)",
        "Mononeuritis multiplex: multiple separate nerve territories → vasculitis (PAN, DM), Lyme, sarcoidosis, leprosy",
      ],
      demographics:
        "Bell's palsy: all ages, peak 15–45; pregnant women and diabetics at higher risk; HSV-1 and HHV-7 implicated. DPN: affects 50% of diabetics after 20+ years; most common peripheral neuropathy in US.",
    },
    distinguishingFeatures:
      "Central (UMN) vs. peripheral (LMN) CN VII palsy: PERIPHERAL = forehead involved (Bell's, Ramsay Hunt, parotid mass, Lyme) because each hemisphere sends bilateral input to forehead; CENTRAL = forehead SPARED (stroke, brain tumor) — upper face has bilateral cortical representation. Key board point: stroke rarely causes isolated facial palsy without other deficits. Charcot-Marie-Tooth (CMT): hereditary demyelinating polyneuropathy — pes cavus, foot drop, distal muscle wasting, onion bulb demyelination.",
    redFlags: [
      "Bell's palsy: start prednisone within 72 hours (60 mg/day × 5 days + taper) + eye care (lubricating drops, eye patch at night to prevent corneal exposure)",
      "Add antiviral (valacyclovir): adjunctive — modest benefit for complete Bell's palsy",
      "No improvement in Bell's palsy by 4 months → MRI brain/parotid to rule out malignancy",
      "DPN falls risk → orthopedic footwear, Achilles tendon reflex absent → high-risk foot; regular podiatry",
    ],
    mnemonics: [
      {
        name: "Peripheral vs. Central CN VII Palsy",
        content:
          "PERIPHERAL (LMN) — FOREHEAD INVOLVED:\n  Bell's palsy, Ramsay Hunt (ear vesicles), Lyme (bilateral!), parotid mass\n  Treat Bell's: Prednisone (within 72 hr) + eye protection\nCENTRAL (UMN) — FOREHEAD SPARED:\n  Stroke, brain tumor, MS — FOREHEAD fine because bilateral cortical representation\nKey mnemonic: 'Stroke spares the forehead; Bell's bags the whole face'",
      },
    ],
    pimpingQuestions: [
      "How do you distinguish Bell's palsy (peripheral) from a central CN VII palsy?",
      "What is the treatment for Bell's palsy and what is the time window for steroids?",
      "What is the most common cause of peripheral neuropathy worldwide?",
      "What is mononeuritis multiplex and what causes it?",
      "How does axonal neuropathy differ from demyelinating on EMG/NCS?",
    ],
  },
  {
    id: "im-intracranial-concussion",
    name: "Intracranial Tumors, Concussion & Coma",
    icdCode: "C71.9",
    rotation: "internal-medicine",
    category: "Neurology / Structural and Traumatic",
    definition:
      "Intracranial tumors: primary (glioblastoma multiforme — GBM, most common malignant; meningioma — most common overall benign; acoustic neuroma/schwannoma; pituitary adenoma) or metastatic (most common overall — lung #1, breast, melanoma, colon, renal — 'Lung Lets Melanoma Come Recklessly'). Concussion: mild traumatic brain injury (mTBI) — temporary neurologic dysfunction from biomechanical force, no structural damage. Coma: unarousable unresponsiveness to stimuli; Glasgow Coma Scale (GCS) ≤ 8 = coma; causes are structural (bilateral cortical/brainstem lesions) or metabolic (AEIOU TIPS).",
    diagnosticCriteria:
      "Intracranial tumors: MRI brain with/without gadolinium (gold standard); PET scan; stereotactic biopsy (tissue diagnosis). GBM: butterfly pattern across corpus callosum, ring-enhancing lesion with central necrosis, surrounding edema. Meningioma: dural-based, 'dural tail' sign, extra-axial, uniformly enhancing. Metastases: multiple ring-enhancing lesions at gray-white junction. Concussion: clinical diagnosis — no imaging required if PECARN/Canadian CT Head Rules NOT met; MRI diffusion tensor imaging: research tool for DAI. Coma: GCS score; CT head STAT; metabolic workup (glucose, Na+, ammonia, toxicology, ABG, liver/renal function); LP if fever/meningismus.",
    presentation: {
      chiefComplaint: [
        "\"I have progressive headaches in the morning, worse when I lean forward, with vomiting\"",
        "\"My football player patient had a head collision — he's confused and can't remember the game\"",
        "\"This patient is unresponsive — he has a history of liver cirrhosis\"",
      ],
      associatedSymptoms: [
        "Brain tumor: morning headache (worsened with Valsalva — raised ICP), focal neurologic deficits, new-onset seizure in adult (15–20%), papilledema, personality change",
        "GBM: rapid progression, median survival 15 months even with treatment (surgery + temozolomide + radiation)",
        "Concussion: immediate confusion/disorientation, retrograde/anterograde amnesia, headache, photophobia, phonophobia, dizziness, nausea; LOC NOT required for diagnosis",
        "Post-concussion syndrome: symptoms persisting > 7–10 days: headache, cognitive fog, irritability, sleep disturbance, depression",
        "Coma causes: metabolic (hypoglycemia, hepatic encephalopathy, uremic encephalopathy, opioid overdose, septic encephalopathy) + structural (epidural/subdural hematoma, herniation, stroke, basilar artery occlusion)",
      ],
      demographics:
        "GBM: peak age 55–65; uniformly fatal; median OS 15 months. Meningioma: women > men; often incidental on imaging; majority benign, slow-growing. Brain metastases: lung cancer most common source (40%), followed by breast, melanoma. Concussion: contact sports, MVAs; CTE (chronic traumatic encephalopathy) — repeated concussions → progressive neurodegeneration.",
    },
    distinguishingFeatures:
      "Epidural hematoma (EDH) vs. subdural hematoma (SDH): EDH = biconvex (lenticular) — arterial, middle meningeal artery tear, temporal bone fracture, 'lucid interval' then rapid deterioration; SDH = crescent-shaped (concave) — venous, bridging veins, elderly/alcoholics, slower presentation. Herniation syndromes: uncal (CN III palsy — blown pupil, ipsilateral; contralateral hemiplegia); tonsillar (Cushing's reflex = HTN + bradycardia + irregular respirations = impending herniation).",
    redFlags: [
      "New-onset seizure in adult → always MRI to exclude brain tumor; metastases most common if cancer history",
      "Headache with papilledema → elevated ICP → CT then LP; mannitol/dexamethasone if herniation risk",
      "Cushing's triad (HTN + bradycardia + irregular breathing) → impending herniation → emergent neurosurgery",
      "Second impact syndrome: concussion before full recovery → catastrophic brain swelling → return to play protocols mandatory",
      "GCS ≤ 8 → intubate + continuous monitoring + ICP monitoring",
    ],
    mnemonics: [
      {
        name: "Common Brain Metastases Sources: LL MCR",
        content:
          "Lung (most common — #1)\nLymphoma\nMelanoma (highest rate per primary)\nColon\nRenal cell carcinoma\n'Lung Lets Melanoma Come Recklessly'\nMetastases at gray-white junction (watershed zone); multiple ring-enhancing lesions",
      },
      {
        name: "Coma Causes: AEIOU TIPS",
        content:
          "A — Alcohol/Acidosis\nE — Epilepsy/Encephalopathy\nI — Infection (meningitis, encephalitis, sepsis)\nO — Overdose/Opioids\nU — Uremia/Underdose (hypoglycemia)\nT — Trauma (TBI, EDH, SDH)\nI — Insulin (hypoglycemia — most reversible!)\nP — Psychiatric (rare — diagnosis of exclusion)\nS — Stroke/Structural/Shock",
      },
    ],
    pimpingQuestions: [
      "What is the most common primary malignant brain tumor? What is its typical MRI appearance?",
      "What is the most common primary source of brain metastases?",
      "What is Cushing's triad and what does it indicate?",
      "How do you distinguish an epidural from a subdural hematoma on CT?",
      "What GCS score defines coma?",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 5 — ENDOCRINOLOGY ADDITIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "im-hypothyroidism",
    name: "Hypothyroidism",
    icdCode: "E03.9",
    rotation: "internal-medicine",
    category: "Endocrinology / Thyroid Disorders",
    definition:
      "Deficiency of thyroid hormone causing a hypometabolic state. Most common cause in iodine-sufficient countries: Hashimoto's thyroiditis (autoimmune — anti-TPO and anti-thyroglobulin antibodies). Other causes: post-radioactive iodine, post-thyroidectomy, medications (amiodarone, lithium, interferon), iodine deficiency (globally most common), central hypothyroidism (pituitary/hypothalamic failure — low TSH + low T4). Subclinical: elevated TSH + normal T4 — treat if TSH > 10, pregnant, or symptomatic.",
    diagnosticCriteria:
      "TSH: elevated (↑ in primary hypothyroidism — pituitary compensating). Free T4: low. Anti-TPO antibodies: elevated in Hashimoto's (90%). Anti-thyroglobulin: elevated in Hashimoto's. Central hypothyroidism: low TSH + low T4 (pituitary failure — check for other pituitary hormone deficiencies). Lipid panel: dyslipidemia (↑ LDL, ↑ triglycerides — reversible with treatment). CK: may be elevated (myopathy). Anemia (normocytic or macrocytic — if associated pernicious anemia in Hashimoto's). EKG: bradycardia, low voltage, prolonged QT.",
    presentation: {
      chiefComplaint: [
        "\"I'm so tired, I've gained weight, and I'm always cold\"",
        "\"I have constipation, dry skin, and my hair is falling out\"",
        "\"My TSH came back very high on my annual labs\"",
      ],
      associatedSymptoms: [
        "Classic 'SLOW' symptoms: fatigue, weight gain, cold intolerance, constipation, dry skin, hair loss/coarsening, bradycardia, delayed relaxation of DTRs (hung-up reflexes — classic sign)",
        "Cognitive slowing, depression, memory impairment",
        "Myxedema: non-pitting edema (glycosaminoglycan deposition) — periorbital puffiness, macroglossia, puffy hands",
        "Menstrual irregularities, infertility, galactorrhea (hyperprolactinemia from TRH)",
        "Carpal tunnel syndrome (glycosaminoglycan deposition in flexor retinaculum)",
      ],
      demographics:
        "Women >> men (7:1). Hashimoto's: most common cause in US, associated with other autoimmune diseases (DM1, Addison's, celiac, vitiligo — autoimmune polyglandular syndrome). Congenital hypothyroidism: newborn screen (mandatory) — cretinism if untreated. Amiodarone: contains 37% iodine → can cause hypo OR hyperthyroidism (check TFTs before and during therapy).",
    },
    distinguishingFeatures:
      "Primary vs. central hypothyroidism: primary = high TSH, low T4; central = low TSH, low T4 (pituitary failure). Hashimoto's vs. subacute thyroiditis: Hashimoto's has positive anti-TPO + slowly progressive; subacute (de Quervain's) = painful thyroid, elevated ESR, post-viral, low RAIU, self-limited. Myxedema coma: severe hypothyroidism + altered consciousness + hypothermia → rare medical emergency → IV T3/T4 + steroids.",
    redFlags: [
      "Myxedema coma: hypothermia + altered mental status + bradycardia in known hypothyroid → IV levothyroxine + hydrocortisone + ICU",
      "Hypothyroidism in pregnancy → highest priority treatment; maternal hypothyroidism → fetal neurologic development impairment",
      "Hypothyroidism on amiodarone → check TFTs before and every 3–6 months during therapy",
    ],
    mnemonics: [
      {
        name: "Hypothyroid Symptoms: SLOW",
        content:
          "S — Slow cognition, slow heart (bradycardia), slow bowels (constipation)\nL — Low temperature (cold intolerance), low energy (fatigue)\nO — Obesity/weight gain, oedema (myxedema, periorbital puffiness)\nW — Weakness, Weight gain, hair loss/coarsening/dry skin\nClassic exam finding: DELAYED RELAXATION of deep tendon reflexes",
      },
    ],
    pimpingQuestions: [
      "What is the most common cause of hypothyroidism in iodine-sufficient countries?",
      "How does primary hypothyroidism differ from central hypothyroidism on lab testing?",
      "What is the classic deep tendon reflex finding in hypothyroidism?",
      "What is myxedema coma and how is it treated?",
      "What effect can amiodarone have on thyroid function?",
    ],
  },
  {
    id: "im-hyperthyroidism-im",
    name: "Hyperthyroidism & Thyroiditis",
    icdCode: "E05.90",
    rotation: "internal-medicine",
    category: "Endocrinology / Thyroid Disorders",
    definition:
      "Excess thyroid hormone production. Causes: Graves' disease (TSH receptor-stimulating antibodies, 70–80%), toxic multinodular goiter (MNG), toxic adenoma, subacute thyroiditis (De Quervain's — granulomatous, post-viral; transient hyperthyroidism then hypothyroidism), postpartum thyroiditis, amiodarone-induced (type I = iodine-induced; type II = destructive thyroiditis). Thyroid storm: life-threatening hypermetabolic state — precipitation by stress, illness, surgery, iodine load.",
    diagnosticCriteria:
      "TSH: suppressed (< 0.1 mIU/L overt). Free T4 and free T3: elevated. TRAb/TSI (thyrotropin receptor antibody/thyroid-stimulating immunoglobulin): diagnostic for Graves' (sensitivity 97–99%). RAIU scan: Graves' = diffuse elevated uptake; toxic adenoma = single hot nodule; subacute thyroiditis = very low uptake (destructive). Thyroid ultrasound: nodules, goiter architecture. EKG: sinus tachycardia, AF (especially elderly). Thyroid storm (Burch-Wartofsky score): fever + HR + CNS changes + GI/hepatic dysfunction + precipitating event.",
    presentation: {
      chiefComplaint: [
        "\"I've lost 20 pounds, my heart is racing, and I can't tolerate heat\"",
        "\"I have a neck mass, tremor, and I'm sweating through my clothes\"",
        "\"Elderly patient — confused, with HR 140 and no obvious fever source\"",
      ],
      associatedSymptoms: [
        "Hypermetabolic: weight loss with increased appetite, heat intolerance, diaphoresis, diarrhea, palpitations/tachycardia",
        "Tremor (fine postural), anxiety, irritability, hyperreflexia, insomnia",
        "Graves' specific: exophthalmos (proptosis from retro-orbital inflammation), lid lag, lid retraction, diplopia; pretibial myxedema (non-pitting shin thickening); thyroid acropachy",
        "Atrial fibrillation in elderly with hyperthyroidism ('apathetic hyperthyroidism' — may lack classic symptoms)",
        "Menstrual irregularities, oligomenorrhea, decreased fertility",
      ],
      demographics:
        "Graves': women 7:1, peak 20–50. Toxic MNG: older adults with longstanding goiter. Apathetic hyperthyroidism in elderly: AF, weight loss, HF — no classic symptoms. Thyroid storm: mortality 10–30% even with treatment.",
    },
    distinguishingFeatures:
      "Graves' vs. toxic MNG on RAIU: Graves' = diffuse elevated uptake (whole gland); MNG = patchy/multiple hot nodules; toxic adenoma = single hot nodule. Subacute thyroiditis: tender thyroid + LOW RAIU (destruction, not production) + ESR elevated + viral prodrome. Postpartum thyroiditis: within 12 months postpartum, painless, low RAIU — hyperthyroid phase then hypothyroid.",
    redFlags: [
      "Thyroid storm: BWPS ≥ 45 → ICU; propranolol + PTU/MMI + iodine (1 hr after PTU) + steroids + cooling/acetaminophen",
      "Agranulocytosis from methimazole/PTU: fever + sore throat → STOP antithyroid drug, STAT CBC, hematology",
      "Hyperthyroidism in pregnancy: PTU preferred in 1st trimester (MMI → aplasia cutis); MMI in 2nd/3rd",
      "Graves' ophthalmopathy with corneal exposure → urgent ophthalmology; IV steroids; do NOT use RAI (worsens ophthalmopathy)",
    ],
    mnemonics: [
      {
        name: "Thyroid Storm Treatment: BIG STOP",
        content:
          "B — Beta-blocker (propranolol — blocks T4→T3 conversion at high doses)\nI — Iodine (SSKI/Lugol's) — given ≥ 1 hour AFTER antithyroid drug\nG — Glucocorticoids (dexamethasone — block T4→T3 conversion + anti-inflammatory)\nS — Surgery avoidance (definitive after stabilization)\nT — Thionamide (PTU preferred in storm — also blocks T4→T3)\nO — Oral cholestyramine (bind thyroid hormone in gut)\nP — Precipitant treatment (infection, surgery, trauma, iodine contrast)",
      },
    ],
    pimpingQuestions: [
      "What is the antibody in Graves' disease and what does it do?",
      "How does RAIU scan differentiate Graves' from subacute thyroiditis?",
      "What is apathetic hyperthyroidism and in whom does it occur?",
      "Why is PTU preferred over methimazole in thyroid storm and first-trimester pregnancy?",
      "What is the scoring system for thyroid storm and what score is diagnostic?",
    ],
  },
  {
    id: "im-adrenal-disorders",
    name: "Addison's Disease, Cushing Syndrome & Pheochromocytoma",
    icdCode: "E27.1",
    rotation: "internal-medicine",
    category: "Endocrinology / Adrenal Disorders",
    definition:
      "Addison's disease (primary adrenal insufficiency): destruction of adrenal cortex → deficiency of cortisol AND aldosterone. Most common cause in developed countries: autoimmune (70–80%). Other: TB (globally), HIV, metastatic cancer, bilateral adrenal hemorrhage (Waterhouse-Friderichsen syndrome — meningococcemia). Cushing syndrome: excess cortisol — most common cause is exogenous glucocorticoids; endogenous: ACTH-dependent (Cushing's disease = pituitary adenoma #1 endogenous, ectopic ACTH — small cell lung CA) vs. ACTH-independent (adrenal adenoma). Pheochromocytoma: catecholamine-secreting tumor of adrenal medulla (90%) or extra-adrenal paraganglioma; 10% malignant, 10% bilateral, 10% extra-adrenal ('rule of 10s').",
    diagnosticCriteria:
      "Addison's: AM cortisol < 3 mcg/dL (diagnostic); cosyntropin (ACTH) stimulation test (gold standard) — peak cortisol < 18 mcg/dL = insufficient; ACTH: elevated in primary (↑ feedback), low in secondary; anti-21-hydroxylase antibodies (autoimmune). Hyponatremia + hyperkalemia + hyperpigmentation (elevated ACTH/MSH). Cushing: 24-hr urine free cortisol (elevated), late-night salivary cortisol (elevated — loss of diurnal rhythm), overnight 1 mg dexamethasone suppression test (failure to suppress < 1.8 mcg/dL). If confirmed → ACTH level → MRI pituitary (Cushing's disease) vs. CT adrenal (adenoma) vs. CT chest (ectopic ACTH). Pheo: plasma free metanephrines (most sensitive, 96%) or 24-hr urine metanephrines — biochemical diagnosis first, THEN imaging (MRI adrenal preferred over CT to avoid contrast-induced catecholamine surge).",
    presentation: {
      chiefComplaint: [
        "\"I'm always tired, have been losing weight, and developed this tan without being in the sun\"",
        "\"I've gained weight in my midsection, have easy bruising, and my face looks round\"",
        "\"I have episodes of severe headache, sweating, and my blood pressure shoots up\"",
      ],
      associatedSymptoms: [
        "Addison's: fatigue, weakness, weight loss, hyperpigmentation (buccal mucosa, palmar creases, scars, pressure points — from ↑ ACTH/MSH), salt craving, nausea, orthostatic hypotension; electrolytes: ↓ Na+, ↑ K+, ↓ glucose",
        "Cushing: central obesity, moon facies, buffalo hump, purple striae (> 1 cm wide — vs. pink striae in obesity), proximal muscle weakness, thin skin with easy bruising, hypertension, hyperglycemia, osteoporosis, secondary amenorrhea, acne/hirsutism",
        "Pheochromocytoma: paroxysmal 'rule of 5 Ps' — Palpitations, Perspiration, Pallor (not flushing), Pain (headache), Pressure (hypertension); HTN crisis triggered by stress, surgery, contrast, tyramine, beta-blockers",
      ],
      demographics:
        "Addison's: women > men; 30–50s; associated with autoimmune polyglandular syndrome (Hashimoto's, DM1, vitiligo, pernicious anemia). Cushing's disease (pituitary): women >> men, 20–40s. Ectopic ACTH (SCLC): men > women, smokers. Pheo: 0.1–0.6% of hypertensive patients; familial in 30–40% (VHL, MEN2A/2B, NF1, SDH mutations).",
    },
    distinguishingFeatures:
      "Cushing's disease vs. ectopic ACTH vs. adrenal adenoma: ACTH high in pituitary + ectopic; ACTH low/suppressed in adrenal adenoma. High-dose DST (8 mg) suppresses cortisol in Cushing's disease (pituitary) but NOT in ectopic ACTH or adrenal tumor. Addison's hyperpigmentation: caused by elevated ACTH + MSH (both from POMC precursor) — absent in secondary adrenal insufficiency. Pheo rule of 10: 10% malignant, 10% bilateral, 10% extra-adrenal, 10% in children, 10% normotensive.",
    redFlags: [
      "Adrenal crisis (Addisonian crisis): vomiting, hypotension, shock, hypoglycemia, hyperkalemia → IV hydrocortisone 100 mg STAT + NS bolus (do NOT wait for labs)",
      "Pheo + surgical procedure or contrast dye → hypertensive crisis → alpha-blocker FIRST (phenoxybenzamine), THEN beta-blocker (NEVER beta-blocker alone — worsens hypertension)",
      "Cushing's → osteoporosis, diabetes, immunosuppression, cardiovascular disease",
    ],
    mnemonics: [
      {
        name: "Cushing vs. Addison: Cortisol Direction",
        content:
          "Cushing (TOO MUCH cortisol):\n  — ACTH-dependent (85%): Cushing's disease (pituitary) or ectopic (SCLC)\n  — ACTH-independent (15%): adrenal adenoma, exogenous glucocorticoids\n  — Classic features: purple striae, buffalo hump, moon facies, central obesity\nAddison (TOO LITTLE cortisol):\n  — Primary: ↑ ACTH, ↑ K+, ↓ Na+, HYPERPIGMENTATION\n  — Secondary: ↓ ACTH, normal K+ (aldosterone intact), NO hyperpigmentation\nPheo: alpha-block FIRST, then beta-block, then surgery",
      },
    ],
    pimpingQuestions: [
      "Why do patients with Addison's disease develop hyperpigmentation?",
      "What is the gold standard test for diagnosing adrenal insufficiency?",
      "What is the best initial biochemical test for pheochromocytoma?",
      "Why must alpha-blockade be initiated before beta-blockade in pheo management?",
      "What is the first-line test to screen for Cushing syndrome?",
    ],
  },
  {
    id: "im-diabetes-insipidus",
    name: "Diabetes Insipidus & Electrolyte Disorders (Hypernatremia, Hypercalcemia)",
    icdCode: "E23.2",
    rotation: "internal-medicine",
    category: "Endocrinology / Pituitary and Electrolytes",
    definition:
      "Diabetes insipidus (DI): impaired urinary concentration causing polyuria and polydipsia. Central DI: ADH deficiency (pituitary/hypothalamic) — causes: head trauma, surgery, tumors, idiopathic. Nephrogenic DI: renal unresponsiveness to ADH — causes: lithium (#1 drug cause), hypercalcemia, hypokalemia, genetic. Hypernatremia (Na+ > 145): always reflects water deficit relative to sodium (free water loss OR insufficient intake). Hypercalcemia (Ca2+ > 10.5): most common causes — primary hyperparathyroidism (PTH-mediated, outpatient) and malignancy (most common inpatient); other: sarcoidosis, thiazide diuretics, vitamin D toxicity, milk-alkali syndrome.",
    diagnosticCriteria:
      "DI: Urine osmolality < 300 mOsm/kg (dilute) + serum osmolality > 295 (concentrated serum) + polyuria (> 3 L/day). Water deprivation test + desmopressin (DDAVP) challenge: central DI = responds to DDAVP (urine concentrates); nephrogenic = no response. MRI brain: absent posterior pituitary 'bright spot' in central DI. Hypernatremia: serum Na+ > 145; urine osmolality (concentrated = insensible loss; dilute = DI). Hypercalcemia: serum calcium (albumin-corrected) > 10.5; PTH level — elevated = primary hyperparathyroidism; suppressed = malignancy (PTHrP — humoral), granulomatous (1-alpha-OHase), vitamin D excess. 24-hr urine calcium: low in FHH (familial hypocalciuric hypercalcemia — benign, no surgery needed).",
    presentation: {
      chiefComplaint: [
        "\"I'm drinking gallons of water and urinating constantly — even at night\"",
        "\"After my pituitary surgery I started urinating every hour\"",
        "\"My calcium is critically high — I'm confused and constipated\"",
      ],
      associatedSymptoms: [
        "DI: polyuria (3–15 L/day), polydipsia, nocturia; hypernatremia + dehydration if water access impaired",
        "Hypernatremia: altered mental status, lethargy, irritability, seizures (severe); hyperreflexia; doughy skin turgor",
        "Hypercalcemia: 'Bones, stones, groans, and psychic moans' — bone pain (hyperparathyroidism), nephrolithiasis (calcium oxalate/phosphate), constipation/nausea/vomiting, confusion/depression; severe (Ca2+ > 14): cardiac arrhythmias, coma",
        "Hyperparathyroidism: often asymptomatic; found incidentally on labs; osteoporosis; subperiosteal bone resorption on X-ray (radial aspect of middle phalanx — pathognomonic)",
      ],
      demographics:
        "Central DI: any age; most commonly post-neurosurgical. Nephrogenic DI: lithium use (30% of long-term users). Primary hyperparathyroidism: women >> men, postmenopausal; most common cause of asymptomatic hypercalcemia outpatient. Malignancy hypercalcemia: most common cause inpatient — PTHrP (squamous cell carcinoma of lung, head/neck; breast, renal); osteolytic mets (breast, multiple myeloma).",
    },
    distinguishingFeatures:
      "Hypernatremia always = hypertonicity (unlike hyponatremia which can be hypo/iso/hypertonic). DI vs. psychogenic polydipsia: DI = serum Na+ normal-high, serum Osm elevated, urine Osm low; psychogenic = serum Na+ normal-low, serum Osm low-normal. Hypercalcemia of malignancy: PTH suppressed + PTHrP elevated; rapid progression, Ca often very high. FHH: PTH normal-high, very low urine calcium (Ca:Cr ratio < 0.01) — BENIGN, no parathyroidectomy.",
    redFlags: [
      "Severe hypercalcemia (Ca2+ > 14 or symptomatic) → IV normal saline hydration + bisphosphonate (zoledronic acid) ± calcitonin for rapid effect",
      "Hypernatremia correction: SLOW — max 0.5–1 mEq/L/hr, 10–12 mEq/day (rapid correction → cerebral edema)",
      "DI in post-op neurosurgical patient → monitor strict I&Os, replace free water (IV D5W or PO), DDAVP for central DI",
    ],
    mnemonics: [
      {
        name: "Hypercalcemia: Bones, Stones, Groans, Psychic Moans",
        content:
          "Bones — bone pain, osteitis fibrosa cystica, subperiosteal resorption, 'salt-and-pepper skull'\nStones — nephrolithiasis (calcium oxalate/phosphate)\nGroans — constipation, N/V, anorexia, pancreatitis\nPsychic moans — depression, confusion, cognitive dysfunction, coma\nTreatment order: IV NS bolus → furosemide (after volume-replete) → bisphosphonate → calcitonin",
      },
    ],
    pimpingQuestions: [
      "How do you differentiate central from nephrogenic DI using the DDAVP challenge?",
      "What is the most common cause of outpatient hypercalcemia vs. inpatient?",
      "What is the first step in treating severe symptomatic hypercalcemia?",
      "What is familial hypocalciuric hypercalcemia and why is surgery NOT indicated?",
      "What drug is the most common cause of nephrogenic DI?",
    ],
  },
  {
    id: "im-pituitary-thyroid-ca",
    name: "Pituitary Disorders, Acromegaly & Thyroid Cancer",
    icdCode: "D35.2",
    rotation: "internal-medicine",
    category: "Endocrinology / Pituitary and Neoplasms",
    definition:
      "Pituitary adenomas: benign tumors of anterior pituitary — most common sellar mass. Classified by size (< 1 cm = microadenoma, ≥ 1 cm = macroadenoma) and function (secreting vs. non-secreting). Most common secreting: prolactinoma (#1, treated medically — dopamine agonists). GH-secreting = acromegaly (adults) / gigantism (children before growth plate closure). Acromegaly: insidious onset over years — enlargement of hands, feet, jaw (prognathism), tongue, viscera; most common cause of death: cardiovascular disease. Thyroid cancer: papillary (80%, best prognosis — RET/PTC rearrangement, psammoma bodies), follicular (hematogenous mets), medullary (calcitonin-secreting, MEN2A/2B), anaplastic (worst prognosis).",
    diagnosticCriteria:
      "Prolactinoma: serum prolactin (> 200 ng/mL = almost certainly prolactinoma; hook effect: very large tumor may give falsely low prolactin — dilute sample); MRI pituitary. Acromegaly: serum IGF-1 (screening — elevated); GH suppression test with oral glucose (failure to suppress GH < 1 ng/mL confirms acromegaly — gold standard); MRI pituitary (GH-secreting adenoma). Thyroid cancer workup: fine-needle aspiration biopsy (FNA) of thyroid nodule — gold standard; US features suspicious for malignancy: microcalcifications, irregular margins, taller-than-wide, hypoechoic, increased vascularity. Calcitonin: elevated in medullary thyroid cancer. RET mutation: MEN2A/2B → prophylactic thyroidectomy in infancy.",
    presentation: {
      chiefComplaint: [
        "\"I've noticed my ring size and shoe size keep increasing — my jaw looks different\"",
        "\"I have milk coming from my breasts and I've lost my period — I'm not pregnant\"",
        "\"I have a thyroid nodule on my ultrasound — what are the chances it's cancer?\"",
      ],
      associatedSymptoms: [
        "Acromegaly: enlarged hands/feet (ring/shoe size increase), prognathism, macroglossia, frontal bossing, deepened voice, hyperhidrosis, carpal tunnel, glucose intolerance/DM, sleep apnea, colonic polyps/CRC risk, hypertension, cardiomegaly",
        "Prolactinoma: women — amenorrhea + galactorrhea + infertility; men — headache + bitemporal hemianopsia + sexual dysfunction (hypogonadism)",
        "Non-secreting macroadenoma: bitemporal hemianopsia (compression of optic chiasm), panhypopituitarism",
        "Thyroid cancer: usually asymptomatic nodule; hoarseness (RLN involvement), dysphagia, cervical LAD (papillary); diarrhea (medullary — calcitonin + VIP); rapidly enlarging, rock-hard mass (anaplastic)",
      ],
      demographics:
        "Prolactinoma: most common pituitary adenoma; young women of reproductive age. Acromegaly: insidious onset, often diagnosed 5–10 years after symptoms begin. Medullary thyroid cancer: 25% familial; MEN2A — MTC + pheo + parathyroid hyperplasia; MEN2B — MTC + pheo + mucosal neuromas + marfanoid habitus; prophylactic thyroidectomy if RET mutation.",
    },
    distinguishingFeatures:
      "Hyperprolactinemia causes: prolactinoma, drugs (dopamine antagonists — metoclopramide, antipsychotics, domperidone), hypothyroidism (TRH stimulates prolactin), stalk compression from any macroadenoma. Macroadenoma 'stalk effect' — compress portal vessels → modest prolactin rise < 100 ng/mL (NOT true prolactinoma — don't treat with dopamine agonist). Thyroid cancer: papillary = best prognosis (lymph node mets but not lethal); follicular = hematogenous mets (lung, bone); anaplastic = worst (median survival < 6 months).",
    redFlags: [
      "Pituitary apoplexy: sudden severe headache + diplopia + visual field defects + hypopituitarism → MRI urgently, IV steroids, possible surgery",
      "Macroadenoma with bitemporal hemianopsia → formal visual field testing, neurosurgery (transsphenoidal resection)",
      "Medullary thyroid cancer: screen all family members for RET mutation; prophylactic thyroidectomy in carriers",
      "Anaplastic thyroid cancer: diagnosed on FNA → multidisciplinary urgent oncology (no curative treatment, median survival 5 months)",
    ],
    mnemonics: [
      {
        name: "Thyroid Cancer Types: PFMA",
        content:
          "P — Papillary (80%): best prognosis, psammoma bodies, lymph node mets, 'ground-glass nuclei' (Orphan Annie eyes), RET/PTC\nF — Follicular (10%): capsular/vascular invasion, hematogenous mets (lung, bone), RAS mutation\nM — Medullary (5–10%): calcitonin-secreting, C-cells, MEN2A/2B, RET mutation\nA — Anaplastic (1–2%): worst prognosis, undifferentiated, rock-hard rapidly growing mass\nPapillary is most common; anaplastic is most deadly",
      },
    ],
    pimpingQuestions: [
      "What is the gold standard test to confirm acromegaly?",
      "How do you treat prolactinoma medically?",
      "What histologic finding is pathognomonic for papillary thyroid carcinoma?",
      "What genetic mutation is associated with medullary thyroid cancer and which syndromes?",
      "What is pituitary apoplexy and how does it present?",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 4 — RHEUMATOLOGY ADDITIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "im-pmr",
    name: "Polymyalgia Rheumatica (PMR) & Giant Cell Arteritis (GCA)",
    icdCode: "M35.3",
    rotation: "internal-medicine",
    category: "Rheumatology / Inflammatory Conditions",
    definition:
      "Polymyalgia rheumatica (PMR): inflammatory condition causing bilateral proximal muscle pain and stiffness (shoulder and hip girdle) without true weakness. Age > 50, ESR dramatically elevated. Responds dramatically to low-dose prednisone (diagnostic). Giant cell arteritis (GCA/temporal arteritis): granulomatous vasculitis of medium/large vessels (temporal artery, aorta, aortic branches); always consider GCA in PMR patients — overlap in 15–30%. Most feared complication: permanent blindness from anterior ischemic optic neuropathy.",
    diagnosticCriteria:
      "PMR: Clinical diagnosis — age > 50, bilateral shoulder/hip girdle pain + morning stiffness > 45 min, elevated ESR (typically > 40 mm/hr, often > 100), normal CK (no true myopathy). Response to prednisone 10–20 mg/day is both therapeutic and diagnostic. GCA: ESR > 50 (often > 80–100), CRP elevated, headache, scalp tenderness, jaw claudication. Temporal artery biopsy: gold standard (sensitivity 70–80% — skip lesions); perform within 1–2 weeks of starting steroids (does NOT affect biopsy result for several weeks). US of temporal arteries: 'halo sign' (edema around artery wall) — increasing use. CT/PET-FDG: large-vessel GCA, aortitis.",
    presentation: {
      chiefComplaint: [
        "\"I'm 68 and can't raise my arms above my head — my shoulders are so stiff in the morning\"",
        "\"I have a terrible headache and my scalp hurts when I comb my hair\"",
        "\"My jaw cramps when I chew — and I'm having trouble with my vision\"",
      ],
      associatedSymptoms: [
        "PMR: bilateral aching + stiffness (shoulders, neck, hips, thighs), morning stiffness > 45 min, difficulty with overhead activities, getting up from chair",
        "GCA: new-onset headache (temporal, throbbing), scalp tenderness (combing hair, resting head on pillow), jaw claudication (pathognomonic — masseter ischemia), vision loss",
        "Anterior ischemic optic neuropathy (AION): sudden, painless, monocular visual loss — amaurosis fugax or permanent — most feared complication",
        "Systemic: fever, weight loss, fatigue, night sweats",
      ],
      demographics:
        "Almost exclusively in adults ≥ 50 (mean age 70+). Women:men 3:1. Northern European descent. Giant cell arteritis: mean age 75; 15–30% of GCA patients have PMR. ESR in GCA typically very high (> 80–100 mm/hr) but can be normal in 5%.",
    },
    distinguishingFeatures:
      "PMR vs. fibromyalgia: PMR has markedly elevated ESR/CRP; fibromyalgia has normal inflammatory markers. PMR vs. polymyositis: PMR has no true weakness (difficulty rising from chair due to pain, not weakness); CK normal; polymyositis has proximal weakness + elevated CK. GCA vs. migraine: GCA = age > 50, jaw claudication, scalp tenderness, elevated ESR — new headache in elderly is GCA until proven otherwise.",
    redFlags: [
      "Visual symptoms in GCA → START HIGH-DOSE PREDNISONE IMMEDIATELY (60 mg/day) before biopsy — do NOT wait for biopsy results; blindness is irreversible",
      "Jaw claudication in GCA → visual loss imminent — emergent ophthalmology + high-dose steroids",
      "Aortitis in GCA → aortic aneurysm risk — annual imaging for 5+ years",
    ],
    mnemonics: [
      {
        name: "GCA vs PMR: TEMP",
        content:
          "T — Temporal headache + Tenderness of scalp (GCA)\nE — ESR > 50 (both), often > 100 in GCA\nM — Morning stiffness > 45 min, proximal (PMR)\nP — Prednisone response: PMR = 10–20 mg → dramatic relief in 24–48 hrs; GCA = 60 mg (high-dose)\nJaw claudication = GCA until proven otherwise → immediate steroids",
      },
    ],
    pimpingQuestions: [
      "What is the most feared complication of GCA and how is it prevented?",
      "Why should high-dose steroids be started in GCA before the biopsy result?",
      "How do you distinguish PMR from polymyositis?",
      "What is jaw claudication and what does it indicate?",
      "What is the dramatic clinical response that helps confirm a diagnosis of PMR?",
    ],
  },
  {
    id: "im-polymyositis-scleroderma",
    name: "Polymyositis, Dermatomyositis & Systemic Sclerosis",
    icdCode: "M33.20",
    rotation: "internal-medicine",
    category: "Rheumatology / Connective Tissue Disease",
    definition:
      "Inflammatory myopathies (PM/DM): immune-mediated muscle inflammation causing proximal weakness. Polymyositis (PM): cell-mediated CD8+ T-cell attack on muscle. Dermatomyositis (DM): humoral, complement-mediated; classic skin manifestations; strong malignancy association (10–25% in DM). Systemic sclerosis (scleroderma): autoimmune fibrosis affecting skin and internal organs. Limited (lcSSc = CREST): slow progression, anti-centromere Ab. Diffuse (dcSSc): rapid skin thickening, anti-Scl-70 (anti-topoisomerase I), severe organ involvement.",
    diagnosticCriteria:
      "PM/DM: Elevated CK (10–50× normal), aldolase, LDH; Anti-Jo-1 (anti-synthetase syndrome — PM + interstitial lung disease + 'mechanic's hands' + Raynaud's + arthritis); MRI muscle: edema in affected muscles; EMG: myopathic pattern (small polyphasic MUAPs); muscle biopsy: gold standard (PM = endomysial inflammation with CD8+; DM = perifascicular atrophy, perivascular). Scleroderma: ANA (95%), anti-centromere (lcSSc), anti-Scl-70 (dcSSc); skin biopsy; HRCT chest (ILD); Echo (PAH); GI motility studies.",
    presentation: {
      chiefComplaint: [
        "\"I can't raise my arms above my head or get up from a chair\"",
        "\"I have purple discoloration around my eyes and my knuckles are cracked\"",
        "\"My skin is tightening — I have trouble opening my mouth and my fingers feel stuck\"",
      ],
      associatedSymptoms: [
        "PM/DM: bilateral proximal muscle weakness (climbing stairs, rising from chair, raising arms — NOT distal), dysphagia (pharyngeal involvement), respiratory weakness (ILD in anti-Jo-1)",
        "DM-specific skin: Heliotrope rash (violaceous periorbital edema), Gottron's papules (violaceous papules over MCP/PIP knuckles — pathognomonic), V-sign (anterior chest), shawl sign (posterior neck/shoulders)",
        "Scleroderma CREST: Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyly, Telangiectasias",
        "Diffuse SSc: skin thickening proximal to elbows, ILD (most common cause of death), PAH, renal crisis (hypertensive emergency + microangiopathic hemolytic anemia → ACE inhibitor)",
        "Raynaud's phenomenon: digital vasospasm → white → blue → red (triphasic color change) with cold/stress",
      ],
      demographics:
        "PM/DM: women > men; peak 40–60; DM in children (juvenile DM). Anti-Jo-1 syndrome: PM + ILD + Raynaud's + arthritis + mechanic's hands (cracked/fissured fingertips). DM malignancy: ovarian, lung, colorectal, breast — screen with age-appropriate cancer screening at DM diagnosis. Scleroderma renal crisis: dcSSc, rapid-onset severe HTN + AKI → ACE inhibitor (captopril) — this is one of the rare HT emergencies where ACE-I is life-saving.",
    },
    distinguishingFeatures:
      "PM vs. DM: DM has characteristic skin findings (heliotrope, Gottron's); both have proximal weakness and elevated CK. DM vs. SLE: SLE butterfly rash spares nasolabial folds; DM heliotrope is periorbital, Gottron's on knuckles. Scleroderma vs. MCTD: MCTD has overlapping features of SLE/PM/SSc + high-titer anti-U1-RNP antibody.",
    redFlags: [
      "DM + new-onset → malignancy screen (PET-CT or age-appropriate cancer workup)",
      "Scleroderma renal crisis → captopril IV (ACE-I is TREATMENT here — NOT contraindicated)",
      "Anti-MDA5 DM: rapidly progressive ILD, skin ulcers, minimal muscle involvement → high mortality, aggressive immunosuppression",
      "Respiratory failure from ILD in antisynthetase syndrome → high-dose steroids + steroid-sparing",
    ],
    mnemonics: [
      {
        name: "DM Skin Findings: HGV",
        content:
          "H — Heliotrope rash (purple periorbital)\nG — Gottron's papules (over MCP/PIP knuckles — pathognomonic)\nV — V-sign (décolletage), Shawl sign (posterior neck/shoulders)\nAlso: 'Mechanic's hands' = anti-Jo-1 antisynthetase syndrome\nScleroderma CREST: Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyly, Telangiectasias",
      },
    ],
    pimpingQuestions: [
      "What skin finding is pathognomonic for dermatomyositis?",
      "What antibody is associated with antisynthetase syndrome?",
      "What is scleroderma renal crisis and what is the treatment?",
      "How does dermatomyositis increase malignancy risk?",
      "Distinguish limited from diffuse systemic sclerosis — antibody and organ involvement?",
    ],
  },
  {
    id: "im-reactive-pan",
    name: "Reactive Arthritis & Polyarteritis Nodosa",
    icdCode: "M02.9",
    rotation: "internal-medicine",
    category: "Rheumatology / Inflammatory Conditions",
    definition:
      "Reactive arthritis (ReA, formerly Reiter syndrome): sterile inflammatory arthritis triggered by a remote infection (GI — Salmonella, Shigella, Campylobacter, Yersinia; GU — Chlamydia trachomatis). HLA-B27 associated (up to 80%). Polyarteritis nodosa (PAN): necrotizing vasculitis of medium-sized arteries, sparing small vessels and glomeruli. Associated with hepatitis B (30%); no lung or glomerular involvement (key distinguishing feature from GPA/EGPA).",
    diagnosticCriteria:
      "Reactive arthritis: Clinical — arthritis + prior infection 1–6 weeks before, asymmetric lower extremity oligoarthritis, HLA-B27 testing, STI screen (chlamydia NAAT), stool PCR if GI trigger. No specific lab test; ANA/RF negative. PAN: angiography (mesenteric/renal arteries — 'beaded' vessels with microaneurysms — gold standard); biopsy of affected tissue (nerve, skin, muscle, sural nerve) — necrotizing arteritis with fibrinoid necrosis; HBsAg (hepatitis B screen); ANCA usually NEGATIVE (ANCA-positive vasculitis = GPA, MPA, EGPA — different diseases).",
    presentation: {
      chiefComplaint: [
        "\"I had chlamydia treated 3 weeks ago and now my knee, ankle, and eye are inflamed\"",
        "\"I have abdominal pain, muscle weakness, and a skin rash — my nerve tests are abnormal\"",
      ],
      associatedSymptoms: [
        "Reactive arthritis triad: 'Can't see, can't pee, can't climb a tree' — conjunctivitis/uveitis + urethritis + arthritis; oral ulcers, circinate balanitis, keratoderma blennorrhagica (hyperkeratotic plaques on soles)",
        "Asymmetric lower extremity oligoarthritis (knees, ankles, feet); dactylitis ('sausage digits'); sacroiliitis",
        "PAN: systemic — weight loss, fever, malaise; renal artery involvement → hypertension, renal insufficiency; mononeuritis multiplex (nerve infarcts); mesenteric ischemia (abdominal angina); skin — livedo reticularis, purpura; NO lung involvement, NO glomerulonephritis",
      ],
      demographics:
        "ReA: most common in sexually active young men (Chlamydia trigger) or after GI infection. HLA-B27 in 80%. PAN: men > women, peak 40–60; 30% HBV-associated; rare in developed nations due to HBV vaccination.",
    },
    distinguishingFeatures:
      "PAN vs. ANCA vasculitis: PAN = ANCA-NEGATIVE, NO glomerulonephritis, NO lung involvement, medium vessels. GPA (granulomatosis with polyangiitis) = ANCA-positive (c-ANCA/PR3), lung + kidney + upper airway. MPA = p-ANCA/MPO, lung + kidney. ReA vs. RA: ReA = asymmetric, lower extremity, RF negative, post-infectious; RA = symmetric, small joints of hands/wrists, RF/anti-CCP positive.",
    redFlags: [
      "PAN + renal artery involvement → renovascular HTN, renal infarction",
      "PAN + HBV → treat HBV first with antiviral, then taper steroids",
      "Reactive arthritis — recurrent episodes if untreated Chlamydia → treat infection (azithromycin/doxycycline)",
    ],
    mnemonics: [
      {
        name: "Reactive Arthritis: Can't See, Can't Pee, Can't Climb a Tree",
        content:
          "Can't see — conjunctivitis / anterior uveitis\nCan't pee — urethritis / cervicitis\nCan't climb a tree — arthritis (lower extremity oligoarthritis)\nAssociated: oral ulcers, circinate balanitis, keratoderma blennorrhagica\nHLA-B27 in 80%; triggered by Chlamydia (STI) or GI infections (Salmonella, Campylobacter)",
      },
    ],
    pimpingQuestions: [
      "What is the classic triad of reactive arthritis?",
      "What infections trigger reactive arthritis?",
      "How does PAN differ from ANCA-associated vasculitis (GPA, MPA)?",
      "What is the HBV association with PAN and how does it affect treatment?",
      "What is mononeuritis multiplex and what vasculitis classically causes it?",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 1 — CARDIOVASCULAR ADDITIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "im-cardiomyopathy",
    name: "Cardiomyopathy (Dilated, Hypertrophic, Restrictive)",
    icdCode: "I42.9",
    rotation: "internal-medicine",
    category: "Cardiovascular / Cardiomyopathy",
    definition:
      "Primary myocardial disease not caused by coronary artery disease, hypertension, or valvular disease. Three major types: (1) Dilated cardiomyopathy (DCM) — most common; dilated, poorly contracting LV, EF < 40%; causes: idiopathic (#1), alcohol, viral (Coxsackie B), peripartum, chemotherapy (doxorubicin). (2) Hypertrophic cardiomyopathy (HCM) — asymmetric septal hypertrophy, diastolic dysfunction, dynamic LVOT obstruction; autosomal dominant (sarcomere gene mutations — MYH7, MYBPC3); leading cause of sudden cardiac death in young athletes. (3) Restrictive cardiomyopathy (RCM) — stiff, non-compliant ventricles, impaired filling; causes: amyloidosis (#1 in US adults), sarcoidosis, hemochromatosis, endomyocardial fibrosis.",
    diagnosticCriteria:
      "Echocardiogram: primary diagnostic tool. DCM: dilated LV + RV, globally reduced EF (< 40%), thin walls. HCM: asymmetric septal hypertrophy (IVS > 15 mm or IVS:LVPW ratio > 1.3), dynamic LVOT gradient (increases with Valsalva/standing, decreases with squatting/leg raise). RCM: normal/decreased LV size, normal wall thickness, markedly elevated filling pressures, biatrial dilation. Cardiac MRI: superior tissue characterization (fibrosis, infiltration). Labs: BNP elevated in all types; troponin may be elevated in acute myocarditis. Cardiac catheterization: exclude coronary disease. Genetic testing: HCM — screen first-degree relatives. Endomyocardial biopsy: rarely needed (giant cell myocarditis, hemochromatosis).",
    presentation: {
      chiefComplaint: [
        "\"I'm a 22-year-old athlete and I passed out while playing basketball\"",
        "\"I've been having progressive shortness of breath and leg swelling\"",
        "\"My father died suddenly at 35 from a heart problem — should I be checked?\"",
      ],
      associatedSymptoms: [
        "DCM: HFrEF symptoms — dyspnea, orthopnea, PND, bilateral edema, S3 gallop",
        "HCM: exertional dyspnea (#1 symptom), exertional chest pain, palpitations, syncope (especially exertional — RED FLAG for SCD risk), harsh systolic crescendo-decrescendo murmur at LLSB — increases with Valsalva/standing",
        "RCM: predominantly right heart failure — JVP elevation, hepatomegaly, ascites, edema; Kussmaul's sign (JVP rises with inspiration — also in constrictive pericarditis)",
        "Arrhythmias in all types: AF, VT, heart block",
      ],
      demographics:
        "DCM: peak age 20–60; dilated alcoholic cardiomyopathy reversible if alcohol cessation. Peripartum CM: last month of pregnancy to 5 months postpartum; risk factors: multiparity, older age, African American. HCM: 1 in 500 population; autosomal dominant; most common genetically transmitted cardiac disease; leading SCD cause in athletes < 35 in US. RCM: amyloidosis — AL (multiple myeloma associated) and ATTR (hereditary or senile — elderly men).",
    },
    distinguishingFeatures:
      "HCM murmur: harsh systolic ejection murmur LLSB — INCREASES with decreased preload (Valsalva, standing, dehydration); DECREASES with increased preload (squatting, leg raise, handgrip). Key bedside exam: Valsalva maneuver — HCM louder (MVP also louder), AS softer. HCM vs. AS: HCM murmur louder with Valsalva; AS louder with squatting. ATTR amyloidosis in elderly man with HF + carpal tunnel + low-voltage EKG + thick walls on echo = classic cardiac amyloid.",
    redFlags: [
      "HCM + exertional syncope → high SCD risk → restrict from competitive sports, ICD consideration",
      "HCM + family history of SCD → ICD implantation",
      "DCM with EF < 35% → ICD for primary prevention of SCD; CRT if LBBB + EF ≤ 35%",
      "Peripartum CM with persistent LV dysfunction → counsel against future pregnancies",
      "Amyloidosis with HCM pattern + low-voltage EKG → refer for advanced workup (bone scan, cardiac biopsy)",
    ],
    mnemonics: [
      {
        name: "HCM Murmur: HOCM Changes",
        content:
          "LOUDER (less blood in LV → more obstruction): Valsalva, Standing, Dehydration, Nitroglycerin, Tachycardia\nSOFTER (more blood in LV → less obstruction): Squatting, Leg raise, Handgrip, Phenylephrine\nMnemonic: 'HOCM LOVES an empty heart — fills less, obstructs more'",
      },
      {
        name: "Cardiomyopathy Types: DRaiL",
        content:
          "D — Dilated: big floppy heart, low EF, alcohol/viral/idiopathic\nR — Restrictive: stiff heart, diastolic dysfunction, amyloid/sarcoid/hemochromatosis\nL — (Hypertrophic): thick heart, outflow obstruction, GENETIC, athletes",
      },
    ],
    pimpingQuestions: [
      "What happens to the HCM murmur with Valsalva maneuver? Why?",
      "What is the most common cause of sudden cardiac death in young athletes?",
      "What is the most common cause of restrictive cardiomyopathy in US adults?",
      "What is peripartum cardiomyopathy and what is the time frame for diagnosis?",
      "What EKG finding is classic in cardiac amyloidosis despite thick walls on echo?",
    ],
  },
  {
    id: "im-myocarditis",
    name: "Myocarditis",
    icdCode: "I40.9",
    rotation: "internal-medicine",
    category: "Cardiovascular / Inflammatory",
    definition:
      "Inflammatory disease of the myocardium. Most commonly caused by viral infection (Coxsackie B virus most common in US/Europe; also adenovirus, parvovirus B19, HHV6, HIV, SARS-CoV-2). Non-viral causes: bacterial (diphtheria, Lyme), autoimmune (giant cell myocarditis, eosinophilic, lupus, sarcoidosis), toxic (cocaine, doxorubicin), hypersensitivity (drugs). Clinical spectrum: asymptomatic (most common) → acute HF → fulminant cardiogenic shock. Giant cell myocarditis: rare but rapidly fatal without immunosuppression or cardiac transplant.",
    diagnosticCriteria:
      "Troponin I/T: elevated (myocyte injury) — most sensitive biomarker; may mimic STEMI. EKG: diffuse ST elevation (can mimic pericarditis), sinus tachycardia, new LBBB, heart block, ventricular arrhythmias. Echo: global LV dysfunction, pericardial effusion, wall motion abnormalities. Cardiac MRI (gold standard for non-invasive diagnosis): Lake Louise Criteria — myocardial edema, hyperemia, LGE (late gadolinium enhancement in non-coronary pattern). Coronary angiography: exclude ACS (usually required in new LV dysfunction). Endomyocardial biopsy: Dallas criteria — 'gold standard' but low sensitivity (sampling error); reserved for severe/fulminant disease.",
    presentation: {
      chiefComplaint: [
        "\"I had a 'flu' 2 weeks ago and now I feel short of breath and have chest pain\"",
        "\"I'm a 25-year-old man with new heart failure — I've never had heart problems\"",
        "\"I got the mRNA COVID vaccine and now I have chest pain\"",
      ],
      associatedSymptoms: [
        "Prodrome: flu-like illness (fever, myalgias, URI) 1–4 weeks prior",
        "Chest pain (pericardial component — pleuritic, positional)",
        "Dyspnea, fatigue (cardiac dysfunction)",
        "Palpitations, syncope (arrhythmias — including VT/VF)",
        "Vaccine-associated myocarditis (mRNA COVID-19): young males, 1–5 days post-2nd dose — self-limited in most cases",
      ],
      demographics:
        "Most common in young adults (< 50), males > females (3:1). Post-viral myocarditis: peak 2–4 weeks after viral illness. Giant cell myocarditis: mean age 40s, rapidly progressive, high mortality without transplant. mRNA vaccine-associated myocarditis: rare; primarily adolescent/young adult males after 2nd dose; majority mild and self-resolving.",
    },
    distinguishingFeatures:
      "Myocarditis vs. STEMI: both have troponin elevation + ST changes; myocarditis = young patient, prodromal viral illness, diffuse/non-coronary ST pattern, normal coronary angiogram. Myocarditis vs. pericarditis: overlap common (myopericarditis); pericarditis = pericardial friction rub, pleuritic chest pain, PR depression + diffuse STE, preserved LV function. Giant cell myocarditis: rapid deterioration, heart block, VT, young adult — emergency transplant evaluation.",
    redFlags: [
      "Fulminant myocarditis — cardiogenic shock → ICU, mechanical circulatory support (IABP, Impella, ECMO)",
      "Sustained VT or VF — arrhythmic risk in acute phase → avoid exercise × 3–6 months",
      "Giant cell myocarditis — rapidly fatal; high-dose steroids + immunosuppression + transplant evaluation",
      "New heart block or LBBB → monitor closely, may need temporary pacing",
    ],
    mnemonics: [
      {
        name: "Myocarditis Causes: VAST",
        content:
          "V — Viral (Coxsackie B, adenovirus, parvovirus B19, HIV, COVID)\nA — Autoimmune (giant cell, eosinophilic, lupus, sarcoidosis)\nS — Systemic infection (diphtheria toxin, Lyme, Trypanosoma cruzi — Chagas)\nT — Toxic/drugs (cocaine, doxorubicin, clozapine, checkpoint inhibitors)",
      },
    ],
    pimpingQuestions: [
      "What is the most common viral cause of myocarditis in the US?",
      "How does myocarditis mimic STEMI and how do you distinguish them?",
      "What is giant cell myocarditis and why is it rapidly fatal?",
      "What is the cardiac MRI finding that confirms myocarditis (non-ischemic pattern)?",
      "What activity restriction is recommended after acute myocarditis?",
    ],
  },
  {
    id: "im-rheumatic-fever",
    name: "Rheumatic Fever & Rheumatic Heart Disease",
    icdCode: "I01.9",
    rotation: "internal-medicine",
    category: "Cardiovascular / Inflammatory",
    definition:
      "Acute rheumatic fever (ARF): a delayed autoimmune complication of Group A Streptococcal (GAS) pharyngitis, occurring 2–4 weeks after untreated/inadequately treated infection. Molecular mimicry between GAS M protein and cardiac tissue antigens causes valvular inflammation. Rheumatic heart disease (RHD): chronic valvular damage from recurrent ARF — most commonly mitral stenosis (#1 valvular lesion worldwide from rheumatic disease), also mitral regurgitation, aortic stenosis/regurgitation. RHD remains the leading cause of acquired heart disease in developing countries.",
    diagnosticCriteria:
      "Jones Criteria (2015 revision): Evidence of preceding GAS infection (elevated/rising ASO titer, positive throat culture/rapid strep, positive RADT) PLUS: 2 major criteria OR 1 major + 2 minor criteria. Major criteria (SPACE): Synovitis (migratory polyarthritis — most common manifestation), Pancarditis, Ashoff nodules (subcutaneous nodules), Chorea (Sydenham's), Erythema marginatum. Minor criteria: fever, elevated ESR/CRP, prolonged PR interval, arthralgia (if not used as major). ASO titer: peaks 3–5 weeks after pharyngitis; anti-DNase B (more sensitive for skin infections). Echo: valve lesions, pericardial effusion.",
    presentation: {
      chiefComplaint: [
        "\"My child had strep throat 3 weeks ago and now has joint pain and fever\"",
        "\"I have a new heart murmur — I had rheumatic fever as a child growing up in Latin America\"",
        "\"My teenage daughter started having involuntary movements after a throat infection\"",
      ],
      associatedSymptoms: [
        "Migratory polyarthritis: large joints (knees, ankles, elbows, wrists) — highly sensitive (75%) but not specific; exquisitely tender; resolves with salicylates",
        "Carditis: all layers — pancarditis; new murmur (mitral regurgitation most common acute finding), pericardial rub, tachycardia, cardiomegaly; most serious manifestation (causes RHD)",
        "Sydenham's chorea: involuntary, purposeless, non-rhythmic movements — affects face and limbs; may occur months after initial infection; 'milkmaid's grip'",
        "Erythema marginatum: pink rings with central clearing, macular, non-pruritic, evanescent — seen on trunk/limbs (not face)",
        "Subcutaneous nodules: firm, painless, over bony prominences — Aschoff bodies histologically",
      ],
      demographics:
        "Peak age: 5–15 years (school-age children). Risk factors: developing nations, overcrowding, limited access to antibiotics. RHD: mitral stenosis predominates (MS) — presents in 3rd–5th decade (long lag after ARF). MS findings: opening snap after S2, diastolic rumble at apex, atrial fibrillation (from LA dilation).",
    },
    distinguishingFeatures:
      "Reactive arthritis vs. ARF: reactive arthritis (post-GI or GU infection) is asymmetric, lower extremity > upper, doesn't respond to salicylates as dramatically; ARF arthritis is migratory, responds dramatically to ASA. Sydenham's chorea vs. other movement disorders: SH is post-strep, disappears with sleep, associated with emotional lability. Mitral stenosis from RHD: opening snap — shorter S2-OS interval = more severe MS (higher LA pressure).",
    redFlags: [
      "Carditis in ARF — most feared complication, causes RHD; echocardiogram mandatory",
      "Severe acute mitral regurgitation from ARF → acute HF → emergent management",
      "Recurrent ARF episodes → cumulative valve damage; secondary prophylaxis is MANDATORY",
    ],
    mnemonics: [
      {
        name: "Jones Criteria Major: SPACE",
        content:
          "S — Sydenham's chorea\nP — Pancarditis (carditis)\nA — Ashoff nodules (subcutaneous)\nC — Chorea (same as S — included for emphasis)\nE — Erythema marginatum\n+ Polyarthritis (migratory) — most common manifestation\nMinor: Fever, elevated CRP/ESR, prolonged PR, Arthralgia",
      },
      {
        name: "Rheumatic Fever Secondary Prophylaxis Duration",
        content:
          "Carditis with persistent valve disease: benzathine PCN G IM q4weeks until age 40 or 10 years (whichever longer)\nCarditis without valve disease: 10 years or until age 21\nNo carditis: 5 years or until age 21\nPCN allergy: sulfadiazine or azithromycin",
      },
    ],
    pimpingQuestions: [
      "What are the major Jones Criteria for acute rheumatic fever?",
      "What is the most common manifestation of ARF? What is the most serious?",
      "What is Sydenham's chorea and what characterizes it clinically?",
      "Why is secondary prophylaxis critical after ARF?",
      "What is the most common valvular lesion in chronic rheumatic heart disease worldwide?",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 3 — GASTROINTESTINAL ADDITIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "im-esophageal-disorders",
    name: "Esophagitis, Esophageal Strictures & Hiatal Hernia",
    icdCode: "K20.9",
    rotation: "internal-medicine",
    category: "Gastroenterology / Esophageal Disorders",
    definition:
      "Esophagitis: inflammation of the esophageal mucosa — causes: reflux (most common), eosinophilic (EoE), infectious (Candida, HSV, CMV — immunocompromised), pill-induced (bisphosphonates, doxycycline, NSAIDs, potassium). Esophageal stricture: narrowing of esophageal lumen — from chronic acid reflux (peptic stricture), malignancy, radiation, caustic ingestion. Hiatal hernia: protrusion of stomach above diaphragm through esophageal hiatus — Type I (sliding, 95%): GEJ displaces upward — most common, associated with GERD; Type II–IV (paraesophageal): fundus herniates — risk of volvulus/strangulation.",
    diagnosticCriteria:
      "Upper endoscopy (EGD): gold standard for esophagitis — visualizes mucosal changes, biopsy. Candida esophagitis: white plaque-like lesions; biopsy shows pseudohyphae. HSV esophagitis: volcanic ('punched-out') ulcers with vesicles. EoE: multiple concentric rings ('trachealization'), linear furrows, ≥ 15 eosinophils/HPF on biopsy; normal EGD does NOT rule out EoE. Barium swallow: stricture — 'rat tail' narrowing; hiatal hernia — stomach above diaphragm. Manometry: esophageal motility disorders. CT chest/abdomen: large paraesophageal hernia.",
    presentation: {
      chiefComplaint: [
        "\"I have pain when I swallow — especially pills and cold drinks\"",
        "\"Food gets stuck halfway down my chest\"",
        "\"I feel full quickly and have heartburn that doesn't respond to antacids\"",
      ],
      associatedSymptoms: [
        "Esophagitis: odynophagia (pain ON swallowing — key distinction from dysphagia), chest pain, nausea",
        "Candida esophagitis: immunocompromised + dysphagia/odynophagia; oral thrush may or may not be present",
        "EoE: young male + intermittent solid food dysphagia + food impaction + atopic history (asthma, eczema, allergies)",
        "Peptic stricture: progressive solid-food dysphagia, weight loss, long-standing GERD",
        "Hiatal hernia: heartburn, regurgitation, dysphagia, chest pain; large paraesophageal → early satiety, nausea, respiratory symptoms",
      ],
      demographics:
        "EoE: males >> females (3:1), age 20–40, rising incidence; strongly associated with atopy. Candida esophagitis: HIV (CD4 < 100), hematologic malignancy, corticosteroids, broad-spectrum antibiotics, diabetes. Pill esophagitis: bisphosphonates (alendronate) if taken without adequate water/upright posture — must take with 8 oz water and remain upright × 30 minutes.",
    },
    distinguishingFeatures:
      "Odynophagia vs. dysphagia: odynophagia = pain WITH swallowing; dysphagia = difficulty swallowing. Odynophagia in immunocompromised → empiric fluconazole for Candida (most common). Schatzki ring: lower esophageal mucosal ring at GEJ — intermittent solid food dysphagia (no weight loss, intermittent). Peptic stricture from chronic GERD → progressive dysphagia, dilate endoscopically.",
    redFlags: [
      "Progressive dysphagia (solids → liquids) + weight loss → malignancy until proven otherwise → urgent EGD",
      "Large paraesophageal hernia → risk of incarceration/strangulation → elective surgical repair",
      "Candida esophagitis in previously healthy patient → HIV testing mandatory",
    ],
    mnemonics: [
      {
        name: "Esophagitis by Cause",
        content:
          "RICE: Reflux (GERD — most common), Infectious (Candida #1 immunocomp, HSV, CMV), Caustic/Chemical, Eosinophilic\nCandida = white plaques; fluconazole\nHSV = punched-out ulcers; acyclovir\nCMV = large linear ulcers; ganciclovir\nEoE = rings/furrows + eosinophilia on biopsy; PPI + swallowed fluticasone + elemental diet",
      },
    ],
    pimpingQuestions: [
      "Distinguish odynophagia from dysphagia — what causes each?",
      "What biopsy finding is diagnostic of eosinophilic esophagitis?",
      "What organism causes esophagitis in an HIV patient with CD4 < 100 most commonly?",
      "What is the classic presentation of eosinophilic esophagitis?",
      "What is the correct way to take alendronate to prevent pill esophagitis?",
    ],
  },
  {
    id: "im-esophageal-varices",
    name: "Esophageal Varices & Mallory-Weiss Tear",
    icdCode: "I85.9",
    rotation: "internal-medicine",
    category: "Gastroenterology / GI Bleeding",
    definition:
      "Esophageal varices: dilated submucosal veins in the distal esophagus due to portal hypertension (portal pressure > 12 mmHg). Develop in 50% of cirrhotic patients; bleed in 25–35% — mortality per bleed 15–20%. Mallory-Weiss tear: mucosal laceration at the GEJ from forceful retching/vomiting — most commonly longitudinal tear on the gastric side; accounts for 5–10% of acute UGIB. Both are causes of upper GI hemorrhage.",
    diagnosticCriteria:
      "Upper endoscopy (EGD): gold standard for both diagnosis and treatment. Varices: graded by size (small/medium/large) and presence of red wale signs (high bleeding risk). Active variceal bleed: blood spurting from varix, adherent clot. Mallory-Weiss: linear mucosal laceration at GEJ on retroflexed view. Labs: CBC (Hgb, Plt), CMP, coags (INR — marker of synthetic function in cirrhosis), type & screen. MELD score: predicts 90-day mortality in cirrhosis.",
    presentation: {
      chiefComplaint: [
        "\"I have cirrhosis and I'm vomiting bright red blood\"",
        "\"I was vomiting from drinking and now there's blood in my vomit\"",
        "\"I have known varices and suddenly feel lightheaded with black stools\"",
      ],
      associatedSymptoms: [
        "Variceal bleed: hematemesis (bright red blood or 'coffee grounds'), melena, hemodynamic instability — hypotension, tachycardia; signs of portal hypertension (ascites, splenomegaly, spider angiomas, caput medusae)",
        "Mallory-Weiss: history of forceful retching THEN hematemesis (blood follows non-bloody vomiting); usually self-limited; hemodynamic instability if large tear",
        "Both: anemia, tachycardia, orthostatic hypotension",
      ],
      demographics:
        "Variceal bleed: almost exclusively in cirrhosis/portal HTN — alcoholic cirrhosis most common in US. Primary prophylaxis (prevent first bleed): non-selective beta-blockers (propranolol, nadolol, or carvedilol) for medium/large varices. Secondary prophylaxis (prevent rebleed): TIPS (transjugular intrahepatic portosystemic shunt) + beta-blocker + band ligation.",
    },
    distinguishingFeatures:
      "Variceal vs. non-variceal UGIB: variceal = cirrhosis + portal HTN signs; non-variceal = PUD (most common overall UGIB), Mallory-Weiss, Dieulafoy's lesion. Mallory-Weiss vs. Boerhaave syndrome: Mallory-Weiss = mucosal tear (mucosa only); Boerhaave = FULL thickness esophageal rupture from forceful vomiting → pneumomediastinum, surgical emergency.",
    redFlags: [
      "Active variceal hemorrhage: airway management (aspiration risk) → octreotide IV + broad-spectrum abx (SBP prevention) → urgent EGD (band ligation)",
      "Hemodynamic instability → PRBC transfusion (target Hgb 7–8 g/dL — over-transfusion worsens portal pressure)",
      "Refractory bleeding → Sengstaken-Blakemore tube (balloon tamponade) as bridge → TIPS",
      "Spontaneous bacterial peritonitis (SBP) prophylaxis: norfloxacin or ceftriaxone IV with each variceal bleed",
    ],
    mnemonics: [
      {
        name: "Variceal Bleed Management: ABBOT",
        content:
          "A — Airway (intubate if encephalopathy or massive hemorrhage)\nB — Blood transfusion (target Hgb 7–8; avoid over-transfusion)\nB — Beta-blockers HOLD during acute bleed (use chronically for prophylaxis)\nO — Octreotide IV (somatostatin analog — reduces splanchnic blood flow) × 3–5 days\nT — TIPS if endoscopic treatment fails\n+ Antibiotics (ceftriaxone IV) + Band ligation on EGD",
      },
    ],
    pimpingQuestions: [
      "What is the management sequence for acute variceal hemorrhage?",
      "What medications are used for primary and secondary prophylaxis of variceal bleeding?",
      "How does Mallory-Weiss differ from Boerhaave syndrome?",
      "Why should blood transfusion be restricted to Hgb 7–8 in cirrhotic variceal bleeding?",
      "What is TIPS and when is it indicated for esophageal varices?",
    ],
  },
  {
    id: "im-cholangitis-cholelithiasis",
    name: "Cholangitis & Cholelithiasis",
    icdCode: "K83.0",
    rotation: "internal-medicine",
    category: "Gastroenterology / Hepatobiliary",
    definition:
      "Cholelithiasis: gallstones in the gallbladder. Types: cholesterol stones (80% in US — obesity, female, fertile, forty, flatulent — 5 F's), black pigment stones (hemolysis — sickle cell, hereditary spherocytosis), brown pigment stones (bile duct infection/stasis). Most gallstones (80%) are asymptomatic. Acute cholangitis: bacterial infection of the biliary tract (almost always from biliary obstruction — most commonly a common bile duct stone). Ascending cholangitis: life-threatening — requires emergent biliary drainage.",
    diagnosticCriteria:
      "Cholelithiasis: Ultrasound (gold standard, first-line) — echogenic foci with posterior acoustic shadowing (90% sensitivity). Cholangitis: Charcot's triad (fever + RUQ pain + jaundice); Reynolds' pentad = + altered mental status + shock (septic cholangitis). Labs: elevated WBC, direct bilirubin, alkaline phosphatase, GGT; transaminases may be mildly elevated. Blood cultures: positive in 50%. MRCP: non-invasive CBD stone detection. ERCP: diagnostic + therapeutic (stone extraction, stent placement). CT abdomen: if ultrasound inconclusive; shows ductal dilation.",
    presentation: {
      chiefComplaint: [
        "\"I have severe right upper quadrant pain that radiates to my shoulder after eating fatty food\"",
        "\"I'm jaundiced, have RUQ pain, and a high fever\"",
        "\"I was told I have gallstones — do I need surgery?\"",
      ],
      associatedSymptoms: [
        "Biliary colic: episodic RUQ/epigastric pain, 30 min–6 hrs, post-fatty meal, may radiate to right shoulder/scapula, nausea/vomiting — no fever",
        "Acute cholecystitis: constant RUQ pain > 6 hrs, fever, positive Murphy's sign (inspiratory arrest during RUQ palpation — 97% specific)",
        "Choledocholithiasis (CBD stone): jaundice + biliary colic + elevated direct bilirubin + dilated CBD on US",
        "Ascending cholangitis: Charcot's triad + Reynolds' pentad in severe cases — septic shock",
      ],
      demographics:
        "Gallstones: 20 million Americans; women 2× men. Risk factors ('5 F's'): Female, Fertile, Fat, Forty, Flatulent. Also: rapid weight loss, TPN, pregnancy, Crohn's (impaired bile acid reabsorption), hemolytic anemias (pigment stones).",
    },
    distinguishingFeatures:
      "Biliary colic vs. acute cholecystitis: colic is intermittent (< 6 hrs), no fever, no Murphy's; cholecystitis is prolonged, fever, Murphy's positive. Primary sclerosing cholangitis (PSC): chronic cholestatic disease, 'beaded' biliary ducts on MRCP, associated with UC — NOT caused by stones. Primary biliary cholangitis (PBC): autoimmune, anti-mitochondrial antibody (AMA) positive, predominantly women.",
    redFlags: [
      "Reynolds' pentad (Charcot's triad + shock + AMS) → septic cholangitis → emergent ERCP + biliary drainage + IV antibiotics + ICU",
      "Gallstone pancreatitis (stone migrating to pancreatic duct) → amylase/lipase elevation + CBD stone on US → ERCP within 24–48 hrs if cholangitis",
      "Gallbladder empyema or perforation → emergent surgery",
    ],
    mnemonics: [
      {
        name: "Biliary Conditions: The Spectrum",
        content:
          "Cholelithiasis → asymptomatic (80%), biliary colic (< 6 hrs, no fever)\n↓ (stone moves or obstructs)\nCholecystitis → > 6 hrs pain + fever + Murphy's sign → laparoscopic cholecystectomy\nCholedocholithiasis → CBD stone + jaundice + elevated LFTs → ERCP\nCholangitis → Charcot's triad (fever + RUQ pain + jaundice) → EMERGENT ERCP + abx\nSeptic cholangitis → Reynolds' pentad → ICU",
      },
    ],
    pimpingQuestions: [
      "What are Charcot's triad and Reynolds' pentad?",
      "What are the '5 F's' risk factors for cholesterol gallstone formation?",
      "What is Murphy's sign and what is its significance?",
      "What is the management of acute cholangitis?",
      "How do you distinguish biliary colic from acute cholecystitis?",
    ],
  },
  {
    id: "im-upper-gi-cancers",
    name: "Upper GI Cancers (Esophageal, Gastric, Hepatocellular)",
    icdCode: "C16.9",
    rotation: "internal-medicine",
    category: "Gastroenterology / Neoplasms",
    definition:
      "Esophageal cancer: two main types — squamous cell carcinoma (SCC, upper/mid — risk: smoking, alcohol, achalasia, hot liquids, Plummer-Vinson syndrome) and adenocarcinoma (lower/GEJ — risk: Barrett's esophagus from GERD, obesity, white males, most rapidly increasing cancer in US). Gastric cancer: adenocarcinoma (95%); H. pylori the #1 risk factor; also smoked/salted foods, pernicious anemia, blood type A, Lauren diffuse type ('linitis plastica'). Hepatocellular carcinoma (HCC): #1 primary liver cancer; arises in cirrhosis (90%) or chronic HBV; AFP elevated.",
    diagnosticCriteria:
      "Esophageal CA: EGD + biopsy (gold standard); staging with CT chest/abdomen/pelvis + PET-CT; EUS for T and N staging. Gastric CA: EGD + biopsy; barium swallow — 'leather bottle/linitis plastica' for diffuse type. HCC: diagnosis without biopsy if LI-RADS ≥ 4 (arterial phase enhancement + portal venous washout on multiphase CT or MRI) in cirrhotic patient; AFP > 400 ng/mL strongly suggestive; surveillance: US ± AFP every 6 months in cirrhotic/chronic HBV patients.",
    presentation: {
      chiefComplaint: [
        "\"I have progressive difficulty swallowing — solids first, then liquids\"",
        "\"I've been losing weight, feeling full quickly, and vomiting after small meals\"",
        "\"I have cirrhosis and my AFP suddenly jumped to 500\"",
      ],
      associatedSymptoms: [
        "Esophageal CA: progressive dysphagia (solids → liquids), odynophagia, weight loss, regurgitation, hoarseness (recurrent laryngeal nerve), hematemesis",
        "Gastric CA: vague epigastric pain, early satiety, weight loss, anemia, nausea/vomiting, Virchow's node (L supraclavicular LAD), Sister Mary Joseph nodule (periumbilical), Blumer's shelf (rectal shelf on digital exam)",
        "HCC: RUQ pain/mass, worsening ascites, hepatic decompensation in known cirrhotic, weight loss, paraneoplastic (hypoglycemia, erythrocytosis, hypercalcemia)",
      ],
      demographics:
        "Barrett's esophagus: metaplasia of distal esophageal epithelium from squamous to intestinal columnar (due to acid injury) — precursor to adenocarcinoma; annual EGD surveillance. HCC: 90% in cirrhosis; HBV without cirrhosis also causes HCC (unique). HCC surveillance: high-risk = liver cirrhosis (any cause) + chronic HBV (even without cirrhosis).",
    },
    distinguishingFeatures:
      "Esophageal SCC vs. adenocarcinoma: SCC = upper/mid esophagus, smoking/alcohol/achalasia; adenocarcinoma = lower/GEJ, Barrett's, GERD, rising incidence in white males. Gastric cancer alarm symptoms (Alarm Features): progressive dysphagia, weight loss, hematemesis, early satiety, palpable mass → MANDATORY endoscopy regardless of age. HCC vs. metastatic liver disease: HCC in cirrhotic + elevated AFP + LI-RADS imaging criteria; metastatic disease from colon/breast/lung most common overall.",
    redFlags: [
      "Alarm symptoms with dyspepsia → urgent EGD (do not treat empirically)",
      "Barrett's esophagus with high-grade dysplasia → endoscopic eradication therapy (RFA, EMR)",
      "HCC in cirrhotic: MELD scores and Milan criteria guide transplant listing",
    ],
    mnemonics: [
      {
        name: "Gastric Cancer Metastasis Signs",
        content:
          "Virchow's node — L supraclavicular lymph node (Troisier's sign)\nKrukenberg tumor — ovarian metastasis (signet ring cells)\nBlumer's shelf — rectal shelf on digital exam (peritoneal spread)\nSister Mary Joseph nodule — periumbilical nodule (peritoneal spread)\nIrish node — L axillary node",
      },
    ],
    pimpingQuestions: [
      "What is Barrett's esophagus and why is it significant?",
      "What are the metastatic signs associated with gastric cancer?",
      "How is HCC diagnosed without biopsy in a cirrhotic patient?",
      "What is the difference between esophageal SCC and adenocarcinoma in terms of location and risk factors?",
      "What AFP level is strongly suggestive of HCC?",
    ],
  },
  {
    id: "im-gastroenteritis",
    name: "Infectious Gastroenteritis",
    icdCode: "A09",
    rotation: "internal-medicine",
    category: "Gastroenterology / Infectious",
    definition:
      "Inflammation of stomach and intestines from infectious agents. Causes: viral (norovirus #1 cause in US, rotavirus #1 in unvaccinated children, adenovirus), bacterial (Salmonella, Campylobacter, Shigella, STEC/E. coli O157:H7, V. cholerae, C. difficile — antibiotic-associated), parasitic (Giardia, Cryptosporidium, Entamoeba). Most are self-limiting; complications occur in elderly, immunocompromised, inflammatory bowel conditions.",
    diagnosticCriteria:
      "Clinical diagnosis in most cases. Stool studies when indicated (bloody diarrhea, fever, immunocompromised, hospitalized, prolonged > 7 days): stool culture, ova & parasites, C. diff toxin PCR. CBC: leukocytosis (bacterial), eosinophilia (parasitic). BMP: electrolytes, renal function (dehydration). E. coli O157:H7: stool culture on SMAC agar; PCR for Shiga toxin; associated with hemolytic uremic syndrome (HUS) — thrombocytopenia + microangiopathic hemolytic anemia + AKI.",
    presentation: {
      chiefComplaint: [
        "\"Everyone at the party is sick with vomiting and diarrhea — it started 6 hours ago\"",
        "\"I have bloody diarrhea and fever after eating undercooked beef\"",
        "\"I've had watery diarrhea and cramps for 3 days after hiking and drinking stream water\"",
      ],
      associatedSymptoms: [
        "Viral (norovirus): sudden onset, N/V/D, low-grade fever, resolves in 1–3 days, explosive outbreaks (cruise ships, schools)",
        "Salmonella: raw eggs/poultry, fever, non-bloody diarrhea → bacteremia in sickle cell (most common bacterial cause of osteomyelitis in SCD)",
        "Campylobacter: poultry, raw milk; bloody diarrhea, fever; post-infectious complication — Guillain-Barré syndrome",
        "STEC/O157:H7: undercooked beef/spinach; bloody diarrhea + NO FEVER; HUS in children",
        "Giardia: stream water, daycare; prolonged watery/fatty diarrhea, bloating, flatulence; NO WBCs in stool",
        "C. difficile: post-antibiotic; watery diarrhea, fever, leukocytosis; pseudomembranous colitis",
      ],
      demographics:
        "Norovirus: 19–21 million US cases/year; most common cause of epidemic gastroenteritis. Traveler's diarrhea: ETEC most common bacterial cause; treat with azithromycin (fluoroquinolone resistance rising) + bismuth/loperamide. Rotavirus: dramatic decrease since vaccination in pediatric population.",
    },
    distinguishingFeatures:
      "Watery vs. inflammatory diarrhea: watery (no WBCs) = viral, ETEC, Giardia, cholera (toxin-mediated); inflammatory (WBCs, blood) = Shigella, Campylobacter, STEC, Salmonella, C. diff, E. histolytica. STEC: bloody diarrhea + NO FEVER + HUS → AVOID antibiotics and antidiarrheal agents (increase HUS risk by releasing Shiga toxin). C. diff: always consider with recent antibiotic use; diagnose with stool PCR/GDH + toxin.",
    redFlags: [
      "STEC/O157:H7 — AVOID antibiotics and loperamide (↑ HUS risk) → supportive care + hydration",
      "HUS (MAHA + thrombocytopenia + AKI) → ICU, dialysis, avoid platelet transfusion (worsens TTP/HUS)",
      "C. diff severe disease (WBC > 15, Cr > 1.5, age > 65, hypotension) → oral vancomycin or fidaxomicin",
      "Cholera: profuse watery 'rice-water' stools → rapid dehydration → aggressive IV/ORS rehydration + doxycycline",
    ],
    mnemonics: [
      {
        name: "Bloody Diarrhea Causes: CHESS",
        content:
          "C — Campylobacter (poultry; GBS trigger)\nH — HUS/EHEC O157 (beef; AVOID abx)\nE — Entamoeba histolytica (travel; 'flask-shaped' ulcers)\nS — Salmonella (eggs; bacteremia in SCD)\nS — Shigella (4 F's: fingers, food, flies, feces; low inoculum; HUS possible)\nRemember: C. diff = antibiotic-associated watery/bloody diarrhea",
      },
    ],
    pimpingQuestions: [
      "Why should antibiotics be avoided in E. coli O157:H7 infection?",
      "What is the triad of hemolytic uremic syndrome (HUS) and what causes it?",
      "What bacterial cause of gastroenteritis is associated with Guillain-Barré syndrome?",
      "What organism causes traveler's diarrhea most commonly?",
      "What stool finding distinguishes inflammatory from secretory/toxin-mediated diarrhea?",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 2 — PULMONARY ADDITIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "im-sarcoidosis",
    name: "Sarcoidosis",
    icdCode: "D86.9",
    rotation: "internal-medicine",
    category: "Pulmonary / Inflammatory",
    definition:
      "A multisystem granulomatous disease of unknown etiology characterized by non-caseating granulomas (unlike TB which caseates). Predominantly affects lungs (90%), but can involve almost any organ: lymph nodes, skin, eyes, liver, heart, nervous system. Most patients (60–70%) have spontaneous remission; 20–30% develop chronic progressive disease. Treatment: corticosteroids when organ-threatening.",
    diagnosticCriteria:
      "CXR: bilateral hilar lymphadenopathy (BHL) — most common finding; staging: Stage 0 (normal) → I (BHL only) → II (BHL + parenchymal infiltrates) → III (parenchymal infiltrates, no BHL) → IV (pulmonary fibrosis). CT chest: more sensitive — perilymphatic nodules, 'galaxy sign,' ground glass. Bronchoscopy + BAL: CD4:CD8 ratio > 3.5 in BAL supports diagnosis. TBLB (transbronchial biopsy): non-caseating granulomas without organisms. Serum ACE: elevated in 60% — not specific; useful for monitoring disease activity. 24-hr urine calcium: elevated (granulomas produce 1-alpha-hydroxylase → ↑ vit D → hypercalciuria → nephrolithiasis). PFTs: restrictive pattern (↓ TLC, ↓ DLCO).",
    presentation: {
      chiefComplaint: [
        "\"I'm a 35-year-old Black woman with a persistent cough and shortness of breath\"",
        "\"My chest X-ray showed enlarged lymph nodes in my chest — I feel fine\"",
        "\"I have blurry vision, a rash on my legs, and joint pain — and now they found lung involvement\"",
      ],
      associatedSymptoms: [
        "Pulmonary: dyspnea on exertion, dry cough, chest tightness (majority are asymptomatic)",
        "Constitutional: fatigue, fever, weight loss",
        "Skin: erythema nodosum (tender red nodules, anterior shins — good prognosis), lupus pernio (violaceous plaque on nose/cheeks — chronic, poor prognosis)",
        "Eyes: uveitis (anterior > posterior) — may be asymptomatic; #1 cause of blindness in sarcoidosis",
        "Löfgren syndrome: triad of bilateral hilar LAD + erythema nodosum + polyarthritis — acute, excellent prognosis, often resolves spontaneously",
        "Cardiac: heart block, VT, sudden death (cardiac sarcoidosis — ~ 5%)",
        "Neuro: cranial nerve palsies (CN VII bilateral facial palsy — most common), Heerfordt syndrome (uveoparotid fever)",
      ],
      demographics:
        "Bimodal: 25–35 and 45–65 years. African Americans: 3–10× higher incidence, more severe. Female > male. Scandinavians: high prevalence. Spontaneous resolution more likely in Löfgren syndrome.",
    },
    distinguishingFeatures:
      "Sarcoidosis vs. TB: both cause granulomas and hilar LAD; sarcoid granulomas are NON-caseating (TB = caseating). Sarcoid hypercalcemia: from granuloma 1-alpha-hydroxylase activity (autonomous vitamin D activation), NOT PTH-mediated. Löfgren syndrome = best prognosis in sarcoid. Lupus pernio = worst prognosis. ACE elevated but NOT diagnostic alone.",
    redFlags: [
      "Cardiac sarcoidosis — heart block, VT → ICD consideration; PET-MRI guided therapy",
      "Neurosarcoidosis — cranial nerve palsies, meningitis, seizures → high-dose steroids",
      "Hypercalcemia → nephrolithiasis, nephrocalcinosis → avoid high calcium intake and excess sun",
      "Ocular sarcoidosis with uveitis → ophthalmology; vision-threatening without treatment",
    ],
    mnemonics: [
      {
        name: "Sarcoidosis Findings: GRAIN",
        content:
          "G — Granulomas (non-caseating — distinguishes from TB)\nR — Raised ACE + Restrictive PFTs\nA — African American women (highest incidence), Anterior uveitis\nI — Intrathoracic adenopathy (bilateral hilar = classic CXR)\nN — Non-caseating; Negative TB stain/culture (exclude TB first)\nExtra: Löfgren = good prognosis; Lupus pernio = bad prognosis",
      },
    ],
    pimpingQuestions: [
      "What type of granuloma characterizes sarcoidosis vs. tuberculosis?",
      "What is Löfgren syndrome and what is its prognosis?",
      "Why do sarcoidosis patients develop hypercalcemia?",
      "What is lupus pernio and what does it signify?",
      "What is the most common cause of blindness in sarcoidosis?",
    ],
  },
  {
    id: "im-solitary-pulmonary-nodule",
    name: "Solitary Pulmonary Nodule",
    icdCode: "R91.1",
    rotation: "internal-medicine",
    category: "Pulmonary / Neoplasms",
    definition:
      "A single, well-defined, round opacity ≤ 3 cm in diameter completely surrounded by lung parenchyma on imaging (no pleural contact, no atelectasis, no lymphadenopathy). Lesions > 3 cm = lung mass (higher malignancy risk). Most SPNs are benign (granulomas from prior infection — histoplasma, TB, coccidio — most common overall). Malignant risk: 1–2% if < 5 mm; > 40% if > 2 cm in high-risk patient. Management is risk stratification-based.",
    diagnosticCriteria:
      "CT chest (non-contrast): gold standard for characterization — size, density (solid, part-solid, ground glass), margins (spiculated = high malignancy risk; smooth = benign), calcification pattern (central/laminar/diffuse/'popcorn' = benign; eccentric = suspicious). PET-CT: for nodules > 8 mm with intermediate malignancy probability — FDG uptake suggests malignancy (but false negatives: carcinoid, ground glass adenocarcinoma). Fleischner Society guidelines (2017): management based on nodule size, morphology, and patient risk (smoking, age, family history). Biopsy: CT-guided needle biopsy or bronchoscopy for high-risk or large nodules. Resection if high-risk and biopsy inconclusive.",
    presentation: {
      chiefComplaint: [
        "\"My chest CT for something else showed a spot on my lung\"",
        "\"I'm a 62-year-old smoker — they found a 1.2 cm nodule on my lung\"",
        "\"My lung cancer screening CT showed a nodule — what do I do?\"",
      ],
      associatedSymptoms: [
        "Typically ASYMPTOMATIC — incidental finding",
        "Malignant SPN symptoms (late): cough, hemoptysis, weight loss, chest pain",
        "Prior exposure history: endemic fungi (histoplasma — Midwest/Ohio River Valley, coccidio — Southwest), TB, silica/asbestos",
      ],
      demographics:
        "1.6 million SPNs detected annually in US. Risk stratification: HIGH risk — age > 60, heavy smoker, spiculated/irregular margins, upper lobe location, large size (> 2 cm), prior cancer; LOW risk — age < 35, non-smoker, smooth margins, central calcification, stable × 2 years. USPSTF lung cancer screening: annual low-dose CT (LDCT) for adults 50–80 with ≥ 20 pack-year history and currently smoke or quit < 15 years ago.",
    },
    distinguishingFeatures:
      "Benign calcification patterns: central (granuloma), laminated/target (histoplasma), diffuse (benign), 'popcorn' (hamartoma). Malignant calcification: eccentric. Spiculated margins: high malignancy risk (likelihood ratio 5:1). Ground-glass opacity (GGO) nodule: may represent adenocarcinoma in situ or minimally invasive — slower growth, more indolent. Stability on CT × 2 years: traditionally considered benign (Fleischner), but part-solid and GGO lesions require longer follow-up.",
    redFlags: [
      "Spiculated margins, size > 2 cm, upper lobe, smoker > 60 → PET-CT and/or biopsy",
      "Growth on serial imaging → biopsy/resection",
      "Any hemoptysis with lung nodule → urgent workup",
    ],
    mnemonics: [
      {
        name: "Benign Calcification Patterns: CHILD",
        content:
          "C — Central (granuloma)\nH — Hamartoma ('popcorn' — classic benign calcification)\nI — Irregular diffuse\nL — Laminated/target (histoplasma)\nD — Diffuse throughout nodule\nEccentric calcification = SUSPICIOUS for malignancy",
      },
    ],
    pimpingQuestions: [
      "What size distinguishes a solitary pulmonary nodule from a lung mass?",
      "Which calcification patterns are reassuringly benign vs. suspicious?",
      "What are the Fleischner Society criteria for follow-up vs. immediate workup of an SPN?",
      "What does spiculated margin signify?",
      "What are the USPSTF criteria for lung cancer screening?",
    ],
  },
  {
    id: "im-cor-pulmonale",
    name: "Cor Pulmonale",
    icdCode: "I27.81",
    rotation: "internal-medicine",
    category: "Pulmonary / Cardiovascular",
    definition:
      "Right ventricular hypertrophy and eventual failure caused by pulmonary arterial hypertension secondary to pulmonary disease (as opposed to left heart disease). Most common cause: COPD. Other causes: interstitial lung disease, obstructive sleep apnea, PE, pulmonary vascular disease. Key pathophysiology: lung disease → hypoxia → hypoxic pulmonary vasoconstriction → pulmonary HTN → RV pressure overload → RV hypertrophy → RV failure.",
    diagnosticCriteria:
      "EKG: right axis deviation, R-wave in V1 > S-wave, P pulmonale (tall peaked P in II > 2.5 mm), RBBB, S1Q3T3. CXR: enlarged pulmonary arteries (PA > ascending aorta width), RV enlargement (loss of retrosternal air space on lateral), increased vascular markings. Echo: RV dilation and hypertrophy, elevated RVSP (estimated via TR jet velocity), paradoxical septal motion ('D-sign'). Right heart catheterization: gold standard for PA pressure (mPAP > 20 mmHg = PAH). PFTs: underlying COPD or ILD pattern. ABG: hypoxemia, hypercapnia.",
    presentation: {
      chiefComplaint: [
        "\"I have COPD and now my legs are very swollen\"",
        "\"I can't breathe and my belly is getting bigger\"",
        "\"My doctor says my right side of my heart is failing from my lung disease\"",
      ],
      associatedSymptoms: [
        "Progressive dyspnea (from both lung disease and right heart failure)",
        "Right heart failure signs: elevated JVP, hepatomegaly, peripheral edema, ascites",
        "Loud P2 (pulmonic component of S2 — due to elevated PA pressure)",
        "TR murmur (holosystolic at LLSB, increases with inspiration — Carvallo's sign)",
        "Cyanosis (central + peripheral)",
      ],
      demographics:
        "COPD most common cause (50–70% of cor pulmonale cases). Occurs late in COPD course — sign of severe disease. PAH from lung disease (Group 3 WHO classification). OSA can contribute via intermittent hypoxia.",
    },
    distinguishingFeatures:
      "Cor pulmonale vs. left heart failure: cor pulmonale — RV failure, clear lungs or hyperinflated, clear-lung edema pattern; LHF — LV failure, bilateral crackles, pulmonary edema, Kerley B lines. Cor pulmonale vs. primary PAH: cor pulmonale has underlying lung disease; Group 1 PAH has no lung disease, may have connective tissue disease, HIV, drugs.",
    redFlags: [
      "Hypoxemia in COPD driving RV failure → supplemental O2 to keep SpO2 ≥ 88–92% (reduces hypoxic vasoconstriction)",
      "Acute decompensation → hospital admission, diuresis (careful — RV preload dependent)",
    ],
    mnemonics: [
      {
        name: "Cor Pulmonale EKG: RAD + P Pulmonale",
        content:
          "R — Right axis deviation (> +90°)\nA — Anterior R/S ratio (R > S in V1)\nD — Dominant P in II (tall, peaked > 2.5 mm = P pulmonale)\nS1Q3T3 — sign of acute RV strain (also seen in PE)\nLarge RV on echo, dilated pulmonary arteries on CXR",
      },
    ],
    pimpingQuestions: [
      "What is the most common cause of cor pulmonale?",
      "What is the pathophysiology connecting COPD to right heart failure?",
      "What are the EKG findings in cor pulmonale?",
      "How does cor pulmonale differ from left heart failure on examination?",
      "What is the treatment target for oxygen saturation in COPD patients to prevent cor pulmonale progression?",
    ],
  },
  {
    id: "im-sarcoid-pneumoconiosis",
    name: "Pneumoconiosis & Occupational Lung Diseases",
    icdCode: "J64",
    rotation: "internal-medicine",
    category: "Pulmonary / Occupational",
    definition:
      "Parenchymal lung diseases caused by inhalation of mineral dusts. Major types: Silicosis (crystalline silica — mining, sandblasting, quarrying), Coal workers' pneumoconiosis (CWP/'black lung' — coal dust), Asbestosis (asbestos — shipbuilding, construction, insulation). Key concepts: (1) There is no treatment — prevention is key. (2) Asbestos exposure also causes mesothelioma, lung cancer, pleural plaques, and effusions. (3) Silicosis increases risk of TB.",
    diagnosticCriteria:
      "Occupational history: essential. CXR and HRCT chest: Silicosis — upper lobe nodules, 'eggshell calcification' of hilar lymph nodes (classic); CWP — upper lobe nodules (PMF = progressive massive fibrosis = large bilateral upper lobe masses); Asbestosis — lower lobe fibrosis, pleural plaques (calcified pleural plaques = pathognomonic of asbestos exposure). PFTs: restrictive (↓ FVC, ↓ TLC, ↓ DLCO). BAL: dust-laden macrophages (ferruginous bodies = asbestos bodies in asbestosis). Biopsy rarely needed if occupational history + imaging consistent.",
    presentation: {
      chiefComplaint: [
        "\"I worked in coal mines for 30 years and now I'm short of breath\"",
        "\"I sandblasted buildings for 20 years — my chest X-ray shows nodules\"",
        "\"I worked with asbestos and now I have a pleural effusion and shortness of breath\"",
      ],
      associatedSymptoms: [
        "Progressive exertional dyspnea (insidious onset, years after exposure)",
        "Dry cough, reduced exercise tolerance",
        "Silicosis + increased TB susceptibility: TB is the most common complication of silicosis",
        "Asbestosis: bilateral basal crackles, clubbing, restrictive PFTs",
        "Mesothelioma (asbestos): chest pain, recurrent pleural effusion, progressive dyspnea (latency 20–40 years)",
      ],
      demographics:
        "Latency: silicosis 10–30 years (accelerated form: 5–10 years with high-intensity exposure); CWP: decades. Eggshell calcification of hilar nodes: pathognomonic for silicosis. Caplan syndrome: rheumatoid arthritis + pneumoconiosis → large lung nodules.",
    },
    distinguishingFeatures:
      "Silicosis vs. sarcoidosis: both cause bilateral hilar adenopathy and upper lobe nodules; silicosis has eggshell calcification, occupational history. Asbestosis vs. IPF: both lower lobe fibrosis; asbestosis has pleural plaques, occupational history.",
    redFlags: [
      "Silicosis + new/worsening symptoms → rule out TB (20× increased risk)",
      "Asbestosis + rapid decline or pleural mass → rule out mesothelioma (CT ± biopsy)",
      "All occupational lung diseases: remove from exposure, no curative treatment",
    ],
    mnemonics: [
      {
        name: "Pneumoconiosis Types: SAC",
        content:
          "S — Silicosis: upper lobe, eggshell calcification, sandblasters/miners; TB risk ↑↑\nA — Asbestosis: lower lobe, pleural plaques, shipworkers; mesothelioma + lung CA risk ↑↑\nC — Coal workers' (CWP): upper lobe, black lung, PMF = progressive massive fibrosis\nCaplan syndrome: RA + pneumoconiosis = large lung nodules",
      },
    ],
    pimpingQuestions: [
      "What is the classic radiographic finding of silicosis in hilar lymph nodes?",
      "Which pneumoconiosis is associated with mesothelioma and pleural plaques?",
      "What complication is silicosis patients at markedly increased risk for?",
      "What is Caplan syndrome?",
      "What PFT pattern is seen in pneumoconiosis?",
    ],
  },
];
