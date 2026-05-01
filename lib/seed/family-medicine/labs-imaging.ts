// @ts-nocheck
import type { LabValue, ImagingFinding } from "@/types";

export const familyMedicineLabValues: LabValue[] = [
  {
    id: "fm-lab-wbc",
    name: "White Blood Cell Count (WBC)",
    abbreviation: "WBC",
    category: "CBC",
    normalRange: { min: 4.5, max: 11.0, unit: "×10³/µL" },
    criticalValues: { low: 2.0, high: 30.0 },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Leukopenia: viral infection (EBV, HIV), bone marrow suppression, autoimmune disease, medications (chemotherapy, carbamazepine, clozapine), aplastic anemia",
      normal: "Normal immune status; does not rule out early or localized infection",
      high: "Leukocytosis: bacterial infection, inflammation, stress response, corticosteroids, leukemia (WBC >30 suggests hematologic malignancy)"
    },
    clinicalContext: "Evaluate with differential (neutrophils, lymphocytes, eosinophils, monocytes, basophils). Left shift (bands >10%) = acute bacterial infection. Eosinophilia >500 suggests allergy, parasite, or eosinophilic disorder.",
    associatedConditions: ["bacterial infection", "viral infection", "leukemia", "medication effect", "autoimmune disease"],
    commonOrders: ["CBC with differential", "CMP"],
    boardPearl: "WBC >30×10³ with left shift = think leukemoid reaction vs. CML. BCR-ABL distinguishes CML."
  },
  {
    id: "fm-lab-hgb",
    name: "Hemoglobin",
    abbreviation: "Hgb",
    category: "CBC",
    normalRange: { min: 12.0, max: 17.5, unit: "g/dL", note: "Women: 12–16; Men: 13.5–17.5" },
    criticalValues: { low: 7.0, high: 20.0 },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Anemia: evaluate MCV to classify. Low MCV (microcytic): IDA, thalassemia, ACD. Normal MCV (normocytic): ACD, hemolysis, acute blood loss, renal disease. High MCV (macrocytic): B12/folate deficiency, hypothyroidism, alcohol, medications.",
      normal: "Adequate oxygen-carrying capacity",
      high: "Polycythemia: dehydration, COPD (secondary), polycythemia vera (JAK2 mutation)"
    },
    clinicalContext: "Pair with MCV, reticulocyte count, iron studies (ferritin, TIBC, serum iron), B12/folate as appropriate. Ferritin <30 = IDA until proven otherwise in premenopausal women.",
    associatedConditions: ["iron deficiency anemia", "anemia of chronic disease", "B12 deficiency", "thalassemia", "polycythemia vera"],
    commonOrders: ["CBC", "reticulocyte count", "iron studies", "B12/folate"],
    boardPearl: "IDA: low Hgb, low MCV, low ferritin, high TIBC. ACD: low Hgb, normal/low MCV, HIGH ferritin, low TIBC."
  },
  {
    id: "fm-lab-mcv",
    name: "Mean Corpuscular Volume",
    abbreviation: "MCV",
    category: "CBC",
    normalRange: { min: 80, max: 100, unit: "fL" },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Microcytic (<80 fL): iron deficiency anemia (most common), thalassemia, anemia of chronic disease (can be normocytic), sideroblastic anemia. Use MENTZER index: MCV/RBC <13 = thalassemia; >13 = IDA",
      normal: "Normocytic (80–100 fL): acute blood loss, hemolysis, aplastic anemia, anemia of chronic disease, renal failure (EPO deficiency)",
      high: "Macrocytic (>100 fL): B12 deficiency, folate deficiency, hypothyroidism, liver disease, alcohol use, medications (methotrexate, hydroxyurea, azathioprine, zidovudine)"
    },
    clinicalContext: "MCV is the first step in classifying anemia. Hypersegmented neutrophils on smear confirm megaloblastic anemia (B12 or folate). Target cells suggest thalassemia or liver disease.",
    associatedConditions: ["iron deficiency anemia", "thalassemia", "B12 deficiency", "folate deficiency", "alcoholic liver disease"],
    commonOrders: ["CBC", "peripheral smear", "iron studies", "B12", "folate", "TSH"],
    boardPearl: "Folate deficiency + high MCV = neural tube defects in pregnancy. All women of childbearing age need daily folate supplementation."
  },
  {
    id: "fm-lab-plt",
    name: "Platelet Count",
    abbreviation: "PLT",
    category: "CBC",
    normalRange: { min: 150, max: 400, unit: "×10³/µL" },
    criticalValues: { low: 50, high: 1000 },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Thrombocytopenia: ITP (antiplatelet antibodies), HIT (heparin-induced), TTP/HUS, DIC, medication-induced (NSAIDs, thiazides, vancomycin), liver disease, hypersplenism, bone marrow failure",
      normal: "Adequate primary hemostasis",
      high: "Thrombocytosis: reactive (infection, iron deficiency, post-splenectomy, inflammation), essential thrombocythemia (JAK2+ in 50%)"
    },
    clinicalContext: "PLT <50,000 = bleeding risk with procedures. PLT <20,000 = spontaneous bleeding risk. HIT occurs 5–10 days after heparin exposure; 4T score helps risk-stratify. In ITP, look for petechiae without other cytopenias.",
    associatedConditions: ["ITP", "HIT", "TTP", "DIC", "cirrhosis", "essential thrombocythemia"],
    commonOrders: ["CBC", "peripheral smear", "PT/INR", "PTT", "fibrinogen"],
    boardPearl: "TTP pentad: thrombocytopenia, microangiopathic hemolytic anemia, neurologic symptoms, renal failure, fever. Treat with plasma exchange."
  },
  {
    id: "fm-lab-sodium",
    name: "Sodium",
    abbreviation: "Na⁺",
    category: "BMP/CMP",
    normalRange: { min: 136, max: 145, unit: "mEq/L" },
    criticalValues: { low: 120, high: 160 },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Hyponatremia (<136): hypovolemic (diarrhea, vomiting, diuretics), euvolemic (SIADH, hypothyroidism, adrenal insufficiency), hypervolemic (CHF, cirrhosis, nephrotic syndrome). Pseudohyponatremia with hyperglycemia: correct Na by adding 1.6 mEq/L per 100 mg/dL glucose >100",
      normal: "Normal serum tonicity",
      high: "Hypernatremia (>145): dehydration, diabetes insipidus (central or nephrogenic), excessive Na intake"
    },
    clinicalContext: "Check serum osmolality and urine sodium first. SIADH: low serum osm + high urine osm + urine Na >40. Correct hyponatremia slowly: no faster than 8–10 mEq/L per 24 hours to prevent osmotic demyelination syndrome.",
    associatedConditions: ["SIADH", "CHF", "cirrhosis", "diabetes insipidus", "Addison's disease"],
    commonOrders: ["BMP", "serum osmolality", "urine Na", "urine osmolality", "TSH", "cortisol"],
    boardPearl: "Correcting hyponatremia too fast causes central pontine myelinolysis (osmotic demyelination). Symptoms: dysarthria, dysphagia, locked-in syndrome."
  },
  {
    id: "fm-lab-potassium",
    name: "Potassium",
    abbreviation: "K⁺",
    category: "BMP/CMP",
    normalRange: { min: 3.5, max: 5.0, unit: "mEq/L" },
    criticalValues: { low: 2.5, high: 6.5 },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Hypokalemia (<3.5): diarrhea, vomiting, loop/thiazide diuretics, hyperaldosteronism, alkalosis, insulin excess, beta-agonists. EKG: U waves, flattened T waves, ST depression, prolonged QU interval",
      normal: "Normal cardiac and neuromuscular function",
      high: "Hyperkalemia (>5.0): renal failure (most common), ACE inhibitors/ARBs, aldosterone deficiency, cell lysis (rhabdomyolysis, hemolysis), metabolic acidosis. EKG: peaked T waves → widened QRS → sine wave → VFib"
    },
    clinicalContext: "Every 0.3 mEq/L drop in K+ = ~100 mEq total body deficit. For hypokalemia with concurrent hypomagnesemia, must replace Mg first or K won't correct. ACE inhibitors + potassium-sparing diuretics can cause dangerous hyperkalemia in CKD.",
    associatedConditions: ["hypertension", "CKD", "CHF", "primary hyperaldosteronism", "diuretic use"],
    commonOrders: ["BMP", "magnesium", "EKG"],
    boardPearl: "In hyperkalemia: Calcium gluconate stabilizes membrane first, then insulin + dextrose shifts K+ into cells, then kayexalate/dialysis removes K+."
  },
  {
    id: "fm-lab-creatinine",
    name: "Creatinine",
    abbreviation: "Cr",
    category: "BMP/CMP",
    normalRange: { min: 0.6, max: 1.2, unit: "mg/dL", note: "Women: 0.5–1.1; Men: 0.7–1.3" },
    criticalValues: { high: 10.0 },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Low muscle mass (elderly, malnutrition); may falsely normalize creatinine despite significant renal impairment",
      normal: "Adequate renal filtration",
      high: "Elevated creatinine: AKI (prerenal: BUN/Cr >20:1; intrinsic renal: BUN/Cr <20:1; postrenal: obstruction), CKD (chronic elevation with small kidneys on US). Creatinine doubles when GFR halves — nonlinear relationship."
    },
    clinicalContext: "Use CKD-EPI equation for eGFR (preferred over Cockcroft-Gault). eGFR <60 for >3 months = CKD. Adjust medication doses (metformin hold <30, contrast caution <45). BUN/Cr ratio: >20:1 = prerenal; <15:1 = intrinsic renal.",
    associatedConditions: ["CKD", "AKI", "diabetes", "hypertension", "rhabdomyolysis"],
    commonOrders: ["BMP", "urine protein/creatinine ratio", "renal ultrasound", "urinalysis"],
    boardPearl: "Metformin is held when eGFR <30 (not <45 — that's just caution). Contrast nephropathy risk increases when eGFR <45."
  },
  {
    id: "fm-lab-glucose",
    name: "Fasting Plasma Glucose",
    abbreviation: "FPG",
    category: "BMP/CMP",
    normalRange: { min: 70, max: 99, unit: "mg/dL" },
    criticalValues: { low: 50, high: 500 },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Hypoglycemia (<70): insulin excess, sulfonylurea use, insulinoma, adrenal insufficiency, liver failure. Whipple triad: symptoms + low glucose + relief with glucose correction",
      normal: "Normoglycemia",
      high: "100–125 mg/dL = impaired fasting glucose (prediabetes). ≥126 mg/dL on two occasions = diabetes mellitus. >600 = hyperosmolar hyperglycemic state (HHS) risk in T2DM. >250 = DKA risk in T1DM."
    },
    clinicalContext: "Must be fasting ≥8 hours. Confirm diabetes with repeat fasting glucose, OGTT (≥200 at 2 hr), HbA1c ≥6.5%, or random glucose ≥200 with symptoms. Prediabetes: FPG 100–125, HbA1c 5.7–6.4%.",
    associatedConditions: ["T2DM", "prediabetes", "metabolic syndrome", "PCOS", "gestational diabetes"],
    commonOrders: ["HbA1c", "fasting lipid panel", "urine microalbumin", "BMP"],
    boardPearl: "ADA screening for T2DM: all adults ≥35 or any adult with BMI ≥25 + one risk factor (family hx, HTN, HLD, PCOS, prior GDM). Rescreen every 3 years if normal."
  },
  {
    id: "fm-lab-hba1c",
    name: "Hemoglobin A1c",
    abbreviation: "HbA1c",
    category: "Diabetes Monitoring",
    normalRange: { min: 0, max: 5.6, unit: "%" },
    rotations: ["family-medicine", "internal-medicine", "pediatrics"],
    interpretation: {
      low: "Falsely low HbA1c: hemolytic anemia, blood transfusion, sickle cell disease (increased RBC turnover shortens RBC lifespan)",
      normal: "Normal: <5.7%; Prediabetes: 5.7–6.4%; Diabetes: ≥6.5%",
      high: "Falsely high HbA1c: iron deficiency anemia, B12 deficiency, splenectomy (decreased RBC turnover). Each 1% above 6.5% represents ~30 mg/dL increase in average glucose. Formula: avg glucose = (28.7 × HbA1c) − 46.7"
    },
    clinicalContext: "Reflects average glucose over past 2–3 months (RBC lifespan). ADA target: <7% for most adults; <8% for elderly/complex; <6.5% for young/newly diagnosed with no CVD risk. Check every 3 months if not at goal, every 6 months if stable.",
    associatedConditions: ["T2DM", "T1DM", "prediabetes", "gestational diabetes"],
    commonOrders: ["fasting glucose", "fasting lipid panel", "urine microalbumin/creatinine ratio", "eGFR"],
    boardPearl: "HbA1c cannot be used for diagnosis in: pregnancy (use OGTT), hemolytic anemia, sickle cell disease, or recent transfusion. Use fasting glucose or OGTT instead."
  },
  {
    id: "fm-lab-tsh",
    name: "Thyroid Stimulating Hormone",
    abbreviation: "TSH",
    category: "Thyroid Function",
    normalRange: { min: 0.4, max: 4.0, unit: "mIU/L" },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Low TSH: hyperthyroidism (Graves, toxic nodule, toxic MNG), subclinical hyperthyroidism (TSH <0.4 with normal fT4/fT3), exogenous thyroid hormone, or pituitary insufficiency (secondary hypothyroidism — rare)",
      normal: "Euthyroid state",
      high: "High TSH: primary hypothyroidism (Hashimoto's most common), subclinical hypothyroidism (TSH 4–10 with normal fT4), amiodarone, lithium, recovery from sick euthyroid syndrome"
    },
    clinicalContext: "TSH is first-line screening for all thyroid disorders. If abnormal, add free T4 (fT4). Add free T3 (fT3) if hyperthyroidism suspected. TSH >10 mIU/L = frank hypothyroidism regardless of fT4. In pregnancy, TSH goal <2.5 mIU/L in first trimester.",
    associatedConditions: ["Hashimoto's thyroiditis", "Graves' disease", "subclinical hypothyroidism", "toxic nodule"],
    commonOrders: ["fT4", "fT3", "thyroid antibodies (TPO Ab, TRAb)", "thyroid ultrasound if nodule"],
    boardPearl: "Amiodarone contains 37% iodine by weight and can cause both hypothyroidism and hyperthyroidism. Check TFTs before starting and every 6 months on therapy."
  },
  {
    id: "fm-lab-lipids",
    name: "Fasting Lipid Panel",
    abbreviation: "LDL/HDL/TG/TC",
    category: "Lipid Metabolism",
    normalRange: { min: 0, max: 200, unit: "mg/dL (total cholesterol)", note: "LDL <100 (optimal), HDL >40M/>50F, TG <150" },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Low LDL: malnutrition, liver failure, abetalipoproteinemia. Low HDL (<40 M / <50 F) = major ASCVD risk factor. Low TG: normal or malabsorption.",
      normal: "LDL 100–129 near-optimal; TC <200 desirable; HDL >60 = protective (negative risk factor)",
      high: "LDL ≥190 = statin therapy regardless of risk score (possible FH). TG >500 = pancreatitis risk (treat with fenofibrate, omega-3, fish oil). TG 200–499 = non-HDL-C becomes treatment target. TC >240 = high."
    },
    clinicalContext: "ACC/AHA guidelines use 10-year ASCVD risk (Pooled Cohort Equations) to guide statin intensity. High-intensity statin (atorvastatin 40–80mg, rosuvastatin 20–40mg): ASCVD ≥7.5% or LDL ≥190 or T2DM 40–75yo. Screen every 5 years if low risk, or annually if on statin therapy.",
    associatedConditions: ["ASCVD", "T2DM", "metabolic syndrome", "familial hypercholesterolemia", "pancreatitis (hypertriglyceridemia)"],
    commonOrders: ["HbA1c", "fasting glucose", "liver function tests (before statin)"],
    boardPearl: "Non-HDL-C = TC - HDL. It includes all atherogenic lipoproteins (LDL + VLDL + IDL + Lp(a)). Non-HDL-C target = LDL target + 30."
  },
  {
    id: "fm-lab-lfts",
    name: "Liver Function Tests",
    abbreviation: "LFTs (AST/ALT/ALP/GGT/Tbili)",
    category: "BMP/CMP",
    normalRange: { min: 0, max: 40, unit: "U/L (ALT/AST)", note: "ALP 44–147, GGT 8–61, Tbili 0.2–1.2 mg/dL" },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Not clinically significant",
      normal: "No hepatocellular or cholestatic injury",
      high: "ALT/AST elevation: hepatocellular (viral hepatitis, NAFLD, alcoholic hepatitis, drug-induced). ALT>AST = viral/NAFLD. AST:ALT >2:1 = alcoholic hepatitis. ALP/GGT elevation without ALT/AST = cholestasis (PBC, PSC, choledocholithiasis, drug-induced). Isolated bili elevation: hemolysis (indirect), Gilbert's syndrome (indirect on fasting/stress), obstruction (direct)."
    },
    clinicalContext: "Confirm ALP is hepatic (not bone) with GGT elevation. Mild ALT elevation (<3× ULN): workup includes hepatitis B (HBsAg, HBcAb), hepatitis C (anti-HCV), iron studies (hemochromatosis), ANA/ASMA (autoimmune hepatitis), alpha-1 antitrypsin. Statin-related AST/ALT elevation >3× ULN = discontinue statin.",
    associatedConditions: ["NAFLD", "alcoholic liver disease", "viral hepatitis", "cholestasis", "drug-induced liver injury"],
    commonOrders: ["hepatitis panel", "iron studies", "ANA", "alpha-1 antitrypsin", "abdominal ultrasound"],
    boardPearl: "Statin monitoring: routine LFTs not recommended unless symptomatic. Monitor if baseline elevation or symptoms of hepatitis. CK for myopathy if muscle symptoms."
  },
  {
    id: "fm-lab-egfr",
    name: "Estimated GFR",
    abbreviation: "eGFR",
    category: "Renal Function",
    normalRange: { min: 90, max: 999, unit: "mL/min/1.73m²", note: ">60 = adequate; <60 × 3 months = CKD" },
    criticalValues: { low: 15 },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "CKD staging: G1 ≥90 (with markers), G2 60–89, G3a 45–59, G3b 30–44, G4 15–29, G5 <15 (kidney failure). Medication adjustments: metformin hold <30; avoid NSAIDs <60; dose-adjust renally-cleared drugs; avoid gadolinium if <30.",
      normal: ">90 mL/min/1.73m² without albuminuria = no CKD",
      high: "Not clinically significant"
    },
    clinicalContext: "CKD-EPI equation (preferred over MDRD/Cockcroft-Gault). CKD defined by eGFR <60 OR albuminuria (UACR ≥30) for ≥3 months. Always pair with urine albumin/creatinine ratio. Refer to nephrology when eGFR <30 or declining >5 mL/min/yr despite intervention.",
    associatedConditions: ["CKD", "T2DM", "hypertension", "lupus nephritis", "PCKD"],
    commonOrders: ["urine albumin/creatinine ratio", "BMP", "CBC (anemia of CKD)", "PTH", "phosphorus"],
    boardPearl: "KDIGO CKD criteria: abnormal kidney structure OR function (eGFR <60 or UACR ≥30) for >3 months. Must have BOTH staging axes (G stage + A stage) for complete classification."
  },
  {
    id: "fm-lab-uacr",
    name: "Urine Albumin/Creatinine Ratio",
    abbreviation: "UACR",
    category: "Renal Function",
    normalRange: { min: 0, max: 30, unit: "mg/g" },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Not clinically significant",
      normal: "A1: <30 mg/g = normal to mildly increased",
      high: "A2: 30–300 mg/g = moderately increased (microalbuminuria). A3: >300 mg/g = severely increased (macroalbuminuria/overt proteinuria). Heavy proteinuria >3.5g/day = nephrotic range (foamy urine, edema, hypoalbuminemia, hyperlipidemia)."
    },
    clinicalContext: "Annual UACR screening for all T2DM patients starting at diagnosis, and T1DM patients after 5 years. Also screen hypertensive CKD patients. ACE inhibitors and ARBs are renoprotective and reduce UACR in diabetic nephropathy — target UACR <30. SGLT2 inhibitors (empagliflozin, canagliflozin) also provide renoprotection.",
    associatedConditions: ["diabetic nephropathy", "CKD", "hypertension", "nephrotic syndrome"],
    commonOrders: ["eGFR", "BMP", "blood pressure check"],
    boardPearl: "In T2DM with CKD (eGFR 25–75 and UACR ≥200), finerenone (nonsteroidal MRA) reduces CKD progression and CV events — newer guideline addition."
  },
  {
    id: "fm-lab-ferritin",
    name: "Serum Ferritin",
    abbreviation: "Ferritin",
    category: "Iron Studies",
    normalRange: { min: 20, max: 300, unit: "ng/mL", note: "Women: 20–200; Men: 30–300" },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Ferritin <12 ng/mL = iron deficiency (100% specific). Ferritin <30 = probable iron deficiency in premenopausal women and symptomatic patients. Always order iron studies when anemia found.",
      normal: "Adequate iron stores",
      high: "Ferritin >300 (W) or >400 (M): inflammation/infection (acute phase reactant), liver disease, hemochromatosis, malignancy, hemolysis, transfusion. HFE gene testing if ferritin >200 + transferrin saturation >45%."
    },
    clinicalContext: "Ferritin is an acute phase reactant — can be falsely normal or elevated in IDA with concurrent inflammation. If suspected IDA despite normal ferritin, order serum iron + TIBC: low iron + high TIBC = IDA. Transferrin saturation (iron/TIBC × 100): <16% = IDA; >45% = hemochromatosis.",
    associatedConditions: ["iron deficiency anemia", "hereditary hemochromatosis", "anemia of chronic disease", "NAFLD"],
    commonOrders: ["serum iron", "TIBC", "transferrin saturation", "CBC", "peripheral smear"],
    boardPearl: "Treat IDA cause first (find bleeding source in men and postmenopausal women — assume GI malignancy until proven otherwise). Replace with oral iron (ferrous sulfate 325mg TID); check reticulocyte response in 2 weeks."
  },
  {
    id: "fm-lab-bnp",
    name: "B-type Natriuretic Peptide",
    abbreviation: "BNP / NT-proBNP",
    category: "Cardiac Biomarkers",
    normalRange: { min: 0, max: 100, unit: "pg/mL (BNP)", note: "NT-proBNP: <125 if <75yo; <450 if >75yo" },
    rotations: ["family-medicine", "internal-medicine", "emergency-medicine"],
    interpretation: {
      low: "BNP <100 = CHF very unlikely as cause of dyspnea (high negative predictive value). NT-proBNP <125 = CHF unlikely.",
      normal: "Low probability of CHF-related dyspnea",
      high: "BNP >400 = CHF very likely. BNP 100–400 = indeterminate (consider ACS, PE, renal failure, sepsis). NT-proBNP >900 = high probability CHF. Obesity falsely lowers BNP. Renal failure falsely elevates BNP."
    },
    clinicalContext: "Best used in acute dyspnea to differentiate cardiac vs. pulmonary cause. Serial BNP helpful to monitor CHF treatment response. In CKD, NT-proBNP more reliable than BNP. Not for routine screening of asymptomatic patients.",
    associatedConditions: ["CHF", "cardiac tamponade", "acute MI", "PE", "pulmonary hypertension"],
    commonOrders: ["EKG", "CXR", "echocardiogram", "troponin"],
    boardPearl: "BNP is released by ventricular myocytes in response to wall stress/stretch. In HFpEF (preserved EF), BNP is less elevated than HFrEF but still useful."
  },
  {
    id: "fm-lab-psa",
    name: "Prostate-Specific Antigen",
    abbreviation: "PSA",
    category: "Cancer Screening",
    normalRange: { min: 0, max: 4.0, unit: "ng/mL", note: "Age-specific: <50yo <2.5; 50–59 <3.5; 60–69 <4.5; 70–79 <6.5" },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Not clinically significant; 5-alpha reductase inhibitors (finasteride, dutasteride) lower PSA by 50%",
      normal: "Low suspicion for prostate cancer (does not rule out)",
      high: "PSA 4–10 ng/mL: 25% risk prostate cancer. PSA >10: >50% risk prostate cancer. Velocity >0.75 ng/mL/yr = concerning. PSA also elevated in: BPH, prostatitis, post-ejaculation, prostate manipulation/biopsy."
    },
    clinicalContext: "USPSTF: shared decision-making for PSA screening in men aged 55–69 (Grade C). Not recommended for men ≥70 (Grade D). Digital rectal exam (DRE) is complementary. Refer urology for PSA >4 or rising velocity, abnormal DRE. Free PSA % (low free PSA = higher cancer risk).",
    associatedConditions: ["prostate cancer", "BPH", "prostatitis"],
    commonOrders: ["digital rectal exam", "free PSA", "urology referral if elevated"],
    boardPearl: "PSA density = PSA/prostate volume. PSA density >0.15 ng/mL/cc increases suspicion for cancer over BPH. Finasteride halves PSA — multiply by 2 to adjust for drug effect."
  },
  {
    id: "fm-lab-vitd",
    name: "25-Hydroxyvitamin D",
    abbreviation: "25(OH)D",
    category: "Nutritional/Metabolic",
    normalRange: { min: 30, max: 80, unit: "ng/mL" },
    rotations: ["family-medicine", "internal-medicine"],
    interpretation: {
      low: "Deficient: <20 ng/mL (treat with high-dose D3: 50,000 IU weekly × 8–12 weeks). Insufficient: 20–29 ng/mL (1,000–2,000 IU daily supplementation). Risk factors: limited sun exposure, dark skin, obesity, malabsorption (IBD, bariatric surgery), aging.",
      normal: "30–80 ng/mL optimal range",
      high: "Toxicity: >150 ng/mL (rare — requires supplementation overdose). Hypercalcemia, hypercalciuria, renal stones, soft tissue calcification."
    },
    clinicalContext: "Test: 25(OH)D (not 1,25(OH)2D which reflects renal conversion). Risk of deficiency: osteoporosis, elderly, chronic kidney disease (impaired conversion), hyperparathyroidism. Parathyroid hormone (PTH) rises when 25(OH)D <20 — secondary hyperparathyroidism. Daily maintenance: 600–800 IU RDA; 1,000–2,000 IU if deficient risk.",
    associatedConditions: ["osteoporosis", "secondary hyperparathyroidism", "rickets", "osteomalacia", "CKD"],
    commonOrders: ["calcium", "phosphorus", "PTH", "DXA scan"],
    boardPearl: "In CKD, measure 25(OH)D (storage form) and treat deficiency, but do NOT give supplemental calcitriol (1,25-OH vitamin D) unless PTH is elevated — it can cause hypercalcemia."
  },
  {
    id: "fm-lab-ua",
    name: "Urinalysis with Microscopy",
    abbreviation: "UA",
    category: "Urinalysis",
    normalRange: { min: 0, max: 0, unit: "qualitative", note: "Clear, yellow, pH 4.5–8, specific gravity 1.005–1.030; negative dipstick" },
    rotations: ["family-medicine", "internal-medicine", "womens-health"],
    interpretation: {
      low: "Not applicable",
      normal: "Negative dipstick: no glucose, protein, blood, leukocyte esterase, nitrites, ketones, bilirubin",
      high: "LE + nitrites = UTI (90% PPV). LE without nitrites: Chlamydia, TB, interstitial nephritis. Nitrites without LE: low-grade infection. Hematuria: RBC casts = glomerulonephritis (GN). WBC casts = pyelonephritis or interstitial nephritis. Proteinuria + dysmorphic RBCs = GN. Granular 'muddy brown' casts = ATN."
    },
    clinicalContext: "Clean-catch midstream sample preferred. Urine culture required for treatment in UTI (sensitivity/resistance). Asymptomatic bacteriuria: treat ONLY in pregnancy and pre-urologic procedure. In DM patients, glucosuria at 180 mg/dL renal threshold. Ketones in T1DM = DKA risk.",
    associatedConditions: ["UTI", "pyelonephritis", "nephrolithiasis", "glomerulonephritis", "diabetic nephropathy", "DKA"],
    commonOrders: ["urine culture and sensitivity", "urine protein/creatinine ratio", "urine cytology (if hematuria >40yo)"],
    boardPearl: "Dipstick blood tests for heme (RBCs, myoglobin, hemoglobin). Myoglobinuria: positive dipstick blood with no RBCs on microscopy = rhabdomyolysis until proven otherwise. Check CK."
  },
];

