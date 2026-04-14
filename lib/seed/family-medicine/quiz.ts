// @ts-nocheck
import type { QuizQuestion } from "@/types";

export const familyMedicineQuiz: QuizQuestion[] = [
  {
    id: "fm-q-001",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "medium",
    questionText: "A 58-year-old man with hypertension presents for routine follow-up. His BP today is 148/92 mmHg. He is currently on lisinopril 10 mg daily. Labs show serum creatinine 1.1 mg/dL, potassium 4.2 mEq/L, and a urine albumin/creatinine ratio of 45 mg/g. What is the most appropriate next step?",
    options: [
      "Add hydrochlorothiazide 25 mg daily",
      "Increase lisinopril to 20 mg daily",
      "Add amlodipine 5 mg daily",
      "Switch lisinopril to losartan"
    ],
    correctAnswer: 1,
    explanation: "The patient has uncontrolled hypertension on an ACE inhibitor. The presence of microalbuminuria (UACR 30–300 mg/g) indicates early diabetic or hypertensive nephropathy, and ACE inhibitors are renoprotective. Maximizing the dose of lisinopril to 20 mg before adding another agent is the preferred next step — it addresses both blood pressure and renoprotection. Renal function and potassium are currently normal. Adding a thiazide or CCB would be appropriate if the ACE inhibitor is maximized and BP remains uncontrolled.",
    tags: ["hypertension", "CKD", "ACE inhibitor", "microalbuminuria"]
  },
  {
    id: "fm-q-002",
    rotation: "family-medicine",
    category: "Pharmacology",
    difficulty: "hard",
    questionText: "A 72-year-old woman with type 2 diabetes mellitus, CKD stage 3b (eGFR 35), and heart failure with reduced ejection fraction (EF 35%) is being seen for medication reconciliation. Which diabetes medication is CONTRAINDICATED in this patient?",
    options: [
      "Empagliflozin",
      "Linagliptin",
      "Metformin",
      "Insulin glargine"
    ],
    correctAnswer: 2,
    explanation: "Metformin is contraindicated when eGFR <30 mL/min/1.73m² and should be used with caution (dose reduce) when eGFR 30–45. This patient's eGFR is 35, so metformin is not absolutely contraindicated by the 30 threshold, but many guidelines recommend holding or dose-reducing at eGFR <45. However, among the options, metformin is the most restricted — empagliflozin (SGLT2 inhibitor) is approved for CKD and HFrEF (AHA Class I recommendation), linagliptin requires no renal dose adjustment, and insulin has no renal contraindication. The BEST answer here is metformin as the drug with the most significant renal restriction at eGFR 35.",
    tags: ["diabetes", "CKD", "metformin", "SGLT2 inhibitor", "contraindications"]
  },
  {
    id: "fm-q-003",
    rotation: "family-medicine",
    category: "Differentials",
    difficulty: "medium",
    questionText: "A 45-year-old woman presents with 3 weeks of fatigue, cold intolerance, constipation, and weight gain of 8 lbs. She reports her hair has been falling out more than usual. Vital signs: HR 58 bpm, BP 110/70, BMI 27. Which initial test is most appropriate?",
    options: [
      "Free T4 (fT4)",
      "TSH",
      "Anti-TPO antibody",
      "Total T3"
    ],
    correctAnswer: 1,
    explanation: "TSH is the most sensitive first-line test for thyroid disorders. The patient's symptoms (fatigue, cold intolerance, constipation, weight gain, hair loss, bradycardia) are classic for hypothyroidism. TSH will be elevated in primary hypothyroidism (the most common form, usually Hashimoto's thyroiditis). If TSH is abnormal, then add free T4 to assess severity and guide treatment. Anti-TPO antibody would confirm Hashimoto's but does not establish the diagnosis or guide treatment as well as TSH + fT4. Total T3 is less useful for hypothyroidism (T3 is the last to fall).",
    tags: ["hypothyroidism", "TSH", "thyroid", "fatigue workup"]
  },
  {
    id: "fm-q-004",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "easy",
    questionText: "A 67-year-old woman has a DEXA scan showing a T-score of −2.7 at the lumbar spine and −2.4 at the femoral neck. She has no prior fractures. What is the correct diagnosis?",
    options: [
      "Normal bone density",
      "Osteopenia",
      "Osteoporosis",
      "Severe osteoporosis"
    ],
    correctAnswer: 2,
    explanation: "WHO DEXA T-score criteria: Normal ≥ −1.0; Osteopenia −1.0 to −2.4; Osteoporosis ≤ −2.5; Severe osteoporosis ≤ −2.5 with fragility fracture. This patient has a T-score of −2.7 at the lumbar spine, which meets the threshold for osteoporosis (≤ −2.5). Severe osteoporosis requires a fragility fracture in addition to T-score ≤ −2.5, which she does not have. The worst T-score across any measured site determines the diagnosis.",
    tags: ["osteoporosis", "DEXA", "T-score", "bone density"]
  },
  {
    id: "fm-q-005",
    rotation: "family-medicine",
    category: "Pharmacology",
    difficulty: "medium",
    questionText: "A 52-year-old man is started on atorvastatin 40 mg for hyperlipidemia and cardiovascular risk reduction. Two months later, he reports severe muscle pain and weakness in his thighs. Laboratory results show CK 8,500 U/L (normal <200). What is the most appropriate management?",
    options: [
      "Continue atorvastatin and add CoQ10 supplementation",
      "Reduce dose to atorvastatin 10 mg and recheck CK in 4 weeks",
      "Discontinue atorvastatin immediately",
      "Switch to a different statin and recheck CK in 2 weeks"
    ],
    correctAnswer: 2,
    explanation: "This patient has statin-induced myopathy with CK >10× upper limit of normal (>2,000 U/L) — this is rhabdomyolysis risk territory. The correct action is to IMMEDIATELY discontinue the statin. CK >10× ULN with symptoms = discontinue statin, hydrate aggressively, monitor renal function (myoglobinuria can cause AKI). After resolution (CK normalizes and symptoms resolve), a different, lower-intensity statin can be considered. CoQ10 supplementation lacks evidence for statin myopathy treatment. Dose reduction is appropriate only for mild CK elevation (<3–5× ULN) without symptoms.",
    tags: ["statin", "myopathy", "rhabdomyolysis", "CK", "atorvastatin"]
  },
  {
    id: "fm-q-006",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "medium",
    questionText: "A 34-year-old woman presents with 2 days of dysuria, urinary frequency, and suprapubic discomfort. She is afebrile with no CVA tenderness. Urinalysis shows leukocyte esterase positive, nitrites positive, and 15–20 WBCs/hpf. She has no drug allergies. What is the most appropriate treatment?",
    options: [
      "Nitrofurantoin 100 mg BID × 5 days",
      "Ciprofloxacin 250 mg BID × 3 days",
      "Amoxicillin-clavulanate 875 mg BID × 7 days",
      "Trimethoprim-sulfamethoxazole DS BID × 3 days"
    ],
    correctAnswer: 0,
    explanation: "Nitrofurantoin macrocrystals 100 mg BID × 5 days is the first-line treatment for uncomplicated cystitis in women per IDSA guidelines. It has excellent urinary tract concentrations with low resistance rates. TMP-SMX DS × 3 days is also acceptable first-line, but only if local E. coli resistance rates are <20%. Ciprofloxacin (fluoroquinolone) should be reserved for complicated UTIs, upper tract infections, or when other agents are not tolerated — IDSA recommends avoiding fluoroquinolones for simple cystitis to preserve their use for more serious infections. Amoxicillin-clavulanate is not recommended first-line due to high resistance rates.",
    tags: ["UTI", "cystitis", "nitrofurantoin", "antibiotics", "womens-health"]
  },
  {
    id: "fm-q-007",
    rotation: "family-medicine",
    category: "Differentials",
    difficulty: "hard",
    questionText: "A 62-year-old man with a 40-pack-year smoking history presents with new-onset exertional chest pain relieved by rest. EKG at rest is normal. His 10-year ASCVD risk is 22%. What is the most appropriate next diagnostic step?",
    options: [
      "Exercise stress test (EST)",
      "Coronary CT angiography (CCTA)",
      "Nuclear stress test (myocardial perfusion imaging)",
      "Coronary angiography"
    ],
    correctAnswer: 0,
    explanation: "For stable chest pain with intermediate pre-test probability of obstructive CAD and a normal resting EKG, exercise stress testing (EST) is the preferred initial non-invasive test. The patient can exercise (no indication otherwise), and EST provides both functional (ischemic) and prognostic information. If the patient had an abnormal resting EKG (LBBB, LVH with strain, WPW, pacemaker) or was unable to exercise, then pharmacologic nuclear stress testing or stress echocardiography would be indicated. CCTA is increasingly used for low-to-intermediate probability patients. Coronary angiography (invasive) is reserved for high-risk non-invasive testing results or refractory symptoms.",
    tags: ["chest pain", "CAD", "stress test", "ASCVD", "angina"]
  },
  {
    id: "fm-q-008",
    rotation: "family-medicine",
    category: "Pharmacology",
    difficulty: "medium",
    questionText: "A 70-year-old man with BPH, hypertension, and chronic low back pain is taking terazosin, lisinopril, and ibuprofen. His blood pressure is 168/95 mmHg today. Which of his current medications most likely explains his poor blood pressure control?",
    options: [
      "Terazosin",
      "Lisinopril underdosing",
      "Ibuprofen",
      "Dietary sodium intake"
    ],
    correctAnswer: 2,
    explanation: "NSAIDs (ibuprofen) cause sodium and water retention by inhibiting prostaglandin-mediated renal vasodilation. They directly antagonize the effects of ACE inhibitors, ARBs, diuretics, and beta-blockers, reducing their antihypertensive efficacy by 3–5 mmHg on average. In this patient, ibuprofen is the most likely cause of treatment-resistant hypertension. NSAIDs also increase cardiovascular risk and can worsen renal function in elderly patients. Terazosin is actually an alpha-1 blocker with antihypertensive properties. The correct approach is to discontinue ibuprofen and use acetaminophen for pain management instead.",
    tags: ["hypertension", "NSAIDs", "drug interaction", "resistant hypertension", "Beers Criteria"]
  },
  {
    id: "fm-q-009",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "medium",
    questionText: "A 28-year-old woman presents with recurrent episodes of wheezing, shortness of breath, and chest tightness that occur primarily at night and with exercise. She has no symptoms between episodes. Spirometry shows FEV1/FVC of 0.72 (85% predicted) that improves to 0.83 after bronchodilator administration (15% and 300 mL improvement). What is the most likely diagnosis?",
    options: [
      "COPD",
      "Asthma",
      "Vocal cord dysfunction",
      "Exercise-induced laryngospasm"
    ],
    correctAnswer: 1,
    explanation: "This patient has classic asthma: episodic symptoms (nocturnal, exercise-triggered), normal spirometry between episodes, and reversible airflow obstruction on spirometry (≥12% and ≥200 mL improvement in FEV1 post-bronchodilator). COPD is unlikely in a 28-year-old non-smoker with reversible obstruction. Vocal cord dysfunction typically causes inspiratory stridor (not wheeze) and the flow-volume loop shows inspiratory flattening. The bronchodilator response (15% FEV1 improvement + 300 mL absolute) is the hallmark of reversible obstructive disease.",
    tags: ["asthma", "spirometry", "FEV1", "bronchodilator response", "reversible obstruction"]
  },
  {
    id: "fm-q-010",
    rotation: "family-medicine",
    category: "Guidelines",
    difficulty: "easy",
    questionText: "According to USPSTF guidelines, which screening test should be offered to all adults aged 45–75 regardless of symptoms or family history?",
    options: [
      "Colonoscopy",
      "Colorectal cancer screening",
      "Annual CT colonoscopy",
      "Annual flexible sigmoidoscopy"
    ],
    correctAnswer: 1,
    explanation: "The USPSTF recommends colorectal cancer screening for all adults aged 45–75 (Grade B recommendation — updated in 2021 from age 50). The specific modality is not mandated — options include annual FIT or gFOBT, stool DNA test (Cologuard) every 1–3 years, colonoscopy every 10 years, CT colonography every 5 years, or flexible sigmoidoscopy every 5 years. The key concept is that CRC screening is universally recommended at age 45, not a specific test. Colonoscopy is one acceptable test but not the only recommended approach.",
    tags: ["colorectal cancer", "screening", "USPSTF", "colonoscopy", "preventive care"]
  },
  {
    id: "fm-q-011",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "hard",
    questionText: "A 55-year-old woman presents with a 6-month history of fatigue, arthralgias, dry eyes, and dry mouth. Labs show ANA 1:640 (speckled pattern), anti-SSA/Ro antibody positive, anti-SSB/La antibody positive, ESR 68, and mild normocytic anemia. Which complication warrants most urgent monitoring?",
    options: [
      "Interstitial lung disease",
      "Non-Hodgkin lymphoma",
      "Complete heart block in fetal neonates",
      "Secondary Raynaud's phenomenon"
    ],
    correctAnswer: 2,
    explanation: "This patient has Sjögren's syndrome (sicca symptoms + anti-SSA/Ro + anti-SSB/La). Anti-SSA/Ro antibodies cross the placenta and can cause neonatal lupus erythematosus, most critically complete congenital heart block — an irreversible, potentially fatal condition requiring pacemaker implantation. In women of childbearing age with anti-SSA/Ro positivity, this is the most urgent counseling and monitoring concern (fetal echocardiograms starting at 16 weeks if pregnant). Non-Hodgkin's lymphoma risk is ~44× increased in Sjögren's (MALT lymphoma) but is a long-term complication. ILD and Raynaud's are relevant but less immediately urgent.",
    tags: ["Sjogrens", "anti-SSA", "congenital heart block", "autoimmune", "ANA"]
  },
  {
    id: "fm-q-012",
    rotation: "family-medicine",
    category: "Pharmacology",
    difficulty: "hard",
    questionText: "A 68-year-old man with atrial fibrillation, HTN, and CKD stage 3a (eGFR 48) is on warfarin with a therapeutic INR 2–3. His physician wants to transition him to a DOAC. Which agent requires NO dose adjustment in this patient?",
    options: [
      "Dabigatran",
      "Rivaroxaban",
      "Apixaban",
      "Edoxaban"
    ],
    correctAnswer: 2,
    explanation: "Apixaban is primarily hepatically metabolized (only ~27% renally cleared) and requires dose reduction only based on clinical criteria (age ≥80, weight ≤60 kg, creatinine ≥1.5 mg/dL — need 2 of 3 for dose reduction to 2.5 mg BID). This patient is 68 years old, likely weighs >60 kg, and has creatinine probably around 1.1–1.3 — unlikely to meet 2 of 3 criteria. Dabigatran is 80% renally cleared and is contraindicated when CrCl <15 (and dose-adjusted in CKD). Rivaroxaban and edoxaban also have significant renal excretion. Apixaban is generally preferred in CKD patients due to minimal renal clearance.",
    tags: ["atrial fibrillation", "DOAC", "apixaban", "CKD", "anticoagulation"]
  },
  {
    id: "fm-q-013",
    rotation: "family-medicine",
    category: "Differentials",
    difficulty: "medium",
    questionText: "A 42-year-old man presents with episodic severe headaches for the past 3 months, occurring 1–2 times per week. Each episode lasts 4–72 hours and is associated with nausea, photophobia, and phonophobia. He has to stop all activity and lie in a dark room. He has no aura. What is the diagnosis and first-line preventive treatment if attacks occur >4 times/month?",
    options: [
      "Tension-type headache; amitriptyline",
      "Migraine without aura; topiramate or propranolol",
      "Cluster headache; verapamil",
      "Secondary headache; neuroimaging required"
    ],
    correctAnswer: 1,
    explanation: "This patient meets ICHD-3 criteria for migraine without aura: ≥5 attacks lasting 4–72 hours with at least 2 of (unilateral, pulsating, moderate-severe intensity, aggravated by routine activity) AND at least 1 of (nausea/vomiting, photophobia + phonophobia). First-line preventive agents when attacks occur >4 days/month or significantly impair function: propranolol (beta-blocker), topiramate (antiepileptic), amitriptyline/nortriptyline (TCAs), valproate, or newer CGRP antagonists (erenumab, fremanezumab). Tension-type headache is bilateral, pressing/tightening (not pulsating), and lacks nausea/photophobia together. Cluster headaches are unilateral orbital, with autonomic features (lacrimation, ptosis).",
    tags: ["migraine", "headache", "topiramate", "propranolol", "CGRP", "preventive therapy"]
  },
  {
    id: "fm-q-014",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "easy",
    questionText: "A 52-year-old man with BMI 36 presents for annual wellness exam. He has no symptoms. His blood pressure is 134/86 mmHg on three readings today. Fasting glucose is 118 mg/dL. HbA1c is 6.1%. What is the most appropriate intervention?",
    options: [
      "Start metformin 500 mg BID",
      "Start antihypertensive therapy immediately",
      "Intensive lifestyle intervention including weight loss and increased physical activity",
      "Repeat labs in 1 year with no intervention needed"
    ],
    correctAnswer: 2,
    explanation: "This patient has prediabetes (FPG 100–125 mg/dL, HbA1c 5.7–6.4%) and Stage 1 hypertension (SBP 130–139 or DBP 80–89) with no other ASCVD risk factors that would require immediate pharmacotherapy. The first-line intervention for both conditions is intensive lifestyle modification: ≥150 minutes/week of moderate aerobic exercise, Mediterranean or DASH diet, weight loss of ≥5–7% body weight. The DPP (Diabetes Prevention Program) showed lifestyle intervention reduces diabetes progression by 58% vs. 31% for metformin. Metformin may be added if lifestyle alone fails or HbA1c remains elevated after 3–6 months. Antihypertensive drugs are not yet required at SBP 134 without high CVD risk.",
    tags: ["prediabetes", "lifestyle modification", "DPP", "hypertension", "obesity"]
  },
  {
    id: "fm-q-015",
    rotation: "family-medicine",
    category: "Physical Exam",
    difficulty: "medium",
    questionText: "During a knee exam, you apply valgus stress to the knee with the joint in 30° of flexion and feel excessive medial joint opening. The same test in full extension is negative. What ligament is injured?",
    options: [
      "Anterior cruciate ligament (ACL)",
      "Medial collateral ligament (MCL)",
      "Medial meniscus",
      "Posterior cruciate ligament (PCL)"
    ],
    correctAnswer: 1,
    explanation: "Valgus stress test assesses the medial collateral ligament (MCL). At 30° flexion, the posterior capsule is relaxed, isolating the MCL — a positive test (medial joint gap) at 30° flexion = MCL injury. If positive in full extension, it implies MCL + posterior capsule involvement (more severe). The ACL is tested with the Lachman test (anterior translation at 30° flexion) or anterior drawer test (90° flexion). The PCL is tested with posterior drawer or sag sign. Medial meniscus is tested with McMurray test (medial joint-line pain with external rotation and knee extension from 90°) or Thessaly test.",
    tags: ["knee exam", "MCL", "valgus stress", "sports medicine", "orthopedics"]
  },
  {
    id: "fm-q-016",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "medium",
    questionText: "A 77-year-old woman with chronic atrial fibrillation on warfarin presents after a fall at home. She lives alone and her daughter is concerned about safety. Mini-Cog score is 2/5. She takes 11 medications including diphenhydramine for sleep and oxybutynin for urge incontinence. What is the most appropriate next step?",
    options: [
      "Discontinue warfarin due to fall risk",
      "Discontinue diphenhydramine and oxybutynin as they are on the Beers Criteria list",
      "Refer to physical therapy for fall prevention",
      "Order brain MRI to evaluate cognitive impairment"
    ],
    correctAnswer: 1,
    explanation: "Diphenhydramine (antihistamine) and oxybutynin (anticholinergic for incontinence) are both on the AGS Beers Criteria as high-risk medications in older adults. Anticholinergic medications cause cognitive impairment, confusion, urinary retention, constipation, and increase fall risk — particularly dangerous in this patient with already impaired Mini-Cog and recurrent falls. Medication reconciliation and deprescribing Beers Criteria medications is the highest-yield, most immediate intervention. Warfarin should NOT be discontinued for falls alone — the stroke risk from A-fib outweighs the bleeding risk from falls in most patients (studies show a patient would need to fall 295 times/year for falls to outweigh stroke risk from stopping anticoagulation).",
    tags: ["Beers Criteria", "geriatrics", "polypharmacy", "anticholinergics", "falls", "deprescribing"]
  },
  {
    id: "fm-q-017",
    rotation: "family-medicine",
    category: "Pharmacology",
    difficulty: "easy",
    questionText: "A 48-year-old woman with depression is started on sertraline 50 mg daily. She returns 2 weeks later reporting no improvement. She has no suicidal ideation and tolerates the medication well. What is the most appropriate next step?",
    options: [
      "Switch to a different antidepressant class",
      "Add bupropion augmentation",
      "Increase sertraline to 100 mg and continue for a full 4–8 week trial",
      "Refer for electroconvulsive therapy (ECT)"
    ],
    correctAnswer: 2,
    explanation: "SSRIs typically require 4–8 weeks for full antidepressant effect. Two weeks is insufficient to judge treatment response. The correct approach is to continue the current medication and reassess at 4–8 weeks from initiation. If there is a partial response at 8 weeks, augmentation (adding bupropion, lithium, or an atypical antipsychotic like aripiprazole) or a dose increase is appropriate. If there is no response, switching to another agent (different SSRI, SNRI, or bupropion) is appropriate. ECT is reserved for severe, treatment-resistant, or life-threatening depression. Patience with the initial therapeutic trial is critical.",
    tags: ["depression", "sertraline", "SSRI", "antidepressant", "treatment trial"]
  },
  {
    id: "fm-q-018",
    rotation: "family-medicine",
    category: "Differentials",
    difficulty: "hard",
    questionText: "A 55-year-old man presents with 6 weeks of progressive dyspnea on exertion, bilateral ankle edema, and a dry cough. He was diagnosed with hypertension 2 months ago and started on lisinopril 10 mg at that time. Exam shows elevated JVP, bilateral crackles, S3 gallop, and 2+ pitting edema to the knees. BNP is 680 pg/mL. What is the most likely cause of his symptoms?",
    options: [
      "Lisinopril-induced angioedema",
      "New-onset heart failure exacerbated by lisinopril cough",
      "New-onset heart failure — lisinopril should be continued",
      "Pulmonary embolism"
    ],
    correctAnswer: 2,
    explanation: "This patient has new-onset heart failure (HFrEF most likely) based on classic signs: elevated JVP, S3 gallop, crackles, peripheral edema, and markedly elevated BNP (680 pg/mL). Lisinopril is an ACE inhibitor — its cough side effect is a dry cough, but it does NOT cause heart failure. In fact, ACE inhibitors are first-line therapy for HFrEF (reduces mortality). The dyspnea and edema represent the new HF, not a drug side effect. Lisinopril should be continued and optimized; add a beta-blocker (carvedilol, metoprolol succinate), aldosterone antagonist (spironolactone), and diuretic (furosemide for acute symptom relief). Echo should be obtained urgently to confirm EF and etiology.",
    tags: ["heart failure", "HFrEF", "BNP", "ACE inhibitor", "cardiomegaly"]
  },
  {
    id: "fm-q-019",
    rotation: "family-medicine",
    category: "Guidelines",
    difficulty: "medium",
    questionText: "A 58-year-old man with no symptoms is found to have a PSA of 5.8 ng/mL (previously 4.1 ng/mL one year ago). Digital rectal exam is smooth and non-nodular. He has no family history of prostate cancer. What is the next best step?",
    options: [
      "Repeat PSA in 1 year as this is within normal limits for his age",
      "Refer to urology for prostate biopsy",
      "Calculate PSA velocity and refer to urology if velocity >0.75 ng/mL/yr",
      "Prescribe finasteride and recheck PSA in 6 months"
    ],
    correctAnswer: 1,
    explanation: "PSA velocity of 1.7 ng/mL/yr (5.8 − 4.1 = 1.7 over 12 months) significantly exceeds the threshold of 0.75 ng/mL/yr that is considered concerning for prostate cancer. Additionally, the absolute PSA of 5.8 ng/mL is above the age-specific threshold (50–59yo: <3.5; 60–69yo: <4.5) and the standard threshold of 4.0 ng/mL. Both the absolute value AND the velocity are concerning. Referral to urology for further evaluation (which may include free PSA, 4Kscore, MRI, or biopsy) is appropriate. Finasteride halves PSA — using it now would mask ongoing PSA rise and delay cancer diagnosis if present.",
    tags: ["prostate cancer", "PSA", "PSA velocity", "cancer screening", "urology"]
  },
  {
    id: "fm-q-020",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "medium",
    questionText: "A 35-year-old woman presents with 4 months of fatigue, palpitations, heat intolerance, weight loss of 10 lbs despite increased appetite, and diarrhea. Exam shows mild exophthalmos, a diffusely enlarged smooth thyroid gland, and a fine tremor. TSH is <0.01 mIU/L, free T4 is 4.2 ng/dL (elevated). What lab finding would CONFIRM the most likely diagnosis?",
    options: [
      "Anti-TPO antibody elevated",
      "TSH receptor antibody (TRAb/TSI) elevated",
      "Anti-thyroglobulin antibody elevated",
      "Thyroid uptake scan showing hot nodule"
    ],
    correctAnswer: 1,
    explanation: "This presentation is classic Graves' disease: hyperthyroidism in a young woman with exophthalmos (Graves' orbitopathy), diffusely enlarged smooth thyroid, and pretibial myxedema (if present). Graves' disease is caused by TSH receptor antibodies (TRAb, also called thyroid-stimulating immunoglobulins/TSI) that stimulate the TSH receptor, causing continuous thyroid hormone production. TSI/TRAb are the confirmatory antibody for Graves' disease. Anti-TPO antibodies are elevated in both Hashimoto's AND Graves' — non-specific. Anti-thyroglobulin is also non-specific. Radioiodine uptake scan shows diffusely increased uptake in Graves' (vs. decreased uptake in thyroiditis, hot nodule for toxic adenoma).",
    tags: ["Graves disease", "hyperthyroidism", "TSI", "TRAb", "thyroid antibodies", "exophthalmos"]
  },
  {
    id: "fm-q-021",
    rotation: "family-medicine",
    category: "Pharmacology",
    difficulty: "medium",
    questionText: "A 64-year-old woman with osteoporosis is started on alendronate 70 mg once weekly. Which counseling point is MOST critical for medication safety and efficacy?",
    options: [
      "Take with a full glass of milk to improve GI absorption",
      "Take first thing in the morning with a full glass of water and remain upright for 30 minutes",
      "Take with food to minimize esophageal irritation",
      "Avoid taking with calcium supplements on the same day"
    ],
    correctAnswer: 1,
    explanation: "Bisphosphonates (alendronate, risedronate) must be taken on an empty stomach with a full 8 oz glass of water, first thing in the morning, and the patient must remain upright (sitting or standing) for at least 30 minutes afterward. These instructions prevent esophageal irritation, esophagitis, and esophageal ulceration — the most serious GI side effect. Food, milk, juice, coffee, and other medications (including calcium) decrease absorption by >60%. Calcium supplements should be taken at a different time of day (not zero hours before or after), but the critical safety instruction is the upright positioning and fasting requirement.",
    tags: ["bisphosphonates", "alendronate", "osteoporosis", "medication counseling", "esophagitis"]
  },
  {
    id: "fm-q-022",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "hard",
    questionText: "A 72-year-old man with a 45-pack-year smoking history and COPD presents for a wellness visit. He is asymptomatic. Which screening test, if offered today, has the highest potential to reduce his all-cause mortality?",
    options: [
      "Annual low-dose CT chest for lung cancer screening",
      "Colonoscopy for colorectal cancer",
      "Abdominal aortic aneurysm ultrasound screening",
      "PSA for prostate cancer"
    ],
    correctAnswer: 0,
    explanation: "Annual low-dose CT (LDCT) chest for lung cancer screening has the highest potential mortality reduction in a heavy smoker with his profile. USPSTF recommends annual LDCT for adults aged 50–80 with ≥20 pack-year history and currently smoking OR quit within the past 15 years. The NLST trial showed 20% relative reduction in lung cancer mortality and 6.7% relative reduction in all-cause mortality. Lung cancer is the #1 cancer killer. AAA ultrasound (one-time, males 65–75 who ever smoked) is also recommended but with less mortality impact. CRC screening at 72 may offer less benefit (USPSTF: CRC screening individualized 76–85). PSA screening is Grade D at 70+ (USPSTF does not recommend).",
    tags: ["lung cancer", "LDCT", "cancer screening", "smoking", "USPSTF", "NLST"]
  },
  {
    id: "fm-q-023",
    rotation: "family-medicine",
    category: "Differentials",
    difficulty: "medium",
    questionText: "A 68-year-old man presents with right knee pain that has worsened over 6 months. The pain is worse with activity and improves with rest. He describes morning stiffness lasting about 15 minutes. Exam shows bony enlargement and crepitus of the right knee. X-ray shows medial joint space narrowing, osteophytes, and subchondral sclerosis. What is the first-line pharmacologic treatment?",
    options: [
      "Oral naproxen 500 mg BID",
      "Acetaminophen 500–1000 mg TID–QID PRN",
      "Oral prednisone 10 mg daily",
      "Tramadol 50 mg BID"
    ],
    correctAnswer: 1,
    explanation: "For osteoarthritis, acetaminophen is the first-line oral analgesic for mild-to-moderate pain due to its safety profile, particularly in older adults where NSAIDs carry risk of GI bleeding, renal injury, and cardiovascular events. Maximum dose: 3–4 g/day (reduce to 2 g/day in liver disease or heavy alcohol use). If acetaminophen inadequate, topical NSAIDs (diclofenac gel) or oral NSAIDs with GI protection (PPI) are second-line. Oral prednisone is not appropriate for OA (no systemic inflammation). Tramadol carries significant abuse potential and CNS side effects in elderly. Intra-articular corticosteroids are appropriate for acute flares with effusion.",
    tags: ["osteoarthritis", "knee pain", "acetaminophen", "NSAIDs", "pain management"]
  },
  {
    id: "fm-q-024",
    rotation: "family-medicine",
    category: "Conditions",
    difficulty: "easy",
    questionText: "A 29-year-old woman presents 6 weeks postpartum with 3 weeks of depressed mood, anhedonia, poor concentration, hypersomnia, and feeling like she is a 'terrible mother.' She denies suicidal ideation or psychotic symptoms. Baby blues resolved by week 2. What is the diagnosis?",
    options: [
      "Baby blues",
      "Postpartum depression",
      "Postpartum psychosis",
      "Adjustment disorder"
    ],
    correctAnswer: 1,
    explanation: "Postpartum depression (PPD) is defined as a major depressive episode beginning within 4 weeks of delivery (DSM-5) or up to 12 months postpartum in clinical practice. It must be distinguished from 'baby blues' (days 2–5 postpartum, resolves by 2 weeks) and postpartum psychosis (rare, 1–2 per 1000, with hallucinations, delusions, disorganized behavior — psychiatric emergency). This patient's symptoms are: persistent (3 weeks), after baby blues resolved, meeting MDD criteria. Screen with Edinburgh Postnatal Depression Scale (EPDS) — score ≥10 warrants evaluation. Treat with SSRI (sertraline first-line, safe in breastfeeding) ± psychotherapy (CBT). Brexanolone (IV) or zuranolone are FDA-approved specifically for PPD.",
    tags: ["postpartum depression", "PPD", "Edinburgh scale", "sertraline", "womens-health"]
  },
  {
    id: "fm-q-025",
    rotation: "family-medicine",
    category: "Labs",
    difficulty: "medium",
    questionText: "A 44-year-old woman presents with fatigue and pallor. CBC shows: Hgb 9.2 g/dL, MCV 72 fL, WBC 7.2 (normal), PLT 410. Iron studies: serum iron 38 µg/dL (low), TIBC 480 µg/dL (high), ferritin 8 ng/mL (low). She is premenopausal with heavy menstrual periods. What additional workup is most critical before starting iron replacement?",
    options: [
      "Peripheral blood smear",
      "Bone marrow biopsy",
      "Hemoglobin electrophoresis",
      "Colonoscopy"
    ],
    correctAnswer: 3,
    explanation: "While heavy menstrual bleeding (menorrhagia) is the most common cause of IDA in premenopausal women, a colonoscopy (or GI evaluation) must be considered when IDA is severe (Hgb 9.2) because GI blood loss (colorectal cancer, polyps, peptic ulcer disease) must be ruled out, especially in a 44-year-old who is approaching average colonoscopy screening age. All men and postmenopausal women with IDA require GI evaluation. In premenopausal women, gynecologic causes can explain IDA — but with Hgb of 9.2, a concurrent GI source should be excluded particularly if she is approaching 45 and has CRC risk factors. A peripheral smear would show microcytic hypochromic cells (already established by MCV). Hemoglobin electrophoresis differentiates thalassemia but TIBC is high (not consistent with thalassemia, where ferritin is normal/high). Bone marrow biopsy is not indicated.",
    tags: ["iron deficiency anemia", "IDA", "colonoscopy", "GI bleed", "menorrhagia", "workup"]
  }
];
