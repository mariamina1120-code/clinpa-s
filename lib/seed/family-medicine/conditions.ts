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
];
