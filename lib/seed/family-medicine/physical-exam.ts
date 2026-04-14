import type { PhysicalExamFinding } from "@/types";

export const familyMedicinePhysicalExam: PhysicalExamFinding[] = [
  // ─── 1. Hypertension ────────────────────────────────────────────────────────
  {
    conditionId: "htn-01",
    conditionName: "Hypertension",
    rotation: "family-medicine",
    systemsExamined: ["Vital Signs", "Cardiovascular", "Fundoscopic", "Renal", "Neurological"],
    classicFindings: {
      inspection: [
        "Patient may appear well and asymptomatic at routine visit",
        "Observe for cushingoid features (moon face, buffalo hump, striae) suggesting secondary HTN",
        "Look for signs of hyperthyroidism (exophthalmos, goiter) as secondary cause",
      ],
      palpation: [
        "Radial and brachial pulses — assess for radio-femoral delay (coarctation of aorta)",
        "Bilateral upper-extremity BP measurement — >10 mmHg difference suggests subclavian stenosis",
        "Abdominal palpation for pulsatile mass (aortic aneurysm) or renal bruits",
      ],
      auscultation: [
        "S4 gallop (stiff, hypertrophied LV) may be heard at apex",
        "Aortic regurgitation murmur (diastolic decrescendo) in long-standing HTN",
        "Renal artery bruit (epigastric or flank) suggests renovascular HTN",
      ],
      special: [
        "Fundoscopic exam: arteriovenous nicking, copper/silver wiring, flame hemorrhages, papilledema (HTN urgency/emergency)",
        "Ankle-brachial index (ABI) if peripheral arterial disease suspected",
      ],
    },
    keyManeuvers: [
      {
        name: "Accurate Blood Pressure Measurement",
        steps: [
          "Patient seated quietly for 5 minutes, back supported, feet flat",
          "Arm at heart level, cuff covers 80% of arm circumference",
          "Inflate cuff 20–30 mmHg above estimated systolic",
          "Deflate at 2–3 mmHg/second; record Korotkoff I (systolic) and V (diastolic)",
          "Average two readings taken 1–2 minutes apart",
          "Measure both arms on first visit; use higher reading arm thereafter",
        ],
        positiveResult: "Systolic ≥130 mmHg or diastolic ≥80 mmHg (ACC/AHA 2017)",
        clinicalSignificance: "Confirms hypertension requiring lifestyle modification or pharmacotherapy",
        sensitivityNote: "White-coat effect can falsely elevate in-office readings by 5–20 mmHg; ABPM is gold standard",
      },
      {
        name: "Orthostatic Blood Pressure Check",
        steps: [
          "Measure BP and HR supine after 5 minutes of rest",
          "Have patient stand; repeat measurement at 1 and 3 minutes",
        ],
        positiveResult: "Drop in systolic ≥20 mmHg or diastolic ≥10 mmHg on standing",
        clinicalSignificance: "Identifies orthostatic hypotension; guides antihypertensive selection (avoid alpha-blockers as monotherapy)",
      },
    ],
    documentationPhrase:
      "BP 152/94 mmHg (R arm, seated, confirmed on repeat), HR 78 bpm regular. No papilledema on fundoscopy. No radio-femoral delay. No renal bruits auscultated. S1/S2 regular, no S3/S4. Assessment consistent with uncontrolled Stage 2 hypertension.",
    pitfalls: [
      "Using too-small a cuff on obese arms falsely elevates readings (pseudo-hypertension)",
      "Failing to check both arms on the initial visit — left-right discrepancy >20 mmHg warrants further workup",
      "Missing secondary causes (renal bruit, truncal obesity with striae, thyromegaly) in young or treatment-resistant patients",
      "Not documenting fundoscopic findings — papilledema changes management to hypertensive emergency",
    ],
  },

  // ─── 2. Type 2 Diabetes ─────────────────────────────────────────────────────
  {
    conditionId: "dm2-01",
    conditionName: "Type 2 Diabetes Mellitus",
    rotation: "family-medicine",
    systemsExamined: ["Cardiovascular", "Neurological", "Peripheral Vascular", "Ophthalmologic", "Renal", "Dermatologic", "Podiatric"],
    classicFindings: {
      inspection: [
        "Acanthosis nigricans at nape, axillae, and groin (insulin resistance marker)",
        "Skin inspection of feet: calluses, fissures, ulcers, Charcot foot deformity",
        "Lipohypertrophy or lipoatrophy at insulin injection sites",
        "Necrobiosis lipoidica diabeticorum: yellow-brown atrophic plaques on shins",
      ],
      palpation: [
        "Dorsalis pedis and posterior tibial pulses — diminished or absent in peripheral arterial disease",
        "Peripheral edema suggesting nephropathy-associated hypoalbuminemia or heart failure",
      ],
      special: [
        "Monofilament testing (10-g Semmes-Weinstein): inability to feel at plantar surface indicates large-fiber neuropathy",
        "Vibration sensation with 128-Hz tuning fork at great toe",
        "Pinprick sensation assessment in stocking-glove distribution",
        "Ankle reflexes — diminished or absent in peripheral neuropathy",
        "Dilated fundoscopic exam: dot-blot hemorrhages, hard exudates, neovascularization (referral for retinopathy)",
      ],
    },
    keyManeuvers: [
      {
        name: "10-g Semmes-Weinstein Monofilament Test",
        steps: [
          "Patient supine with eyes closed",
          "Apply monofilament perpendicular to plantar skin until it buckles (~10 g force), hold 1 second",
          "Test 10 sites: plantar hallux, 1st/3rd/5th metatarsal heads, plantar arch, heel, dorsum of foot",
          "Alternate real and sham applications; ask patient to respond 'yes' when felt",
        ],
        positiveResult: "Patient unable to perceive monofilament at ≥2 sites",
        clinicalSignificance: "Identifies loss of protective sensation; annual foot exam with referral to podiatry indicated",
        sensitivityNote: "Sensitivity ~66–80% for detecting peripheral neuropathy; supplement with vibration testing",
      },
      {
        name: "Ankle-Brachial Index (ABI)",
        steps: [
          "Patient supine for 10 minutes",
          "Measure systolic BP in both brachial arteries using Doppler",
          "Measure systolic BP at both posterior tibial and dorsalis pedis arteries",
          "ABI = highest ankle pressure divided by highest brachial pressure",
        ],
        positiveResult: "ABI <0.90 indicates peripheral arterial disease; >1.40 indicates non-compressible vessels (also abnormal)",
        clinicalSignificance: "Elevated cardiovascular risk; vascular surgery referral if symptomatic claudication",
      },
    ],
    documentationPhrase:
      "Extremities: 2+ dorsalis pedis and posterior tibial pulses bilaterally. Monofilament sensation intact at all 10 plantar sites. Vibration sense intact at bilateral great toes. No foot ulcers, calluses, or skin breakdown. Acanthosis nigricans present at posterior neck. No ankle edema. Neurological: sensation grossly intact in upper and lower extremities.",
    pitfalls: [
      "Skipping the foot exam at every visit — annual comprehensive foot exam is guideline-mandated but brief checks should occur each visit",
      "Documenting 'pulses intact' without specifying which vessels were assessed",
      "Missing acanthosis nigricans, which supports insulin resistance and can prompt earlier diabetes screening in at-risk patients",
      "Forgetting that Charcot arthropathy may present as a warm, swollen, non-painful foot — often misdiagnosed as cellulitis",
    ],
  },

  // ─── 3. COPD ────────────────────────────────────────────────────────────────
  {
    conditionId: "copd-01",
    conditionName: "Chronic Obstructive Pulmonary Disease (COPD)",
    rotation: "family-medicine",
    systemsExamined: ["Pulmonary", "Cardiovascular", "Peripheral", "General"],
    classicFindings: {
      inspection: [
        "Barrel chest: increased anteroposterior diameter (AP:lateral ratio approaches 1:1)",
        "Pursed-lip breathing at rest — auto-PEEP mechanism to slow airflow and reduce air trapping",
        "Use of accessory respiratory muscles (sternocleidomastoid, scalenes) during normal breathing",
        "Tripod positioning: patient leans forward with hands on knees to fix shoulder girdle",
        "Cyanosis (central vs. peripheral) in advanced disease",
        "Clubbing is NOT typical of COPD alone — consider lung cancer or bronchiectasis if present",
      ],
      palpation: [
        "Decreased tactile fremitus due to air trapping and hyperinflation",
        "Tracheal position midline (deviated trachea suggests pneumothorax or large effusion)",
        "Reduced chest expansion bilaterally on deep inspiration",
      ],
      percussion: [
        "Hyperresonance throughout lung fields due to air trapping",
        "Loss of cardiac and liver dullness due to hyperinflated lungs",
        "Diaphragm descent reduced on percussion",
      ],
      auscultation: [
        "Diffuse expiratory wheezes — prolonged expiratory phase (I:E ratio >1:3)",
        "Decreased breath sounds bilaterally in severe emphysema",
        "Distant heart sounds",
        "Coarse crackles at bases if concurrent mucus plugging or infection",
      ],
    },
    keyManeuvers: [
      {
        name: "Forced Expiratory Time",
        steps: [
          "Ask patient to take maximal deep breath",
          "Place stethoscope over trachea",
          "Instruct patient to exhale as forcefully and completely as possible",
          "Time duration of audible expiratory airflow",
        ],
        positiveResult: "Forced expiratory time >6 seconds",
        clinicalSignificance: "Bedside correlate of airflow obstruction; time >6 sec correlates with FEV1/FVC <0.70",
        sensitivityNote: "Sensitivity ~30–50%; use as a supplement to clinical history, not to replace spirometry",
      },
      {
        name: "Diaphragm Excursion Assessment by Percussion",
        steps: [
          "Patient seated; percuss along posterior lung base from resonance to dullness on expiration — mark level",
          "Ask patient to take a full breath in; percuss again to find new dull-to-resonant transition — mark level",
          "Measure distance between marks bilaterally",
        ],
        positiveResult: "Excursion <3 cm bilaterally (normal 4–6 cm)",
        clinicalSignificance: "Reflects diaphragmatic flattening from hyperinflation — a classic COPD finding",
      },
    ],
    documentationPhrase:
      "General: mild respiratory distress, pursed-lip breathing noted at rest. Inspection: barrel chest with increased AP diameter. Percussion: bilateral hyperresonance, reduced diaphragm excursion (2 cm bilaterally). Auscultation: decreased breath sounds throughout, prolonged expiratory phase with scattered expiratory wheezes, no crackles. No JVD or peripheral edema.",
    pitfalls: [
      "Attributing clubbing to COPD — clubbing should prompt evaluation for lung cancer or bronchiectasis",
      "Conflating COPD and asthma findings on exam — asymmetric wheezing or nocturnal symptoms favor asthma",
      "Overlooking cor pulmonale signs (JVD, right-sided S3, hepatojugular reflux, lower extremity edema) in severe COPD",
      "Not performing or ordering spirometry — diagnosis of COPD requires post-bronchodilator FEV1/FVC <0.70",
    ],
  },

  // ─── 4. Asthma — Acute Exacerbation ─────────────────────────────────────────
  {
    conditionId: "asthma-01",
    conditionName: "Asthma (Acute Exacerbation)",
    rotation: "family-medicine",
    systemsExamined: ["Pulmonary", "Cardiovascular", "General", "Neurological"],
    classicFindings: {
      inspection: [
        "Tachypnea with visibly labored breathing",
        "Intercostal, supraclavicular, or subcostal retractions",
        "Nasal flaring in children",
        "Inability to complete full sentences without stopping to breathe (severe exacerbation)",
        "Diaphoresis in severe exacerbation",
        "Accessory muscle use (sternocleidomastoid, scalenes)",
      ],
      palpation: [
        "Trachea midline",
        "Chest expansion may be symmetric but reduced",
        "Pulsus paradoxus >12 mmHg in severe exacerbation",
      ],
      percussion: [
        "Hyperresonance due to air trapping during exacerbation",
      ],
      auscultation: [
        "Diffuse expiratory and/or inspiratory wheezing — polyphonic",
        "Prolonged expiratory phase",
        "Silent chest in life-threatening exacerbation — poor air movement despite visible distress",
        "No wheezing does NOT rule out severe asthma (silent chest)",
      ],
      special: [
        "Pulse oximetry: SpO2 <92% indicates severe exacerbation requiring urgent intervention",
        "Peak expiratory flow rate (PEFR): <40% predicted indicates severe; <25% indicates life-threatening",
      ],
    },
    keyManeuvers: [
      {
        name: "Peak Expiratory Flow Rate Measurement",
        steps: [
          "Patient stands if able, or sits upright",
          "Set peak flow meter to zero",
          "Patient takes deepest possible breath",
          "Place mouthpiece in mouth, seal lips firmly",
          "Blast air as hard and fast as possible into device",
          "Record reading; repeat three times, document best result",
          "Compare to personal best or age/height-predicted values",
        ],
        positiveResult: "<40% of personal best or predicted value",
        clinicalSignificance: "Objectifies severity of exacerbation; guides disposition (ED vs. outpatient) and monitoring treatment response",
        sensitivityNote: "Effort-dependent; poor cooperation in distressed patients limits reliability",
      },
      {
        name: "Pulsus Paradoxus Assessment",
        steps: [
          "Patient breathing normally; inflate BP cuff 20 mmHg above systolic",
          "Deflate slowly; note pressure at which Korotkoff sounds first appear (on expiration)",
          "Continue deflating; note pressure at which sounds are heard throughout respiratory cycle",
          "Difference between the two readings = pulsus paradoxus",
        ],
        positiveResult: "Pulsus paradoxus >10–12 mmHg",
        clinicalSignificance: "Indicates severe air trapping and increased work of breathing; >25 mmHg is life-threatening",
      },
    ],
    documentationPhrase:
      "Respiratory: moderate distress, speaking in 4–5 word phrases. RR 26/min, SpO2 92% on room air. Bilateral expiratory wheezes throughout all lung fields, prolonged expiratory phase. No crackles. Intercostal retractions noted. PEFR 45% of predicted. No cyanosis. Cardiovascular: tachycardic at 108 bpm, regular, no murmurs.",
    pitfalls: [
      "Silent chest is a critical finding meaning near-complete obstruction — do NOT be reassured by absence of wheezing",
      "Diagnosing new-onset asthma without spirometry — must confirm reversible obstruction (≥12% and 200 mL FEV1 improvement post-bronchodilator)",
      "Missing vocal cord dysfunction or foreign body aspiration as asthma mimics in young patients",
      "Underestimating severity in patients who have adapted to chronic hypoxemia — SpO2 may understate severity in dark-pigmented skin",
    ],
  },

  // ─── 5. Hypothyroidism ──────────────────────────────────────────────────────
  {
    conditionId: "hypothyroid-01",
    conditionName: "Hypothyroidism",
    rotation: "family-medicine",
    systemsExamined: ["General", "Dermatologic", "Neurological", "Cardiovascular", "Endocrine (Thyroid)", "Musculoskeletal"],
    classicFindings: {
      inspection: [
        "Facial puffiness, periorbital edema (myxedema facies)",
        "Dry, coarse, pale or yellowish skin (carotenemia from decreased β-carotene conversion)",
        "Diffuse non-scarring alopecia; loss of outer one-third of eyebrows (Queen Anne's sign)",
        "Macroglossia in severe hypothyroidism",
        "Goiter (diffuse in Hashimoto's; firm, rubbery texture; may be asymmetric)",
        "Bradycardia noted during vitals review",
      ],
      palpation: [
        "Thyroid: diffuse firm enlargement in Hashimoto's thyroiditis; bossellated or nodular in multinodular goiter",
        "Pitting or non-pitting edema of lower extremities (myxedema is non-pitting)",
        "Delayed relaxation phase of deep tendon reflexes (pathognomonic)",
      ],
      auscultation: [
        "Bradycardia (HR <60 bpm common)",
        "Muffled heart sounds if pericardial effusion present",
        "Absent thyroid bruit (distinguishes Hashimoto's from Graves')",
      ],
      special: [
        "Delayed relaxation of ankle reflex (hung-up reflex) — classic sign",
        "Carpal tunnel syndrome symptoms (Tinel's and Phalen's may be positive due to myxedema compression)",
      ],
    },
    keyManeuvers: [
      {
        name: "Deep Tendon Reflex with Relaxation Phase Timing",
        steps: [
          "Test ankle reflex (Achilles) with patient seated, foot hanging freely",
          "Strike Achilles tendon with reflex hammer",
          "Observe contraction phase AND relaxation phase of plantar flexion",
          "Note whether foot returns to resting position immediately or hangs",
        ],
        positiveResult: "Delayed relaxation phase lasting >350 ms ('hung-up' reflex)",
        clinicalSignificance: "Classic sign of hypothyroidism due to slowed muscle metabolism; may be the most specific physical finding",
        sensitivityNote: "Present in ~75% of overt hypothyroidism; less sensitive in subclinical disease",
      },
      {
        name: "Thyroid Palpation",
        steps: [
          "Stand behind seated patient",
          "Ask patient to swallow; observe for thyroid movement with swallowing (thyroid moves; lymph nodes do not)",
          "Place fingers on either side of trachea below cricoid cartilage",
          "Have patient swallow again; feel each lobe for size, consistency, nodularity, and tenderness",
          "Estimate size relative to thumb distal phalanx (~1 cm³ each lobe normal)",
        ],
        positiveResult: "Diffuse rubbery goiter without tenderness (Hashimoto's) or firm nodule",
        clinicalSignificance: "Goiter with hypothyroidism indicates autoimmune (Hashimoto's) etiology; nodule warrants ultrasound evaluation",
      },
    ],
    documentationPhrase:
      "General: mildly obese female with periorbital puffiness and dry skin. Hair thinning noted, lateral eyebrows thinned bilaterally. Thyroid: diffuse, firm, non-tender enlargement, 2× normal size, no nodules, moves with swallowing. Cardiovascular: bradycardic at 56 bpm, regular. Neurological: DTRs 2+ with delayed relaxation phase at bilateral ankles. Lower extremity trace edema, non-pitting.",
    pitfalls: [
      "Attributing symptoms (fatigue, weight gain, cold intolerance) to depression or aging without checking TSH",
      "Missing central hypothyroidism — TSH may be low or normal despite low fT4 in pituitary disease",
      "Not distinguishing Hashimoto's goiter from multinodular goiter — ultrasound and anti-TPO antibodies clarify etiology",
      "Overlooking myxedema coma risk factors in severely hypothyroid patients who present with altered mental status or hypothermia",
    ],
  },

  // ─── 6. GERD ────────────────────────────────────────────────────────────────
  {
    conditionId: "gerd-01",
    conditionName: "Gastroesophageal Reflux Disease (GERD)",
    rotation: "family-medicine",
    systemsExamined: ["Gastrointestinal", "Oropharyngeal", "Pulmonary", "Cardiovascular"],
    classicFindings: {
      inspection: [
        "Dental erosions on lingual surfaces of teeth (chronic acid exposure)",
        "Hoarseness or throat clearing during examination",
        "Patient may be obese or pregnant (increased intra-abdominal pressure)",
      ],
      palpation: [
        "Epigastric tenderness (mild, if present) — severe tenderness suggests peptic ulcer or other pathology",
        "No guarding or rebound — presence of these warrants urgent evaluation for perforation",
        "May have no abdominal tenderness (GERD is largely a symptomatic diagnosis)",
      ],
      auscultation: [
        "Normal bowel sounds",
        "No peritoneal signs",
      ],
      special: [
        "Oropharyngeal exam: posterior pharyngeal erythema, cobblestoning (lymphoid hyperplasia from chronic irritation)",
        "Laryngoscopy findings (if performed by specialist): posterior laryngitis, arytenoid edema",
      ],
    },
    keyManeuvers: [
      {
        name: "Empiric PPI Trial (Diagnostic-Therapeutic)",
        steps: [
          "Not a physical exam maneuver, but the standard diagnostic approach",
          "Start omeprazole 20 mg or equivalent once daily before the morning meal for 4–8 weeks",
          "Reassess symptom response at follow-up",
          "Symptom resolution confirms likely GERD diagnosis",
        ],
        positiveResult: "≥50% reduction in heartburn/regurgitation symptoms",
        clinicalSignificance: "Empiric PPI trial has ~78% sensitivity and 54% specificity for GERD diagnosis",
      },
      {
        name: "Epigastric Percussion and Deep Palpation",
        steps: [
          "Patient supine, abdomen exposed",
          "Percuss epigastric area for tympany vs. dullness",
          "Apply deep palpation in epigastric region — note location, depth, and character of tenderness",
          "Assess for voluntary guarding (suggests inflammation) or rigidity (peritoneal involvement)",
        ],
        positiveResult: "Epigastric tenderness WITHOUT guarding, rebound, or mass",
        clinicalSignificance: "Mild epigastric tenderness is nonspecific; guarding or rebound prompts further workup for PUD, cholecystitis, or perforation",
      },
    ],
    documentationPhrase:
      "Abdomen: soft, mild epigastric tenderness to deep palpation, no guarding or rebound. Bowel sounds normoactive. No hepatosplenomegaly. Oropharynx: posterior pharyngeal erythema with mild cobblestoning. No odynophagia on examination. Dental erosions noted on lingual surfaces bilaterally.",
    pitfalls: [
      "Diagnosing GERD without considering cardiac chest pain — always rule out ACS in patients with chest pain and risk factors",
      "Prescribing PPI long-term without periodic reassessment — associated with hypomagnesemia, C. diff, and hip fracture risk",
      "Missing alarm symptoms (dysphagia, odynophagia, unexplained weight loss, hematemesis) that mandate endoscopy",
      "Overlooking H. pylori as a contributing cause of epigastric symptoms",
    ],
  },

  // ─── 7. Otitis Media ────────────────────────────────────────────────────────
  {
    conditionId: "aom-01",
    conditionName: "Otitis Media",
    rotation: "family-medicine",
    systemsExamined: ["Head, Eyes, Ears, Nose, Throat (HEENT)", "Lymphatic", "General"],
    classicFindings: {
      inspection: [
        "Tympanic membrane (TM): erythema, fullness, or bulging (acute otitis media)",
        "Loss of normal TM landmarks (light reflex, handle of malleus) with bulging",
        "Purulent effusion visible behind TM in AOM",
        "Amber or gray fluid level behind TM in otitis media with effusion (OME)",
        "Perforated TM with otorrhea in AOM with rupture",
        "TM retraction in chronic eustachian tube dysfunction",
      ],
      palpation: [
        "Tenderness with tragal pressure (more specific for otitis externa than AOM)",
        "Cervical lymphadenopathy — preauricular, posterior auricular, and anterior cervical chains",
        "Mastoid tenderness posterior to auricle (mastoiditis — surgical emergency)",
      ],
      special: [
        "Pneumatic otoscopy: decreased or absent TM mobility with insufflation is the most specific finding for middle ear effusion",
        "Whisper test or Weber/Rinne if hearing loss is a concern — conductive loss pattern in AOM",
        "Tympanometry (type B flat curve) in OME",
      ],
    },
    keyManeuvers: [
      {
        name: "Pneumatic Otoscopy",
        steps: [
          "Ensure proper speculum size for a snug seal in the ear canal",
          "Straighten ear canal: pull pinna up-back-out in adults; down-back in young children",
          "Insert speculum gently, visualize TM and landmarks",
          "Attach pneumatic bulb; gently puff (positive pressure) — observe TM movement toward examiner",
          "Gently squeeze bulb in (negative pressure) — TM should move away from examiner",
        ],
        positiveResult: "Absent or markedly reduced TM mobility with positive and negative pressure",
        clinicalSignificance: "Most specific bedside test for middle ear effusion; identifies AOM vs. OME vs. normal TM",
        sensitivityNote: "Sensitivity ~94%, specificity ~80% for middle ear effusion; requires good seal for accuracy",
      },
    ],
    documentationPhrase:
      "HEENT: Right TM bulging, erythematous, with loss of normal landmarks and absent light reflex. No visible perforation or discharge. Pneumatic otoscopy: absent TM mobility on right. Left TM pearly gray, normal landmarks, mobile. No mastoid tenderness bilaterally. No periauricular erythema or swelling. Neck: 1-cm non-tender right anterior cervical lymph node.",
    pitfalls: [
      "Diagnosing AOM based on erythema alone — a crying child's TM turns red; bulging and decreased mobility are required findings",
      "Missing mastoiditis — posterior auricular erythema, swelling, or anterior pinna displacement requires urgent evaluation",
      "Confusing AOM with otitis externa — tragal tenderness and normal TM mobility on pneumatic otoscopy favor externa",
      "Over-prescribing antibiotics — AOM in children ≥2 years with mild symptoms can be observed with analgesia for 48–72 hours",
    ],
  },

  // ─── 8. Low Back Pain ───────────────────────────────────────────────────────
  {
    conditionId: "lbp-01",
    conditionName: "Low Back Pain",
    rotation: "family-medicine",
    systemsExamined: ["Musculoskeletal", "Neurological", "Vascular"],
    classicFindings: {
      inspection: [
        "Observe gait — antalgic gait (shortened stance phase on affected side), Trendelenburg pattern",
        "Paraspinal muscle spasm: visible asymmetry or guarding of lumbar musculature",
        "Loss of normal lumbar lordosis or lateral scoliosis from spasm",
        "Assess standing posture, forward flexion range of motion",
      ],
      palpation: [
        "Paraspinal tenderness: midline (suggests spinous process fracture or posterior element pathology) vs. lateral (muscle strain)",
        "Sacroiliac joint tenderness (SI joint syndrome vs. fracture)",
        "Greater trochanteric tenderness (trochanteric bursitis mimicking LBP)",
        "Step-off deformity at spinous processes (spondylolisthesis)",
      ],
      special: [
        "Straight leg raise (SLR): radicular pain reproduced at 30–70° of passive hip flexion",
        "Crossed SLR: contralateral leg elevation reproduces ipsilateral radicular pain (high specificity for disc herniation)",
        "Femoral stretch test: prone, knee flexed — anterior thigh pain indicates L2-L4 radiculopathy",
        "Waddell's signs: assess for non-organic pain behavior",
      ],
    },
    keyManeuvers: [
      {
        name: "Straight Leg Raise (SLR)",
        steps: [
          "Patient supine; examiner grasps heel and slowly raises leg with knee extended",
          "Lift leg until patient reports pain or leg reaches 90°",
          "If pain occurs, lower leg slightly below pain threshold, then dorsiflex ankle (Bragard's sign)",
          "Note angle of elevation at which radicular pain begins",
          "Repeat on opposite side (crossed SLR)",
        ],
        positiveResult: "Reproducible radicular pain (not just hamstring tightness) between 30–70° of elevation, radiating below knee",
        clinicalSignificance: "Positive SLR is sensitive (~80%) for L4-S1 disc herniation; crossed SLR is more specific (~90%)",
        sensitivityNote: "Hamstring tightness produces pain at >70° and does not radiate — distinguish from true radiculopathy",
      },
      {
        name: "FABER Test (Patrick's Test)",
        steps: [
          "Patient supine; place ipsilateral ankle on contralateral knee in figure-4 position",
          "Gently press down on knee while stabilizing the opposite ASIS",
          "Note if hip or groin pain is reproduced",
        ],
        positiveResult: "Groin or hip pain reproduced with FABER position",
        clinicalSignificance: "Suggests hip joint pathology (OA, labral tear) or sacroiliac joint dysfunction as source of pain",
      },
      {
        name: "Assessment for Cauda Equina Red Flags",
        steps: [
          "Ask about saddle anesthesia, bowel/bladder dysfunction, progressive motor weakness",
          "Test perianal sensation",
          "Check anal sphincter tone (if clinically indicated)",
          "Assess lower extremity motor strength (hip flexors, quadriceps, dorsiflexors, plantar flexors)",
        ],
        positiveResult: "Saddle anesthesia, loss of sphincter tone, bilateral leg weakness",
        clinicalSignificance: "Cauda equina syndrome is a surgical emergency — immediate MRI and neurosurgical consultation required",
      },
    ],
    documentationPhrase:
      "Musculoskeletal: lumbar paraspinal tenderness bilateral L3-L5, greatest on right, no midline spinous process tenderness. ROM: flexion 50° with pain, extension 15° without radiation. Neurological: 5/5 strength in hip flexors, knee extensors, dorsiflexors, and plantar flexors bilaterally. Sensation intact in L4-S1 distribution. Patellar and Achilles reflexes 2+ bilaterally. SLR: negative bilaterally. No saddle anesthesia, bowel and bladder function intact.",
    pitfalls: [
      "Failing to screen for cauda equina red flags in every patient with LBP — missing this is a medicolegal emergency",
      "Ordering lumbar MRI in acute non-specific LBP (<6 weeks) without red flags — not indicated and can lead to unnecessary surgery",
      "Missing atypical presentations of abdominal aortic aneurysm as 'back pain' — pulsatile epigastric mass and risk factors mandate vascular evaluation",
      "Neglecting to assess functional status and psychosocial factors (yellow flags) — fear-avoidance behavior predicts chronic LBP",
    ],
  },

  // ─── 9. Osteoarthritis — Knee ───────────────────────────────────────────────
  {
    conditionId: "oa-knee-01",
    conditionName: "Osteoarthritis — Knee",
    rotation: "family-medicine",
    systemsExamined: ["Musculoskeletal", "Vascular"],
    classicFindings: {
      inspection: [
        "Varus deformity (bow-legged) common with medial compartment OA",
        "Valgus deformity (knock-kneed) with lateral compartment OA",
        "Quadriceps atrophy from disuse",
        "Swelling of knee joint — diffuse or focused on medial/lateral joint line",
        "Antalgic gait pattern favoring affected knee",
      ],
      palpation: [
        "Medial and lateral joint line tenderness (medial more common in OA)",
        "Bony enlargement: osteophyte formation palpable at medial/lateral joint margins",
        "Effusion: ballottement of patella or fluid wave sign",
        "Crepitus: coarse palpable crepitus with passive range of motion",
        "Popliteal (Baker's) cyst: fluctuant fullness in popliteal fossa",
      ],
      special: [
        "Crepitus felt and heard during passive knee flexion-extension",
        "Range of motion typically reduced in late OA: normal 0–135°, OA may limit to 0–90°",
        "Valgus/varus stress test to assess collateral ligament integrity",
        "McMurray's test to assess meniscal involvement (commonly co-exists)",
      ],
    },
    keyManeuvers: [
      {
        name: "Ballottement Test for Knee Effusion",
        steps: [
          "Patient supine, knee extended and relaxed",
          "Milk fluid from suprapatellar pouch with one hand (push from suprapatellar region toward patella)",
          "With other hand, apply sudden downward pressure on the patella",
          "Feel for patella 'bouncing' back against the finger (floating patella)",
        ],
        positiveResult: "Palpable click or bounce of patella on compression",
        clinicalSignificance: "Confirms intra-articular effusion; moderate-to-large effusion from OA flare vs. hemarthrosis vs. septic arthritis",
        sensitivityNote: "Requires >15–20 mL of fluid for positive result; small effusions may be missed",
      },
      {
        name: "Varus/Valgus Stress Test",
        steps: [
          "Patient supine, knee in 20–30° of flexion",
          "Stabilize femur with one hand; apply medial (valgus) force to leg with other hand",
          "Repeat with lateral (varus) force",
          "Note pain location and any joint-space opening (laxity)",
        ],
        positiveResult: "Joint-line pain without significant laxity in OA; laxity suggests collateral ligament tear",
        clinicalSignificance: "Identifies medial vs. lateral compartment involvement and assesses ligamentous stability",
      },
    ],
    documentationPhrase:
      "Right knee: varus deformity noted on inspection. Medial joint line tenderness on palpation. Bony osteophytes palpable at medial joint margin. Ballottement positive for small-to-moderate effusion. Crepitus throughout ROM (0–105°). McMurray's test negative. Cruciate ligaments stable. Varus stress: medial joint line pain without laxity. No warmth, no erythema. Left knee unremarkable.",
    pitfalls: [
      "Missing septic arthritis in an acutely swollen knee — fever, warmth, and extreme tenderness require arthrocentesis and synovial fluid analysis",
      "Attributing knee pain to OA without considering referred hip pathology — always perform hip exam in knee pain patients",
      "Neglecting to assess gait — quadriceps weakness and gait dysfunction predict falls and functional decline",
      "Ordering MRI before trying conservative therapy for 4–6 weeks in uncomplicated OA knee",
    ],
  },

  // ─── 10. Osteoporosis ───────────────────────────────────────────────────────
  {
    conditionId: "osteoporosis-01",
    conditionName: "Osteoporosis",
    rotation: "family-medicine",
    systemsExamined: ["Musculoskeletal", "General", "Neurological"],
    classicFindings: {
      inspection: [
        "Kyphosis (dowager's hump) from multiple vertebral compression fractures",
        "Height loss: >2 inches compared to peak adult height suggests vertebral fractures",
        "Decreased truncal height relative to arm span",
        "Wall-occipital distance >0 cm indicates thoracic kyphosis (normal = 0 cm, back touching wall)",
      ],
      palpation: [
        "Paraspinal midline tenderness over thoracic or lumbar spinous processes (vertebral compression fracture)",
        "Rib tenderness in patients with severe osteoporosis and rib fractures",
        "Hip tenderness: greater trochanter (falls/fracture risk assessment) or groin (femoral neck fracture)",
      ],
      special: [
        "Wall-occipital distance measurement",
        "Balance and gait assessment: Timed Up and Go (TUG) test",
        "Tandem gait testing for fall risk stratification",
        "FRAX score calculation using clinical risk factors",
      ],
    },
    keyManeuvers: [
      {
        name: "Wall-Occipital Distance (Occiput-to-Wall)",
        steps: [
          "Patient stands with heels and back against the wall in normal standing posture",
          "Ask patient to look straight ahead (not up or down)",
          "Measure distance from back of head (occiput) to wall in centimeters",
        ],
        positiveResult: "Wall-occipital distance >0 cm",
        clinicalSignificance: "Indicates increased thoracic kyphosis from vertebral compression fractures; correlates with fall risk and reduced pulmonary function",
      },
      {
        name: "Timed Up and Go (TUG) Test",
        steps: [
          "Patient seated in chair with armrests; use usual assistive device if applicable",
          "On 'go,' patient rises from chair, walks 3 meters at a comfortable pace, turns, walks back, and sits down",
          "Time from 'go' to patient seated again with back against chair",
        ],
        positiveResult: "TUG time >12 seconds",
        clinicalSignificance: ">12 seconds predicts increased fall risk; >20 seconds indicates significant mobility impairment — physical therapy referral warranted",
        sensitivityNote: "Sensitive for fall risk screening in older adults; not specific for osteoporosis alone",
      },
    ],
    documentationPhrase:
      "General: 68-year-old female, height 5'2\" (reports previous height 5'5\"). Visible thoracic kyphosis. Wall-occipital distance 4 cm. Paraspinal tenderness at T8-T10 midline. Gait slightly antalgic, TUG test 14 seconds. Neurological: 5/5 strength bilateral lower extremities, sensation intact. No saddle anesthesia or bowel/bladder dysfunction.",
    pitfalls: [
      "Waiting for fracture to diagnose osteoporosis — screen all women ≥65 and younger postmenopausal women with risk factors using DXA",
      "Attributing back pain to muscle strain without considering vertebral compression fracture in an older woman on steroids",
      "Prescribing bisphosphonates without checking renal function (contraindicated if eGFR <35 mL/min) and dental clearance",
      "Missing secondary causes of osteoporosis: hyperparathyroidism, celiac disease, glucocorticoid use, hypogonadism",
    ],
  },

  // ─── 11. Community-Acquired Pneumonia ───────────────────────────────────────
  {
    conditionId: "cap-01",
    conditionName: "Community-Acquired Pneumonia",
    rotation: "family-medicine",
    systemsExamined: ["Pulmonary", "Cardiovascular", "General", "Abdominal"],
    classicFindings: {
      inspection: [
        "Ill-appearing, febrile patient",
        "Tachypnea (RR >20/min) with labored breathing",
        "Nasal flaring and intercostal retractions in severe cases",
        "Central cyanosis in hypoxic patients",
        "Splinting of affected side to minimize pleuritic pain",
      ],
      palpation: [
        "Increased tactile fremitus over area of consolidation (enhanced transmission through solid tissue)",
        "Decreased fremitus if parapneumonic effusion present",
        "Tracheal deviation toward consolidation in lobar collapse (opposite in effusion)",
      ],
      percussion: [
        "Dullness over area of consolidation or effusion",
        "Egophony (E-to-A change) over consolidated lung — classic",
      ],
      auscultation: [
        "Bronchial breath sounds over area of consolidation (louder, harsher, equal inspiration:expiration)",
        "Crackles (fine inspiratory) at lung base of affected lobe",
        "Pleural friction rub if pleurisy is present (grating, leathery sound heard with breathing, persists when breath held — distinguishes from pericardial rub)",
        "Whispered pectoriloquy: whispered words transmitted clearly over consolidated lung",
      ],
      special: [
        "Egophony: ask patient to say 'E' — over consolidated lung, it sounds like 'A'",
        "Whispered pectoriloquy positive over consolidation",
      ],
    },
    keyManeuvers: [
      {
        name: "Egophony Assessment",
        steps: [
          "Place stethoscope over posterior lung field",
          "Ask patient to repeatedly say the letter 'E'",
          "Listen for change in transmitted sound quality",
        ],
        positiveResult: "Heard as 'A' instead of 'E' over area of consolidation",
        clinicalSignificance: "Indicates pulmonary consolidation; sensitivity ~4–16%, specificity ~96–99% — highly specific for pneumonia when positive",
      },
      {
        name: "Percussion for Lung Consolidation vs. Effusion",
        steps: [
          "Percuss posterior lung fields from apices to bases bilaterally",
          "Note transition from resonance to dullness",
          "Assess whether dullness shifts with patient repositioning (shifting dullness = effusion)",
          "Consolidation: dullness fixed regardless of position with increased fremitus",
        ],
        positiveResult: "Fixed dullness with increased tactile fremitus over lobe = consolidation",
        clinicalSignificance: "Consolidation suggests bacterial pneumonia; effusion suggests parapneumonic effusion or empyema requiring further evaluation",
      },
    ],
    documentationPhrase:
      "General: ill-appearing, febrile (39.1°C). Respiratory: RR 24/min, SpO2 94% on room air. Right lower lobe: dullness to percussion, increased tactile fremitus, bronchial breath sounds, fine inspiratory crackles, egophony positive. No friction rub. Left lung clear. Cardiovascular: tachycardic 104 bpm. No JVD. Abdomen: benign.",
    pitfalls: [
      "Normal auscultation does NOT exclude pneumonia — CXR is required when clinical suspicion is present",
      "Forgetting to calculate PSI/PORT score or CURB-65 to guide inpatient vs. outpatient management",
      "Missing atypical pneumonia presentation (Legionella, Mycoplasma) in younger patients with gradual onset and prominent GI/extrapulmonary symptoms",
      "Not distinguishing parapneumonic effusion from empyema — large or loculated effusions need thoracentesis",
    ],
  },

  // ─── 12. Atrial Fibrillation ────────────────────────────────────────────────
  {
    conditionId: "afib-01",
    conditionName: "Atrial Fibrillation",
    rotation: "family-medicine",
    systemsExamined: ["Cardiovascular", "Pulmonary", "Neurological", "Thyroid"],
    classicFindings: {
      inspection: [
        "Patient may appear anxious or fatigued",
        "Pallor or diaphoresis with rapid ventricular response",
        "Visible pulsations in neck (jugular venous pulsations irregular)",
        "Signs of underlying cause: exophthalmos/goiter (hyperthyroidism), peripheral edema (CHF)",
      ],
      palpation: [
        "Irregularly irregular peripheral pulse (radial artery) — characteristic",
        "Pulse deficit: apical pulse rate greater than radial pulse rate",
        "Peripheral edema (ankle, sacral) if decompensated heart failure",
        "Hepatomegaly if right heart failure from longstanding AFib",
      ],
      auscultation: [
        "Irregularly irregular rhythm with variable S1 intensity (mitral valve closes at different ventricular volumes)",
        "No discernible pattern to cycle lengths",
        "S3 gallop possible if concurrent LV dysfunction",
        "Murmur of mitral stenosis (diastolic rumble at apex) — common precipitant of AFib",
        "Pulmonary crackles if in acute decompensated heart failure",
      ],
      special: [
        "Apical pulse rate vs. radial rate — pulse deficit quantifies ventricular response",
        "Blood pressure: wide pulse pressure in hyperdynamic state; narrow in low output state",
        "Jugular venous pulse: absent 'a' wave (atria not contracting in organized fashion)",
      ],
    },
    keyManeuvers: [
      {
        name: "Simultaneous Apical-Radial Pulse Assessment",
        steps: [
          "One examiner auscultates the apical pulse with stethoscope at the PMI (5th ICS, MCL)",
          "Second examiner (or same provider) palpates the radial pulse",
          "Count both rates simultaneously for 60 seconds",
          "Subtract radial rate from apical rate to calculate pulse deficit",
        ],
        positiveResult: "Pulse deficit >0 beats/min; significant deficit >10 bpm",
        clinicalSignificance: "Confirms irregular ventricular contractions where some beats are too weak to transmit to periphery; indicates rapid ventricular response needing rate control",
      },
      {
        name: "Jugular Venous Pulse Assessment for 'a' Wave",
        steps: [
          "Patient at 45° recline, head turned slightly away from examiner",
          "Identify internal jugular pulsation (medial to SCM, non-palpable, biphasic)",
          "Note presence or absence of 'a' wave (presystolic rise preceding 'c' wave)",
        ],
        positiveResult: "Absent 'a' wave in atrial fibrillation",
        clinicalSignificance: "Loss of atrial kick confirms atrial fibrillation; 'a' wave returns with cardioversion",
        sensitivityNote: "Requires practice; external jugular often more visible but less reliable",
      },
    ],
    documentationPhrase:
      "Cardiovascular: irregularly irregular rhythm, HR approximately 118 bpm apical, radial rate 102 bpm (pulse deficit 16 bpm). BP 136/84 mmHg. No S3/S4. No murmurs appreciated. No JVD. Lungs: clear to auscultation. Extremities: trace bilateral ankle edema. Thyroid non-enlarged, no bruit. EKG ordered.",
    pitfalls: [
      "Documenting 'irregular rhythm' without specifying irregularly irregular — frequent PVCs create a regularly irregular pattern, not AFib",
      "Missing thyroid disease as a precipitant — check TSH in all new-onset AFib",
      "Not calculating CHA2DS2-VASc score during the encounter to document anticoagulation risk-benefit discussion",
      "Failing to assess for hemodynamic instability (hypotension, chest pain, AMS) — unstable AFib requires emergent cardioversion",
    ],
  },

  // ─── 13. Anemia (Iron Deficiency) ───────────────────────────────────────────
  {
    conditionId: "ida-01",
    conditionName: "Iron Deficiency Anemia",
    rotation: "family-medicine",
    systemsExamined: ["General", "Dermatologic", "Cardiovascular", "Gastrointestinal", "Oral"],
    classicFindings: {
      inspection: [
        "Pallor: conjunctival pallor most reliable skin site (conjunctival rim pale rather than red)",
        "Pallor of nail beds, palmar creases, and mucous membranes",
        "Koilonychia (spoon-shaped nails) in advanced chronic IDA",
        "Angular cheilitis (fissures at corners of mouth)",
        "Glossitis: smooth, shiny atrophic tongue",
        "Alopecia diffuse in severe IDA",
      ],
      palpation: [
        "Tachycardia on pulse assessment",
        "Lymphadenopathy (absent in uncomplicated IDA; presence warrants malignancy workup)",
        "Hepatosplenomegaly (absent in IDA; suggests hemolytic or hematologic disease)",
        "Abdominal tenderness or mass (occult GI bleeding source)",
      ],
      auscultation: [
        "Flow murmur: systolic ejection murmur at LUSB from hyperdynamic circulation (high-output state)",
        "Tachycardia at rest",
      ],
      special: [
        "Pallor score: inner lower eyelid conjunctiva — grade 1 (pink with rim at margin) to grade 3 (white/pale throughout)",
        "Pica history: craving for ice (pagophagia), clay, or starch — pathognomonic association with IDA",
      ],
    },
    keyManeuvers: [
      {
        name: "Conjunctival Pallor Assessment",
        steps: [
          "Ask patient to look up while examiner gently pulls lower eyelid down",
          "Inspect inner surface of lower eyelid (palpebral conjunctiva)",
          "Assess the inferior conjunctival rim at the lid margin",
          "Compare to normal pink vascular pattern",
        ],
        positiveResult: "Pale or white palpebral conjunctiva without visible red vascular network",
        clinicalSignificance: "Conjunctival pallor: sensitivity ~25% for Hgb <10 g/dL, specificity ~90% — most reliable bedside finding for severe anemia",
        sensitivityNote: "Physical exam has limited sensitivity for mild anemia; CBC is required for diagnosis",
      },
      {
        name: "Rectal Examination for Occult GI Bleeding",
        steps: [
          "Patient in left lateral decubitus position or standing bent forward",
          "Inspect perineum and perianal area for hemorrhoids, fissures",
          "Lubricate gloved finger and insert gently",
          "Palpate rectal mucosa circumferentially for masses",
          "Apply stool to guaiac card and test with developer solution",
        ],
        positiveResult: "Hemoccult positive stool or palpable rectal mass",
        clinicalSignificance: "Identifies lower GI bleeding source for IDA; positive guaiac warrants colonoscopy",
      },
    ],
    documentationPhrase:
      "General: pale-appearing female. Conjunctival pallor present bilaterally. Nails: mild koilonychia. Tongue: smooth, shiny. Angular cheilitis bilateral. Cardiovascular: regular rate 96 bpm, 2/6 systolic flow murmur at LUSB, no radiation. Abdomen: soft, non-tender, no hepatosplenomegaly, no palpable masses. Stool guaiac sent.",
    pitfalls: [
      "Treating IDA with iron without identifying the source of bleeding — especially in men and postmenopausal women where GI malignancy must be excluded",
      "Attributing fatigue and pallor to IDA without checking ferritin — ferritin <12 ng/mL is diagnostic of iron deficiency regardless of hemoglobin level",
      "Missing celiac disease as a cause of refractory IDA (particularly in women with positive anti-tTG antibodies)",
      "Failing to recheck CBC after 4–6 weeks of iron therapy to confirm response (Hgb should rise 1–2 g/dL)",
    ],
  },

  // ─── 14. Urinary Tract Infection ────────────────────────────────────────────
  {
    conditionId: "uti-01",
    conditionName: "Urinary Tract Infection (Cystitis/Pyelonephritis)",
    rotation: "family-medicine",
    systemsExamined: ["Genitourinary", "Abdominal", "General", "Costovertebral Angle"],
    classicFindings: {
      inspection: [
        "Patient appears uncomfortable, may be writhing with dysuria",
        "Febrile and ill-appearing in pyelonephritis; afebrile or low-grade fever in uncomplicated cystitis",
        "Pelvic exam may reveal vaginal discharge, erythema, or atrophic changes (postmenopausal) mimicking UTI",
      ],
      palpation: [
        "Suprapubic tenderness (lower UTI/cystitis)",
        "Unilateral or bilateral flank/costovertebral angle tenderness (pyelonephritis)",
        "Uterine and adnexal tenderness if PID is in the differential",
      ],
      special: [
        "CVA tenderness: Murphy's punch sign — firm percussion over costovertebral angle",
        "Assess for urethral discharge (STI as alternative diagnosis)",
        "Prostate tenderness on DRE in males — indicates prostatitis",
      ],
    },
    keyManeuvers: [
      {
        name: "Costovertebral Angle (CVA) Tenderness Assessment",
        steps: [
          "Patient seated or standing",
          "Place non-dominant hand flat over the costovertebral angle (junction of 12th rib and paraspinal muscles, posterior)",
          "Strike the back of placed hand firmly with the ulnar side of the dominant fist",
          "Perform bilaterally; compare sides",
        ],
        positiveResult: "Sharp, reproducible pain on the side of the affected kidney",
        clinicalSignificance: "Positive CVA tenderness differentiates pyelonephritis from uncomplicated lower UTI and mandates urine culture, blood cultures, and consideration of IV antibiotics",
        sensitivityNote: "Sensitivity ~60-75% for pyelonephritis; specificity is limited by musculoskeletal back pain — clinical context is key",
      },
    ],
    documentationPhrase:
      "Abdomen: soft, mild suprapubic tenderness to deep palpation. No guarding or rebound. No hepatosplenomegaly. CVA tenderness: positive on right (sharp pain with percussion), negative on left. Genitourinary: no costovertebral flank mass. External genitalia: no discharge, no erythema. Urinalysis and urine culture ordered.",
    pitfalls: [
      "Diagnosing UTI based on UA alone in asymptomatic older adults — asymptomatic bacteriuria does NOT require treatment (except pregnancy and pre-urologic procedures)",
      "Missing vaginal atrophy, urethral caruncle, or vaginitis as causes of urinary symptoms in postmenopausal women without bacteriuria",
      "Treating UTI without urine culture in complicated UTI (male, pregnant, recurrent, febrile, immunocompromised) — culture and sensitivities guide therapy",
      "Failing to consider STI (chlamydia, gonorrhea) in young sexually active patients with dysuria and pyuria but negative culture",
    ],
  },

  // ─── 15. Obstructive Sleep Apnea ────────────────────────────────────────────
  {
    conditionId: "osa-01",
    conditionName: "Obstructive Sleep Apnea",
    rotation: "family-medicine",
    systemsExamined: ["Head, Eyes, Ears, Nose, Throat (HEENT)", "Cardiovascular", "General", "Respiratory"],
    classicFindings: {
      inspection: [
        "Obesity: BMI typically >30; large neck circumference (>17 inches male, >16 inches female)",
        "Retrognathia or micrognathia contributing to anatomic airway compromise",
        "Mallampati class III or IV oropharynx: soft palate obscured by tongue",
        "Macroglossia (enlarged tongue relative to oral cavity)",
        "Deviated nasal septum or turbinate hypertrophy on nasal inspection",
        "Tonsillar hypertrophy (Mallampati modified grade 3-4) — major pediatric cause",
      ],
      palpation: [
        "Neck circumference measurement (>40 cm/15.7 inches is significant risk factor)",
        "Assess for acromegaly features: coarsened facial features, prognathism, enlarged hands (secondary OSA)",
      ],
      auscultation: [
        "Hypertensive cardiovascular findings (OSA is a secondary cause of HTN)",
        "May have right heart strain signs (RV heave, P2 louder than A2) in severe untreated OSA",
      ],
      special: [
        "Mallampati Classification: patient opens mouth maximally and sticks out tongue — grade the view",
        "STOP-BANG questionnaire (clinical screening tool): Snoring, Tired, Observed apneas, Pressure (hypertension), BMI >35, Age >50, Neck >40 cm, Gender male",
        "Epworth Sleepiness Scale: score ≥10 indicates excessive daytime sleepiness",
      ],
    },
    keyManeuvers: [
      {
        name: "Mallampati Classification",
        steps: [
          "Patient seated upright, mouth open maximally, tongue protruded maximally",
          "Do NOT have patient say 'ah' (pharynx lifts and alters view)",
          "Use penlight if necessary for visualization",
          "Classify: I = all structures visible (uvula, tonsillar pillars, soft palate); II = uvula partially obscured by tongue; III = only soft palate base visible; IV = soft palate not visible",
        ],
        positiveResult: "Mallampati class III or IV",
        clinicalSignificance: "Class III/IV associated with 2–4× increased risk of OSA; informs need for polysomnography and anesthesia airway planning",
      },
      {
        name: "STOP-BANG Questionnaire Administration",
        steps: [
          "Ask each of 8 yes/no questions: Snoring loudly; Tired/fatigued during daytime; Observed stopping breathing during sleep; Pressure (treated for hypertension); BMI >35; Age >50; Neck >40 cm; Gender male",
          "Sum yes answers",
        ],
        positiveResult: "Score ≥3 = high risk for moderate-to-severe OSA",
        clinicalSignificance: "Score ≥5: sensitivity 83%, specificity 56% for moderate-to-severe OSA; guides referral for polysomnography or home sleep apnea testing",
      },
    ],
    documentationPhrase:
      "General: obese male (BMI 38.4), neck circumference 44 cm. Oropharynx: Mallampati Class III, uvular edema, no tonsillar hypertrophy. Nasal: patent bilaterally, mild inferior turbinate hypertrophy. No retrognathia. Cardiovascular: BP 148/92, regular rate 76 bpm, no murmurs. STOP-BANG score 5/8 (snoring, tired, observed apneas, hypertension, neck circumference). Epworth Sleepiness Scale 14/24. Referral for home sleep apnea testing placed.",
    pitfalls: [
      "Diagnosing OSA clinically without objective sleep testing — polysomnography or home sleep apnea testing is required for diagnosis and CPAP titration",
      "Missing central sleep apnea in patients with CHF or on opioids — distinct mechanism and management from obstructive OSA",
      "Failing to screen for OSA in pre-operative patients — increases anesthesia and post-operative respiratory complication risk",
      "Neglecting to assess and treat co-morbid resistant hypertension, which may resolve or improve with CPAP therapy",
    ],
  },
];
