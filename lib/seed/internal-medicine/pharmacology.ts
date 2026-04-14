// @ts-nocheck
import type { Drug } from "@/types";

export const internalMedicinePharmacology: Drug[] = [
  {
    id: "im-drug-heparin",
    name: "Unfractionated Heparin",
    brandNames: ["Heparin Sodium"],
    drugClass: "Anticoagulant — indirect thrombin inhibitor",
    rotations: ["internal-medicine", "emergency-medicine"],
    indications: [
      "Acute treatment of DVT and pulmonary embolism",
      "Acute coronary syndrome (NSTEMI, STEMI — bridging for PCI)",
      "Atrial fibrillation with high stroke risk (acute setting)",
      "Bridging anticoagulation perioperatively",
      "Prevention of VTE in hospitalized patients (prophylactic dosing)"
    ],
    mechanismOfAction: "Heparin binds antithrombin III (AT-III), dramatically accelerating its ability to inhibit thrombin (factor IIa) and factor Xa. This prevents fibrin clot formation and propagation. Unfractionated heparin (UFH) inhibits both thrombin and factor Xa, whereas LMWHs primarily inhibit factor Xa. Heparin does not dissolve existing clots but prevents new clot formation and extension.",
    contraindications: {
      absolute: [
        "Active uncontrolled bleeding (except DIC)",
        "Heparin-induced thrombocytopenia (HIT) — history of HIT is absolute contraindication to heparin",
        "Severe thrombocytopenia (PLT <20,000) from other cause",
        "Intracranial hemorrhage (acute)"
      ],
      relative: [
        "Recent neurosurgery, ophthalmologic surgery, or spinal anesthesia",
        "Severe hypertension (SBP >200 mmHg)",
        "Active peptic ulcer disease or GI bleeding",
        "Recent trauma or major surgery",
        "Bacterial endocarditis"
      ]
    },
    sideEffects: {
      common: [
        "Bleeding (most common — monitor aPTT and signs of hemorrhage)",
        "Injection site hematoma (with SC dosing)",
        "Mild thrombocytopenia (non-immune, transient, days 1–4)"
      ],
      serious: [
        "Major hemorrhage (intracranial, retroperitoneal, GI)",
        "Heparin-induced thrombocytopenia (HIT) — immune-mediated, days 5–14, paradoxical thrombosis"
      ],
      blackBox: [
        "Fatal medication errors have occurred with heparin — always verify concentration before administration"
      ]
    },
    interactions: {
      drugs: [
        "Warfarin — additive anticoagulation; monitor INR when transitioning",
        "Aspirin and NSAIDs — increased bleeding risk",
        "Thrombolytics (tPA, streptokinase) — dramatically increased hemorrhage risk",
        "Nitroglycerin IV — may reduce heparin effect (monitor aPTT closely)"
      ],
      foods: []
    },
    monitoring: [
      "aPTT (activated partial thromboplastin time): therapeutic range 60–100 seconds (1.5–2.5× normal) for treatment; check every 6 hours until stable, then daily",
      "Anti-Xa level (preferred in obesity, pregnancy, or aPTT unreliable): therapeutic 0.3–0.7 IU/mL for treatment",
      "CBC with platelet count: baseline, then daily for first 14 days to detect HIT",
      "Hemoglobin and hematocrit: monitor for occult bleeding",
      "Potassium: heparin can cause hyperkalemia via aldosterone suppression"
    ],
    dosing: {
      adultGeneral: "Treatment: IV bolus 80 units/kg, then infusion 18 units/kg/hr (weight-based protocol); adjust by aPTT q6h. Prophylaxis: 5,000 units SC q8–12h",
      renalAdjustment: "No dose adjustment required for renal impairment (not renally cleared); however, bleeding risk may be increased in severe CKD",
      hepaticAdjustment: "Use caution in severe hepatic impairment (reduced AT-III synthesis may alter response)",
      pediatricNote: "Weight-based dosing: load 75–100 units/kg IV over 10 min, then 28 units/kg/hr (infants) or 20 units/kg/hr (children); titrate to anti-Xa 0.35–0.70 IU/mL"
    },
    clinicalPearls: [
      "HIT diagnosis: Use 4T score (Thrombocytopenia, Timing, Thrombosis, oTher causes). Score ≥4 = intermediate/high probability → STOP all heparin immediately, start non-heparin anticoagulant (argatroban or bivalirudin), check PF4 antibody and serotonin release assay (SRA).",
      "Reversal: Protamine sulfate 1 mg per 100 units of heparin given in last 2 hours (max 50 mg IV over 10 minutes); administer slowly — protamine itself can cause anaphylaxis (higher risk in fish allergy, previous protamine exposure, vasectomy)."
    ],
    boardRecallTip: "HIT: thrombocytopenia + THROMBOSIS (not just bleeding). Stop heparin → start argatroban (DTI). DO NOT give platelets (worsens thrombosis). Anti-PF4 ELISA is sensitive; SRA is gold standard confirmatory test."
  },
  {
    id: "im-drug-warfarin",
    name: "Warfarin",
    brandNames: ["Coumadin", "Jantoven"],
    drugClass: "Oral anticoagulant — vitamin K antagonist",
    rotations: ["internal-medicine", "family-medicine"],
    indications: [
      "Long-term anticoagulation for atrial fibrillation (stroke prevention)",
      "DVT and PE treatment (3–6 months) and prevention",
      "Mechanical heart valve thromboprophylaxis (still preferred over DOACs for mechanical valves)",
      "Antiphospholipid syndrome with thrombosis",
      "Prevention of systemic embolism in cardiomyopathy"
    ],
    mechanismOfAction: "Warfarin inhibits vitamin K epoxide reductase (VKORC1), blocking the recycling of vitamin K from its epoxide form back to its active hydroquinone form. Vitamin K is required for gamma-carboxylation (activation) of clotting factors II, VII, IX, and X as well as anticoagulant proteins C and S. Factor VII has the shortest half-life — falls first (within 24 hours), explaining early PT/INR elevation but delayed full anticoagulant effect (72–96 hours until factors II and X also deplete).",
    contraindications: {
      absolute: [
        "Pregnancy (teratogenic — causes warfarin embryopathy, fetal hemorrhage; use LMWH instead)",
        "Active major bleeding",
        "Recent intracranial hemorrhage",
        "Non-compliant patient without monitoring access"
      ],
      relative: [
        "Falls risk (relative — stroke risk from A-fib usually outweighs fall bleeding risk)",
        "Recent major surgery or trauma",
        "Severe hepatic disease (unpredictable anticoagulant effect)",
        "Recurrent GI bleeding"
      ]
    },
    sideEffects: {
      common: [
        "Bleeding (epistaxis, easy bruising, prolonged wound bleeding)",
        "Skin necrosis (rare — occurs 3–5 days after initiation; associated with protein C deficiency — warfarin drops protein C before factors II/X)"
      ],
      serious: [
        "Life-threatening hemorrhage (intracranial, GI, retroperitoneal)",
        "Warfarin-induced skin necrosis (microvascular thrombosis of skin capillaries)",
        "Purple toe syndrome (cholesterol crystal emboli — rare)"
      ],
      blackBox: [
        "Hemorrhage risk — major, sometimes fatal bleeding requiring reversal with vitamin K and/or FFP or 4-factor PCC"
      ]
    },
    interactions: {
      drugs: [
        "Fluconazole, metronidazole, TMP-SMX, amiodarone, ciprofloxacin — INCREASE INR (CYP2C9 inhibitors or warfarin displacement)",
        "Rifampin, carbamazepine, phenytoin, St. John's Wort — DECREASE INR (CYP2C9/3A4 inducers)",
        "Aspirin, NSAIDs — additive bleeding risk",
        "Broad-spectrum antibiotics — alter gut flora (decrease Vit K synthesis) → increase INR"
      ],
      foods: [
        "Vitamin K-rich foods (kale, spinach, broccoli, Brussels sprouts) — DECREASE INR; consistency is key — do not avoid, just eat consistent amounts",
        "Grapefruit juice — inhibits CYP3A4 → increases warfarin levels"
      ]
    },
    monitoring: [
      "INR (goal varies by indication): A-fib = 2.0–3.0; mechanical mitral valve = 2.5–3.5; mechanical aortic valve = 2.0–3.0",
      "Frequency: daily when initiating, then every 1–2 weeks when stable, then monthly once therapeutic",
      "CBC and LFTs at baseline; periodic reassessment",
      "Point-of-care INR home monitoring available for reliable patients"
    ],
    dosing: {
      adultGeneral: "Typical starting dose 2–5 mg/day; individualize based on age, weight, hepatic function, interacting medications, and VKORC1/CYP2C9 pharmacogenomics. Elderly: start 2 mg/day.",
      renalAdjustment: "Use with caution in CKD (metabolites accumulate); more frequent INR monitoring required",
      hepaticAdjustment: "Avoid in severe hepatic impairment — unpredictable INR response; reduced synthesis of clotting factors even without warfarin",
      pediatricNote: "Pediatric dosing complex — 0.1–0.2 mg/kg/day to start; INR monitored frequently; LMWH often preferred"
    },
    clinicalPearls: [
      "Supratherapeutic INR management: INR 4–10 without bleeding → hold warfarin ± oral vitamin K 1–2 mg; INR >10 without bleeding → hold + oral vitamin K 2.5–5 mg; Any INR with major bleeding → hold warfarin + 4-factor PCC (preferred) or FFP + IV vitamin K 10 mg.",
      "Bridging therapy: historically required for high-risk patients perioperatively, but BRIDGE trial showed no benefit in A-fib patients — bridging increases bleeding without reducing thromboembolism. Still needed for mechanical valves."
    ],
    boardRecallTip: "Warfarin reversal: Vitamin K (slow, 12–24h), FFP (fast but volume load), 4-factor PCC (fast, preferred). Factor VII falls first → early INR rise ≠ full anticoagulation. Protein C drops first on initiation → skin necrosis risk."
  },
  {
    id: "im-drug-furosemide",
    name: "Furosemide",
    brandNames: ["Lasix"],
    drugClass: "Loop diuretic",
    rotations: ["internal-medicine", "family-medicine"],
    indications: [
      "Acute decompensated heart failure (volume overload)",
      "Chronic heart failure — maintenance diuresis",
      "Hypertension (less preferred — thiazides preferred for uncomplicated HTN)",
      "Edema from liver cirrhosis or nephrotic syndrome",
      "Hypercalcemia of malignancy (promotes calciuresis with IV saline)",
      "Hyperkalemia — promotes kaliuresis"
    ],
    mechanismOfAction: "Furosemide inhibits the Na-K-2Cl cotransporter (NKCC2) in the thick ascending limb of the loop of Henle, blocking sodium, potassium, and chloride reabsorption. This impairs the renal concentrating gradient, producing a large-volume, isotonic diuresis. Loop diuretics are the most potent diuretics (effect even at low GFR, unlike thiazides which require GFR >30 to work). Also causes venodilation (preload reduction) within minutes of IV administration — important in acute pulmonary edema.",
    contraindications: {
      absolute: [
        "Anuria (no benefit; cannot concentrate in tubular lumen)",
        "Allergy to furosemide or sulfonamides (cross-reactivity possible but often overstated)"
      ],
      relative: [
        "Severe hypovolemia or dehydration",
        "Hypokalemia or hyponatremia (worsens electrolyte derangements)",
        "Hepatic coma with hyponatremia (risk of encephalopathy from electrolyte shifts)",
        "Concurrent use of aminoglycosides (synergistic ototoxicity)"
      ]
    },
    sideEffects: {
      common: [
        "Hypokalemia (most common — monitor K+; supplement or add K-sparing diuretic)",
        "Hyponatremia, hypomagnesemia, hypocalcemia",
        "Volume depletion/dehydration (orthostatic hypotension, dizziness)",
        "Increased BUN/creatinine (prerenal azotemia)"
      ],
      serious: [
        "Ototoxicity (tinnitus, hearing loss — especially with high IV doses or concurrent aminoglycoside use)",
        "Severe electrolyte disturbances",
        "Metabolic alkalosis (from H+ loss in collecting duct)",
        "Gout (increased uric acid reabsorption)"
      ]
    },
    interactions: {
      drugs: [
        "ACE inhibitors/ARBs — additive hypotension; may cause acute kidney injury with aggressive diuresis",
        "Aminoglycosides — synergistic ototoxicity and nephrotoxicity",
        "NSAIDs — reduce diuretic efficacy (inhibit prostaglandin-mediated renal vasodilation)",
        "Digoxin — hypokalemia from furosemide increases digoxin toxicity risk",
        "Lithium — increased lithium toxicity (volume depletion reduces renal lithium clearance)"
      ],
      foods: [
        "High-sodium diet blunts diuretic effect — dietary Na restriction (<2 g/day) enhances response"
      ]
    },
    monitoring: [
      "Electrolytes (Na, K, Mg, Cl): before initiation, 1–2 weeks after dose change, then every 1–6 months",
      "BUN and creatinine: monitor for diuretic-induced prerenal azotemia",
      "Blood pressure and orthostatic vitals: especially in elderly",
      "Daily weights (outpatient HF): goal ≤1 kg/day loss; instruct patient to call if weight up >2–3 lbs in 24h or >5 lbs in week",
      "Urine output (inpatient): goal 0.5–1 mL/kg/hr; in HF, target at least 200–400 mL/hr after IV dose"
    ],
    dosing: {
      adultGeneral: "Oral: 20–80 mg once or twice daily (max 600 mg/day). IV: 20–40 mg slow IV push (over 1–2 min); if no response in 1 hour, double dose. Continuous infusion: 5–20 mg/hr for refractory HF.",
      renalAdjustment: "Higher doses needed in CKD (reduced tubular secretion). eGFR 30–60: may need 40–160 mg. eGFR <30: doses up to 120–200 mg may be required; switch to continuous infusion in severe CKD.",
      hepaticAdjustment: "Reduce dose in cirrhosis — risk of encephalopathy from electrolyte shifts; combine with spironolactone (preferred combination for cirrhotic ascites, 100:40 spiro:furo ratio)",
      pediatricNote: "1–2 mg/kg per dose IV/IM/oral; max 6 mg/kg/day"
    },
    clinicalPearls: [
      "Diuretic resistance: occurs when patients fail to respond adequately. Strategies: IV over oral, continuous infusion over bolus, add thiazide (metolazone 2.5–5 mg oral 30 min before furosemide creates sequential nephron blockade — very potent, monitor electrolytes closely), restrict dietary sodium.",
      "In HF, oral bioavailability of furosemide varies 10–100% due to gut wall edema — IV dosing is 2× more bioavailable. Torsemide has better oral bioavailability (~80%) and longer duration — preferred in HF for this reason."
    ],
    boardRecallTip: "Loop diuretics: Furosemide, bumetanide, torsemide, ethacrynic acid. Ototoxicity risk: ethacrynic acid > furosemide. Only loop diuretic safe in sulfa allergy: ethacrynic acid. Loops cause: hypoKalemia, hypoMagnesia, hypoCalcemia, metabolic ALKalosis — 'COME' = Calcium Out, Magnesium Excreted."
  },
  {
    id: "im-drug-digoxin",
    name: "Digoxin",
    brandNames: ["Lanoxin"],
    drugClass: "Cardiac glycoside — positive inotrope / rate-controlling agent",
    rotations: ["internal-medicine", "family-medicine"],
    indications: [
      "Heart failure with reduced ejection fraction (HFrEF) — ventricular rate control and symptom improvement (not mortality benefit)",
      "Atrial fibrillation — ventricular rate control (particularly in patients with concurrent HFrEF)",
      "Atrial flutter — rate control (less effective than in A-fib)"
    ],
    mechanismOfAction: "Digoxin inhibits the Na-K-ATPase pump on cardiac myocytes. This increases intracellular Na+, which then drives the Na-Ca exchanger to move Ca2+ in (reduced extrusion). The resulting rise in intracellular Ca2+ enhances myocardial contractility (positive inotropy). For rate control, digoxin enhances vagal (parasympathetic) tone, slowing AV nodal conduction (negative dromotropy). Digoxin has a very narrow therapeutic index — toxicity occurs close to therapeutic levels.",
    contraindications: {
      absolute: [
        "Ventricular fibrillation",
        "Second or third degree AV block (without pacemaker)",
        "WPW syndrome with A-fib (digoxin accelerates accessory pathway conduction → fatal VFib)"
      ],
      relative: [
        "Hypokalemia (markedly increases toxicity risk)",
        "Hypomagnesemia",
        "Renal insufficiency (primarily renally cleared — narrow therapeutic index with CKD)",
        "Hypothyroidism (decreased clearance — lower doses needed)"
      ]
    },
    sideEffects: {
      common: [
        "GI: nausea, vomiting, anorexia, diarrhea (early toxicity signs)",
        "Visual disturbances: yellow-green halos around lights, blurred vision (xanthopsia)",
        "Fatigue, weakness, confusion (especially in elderly)"
      ],
      serious: [
        "Digoxin toxicity: any arrhythmia (PVCs, bigeminy, AV block, junctional tachycardia, atrial tachycardia with block — PAT with block is classic digoxin toxicity pattern)",
        "Hyperkalemia (acute poisoning — Na-K-ATPase inhibition blocks K uptake)",
        "Bradycardia and complete heart block"
      ]
    },
    interactions: {
      drugs: [
        "Amiodarone, verapamil, diltiazem, quinidine — markedly increase digoxin levels (reduce dose by 50%)",
        "Hypokalemia-causing drugs (loop diuretics, thiazides, amphotericin B) — dramatically increase toxicity risk",
        "Cholestyramine, antacids, kaolin-pectin — reduce digoxin absorption",
        "Clarithromycin, erythromycin, itraconazole — increase digoxin levels (P-gp inhibition)"
      ],
      foods: [
        "High-fiber foods (bran, oat) taken simultaneously reduce absorption — take digoxin consistently 1 hour before meals",
        "St. John's Wort — induces P-gp, reduces digoxin blood levels"
      ]
    },
    monitoring: [
      "Serum digoxin level: therapeutic range 0.5–0.9 ng/mL for HFrEF (mortality risk increases >1.0); draw at least 6 hours after last dose (distribution phase)",
      "Electrolytes (K+ especially): hypokalemia is the most common precipitant of digoxin toxicity; maintain K+ 4.0–5.0 mEq/L",
      "Renal function (BUN, creatinine, eGFR): digoxin is 70% renally eliminated",
      "EKG: for PR prolongation, bradycardia, arrhythmias",
      "Heart rate at each visit — hold if HR <60 bpm"
    ],
    dosing: {
      adultGeneral: "0.125–0.25 mg PO daily (no loading dose required for HF). A-fib rate control: may use 0.5 mg IV load in divided doses over 24 hours for acute setting.",
      renalAdjustment: "eGFR 30–60: 0.0625–0.125 mg every 1–2 days. eGFR <30: 0.0625 mg every 2–3 days or avoid; very close level monitoring required",
      hepaticAdjustment: "No hepatic dose adjustment (primarily renally cleared)",
      pediatricNote: "Highly weight-based and age-dependent dosing; loading doses used in pediatrics — always use a dosing reference. Neonates are particularly sensitive."
    },
    clinicalPearls: [
      "Digoxin toxicity treatment: Digoxin-specific antibody fragments (Digibind/DigiFab) — each vial neutralizes ~0.5 mg digoxin. Calculate dose: (serum level [ng/mL] × weight [kg]) ÷ 100 = number of vials. Do NOT give calcium in digoxin toxicity ('stone heart') — worsens intracellular Ca overload.",
      "Digoxin is useful for rate control in A-fib at rest but loses efficacy with exercise (sympathetic override dominates vagal effects). Beta-blockers or CCBs are preferred for active patients."
    ],
    boardRecallTip: "PAT with block = digoxin toxicity until proven otherwise. Toxicity risk: HypoKalemia > HypoMag > Renal failure > Hypothyroidism. Antidote: Digibind. Never give calcium in toxicity. WPW + A-fib: avoid digoxin, verapamil, diltiazem — all can accelerate accessory pathway → VFib."
  },
  {
    id: "im-drug-prednisone-im",
    name: "Methylprednisolone (IV) / Prednisone (Oral)",
    brandNames: ["Solu-Medrol (IV)", "Medrol Dosepak (oral)", "Deltasone (prednisone)"],
    drugClass: "Systemic glucocorticoid",
    rotations: ["internal-medicine", "family-medicine", "emergency-medicine"],
    indications: [
      "Acute exacerbation of COPD (prednisone 40 mg × 5 days)",
      "Asthma exacerbation",
      "Acute COPD exacerbation with eosinophilia",
      "Inflammatory and autoimmune conditions: SLE, vasculitis, IBD, polymyalgia rheumatica, temporal arteritis",
      "Anaphylaxis (adjunctive — epinephrine is first-line)",
      "Spinal cord compression from metastatic malignancy (high-dose dexamethasone)",
      "Adrenal insufficiency — stress dosing",
      "Transplant rejection prophylaxis"
    ],
    mechanismOfAction: "Glucocorticoids bind cytoplasmic glucocorticoid receptors (GRs) that translocate to the nucleus and modulate gene transcription. Anti-inflammatory effects: inhibit NF-κB → reduce pro-inflammatory cytokines (IL-1, IL-6, TNF-α), decrease production of arachidonic acid metabolites (prostaglandins, leukotrienes via phospholipase A2 inhibition via lipocortin), reduce neutrophil migration, and promote lymphocyte apoptosis. Also upregulate epinephrine-receptor sensitivity (permissive effect for catecholamines).",
    contraindications: {
      absolute: [
        "Active untreated systemic fungal infection (corticosteroids promote dissemination)",
        "Live vaccines within 2 weeks of high-dose immunosuppressive steroids"
      ],
      relative: [
        "Uncontrolled diabetes mellitus (worsens hyperglycemia significantly)",
        "Active peptic ulcer disease (combine with PPI)",
        "Active or latent tuberculosis (screen with TST/IGRA before long-term steroids)",
        "Osteoporosis (supplement calcium + vitamin D; consider bisphosphonate for courses >3 months)",
        "Psychosis or severe psychiatric history (steroids can induce steroid psychosis)"
      ]
    },
    sideEffects: {
      common: [
        "Hyperglycemia (most common — even in non-diabetics; typically peaks 4–6 hours after morning dose)",
        "Fluid retention and weight gain",
        "Insomnia, mood changes, euphoria",
        "Increased appetite"
      ],
      serious: [
        "Hypothalamic-pituitary-adrenal (HPA) axis suppression (taper required for >3 weeks use to prevent adrenal insufficiency)",
        "Osteoporosis and avascular necrosis (femoral head most common)",
        "Cushing's syndrome with chronic use (moon face, buffalo hump, striae, central obesity)",
        "Opportunistic infections (especially Pneumocystis jirovecii pneumonia with prolonged high-dose use — prophylax with TMP-SMX if prednisone >20 mg × >4 weeks)",
        "Steroid myopathy (proximal muscle weakness)",
        "Cataract formation and glaucoma"
      ]
    },
    interactions: {
      drugs: [
        "NSAIDs — synergistic GI toxicity (peptic ulcer, GI bleed)",
        "Insulin and oral hypoglycemics — steroids cause insulin resistance; titrate up diabetes meds",
        "Rifampin, phenytoin, carbamazepine — CYP3A4 inducers reduce steroid efficacy",
        "Ketoconazole, ritonavir — increase steroid levels",
        "Fluoroquinolones — increased tendon rupture risk with steroids"
      ],
      foods: [
        "Grapefruit juice — inhibits CYP3A4 → increases methylprednisolone levels"
      ]
    },
    monitoring: [
      "Blood glucose: check 4–6 hours after morning dose for steroid-induced hyperglycemia; adjust insulin or add correctional sliding scale",
      "Blood pressure: steroids cause Na retention → hypertension",
      "Weight: daily inpatient (fluid retention monitoring)",
      "Electrolytes: hypokalemia from mineralocorticoid effect",
      "Bone density (DEXA): baseline and every 1–2 years with long-term use",
      "Ophthalmology: annual eye exams for long-term users (cataracts, glaucoma)"
    ],
    dosing: {
      adultGeneral: "COPD exacerbation: prednisone 40 mg PO daily × 5 days. Acute asthma: 40–60 mg/day. High-dose pulse: methylprednisolone 500–1000 mg IV daily × 3 days (vasculitis, SLE). Physiologic replacement: hydrocortisone 15–25 mg/day in divided doses (adrenal insufficiency).",
      renalAdjustment: "No formal dose adjustment, but fluid retention and hyperkalemia risk increase in CKD; monitor closely",
      hepaticAdjustment: "Prednisone is a prodrug converted to prednisolone in the liver — in severe hepatic failure, use prednisolone directly (not prednisone)",
      pediatricNote: "Asthma exacerbation: 1–2 mg/kg/day (max 60 mg) × 3–5 days. Croup: dexamethasone 0.6 mg/kg single dose preferred"
    },
    clinicalPearls: [
      "Taper rule: If >3 weeks of prednisone, taper to prevent adrenal crisis. Rate of taper depends on duration: short courses (<2 weeks) can stop abruptly. Long courses: decrease by 10 mg every 1–2 weeks until 20 mg, then by 2.5–5 mg every 1–2 weeks. Stress dosing during illness: double or triple daily dose during minor illness; 100 mg hydrocortisone IV q8h for surgical stress.",
      "PCP prophylaxis: Trimethoprim-sulfamethoxazole (Bactrim DS) 1 tab three times weekly if prednisone ≥20 mg/day for >4 weeks. Also check for latent TB with IGRA before starting long-term steroids."
    ],
    boardRecallTip: "Steroid side effects by system: Metabolic (hyperglycemia, hyperlipidemia, weight gain), Musculoskeletal (osteoporosis, avascular necrosis, proximal myopathy), Eye (cataracts, glaucoma), GI (ulcers — add PPI), Infectious (opportunistic infections), Adrenal (suppression — taper if >3 weeks)."
  },
  {
    id: "im-drug-vancomycin",
    name: "Vancomycin",
    brandNames: ["Vancocin"],
    drugClass: "Glycopeptide antibiotic",
    rotations: ["internal-medicine", "emergency-medicine"],
    indications: [
      "MRSA infections — pneumonia, bacteremia, endocarditis, SSTI, osteomyelitis",
      "Gram-positive infections in penicillin/cephalosporin-allergic patients",
      "C. difficile colitis (oral vancomycin 125 mg QID × 10 days — systemic form used for other indications)",
      "Empiric coverage for healthcare-associated infections pending MRSA status",
      "CNS infections (meningitis) due to penicillin-resistant pneumococci — combined with ceftriaxone"
    ],
    mechanismOfAction: "Vancomycin binds the D-Ala-D-Ala terminus of peptidoglycan precursors in the bacterial cell wall. This sterically blocks transglycosylation and transpeptidation enzymes (penicillin-binding proteins), preventing peptidoglycan cross-linking and cell wall synthesis. Unlike beta-lactams which bind PBPs directly, vancomycin works upstream by sequestering the substrate. MRSA resistance mechanism (VRSA/VISA): alteration of D-Ala-D-Ala to D-Ala-D-Lac, reducing vancomycin binding affinity ~1000-fold.",
    contraindications: {
      absolute: [
        "Known severe anaphylaxis to vancomycin (rare — most reactions are infusion-related, not true allergy)"
      ],
      relative: [
        "Pre-existing auditory impairment or renal impairment (requires dose adjustment and close monitoring)",
        "Concurrent use of other nephrotoxins (aminoglycosides, NSAIDs, amphotericin B)"
      ]
    },
    sideEffects: {
      common: [
        "Infusion-related reactions (Red Man Syndrome): flushing, erythema of face/neck/upper torso, pruritus from histamine release — not a true allergy; treat by slowing infusion rate, diphenhydramine pre-treatment"
      ],
      serious: [
        "Nephrotoxicity (especially with high trough levels or concurrent nephrotoxins) — now guided by AUC/MIC monitoring to minimize",
        "Ototoxicity (cochlear and vestibular — typically with very high levels, especially concurrent aminoglycosides)"
      ]
    },
    interactions: {
      drugs: [
        "Aminoglycosides — synergistic bactericidal activity against enterococci; additive nephrotoxicity",
        "Loop diuretics (furosemide) — additive ototoxicity",
        "Piperacillin-tazobactam — observational data suggest increased nephrotoxicity when combined (controversial)"
      ],
      foods: []
    },
    monitoring: [
      "AUC/MIC-based monitoring (ASHP/IDSA/SIDP 2020 guidelines): target AUC 400–600 mg·hr/L for serious MRSA infections (AUC monitoring preferred over trough-only monitoring)",
      "Alternatively (trough-based where AUC not available): target trough 15–20 mcg/mL for serious infections; 10–15 mcg/mL for less severe. Troughs <10 = therapeutic failure risk; >20 = nephrotoxicity risk",
      "Serum creatinine and BUN: baseline then every 48–72 hours",
      "CBC for leukopenia with prolonged courses"
    ],
    dosing: {
      adultGeneral: "15–20 mg/kg/dose IV every 8–12 hours (actual body weight; max single dose 3 g). Infuse over at least 60 min (over 90–120 min for doses >1.5 g to prevent Red Man Syndrome).",
      renalAdjustment: "Adjust interval: eGFR 40–60: q12–24h; eGFR 20–40: q24–48h; eGFR <20 or HD: 15–20 mg/kg every 48–72h with levels to guide re-dosing; supplemental dose post-HD",
      hepaticAdjustment: "No hepatic dose adjustment required (renally eliminated)",
      pediatricNote: "60–80 mg/kg/day divided q6–8h (higher doses for CNS infection). Neonates: 10–15 mg/kg q6–12h based on gestational age."
    },
    clinicalPearls: [
      "Red Man Syndrome vs. true allergy: Red Man Syndrome occurs during infusion, causes diffuse flushing/erythema (not urticaria/angioedema/anaphylaxis) — stop infusion, give diphenhydramine, then restart at slower rate. True IgE-mediated anaphylaxis is rare; requires alternative agents (daptomycin for non-pulmonary MRSA, linezolid for MRSA pneumonia/SSTI).",
      "Daptomycin cannot be used for MRSA pneumonia — it is inactivated by surfactant. Vancomycin or linezolid are preferred for MRSA pneumonia."
    ],
    boardRecallTip: "MRSA treatment: Vancomycin (preferred for bacteremia, endocarditis), Daptomycin (bacteremia — NOT pneumonia), Linezolid (pneumonia, SSTI), TMP-SMX (uncomplicated SSTI). Vancomycin AUC/MIC target 400–600. Red Man Syndrome: slow the infusion, not an allergy."
  },
  {
    id: "im-drug-morphine",
    name: "Morphine Sulfate",
    brandNames: ["MS Contin (ER)", "MSIR (IR)", "Roxanol"],
    drugClass: "Opioid analgesic — mu-opioid receptor agonist",
    rotations: ["internal-medicine", "emergency-medicine"],
    indications: [
      "Severe acute pain (post-operative, trauma, cancer pain)",
      "Dyspnea in palliative care (reduces sensation of breathlessness)",
      "Acute pulmonary edema (venodilation reduces preload; reduces anxiety)",
      "Chronic cancer pain (around-the-clock dosing with breakthrough)"
    ],
    mechanismOfAction: "Morphine binds mu-opioid receptors (MOR) in the CNS (periaqueductal gray, dorsal horn of spinal cord), peripheral nociceptors, and GI tract. MOR activation inhibits adenylyl cyclase (reduces cAMP), activates inwardly-rectifying K+ channels (hyperpolarization), and inhibits voltage-gated Ca2+ channels — collectively reducing neuronal excitability and neurotransmitter release in pain pathways. Also activates descending inhibitory pathways. Active metabolite morphine-6-glucuronide (M6G) accumulates in renal failure and causes prolonged sedation.",
    contraindications: {
      absolute: [
        "Known hypersensitivity to morphine or other opioids (true allergy; codeine allergy ≠ morphine allergy in most cases)",
        "Acute respiratory depression with hypoxia or hypercapnia (without airway support)",
        "Paralytic ileus",
        "Concurrent MAOI use or within 14 days"
      ],
      relative: [
        "Severe renal failure (M6G accumulation — use fentanyl or methadone instead)",
        "Elevated ICP (mild concern — respiratory depression → hypercapnia → vasodilation → ICP rise)",
        "Hypothyroidism, Addison's disease, CNS depression",
        "Substance use disorder history (opioid use disorder — use with caution, multi-disciplinary approach)"
      ]
    },
    sideEffects: {
      common: [
        "Constipation (nearly universal — always prescribe stimulant laxative concurrently; methylnaltrexone if refractory)",
        "Nausea and vomiting (most common early; tolerance develops within days)",
        "Sedation, CNS depression",
        "Pruritus (histamine-mediated from mast cell degranulation — more with morphine than other opioids)",
        "Urinary retention (especially in elderly men with BPH)"
      ],
      serious: [
        "Respiratory depression (life-threatening — opioid-induced respiratory depression: RR <8-10, SpO2 <90%, pinpoint pupils, obtundation)",
        "Opioid-induced hyperalgesia (paradoxical increased pain sensitivity with high doses)"
      ],
      blackBox: [
        "Respiratory depression and death — risk increased with concurrent CNS depressants (benzodiazepines, alcohol, barbiturates), sleep apnea, opioid naivety",
        "Addiction, abuse, and misuse potential"
      ]
    },
    interactions: {
      drugs: [
        "Benzodiazepines and CNS depressants — synergistic respiratory depression (boxed warning FDA 2016)",
        "MAOIs — serotonin syndrome and severe CNS/respiratory depression",
        "CYP3A4 inhibitors (ketoconazole, ritonavir) — increase morphine exposure",
        "Naloxone/naltrexone — precipitate acute withdrawal and reversal of analgesia"
      ],
      foods: [
        "Alcohol — potentiates CNS and respiratory depression; contraindicated with ER formulations (dose-dumping risk)"
      ]
    },
    monitoring: [
      "Respiratory rate, oxygen saturation (SpO2), level of consciousness: every 1–4 hours in opioid-naive patients",
      "Pain score before and 30 minutes after administration",
      "Bowel function: document last bowel movement; ensure stimulant laxative ordered",
      "Opioid risk assessment tools (ORT, DIRE) in outpatient settings",
      "Prescription drug monitoring program (PDMP) check before prescribing"
    ],
    dosing: {
      adultGeneral: "Acute severe pain: 2–4 mg IV q2–4h PRN (opioid-naive). Oral: 15–30 mg q4h IR. CR/ER: 15–30 mg q12h with IR for breakthrough (15% of total daily dose q4h PRN).",
      renalAdjustment: "AVOID in severe renal impairment (eGFR <30) — M6G accumulates → prolonged sedation and respiratory depression. Use fentanyl (safest in renal failure) or hydromorphone (less M6G accumulation).",
      hepaticAdjustment: "Reduce dose 25–50% in moderate-severe hepatic impairment; increase dosing interval",
      pediatricNote: "0.05–0.1 mg/kg IV q2–4h PRN; PCA available for children ≥5–7 years. Neonates: 0.01–0.02 mg/kg q4–8h with careful monitoring."
    },
    clinicalPearls: [
      "Opioid overdose reversal: Naloxone 0.4–2 mg IV/IM/intranasal — repeat every 2–3 minutes as needed (short half-life: 60–90 min — may need repeated doses or infusion for long-acting opioids). In opioid-dependent patients with acute pain, titrate naloxone carefully (0.04–0.1 mg) to avoid precipitating withdrawal.",
      "Equianalgesic conversions: Morphine 30 mg PO ≈ morphine 10 mg IV ≈ hydromorphone 7.5 mg PO ≈ oxycodone 20 mg PO. Fentanyl patch: morphine 60 mg/day PO ≈ fentanyl 25 mcg/hr patch."
    ],
    boardRecallTip: "Opioid triad: Miosis (pinpoint pupils), CNS depression, Respiratory depression. Reversal: Naloxone. Avoid morphine in renal failure (M6G). Constipation: tolerance NEVER develops — always prescribe stimulant laxative (senna). Fentanyl: safest in renal failure + liver disease (no active metabolites)."
  },
  {
    id: "im-drug-alteplase",
    name: "Alteplase (tPA)",
    brandNames: ["Activase", "Cathflo"],
    drugClass: "Thrombolytic — tissue plasminogen activator (recombinant)",
    rotations: ["internal-medicine", "emergency-medicine"],
    indications: [
      "Acute ischemic stroke: within 3–4.5 hours of symptom onset",
      "Massive pulmonary embolism with hemodynamic instability",
      "STEMI (when primary PCI unavailable within 120 minutes of first medical contact)",
      "Catheter-directed thrombolysis for DVT (selected patients)",
      "Occluded central venous catheter (Cathflo — 2 mg intracatheter)"
    ],
    mechanismOfAction: "Alteplase is a recombinant tissue plasminogen activator (rtPA) that converts plasminogen to plasmin. Plasmin degrades fibrin (thrombus), dissolving the clot (fibrinolysis). Alteplase preferentially activates fibrin-bound plasminogen (clot-selective) over circulating plasminogen, reducing systemic fibrinolysis. However, systemic fibrinolysis still occurs — causing serious hemorrhagic risk. Unlike streptokinase, alteplase is not antigenic.",
    contraindications: {
      absolute: [
        "Active internal bleeding",
        "History of intracranial hemorrhage",
        "Ischemic stroke within 3 months (or within 4.5 hours for tPA itself for stroke — time window is the treatment)",
        "Intracranial neoplasm, AVM, aneurysm",
        "Recent intracranial or spinal surgery or head trauma (<3 months)",
        "Severe uncontrolled hypertension (SBP >185/DBP >110 for stroke — must treat BP first)",
        "Active bleeding diathesis or current anticoagulation with INR >1.7"
      ],
      relative: [
        "Major surgery or trauma within 14 days",
        "GI or urinary tract bleeding within 21 days",
        "Lumbar puncture within 7 days",
        "Pregnancy",
        "Age >80 years (for stroke — higher hemorrhage risk; still may be used with appropriate risk discussion)"
      ]
    },
    sideEffects: {
      common: [
        "Bleeding at IV access sites",
        "Ecchymoses"
      ],
      serious: [
        "Symptomatic intracranial hemorrhage (sICH): 6.4% in NINDS trial for ischemic stroke; fatality rate 45–50%",
        "Systemic hemorrhage (GI, retroperitoneal, pericardial)",
        "Angioedema (rare — associated with ACE inhibitor use; treat with epinephrine)"
      ],
      blackBox: [
        "Bleeding — contraindicated in active internal bleeding or conditions with high bleeding risk"
      ]
    },
    interactions: {
      drugs: [
        "Anticoagulants (heparin, warfarin, DOACs) — additive hemorrhage risk",
        "Antiplatelet agents (aspirin, P2Y12 inhibitors) — additive hemorrhage risk"
      ],
      foods: []
    },
    monitoring: [
      "Neurologic status every 15 minutes during infusion, every 30 minutes for 6 hours, then hourly × 18 hours (stroke protocol)",
      "Blood pressure: keep SBP <180/DBP <105 during and 24 hours after thrombolysis",
      "Signs of bleeding: IV site, gum bleeding, skin ecchymoses",
      "No arterial punctures at non-compressible sites during/after infusion",
      "CT head immediately if neurologic deterioration (suspect sICH)"
    ],
    dosing: {
      adultGeneral: "Ischemic stroke: 0.9 mg/kg IV (max 90 mg); give 10% as bolus over 1 min, remaining 90% over 60 min. Massive PE: 100 mg IV over 2 hours. STEMI: 15 mg IV bolus, then 0.75 mg/kg over 30 min (max 50 mg), then 0.5 mg/kg over 60 min (max 35 mg).",
      renalAdjustment: "No dose adjustment needed",
      hepaticAdjustment: "Use with caution in severe hepatic disease (reduced clotting factor synthesis increases bleeding risk)",
      pediatricNote: "Catheter occlusion (Cathflo): 2 mg per lumen; dwell × 30–120 min. Systemic thrombolysis in pediatrics: 0.1–0.6 mg/kg/hr — specialist guidance required"
    },
    clinicalPearls: [
      "Stroke door-to-needle time target: ≤60 minutes (benchmark) — the faster the better. 'Time is brain' — 1.9 million neurons die per minute of untreated ischemic stroke. NIH Stroke Scale (NIHSS) should be performed before and after tPA.",
      "tPA is absolutely contraindicated if BP >185/110 for stroke — but you CAN lower BP (labetalol 10–20 mg IV or nicardipine 5 mg/hr infusion) to meet the threshold, then give tPA."
    ],
    boardRecallTip: "Stroke tPA window: 3–4.5 hours from LAST KNOWN WELL (not symptom discovery). Contraindications: prior stroke within 3 months, ICH, bleeding, INR >1.7, BP >185/110, blood glucose <50 or >400. sICH complicates 6% of treated strokes — immediate non-contrast CT if neurologic worsening."
  },
  {
    id: "im-drug-colchicine",
    name: "Colchicine",
    brandNames: ["Colcrys", "Mitigare", "Lodoco"],
    drugClass: "Anti-inflammatory — microtubule polymerization inhibitor",
    rotations: ["internal-medicine", "family-medicine"],
    indications: [
      "Acute gout flare (treatment within 24 hours of attack onset)",
      "Gout flare prophylaxis during urate-lowering therapy initiation",
      "Familial Mediterranean fever (FMF) — prophylaxis and acute episodes",
      "Acute pericarditis (first-line adjunct to NSAIDs)",
      "Recurrent pericarditis prevention",
      "Cardiovascular event reduction (LoDoCo2 trial: 0.5 mg daily in stable CAD)"
    ],
    mechanismOfAction: "Colchicine binds tubulin and prevents microtubule polymerization. This inhibits neutrophil and monocyte migration to the site of urate crystal deposition by disrupting cytoskeletal function required for chemotaxis and degranulation. Additionally, colchicine inhibits NLRP3 inflammasome activation and IL-1β production — reducing the inflammatory cascade triggered by monosodium urate crystals. Colchicine does NOT lower uric acid levels.",
    contraindications: {
      absolute: [
        "Severe renal impairment (eGFR <15) with concurrent CYP3A4 or P-gp inhibitor use",
        "Severe hepatic impairment with concurrent CYP3A4 or P-gp inhibitor use"
      ],
      relative: [
        "Moderate-severe renal or hepatic impairment (dose reduce)",
        "Concurrent strong CYP3A4 inhibitors (clarithromycin, ketoconazole, ritonavir) — significantly increase colchicine levels → toxicity"
      ]
    },
    sideEffects: {
      common: [
        "GI toxicity: diarrhea, nausea, vomiting, abdominal cramping (dose-limiting; dose reduce if occurs)",
        "Myopathy (especially with concurrent statins)"
      ],
      serious: [
        "Colchicine toxicity (overdose): multiorgan failure — GI (24 hours), bone marrow suppression (days 2–7 → neutropenia, thrombocytopenia), cardiorespiratory failure (days 7–14). No antidote — supportive care only.",
        "Rhabdomyolysis (with cyclosporine or statin co-use)",
        "Peripheral neuropathy (rare, chronic use)"
      ]
    },
    interactions: {
      drugs: [
        "Strong CYP3A4 inhibitors (clarithromycin, ketoconazole, ritonavir, grapefruit) — markedly increase colchicine levels → potentially fatal toxicity. Reduce dose by 50% or avoid.",
        "P-glycoprotein inhibitors (cyclosporine, verapamil, diltiazem) — increase colchicine exposure",
        "Statins and fibrates — additive myopathy risk"
      ],
      foods: [
        "Grapefruit juice — CYP3A4 inhibition increases colchicine levels"
      ]
    },
    monitoring: [
      "Renal function (eGFR) and liver function tests before starting",
      "CBC for neutropenia/thrombocytopenia with long-term use",
      "CK if myopathy symptoms (muscle weakness, pain) — especially with concurrent statin use",
      "Resolution of acute gout symptoms (typically within 12–24 hours of initiation)"
    ],
    dosing: {
      adultGeneral: "Acute gout: 1.2 mg PO at first sign, then 0.6 mg 1 hour later (total 1.8 mg). Prophylaxis: 0.6 mg once or twice daily. Acute pericarditis: 0.5 mg BID × 3 months (weight ≤70 kg) or 1 mg BID (>70 kg).",
      renalAdjustment: "eGFR 30–60: use as directed but avoid repeated courses. eGFR 15–30: reduce dose 50% (0.6 mg once daily). eGFR <15: contraindicated for prophylaxis; use with extreme caution for acute treatment.",
      hepaticAdjustment: "Mild-moderate: use with caution; reduce dose. Severe: avoid.",
      pediatricNote: "FMF dosing: 0.3–1.8 mg/day based on weight. Not well established for acute gout in pediatrics."
    },
    clinicalPearls: [
      "Low-dose colchicine regimen (1.8 mg total) is equally effective as high-dose (4.8 mg total) with significantly less GI toxicity — this is now the preferred regimen per ACR guidelines. When GI symptoms occur, they are a dose-limiting signal, not a sign of toxicity per se.",
      "Colchicine should be started concurrently when initiating urate-lowering therapy (allopurinol or febuxostat) to prevent mobilization flares — continue for at least 3–6 months or until uric acid goal is achieved and stable."
    ],
    boardRecallTip: "Colchicine MOA: inhibits microtubule polymerization → blocks neutrophil chemotaxis + NLRP3 inflammasome (IL-1β). Does NOT lower uric acid. Major drug interaction: clarithromycin + colchicine = potentially fatal toxicity. Low-dose regimen (1.8 mg over 1 hour) preferred for acute gout."
  },
  {
    id: "im-drug-allopurinol",
    name: "Allopurinol",
    brandNames: ["Zyloprim", "Lopurin"],
    drugClass: "Xanthine oxidase inhibitor — urate-lowering agent",
    rotations: ["internal-medicine", "family-medicine"],
    indications: [
      "Gout — chronic prevention (urate-lowering therapy; first-line per ACR)",
      "Tumor lysis syndrome prophylaxis (during chemotherapy)",
      "Recurrent uric acid nephrolithiasis",
      "Hyperuricemia associated with chronic kidney disease"
    ],
    mechanismOfAction: "Allopurinol is metabolized to oxypurinol (active), which inhibits xanthine oxidase — the enzyme responsible for converting hypoxanthine → xanthine → uric acid. By blocking this final step in purine catabolism, allopurinol reduces serum uric acid production. The reduction in uric acid decreases tissue deposition of monosodium urate crystals and promotes dissolution of existing tophi over months to years. Target serum uric acid: <6 mg/dL for most gout patients; <5 mg/dL for tophaceous gout.",
    contraindications: {
      absolute: [
        "Concurrent azathioprine or 6-mercaptopurine use without dose reduction (allopurinol dramatically increases levels → severe myelosuppression — reduce azathioprine dose by 75%)",
        "Prior severe hypersensitivity reaction to allopurinol (SJS/TEN)"
      ],
      relative: [
        "HLA-B*58:01 allele carriers (Han Chinese, Thai, Korean populations) — high risk of severe cutaneous adverse reactions (SJS/TEN). Screen before initiating.",
        "Active acute gout flare — do NOT start during acute attack (wait 2–4 weeks after resolution)"
      ]
    },
    sideEffects: {
      common: [
        "Rash (maculopapular — occurs in 2–5%; can progress to SJS/TEN; stop if any rash develops)",
        "GI symptoms (nausea, diarrhea) — take with food",
        "Acute gout mobilization flare when starting therapy (start low, go slow; co-prescribe colchicine prophylaxis)"
      ],
      serious: [
        "Allopurinol hypersensitivity syndrome (AHS): fever, rash (up to SJS/TEN), hepatitis, eosinophilia, renal failure — risk increased with renal impairment and thiazide diuretics",
        "Stevens-Johnson Syndrome / Toxic Epidermal Necrolysis (SJS/TEN): strongly associated with HLA-B*58:01"
      ]
    },
    interactions: {
      drugs: [
        "Azathioprine and 6-mercaptopurine — CRITICAL: reduce dose by 75%; allopurinol inhibits their metabolism → potentially fatal myelosuppression",
        "Ampicillin/amoxicillin — significantly increased risk of rash",
        "Warfarin — increased anticoagulant effect",
        "Cyclosporine — increased cyclosporine levels",
        "Thiazide diuretics — increased allopurinol hypersensitivity syndrome risk"
      ],
      foods: []
    },
    monitoring: [
      "Serum uric acid: check 2–4 weeks after each dose change; target <6 mg/dL (<5 mg/dL for tophaceous gout)",
      "Renal function (eGFR): guides dosing; impaired renal function increases AHS risk",
      "CBC and LFTs: at baseline and periodically (especially if on other immunosuppressants)",
      "Watch for rash: patient education to stop medication and call immediately if any skin changes"
    ],
    dosing: {
      adultGeneral: "Start 100 mg daily (even 50 mg daily in renal impairment to minimize flare risk). Increase by 100 mg every 2–5 weeks to achieve uric acid target (max 800 mg/day, usually adequate at 300 mg/day).",
      renalAdjustment: "eGFR 60–90: start 100 mg, titrate to effect. eGFR 30–60: start 50 mg daily, increase cautiously. eGFR <30: start 50 mg every 2–3 days; avoid thiazide diuretics concurrently.",
      hepaticAdjustment: "Use with caution in severe hepatic disease; no specific dose established",
      pediatricNote: "Tumor lysis syndrome prophylaxis: 200–400 mg/m²/day (max 800 mg/day) starting 1–2 days before chemotherapy"
    },
    clinicalPearls: [
      "Start allopurinol at least 2–4 weeks after acute gout resolves — starting during an acute attack can prolong or worsen inflammation. Always co-prescribe colchicine 0.6 mg daily or BID for prophylaxis during first 3–6 months.",
      "Febuxostat (Uloric) is an alternative xanthine oxidase inhibitor — more potent, no renal dose adjustment needed (eGFR ≥30), but FDA Black Box Warning: increased cardiovascular mortality vs. allopurinol in CARES trial — use only if allopurinol not tolerated."
    ],
    boardRecallTip: "Allopurinol + azathioprine = potentially fatal myelosuppression (reduce aza dose by 75%). HLA-B*58:01 = SJS/TEN risk in Asians. Start low, go slow. Don't start during acute flare — wait 2–4 weeks. Colchicine prophylaxis required during ULT initiation."
  }
];
