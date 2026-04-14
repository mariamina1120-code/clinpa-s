import type { PhysicalExamFinding } from "@/types";

export const emergencyMedicinePhysicalExam: PhysicalExamFinding[] = [
  {
    conditionId: "em-stroke",
    conditionName: "Acute Stroke — Neurological Examination",
    rotation: "emergency-medicine",
    systemsExamined: ["Neurological", "Cranial Nerves", "Motor", "Sensory", "Cerebellar"],
    classicFindings: {
      inspection: [
        "Facial asymmetry: unilateral drooping of nasolabial fold, corner of mouth — contralateral to stroke",
        "Gaze deviation (horizontal conjugate gaze deviation toward side of lesion = frontal lobe lesion; away from lesion = pontine lesion)",
        "Hemineglect: patient ignores stimuli on one side (non-dominant parietal lobe infarct) — may not dress one side, does not acknowledge examiner from one direction",
        "Aphasia: non-fluent/halting speech with word-finding difficulty (Broca's area = left frontal) or fluent but nonsensical speech (Wernicke's = left temporal)",
        "Dysarthria: slurred speech without language difficulty (motor cortex, cerebellum, or bilateral lesions)",
      ],
      palpation: [
        "Carotid auscultation: carotid bruit (> 50% stenosis) — listen at angle of mandible",
        "Peripheral pulse assessment: irregular rhythm suggests atrial fibrillation (most common embolic source)",
      ],
      special: [
        "Pronator drift: patient extends arms forward, palms up, eyes closed — drift downward and pronation of one arm indicates contralateral corticospinal lesion",
        "Finger-nose-finger: cerebellar dysmetria (past-pointing, intention tremor) — ipsilateral to cerebellar lesion",
        "Rapid alternating movements: dysdiadochokinesia = cerebellar dysfunction",
        "Babinski sign: extension of great toe + fanning of other toes with plantar stimulation = upper motor neuron lesion (contralateral for cortical, ipsilateral for brainstem/cerebellar)",
      ],
    },
    keyManeuvers: [
      {
        name: "NIHSS (NIH Stroke Scale) — Abridged Bedside Assessment",
        steps: [
          "Level of consciousness (LOC): 0 = alert, 1 = drowsy, 2 = obtunded, 3 = unresponsive",
          "LOC questions (month + age): 0 = both correct, 1 = one correct, 2 = both wrong",
          "LOC commands (close eyes, grip/release): 0 = both, 1 = one, 2 = none",
          "Gaze: 0 = normal, 1 = partial gaze palsy, 2 = forced deviation",
          "Visual fields: 0 = no loss, 1 = partial hemianopia, 2 = complete hemianopia, 3 = bilateral/blind",
          "Facial palsy: 0 = normal, 1 = minor, 2 = partial (lower face), 3 = complete",
          "Motor arm (L and R): raise to 45° (lying) or 90° (sitting), hold 10 sec: 0 = no drift, 1 = drift before 10s, 2 = falls before 10s, 3 = no anti-gravity, 4 = no movement",
          "Motor leg: raise to 30°, hold 5 sec: same scoring as arm",
          "Limb ataxia: finger-nose-finger + heel-shin: 0 = absent, 1 = one limb, 2 = two limbs",
          "Sensory: pinprick face/arm/leg: 0 = normal, 1 = mild loss, 2 = severe loss/absent",
          "Language/Aphasia (name objects, read sentences, describe picture): 0 = normal, 1 = mild, 2 = severe, 3 = mute/global aphasia",
          "Dysarthria (read standard sentences): 0 = normal, 1 = mild-moderate slurring, 2 = unintelligible",
          "Extinction/Neglect: 0 = none, 1 = partial, 2 = profound",
        ],
        positiveResult:
          "NIHSS 0 = normal; 1–4 = minor stroke; 5–15 = moderate; 16–20 = moderate-severe; 21–42 = severe. NIHSS ≥ 6 suggests LVO (large vessel occlusion) — prompt CTA.",
        clinicalSignificance:
          "NIHSS is the validated severity score for stroke guiding treatment decisions. NIHSS ≥ 6 + CTA-confirmed LVO = consider mechanical thrombectomy. NIHSS improves or stabilizes after tPA = treatment response. NIHSS worsening after improvement = hemorrhagic transformation (emergent CT head).",
        sensitivityNote:
          "NIHSS underestimates posterior circulation strokes (vertebrobasilar) — symptoms of diplopia, ataxia, vertigo score low even when stroke is severe. Always perform HINTS exam in vertigo patients.",
      },
      {
        name: "HINTS Exam (Posterior Stroke vs. Peripheral Vertigo)",
        steps: [
          "H — Head Impulse Test: examiner holds patient's head and rapidly rotates to one side while patient fixates on examiner's nose. NORMAL impulse test (no catch-up saccade) = CENTRAL lesion (dangerous — posterior stroke). ABNORMAL impulse test (corrective catch-up saccade) = peripheral vestibular disorder (e.g., vestibular neuritis — benign).",
          "IN — Nystagmus: Observe direction of nystagmus. Unidirectional horizontal nystagmus (fast phase same direction regardless of gaze) = PERIPHERAL (benign). Direction-changing nystagmus (changes direction with gaze direction) = CENTRAL (dangerous — stroke).",
          "TS — Test of Skew: alternating cover test — cover one eye then quickly cover the other. Vertical skew deviation (one eye higher than other, alternates with cover test) = CENTRAL lesion (posterior fossa). No vertical skew = peripheral.",
        ],
        positiveResult:
          "HINTS 'CENTRAL' (dangerous): normal head impulse + direction-changing nystagmus + skew deviation = posterior circulation stroke until proven otherwise — MRI DWI immediately. HINTS 'PERIPHERAL' (benign): abnormal head impulse + unidirectional nystagmus + no skew = likely peripheral vestibular disorder.",
        clinicalSignificance:
          "HINTS has higher sensitivity than MRI in the first 24–48 hours for posterior circulation stroke (MRI DWI misses 17% of posterior strokes in first 24h). A normal head impulse in a patient with acute vertigo + nausea should be treated as stroke until MRI confirms otherwise.",
        sensitivityNote:
          "HINTS is only validated in patients with ACUTE continuous vertigo — not episodic vertigo (BPPV) or vertigo that has resolved. Sensitivity 100%, specificity 96% for posterior stroke (compared to 97% sensitivity of MRI DWI at 48–72h).",
      },
      {
        name: "Cincinnati Prehospital Stroke Scale",
        steps: [
          "Facial droop: ask patient to show teeth or smile — one side droops = abnormal.",
          "Arm drift: close eyes, extend both arms for 10 seconds — one arm drifts downward or pronates = abnormal.",
          "Speech abnormality: ask patient to say 'The sky is blue in Cincinnati' — slurred, wrong words, or unable to speak = abnormal.",
        ],
        positiveResult:
          "ANY one of the three abnormal = 72% probability of stroke. All three abnormal = 85% probability of stroke.",
        clinicalSignificance:
          "Used by EMS for rapid prehospital stroke identification and stroke center bypass decisions. Positive score = activate stroke alert, measure last known well time immediately.",
        sensitivityNote:
          "Sensitivity 59–72% for any stroke, specificity 89–95%. Misses posterior circulation strokes (vertigo/ataxia-predominant). LA Motor Scale and RACE scale have better sensitivity for LVO.",
      },
    ],
    documentationPhrase:
      "Neurological exam: A&Ox___, GCS ___/15. NIHSS ___/42. Gaze: conjugate/deviated ___. Visual fields: intact/hemianopia ___. Facial symmetry: symmetric/drooping ___. Speech: fluent, clear/aphasia (Broca's/Wernicke's)/dysarthria. Pronator drift: absent/present ___. Strength: RUE ___/5, LUE ___/5, RLE ___/5, LLE ___/5. Sensation: intact/diminished ___. Coordination: FNF intact/dysmetric ___. Babinski: downgoing/upgoing ___. Neglect: absent/present.",
    pitfalls: [
      "Missing posterior circulation stroke as vestibular neuritis — always perform HINTS exam in acute vertigo; a normal head impulse in continuous vertigo = central lesion",
      "Low NIHSS does not mean safe to discharge — NIHSS 0–4 strokes have a 10% risk of early neurological deterioration; even minor strokes require admission for workup",
      "Not measuring 'last known well' time immediately on arrival — clock starts when patient was LAST KNOWN TO BE AT BASELINE, not when symptoms were noticed",
      "Checking glucose before assessing stroke symptoms — do this simultaneously; hypoglycemia (< 50 mg/dL) or hyperglycemia (> 400 mg/dL) can mimic stroke and must be corrected before tPA is given",
      "Skipping posterior leads in patients with chest pain + anterior ST depression — depression in V1–V3 + tall R waves = posterior STEMI requiring V7–V9 leads",
    ],
  },
  {
    conditionId: "em-stemi",
    conditionName: "Cardiovascular Emergency Examination",
    rotation: "emergency-medicine",
    systemsExamined: ["Cardiovascular", "Respiratory", "Peripheral Vascular", "Abdomen"],
    classicFindings: {
      inspection: [
        "Levine's sign: clenched fist over sternum while describing chest pain — classic MI presentation (not pathognomonic but highly suggestive)",
        "Diaphoresis: profuse sweating = sympathetic activation from pain + low cardiac output — most predictive symptom of ACS",
        "Pallor and ashen appearance: reduced cardiac output and peripheral vasoconstriction",
        "JVP (jugular venous pressure): elevated > 3–4 cm above sternal angle = increased right heart filling pressure — CHF, tamponade, right heart failure, tension PTX",
        "Respiratory distress: labored breathing, accessory muscle use = pulmonary edema from left heart failure",
      ],
      palpation: [
        "PMI (point of maximal impulse): normally at 5th ICS MCL; displaced laterally/inferiorly = cardiomegaly (dilated cardiomyopathy, CHF)",
        "Pulsus paradoxus: > 10 mmHg drop in systolic BP with inspiration = cardiac tamponade, constrictive pericarditis, severe asthma/COPD",
        "Peripheral pulses: weak, thready = low cardiac output; bounding = high output; pulse deficit (radial vs femoral) > 20 mmHg = aortic dissection",
        "Lower extremity edema: pitting = right heart failure (measure height — ankle, knee, thigh), DVT assessment",
      ],
      auscultation: [
        "S3 gallop (ventricular): low-pitched, early diastolic sound ('Ken-tuck-y') = ventricular volume overload — acute MI, dilated cardiomyopathy, severe MR; pathological in adults",
        "S4 gallop (atrial): low-pitched, late diastolic ('Ten-nes-see') = stiff/non-compliant ventricle — LVH, acute ischemia, AS",
        "Friction rub: pericardial (scratchy, 3-component, varies with position and leaning forward) = pericarditis or Dressler syndrome (3–10 weeks post-MI)",
        "New murmur post-MI: holosystolic MR murmur = papillary muscle rupture; harsh holosystolic murmur + thrill at 4th ICS left + RV oxygen step-up = VSR (ventricular septal rupture)",
        "Muffled heart sounds + JVD + hypotension = Beck's triad of cardiac tamponade",
        "Pulmonary auscultation: fine basilar crackles/rales (cardiogenic pulmonary edema), wheeze (cardiac asthma)",
      ],
      special: [
        "Beck's triad (tamponade): muffled heart sounds + JVD + hypotension — pulsus paradoxus > 10 mmHg confirms",
        "Kussmaul's sign: JVP rises with inspiration (normally falls) = constrictive pericarditis, RV infarction (inferior MI), tamponade",
        "Corrigan's pulse (water-hammer): bounding, quickly collapsing pulse = severe aortic regurgitation",
      ],
    },
    keyManeuvers: [
      {
        name: "Pulsus Paradoxus Measurement",
        steps: [
          "Patient breathing normally (not deeply).",
          "Apply BP cuff and inflate above systolic.",
          "Slowly deflate — note the pressure at which Korotkoff sounds are heard ONLY during expiration (first systolic reading).",
          "Continue deflating until sounds are heard throughout the entire respiratory cycle (inspiration + expiration).",
          "Calculate difference between these two readings.",
        ],
        positiveResult:
          "Difference > 10 mmHg = pulsus paradoxus (abnormal). > 25 mmHg = severe (cardiac tamponade likely).",
        clinicalSignificance:
          "Cardiac tamponade: pulsus paradoxus > 10 mmHg is present in > 90% of cases. Also seen in: severe asthma, COPD, constrictive pericarditis, PE. NOT present in: tamponade with severe AR, ASD, or significant LV dysfunction (pericardium cannot compress the stiff ventricle).",
        sensitivityNote:
          "Sensitivity 98%, specificity 83% for cardiac tamponade. Absence of pulsus paradoxus in suspected tamponade should prompt evaluation for LV dysfunction or the above exceptions.",
      },
      {
        name: "JVP Assessment (Jugular Venous Pressure)",
        steps: [
          "Position patient at 45° head-of-bed elevation (adjust to see pulsation).",
          "Identify internal jugular vein pulsation (not carotid artery) — IJV: not palpable, varies with respiration, has two upstrokes (a-wave, v-wave), obliterated by pressure above clavicle.",
          "Identify top of venous pulsation column.",
          "Measure vertical height of pulsation above sternal angle (angle of Louis) — normal: ≤ 3–4 cm.",
          "JVP in cm H2O ≈ measured height + 5 cm (estimated RA pressure).",
        ],
        positiveResult:
          "JVP > 3–4 cm above sternal angle = elevated (> 8 cmH2O estimated RA pressure). Prominent a-wave = elevated RA pressure (pulmonary HTN, TR). Absent a-wave = atrial fibrillation. Prominent v-wave = tricuspid regurgitation.",
        clinicalSignificance:
          "Elevated JVP indicates increased central venous pressure: right heart failure, cardiac tamponade, tension PTX, SVC syndrome. Flat JVP in shock = distributive or hypovolemic (not cardiogenic). Kussmaul sign (JVP rises with inspiration) = constrictive pericarditis, RV infarction.",
        sensitivityNote:
          "Sensitivity 70–80% for elevated CVP in CHF. Operator-dependent — requires practice. Bedside US of IVC better quantifies CVP (IVC < 2.1 cm with > 50% inspiratory collapse = normal CVP ≤ 5 mmHg).",
      },
    ],
    documentationPhrase:
      "Cardiovascular exam: Regular/irregular rate and rhythm. HR ___, BP ___ (repeat ___). S1/S2 present, no S3/S4 noted / S3 present (volume overload). Murmur: none/grade ___ systolic/diastolic at ___. JVP ___ cm at 45°. PMI at ___. Peripheral pulses: radial 2+, femoral 2+, equal bilaterally. No pulsus paradoxus / pulsus paradoxus ___ mmHg. Lower extremities: no edema/1+/2+/3+ edema. Pulmonary: clear to auscultation/bilateral basilar crackles.",
    pitfalls: [
      "Missing a new murmur post-MI — papillary muscle rupture (acute MR) and ventricular septal rupture both present days after STEMI with hemodynamic deterioration; auscultate carefully at every assessment",
      "Diagnosing tamponade without Beck's triad — pulsus paradoxus is the most sensitive finding; Beck's triad is present in only 35% of acute tamponade cases",
      "Confusing IJV pulsation with carotid artery — IJV is NOT palpable, varies with respiration, and is eliminated by pressure above the pulsation; carotid is palpable, not affected by pressure",
      "Forgetting right-sided leads for right ventricular MI in inferior STEMI — ST elevation in V4R = RV infarction; avoid nitrates (preload-dependent RV — nitrates cause precipitous hypotension)",
      "Missing dissection by not checking bilateral arm BPs — difference > 20 mmHg between arms = aortic dissection until proven otherwise",
    ],
  },
  {
    conditionId: "em-trauma",
    conditionName: "Trauma Primary Survey (ABCDE)",
    rotation: "emergency-medicine",
    systemsExamined: ["Airway", "Respiratory", "Cardiovascular", "Neurological", "Musculoskeletal", "Abdomen"],
    classicFindings: {
      inspection: [
        "A — Airway: vocal sounds (phonation = patent airway), stridor (partial obstruction), gurgling (secretions/blood), silent (complete obstruction — emergency)",
        "B — Breathing: chest rise symmetry, accessory muscle use, open chest wound ('sucking' chest wound = pneumothorax), tracheal deviation (tension PTX — away from side of tension)",
        "C — Circulation: external bleeding (direct pressure), skin color/cap refill (pallor, mottling, cyanosis = shock), JVD (tension PTX or tamponade)",
        "D — Disability: pupil size and reactivity (blown pupil = uncal herniation), GCS assessment, posturing (decorticate vs decerebrate)",
        "E — Exposure: fully expose patient (remove all clothing) — spine immobilization, log roll for posterior exam, look for occult wounds",
      ],
      palpation: [
        "Tracheal position: midline vs deviation — tension PTX deviates AWAY (late sign)",
        "Chest wall: crepitus (rib fractures), subcutaneous emphysema (PTX communicating with soft tissue), flail segment (paradoxical movement)",
        "Abdomen: guarding, rigidity, tenderness (hollow organ injury); ecchymosis (seat belt sign = bowel injury, Cullen's = intraperitoneal blood, Grey Turner's = retroperitoneal)",
        "Pelvis: compress iliac wings (pelvic ring disruption = retroperitoneal hemorrhage — massive bleeding source)",
        "Long bones: deformity, step-off, crepitus, neurovascular status distal to injury",
      ],
      percussion: [
        "Chest: hyperresonance (PTX), dullness (hemothorax), stony dull (massive hemothorax)",
      ],
      auscultation: [
        "Breath sounds: absent unilaterally = hemothorax or PTX; bilateral absent = bilateral PTX or bilateral main-stem intubation",
        "Bowel sounds in chest = diaphragmatic rupture (bowel herniation into thorax)",
        "Heart sounds: muffled = hemopericardium/tamponade",
      ],
    },
    keyManeuvers: [
      {
        name: "FAST Exam (Focused Assessment with Sonography in Trauma)",
        steps: [
          "RUQ (Morrison's pouch): probe at right flank, coronal plane — identify liver, right kidney, diaphragm. Look for anechoic (black) fluid between liver and kidney.",
          "LUQ (splenorenal recess): probe at left flank — identify spleen, left kidney, diaphragm. Look for fluid.",
          "Suprapubic (pelvic view): transverse and sagittal views of bladder — look for fluid posterior to bladder/uterus (pouch of Douglas in women).",
          "Cardiac (subxiphoid or parasternal view): identify pericardial effusion (anechoic stripe around heart) — normally < 5 mm; > 1 cm = significant.",
          "Extended FAST (eFAST) — bilateral anterior thorax: probe along 2nd–4th ICS MCL, longitudinal — identify 'lung sliding' (present = no PTX) vs absent lung sliding (= PTX). M-mode: 'seashore sign' = normal; 'stratosphere/barcode sign' = PTX.",
        ],
        positiveResult:
          "Free fluid (anechoic/black stripe) in Morrison's pouch, splenorenal recess, or pelvis = hemoperitoneum. In hemodynamically UNSTABLE patient = emergent OR without CT. Pericardial effusion without lung sliding = cardiac tamponade + PTX.",
        clinicalSignificance:
          "FAST determines disposition in blunt trauma. Positive FAST + hemodynamic instability = immediate surgery (do NOT wait for CT). Negative FAST + stable = proceed to CT for definitive evaluation. Positive FAST + stable = CT for injury characterization before possible OR.",
        sensitivityNote:
          "FAST sensitivity: hepatic injury 41–84%, splenic 58–88%, pelvic free fluid 43–66%. Misses solid organ injuries without free fluid (grade I–II), retroperitoneal injuries, mesenteric tears. CT is definitive in stable patients.",
      },
      {
        name: "Tension Pneumothorax Recognition and Needle Decompression",
        steps: [
          "Clinical diagnosis — DO NOT wait for CXR if hemodynamically unstable: absent unilateral breath sounds + respiratory distress + hypotension + JVD + tachycardia ± tracheal deviation.",
          "Needle decompression (immediate): 14-gauge angiocatheter at 2nd ICS MCL (second intercostosuperficial above the 3rd rib to avoid neurovascular bundle at lower rib margin).",
          "Alternatively (increasing evidence): 4th–5th ICS anterior axillary line — less likely to miss in obese patients (shorter distance to pleura).",
          "Insert angiocatheter perpendicular to chest wall, advancing until rush of air (positive pressure). Remove needle, leave catheter.",
          "Definitive management: chest tube (28–32 Fr) at triangle of safety (4th–5th ICS between anterior and posterior axillary lines).",
        ],
        positiveResult:
          "Rush of air out of angiocatheter = tension pneumothorax confirmed and treated. Clinical improvement: HR decreases, BP improves, breath sounds return.",
        clinicalSignificance:
          "Tension PTX is a clinical diagnosis — NEVER wait for imaging in an unstable patient. Most preventable cause of death in trauma. In ventilated patients: sudden rise in peak airway pressure + hemodynamic deterioration = tension PTX until proven otherwise.",
        sensitivityNote:
          "Needle decompression fails in 33% of cases (catheter too short for obese chest wall — use finger thoracostomy instead, then chest tube). Tracheal deviation is a LATE finding — present in only 30% of tension PTX cases.",
      },
    ],
    documentationPhrase:
      "Primary survey: A — Airway patent/compromised (intervention: ___). B — Breath sounds equal/unequal bilaterally; RR ___; SpO2 ___%. C — HR ___, BP ___; external hemorrhage controlled/active; skin warm/cool/mottled. D — GCS ___ (E_V_M_); pupils ___ mm, equal/unequal, reactive/unreactive. E — Fully exposed; no occult injuries identified/injuries found: ___. Secondary survey initiated after primary survey completed and patient stabilized.",
    pitfalls: [
      "Treating tracheal deviation before clinical decompression — tracheal deviation is a late sign; decompress based on clinical status + absent breath sounds + hemodynamic instability",
      "Missing pelvic fracture as hemorrhage source — pelvic ring disruption can bleed 4–6 liters into retroperitoneum; never compress pelvis repeatedly (disrupts clot); apply pelvic binder and activate massive transfusion protocol",
      "CT for hemodynamically unstable patient — FAST + OR is the correct pathway; CT delays lifesaving intervention",
      "Missing spinal cord injury by not assessing rectal tone on log roll — loss of anal sphincter tone + priapism = spinal cord injury; avoid excessive movement, maintain spinal precautions",
      "Not reassessing after every intervention — primary survey is a dynamic, ongoing process; re-evaluate ABC after each intervention (e.g., airway secured → reassess breathing)",
    ],
  },
  {
    conditionId: "em-pe",
    conditionName: "Respiratory Emergency Examination",
    rotation: "emergency-medicine",
    systemsExamined: ["Respiratory", "Cardiovascular", "Peripheral Vascular"],
    classicFindings: {
      inspection: [
        "Respiratory rate and work of breathing: RR > 20 = tachypnea; intercostal/subcostal retractions; accessory muscles (SCM, scalenes); nasal flaring",
        "Pursed-lip breathing: COPD (auto-PEEP, reduces air trapping)",
        "Tripod position: leaning forward on hands — severe obstructive lung disease (maximizes diaphragm use)",
        "Cyanosis: central (lips, tongue — SpO2 < 85%) vs peripheral (fingertips — vasoconstriction or shock)",
        "Unilateral chest expansion decrease: PTX, hemothorax, main-stem intubation, pleural effusion",
        "Barrel chest: hyperinflation = severe COPD or asthma",
      ],
      palpation: [
        "Tracheal position: midline vs deviation (tension PTX pushes away, massive effusion pushes away)",
        "Chest excursion: assess symmetry by placing hands on posterior chest wall, thumbs together at spine",
        "Tactile fremitus (vocal): decreased over effusion/PTX; increased over consolidation",
        "Subcutaneous emphysema: crepitus over chest/neck/face = PTX communicating with soft tissue; may indicate esophageal rupture (Boerhaave syndrome) if associated with severe vomiting",
        "Calf tenderness: DVT (in context of PE evaluation) — Homan's sign unreliable",
      ],
      percussion: [
        "Hyperresonance: PTX (air-filled space), emphysema",
        "Dullness: consolidation (pneumonia), atelectasis",
        "Stony dull: pleural effusion (fluid-filled, dull but heavier than consolidation)",
      ],
      auscultation: [
        "Wheeze: obstructive (asthma, COPD) — high-pitched, expiratory > inspiratory; bronchospasm",
        "Stridor: upper airway obstruction — inspiratory; from larynx/trachea (anaphylaxis, croup, foreign body, angioedema)",
        "Crackles/rales: fine (pulmonary edema, fibrosis) vs coarse (pneumonia, bronchiectasis)",
        "Absent breath sounds: PTX (no lung sliding), massive effusion, contralateral main-stem intubation",
        "Egophony: 'E' → 'A' sound = consolidation (pneumonia, lung over effusion)",
        "Hamman's sign: crunching, clicking sound with heartbeat = mediastinal emphysema (Boerhaave, PTX with mediastinal extension)",
      ],
    },
    keyManeuvers: [
      {
        name: "CURB-65 Score (Pneumonia Severity Assessment)",
        steps: [
          "C — Confusion (new onset, not baseline): 1 point",
          "U — Urea (BUN) > 19 mg/dL (7 mmol/L): 1 point",
          "R — Respiratory rate ≥ 30 breaths/min: 1 point",
          "B — Blood pressure (systolic < 90 OR diastolic ≤ 60): 1 point",
          "65 — Age ≥ 65 years: 1 point",
        ],
        positiveResult:
          "Score 0–1 = low severity → outpatient treatment. Score 2 = moderate → short inpatient stay or supervised outpatient. Score 3–5 = severe → hospitalization, ICU consideration if ≥ 4.",
        clinicalSignificance:
          "CURB-65 guides pneumonia disposition. Score 4–5: consider ICU admission. Alternative: PSI/PORT score (more detailed, includes comorbidities). IDSA/ATS criteria for severe CAP: major criterion (mechanical ventilation or septic shock) OR ≥ 3 minor criteria.",
        sensitivityNote:
          "CURB-65 sensitivity 59–75% for 30-day mortality prediction. PSI more sensitive but more complex. Neither replaces clinical judgment — young patients with severe disease may score low.",
      },
      {
        name: "Asthma Severity Assessment (NAEPP)",
        steps: [
          "Assess respiratory rate, HR, SpO2.",
          "Speak in full sentences (mild) vs phrases (moderate) vs words only (severe).",
          "Accessory muscle use: none (mild) vs moderate (moderate) vs extreme with paradoxical chest movement (severe/respiratory failure).",
          "Wheeze: moderate (mild-moderate) → absent with quiet chest (severe — no air movement).",
          "Peak expiratory flow (PEF): > 70% predicted (mild) → 40–69% (moderate) → < 40% (severe).",
          "Pulsus paradoxus: none to < 10 mmHg (mild) → 10–25 mmHg (moderate) → > 25 mmHg (severe) → absent paradoxus with respiratory muscle fatigue (impending respiratory failure).",
        ],
        positiveResult:
          "Severe/impending respiratory failure: SpO2 < 90% on O2, unable to speak, silent chest (no wheeze = no air movement), paradoxical chest movement, altered mental status → immediate RSI consideration + magnesium sulfate 2g IV + continuous albuterol + ipratropium.",
        clinicalSignificance:
          "A silent chest is MORE concerning than a wheezy chest — absent wheeze means minimal air movement. The most dangerous asthma patient is the quiet one. Intubation in asthma is high-risk (difficult ventilation, auto-PEEP, hypotension from positive pressure) — use ketamine for RSI induction (bronchodilator).",
        sensitivityNote:
          "Silent chest + pulsus paradoxus < 10 mmHg (absent with fatigue) = near-fatal asthma — do not be falsely reassured by absence of wheezing.",
      },
    ],
    documentationPhrase:
      "Respiratory exam: RR ___ breaths/min, SpO2 ___% (room air/O2 ___ L/min). Effort: unlabored/mild/moderate/severe distress. Trachea: midline. Chest: symmetric expansion bilaterally/asymmetric ___. Percussion: resonant/dull/hyperresonant ___. Auscultation: clear bilaterally/wheeze/crackles/absent breath sounds ___. Accessory muscles: not in use/in use. No stridor/stridor present.",
    pitfalls: [
      "Silent chest in asthma reassuring — the absence of wheeze in a severe asthmatic indicates near-zero air movement and is a sign of impending respiratory arrest",
      "Missing tension PTX in intubated patient — sudden peak airway pressure rise + hemodynamic deterioration in ventilated patient = immediate chest decompression before imaging",
      "Hamman's sign (mediastinal crunch) interpreted as pericardial rub — Hamman's sign is a crunching sound synchronous with the heartbeat (NOT breathing cycle like pericardial rub), and indicates mediastinal emphysema (pneumomediastinum — often from Boerhaave syndrome or PTX)",
      "Counting respiratory rate for only 15 seconds × 4 — RR must be counted for a full 60 seconds for accuracy (RR is the most underappreciated vital sign)",
      "Assuming bilateral crackles = pneumonia — crackles may represent pulmonary edema (fine, bibasilar, with JVD + S3) vs pneumonia (coarser, localized, with fever + productive cough); EKG + BNP differentiate",
    ],
  },
  {
    conditionId: "em-appendicitis",
    conditionName: "Acute Abdominal Examination (Emergency)",
    rotation: "emergency-medicine",
    systemsExamined: ["Abdomen", "Pelvis", "Rectal"],
    classicFindings: {
      inspection: [
        "Voluntary guarding: patient splints abdomen by contracting muscles — anticipating pain from examination",
        "Involuntary guarding (rigidity): reflexive muscle contraction in response to palpation, cannot be voluntarily relaxed = peritoneal irritation",
        "Distension: gas, fluid (ascites, bowel obstruction), or mass",
        "Cullen's sign: periumbilical bruising = intraperitoneal hemorrhage (ruptured ectopic, hemorrhagic pancreatitis)",
        "Grey Turner's sign: flank bruising = retroperitoneal hemorrhage (severe hemorrhagic pancreatitis, AAA rupture)",
        "Evisceration (trauma), surgical scars (adhesion obstruction), hernia (incarcerated bowel)",
      ],
      palpation: [
        "McBurney's point: 1/3 from ASIS to umbilicus — maximal tenderness = appendicitis",
        "Voluntary vs involuntary guarding: distinguish by gentle, gradual palpation vs asking patient to 'tighten' abdomen",
        "Rebound tenderness: remove hand quickly — peritoneal pain = peritonitis. MORE sensitive: Markle test (heel-drop jar)",
        "Murphy's sign (RUQ): examiner presses under right costal margin and asks patient to take deep breath — inspiratory arrest/pain = acute cholecystitis",
        "McBurney's point: direct and indirect (rebound at McBurney's with LLQ pressure = Rovsing's sign = peritoneal irritation = positive for appendicitis)",
      ],
      special: [
        "Psoas sign: right hip extension (or passive hyperextension) causes RLQ pain = retrocecal appendicitis (appendix lying posterior to cecum, adjacent to psoas muscle)",
        "Obturator sign: right hip internal rotation causes RLQ pain = pelvic appendicitis (appendix near obturator internus muscle)",
        "Markle test (heel-drop): patient stands on toes, drops onto heels — pain = peritoneal irritation (more sensitive than rebound tenderness, less uncomfortable for patient)",
        "Carnett's sign: palpate area of pain, then have patient lift head (contracts rectus abdominis) — pain INCREASES = abdominal wall source (hernia, hematoma); pain DECREASES = intraperitoneal source",
      ],
    },
    keyManeuvers: [
      {
        name: "Peritoneal Signs Assessment",
        steps: [
          "Begin examination at the quadrant AWAY from pain — start palpation distant from area of maximal tenderness.",
          "Palpate gently in all four quadrants, assessing for voluntary guarding (patient tenses), involuntary guarding (cannot relax), and rigidity (board-like = generalized peritonitis).",
          "Rebound tenderness: apply slow, firm pressure at area of interest, then RAPIDLY release — localized pain on release = localized peritonitis; pain throughout abdomen = diffuse peritonitis.",
          "Rovsing's sign: apply pressure in LLQ — pain felt in RLQ = peritoneal irritation at McBurney's point (appendicitis).",
          "Psoas sign: with patient in left lateral decubitus position, extend right hip — pain = retrocecal appendicitis.",
          "Obturator sign: hip flexed to 90°, internally rotate right leg — pain = pelvic appendicitis.",
        ],
        positiveResult:
          "Involuntary guarding + rebound tenderness + rigidity = peritonitis (requires emergent surgical evaluation). Board-like rigidity = perforated viscus until proven otherwise.",
        clinicalSignificance:
          "Peritoneal signs indicate surgical emergency — free perforation, ischemic bowel, or severe inflammation of a hollow organ. Localized peritonitis (McBurney's) = appendicitis; diffuse peritonitis = perforated appendix, perforated ulcer, mesenteric ischemia with necrosis.",
        sensitivityNote:
          "Rebound tenderness sensitivity 68%, specificity 58% for peritonitis. Markle test more sensitive and more patient-friendly. Absent peritoneal signs do NOT exclude appendicitis — early appendicitis may have only focal tenderness without peritoneal signs.",
      },
    ],
    documentationPhrase:
      "Abdominal exam: Soft/rigid/distended. Normoactive/hypoactive/hyperactive bowel sounds. Tender/non-tender in all 4 quadrants. McBurney's point: tender/non-tender. Murphy's sign: positive/negative. Rovsing's sign: positive/negative. Psoas/obturator signs: positive/negative. Rebound: present/absent. Guarding: voluntary/involuntary. No organomegaly. No visible hernia. Cullen's/Grey Turner's sign: absent/present.",
    pitfalls: [
      "Examining in the area of pain first — always start in the most remote quadrant and work toward the most painful area; starting at McBurney's immediately causes guarding that makes the rest of the exam uninformative",
      "Murphy's sign when liver disease is present — Murphy's positive even without acute cholecystitis if the liver is tender from hepatitis; always consider liver pathology in RUQ pain",
      "Missing mesenteric ischemia — 'pain out of proportion to exam' (severe abdominal pain with minimal physical findings) = classic presentation; elderly + AF + severe diffuse pain + unremarkable exam = CTA immediately",
      "Missing aortic aneurysm in elderly with back/flank pain — always palpate for pulsatile midline mass in any elderly patient with acute abdominal or back pain",
      "Forgetting to assess for hernia at groin and umbilicus — incarcerated femoral or inguinal hernia causes SBO; small hernia may not be visible, must palpate inguinal and femoral triangles",
    ],
  },
];
