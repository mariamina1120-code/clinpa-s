// @ts-nocheck
import type { Drug } from "@/types";

export const familyMedicinePharmacology: Drug[] = [
  {
    id: "fm-metformin",
    name: "Metformin",
    brandNames: ["Glucophage", "Glumetza", "Fortamet"],
    drugClass: "Biguanide (antidiabetic)",
    rotations: ["family-medicine", "internal-medicine"],
    indications: ["Type 2 diabetes mellitus (first-line)", "Prediabetes (USPSTF grade B)", "Polycystic ovarian syndrome (PCOS, off-label)", "Prevention of T2DM in high-risk patients"],
    mechanismOfAction:
      "Metformin primarily reduces hepatic glucose production by inhibiting mitochondrial complex I, which activates AMP-activated protein kinase (AMPK). This decreases gluconeogenesis and glycogenolysis. It also increases peripheral glucose uptake and utilization in muscle, and reduces intestinal glucose absorption. Unlike sulfonylureas, it does not stimulate insulin secretion and therefore does not cause hypoglycemia as monotherapy.",
    contraindications: {
      absolute: ["eGFR <30 mL/min/1.73m² (risk of lactic acidosis)", "Active or acute hepatic disease", "Active alcoholism", "Metabolic acidosis (including diabetic ketoacidosis)"],
      relative: ["eGFR 30–45 (use with caution, reduce dose)", "IV contrast procedure (hold 48 hours post-contrast if eGFR <60)", "Surgery requiring general anesthesia (hold day of procedure)", "Excessive alcohol use"],
    },
    sideEffects: {
      common: ["GI: nausea, diarrhea, abdominal discomfort (40–60%)", "Metallic taste", "Anorexia", "Vitamin B12 deficiency (long-term use — monitor annually)"],
      serious: ["Lactic acidosis (rare, 0.03 per 1000 patient-years, primarily with renal insufficiency)", "Severe vitamin B12 deficiency causing peripheral neuropathy"],
    },
    interactions: {
      drugs: ["Contrast dye (hold for procedure if eGFR <60)", "Alcohol (increased lactic acidosis risk)", "Carbonic anhydrase inhibitors (topiramate, acetazolamide — increased lactic acidosis risk)", "Cimetidine (increases metformin levels by reducing renal clearance)"],
      foods: ["Alcohol: avoid excessive consumption"],
    },
    monitoring: ["eGFR at baseline, 3–6 months after initiation, then annually", "HbA1c every 3 months until at goal, then every 6 months", "Vitamin B12 annually with long-term use", "LFTs baseline"],
    dosing: {
      adultGeneral: "Start 500 mg with dinner or 850 mg once daily with largest meal. Increase by 500 mg/week as tolerated. Max 2550 mg/day (2000 mg/day for extended-release). Take with meals to reduce GI side effects.",
      renalAdjustment: "eGFR 45–60: continue with caution, monitor closely. eGFR 30–45: consider reducing dose by 50%. eGFR <30: CONTRAINDICATED.",
      hepaticAdjustment: "Avoid in hepatic impairment due to increased lactic acidosis risk.",
      pediatricNote: "FDA-approved for T2DM in children ≥10 years. Dosing: 500 mg BID, max 2000 mg/day.",
    },
    clinicalPearls: [
      "Metformin is the only oral antidiabetic with proven cardiovascular mortality reduction (UKPDS 2000).",
      "GI side effects are dose-dependent and time-limited — titrate slowly and take with food. Extended-release formulation has better GI tolerability.",
      "Metformin does NOT cause hypoglycemia as monotherapy — a major advantage over sulfonylureas.",
    ],
    boardRecallTip: "Metformin = first-line for T2DM, hold for eGFR <30 and contrast dye, causes lactic acidosis in renal failure, monitor B12.",
  },
  {
    id: "fm-lisinopril",
    name: "Lisinopril",
    brandNames: ["Prinivil", "Zestril"],
    drugClass: "Angiotensin-Converting Enzyme Inhibitor (ACE-I)",
    rotations: ["family-medicine", "internal-medicine"],
    indications: ["Hypertension", "Heart failure with reduced ejection fraction (HFrEF)", "Post-myocardial infarction (reduce mortality)", "Diabetic nephropathy (reduce proteinuria, slow CKD progression)", "Chronic kidney disease with proteinuria"],
    mechanismOfAction:
      "Lisinopril competitively inhibits angiotensin-converting enzyme (ACE), which prevents the conversion of angiotensin I to angiotensin II. This reduces angiotensin II-mediated vasoconstriction and aldosterone secretion, resulting in vasodilation, decreased blood pressure, and reduced sodium and water retention. ACE inhibition also prevents bradykinin degradation, which contributes to its antihypertensive effect and side effect of dry cough.",
    contraindications: {
      absolute: ["Pregnancy (all trimesters — causes fetal renal dysgenesis, oligohydramnios, neonatal death; FDA category D/X)", "History of ACE-I induced angioedema", "Bilateral renal artery stenosis", "Concurrent use with aliskiren in patients with diabetes or CKD"],
      relative: ["Hyperkalemia (K+ >5.5 mEq/L)", "Significant renal impairment (monitor creatinine and potassium)", "Aortic stenosis (afterload reduction may precipitate hemodynamic instability)"],
    },
    sideEffects: {
      common: ["Dry, persistent, non-productive cough (10–15% — due to bradykinin accumulation)", "Hypotension (especially first dose, volume-depleted patients)", "Hyperkalemia", "Mild increase in serum creatinine (expected up to 30% increase is acceptable)"],
      serious: ["Angioedema (0.1–0.7% — tongue, lips, larynx; more common in Black patients and tobacco users — STOP immediately)", "Acute kidney injury (in volume depletion or bilateral renal artery stenosis)", "Hyperkalemia (especially with concurrent NSAIDs, K+ sparing diuretics, or CKD)"],
    },
    interactions: {
      drugs: ["NSAIDs (reduce antihypertensive effect, increase AKI risk)", "Potassium-sparing diuretics/K+ supplements (hyperkalemia risk)", "Lithium (ACE-I increases lithium levels)", "Aliskiren (contraindicated in DM/CKD — increased risk of renal impairment, hyperkalemia, hypotension)"],
      foods: ["High-potassium foods (bananas, oranges, potatoes) with concurrent hyperkalemia risk"],
    },
    monitoring: ["Blood pressure at each visit", "Serum creatinine and eGFR 1–2 weeks after initiation and dose changes", "Serum potassium 1–2 weeks after initiation", "Annual BMP for stable patients", "Urine albumin-to-creatinine ratio in diabetic nephropathy"],
    dosing: {
      adultGeneral: "HTN: Start 5–10 mg once daily. Target 10–40 mg/day. HFrEF: Start 2.5–5 mg daily, target 20–40 mg/day.",
      renalAdjustment: "eGFR <30: reduce starting dose (2.5 mg). Dialysis patients: supplemental dose after hemodialysis.",
      hepaticAdjustment: "No dose adjustment needed for hepatic impairment.",
      pediatricNote: "FDA-approved for HTN in children ≥6 years. Dosing 0.07 mg/kg/day (max 5 mg) titrated to effect.",
    },
    clinicalPearls: [
      "ACE-I cough is a CLASS effect — switching to an ARB (losartan, valsartan) eliminates the cough while maintaining renal and cardiovascular benefits.",
      "An expected rise in creatinine of up to 30% after starting an ACE-I is acceptable and reflects reduced intraglomerular pressure (nephroprotective mechanism) — do NOT stop the drug.",
      "ACE inhibitors and ARBs are the preferred antihypertensives in patients with diabetic nephropathy or CKD with proteinuria.",
    ],
    boardRecallTip: "ACE-I = first-line for DM nephropathy; causes dry cough (switch to ARB); NEVER in pregnancy; monitor K+ and creatinine.",
  },
  {
    id: "fm-atorvastatin",
    name: "Atorvastatin",
    brandNames: ["Lipitor"],
    drugClass: "HMG-CoA Reductase Inhibitor (Statin) — High-Intensity",
    rotations: ["family-medicine", "internal-medicine"],
    indications: ["Primary prevention of ASCVD (10-year risk ≥7.5%)", "Secondary prevention of ASCVD (all patients with established CAD, stroke, PAD)", "Familial hypercholesterolemia (LDL ≥190)", "Diabetic patients aged 40–75"],
    mechanismOfAction:
      "Atorvastatin competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis. This reduces intracellular cholesterol, upregulates LDL receptors on hepatocytes, and increases LDL clearance from the bloodstream. High-intensity doses (40–80 mg) reduce LDL by ≥50%. Statins also have pleiotropic anti-inflammatory, antioxidant, and plaque-stabilizing effects beyond cholesterol lowering.",
    contraindications: {
      absolute: ["Active liver disease or unexplained persistent elevation of hepatic transaminases", "Pregnancy and breastfeeding (teratogenic — causes skeletal malformations)", "Concurrent use of strong CYP3A4 inhibitors that significantly increase statin levels"],
      relative: ["Myopathy or prior statin intolerance (start at low dose, consider alternative statin)", "Hypothyroidism (treat thyroid first — increases myopathy risk)", "Excessive alcohol use"],
    },
    sideEffects: {
      common: ["Myalgia (5–10% — muscle aches without CK elevation)", "GI upset", "Headache", "Elevated transaminases (usually transient and mild)"],
      serious: ["Myopathy (CK >10x ULN — stop statin)", "Rhabdomyolysis (rare but life-threatening — myoglobinuria, AKI)", "Statin-associated autoimmune myopathy (anti-HMGCR antibodies — rare)", "Severe hepatotoxicity (very rare)"],
    },
    interactions: {
      drugs: ["CYP3A4 inhibitors: clarithromycin, ketoconazole, HIV protease inhibitors, amiodarone (increase statin levels → myopathy risk)", "Gemfibrozil/fibrates (increased myopathy risk — avoid combination, especially with gemfibrozil)", "Cyclosporine (significantly increases statin exposure)", "Niacin high-dose (increased myopathy risk)"],
      foods: ["Grapefruit juice (inhibits CYP3A4 — increases atorvastatin levels; avoid large quantities)"],
    },
    monitoring: ["Lipid panel 4–12 weeks after initiation to assess response, then annually", "LFTs at baseline; routine monitoring not required if asymptomatic", "CK if patient reports muscle symptoms (myalgia, weakness)", "HbA1c (statins marginally increase T2DM risk — monitor)"],
    dosing: {
      adultGeneral: "High-intensity: 40–80 mg once daily (preferred for secondary prevention, FH, LDL ≥190). Moderate-intensity: 10–20 mg once daily. Always given once daily, any time of day.",
      renalAdjustment: "No dose adjustment required for renal impairment.",
      hepaticAdjustment: "Contraindicated in active liver disease. Use with caution in chronic liver disease — monitor LFTs.",
      pediatricNote: "FDA-approved for HeFH in children ≥10 years. Dose: 10–20 mg/day.",
    },
    clinicalPearls: [
      "The ACC/AHA 2018 guidelines recommend statin intensity based on risk category, NOT a specific LDL target number — though clinical practice often combines both approaches.",
      "Myalgia without CK elevation is common and does NOT require stopping the statin — rule out hypothyroidism, vitamin D deficiency, exercise as causes. If symptomatic myopathy, hold statin and check CK.",
      "Atorvastatin is the only statin with evidence from the CARDS trial specifically in T2DM patients showing primary prevention of cardiovascular events.",
    ],
    boardRecallTip: "Atorvastatin = high-intensity statin; CYP3A4 interaction with grapefruit/macrolides; myopathy = check CK; STOP in pregnancy.",
  },
  {
    id: "fm-levothyroxine",
    name: "Levothyroxine",
    brandNames: ["Synthroid", "Levoxyl", "Tirosint"],
    drugClass: "Thyroid Hormone Replacement (T4)",
    rotations: ["family-medicine", "internal-medicine"],
    indications: ["Hypothyroidism (primary and central)", "TSH suppression in thyroid cancer", "Myxedema coma (IV form)", "Goiter (with hypothyroidism)"],
    mechanismOfAction:
      "Levothyroxine is a synthetic form of thyroxine (T4), the major thyroid hormone secreted by the thyroid gland. T4 is a prohormone that is peripherally converted to the active triiodothyronine (T3) by deiodinase enzymes. T3 binds to nuclear thyroid hormone receptors and regulates gene expression controlling metabolism, growth, cardiac rate, and thermogenesis. Replacement normalizes the pituitary-thyroid feedback axis and restores metabolic function.",
    contraindications: {
      absolute: ["Untreated adrenal insufficiency (thyroid hormone increases metabolic rate and can precipitate adrenal crisis — treat adrenal insufficiency first)", "Thyrotoxicosis (exogenous or endogenous)"],
      relative: ["Cardiovascular disease (angina, recent MI — start at very low dose 25 mcg and titrate slowly)", "Osteoporosis (supraphysiologic doses increase bone resorption)", "Atrial fibrillation (may precipitate or worsen)"],
    },
    sideEffects: {
      common: ["Symptoms of over-replacement (hyperthyroidism): palpitations, tachycardia, heat intolerance, tremor, weight loss, diarrhea", "Hair loss (first 3 months of therapy — self-limiting)"],
      serious: ["Cardiovascular: arrhythmias (especially AF), angina exacerbation, cardiac ischemia (more common in elderly and cardiac patients)", "Osteoporosis with long-term supraphysiologic dosing", "Thyrotoxic crisis (iatrogenic, with excessive dosing)"],
    },
    interactions: {
      drugs: ["Calcium carbonate, antacids, iron, cholestyramine, sucralfate: reduce levothyroxine absorption — separate by ≥4 hours", "Warfarin: thyroid hormone increases anticoagulant effect (increases INR) — monitor closely", "Amiodarone: inhibits T4→T3 conversion (monitor thyroid function)", "Phenytoin, carbamazepine, rifampin: increase T4 metabolism"],
      foods: ["Soy, high-fiber foods, coffee: reduce absorption — take on empty stomach 30–60 minutes before breakfast"],
    },
    monitoring: ["TSH 4–8 weeks after initiation or dose change (TSH reflects T4 exposure over preceding weeks)", "Once stable: TSH every 6–12 months", "Free T4 if central hypothyroidism suspected (TSH unreliable)", "Bone density (with long-term suppressive therapy)", "Cardiac evaluation in elderly or patients with cardiac disease"],
    dosing: {
      adultGeneral: "Full replacement: 1.6 mcg/kg/day. Elderly or cardiac patients: start 25–50 mcg daily. Titrate by 12.5–25 mcg every 4–6 weeks. Target TSH 0.4–4.0 mIU/L for most patients.",
      renalAdjustment: "No specific dose adjustment, but monitor TSH closely as absorption may vary.",
      hepaticAdjustment: "No dose adjustment typically required.",
      pediatricNote: "Weight-based dosing by age: neonates 10–15 mcg/kg/day; older children decreasing per body surface area. Critical to start ASAP in congenital hypothyroidism to prevent intellectual disability.",
    },
    clinicalPearls: [
      "TSH reflects thyroid hormone exposure over the PRECEDING 4–6 weeks — check no sooner than 4–8 weeks after dose change.",
      "Take on empty stomach 30–60 minutes before breakfast for optimal absorption — many patients skip this step, causing variable control.",
      "In pregnancy, levothyroxine requirements typically INCREASE by 20–30% — adjust early, check TSH monthly in first trimester.",
    ],
    boardRecallTip: "Levothyroxine = T4 prodrug; monitor TSH at 4–8 weeks; take on empty stomach; avoid calcium/iron within 4 hours; increase dose in pregnancy.",
  },
  {
    id: "fm-amlodipine",
    name: "Amlodipine",
    brandNames: ["Norvasc"],
    drugClass: "Dihydropyridine Calcium Channel Blocker (CCB)",
    rotations: ["family-medicine", "internal-medicine"],
    indications: ["Hypertension", "Stable angina (reduces myocardial oxygen demand)", "Vasospastic angina (Prinzmetal's)", "Hypertension in Black patients (preferred, alongside thiazide diuretics)"],
    mechanismOfAction:
      "Amlodipine blocks L-type voltage-gated calcium channels in vascular smooth muscle and cardiac cells. Calcium influx blockade causes relaxation of arteriolar smooth muscle, reducing systemic vascular resistance and blood pressure. It is highly selective for vascular smooth muscle over cardiac muscle, causing minimal negative inotropic or chronotropic effects. Its long half-life (35–50 hours) enables once-daily dosing and smooth blood pressure control.",
    contraindications: {
      absolute: ["Known hypersensitivity to dihydropyridine CCBs"],
      relative: ["Severe aortic stenosis (reduces afterload that may be compensatory)", "Cardiogenic shock", "Heart failure with reduced ejection fraction (use with caution — amlodipine is the only CCB shown safe in HFrEF — PRAISE trial)"],
    },
    sideEffects: {
      common: ["Peripheral edema (ankle swelling, 5–15% — dose-dependent, not due to fluid retention but to arteriovenous dilation)", "Flushing", "Headache", "Dizziness"],
      serious: ["Symptomatic hypotension (especially with nitrates or in hypovolemic patients)", "Reflex tachycardia (less than short-acting CCBs)"],
    },
    interactions: {
      drugs: ["CYP3A4 inhibitors (ketoconazole, clarithromycin, grapefruit juice): increase amlodipine levels", "Simvastatin: amlodipine increases simvastatin exposure (limit simvastatin to 20 mg/day with amlodipine)", "Cyclosporine: increased cyclosporine levels"],
      foods: ["Grapefruit juice: mild inhibition of CYP3A4 — minimize consumption"],
    },
    monitoring: ["Blood pressure response at 2–4 weeks after initiation", "Heart rate (should not cause significant bradycardia unlike non-dihydropyridines)", "Monitor for edema at each visit", "LFTs if symptomatic hepatic disease (hepatically metabolized)"],
    dosing: {
      adultGeneral: "Start 5 mg once daily. Titrate to 10 mg once daily after 7–14 days if tolerated. Max 10 mg/day.",
      renalAdjustment: "No dose adjustment needed for renal impairment.",
      hepaticAdjustment: "Start with 2.5 mg in severe hepatic impairment; titrate with caution.",
      pediatricNote: "Limited data; not routinely used in children under 6. Ages 6–17: 2.5–5 mg once daily.",
    },
    clinicalPearls: [
      "Peripheral edema from amlodipine is NOT fluid overload — it does not respond to diuretics. Adding an ACE-I or ARB can reduce CCB-induced edema by restoring venous tone (ACCOMPLISH trial showed ACE-I + CCB superior to ACE-I + HCTZ for CV outcomes).",
      "Amlodipine is preferred in Black patients for hypertension alongside thiazide diuretics, per JNC 8 and ACC/AHA guidelines.",
      "Unlike verapamil and diltiazem (non-dihydropyridines), amlodipine does NOT cause bradycardia or AV block, making it safe in most patients including those with asthma.",
    ],
    boardRecallTip: "Amlodipine = dihydropyridine CCB; main SE is ankle edema (not fluid overload); preferred in Black patients; safe in asthma; once daily.",
  },
  {
    id: "fm-albuterol",
    name: "Albuterol",
    brandNames: ["ProAir HFA", "Ventolin HFA", "AccuNeb (nebulizer)", "ProAir RespiClick"],
    drugClass: "Short-Acting Beta-2 Agonist (SABA)",
    rotations: ["family-medicine", "pediatrics", "emergency-medicine"],
    indications: ["Acute bronchospasm (asthma, COPD exacerbation)", "Exercise-induced bronchospasm prevention (use 15–30 min before activity)", "Hyperkalemia (emergency — drives K+ into cells)"],
    mechanismOfAction:
      "Albuterol selectively activates beta-2 adrenergic receptors on bronchial smooth muscle. Receptor activation stimulates adenylyl cyclase, increasing cyclic AMP, which activates protein kinase A, causing smooth muscle relaxation and bronchodilation. Onset of action is 5–15 minutes, duration 4–6 hours. It also stimulates mucociliary transport and inhibits mast cell mediator release.",
    contraindications: {
      absolute: ["Hypersensitivity to albuterol or any component"],
      relative: ["Cardiac arrhythmias sensitive to sympathomimetics (use with caution)", "Hypokalemia (albuterol causes K+ shift into cells — monitor)", "Hyperthyroidism (may exacerbate cardiovascular symptoms)"],
    },
    sideEffects: {
      common: ["Tremor (skeletal muscle — most common)", "Tachycardia and palpitations", "Hypokalemia (especially with high doses)", "Headache", "Throat irritation"],
      serious: ["Paradoxical bronchospasm (rare — stop immediately)", "Severe tachycardia/arrhythmia at high doses", "Hypokalemia with frequent nebulizations (monitor K+ in hospitalized patients)"],
    },
    interactions: {
      drugs: ["Beta-blockers: antagonize bronchodilator effects (avoid non-selective beta-blockers like propranolol in asthma)", "MAOIs and TCAs: increased risk of cardiovascular effects", "Loop/thiazide diuretics: additive hypokalemia"],
    },
    monitoring: ["Symptom frequency (if using rescue inhaler >2 days/week = asthma not well-controlled)", "Peak flow before and after administration", "Heart rate and rhythm during acute use", "Serum potassium in hospitalized patients on frequent nebulizations"],
    dosing: {
      adultGeneral: "MDI: 2 puffs (90 mcg/puff) q4–6h PRN for bronchospasm. Acute exacerbation: 2–4 puffs q20 min x3, then q1–4h. Nebulizer: 2.5 mg in 3 mL NS q20 min x3, then q1–4h.",
      renalAdjustment: "No dose adjustment required.",
      pediatricNote: "Weight-based nebulization: 0.15 mg/kg (min 2.5 mg) q20 min x3 in acute exacerbation. MDI with spacer preferred in children >4 years.",
    },
    clinicalPearls: [
      "Frequent albuterol use (>2 days/week for symptoms) indicates UNCONTROLLED asthma requiring step-up therapy — this is one of the most missed teaching points.",
      "In hyperkalemia emergency, nebulized albuterol (10–20 mg over 15 minutes) drives K+ intracellularly and can lower serum K+ by 0.5–1.5 mEq/L. Effect is temporary.",
      "Always use a spacer with MDI in children and consider in adults — significantly improves drug delivery to the lungs.",
    ],
    boardRecallTip: "Albuterol = SABA for rescue; tremor + tachycardia common; if using >2 days/week = escalate therapy; causes hypokalemia at high doses.",
  },
  {
    id: "fm-fluticasone",
    name: "Fluticasone Propionate Inhaler",
    brandNames: ["Flovent HFA", "Arnuity Ellipta (furoate)", "Flonase (nasal)"],
    drugClass: "Inhaled Corticosteroid (ICS)",
    rotations: ["family-medicine", "pediatrics"],
    indications: ["Persistent asthma (all severities — step 2+)", "COPD with frequent exacerbations (in combination with LABA)", "Allergic rhinitis (nasal formulation)"],
    mechanismOfAction:
      "Fluticasone is a synthetic corticosteroid with high topical glucocorticoid potency and low systemic bioavailability (inhaled form ~1%). It binds intracellular glucocorticoid receptors and translocates to the nucleus, where it suppresses transcription of inflammatory cytokines (IL-4, IL-5, IL-13, TNF-α). This reduces airway inflammation, eosinophil infiltration, mast cell activation, and bronchial hyperresponsiveness. ICS is the cornerstone of persistent asthma control.",
    contraindications: {
      absolute: ["Acute status asthmaticus or acute bronchospasm (ICS not for acute relief)"],
      relative: ["Untreated fungal, bacterial, or viral respiratory infections", "Active pulmonary tuberculosis"],
    },
    sideEffects: {
      common: ["Oropharyngeal candidiasis ('thrush') — rinse mouth after EVERY use", "Dysphonia (hoarseness)", "Cough on inhalation"],
      serious: ["Adrenal suppression with high doses (rare with standard inhaled doses)", "Growth retardation in children (low but real risk with high-dose ICS)", "Increased IOP/cataracts with chronic high-dose use"],
      blackBox: ["None, but high-dose systemic corticosteroid absorption warrants HPA axis monitoring in children on high doses"],
    },
    interactions: {
      drugs: ["Strong CYP3A4 inhibitors (ritonavir, ketoconazole): significantly increase fluticasone systemic exposure — risk of adrenal suppression (Cushing's syndrome)"],
    },
    monitoring: ["Asthma symptom control (daytime symptoms, nighttime waking, rescue inhaler use, activity limitation)", "Height in children (annual — monitor for growth suppression)", "Oral cavity inspection for candidiasis", "Spirometry 1–3 months after initiation"],
    dosing: {
      adultGeneral: "Low-dose ICS: 88–264 mcg/day (Flovent); Moderate: 264–440 mcg/day; High: >440 mcg/day. Give in divided doses (BID). Always use with spacer.",
      renalAdjustment: "No dose adjustment required.",
      pediatricNote: "Low-dose in children ≥4 years: 88 mcg BID. For children <4, consider montelukast as alternative. Monitor growth annually.",
    },
    clinicalPearls: [
      "ICS is the most effective controller medication for persistent asthma — it reduces exacerbations, hospitalizations, and mortality. Many patients underuse it because it doesn't provide immediate relief.",
      "Rinse mouth and gargle with water EVERY use to prevent oral candidiasis — counsel on this at every asthma visit.",
      "ICS does NOT provide immediate bronchodilation — patients must understand this is a PREVENTER, not a reliever medication.",
    ],
    boardRecallTip: "Fluticasone ICS = asthma controller (not rescue); rinse mouth to prevent thrush; CYP3A4 inhibitors increase systemic absorption.",
  },
  {
    id: "fm-amoxicillin",
    name: "Amoxicillin",
    brandNames: ["Amoxil", "Trimox"],
    drugClass: "Aminopenicillin (Beta-Lactam Antibiotic)",
    rotations: ["family-medicine", "pediatrics"],
    indications: ["Acute otitis media (first-line in children)", "Acute bacterial rhinosinusitis (first-line)", "Streptococcal pharyngitis (first-line)", "Community-acquired pneumonia (mild, outpatient)", "H. pylori eradication (triple therapy)", "UTI (amoxicillin-clavulanate preferred)", "Dental prophylaxis for endocarditis"],
    mechanismOfAction:
      "Amoxicillin inhibits bacterial cell wall synthesis by irreversibly binding to penicillin-binding proteins (PBPs), which are transpeptidases required for cross-linking peptidoglycan strands. This weakens the cell wall, causing bacteriolysis through osmotic pressure. It is active against gram-positive organisms (S. pneumoniae, Streptococcus species, Enterococcus) and some gram-negatives (H. influenzae, E. coli). Beta-lactamase-producing organisms (H. influenzae, M. catarrhalis, E. coli) are resistant — amoxicillin-clavulanate overcomes this.",
    contraindications: {
      absolute: ["Serious penicillin allergy (anaphylaxis, urticaria, angioedema — use alternative)", "History of amoxicillin-associated liver injury"],
      relative: ["Infectious mononucleosis (EBV infection — amoxicillin causes characteristic maculopapular rash in 70–100% of patients — rule out mono before prescribing)", "Cephalosporin allergy (cross-reactivity ~1–2%)"],
    },
    sideEffects: {
      common: ["Diarrhea (10–15%)", "Nausea, vomiting", "Rash (maculopapular — distinct from true allergy)", "Yeast vaginitis"],
      serious: ["Anaphylaxis (0.01–0.02%)", "C. difficile-associated diarrhea (antibiotic-associated colitis)", "Drug reaction with eosinophilia and systemic symptoms (DRESS) — rare", "Seizures with very high doses in patients with renal impairment"],
    },
    interactions: {
      drugs: ["Warfarin: antibiotics may increase INR by altering gut flora reducing vitamin K production", "Methotrexate: penicillins reduce renal excretion, increasing toxicity", "Probenecid: decreases amoxicillin renal excretion, increasing levels"],
    },
    monitoring: ["Symptom improvement at 48–72 hours (if no improvement, reconsider diagnosis or switch antibiotics)", "Watch for rash (distinguish drug rash from allergic reaction)", "Renal function if prolonged course or high doses"],
    dosing: {
      adultGeneral: "AOM/sinusitis: 875 mg BID x 5–10 days (or 500 mg TID). Strep pharyngitis: 500 mg BID x 10 days. CAP outpatient: 1 g TID x 5 days.",
      renalAdjustment: "eGFR <30: reduce dose and frequency. eGFR <10 or dialysis: 250–500 mg q24h.",
      pediatricNote: "AOM high-dose (to overcome S. pneumoniae resistance): 80–90 mg/kg/day divided BID, max 3 g/day. Standard: 40–45 mg/kg/day. Weight-based dosing is essential.",
    },
    clinicalPearls: [
      "High-dose amoxicillin (80–90 mg/kg/day in children) is required for AOM to overcome reduced susceptibility of S. pneumoniae.",
      "The classic maculopapular rash with amoxicillin in EBV (mono) infection is NOT a true penicillin allergy — it is immune complex-mediated. These patients can safely take penicillins in the future.",
      "For penicillin-allergic patients: use azithromycin for atypicals, clindamycin for strep, doxycycline for sinusitis.",
    ],
    boardRecallTip: "Amoxicillin = first-line for AOM, strep pharyngitis, sinusitis; use high-dose in AOM; rash with mono ≠ penicillin allergy.",
  },
  {
    id: "fm-azithromycin",
    name: "Azithromycin",
    brandNames: ["Zithromax", "Z-Pack"],
    drugClass: "Macrolide Antibiotic",
    rotations: ["family-medicine", "pediatrics", "emergency-medicine"],
    indications: ["Atypical community-acquired pneumonia (Mycoplasma, Chlamydophila, Legionella)", "Acute bacterial sinusitis (second-line, penicillin allergy)", "Streptococcal pharyngitis (second-line, penicillin allergy)", "Chlamydia trachomatis (STI treatment)", "MAC prophylaxis and treatment in HIV", "Pertussis (whooping cough)"],
    mechanismOfAction:
      "Azithromycin binds to the 50S ribosomal subunit (23S rRNA) and inhibits bacterial protein synthesis by blocking translocation of peptidyl-tRNA from the acceptor (A) site to the donor (P) site. This is bacteriostatic at typical doses. Azithromycin has excellent intracellular penetration (tissue concentrations 10–100x serum), long half-life (~68 hours), and anti-inflammatory properties contributing to its efficacy in respiratory infections and COPD exacerbation prophylaxis.",
    contraindications: {
      absolute: ["Known hypersensitivity to macrolides", "History of cholestatic jaundice/hepatic dysfunction with prior azithromycin use"],
      relative: ["QTc prolongation or ongoing QT-prolonging drugs (torsades de pointes risk)", "Severe hepatic impairment", "Myasthenia gravis (may worsen neuromuscular blockade)"],
    },
    sideEffects: {
      common: ["GI: nausea, diarrhea, abdominal pain (10–15%)", "Headache", "Taste disturbance"],
      serious: ["QTc prolongation and torsades de pointes (especially with concomitant QT-prolonging drugs, hypokalemia)", "Hepatotoxicity (rare)", "Azithromycin-associated cardiovascular death (FDA safety communication — increased cardiac risk in high-risk patients)"],
      blackBox: ["Exacerbation of myasthenia gravis (can cause life-threatening respiratory failure)"],
    },
    interactions: {
      drugs: ["QT-prolonging drugs: antipsychotics, TCAs, fluoroquinolones, ondansetron (additive QTc prolongation)", "Warfarin: increases INR (monitor)", "Digoxin: increases digoxin levels (macrolides affect P-glycoprotein)"],
    },
    monitoring: ["EKG if QTc prolongation risk (baseline QTc >450 ms, hypokalemia, concurrent QT drugs)", "Symptom improvement at 48–72 hours", "LFTs if prolonged course"],
    dosing: {
      adultGeneral: "CAP (Z-pack): 500 mg day 1, then 250 mg daily days 2–5. STI (Chlamydia): 1 g single dose. Sinusitis/pharyngitis: 500 mg x1, then 250 mg x4 days.",
      renalAdjustment: "No dose adjustment typically needed.",
      pediatricNote: "CAP/AOM: 10 mg/kg day 1 (max 500 mg), then 5 mg/kg days 2–5. Chlamydia in adolescents: 1 g single dose.",
    },
    clinicalPearls: [
      "Increasing macrolide resistance in S. pneumoniae (~30–40% in US) limits azithromycin's role as monotherapy for CAP — use combination therapy with beta-lactam in hospitalized patients.",
      "The FDA safety communication identified increased risk of cardiovascular death with azithromycin compared to amoxicillin — particularly in patients with existing cardiovascular risk. Choose carefully.",
      "Azithromycin 1 g single dose remains the preferred treatment for uncomplicated Chlamydia trachomatis (or doxycycline 100 mg BID x7 days per CDC 2021 — doxycycline now preferred for genital CT).",
    ],
    boardRecallTip: "Azithromycin = macrolide; QTc prolongation risk; excellent intracellular coverage for atypicals; 1g single dose for Chlamydia STI.",
  },
  {
    id: "fm-sertraline",
    name: "Sertraline",
    brandNames: ["Zoloft"],
    drugClass: "Selective Serotonin Reuptake Inhibitor (SSRI)",
    rotations: ["family-medicine", "behavioral-medicine"],
    indications: ["Major Depressive Disorder", "Generalized Anxiety Disorder", "Panic Disorder", "PTSD", "OCD", "Social Anxiety Disorder", "Premenstrual Dysphoric Disorder (PMDD)"],
    mechanismOfAction:
      "Sertraline inhibits the presynaptic serotonin transporter (SERT), blocking reuptake of serotonin (5-HT) from the synapse. This increases synaptic serotonin availability and enhances serotonergic neurotransmission. Unlike TCAs, SSRIs have minimal affinity for norepinephrine, dopamine, histamine, muscarinic, or alpha-1 adrenergic receptors, explaining the improved side effect profile. The full therapeutic effect requires 4–8 weeks as downstream receptor changes occur.",
    contraindications: {
      absolute: ["Concurrent MAOIs (serotonin syndrome risk — fatal) — 14-day washout required", "Concurrent use with pimozide (increases QTc prolongation)"],
      relative: ["Bipolar disorder without mood stabilizer cover (may precipitate mania)", "Seizure disorder (lowers seizure threshold slightly)", "Active GI bleeding risk (SSRIs inhibit platelet aggregation)"],
    },
    sideEffects: {
      common: ["GI: nausea, diarrhea (especially first 1–2 weeks)", "Insomnia or sedation", "Sexual dysfunction (decreased libido, anorgasmia, delayed ejaculation — 30–40%)", "Headache", "Tremor"],
      serious: ["SIADH/hyponatremia (especially in elderly)", "Serotonin syndrome (with concurrent serotonergic drugs — fever, clonus, agitation, tachycardia)", "QTc prolongation (mild)", "Bleeding (GI, postoperative — inhibits platelet serotonin)", "Suicidality risk in children/adolescents/young adults <24 (FDA Black Box Warning)"],
      blackBox: ["Increased risk of suicidal thinking and behavior in children, adolescents, and young adults (ages <24) with major depressive disorder and other psychiatric disorders — monitor closely, especially in first 4 weeks"],
    },
    interactions: {
      drugs: ["MAOIs: contraindicated (serotonin syndrome)", "Tramadol, triptans, linezolid, fentanyl (serotonin syndrome risk)", "Warfarin: increases bleeding risk (SSRIs inhibit platelet function)", "NSAIDs/aspirin: additive GI bleeding risk"],
    },
    monitoring: ["PHQ-9 at baseline and 4, 8, 12 weeks after initiation", "Suicidality (especially first 4 weeks) — weekly contact in high-risk patients", "Sodium (especially elderly)", "Sexual function at follow-up", "Weight"],
    dosing: {
      adultGeneral: "MDD/GAD: Start 50 mg daily. Titrate by 50 mg every 1–2 weeks. Therapeutic range 50–200 mg/day. OCD may require 200 mg/day. Take in the morning or evening consistently.",
      renalAdjustment: "No dose adjustment required for mild-moderate renal impairment.",
      hepaticAdjustment: "Use lower doses in hepatic impairment — reduced clearance. Consider 25–50 mg starting dose.",
      pediatricNote: "FDA-approved for OCD in children ≥6 years. MDD in children is off-label (fluoxetine preferred — FDA-approved for pediatric MDD).",
    },
    clinicalPearls: [
      "The full antidepressant effect takes 4–8 weeks — do NOT switch or abandon therapy after 2 weeks due to lack of response. However, some improvement (sleep, energy, anxiety) should be seen by weeks 2–4.",
      "Sertraline is preferred in pregnancy and breastfeeding among SSRIs due to the most safety data and lowest transfer into breast milk.",
      "For sexual dysfunction: consider timing change (take after sexual activity), dose reduction, drug holiday on weekends, or switch to bupropion or mirtazapine (fewer sexual side effects).",
    ],
    boardRecallTip: "Sertraline = SSRI; Black Box suicidality <24 yo; serotonin syndrome with MAOIs; preferred in pregnancy; full effect at 4–8 weeks.",
  },
  {
    id: "fm-omeprazole",
    name: "Omeprazole",
    brandNames: ["Prilosec", "Zegerid"],
    drugClass: "Proton Pump Inhibitor (PPI)",
    rotations: ["family-medicine", "internal-medicine", "general-surgery"],
    indications: ["GERD (erosive and non-erosive)", "Peptic ulcer disease (H. pylori eradication triple therapy, NSAID-induced ulcers)", "Zollinger-Ellison syndrome (high-dose)", "Prevention of NSAID-induced GI injury (in high-risk patients)", "Barrett's esophagus surveillance"],
    mechanismOfAction:
      "Omeprazole is a prodrug that is activated in the acidic environment of the gastric parietal cell secretory canaliculus. The activated sulfenamide irreversibly binds to and inhibits the hydrogen-potassium ATPase pump (H+/K+-ATPase) — the proton pump — on the luminal surface of gastric parietal cells. This blocks the final step of acid secretion, reducing gastric acid by >80–90% regardless of stimulus (histamine, gastrin, or acetylcholine). Recovery requires new pump synthesis (~18–24 hours).",
    contraindications: {
      absolute: ["Hypersensitivity to omeprazole or other benzimidazoles", "Concurrent use with rilpivirine (reduced antiretroviral absorption)"],
      relative: ["Known osteoporosis (long-term PPI increases fracture risk)", "Concurrent methotrexate (PPIs increase MTX levels)", "Hypomagnesemia risk with long-term use"],
    },
    sideEffects: {
      common: ["Headache", "Diarrhea", "Nausea", "Abdominal pain"],
      serious: ["Clostridium difficile infection (increased risk with long-term use)", "Community-acquired pneumonia (modestly increased risk)", "Hypomagnesemia (especially with >1 year use — check Mg2+ if on digoxin or QT-prolonging drugs)", "Bone fracture (hip, wrist, spine with long-term high-dose use)", "Vitamin B12 deficiency (long-term — impairs absorption of B12 from food)", "Interstitial nephritis (rare — acute or chronic)"],
    },
    interactions: {
      drugs: ["Clopidogrel: PPIs (especially omeprazole/esomeprazole) reduce clopidogrel antiplatelet effect (CYP2C19 interaction) — consider pantoprazole or rabeprazole instead", "Methotrexate: PPIs increase MTX toxicity (reduce renal clearance)", "Rilpivirine/atazanavir: PPIs reduce absorption (contraindicated)", "Warfarin: may increase INR slightly"],
    },
    monitoring: ["Symptom resolution at 4–8 weeks", "If chronic use: magnesium, B12, bone density annually", "CMP if chronic kidney disease", "Reassess need for PPI at each visit — step down or discontinue when appropriate"],
    dosing: {
      adultGeneral: "GERD: 20 mg once daily before breakfast x 4–8 weeks. Erosive esophagitis: 20–40 mg daily x 4–8 weeks. Take 30–60 minutes before first meal for maximum efficacy.",
      renalAdjustment: "No dose adjustment required for renal impairment.",
      hepaticAdjustment: "Reduce dose in severe hepatic impairment (Child-Pugh C): max 10–20 mg/day.",
      pediatricNote: "GERD in infants ≥1 month and children: 0.5–1.5 mg/kg/day. FDA-approved for GERD in ages ≥1 year.",
    },
    clinicalPearls: [
      "PPIs should be taken 30–60 minutes BEFORE the first meal of the day — this is frequently missed and contributes to perceived treatment failure.",
      "Long-term PPI use is associated with hypomagnesemia, B12 deficiency, C. difficile risk, and hip fractures. The lowest effective dose for the shortest required duration should be used.",
      "Use pantoprazole or rabeprazole (not omeprazole/esomeprazole) when a patient requires both a PPI and clopidogrel — less CYP2C19 interaction.",
    ],
    boardRecallTip: "Omeprazole = PPI; take 30–60 min before eating; interacts with clopidogrel (use pantoprazole instead); monitor Mg2+ and B12 long-term.",
  },
  {
    id: "fm-metoprolol",
    name: "Metoprolol Succinate",
    brandNames: ["Toprol-XL"],
    drugClass: "Cardioselective Beta-1 Adrenergic Blocker (Extended-Release)",
    rotations: ["family-medicine", "internal-medicine"],
    indications: ["Hypertension", "Stable angina", "Heart failure with reduced ejection fraction (HFrEF — Class I, MERIT-HF trial)", "Post-myocardial infarction (mortality reduction)", "Atrial fibrillation rate control", "Hyperthyroidism symptom management (off-label)"],
    mechanismOfAction:
      "Metoprolol succinate is a cardioselective beta-1 adrenergic receptor antagonist. At standard doses, it selectively blocks beta-1 receptors on cardiac cells, reducing heart rate (negative chronotropy), conduction velocity (negative dromotropy), and contractility (negative inotropy). This decreases myocardial oxygen demand. Extended-release formulation (succinate salt) provides 24-hour coverage with once-daily dosing. Cardioselectivity is dose-dependent — high doses lose selectivity.",
    contraindications: {
      absolute: ["Decompensated heart failure requiring IV inotropes", "Bradycardia (<60 bpm) or sick sinus syndrome without pacemaker", "Second- or third-degree AV block without pacemaker", "Cardiogenic shock"],
      relative: ["COPD or reactive airway disease (use with caution at low doses — cardioselective, but some beta-2 effects at higher doses)", "Diabetes on insulin (may mask tachycardia of hypoglycemia; diaphoresis is unaffected)", "Peripheral arterial disease (may worsen)", "Prinzmetal's angina (pure beta blockade may worsen vasospasm)"],
    },
    sideEffects: {
      common: ["Fatigue", "Bradycardia", "Dizziness/lightheadedness", "Depression (reported)", "Cold extremities", "Sexual dysfunction"],
      serious: ["Bronchospasm (at high doses, with loss of beta-1 selectivity)", "Masking hypoglycemia symptoms in diabetics", "Abrupt withdrawal: rebound hypertension, angina, or MI — MUST taper"],
    },
    interactions: {
      drugs: ["Verapamil/diltiazem (non-DHP CCBs): additive bradycardia and AV block — avoid combination", "Digoxin: additive bradycardia", "Clonidine: severe rebound hypertension if beta-blocker discontinued before clonidine", "MAOIs: severe hypertension"],
    },
    monitoring: ["Heart rate (target 50–70 bpm for HFrEF, <80 bpm for AF rate control)", "Blood pressure", "Symptoms of bronchospasm in COPD/asthma patients", "Signs of heart failure decompensation", "Glucose monitoring in insulin-dependent diabetics"],
    dosing: {
      adultGeneral: "HTN/angina: Start 25–50 mg once daily. Target 100–200 mg/day. HFrEF: Start 12.5–25 mg once daily; titrate slowly every 2 weeks targeting 200 mg/day.",
      renalAdjustment: "No dose adjustment required for renal impairment.",
      hepaticAdjustment: "Reduce dose in severe hepatic impairment — hepatically metabolized via CYP2D6.",
      pediatricNote: "Not FDA-approved in children; used off-label for arrhythmias and cardiomyopathy with specialist guidance.",
    },
    clinicalPearls: [
      "NEVER abruptly stop metoprolol (or any beta-blocker) in patients with CAD — rebound tachycardia and coronary vasospasm can precipitate MI. Taper over 1–2 weeks.",
      "Metoprolol SUCCINATE (extended-release) is proven to reduce mortality in HFrEF — metoprolol TARTRATE (immediate-release) is NOT — know the difference on boards.",
      "Beta-blockers were once contraindicated in heart failure — the MERIT-HF and COPERNICUS trials established metoprolol succinate and carvedilol as standard of care in stable HFrEF.",
    ],
    boardRecallTip: "Metoprolol succinate = beta-1 selective; NEVER stop abruptly in CAD; succinate form proven in HFrEF (not tartrate); bradycardia + fatigue common SE.",
  },
  {
    id: "fm-hctz",
    name: "Hydrochlorothiazide",
    brandNames: ["Microzide", "HydroDIURIL"],
    drugClass: "Thiazide Diuretic",
    rotations: ["family-medicine", "internal-medicine"],
    indications: ["Hypertension (preferred in Black patients and elderly — JNC 8)", "Edema (mild-moderate, heart failure — though loop diuretics preferred for significant volume overload)", "Nephrolithiasis prevention (calcium oxalate stones — reduces urinary calcium)"],
    mechanismOfAction:
      "Hydrochlorothiazide inhibits the Na+/Cl- cotransporter in the distal convoluted tubule (DCT) of the nephron, blocking renal sodium and chloride reabsorption. This leads to increased urinary excretion of sodium, chloride, and water (diuresis), reducing plasma volume and cardiac preload. Additionally, thiazides reduce vascular smooth muscle reactivity to vasopressors over time, contributing to their antihypertensive effect. Paradoxically, they reduce urinary calcium excretion (useful for calcium kidney stones).",
    contraindications: {
      absolute: ["Anuria", "Hypersensitivity to sulfonamide-derived drugs (cross-reactivity with sulfa antibiotics — controversial, but caution advised)"],
      relative: ["Gout (thiazides increase uric acid by competing with urate for renal secretion)", "Hypokalemia (worsen potassium wasting)", "Severe hyponatremia (can worsen)", "Diabetes (may impair glucose tolerance at high doses)", "Pregnancy (avoid in third trimester — fetal thrombocytopenia)"],
    },
    sideEffects: {
      common: ["Hypokalemia (most common — enhanced by concurrent loop diuretics or ACE-I)", "Hyponatremia", "Hyperuricemia (can precipitate gout)", "Photosensitivity", "Polyuria (initial)"],
      serious: ["Hyponatremia (especially elderly women — can be severe/symptomatic)", "Hypokalemia-induced arrhythmias", "Hyperglycemia (impairs insulin secretion — worsens DM control)", "Hypercalcemia (reduces urinary calcium excretion)", "Rare: aplastic anemia, pancreatitis"],
    },
    interactions: {
      drugs: ["NSAIDs: reduce antihypertensive effect", "Lithium: thiazides reduce renal lithium clearance (increase toxicity — monitor lithium levels)", "Digoxin: hypokalemia from HCTZ increases digoxin toxicity risk", "Cholestyramine/colestipol: reduce HCTZ absorption (separate by 1 hour)"],
    },
    monitoring: ["BMP (sodium, potassium, chloride, bicarbonate, BUN, creatinine) at 2–4 weeks after initiation, then annually", "Uric acid (in patients with gout history)", "Blood glucose (in diabetics)", "Blood pressure response"],
    dosing: {
      adultGeneral: "HTN: 12.5–25 mg once daily. Max 50 mg/day (higher doses increase metabolic side effects without proportionate BP benefit). Often combined with ACE-I/ARB or CCB.",
      renalAdjustment: "Ineffective when eGFR <30 mL/min — switch to loop diuretic for edema. For HTN alone, some evidence supports use down to eGFR 20–30.",
      pediatricNote: "1–2 mg/kg/day in divided doses; max 37.5 mg/day in children <2 years, 100 mg/day in older children.",
    },
    clinicalPearls: [
      "Thiazide diuretics are preferred in Black patients for hypertension (alongside CCBs) because renin-angiotensin system activity is typically lower in this population, making ACE-I/ARB less effective as monotherapy.",
      "Hyponatremia risk with thiazides is highest in elderly women — this is a clinically important and often underrecognized side effect. Check sodium 1–2 weeks after starting in high-risk patients.",
      "Thiazides REDUCE urinary calcium — useful for patients with recurrent calcium oxalate kidney stones AND for osteoporosis (reduces bone resorption as a secondary benefit).",
    ],
    boardRecallTip: "HCTZ = thiazide diuretic; preferred in Black patients; watch for hypokalemia + hyponatremia; INCREASES uric acid (gout risk); REDUCES urinary calcium.",
  },
  {
    id: "fm-gabapentin",
    name: "Gabapentin",
    brandNames: ["Neurontin", "Gralise", "Horizant (enacarbil prodrug)"],
    drugClass: "Alpha-2-Delta Calcium Channel Ligand (Anticonvulsant / Neuropathic Pain Agent)",
    rotations: ["family-medicine", "internal-medicine"],
    indications: ["Neuropathic pain (diabetic peripheral neuropathy, postherpetic neuralgia)", "Partial seizures (adjunct therapy)", "Fibromyalgia (off-label)", "Restless leg syndrome (Horizant formulation FDA-approved)", "Alcohol withdrawal seizure prevention (off-label)", "Hot flashes in menopause (off-label)"],
    mechanismOfAction:
      "Gabapentin binds to the alpha-2-delta subunit of voltage-gated calcium channels in the dorsal horn of the spinal cord and brain. This reduces calcium influx and subsequent release of excitatory neurotransmitters (glutamate, substance P, CGRP) from presynaptic terminals, thereby decreasing neuropathic pain transmission. Despite its name, gabapentin does NOT bind to GABA receptors or enhance GABA activity directly. It also has unknown mechanisms contributing to CNS sedation.",
    contraindications: {
      absolute: ["Hypersensitivity to gabapentin"],
      relative: ["Respiratory compromise (COPD, sleep apnea) — risk of respiratory depression especially with concurrent opioids or benzodiazepines", "Elderly (fall risk, sedation)", "CKD (requires significant dose reduction)", "Substance use disorder (gabapentin misuse and abuse potential)"],
    },
    sideEffects: {
      common: ["Somnolence/sedation (up to 20%)", "Dizziness", "Ataxia", "Fatigue", "Peripheral edema", "Weight gain"],
      serious: ["Respiratory depression (especially with opioids or CNS depressants — FDA Black Box Warning for gabapentinoids)", "Suicidal ideation (class effect — FDA warning for all anticonvulsants)", "Angioedema (rare)", "Drug reaction with eosinophilia (DRESS)", "Dependence and withdrawal (with chronic high-dose use)"],
      blackBox: ["Serious, life-threatening, and fatal respiratory depression reported, particularly when used with CNS depressants (opioids, benzodiazepines, alcohol)"],
    },
    interactions: {
      drugs: ["Opioids: significantly increased respiratory depression risk (FDA Black Box Warning)", "Benzodiazepines: additive CNS depression", "Antacids (aluminum/magnesium): reduce gabapentin absorption by up to 20% — separate by 2 hours", "Hydrocodone: increases gabapentin levels by 14%"],
    },
    monitoring: ["Pain scores (VAS or NRS) at each visit", "Signs of CNS depression/sedation", "Fall risk assessment (especially in elderly)", "Renal function (eGFR) for dose adjustment", "Signs of misuse/dependency in high-risk patients"],
    dosing: {
      adultGeneral: "Neuropathic pain: Start 300 mg at bedtime, increase to 300 mg TID over 1–2 weeks. Therapeutic range 1800–3600 mg/day in divided doses (TID). Max 3600 mg/day.",
      renalAdjustment: "eGFR 30–59: max 700 mg TID. eGFR 15–29: max 700 mg BID. eGFR <15: max 700 mg daily. Hemodialysis: 200–300 mg after each session.",
      hepaticAdjustment: "No dose adjustment required for hepatic impairment (not hepatically metabolized).",
      pediatricNote: "Seizures (children ≥3 years): 10–15 mg/kg/day in 3 divided doses; max 50 mg/kg/day.",
    },
    clinicalPearls: [
      "Gabapentin requires renal dose adjustment — a critically important detail in elderly patients and those with CKD. Always check eGFR before prescribing.",
      "Gabapentin + opioid combination is increasingly recognized as high-risk — the FDA issued a Black Box Warning in 2019 due to numerous respiratory depression deaths, particularly in opioid-tolerant patients and those with sleep apnea.",
      "Gabapentin has significant abuse potential, particularly in patients with substance use disorders. Multiple states have classified it as a controlled substance.",
    ],
    boardRecallTip: "Gabapentin = alpha-2-delta ligand; dose reduce in renal impairment; Black Box respiratory depression with opioids; treat neuropathic pain and PHN.",
  },
  {
    id: "fm-prednisone",
    name: "Prednisone (Short Course)",
    brandNames: ["Deltasone", "Prednicot", "Rayos (delayed-release)"],
    drugClass: "Systemic Glucocorticoid (Corticosteroid)",
    rotations: ["family-medicine", "internal-medicine", "general-surgery", "emergency-medicine"],
    indications: ["Asthma exacerbation", "COPD exacerbation", "Allergic reactions (severe urticaria, contact dermatitis)", "Community-acquired pneumonia (select severe cases — reduces length of stay)", "Gout (when NSAIDs contraindicated)", "Autoimmune conditions (short-term bridging)", "Bell's palsy (within 72 hours of onset)", "Croup (single dose dexamethasone preferred in children)"],
    mechanismOfAction:
      "Prednisone is a synthetic glucocorticoid prodrug converted to the active form prednisolone by hepatic 11-beta-hydroxysteroid dehydrogenase. It binds to intracellular glucocorticoid receptors and translocates to the nucleus, where it modulates gene transcription. Anti-inflammatory effects: suppresses NF-κB and AP-1 transcription factors, reducing production of IL-1, IL-2, IL-6, TNF-α, and prostaglandins; inhibits phospholipase A2 (reducing arachidonic acid); decreases neutrophil margination and lymphocyte proliferation. Also causes hepatic gluconeogenesis (hyperglycemia) and promotes protein catabolism.",
    contraindications: {
      absolute: ["Systemic fungal infection (without concurrent antifungal)", "Live virus vaccination (within 2 weeks of short course)"],
      relative: ["Diabetes mellitus (causes steroid-induced hyperglycemia — monitor BG closely)", "Active peptic ulcer disease (combine with PPI for courses >7 days)", "Psychiatric history (may precipitate psychosis, mania)", "Glaucoma or cataracts (prolonged use worsens)", "Active or latent tuberculosis (screen with TST/IGRA before chronic use)", "Osteoporosis (supplement with calcium + Vitamin D for courses >3 months)"],
    },
    sideEffects: {
      common: ["Hyperglycemia (clinically significant in diabetics)", "Insomnia", "Mood changes (irritability, euphoria)", "Fluid retention", "Appetite increase", "GI upset"],
      serious: [
        "HPA axis suppression (with courses >2 weeks — risk of adrenal insufficiency on discontinuation)",
        "Avascular necrosis of the femoral head (with prolonged use)",
        "Osteoporosis (bone density loss with chronic use)",
        "Cataracts (posterior subcapsular)",
        "Cushing's syndrome (chronic use)",
        "Steroid psychosis (at high doses)",
        "Opportunistic infections (immunosuppression)",
      ],
    },
    interactions: {
      drugs: ["NSAIDs: additive GI toxicity (avoid or add PPI)", "Vaccines (live): contraindicated during systemic steroid use", "Antidiabetic agents: dose adjustment needed for hyperglycemia", "Warfarin: may increase or decrease INR (variable)"],
    },
    monitoring: ["Blood glucose (especially in diabetics — short courses can cause significant glucose elevations)", "Blood pressure", "Symptoms of adrenal suppression if course >2 weeks (fatigue, hypotension, nausea)", "For courses >3 months: bone density, intraocular pressure, adrenal function testing"],
    dosing: {
      adultGeneral: "Asthma/COPD exacerbation: 40–60 mg/day x 5 days (no taper needed for short courses ≤7 days). Gout: 30–60 mg daily, taper over 7–10 days. Bell's palsy: 60 mg/day x 5 days, taper over 10 days total.",
      renalAdjustment: "No specific dose adjustment, but monitor fluid balance.",
      hepaticAdjustment: "Prednisolone preferred in severe hepatic disease (prednisone requires hepatic conversion — impaired in liver failure).",
      pediatricNote: "Asthma exacerbation: 1 mg/kg/day (max 60 mg) x 3–5 days. Croup: dexamethasone 0.6 mg/kg single dose preferred.",
    },
    clinicalPearls: [
      "Courses ≤7 days do NOT require tapering — HPA axis suppression is clinically insignificant with short courses. Courses >2–3 weeks require a taper to allow adrenal recovery.",
      "Steroid-induced hyperglycemia can be profound in type 2 diabetics — may need to temporarily increase insulin or oral agents. Glucose peaks 6–8 hours after AM prednisone dose (afternoon spike).",
      "For patients on chronic steroids (>20 mg/day for >3 months), always provide stress dosing education (double the dose during illness) and carry a medical alert bracelet for adrenal insufficiency.",
    ],
    boardRecallTip: "Prednisone = prodrug → prednisolone; causes hyperglycemia; no taper needed ≤7 days; adrenal suppression with >2 week courses; HPA axis.",
  },
];
