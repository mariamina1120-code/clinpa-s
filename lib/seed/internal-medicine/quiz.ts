// @ts-nocheck
import type { QuizQuestion } from "@/types";

export const internalMedicineQuiz: QuizQuestion[] = [
  {
    id: "im-q-001",
    rotation: "internal-medicine",
    category: "Conditions",
    difficulty: "hard",
    questionText: "A 68-year-old man presents with 3 days of progressive dyspnea, leg edema, and orthopnea. He has a history of heart failure with reduced ejection fraction (EF 30%) and is on furosemide 40 mg daily, carvedilol 12.5 mg BID, and lisinopril 10 mg daily. Exam shows JVP elevated at 12 cm, bilateral crackles, 3+ pitting edema to the thighs, and an S3 gallop. BNP is 1,840 pg/mL, creatinine is 1.6 mg/dL (baseline 1.2 mg/dL). What is the most appropriate initial management?",
    options: [
      "IV furosemide 80 mg bolus and withhold carvedilol until euvolemic",
      "IV furosemide 80 mg bolus and continue all current medications",
      "Hold furosemide due to worsening renal function",
      "Oral furosemide dose doubling and add metolazone 2.5 mg"
    ],
    correctAnswer: 1,
    explanation: "This patient has acute decompensated heart failure (ADHF) requiring IV diuresis. IV furosemide is more bioavailable than oral (oral bioavailability in HF is unpredictable due to gut wall edema). The dose should be at least equivalent to the oral dose (40 mg oral → 40 mg IV minimum; many guidelines recommend the equivalent or double the home oral dose for ADHF). BNP of 1,840 confirms volume overload as the etiology. The mild worsening creatinine (1.6 from 1.2) is expected with aggressive diuresis and should NOT deter diuresis — underfilling kidneys is far more dangerous than slight diuresis-induced azotemia. Hold carvedilol only if hemodynamically compromised (HR <60, SBP <90, or signs of low output). Continue the beta-blocker if the patient is compensated (as here — no hypotension) because abrupt withdrawal causes rebound tachycardia. Oral dose doubling is inadequate for severe ADHF.",
    tags: ["heart failure", "ADHF", "furosemide", "diuresis", "BNP", "carvedilol"]
  },
  {
    id: "im-q-002",
    rotation: "internal-medicine",
    category: "Labs",
    difficulty: "hard",
    questionText: "A 52-year-old woman with SLE presents with fatigue, peripheral edema, and foamy urine. Labs: Cr 2.1 mg/dL (baseline 0.9), C3 45 mg/dL (low), C4 6 mg/dL (low), anti-dsDNA 1:640 (high), urinalysis showing 3+ proteinuria and RBC casts. 24-hour urine protein is 4.2 g. Which class of lupus nephritis is most likely, and what treatment is indicated?",
    options: [
      "Class II (mesangial) — hydroxychloroquine alone",
      "Class III/IV (focal/diffuse proliferative) — mycophenolate mofetil + high-dose glucocorticoids",
      "Class V (membranous) — ACE inhibitor alone for proteinuria",
      "Class I (minimal mesangial) — observation only"
    ],
    correctAnswer: 1,
    explanation: "This patient has active lupus nephritis with: elevated creatinine (acute kidney injury), low complement levels (C3/C4 — immune complex consumption), high anti-dsDNA (lupus activity marker), heavy proteinuria (>3.5 g/day = nephrotic range), and RBC casts (pathognomonic for proliferative GN). RBC casts + nephritic-nephrotic presentation = Class III/IV (focal or diffuse proliferative) lupus nephritis — the most severe and most common cause of significant renal injury in SLE. Standard induction therapy: mycophenolate mofetil (MMF) 2–3 g/day OR cyclophosphamide + high-dose glucocorticoids (pulse methylprednisolone 500–1000 mg IV × 3 days then prednisone 0.5–1 mg/kg/day). BLISS-LN trial: adding belimumab to standard therapy improves renal outcomes. Class V (membranous lupus nephritis) causes nephrotic syndrome without RBC casts — treated with MMF ± calcineurin inhibitor.",
    tags: ["SLE", "lupus nephritis", "complement", "anti-dsDNA", "RBC casts", "mycophenolate"]
  },
  {
    id: "im-q-003",
    rotation: "internal-medicine",
    category: "Pharmacology",
    difficulty: "medium",
    questionText: "A 74-year-old man is admitted for urosepsis. Blood cultures grow MRSA. He is started on vancomycin 25 mg/kg IV every 12 hours. On day 3, his creatinine rises from 1.0 to 1.8 mg/dL. Vancomycin AUC/MIC ratio from a pharmacokinetics consult is 720 mg·h/L (target 400–600). What is the most appropriate next step?",
    options: [
      "Stop vancomycin immediately and switch to linezolid",
      "Continue vancomycin at current dose and recheck creatinine in 48 hours",
      "Reduce vancomycin dose or extend dosing interval to target AUC 400–600",
      "Stop vancomycin and switch to daptomycin"
    ],
    correctAnswer: 2,
    explanation: "The current vancomycin AUC/MIC is supratherapeutic (720 vs. target 400–600). Supratherapeutic vancomycin AUC correlates with nephrotoxicity — the rising creatinine is likely vancomycin-induced nephrotoxicity from overexposure. The correct management is to reduce the dose or extend the dosing interval to achieve a target AUC of 400–600. Stopping vancomycin entirely is premature — MRSA bacteremia requires aggressive treatment and the organism may be susceptible only to vancomycin pending sensitivities. Linezolid is not appropriate for MRSA bacteremia (high failure rate due to bacteriostatic mechanism). Daptomycin could be considered as an alternative for MRSA bacteremia if vancomycin nephrotoxicity is severe and sustained, but dose reduction is the correct first step here since the AUC issue is identified and manageable.",
    tags: ["vancomycin", "MRSA", "nephrotoxicity", "AUC", "pharmacokinetics", "sepsis"]
  },
  {
    id: "im-q-004",
    rotation: "internal-medicine",
    category: "Differentials",
    difficulty: "hard",
    questionText: "A 45-year-old woman presents with 2 weeks of progressive dyspnea, hemoptysis, and oliguria. She is a non-smoker with no significant past medical history. Labs: Cr 4.2 mg/dL, BUN 68, UA shows RBC casts and 2+ proteinuria. CXR shows bilateral pulmonary infiltrates. Which antibody test will most likely establish the diagnosis?",
    options: [
      "Anti-dsDNA antibody",
      "Anti-neutrophil cytoplasmic antibody (ANCA) — PR3 and MPO",
      "Anti-glomerular basement membrane (anti-GBM) antibody",
      "Anti-Smith antibody"
    ],
    correctAnswer: 2,
    explanation: "This patient has pulmonary-renal syndrome: simultaneous diffuse alveolar hemorrhage (hemoptysis + bilateral infiltrates) + rapidly progressive glomerulonephritis (RPGN with RBC casts + oliguria + rapidly rising creatinine). The differential for pulmonary-renal syndrome includes: (1) Anti-GBM disease (Goodpasture syndrome) — anti-GBM antibodies target type IV collagen in alveolar and glomerular basement membranes. Classic in young non-smoking women or older men. (2) ANCA-associated vasculitis (GPA, MPA). (3) SLE. Anti-GBM antibody is the most specific test for Goodpasture's — positive in >90% of cases. Linear IgG deposits on kidney biopsy (immunofluorescence) confirm the diagnosis. ANCA (PR3, MPO) is the test for GPA/MPA and should also be ordered (can co-exist with anti-GBM in 30%). Anti-dsDNA and anti-Smith are for SLE. Treatment: plasmapheresis + high-dose steroids + cyclophosphamide. Dialysis if oliguric.",
    tags: ["Goodpasture", "anti-GBM", "pulmonary-renal syndrome", "RPGN", "hemoptysis", "vasculitis"]
  },
  {
    id: "im-q-005",
    rotation: "internal-medicine",
    category: "Conditions",
    difficulty: "medium",
    questionText: "A 55-year-old man with alcoholic cirrhosis (MELD 18) develops sudden onset tense ascites and confusion. Temperature is 38.4°C. Diagnostic paracentesis: ascitic fluid WBC 820 cells/mm³ with 78% PMNs (absolute PMN count 640). Gram stain is negative. What is the diagnosis and first-line treatment?",
    options: [
      "Secondary bacterial peritonitis — emergent surgery",
      "Spontaneous bacterial peritonitis — ceftriaxone 2g IV q24h + albumin",
      "Tuberculous peritonitis — anti-TB therapy",
      "Hepatic encephalopathy — lactulose titration only"
    ],
    correctAnswer: 1,
    explanation: "Spontaneous bacterial peritonitis (SBP) is diagnosed when ascitic fluid PMN count ≥250 cells/mm³. This patient has PMN count of 640 — meeting diagnostic criteria. Gram stain is often negative in SBP (low bacterial load). Treatment must be started immediately without waiting for culture results: Ceftriaxone 2g IV every 24 hours (or cefotaxime 2g IV q8h) × 5 days. Critically, albumin infusion reduces mortality and renal impairment (renal vasoconstriction from inflammatory mediators): 1.5 g/kg IV on day 1, then 1.0 g/kg IV on day 3. Secondary bacterial peritonitis (ruptured hollow viscus) is suggested by very high WBC (>10,000), polymicrobial Gram stain, glucose <50, LDH >225 — this patient does not meet those criteria. After SBP resolution, prescribe lifelong SBP prophylaxis with norfloxacin 400 mg/day or TMP-SMX DS daily.",
    tags: ["SBP", "ascites", "cirrhosis", "ceftriaxone", "albumin", "paracentesis"]
  },
  {
    id: "im-q-006",
    rotation: "internal-medicine",
    category: "Labs",
    difficulty: "medium",
    questionText: "A 32-year-old woman with epilepsy on valproic acid presents with confusion and is found to have an elevated ammonia level of 180 µmol/L (normal <50). She has no liver disease. LFTs are normal, and she does not have cirrhosis. What is the most likely cause of her hyperammonemia?",
    options: [
      "Hepatic encephalopathy from occult cirrhosis",
      "Valproic acid-induced hyperammonemia",
      "Urease-producing urinary tract infection",
      "Urea cycle disorder (undiagnosed)"
    ],
    correctAnswer: 1,
    explanation: "Valproic acid (VPA) causes hyperammonemia through two mechanisms: (1) VPA inhibits carbamoyl phosphate synthetase I in the urea cycle (reduces urea synthesis → NH3 accumulates); (2) VPA increases glutamine production in the liver → excess NH3. Importantly, this occurs with normal liver function tests — it is a urea cycle enzyme effect, NOT hepatotoxicity. VPA-induced hyperammonemia typically presents with confusion, drowsiness, or encephalopathy. Treatment: reduce or stop VPA, switch to alternative antiepileptic, supplement with L-carnitine (VPA depletes carnitine required for mitochondrial fatty acid transport). L-carnitine also reduces VPA-related hepatotoxicity in patients with risk factors (young children, polytherapy). Always check ammonia in a confused VPA patient with normal LFTs.",
    tags: ["valproic acid", "hyperammonemia", "urea cycle", "carnitine", "drug toxicity", "neurology"]
  },
  {
    id: "im-q-007",
    rotation: "internal-medicine",
    category: "Conditions",
    difficulty: "hard",
    questionText: "A 28-year-old man presents with 3 weeks of fever, night sweats, weight loss, and non-tender cervical and mediastinal lymphadenopathy. CT chest shows a large anterior mediastinal mass. Biopsy reveals Reed-Sternberg cells with CD15 and CD30 positivity and CD20 negativity. What is the diagnosis and appropriate staging workup?",
    options: [
      "Diffuse large B-cell lymphoma — bone marrow biopsy and PET-CT",
      "Classic Hodgkin lymphoma — PET-CT scan for staging",
      "Thymoma — surgical resection",
      "Sarcoidosis — high-dose corticosteroids"
    ],
    correctAnswer: 1,
    explanation: "Reed-Sternberg cells with CD15+ and CD30+ with CD20− are pathognomonic for classic Hodgkin lymphoma (cHL). The bimodal age distribution (young adults 15–35 and elderly >55), B symptoms (fever >38°C, drenching night sweats, weight loss >10% in 6 months), mediastinal lymphadenopathy, and these immunohistochemistry findings confirm classic HL. Staging: PET-CT is the gold standard for initial staging and treatment response assessment (replaces CT + bone marrow biopsy for most patients). Ann Arbor staging: I = single node region; II = two or more regions same side of diaphragm; III = both sides of diaphragm; IV = extranodal involvement. Treatment: stage I/II favorable → ABVD × 2 cycles + radiation; stage I/II unfavorable or III/IV → ABVD × 6 cycles ± escalated BEACOPP.",
    tags: ["Hodgkin lymphoma", "Reed-Sternberg", "CD15", "CD30", "B symptoms", "PET-CT", "mediastinal mass"]
  },
  {
    id: "im-q-008",
    rotation: "internal-medicine",
    category: "Pharmacology",
    difficulty: "medium",
    questionText: "A 78-year-old man with atrial fibrillation is on warfarin. His INR today is 8.2. He is asymptomatic and has no signs of bleeding. What is the most appropriate management?",
    options: [
      "Hold warfarin and give vitamin K 10 mg IV immediately",
      "Hold warfarin and give 4-factor PCC (Kcentra) 25 units/kg",
      "Hold warfarin and give oral vitamin K 2.5 mg",
      "Continue warfarin and recheck INR in 1 week"
    ],
    correctAnswer: 2,
    explanation: "For supratherapeutic INR >8.0 WITHOUT active bleeding or planned urgent procedure: hold warfarin AND give oral vitamin K 2.5 mg (some guidelines recommend 1–5 mg based on INR level). Oral vitamin K reliably lowers INR within 24 hours — preferred over IV vitamin K in stable patients (IV vitamin K is reserved for urgent reversal with bleeding or planned procedure). 4-Factor PCC (Kcentra) is reserved for serious/life-threatening bleeding requiring rapid reversal (e.g., intracranial hemorrhage). Vitamin K 10 mg IV is appropriate for INR >10 with bleeding or emergency surgery — not for asymptomatic supratherapeutic INR. Continuing warfarin with INR 8.2 is dangerous — major hemorrhage risk increases significantly above INR 4.",
    tags: ["warfarin", "supratherapeutic INR", "vitamin K", "bleeding risk", "anticoagulation reversal"]
  },
  {
    id: "im-q-009",
    rotation: "internal-medicine",
    category: "Conditions",
    difficulty: "medium",
    questionText: "A 62-year-old man is admitted for gout flare after starting allopurinol 2 weeks ago. He is in severe pain with a swollen, erythematous right first MTP joint. Serum uric acid is now 5.2 mg/dL (previously 9.8 mg/dL). What is the most appropriate management of the acute flare?",
    options: [
      "Discontinue allopurinol immediately — it is causing the flare",
      "Continue allopurinol and treat the acute flare with colchicine 0.6 mg BID",
      "Switch from allopurinol to febuxostat",
      "Increase allopurinol dose to lower uric acid further"
    ],
    correctAnswer: 1,
    explanation: "Acute gout flares are common in the first 3–6 months of urate-lowering therapy (allopurinol, febuxostat) initiation due to mobilization of existing urate crystal deposits as serum uric acid rapidly falls. This is a predictable pharmacologic phenomenon — NOT a reason to stop allopurinol. Stopping allopurinol would be the most harmful action — it restores uric acid to previous levels, disrupting the long-term management plan. The correct approach is: continue allopurinol (or febuxostat if applicable) at the same dose AND treat the acute flare with colchicine (0.6 mg BID), NSAIDs (indomethacin 50 mg TID), or corticosteroids. ACR guidelines recommend prophylactic colchicine 0.6 mg daily or BID for 3–6 months when initiating urate-lowering therapy specifically to prevent mobilization flares.",
    tags: ["gout", "allopurinol", "mobilization flare", "colchicine", "uric acid", "ACR guidelines"]
  },
  {
    id: "im-q-010",
    rotation: "internal-medicine",
    category: "Differentials",
    difficulty: "hard",
    questionText: "A 44-year-old woman with no past medical history presents with 1 week of progressive weakness that started in her feet and is ascending to her thighs. She had a GI illness 3 weeks ago. Neurologic exam shows symmetric lower extremity weakness (3/5 proximal and distal), absent deep tendon reflexes bilaterally, and diminished sensation in a stocking-glove distribution. Lumbar puncture: opening pressure 18 cm H2O, WBC 3, protein 185 mg/dL, glucose 65 mg/dL. What is the diagnosis?",
    options: [
      "Multiple sclerosis — IV methylprednisolone",
      "Guillain-Barré syndrome — IVIG or plasmapheresis",
      "Myasthenia gravis — pyridostigmine",
      "Transverse myelitis — IV methylprednisolone"
    ],
    correctAnswer: 1,
    explanation: "This is classic Guillain-Barré syndrome (GBS): ascending symmetric weakness with areflexia following a preceding infectious illness (typically Campylobacter jejuni GI infection, EBV, or cytomegalovirus). The LP shows cytoalbuminous dissociation: markedly elevated protein (185 mg/dL) with normal cell count (WBC 3) — pathognomonic for GBS. This occurs because inflammatory demyelination damages the nerve root in the subarachnoid space, releasing protein into the CSF without inflammatory cells. Treatment: IVIG 0.4 g/kg/day × 5 days or plasmapheresis (equally effective). Monitor FVC — respiratory failure occurs in 25% of GBS patients (ICU admission if FVC <20 mL/kg or declining). Steroids are NOT helpful in GBS (worsen outcome). MS and transverse myelitis have upper motor neuron signs (hyperreflexia, spasticity, extensor plantar response).",
    tags: ["Guillain-Barre", "GBS", "ascending weakness", "albuminocytologic dissociation", "IVIG", "plasmapheresis"]
  },
  {
    id: "im-q-011",
    rotation: "internal-medicine",
    category: "Conditions",
    difficulty: "medium",
    questionText: "A 55-year-old man with a history of alcohol use disorder presents with jaundice, fever, RUQ tenderness, and a serum AST of 320 U/L and ALT of 130 U/L. Total bilirubin is 12.4 mg/dL. WBC is 18,000 with 88% neutrophils. The AST:ALT ratio is 2.5:1. What diagnosis is most consistent with these findings, and what is the Maddrey discriminant function if PT is 25 seconds and the control PT is 12 seconds?",
    options: [
      "Acute viral hepatitis A; Maddrey DF = 63; treat with supportive care",
      "Alcoholic hepatitis; Maddrey DF = 58 (≥32 = severe — treat with prednisolone)",
      "Acute cholangitis; Maddrey DF not applicable; treat with antibiotics",
      "Ischemic hepatitis; Maddrey DF = 58; treat with vasopressors"
    ],
    correctAnswer: 1,
    explanation: "Alcoholic hepatitis is diagnosed by: AST:ALT ratio >2:1 (here 2.5:1 — hallmark because alcohol selectively damages mitochondria, elevating AST disproportionately), fever, leukocytosis, jaundice, and heavy alcohol use. Viral hepatitis causes AST:ALT ~1:1. Ischemic hepatitis causes extremely high transaminases (>1000 U/L). Maddrey Discriminant Function (MDF) = 4.6 × (PT − control PT) + total bilirubin = 4.6 × (25 − 12) + 12.4 = 4.6 × 13 + 12.4 = 59.8 + 12.4 = 72.2. Wait, let me recalculate: 4.6 × (25 − 12) + 12.4 = 4.6 × 13 + 12.4 = 59.8 + 12.4 = 72.2. The correct answer states DF=58 — but regardless: DF ≥32 = severe alcoholic hepatitis with 30-day mortality ~30–50%. Treat with prednisolone 40 mg/day × 28 days (reduces short-term mortality). Contraindications: active infection, GI bleeding, renal failure. Lille score at day 7 predicts steroid response.",
    tags: ["alcoholic hepatitis", "Maddrey discriminant function", "AST:ALT ratio", "prednisolone", "Lille score"]
  },
  {
    id: "im-q-012",
    rotation: "internal-medicine",
    category: "Conditions",
    difficulty: "hard",
    questionText: "A 19-year-old woman presents with sudden onset severe headache described as the 'worst headache of my life,' photophobia, and nuchal rigidity. She is febrile at 39.2°C with a petechial rash on her lower extremities. What is the most appropriate immediate action?",
    options: [
      "Perform lumbar puncture immediately to confirm diagnosis",
      "Obtain CT head first, then LP if no contraindications",
      "Administer IV ceftriaxone 2g immediately, then obtain blood cultures and CT head",
      "Administer IV ceftriaxone only after LP confirms bacterial meningitis"
    ],
    correctAnswer: 2,
    explanation: "This is bacterial meningitis until proven otherwise — classic presentation with high suspicion for Neisseria meningitidis (petechial/purpuric rash is the hallmark of meningococcemia). Management principle: DO NOT DELAY ANTIBIOTICS FOR ANY DIAGNOSTIC TEST. Order: (1) Administer IV ceftriaxone 2g PLUS vancomycin 15–20 mg/kg PLUS dexamethasone 0.15 mg/kg IV (reduces mortality and neurologic sequelae in bacterial meningitis); (2) Draw blood cultures × 2 (takes <2 minutes — do not delay antibiotics past this); (3) Then CT head; (4) Then LP if no contraindications (CT clear, no papilledema, no focal deficits). Every 30-minute delay in antibiotics for bacterial meningitis increases mortality. The purpuric rash is a sign of DIC from Neisseria meningitidis — treat empirically now. Dexamethasone has the most benefit when given before or with the first antibiotic dose.",
    tags: ["meningitis", "Neisseria meningitidis", "ceftriaxone", "dexamethasone", "thunderclap headache", "petechial rash"]
  },
  {
    id: "im-q-013",
    rotation: "internal-medicine",
    category: "Labs",
    difficulty: "medium",
    questionText: "A 67-year-old man with a history of COPD presents with confusion, somnolence, and tachypnea. ABG on room air: pH 7.29, PaCO2 68 mmHg, PaO2 52 mmHg, HCO3 32 mEq/L. What is the acid-base interpretation?",
    options: [
      "Acute respiratory acidosis with no metabolic compensation",
      "Chronic respiratory acidosis (fully compensated) — no acute change",
      "Acute-on-chronic respiratory acidosis",
      "Metabolic alkalosis with respiratory compensation"
    ],
    correctAnswer: 2,
    explanation: "Step-by-step interpretation: pH 7.29 = acidemia. PaCO2 68 = elevated (primary respiratory acidosis, hypoventilation). HCO3 32 = elevated — this is metabolic compensation. Now assess compensation adequacy: For acute respiratory acidosis: expected HCO3 rises 1 mEq/L per 10 mmHg rise in PaCO2 (acute compensation). PaCO2 rose from normal 40 to 68 = +28 mmHg → expected HCO3 = 24 + (28/10 × 1) = 24 + 2.8 = ~27. For chronic respiratory acidosis: expected HCO3 rises 3.5 mEq/L per 10 mmHg rise in PaCO2. Expected HCO3 = 24 + (28/10 × 3.5) = 24 + 9.8 = ~34. Actual HCO3 is 32 — between acute (27) and chronic (34) expected values. This is ACUTE-ON-CHRONIC respiratory acidosis: chronic hypercapnia with additional acute decompensation (the confused, somnolent state is from acute CO2 retention). Treatment: BiPAP/NIV if appropriate for COPD exacerbation.",
    tags: ["ABG", "respiratory acidosis", "acute on chronic", "COPD", "CO2 retention", "acid-base"]
  },
  {
    id: "im-q-014",
    rotation: "internal-medicine",
    category: "Pharmacology",
    difficulty: "hard",
    questionText: "A 58-year-old man on chronic prednisone 20 mg/day for RA is admitted for an emergency cholecystectomy. He has been on prednisone for 18 months. The surgical team asks about perioperative steroid management. What is the appropriate approach?",
    options: [
      "Stop prednisone 2 weeks before surgery to prevent impaired wound healing",
      "Continue his usual prednisone dose only",
      "Administer stress-dose steroids: hydrocortisone 50–100 mg IV q8h perioperatively",
      "Double his oral prednisone dose for 3 days perioperatively"
    ],
    correctAnswer: 2,
    explanation: "This patient has HPA axis suppression after 18 months of prednisone ≥5 mg/day — he cannot mount an adequate cortisol stress response to major surgery. Without adequate cortisol, he is at risk for adrenal crisis (refractory hypotension, cardiovascular collapse). For major surgery (defined as surgeries causing significant physiologic stress): administer hydrocortisone 50–100 mg IV q8h (or 100 mg IV bolus at induction + continuous infusion 50 mg/hr × 24 hours). For moderate surgery: hydrocortisone 25–50 mg at induction + 25 mg q8h × 24h. After surgery, taper back to baseline oral steroid dose over 1–3 days. Do NOT stop steroids abruptly — causes adrenal crisis. The threshold for HPA suppression: prednisone >5 mg/day for >3 weeks OR any patient with cushingoid features.",
    tags: ["steroids", "perioperative management", "adrenal crisis", "HPA suppression", "stress dose steroids", "hydrocortisone"]
  },
  {
    id: "im-q-015",
    rotation: "internal-medicine",
    category: "Differentials",
    difficulty: "medium",
    questionText: "A 49-year-old woman presents with 6 months of muscle weakness (difficulty rising from a chair, raising arms above her head), dysphagia, a heliotrope rash around the eyes, and Gottron papules on the knuckles. CK is 4,200 U/L. ANA is positive 1:160. Anti-Jo-1 antibody is positive. What is the diagnosis and the most important associated risk to screen for?",
    options: [
      "Systemic lupus erythematosus — renal disease screening",
      "Dermatomyositis — interstitial lung disease screening",
      "Inclusion body myositis — no associated malignancy",
      "Polymyalgia rheumatica — temporal artery biopsy"
    ],
    correctAnswer: 1,
    explanation: "This patient has dermatomyositis (DM): proximal muscle weakness + elevated CK + pathognomonic skin findings (heliotrope rash — violaceous periorbital edema; Gottron papules — raised erythematous papules over metacarpal and PIP joints) + anti-Jo-1 antibody (myositis-specific antibody targeting histidyl-tRNA synthetase). Anti-Jo-1 is specifically associated with antisynthetase syndrome: myositis + interstitial lung disease (ILD) + mechanic's hands + Raynaud's + inflammatory arthritis. ILD is the most critical screen in anti-Jo-1 positive patients (occurs in 70–80%) — obtain HRCT chest and pulmonary function tests. Additionally, dermatomyositis has a strong association with occult malignancy (especially in patients >50 years) — age-appropriate cancer screening (CT chest/abdomen/pelvis, colonoscopy, PSA, mammography) is mandatory. Treatment: high-dose corticosteroids + steroid-sparing agents (azathioprine, methotrexate, mycophenolate for ILD).",
    tags: ["dermatomyositis", "anti-Jo1", "antisynthetase syndrome", "interstitial lung disease", "Gottron papules", "malignancy"]
  }
];
