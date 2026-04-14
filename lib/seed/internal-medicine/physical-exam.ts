// @ts-nocheck
import type { PhysicalExamFinding } from "@/types";

export const internalMedicinePhysicalExam: PhysicalExamFinding[] = [
  {
    id: "im-pe-jvd",
    name: "Jugular Venous Distension (JVD)",
    system: "Cardiovascular",
    rotation: "internal-medicine",
    technique: "Position patient at 45° head-of-bed elevation. Identify the internal jugular vein (IJ) pulsation medial to the sternocleidomastoid muscle (do not confuse with carotid pulsation — JVD has 2 waves per cardiac cycle, is non-palpable, and disappears with gentle pressure). Measure the vertical distance from the sternal angle of Louis to the top of the venous pulsation. Add 5 cm (sternal angle to RA) to estimate central venous pressure.",
    normalFinding: "JVP ≤3–4 cm above sternal angle (estimated CVP 8–9 cmH2O). Pulsations visible only at 30° or lower position.",
    abnormalFindings: [
      "JVP >4 cm above sternal angle at 45° = elevated CVP (>9 cmH2O) — suggests right heart failure, cardiac tamponade, constrictive pericarditis, SVC syndrome, or volume overload",
      "Kussmaul's sign: paradoxical rise in JVP with inspiration (normally JVP falls with inspiration as RV fills) — seen in constrictive pericarditis, RV infarction, cardiac tamponade",
      "Abdominojugular reflux (hepatojugular reflux): sustained >3 cm rise in JVP with firm midabdominal pressure for 10 seconds = right heart unable to accommodate increased venous return"
    ],
    associatedConditions: ["CHF (RV failure)", "Cardiac tamponade", "Constrictive pericarditis", "Tricuspid stenosis/regurgitation", "SVC syndrome", "COPD with cor pulmonale"],
    clinicalPearl: "The abdominojugular reflux test is more sensitive than JVD alone for elevated left heart filling pressures in CHF. A positive result (rise in JVP ≥3 cm sustained for ≥10 seconds) indicates PCWP >15 mmHg with >80% specificity.",
    boardPearl: "Cardiac tamponade: Beck's triad = JVD + hypotension + muffled heart sounds. Pulsus paradoxus >10 mmHg (exaggerated fall in BP with inspiration) is the key finding. Echo confirms pericardial effusion with RV diastolic collapse."
  },
  {
    id: "im-pe-s3-s4",
    name: "Third (S3) and Fourth (S4) Heart Sounds",
    system: "Cardiovascular",
    rotation: "internal-medicine",
    technique: "Position patient in LEFT lateral decubitus position (brings LV apex closer to chest wall). Use the BELL of the stethoscope at the cardiac apex (5th ICS, MCL) with LIGHT pressure (bell pressed firmly becomes a diaphragm). Listen for low-frequency extra sounds. S3 occurs early in diastole (ventricular filling); S4 occurs late in diastole (atrial kick). Mnemonic: S3 = Ken-TUCKY (1-2-3), S4 = TEN-nes-see (4-1-2).",
    normalFinding: "Physiologic S3 can be normal in children and young adults <40 years old (hyperdynamic state, pregnancy, anemia, high CO states).",
    abnormalFindings: [
      "Pathologic S3 (S3 gallop): low-frequency sound in early diastole immediately after S2 (S1-S2-S3) = ventricular non-compliance due to volume overload or poor LV function. Heard at apex with bell. Strongly associated with HFrEF (EF <40%) and dilated cardiomyopathy.",
      "S4 gallop: low-frequency sound in late diastole immediately before S1 (S4-S1-S2) = atrial contraction against a stiff, non-compliant ventricle. Associated with LVH (hypertensive heart disease), hypertrophic cardiomyopathy, aortic stenosis, acute MI.",
      "Summation gallop: S3 + S4 occur simultaneously in tachycardia (HR >100) — single loud diastolic sound"
    ],
    associatedConditions: ["S3: CHF/HFrEF, dilated cardiomyopathy, MR", "S4: LVH, HCM, AS, hypertensive heart disease, acute MI"],
    clinicalPearl: "The S3 is one of the most specific findings for cardiac dysfunction. In the JAMA Rational Clinical Examination, S3 has a positive LR of 11 for elevated LV filling pressure and a positive LR of 3.7 for reduced EF. It may be absent in obese patients or with emphysema (hyperinflated lungs attenuate sounds).",
    boardPearl: "S3 in a patient with dyspnea and peripheral edema = HF until proven otherwise. S4 is NEVER normal in adults (unlike S3 which can be normal in young people). Trick: S3 = ventricular, S4 = atrial kick against stiff ventricle."
  },
  {
    id: "im-pe-murmurs",
    name: "Cardiac Murmur Assessment — Aortic Stenosis, Aortic Regurgitation, Mitral Regurgitation",
    system: "Cardiovascular",
    rotation: "internal-medicine",
    technique: "Assess all valve areas systematically: Aortic (2nd ICS RSB), Pulmonic (2nd ICS LSB), Tricuspid (4th–5th ICS LSB), Mitral (apex/5th ICS MCL). Describe: timing (systolic vs. diastolic), quality (harsh/blowing/musical/rumbling), intensity (Levine 1–6 scale), location, radiation, maneuvers that change it (Valsalva, squat-to-stand, inspiration).",
    normalFinding: "No murmurs, rubs, or gallops. Functional/flow murmur: soft systolic ejection murmur (Levine 1–2/6), no radiation, no thrill, normal S2 splitting — seen in high-output states (pregnancy, anemia, fever, thyrotoxicosis).",
    abnormalFindings: [
      "Aortic Stenosis (AS): harsh crescendo-decrescendo (diamond-shaped) systolic ejection murmur at right 2nd ICS (RUSB) → radiates to carotid arteries. Pulsus parvus et tardus (weak, late-peaking carotid upstroke). Single or paradoxically split S2. S4 present. Severity: mild (valve area >1.5 cm²), moderate (1.0–1.5 cm²), severe (<1.0 cm² or mean gradient >40 mmHg). Classic symptoms: Syncope, Angina, dyspnea (dyspnea = worst prognosis — survival 1–2 years without valve replacement).",
      "Aortic Regurgitation (AR): high-pitched, blowing, decrescendo diastolic murmur at left sternal border (3rd ICS); heard best with patient sitting forward, breath held at expiration. Wide pulse pressure (elevated systolic, low diastolic). Austin Flint murmur (mid-diastolic rumble from regurgitant jet impinging on anterior MV leaflet). Corrigan's (water-hammer) pulse. de Musset's sign (head bobbing). Quincke's pulse (nail bed capillary pulsation).",
      "Mitral Regurgitation (MR): high-pitched, blowing holosystolic (pansystolic) murmur at cardiac apex → radiates to left axilla. S3 common (volume overload). Hyperdynamic LV impulse. Best heard with diaphragm at apex with patient in left lateral decubitus. Dynamic auscultation: increases with squatting (increased preload), decreases with Valsalva (decreased preload) and standing.",
      "Mitral Stenosis (MS): low-pitched, rumbling mid-diastolic murmur at apex heard best with bell in left lateral decubitus. Opening snap (high-pitched after S2 — shorter S2-OS interval = more severe MS). Loud S1. A-fib common (LA enlargement).",
      "Hypertrophic Cardiomyopathy (HCM): harsh systolic ejection murmur at LLSB — INCREASES with Valsalva and standing (decreased preload narrows outflow tract); DECREASES with squatting (increased preload)."
    ],
    associatedConditions: ["Aortic stenosis: bicuspid aortic valve (young), calcific AS (elderly)", "Aortic regurgitation: Marfan, bicuspid AV, ankylosing spondylitis, endocarditis, rheumatic", "MR: MVP, rheumatic, ischemic, endocarditis"],
    clinicalPearl: "Dynamic auscultation separates HCM from AS: Valsalva increases HCM murmur (decreases preload → more obstruction) but decreases AS murmur. Squatting increases preload → decreases HCM, increases AS. Handgrip (increases afterload → decreases HCM, increases MR, decreases AS).",
    boardPearl: "Levine grading: 1/6 barely audible; 2/6 soft; 3/6 moderate; 4/6 loud with palpable thrill; 5/6 heard with stethoscope barely on chest; 6/6 heard without stethoscope. Thrill present at ≥4/6."
  },
  {
    id: "im-pe-ascites",
    name: "Ascites Detection — Shifting Dullness and Fluid Wave",
    system: "Gastrointestinal / Hepatic",
    rotation: "internal-medicine",
    technique: "Shifting Dullness: With patient supine, percuss from umbilicus laterally to find the dullness-tympany interface (fluid-gas transition). Mark the level. Roll patient 45° to one side; wait 30 seconds for fluid to shift. Re-percuss the same area — if dullness has shifted to the dependent side (now tympanic where previously dull), test is positive. Fluid Wave (for tense ascites): have an assistant place edge of hand firmly on midline abdomen (blocks subcutaneous fat transmission). Tap one flank sharply with fingers; feel for impulse transmitted to opposite flank.",
    normalFinding: "Tympanic throughout abdomen (gas-filled bowel). No shifting of tympany to dullness with position change. No transmitted fluid wave.",
    abnormalFindings: [
      "Shifting dullness: sensitivity 83%, specificity 56% for ascites. A flank dullness alone that does not shift has poor specificity.",
      "Fluid wave: sensitivity 50%, specificity 82% — better specificity than shifting dullness; most useful for large-volume ascites",
      "Bulging flanks: seen with >500 mL ascites; loss of waist curve",
      "Umbilical hernia: may develop with tense ascites from increased intraperitoneal pressure",
      "Caput medusae: dilated periumbilical veins radiating from umbilicus in portal hypertension"
    ],
    associatedConditions: ["Liver cirrhosis (most common, 75% of ascites)", "CHF (transudative)", "Nephrotic syndrome (transudative)", "Malignancy/peritoneal carcinomatosis (exudative)", "Tuberculous peritonitis (exudative)", "Pancreatitis (exudative)"],
    clinicalPearl: "Characterize ascites by serum-ascites albumin gradient (SAAG) via diagnostic paracentesis: SAAG = serum albumin − ascites albumin. SAAG ≥1.1 g/dL = portal hypertension (cirrhosis, CHF, Budd-Chiari, hepatic vein thrombosis). SAAG <1.1 g/dL = non-portal hypertension (malignancy, TB, pancreatitis, nephrotic syndrome).",
    boardPearl: "Spontaneous bacterial peritonitis (SBP): complication of ascites in cirrhosis. Ascitic fluid PMN >250 cells/mm³ = treat empirically with ceftriaxone 2g IV q24h before culture results. Albumin infusion (1.5 g/kg day 1, 1 g/kg day 3) reduces renal impairment and mortality in severe SBP."
  },
  {
    id: "im-pe-hepatomegaly",
    name: "Hepatomegaly — Liver Span Assessment",
    system: "Gastrointestinal / Hepatic",
    rotation: "internal-medicine",
    technique: "Percussion method (scratch test): Percuss in the right MCL from above (resonant) downward until dullness begins (upper liver border — normally 5th–7th ICS). Then percuss from below (tympanic) upward until dullness begins (lower liver border — normally at RCM). Span: normal 6–12 cm. Palpation: with patient breathing deeply, place right hand flat at right iliac fossa and move cephalad during expiration to feel the liver edge descend with deep inspiration (feel the firm, smooth edge against fingers). Measure distance from RCM.",
    normalFinding: "Liver span 6–12 cm in MCL by percussion. Liver edge not palpable at costal margin or ≤2 cm below RCM during inspiration in thin patients.",
    abnormalFindings: [
      "Hepatomegaly: liver span >12 cm or palpable >2–3 cm below RCM. Assess edge quality: smooth (cirrhosis, hepatitis, infiltration), nodular (metastatic disease, macronodular cirrhosis), tender (acute hepatitis, CHF/hepatic congestion, abscess).",
      "Hepatic rub: friction rub over liver with respiration = hepatic infarct, tumor invasion of capsule, perihepatitis (Fitz-Hugh-Curtis from Chlamydia ascending PID)",
      "Liver pulsatility: palpable systolic pulsation = tricuspid regurgitation (hepatic venous backflow)",
      "Small liver: percussion span <6 cm = advanced cirrhosis (loss of hepatocytes), fulminant hepatic failure (poor prognosis when liver shrinks acutely)"
    ],
    associatedConditions: ["Viral hepatitis (acute tender hepatomegaly)", "Alcoholic hepatitis/cirrhosis", "Non-alcoholic fatty liver disease (NAFLD)", "Hepatic metastases", "Hemochromatosis", "CHF (congestive hepatopathy)", "Lymphoma"],
    clinicalPearl: "Congestive hepatopathy from right heart failure: tender hepatomegaly + JVD + positive abdominojugular reflux. Nutmeg liver on ultrasound (dilated hepatic veins with sinusoidal congestion). Hepatic synthetic function preserved in early RHF. Distinguish from primary liver disease with TTE and BNP.",
    boardPearl: "Liver bruit: systolic bruit over liver = hepatocellular carcinoma (HCC) with arteriovenous malformation or alcoholic hepatitis (hypervascularity). Hepatic friction rub = tumor/infarct touching parietal peritoneum."
  },
  {
    id: "im-pe-splenomegaly",
    name: "Splenomegaly Detection",
    system: "Gastrointestinal / Hematologic",
    rotation: "internal-medicine",
    technique: "Percussion: Traube's space (left lower lateral chest, 6th rib to left MCL, bordered by cardiac dullness medially): normally tympanic (gas-filled stomach). Dullness in Traube's space suggests splenomegaly. Castillo's sign: tympany in Traube's space that becomes dull on full inspiration = splenomegaly. Palpation: Start in RIGHT iliac fossa (spleen enlarges toward RLQ — if you start at LUQ you may miss massive splenomegaly). Hook hand under left costal margin during deep inspiration. Move progressively toward LUQ.",
    normalFinding: "Spleen not palpable (normal spleen weighs 150 g and is not palpable). Tympany in Traube's space.",
    abnormalFindings: [
      "Mild splenomegaly (palpable at left costal margin): portal hypertension, mononucleosis, early leukemia",
      "Moderate splenomegaly (4–8 cm below LCM): CML, thalassemia, lymphoma, malaria",
      "Massive splenomegaly (crossing midline or reaching pelvis): CML (most common cause of massive splenomegaly in adults), myelofibrosis, malaria (tropical splenomegaly), Gaucher's disease, hairy cell leukemia"
    ],
    associatedConditions: ["Portal hypertension/cirrhosis", "EBV/CMV (infectious mononucleosis)", "Hematologic malignancies (CML, lymphoma, hairy cell leukemia)", "Hemolytic anemias (hereditary spherocytosis, thalassemia)", "Rheumatoid arthritis with Felty syndrome", "Sarcoidosis"],
    clinicalPearl: "EBV mononucleosis with splenomegaly: contact sports and vigorous activity contraindicated for 3–4 weeks (risk of splenic rupture — most common serious complication). Splenic rupture presents as sudden left upper quadrant pain radiating to left shoulder (Kehr's sign from diaphragmatic irritation) with hemodynamic instability.",
    boardPearl: "Felty syndrome: RA + splenomegaly + neutropenia (triad). Hairy cell leukemia: massive splenomegaly + monocytopenia + tartrate-resistant acid phosphatase (TRAP) stain positive. CML: most common cause of massive splenomegaly. BCR-ABL translocation t(9;22) — Philadelphia chromosome."
  },
  {
    id: "im-pe-lymphadenopathy",
    name: "Lymphadenopathy Assessment",
    system: "Lymphatic / Hematologic",
    rotation: "internal-medicine",
    technique: "Systematically palpate all node chains: cervical (anterior, posterior, submandibular, submental, preauricular, postauricular, occipital), supraclavicular (Virchow's node — left supraclavicular), axillary (central, pectoral, lateral, subscapular), epitrochlear (medial elbow), inguinal (horizontal = inguinal/perineal drainage, vertical = leg drainage), popliteal. Describe: size (normal <1 cm; inguinal <2 cm), consistency (soft/rubbery/hard/matted), tenderness, mobility (fixed vs. mobile), overlying skin changes.",
    normalFinding: "Lymph nodes <1 cm, soft, mobile, non-tender, non-matted. Inguinal nodes up to 2 cm acceptable in adults (reactive from foot/leg sources). No supraclavicular, epitrochlear, or popliteal nodes normally palpable.",
    abnormalFindings: [
      "Reactive (infectious) lymphadenopathy: tender, soft, mobile nodes; regional distribution corresponding to site of infection (cervical with pharyngitis; inguinal with STI or lower extremity infection)",
      "Malignant lymphadenopathy: hard, non-tender, fixed, matted, >2 cm, progressive — concerning for lymphoma or metastatic carcinoma",
      "Rubbery nodes: characteristic of lymphoma (Hodgkin's — B symptoms: fever, night sweats, weight loss >10%)",
      "Left supraclavicular node (Virchow's node): abdominal or thoracic malignancy draining via thoracic duct (gastric cancer, pancreatic cancer, ovarian cancer)",
      "Right supraclavicular node: mediastinal or pulmonary malignancy (lung cancer, esophageal cancer)",
      "Epitrochlear lymphadenopathy: secondary syphilis, sarcoidosis, cat scratch disease, lymphoma"
    ],
    associatedConditions: ["Infectious: EBV, CMV, HIV, TB, cat scratch disease, secondary syphilis", "Inflammatory: SLE, sarcoidosis, RA", "Malignant: lymphoma, leukemia, metastatic carcinoma"],
    clinicalPearl: "Any supraclavicular lymph node in an adult is considered pathologic until proven otherwise. Left supraclavicular (Virchow's) nodes are particularly concerning for subdiaphragmatic malignancy. Biopsy for: nodes >1.5–2 cm, present >4 weeks, non-tender, hard or matted, supraclavicular location, or associated systemic symptoms.",
    boardPearl: "Hodgkin's lymphoma: Reed-Sternberg cells (owl-eye appearance) on biopsy. B symptoms: fever >38°C, drenching night sweats, weight loss >10% in 6 months. Bimodal age distribution: 20s and >55 years. EBV association in mixed cellularity subtype."
  },
  {
    id: "im-pe-peripheral-edema",
    name: "Peripheral Edema — Grading and Characterization",
    system: "Cardiovascular / Renal / Hepatic",
    rotation: "internal-medicine",
    technique: "Press firmly with thumb over tibia or dorsum of foot for 5 seconds. Assess the degree of pitting (indentation left after pressure released). Note symmetry (bilateral vs. unilateral), distribution (ankle only vs. up to knee vs. up to thigh vs. anasarca), warmth, erythema, tenderness, and skin changes.",
    normalFinding: "No pitting edema. Skin recoils immediately after pressure release.",
    abnormalFindings: [
      "1+ pitting edema: 2 mm pitting, recoils in <15 seconds (mild — ankles only)",
      "2+ pitting edema: 4 mm pitting, recoils in 15–30 seconds (moderate — up to mid-shin)",
      "3+ pitting edema: 6 mm pitting, recoils in 30–60 seconds (moderately severe — up to the knee)",
      "4+ pitting edema: 8+ mm pitting, recoils in >60 seconds (severe — up to thigh or beyond)",
      "Non-pitting edema: no indentation left = lymphedema, myxedema (hypothyroidism), lipedema — NOT interstitial fluid",
      "Unilateral edema: DVT, lymphedema, venous insufficiency, ruptured Baker's cyst, cellulitis, May-Thurner syndrome",
      "Bilateral edema: CHF, cirrhosis, nephrotic syndrome, hypoalbuminemia, bilateral DVT, venous insufficiency, medications (CCBs, steroids, thiazolidinediones)"
    ],
    associatedConditions: ["CHF (bilateral, worse at end of day)", "Cirrhosis with portal hypertension and hypoalbuminemia", "Nephrotic syndrome (anasarca, periorbital edema)", "Chronic venous insufficiency (hemosiderin staining, lipodermatosclerosis)", "DVT (unilateral, warm, tender)", "Medication-induced (amlodipine, dihydropyridine CCBs most common)"],
    clinicalPearl: "Cardiac edema: worse in evening, improves with leg elevation and overnight recumbency. Associated JVD, S3, orthopnea. Nephrotic syndrome: periorbital edema in the morning (classic), heavy proteinuria, hypoalbuminemia, hyperlipidemia. Amlodipine-induced edema: dihydropyridine CCBs cause preferential arteriolar dilation without venous dilation → capillary hydrostatic pressure rises → edema. Adding ACE inhibitor (prevents venoconstriction) can reduce CCB-induced edema.",
    boardPearl: "Starling forces: Edema = ↑capillary hydrostatic pressure (CHF, venous HTN) OR ↓oncotic pressure (nephrotic syndrome, cirrhosis, malnutrition) OR ↑capillary permeability (infection, inflammation) OR lymphatic obstruction (lymphedema, malignancy)."
  },
  {
    id: "im-pe-lung-exam",
    name: "Pulmonary Auscultation — Crackles, Wheeze, and Egophony",
    system: "Pulmonary",
    rotation: "internal-medicine",
    technique: "Auscultate posteriorly (more lung tissue accessible than anteriorly). Have patient breathe deeply through mouth. Compare side to side at each level. Assess for: breath sound quality (vesicular vs. bronchial), added sounds (crackles/rales, wheeze, rhonchi, pleural rub), and vocal transmission (egophony, tactile fremitus, whispered pectoriloquy).",
    normalFinding: "Vesicular breath sounds throughout: soft, breezy, longer inspiration than expiration. No added sounds. Tactile fremitus equal bilaterally. No egophony.",
    abnormalFindings: [
      "Fine crackles (Velcro rales): end-inspiratory, high-pitched, discontinuous popping sounds at lung bases. Like Velcro being pulled apart. = Pulmonary fibrosis (IPF). Also early pulmonary edema (interstitial edema).",
      "Coarse crackles: early-to-mid inspiratory, low-pitched, bubbling sounds = fluid in larger airways. Seen in pneumonia, pulmonary edema (alveolar stage), bronchiectasis.",
      "Wheezing: high-pitched, musical, continuous sounds on expiration (sometimes inspiration). Diffuse bilateral = asthma, COPD. Unilateral localized = endobronchial lesion (foreign body, carcinoid, malignancy).",
      "Rhonchi: low-pitched, snoring quality, continuous sounds — clears with coughing = mucus in large airways (bronchitis, COPD).",
      "Pleural friction rub: coarse, leathery, grating sound on both inspiration AND expiration = pleuritis (not cleared by coughing, unlike rhonchi).",
      "Egophony (E-to-A change): ask patient to say 'eee' — over consolidated lung, sounds like 'aaay' = lung consolidation (pneumonia) or above a pleural effusion.",
      "Whispered pectoriloquy: whispered words heard distinctly over consolidated lung (normally muffled).",
      "Bronchial breath sounds in lung periphery: high-pitched, harsh, longer expiration than inspiration in lung fields (not just central) = lung consolidation, above pleural effusion.",
      "Absent/diminished breath sounds: pleural effusion, pneumothorax, severe emphysema, or obesity."
    ],
    associatedConditions: ["Fine crackles: IPF, early CHF", "Coarse crackles: pneumonia, alveolar edema", "Wheeze: asthma, COPD, foreign body", "Egophony: pneumonia, lobar consolidation"],
    clinicalPearl: "IPF crackles are VELCRO-quality, bilateral, basilar, and DO NOT clear with coughing. They occur because small airways and alveoli snap open during inspiration in the setting of fibrotic lung tissue. Associated with digital clubbing in 25–50% of patients.",
    boardPearl: "Pleural effusion: DECREASED breath sounds + DECREASED tactile fremitus + DULL to percussion. Consolidation (pneumonia): INCREASED/BRONCHIAL breath sounds + INCREASED tactile fremitus + DULL to percussion + EGOPHONY positive. Pneumothorax: DECREASED breath sounds + DECREASED tactile fremitus + HYPERRESONANT percussion."
  },
  {
    id: "im-pe-neuro-screen",
    name: "Cranial Nerve Examination — Rapid Bedside Screen",
    system: "Neurologic",
    rotation: "internal-medicine",
    technique: "Screen all 12 cranial nerves systematically: CN I (smell — coffee, peppermint each nostril), CN II (visual acuity, visual fields by confrontation, pupil light reflex — direct + consensual), CN III/IV/VI (EOMI in 6 directions of gaze; assess ptosis, nystagmus), CN V (facial sensation V1/V2/V3 with wisp of cotton; corneal reflex; jaw clench), CN VII (raise eyebrows, close eyes tight, show teeth, puff cheeks), CN VIII (finger rub or whisper test each ear; Rinne and Weber if hearing loss), CN IX/X (palate elevation, uvula midline, gag reflex), CN XI (shoulder shrug, SCM contraction against resistance), CN XII (tongue protrusion — deviates toward weak side).",
    normalFinding: "All 12 cranial nerves intact. Pupils equal, round, reactive to light and accommodation (PERRLA). EOMI without nystagmus. Symmetric facial movement. Midline uvula. Tongue midline.",
    abnormalFindings: [
      "CN III palsy (oculomotor): 'down and out' eye position, ptosis, dilated non-reactive pupil. Causes: posterior communicating artery aneurysm (pupil-involving — EMERGENCY), uncal herniation, DM (pupil-sparing CN III palsy from microvascular infarction).",
      "CN VI palsy (abducens): inability to abduct eye (eye deviated medially); diplopia on lateral gaze. Most common CN palsy. Causes: increased ICP (false localizing sign), MS, ischemia.",
      "CN VII palsy — peripheral (Bell's palsy): UPPER AND LOWER face weakness ipsilateral (cannot raise eyebrow — distinguishes from central). Central CN VII lesion (stroke): only lower face weak (contralateral) — forehead sparing because bilateral cortical representation of forehead.",
      "CN XII: tongue deviates TOWARD the side of a lower motor neuron lesion (weak side), AWAY from the side of upper motor neuron lesion (stroke).",
      "Horner syndrome: ptosis (partial) + miosis + anhidrosis. CN III vs. Horner: CN III = large pupil (dilated); Horner = small pupil (constricted). Caused by lesions along the sympathetic chain (Pancoast tumor, carotid dissection, lateral medullary syndrome)."
    ],
    associatedConditions: ["CN III palsy: PCA aneurysm, herniation, DM, MG", "CN VII palsy: Bell's palsy (HSV-1), Lyme, Ramsay Hunt, parotid tumor, stroke", "Horner: Pancoast tumor, carotid dissection, Wallenberg syndrome"],
    clinicalPearl: "A pupil-involved CN III palsy (dilated, non-reactive pupil + ophthalmoplegia + ptosis) is a neurosurgical emergency — posterior communicating artery aneurysm until proven otherwise. Obtain non-contrast CT head stat, then CTA or MRA. Pupil-sparing CN III palsy (pain-free, normal pupil) in a diabetic patient = ischemic mononeuropathy (more benign — follow for resolution over 3 months).",
    boardPearl: "Bell's palsy vs. central CN VII: peripheral (Bell's) = ENTIRE ipsilateral face (forehead included) because LMN lesion. Central stroke = ONLY lower 2/3 of contralateral face (forehead spared — bilateral UMN representation of frontalis). Test: ask patient to raise eyebrows and close eyes tight."
  }
];
