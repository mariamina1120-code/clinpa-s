import type { Guideline } from "@/types";

export const familyMedicineGuidelines: Guideline[] = [
  {
    id: "fm-guideline-hypertension",
    rotation: "family-medicine",
    conditionName: "Hypertension",
    guidelineName: "2017 ACC/AHA High Blood Pressure Guideline",
    issuingOrganization: "American College of Cardiology / American Heart Association",
    year: 2017,
    keyRecommendations: [
      "Hypertension is now defined as BP ≥130/80 mmHg (Stage 1) and ≥140/90 mmHg (Stage 2); the former 'prehypertension' category is eliminated.",
      "Initiate pharmacotherapy for Stage 1 HTN (130-139/80-89) in patients with established ASCVD or 10-year ASCVD risk ≥10%; lifestyle modification alone for lower-risk Stage 1 patients.",
      "All patients with Stage 2 HTN (≥140/90) should receive antihypertensive medication plus lifestyle modification.",
      "Target BP goal is <130/80 mmHg for most adults including those with diabetes, CKD, and known CVD.",
      "Use out-of-office BP measurements (home or ambulatory) to confirm diagnosis and guide treatment before initiating therapy when possible.",
      "Combination therapy with two agents from different drug classes is recommended as initial therapy for Stage 2 HTN or when BP is >20/10 mmHg above goal."
    ],
    firstLine: [
      "Thiazide diuretics: chlorthalidone 12.5–25 mg/day (preferred over HCTZ due to longer half-life)",
      "ACE inhibitors: lisinopril 10–40 mg/day or enalapril 5–40 mg/day",
      "ARBs: losartan 50–100 mg/day or valsartan 80–320 mg/day",
      "Calcium channel blockers (dihydropyridine): amlodipine 2.5–10 mg/day"
    ],
    secondLine: [
      "Beta-blockers: metoprolol succinate 25–200 mg/day or carvedilol 6.25–25 mg twice daily (preferred if CAD, HFrEF, or tachyarrhythmia present)",
      "Aldosterone antagonists: spironolactone 25–50 mg/day (add-on for resistant HTN)",
      "Loop diuretics: furosemide 20–80 mg/day (preferred over thiazides if eGFR <30 mL/min/1.73m²)",
      "Alpha-1 blockers: doxazosin 1–16 mg/day (useful in men with BPH)"
    ],
    thirdLine: [
      "Central alpha-2 agonists: clonidine 0.1–0.3 mg twice daily (caution: rebound hypertension on abrupt discontinuation)",
      "Direct vasodilators: hydralazine 25–100 mg twice daily (often combined with nitrate if used for HF)",
      "Minoxidil 5–40 mg/day (reserved for truly resistant HTN; requires concurrent diuretic and beta-blocker)"
    ],
    nonPharmacologic: [
      "DASH diet: reduce sodium to <1500 mg/day, increase fruits, vegetables, and low-fat dairy; can lower SBP by 8–14 mmHg.",
      "Weight loss: target BMI <25 kg/m²; every 1 kg lost reduces SBP by approximately 1 mmHg.",
      "Physical activity: 90–150 minutes/week of moderate-intensity aerobic exercise (SBP reduction ~5–8 mmHg).",
      "Limit alcohol: ≤2 drinks/day for men, ≤1 drink/day for women; reduce or eliminate tobacco use."
    ],
    whenToRefer: [
      "Resistant hypertension: BP ≥130/80 mmHg despite maximally tolerated doses of ≥3 antihypertensive drugs including a diuretic.",
      "Secondary hypertension suspected: age <30, abrupt onset, refractory to multiple agents, or accompanied by hypokalemia, adrenal mass, or renal bruit.",
      "Hypertensive urgency/emergency (BP >180/120 with end-organ damage): refer to ED immediately.",
      "Pregnancy-associated hypertension: preeclampsia or chronic HTN in pregnancy requires MFM consultation."
    ],
    monitoringSchedule: [
      "After initiating or changing therapy: recheck BP in 1 month; check BMP (electrolytes, creatinine) 1–2 weeks after starting ACE inhibitor/ARB or diuretic.",
      "Once BP is at goal: follow-up every 3–6 months with BP measurement.",
      "Annual labs: BMP (electrolytes, BUN, creatinine), fasting lipid panel, urinalysis with microalbumin-to-creatinine ratio, fasting glucose.",
      "EKG at baseline and if symptoms suggest LVH or arrhythmia develop.",
      "Annual 10-year ASCVD risk reassessment to guide treatment intensity."
    ],
    patientEducation: [
      "Home blood pressure monitoring: instruct patient to sit quietly for 5 minutes before measuring, use a validated cuff of correct size, measure twice in the morning and twice in the evening, and log readings.",
      "Medication adherence: explain that most patients require lifelong treatment; stopping medication abruptly can cause rebound hypertension and increase stroke risk.",
      "Sodium awareness: teach reading food labels; processed foods, canned soups, and fast food are the largest contributors to sodium intake in the American diet.",
      "Report symptoms immediately: sudden severe headache, vision changes, chest pain, or weakness/numbness could indicate hypertensive emergency and require emergency evaluation."
    ]
  },
  {
    id: "fm-guideline-diabetes-t2",
    rotation: "family-medicine",
    conditionName: "Type 2 Diabetes Mellitus",
    guidelineName: "Standards of Medical Care in Diabetes 2024",
    issuingOrganization: "American Diabetes Association (ADA)",
    year: 2024,
    keyRecommendations: [
      "Diagnostic criteria: fasting glucose ≥126 mg/dL, 2-hour OGTT ≥200 mg/dL, HbA1c ≥6.5%, or random glucose ≥200 mg/dL with symptoms—confirmed by repeat testing unless unequivocally symptomatic.",
      "HbA1c target is <7.0% for most non-pregnant adults; less stringent target of <8.0% acceptable for elderly, limited life expectancy, or significant hypoglycemia risk.",
      "GLP-1 receptor agonists and SGLT-2 inhibitors are preferred add-on agents for patients with established ASCVD, heart failure, or CKD regardless of HbA1c.",
      "Screen all adults ≥35 years with overweight/obesity; screen at any age if additional risk factors (family history, history of GDM, prediabetes) are present.",
      "Initiate metformin at diagnosis alongside lifestyle modification if tolerated and eGFR ≥30 mL/min/1.73m²; assess ASCVD and CKD risk to guide additional agent selection.",
      "Comprehensive cardiovascular risk factor management: BP goal <130/80, statin therapy, antiplatelet therapy as indicated, and tobacco cessation."
    ],
    firstLine: [
      "Metformin: start 500 mg twice daily with meals, titrate over 4 weeks to 1000 mg twice daily (max 2550 mg/day); reduces HbA1c by 1–2%.",
      "GLP-1 receptor agonists (preferred if ASCVD or weight loss needed): semaglutide 0.5–2 mg SC weekly (Ozempic) or liraglutide 1.2–1.8 mg SC daily (Victoza).",
      "SGLT-2 inhibitors (preferred if HFrEF or CKD): empagliflozin 10–25 mg/day or dapagliflozin 5–10 mg/day."
    ],
    secondLine: [
      "DPP-4 inhibitors (weight-neutral, low hypoglycemia risk): sitagliptin 100 mg/day (adjust for renal function), alogliptin 25 mg/day.",
      "Sulfonylureas (low cost, effective, hypoglycemia risk): glipizide 5–20 mg/day (preferred over glibenclamide; shorter-acting, safer in elderly).",
      "Thiazolidinediones: pioglitazone 15–45 mg/day (improves insulin sensitivity; caution with heart failure, osteoporosis)."
    ],
    thirdLine: [
      "Basal insulin: insulin glargine (Lantus/Basaglar) 10 units SC at bedtime or 0.1–0.2 units/kg/day; titrate by 2 units every 3 days to fasting glucose 80–130 mg/dL.",
      "Insulin degludec (Tresiba) or detemir as alternatives; add rapid-acting insulin (aspart, lispro) at meals if postprandial glucose control is inadequate."
    ],
    nonPharmacologic: [
      "Medical nutrition therapy: Mediterranean or low-carbohydrate diet; reduce refined carbohydrates and added sugars; individualized caloric targets for weight loss.",
      "Physical activity: ≥150 minutes/week of moderate-intensity aerobic activity plus resistance training ≥2 days/week; break up prolonged sitting every 30 minutes.",
      "Weight loss: 5–10% body weight loss significantly improves glycemic control; refer to structured intensive lifestyle program (e.g., Diabetes Prevention Program model).",
      "Diabetes self-management education and support (DSMES): structured education at diagnosis, annually, and when complications arise."
    ],
    whenToRefer: [
      "Endocrinology: HbA1c persistently >9% despite optimized oral therapy, complex insulin regimens, frequent hypoglycemia, or uncertain diabetes type (LADA vs. T2DM).",
      "Ophthalmology: dilated eye exam at diagnosis, then annually (or every 1–2 years if no retinopathy and well-controlled).",
      "Nephrology: eGFR <30 mL/min/1.73m² or ACR >300 mg/g with progressive decline despite optimized RAAS blockade.",
      "Podiatry: high-risk foot (peripheral neuropathy, PAD, prior ulceration, or deformity) requires regular podiatry referral."
    ],
    monitoringSchedule: [
      "HbA1c: every 3 months until stable at goal, then every 6 months.",
      "Annual labs: comprehensive metabolic panel (renal function, LFTs), fasting lipid panel, urine albumin-to-creatinine ratio (UACR), thyroid function (TSH).",
      "Blood pressure at every visit.",
      "Annual: dilated eye exam, foot exam with monofilament testing and ABI if PAD suspected, dental referral.",
      "Vaccinations: influenza annually, pneumococcal (PCV15 or PCV20), hepatitis B (if unvaccinated and age <60)."
    ],
    patientEducation: [
      "Blood glucose monitoring: teach self-monitoring technique; fasting targets 80–130 mg/dL, postprandial (1–2 hours after meals) <180 mg/dL.",
      "Hypoglycemia recognition and treatment: symptoms (shakiness, diaphoresis, confusion) and the '15-15 rule'—15 g fast-acting carbohydrate (4 oz juice), recheck in 15 minutes.",
      "Foot care: inspect feet daily, wear properly fitting shoes, report any sores, redness, or swelling immediately as diabetic foot wounds can progress rapidly.",
      "Sick-day rules: continue medications (except SGLT-2 inhibitors and metformin if dehydrated/ill), monitor glucose more frequently, stay hydrated, and seek care if unable to eat or glucose is persistently elevated."
    ]
  },
  {
    id: "fm-guideline-hyperlipidemia",
    rotation: "family-medicine",
    conditionName: "Hyperlipidemia",
    guidelineName: "2018 AHA/ACC/Multi-Society Cholesterol Guideline",
    issuingOrganization: "American Heart Association / American College of Cardiology",
    year: 2018,
    keyRecommendations: [
      "Four statin benefit groups: (1) clinical ASCVD, (2) LDL ≥190 mg/dL, (3) diabetes aged 40–75 with LDL 70–189 mg/dL, (4) 10-year ASCVD risk ≥7.5% without other conditions.",
      "Risk-enhancing factors (family history of premature ASCVD, hs-CRP ≥2.0 mg/L, ABI <0.9, high-risk conditions) should prompt initiation of statin therapy in borderline-risk individuals.",
      "LDL targets: very high risk (prior ASCVD events or ASCVD + multiple risk factors) target LDL <55 mg/dL; high risk (ASCVD without additional risk) <70 mg/dL; primary prevention <100 mg/dL for high-intensity statin candidates.",
      "Coronary artery calcium (CAC) scoring is useful for statin decision-making in intermediate-risk patients (7.5–20% 10-year risk) when the decision is uncertain.",
      "For LDL ≥190 mg/dL, use high-intensity statin without calculating 10-year risk; add ezetimibe and PCSK9 inhibitor if LDL remains ≥100 mg/dL.",
      "Lifestyle optimization should precede or accompany pharmacotherapy in primary prevention; reassess adherence and secondary causes before escalating therapy."
    ],
    firstLine: [
      "High-intensity statins (reduce LDL by ≥50%): atorvastatin 40–80 mg/day or rosuvastatin 20–40 mg/day—preferred for clinical ASCVD or LDL ≥190 mg/dL.",
      "Moderate-intensity statins (reduce LDL by 30–49%): atorvastatin 10–20 mg/day, rosuvastatin 5–10 mg/day, or simvastatin 20–40 mg/day—appropriate for primary prevention in moderate-risk patients."
    ],
    secondLine: [
      "Ezetimibe 10 mg/day: add when LDL goal not achieved on maximally tolerated statin; reduces LDL by additional 13–20%.",
      "Bile acid sequestrants: colesevelam 3.75 g/day (also reduces HbA1c modestly in T2DM), cholestyramine 4–16 g/day in divided doses."
    ],
    thirdLine: [
      "PCSK9 inhibitors: evolocumab 140 mg SC every 2 weeks or 420 mg monthly (Repatha); alirocumab 75–150 mg SC every 2 weeks (Praluent)—reduce LDL by 50–60%; indicated for very high-risk ASCVD with LDL ≥70 mg/dL on maximum tolerated statin + ezetimibe.",
      "Inclisiran 284 mg SC twice yearly (every 6 months after two initial doses): siRNA that reduces PCSK9 synthesis; alternative to PCSK9 inhibitor antibodies.",
      "Bempedoic acid 180 mg/day: ATP-citrate lyase inhibitor; useful for statin-intolerant patients; reduces LDL by ~18% (not converted to active form in muscle, reducing myopathy risk)."
    ],
    nonPharmacologic: [
      "Heart-healthy diet: reduce saturated fat to <7% of calories, eliminate trans fats, increase soluble fiber (oat bran, psyllium, beans) and plant sterols/stanols (2 g/day).",
      "Physical activity: 150 minutes/week moderate aerobic activity; reduces triglycerides and raises HDL.",
      "Weight loss: 5–10% reduction in body weight lowers LDL by ~5–8% and significantly reduces triglycerides.",
      "Omega-3 fatty acids: icosapentaenoic acid (EPA) 4 g/day (Vascepa) approved to reduce cardiovascular events in patients with triglycerides ≥150 mg/dL on statin therapy."
    ],
    whenToRefer: [
      "Familial hypercholesterolemia (LDL ≥190 mg/dL or family history of premature ASCVD): refer to lipid specialist for cascade screening of family members and advanced therapy.",
      "Statin intolerance (confirmed myopathy or recurrent adverse effects): lipidologist for non-statin alternatives and rechallenge protocol.",
      "LDL goal not achieved despite high-intensity statin + ezetimibe and ASCVD present: refer for PCSK9 inhibitor initiation.",
      "Severe hypertriglyceridemia (triglycerides ≥500 mg/dL): urgent evaluation to prevent pancreatitis."
    ],
    monitoringSchedule: [
      "Fasting lipid panel: at baseline, 4–12 weeks after initiating or changing statin, then every 3–12 months once stable.",
      "LFTs: check at baseline; routine monitoring not required unless symptoms of hepatotoxicity develop.",
      "CK: check at baseline; recheck only if patient develops muscle pain, weakness, or dark urine on therapy.",
      "Assess patient adherence and lifestyle changes at every follow-up visit.",
      "Recheck 10-year ASCVD risk every 4–6 years in primary prevention patients to adjust therapy intensity."
    ],
    patientEducation: [
      "Statin safety: myalgia is common (5–10%), true rhabdomyolysis is rare (<0.1%); instruct patient to report muscle pain or dark urine immediately but not to stop medication without calling the office.",
      "Diet specifics: avoid coconut oil, palm oil, and full-fat dairy; replace with olive oil, avocado, nuts; read labels for 'partially hydrogenated' oils indicating trans fat.",
      "Medication timing: most statins (except atorvastatin and rosuvastatin) are more effective when taken in the evening due to diurnal cholesterol synthesis patterns.",
      "Long-term perspective: lipid-lowering medications reduce heart attack and stroke risk by 25–35%; consistency over years, not weeks, confers the benefit."
    ]
  },
  {
    id: "fm-guideline-copd",
    rotation: "family-medicine",
    conditionName: "Chronic Obstructive Pulmonary Disease (COPD)",
    guidelineName: "Global Initiative for Chronic Obstructive Lung Disease (GOLD) 2024 Report",
    issuingOrganization: "Global Initiative for Chronic Obstructive Lung Disease (GOLD)",
    year: 2024,
    keyRecommendations: [
      "Diagnosis requires post-bronchodilator spirometry with FEV1/FVC <0.70; spirometry is mandatory—clinical presentation alone is insufficient.",
      "GOLD 2024 uses an ABE classification: Group A (low symptoms, low risk), Group B (high symptoms, low risk), Group E (high exacerbation risk regardless of symptoms).",
      "Pharmacotherapy is initiated based on symptom burden (mMRC dyspnea scale or CAT score) and exacerbation history, not spirometric severity alone.",
      "All COPD patients should receive influenza and pneumococcal vaccination; COVID-19 and Tdap vaccination are also recommended.",
      "Smoking cessation is the single most effective intervention to slow disease progression; use pharmacotherapy (varenicline first-line) plus behavioral counseling.",
      "Pulmonary rehabilitation is recommended for all symptomatic patients with FEV1 <50% predicted and those who had a recent exacerbation."
    ],
    firstLine: [
      "Group A (mild symptoms, 0–1 exacerbations/year): short-acting bronchodilator as needed—albuterol (SABA) 2 puffs q4–6h PRN or ipratropium (SAMA) 2 puffs q6h PRN.",
      "Group B (high symptoms, 0–1 exacerbations/year): long-acting bronchodilator monotherapy—tiotropium (LAMA) 18 mcg inhaled daily (preferred) or salmeterol/formoterol (LABA).",
      "Group E (≥2 exacerbations or ≥1 hospitalization/year): LAMA + LABA dual bronchodilation—tiotropium + olodaterol (Stiolto Respimat) or umeclidinium + vilanterol (Anoro Ellipta)."
    ],
    secondLine: [
      "LAMA + LABA + ICS triple therapy: fluticasone furoate/umeclidinium/vilanterol (Trelegy Ellipta 100/62.5/25 mcg) or budesonide/glycopyrrolate/formoterol (Breztri Aerosphere)—preferred if blood eosinophils ≥300 cells/μL and frequent exacerbations.",
      "Add roflumilast 500 mcg/day (PDE-4 inhibitor) for Group E patients with chronic bronchitis phenotype and FEV1 <50% predicted with persistent exacerbations despite LAMA + LABA.",
      "Azithromycin 250 mg/day or 500 mg 3×/week (for current non-smokers with frequent exacerbations): reduces exacerbation frequency; check QTc and hearing before initiation."
    ],
    nonPharmacologic: [
      "Smoking cessation: combine varenicline 1 mg twice daily (most effective), nicotine replacement, and behavioral counseling; reduces FEV1 decline from ~60 mL/year to ~30 mL/year.",
      "Pulmonary rehabilitation: 6–8 week structured program of exercise training, education, and psychosocial support; improves dyspnea, exercise capacity, and quality of life.",
      "Long-term oxygen therapy (LTOT): prescribed when resting SpO2 ≤88% or PaO2 ≤55 mmHg on two occasions 3 weeks apart; target SpO2 88–92% to avoid hypercapnia.",
      "Influenza vaccine annually, pneumococcal vaccine (PCV15/PCV20), COVID-19 booster; pulmonary hygiene (pursed-lip breathing, diaphragmatic breathing)."
    ],
    whenToRefer: [
      "Pulmonology: FEV1 <50% predicted, frequent exacerbations (≥2/year), diagnostic uncertainty, or considering surgical options (LVRS, endobronchial valves, lung transplant).",
      "Emergency: acute exacerbation with severe dyspnea at rest, cyanosis, altered mental status, SpO2 <88% on supplemental oxygen, or use of accessory muscles.",
      "Cardiology: right heart failure (cor pulmonale) suspected—jugular venous distension, peripheral edema, or elevated BNP.",
      "Thoracic surgery evaluation: large bullous emphysema occupying >30% of hemithorax or upper-lobe predominant emphysema with low exercise capacity (LVRS candidacy)."
    ],
    monitoringSchedule: [
      "Spirometry: at diagnosis to confirm; reassess annually or if clinical status changes significantly.",
      "COPD Assessment Test (CAT) or mMRC score: at every visit to quantify symptom burden and guide therapy adjustment.",
      "Pulse oximetry: at every visit; perform arterial blood gas if SpO2 ≤92% to assess for hypercapnia and oxygen therapy need.",
      "Review inhaler technique at every visit—improper technique is the most common cause of treatment failure.",
      "Screen for anxiety and depression (PHQ-9, GAD-7) annually; both are highly prevalent in COPD and worsen outcomes."
    ],
    patientEducation: [
      "Inhaler technique: proper technique is critical—demonstrate and have the patient teach back the correct technique at each visit; spacers improve COPD MDI delivery.",
      "AECOPD action plan: provide a written action plan with instructions to increase bronchodilator frequency, start oral prednisone (40 mg × 5 days) and antibiotics if sputum increases/changes character, and criteria for emergency evaluation.",
      "Activity pacing and energy conservation: plan activities for morning hours when energy is highest; use pursed-lip breathing and sit-to-stand techniques to reduce dyspnea.",
      "Avoid triggers: air pollution, cold air, wood smoke, occupational dusts, and infections (hand hygiene, avoid crowded spaces during respiratory virus season)."
    ]
  },
  {
    id: "fm-guideline-asthma",
    rotation: "family-medicine",
    conditionName: "Asthma",
    guidelineName: "Global Initiative for Asthma (GINA) 2023 Strategy Report",
    issuingOrganization: "Global Initiative for Asthma (GINA)",
    year: 2023,
    keyRecommendations: [
      "GINA 2023 no longer recommends SABA-only therapy as reliever for any asthma severity; all patients should receive ICS-containing therapy to reduce the risk of severe exacerbations.",
      "Preferred reliever for mild-to-moderate asthma (Steps 1–3): as-needed low-dose ICS-formoterol (budesonide-formoterol), which serves as both reliever and controller (MART strategy).",
      "Asthma severity should be assessed retrospectively based on the level of treatment required to achieve good control after 2–3 months of treatment.",
      "Before stepping up therapy, confirm diagnosis, assess inhaler technique and adherence, identify and address modifiable risk factors (allergen exposure, smoking, NSAID use, beta-blockers).",
      "Add-on biologic therapy (anti-IgE, anti-IL-5/5R, anti-IL-4R) is indicated for severe uncontrolled asthma despite Step 4–5 treatment.",
      "Written Asthma Action Plan should be provided to every patient, individualized to their medication regimen."
    ],
    firstLine: [
      "Step 1–2 (mild persistent): as-needed low-dose ICS-formoterol (budesonide 200 mcg/formoterol 6 mcg per actuation, 1 inhalation as needed)—reduces severe exacerbations vs. SABA alone.",
      "Step 3 (moderate persistent): low-dose ICS-formoterol MART (maintenance and reliever therapy)—budesonide 200/formoterol 6 mcg 1–2 inhalations twice daily + as needed.",
      "Alternative Step 3: medium-dose ICS monotherapy (fluticasone propionate 250 mcg twice daily) + SABA reliever."
    ],
    secondLine: [
      "Step 4 (uncontrolled on Step 3): medium-dose ICS-LABA—budesonide/formoterol 400/12 mcg twice daily, or fluticasone propionate/salmeterol 250/50 mcg twice daily.",
      "Add-on leukotriene receptor antagonist (LTRA): montelukast 10 mg/day (adults)—useful if allergic rhinitis coexists; less effective than ICS-LABA combination."
    ],
    thirdLine: [
      "Step 5 (severe uncontrolled): high-dose ICS-LABA plus specialist referral; add tiotropium 2.5 mcg/day (Spiriva Respimat) as add-on bronchodilator.",
      "Biologic agents: omalizumab (anti-IgE) for allergic asthma with IgE 30–700 IU/mL; mepolizumab 100 mg SC every 4 weeks or dupilumab 300 mg SC every 2 weeks for eosinophilic asthma.",
      "Oral corticosteroids (lowest effective dose) only as last resort; use steroid-sparing strategies to minimize long-term adverse effects."
    ],
    nonPharmacologic: [
      "Allergen and trigger identification: skin-prick or specific IgE testing; implement allergen avoidance (HEPA filters, impermeable mattress covers, no smoking indoors, avoid pet dander if sensitized).",
      "Smoking cessation: smoking impairs corticosteroid responsiveness and accelerates decline in lung function in asthmatic patients.",
      "Exercise-induced bronchospasm: warm-up 15 minutes before exercise; pre-treat with low-dose ICS-formoterol or SABA 15 minutes before vigorous activity.",
      "Weight loss in obese patients: obesity worsens asthma control; 5–10% weight loss improves lung function and symptom scores."
    ],
    whenToRefer: [
      "Pulmonology/allergy: diagnosis in doubt, poor response to Step 3 therapy, frequent severe exacerbations (≥2 systemic corticosteroid courses/year), or biologic therapy candidacy.",
      "Emergency: acute severe asthma (PEFR <40% predicted, unable to speak in sentences, SpO2 <92%, paradoxical pulse >25 mmHg)—nebulized albuterol + ipratropium, systemic corticosteroids, and emergent evaluation.",
      "Allergy/immunology: allergic asthma not controlled with pharmacotherapy—evaluate for subcutaneous or sublingual immunotherapy.",
      "ENT: chronic sinusitis or nasal polyps worsening asthma control despite topical nasal steroids."
    ],
    monitoringSchedule: [
      "Asthma Control Test (ACT) at every visit; score <20 indicates inadequate control requiring step-up.",
      "Spirometry (pre and post-bronchodilator FEV1/FVC): at diagnosis, after initiating treatment, annually, and when control is poor.",
      "Peak flow monitoring: daily peak expiratory flow measurement at home for patients with severe asthma or poor perception of obstruction.",
      "Review inhaler technique and adherence at every visit; reassess control in 2–6 weeks after step-up and every 3–6 months when stable."
    ],
    patientEducation: [
      "Reliever vs. controller medications: emphasize that ICS inhalers prevent inflammation and must be taken daily even when feeling well; the reliever inhaler treats acute symptoms.",
      "Asthma action plan: provide color-coded (green/yellow/red zone) written plan; instruct when to add extra ICS-formoterol doses, when to start oral prednisone, and when to go to the ED.",
      "Trigger avoidance: common triggers include viral URIs, cold air, exercise, tobacco smoke, mold, pet dander, and aspirin/NSAIDs in aspirin-exacerbated respiratory disease.",
      "Correct inhaler technique: demonstrate spacer use with MDI; confirm the patient can use their specific inhaler device correctly at every visit to maximize medication delivery to the airways."
    ]
  },
  {
    id: "fm-guideline-hypothyroidism",
    rotation: "family-medicine",
    conditionName: "Hypothyroidism",
    guidelineName: "American Thyroid Association Guidelines for Hypothyroidism in Adults",
    issuingOrganization: "American Thyroid Association (ATA)",
    year: 2014,
    keyRecommendations: [
      "Diagnosis: overt hypothyroidism defined as elevated TSH + low free T4; subclinical hypothyroidism defined as elevated TSH with normal free T4—treatment decision individualized based on TSH level, symptoms, and risk factors.",
      "Levothyroxine (LT4) monotherapy is the standard treatment; synthetic T3/T4 combination therapy is not routinely recommended due to lack of consistent benefit in most patients.",
      "Treatment of subclinical hypothyroidism is recommended when TSH >10 mIU/L; treatment optional for TSH 4.5–10 mIU/L in symptomatic patients, pregnant women, or those with cardiac risk factors.",
      "Full replacement dose of LT4 is approximately 1.6 mcg/kg/day; start low (25–50 mcg/day) in elderly, cardiac disease, or longstanding hypothyroidism to avoid precipitation of angina or arrhythmia.",
      "Target TSH goal for most adults is 0.5–2.5 mIU/L; upper limit of 4.0 mIU/L is acceptable in elderly patients (>70 years) to avoid over-replacement.",
      "Myxedema coma (rare, life-threatening): administer IV LT4 200–400 mcg bolus + hydrocortisone 100 mg IV (rule out concurrent adrenal insufficiency); manage in ICU."
    ],
    firstLine: [
      "Levothyroxine (LT4): 1.6 mcg/kg/day as full replacement; start at 25–50 mcg/day in elderly or cardiac patients and titrate every 6 weeks.",
      "Generic LT4 brands are bioequivalent per FDA standards; once stabilized on a specific formulation, avoid switching brands without rechecking TSH 6–8 weeks later."
    ],
    secondLine: [
      "Desiccated thyroid extract (DTE, e.g., Armour Thyroid): contains both T4 and T3 in 4:1 ratio; consider in patients with persistent symptoms on adequate LT4 with normal TSH.",
      "Liothyronine (T3, Cytomel) added to LT4: low-dose combination (e.g., LT4 75 mcg + liothyronine 5 mcg/day) for patients with persistent symptoms; requires careful monitoring to avoid T3 excess."
    ],
    nonPharmacologic: [
      "Medication timing: LT4 should be taken on an empty stomach, 30–60 minutes before breakfast or at bedtime (4 hours after last meal) to maximize absorption.",
      "Drug interactions: calcium, iron supplements, antacids, and cholestyramine reduce LT4 absorption—separate administration by at least 4 hours.",
      "Diet: routine iodine supplementation is not needed in adequately iodine-sufficient populations; excessive kelp or iodine supplements can worsen hypothyroidism (Wolff-Chaikoff effect).",
      "Pregnancy planning: increase LT4 dose by ~25–30% immediately upon confirmation of pregnancy; maintain TSH <2.5 mIU/L in first trimester."
    ],
    whenToRefer: [
      "Endocrinology: TSH remains abnormal despite appropriate LT4 dose adjustments, suspected central hypothyroidism (low/normal TSH with low free T4), pediatric hypothyroidism, or pregnancy with significant thyroid disease.",
      "OB/GYN or MFM: overt hypothyroidism in pregnancy—TSH >4.0 mIU/L in first trimester is associated with adverse fetal neurodevelopmental outcomes.",
      "Emergency/hospitalist: myxedema coma (hypothermia, bradycardia, altered mental status, respiratory failure) requires ICU-level care.",
      "Surgery/ENT: suspected structural thyroid abnormality (goiter, nodule >1 cm, rapid growth, compressive symptoms) requires ultrasound and possible fine-needle aspiration."
    ],
    monitoringSchedule: [
      "After dose initiation or change: recheck TSH in 6–8 weeks (allow time for pituitary-thyroid axis equilibration).",
      "Once stable on LT4: check TSH annually.",
      "Pregnancy: check TSH every 4 weeks in first trimester, then every trimester; adjust LT4 to maintain TSH <2.5 mIU/L.",
      "After thyroidectomy or radioiodine ablation: check TSH every 6–8 weeks until stabilized, then every 6–12 months."
    ],
    patientEducation: [
      "Take levothyroxine correctly: take on an empty stomach (ideally first thing in the morning, 30 minutes before eating) with a full glass of water; the absorption is significantly impaired by food, coffee, and many common supplements.",
      "Do not stop medication when feeling well: hypothyroidism requires lifelong treatment; stopping LT4 will cause symptoms to return over weeks to months.",
      "Consistent formulation: try to use the same brand or manufacturer each refill; even small bioequivalence differences between formulations can shift TSH out of range.",
      "Symptoms of over-replacement (too much LT4): palpitations, anxiety, insomnia, heat intolerance, and diarrhea—contact office for TSH recheck if these develop."
    ]
  },
  {
    id: "fm-guideline-gerd",
    rotation: "family-medicine",
    conditionName: "Gastroesophageal Reflux Disease (GERD)",
    guidelineName: "ACG Clinical Guideline: Diagnosis and Management of Gastroesophageal Reflux Disease",
    issuingOrganization: "American College of Gastroenterology (ACG)",
    year: 2022,
    keyRecommendations: [
      "GERD diagnosis is established clinically with typical symptoms (heartburn, regurgitation) responding to empiric PPI therapy; upper endoscopy is not required for initial diagnosis in uncomplicated cases.",
      "Alarm features requiring urgent endoscopy: dysphagia, odynophagia, unintentional weight loss, recurrent vomiting, GI bleeding, or family history of upper GI malignancy.",
      "PPI therapy is more effective than H2 blockers and is the pharmacologic treatment of choice for symptom relief and healing erosive esophagitis.",
      "Once-daily PPI taken 30–60 minutes before the first meal of the day provides optimal acid suppression; twice-daily dosing before breakfast and dinner for refractory symptoms or nocturnal symptoms.",
      "Barrett's esophagus screening: upper endoscopy indicated in men with chronic GERD (≥5 years) and ≥3 additional risk factors (age >50, white race, obesity, tobacco use, family history).",
      "Long-term PPI use carries small risks of C. difficile infection, hypomagnesemia, vitamin B12 deficiency, and bone fracture; use the lowest effective dose and reassess need annually."
    ],
    firstLine: [
      "PPI therapy (8-week course for initial treatment): omeprazole 20 mg daily, pantoprazole 40 mg daily, or esomeprazole 40 mg daily—take 30–60 minutes before first meal.",
      "On-demand PPI therapy for non-erosive GERD with mild/intermittent symptoms: take PPI as needed when heartburn occurs rather than daily."
    ],
    secondLine: [
      "H2 receptor antagonists: famotidine 20 mg twice daily or 40 mg at bedtime—less effective than PPIs but useful for breakthrough nocturnal symptoms or when PPI is contraindicated.",
      "Antacids: calcium carbonate (Tums) 500–1000 mg as needed for rapid symptom relief (onset within minutes)—adjunctive therapy only."
    ],
    thirdLine: [
      "Baclofen 5–20 mg three times daily: GABA-B agonist that reduces transient lower esophageal sphincter relaxations; useful for refractory regurgitation; side effects include sedation and dizziness.",
      "Surgical: laparoscopic Nissen fundoplication for patients with confirmed GERD who prefer to discontinue medication or have refractory symptoms despite optimal medical therapy with documented abnormal pH/impedance testing."
    ],
    nonPharmacologic: [
      "Dietary modifications: avoid large meals, fatty/fried foods, chocolate, peppermint, caffeine, carbonated beverages, citrus, and tomato-based products; eat meals 3 hours before lying down.",
      "Positional and lifestyle changes: elevate head of bed 6–8 inches (wedge pillow); avoid tight-fitting clothing around waist; sleep on left lateral decubitus position.",
      "Weight loss: obese patients have 3× higher risk of GERD; 5–10% weight loss significantly reduces symptom frequency and severity.",
      "Smoking cessation: nicotine reduces lower esophageal sphincter tone, worsening reflux."
    ],
    whenToRefer: [
      "Gastroenterology: alarm symptoms (dysphagia, weight loss, GI bleeding), inadequate response to 8 weeks of twice-daily PPI, or when surgical evaluation is considered.",
      "Endoscopy: diagnose Barrett's esophagus in high-risk patients, evaluate for erosive esophagitis severity, or before anti-reflux surgery.",
      "Surgery: confirmed GERD with documented pH abnormalities, patient preference to avoid lifelong medication, or large hiatal hernia with refractory symptoms.",
      "ENT/pulmonology: atypical symptoms (chronic cough, hoarseness, laryngitis, recurrent aspiration pneumonia) not responsive to PPI trial may warrant laryngoscopy or pH monitoring."
    ],
    monitoringSchedule: [
      "Reassess symptoms 8 weeks after initiating PPI; if symptoms resolved, attempt step-down to on-demand therapy or lowest effective dose.",
      "Annual reassessment: document whether ongoing PPI is still necessary; attempt drug holiday or step-down if patient has been asymptomatic for 3+ months.",
      "If on long-term PPI (>1 year): check serum magnesium annually; consider B12 level every 2–3 years; DEXA scan per standard osteoporosis screening guidelines.",
      "Barrett's esophagus surveillance: low-grade dysplasia every 6–12 months; no dysplasia every 3–5 years per endoscopist recommendation."
    ],
    patientEducation: [
      "PPI timing is critical: the medication must be taken 30–60 minutes before the first meal of the day to be effective—taking it with food or at bedtime significantly reduces efficacy.",
      "GERD is a chronic condition: lifestyle modifications are the cornerstone of long-term management; medication controls but does not cure the condition.",
      "When to seek care urgently: difficulty or pain swallowing, vomiting blood, black/tarry stools, or unintentional weight loss require prompt medical evaluation.",
      "Medication overuse: avoid long-term antacid use without physician guidance; over-reliance on antacids may mask symptoms of more serious conditions including peptic ulcer or malignancy."
    ]
  },
  {
    id: "fm-guideline-mdd",
    rotation: "family-medicine",
    conditionName: "Major Depressive Disorder",
    guidelineName: "APA Practice Guideline for the Treatment of Major Depressive Disorder (Third Edition, Updated)",
    issuingOrganization: "American Psychiatric Association (APA)",
    year: 2023,
    keyRecommendations: [
      "Diagnosis requires DSM-5 criteria: ≥5 of 9 symptoms (depressed mood, anhedonia required) for ≥2 weeks causing functional impairment; use PHQ-9 for structured screening and severity monitoring.",
      "Both psychotherapy (CBT, IPT) and antidepressant pharmacotherapy are effective; combination treatment is superior to either alone for moderate-to-severe MDD.",
      "SSRIs and SNRIs are first-line pharmacotherapy due to favorable tolerability profile; choice among agents should be guided by side effect profile, patient comorbidities, prior response, and cost.",
      "Adequate antidepressant trial requires therapeutic dose for at least 4–8 weeks; if partial response at 4–6 weeks, optimize dose before switching; if no response at 8 weeks, switch or augment.",
      "Continue antidepressants for ≥6–12 months after remission for first episode; ≥1–2 years for second episode; indefinite treatment recommended for recurrent MDD (≥3 episodes).",
      "Screen for bipolar disorder before initiating antidepressant monotherapy; antidepressant monotherapy in bipolar disorder can precipitate mania."
    ],
    firstLine: [
      "SSRIs: sertraline 50–200 mg/day (most studied; start 25–50 mg, increase by 25–50 mg every 2 weeks), escitalopram 10–20 mg/day (fewest drug interactions, best tolerated), fluoxetine 20–60 mg/day (long half-life, useful if adherence is a concern).",
      "SNRIs: venlafaxine XR 75–225 mg/day (also effective for anxiety and neuropathic pain), duloxetine 60–120 mg/day (preferred if comorbid chronic pain or diabetic neuropathy)."
    ],
    secondLine: [
      "Bupropion XL 150–450 mg/day: NDRI; no sexual dysfunction or weight gain; preferred if fatigue, hypersomnia, or smoking cessation is also a goal; avoid if seizure disorder or eating disorder history.",
      "Mirtazapine 15–45 mg at bedtime: NaSSA; promotes sleep (histamine antagonism); increases appetite and weight—useful in elderly or underweight depressed patients with insomnia.",
      "Augmentation strategies: lithium 150–300 mg twice daily (check levels, renal function), atypical antipsychotics (aripiprazole 2–15 mg/day, quetiapine 50–300 mg/day, brexpiprazole 1–3 mg/day)."
    ],
    thirdLine: [
      "TCAs: amitriptyline 75–200 mg/day or nortriptyline 25–150 mg/day—reserve for treatment-resistant cases; lethal in overdose (avoid in suicidal patients); significant anticholinergic and cardiac side effects.",
      "MAOIs: phenelzine 45–90 mg/day—requires strict tyramine-free diet; significant drug interactions; reserved for atypical depression or treatment-resistant cases managed by psychiatry.",
      "Esketamine (Spravato) 56–84 mg intranasal twice weekly for 4 weeks: FDA-approved for treatment-resistant MDD; must be administered in certified healthcare setting with 2-hour monitoring."
    ],
    nonPharmacologic: [
      "Cognitive Behavioral Therapy (CBT): structured, evidence-based; 12–20 sessions; addresses maladaptive thought patterns; as effective as medication for mild-to-moderate MDD and prevents relapse.",
      "Exercise: 150 minutes/week of moderate aerobic exercise has antidepressant effects comparable to medication in mild-to-moderate MDD; improves sleep and energy.",
      "Sleep hygiene optimization: treat comorbid insomnia; maintain consistent sleep-wake schedule; limit screens before bed; insomnia perpetuates and worsens depression.",
      "Social support and activation: behavioral activation therapy (increasing engagement in valued activities); address social isolation; peer support groups."
    ],
    whenToRefer: [
      "Psychiatry: diagnostic uncertainty (rule out bipolar, psychotic features, personality disorder), treatment resistance (failed ≥2 adequate antidepressant trials), active suicidal ideation with plan/intent, psychotic depression, or need for ECT.",
      "Emergency/crisis: active suicidal ideation with intent and means, recent self-harm attempt, or inability to ensure safety—immediate psychiatric evaluation or ED referral.",
      "Psychology/therapist: refer for CBT or IPT concurrently with pharmacotherapy for moderate-to-severe MDD.",
      "Neuropsychiatry: when cognitive symptoms (memory, concentration) disproportionate to mood disorder warrant neurocognitive evaluation."
    ],
    monitoringSchedule: [
      "PHQ-9 at baseline, at 4–6 weeks after initiating treatment, and then monthly until remission (PHQ-9 <5); reassess every 3–6 months in maintenance phase.",
      "Assess for suicidal ideation at every visit using structured inquiry (e.g., Columbia Suicide Severity Rating Scale items).",
      "Review side effects at 1–2 weeks post-initiation: SSRI activation syndrome (anxiety, insomnia, jitteriness), GI effects, and sexual dysfunction.",
      "Weight and metabolic monitoring if on atypical antipsychotic augmentation: fasting glucose, lipids, weight at baseline and every 3 months.",
      "Thyroid function and CBC at baseline to rule out medical causes of depression; recheck TSH if treatment response is suboptimal."
    ],
    patientEducation: [
      "Onset of action: antidepressants take 2–6 weeks to show meaningful improvement; patients should continue taking medication as prescribed even if they feel no benefit initially.",
      "Discontinuation syndrome: abrupt stopping of SSRIs/SNRIs can cause 'FINISH' symptoms (Flu-like illness, Insomnia, Nausea, Imbalance, Sensory disturbances, Hyperarousal); always taper slowly over weeks.",
      "Depression is a medical illness: psychoeducation about the biologic basis of depression reduces stigma and improves treatment adherence.",
      "Safety planning: all patients with depression should have a safety plan that includes crisis line numbers (988 Suicide and Crisis Lifeline), removal or securing of lethal means, and a list of support contacts."
    ]
  },
  {
    id: "fm-guideline-uti",
    rotation: "family-medicine",
    conditionName: "Uncomplicated Urinary Tract Infection",
    guidelineName: "IDSA Clinical Practice Guidelines for Uncomplicated UTI in Women",
    issuingOrganization: "Infectious Diseases Society of America (IDSA)",
    year: 2010,
    keyRecommendations: [
      "Uncomplicated acute cystitis in non-pregnant, premenopausal women can be diagnosed clinically with dysuria, frequency, urgency, and suprapubic pain—urine dipstick or culture is supportive but not required for typical presentations.",
      "Urinalysis findings supporting UTI: positive nitrites (gram-negative bacteria), positive leukocyte esterase, and/or ≥10 WBCs/hpf on microscopy; urine culture gold standard (≥10³ CFU/mL for symptomatic women).",
      "Nitrofurantoin, trimethoprim-sulfamethoxazole, or fosfomycin are preferred first-line agents due to efficacy, low resistance rates, and minimal collateral damage to bowel flora.",
      "Fluoroquinolones should be reserved for complicated UTI or pyelonephritis due to high efficacy (spares for serious infections) and significant collateral damage including C. difficile and resistance development.",
      "Urine culture is recommended for complicated UTI (males, pregnancy, immunocompromised, catheter-associated, anatomic abnormality) and recurrent infections.",
      "Asymptomatic bacteriuria should only be treated in pregnant women and patients undergoing urologic procedures; routine treatment in catheterized or elderly patients is not recommended."
    ],
    firstLine: [
      "Nitrofurantoin monohydrate/macrocrystals (Macrobid) 100 mg twice daily × 5 days—avoid if eGFR <30 mL/min/1.73m² (inadequate urinary drug concentration).",
      "Trimethoprim-sulfamethoxazole (TMP-SMX) DS 160/800 mg twice daily × 3 days—only use if local E. coli resistance rate <20%.",
      "Fosfomycin 3 g oral sachet single dose—effective, convenient, minimal resistance; slightly lower efficacy than nitrofurantoin 5-day course."
    ],
    secondLine: [
      "Pivmecillinam 400 mg twice daily × 3–7 days (not widely available in US).",
      "Beta-lactams (amoxicillin-clavulanate 500/125 mg three times daily × 5–7 days): less effective than first-line agents; use only when other options are not suitable.",
      "Fluoroquinolones (ciprofloxacin 250 mg twice daily × 3 days or levofloxacin 250 mg daily × 3 days): highly effective but should be reserved for complicated UTI or pyelonephritis due to systemic concerns."
    ],
    nonPharmacologic: [
      "Adequate hydration: increased fluid intake (2–3 L/day) promotes bladder flushing and helps clear bacteria, though evidence for cure is limited.",
      "Cranberry products: some evidence that proanthocyanidins in cranberry prevent E. coli adherence to uroepithelium; 36 mg proanthocyanidins daily may reduce recurrence in premenopausal women (not treatment for active infection).",
      "Voiding habits: urinate after sexual intercourse, wipe front to back, and avoid prolonged bladder holding to reduce recurrent UTI risk.",
      "Vaginal estrogen therapy: postmenopausal women with recurrent UTIs—topical estrogen cream or vaginal tablet restores protective lactobacillus flora and reduces recurrence by 50–75%."
    ],
    whenToRefer: [
      "Urology: recurrent UTIs (≥2 in 6 months or ≥3 in 12 months) in males of any age, structural abnormality identified (hydronephrosis, vesicoureteral reflux, urethral stricture), or persistent hematuria after treatment.",
      "Emergency/hospitalization: suspected urosepsis (fever, hypotension, tachycardia, rigors) or complicated pyelonephritis (unable to tolerate oral medications, severe illness, immunocompromised, pregnancy).",
      "Nephrology: recurrent UTIs in CKD patients or suspected renal abscess on imaging.",
      "OB/GYN: UTI in pregnancy (treat asymptomatic bacteriuria; nitrofurantoin avoid at ≥36 weeks—risk of hemolytic anemia; TMP-SMX avoid in first trimester and at term)."
    ],
    monitoringSchedule: [
      "Test of cure (urine culture 5–7 days after treatment): recommended in pregnant women and patients with complicated UTI; not routinely needed for uncomplicated cystitis.",
      "Symptom resolution: most patients improve within 24–48 hours; if no improvement in 48–72 hours, obtain urine culture and susceptibilities to guide therapy.",
      "For recurrent UTI (≥3/year): urine culture at each episode; consider continuous low-dose prophylaxis (nitrofurantoin 50–100 mg nightly or TMP-SMX SS daily) or post-coital prophylaxis.",
      "Annual monitoring if on long-term prophylaxis: CBC, BMP to assess for macrocytic anemia (folate deficiency with TMP-SMX) or pulmonary toxicity (nitrofurantoin)."
    ],
    patientEducation: [
      "Complete the full antibiotic course even if symptoms improve after 1–2 days; stopping early increases the risk of recurrence and resistance.",
      "Urinary analgesic phenazopyridine (AZO) 200 mg three times daily for up to 2 days can relieve burning and urgency but does not treat infection; it turns urine orange and may discolor contact lenses.",
      "Prevention strategies for recurrent UTI: urinate within 15 minutes of sexual intercourse, stay well-hydrated, avoid spermicide-coated condoms (disrupts vaginal flora), and wear breathable cotton underwear.",
      "When to return: fever, back/flank pain, nausea/vomiting, or worsening symptoms despite 48 hours of antibiotics suggest progression to pyelonephritis and require prompt re-evaluation."
    ]
  },
  {
    id: "fm-guideline-cap",
    rotation: "family-medicine",
    conditionName: "Community-Acquired Pneumonia",
    guidelineName: "IDSA/ATS Consensus Guidelines for Community-Acquired Pneumonia in Adults",
    issuingOrganization: "Infectious Diseases Society of America / American Thoracic Society (IDSA/ATS)",
    year: 2019,
    keyRecommendations: [
      "Diagnosis: new pulmonary infiltrate on chest imaging plus ≥2 of: cough, fever/hypothermia, leukocytosis/leukopenia, or purulent sputum; imaging is required to confirm diagnosis.",
      "Stratify severity using PSI (PORT score) or CURB-65 (Confusion, Urea >7 mmol/L, RR ≥30, BP <90/60, age ≥65) to determine outpatient vs. inpatient management; CURB-65 score 0–1 typically safe for outpatient treatment.",
      "All hospitalized non-ICU CAP patients: combination beta-lactam + macrolide OR respiratory fluoroquinolone monotherapy.",
      "ICU-level CAP: anti-pneumococcal beta-lactam (ampicillin-sulbactam or ceftriaxone) + azithromycin OR respiratory fluoroquinolone; add MRSA/Pseudomonas coverage only if specific risk factors present.",
      "Antibiotic duration: 5 days for outpatient CAP if clinically stable (afebrile ≥48 hours, improving symptoms); inpatient non-ICU CAP 5–7 days.",
      "Influenza testing: administer oseltamivir if influenza suspected regardless of duration of symptoms in hospitalized patients; CAP and influenza can coexist."
    ],
    firstLine: [
      "Outpatient CAP, no comorbidities: amoxicillin 1 g three times daily × 5 days (preferred for typical pneumonia), OR azithromycin 500 mg day 1 then 250 mg days 2–5 (if atypical pneumonia suspected).",
      "Outpatient CAP with comorbidities (COPD, diabetes, chronic heart/lung/renal/liver disease, asplenia, or antibiotic use in past 90 days): amoxicillin-clavulanate 875/125 mg twice daily + azithromycin 500 mg/250 mg × 5 days, OR respiratory fluoroquinolone (levofloxacin 750 mg daily × 5 days or moxifloxacin 400 mg daily × 5 days).",
      "Inpatient non-ICU: ceftriaxone 1–2 g IV daily + azithromycin 500 mg IV/PO daily × 5 days."
    ],
    secondLine: [
      "Inpatient non-ICU alternative: levofloxacin 750 mg IV/PO daily × 5 days (monotherapy, if beta-lactam or macrolide allergy or intolerance).",
      "MRSA-suspected CAP (post-influenza necrotizing pneumonia, cavitary lesion, prior MRSA colonization): add vancomycin 15–20 mg/kg IV every 8–12 hours or linezolid 600 mg IV/PO every 12 hours."
    ],
    thirdLine: [
      "Pseudomonas-suspected CAP (structural lung disease, recent hospitalization, repeated antibiotic use): piperacillin-tazobactam 4.5 g IV q6h or cefepime 2 g IV q8h + ciprofloxacin or azithromycin.",
      "Aspiration pneumonia (altered mental status, dysphagia, witnessed aspiration): amoxicillin-clavulanate or ampicillin-sulbactam; anaerobic coverage only if lung abscess or empyema present."
    ],
    nonPharmacologic: [
      "Oxygen supplementation: target SpO2 ≥94% (88–92% in COPD); high-flow nasal oxygen for moderate hypoxia before escalating to NIV or intubation.",
      "Chest physiotherapy and pulmonary hygiene: incentive spirometry, early ambulation, and adequate hydration to facilitate sputum clearance.",
      "Pneumococcal vaccination: PCV15 (then PPSV23 ≥1 year later) or PCV20 alone for adults ≥65 or high-risk patients; reduces risk of invasive pneumococcal disease.",
      "Annual influenza vaccination and COVID-19 vaccination reduce CAP incidence; smoking cessation to reduce recurrence risk."
    ],
    whenToRefer: [
      "Hospitalization: CURB-65 ≥2, PSI Class IV–V, SpO2 <92% on room air, multilobe involvement, or inability to maintain oral intake/medications.",
      "ICU admission: septic shock requiring vasopressors, or need for mechanical ventilation (ARDS criteria).",
      "Pulmonology: failure to improve after 72 hours of appropriate antibiotic therapy—evaluate for parapneumonic effusion, empyema, lung abscess, or atypical pathogens.",
      "Infectious disease: immunocompromised patients, suspected fungal/opportunistic pneumonia, or CAP requiring prolonged therapy."
    ],
    monitoringSchedule: [
      "Inpatient: reassess clinical stability criteria (afebrile ≥48 hours, HR ≤100, RR ≤24, SBP ≥90, SpO2 ≥94% on room air) before transitioning to oral therapy and discharge.",
      "Outpatient: follow-up by phone or in-person at 48–72 hours to assess improvement; if not improving, obtain sputum culture and chest imaging.",
      "Repeat chest X-ray: not routinely recommended at 4–6 weeks unless patient is at risk for malignancy (smoker >50 years, immunocompromised, persistent symptoms) to confirm resolution.",
      "Blood cultures: obtain before antibiotics in hospitalized patients with severe or ICU-level CAP; not required for outpatient CAP."
    ],
    patientEducation: [
      "Complete the full antibiotic course: improvement typically begins within 48–72 hours but recovery from pneumonia (fatigue, cough) can take 4–6 weeks—do not stop antibiotics early.",
      "Return precautions: seek emergency care for worsening shortness of breath, confusion, cyanosis, inability to maintain hydration, or fever unresponsive to antipyretics.",
      "Prevention: pneumococcal and influenza vaccines are the most effective preventive measures; emphasize annual flu shot and appropriate pneumococcal vaccination schedule.",
      "Smoking and lung health: tobacco smoke impairs mucociliary clearance and predisposes to recurrent respiratory infections; smoking cessation counseling at every visit."
    ]
  },
  {
    id: "fm-guideline-osteoporosis",
    rotation: "family-medicine",
    conditionName: "Osteoporosis",
    guidelineName: "NOF Clinician's Guide to Prevention and Treatment of Osteoporosis / USPSTF Screening Recommendations",
    issuingOrganization: "National Osteoporosis Foundation (NOF) / U.S. Preventive Services Task Force (USPSTF)",
    year: 2023,
    keyRecommendations: [
      "USPSTF screening: DEXA scan for all women ≥65 years; screen younger postmenopausal women (<65) whose 10-year fracture risk (FRAX) is ≥9.3% (equivalent to a 65-year-old white woman with no additional risk factors).",
      "Osteoporosis defined by WHO criteria: T-score ≤-2.5 at lumbar spine, femoral neck, or total hip on DEXA; low bone mass (osteopenia) T-score between -1.0 and -2.5.",
      "Treat pharmacologically when: T-score ≤-2.5, prior hip or vertebral fracture, or T-score -1.0 to -2.5 with 10-year FRAX hip fracture risk ≥3% or major osteoporotic fracture risk ≥20%.",
      "All patients should receive adequate calcium (total 1200 mg/day from diet + supplements) and vitamin D (800–1000 IU/day) before and during pharmacotherapy.",
      "Fall prevention is critical: screen for fall risk at every visit in patients ≥65; assess gait, balance, medications (sedatives, antihypertensives), vision, and home environment.",
      "Drug holiday (temporary discontinuation of bisphosphonate) is appropriate for lower-risk patients after 3–5 years of oral or 3 years of IV bisphosphonate to reduce atypical femoral fracture risk."
    ],
    firstLine: [
      "Oral bisphosphonates: alendronate 70 mg once weekly or 10 mg daily (take with full glass of water, remain upright 30 minutes after dose); risedronate 35 mg weekly or 150 mg monthly.",
      "Zoledronic acid 5 mg IV infusion once yearly (preferred for patients unable to tolerate oral bisphosphonates or with GI disease; also used post-hip fracture)."
    ],
    secondLine: [
      "Denosumab (Prolia) 60 mg SC every 6 months: RANK-L inhibitor; highly effective; preferred for CKD (no renal dose adjustment); note: rebound bone loss on discontinuation—must transition to bisphosphonate when stopping.",
      "Raloxifene 60 mg/day: SERM; reduces vertebral fracture risk; not for hip fracture prevention; reduces breast cancer risk; avoid if VTE history or severe vasomotor symptoms."
    ],
    thirdLine: [
      "Teriparatide (Forteo) 20 mcg SC daily or abaloparatide 80 mcg SC daily: anabolic agents (PTHrA); reserved for severe osteoporosis (T-score ≤-3.5 or multiple fractures); limited to 2-year lifetime use.",
      "Romosozumab (Evenity) 210 mg SC monthly × 12 months: sclerostin inhibitor; dual anabolic/antiresorptive; contraindicated if MI or stroke in past year (increased cardiovascular risk); reserved for very high fracture risk."
    ],
    nonPharmacologic: [
      "Calcium and vitamin D: target total calcium intake 1200 mg/day (prefer dietary sources—dairy, fortified foods, leafy greens); supplement only the deficit; vitamin D 800–2000 IU/day targeting serum 25-OH-D ≥30 ng/mL.",
      "Weight-bearing and resistance exercise: 30 minutes of weight-bearing activity (walking, dancing) daily plus resistance training 2–3 times/week to maintain bone density and reduce fall risk.",
      "Fall prevention program: balance training (tai chi), assess and correct home hazards (remove throw rugs, improve lighting), correct vitamin D deficiency, review medications causing orthostatic hypotension or sedation.",
      "Smoking cessation and limit alcohol: smoking reduces bone density; alcohol >2 drinks/day increases fracture risk and impairs balance."
    ],
    whenToRefer: [
      "Endocrinology: secondary osteoporosis (male osteoporosis, premenopausal osteoporosis, T-score <-3.5, fragility fractures despite treatment, suspected hypercalciuria, hyperparathyroidism, or malabsorption).",
      "Orthopedics: acute vertebral compression fracture with severe pain (consider vertebroplasty or kyphoplasty) or hip fracture (urgent surgical evaluation).",
      "Nephrology: CKD-mineral bone disease (CKD stages 3–5)—osteoporosis management differs significantly due to altered mineral metabolism.",
      "Rheumatology: osteoporosis secondary to inflammatory arthritis or long-term corticosteroid use (>7.5 mg prednisone equivalent/day for ≥3 months)."
    ],
    monitoringSchedule: [
      "DEXA scan: repeat 1–2 years after initiating therapy to assess treatment response; if stable or improved, every 2 years; if significant bone loss detected, reassess adherence and secondary causes.",
      "Labs before bisphosphonate initiation: 25-OH vitamin D, serum calcium, phosphorus, and creatinine (ensure adequate vitamin D repletion before starting).",
      "Before zoledronic acid infusion: check creatinine (contraindicated if eGFR <35 mL/min/1.73m²); ensure hydration.",
      "Annual labs on therapy: serum calcium, 25-OH vitamin D, and CTX (C-telopeptide) as a marker of bone turnover to assess bisphosphonate adherence.",
      "Dental exam: before starting bisphosphonate or denosumab, recommend dental evaluation; ongoing dental hygiene to minimize risk of medication-related osteonecrosis of the jaw (MRONJ)."
    ],
    patientEducation: [
      "Bisphosphonate administration: take on an empty stomach first thing in the morning with 8 oz of plain water, remain upright (sitting or standing) for 30–60 minutes, and do not eat or drink anything else for 30 minutes—this prevents esophageal irritation and maximizes absorption.",
      "Calcium and vitamin D importance: explain that medication works best when calcium and vitamin D levels are adequate; dietary calcium is preferable to supplements (calcium carbonate requires stomach acid—take with food; calcium citrate can be taken without food).",
      "Osteoporosis is often silent until fracture: explain that bone density can be lost without symptoms; fractures (especially vertebral) can occur with minimal trauma (bending, lifting) and may cause chronic pain and disability.",
      "Fall awareness: most hip fractures in elderly result from falls; encourage home safety assessment, use of assistive devices if needed, regular eye exams, and avoiding sedating medications."
    ]
  },
  {
    id: "fm-guideline-afib",
    rotation: "family-medicine",
    conditionName: "Atrial Fibrillation",
    guidelineName: "2023 ACC/AHA/ACCP/HRS Guideline for Diagnosis and Management of Atrial Fibrillation",
    issuingOrganization: "American College of Cardiology / American Heart Association / ACCP / HRS",
    year: 2023,
    keyRecommendations: [
      "Stroke risk assessment: CHA₂DS₂-VASc score guides anticoagulation decisions; score ≥2 in men or ≥3 in women warrants anticoagulation; score of 1 (men) or 2 (women) should prompt shared decision-making.",
      "DOACs (apixaban, rivaroxaban, dabigatran, edoxaban) are preferred over warfarin for stroke prevention in non-valvular AF due to superior or equivalent efficacy with lower bleeding risk (especially intracranial hemorrhage).",
      "Warfarin remains preferred for AF with mechanical heart valve or mitral stenosis (moderate-severe); DOACs are contraindicated in these settings.",
      "Rhythm vs. rate control: rhythm control (cardioversion/ablation) preferred for symptomatic AF, younger patients, or those with AF-mediated cardiomyopathy; rate control alone acceptable for asymptomatic or elderly patients.",
      "Rate control targets: resting heart rate <110 bpm is acceptable for asymptomatic patients; more stringent <80 bpm for symptomatic patients or those with AF cardiomyopathy.",
      "Catheter ablation for paroxysmal AF is superior to antiarrhythmic drugs for maintaining sinus rhythm and improving quality of life; consider early ablation for symptomatic paroxysmal or persistent AF."
    ],
    firstLine: [
      "Anticoagulation (non-valvular AF, CHA₂DS₂-VASc ≥2 men/≥3 women): apixaban 5 mg twice daily (2.5 mg twice daily if ≥2 of: age ≥80, weight ≤60 kg, creatinine ≥1.5 mg/dL) or rivaroxaban 20 mg daily with evening meal.",
      "Rate control: beta-blockers (metoprolol succinate 25–200 mg/day or carvedilol 3.125–25 mg twice daily) or non-dihydropyridine CCBs (diltiazem CD 120–360 mg/day or verapamil SR 120–480 mg/day—avoid in HFrEF)."
    ],
    secondLine: [
      "Rhythm control antiarrhythmics: flecainide 50–150 mg twice daily or propafenone 150–300 mg three times daily (only if no structural heart disease); sotalol 80–160 mg twice daily (requires QTc monitoring, renal dose adjustment).",
      "Amiodarone 200 mg/day (maintenance): most effective antiarrhythmic; first-line only if structural heart disease present or other agents fail; significant organ toxicity (thyroid, pulmonary, hepatic) requires regular monitoring.",
      "Digoxin 0.125–0.25 mg/day: adjunctive rate control only; narrow therapeutic window (goal level 0.5–0.9 ng/mL); associated with increased mortality in some studies—use as add-on, not monotherapy."
    ],
    thirdLine: [
      "Catheter ablation (pulmonary vein isolation): preferred for symptomatic paroxysmal AF refractory to or intolerant of ≥1 antiarrhythmic; also preferred as first-line rhythm strategy in experienced centers for paroxysmal AF.",
      "AV node ablation + permanent pacemaker: for rate control failure or intolerance to medications in patients with persistent/long-standing persistent AF who are not ablation candidates.",
      "Left atrial appendage occlusion (Watchman device): alternative to long-term anticoagulation in patients with high bleeding risk and high stroke risk; requires cardiology specialist."
    ],
    nonPharmacologic: [
      "Risk factor modification (AF Risk Factor Management—AFFIRM lifestyle): weight loss (target BMI <27) reduces AF burden and recurrence; treat OSA (CPAP reduces AF recurrence by 50% in sleep apnea patients).",
      "Alcohol reduction: even moderate alcohol consumption (≥1 drink/day) increases AF recurrence; abstinence is recommended for patients with symptomatic AF.",
      "Blood pressure control: hypertension is the most common modifiable risk factor for AF; aggressive BP control reduces AF burden.",
      "Exercise: moderate-intensity exercise (150 min/week) reduces AF risk; however, extreme endurance exercise (marathon, ironman) paradoxically increases AF risk."
    ],
    whenToRefer: [
      "Cardiology: all newly diagnosed AF for initial evaluation and management, AF with hemodynamic instability or rapid ventricular response refractory to rate control, catheter ablation candidacy assessment, or newly identified AF with heart failure.",
      "Emergency: AF with rapid ventricular response causing hemodynamic compromise (hypotension, chest pain, altered mental status, acute HF)—consider urgent cardioversion.",
      "Electrophysiology: symptomatic paroxysmal or persistent AF for ablation evaluation; AF refractory to ≥2 antiarrhythmic drugs.",
      "Hematology/GI: high bleeding risk before initiating anticoagulation—evaluate and treat reversible bleeding risks (GI polyps, anemia)."
    ],
    monitoringSchedule: [
      "CHA₂DS₂-VASc and HAS-BLED scores: recalculate at each annual visit; reassess anticoagulation risk-benefit as patient age and comorbidities change.",
      "Rate control: check resting heart rate at every visit; 24-hour Holter monitor if inadequate rate control suspected or when assessing rhythm control strategy.",
      "DOAC monitoring: renal function (creatinine/eGFR) every 6–12 months (more frequently in CKD); check adherence; no routine drug levels needed.",
      "Warfarin (if used): INR weekly until therapeutic (goal INR 2.0–3.0), then every 2–4 weeks when stable; target time in therapeutic range (TTR) >70%.",
      "Amiodarone monitoring: TFTs, LFTs, and CXR every 6 months; annual ophthalmology exam for amiodarone deposits; PFTs if pulmonary symptoms develop."
    ],
    patientEducation: [
      "Anticoagulation importance: explain that the primary purpose of blood thinners in AF is stroke prevention—AF-related strokes are often more severe and disabling than other strokes; the bleeding risk is real but much lower than stroke risk for most patients.",
      "DOAC adherence: DOACs have very short half-lives (apixaban ~12 hours); missing even one dose significantly reduces protection—use a pill organizer or phone alarm; do not double-dose if a dose is missed.",
      "Palpitation diary: instruct patients to record when they feel palpitations, associated symptoms (dizziness, chest pain, dyspnea), duration, and relieving factors; this helps characterize AF burden and guide therapy.",
      "Lifestyle matters: emphasize that weight loss, alcohol reduction, blood pressure control, and treatment of sleep apnea meaningfully reduce AF frequency and may prevent progression to permanent AF."
    ]
  }
];
