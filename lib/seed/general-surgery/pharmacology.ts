// @ts-nocheck
import type { Drug } from "@/types";

export const generalSurgeryPharmacology: Drug[] = [
  {
    id: "gs-drug-cefazolin",
    name: "Cefazolin",
    brandNames: ["Ancef", "Kefzol"],
    drugClass: "First-generation cephalosporin antibiotic",
    rotations: ["general-surgery", "internal-medicine"],
    indications: [
      "Surgical site infection prophylaxis (drug of choice for most clean and clean-contaminated procedures)",
      "Skin and soft tissue infections (MSSA)",
      "Urinary tract infections (uncomplicated)",
      "Pneumonia (mild, community-acquired, MSSA)",
      "Bacteremia from susceptible organisms"
    ],
    mechanismOfAction: "Cefazolin binds penicillin-binding proteins (PBPs) in the bacterial cell wall, inhibiting transpeptidation (cross-linking of peptidoglycan strands). This disrupts cell wall synthesis, leading to osmotic instability and bacterial lysis. First-generation cephalosporins have excellent activity against gram-positive organisms (MSSA, streptococci) and limited gram-negative activity (E. coli, Proteus, Klebsiella — KPE mnemonic).",
    contraindications: {
      absolute: [
        "Known severe hypersensitivity (anaphylaxis) to cefazolin or cephalosporins",
        "History of cephalosporin-induced hemolytic anemia"
      ],
      relative: [
        "Penicillin allergy: cross-reactivity <1–2% with cephalosporins (shared beta-lactam ring but different side chains). Only avoid cephalosporins in patients with documented anaphylaxis to penicillin — use clindamycin or vancomycin for prophylaxis instead.",
        "Renal impairment: dose reduction required (cephalosporins are renally cleared)"
      ]
    },
    sideEffects: {
      common: [
        "Injection site reactions (pain, phlebitis)",
        "GI: nausea, diarrhea",
        "Transient elevation of LFTs"
      ],
      serious: [
        "Hypersensitivity reactions: urticaria, anaphylaxis (rare)",
        "C. difficile-associated diarrhea",
        "Hemolytic anemia (rare immune-mediated)"
      ]
    },
    interactions: {
      drugs: [
        "Aminoglycosides — additive nephrotoxicity risk (synergistic bactericidal activity against gram-negative organisms)",
        "Probenecid — decreases renal tubular secretion, increasing cefazolin levels",
        "Warfarin — may increase INR (monitor INR)"
      ],
      foods: []
    },
    monitoring: [
      "Renal function (dose adjustment required in CKD)",
      "Signs of allergic reaction (within 30–60 minutes of administration)",
      "CBC for prolonged courses (neutropenia, eosinophilia)"
    ],
    dosing: {
      adultGeneral: "Surgical prophylaxis: 2 g IV within 60 minutes before incision (3 g IV if weight >120 kg). Redose every 4 hours during prolonged procedures (>4 hours) or with blood loss >1.5 L. Treatment: 1–2 g IV q8h.",
      renalAdjustment: "eGFR 30–50: 1 g q12h. eGFR 10–30: 500 mg q12–18h. eGFR <10: 500 mg q18–24h. Hemodialysis: supplemental dose after each session.",
      hepaticAdjustment: "No adjustment required for hepatic impairment",
      pediatricNote: "25 mg/kg per dose IV (max 2g) for surgical prophylaxis. Treatment: 25–50 mg/kg/day divided q8h (max 6g/day)"
    },
    clinicalPearls: [
      "Cefazolin is the preferred surgical prophylaxis antibiotic for most general surgery procedures (colorectal, hepatobiliary, orthopedic, cardiothoracic) because of its spectrum, cost, and half-life. For colorectal procedures, add metronidazole to cover anaerobes OR use cefoxitin as a single agent.",
      "In penicillin-allergic patients with a history of anaphylaxis: use clindamycin 600 mg IV (covers gram-positives) + gentamicin 5 mg/kg IV (covers gram-negatives) OR vancomycin 15 mg/kg IV + aztreonam 1g IV for broader coverage."
    ],
    boardRecallTip: "Surgical prophylaxis: give within 60 minutes before incision, redose every 4 hours for long procedures, discontinue within 24 hours post-op. Cefazolin: first-generation = excellent gram-positive coverage (MSSA, Strep), some gram-negatives (E. coli, Klebsiella, Proteus — EKP or KPE). MRSA and Enterococcus are NOT covered."
  },
  {
    id: "gs-drug-metronidazole",
    name: "Metronidazole",
    brandNames: ["Flagyl", "MetroGel", "Noritate"],
    drugClass: "Nitroimidazole antibiotic / antiparasitic",
    rotations: ["general-surgery", "internal-medicine", "family-medicine"],
    indications: [
      "Anaerobic bacterial infections (intraabdominal infections, pelvic inflammatory disease, lung abscess, brain abscess)",
      "C. difficile colitis (oral; replaced by vancomycin and fidaxomicin as preferred agents)",
      "Bacterial vaginosis (oral or topical)",
      "Trichomonas vaginalis",
      "Giardia lamblia and Entamoeba histolytica (parasitic infections)",
      "H. pylori eradication (part of triple or quadruple therapy)",
      "Surgical prophylaxis for colorectal procedures (combined with cefazolin)"
    ],
    mechanismOfAction: "Metronidazole is a prodrug that is selectively reduced by intracellular electron transport proteins (ferredoxin) in anaerobic and microaerophilic organisms. The reduced active metabolite disrupts DNA structure by forming free radicals and causing strand breaks, preventing DNA replication and causing cell death. This mechanism is specific to organisms with anaerobic metabolic pathways — aerobic bacteria lack the reducing environment required for activation, explaining metronidazole's anaerobe-specific activity.",
    contraindications: {
      absolute: [
        "First trimester of pregnancy (potential teratogenicity — avoid; use in second/third trimester if essential)",
        "Known hypersensitivity to metronidazole or other nitroimidazoles"
      ],
      relative: [
        "Severe hepatic impairment (impaired metabolism — reduce dose or extend interval)",
        "History of seizures or CNS disease (neurotoxicity risk with high doses)"
      ]
    },
    sideEffects: {
      common: [
        "Metallic taste (nearly universal)",
        "GI: nausea, vomiting, abdominal discomfort",
        "Headache, dizziness"
      ],
      serious: [
        "Disulfiram-like reaction with alcohol (flushing, tachycardia, vomiting) — avoid alcohol during treatment and 48 hours after",
        "Peripheral neuropathy (with prolonged use >4 weeks)",
        "CNS toxicity: seizures, encephalopathy (especially high-dose IV or hepatic failure)"
      ]
    },
    interactions: {
      drugs: [
        "Alcohol — disulfiram-like reaction (also in alcohol-containing medications, mouthwash)",
        "Warfarin — inhibits CYP2C9 → significantly increases INR; reduce warfarin dose, monitor INR closely",
        "Lithium — increases lithium levels (reduced renal clearance)",
        "Phenytoin, phenobarbital — decrease metronidazole levels (increased metabolism)"
      ],
      foods: [
        "Alcohol (including beer, wine, spirits, cough syrups, mouthwash containing alcohol): disulfiram-like reaction"
      ]
    },
    monitoring: [
      "Signs of peripheral neuropathy (tingling, burning in hands/feet) with prolonged courses",
      "INR if on warfarin (significant interaction — may need warfarin dose reduction)",
      "LFTs in severe hepatic disease"
    ],
    dosing: {
      adultGeneral: "Surgical prophylaxis: 500 mg IV within 60 min before incision. Intraabdominal infections: 500 mg IV/PO q8h. C. difficile (now 3rd-line): 500 mg PO TID × 10 days. BV: 500 mg PO BID × 7 days. Trichomonas: 2g PO single dose (treat partner simultaneously). H. pylori: 500 mg PO BID (with PPI + clarithromycin) × 14 days.",
      renalAdjustment: "No dose adjustment for renal impairment (hepatically metabolized). With hemodialysis: supplement dose after dialysis (dialyzable).",
      hepaticAdjustment: "Severe hepatic impairment (Child-Pugh C): reduce dose by 50%; use with caution due to accumulation and CNS toxicity risk",
      pediatricNote: "Anaerobic infections: 22.5–40 mg/kg/day divided q8h. C. diff: 10 mg/kg per dose PO q8h (max 500 mg/dose)"
    },
    clinicalPearls: [
      "C. difficile treatment hierarchy (IDSA 2021): First non-severe episode: vancomycin 125 mg PO QID × 10 days (preferred over metronidazole) OR fidaxomicin 200 mg BID × 10 days. Metronidazole used only if vancomycin/fidaxomicin unavailable. Severe C. diff (WBC >15,000 or Cr >1.5): vancomycin 125 mg QID ± IV metronidazole. Fulminant (hypotension, ileus, megacolon): vancomycin 500 mg QID via NGT + IV metronidazole + vancomycin enemas.",
      "Bacterial vaginosis in pregnancy: treat with metronidazole 500 mg PO BID × 7 days in second/third trimester (safe); avoid in first trimester — use clindamycin topically. BV in pregnancy is associated with preterm labor."
    ],
    boardRecallTip: "Metronidazole covers: anaerobes + protozoa (Giardia, Trichomonas, Amoeba). Does NOT cover aerobic organisms. Disulfiram reaction: alcohol + metronidazole = flushing, vomiting, tachycardia. Metallic taste is nearly universal. Warfarin interaction: always monitor INR."
  },
  {
    id: "gs-drug-morphine-pca",
    name: "Patient-Controlled Analgesia (PCA) — Morphine / Hydromorphone",
    brandNames: ["PCA pump — Morphine: MSIR; Hydromorphone: Dilaudid"],
    drugClass: "Opioid analgesic delivery system",
    rotations: ["general-surgery", "internal-medicine"],
    indications: [
      "Post-operative pain management (surgery involving moderate-severe pain expected)",
      "Acute cancer pain",
      "Burns",
      "Sickle cell pain crisis",
      "Any acute severe pain where IV opioid titration is required"
    ],
    mechanismOfAction: "Morphine and hydromorphone are mu-opioid receptor agonists that activate endogenous opioid pathways in the brain (periaqueductal gray, rostral ventromedial medulla) and spinal cord (dorsal horn), inhibiting pain signal transmission. PCA delivery allows the patient to self-administer small doses on demand (lockout interval prevents overdose). Steady-state opioid levels are maintained without peaks (oversedation) and troughs (breakthrough pain).",
    contraindications: {
      absolute: [
        "Patient unable to understand or operate the PCA device (cognitive impairment, developmental delay, young children <6–7 years)",
        "Known allergy to the specific opioid in the PCA",
        "Active respiratory depression"
      ],
      relative: [
        "Severe sleep apnea (increased respiratory depression risk — continuous SpO2 monitoring required)",
        "Severe renal impairment (avoid morphine — M6G accumulates; use hydromorphone or fentanyl instead)",
        "Elderly patients (higher sensitivity; start at lower dose settings)"
      ]
    },
    sideEffects: {
      common: [
        "Nausea and vomiting (add ondansetron or promethazine to PCA order set)",
        "Pruritus (histamine release — worse with morphine; treat with diphenhydramine or low-dose naloxone infusion 0.25–1 mcg/kg/hr)",
        "Sedation"
      ],
      serious: [
        "Respiratory depression (most dangerous; monitor with continuous pulse oximetry and capnography; nurse-call-to-response protocols)",
        "Urinary retention",
        "Opioid-induced bowel dysfunction"
      ]
    },
    interactions: {
      drugs: [
        "Benzodiazepines, sedatives, alcohol — synergistic respiratory depression (FDA Black Box Warning)",
        "MAOIs — serotonin syndrome and CNS depression risk"
      ],
      foods: []
    },
    monitoring: [
      "Respiratory rate and SpO2: continuous pulse oximetry; capnography (ETCO2) for high-risk patients",
      "Pain scores: NRS (0–10 numeric rating scale) or VAS at regular intervals",
      "Sedation score (RASS or Pasero Opioid Sedation Scale): RASS 0 to −1 acceptable; −2 or below = too sedated, reduce dose",
      "Bowel function: document last bowel movement; order stimulant laxative prophylactically",
      "PCA utilization review daily: demand vs. delivery ratio (>80% demand satisfaction suggests adequate dosing; frequent demands with poor satisfaction suggests under-dosing or need for basal rate)"
    ],
    dosing: {
      adultGeneral: "Morphine PCA: Demand dose: 1–2 mg IV; Lockout interval: 6–10 minutes; Basal rate: 0–1 mg/hr (basal rate increases respiratory depression risk without improving pain control — generally avoided in opioid-naive patients). Hydromorphone PCA: Demand dose: 0.2–0.4 mg IV; Lockout: 6–10 minutes. 4-hour limit: 20–30 mg morphine equivalent.",
      renalAdjustment: "Morphine: AVOID with eGFR <30 — active metabolite M6G accumulates causing prolonged sedation. Switch to hydromorphone (less renal accumulation) or fentanyl (no active renal metabolites — safest in CKD).",
      hepaticAdjustment: "Reduce demand dose by 25–50% in severe hepatic impairment; extend lockout interval",
      pediatricNote: "PCA generally used age ≥7 years: morphine 0.01–0.02 mg/kg demand (max 2 mg); lockout 6–10 min. Nurse-controlled analgesia (NCA) for younger children: 0.01–0.02 mg/kg q2h nurse-administered."
    },
    clinicalPearls: [
      "Multimodal analgesia (ERAS protocols): PCA should be part of a multimodal approach — combine with scheduled acetaminophen (1g IV/PO q6h), ketorolac 15–30 mg IV q6h × 5 days (if not contraindicated — avoid in renal impairment, post-cardiac surgery, anastomotic procedures), gabapentin/pregabalin (reduces opioid consumption), regional anesthesia (nerve blocks, epidural). This combination reduces PCA opioid demands by 30–50%.",
      "Converting from PCA to oral opioids: calculate total PCA opioid consumption in 24 hours, convert to oral morphine equivalent (using equianalgesic table), give 50–75% of the 24-hour oral requirement as extended-release opioid with immediate-release for breakthrough (15% of total daily dose). Begin oral opioids and discontinue PCA when patient is tolerating oral intake."
    ],
    boardRecallTip: "PCA demand dose / lockout interval: prevents patient from receiving more opioid than safe. Never set basal rate in opioid-naive patients (increases respiratory depression without pain benefit). Naloxone reversal: 0.04–0.4 mg IV q2–3 min as needed. Pruritus with morphine: from histamine release, not true allergy — switch to fentanyl or hydromorphone if bothersome."
  },
  {
    id: "gs-drug-ketorolac",
    name: "Ketorolac (Toradol)",
    brandNames: ["Toradol", "Acular (ophthalmic)"],
    drugClass: "NSAID — non-selective COX inhibitor",
    rotations: ["general-surgery", "emergency-medicine"],
    indications: [
      "Short-term management of moderate-to-severe acute pain (post-operative, renal colic)",
      "Multimodal analgesia component (reduces opioid requirements by 25–35%)",
      "Renal colic (equal analgesic efficacy to opioids for ureteral stone pain)",
      "Migraine headache (IV ketorolac 30 mg — comparable to sumatriptan)"
    ],
    mechanismOfAction: "Ketorolac non-selectively inhibits cyclooxygenase-1 (COX-1) and COX-2 enzymes, blocking synthesis of prostaglandins and thromboxane A2. Prostaglandins sensitize nociceptors and mediate inflammation — their inhibition reduces pain, fever, and inflammation. COX-1 inhibition decreases gastric mucosal protection and impairs platelet aggregation. COX-2 inhibition reduces the anti-inflammatory and analgesic effect. Ketorolac is the only NSAID available parenterally in the US — equivalent analgesic potency to 6–12 mg IV morphine.",
    contraindications: {
      absolute: [
        "Active peptic ulcer disease or GI bleeding",
        "Severe renal impairment (eGFR <30) or any AKI",
        "History of hypersensitivity/NSAID-induced asthma or urticaria",
        "Postoperative pain after CABG (all NSAIDs contraindicated — increased risk of MI and stroke)",
        "Epidural or intrathecal use",
        "Major surgery with significant bleeding risk (anastomoses — impairs platelet function)"
      ],
      relative: [
        "Age >65 (Beers Criteria — increased risk of GI bleed and renal toxicity)",
        "Concurrent anticoagulant or antiplatelet therapy",
        "Moderate renal impairment (eGFR 30–60 — use with caution, short course only)",
        "Bowel anastomosis (theoretical concern of delayed healing — often avoided)"
      ]
    },
    sideEffects: {
      common: [
        "GI distress (nausea, epigastric pain)",
        "Injection site pain (IM)",
        "Dizziness, headache"
      ],
      serious: [
        "GI bleeding and peptic ulceration (COX-1 inhibition reduces mucus and bicarbonate secretion)",
        "Renal toxicity: acute kidney injury, especially in hypovolemic or elderly patients (NSAIDs reduce prostaglandin-mediated afferent arteriolar dilation needed to maintain GFR)",
        "Platelet dysfunction (increased bleeding time — do not use in procedures requiring hemostasis)",
        "Cardiovascular: increased MI/stroke risk with prolonged use"
      ],
      blackBox: [
        "Ketorolac is limited to 5 days total (IV + oral combined) due to serious GI, renal, and cardiovascular risks with extended use",
        "Contraindicated in advanced renal disease and perioperatively in patients at risk of renal failure due to volume depletion"
      ]
    },
    interactions: {
      drugs: [
        "ACE inhibitors/ARBs — NSAIDs blunt their antihypertensive and renoprotective effects; combination in volume-depleted patient = AKI ('triple whammy' = NSAID + ACE/ARB + diuretic)",
        "Anticoagulants — increased bleeding risk",
        "SSRIs — increased GI bleeding risk (serotonin-mediated platelet dysfunction)",
        "Lithium — NSAIDs reduce renal lithium clearance → toxicity"
      ],
      foods: []
    },
    monitoring: [
      "Renal function (BMP) at baseline and during use if at risk of AKI",
      "GI symptoms — stop immediately if signs of GI bleeding (hematemesis, melena)",
      "Urine output in post-operative patients",
      "Maximum duration: 5 days total (including any oral ketorolac component)"
    ],
    dosing: {
      adultGeneral: "IV: 15–30 mg q6h (max 120 mg/day). IM: 30–60 mg initial dose, then 15–30 mg q6h. Oral (continuation only): 10 mg q4–6h. Maximum total duration: 5 days (IV + oral combined). Older adults (>65) or weight <50 kg: 15 mg IV q6h (maximum 60 mg/day).",
      renalAdjustment: "eGFR 30–60: 15 mg IV q6h. eGFR <30: CONTRAINDICATED",
      hepaticAdjustment: "No specific dose adjustment; avoid in severe hepatic disease",
      pediatricNote: "Not FDA-approved for children <2 years. Single dose: 0.5 mg/kg IV (max 15 mg). IM: 1 mg/kg (max 30 mg)"
    },
    clinicalPearls: [
      "ERAS (Enhanced Recovery After Surgery) protocols routinely include scheduled ketorolac as part of multimodal analgesia to minimize opioid use. Combined with acetaminophen, regional blocks, and gabapentinoids, ketorolac reduces opioid requirements by up to 35% post-operatively — reducing ileus, nausea, and time to discharge.",
      "Triple whammy nephrotoxicity: concurrent NSAID + ACE inhibitor (or ARB) + diuretic in a volume-depleted post-operative patient = high AKI risk. Hold ketorolac if patient is oliguric or volume-depleted."
    ],
    boardRecallTip: "Ketorolac maximum duration: 5 days. Contraindicated: active GI bleed, eGFR <30, peri-CABG. Equivalent to 6–12 mg IV morphine but non-opioid. 'Triple whammy' AKI: NSAID + ACE/ARB + diuretic in a dehydrated patient. Avoid in bowel anastomosis procedures (platelet inhibition)."
  },
  {
    id: "gs-drug-ondansetron",
    name: "Ondansetron",
    brandNames: ["Zofran", "Zuplenz (ODT)"],
    drugClass: "5-HT3 (serotonin) receptor antagonist — antiemetic",
    rotations: ["general-surgery", "emergency-medicine", "internal-medicine"],
    indications: [
      "Post-operative nausea and vomiting (PONV) — prophylaxis and treatment",
      "Chemotherapy-induced nausea and vomiting (CINV)",
      "Radiation-induced nausea and vomiting",
      "Acute gastroenteritis (symptomatic relief)",
      "Nausea in pregnancy (off-label — second-line after doxylamine/B6)"
    ],
    mechanismOfAction: "Ondansetron is a highly selective 5-HT3 receptor antagonist. 5-HT3 receptors are present in the vagal afferent neurons of the GI tract and in the area postrema (chemoreceptor trigger zone) in the brainstem. Serotonin (5-HT) released from enterochromaffin cells in the gut during chemotherapy, radiation, or surgical stress activates these receptors to trigger the vomiting reflex. Ondansetron competitively blocks these receptors, preventing the vomiting stimulus from reaching the vomiting center.",
    contraindications: {
      absolute: [
        "Congenital long QT syndrome",
        "Concurrent use of apomorphine (severe hypotension)"
      ],
      relative: [
        "QTc prolongation from other causes or medications (additive risk)",
        "Hypokalemia or hypomagnesemia (predispose to QT prolongation)",
        "Severe hepatic impairment (reduce dose)"
      ]
    },
    sideEffects: {
      common: [
        "Headache (most common)",
        "Constipation",
        "Dizziness, fatigue"
      ],
      serious: [
        "QT prolongation and risk of torsades de pointes (especially IV form; single IV dose >32 mg is contraindicated)",
        "Serotonin syndrome (rare — when combined with other serotonergic agents: SSRIs, SNRIs, tramadol, triptans)",
        "Hypersensitivity reactions (rare)"
      ]
    },
    interactions: {
      drugs: [
        "Serotonergic drugs (SSRIs, SNRIs, tramadol, linezolid, triptans) — serotonin syndrome risk",
        "QT-prolonging drugs (haloperidol, amiodarone, macrolides, fluoroquinolones) — additive QT prolongation",
        "Apomorphine — severe hypotension (contraindicated combination)"
      ],
      foods: []
    },
    monitoring: [
      "QTc interval on EKG: obtain baseline if using repeat or high doses; avoid if QTc >450 ms (men) or >470 ms (women)",
      "Electrolytes (K+, Mg2+): correct hypokalemia and hypomagnesemia before use",
      "Bowel function: monitor for constipation in post-operative patients (impedes recovery)"
    ],
    dosing: {
      adultGeneral: "PONV prophylaxis: 4 mg IV at end of surgery. PONV treatment: 4 mg IV q4–8h PRN. CINV: 8 mg IV/PO BID or 24 mg PO × 1 before chemotherapy. Oral: 4–8 mg PO q8–12h. Maximum IV single dose: 16 mg (higher doses increased QT risk).",
      renalAdjustment: "No dose adjustment required for renal impairment",
      hepaticAdjustment: "Severe hepatic impairment (Child-Pugh C): max 8 mg/day IV (reduced clearance)",
      pediatricNote: "PONV prophylaxis: 0.1 mg/kg IV (max 4 mg). CINV: 0.15 mg/kg IV q4h × 3 doses"
    },
    clinicalPearls: [
      "PONV risk factors (Apfel score): Female sex, Non-smoking status, History of PONV or motion sickness, Post-operative opioid use — each factor = 1 point. Score 0 = 10% PONV risk; 1 = 21%; 2 = 39%; 3 = 61%; 4 = 79%. High-risk patients (Apfel ≥2): prophylactic multimodal antiemetic regimen (ondansetron + dexamethasone ± scopolamine patch ± total IV anesthesia with propofol).",
      "For PONV refractory to ondansetron: use a different antiemetic class (droperidol 0.625 mg IV, prochlorperazine 10 mg IV, metoclopramide 10 mg IV, or dexamethasone 8 mg IV). Avoid same-class drugs (5-HT3 antagonists are equipotent — granisetron, palonosetron won't add benefit if ondansetron already failed)."
    ],
    boardRecallTip: "Apfel score PONV risk: Female sex, Non-smoker, History of PONV/motion sickness, Post-op opioid use (each = 1 point). Apfel ≥3 = high risk, prophylactic combination antiemetic therapy. Ondansetron: 5-HT3 antagonist. QT prolongation concern with IV doses >16 mg. Serotonin syndrome risk with SSRIs."
  },
  {
    id: "gs-drug-neostigmine",
    name: "Neostigmine / Sugammadex",
    brandNames: ["Prostigmin (neostigmine)", "Bridion (sugammadex)"],
    drugClass: "Neuromuscular blockade reversal agents",
    rotations: ["general-surgery"],
    indications: [
      "Reversal of non-depolarizing neuromuscular blockade (NMB) at end of general anesthesia",
      "Neostigmine: reversal of residual blockade from non-depolarizing NMBAs (vecuronium, rocuronium, cisatracurium, pancuronium) — requires residual neuromuscular function (TOF ratio ≥0.2)",
      "Sugammadex: rapid complete reversal of rocuronium or vecuronium (encapsulates steroidal NMBAs) — effective even at deep blockade; preferred agent when available",
      "Neostigmine: also used for myasthenia gravis treatment and acute colonic pseudo-obstruction (Ogilvie syndrome)"
    ],
    mechanismOfAction: "Neostigmine: reversible inhibitor of acetylcholinesterase (AChE). Prevents breakdown of acetylcholine at the neuromuscular junction — ACh accumulates and competes with non-depolarizing NMBA for nicotinic receptor binding, restoring neuromuscular transmission. Side effect: muscarinic AChE inhibition causes bradycardia, bronchospasm, salivation — must always administer with an anticholinergic (atropine or glycopyrrolate) to blunt these effects. Sugammadex: modified gamma-cyclodextrin that encapsulates and inactivates rocuronium/vecuronium molecules in plasma, creating a stable complex that is renally excreted — complete reversal without muscarinic side effects.",
    contraindications: {
      absolute: [
        "Neostigmine: mechanical bowel obstruction or urinary obstruction (increases peristalsis and bladder contraction — perforation risk if obstruction present)",
        "Sugammadex: known hypersensitivity"
      ],
      relative: [
        "Neostigmine: bradycardia, reactive airway disease, peptic ulcer disease",
        "Sugammadex: severe renal impairment (complex is renally eliminated — not recommended for eGFR <30; if used: patient must void the complex)"
      ]
    },
    sideEffects: {
      common: [
        "Neostigmine: bradycardia (must give with atropine/glycopyrrolate), increased salivation, nausea, increased GI motility",
        "Sugammadex: bradycardia, hypersensitivity reactions"
      ],
      serious: [
        "Neostigmine: if given without anticholinergic: severe bradycardia, bronchospasm",
        "Recurarization: if neostigmine given at too deep a block (TOF <0.2), reversal may be incomplete, and as neostigmine wears off, paralysis returns — risk of post-extubation respiratory failure"
      ]
    },
    interactions: {
      drugs: [
        "Anticholinergics (atropine, glycopyrrolate) — must be given concurrently with neostigmine to block muscarinic side effects",
        "Succinylcholine — neostigmine inhibits pseudocholinesterase, prolonging succinylcholine duration (do not give neostigmine after succinylcholine without waiting for full metabolism)"
      ],
      foods: []
    },
    monitoring: [
      "Train-of-four (TOF) ratio (neuromuscular monitoring): TOF ratio ≥0.9 = adequate reversal and safe extubation. TOF <0.9 = residual paralysis risk → head lift test (can patient sustain head lift for 5 seconds?).",
      "Respiratory rate, SpO2, and ability to follow commands after reversal",
      "Heart rate after neostigmine (watch for bradycardia if anticholinergic given too early)"
    ],
    dosing: {
      adultGeneral: "Neostigmine: 0.03–0.07 mg/kg IV (max 5 mg) given with glycopyrrolate 0.2 mg per 1 mg neostigmine (preferred — less tachycardia than atropine). Sugammadex: 2 mg/kg IV for moderate blockade (TOF count ≥2); 4 mg/kg for deep blockade (post-tetanic count 1–2); 16 mg/kg for immediate reversal (within 3 minutes of 1.2 mg/kg rocuronium).",
      renalAdjustment: "Neostigmine: reduced clearance in renal failure — monitor for prolonged effect. Sugammadex: NOT recommended for eGFR <30 (complex accumulates)",
      hepaticAdjustment: "No significant hepatic dose adjustment for either agent",
      pediatricNote: "Neostigmine: 0.025–0.08 mg/kg IV with atropine 0.01–0.02 mg/kg. Sugammadex: same weight-based dosing as adults"
    },
    clinicalPearls: [
      "Succinylcholine vs. rocuronium for rapid sequence intubation (RSI): succinylcholine 1.5 mg/kg IV is traditional for RSI (onset 45–60 seconds, duration 8–12 minutes — fastest acting). Rocuronium 1.2 mg/kg IV provides equivalent RSI conditions and can be IMMEDIATELY reversed with sugammadex 16 mg/kg if cannot-intubate-cannot-oxygenate (CICO) scenario — this is the advantage of rocuronium/sugammadex over succinylcholine.",
      "Ogilvie syndrome (acute colonic pseudo-obstruction): neostigmine 2.5 mg IV over 3–5 minutes (with patient monitored on cardiac monitor and atropine at bedside) — 90% response rate with prompt decompression of dilated colon. If fails: colonoscopic decompression → cecostomy."
    ],
    boardRecallTip: "Neostigmine: AChE inhibitor. ALWAYS give with anticholinergic (glycopyrrolate or atropine) to prevent muscarinic side effects (bradycardia, bronchospasm). Sugammadex: encapsulates rocuronium/vecuronium — no muscarinic side effects, complete reversal even at deep blockade. For CICO: rocuronium 1.2 mg/kg RSI + sugammadex 16 mg/kg rescue is current standard of care."
  }
];
