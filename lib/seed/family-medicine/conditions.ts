import type { Condition } from "@/types";

export const familyMedicineConditions: Condition[] = [
  {
    id: "fm-htn",
    name: "Hypertension",
    icdCode: "I10",
    rotation: "family-medicine",
    category: "Cardiovascular",
    definition:
      "Hypertension is a chronic elevation of systemic arterial blood pressure defined as sustained readings ≥130/80 mmHg per ACC/AHA 2017 guidelines. It is a major modifiable risk factor for stroke, myocardial infarction, heart failure, and chronic kidney disease. Primary (essential) hypertension accounts for ~95% of cases with no identifiable underlying cause.",
    diagnosticCriteria:
      "ACC/AHA 2017: Normal <120/<80; Elevated 120–129/<80; Stage 1 HTN 130–139/80–89; Stage 2 HTN ≥140/≥90. Confirm with ≥2 readings on ≥2 separate occasions. ABPM or home BP monitoring preferred to exclude white-coat hypertension. Secondary causes should be investigated if resistant to 3 medications, age <30, or associated with hypokalemia, snoring, or renal bruits.",
    presentation: {
      chiefComplaint: ["Headache (occipital)", "Asymptomatic (found incidentally)", "Epistaxis", "Dizziness"],
      associatedSymptoms: ["Usually asymptomatic", "Blurred vision (severe)", "Chest pain (hypertensive urgency)", "Dyspnea"],
      demographics: "Affects ~47% of US adults. More prevalent in Black Americans, men >45, women >55, obesity, family history, high-sodium diet, physical inactivity.",
    },
    distinguishingFeatures:
      "Primary HTN has no identifiable cause; secondary HTN clues include: resistant HTN, age <30, associated hypokalemia (hyperaldosteronism), renal artery bruit (renovascular), weight gain + striae (Cushing's), palpitations + diaphoresis (pheochromocytoma), snoring (OSA).",
    redFlags: [
      "BP >180/120 with end-organ damage = hypertensive emergency (encephalopathy, ACS, aortic dissection)",
      "Sudden severe headache with nausea/vomiting",
      "Focal neurological deficits",
      "Chest pain or back pain with severe hypertension",
      "Papilledema on fundoscopy",
    ],
    mnemonics: [
      {
        name: "Secondary HTN causes: CHAPS",
        content:
          "C – Coarctation of aorta; H – Hyperaldosteronism (Conn's); A – Adrenal (pheochromocytoma, Cushing's); P – Parenchymal renal disease; S – Stenosis (renal artery)",
      },
      {
        name: "End-organ damage: CHEKS",
        content:
          "C – Coronary artery disease; H – Heart failure; E – Eye (retinopathy); K – Kidney (CKD); S – Stroke/TIA",
      },
    ],
    pimpingQuestions: [
      "What is the new ACC/AHA 2017 definition of hypertension and how does it differ from JNC 8?",
      "How do you distinguish hypertensive urgency from hypertensive emergency?",
      "Which antihypertensive is first-line in a Black patient vs. a White patient with HTN and no comorbidities?",
      "What workup do you order at initial diagnosis of hypertension?",
      "At what blood pressure threshold do you start pharmacotherapy in Stage 1 HTN with low ASCVD risk?",
    ],
  },
  {
    id: "fm-dm2",
    name: "Type 2 Diabetes Mellitus",
    icdCode: "E11.9",
    rotation: "family-medicine",
    category: "Endocrine",
    definition:
      "Type 2 diabetes mellitus (T2DM) is a chronic metabolic disorder characterized by progressive insulin resistance and relative insulin deficiency, resulting in hyperglycemia. It accounts for ~90–95% of all diabetes cases and is strongly associated with obesity, physical inactivity, and genetic predisposition. Long-term complications affect the microvascular (retinopathy, nephropathy, neuropathy) and macrovascular systems (CAD, stroke, PAD).",
    diagnosticCriteria:
      "ADA 2024: Fasting plasma glucose ≥126 mg/dL (8h fast); OR 2-hour plasma glucose ≥200 mg/dL during 75g OGTT; OR HbA1c ≥6.5%; OR random plasma glucose ≥200 mg/dL with classic symptoms. Prediabetes: FPG 100–125 (IFG), 2h PG 140–199 (IGT), HbA1c 5.7–6.4%. Confirm with repeat testing unless unequivocally symptomatic.",
    presentation: {
      chiefComplaint: ["Polyuria", "Polydipsia", "Fatigue", "Blurred vision", "Asymptomatic (found on screening)"],
      associatedSymptoms: ["Polyphagia", "Unintentional weight loss (less common in T2)", "Recurrent infections (UTIs, skin)", "Slow wound healing", "Paresthesias (peripheral neuropathy)"],
      demographics: "Most common in adults >45, but increasing in younger patients. Risk factors: obesity (BMI ≥25), family history, physical inactivity, gestational diabetes history, prediabetes, Hispanic/Black/Native American/Asian ancestry.",
    },
    distinguishingFeatures:
      "T2DM: gradual onset, overweight/obese, no ketosis-prone initially, C-peptide present, no anti-GAD/anti-islet antibodies. T1DM: younger onset, autoimmune, anti-GAD positive, rapid progression to insulin dependence. LADA: adult-onset, initially responds to oral agents but progresses to insulin.",
    redFlags: [
      "HbA1c >10% with symptoms suggesting DKA (nausea, vomiting, abdominal pain)",
      "Rapid weight loss in T2DM patient (consider T1DM or malignancy)",
      "Foot ulcer or gangrene (urgent vascular + wound care referral)",
      "Sudden visual loss (proliferative retinopathy, vitreous hemorrhage)",
      "Creatinine rising rapidly (diabetic nephropathy progression or AKI)",
    ],
    mnemonics: [
      {
        name: "ADA Diagnostic Criteria: FAT-R",
        content:
          "F – Fasting glucose ≥126; A – A1c ≥6.5%; T – Two-hour OGTT ≥200; R – Random glucose ≥200 with symptoms",
      },
      {
        name: "Microvascular complications: RNP",
        content: "R – Retinopathy; N – Nephropathy; P – (Peri)neuropathy",
      },
    ],
    pimpingQuestions: [
      "What are the ADA diagnostic criteria for Type 2 Diabetes?",
      "What is the first-line pharmacotherapy for T2DM and why?",
      "What HbA1c target do you use for a healthy 45-year-old vs. a frail 80-year-old with multiple comorbidities?",
      "Which diabetes medications have proven cardiovascular mortality benefit?",
      "At what eGFR do you hold metformin?",
    ],
  },
  {
    id: "fm-hld",
    name: "Hyperlipidemia",
    icdCode: "E78.5",
    rotation: "family-medicine",
    category: "Cardiovascular",
    definition:
      "Hyperlipidemia refers to elevated levels of lipids (cholesterol, triglycerides, or both) in the blood, which significantly increases the risk of atherosclerotic cardiovascular disease (ASCVD). The most clinically relevant subtypes are hypercholesterolemia (elevated LDL-C) and hypertriglyceridemia. Both primary (genetic) and secondary (diet, hypothyroidism, diabetes, medications) causes exist.",
    diagnosticCriteria:
      "ACC/AHA 2018/2019: Assess 10-year ASCVD risk using Pooled Cohort Equations. High-intensity statin if: clinical ASCVD, LDL ≥190 mg/dL (FH), DM age 40–75, or 10-year ASCVD risk ≥7.5%. Fasting lipid panel: Total cholesterol ≥200, LDL ≥130, HDL <40 (men)/<50 (women), TG ≥150 = at-risk thresholds. Optimal LDL varies by risk tier.",
    presentation: {
      chiefComplaint: ["Asymptomatic (found on routine screening)", "Xanthelasma (eyelid deposits)", "Tendinous xanthomas (FH)", "Corneal arcus in young patient"],
      associatedSymptoms: ["Usually none until cardiovascular event occurs", "Eruptive xanthomas (TG >1000)", "Pancreatitis (TG >500)", "Abdominal pain"],
      demographics: "Affects >100 million Americans. Familial hypercholesterolemia: 1 in 250 (heterozygous). Risk increases with age, male sex, Western diet, sedentary lifestyle, metabolic syndrome.",
    },
    distinguishingFeatures:
      "Primary hypercholesterolemia vs. secondary: check TSH, glucose, LFTs, creatinine. Familial hypercholesterolemia: LDL >190, positive family history, tendon xanthomas, arcus corneae before age 45. Combined hyperlipidemia: elevated LDL + TG together, often metabolic syndrome.",
    redFlags: [
      "LDL ≥190 mg/dL (familial hypercholesterolemia — requires high-intensity statin regardless of ASCVD risk)",
      "TG ≥500 mg/dL (pancreatitis risk — triglyceride-lowering priority)",
      "New ASCVD event in a treated patient (reassess adherence and intensify therapy)",
      "Statin myopathy: unexplained muscle weakness/pain with CK elevation",
    ],
    mnemonics: [
      {
        name: "Statin intensity groups: HIGH (RAPS)",
        content:
          "High-intensity statins: Rosuvastatin 20–40mg, Atorvastatin 40–80mg. These achieve ≥50% LDL reduction.",
      },
    ],
    pimpingQuestions: [
      "What are the four groups for whom statin therapy is recommended per ACC/AHA 2018?",
      "What is the LDL goal for a patient with established ASCVD on maximum statin therapy?",
      "When would you add ezetimibe or a PCSK9 inhibitor?",
      "What is the most dangerous complication of hypertriglyceridemia >500?",
      "Which secondary causes of hyperlipidemia must be excluded?",
    ],
  },
  {
    id: "fm-copd",
    name: "Chronic Obstructive Pulmonary Disease",
    icdCode: "J44.1",
    rotation: "family-medicine",
    category: "Pulmonary",
    definition:
      "COPD is a preventable, treatable lung disease characterized by persistent respiratory symptoms and airflow limitation due to airway and alveolar abnormalities, usually caused by significant exposure to noxious particles or gases (predominantly cigarette smoke). It encompasses chronic bronchitis and emphysema. COPD is a leading cause of morbidity and mortality worldwide.",
    diagnosticCriteria:
      "GOLD 2024: Spirometry showing post-bronchodilator FEV1/FVC <0.70 confirms persistent airflow limitation. GOLD severity: GOLD 1 (FEV1 ≥80% predicted), GOLD 2 (50–79%), GOLD 3 (30–49%), GOLD 4 (<30%). Symptom assessment: mMRC dyspnea scale or CAT score. GOLD ABCD groups based on symptoms + exacerbation history guide therapy.",
    presentation: {
      chiefComplaint: ["Chronic productive cough", "Progressive dyspnea on exertion", "Wheezing", "Increased sputum production"],
      associatedSymptoms: ["Morning cough", "Recurrent respiratory infections", "Decreased exercise tolerance", "Barrel chest", "Use of accessory muscles"],
      demographics: "Predominately adults >40 with >10 pack-year smoking history. Also: occupational dust/fume exposure, alpha-1 antitrypsin deficiency (consider in younger patients/non-smokers).",
    },
    distinguishingFeatures:
      "COPD vs. asthma: COPD = incomplete reversibility on spirometry, older age, smoking history, persistent symptoms; Asthma = complete reversibility, younger age, atopy, variable symptoms. Chronic bronchitis: productive cough ≥3 months/year for ≥2 consecutive years. Emphysema: destruction of alveolar walls, air trapping, barrel chest, diminished breath sounds.",
    redFlags: [
      "SpO2 <88% at rest (may need supplemental oxygen)",
      "Acute exacerbation with altered mental status (hypercapnic respiratory failure — prepare for NIV/intubation)",
      "Rapid FEV1 decline (>50 mL/year — rule out alpha-1 antitrypsin deficiency)",
      "Hemoptysis (rule out lung cancer, especially in smoker)",
      "Weight loss >10% (consider lung cancer, cachexia)",
    ],
    mnemonics: [
      {
        name: "COPD Exacerbation triggers: 3 I's",
        content: "Infection (most common — viral or bacterial), Irritants (air pollution, smoke), Ischemia (cardiac decompensation mimicking exacerbation)",
      },
      {
        name: "GOLD ABCD groups",
        content: "A (low symptoms, low risk) → SABA prn; B (high symptoms, low risk) → LAMA/LABA; C (low symptoms, high risk) → LAMA; D (high symptoms, high risk) → LAMA + LABA ± ICS",
      },
    ],
    pimpingQuestions: [
      "What spirometric criteria confirm COPD diagnosis?",
      "What is the GOLD classification and how does it guide therapy?",
      "Which COPD medications reduce exacerbation frequency (not just symptoms)?",
      "What are the indications for long-term oxygen therapy in COPD?",
      "When do you consider referring for lung volume reduction surgery?",
    ],
  },
  {
    id: "fm-asthma",
    name: "Asthma",
    icdCode: "J45.909",
    rotation: "family-medicine",
    category: "Pulmonary",
    definition:
      "Asthma is a chronic inflammatory airway disease characterized by variable and recurring symptoms, airflow obstruction, bronchial hyperresponsiveness, and underlying airway inflammation. It is typically reversible with bronchodilators. Triggers include allergens, exercise, viral infections, cold air, and irritants.",
    diagnosticCriteria:
      "GINA 2023: History of variable respiratory symptoms (wheeze, SOB, chest tightness, cough) + spirometry showing variable expiratory airflow limitation (FEV1/FVC <0.75–0.80 adults; post-BD FEV1 increase ≥12% and ≥200 mL from baseline; OR peak flow variability >10%; OR positive methacholine challenge). Step classification (GINA 1–5) guides therapy.",
    presentation: {
      chiefComplaint: ["Episodic wheezing", "Chest tightness", "Shortness of breath (especially nocturnal/early morning)", "Cough (especially at night)"],
      associatedSymptoms: ["Allergic rhinitis", "Eczema/atopic dermatitis", "Food or environmental allergies", "Family history of asthma"],
      demographics: "Affects ~26 million Americans. Childhood onset common. More prevalent in Black and Puerto Rican patients. Atopy is the strongest risk factor.",
    },
    distinguishingFeatures:
      "Asthma vs. COPD: Asthma = younger, atopic, reversible, variable; COPD = older, smoker, irreversible. Cardiac asthma: heart failure causing wheeze — responds to diuresis not bronchodilators. Vocal cord dysfunction: inspiratory stridor, no hypoxia, anxiety-linked.",
    redFlags: [
      "Silent chest on auscultation during exacerbation (severe bronchospasm — little airflow)",
      "SpO2 <90%, PaCO2 rising (impending respiratory failure)",
      "Inability to complete full sentences",
      "Paradoxical breathing or accessory muscle use",
      "Failure to respond to initial SABA x3 treatments",
    ],
    mnemonics: [
      {
        name: "Asthma Severity Steps (GINA Simplified)",
        content: "Step 1: SABA prn → Step 2: Low ICS → Step 3: Low ICS + LABA → Step 4: Medium/High ICS + LABA → Step 5: Add-on (tiotropium, biologics)",
      },
    ],
    pimpingQuestions: [
      "What spirometric finding confirms reversible airflow obstruction in asthma?",
      "What is the preferred rescue inhaler in acute asthma and what is its mechanism?",
      "When do you add an ICS vs. a LABA in stepwise therapy?",
      "Which asthma phenotype benefits most from dupilumab (biologic therapy)?",
      "What does a 'normal spirometry' in clinic NOT rule out in someone with classic asthma symptoms?",
    ],
  },
  {
    id: "fm-hypothyroid",
    name: "Hypothyroidism",
    icdCode: "E03.9",
    rotation: "family-medicine",
    category: "Endocrine",
    definition:
      "Hypothyroidism is a condition of deficient thyroid hormone production, leading to a slowed metabolic rate. Primary hypothyroidism (90% of cases) results from thyroid gland failure, most commonly Hashimoto's thyroiditis (autoimmune) in iodine-sufficient countries. Secondary and tertiary causes involve pituitary or hypothalamic dysfunction.",
    diagnosticCriteria:
      "Primary hypothyroidism: elevated TSH (>4.5 mIU/L) + low free T4. Subclinical: elevated TSH + normal free T4. Hashimoto's: positive anti-TPO antibodies in context. Central hypothyroidism: low/normal TSH + low free T4. TSH is the single best screening test for primary hypothyroidism.",
    presentation: {
      chiefComplaint: ["Fatigue", "Weight gain", "Cold intolerance", "Constipation", "Depression"],
      associatedSymptoms: ["Dry skin and hair", "Hair loss (lateral eyebrows)", "Bradycardia", "Menstrual irregularity", "Myalgias", "Puffiness (periorbital, hands)"],
      demographics: "Prevalence ~5% in US. Female:male ratio ~7:1. Most common in women >60 and postpartum. Risk factors: family history, previous thyroid disease, autoimmune conditions.",
    },
    distinguishingFeatures:
      "Overt vs. subclinical: overt has both elevated TSH and low T4 with symptoms; subclinical has elevated TSH + normal T4 (often asymptomatic). Myxedema coma: extreme hypothyroidism with altered mental status, hypothermia — medical emergency.",
    redFlags: [
      "Myxedema coma: hypothermia, bradycardia, hypotension, altered mental status (ICU admission, IV T4 + T3)",
      "TSH >100 with cardiac symptoms (risk of pericardial effusion, cardiac failure)",
      "Goiter with compressive symptoms (dysphagia, stridor) — refer to endocrinology/surgery",
    ],
    mnemonics: [
      {
        name: "Hypothyroid symptoms: SLOWS",
        content: "S – Slow (bradycardia, constipation, slowed reflexes); L – Low temperature (cold intolerance); O – Overweight (weight gain); W – Weak (fatigue, myalgias); S – Skin/hair dry (myxedema, hair loss)",
      },
    ],
    pimpingQuestions: [
      "What is the single best screening test for hypothyroidism and why?",
      "How do you differentiate primary from central hypothyroidism by labs?",
      "What is the starting dose of levothyroxine and how do you adjust it?",
      "When do you treat subclinical hypothyroidism?",
      "How does pregnancy affect thyroid hormone requirements?",
    ],
  },
  {
    id: "fm-gerd",
    name: "Gastroesophageal Reflux Disease",
    icdCode: "K21.0",
    rotation: "family-medicine",
    category: "Gastroenterology",
    definition:
      "GERD is a condition where gastric contents reflux into the esophagus, causing troublesome symptoms or complications. It results from transient lower esophageal sphincter (LES) relaxations, impaired esophageal clearance, or increased intra-abdominal pressure. Complications include erosive esophagitis, Barrett's esophagus, and esophageal adenocarcinoma.",
    diagnosticCriteria:
      "ACG 2022: Clinical diagnosis based on typical symptoms (heartburn, regurgitation) responding to PPI trial. EGD indicated for: alarm symptoms (dysphagia, odynophagia, weight loss, GI bleeding), age >60, refractory symptoms, or to evaluate for Barrett's. Ambulatory pH monitoring is gold standard for confirmation.",
    presentation: {
      chiefComplaint: ["Heartburn (pyrosis)", "Regurgitation of acidic contents", "Chest pain (non-cardiac)", "Chronic cough"],
      associatedSymptoms: ["Hoarseness", "Globus sensation", "Nocturnal symptoms (waking from sleep)", "Worsening with large meals/lying down/fatty foods"],
      demographics: "Affects ~20% of US adults. Risk factors: obesity, pregnancy, hiatal hernia, smoking, large meals, alcohol, caffeine, delayed gastric emptying.",
    },
    distinguishingFeatures:
      "Typical GERD: heartburn + regurgitation. Atypical/extraesophageal: laryngopharyngeal reflux (hoarseness, throat clearing), chronic cough, asthma exacerbation. Barrett's: metaplastic change (columnar → intestinal), premalignant for adenocarcinoma.",
    redFlags: [
      "Dysphagia (progressive, especially to solids — esophageal stricture or cancer)",
      "Odynophagia (painful swallowing — consider infectious esophagitis or malignancy)",
      "Unexplained weight loss with GERD symptoms",
      "Hematemesis or melena (bleeding from erosive esophagitis or Mallory-Weiss tear)",
      "Onset in older patient without prior history (new GERD in >60 warrants endoscopy)",
    ],
    mnemonics: [
      {
        name: "GERD Alarm symptoms: WOADS",
        content: "W – Weight loss; O – Odynophagia; A – Anemia/bleeding; D – Dysphagia; S – Symptoms resistant to PPI",
      },
    ],
    pimpingQuestions: [
      "What is the first-line pharmacologic treatment for GERD?",
      "When is EGD indicated in a patient with heartburn?",
      "What is Barrett's esophagus and how is it managed?",
      "What lifestyle modifications reduce GERD symptoms?",
      "What are the risks of long-term PPI use?",
    ],
  },
  {
    id: "fm-mdd",
    name: "Major Depressive Disorder",
    icdCode: "F32.9",
    rotation: "family-medicine",
    category: "Behavioral Health",
    definition:
      "Major Depressive Disorder (MDD) is a common psychiatric disorder characterized by persistent depressed mood or anhedonia for ≥2 weeks with significant functional impairment. It involves dysregulation of monoaminergic neurotransmitters (serotonin, norepinephrine, dopamine) and neurobiological changes including HPA axis dysregulation and hippocampal atrophy.",
    diagnosticCriteria:
      "DSM-5: ≥5 of 9 symptoms for ≥2 weeks (must include depressed mood OR anhedonia): depressed mood, anhedonia, weight/appetite change, insomnia or hypersomnia, psychomotor agitation/retardation, fatigue, worthlessness/guilt, difficulty concentrating, recurrent thoughts of death/suicidal ideation. Causes significant distress/functional impairment. Not due to substance or medical condition.",
    presentation: {
      chiefComplaint: ["Feeling depressed/sad", "Loss of interest or pleasure", "Fatigue", "Sleep disturbance"],
      associatedSymptoms: ["Appetite changes", "Difficulty concentrating", "Feelings of hopelessness/worthlessness", "Suicidal ideation", "Somatic complaints (headache, GI)"],
      demographics: "Lifetime prevalence ~16%. Female:male ~2:1. Peak onset 25–45 years. Risk factors: family history, prior episodes, anxiety disorders, chronic illness, trauma/adverse childhood events.",
    },
    distinguishingFeatures:
      "MDD vs. bipolar: screen for prior manic/hypomanic episodes before starting antidepressant. MDD vs. grief: bereavement is expected, time-limited, without pervasive worthlessness. MDD vs. hypothyroidism: check TSH. PHQ-9 ≥10 suggests moderate depression; ≥20 suggests severe.",
    redFlags: [
      "Active suicidal ideation with plan or intent (emergency psychiatric evaluation)",
      "Psychotic features (hallucinations, delusions) requiring antipsychotic addition",
      "Severe weight loss with MDD (nutritional support + urgent psychiatry)",
      "Bipolar depression: antidepressant monotherapy can trigger mania",
    ],
    mnemonics: [
      {
        name: "DSM-5 MDD Criteria: SIG E CAPS",
        content: "S – Sleep (insomnia/hypersomnia); I – Interest lost (anhedonia); G – Guilt/worthlessness; E – Energy/fatigue; C – Concentration difficulty; A – Appetite change; P – Psychomotor change; S – Suicidal ideation",
      },
    ],
    pimpingQuestions: [
      "What are the DSM-5 criteria for MDD? How many symptoms for how long?",
      "What screening tool is used in primary care and how is it scored?",
      "What is the first-line pharmacologic treatment for MDD in primary care?",
      "How long should you treat a first episode of MDD with antidepressants?",
      "What is the risk of antidepressants in patients with undiagnosed bipolar disorder?",
    ],
  },
  {
    id: "fm-gad",
    name: "Generalized Anxiety Disorder",
    icdCode: "F41.1",
    rotation: "family-medicine",
    category: "Behavioral Health",
    definition:
      "Generalized Anxiety Disorder (GAD) is characterized by excessive, difficult-to-control worry about multiple topics (work, health, finances, family) occurring on more days than not for ≥6 months, accompanied by physical symptoms. It is one of the most common anxiety disorders seen in primary care and is frequently comorbid with MDD.",
    diagnosticCriteria:
      "DSM-5: Excessive anxiety and worry about multiple events/activities for ≥6 months, difficult to control, causing significant distress/impairment, associated with ≥3 of 6 symptoms: restlessness/feeling on edge, easily fatigued, difficulty concentrating, irritability, muscle tension, sleep disturbance. Not attributable to substance or medical condition.",
    presentation: {
      chiefComplaint: ["Excessive worry", "Feeling on edge/restless", "Difficulty sleeping", "Muscle tension"],
      associatedSymptoms: ["Fatigue", "Difficulty concentrating", "Irritability", "Somatic complaints (headache, GI, back pain)", "Palpitations"],
      demographics: "Lifetime prevalence ~5–9%. Female:male ~2:1. Often first presents in young adulthood. High comorbidity with MDD, panic disorder, social anxiety.",
    },
    distinguishingFeatures:
      "GAD: chronic, pervasive, multiple worry topics, not triggered by discrete events. Panic disorder: discrete panic attacks with physical symptoms. Social anxiety: fear specific to social situations. Normal worry: not excessive, controllable, not impairing.",
    redFlags: [
      "Suicidal ideation in context of comorbid MDD",
      "Medical mimics of anxiety: hyperthyroidism (check TSH), pheochromocytoma, cardiac arrhythmia, substance withdrawal",
      "Severe functional impairment not responding to 2 adequate medication trials",
    ],
    mnemonics: [
      {
        name: "GAD physical symptoms: RISE FM",
        content: "R – Restlessness; I – Irritability; S – Sleep disturbance; E – Easy fatigue; F – Fatigue (cognitive); M – Muscle tension",
      },
    ],
    pimpingQuestions: [
      "What is the DSM-5 duration requirement for GAD?",
      "What is the GAD-7 cutoff for moderate vs. severe anxiety?",
      "What are first-line pharmacologic treatments for GAD?",
      "Why is benzodiazepine monotherapy NOT the preferred long-term treatment for GAD?",
      "What medical conditions should be ruled out before diagnosing GAD?",
    ],
  },
  {
    id: "fm-uti",
    name: "Urinary Tract Infection (Uncomplicated)",
    icdCode: "N39.0",
    rotation: "family-medicine",
    category: "Infectious Disease",
    definition:
      "A urinary tract infection (UTI) is a bacterial infection of the urethra (urethritis), bladder (cystitis), or upper urinary tract (pyelonephritis). Uncomplicated cystitis occurs in healthy, non-pregnant premenopausal women with no structural or neurological urinary tract abnormalities. E. coli causes ~80–85% of uncomplicated UTIs.",
    diagnosticCriteria:
      "IDSA: Clinical diagnosis in women with ≥2 symptoms (dysuria, frequency, urgency, hematuria) + positive UA (nitrites, LE, bacteria). Urine culture confirmatory (≥10^5 CFU/mL). Complicated UTI: men, pregnant, catheter-associated, structural/neurological abnormalities, hospital-acquired, immunocompromised, pyelonephritis.",
    presentation: {
      chiefComplaint: ["Dysuria (painful urination)", "Urinary frequency/urgency", "Suprapubic discomfort", "Hematuria"],
      associatedSymptoms: ["Cloudy or malodorous urine", "Nocturia", "Low-grade fever (cystitis occasionally)", "Flank pain suggests pyelonephritis"],
      demographics: "Lifetime risk ~50–60% in women. Premenopausal women: sexual activity (honeymoon cystitis), diaphragm use. Postmenopausal: estrogen deficiency. Men: <50 rare, >50 consider BPH, prostatitis.",
    },
    distinguishingFeatures:
      "Uncomplicated cystitis vs. pyelonephritis: pyelonephritis has fever ≥38°C, costovertebral angle tenderness, systemic illness. Asymptomatic bacteriuria: bacteria in urine without symptoms — do NOT treat except in pregnancy or pre-urologic procedure.",
    redFlags: [
      "Fever + CVA tenderness (pyelonephritis — IV antibiotics may be needed)",
      "Symptoms in a male (complicated UTI, rule out prostatitis)",
      "Recurrent UTIs (>2 in 6 months or >3 in 1 year — need urine culture + further workup)",
      "Hematuria without infection signs (rule out malignancy with cystoscopy/imaging)",
    ],
    mnemonics: [
      {
        name: "E. coli virulence: FHA PET",
        content: "Fimbriae (adhesion); Hemolysin; Alpha-toxin; P-fimbriae (uropathogenic); Endotoxin; Type 1 fimbriae",
      },
    ],
    pimpingQuestions: [
      "What is the most common organism in uncomplicated UTI and why is it uropathogenic?",
      "What are the first-line antibiotics for uncomplicated cystitis and for how long?",
      "When do you send a urine culture vs. treat empirically?",
      "What is asymptomatic bacteriuria and in which populations do you treat it?",
      "How does pyelonephritis change your management vs. cystitis?",
    ],
  },
  {
    id: "fm-cap",
    name: "Community-Acquired Pneumonia",
    icdCode: "J18.9",
    rotation: "family-medicine",
    category: "Pulmonary/Infectious Disease",
    definition:
      "Community-acquired pneumonia (CAP) is an infection of the lung parenchyma acquired outside of a hospital setting or within 48 hours of hospital admission. It is characterized by inflammation and consolidation of lung tissue. The most common bacterial cause in all age groups is Streptococcus pneumoniae. Atypical organisms include Mycoplasma, Chlamydophila, and Legionella.",
    diagnosticCriteria:
      "IDSA/ATS 2019: Clinical symptoms (cough, fever, dyspnea, pleuritic chest pain) + new infiltrate on CXR. PSI/PORT score for outpatient vs. inpatient decision. CURB-65: Confusion, Urea >19 mg/dL, RR ≥30, BP <90/60, Age ≥65 — score ≥2 = hospitalize; ≥3 = ICU consideration.",
    presentation: {
      chiefComplaint: ["Productive cough (purulent sputum)", "Fever and chills", "Pleuritic chest pain", "Dyspnea"],
      associatedSymptoms: ["Rigors", "Myalgias", "Headache (atypical/Legionella)", "GI symptoms (Legionella, atypical)", "Dullness to percussion"],
      demographics: "All ages but morbidity highest in elderly, immunocompromised, smokers. S. pneumoniae: all ages. Atypicals (Mycoplasma): young adults. Legionella: hotel/water source exposure. Aspiration: elderly, altered consciousness, dysphagia.",
    },
    distinguishingFeatures:
      "Typical CAP (S. pneumoniae): abrupt onset, productive cough, high fever, lobar consolidation. Atypical CAP (Mycoplasma): gradual onset, dry cough, low fever, diffuse interstitial pattern ('walking pneumonia'). Legionella: water source, GI symptoms, hyponatremia.",
    redFlags: [
      "CURB-65 ≥3 or PSI class IV–V (hospital admission required)",
      "SpO2 <90% on room air",
      "Multilobar pneumonia on CXR",
      "Evidence of sepsis (lactate >2, hypotension, tachycardia)",
      "Legionella pneumonia: rapidly progressive, requires ICU",
    ],
    mnemonics: [
      {
        name: "CURB-65",
        content: "C – Confusion; U – Urea >19 mg/dL (BUN >20); R – Respiratory rate ≥30; B – Blood pressure <90/60; 65 – Age ≥65. Score 0–1: home; ≥2: hospitalize.",
      },
    ],
    pimpingQuestions: [
      "What is the CURB-65 score and how does it guide disposition?",
      "What antibiotic regimen do you use for outpatient CAP in an otherwise healthy patient?",
      "How does atypical pneumonia (Mycoplasma) differ from typical pneumonia on presentation and CXR?",
      "What organism should you suspect in a pneumonia with hyponatremia and GI symptoms?",
      "What are the indications for pneumococcal vaccine?",
    ],
  },
  {
    id: "fm-sinusitis",
    name: "Acute Bacterial Rhinosinusitis",
    icdCode: "J01.90",
    rotation: "family-medicine",
    category: "ENT/Infectious Disease",
    definition:
      "Acute bacterial rhinosinusitis (ABRS) is bacterial infection of one or more paranasal sinuses lasting <4 weeks. The vast majority of sinusitis is viral (rhinovirus); only 0.5–2% of viral sinusitis progresses to bacterial superinfection. ABRS is diagnosed clinically when symptoms persist >10 days without improvement, worsen after initial improvement (double worsening), or are severe from onset.",
    diagnosticCriteria:
      "IDSA 2012: Clinical diagnosis — persistent symptoms >10 days without improvement, OR severe symptoms/fever ≥39°C + purulent discharge + facial pain for ≥3–4 days, OR worsening after initial improvement (double worsening). CT sinuses not needed for uncomplicated ABRS. Most common organisms: S. pneumoniae, H. influenzae, M. catarrhalis.",
    presentation: {
      chiefComplaint: ["Facial pain/pressure (maxillary, frontal)", "Nasal congestion", "Purulent nasal discharge", "Decreased smell"],
      associatedSymptoms: ["Fever (bacterial)", "Headache", "Tooth pain (maxillary sinusitis)", "Fatigue", "Postnasal drip/cough"],
      demographics: "Very common — ~30 million cases/year in US. Often follows viral URI. Adults > children for maxillary/frontal involvement.",
    },
    distinguishingFeatures:
      "Viral sinusitis: symptoms peak at 3–5 days and improve by day 10. ABRS: persistent ≥10 days, double worsening, or severe onset. Chronic sinusitis: symptoms >12 weeks. Allergic rhinitis: clear discharge, sneezing, not painful.",
    redFlags: [
      "Orbital involvement: periorbital swelling, proptosis, limited eye movement (orbital cellulitis — emergent CT + IV antibiotics)",
      "Meningeal signs: severe headache, stiff neck, photophobia (intracranial extension)",
      "Pott's puffy tumor: frontal osteomyelitis with boggy forehead swelling",
    ],
    mnemonics: [
      {
        name: "ABRS diagnosis: PODS",
        content: "P – Persistent symptoms >10 days; O – Onset severe (fever ≥39, facial pain ≥3–4d); D – Double worsening after initial improvement; S – Signs on CT (if ordered)",
      },
    ],
    pimpingQuestions: [
      "How do you distinguish viral from bacterial sinusitis clinically?",
      "What is 'double worsening' and why is it clinically significant?",
      "What is the first-line antibiotic for ABRS and for how long?",
      "When is CT imaging indicated for sinusitis?",
      "What dangerous complication can occur from untreated frontal sinusitis?",
    ],
  },
  {
    id: "fm-aom",
    name: "Acute Otitis Media",
    icdCode: "H66.90",
    rotation: "family-medicine",
    category: "ENT",
    definition:
      "Acute otitis media (AOM) is a bacterial or viral infection of the middle ear characterized by fluid in the middle ear with signs of acute inflammation. It is the most common diagnosis for which antibiotics are prescribed in children. Most common organisms: S. pneumoniae, H. influenzae (non-typeable), M. catarrhalis.",
    diagnosticCriteria:
      "AAP 2013: Moderate to severe bulging of TM, OR new discharge not due to otitis externa, OR mild bulging of TM with recent (<48h) ear pain or erythema. Requires all three: (1) acute onset of symptoms, (2) MEE (middle ear effusion), (3) signs/symptoms of middle ear inflammation.",
    presentation: {
      chiefComplaint: ["Ear pain (otalgia)", "Ear tugging/pulling (infants)", "Fever", "Hearing difficulty"],
      associatedSymptoms: ["Recent URI", "Irritability in children", "Decreased hearing", "Otorrhea if TM perforated", "Vomiting"],
      demographics: "Most common in children 6–24 months. By age 3: ~80% have had ≥1 episode. Risk factors: daycare attendance, pacifier use, formula feeding, secondhand smoke, Native American/Inuit ancestry.",
    },
    distinguishingFeatures:
      "AOM vs. OME (otitis media with effusion): OME has no acute signs of infection (no bulging, no fever); AOM has acute inflammation. AOM vs. otitis externa: otitis externa has canal tenderness, tragal tenderness, no TM abnormality.",
    redFlags: [
      "Mastoid tenderness, erythema, or postauricular swelling (mastoiditis)",
      "Facial nerve palsy (intratemporal extension)",
      "High fever + toxic-appearing child (consider bacteremia)",
    ],
    mnemonics: [
      {
        name: "AOM organisms: SPHere",
        content: "S – Streptococcus pneumoniae (most severe); P – Previously labeled H. influenzae (non-typeable); H – H. influenzae; (M.) catarrhalis",
      },
    ],
    pimpingQuestions: [
      "What are the three AAP diagnostic criteria for AOM?",
      "Which children can be observed without antibiotics for AOM?",
      "What is the first-line antibiotic for AOM and why is dose important?",
      "What are the indications for tympanostomy tubes?",
      "How does AOM differ from otitis media with effusion?",
    ],
  },
  {
    id: "fm-lbp",
    name: "Acute Low Back Pain",
    icdCode: "M54.50",
    rotation: "family-medicine",
    category: "Musculoskeletal",
    definition:
      "Acute low back pain (LBP) is pain in the lumbar region lasting <6 weeks, affecting the area between the lower rib margin and the gluteal folds. It is one of the most common reasons for primary care visits and a leading cause of disability worldwide. The vast majority (~90%) is nonspecific (musculoligamentous) and self-limiting.",
    diagnosticCriteria:
      "Clinical diagnosis. Imaging not routinely indicated for nonspecific LBP <6 weeks without red flags. Ottawa rules (modified for spine): MRI indicated if: cauda equina syndrome, progressive neurological deficits, suspected cancer/infection/fracture, or failure to improve after 6 weeks conservative therapy.",
    presentation: {
      chiefComplaint: ["Low back pain (acute onset)", "Muscle tightness/spasm", "Limited range of motion", "Pain with movement"],
      associatedSymptoms: ["Paraspinal muscle tenderness", "Sciatica if nerve root involved (radiation to leg)", "Morning stiffness (inflammatory)", "Exacerbation with Valsalva (herniated disc)"],
      demographics: "Affects ~80% of adults at some point. Peak incidence ages 30–50. Risk factors: heavy lifting, poor posture, sedentary lifestyle, obesity, smoking.",
    },
    distinguishingFeatures:
      "Mechanical (nonspecific): relieved with rest, worse with activity, no radiation. Radicular (sciatica): radiation below knee, dermatomal pattern, + straight leg raise. Spinal stenosis: pseudoclaudication (worse with walking/standing, better with sitting/flexion). Inflammatory (AS): morning stiffness >1h, young male, HLA-B27, improves with exercise.",
    redFlags: [
      "Cauda equina syndrome: saddle anesthesia + urinary/bowel incontinence/retention (MRI + neurosurgical emergency)",
      "Fever + LBP (spinal epidural abscess or vertebral osteomyelitis)",
      "Weight loss + LBP (malignancy, multiple myeloma)",
      "Night pain awakening patient from sleep (cancer, infection)",
      "Significant trauma in older patient (vertebral fracture)",
    ],
    mnemonics: [
      {
        name: "Red Flags in LBP: TUNA FUD",
        content: "T – Trauma; U – Unexplained weight loss; N – Neurological deficits; A – Age >50 (new onset); F – Fever; U – Urinary/bowel dysfunction; D – Duration >6 weeks without improvement",
      },
    ],
    pimpingQuestions: [
      "What are the red flag symptoms in LBP that require urgent imaging?",
      "What is cauda equina syndrome and how is it a surgical emergency?",
      "What first-line treatments do guidelines recommend for acute nonspecific LBP?",
      "How do you differentiate L4-L5 from L5-S1 radiculopathy clinically?",
      "When is opioid therapy appropriate for acute LBP?",
    ],
  },
  {
    id: "fm-oak",
    name: "Osteoarthritis of the Knee",
    icdCode: "M17.11",
    rotation: "family-medicine",
    category: "Musculoskeletal",
    definition:
      "Osteoarthritis (OA) of the knee is a degenerative joint disease characterized by progressive loss of articular cartilage, subchondral bone changes, osteophyte formation, and synovial inflammation. It is the most common form of arthritis and a leading cause of pain and disability in older adults.",
    diagnosticCriteria:
      "ACR clinical criteria: Knee pain + ≥3 of: age >50, morning stiffness <30 minutes, crepitus on motion, bony tenderness, bony enlargement, no palpable warmth. X-ray: joint space narrowing, osteophytes, subchondral sclerosis, subchondral cysts. MRI not routinely needed for diagnosis.",
    presentation: {
      chiefComplaint: ["Knee pain (gradual onset)", "Stiffness (worse in morning or after rest)", "Swelling", "Decreased range of motion"],
      associatedSymptoms: ["Crepitus (grinding/clicking)", "Pain worsening with stairs or prolonged walking", "Bony enlargement", "Occasional joint effusion"],
      demographics: "Most common in adults >50. Risk factors: obesity, female sex, prior knee injury, repetitive joint use (athletes, laborers), genetic predisposition.",
    },
    distinguishingFeatures:
      "OA vs. RA: OA = DIP/PIP joints + weight-bearing joints, no systemic features, normal ESR/RF; RA = MCP/PIP involvement, symmetric, systemic, positive RF/anti-CCP, elevated ESR/CRP. OA vs. gout: gout = acute onset, erythema, warmth, uric acid crystals on aspiration.",
    redFlags: [
      "Acute erythema, warmth, and fever overlying joint (septic arthritis — emergency aspiration and antibiotics)",
      "Rapidly worsening pain after minor trauma (fracture in osteoporotic bone)",
      "Joint effusion in patient with coagulopathy (hemarthrosis)",
    ],
    mnemonics: [
      {
        name: "OA X-ray findings: LOSS",
        content: "L – Loss of joint space; O – Osteophytes; S – Subchondral sclerosis; S – Subchondral cysts",
      },
    ],
    pimpingQuestions: [
      "What is the ACR clinical criteria for knee OA diagnosis?",
      "What are the X-ray findings of osteoarthritis?",
      "What is the stepwise approach to OA management?",
      "What are the indications for knee replacement surgery in OA?",
      "How does OA differ from rheumatoid arthritis on presentation and labs?",
    ],
  },
  {
    id: "fm-osteoporosis",
    name: "Osteoporosis",
    icdCode: "M81.0",
    rotation: "family-medicine",
    category: "Endocrine/Musculoskeletal",
    definition:
      "Osteoporosis is a skeletal disorder characterized by low bone mass and microarchitectural deterioration of bone tissue, leading to increased bone fragility and fracture risk. It is defined by DEXA T-score ≤-2.5 at the lumbar spine, femoral neck, or total hip. Osteoporosis is a major public health concern, particularly in postmenopausal women.",
    diagnosticCriteria:
      "DEXA: T-score normal ≥-1.0; osteopenia -1.0 to -2.5; osteoporosis ≤-2.5. FRAX tool: 10-year fracture probability — treat if major osteoporotic fracture risk ≥20% or hip fracture risk ≥3%. USPSTF: screen all women ≥65 and younger postmenopausal women with increased risk.",
    presentation: {
      chiefComplaint: ["Usually asymptomatic until fracture", "Back pain (vertebral compression fracture)", "Loss of height", "Kyphosis (dowager's hump)"],
      associatedSymptoms: ["Fragility fracture (minimal trauma — hip, wrist, vertebra)", "Decreased grip strength", "Balance problems"],
      demographics: "Postmenopausal women most affected. Risk factors: female sex, age >65, low BMI, smoking, alcohol, corticosteroid use, calcium/vitamin D deficiency, family history of hip fracture.",
    },
    distinguishingFeatures:
      "Primary osteoporosis: postmenopausal or age-related. Secondary: corticosteroid-induced, hyperparathyroidism, hyperthyroidism, malabsorption, hypogonadism, multiple myeloma. Always check secondary causes before treating.",
    redFlags: [
      "Acute back pain with height loss (vertebral compression fracture — may need vertebroplasty)",
      "Hip fracture (30-day mortality ~5–10%; 1-year mortality ~20–30%)",
      "Atypical femur fracture in patient on bisphosphonates >5 years",
    ],
    mnemonics: [
      {
        name: "Secondary causes of osteoporosis: SHAMED",
        content: "S – Steroids; H – Hyperthyroidism/Hyperparathyroidism; A – Alcohol/Anorexia; M – Malabsorption; E – Estrogen deficiency; D – Diabetes mellitus type 1",
      },
    ],
    pimpingQuestions: [
      "What T-score defines osteoporosis vs. osteopenia?",
      "Who should be screened for osteoporosis per USPSTF?",
      "What is the mechanism of bisphosphonates and which fractures do they prevent?",
      "What are the rare but serious adverse effects of bisphosphonates?",
      "How does the FRAX tool inform treatment decisions?",
    ],
  },
  {
    id: "fm-ida",
    name: "Iron Deficiency Anemia",
    icdCode: "D50.9",
    rotation: "family-medicine",
    category: "Hematology",
    definition:
      "Iron deficiency anemia (IDA) is the most common cause of anemia worldwide, resulting from depletion of iron stores insufficient to maintain normal erythropoiesis. It presents as a microcytic, hypochromic anemia. Causes include inadequate intake, malabsorption (celiac disease, gastric bypass), or blood loss (menorrhagia, GI bleeding).",
    diagnosticCriteria:
      "Low Hgb (<12 g/dL women; <13 g/dL men) + microcytic (MCV <80 fL) hypochromic anemia + low serum ferritin (<30 ng/mL confirmatory; <12 ng/mL diagnostic) + low serum iron + elevated TIBC. Reticulocyte count low. Peripheral smear: hypochromic, microcytic RBCs, target cells, pencil cells.",
    presentation: {
      chiefComplaint: ["Fatigue", "Pallor", "Shortness of breath on exertion", "Pica (ice, clay, dirt)"],
      associatedSymptoms: ["Pallor (conjunctival, palmar)", "Tachycardia", "Headache", "Brittle nails/koilonychia (spoon nails)", "Angular cheilitis", "Glossitis"],
      demographics: "Premenopausal women (menorrhagia), pregnant women, infants/toddlers (inadequate intake), elderly (GI blood loss). Most common anemia worldwide.",
    },
    distinguishingFeatures:
      "IDA vs. anemia of chronic disease: ACD has normal/high ferritin, low TIBC; IDA has low ferritin, high TIBC. IDA vs. thalassemia: thalassemia has normal/high ferritin, target cells, basophilic stippling, abnormal hemoglobin electrophoresis.",
    redFlags: [
      "IDA in adult male or postmenopausal female (GI malignancy must be excluded — colonoscopy ± EGD)",
      "Severe anemia Hgb <7 with cardiovascular symptoms (transfusion threshold)",
      "Pica (especially pagophagia/ice craving — strongly associated with IDA)",
    ],
    mnemonics: [
      {
        name: "IDA vs. ACD labs: FLAT IDA",
        content: "F – Ferritin Low (IDA) vs. Normal/High (ACD); L – Low iron (both); A – TIBC: Increased (IDA) vs. Normal/Decreased (ACD); T – Transferrin: High (IDA) vs. Low (ACD)",
      },
    ],
    pimpingQuestions: [
      "What labs differentiate IDA from anemia of chronic disease?",
      "What is the most reliable single test to diagnose iron deficiency?",
      "In what patient population is IDA always assumed GI malignancy until proven otherwise?",
      "What is the mechanism of iron absorption and which form is best absorbed?",
      "What side effects limit patient adherence to oral iron supplementation?",
    ],
  },
  {
    id: "fm-afib",
    name: "Atrial Fibrillation",
    icdCode: "I48.91",
    rotation: "family-medicine",
    category: "Cardiovascular",
    definition:
      "Atrial fibrillation (AF) is the most common sustained cardiac arrhythmia, characterized by chaotic atrial electrical activity resulting in irregular ventricular response and loss of atrial contraction. Loss of atrial 'kick' reduces cardiac output by 10–20%. AF significantly increases risk of stroke, heart failure, and all-cause mortality.",
    diagnosticCriteria:
      "EKG: absence of discrete P waves, irregularly irregular RR intervals, fibrillatory baseline (350–600 impulses/minute). Paroxysmal AF: terminates spontaneously or with intervention <7 days. Persistent AF: lasts >7 days or requires cardioversion. Long-standing persistent: >12 months. Permanent: accepted without further cardioversion attempts.",
    presentation: {
      chiefComplaint: ["Palpitations", "Dyspnea", "Fatigue", "Dizziness", "Asymptomatic (incidentally found)"],
      associatedSymptoms: ["Irregular pulse", "Exercise intolerance", "Signs of heart failure", "Chest pain"],
      demographics: "Prevalence ~2–3% of general population; ~10% of adults >80. Risk factors: hypertension, heart failure, CAD, valvular disease, OSA, alcohol, hyperthyroidism, advancing age.",
    },
    distinguishingFeatures:
      "AF vs. SVT: SVT is regular; AF is irregularly irregular. AF vs. atrial flutter: flutter has regular sawtooth pattern at ~300 bpm with 2:1 or 3:1 block (regular ventricular rate ~150). AF vs. multifocal atrial tachycardia: MAT has ≥3 distinct P wave morphologies.",
    redFlags: [
      "AF with rapid ventricular response causing hemodynamic instability (hypotension, chest pain, pulmonary edema) — synchronized cardioversion",
      "Stroke symptoms in patient with AF not on anticoagulation",
      "AF in WPW (Wolff-Parkinson-White): do NOT use AV nodal blocking agents — risk of ventricular fibrillation",
    ],
    mnemonics: [
      {
        name: "CHA2DS2-VASc Score",
        content: "C – CHF (1); H – Hypertension (1); A2 – Age ≥75 (2); D – Diabetes (1); S2 – Stroke/TIA history (2); V – Vascular disease (1); A – Age 65–74 (1); Sc – Sex category female (1). Score ≥2 in men, ≥3 in women → anticoagulate.",
      },
    ],
    pimpingQuestions: [
      "What is the CHA2DS2-VASc score and at what threshold do you anticoagulate?",
      "What are the rate control targets for AF?",
      "When do you choose rhythm control vs. rate control?",
      "What is the difference between electrical and pharmacologic cardioversion?",
      "What anticoagulants are preferred in non-valvular AF and why?",
    ],
  },
  {
    id: "fm-cad",
    name: "Coronary Artery Disease (Stable)",
    icdCode: "I25.10",
    rotation: "family-medicine",
    category: "Cardiovascular",
    definition:
      "Coronary artery disease (CAD) is characterized by atherosclerotic narrowing of the coronary arteries, reducing myocardial perfusion. Stable CAD presents as chronic, predictable angina (chest pain with exertion, relieved by rest/nitrates). It is the leading cause of death in the US. Risk factor modification is the cornerstone of management.",
    diagnosticCriteria:
      "Stable angina: substernal chest pain/pressure with exertion, reproducible, relieved with rest or nitrates, duration 1–15 minutes. Stress testing (exercise ECG, nuclear stress, stress echo) for diagnosis. Coronary CTA: high sensitivity for ruling out CAD. Coronary angiography: gold standard for anatomy.",
    presentation: {
      chiefComplaint: ["Exertional chest pain or pressure", "Jaw or left arm pain with exertion", "Shortness of breath with activity", "Atypical symptoms (women, diabetics, elderly)"],
      associatedSymptoms: ["Diaphoresis with exertion", "Nausea", "Fatigue", "Resolution with rest or nitroglycerin"],
      demographics: "Men >45, women >55. Risk factors: HTN, hyperlipidemia, DM, smoking, family history, obesity, sedentary lifestyle.",
    },
    distinguishingFeatures:
      "Stable angina: reproducible with exertion, relieved by rest/nitrates. Unstable angina (ACS): new onset, at rest, or crescendo pattern. Non-cardiac chest pain: pleuritic, positional, reproducible with palpation, sharp.",
    redFlags: [
      "Change in anginal pattern (increasing frequency, at rest, or with less exertion = unstable angina)",
      "Prolonged chest pain >20 minutes not relieved by nitrates (rule out STEMI/NSTEMI)",
      "New EKG changes (ST depression, T-wave inversions with chest pain)",
    ],
    mnemonics: [
      {
        name: "Stable Angina Management: ABCDE",
        content: "A – Aspirin + Antianginal (nitrates); B – Beta-blocker + BP control; C – Cholesterol (statin) + Cigarette cessation; D – Diet + Diabetes management; E – Exercise + Education",
      },
    ],
    pimpingQuestions: [
      "What is the difference between stable angina and unstable angina?",
      "What is the mechanism of action of nitrates in treating angina?",
      "What are the medical management goals for stable CAD?",
      "What diagnostic test do you order first for a patient with suspected stable CAD?",
      "When do you refer for revascularization (PCI vs. CABG)?",
    ],
  },
  {
    id: "fm-ckd",
    name: "Chronic Kidney Disease",
    icdCode: "N18.3",
    rotation: "family-medicine",
    category: "Nephrology",
    definition:
      "Chronic kidney disease (CKD) is defined as abnormalities of kidney structure or function present for >3 months, with implications for health. CKD is staged by GFR and albuminuria categories. Leading causes in the US are diabetic nephropathy (44%) and hypertensive nephrosclerosis. CKD significantly increases cardiovascular risk.",
    diagnosticCriteria:
      "KDIGO 2022: GFR <60 mL/min/1.73m² and/or uACR ≥30 mg/g for ≥3 months. Stages G1–G5 by GFR (G1 ≥90, G2 60–89, G3a 45–59, G3b 30–44, G4 15–29, G5 <15 = kidney failure). Albuminuria categories A1 (<30), A2 (30–300), A3 (>300 mg/g).",
    presentation: {
      chiefComplaint: ["Usually asymptomatic early stages", "Fatigue", "Edema", "Nausea/vomiting (uremia)"],
      associatedSymptoms: ["Hypertension", "Pallor (anemia)", "Pruritus (uremia)", "Decreased urine output (late)", "Confusion (uremic encephalopathy)"],
      demographics: "Affects ~15% of US adults. Most common in diabetics, hypertensives, elderly, Black Americans. CKD is a cardiovascular risk equivalent.",
    },
    distinguishingFeatures:
      "CKD vs. AKI: CKD = gradual, bilateral small kidneys on US, anemia, hyperphosphatemia; AKI = abrupt onset, normal or large kidneys, precipitating cause. Diabetic nephropathy: microalbuminuria → macroalbuminuria → GFR decline.",
    redFlags: [
      "GFR <15 (CKD stage 5 — renal replacement therapy planning)",
      "Hyperkalemia K+ >6.0 (cardiac arrhythmia risk)",
      "Uremic pericarditis (friction rub + pericardial effusion — emergent dialysis indication)",
      "Pulmonary edema refractory to diuretics (fluid overload requiring dialysis)",
    ],
    mnemonics: [
      {
        name: "CKD Complications: AEIOU",
        content: "A – Anemia; E – Electrolyte disturbances (hyperK, hyperPhos, hypoNa); I – Infection risk; O – Osteodystrophy (renal bone disease); U – Uremia (encephalopathy, pericarditis)",
      },
    ],
    pimpingQuestions: [
      "How is CKD staged by KDIGO criteria?",
      "Which class of antihypertensive is preferred in CKD with proteinuria and why?",
      "At what GFR do you stop metformin?",
      "What are the indications for nephrology referral in CKD?",
      "What labs do you monitor regularly in a patient with CKD stage 3?",
    ],
  },
  {
    id: "fm-obesity",
    name: "Obesity",
    icdCode: "E66.01",
    rotation: "family-medicine",
    category: "Endocrine/Metabolic",
    definition:
      "Obesity is a chronic, relapsing disease characterized by excessive accumulation of body fat that impairs health. Defined as BMI ≥30 kg/m². It is associated with multiple comorbidities including T2DM, HTN, dyslipidemia, NAFLD, OSA, OA, and certain cancers. Classified as Class I (30–34.9), Class II (35–39.9), Class III (≥40, severe/morbid obesity).",
    diagnosticCriteria:
      "BMI ≥30 kg/m². Waist circumference: men >40 inches, women >35 inches (central adiposity, metabolic risk). USPSTF 2018: Screen all adults for obesity; refer BMI ≥30 to intensive multicomponent behavioral intervention (≥12 sessions/year).",
    presentation: {
      chiefComplaint: ["Weight gain", "Difficulty with physical activities", "Joint pain", "Fatigue", "Snoring"],
      associatedSymptoms: ["Hypertension", "Glucose intolerance", "OSA symptoms", "Dyslipidemia", "GERD", "Acanthosis nigricans"],
      demographics: "~42% of US adults. Higher prevalence in Black, Hispanic, and low-income populations. Multifactorial: genetic, behavioral, environmental, psychological, socioeconomic factors.",
    },
    distinguishingFeatures:
      "Secondary causes of obesity: hypothyroidism (check TSH), Cushing's (buffalo hump, striae, elevated 24-hour urine cortisol), Prader-Willi, medications (antipsychotics, steroids, insulin, TCA). Primary: no identifiable hormonal cause.",
    redFlags: [
      "BMI ≥40 or ≥35 with obesity-related comorbidities (bariatric surgery candidacy)",
      "Rapid unintentional weight LOSS in obese patient (malignancy, TB, hyperthyroidism)",
      "Cushing's features: moon face, buffalo hump, proximal myopathy, purple striae",
    ],
    mnemonics: [
      {
        name: "Obesity-related comorbidities: DASHES",
        content: "D – Diabetes T2; A – Apnea (OSA); S – Steatohepatitis (NAFLD/NASH); H – Hypertension/HTN; E – Esophageal reflux (GERD); S – Sleep apnea/Stroke",
      },
    ],
    pimpingQuestions: [
      "What BMI cutoffs define overweight, Class I, II, and III obesity?",
      "What FDA-approved medications are available for weight loss in primary care?",
      "What are the candidacy criteria for bariatric surgery?",
      "How does GLP-1 receptor agonist therapy work for weight loss?",
      "What comorbidities improve most dramatically after bariatric surgery?",
    ],
  },
  {
    id: "fm-osa",
    name: "Obstructive Sleep Apnea",
    icdCode: "G47.33",
    rotation: "family-medicine",
    category: "Pulmonary/Sleep Medicine",
    definition:
      "Obstructive sleep apnea (OSA) is a sleep disorder characterized by repetitive episodes of partial (hypopnea) or complete (apnea) upper airway obstruction during sleep, causing oxygen desaturation and arousals. It is strongly associated with obesity, cardiovascular disease, and metabolic syndrome. Untreated OSA increases risk of hypertension, atrial fibrillation, and MVA.",
    diagnosticCriteria:
      "Polysomnography (PSG): Apnea-Hypopnea Index (AHI) ≥5 events/hour with symptoms, OR AHI ≥15 regardless of symptoms. Severity: mild 5–14, moderate 15–29, severe ≥30. Home sleep apnea testing (HSAT) acceptable for uncomplicated suspected OSA. STOP-BANG score ≥3 = high risk.",
    presentation: {
      chiefComplaint: ["Loud snoring", "Witnessed apneas by bed partner", "Excessive daytime sleepiness (Epworth >10)", "Morning headaches"],
      associatedSymptoms: ["Nocturia", "Difficulty concentrating", "Mood changes/irritability", "Dry mouth on waking", "Non-refreshing sleep"],
      demographics: "~25% of middle-aged adults. Male:female ratio ~2:1 (equalizes postmenopause). Risk factors: obesity (BMI ≥30), large neck circumference (>17\" men, >16\" women), retrognathia, macroglossia, nasal obstruction.",
    },
    distinguishingFeatures:
      "OSA vs. central sleep apnea: central has no respiratory effort during apnea (Cheyne-Stokes); OSA has continued respiratory effort. OSA vs. insomnia: insomnia = difficulty initiating/maintaining sleep; OSA = fragmented sleep with daytime consequences.",
    redFlags: [
      "Oxygen saturation nadir <80% during PSG (severe nocturnal hypoxemia)",
      "Polycythemia in OSA patient (secondary to chronic hypoxemia)",
      "New atrial fibrillation or poorly controlled hypertension without explanation",
    ],
    mnemonics: [
      {
        name: "STOP-BANG Screening",
        content: "S – Snore loudly; T – Tired (excessive daytime); O – Observed apneas; P – Pressure (HTN); B – BMI >35; A – Age >50; N – Neck >40 cm; G – Gender male. ≥3 = high risk.",
      },
    ],
    pimpingQuestions: [
      "What is the AHI and how is OSA severity defined?",
      "What is the first-line treatment for moderate-severe OSA?",
      "What are the cardiovascular consequences of untreated OSA?",
      "When is a home sleep test appropriate vs. full in-lab polysomnography?",
      "Which patients with OSA should be referred to sleep specialist?",
    ],
  },

  // ── NEUROLOGIC ─────────────────────────────────────────────────────────────
  {
    id: "fm-migraine",
    name: "Migraine Headache",
    icdCode: "G43.909",
    rotation: "family-medicine",
    category: "Neurology",
    definition:
      "A primary headache disorder characterized by recurrent moderate-to-severe, unilateral, pulsating headaches lasting 4–72 hours, often associated with nausea/vomiting, photophobia, and phonophobia. Migraine with aura (30%) involves transient neurological symptoms preceding headache. The most common disabling neurological disorder worldwide; affects 15% of the population.",
    diagnosticCriteria:
      "ICHD-3 criteria for migraine without aura: ≥5 attacks lasting 4–72 hours, plus ≥2 of (unilateral, pulsating, moderate-severe pain, aggravated by routine activity), plus ≥1 of (nausea/vomiting, photophobia + phonophobia), plus not attributed to another disorder. Aura criteria: ≥1 fully reversible neurological symptom (visual, sensory, speech, motor, retinal) developing over ≥5 min, lasting 5–60 min. Workup: neuroimaging (MRI head with and without contrast) for new headache > 50 years, sudden onset ('thunderclap'), positional, progressive, immunocompromised, or focal neurological signs (SNOOP4 criteria). No routine imaging needed for classic migraine in young patient.",
    presentation: {
      chiefComplaint: [
        "\"I have a pounding headache on one side that makes me sick\"",
        "\"I see flashing zigzag lights before my headache starts\"",
        "\"Bright light and noise make my headache unbearable\"",
      ],
      associatedSymptoms: [
        "Unilateral, pulsating moderate-to-severe headache",
        "Nausea and vomiting",
        "Photophobia (light sensitivity) and phonophobia (noise sensitivity)",
        "Aura (30%): visual disturbances (scintillating scotoma, fortification spectra), unilateral paresthesias, speech difficulty",
        "Prodrome (hours before): yawning, food cravings, irritability, neck stiffness",
        "Postdrome: fatigue, cognitive fog ('migraine hangover') lasting 24–48h",
      ],
      demographics:
        "Affects ~15% of population; female:male = 3:1; peak age 25–55; strong genetic component. Triggers: hormonal changes (menstrual migraine — estrogen drop), sleep disruption, skipped meals, alcohol (red wine), bright lights, stress, weather changes, certain foods (tyramine, MSG, caffeine withdrawal).",
    },
    distinguishingFeatures:
      "4 hallmarks: Unilateral + Pulsating + Moderate-severe + Nausea/Photo/Phonophobia. Tension headache: bilateral, non-pulsating, mild-moderate, no nausea — most common headache type. Cluster headache: unilateral periorbital/temporal, excruciating, 15–180 min, ipsilateral autonomic features (lacrimation, rhinorrhea, ptosis, miosis), occurs in 'clusters' — predominantly men.",
    redFlags: [
      "Thunderclap headache (worst headache of life, sudden onset) — SAH until proven otherwise → CT non-contrast STAT",
      "New headache > age 50 — neuroimaging required",
      "Fever + stiff neck + headache — bacterial meningitis → LP after CT if no papilledema",
      "Progressive worsening headache pattern — space-occupying lesion",
      "Focal neurological deficits persisting > 1 hour — not typical migraine aura (STROKE?)",
      "Headache awakening from sleep or worse with Valsalva — elevated ICP",
    ],
    mnemonics: [
      {
        name: "SNOOP4 — Red Flags Requiring Neuroimaging",
        content:
          "S — Systemic symptoms (fever, weight loss) or Systemic disease (HIV, cancer)\nN — Neurological deficit or altered consciousness\nO — Onset sudden (thunderclap)\nO — Older (new-onset > 50 years)\nP — Positional headache\nP — Papilledema\nP — Progressive or new-onset pattern\nP — Preceding trauma",
      },
      {
        name: "Migraine Treatment: AVOID LATE",
        content:
          "Acute: Triptans (sumatriptan) = first-line; NSAIDs; antiemetics (promethazine/metoclopramide)\nPreventive (if ≥4 headache days/month or significant disability): Topiramate, Amitriptyline, Valproate, Propranolol, CGRP antagonists (erenumab, rimegepant)",
      },
    ],
    pimpingQuestions: [
      "What are the ICHD-3 diagnostic criteria for migraine without aura?",
      "What is the first-line abortive treatment for moderate-to-severe migraine?",
      "When is preventive therapy indicated for migraine?",
      "What is the mechanism of triptans (5-HT1B/1D agonists) in migraine?",
      "Distinguish migraine from tension headache and cluster headache.",
      "What is medication-overuse headache (rebound headache) and how is it managed?",
    ],
  },
  {
    id: "fm-tia",
    name: "Transient Ischemic Attack (TIA)",
    icdCode: "G45.9",
    rotation: "family-medicine",
    category: "Neurology",
    definition:
      "Transient episode of neurological dysfunction caused by focal brain or retinal ischemia without acute infarction, with symptoms typically resolving within 1 hour (most < 30 minutes) and no permanent deficit. TIA is a medical emergency — 10–15% risk of stroke within 90 days (highest risk in first 48 hours: ~5%). Requires urgent evaluation and secondary stroke prevention.",
    diagnosticCriteria:
      "Clinical diagnosis (now tissue-based per 2009 AHA/ASA — must have NO infarction on DWI MRI, even if symptoms resolved). DWI MRI: acute ischemic lesion in ~30% of 'TIA' patients (reclassified as stroke). ABCD2 score: Age ≥60 (1), BP ≥140/90 (1), Clinical features — unilateral weakness (2) or speech without weakness (1), Duration ≥60 min (2) or 10–59 min (1), Diabetes (1) — score 0–7. ≥4 = high 2-day stroke risk (>4%). Urgent workup: MRI brain/DWI, MRA head/neck (carotid stenosis?), cardiac monitoring (AF — 24h Holter minimum, ideally 30 days), lipid panel, CBC, glucose, echo (embolic source), INR if anticoagulated.",
    presentation: {
      chiefComplaint: [
        "\"My face drooped and my arm felt weak for 15 minutes, then it went back to normal\"",
        "\"I suddenly couldn't speak for a few minutes\"",
        "\"I had a brief episode of vision loss in one eye — like a curtain came down\"",
      ],
      associatedSymptoms: [
        "Sudden unilateral weakness or sensory loss (face, arm, leg)",
        "Sudden aphasia or dysarthria",
        "Amaurosis fugax (transient monocular vision loss — ipsilateral carotid stenosis)",
        "Sudden diplopia or ataxia (posterior circulation TIA)",
        "All symptoms resolved completely within 24h (most < 60 min)",
      ],
      demographics:
        "Mean age 65; AF is leading cardioembolic cause in elderly; carotid stenosis in those with established atherosclerosis. Risk factors: same as ischemic stroke — HTN (#1 modifiable), DM, hyperlipidemia, smoking, AF, prior TIA/stroke, CAD.",
    },
    distinguishingFeatures:
      "Classic presentation: focal neurological deficit + complete resolution. Amaurosis fugax (transient monocular blindness) = TIA equivalent from ipsilateral ICA stenosis or embolism — 'curtain coming down' over one eye. Migraine with aura: positive/spreading symptoms (marching paresthesias, scintillating scotoma) vs TIA negative symptoms (loss of function). TIA never causes LOC (if syncope → cardiac cause).",
    redFlags: [
      "TIA IS AN EMERGENCY — same risk as completed stroke in first 48 hours → hospital evaluation urgently",
      "ABCD2 score ≥4 — hospitalize for urgent workup and observation",
      "Crescendo TIA (repeated attacks in 24h) — highest risk; immediate hospitalization",
      "Symptomatic carotid stenosis > 70% on CTA/MRA — carotid endarterectomy within 2 weeks",
      "AF identified as cause — start anticoagulation (DOACs preferred) immediately",
    ],
    mnemonics: [
      {
        name: "TIA Secondary Prevention: ABCDE",
        content:
          "A — Antiplatelet (aspirin + clopidogrel × 21 days for high-risk TIA/minor stroke per POINT/CHANCE trial, then single agent) OR Anticoagulation (if AF)\nB — BP control (target < 130/80 long-term)\nC — Cholesterol (statin — high-intensity: atorvastatin 40–80 mg)\nD — Diabetes control\nE — Eradicate smoking; Exercise",
      },
    ],
    pimpingQuestions: [
      "What is the ABCD2 score and what does a high score indicate?",
      "What is amaurosis fugax and what does it suggest?",
      "How do you distinguish TIA from migraine with aura?",
      "What is the dual antiplatelet therapy indication after TIA/minor stroke?",
      "When is carotid endarterectomy indicated after TIA?",
    ],
  },

  // ── DERMATOLOGIC ───────────────────────────────────────────────────────────
  {
    id: "fm-cellulitis",
    name: "Cellulitis and Skin and Soft Tissue Infections (SSTIs)",
    icdCode: "L03.90",
    rotation: "family-medicine",
    category: "Dermatology",
    definition:
      "Cellulitis is an acute bacterial infection of the dermis and subcutaneous tissue, most commonly caused by Group A beta-hemolytic Streptococcus (GAS) and Staphylococcus aureus. It presents as a non-elevated, poorly demarcated area of erythema, warmth, and tenderness. Purulent cellulitis (associated with abscess/furuncle) is more likely S. aureus (including MRSA).",
    diagnosticCriteria:
      "Clinical diagnosis: area of erythema, warmth, tenderness, induration, without identifiable portal of entry in many cases. Distinguishing non-purulent (beta-hemolytic Strep) vs purulent (S. aureus including MRSA) is key. Purulent SSTI: associated abscess, fluctuance, folliculitis, or furuncle. Labs: CBC (leukocytosis in severe cases), blood cultures (yield only 2–4% in uncomplicated cellulitis — NOT routinely indicated). Mark the border with a skin marker to assess progression. US: if fluctuant mass — guides drainage, identifies occult abscess.",
    presentation: {
      chiefComplaint: [
        "\"My leg is red, swollen, and warm — it started from a small cut\"",
        "\"I have a painful, warm, spreading redness on my arm\"",
        "\"I have a bump that's tender and appears to have pus\"",
      ],
      associatedSymptoms: [
        "Erythema spreading from initial site",
        "Warmth, edema, tenderness",
        "Low-grade fever and malaise (systemic involvement)",
        "Lymphangitic streaking (red lines along lymphatics toward lymph nodes — NOT purulent)",
        "Fluctuance (pus collection) = abscess",
        "Regional lymphadenopathy",
      ],
      demographics:
        "Any age; risk factors: tinea pedis/onychomycosis (portal of entry), lymphedema, prior cellulitis (same area — recurrence risk 25%), obesity, venous insufficiency, DM, immunosuppression, chronic edema. Lower extremity most common site. MRSA risk: prior MRSA, healthcare exposure, crowded settings (prisons, athletics), injection drug use, Men who have sex with men.",
    },
    distinguishingFeatures:
      "Non-purulent cellulitis: non-elevated, poorly demarcated, no fluctuance → treat for GAS (beta-lactam: cephalexin, dicloxacillin). Purulent (abscess/furuncle): fluctuant, central pustule → treat for MRSA (TMP-SMX, doxycycline). Erysipelas: involves superficial dermis/lymphatics, raised well-demarcated border (vs cellulitis), bright red, GAS. Necrotizing fasciitis: deeper, rapidly spreading, systemic toxicity, disproportionate pain, crepitus → surgical emergency.",
    redFlags: [
      "Rapidly spreading erythema beyond the marked borders within 6–12 hours",
      "Crepitus (gas in tissue), blistering, skin necrosis — necrotizing fasciitis",
      "Disproportionate pain out of proportion to exam — necrotizing fasciitis",
      "Periorbital/orbital cellulitis — admission, IV antibiotics, CT orbit (exclude orbital extension)",
      "Systemic sepsis (fever > 39°C, hypotension, altered mentation)",
      "Failure to improve after 48–72 hours of appropriate oral antibiotics",
    ],
    mnemonics: [
      {
        name: "SSTI Treatment: ALT-MM",
        content:
          "Non-purulent cellulitis → Beta-lactams (Amoxicillin, Cephalexin, Dicloxacillin) — GAS\nPurulent/abscess → TMP-SMX or Doxycycline — covers MRSA (I&D is primary treatment for abscess)\nSevere non-purulent → IV penicillin G or ceftriaxone\nSevere purulent/MRSA + hospitalized → IV Vancomycin or Daptomycin\n\nNecrotizing fasciitis → Immediate SURGERY + vancomycin + pip-tazo + clindamycin",
      },
    ],
    pimpingQuestions: [
      "What is the difference between cellulitis and erysipelas?",
      "What organism is most commonly responsible for purulent SSTIs?",
      "What is the primary treatment for a cutaneous abscess?",
      "When do you use TMP-SMX vs cephalexin for cellulitis?",
      "What findings should prompt urgent evaluation for necrotizing fasciitis?",
    ],
  },
  {
    id: "fm-acne",
    name: "Acne Vulgaris",
    icdCode: "L70.0",
    rotation: "family-medicine",
    category: "Dermatology",
    definition:
      "A chronic inflammatory disorder of the pilosebaceous unit caused by four pathogenic factors: follicular hyperkeratinization (microcomedone formation), sebaceous gland hypersecretion (androgen-driven), colonization by Cutibacterium acnes (formerly Propionibacterium acnes), and inflammatory cytokine release. Affects 85% of adolescents and persists into adulthood in 30–40%. Classification: comedonal (non-inflammatory), papulopustular (mild-moderate inflammatory), nodular/cystic (severe, scarring).",
    diagnosticCriteria:
      "Clinical diagnosis. Lesion types: comedones (open = blackhead, closed = whitehead), papules (<5 mm, non-fluctuant), pustules (< 5 mm, fluctuant with pus), nodules/cysts (≥ 5 mm, deep, scarring). Global Acne Grading System (GAGS) or IGA scale. Consider hormonal evaluation (DHEA-S, testosterone, LH:FSH, 17-OHP) if acne is severe, late-onset (> 25 years in females), refractory, or accompanied by hirsutism/menstrual irregularities (suspect PCOS or CAH).",
    presentation: {
      chiefComplaint: [
        "\"I have pimples on my face, chest, and back\"",
        "\"My acne is leaving scars and nothing I've tried has worked\"",
        "\"I'm an adult and my chin keeps breaking out every month\"",
      ],
      associatedSymptoms: [
        "Comedones (blackheads and whiteheads) — non-inflammatory",
        "Papules and pustules — mild to moderate inflammatory",
        "Nodules and cysts — severe, painful, scarring",
        "Post-inflammatory hyperpigmentation (PIH)",
        "Acne scarring (ice-pick, rolling, boxcar)",
        "Psychosocial impact (depression, anxiety — screen",
      ],
      demographics:
        "Peak: adolescence (85% of teens); adults: especially hormonal (premenstrual flare in adult women = androgen-driven). Dietary contribution: high-glycemic diet and dairy (some evidence). Aggravated by: certain cosmetics (comedogenic products), mechanical friction (helmets, straps), medications (lithium, steroids, phenytoin, OCPs with androgenic progestins).",
    },
    distinguishingFeatures:
      "Key classification for treatment: mild (comedonal ± few papulopustules) → topical; moderate (widespread papulopustules) → topical + systemic; severe (nodular/cystic, extensive scarring) → oral isotretinoin. Hormonal acne in women: lower face/jaw distribution, premenstrual flares → OCPs + spironolactone.",
    redFlags: [
      "Severe nodular/cystic acne — referral to dermatology for isotretinoin",
      "Acne with signs of hyperandrogenism in women (PCOS) — hormonal evaluation",
      "Acne fulminans (rare): systemic symptoms (fever, arthritis) + severe acne — requires oral steroids + isotretinoin",
    ],
    mnemonics: [
      {
        name: "Acne Treatment Ladder",
        content:
          "Mild (comedonal): Topical retinoid (tretinoin) ± benzoyl peroxide\nMild-moderate (papulopustular): Add topical antibiotic (clindamycin/erythromycin) + BP\nModerate: Oral antibiotics (doxycycline or minocycline × 3–6 months) + topical regimen\nSevere/nodular/cystic: Oral isotretinoin (iPLEDGE program — 2 forms contraception required for women; teratogenic)\nHormonal (adult women): OCP (norgestimate, desogestrel) + spironolactone 50–100 mg",
      },
    ],
    pimpingQuestions: [
      "What are the 4 pathogenic factors in acne vulgaris?",
      "What are the requirements of the iPLEDGE program for isotretinoin?",
      "Why does isotretinoin cause teratogenicity and what monitoring is required?",
      "When should hormonal therapy (OCP + spironolactone) be used for acne?",
      "What topical agents are first-line for comedonal acne vs inflammatory acne?",
    ],
  },

  // ── REPRODUCTIVE / GYNECOLOGY ──────────────────────────────────────────────
  {
    id: "fm-contraception",
    name: "Contraception",
    icdCode: "Z30.9",
    rotation: "family-medicine",
    category: "Reproductive / Gynecology",
    definition:
      "Methods used to prevent pregnancy. Counseling on contraceptive options is among the most common primary care encounters for reproductive-age women. Methods range from highly effective long-acting reversible contraceptives (LARCs — IUDs, implants) to less effective barrier and behavioral methods. Efficacy is often measured as perfect-use vs typical-use failure rates. Emergency contraception is available for use within 72–120 hours of unprotected intercourse.",
    diagnosticCriteria:
      "No formal diagnostic criteria — clinical selection based on: medical eligibility criteria (US MEC), patient preference, reversibility needs, STI protection needs, cycle control desires, cost/access. US MEC categories: 1 (use freely), 2 (generally use), 3 (generally do not use — risks outweigh benefits), 4 (do not use — unacceptable health risk). Absolute contraindications (US MEC 4) to estrogen-containing methods: active DVT/PE, history of breast cancer, migraine with aura, hypertension ≥ 160/100, liver disease, smoking > 35 years of age, ischemic heart disease.",
    presentation: {
      chiefComplaint: [
        "\"I want to start birth control — what are my options?\"",
        "\"I had unprotected sex last night — what can I do?\"",
        "\"I'm done having kids and want something permanent\"",
      ],
      associatedSymptoms: [
        "Counseling visit — no acute symptoms typically",
        "For hormonal methods: breast tenderness, nausea (estrogen), irregular bleeding (progestin)",
        "IUD insertion: cramping, spotting",
        "Emergency contraception: nausea, irregular next cycle",
      ],
      demographics:
        "Reproductive-age women (15–50). Key considerations by life stage: adolescents (LARC preferred — efficacy + no adherence required); postpartum (IUD/implant immediately postpartum — highest efficacy, no estrogen concerns for breastfeeding); perimenopause (contraception still needed until 1 year after menopause).",
    },
    distinguishingFeatures:
      "LARC (IUDs + implant) = > 99% effective, independent of user adherence. Copper IUD = most effective emergency contraception (can be placed up to 5 days after unprotected sex). Progestin-only pill (POP/'mini-pill'): safe in breastfeeding, hypertension, migraine with aura, smokers > 35 — must take within same 3-hour window daily. Barrier methods (condoms): only method that prevents STIs.",
    redFlags: [
      "Migraine with aura + estrogen-containing contraceptive = US MEC 4 (absolute contraindication — ischemic stroke risk)",
      "DVT/PE history + estrogen = absolute contraindication (thrombogenic)",
      "Breast cancer history + hormonal contraception = generally avoid",
      "Postpartum < 3 weeks + combined OCP = hypercoagulable state (estrogen MEC 4 within 3 weeks of delivery)",
    ],
    mnemonics: [
      {
        name: "Contraceptive Efficacy: LARC > SARC > User-Dependent",
        content:
          "LARC (Long-Acting Reversible): IUD (levonorgestrel or copper), Implant (etonogestrel) → > 99% effective\nSARC (Short-Acting Reversible): OCP, patch, ring, DMPA injection → ~91–94% typical use\nBarrier: Condoms, diaphragm → 85–88% typical use\nNatural family planning/FAM: ~76–88% typical use\n\nEmergency contraception:\nCopper IUD (< 5 days): >99% effective\nulipristal (< 5 days): 98% effective\nLNG Plan B (< 72h): 89% effective",
      },
    ],
    pimpingQuestions: [
      "What are the US MEC category 4 contraindications to combined hormonal contraceptives?",
      "Why is the copper IUD the most effective form of emergency contraception?",
      "What contraceptive method is safe in women with migraine with aura?",
      "Compare efficacy of LARCs vs OCPs (typical use vs perfect use)?",
      "What is the postpartum contraception recommendation for breastfeeding mothers?",
    ],
  },
  {
    id: "fm-sti",
    name: "Sexually Transmitted Infections (STIs)",
    icdCode: "A64",
    rotation: "family-medicine",
    category: "Reproductive / Infectious Disease",
    definition:
      "A group of infections transmitted primarily through sexual contact. The most common bacterial STIs in the US are chlamydia (#1), gonorrhea, and syphilis. Viral STIs include HSV, HPV, HIV, and hepatitis B. Annual screening is recommended for sexually active women < 25 and older women with risk factors. Many STIs are asymptomatic — screening is the primary mode of detection.",
    diagnosticCriteria:
      "Chlamydia/Gonorrhea: NAAT (nucleic acid amplification test) — most sensitive/specific; cervical, vaginal, urethral, rectal, or pharyngeal swab, or urine. Syphilis: RPR/VDRL (nontreponemal screening) — confirmed with FTA-ABS or TP-PA (treponemal). USPSTF screening: Chlamydia + Gonorrhea — sexually active women < 25 and older women at risk (annual); Syphilis — persons at increased risk; HIV — all adults 15–65 (once); pregnant women (all). Trichomonas: wet prep (motile trichomonads, clue cells) or NAAT. HSV: clinical + PCR (active lesion). HPV co-testing with Pap ≥ 30 years.",
    presentation: {
      chiefComplaint: [
        "\"I have a discharge and burning when I urinate\"",
        "\"I have a painless sore on my genitals\"",
        "\"I'm here for STI screening\"",
      ],
      associatedSymptoms: [
        "Chlamydia/GC (urethritis/cervicitis): mucopurulent discharge, dysuria — often asymptomatic",
        "PID (chlamydia/GC ascending): lower abdominal pain, cervical motion tenderness, fever",
        "Syphilis primary: painless, indurated genital ulcer (chancre) with clean base",
        "Syphilis secondary: diffuse maculopapular rash involving palms and soles",
        "Herpes: painful vesicles/ulcers, tender inguinal LAD",
        "Trichomonas: malodorous, frothy yellow-green vaginal discharge, cervical petechiae ('strawberry cervix')",
      ],
      demographics:
        "Highest chlamydia/gonorrhea rates: ages 15–24. Syphilis: congenital syphilis resurgence in US. HIV: MSM, Black/Hispanic populations disproportionately affected. Pre-exposure prophylaxis (PrEP): indicated for HIV-negative patients at high risk — tenofovir/emtricitabine daily reduces HIV acquisition by > 90%.",
    },
    distinguishingFeatures:
      "Painless ulcer = syphilis (primary chancre). Painful vesicles/ulcers = herpes. Painful ulcer with soft base = chancroid (Haemophilus ducreyi — rare in US). LGV (lymphogranuloma venereum): chlamydia L1-L3 serovars — painful lymphadenopathy. Classic syphilis board pearl: rash involving palms and soles = secondary syphilis until proven otherwise.",
    redFlags: [
      "Pregnant woman with syphilis — treat immediately to prevent congenital syphilis",
      "Gonorrhea + syphilis requiring dual treatment (high co-infection rates)",
      "Disseminated gonococcal infection (DGI): arthritis-dermatitis syndrome — tenosynovitis + migratory polyarthritis + skin pustules on erythematous base",
      "Neurosyphilis — CNS involvement at any stage; CSF-VDRL, IV penicillin G",
    ],
    mnemonics: [
      {
        name: "STI Treatment Cheat Sheet",
        content:
          "Chlamydia: Doxycycline 100 mg BID × 7 days (1st line) OR Azithromycin 1g × 1 (pregnancy)\nGonorrhea: Ceftriaxone 500 mg IM × 1 (≥ 150 kg: 1g); ALWAYS co-treat for chlamydia\nSyphilis Primary/Secondary: Benzathine PCN G 2.4 million units IM × 1\nSyphilis Tertiary/Neurosyphilis: IV Aqueous PCN G × 10–14 days\nHerpes (first episode): Acyclovir 400 mg TID × 7–10 days\nTrichomonas: Metronidazole 500 mg BID × 7 days (women); 2g single dose (men)",
      },
    ],
    pimpingQuestions: [
      "What is the first-line treatment for uncomplicated urogenital chlamydia in non-pregnant adults?",
      "Why must gonorrhea always be co-treated for chlamydia?",
      "What is the classic presentation of secondary syphilis?",
      "What is PrEP, who is it indicated for, and what drug is used?",
      "Describe disseminated gonococcal infection (DGI) clinically.",
    ],
  },

  // ── EENOT ADDITIONS ───────────────────────────────────────────────────────
  {
    id: "fm-pharyngitis",
    name: "Pharyngitis (Strep Throat)",
    icdCode: "J02.9",
    rotation: "family-medicine",
    category: "EENT / Oropharyngeal",
    definition:
      "Inflammation of the pharynx and tonsils. Most cases (~ 90%) are viral (rhinovirus, adenovirus, EBV, influenza). Group A Streptococcus (GAS/GABHS) causes ~15–30% of adult cases and ~35–40% of pediatric cases — the only common cause requiring antibiotic treatment (to prevent rheumatic fever). Correct identification of GAS vs. viral is a core primary care skill.",
    diagnosticCriteria:
      "Centor Criteria (1 point each): Tonsillar exudates, Tender anterior cervical LAD, Fever > 38°C, Absence of cough. Score 0–1: no test/treatment; Score 2–3: rapid strep test (sensitivity 85–90%, specificity 95–99%); Score 4: consider empiric treatment. Throat culture: gold standard (sensitivity 90–95%) — send if rapid test negative in children. Modified Centor (McIsaac) adds age: < 15 years (+1), > 45 years (−1).",
    presentation: {
      chiefComplaint: [
        "\"My throat is killing me and I can't swallow\"",
        "\"My child has a sore throat and fever\"",
        "\"I have white spots on my tonsils\"",
      ],
      associatedSymptoms: [
        "GAS (strep): sudden onset sore throat, fever > 38°C, tonsillar exudates, anterior cervical LAD — NO cough",
        "Viral: sore throat + cough + rhinorrhea + myalgias — presence of cough strongly suggests viral",
        "Scarlet fever: GAS + fine sandpaper rash, strawberry tongue, flushed face with perioral pallor",
        "Peritonsillar abscess: unilateral tonsillar bulging, uvular deviation, muffled 'hot potato' voice, drooling",
      ],
      demographics:
        "Peak incidence: school-age children 5–15 years. GAS uncommon < 3 years. Adults: 5–15% of pharyngitis cases are GAS. Transmission: respiratory droplets, close contact (household, school). Complications of untreated GAS: acute rheumatic fever (ARF), post-streptococcal glomerulonephritis.",
    },
    distinguishingFeatures:
      "Key teaching point: cough favors viral — do NOT treat with antibiotics. Absence of cough is the most discriminating Centor criterion. Mono (EBV) mimics strep: exudative tonsillitis + posterior cervical LAD + splenomegaly — amoxicillin causes maculopapular rash in mono. Diphtheria: grayish pseudomembrane — rare due to vaccination.",
    redFlags: [
      "Peritonsillar abscess (PTA) — unilateral bulging, uvular deviation → ENT for I&D",
      "Epiglottitis — 'tripod position,' drooling, muffled voice, stridor → do NOT examine throat, airway management",
      "Airway compromise — rare complication of severe tonsillitis or retropharyngeal abscess",
      "Rheumatic fever — joint pain, carditis, chorea 2–4 weeks after untreated GAS → treat ALL confirmed GAS",
    ],
    mnemonics: [
      {
        name: "Centor Criteria: FEAT",
        content:
          "F — Fever (> 38°C / 100.4°F)\nE — Exudates on tonsils\nA — Anterior cervical lymphadenopathy (tender)\nT — Tonsillar enlargement / No cough (absence of cough)\nScore ≥ 3 → test or treat; Score 0–1 → viral, supportive care only",
      },
    ],
    pimpingQuestions: [
      "What are the Centor criteria? When do you treat empirically vs. test?",
      "Why do we treat GAS pharyngitis with antibiotics (the main reason)?",
      "What happens if you give amoxicillin to a patient with mononucleosis?",
      "What is the first-line antibiotic treatment for GAS pharyngitis?",
      "How do you differentiate peritonsillar abscess from severe tonsillitis?",
    ],
  },
  {
    id: "fm-allergic-rhinitis",
    name: "Allergic Rhinitis",
    icdCode: "J30.9",
    rotation: "family-medicine",
    category: "EENT / Nose and Sinus",
    definition:
      "IgE-mediated inflammation of the nasal mucosa triggered by airborne allergens. Classified as seasonal (SAR — pollens: tree/grass/weed) or perennial (PAR — dust mites, pet dander, mold). Affects 20–30% of the US population; most common chronic condition in children. Comorbidities: asthma (co-exists in 80% of asthmatics), sinusitis, otitis media, nasal polyps, conjunctivitis.",
    diagnosticCriteria:
      "Clinical diagnosis: nasal congestion, rhinorrhea, sneezing, pruritus (nose/eyes/palate) — triggered by specific allergen exposures. Allergy testing: skin prick testing (most sensitive, first-line) or serum-specific IgE (ImmunoCAP) — confirms sensitization, guides immunotherapy. Nasal smear: eosinophilia supports allergic etiology. Endoscopy if nasal polyps suspected. Trial of nasal corticosteroid spray can confirm diagnosis (expected improvement).",
    presentation: {
      chiefComplaint: [
        "\"Every spring my nose runs and my eyes itch constantly\"",
        "\"I'm always congested and can never breathe through my nose\"",
        "\"My child's nose runs all year and she keeps rubbing her eyes\"",
      ],
      associatedSymptoms: [
        "Nasal: clear rhinorrhea, nasal congestion/obstruction, sneezing (often paroxysmal), itching",
        "Ocular: allergic conjunctivitis — bilateral itching, tearing, redness (hallmark = itching)",
        "Palatal pruritus (hard palate itching), post-nasal drip, cough",
        "Allergic shiners (infraorbital darkening), Dennie-Morgan lines, allergic salute (horizontal nasal crease)",
      ],
      demographics:
        "Onset typically before age 20. Family history of atopy (asthma, eczema, food allergies) — atopic triad. Seasonal: tree pollen (spring) → grass (early summer) → ragweed (late summer/fall). Perennial: dust mites peak in winter months (forced air heating). 'Allergic march': atopic dermatitis → food allergies → allergic rhinitis → asthma.",
    },
    distinguishingFeatures:
      "Allergic vs. non-allergic rhinitis (vasomotor): both have congestion/rhinorrhea; allergic = positive allergy test, eosinophilia, itching/sneezing; non-allergic = no IgE sensitization, triggers = weather/odors/irritants, older age of onset. Drug-induced (rhinitis medicamentosa): chronic decongestant (oxymetazoline) use → rebound congestion. Sinusitis: purulent discharge, facial pain/pressure, fever — distinct from pure AR.",
    redFlags: [
      "Unilateral nasal symptoms — rule out foreign body (children), neoplasm, or CSF rhinorrhea",
      "Nasal polyps (associated with triad asthma: AR + polyps + aspirin sensitivity — Samter's triad)",
      "Severe persistent symptoms affecting quality of life/sleep → consider allergen immunotherapy",
    ],
    mnemonics: [
      {
        name: "Allergic Rhinitis Stepwise Treatment",
        content:
          "Step 1 (mild intermittent): Non-sedating antihistamine (cetirizine, loratadine, fexofenadine)\nStep 2 (moderate-severe): Intranasal corticosteroid (fluticasone, mometasone) — MOST EFFECTIVE single agent\nStep 3: Combine intranasal CS + antihistamine; add LTRA (montelukast)\nStep 4: Add intranasal antihistamine (azelastine), ipratropium (for rhinorrhea)\nStep 5: Allergen immunotherapy (SCIT or SLIT) — only disease-modifying treatment",
      },
    ],
    pimpingQuestions: [
      "What is the most effective single medication for allergic rhinitis?",
      "What is Samter's triad? What should you avoid giving these patients?",
      "How does allergic rhinitis differ from non-allergic (vasomotor) rhinitis?",
      "What is rhinitis medicamentosa and what causes it?",
      "What is the only disease-modifying treatment for allergic rhinitis?",
    ],
  },
  {
    id: "fm-conjunctivitis",
    name: "Conjunctivitis",
    icdCode: "H10.9",
    rotation: "family-medicine",
    category: "EENT / Eye Disorders",
    definition:
      "Inflammation of the conjunctiva — the transparent mucous membrane covering the sclera and inner eyelids. Most common eye condition in primary care. Classified as: viral (most common, 80%), bacterial, allergic, or chemical. Key distinguishing feature from more serious conditions: normal visual acuity and no photophobia (if present → uveitis, keratitis, acute glaucoma).",
    diagnosticCriteria:
      "Clinical diagnosis in most cases. Viral: watery discharge, preauricular lymphadenopathy, recent URTI contact. Bacterial: mucopurulent discharge, morning eye crusting, bilateral (can be unilateral). Allergic: bilateral, intense itching, clear watery discharge, associated AR. Cultures: neonatal conjunctivitis (N. gonorrhoeae vs. C. trachomatis) requires culture + Gram stain. Slit-lamp exam: if corneal involvement suspected. ALWAYS check visual acuity — reduction = refer to ophthalmology.",
    presentation: {
      chiefComplaint: [
        "\"My eye is red and has discharge\"",
        "\"I woke up and my eyes were glued shut\"",
        "\"Both my eyes itch and are red — my allergies are acting up\"",
      ],
      associatedSymptoms: [
        "Viral (adenovirus): watery discharge, preauricular LAD, photophobia possible, associated pharyngitis/URTI — highly contagious",
        "Bacterial: purulent/mucopurulent yellow-green discharge, morning crusting, eyelids stuck together",
        "Allergic: bilateral intense itching (hallmark), clear watery discharge, seasonal pattern, chemosis",
        "Gonococcal: hyperacute profuse purulent discharge within 24 hours — ophthalmologic emergency",
      ],
      demographics:
        "All ages. Viral: associated with adenovirus outbreaks (swimming pools, daycare). Bacterial: H. influenzae and S. pneumoniae common in children. Gonococcal neonatal: prophylaxis with erythromycin ointment prevents. Chlamydial neonatal: presents 5–14 days after birth (gonococcal: 1–5 days). Herpes keratoconjunctivitis: unilateral, dendritic corneal ulcer on fluorescein.",
    },
    distinguishingFeatures:
      "The key discriminator: ITCHING = allergic. Watery discharge + preauricular node = viral. Purulent discharge + morning crusting = bacterial. Red flags for serious pathology: photophobia, decreased vision, ciliary flush (ring of redness around iris), fixed dilated pupil → not simple conjunctivitis. Herpes simplex: unilateral, dendritic ulcer, may have vesicles on lid — treat with topical antivirals.",
    redFlags: [
      "Decreased visual acuity → refer to ophthalmology immediately",
      "Ciliary flush (perilimbal injection), photophobia → uveitis/keratitis",
      "Fixed mid-dilated pupil + acute severe eye pain → acute angle-closure glaucoma",
      "Gonococcal conjunctivitis — hyperacute purulent discharge → IV ceftriaxone, same-day ophthalmology",
      "Neonatal conjunctivitis in first week → N. gonorrhoeae until proven otherwise",
    ],
    mnemonics: [
      {
        name: "Conjunctivitis Discharge Type",
        content:
          "Watery = Viral (+ preauricular node)\nPurulent/thick yellow = Bacterial\nClear watery + ITCH = Allergic\nHyperAcute profuse = Gonorrhea (EMERGENCY)\nMilky/stringy = Chlamydial (chronic)",
      },
    ],
    pimpingQuestions: [
      "What physical finding differentiates conjunctivitis from uveitis or angle-closure glaucoma?",
      "What type of discharge is expected in allergic vs. bacterial vs. viral conjunctivitis?",
      "What is the significance of preauricular lymphadenopathy in red eye?",
      "When does neonatal gonococcal vs. chlamydial conjunctivitis present?",
      "What findings on eye exam warrant emergent ophthalmology referral?",
    ],
  },
  {
    id: "fm-bppv",
    name: "Benign Paroxysmal Positional Vertigo (BPPV)",
    icdCode: "H81.10",
    rotation: "family-medicine",
    category: "EENT / Ear Disorders",
    definition:
      "The most common cause of vertigo. Caused by displaced otoconia (calcium carbonate crystals) from the otolith organ into the semicircular canals (posterior canal most common — 80%). Produces brief, intense episodes of vertigo triggered by specific head position changes. Benign — does not indicate central pathology. Responds to repositioning maneuvers.",
    diagnosticCriteria:
      "Dix-Hallpike test: gold standard for posterior canal BPPV. Patient sits upright → rapidly lay supine with head turned 45° to affected side and extended 30° below horizontal → observe for: upbeat-torsional nystagmus (geotropic, fast phase toward affected ear) with latency 5–20 sec, duration < 60 sec, fatigable with repeated testing. Positive Dix-Hallpike = diagnostic. Negative with classic history → consider canal variant (lateral/anterior). MRI brain: indicated only if nystagmus is purely horizontal, non-fatigable, or neurologic symptoms present.",
    presentation: {
      chiefComplaint: [
        "\"The room spins when I roll over in bed\"",
        "\"I get dizzy when I look up or tilt my head back\"",
        "\"I feel dizzy for a few seconds when I lie down\"",
      ],
      associatedSymptoms: [
        "Brief episodes of intense rotational vertigo (seconds to < 1 minute)",
        "Triggered by specific movements: rolling over in bed, looking up (top shelf), bending over",
        "Nausea, vomiting during episodes",
        "No tinnitus or hearing loss (distinguishes from Ménière's disease)",
        "No focal neurologic symptoms",
      ],
      demographics:
        "Most common in adults > 50; peak 50–70s. Women > men (2:1). Annual incidence 0.6%. Predisposing factors: head trauma (#1 in younger patients), prolonged bed rest, labyrinthitis, osteoporosis, vitamin D deficiency. Spontaneous resolution occurs in weeks-months; high recurrence rate (50% at 5 years).",
    },
    distinguishingFeatures:
      "BPPV vs. central vertigo: BPPV has latency (5–20 sec onset), fatigable, < 1 min duration, upbeat-torsional nystagmus. Central: immediate onset, non-fatigable, direction-changing nystagmus, associated neurologic deficits → MRI urgently. BPPV vs. Ménière's: Ménière's has longer episodes (20 min – 12 hr), hearing loss, tinnitus, aural fullness. BPPV vs. vestibular neuritis: neuritis causes prolonged constant vertigo (days), gait instability, positive head impulse test.",
    redFlags: [
      "Neurologic symptoms (diplopia, dysarthria, dysphagia, ataxia) → central cause, MRI brain urgently",
      "Vertical nystagmus or purely horizontal non-fatigable nystagmus → central (stroke, MS, cerebellar lesion)",
      "Sudden severe headache with vertigo → posterior fossa hemorrhage",
      "Hearing loss with vertigo → Ménière's disease or acoustic neuroma",
    ],
    mnemonics: [
      {
        name: "BPPV Treatment: Epley Maneuver Steps",
        content:
          "1. Dix-Hallpike to affected side (identify with positive nystagmus)\n2. Turn head 90° toward unaffected side (still supine)\n3. Roll body + head 90° further (now facing down)\n4. Sit up (head still turned to unaffected side)\n5. Return head to midline\nEfficacy: ~80% resolution in one session. Repeat if nystagmus returns. Brandt-Daroff exercises: home alternative.",
      },
    ],
    pimpingQuestions: [
      "What is the Dix-Hallpike test and what constitutes a positive result?",
      "How does BPPV nystagmus differ from central vertigo nystagmus?",
      "What is the Epley maneuver and what does it treat?",
      "How do you differentiate BPPV from Ménière's disease?",
      "What features of vertigo should prompt MRI of the brain?",
    ],
  },

  // ── MSK / RHEUMATOLOGY ADDITIONS ─────────────────────────────────────────
  {
    id: "fm-gout",
    name: "Gout & Pseudogout",
    icdCode: "M10.9",
    rotation: "family-medicine",
    category: "Rheumatology / Inflammatory Conditions",
    definition:
      "Gout: monosodium urate (MSU) crystal deposition in joints and soft tissues due to hyperuricemia. The most common inflammatory arthritis in adults. Stages: asymptomatic hyperuricemia → acute gout flare → intercritical gout → chronic tophaceous gout. Pseudogout (CPPD): calcium pyrophosphate dihydrate crystal deposition — similar presentation but affects different joints (knees > wrists).",
    diagnosticCriteria:
      "Gold standard: joint aspiration and synovial fluid analysis under polarized light microscopy. Gout: negatively birefringent, needle-shaped MSU crystals (yellow when parallel to polarizer axis). Pseudogout: positively birefringent, rhomboid-shaped CPPD crystals (blue when parallel). Serum uric acid: > 6.8 mg/dL = hyperuricemia; can be normal during acute attack. Imaging: plain X-ray (chronic gout: 'punched-out' erosions with overhanging edges, 'rat bite' lesions, tophi); ultrasound: 'double contour sign' (MSU coating cartilage). Clinical diagnosis criteria (2015 ACR/EULAR): score-based — uric acid level, crystal confirmation, imaging findings.",
    presentation: {
      chiefComplaint: [
        "\"My big toe is suddenly swollen, red, and so painful I can't wear a shoe\"",
        "\"I woke up at 3 AM with excruciating pain in my foot — I couldn't even tolerate the sheets\"",
        "\"I've been having attacks in my knee for years and now I have lumps on my ears\"",
      ],
      associatedSymptoms: [
        "Acute flare: sudden onset (often nocturnal), monoarticular arthritis — severe pain, erythema, warmth, swelling",
        "Podagra: first MTP joint (hallux) — classic gout (50–60% of initial attacks)",
        "Other joints: ankle, midfoot, knee, wrist, olecranon bursa",
        "Tophi: chalky deposits in ear helix, Achilles tendon, olecranon bursa — chronic tophaceous gout",
        "Uric acid nephrolithiasis (10–25% of gout patients)",
      ],
      demographics:
        "Gout affects 4% of US adults; men >> women (ratio 4:1); postmenopausal women approach male risk. Risk factors: hyperuricemia (> 6.8 mg/dL), alcohol (especially beer/spirits > wine), purine-rich diet (red meat, organ meats, seafood), fructose, thiazide diuretics (↑ uric acid), CKD, obesity, cyclosporine, low-dose aspirin. Pseudogout: primarily affects elderly; associated with hyperparathyroidism, hemochromatosis, hypomagnesemia.",
    },
    distinguishingFeatures:
      "Gout vs. septic arthritis: both cause red hot monoarticular joint; septic = fever, no crystal history, urgent aspiration + Gram stain + culture. Gout vs. pseudogout: gout = 1st MTP, negatively birefringent; pseudogout = knee/wrist, positively birefringent. Serum uric acid can be NORMAL during acute attack — do not use to diagnose or rule out acute gout.",
    redFlags: [
      "Septic arthritis must always be ruled out in monoarticular arthritis — joint aspiration mandatory if febrile",
      "Tophi near joints — erosion, functional impairment → start urate-lowering therapy",
      "Allopurinol hypersensitivity syndrome — fever, rash, hepatotoxicity — highest risk in first 3 months, CKD, HLA-B*5801 (Asian populations)",
    ],
    mnemonics: [
      {
        name: "Gout Management: 3 Phases",
        content:
          "ACUTE FLARE (treat within 24 hours):\n  1st line: NSAIDs (indomethacin, naproxen) — avoid if CKD/peptic ulcer\n  2nd line: Colchicine 1.2 mg then 0.6 mg × 1 hour (modified regimen)\n  3rd line: Oral/IM/intra-articular corticosteroids\nINTERCRITICAL: prophylaxis with low-dose colchicine 0.6 mg QD during ULT initiation × 3–6 months\nCHRONIC ULT (Urate-Lowering Therapy) — indicated if ≥ 2 attacks/year, tophi, CKD, uric acid stones:\n  Allopurinol (xanthine oxidase inhibitor — start low, titrate to goal uric acid < 6.0 mg/dL)\n  Febuxostat: alternative XO inhibitor (cardiovascular concerns — avoid in CAD/stroke)\n  Goal: serum urate < 6.0 mg/dL (< 5.0 if tophi)",
      },
    ],
    pimpingQuestions: [
      "What crystals cause gout? Describe their appearance under polarized light microscopy.",
      "What joint is classically affected in the first gout attack?",
      "Can serum uric acid be normal during an acute gout attack?",
      "What is the mechanism of allopurinol? What is febuxostat?",
      "How do you differentiate gout from septic arthritis clinically?",
    ],
  },
  {
    id: "fm-ra",
    name: "Rheumatoid Arthritis (RA)",
    icdCode: "M06.9",
    rotation: "family-medicine",
    category: "Rheumatology / Inflammatory Conditions",
    definition:
      "A chronic, systemic autoimmune inflammatory arthritis characterized by symmetric polyarthritis with synovial inflammation. Pathophysiology: T-cell driven autoimmune activation → synovial hyperplasia (pannus formation) → joint destruction. Extra-articular manifestations in 40%. If untreated: progressive joint erosion, disability, and increased cardiovascular mortality. Early aggressive DMARD therapy is standard of care.",
    diagnosticCriteria:
      "2010 ACR/EULAR Criteria (score ≥ 6/10): Joint involvement (1–10 small joints = 5 pts), Serology (RF or anti-CCP positive = 3 pts), Acute phase reactants (abnormal CRP or ESR = 1 pt), Duration (≥ 6 weeks = 1 pt). Labs: RF (positive in 70–80%, not specific), anti-CCP antibodies (sensitivity 70%, specificity 95–98% — most specific for RA; predicts erosive disease), ESR/CRP (disease activity markers). X-ray: periarticular osteopenia, joint space narrowing, marginal erosions (late). Ultrasound/MRI: earlier detection of synovitis and erosions.",
    presentation: {
      chiefComplaint: [
        "\"My hands are stiff every morning for over an hour\"",
        "\"My knuckles and wrists are swollen and painful on both sides\"",
        "\"I'm exhausted and my small joints hurt symmetrically\"",
      ],
      associatedSymptoms: [
        "Morning stiffness > 1 hour (hallmark — distinguishes from OA which has < 30 min)",
        "Symmetric polyarthritis — MCP and PIP joints (not DIP), wrists, MTPs",
        "Soft, boggy joint swelling (synovitis) — not bony",
        "Extra-articular: subcutaneous rheumatoid nodules (pressure points — extensor forearm), interstitial lung disease, pleural effusion, pericarditis, scleritis, Felty syndrome (RA + splenomegaly + neutropenia)",
        "Systemic: fatigue, low-grade fever, weight loss",
      ],
      demographics:
        "Prevalence 0.5–1%. Women:men ratio 3:1. Peak onset 30–60 years. Smoking is strongest modifiable risk factor (and worsens disease). HLA-DR4 association. Extra-articular disease more common in RF/anti-CCP positive patients.",
    },
    distinguishingFeatures:
      "RA vs. OA: RA = symmetric, small joints (MCP, PIP, wrists), morning stiffness > 1 hr, elevated inflammatory markers, normal or periarticular osteopenia on X-ray; OA = asymmetric, DIP + PIP > MCP, morning stiffness < 30 min, normal labs, osteophytes on X-ray. RA vs. psoriatic arthritis: PsA often asymmetric, DIP involvement, 'sausage digits' (dactylitis), nail pitting, skin psoriasis.",
    redFlags: [
      "C-spine instability (atlanto-axial subluxation in RA) — neck pain + myelopathy → cervical MRI before intubation",
      "Felty syndrome: RA + splenomegaly + neutropenia → infection risk",
      "Drug monitoring: MTX → CBC/LFTs monthly; hydroxychloroquine → annual eye exam; anti-TNF → TB screening (QuantiFERON) before starting",
    ],
    mnemonics: [
      {
        name: "RA Treatment: DMARD Ladder",
        content:
          "Step 1 (newly diagnosed): Methotrexate (MTX) — anchor drug; add folic acid 1 mg daily\n  Alternatives: hydroxychloroquine, sulfasalazine, leflunomide\nStep 2 (inadequate MTX response): Add biologic DMARD\n  Anti-TNF: etanercept, adalimumab, infliximab (screen TB before!)\n  IL-6 inhibitors: tocilizumab, sarilumab\n  T-cell costimulation blocker: abatacept\n  B-cell depleter: rituximab\nStep 3: JAK inhibitors (tofacitinib, baricitinib) — oral targeted synthetic DMARDs\nBridging: short-course prednisone while DMARDs take effect (weeks to months)",
      },
    ],
    pimpingQuestions: [
      "Which antibody is most specific for RA? Which is most sensitive?",
      "How does morning stiffness differ between RA and osteoarthritis?",
      "What is the anchor DMARD for RA and what supplement must be co-prescribed?",
      "What screening must be done before initiating anti-TNF therapy?",
      "What is Felty syndrome?",
    ],
  },
  {
    id: "fm-fibromyalgia",
    name: "Fibromyalgia",
    icdCode: "M79.3",
    rotation: "family-medicine",
    category: "Rheumatology / Musculoskeletal",
    definition:
      "A chronic widespread pain condition characterized by central sensitization — amplified pain processing in the CNS without peripheral tissue damage or inflammation. Accompanied by fatigue, sleep disturbances, and cognitive dysfunction ('fibro fog'). Prevalence 2–8%; one of the most common diagnoses in rheumatology and primary care. No diagnostic biomarker — clinical diagnosis after excluding organic pathology.",
    diagnosticCriteria:
      "2010/2016 ACR Criteria (no longer requires tender point exam): Widespread Pain Index (WPI) ≥ 7 + Symptom Severity Scale (SSS) ≥ 5, OR WPI 4–6 + SSS ≥ 9. Symptoms present ≥ 3 months. No other disorder adequately explaining the pain. The tender point exam (18 tender points, ≥ 11 positive) is outdated — replaced by above criteria. Labs: normal — obtained to exclude organic disease (CBC, ESR/CRP, TSH, CK, ANA). Normal inflammatory markers are a hallmark of fibromyalgia.",
    presentation: {
      chiefComplaint: [
        "\"I hurt everywhere all the time and I'm always exhausted\"",
        "\"My pain is everywhere and nobody can find anything wrong with me\"",
        "\"I can't think straight and everything hurts, especially when I'm stressed\"",
      ],
      associatedSymptoms: [
        "Widespread musculoskeletal pain (bilateral, above and below waist, axial)",
        "Fatigue (often profound, not relieved by rest)",
        "Non-restorative sleep (wake up feeling unrefreshed)",
        "Cognitive dysfunction ('fibro fog') — memory, concentration difficulties",
        "Comorbidities: IBS (70%), headache (50%), anxiety/depression (30–50%), interstitial cystitis, PTSD",
        "Allodynia: pain from normally non-painful stimuli (light touch)",
      ],
      demographics:
        "Women:men ratio 7:1. Peak diagnosis 30–60 years. Associated with trauma (physical or psychological), anxiety/depression, sleep disorders. Often follows a triggering event (infection, injury, psychological stress). Frequently associated with other functional somatic syndromes.",
    },
    distinguishingFeatures:
      "Fibromyalgia vs. inflammatory arthritis (RA, SLE): fibromyalgia = normal inflammatory markers, no synovitis, no joint erosions, no organ damage. Fibromyalgia vs. hypothyroidism: both cause fatigue and myalgias — always check TSH. Fibromyalgia vs. polymyalgia rheumatica: PMR = proximal muscle pain/stiffness, elevated ESR/CRP, age > 50, responds dramatically to prednisone.",
    redFlags: [
      "Elevated inflammatory markers, objective synovitis, or organ involvement → NOT fibromyalgia → further workup",
      "Serious depression or suicidal ideation — comorbid in up to 30%",
      "Opioids are contraindicated in fibromyalgia — worsen central sensitization and function",
    ],
    mnemonics: [
      {
        name: "Fibromyalgia Treatment: SAFE",
        content:
          "S — Sleep hygiene and treatment (address non-restorative sleep)\nA — Aerobic exercise (low-impact — swimming, cycling, walking) — most effective non-pharmacologic Rx\nF — FDA-approved drugs: duloxetine (SNRI), milnacipran (SNRI), pregabalin (alpha-2-delta ligand)\nE — Education + CBT (cognitive-behavioral therapy) — address central sensitization\nAvoid: opioids, benzodiazepines, prolonged rest",
      },
    ],
    pimpingQuestions: [
      "What is the pathophysiology of fibromyalgia?",
      "What are the 2010 ACR diagnostic criteria for fibromyalgia?",
      "What are the FDA-approved medications for fibromyalgia?",
      "Why are opioids contraindicated in fibromyalgia?",
      "How do you differentiate fibromyalgia from polymyalgia rheumatica?",
    ],
  },

  // ── REPRODUCTIVE ADDITIONS ────────────────────────────────────────────────
  {
    id: "fm-menopause",
    name: "Menopause",
    icdCode: "N95.1",
    rotation: "family-medicine",
    category: "Reproductive / Gynecology",
    definition:
      "The permanent cessation of menstruation due to ovarian follicular depletion, defined retrospectively after 12 consecutive months of amenorrhea. Average age in the US: 51 years. Perimenopause (menopausal transition): begins 2–10 years before final menstrual period — irregular cycles, vasomotor symptoms. Premature ovarian insufficiency (POI): menopause before age 40.",
    diagnosticCriteria:
      "Clinical diagnosis: 12 months of amenorrhea in a woman > 45 without other cause. FSH: elevated > 40 mIU/mL (loss of negative feedback from estrogen); estradiol < 20 pg/mL. TSH: rule out thyroid disease causing irregular periods. Pregnancy test: rule out in perimenopausal women. Bone density (DEXA): recommended at menopause or earlier for risk factors — baseline for osteoporosis monitoring.",
    presentation: {
      chiefComplaint: [
        "\"I've been having terrible hot flashes and night sweats for months\"",
        "\"My periods have become irregular and I can't sleep\"",
        "\"Sex has become painful — I have vaginal dryness\"",
      ],
      associatedSymptoms: [
        "Vasomotor: hot flashes (sudden warmth, flushing, perspiration — most bothersome symptom), night sweats, sleep disruption",
        "Genitourinary syndrome of menopause (GSM): vaginal dryness, dyspareunia, urinary urgency/frequency, recurrent UTIs",
        "Mood changes, irritability, depression (transitional period)",
        "Cognitive: difficulty concentrating, memory lapses",
        "Cardiovascular risk increases post-menopause (loss of estrogen cardioprotection)",
        "Bone loss accelerates — up to 20% of bone mass lost in first 5–7 years post-menopause",
      ],
      demographics:
        "Average age US: 51 (range 45–55). Premature: < 40 (autoimmune, genetic, iatrogenic). Early: 40–45. Risk factors for early menopause: smoking, family history, chemotherapy/radiation. Menopausal symptoms last average 7–10 years; in some women > 15 years.",
    },
    distinguishingFeatures:
      "Perimenopause vs. menopause: perimenopause has irregular cycles + symptoms; menopause = 12 months amenorrhea. Hot flashes vs. other causes: carcinoid syndrome (flushing + diarrhea + wheezing), pheochromocytoma (episodic hypertension + headache), medication-induced (niacin, tamoxifen). Premature ovarian insufficiency vs. menopause: POI at < 40 — check karyotype (Turner's mosaic), autoimmune workup (anti-ovarian antibodies), consider HRT.",
    redFlags: [
      "Postmenopausal bleeding — any vaginal bleeding > 12 months after last period → endometrial biopsy to rule out endometrial cancer",
      "Hot flashes in men (prostate cancer treatment) or at atypical age → rule out secondary causes",
    ],
    mnemonics: [
      {
        name: "MHT Indications and Contraindications",
        content:
          "MHT (Menopausal Hormone Therapy) — most effective for vasomotor symptoms:\n  Systemic: estrogen alone (hysterectomy) OR estrogen + progestogen (intact uterus)\n  Local: vaginal estrogen (GSM only — minimal systemic absorption)\nABSOLUTE CONTRAINDICATIONS to systemic MHT:\n  — Hormone-sensitive cancer (breast, endometrial)\n  — Active VTE or DVT\n  — Active liver disease\n  — Unexplained vaginal bleeding\nTiming hypothesis: MHT initiated < 60 years or < 10 years after menopause = cardiovascular benefit; later initiation = risk\nAlternative for vasomotor sx: SNRIs (venlafaxine, desvenlafaxine), SSRIs, gabapentin, clonidine",
      },
    ],
    pimpingQuestions: [
      "What is the definition of menopause and how is it diagnosed?",
      "What is genitourinary syndrome of menopause (GSM)?",
      "What are the absolute contraindications to menopausal hormone therapy?",
      "What does postmenopausal vaginal bleeding always require?",
      "What is premature ovarian insufficiency and how does it differ from natural menopause?",
    ],
  },

  // ── NEUROLOGIC ADDITIONS ──────────────────────────────────────────────────
  {
    id: "fm-dementia",
    name: "Dementia & Alzheimer's Disease",
    icdCode: "G30.9",
    rotation: "family-medicine",
    category: "Neurology / Degenerative Disease",
    definition:
      "Dementia (now termed 'major neurocognitive disorder' in DSM-5): acquired, progressive cognitive decline severe enough to interfere with daily functioning, representing a decline from prior baseline. Alzheimer's disease (AD) accounts for 60–70% of all dementia. Other types: vascular dementia (20%), Lewy body dementia (LBD, 10%), frontotemporal dementia (FTD). Affects 6.7 million Americans ≥ 65; prevalence doubles every 5 years after age 65.",
    diagnosticCriteria:
      "Clinical diagnosis. Cognitive screening tools: Mini-Mental State Examination (MMSE), Montreal Cognitive Assessment (MoCA — more sensitive for MCI, score < 26 suggests impairment), Mini-Cog (3-word recall + clock draw). Workup to exclude reversible causes (DEMENTIA mnemonic below): CBC, CMP, TSH, B12, RPR, HIV, folate. Neuroimaging: CT/MRI brain — to exclude structural causes (SDH, NPH, tumor). Biomarkers (AD diagnosis): amyloid PET, CSF Aβ42 and tau — used in specialty settings. APOE ε4 allele: strongest genetic risk factor for late-onset AD.",
    presentation: {
      chiefComplaint: [
        "\"My mother keeps repeating herself and forgot how to pay bills\"",
        "\"My father got lost driving home from a place he's been to 100 times\"",
        "\"My husband's memory has slowly gotten worse over 2 years\"",
      ],
      associatedSymptoms: [
        "Early AD: short-term memory impairment (can't learn new info), word-finding difficulty",
        "Middle AD: language impairment (aphasia), visuospatial problems (getting lost), functional decline (IADLs)",
        "Late AD: loss of ADLs (dressing, bathing), incontinence, motor deficits, complete dependence",
        "Lewy Body Dementia: fluctuating cognition + visual hallucinations + parkinsonism + REM sleep behavior disorder",
        "Frontotemporal dementia: personality/behavioral changes BEFORE memory loss; disinhibition, apathy, language (primary progressive aphasia)",
        "Vascular dementia: stepwise progression, focal deficits, cardiovascular risk factors",
      ],
      demographics:
        "AD lifetime risk: 1 in 3 women, 1 in 6 men. Risk factors: age (#1), APOE ε4, family history, Down syndrome (100% by age 40), cardiovascular risk factors, head trauma, low education. Modifiable risk reduction: treat HTN/DM/hyperlipidemia, exercise, social engagement, hearing aids (hearing loss is #1 modifiable risk factor for dementia).",
    },
    distinguishingFeatures:
      "Dementia vs. delirium: delirium = acute onset, fluctuating course, inattention, often reversible (infection, medications); dementia = insidious onset, progressive, consciousness intact until late. Dementia vs. depression ('pseudodementia'): depression can mimic dementia in elderly — treat depression first, reassess cognition. Normal pressure hydrocephalus (NPH): triad — 'wet, wobbly, wacky' (urinary incontinence, gait ataxia, dementia) → MRI, VP shunt.",
    redFlags: [
      "Rapid cognitive decline (weeks-months) → Creutzfeldt-Jakob disease (CJD), CNS vasculitis, paraneoplastic, autoimmune encephalitis",
      "Young-onset dementia (< 65) → genetic workup, consider rare causes",
      "Driving safety assessment — mandatory duty in many states; cognitive impairment and driving risk",
      "Cholinesterase inhibitor + anticholinergic drugs = adverse interaction → medication reconciliation critical",
    ],
    mnemonics: [
      {
        name: "Reversible Dementia Causes: DEMENTIA",
        content:
          "D — Drugs (anticholinergics, benzodiazepines, opioids)\nE — Emotional (depression — pseudodementia)\nM — Metabolic (hypothyroid, B12 deficiency, hyperCa2+)\nE — Eye/Ear (sensory impairment)\nN — Normal pressure hydrocephalus\nT — Trauma (subdural hematoma)\nI — Infection (syphilis, HIV, encephalitis)\nA — Alcohol/Anemia",
      },
      {
        name: "AD Pharmacotherapy",
        content:
          "Mild-Moderate AD: Cholinesterase inhibitors\n  — Donepezil (Aricept) — all stages, once daily\n  — Rivastigmine (also patch) — also for LBD\n  — Galantamine\nModerate-Severe AD: Add Memantine (NMDA receptor antagonist)\nNew DMT: Lecanemab (Leqembi) — anti-amyloid antibody; slows decline in early AD\nBehavioral symptoms: low-dose antipsychotics (risperidone) — use cautiously (black box: increased mortality in elderly dementia)",
      },
    ],
    pimpingQuestions: [
      "What are the reversible causes of dementia (DEMENTIA mnemonic)?",
      "How do you distinguish dementia from delirium?",
      "What is the classic triad of normal pressure hydrocephalus?",
      "What is the mechanism of cholinesterase inhibitors vs. memantine in AD?",
      "Which dementia subtype features fluctuating cognition + visual hallucinations + parkinsonism?",
    ],
  },
  {
    id: "fm-seizure",
    name: "Seizure Disorders / Epilepsy",
    icdCode: "G40.909",
    rotation: "family-medicine",
    category: "Neurology / Seizure Disorders",
    definition:
      "Seizure: transient abnormal excessive neuronal discharge causing changes in behavior, movement, consciousness, or sensation. Epilepsy: ≥ 2 unprovoked seizures > 24 hours apart, OR 1 unprovoked seizure with ≥ 60% recurrence risk over next 10 years. Classified: focal (one hemisphere — aware vs. impaired awareness) or generalized (both hemispheres — absence, myoclonic, tonic-clonic). Provoked seizures (fever, metabolic, toxic) are not epilepsy.",
    diagnosticCriteria:
      "First unprovoked seizure workup: EEG (essential — epileptiform discharges), MRI brain (structural lesion), labs (glucose, Na+, Ca2+, Mg2+, renal/hepatic, toxicology screen, AED levels if on medication), LP if fever/meningismus. EEG: interictal spikes/sharp waves support epilepsy; normal EEG does NOT rule out epilepsy. MRI preferred over CT (better soft tissue). Status epilepticus: seizure > 5 minutes or repeated seizures without recovery → emergency.",
    presentation: {
      chiefComplaint: [
        "\"I lost consciousness and had shaking all over — I don't remember what happened\"",
        "\"I have episodes where I stare and pick at my clothes and don't respond\"",
        "\"My child has brief staring spells multiple times a day\"",
      ],
      associatedSymptoms: [
        "Generalized tonic-clonic (GTC): tonic phase (muscle stiffening, apnea) → clonic (rhythmic jerking) → postictal confusion/sleep",
        "Absence seizure: brief (5–30 sec) blank stare + behavioral arrest, NO postictal state — school-age children",
        "Focal impaired awareness: automatisms (lip smacking, picking), post-ictal confusion — temporal lobe most common",
        "Aura: sensory/autonomic prodrome preceding focal seizure (olfactory, déjà vu, rising epigastric sensation)",
        "Postictal period: confusion, headache, fatigue, Todd's paralysis (focal weakness post-seizure)",
      ],
      demographics:
        "Bimodal age distribution: highest in children < 2 (febrile seizures, congenital) and adults > 65 (stroke, tumor, dementia). Febrile seizures: 3 months–6 years, benign, does not require AEDs. New-onset seizure in elderly: stroke, subdural hematoma, tumor, metabolic — always requires imaging.",
    },
    distinguishingFeatures:
      "Seizure vs. syncope: syncure = brief LOC with rapid recovery, triggers (orthostatic, Valsalva), tonic posturing possible but brief; seizure = prolonged LOC, postictal confusion, tongue bite (lateral), incontinence. Seizure vs. non-epileptic attack disorder (NEAD/psychogenic): NEAD = eye closure during episode, pelvic thrusting, variable patterns, normal EEG during event → video-EEG monitoring. Absence vs. focal impaired awareness: absence = no postictal confusion, brief, provoked by hyperventilation; focal = longer, aura, postictal confusion.",
    redFlags: [
      "Status epilepticus (seizure > 5 min) → benzodiazepine (lorazepam IV/IM or diazepam rectal) → fosphenytoin/levetiracetam → anesthesia",
      "New-onset seizure in adult → always image brain (MRI) to exclude mass lesion",
      "AED teratogenicity: valproate (highest risk — NTDs, cognitive effects); phenytoin (fetal hydantoin syndrome); all AEDs carry some risk",
      "Driving restriction: state laws vary — typically 3–6 months seizure-free before resuming driving",
    ],
    mnemonics: [
      {
        name: "First-Line AEDs by Seizure Type",
        content:
          "Generalized tonic-clonic: valproate (not women of childbearing age), levetiracetam, lamotrigine\nAbsence: ethosuximide (drug of choice for pure absence), valproate (if GTC also present)\nFocal: levetiracetam, lamotrigine, carbamazepine, oxcarbazepine\nMyoclonic: valproate, levetiracetam\nStatus epilepticus sequence:\n  1st: Benzo (lorazepam 0.1 mg/kg IV)\n  2nd: Levetiracetam, fosphenytoin, or valproate IV\n  3rd: Propofol or midazolam infusion (refractory SE)",
      },
    ],
    pimpingQuestions: [
      "What is the definition of epilepsy (2 criteria)?",
      "What is the key differentiator between absence and focal impaired awareness seizures?",
      "What is Todd's paralysis?",
      "What is the first-line treatment for status epilepticus?",
      "Which antiepileptic drug is drug of choice for pure absence seizures?",
    ],
  },

  // ── RENAL/GU ADDITIONS ────────────────────────────────────────────────────
  {
    id: "fm-bph",
    name: "Benign Prostatic Hyperplasia (BPH)",
    icdCode: "N40.1",
    rotation: "family-medicine",
    category: "Renal / Genitourinary",
    definition:
      "Non-malignant enlargement of the prostate gland due to stromal and epithelial hyperplasia in the transitional zone, causing lower urinary tract symptoms (LUTS). Affects 50% of men by age 60, 90% by age 85. BPH is a histological diagnosis — the clinical syndrome is LUTS. Important: BPH does NOT increase risk of prostate cancer.",
    diagnosticCriteria:
      "Clinical + AUA Symptom Score (AUASS/IPSS): 7-question validated tool scoring LUTS severity (0–35). DRE: enlarged, smooth, rubbery prostate (smooth vs. nodular/indurated in prostate cancer). UA: rule out UTI, hematuria (suggests other pathology — cancer, stones). PSA: offer if would change management; not required for BPH diagnosis but elevated in BPH (age-adjusted norms). Post-void residual (PVR) by ultrasound: > 300 mL = urinary retention risk. Renal ultrasound: if hydronephrosis suspected (bilateral obstruction). Urodynamics: in complex cases.",
    presentation: {
      chiefComplaint: [
        "\"I'm up 4 times a night to urinate\"",
        "\"My urine stream is weak and I feel like I never fully empty\"",
        "\"It takes forever to start urinating and I dribble at the end\"",
      ],
      associatedSymptoms: [
        "Obstructive (voiding) LUTS: weak/intermittent stream, straining, hesitancy, incomplete emptying, terminal dribbling",
        "Storage (irritative) LUTS: frequency, urgency, nocturia (≥ 2 episodes/night)",
        "Acute urinary retention (AUR): sudden inability to void → emergency catheterization",
        "Overflow incontinence from chronic retention",
        "Hematuria (less common with BPH — needs further evaluation)",
      ],
      demographics:
        "Almost universal histologic finding in aging men. Symptomatic BPH: 50% by age 60. Risk factors: age, androgens (testosterone → DHT via 5-alpha reductase), obesity. Triggers for AUR: alpha-stimulating medications (decongestants, antihistamines), anticholinergics, NSAIDs, cold weather.",
    },
    distinguishingFeatures:
      "BPH vs. prostate cancer: BPH = smooth, enlarged gland, normal PSA velocity; cancer = nodular/indurated DRE, rapidly rising PSA. BPH vs. overactive bladder (OAB): OAB = primarily storage symptoms (urgency, frequency, nocturia) without obstructive symptoms, normal PVR, occurs in men AND women. Urethral stricture: similar symptoms but younger age, history of catheterization/STI/trauma.",
    redFlags: [
      "Acute urinary retention → Foley catheterization, start alpha-blocker, urology referral",
      "Renal insufficiency from bilateral hydronephrosis → urgent decompression",
      "Hematuria with BPH → always evaluate for bladder cancer, prostate cancer (cystoscopy, imaging)",
      "Recurrent UTIs in men with BPH → incomplete bladder emptying, consider surgical intervention",
    ],
    mnemonics: [
      {
        name: "BPH Medical Management",
        content:
          "MILD symptoms (AUASS < 8): Watchful waiting, lifestyle (limit evening fluids, caffeine)\nMODERATE-SEVERE (AUASS ≥ 8) — Medical therapy:\n  Alpha-1 blockers (FIRST-LINE for symptoms): tamsulosin, alfuzosin, silodosin\n    → Rapid onset (days), relax smooth muscle, improve flow\n    → SE: orthostatic hypotension, retrograde ejaculation\n  5-alpha reductase inhibitors (for large prostate ≥ 30 g): finasteride, dutasteride\n    → Block DHT, shrink prostate over months, reduce AUR/surgery risk\n    → SE: decreased libido, ED, gynecomastia, false-lowering of PSA (÷2)\n  Combination (alpha-blocker + 5ARI): most effective for large prostate\nSURGERY: TURP (transurethral resection of prostate) — gold standard; minimally invasive (UroLift, Rezum)",
      },
    ],
    pimpingQuestions: [
      "What is the difference between obstructive and irritative (storage) LUTS?",
      "What is the mechanism of alpha-1 blockers vs. 5-alpha reductase inhibitors for BPH?",
      "Why do 5-alpha reductase inhibitors affect PSA levels and what adjustment must be made?",
      "What is acute urinary retention and how is it managed?",
      "What medications can precipitate acute urinary retention in BPH patients?",
    ],
  },
  {
    id: "fm-nephrolithiasis",
    name: "Nephrolithiasis (Kidney Stones)",
    icdCode: "N20.0",
    rotation: "family-medicine",
    category: "Renal / Obstructive Disorders",
    definition:
      "Formation of calculi in the urinary collecting system. Stone composition: calcium oxalate/phosphate (80% — most common), uric acid (10%), struvite/magnesium ammonium phosphate (5–10% — infection stones), cystine (1%). Affects 1 in 10 Americans; lifetime risk 9% (men), 7% (women). Recurrence: 50% within 5–10 years without metabolic workup and prevention.",
    diagnosticCriteria:
      "Non-contrast CT abdomen/pelvis (NCCT): gold standard — detects all stone types (sensitivity 96–98%, specificity 99%). Urine analysis: hematuria (microscopic in 85–90%), pyuria if infection. KUB X-ray: visualizes calcium stones (radiopaque), not uric acid stones (radiolucent). Ultrasound: preferred in pregnancy (radiation-free), children, surveillance; lower sensitivity for ureteral stones. Metabolic workup (24-hr urine) for recurrent stones: calcium, oxalate, uric acid, citrate, phosphate, volume, creatinine. Serum: BMP (creatinine, calcium, K+), uric acid, PTH if hypercalcemia.",
    presentation: {
      chiefComplaint: [
        "\"I have the worst pain of my life in my flank radiating to my groin\"",
        "\"I suddenly have blood in my urine and flank pain\"",
        "\"I've had kidney stones before — I think I'm having another one\"",
      ],
      associatedSymptoms: [
        "Renal colic: sudden onset severe colicky flank/back pain radiating to ipsilateral groin/scrotum/labia ('loin to groin')",
        "Pain waxes and wanes (ureteral peristalsis), patient cannot find comfortable position",
        "Hematuria: gross or microscopic (88–90%)",
        "Nausea and vomiting (from pain + celiac plexus proximity)",
        "Urinary urgency/frequency when stone approaches UVJ (ureterovesical junction)",
      ],
      demographics:
        "Men > women (2:1 for calcium; more equal for uric acid). Peak onset 30–60 years. Risk factors: low fluid intake (most important!), hot climate, high-sodium diet, high animal protein, inflammatory bowel disease (↑ oxalate absorption — enteric hyperoxaluria), hyperparathyroidism (↑ calcium), obesity, gout (↑ uric acid), family history. Struvite: recurrent UTIs with urease-producing organisms (Proteus, Klebsiella, Pseudomonas) — form 'staghorn calculi.'",
    },
    distinguishingFeatures:
      "Renal colic vs. aortic aneurysm: AAA can mimic renal colic — pulsatile mass, cardiovascular risk factors, hemodynamically unstable → urgent CT with contrast, vascular surgery. Renal colic vs. pyelonephritis: pyelo = fever, CVA tenderness, UA with pyuria/bacteriuria; stone pain is colicky, afebrile (unless obstructed + infected). Radiolucent stones (uric acid): not seen on KUB; CT shows density difference; alkalinize urine (urine pH > 6.5) → dissolution.",
    redFlags: [
      "Obstructing stone + fever/infection → sepsis risk → emergent urologic decompression (ureteral stent or percutaneous nephrostomy) + IV antibiotics",
      "Solitary kidney with complete obstruction → urgent urology",
      "Stone + anuria → complete bilateral obstruction or stone in solitary kidney",
      "Uncontrolled pain → IV ketorolac + opioids, antiemetics, IV hydration",
    ],
    mnemonics: [
      {
        name: "Stone Types and Characteristics",
        content:
          "Calcium oxalate (80%): envelope/dumbbell shaped; radiopaque; ↑ oxalate (IBD, spinach), ↑ Ca\nCalcium phosphate: radiopaque; associated with RTA type 1, hyperPTH\nUric acid (10%): radiolucent on KUB; gout, high protein diet; alkalinize urine → dissolve\nStruvite (staghorn): radiopaque; Proteus UTI; urease splits urea → NH3 → alkaline urine\nCystine: rare; hexagonal crystals on UA; cystinuria (autosomal recessive)\nTreatment threshold: < 10 mm → conservative (hydration, alpha-blockers for distal stones)\n> 10 mm or non-passing → ESWL, ureteroscopy, or PCNL",
      },
    ],
    pimpingQuestions: [
      "What is the gold standard imaging for nephrolithiasis and why?",
      "What organism is associated with struvite (staghorn) calculi?",
      "Why are uric acid stones radiolucent and how are they treated medically?",
      "What are the indications for emergent urologic intervention in nephrolithiasis?",
      "What is the single most effective preventive measure for kidney stones?",
    ],
  },

  // ── HEMATOLOGIC ADDITIONS ─────────────────────────────────────────────────
  {
    id: "fm-macrocytic-anemia",
    name: "Macrocytic Anemia (B12 / Folate Deficiency)",
    icdCode: "D51.9",
    rotation: "family-medicine",
    category: "Hematologic / Anemias",
    definition:
      "Macrocytic anemia: MCV > 100 fL. Classified as megaloblastic (abnormal nuclear maturation — B12 or folate deficiency) or non-megaloblastic (liver disease, alcohol, hypothyroidism, medications — MCV typically 100–110). Vitamin B12 deficiency: deficient intrinsic factor (pernicious anemia — most common), dietary (strict vegans), malabsorption (gastric bypass, Crohn's, celiac, metformin use). Folate deficiency: dietary (alcohol, elderly, poor nutrition), pregnancy demand, methotrexate.",
    diagnosticCriteria:
      "CBC: elevated MCV (> 100), low Hgb/Hct, leukopenia, thrombocytopenia (pancytopenia in severe). Peripheral smear: hypersegmented neutrophils (≥ 5 lobes or ≥ 1 cell with 6+ lobes — most sensitive finding for megaloblastic anemia), oval macrocytes. B12 level: < 200 pg/mL (deficient); 200–300 borderline (check methylmalonic acid + homocysteine). Methylmalonic acid (MMA): elevated in B12 deficiency — most sensitive/specific confirmatory test. Homocysteine: elevated in both B12 AND folate deficiency. Serum folate: < 4 ng/mL deficient. IF antibodies and gastric parietal cell antibodies: pernicious anemia. Schilling test: historical.",
    presentation: {
      chiefComplaint: [
        "\"I've been feeling exhausted and my tongue feels sore and smooth\"",
        "\"My hands and feet are tingling and I've been forgetful\"",
        "\"My doctor found a low B12 on bloodwork — I've been on metformin for years\"",
      ],
      associatedSymptoms: [
        "Anemia symptoms: fatigue, pallor, exertional dyspnea, palpitations",
        "Glossitis: smooth, beefy red tongue (atrophic glossitis — B12 or folate)",
        "B12 neurologic deficiency (does NOT occur with folate deficiency alone):",
        "  — Subacute combined degeneration of the spinal cord: posterior columns (vibration/proprioception loss) + lateral corticospinal tracts (weakness, spasticity, Babinski)",
        "  — Peripheral neuropathy: symmetric stocking-glove",
        "  — Cognitive decline, megaloblastic madness",
        "Lemon-yellow skin tinge (hemolysis + jaundice)",
      ],
      demographics:
        "Pernicious anemia: autoimmune atrophic gastritis, anti-IF antibodies, achlorhydria; Northern European, age > 60, female predominance; associated with other autoimmune diseases (thyroid, vitiligo, Addison's). Folate: pregnancy (megaloblastic anemia + NTD prevention — 0.4–0.8 mg/day preconception), alcoholics, elderly. Metformin: reduces B12 absorption — check B12 annually in long-term metformin users.",
    },
    distinguishingFeatures:
      "B12 vs. folate deficiency: KEY DIFFERENCE — B12 causes neurologic disease (subacute combined degeneration), folate does NOT. Giving folate to a B12-deficient patient corrects anemia but allows neurologic damage to progress. Always check B12 before treating with folate. Megaloblastic vs. non-megaloblastic macrocytosis: hypersegmented PMNs = megaloblastic; liver disease/alcohol/hypothyroidism = non-megaloblastic (normal PMN segmentation).",
    redFlags: [
      "Neurologic symptoms with B12 deficiency → IV/IM cyanocobalamin (high-dose oral also effective if absorption intact)",
      "Folate supplementation without ruling out B12 deficiency → corrects anemia but uncovers/worsens neurologic disease",
      "Pancytopenia with hypersegmented PMNs → consider hematology if severe, bone marrow biopsy if unclear etiology",
    ],
    mnemonics: [
      {
        name: "B12 vs Folate: Key Differences",
        content:
          "B12 stores: 3–5 years (in liver) — takes years to deplete\nFolate stores: 3–4 MONTHS — depletes quickly\nNeurologic damage: B12 ONLY (subacute combined degeneration)\nDietary B12 sources: animal products only (meat, dairy, eggs) — vegans at risk\nDietary folate: leafy greens (FOLate = FOLiage)\nB12 Treatment: cyanocobalamin IM q month (classic) OR high-dose oral 1000–2000 mcg daily (equally effective if non-PA)\nFolate Treatment: folic acid 1–5 mg/day PO",
      },
    ],
    pimpingQuestions: [
      "What peripheral blood smear finding is pathognomonic for megaloblastic anemia?",
      "What is the KEY clinical difference between B12 and folate deficiency?",
      "What is subacute combined degeneration of the spinal cord?",
      "What is the most specific lab test to confirm B12 deficiency when serum B12 is borderline?",
      "Why must B12 be checked before treating macrocytic anemia with folate?",
    ],
  },

  // ── INFECTIOUS DISEASE ADDITIONS ─────────────────────────────────────────
  {
    id: "fm-hiv",
    name: "HIV / AIDS",
    icdCode: "B20",
    rotation: "family-medicine",
    category: "Infectious Disease / Viral Infections",
    definition:
      "Human immunodeficiency virus (HIV) is an RNA retrovirus that infects CD4+ T lymphocytes, leading to progressive immune deficiency. Untreated HIV → AIDS (CD4 < 200 cells/μL or AIDS-defining illness). Transmitted: sexual contact (MSM > heterosexual), shared needles, blood products, vertical (mother to child). Modern antiretroviral therapy (ART) suppresses viral load to undetectable → near-normal lifespan and prevents transmission (U=U: Undetectable = Untransmittable).",
    diagnosticCriteria:
      "USPSTF: Screen ALL adults 15–65 years once; screen high-risk annually. Fourth-generation HIV-1/2 antigen/antibody combination immunoassay (Ag/Ab combo): detects p24 antigen + antibodies — preferred screening test (detects infection 18–45 days post-exposure). Positive → HIV-1/HIV-2 antibody differentiation immunoassay. If discordant → HIV RNA (viral load) PCR. CD4 count: immunologic staging. HIV RNA viral load: guides treatment efficacy (goal: undetectable < 20 copies/mL). Resistance testing before starting ART.",
    presentation: {
      chiefComplaint: [
        "\"I've been having fevers, night sweats, and swollen lymph nodes for weeks\"",
        "\"I have oral thrush and I keep getting sick\"",
        "\"I want to get tested for HIV — I had unprotected sex recently\"",
      ],
      associatedSymptoms: [
        "Acute HIV (ARS/viral syndrome): 2–4 weeks post-exposure — fever, LAD, pharyngitis, rash (maculopapular), myalgias, headache — lasts 2–4 weeks",
        "Chronic HIV (asymptomatic): may last years; gradual CD4 decline",
        "AIDS (CD4 < 200): PCP (Pneumocystis jirovecii pneumonia), CMV retinitis, MAC, toxoplasmosis, cryptococcal meningitis, esophageal candidiasis, Kaposi's sarcoma, HIV dementia",
        "Constitutional: weight loss, night sweats, chronic diarrhea, fatigue",
      ],
      demographics:
        "~ 1.2 million Americans living with HIV; 13% undiagnosed. Highest new diagnoses: MSM (66%), Black/African American and Hispanic populations disproportionately affected. HIV pre-exposure prophylaxis (PrEP): tenofovir/emtricitabine daily → 99% reduction in sexual transmission risk; indicated for HIV-negative at substantial risk. Post-exposure prophylaxis (PEP): within 72 hours of exposure × 28 days.",
    },
    distinguishingFeatures:
      "Acute HIV vs. mononucleosis vs. other viral syndrome: acute HIV = maculopapular rash + LAD + pharyngitis without exudate, high viral load, negative monospot (EBV testing). CD4 count < 200 = AIDS regardless of symptoms. PCP pneumonia: CD4 < 200 — bilateral interstitial infiltrates, dry cough, progressive dyspnea, LDH elevated, responds to TMP-SMX. CMV retinitis: CD4 < 50 — cotton-wool spots, 'pizza pie' fundus.",
    redFlags: [
      "CD4 < 200: start PCP prophylaxis (TMP-SMX), consider toxoplasma prophylaxis",
      "CD4 < 50: add MAC prophylaxis (azithromycin weekly)",
      "New HIV diagnosis → start ART immediately regardless of CD4 count",
      "Cryptococcal meningitis: severe headache + meningismus in AIDS → CSF India ink, cryptococcal antigen → amphotericin B + flucytosine",
      "IRIS (immune reconstitution inflammatory syndrome): paradoxical worsening after starting ART → steroids",
    ],
    mnemonics: [
      {
        name: "HIV Opportunistic Infection by CD4 Count",
        content:
          "CD4 < 500: oral thrush (candidiasis), hairy leukoplakia, herpes zoster\nCD4 < 200: PCP (TMP-SMX prophylaxis), toxoplasmosis, cryptococcal meningitis, histoplasmosis\nCD4 < 100: CMV retinitis, esophageal candidiasis, progressive multifocal leukoencephalopathy (PML-JC virus)\nCD4 < 50: MAC (Mycobacterium avium complex — azithromycin prophylaxis), CMV disseminated\nRemember: lower the CD4, worse the bugs",
      },
    ],
    pimpingQuestions: [
      "What is the preferred initial HIV screening test and what does it detect?",
      "What CD4 count defines AIDS?",
      "What is PrEP, who qualifies, and what drug is used?",
      "What is the principle of 'U=U' in HIV care?",
      "At what CD4 level do you start PCP prophylaxis and what drug is used?",
    ],
  },
  {
    id: "fm-mononucleosis",
    name: "Infectious Mononucleosis (EBV)",
    icdCode: "B27.90",
    rotation: "family-medicine",
    category: "Infectious Disease / Viral Infections",
    definition:
      "A clinical syndrome caused by primary Epstein-Barr virus (EBV) infection, characterized by the classic triad: fever, pharyngitis, and lymphadenopathy. EBV is a herpesvirus that infects B lymphocytes and oral epithelial cells. Transmitted via saliva ('kissing disease'). Most common in adolescents and young adults. Primary EBV in early childhood is typically asymptomatic. Splenomegaly in 50% — risk of splenic rupture with contact sports.",
    diagnosticCriteria:
      "Clinical: classic triad + exudative pharyngitis + splenomegaly + hepatomegaly. CBC: lymphocytosis with > 10% atypical lymphocytes (large, activated — 'Downey cells'). Monospot test (heterophile antibody test): rapid, ~85% sensitivity in adolescents; negative in young children (< 4 years) and early illness (false-negative in first week) — if negative and high clinical suspicion, retest in 1 week or order EBV-specific antibodies. EBV-specific antibodies (confirmatory): VCA IgM (acute), VCA IgG (past exposure), EA (early antigen — active replication), EBNA (late — after 6–8 weeks). LFTs: elevated transaminases in 80% (hepatitis component).",
    presentation: {
      chiefComplaint: [
        "\"My teenager has been exhausted with a severe sore throat for a week\"",
        "\"I have a terrible sore throat, neck swelling, and feel wiped out\"",
        "\"I was given amoxicillin for strep but now I have a rash all over\"",
      ],
      associatedSymptoms: [
        "Triad: fever (38–40°C) + severe exudative pharyngitis (may have gray-white exudate) + posterior > anterior cervical LAD",
        "Profound fatigue (can last weeks to months — chronic fatigue post-EBV)",
        "Splenomegaly (50%) — risk for spontaneous splenic rupture with trauma/contact sports",
        "Hepatomegaly (10–15%), elevated transaminases (80%)",
        "Maculopapular rash after amoxicillin/ampicillin — nearly 100% incidence (not true allergy — immune complex reaction)",
        "Periorbital edema (Hoagland's sign), palatal petechiae",
      ],
      demographics:
        "Peak age: 15–25 years (adolescents and young adults). In children < 5: usually asymptomatic or mild. Recurrence: EBV remains latent in B cells for life — reactivation in immunocompromised. Long-term EBV associations: Burkitt's lymphoma (endemic sub-Saharan Africa), Hodgkin's lymphoma (mixed cellularity), nasopharyngeal carcinoma.",
    },
    distinguishingFeatures:
      "EBV mono vs. GAS pharyngitis: both have exudative pharyngitis; mono = posterior LAD (GAS = anterior), splenomegaly, atypical lymphocytosis, monospot positive. EBV vs. CMV mono: CMV = monospot NEGATIVE, less pharyngitis, more systemic. EBV vs. acute HIV: both cause fever + LAD + pharyngitis; HIV = monospot negative, rash, high-risk exposure history. Amoxicillin rash in mono: always mention — NOT a penicillin allergy.",
    redFlags: [
      "Splenic rupture — left-sided abdominal pain radiating to left shoulder (Kehr's sign) → emergent surgical consult",
      "Airway obstruction from massive tonsillar hypertrophy — drooling, stridor → steroids, ENT, ICU",
      "Hepatitis — check LFTs; avoid alcohol and hepatotoxic medications",
      "Contact sports restriction: no contact sports until splenomegaly resolved (ultrasound-confirmed) — typically ≥ 3–4 weeks",
    ],
    mnemonics: [
      {
        name: "EBV Mono: SPLEEN",
        content:
          "S — Sore throat (exudative pharyngitis, posterior LAD)\nP — Profound fatigue\nL — Lymphocytosis (atypical lymphocytes > 10%)\nE — EBV (monospot — heterophile antibodies)\nE — Elevated LFTs (hepatitis component in 80%)\nN — No amoxicillin (near 100% maculopapular rash)\nDon't forget: No contact sports until spleen normalizes",
      },
    ],
    pimpingQuestions: [
      "What is the classic clinical triad of infectious mononucleosis?",
      "Why does amoxicillin cause a rash in mononucleosis and is it a true allergy?",
      "What is Hoagland's sign?",
      "What is the significance of splenomegaly in mono regarding physical activity?",
      "When is the monospot test falsely negative and what alternative testing confirms EBV?",
    ],
  },

  // ── DERMATOLOGIC ADDITIONS ────────────────────────────────────────────────
  {
    id: "fm-atopic-derm",
    name: "Atopic Dermatitis (Eczema)",
    icdCode: "L20.9",
    rotation: "family-medicine",
    category: "Dermatology / Inflammatory Skin Disease",
    definition:
      "A chronic, relapsing-remitting inflammatory skin condition characterized by pruritic, eczematous lesions. Part of the 'atopic triad' (atopic dermatitis, allergic rhinitis, asthma). Pathophysiology: skin barrier dysfunction (filaggrin gene mutations) + Th2-dominant immune response. Most common chronic skin disease in children (affects 10–20%); can persist or develop in adults.",
    diagnosticCriteria:
      "Clinical diagnosis using Hanifin-Rajka criteria. Major: pruritus (essential), chronic/relapsing course, typical morphology/distribution (infants: face/extensors; children/adults: flexural creases — antecubital/popliteal), personal/family history of atopy. Minor: xerosis (dry skin), IgE elevation, early age of onset, skin infections (S. aureus colonization — 90% of AD patients), hand/foot dermatitis, nipple eczema. Skin biopsy rarely needed. Allergy testing if food allergy suspected (in children < 5 with severe AD not responding to treatment).",
    presentation: {
      chiefComplaint: [
        "\"My baby's cheeks are red and rashy and she scratches constantly\"",
        "\"The inside of my elbows and knees have been itching and oozing for years\"",
        "\"My skin is so dry and itchy — it's worse in winter\"",
      ],
      associatedSymptoms: [
        "Intense pruritus — often worse at night (sleep disruption)",
        "Infants: erythematous, weeping, crusting patches on cheeks, scalp, extensor surfaces",
        "Children/adults: lichenified (thickened) plaques in flexural creases — antecubital fossa, popliteal fossa, neck",
        "Xerosis (dry skin) throughout — hallmark even in uninvolved skin",
        "Secondary infection: S. aureus (weeping, honey-crusted plaques), eczema herpeticum (HSV — punched-out erosions)",
      ],
      demographics:
        "Prevalence: 15–20% in children, 1–3% in adults. Onset: 60% by age 1, 90% by age 5. Family history of atopy in 70%. Filaggrin (FLG) gene mutation in 30% of AD patients — strongest genetic risk factor. Triggers: heat/sweating, dry weather, wool, soaps/detergents, stress, food allergens (eggs, milk, wheat, soy, nuts in children < 5).",
    },
    distinguishingFeatures:
      "AD vs. psoriasis: AD = flexural distribution, intensely pruritic, scale less prominent; psoriasis = extensor surfaces (elbows, knees), silvery scale, nail pitting, arthritis. AD vs. contact dermatitis: contact = geometric distribution matching exposure, acute onset. Eczema herpeticum: complication of HSV superinfection in AD patient — punched-out monomorphic vesicles/erosions, fever, malaise → systemic acyclovir.",
    redFlags: [
      "Eczema herpeticum (Kaposi varicelliform eruption) — HSV superinfection → systemic acyclovir",
      "Widespread S. aureus superinfection — weeping, honey-crusting, fever → antibiotics (cephalexin, or MRSA coverage if indicated)",
      "Erythroderma (> 90% BSA involvement) → hospitalization",
    ],
    mnemonics: [
      {
        name: "AD Treatment Ladder",
        content:
          "Step 1: Emollients (petrolatum-based — applied immediately after bathing), trigger avoidance, lukewarm baths\nStep 2: Topical corticosteroids (TCS) — low-potency (hydrocortisone 1%) for face/folds; mid-potency (triamcinolone) for body\nStep 3: Topical calcineurin inhibitors (tacrolimus, pimecrolimus) — steroid-sparing, safe for face/folds\nStep 4: Topical PDE4 inhibitor (crisaborole) or JAK inhibitor (ruxolitinib)\nStep 5: Dupilumab (IL-4/IL-13 blocker) — biologicic for moderate-severe AD ≥ 6 months\nStep 6: Systemic immunosuppression (cyclosporine, methotrexate) — severe refractory",
      },
    ],
    pimpingQuestions: [
      "What is the atopic triad and what gene mutation is strongly associated with atopic dermatitis?",
      "How does the distribution of AD differ between infants and older children/adults?",
      "What organism commonly superinfects atopic dermatitis and how do you recognize it?",
      "What is eczema herpeticum and how is it treated?",
      "What is dupilumab's mechanism and when is it indicated?",
    ],
  },
  {
    id: "fm-herpes-zoster",
    name: "Herpes Zoster (Shingles)",
    icdCode: "B02.9",
    rotation: "family-medicine",
    category: "Dermatology / Viral Infections",
    definition:
      "Reactivation of latent varicella-zoster virus (VZV) from dorsal root or cranial nerve ganglia, causing a unilateral dermatomal vesicular rash. Lifetime risk ~30%; risk increases sharply with age and immunosuppression. Major morbidity: postherpetic neuralgia (PHN) — pain persisting > 90 days after rash onset. Prevention: Shingrix (recombinant zoster vaccine) recommended for all ≥ 50 years — 97% efficacy against zoster, 91% against PHN.",
    diagnosticCriteria:
      "Clinical diagnosis in most cases: prodromal dermatomal pain/burning/tingling → unilateral grouped vesicles on erythematous base in single dermatomal distribution. PCR of vesicular fluid: gold standard for confirmation (especially for atypical presentations — sine herpete, disseminated). Tzanck smear: multinucleated giant cells (does not distinguish VZV from HSV). DFA of vesicular fluid: rapid, highly specific. Ophthalmic involvement: slit-lamp exam, ophthalmology referral.",
    presentation: {
      chiefComplaint: [
        "\"I have terrible burning pain on one side of my chest that wraps around\"",
        "\"I have a blistery rash on my face and my eye is involved\"",
        "\"I had chickenpox as a child and now I have blisters on my back\"",
      ],
      associatedSymptoms: [
        "Prodrome (2–3 days): burning, stabbing, or aching pain in a dermatomal distribution — BEFORE rash appears",
        "Unilateral grouped vesicles → pustules → crusts over 7–10 days — does NOT cross midline",
        "Allodynia (even light touch is painful)",
        "Fever, malaise, headache during active eruption",
        "Postherpetic neuralgia (PHN): pain persisting > 90 days — most common in elderly, immunosuppressed",
      ],
      demographics:
        "Lifetime risk 30%; annual incidence rises from 2.5/1,000 (< 60) to 10/1,000 (> 80). Risk factors: age > 50, immunosuppression (HIV, transplant, chemotherapy, steroids), stress. Herpes zoster ophthalmicus (HZO): V1 (ophthalmic division of CN V) — Hutchinson's sign (tip/side of nose involvement) predicts ocular complications.",
    },
    distinguishingFeatures:
      "Pre-rash zoster vs. MI: dermatomal chest pain before rash → misdiagnosed as cardiac; key = dermatomal distribution, burning quality, allodynia. Ramsay Hunt syndrome: VZV reactivation in geniculate ganglion → ipsilateral facial palsy + ear pain + vesicles in external auditory canal and auricle. Disseminated zoster: > 20 lesions outside primary dermatome → immunosuppressed patients, indicates viremia.",
    redFlags: [
      "Herpes zoster ophthalmicus — ocular involvement → ophthalmology same day; IV acyclovir if severe",
      "Ramsay Hunt syndrome — facial nerve palsy + ear vesicles → oral/IV antivirals + steroids",
      "Disseminated zoster — > 20 lesions, visceral involvement → IV acyclovir + isolation",
      "Immunocompromised patient with zoster → IV acyclovir, lower threshold for hospitalization",
    ],
    mnemonics: [
      {
        name: "Zoster Treatment and Prevention",
        content:
          "Treatment (within 72 hours of rash onset for maximum benefit):\n  — Valacyclovir 1000 mg TID × 7 days (preferred for outpatient)\n  — Acyclovir 800 mg 5×/day × 7–10 days (alternative)\n  — Add prednisone: reduces acute pain severity (does NOT prevent PHN)\nPHN Treatment: gabapentin/pregabalin, TCAs (nortriptyline), lidocaine patch, capsaicin patch\nPrevention: Shingrix (RZV) — 2 doses 2–6 months apart for ALL ≥ 50 years (preferred over Zostavax)\nShingrix also recommended: immunocompromised ≥ 19 years",
      },
    ],
    pimpingQuestions: [
      "What is postherpetic neuralgia and who is at highest risk?",
      "What is Hutchinson's sign and what does it predict?",
      "What is Ramsay Hunt syndrome?",
      "What vaccine prevents herpes zoster and who should receive it?",
      "Within what timeframe must antivirals be initiated for maximum benefit?",
    ],
  },

  // ── ENDOCRINE ADDITIONS ───────────────────────────────────────────────────
  {
    id: "fm-hyperthyroid",
    name: "Hyperthyroidism",
    icdCode: "E05.90",
    rotation: "family-medicine",
    category: "Endocrinology / Thyroid Disorders",
    definition:
      "Excess thyroid hormone production causing a hypermetabolic state. Most common causes: Graves' disease (autoimmune — TSH receptor stimulating antibodies, 70–80%), toxic multinodular goiter, toxic adenoma, subacute thyroiditis (transient). Subclinical hyperthyroidism: suppressed TSH with normal T3/T4 — still increases risk of AF and osteoporosis.",
    diagnosticCriteria:
      "TSH: suppressed (< 0.1 mIU/L in overt, 0.1–0.4 in subclinical). Free T4 and total T3: elevated in overt hyperthyroidism. T3 toxicosis: suppressed TSH + elevated T3 + normal T4. TSH receptor antibodies (TRAb/TSI): positive in Graves' disease (sensitivity 97–99%). Radioactive iodine uptake (RAIU) scan: diffuse increased uptake = Graves'; hot nodule = toxic adenoma; low uptake = thyroiditis or exogenous iodine. Thyroid ultrasound: evaluates nodules, goiter size.",
    presentation: {
      chiefComplaint: [
        "\"I've lost 15 pounds without trying and my heart is racing\"",
        "\"I'm always hot, sweaty, and irritable\"",
        "\"I have a tremor and my eyes look different\"",
      ],
      associatedSymptoms: [
        "Heat intolerance, diaphoresis, warm moist skin",
        "Weight loss despite increased appetite (hypermetabolism)",
        "Palpitations, tachycardia, atrial fibrillation (especially in elderly)",
        "Tremor (fine, postural), hyperreflexia, anxiety, emotional lability",
        "Diarrhea, frequent bowel movements",
        "Graves' specific: exophthalmos (proptosis), lid lag, pretibial myxedema (non-pitting skin thickening over shins), thyroid bruit",
        "Menstrual irregularities, decreased fertility",
      ],
      demographics:
        "Graves' disease: women >> men (7:1), peak age 20–50. Toxic MNG: older adults (> 60) with longstanding goiter. Apathetic hyperthyroidism: elderly patients may lack classic symptoms — present with AF, weight loss, heart failure, cognitive decline. Thyroid storm: rare but life-threatening — fever > 104°F, HR > 140, altered mentation → ICU.",
    },
    distinguishingFeatures:
      "Graves' vs. toxic MNG/adenoma: Graves' has ophthalmopathy, diffuse goiter, positive TRAb, diffuse RAIU uptake. Toxic adenoma: single hot nodule on scan. Subacute thyroiditis (de Quervain's): tender thyroid, low RAIU, follows viral illness — transient hyperthyroid → hypothyroid → normal. Postpartum thyroiditis: within 1 year postpartum — hyperthyroid then hypothyroid.",
    redFlags: [
      "Thyroid storm: fever, tachycardia, altered mentation, high-output HF → ICU, PTU, beta-blocker, iodine, glucocorticoids, cooling",
      "New-onset AF in elderly → check TSH; cardiovert only after euthyroid state achieved",
      "Exophthalmos → ophthalmology referral; corneal exposure risk",
      "Agranulocytosis: rare but life-threatening complication of PTU/methimazole → fever + sore throat on antithyroid drug → STOP drug, CBC",
    ],
    mnemonics: [
      {
        name: "Graves' Disease: Thyroid Storm Tx — BPIG",
        content:
          "B — Beta-blocker (propranolol — blocks T4→T3 conversion at high doses)\nP — PTU (propylthiouracil) — blocks synthesis AND conversion; preferred in 1st trimester/storm\nI — Iodine (Lugol's, SSKI) — given 1+ hour AFTER PTU to block thyroid hormone release\nG — Glucocorticoids (dexamethasone) — block T4→T3 conversion, anti-inflammatory\n+ Cooling blanket, acetaminophen (NOT aspirin — displaces T4 from TBG)",
      },
      {
        name: "Hyperthyroid Long-Term Treatment Options",
        content:
          "1. Antithyroid drugs: methimazole (preferred, once daily) or PTU (pregnancy 1st trim, storm)\n2. Radioactive iodine (RAI/I-131): definitive, most used in US — may worsen ophthalmopathy\n3. Surgery (thyroidectomy): large goiter, malignancy concern, failed other treatments",
      },
    ],
    pimpingQuestions: [
      "What antibody is diagnostic of Graves' disease?",
      "How does radioactive iodine uptake (RAIU) differ between Graves' disease and subacute thyroiditis?",
      "What is thyroid storm and how is it treated?",
      "Why is PTU preferred over methimazole during the first trimester of pregnancy?",
      "What is apathetic hyperthyroidism and in whom does it occur?",
    ],
  },

  // ── PSYCHIATRIC ADDITIONS ─────────────────────────────────────────────────
  {
    id: "fm-adhd",
    name: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
    icdCode: "F90.9",
    rotation: "family-medicine",
    category: "Psychiatric / Behavioral Health",
    definition:
      "A neurodevelopmental disorder characterized by persistent inattention and/or hyperactivity-impulsivity that interferes with functioning. DSM-5 subtypes: predominantly inattentive (ADHD-PI), predominantly hyperactive-impulsive (ADHD-HI), combined presentation (ADHD-C). Onset of symptoms before age 12. Affects 5–10% of children; persists into adulthood in 50–60%. Increasingly recognized in adults — average age at adult diagnosis is 40s.",
    diagnosticCriteria:
      "DSM-5 Criteria: ≥ 6 symptoms of inattention AND/OR ≥ 6 symptoms of hyperactivity/impulsivity (≥ 5 for adults ≥ 17). Symptoms: present ≥ 6 months, appear before age 12, present in ≥ 2 settings (home + school/work), cause functional impairment, not explained by another mental disorder. Tools: rating scales — Vanderbilt (children), Conners, ADHD Rating Scale (adults). Neuropsychological testing for complex/comorbid cases. Labs: TSH (rule out thyroid), lead level if < 6 years, vision/hearing screening. EEG not routinely indicated.",
    presentation: {
      chiefComplaint: [
        "\"My teacher says my child can't sit still and isn't finishing his work\"",
        "\"I've never been able to focus — I lose everything and can't finish tasks\"",
        "\"I was just diagnosed with ADHD at age 35\"",
      ],
      associatedSymptoms: [
        "Inattentive: easily distracted, forgetful, loses items, difficulty organizing, fails to finish tasks",
        "Hyperactive/impulsive: fidgets, leaves seat, interrupts, blurts out answers, can't wait turn",
        "Academic underachievement, job difficulties, relationship problems",
        "Comorbidities: anxiety (50%), depression (30%), learning disabilities, ODD/conduct disorder, SUD",
        "Adults: chronic disorganization, time management difficulties, emotional dysregulation",
      ],
      demographics:
        "Children: boys > girls (3:1) for diagnosed cases; girls more often inattentive subtype — underdiagnosed. Adults: more equal sex distribution. Genetic: heritability 70–80%; if parent has ADHD, 40% risk in child. ADHD in preschoolers (3–5 years): behavioral therapy first-line; stimulants for severe cases only.",
    },
    distinguishingFeatures:
      "ADHD vs. anxiety: both cause difficulty concentrating; anxiety = worrying thoughts, physical symptoms, situational. ADHD vs. learning disability: LD = difficulty with specific academic skill; ADHD = attention/executive function globally. ADHD vs. sensory processing disorder. Inattentive ADHD in girls: often presents as 'daydreamer,' not disruptive — frequently missed until adulthood.",
    redFlags: [
      "Stimulants in patients with structural cardiac disease or significant arrhythmia → cardiology consult",
      "Growth suppression with stimulants in children → monitor height/weight, drug holidays",
      "Stimulant misuse potential → controlled substance → use caution with SUD history; consider non-stimulant alternatives",
      "New-onset seizures or tics on stimulants → reassess medication",
    ],
    mnemonics: [
      {
        name: "ADHD Treatment Algorithm",
        content:
          "Children 6+: FIRST-LINE = Stimulant medication (methylphenidate or amphetamine salts)\n  + Behavioral therapy (combined most effective)\nPreschool (3–5): Behavioral therapy FIRST; stimulants only if severe/refractory\nAdults: Stimulants (amphetamine salts slightly more effective in adults)\nNon-stimulants (if stimulant failure, tics, SUD, hypertension):\n  — Atomoxetine (SNRi; takes 4–6 weeks; suicidality warning in pediatrics)\n  — Alpha-2 agonists: guanfacine (Intuniv), clonidine — useful for tics + ADHD\n  — Bupropion: off-label adults",
      },
    ],
    pimpingQuestions: [
      "What are the DSM-5 criteria for ADHD diagnosis?",
      "At what age must symptoms have been present for an ADHD diagnosis?",
      "What is the first-line treatment for ADHD in children age 6+? In preschoolers?",
      "What is atomoxetine's mechanism and what is its important black box warning?",
      "What are the non-stimulant medication options for ADHD?",
    ],
  },
  {
    id: "fm-bipolar",
    name: "Bipolar Disorder",
    icdCode: "F31.9",
    rotation: "family-medicine",
    category: "Psychiatric / Behavioral Health",
    definition:
      "A mood disorder characterized by episodes of mania (Bipolar I) or hypomania (Bipolar II) alternating with depressive episodes. Bipolar I: ≥ 1 manic episode (regardless of depression). Bipolar II: hypomanic + major depressive episodes — NO full mania. Cyclothymia: subthreshold hypomanic + depressive symptoms × 2 years. Lifetime prevalence 1–3% (BPI), 1–4% (BPII). Average delay to diagnosis: 6–10 years — most often misdiagnosed as unipolar MDD.",
    diagnosticCriteria:
      "DSM-5 Manic Episode: ≥ 7 days (or hospitalization) of elevated/expansive/irritable mood + increased goal-directed activity + ≥ 3 of: DIG FAST (Distractibility, Impulsivity/risky behavior, Grandiosity, Flight of ideas, Activity increase, Sleep decreased, Talkativeness/pressured speech). Hypomanic: same symptoms × ≥ 4 days, no hospitalization, no psychosis, not severe enough to cause marked impairment. Key: antidepressants alone in unrecognized bipolar → can trigger manic switch or rapid cycling. Screen for bipolar before prescribing antidepressants: MDQ (Mood Disorder Questionnaire).",
    presentation: {
      chiefComplaint: [
        "\"I went on a shopping spree, maxed out my credit cards, and didn't sleep for 3 days\"",
        "\"I feel incredible — I'm writing a book, starting a business, and barely need sleep\"",
        "\"I keep cycling between feeling amazing and then crashing into depression\"",
      ],
      associatedSymptoms: [
        "Mania: euphoria or irritability, decreased need for sleep (not insomnia — feels rested on 2 hrs), grandiosity, pressured speech, racing thoughts, hypersexuality, risky behavior (spending, driving, drugs)",
        "Psychosis during severe mania: hallucinations, delusions (often grandiose)",
        "Depressive phase: indistinguishable from MDD — fatigue, hopelessness, anhedonia, suicidality",
        "Rapid cycling: ≥ 4 mood episodes/year — associated with hypothyroidism, substance use, antidepressants",
      ],
      demographics:
        "Equal sex incidence; onset typically 15–25 years. Suicide risk: 20–30× general population; 25–50% attempt. Strongest risk factor for completed suicide in bipolar: mixed states. Bipolar in women: depressive episodes more frequent; postpartum period = very high risk for first manic or psychotic episode.",
    },
    distinguishingFeatures:
      "Bipolar vs. MDD: KEY = look for ANY prior manic/hypomanic episodes — patient may not volunteer. Bipolar vs. borderline personality: both have mood instability; borderline = mood shifts in hours (interpersonal triggers), self-harm, identity disturbance. Bipolar vs. ADHD: both have distractibility, impulsivity; ADHD = chronic, not episodic.",
    redFlags: [
      "Antidepressants without mood stabilizer in unrecognized bipolar → manic switch or rapid cycling",
      "Mixed features (mania + depression simultaneously) → highest suicide risk",
      "First manic episode in elderly → rule out medical cause (thyroid, CNS lesion, steroids)",
      "Lithium toxicity: narrow therapeutic index; tremor, ataxia, confusion, vomiting → check level (therapeutic: 0.6–1.2 mEq/L)",
    ],
    mnemonics: [
      {
        name: "Mania Symptoms: DIG FAST",
        content:
          "D — Distractibility\nI — Impulsivity / risky behavior\nG — Grandiosity (inflated self-esteem)\nF — Flight of ideas (racing thoughts)\nA — Activity increase (goal-directed)\nS — Sleep decreased (without fatigue)\nT — Talkativeness (pressured speech)",
      },
      {
        name: "Bipolar Mood Stabilizers",
        content:
          "Lithium: gold standard (mania + depression + suicide prevention); monitor renal/thyroid/levels\nValproate (Depakote): mania, mixed, rapid cycling; teratogenic (NTDs)\nLamotrigine: best for BIPOLAR DEPRESSION maintenance; risk of SJS (titrate slowly)\nAtypical antipsychotics (quetiapine, olanzapine, aripiprazole): acute mania + maintenance",
      },
    ],
    pimpingQuestions: [
      "What is the difference between Bipolar I and Bipolar II?",
      "What mnemonic helps recall the symptoms of mania?",
      "Why should antidepressants be used cautiously in bipolar disorder?",
      "What is lithium's therapeutic range and what are signs of toxicity?",
      "Which mood stabilizer is preferred for bipolar depression (vs. mania)?",
    ],
  },
  {
    id: "fm-ptsd-sud",
    name: "PTSD & Substance Use Disorder",
    icdCode: "F43.10",
    rotation: "family-medicine",
    category: "Psychiatric / Behavioral Health",
    definition:
      "PTSD: A trauma/stressor-related disorder developing after exposure to actual or threatened death, serious injury, or sexual violence. Core symptom clusters: intrusion (flashbacks, nightmares), avoidance, negative cognitions/mood, hyperarousal. Substance Use Disorder (SUD): A maladaptive pattern of substance use causing significant impairment, meeting ≥ 2 DSM-5 criteria within 12 months. Both are common, under-recognized, and highly comorbid in primary care.",
    diagnosticCriteria:
      "PTSD DSM-5: Exposure to trauma + ≥ 1 intrusion symptom + ≥ 1 avoidance + ≥ 2 negative cognitions/mood + ≥ 2 arousal symptoms × > 1 month with significant impairment. Screening tool: PC-PTSD-5 (primary care screen — 5 questions). SUD DSM-5: ≥ 2 of 11 criteria in 12 months (impaired control, social impairment, risky use, pharmacological: tolerance, withdrawal). Screening tools: AUDIT-C (alcohol), CAGE, DAST-10 (drugs), SBIRT (Screening, Brief Intervention, Referral to Treatment) framework.",
    presentation: {
      chiefComplaint: [
        "\"I keep having nightmares about the accident — I can't drive anymore\"",
        "\"I drink a bottle of wine every night just to sleep\"",
        "\"I've been using opioids more than prescribed and I can't stop\"",
      ],
      associatedSymptoms: [
        "PTSD: intrusive memories/flashbacks, nightmares, hypervigilance, exaggerated startle, emotional numbing, avoidance of reminders, irritability, concentration difficulty",
        "Alcohol use disorder (AUD): tolerance, withdrawal (DTs — seizures, autonomic instability 6–24 hr after last drink), social/occupational impairment",
        "Opioid use disorder (OUD): craving, tolerance, withdrawal (piloerection, yawning, diarrhea, myalgias, tachycardia — onset 8–24 hr for short-acting)",
      ],
      demographics:
        "PTSD lifetime prevalence: 6.8%; women 2× more likely. High-risk: combat veterans, sexual assault survivors, first responders. SUD: alcohol use disorder 14% lifetime; opioid use disorder — 2.7 million Americans. PTSD + SUD commonly co-occur — each worsens the other ('self-medication hypothesis').",
    },
    distinguishingFeatures:
      "PTSD vs. acute stress disorder: ASD = same symptoms but lasts 3 days to 1 month after trauma; PTSD = > 1 month. PTSD vs. MDD: PTSD requires trauma exposure and has specific intrusion/avoidance clusters. Alcohol withdrawal seizures: typically 24–48 hours after last drink. Delirium tremens (DTs): peak 48–72 hours — autonomic instability, confusion, hallucinations (especially visual).",
    redFlags: [
      "Alcohol withdrawal — CIWA scoring → benzodiazepines (chlordiazepoxide, lorazepam) to prevent seizures/DTs",
      "Opioid overdose: respiratory depression, pinpoint pupils, unresponsive → naloxone 0.4–2 mg IV/IM/IN",
      "Suicidality in PTSD — markedly elevated risk; safety planning",
      "Opioid withdrawal in pregnancy → methadone or buprenorphine (NOT abrupt cessation — fetal distress)",
    ],
    mnemonics: [
      {
        name: "PTSD Pharmacotherapy",
        content:
          "First-line: SSRIs — sertraline or paroxetine (only FDA-approved)\nSecond-line: SNRIs — venlafaxine\nNightmares: prazosin (alpha-1 blocker — reduces noradrenergic tone during REM)\nAnxiety/hyperarousal: SSRIs/SNRIs (benzodiazepines AVOIDED — worsen outcomes, increase SUD risk)\nFirst-line psychotherapy: Trauma-Focused CBT, EMDR (Eye Movement Desensitization and Reprocessing)",
      },
      {
        name: "OUD Treatment (MAT — Medication-Assisted Treatment)",
        content:
          "Methadone: full opioid agonist; daily observed dosing at OTP clinic; most effective for severe OUD\nBuprenorphine/naloxone (Suboxone): partial agonist + antagonist; office-based; easier access\nNaltrexone (Vivitrol): opioid antagonist; monthly injection; no addiction potential; requires full detox first\nAll 3 reduce mortality by 50% — MAT is standard of care for OUD",
      },
    ],
    pimpingQuestions: [
      "What are the 4 DSM-5 symptom clusters for PTSD?",
      "What are the first-line pharmacological treatments for PTSD?",
      "What is delirium tremens and when does it typically occur after last alcohol use?",
      "What are the three FDA-approved medications for opioid use disorder?",
      "What is prazosin used for in PTSD and why?",
    ],
  },

  // ── PULMONARY ADDITIONS ───────────────────────────────────────────────────
  {
    id: "fm-influenza",
    name: "Influenza",
    icdCode: "J11.1",
    rotation: "family-medicine",
    category: "Pulmonary / Infectious Disorders",
    definition:
      "An acute respiratory illness caused by Influenza A or B viruses. Influenza A causes most epidemics (subtypes classified by hemagglutinin [H] and neuraminidase [N] — e.g., H1N1, H3N2). Seasonal influenza affects 5–20% of the US population annually, causing ~200,000 hospitalizations and 12,000–52,000 deaths/year. Annual vaccination is the cornerstone of prevention.",
    diagnosticCriteria:
      "Clinical diagnosis during peak season (high positive predictive value). Rapid influenza diagnostic test (RIDT): sensitivity 50–70%, specificity > 95% — negative test does NOT rule out influenza during high prevalence. PCR (reverse transcription PCR): gold standard, sensitivity > 95% — use for hospitalized patients or high-stakes decisions. Criteria for testing: consider when results change management (high-risk patient, hospitalized, or therapeutic decision). Treat empirically when clinical suspicion high regardless of test.",
    presentation: {
      chiefComplaint: [
        "\"I feel terrible — I went from fine to bedbound in 6 hours\"",
        "\"I have a fever, body aches, and the worst headache of my life\"",
        "\"I've been sick with fever and cough for 3 days\"",
      ],
      associatedSymptoms: [
        "Abrupt onset high fever (38.5–40°C), chills, rigors",
        "Severe myalgias and arthralgias (disproportionate — 'hit by a truck')",
        "Dry, non-productive cough",
        "Headache (often severe), retro-orbital pain",
        "Fatigue/malaise (can be profound)",
        "GI symptoms more common in children (nausea, vomiting, diarrhea — influenza B)",
      ],
      demographics:
        "High-risk for complications: age > 65, age < 2, pregnancy (3× risk of hospitalization), immunocompromised, chronic cardiopulmonary disease, BMI > 40, nursing home residents. Annual flu vaccine: recommended for ALL persons ≥ 6 months. High-dose or adjuvanted vaccine preferred for ≥ 65.",
    },
    distinguishingFeatures:
      "Influenza vs. common cold: influenza = abrupt onset, high fever, severe myalgias, prominent systemic symptoms; cold = gradual onset, low/no fever, mild malaise, rhinorrhea dominant. Influenza vs. COVID-19: clinically indistinguishable — test for both during co-circulation. Classic board: rapid onset of fever + myalgias + dry cough during flu season = influenza until proven otherwise.",
    redFlags: [
      "Secondary bacterial pneumonia (S. aureus, S. pneumoniae) — worsening after initial improvement",
      "Myocarditis, encephalitis, rhabdomyolysis — rare serious complications",
      "Reye syndrome — aspirin in children with influenza → hepatic encephalopathy → never use ASA in children",
      "Influenza pneumonia in pregnancy or immunocompromised → hospitalize",
    ],
    mnemonics: [
      {
        name: "Antiviral Indications and Timing",
        content:
          "TREAT within 48 hours for maximum benefit:\n  — Hospitalized patients (any time, regardless of illness duration)\n  — High-risk patients (age > 65, pregnancy, immunocompromised, chronic disease)\n  — Severely ill outpatients\nFirst-line: Oseltamivir (Tamiflu) 75 mg BID × 5 days\nAlternatives: Zanamivir (inhaled), baloxavir (single dose — cap-dependent endonuclease inhibitor)\nProphylaxis: Oseltamivir 75 mg daily × 10 days for high-risk close contacts",
      },
    ],
    pimpingQuestions: [
      "What is the sensitivity of rapid influenza testing and how does it affect clinical management?",
      "Who should receive antiviral treatment for influenza, and within what time window?",
      "Why is aspirin contraindicated in children with influenza?",
      "What is the mechanism of oseltamivir vs. baloxavir?",
      "Which populations are highest priority for annual influenza vaccination?",
    ],
  },
  {
    id: "fm-bronchitis",
    name: "Acute Bronchitis",
    icdCode: "J20.9",
    rotation: "family-medicine",
    category: "Pulmonary / Infectious Disorders",
    definition:
      "Self-limited inflammation of the tracheobronchial mucosa, almost always caused by viral infection (rhinovirus, coronavirus, influenza, parainfluenza, RSV, adenovirus — viral in > 90% of cases). Presents with cough (productive or dry) lasting up to 3 weeks. One of the most common diagnoses in primary care — and one of the most over-treated with antibiotics (antibiotics not indicated in immunocompetent adults without comorbidities).",
    diagnosticCriteria:
      "Clinical diagnosis: acute onset cough ± sputum production (any color — purulent sputum does NOT indicate bacterial infection in bronchitis), no signs of pneumonia. No imaging or labs required for uncomplicated bronchitis. CXR: obtain if ≥ 2 of: HR > 100, RR > 24, temp > 38°C, focal consolidation on exam (CURB-65 concept) — to rule out pneumonia. Sputum cultures: not indicated. Pertussis PCR: consider if cough > 2 weeks with paroxysmal cough, post-tussive vomiting, or whooping — especially in unvaccinated/unknown vaccination status.",
    presentation: {
      chiefComplaint: [
        "\"I've had this cough for 2 weeks that won't go away\"",
        "\"I had a cold last week and now I can't stop coughing\"",
        "\"My cough keeps my family up at night\"",
      ],
      associatedSymptoms: [
        "Productive or dry cough — cardinal symptom, persists 1–3 weeks",
        "Low-grade fever or no fever",
        "Chest tightness or burning (tracheobronchitis)",
        "Wheezing possible (bronchospasm component)",
        "Preceded by URTI symptoms (rhinorrhea, sore throat, malaise)",
        "NO focal chest exam findings (distinguishes from pneumonia)",
      ],
      demographics:
        "Most common in winter months. All ages. Antibiotic overprescribing: ~ 60–80% of acute bronchitis visits result in antibiotic prescription — NOT evidence-based. Key teaching: purulent (yellow/green) sputum in bronchitis does NOT indicate bacterial etiology and does NOT require antibiotics.",
    },
    distinguishingFeatures:
      "Acute bronchitis vs. pneumonia: pneumonia = fever > 38°C + focal exam findings (crackles, dullness) + abnormal CXR. Acute bronchitis vs. asthma exacerbation: asthma has history of recurrent episodes, expiratory wheezing, reversible with bronchodilator, positive spirometry. Pertussis (whooping cough): consider in prolonged cough > 2 weeks, paroxysmal, inspiratory whoop, post-tussive emesis — treat with azithromycin.",
    redFlags: [
      "High fever + focal chest exam findings → pneumonia → CXR + antibiotics",
      "Cough > 8 weeks (chronic cough) → evaluate: ACE inhibitor, GERD, PND, asthma, COPD",
      "Hemoptysis → CXR ± CT to rule out malignancy, TB",
      "Suspect pertussis → azithromycin + public health reporting",
    ],
    mnemonics: [
      {
        name: "Acute Bronchitis Treatment (Remember: No ABX!)",
        content:
          "Symptom management:\n  — Honey (1–2 tsp) for cough — evidence-based, especially in children > 1 year\n  — Dextromethorphan or guaifenesin (OTC) for symptom relief\n  — Ipratropium inhaler: reduces cough severity\n  — Albuterol: only if wheezing/bronchospasm\n  — Avoid antibiotics (Z-pack, amoxicillin) — no mortality benefit, antibiotic resistance\nException: Pertussis → azithromycin (also prophylax close contacts)",
      },
    ],
    pimpingQuestions: [
      "What is the most common cause of acute bronchitis and is antibiotic treatment indicated?",
      "Does purulent (yellow/green) sputum in bronchitis indicate bacterial infection?",
      "What clinical criteria would prompt a chest X-ray to rule out pneumonia?",
      "How do you distinguish acute bronchitis from an asthma exacerbation?",
      "When should you consider pertussis and what is the treatment?",
    ],
  },

  // ── GI ADDITIONS ──────────────────────────────────────────────────────────
  {
    id: "fm-pud",
    name: "Peptic Ulcer Disease (PUD)",
    icdCode: "K27.9",
    rotation: "family-medicine",
    category: "Gastroenterology / Gastric Disorders",
    definition:
      "Mucosal defects penetrating the muscularis mucosa of the stomach (gastric ulcer) or duodenum (duodenal ulcer). Two main causes account for > 90% of cases: H. pylori infection (60–70% of duodenal, 30–40% of gastric ulcers) and NSAID use. Duodenal ulcers are more common overall (4:1). Acid suppression heals ulcers; eradication of H. pylori and NSAID cessation prevents recurrence.",
    diagnosticCriteria:
      "EGD (esophagogastroduodenoscopy): gold standard — visualizes ulcer, biopsies for H. pylori and malignancy (ALL gastric ulcers must be biopsied). H. pylori testing: Urea breath test (preferred non-invasive for active infection, post-treatment confirmation); stool antigen test (similar accuracy); serology (IgG — cannot distinguish active from past infection, not useful for confirming eradication). Barium swallow: historical, less used. Upper GI bleed: emergent EGD for diagnosis and hemostasis.",
    presentation: {
      chiefComplaint: [
        "\"I have burning stomach pain that gets better after I eat\"",
        "\"My stomach hurts in the middle of the night and wakes me up\"",
        "\"I've been taking ibuprofen daily and now I have stomach pain\"",
      ],
      associatedSymptoms: [
        "Duodenal ulcer: epigastric burning pain 2–5 hours AFTER meals, wakes at night, RELIEVED by food/antacids",
        "Gastric ulcer: pain WORSE with eating (food triggers acid), NOT relieved by food",
        "Nausea, bloating, early satiety",
        "Hematemesis or melena — upper GI bleed complication",
        "Many NSAID-related ulcers are asymptomatic until complication (perforation, bleed)",
      ],
      demographics:
        "H. pylori infection: prevalence 30–40% in US adults; higher in developing countries, immigrants, lower SES. NSAID users: 15–30% develop peptic ulcer; risk highest with concurrent corticosteroids, anticoagulants, age > 60. Zollinger-Ellison syndrome: gastrinoma → massively elevated gastrin → multiple/severe refractory ulcers + secretory diarrhea.",
    },
    distinguishingFeatures:
      "Duodenal (relieved by food) vs. gastric ulcer (worse with food) — classic board distinction. NSAID ulcers: often asymptomatic, preferentially gastric. Alarm symptoms (WORSE): weight loss, dysphagia, early satiety, recurrent vomiting, palpable mass, age > 55 with new dyspepsia → upper endoscopy mandatory. Gastric cancer mimics gastric ulcer — all gastric ulcers need biopsy at EGD.",
    redFlags: [
      "Peritoneal signs (board-like abdomen, rebound) → perforation → emergent surgery",
      "Hematemesis or melena → upper GI bleed → urgent EGD ± IV PPI, transfuse if needed",
      "Unexplained weight loss with dyspepsia → rule out gastric malignancy",
      "Refractory ulcers not healing with PPI → check fasting gastrin (Zollinger-Ellison)",
    ],
    mnemonics: [
      {
        name: "H. pylori Eradication: Triple Therapy (CAP) or Quadruple",
        content:
          "Triple (14 days — only if clarithromycin resistance < 15% locally):\n  C — Clarithromycin 500 mg BID\n  A — Amoxicillin 1g BID\n  P — PPI (omeprazole 20 mg BID)\nQuadruple (preferred in high-resistance areas, 10–14 days):\n  Bismuth + Metronidazole + Tetracycline + PPI (BMTP)\nConfirm eradication: UBT or stool antigen 4+ weeks after completing therapy (off PPI × 2 weeks)",
      },
    ],
    pimpingQuestions: [
      "How does pain timing differ between duodenal and gastric ulcers?",
      "What is the best non-invasive test for active H. pylori infection?",
      "Why must ALL gastric ulcers be biopsied at endoscopy?",
      "What is Zollinger-Ellison syndrome and how does it present?",
      "What is the preferred H. pylori eradication regimen and how do you confirm eradication?",
    ],
  },
  {
    id: "fm-ibs",
    name: "Irritable Bowel Syndrome (IBS)",
    icdCode: "K58.9",
    rotation: "family-medicine",
    category: "Gastroenterology / Intestinal Disorders",
    definition:
      "A functional bowel disorder characterized by chronic abdominal pain associated with altered bowel habits in the absence of identifiable organic pathology. Subtypes: IBS-C (constipation predominant), IBS-D (diarrhea predominant), IBS-M (mixed). Pathophysiology: gut-brain axis dysregulation, visceral hypersensitivity, altered motility, intestinal microbiome changes. Most common GI diagnosis in primary care; affects 10–15% of US adults.",
    diagnosticCriteria:
      "Rome IV Criteria (diagnostic, no testing needed if met): Recurrent abdominal pain ≥ 1 day/week for ≥ 3 months, associated with ≥ 2 of: (1) related to defecation, (2) change in stool frequency, (3) change in stool form/appearance. Onset ≥ 6 months prior. Diagnostic testing to EXCLUDE organic disease: CBC, CMP, TSH (thyroid), fecal calprotectin (IBD), celiac serology (anti-tTG IgA), C. difficile if recent antibiotics. Colonoscopy if alarm features. Alarm features: age > 50 (new onset), rectal bleeding, unintentional weight loss, nocturnal symptoms, family history of CRC/IBD/celiac.",
    presentation: {
      chiefComplaint: [
        "\"My stomach cramps and I have to rush to the bathroom — especially when I'm stressed\"",
        "\"I alternate between diarrhea and constipation\"",
        "\"I'm always bloated and gassy\"",
      ],
      associatedSymptoms: [
        "Crampy lower abdominal pain — relieved by defecation (key feature)",
        "Mucus in stool (no blood)",
        "Bloating and abdominal distension",
        "Altered stool consistency (Bristol Stool Scale types 1–2 for IBS-C, 6–7 for IBS-D)",
        "Stress/anxiety precipitating or worsening symptoms",
        "Extra-intestinal: fibromyalgia, chronic fatigue, interstitial cystitis, headache",
      ],
      demographics:
        "Affects 10–15% of general population. Women > men (2:1); onset typically before age 50. Associated with anxiety, depression, prior GI infection (post-infectious IBS). Food triggers: FODMAPs (fermentable carbohydrates — wheat, dairy, onions, beans), caffeine, alcohol, fatty foods.",
    },
    distinguishingFeatures:
      "IBS vs. IBD: IBS — no bleeding, normal inflammatory markers, normal colonoscopy; IBD — bloody diarrhea, elevated CRP/ESR, fecal calprotectin elevated, colonoscopy abnormal. IBS vs. celiac: celiac — villous atrophy, anti-tTG IgA positive, improves on gluten-free diet. Nocturnal symptoms or rectal bleeding = NOT IBS — organic disease until proven otherwise.",
    redFlags: [
      "Rectal bleeding — never attribute to IBS → workup for IBD, colorectal cancer",
      "Unintentional weight loss → IBD, malignancy, malabsorption",
      "New symptoms after age 50 → colonoscopy to rule out CRC",
      "Nocturnal diarrhea (wakes from sleep) → organic cause, not IBS",
      "Elevated fecal calprotectin → IBD workup",
    ],
    mnemonics: [
      {
        name: "IBS Treatment Ladder",
        content:
          "1. Education + reassurance + stress management\n2. Dietary: Low-FODMAP diet (highly effective), fiber (soluble for IBS-C)\n3. IBS-C: Fiber supplement, osmotic laxatives (PEG), linaclotide, lubiprostone\n4. IBS-D: Loperamide (symptom relief), rifaximin (antibiotic), eluxadoline\n5. Pain: Antispasmodics (dicyclomine, hyoscine); low-dose TCAs; SSRIs\n6. Psychological: CBT, gut-directed hypnotherapy (most evidence-based behavioral tx)",
      },
    ],
    pimpingQuestions: [
      "What are the Rome IV criteria for IBS?",
      "What alarm features should trigger workup beyond clinical diagnosis?",
      "How do you distinguish IBS from IBD clinically and with labs?",
      "What dietary intervention has the most evidence for IBS symptom relief?",
      "What is the mechanism of linaclotide and rifaximin in IBS treatment?",
    ],
  },
  {
    id: "fm-hepatitis",
    name: "Viral Hepatitis (B & C)",
    icdCode: "B18.9",
    rotation: "family-medicine",
    category: "Gastroenterology / Hepatic Disorders",
    definition:
      "Hepatitis B (HBV): DNA hepadnavirus — transmitted sexually, parenterally, perinatally. Worldwide: leading cause of cirrhosis and hepatocellular carcinoma (HCC). Hepatitis C (HCV): RNA flavivirus — transmitted primarily via IV drug use (blood-borne); most common chronic bloodborne infection in US. Both can progress to chronic hepatitis → cirrhosis → HCC. HCV is now curable with direct-acting antivirals (DAAs); HBV is manageable but not curable.",
    diagnosticCriteria:
      "HBV Serology: HBsAg (surface antigen) = active infection (acute or chronic); HBsAb = immunity (vaccination or resolved); HBcAb IgM = acute infection; HBcAb IgG = past/chronic exposure; HBeAg = high replicative/infectious state; HBV DNA = viral load. Chronic HBV = HBsAg positive > 6 months. HCV: Anti-HCV Ab (ELISA) — screening; HCV RNA (PCR) — confirms active infection; HCV genotype (1–6) — guides treatment duration. USPSTF: screen all adults 18–79 for HCV (one-time), all pregnant women; screen HBV in high-risk groups.",
    presentation: {
      chiefComplaint: [
        "\"I'm here for hepatitis C screening — I used to use IV drugs\"",
        "\"I feel fatigued and my skin looks yellow\"",
        "\"My labs show elevated liver enzymes — what does that mean?\"",
      ],
      associatedSymptoms: [
        "Acute hepatitis: fatigue, nausea, RUQ discomfort, jaundice, dark urine, clay-colored stools",
        "Chronic hepatitis: often asymptomatic for decades — discovered on abnormal LFTs",
        "Advanced cirrhosis: ascites, variceal hemorrhage, hepatic encephalopathy, splenomegaly",
        "Extra-hepatic HCV: cryoglobulinemia (palpable purpura, arthralgias, GN), lichen planus",
      ],
      demographics:
        "HBV: highest in Asian Americans (8–13% prevalence), Sub-Saharan Africans, MSM, IV drug users; perinatal transmission in endemic areas. HCV: 'baby boomers' (born 1945–1965) have highest US prevalence — screen once; IV drug users (most common in younger adults); healthcare workers. Both: leading causes of cirrhosis and liver transplant in the US.",
    },
    distinguishingFeatures:
      "HBV vs. HCV prevention: HBV has a vaccine (highly effective); HCV has no vaccine. HCV treatment: genotype 1 (most common in US) → ledipasvir/sofosbuvir (Harvoni) or glecaprevir/pibrentasvir × 8–12 weeks → SVR (cure) > 95%. HBV treatment: tenofovir or entecavir — suppress replication, do not cure. Window period: HBsAg negative, HBcAb positive only = past exposure or window period.",
    redFlags: [
      "Acute liver failure (INR > 1.5 + encephalopathy) — rare but life-threatening",
      "Cirrhosis complications: SBP, variceal bleed, hepatic encephalopathy, HCC",
      "HCC surveillance: ultrasound ± AFP every 6 months in cirrhotic or chronic HBV patients",
      "Pregnant patient with HBV → neonatal prophylaxis (HBsIg + vaccine within 12 hr of birth)",
    ],
    mnemonics: [
      {
        name: "HBV Serology Interpretation",
        content:
          "HBsAg (+) HBsAb (−) = Active infection (acute or chronic)\nHBsAg (−) HBsAb (+) HBcAb (−) = Vaccinated (immunity)\nHBsAg (−) HBsAb (+) HBcAb (+) = Resolved infection (natural immunity)\nHBsAg (+) HBsAb (−) HBcAb IgM (+) = ACUTE infection\nHBsAg (+) HBsAb (−) HBcAb IgG (+) = CHRONIC infection\nHBsAg (−) HBsAb (−) HBcAb (+) = Window period OR old infection",
      },
    ],
    pimpingQuestions: [
      "What HBV serologic marker indicates active (acute or chronic) infection?",
      "What is the difference between HBsAb positive in a vaccinated vs. naturally immune person?",
      "Who should be screened for HCV per USPSTF guidelines?",
      "What is the cure rate for HCV with modern direct-acting antivirals?",
      "What surveillance is recommended for HCC in chronic HBV/cirrhosis patients?",
    ],
  },
  {
    id: "fm-crc",
    name: "Colorectal Cancer (CRC) Screening",
    icdCode: "Z12.11",
    rotation: "family-medicine",
    category: "Gastroenterology / Neoplasms",
    definition:
      "Colorectal cancer is the second leading cause of cancer death in the US. Arises predominantly from adenomatous polyps (adenoma-carcinoma sequence — takes 10–15 years). Risk factors: age, family history (1st-degree relative), personal history of adenomas/IBD, Lynch syndrome (HNPCC — MSH2/MLH1 mutations), FAP (APC mutation). Primary care focus: screening, risk stratification, referral for colonoscopy.",
    diagnosticCriteria:
      "Average risk screening (USPSTF 2021 — Grade A/B): Begin at age 45. Options: Annual high-sensitivity guaiac FOBT or FIT (fecal immunochemical test); Stool DNA test (Cologuard) every 1–3 years; CT colonography every 5 years; Flexible sigmoidoscopy every 5 years; Colonoscopy every 10 years (gold standard — allows biopsy and polypectomy). Any positive non-colonoscopy test → diagnostic colonoscopy. High-risk: family history of CRC or advanced adenoma in 1st-degree relative < 60 → colonoscopy at 40 or 10 years before earliest relative's diagnosis. Lynch syndrome → colonoscopy every 1–2 years starting at 20–25.",
    presentation: {
      chiefComplaint: [
        "\"I'm 45 and my doctor said I need a colon cancer screening\"",
        "\"I've been having blood in my stool and losing weight\"",
        "\"My dad had colon cancer at 55 — when should I be screened?\"",
      ],
      associatedSymptoms: [
        "Early CRC: often asymptomatic — detected only by screening",
        "Left-sided (sigmoid/descending): hematochezia, change in bowel habits, 'pencil-thin' stools, tenesmus",
        "Right-sided (cecum/ascending): occult blood, iron deficiency anemia, weight loss — often no change in stool caliber",
        "Advanced disease: abdominal pain, palpable mass, obstruction, perforation",
      ],
      demographics:
        "Lifetime risk: ~ 4–5%. Incidence rising in adults < 50 (young-onset CRC). ACS lowered screening recommendation to age 45 in 2018; USPSTF followed in 2021. Lynch syndrome: autosomal dominant, accounts for 3–5% of CRC — MSI-high tumors. FAP: > 100 polyps by puberty, near 100% lifetime CRC risk without prophylactic colectomy.",
    },
    distinguishingFeatures:
      "Right vs. left CRC presentations: Right (cecum, ascending) = iron deficiency anemia, occult bleeding, weight loss, RLQ mass — bulky tumors, rarely obstruct. Left (descending, sigmoid, rectum) = hematochezia, obstruction, change in stool caliber. FIT vs. FOBT: FIT (fecal immunochemical) is preferred over gFOBT — more sensitive and specific, no dietary restrictions. Cologuard: stool DNA — high sensitivity (92%) but more false positives, costlier, interval 1–3 years.",
    redFlags: [
      "Iron deficiency anemia in any man or post-menopausal woman → colonoscopy to rule out right-sided CRC",
      "New rectal bleeding in adult → colonoscopy (do not assume hemorrhoids without visualization)",
      "Family history 1st-degree relative CRC < 60 → colonoscopy at 40 or 10 years before relative's diagnosis",
      "Positive FIT or Cologuard → diagnostic colonoscopy within 6–12 months",
    ],
    mnemonics: [
      {
        name: "CRC Screening Age and Intervals",
        content:
          "Average risk: start at 45\n  — Colonoscopy every 10 years (preferred)\n  — FIT/gFOBT annually\n  — Cologuard every 1–3 years\n  — CT colonography every 5 years\nHigh risk (FHx in 1st-degree < 60): colonoscopy at 40 OR 10 years before youngest affected relative\nLynch syndrome: colonoscopy every 1–2 years starting at 20–25\nIBD (pancolitis > 8 years, L-sided > 15 years): annual colonoscopy with biopsies",
      },
    ],
    pimpingQuestions: [
      "At what age should average-risk patients begin CRC screening per USPSTF 2021?",
      "What is the preferred screening modality and how often is it repeated?",
      "How does presentation differ between right-sided and left-sided CRC?",
      "When should a patient with a first-degree relative with CRC begin screening?",
      "What is Lynch syndrome and what screening does it require?",
    ],
  },

  // ── CARDIOVASCULAR ADDITIONS ──────────────────────────────────────────────
  {
    id: "fm-hf",
    name: "Heart Failure",
    icdCode: "I50.9",
    rotation: "family-medicine",
    category: "Cardiovascular / Heart Failure",
    definition:
      "A clinical syndrome in which the heart cannot pump enough blood to meet the body's metabolic demands, or can do so only at elevated filling pressures. Classified by ejection fraction: HFrEF (EF < 40%) — systolic dysfunction; HFpEF (EF ≥ 50%) — diastolic dysfunction; HFmrEF (EF 40–49%). Most common cause in the US: coronary artery disease and hypertension. Leading cause of hospitalization in adults > 65.",
    diagnosticCriteria:
      "Clinical: Framingham criteria (2 major or 1 major + 2 minor). Major: PND, orthopnea, elevated JVP, pulmonary rales, cardiomegaly on CXR, S3 gallop, acute pulmonary edema. Minor: bilateral ankle edema, nocturnal cough, dyspnea on exertion, hepatomegaly, pleural effusion, HR > 120. Labs: BNP > 100 pg/mL or NT-proBNP > 300 pg/mL supports diagnosis; BNP < 100 essentially rules out HF. Echo: defines EF, valve function, wall motion. CXR: cardiomegaly, cephalization, Kerley B lines, pleural effusions, pulmonary edema. EKG: LVH, prior MI, arrhythmia.",
    presentation: {
      chiefComplaint: [
        "\"I can't breathe when I lie flat\"",
        "\"My legs are so swollen\"",
        "\"I get winded just walking to the mailbox\"",
      ],
      associatedSymptoms: [
        "Orthopnea (dyspnea when supine) — # of pillows needed is useful to track severity",
        "Paroxysmal nocturnal dyspnea (PND) — wakes from sleep gasping",
        "Bilateral pitting lower extremity edema",
        "Weight gain > 2–3 lbs/day or 5 lbs/week (fluid accumulation)",
        "Fatigue, exercise intolerance",
        "Nocturia (recumbency redistributes fluid to central circulation)",
        "Frothy pink sputum in acute pulmonary edema",
      ],
      demographics:
        "Prevalence increases sharply with age; ~ 6.5 million Americans. HFrEF more common in men (ischemic cardiomyopathy); HFpEF more common in older women with HTN and DM. Black patients have higher incidence and worse outcomes. ADHF (acute decompensated HF) = #1 cause of hospitalization > 65 years.",
    },
    distinguishingFeatures:
      "S3 gallop = volume overload, strongly associated with HFrEF. S4 gallop = stiff/hypertrophied ventricle (HFpEF, HTN). JVP elevation is the most specific sign. HFpEF: normal EF, diastolic dysfunction — look for elderly woman with HTN, obesity, preserved EF but symptomatic HF. BNP is the key biomarker: elevated in both HFrEF and HFpEF; levels correlate with severity and guide therapy.",
    redFlags: [
      "Acute pulmonary edema — frothy pink sputum, severe hypoxia → emergent management (IV furosemide, NIPPV, nitroglycerin)",
      "Cardiogenic shock — hypotension, cool clammy extremities, altered mentation → ICU",
      "Rapid weight gain (> 2 lbs/day) — fluid accumulation, may need diuretic adjustment",
      "New LBBB with HF — possible CRT candidate; also may indicate acute MI",
    ],
    mnemonics: [
      {
        name: "HFrEF Treatment: ABCDE",
        content:
          "A — ACE inhibitor or ARB (or ARNI: sacubitril/valsartan — preferred)\nB — Beta-blocker (carvedilol, metoprolol succinate, bisoprolol ONLY)\nC — sCLT2 inhibitor (dapagliflozin, empagliflozin — reduce hospitalization + mortality)\nD — Diuretic (furosemide — for symptom relief; does NOT reduce mortality)\nE — Eplerenone/spironolactone (aldosterone antagonist — mortality benefit in HFrEF EF ≤ 35%)",
      },
      {
        name: "HF Staging: ABCD (ACC/AHA)",
        content:
          "A — At risk (HTN, DM, CAD) — no structural disease, no symptoms\nB — Structural disease (LVH, low EF) — no symptoms\nC — Structural disease + current or prior symptoms (treat with GDMT)\nD — Refractory HF despite max therapy (advanced HF, transplant evaluation)",
      },
    ],
    pimpingQuestions: [
      "What is the difference between HFrEF and HFpEF, and how does treatment differ?",
      "Which beta-blockers are approved for HFrEF? Why not all beta-blockers?",
      "What is the role of SGLT2 inhibitors in HF?",
      "What BNP level essentially rules out heart failure as a cause of dyspnea?",
      "What is sacubitril/valsartan (Entresto) and when is it preferred over ACE inhibitor alone?",
    ],
  },
  {
    id: "fm-vte",
    name: "Venous Thromboembolism (DVT/PE)",
    icdCode: "I82.401",
    rotation: "family-medicine",
    category: "Cardiovascular / Vascular Disorders",
    definition:
      "Deep vein thrombosis (DVT) is clot formation in the deep veins, most commonly the lower extremity (proximal > distal). Pulmonary embolism (PE) is migration of thrombus to pulmonary vasculature. Together constitute VTE — a major cause of preventable death. Virchow's triad: stasis + hypercoagulability + endothelial injury. Up to 50% of DVTs embolize to PE; 25% of PEs present as sudden death.",
    diagnosticCriteria:
      "DVT: Wells DVT score (pre-test probability) → D-dimer (if low/mod probability and negative rules out) → Compression duplex ultrasound (gold standard for proximal DVT). PE: Wells PE score or PERC rule → D-dimer → CT pulmonary angiography (CTPA — gold standard); V/Q scan if contrast contraindicated. Low-probability PE + PERC negative = no further testing needed. D-dimer: high sensitivity (95%), low specificity — use only in low/mod pre-test probability. CTPA: sensitivity ~97%, specificity ~96%.",
    presentation: {
      chiefComplaint: [
        "\"My leg is swollen and painful\"",
        "\"I have sudden shortness of breath and chest pain\"",
        "\"My calf has been hurting since my flight\"",
      ],
      associatedSymptoms: [
        "DVT: unilateral leg swelling, erythema, warmth, pain/tenderness (Homan's sign unreliable)",
        "PE: pleuritic chest pain, dyspnea, hemoptysis (pulmonary infarction), tachycardia",
        "Massive PE: hypotension, obstructive shock, syncope, right heart strain",
        "Risk factors: recent surgery, immobility, malignancy, pregnancy, OCP use, prior VTE, thrombophilia",
      ],
      demographics:
        "Annual incidence ~ 1–2 per 1,000. Risk doubles each decade after 40. Strongest modifiable risk factors: major surgery (orthopedic hip/knee highest), hospitalization/immobility, cancer (Trousseau syndrome). Inherited thrombophilias: Factor V Leiden (most common — 5% population), prothrombin gene mutation, protein C/S deficiency, antithrombin III deficiency. Unprovoked VTE warrants malignancy workup and thrombophilia testing.",
    },
    distinguishingFeatures:
      "DVT vs. cellulitis: both cause unilateral leg redness/swelling — DVT is tense, non-pitting; cellulitis is warm, tender, possible entry wound. Bilateral leg swelling = more likely HF, hypoalbuminemia, venous insufficiency — not DVT. EKG in PE: sinus tachycardia (most common); classic but rare = S1Q3T3 (deep S in I, Q wave and inverted T in III); right heart strain pattern.",
    redFlags: [
      "Massive PE with hemodynamic instability → systemic thrombolysis (tPA) or catheter-directed therapy",
      "Phlegmasia cerulea dolens — severe DVT with limb-threatening ischemia → emergent intervention",
      "Unprovoked VTE in young patient → screen for malignancy and thrombophilia",
      "Heparin-induced thrombocytopenia (HIT) — platelet drop > 50% on heparin → stop heparin, use argatroban/bivalirudin",
    ],
    mnemonics: [
      {
        name: "VTE Risk: SHATM (Virchow's Triad plus triggers)",
        content:
          "S — Surgery (esp. orthopedic, abdominal, pelvic)\nH — Hypercoagulable states (Factor V Leiden, antiphospholipid syndrome)\nA — Air travel/prolonged immobility\nT — Trauma, traction\nM — Malignancy (Trousseau syndrome)",
      },
      {
        name: "DOAC vs. Warfarin for VTE",
        content:
          "Preferred: DOACs (rivaroxaban, apixaban, dabigatran, edoxaban) — no INR monitoring, fewer interactions\nWarfarin still used: mechanical heart valves, antiphospholipid syndrome, severe renal failure\nDuration: Provoked VTE → 3 months; Unprovoked → ≥ 3 months, consider indefinite; Cancer-associated → LMWH or rivaroxaban indefinitely",
      },
    ],
    pimpingQuestions: [
      "What is Virchow's triad? Give a clinical example of each component.",
      "When can you safely rule out PE without imaging?",
      "What is the EKG finding classically associated with PE? What is the most common finding?",
      "What is the treatment duration for a provoked vs. unprovoked DVT?",
      "When is systemic thrombolysis indicated for PE?",
    ],
  },
  {
    id: "fm-pad",
    name: "Peripheral Artery Disease (PAD)",
    icdCode: "I73.9",
    rotation: "family-medicine",
    category: "Cardiovascular / Vascular Disorders",
    definition:
      "Atherosclerotic occlusion of peripheral arteries — most commonly the aortoiliac and femoropopliteal segments — causing reduced blood flow to the lower extremities. A marker of systemic atherosclerosis; patients with PAD have high risk of MI and stroke. Affects ~8–12 million Americans. Major risk factors: smoking (#1), DM, HTN, hyperlipidemia, age > 50.",
    diagnosticCriteria:
      "Ankle-Brachial Index (ABI): gold standard screening. ABI = ankle systolic BP ÷ arm systolic BP. Normal: 1.0–1.4. Borderline: 0.91–0.99. PAD: ≤ 0.9 (sensitivity 79%, specificity 96%). Severe PAD: < 0.4. Non-compressible vessels (diabetes/CKD): ABI > 1.4 (falsely elevated) → use toe-brachial index or duplex ultrasound. Angiography (CT, MR, or conventional): for surgical planning. Segmental pressures and pulse volume recordings: localize disease.",
    presentation: {
      chiefComplaint: [
        "\"My legs cramp when I walk but feel better with rest\"",
        "\"I have a non-healing wound on my foot\"",
        "\"My feet are cold and numb at night\"",
      ],
      associatedSymptoms: [
        "Intermittent claudication: reproducible cramping in calf (fem-pop), buttock/thigh (aortoiliac) — relieves with rest within minutes",
        "Rest pain: severe, burning foot pain at rest — worse at night, relieved by hanging leg dependent",
        "Trophic changes: hair loss, shiny/atrophic skin, thickened nails",
        "Critical limb ischemia (CLI): rest pain + tissue loss (ulcer/gangrene)",
      ],
      demographics:
        "Prevalence 12–20% in adults > 60. Diabetics develop PAD 10–15 years earlier. Smoking is the strongest modifiable risk factor (relative risk 3–4×). Leriche syndrome: aortoiliac occlusion — bilateral claudication + erectile dysfunction + absent femoral pulses (men).",
    },
    distinguishingFeatures:
      "PAD ulcers vs. venous vs. diabetic: PAD = punched-out, painful, no bleeding, distal/toes; Venous = irregular, moist, medial malleolus, painless with elevation; Diabetic = plantar pressure points, painless (neuropathy). Claudication vs. spinal stenosis (neurogenic claudication): PAD claudication → worse with walking, relief with standing still; neurogenic → worse with standing/walking, relief with sitting/flexion.",
    redFlags: [
      "6 P's of acute limb ischemia: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia → surgical emergency",
      "Critical limb ischemia (ABI < 0.4, rest pain, ulceration/gangrene) → vascular surgery",
      "Diabetic foot ulcer with PAD → very high amputation risk",
    ],
    mnemonics: [
      {
        name: "PAD Management: ESCAPE",
        content:
          "E — Exercise therapy (supervised walking program — first-line for claudication)\nS — Smoking cessation (most important modifiable risk factor)\nC — Cardiovascular risk reduction (antiplatelet: aspirin or clopidogrel; statin; ACE inhibitor)\nA — ABI measurement to diagnose\nP — Pharmacotherapy: cilostazol (PDE3 inhibitor — improves walking distance; CI in HF)\nE — Endovascular/surgical revascularization for CLI or refractory claudication",
      },
    ],
    pimpingQuestions: [
      "What ABI value is diagnostic for PAD? What does an ABI > 1.4 suggest?",
      "Describe Leriche syndrome — what triad of symptoms?",
      "What is the difference between PAD claudication and neurogenic (spinal stenosis) claudication?",
      "What is the first-line treatment for intermittent claudication?",
      "What medication is used to improve claudication symptoms in PAD (and what is its contraindication)?",
    ],
  },
];