export const familyMedicineImagingFindings: ImagingFinding[] = [
  {
    id: "fm-img-cxr-pna",
    name: "Community-Acquired Pneumonia on CXR",
    modality: "X-ray",
    region: "Chest",
    rotation: "family-medicine",
    normalAppearance: "Clear lung fields bilaterally. Sharp costophrenic angles. Cardiothoracic ratio <0.5. No infiltrates, effusions, or masses.",
    abnormalFindings: [
      "Lobar consolidation (homogeneous opacity in anatomic lobe distribution) — classic bacterial pneumonia",
      "Air bronchograms within consolidation (air-filled bronchi visible within airless lung) — confirms airspace disease",
      "Bilateral interstitial infiltrates (reticular or ground-glass) — atypical organisms (Mycoplasma, viral)",
      "Unilateral blunting of costophrenic angle — parapneumonic effusion",
      "Round pneumonia (spherical opacity mimicking mass) — children and Klebsiella"
    ],
    keyFindings: "Lobar or segmental airspace consolidation with or without air bronchograms",
    clinicalCorrelation: "Diagnose CAP clinically (symptoms + exam) and confirm with CXR. Initiate antibiotics before CXR if severely ill. Repeat CXR in 4–6 weeks to confirm clearance (rule out underlying malignancy in smokers >50yo). PORT/PSI score guides admission vs. outpatient.",
    differentialConsiderations: ["Atelectasis (volume loss, tracheal deviation toward opacity)", "Pulmonary edema (bilateral, perihilar, Kerley B lines)", "Pulmonary infarction (Hampton's hump — wedge-shaped pleural-based opacity)", "Lung cancer (no fever, persists on repeat CXR)"],
    boardPearl: "Klebsiella pneumonia: right upper lobe consolidation with bulging fissure (expansion of lobe) in alcoholics or nursing home patients. Treat with ceftriaxone/fluoroquinolone."
  },
  {
    id: "fm-img-cxr-chf",
    name: "Congestive Heart Failure on CXR",
    modality: "X-ray",
    region: "Chest",
    rotation: "family-medicine",
    normalAppearance: "Cardiothoracic ratio <0.5. Clear pulmonary vasculature. No Kerley lines. No pleural effusions.",
    abnormalFindings: [
      "Cardiomegaly (cardiothoracic ratio >0.5 on PA view)",
      "Cephalization of pulmonary vasculature (upper lobe vessels larger than lower — PCWP 12–18 mmHg)",
      "Kerley B lines (horizontal lines at lung periphery/bases — PCWP 18–25 mmHg) = interstitial edema",
      "Bat-wing or butterfly pulmonary edema (bilateral perihilar alveolar opacities — PCWP >25 mmHg)",
      "Bilateral pleural effusions (blunting of costophrenic angles — right often larger)",
      "Peribronchial cuffing (thickened bronchial walls from edema)"
    ],
    keyFindings: "Cardiomegaly + cephalization + Kerley B lines + bilateral effusions = CHF constellation",
    clinicalCorrelation: "CXR findings lag clinical status by hours. BNP is faster marker. Echo required for EF assessment (HFrEF vs. HFpEF). Acute decompensation: furosemide IV, oxygen, monitor I&O. Check for precipitating factors: dietary indiscretion, medication non-adherence, infection, ACS, arrhythmia.",
    differentialConsiderations: ["Bilateral pneumonia (fever, consolidation, no cardiomegaly)", "ARDS (diffuse alveolar damage, no cardiomegaly, PCWP normal)", "Pleural effusion from other cause (malignancy, cirrhosis)"],
    boardPearl: "ABC'S of CHF on CXR: Alveolar edema, Kerley B lines, Cardiomegaly, pleural effuSionS (bilateral). PCWP thresholds correlate with radiographic stages."
  },
  {
    id: "fm-img-cxr-copd",
    name: "COPD/Hyperinflation on CXR",
    modality: "X-ray",
    region: "Chest",
    rotation: "family-medicine",
    normalAppearance: "5–6 anterior ribs visible above diaphragm. Domed diaphragm. Normal AP diameter.",
    abnormalFindings: [
      "Hyperinflation: >6 anterior ribs above diaphragm, flattened hemidiaphragms",
      "Increased AP diameter (barrel chest on lateral view: AP > transverse diameter)",
      "Hyperlucent lung fields (increased air per unit volume)",
      "Prominent hila (pulmonary artery enlargement from pulmonary HTN)",
      "Bullae (focal avascular hyperlucencies) in emphysema",
      "Narrow mediastinum and elongated cardiac silhouette"
    ],
    keyFindings: "Flattened diaphragms + hyperinflation + bullae = emphysema pattern",
    clinicalCorrelation: "CXR poorly sensitive for COPD — use spirometry (FEV1/FVC <0.70 post-bronchodilator). CXR mainly to exclude pneumonia, pneumothorax, or malignancy during exacerbation. In exacerbation: look for infiltrate (pneumonia trigger), pneumothorax (increased dyspnea), new mass.",
    differentialConsiderations: ["Asthma (can show hyperinflation during exacerbation, resolves after)","Alpha-1 antitrypsin deficiency (lower lobe-predominant emphysema in young patient)", "Lymphangioleiomyomatosis (young women, cystic lung disease)"],
    boardPearl: "Pneumothorax in COPD: hyperlucent without lung markings + visceral pleural line. Treatment: if large (>2 cm) or symptomatic = chest tube. Small, stable = observation with O2."
  },
  {
    id: "fm-img-cxr-effusion",
    name: "Pleural Effusion on CXR",
    modality: "X-ray",
    region: "Chest",
    rotation: "family-medicine",
    normalAppearance: "Sharp costophrenic angles bilaterally on PA and lateral views.",
    abnormalFindings: [
      "Blunting of lateral costophrenic angle on PA view (>200–250 mL needed to detect)",
      "Blunting of posterior costophrenic angle on lateral view (>50–75 mL to detect)",
      "Meniscus sign (concave upper border of effusion)",
      "Opacification of hemithorax with mediastinal shift away from effusion (massive effusion)",
      "Fluid in minor fissure (pseudotumor sign = loculated effusion)",
      "Subpulmonic effusion (elevated-appearing hemidiaphragm with lateral peaking)"
    ],
    keyFindings: "Blunting of costophrenic angle on upright CXR; confirm with lateral decubitus view (>1 cm = tappable)",
    clinicalCorrelation: "Characterize as transudate vs. exudate with Light's criteria (requires thoracentesis): exudate if pleural/serum protein >0.5, LDH ratio >0.6, or pleural LDH >2/3 upper limit serum LDH. Transudates: CHF, cirrhosis, nephrotic syndrome. Exudates: pneumonia, malignancy, PE, TB, pancreatitis.",
    differentialConsiderations: ["Hemothorax (trauma, post-procedure)", "Chylothorax (milky fluid, high triglycerides)", "Empyema (pH <7.2, glucose <60, positive culture → chest tube)"],
    boardPearl: "Light's criteria: if ANY criterion met = exudate. Sensitivity 98% but specificity 77%. If transudate suspected but meets exudate criteria, check serum-pleural albumin gradient: <1.2 g/dL favors exudate."
  },
  {
    id: "fm-img-xr-osteoporosis",
    name: "Vertebral Compression Fracture",
    modality: "X-ray",
    region: "Spine (Thoracic/Lumbar)",
    rotation: "family-medicine",
    normalAppearance: "Vertebral body height uniform anteriorly and posteriorly. Normal rectangular appearance on lateral view.",
    abnormalFindings: [
      "Anterior wedge deformity (anterior height <80% posterior height) — most common type, affects T11–L2",
      "Biconcave deformity (superior and inferior endplate fractures, middle height reduced)",
      "Crush/complete deformity (all dimensions reduced)",
      "Step-off deformity or retropulsion of bone fragments (suggests instability — urgent MRI)",
      "Multiple fractures at different levels (osteoporotic vs. pathologic — seek underlying malignancy)"
    ],
    keyFindings: "Loss of vertebral body height with cortical fracture lines on lateral spine X-ray",
    clinicalCorrelation: "Two-thirds are asymptomatic — found incidentally. Acute fracture: acute-onset back pain, height loss, kyphosis. DXA scan to confirm osteoporosis. Labs: CBC, CMP, calcium, ALP, 25(OH)D, PTH, SPEP (to rule out myeloma), TSH. Treat with: fall prevention, physical therapy, bisphosphonates (alendronate or zoledronic acid), calcium + vitamin D.",
    differentialConsiderations: ["Pathologic fracture (malignancy — lytic lesion, abnormal pedicles, known cancer hx)", "Acute traumatic fracture (higher energy mechanism)", "Schmorl nodes (disk herniation into vertebral body — usually incidental, not painful)"],
    boardPearl: "Vertebroplasty/kyphoplasty: consider for severe refractory pain in acute compression fractures not responding to conservative management. Not recommended routinely — RCTs show no benefit over sham procedure for chronic pain."
  },
  {
    id: "fm-img-xr-oa-knee",
    name: "Osteoarthritis of the Knee",
    modality: "X-ray",
    region: "Knee",
    rotation: "family-medicine",
    normalAppearance: "Preserved medial and lateral joint space (>3 mm). Smooth articular surfaces. No osteophytes. No subchondral sclerosis.",
    abnormalFindings: [
      "Joint space narrowing (medial compartment most common — varus deformity)",
      "Osteophytes (bone spurs at joint margins)",
      "Subchondral sclerosis (increased density of bone adjacent to cartilage)",
      "Subchondral cysts (lucent areas in adjacent bone)",
      "Varus deformity on weight-bearing AP view (bow-legged appearance)"
    ],
    keyFindings: "LOSS: Loss of joint space, Osteophytes, Subchondral Sclerosis, Subchondral cysts",
    clinicalCorrelation: "Weight-bearing AP, lateral, and patellar (sunrise) views required. KL grading: 0 = normal; I = possible; II = definite osteophytes, possible JSN; III = definite JSN, multiple osteophytes, sclerosis; IV = severe JSN, large osteophytes, deformity. Radiographic severity does not always correlate with symptoms. Treat: exercise, weight loss, NSAIDs, intra-articular corticosteroids; TKR when refractory.",
    differentialConsiderations: ["RA (bilateral, symmetric, periarticular osteopenia, MCP/PIP involvement)", "Septic arthritis (joint effusion, fever, elevated WBC — aspirate immediately)", "Gout (soft tissue tophi, punched-out erosions with overhanging edges, normal joint space initially)"],
    boardPearl: "Kellgren-Lawrence Grade III–IV = severe OA, likely candidate for TKR. Opioids are NOT first-line for OA pain. Duloxetine (SNRI) is an FDA-approved option for chronic musculoskeletal pain."
  },
  {
    id: "fm-img-ekg-afib",
    name: "Atrial Fibrillation on EKG",
    modality: "EKG",
    region: "Cardiac",
    rotation: "family-medicine",
    normalAppearance: "Regular RR intervals. Distinct P waves before each QRS. Normal PR interval 120–200ms. QRS <120ms.",
    abnormalFindings: [
      "Irregularly irregular RR intervals (no two R-R intervals equal)",
      "Absent distinct P waves (replaced by fibrillatory baseline — irregular oscillations at 350–600 bpm)",
      "Variable ventricular rate (typically 110–160 bpm if uncontrolled)",
      "Narrow QRS (unless aberrant conduction or pre-existing bundle branch block)",
      "No discernible P-R interval relationship"
    ],
    keyFindings: "Irregularly irregular rhythm + absent P waves = pathognomonic of atrial fibrillation",
    clinicalCorrelation: "Classify: paroxysmal (<7 days, self-terminating), persistent (>7 days), long-standing persistent (>12 months), permanent. Rate control (beta-blocker or CCB) vs. rhythm control (cardioversion, antiarrhythmics, ablation). Anticoagulation: CHA₂DS₂-VASc ≥2 (male) or ≥3 (female) = anticoagulate (DOAC preferred). CHADS₂ VASc: CHF, HTN, Age ≥75 (×2), DM, Stroke/TIA (×2), Vascular disease, Age 65–74, Sex (female).",
    differentialConsiderations: ["Atrial flutter (sawtooth P waves at 300 bpm, regular 2:1 block giving 150 bpm ventricular rate)", "MAT (multifocal atrial tachycardia) (≥3 different P wave morphologies, irregular — common in COPD)", "Frequent PACs (irregular but P waves visible before ectopic beats)"],
    boardPearl: "New-onset A-fib <48 hours: can cardiovert without prior anticoagulation (low clot risk). >48 hours or unknown: need TEE to rule out LAA thrombus OR 3+ weeks of anticoagulation before cardioversion, then 4+ weeks after."
  },
  {
    id: "fm-img-ekg-lvh",
    name: "Left Ventricular Hypertrophy on EKG",
    modality: "EKG",
    region: "Cardiac",
    rotation: "family-medicine",
    normalAppearance: "Normal QRS amplitudes. No ST or T-wave changes. Normal axis.",
    abnormalFindings: [
      "Sokolow-Lyon criteria: S in V1 + R in V5 or V6 ≥35mm",
      "Cornell criteria: R in aVL + S in V3 >28mm (men) or >20mm (women)",
      "Left axis deviation (QRS axis −30° to −90°)",
      "Widened QRS (may approach 120ms in severe LVH)",
      "LV strain pattern: ST depression + T-wave inversion in lateral leads (I, aVL, V5–V6)",
      "Left atrial abnormality (broad notched P wave in II, biphasic P in V1)"
    ],
    keyFindings: "Increased QRS voltage in lateral/precordial leads + left axis deviation + strain pattern",
    clinicalCorrelation: "EKG has low sensitivity (50%) but high specificity for LVH. Echocardiogram is gold standard for LV mass measurement. LVH is a hypertensive end-organ damage marker — intensify BP treatment goal (<130/80). Causes: uncontrolled HTN (most common), aortic stenosis, HCM, coarctation. Regress LVH with: ACE inhibitors, ARBs (most effective), CCBs; beta-blockers less effective.",
    differentialConsiderations: ["LBBB (QRS >120ms, broad notched R in I/V5/V6, rS in V1, secondary ST-T changes)", "HCM (asymmetric septal hypertrophy on echo, LVH pattern + deep septal Q waves in lateral leads)"],
    boardPearl: "LVH + strain pattern on EKG + asymmetric IVS thickening on echo + family history of sudden cardiac death in young person = HCM. Avoid vigorous exercise; risk-stratify with EP consultation."
  }
];
