// @ts-nocheck
import type { DifferentialSet } from "@/types";

export const internalMedicineDifferentials: DifferentialSet[] = [
  {
    id: "im-diff-chest-pain-inpatient",
    chiefComplaint: "Acute chest pain (inpatient/ED presentation)",
    rotation: "internal-medicine",
    differentials: [
      {
        diagnosis: "Acute Myocardial Infarction (STEMI/NSTEMI)",
        likelihood: "high",
        distinguishingHistory: "Crushing, pressure-like substernal pain radiating to left arm or jaw; diaphoresis, nausea; risk factors: HTN, DM, smoking, hyperlipidemia, prior CAD; pain >20 min not relieved by nitroglycerin",
        distinguishingExam: "Diaphoresis, S4 gallop, new MR murmur (papillary muscle dysfunction), signs of cardiogenic shock (hypotension, cool extremities, elevated JVP)",
        keyWorkup: "EKG (within 10 min), serial troponins (q3–6h), CXR, point-of-care echo; activate cath lab for STEMI",
        redFlags: ["ST elevation in ≥2 contiguous leads (STEMI)", "New LBBB with chest pain", "Hemodynamic instability — cardiogenic shock", "Persistent pain unresponsive to nitrates", "Ventricular arrhythmias (VFib, VTach)"],
        clinicalPearl: "NSTEMI and STEMI both cause troponin elevation but STEMI requires emergent cath lab activation. Door-to-balloon time target: ≤90 min. TIMI and GRACE scores risk-stratify NSTEMI for early vs. conservative management."
      },
      {
        diagnosis: "Aortic Dissection",
        likelihood: "high",
        distinguishingHistory: "Sudden, severe, tearing or ripping pain radiating to the back (interscapular); uncontrolled hypertension, Marfan syndrome, bicuspid aortic valve; pain maximal at onset (unlike MI which builds)",
        distinguishingExam: "BP differential between arms >20 mmHg, pulse differential, aortic insufficiency murmur (Type A), neurologic deficits, malperfusion syndromes",
        keyWorkup: "CTA chest with contrast (gold standard), CXR (widened mediastinum >8 cm in 60%), transesophageal echo; D-dimer has high NPV for ruling out if pre-test probability low",
        redFlags: ["BP differential between arms", "Absent pulses", "New aortic insufficiency", "Neurologic deficits", "Widened mediastinum on CXR"],
        clinicalPearl: "Type A (ascending aorta involved) = surgical emergency (mortality increases 1–2%/hour). Type B (descending only) = medical management (IV esmolol for heart rate control, then vasodilators for BP). Do NOT give thrombolytics — fatal dissection hemorrhage risk."
      },
      {
        diagnosis: "Pulmonary Embolism",
        likelihood: "high",
        distinguishingHistory: "Pleuritic chest pain (sharp, worsens with breathing), dyspnea, tachycardia; risk factors: recent surgery/immobilization, DVT, malignancy, oral contraceptive use, prior PE, hypercoagulable state (Factor V Leiden)",
        distinguishingExam: "Tachycardia (most common), tachypnea, hypoxia; RV strain signs (JVD, right-sided S3/S4, tricuspid regurgitation murmur); massive PE: hypotension, PEA arrest",
        keyWorkup: "Wells PE score → if low probability: D-dimer (negative = rules out PE); if intermediate/high: CTA pulmonary angiography (CTPA). EKG: sinus tachycardia (most common), S1Q3T3 (classic but insensitive), RBBB, RV strain. Echo: RV dilation, McConnell's sign (RV free wall hypokinesis with apical sparing)",
        redFlags: ["Hypotension/shock (massive PE)", "SpO2 <90% on room air", "Syncope", "RV dilation on echo", "PEA cardiac arrest — think tension PTX and massive PE"],
        clinicalPearl: "PERC criteria (8 criteria — all must be absent to rule out PE without D-dimer): age <50, HR <100, SpO2 >94%, no unilateral leg swelling, no hemoptysis, no prior DVT/PE, no recent trauma/surgery, no exogenous estrogen. If all met = PE excluded clinically."
      },
      {
        diagnosis: "Unstable Angina",
        likelihood: "medium",
        distinguishingHistory: "Typical anginal symptoms (exertional chest pressure) that are new-onset, occurring at rest, or with increasing frequency/severity/duration compared to baseline angina; NOT relieved by rest",
        distinguishingExam: "May be normal between episodes; transient ST depression, T-wave inversions during pain",
        keyWorkup: "Serial EKGs, troponins (negative in UA — positive = NSTEMI), stress testing after stabilization",
        redFlags: ["Pain at rest >20 minutes", "Hemodynamic instability", "New or worsening HF symptoms", "Dynamic EKG changes"],
        clinicalPearl: "Unstable angina is an ACS without troponin elevation (biomarker-negative). Managed with dual antiplatelet therapy (aspirin + P2Y12 inhibitor), anticoagulation, beta-blocker, and early invasive strategy if TIMI risk score ≥3."
      },
      {
        diagnosis: "Acute Pericarditis",
        likelihood: "medium",
        distinguishingHistory: "Sharp pleuritic chest pain relieved by sitting forward (leaning forward reduces pericardial friction); worse supine; often preceded by viral illness (fever, URI); radiation to trapezius ridge (phrenic nerve irritation — pathognomonic)",
        distinguishingExam: "Pericardial friction rub (scratchy, leathery, 3-component sound over LLSB — best heard with patient sitting forward and breath held in expiration); fever",
        keyWorkup: "EKG: diffuse ST elevation (saddle-shaped, in all leads except aVR and V1 where ST depressed) + PR depression (pathognomonic); CRP/ESR elevated; Echo to rule out effusion",
        redFlags: ["Beck's triad (JVD + hypotension + muffled heart sounds) = tamponade", "Pulsus paradoxus >10 mmHg", "Large pericardial effusion on echo"],
        clinicalPearl: "Treatment: NSAIDs (ibuprofen 600 mg TID) + colchicine 0.5 mg BID × 3 months reduces recurrence by 50% (COPE and ICAP trials). Avoid NSAIDs in post-MI pericarditis (Dressler syndrome) — use aspirin. Restrict physical activity until pain-free + CRP normalized."
      },
      {
        diagnosis: "Esophageal Spasm / GERD",
        likelihood: "low",
        distinguishingHistory: "Burning or squeezing chest pain that may mimic angina; often related to meals, alcohol, or lying down; may be relieved by antacids or nitroglycerin (esophageal smooth muscle relaxation); dysphagia for solids and liquids (esophageal spasm)",
        distinguishingExam: "Normal cardiac exam, epigastric tenderness",
        keyWorkup: "Rule out cardiac causes first (EKG, troponins). Upper endoscopy, esophageal manometry, barium swallow",
        redFlags: ["Dysphagia + weight loss = malignancy until proven otherwise", "Odynophagia (painful swallowing) = esophageal ulcer, candidal esophagitis"],
        clinicalPearl: "Nitroglycerin relieves both angina AND esophageal spasm — do not use nitroglycerin response to confirm or exclude ACS."
      }
    ]
  },
  {
    id: "im-diff-dyspnea-acute",
    chiefComplaint: "Acute dyspnea (new or worsening)",
    rotation: "internal-medicine",
    differentials: [
      {
        diagnosis: "Acute Decompensated Heart Failure (ADHF)",
        likelihood: "high",
        distinguishingHistory: "Orthopnea (SOB when lying flat — number of pillows used), paroxysmal nocturnal dyspnea (waking from sleep gasping), peripheral edema, weight gain over days; history of CHF, CAD, valvular disease, HTN",
        distinguishingExam: "Elevated JVP, bilateral basilar crackles, S3 gallop, peripheral pitting edema, displaced PMI (cardiomegaly)",
        keyWorkup: "BNP or NT-proBNP (BNP >400 = CHF very likely; <100 = unlikely), CXR (cardiomegaly, vascular congestion, Kerley B lines, effusions), EKG, point-of-care echo (EF, effusion), BMP, CBC",
        redFlags: ["SpO2 <90% on room air", "Respiratory rate >30", "Accessory muscle use", "Altered mental status", "Hypotension (cardiogenic shock)"],
        clinicalPearl: "Classify by hemodynamic profile (Forrester): warm/wet (adequate perfusion, congestion — diuresis), cold/wet (hypoperfusion + congestion — inotropes + diuresis), cold/dry (hypoperfusion only — IV fluids cautiously). Most ADHF patients are warm/wet."
      },
      {
        diagnosis: "COPD Exacerbation",
        likelihood: "high",
        distinguishingHistory: "Known COPD; increased dyspnea, increased sputum production and/or change in sputum color (green/yellow), worsening cough; triggers: respiratory infection (most common), air pollution, medication non-adherence",
        distinguishingExam: "Prolonged expiratory phase, diffuse expiratory wheezing, diminished breath sounds, hyperinflation signs (barrel chest, hyperresonance), accessory muscle use, pursed-lip breathing",
        keyWorkup: "ABG (assess hypercapnia: PaCO2 >45 with pH <7.35 = respiratory acidosis → acute ventilatory failure → consider NIV), peak flow or spirometry, CXR (rule out PNA, PTX), CBC (eosinophilia predicts steroid response), sputum culture if purulent",
        redFlags: ["Hypercapnia with acidosis (pH <7.35)", "Severe hypoxemia (PaO2 <55 mmHg, SpO2 <88% on supplemental O2)", "Altered mental status", "Hemodynamic instability"],
        clinicalPearl: "NIV (BiPAP) reduces intubation rates, ICU stays, and mortality in moderate-severe COPD exacerbation with hypercapnia (pH 7.25–7.35). Target SpO2 88–92% — avoid excessive O2 supplementation (can worsen hypercapnia by releasing hypoxic vasoconstriction)."
      },
      {
        diagnosis: "Pneumonia",
        likelihood: "high",
        distinguishingHistory: "Productive cough (purulent sputum), fever, pleuritic chest pain, dyspnea; community-acquired (CAP) vs. hospital-acquired (HAP >48h after admission) vs. ventilator-associated (VAP); risk factors: elderly, immunosuppression, nursing home, prior antibiotics",
        distinguishingExam: "Fever, focal dullness to percussion, decreased breath sounds, egophony, increased tactile fremitus, bronchial breath sounds — all in same area (lobar consolidation)",
        keyWorkup: "CXR (lobar infiltrate — note: may be negative in early PNA, in dehydrated patients, or in PCP), CBC (leukocytosis), BMP, blood cultures ×2 (before antibiotics if severe), Legionella and pneumococcal urinary antigens, sputum Gram stain and culture. PSI/PORT score guides admission",
        redFlags: ["SpO2 <90%", "Bilateral infiltrates (ARDS/CAP)", "Septic shock", "Abscess or empyema formation", "Legionella (rapidly progressive bilateral)"],
        clinicalPearl: "CURB-65 score (Confusion, Urea >7 mmol/L, RR ≥30, BP <90/60, age ≥65): 0–1 = outpatient; 2 = consider admission; 3–5 = admit (ICU if 4–5). CAP treatment: azithromycin monotherapy (mild, outpatient) or beta-lactam + azithromycin or fluoroquinolone monotherapy (moderate-severe inpatient)."
      },
      {
        diagnosis: "Pulmonary Embolism",
        likelihood: "medium",
        distinguishingHistory: "Sudden onset dyspnea ± pleuritic chest pain, hemoptysis (pulmonary infarction), syncope; risk factors: immobility, surgery, malignancy, pregnancy, OCP, prior clot, hypercoagulable state",
        distinguishingExam: "Tachycardia, tachypnea, hypoxia; unilateral leg swelling/tenderness (DVT); signs of RV strain (JVD, right-sided S3, tricuspid regurgitation) in massive PE",
        keyWorkup: "Wells criteria → D-dimer (if low probability) or CTPA (intermediate/high probability). EKG: tachycardia, S1Q3T3, RV strain pattern. Echo: RV dilation, McConnell's sign, septal bowing.",
        redFlags: ["Hemodynamic instability (massive PE)", "Syncope", "Severe hypoxia"],
        clinicalPearl: "Submassive PE: right heart strain on echo or EKG without hemodynamic compromise. Catheter-directed thrombolysis or systemic thrombolysis reserved for massive PE with hemodynamic instability. Anticoagulation is primary treatment for submassive PE."
      },
      {
        diagnosis: "Pneumothorax",
        likelihood: "medium",
        distinguishingHistory: "Sudden onset unilateral pleuritic chest pain and dyspnea; primary spontaneous PTX: tall thin young males (blebs); secondary: COPD, asthma, CF, Marfan, catamenial (endometriosis); tension PTX: post-procedure, mechanical ventilation",
        distinguishingExam: "Unilateral: decreased/absent breath sounds, hyperresonance, decreased chest expansion; tension PTX: tracheal deviation AWAY from pneumothorax, JVD, hypotension, absent breath sounds",
        keyWorkup: "CXR (upright expiratory): visible visceral pleural line with absence of lung markings peripherally. Ultrasound (POCUS): absent lung sliding sign (M-mode: stratosphere/barcode sign vs. seashore sign). Tension PTX = clinical diagnosis — treat BEFORE CXR.",
        redFlags: ["Tension PTX: tracheal deviation + JVD + hypotension = IMMEDIATE needle decompression (2nd ICS MCL) followed by chest tube"],
        clinicalPearl: "Tension pneumothorax: needle decompression at 2nd ICS, MCL (or 4th–5th ICS anterior axillary line) — large bore needle (14–16 gauge). Definitive treatment: chest tube (28–32 Fr thoracostomy tube). Small primary spontaneous PTX (<2 cm apex-to-cupola) in stable patient: supplemental O2 and observation."
      },
      {
        diagnosis: "Asthma Exacerbation",
        likelihood: "medium",
        distinguishingHistory: "Known asthma; triggers: allergens, URI, exercise, cold air, aspirin/NSAIDs, beta-blockers; bilateral wheezing, cough, chest tightness; rapid reversibility with bronchodilators",
        distinguishingExam: "Diffuse bilateral expiratory (and inspiratory if severe) wheeze, prolonged expiration, accessory muscle use, paradoxical breathing (severe), pulsus paradoxus >25 mmHg (severe)",
        keyWorkup: "Peak expiratory flow rate (PEFR): <40% predicted = severe; oxygen saturation; ABG (normal PaCO2 in early attack indicates appropriate hyperventilation; rising PaCO2 = fatigue and impending respiratory failure); CXR to exclude pneumonia/PTX",
        redFlags: ["Silent chest (no wheeze = severe airway obstruction)", "PaCO2 normalizing or rising in acute attack", "Altered mental status", "SpO2 <90% despite bronchodilators"],
        clinicalPearl: "In severe asthma: do NOT wait for ABG to treat — treat empirically with SABA + ipratropium nebulizers, IV or oral systemic corticosteroids (40 mg prednisone), and magnesium sulfate 2g IV over 20 min. IV magnesium is a proven bronchodilator in severe exacerbations."
      }
    ]
  },
  {
    id: "im-diff-aki",
    chiefComplaint: "Acute kidney injury (rising creatinine)",
    rotation: "internal-medicine",
    differentials: [
      {
        diagnosis: "Prerenal Azotemia (Volume Depletion)",
        likelihood: "high",
        distinguishingHistory: "Poor oral intake, vomiting/diarrhea, bleeding, overdiuresis, sepsis (distributive shock); BUN/Cr ratio >20:1; rapid improvement with IV fluids",
        distinguishingExam: "Orthostatic hypotension, dry mucous membranes, decreased skin turgor, tachycardia, decreased urine output",
        keyWorkup: "BUN/Cr ratio >20:1, FENa <1% (FEUrea <35% if on diuretics), urine specific gravity >1.020, urine sodium <20 mEq/L, urine osmolality >500 mOsm/kg; UA normal (no casts)",
        redFlags: ["BUN/Cr >30:1", "Oliguria (<400 mL/day) persisting after volume resuscitation", "Signs of cardiorenal syndrome"],
        clinicalPearl: "Contrast-induced nephropathy prevention: isotonic saline hydration 1 mL/kg/hr 3–12 hours before and after contrast; minimize contrast volume; hold metformin 48 hours post-contrast in eGFR <45; avoid NSAIDs, aminoglycosides, and other nephrotoxins perioperatively."
      },
      {
        diagnosis: "Acute Tubular Necrosis (ATN)",
        likelihood: "high",
        distinguishingHistory: "Ischemic ATN: hypotension, sepsis, cardiac surgery — often follows prerenal azotemia that has not resolved. Nephrotoxic ATN: aminoglycosides, cisplatin, contrast dye (within 48–72h of exposure), myoglobinuria (rhabdomyolysis), hemoglobinuria",
        distinguishingExam: "Often unremarkable; rhabdomyolysis: muscle tenderness, swelling (compartment syndrome), tea-colored urine",
        keyWorkup: "UA: granular 'muddy brown' casts + renal tubular epithelial cells + renal tubular epithelial cell casts (pathognomonic for ATN). FENa >2%. Urinalysis dipstick + blood without RBCs on microscopy = myoglobinuria. CK >10,000 in rhabdomyolysis.",
        redFlags: ["Oliguria <400 mL/day despite adequate volume", "Rising K+, bicarbonate <15, uremic symptoms", "Pulmonary edema from fluid overload without urine output"],
        clinicalPearl: "ATN recovery: oliguric phase (1–3 weeks) → polyuric phase (urine output increases as tubules recover but cannot concentrate — monitor for hypokalemia and dehydration) → recovery phase (creatinine normalizes over weeks). Dialysis if refractory hyperkalemia, acidosis, uremic symptoms, or volume overload."
      },
      {
        diagnosis: "Acute Interstitial Nephritis (AIN)",
        likelihood: "medium",
        distinguishingHistory: "Classic triad: fever, rash, eosinophilia (present only 10–15% of cases — low sensitivity). Drug exposure 2–3 weeks prior: NSAIDs (most common), PPIs, beta-lactam antibiotics, sulfonamides, rifampin; or less commonly, sarcoidosis, SLE, infections (Legionella, Hantavirus)",
        distinguishingExam: "Rash (maculopapular — drug hypersensitivity pattern); flank tenderness",
        keyWorkup: "UA: WBC casts + WBCs without bacteriuria, mild proteinuria, eosinophiluria (Hansel stain — poor sensitivity/specificity but suggestive). FENa >1%. Renal biopsy (definitive diagnosis if cause uncertain or failing to improve after stopping offending drug).",
        redFlags: ["Severe AKI requiring dialysis", "Failure to recover after stopping causative drug", "Granulomatous AIN (sarcoidosis) — requires steroids"],
        clinicalPearl: "Stop the offending drug immediately. Corticosteroids (prednisone 1 mg/kg × 2–4 weeks then taper) may accelerate recovery if started within 2 weeks of drug cessation — evidence is observational. Prolonged delay in treatment predicts incomplete recovery."
      },
      {
        diagnosis: "Glomerulonephritis (Nephritic Syndrome)",
        likelihood: "medium",
        distinguishingHistory: "Hematuria (tea-colored or smoky urine — 'cola-colored'), hypertension, oliguria, edema; may follow streptococcal pharyngitis or skin infection (post-streptococcal GN — 1–3 weeks after throat, 3–6 weeks after skin); or systemic disease (SLE, IgA nephropathy, ANCA vasculitis, anti-GBM disease)",
        distinguishingExam: "Hypertension (new or worsened), periorbital edema, tea-colored urine",
        keyWorkup: "UA: RBC casts (pathognomonic for GN), dysmorphic RBCs, proteinuria. Complement levels (C3/C4): low in post-strep GN, SLE, membranoproliferative GN (complement consumption). ANA, anti-dsDNA (SLE); ANCA (PR3-ANCA = GPA; MPO-ANCA = MPA); anti-GBM antibody (Goodpasture's); ASO titer, anti-DNase B (post-strep); renal biopsy (definitive)",
        redFlags: ["Rapidly progressive GN (RPGN): crescent formation on biopsy — renal failure in days to weeks without treatment", "Pulmonary hemorrhage + GN = Goodpasture's or ANCA vasculitis (pulmonary-renal syndrome)"],
        clinicalPearl: "IgA nephropathy: most common GN worldwide. Hematuria within 24–72 hours of URI (synpharyngitic — vs. post-streptococcal GN which is 1–3 weeks after). IgA deposits on biopsy (immunofluorescence). Treat with ACE inhibitor/ARB + fish oil; consider steroids or immunosuppression for progressive disease."
      },
      {
        diagnosis: "Postrenal (Obstructive) AKI",
        likelihood: "medium",
        distinguishingHistory: "Sudden anuria OR alternating oliguria/polyuria; symptoms of obstruction: difficulty urinating, urinary retention, pelvic pain; history of BPH (men), cervical cancer, pelvic mass, retroperitoneal fibrosis, nephrolithiasis",
        distinguishingExam: "Palpable bladder (suprapubic fullness), flank pain (hydronephrosis), prostate enlargement on DRE",
        keyWorkup: "Bladder scan or catheterization (>300 mL post-void residual = retention). Renal ultrasound (hydronephrosis — bilateral obstruction needed for AKI unless solitary kidney). CT without contrast (nephrolithiasis).",
        redFlags: ["Complete anuria (bilateral obstruction or obstruction of solitary kidney)", "Bilateral ureteral obstruction from malignancy"],
        clinicalPearl: "BPH-related urinary retention: insert Foley catheter immediately for relief. After decompression of long-standing obstruction, watch for 'post-obstructive diuresis' — massive urine output from osmotic diuresis and tubular dysfunction; replace 1/2 to 1/3 of urine output to prevent hypovolemia and electrolyte losses."
      }
    ]
  },
  {
    id: "im-diff-syncope",
    chiefComplaint: "Syncope (transient loss of consciousness)",
    rotation: "internal-medicine",
    differentials: [
      {
        diagnosis: "Vasovagal (Neurocardiogenic) Syncope",
        likelihood: "high",
        distinguishingHistory: "Prolonged standing, emotional stress, pain, Valsalva trigger; prodrome of nausea, diaphoresis, pallor, lightheadedness before LOC; rapid complete recovery; young healthy patient",
        distinguishingExam: "Normal cardiac exam; may have bradycardia during attack",
        keyWorkup: "History is sufficient for diagnosis in typical cases. Tilt-table test if recurrent and diagnosis uncertain. Rule out cardiac causes with EKG.",
        redFlags: ["Syncope with exertion (not after exertion — that is vasovagal)", "No prodrome", "Syncope in supine position", "Family history of sudden cardiac death"],
        clinicalPearl: "Syncope during exertion (not after) = cardiac arrhythmia or structural disease (HCM, AS, ARVC) until proven otherwise. Syncope AFTER exertion (cool-down phase) = vasovagal (venous pooling). Always distinguish."
      },
      {
        diagnosis: "Orthostatic Hypotension",
        likelihood: "high",
        distinguishingHistory: "Syncope/near-syncope on standing up; medications (diuretics, antihypertensives, alpha-blockers, tricyclics, dopamine agonists in Parkinson's); volume depletion; autonomic neuropathy (DM, Parkinson's, pure autonomic failure)",
        distinguishingExam: "SBP drop ≥20 mmHg or DBP drop ≥10 mmHg within 3 minutes of standing; HR increase >30 bpm on standing suggests hypovolemia (as compensation); absent HR increase with BP drop suggests autonomic neuropathy",
        keyWorkup: "Orthostatic vitals (supine → seated → standing). BMP (dehydration), CBC (anemia as contributory factor), medication review.",
        redFlags: ["Orthostatic hypotension + fixed HR (no compensatory tachycardia) = autonomic failure"],
        clinicalPearl: "Treat orthostatic hypotension: discontinue offending medications, increase fluid/salt intake, compression stockings, head-of-bed elevation. Pharmacologic: midodrine (alpha-1 agonist), fludrocortisone (mineralocorticoid)."
      },
      {
        diagnosis: "Cardiac Arrhythmia (Ventricular Tachycardia / Complete Heart Block / SSS)",
        likelihood: "medium",
        distinguishingHistory: "Sudden LOC without prodrome; brief palpitations immediately before LOC; syncope in supine position or with exertion; history of structural heart disease (CHF, post-MI, cardiomyopathy)",
        distinguishingExam: "Structural heart disease signs; may show bradycardia (heart block, SSS) or post-arrhythmia sinus rhythm",
        keyWorkup: "12-lead EKG (Brugada pattern, prolonged QT >500ms, delta wave/WPW, complete heart block, VT), Holter/event monitor (ambulatory 48-hour to 30-day), implantable loop recorder for recurrent unexplained syncope; cardiac MRI (ARVC, cardiomyopathy); EP study",
        redFlags: ["QTc >500 ms (torsades risk)", "Brugada pattern (RBBB + ST elevation V1–V3 = SCD risk)", "Long QT syndrome", "Complete heart block", "LVEF <35% (ICD indication)"],
        clinicalPearl: "CHADS-VASC score does not apply here. Arrhythmic syncope risk stratification: EGSYS score or OESIL score. High-risk features requiring hospitalization: exertional syncope, no prodrome, structural heart disease, EKG abnormalities, family history of SCD."
      },
      {
        diagnosis: "Structural Cardiac Disease (AS, HCM, Atrial Myxoma)",
        likelihood: "low",
        distinguishingHistory: "Exertional syncope; history of known aortic stenosis or HCM; palpitations with syncope; AS: angina + syncope + dyspnea triad (SAD triad)",
        distinguishingExam: "AS: crescendo-decrescendo systolic ejection murmur RUSB; HCM: dynamic outflow murmur increasing with Valsalva/standing",
        keyWorkup: "Echocardiogram (aortic valve area, LV outflow gradient, septal thickness)",
        redFlags: ["Exertional syncope with known murmur", "Family history of sudden death in young relatives"],
        clinicalPearl: "Atrial myxoma: ball-valve obstruction causing positional syncope (worse in one body position). 'Tumor plop' heard in early diastole. Left atrial myxoma mimics mitral stenosis clinically. Diagnosis by echo."
      },
      {
        diagnosis: "Seizure (pseudosyncope)",
        likelihood: "low",
        distinguishingHistory: "No prodrome (or aura — lights, smell, déjà vu); prolonged LOC >1 min; tonic-clonic movements (distinguish from syncopal myoclonus — brief, few jerks at LOC onset); post-ictal confusion; tongue biting, incontinence",
        distinguishingExam: "Post-ictal confusion, lateral tongue biting (specific for seizure), incontinence (less specific)",
        keyWorkup: "EEG, neuroimaging (MRI brain with gadolinium), serum prolactin (elevated 10–20 min after tonic-clonic seizure but not after syncope), glucose, electrolytes",
        redFlags: ["First seizure in adults — requires MRI brain to exclude structural lesion", "Status epilepticus"],
        clinicalPearl: "Syncopal myoclonus: brief jerking of limbs at LOC onset from cerebral hypoperfusion — does NOT mean seizure. Key distinction: duration of LOC, post-ictal confusion, tongue biting. Serum prolactin doubles after generalized tonic-clonic seizure (draw within 10–20 minutes of event)."
      }
    ]
  },
  {
    id: "im-diff-altered-mental-status",
    chiefComplaint: "Altered mental status / Confusion (acute onset)",
    rotation: "internal-medicine",
    differentials: [
      {
        diagnosis: "Delirium (Acute Confusional State)",
        likelihood: "high",
        distinguishingHistory: "Acute onset (hours to days), fluctuating course, inattention + disorganized thinking OR altered LOC; distinguish from dementia (chronic, no fluctuation) and psychiatric illness. Causes: I-WATCH-DEATH mnemonic",
        distinguishingExam: "Inattention (cannot spell WORLD backward or recite months in reverse), disorganized speech, altered arousal (hyperactive or hypoactive). CAM tool positive.",
        keyWorkup: "CAM (Confusion Assessment Method) score. Urinalysis (UTI common trigger), BMP (electrolytes, glucose, renal function), CBC, ammonia, ABG, TSH, LFTs, drug levels (digoxin, phenytoin), blood and urine cultures, chest X-ray, EKG, head CT (if focal deficits, head trauma, or new onset), LP (if meningitis suspected)",
        redFlags: ["Fever + stiff neck + photophobia = meningitis — LP urgently", "Focal neurologic deficits = stroke — CT/MRI urgently", "Asterixis = hepatic or uremic encephalopathy"],
        clinicalPearl: "I-WATCH-DEATH mnemonic for delirium causes: Infection, Withdrawal, Acute metabolic, Trauma, CNS pathology, Hypoxia, Deficiencies (B12, thiamine), Endocrine, Acute vascular, Toxins, Heavy metals. Non-pharmacologic prevention is most effective: early mobilization, reorientation, sleep hygiene, avoiding physical restraints."
      },
      {
        diagnosis: "Hypoglycemia",
        likelihood: "high",
        distinguishingHistory: "Diabetic patient on insulin or sulfonylurea; missed meal, excess insulin dose, alcohol, renal failure (reduced gluconeogenesis); rapid onset confusion, tremor, diaphoresis, palpitations; improves with glucose administration",
        distinguishingExam: "Diaphoresis, tachycardia, tremor; altered LOC can progress to seizures and coma at glucose <40 mg/dL",
        keyWorkup: "Bedside glucose (first test in any confused patient); Whipple triad: symptoms + low glucose + relief with glucose correction",
        redFlags: ["Serum glucose <40 mg/dL", "Seizures or coma from hypoglycemia"],
        clinicalPearl: "Rule of 15: for glucose 60–80 with mild symptoms, give 15 g fast-acting carbs (4 oz juice, glucose tablets), recheck in 15 minutes, repeat if still low. For severe hypoglycemia (NPO, unconscious): 25 g of 50% dextrose (D50W) IV; if no IV access, glucagon 1 mg IM/SC."
      },
      {
        diagnosis: "Meningitis / Encephalitis",
        likelihood: "medium",
        distinguishingHistory: "Fever + headache + nuchal rigidity (stiff neck) + photophobia = bacterial meningitis triad (Kernig's and Brudzinski's signs). Encephalitis: fever + confusion + focal neurologic deficits + seizures (herpes simplex encephalitis — temporal lobe involvement); immunocompromised host: cryptococcal meningitis (headache, CN palsies)",
        distinguishingExam: "Kernig's sign: inability to extend knee when hip flexed 90°. Brudzinski's sign: involuntary knee flexion when neck flexed. Papilledema (increased ICP). Purpuric rash (meningococcemia — do NOT delay antibiotics for LP)",
        keyWorkup: "LP (opening pressure, CSF cell count, glucose, protein, Gram stain, culture, bacterial antigen panel; PCR for HSV/EBV/CMV; crypto antigen in HIV). CT head BEFORE LP only if: papilledema, focal deficits, immunocompromised, new seizure, or altered LOC. Do NOT delay antibiotics for CT.",
        redFlags: ["Purpuric rash (meningococcemia — give ceftriaxone immediately, do not delay for LP)", "Papilledema (herniation risk with LP)", "Rapidly deteriorating neurologic status"],
        clinicalPearl: "HSV encephalitis: temporal lobe involvement on MRI (hyperintensity T2/FLAIR), CSF PCR for HSV (sensitivity 98%), treat empirically with acyclovir 10 mg/kg IV q8h while awaiting results. Treat suspected bacterial meningitis within 30 minutes of presentation with ceftriaxone 2g IV q12h + vancomycin 15–20 mg/kg IV."
      },
      {
        diagnosis: "Hepatic Encephalopathy",
        likelihood: "medium",
        distinguishingHistory: "Known cirrhosis or liver failure; triggered by: GI bleeding (blood as nitrogen load), infection (including SBP), constipation, sedative medications, hypokalemia, excess dietary protein, medication non-adherence (lactulose)",
        distinguishingExam: "Asterixis (flapping tremor — ask patient to extend arms, dorsiflex wrists; rhythmic flapping = positive), jaundice, ascites, stigmata of cirrhosis (spider angiomata, palmar erythema, gynecomastia, caput medusae)",
        keyWorkup: "Serum ammonia (elevated in HE but does not correlate with severity — use for supporting diagnosis); LFTs; BMP; CBC; search for trigger (UA, ascitic fluid analysis for SBP, blood cultures, CXR)",
        redFlags: ["Grade III–IV encephalopathy (stupor, coma)", "Acute liver failure with grade III/IV HE = early transplant evaluation"],
        clinicalPearl: "Lactulose is first-line treatment: titrate to 2–3 soft bowel movements per day. Rifaximin 550 mg BID added for recurrent HE or lactulose failure. Zinc supplementation (often deficient in cirrhosis, required for urea cycle enzymes). Protein restriction is no longer recommended — maintain adequate protein intake."
      }
    ]
  },
  {
    id: "im-diff-hyponatremia",
    chiefComplaint: "Hyponatremia (serum Na <136 mEq/L)",
    rotation: "internal-medicine",
    differentials: [
      {
        diagnosis: "SIADH (Syndrome of Inappropriate ADH Secretion)",
        likelihood: "high",
        distinguishingHistory: "Euvolemic patient (no signs of dehydration or fluid overload); causes: CNS disease (stroke, meningitis, subarachnoid hemorrhage, trauma), pulmonary disease (pneumonia, TB, SCLC — most common cancer), medications (SSRIs, carbamazepine, cyclophosphamide, thiazides, oxytocin), nausea, pain",
        distinguishingExam: "Euvolemic (no JVD, no edema, no orthostatic hypotension, normal skin turgor)",
        keyWorkup: "Serum osmolality (<280 = truly hypo-osmolar); urine osmolality >100 mOsm/kg (>300 = concentrated urine with water retention); urine sodium >40 mEq/L (hallmark of SIADH); TSH and 8AM cortisol (hypothyroidism and adrenal insufficiency cause SIADH-like picture — must rule out)",
        redFlags: ["Serum Na <120 with neurologic symptoms (seizures, coma)", "Rapid decline in sodium"],
        clinicalPearl: "SIADH diagnosis requires: serum hypo-osmolality + inappropriately concentrated urine + urine sodium >40 + euvolemia + normal adrenal, thyroid, and renal function. Treatment: fluid restriction (800–1000 mL/day first-line), salt tablets, vaptans (tolvaptan — selective V2 antagonist) for moderate-severe symptomatic SIADH."
      },
      {
        diagnosis: "Hypovolemic Hyponatremia",
        likelihood: "high",
        distinguishingHistory: "Volume losses: vomiting, diarrhea, diuretics, third-spacing (burns, pancreatitis, peritonitis); patient replaces volume with free water (hypotonic fluid) → dilutional hyponatremia",
        distinguishingExam: "Orthostatic hypotension, tachycardia, dry mucous membranes, decreased skin turgor, decreased JVP",
        keyWorkup: "Urine sodium <20 mEq/L (renal conservation of Na — extrarenal losses); urine Na >20 mEq/L if diuretic-related (renal losses)",
        redFlags: ["Severe volume depletion + hyponatremia with hemodynamic compromise"],
        clinicalPearl: "Treat hypovolemic hyponatremia with isotonic (0.9%) saline — corrects volume deficit, which then suppresses ADH, allowing free water excretion. Monitor Na q4–6h to avoid overcorrection."
      },
      {
        diagnosis: "Hypervolemic Hyponatremia (CHF, Cirrhosis, Nephrotic Syndrome)",
        likelihood: "high",
        distinguishingHistory: "Known CHF, cirrhosis, or nephrotic syndrome; edematous states despite total body sodium excess — effective arterial blood volume is reduced → ADH release despite hyponatremia",
        distinguishingExam: "JVD (CHF), ascites (cirrhosis), severe pitting edema (nephrotic syndrome), anasarca",
        keyWorkup: "Urine sodium <20 mEq/L (avid renal sodium retention despite hypervolemia); BNP (CHF), LFTs/albumin (cirrhosis), urinalysis (heavy proteinuria in nephrotic syndrome)",
        redFlags: ["Severe hyponatremia (<125) with anasarca and pulmonary edema"],
        clinicalPearl: "Treat the underlying disease. Fluid restriction + diuretics. Tolvaptan (V2 receptor antagonist) is approved for CHF and cirrhosis-related hypervolemic hyponatremia but risk of liver injury in cirrhosis (use with caution; contraindicated in hepatic impairment >mild)."
      }
    ]
  }
];
