import type { DifferentialSet } from "@/types";

export const emergencyMedicineDifferentials: DifferentialSet[] = [
  {
    rotation: "emergency-medicine",
    chiefComplaint: "Chest Pain",
    differentials: [
      {
        rank: 1,
        conditionName: "Acute Myocardial Infarction (STEMI/NSTEMI)",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Pressure/squeezing/heaviness, radiation to left arm or jaw",
          "Diaphoresis, nausea, vomiting",
          "Risk factors: HTN, DM, hyperlipidemia, smoking, family history, cocaine use",
          "Prior angina or known CAD",
          "Duration > 20–30 minutes (angina typically < 15 minutes)",
        ],
        distinguishingExam: [
          "Diaphoresis (most predictive symptom)",
          "Levine's sign (clenched fist over sternum)",
          "S3 or S4 gallop",
          "New murmur (mechanical complication)",
          "Hypotension (cardiogenic shock or right heart involvement)",
        ],
        keyWorkup: [
          "12-lead EKG within 10 minutes of arrival",
          "High-sensitivity troponin at 0h and 3h",
          "HEART score calculation",
          "Aspirin 325 mg chewed immediately if no contraindication",
          "Cardiology activation for STEMI (door-to-balloon < 90 min)",
        ],
        redFlags: [
          "STE on EKG → immediate cath lab activation",
          "New LBBB → treat as STEMI",
          "Hemodynamic instability → cardiogenic shock",
          "New murmur post-MI (days 3–5) → mechanical complication (VSR, papillary muscle rupture)",
        ],
        clinicalPearl:
          "10% of STEMI patients present without classic chest pain (silent MI) — atypical presentations common in women, diabetics, and elderly (jaw pain, epigastric pain, dyspnea alone). Always obtain EKG within 10 minutes regardless of atypical presentation.",
      },
      {
        rank: 2,
        conditionName: "Aortic Dissection",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Sudden, severe, tearing or ripping chest pain radiating to the back (interscapular)",
          "History of hypertension (most common risk factor), Marfan syndrome, bicuspid aortic valve",
          "Abrupt maximal onset at time zero (unlike MI which builds over minutes)",
          "Cocaine use, pregnancy (third trimester)",
        ],
        distinguishingExam: [
          "BP differential between arms > 20 mmHg",
          "Pulse deficit (absent or diminished radial, femoral, or carotid pulse)",
          "New aortic regurgitation murmur (Type A — ascending)",
          "Neurological deficit (stroke from carotid involvement)",
          "Signs of tamponade (Type A — hemopericardium)",
          "Widened mediastinum > 8 cm on CXR",
        ],
        keyWorkup: [
          "CXR (widened mediastinum > 8 cm — not sensitive alone)",
          "CTA chest/abdomen/pelvis (gold standard — defines flap, extent, involvement)",
          "D-dimer: negative D-dimer makes dissection less likely (high NPV)",
          "DO NOT give thrombolytics if dissection suspected",
          "Target HR < 60 + SBP < 120 (esmolol/labetalol + nitroprusside)",
        ],
        redFlags: [
          "Type A (ascending aorta) → emergent cardiothoracic surgery",
          "Pulse deficit or stroke symptoms → urgent vascular surgery",
          "Pericardial effusion/tamponade → pericardiocentesis as bridge to OR",
        ],
        clinicalPearl:
          "Anticoagulation and thrombolytics are CONTRAINDICATED in aortic dissection — always consider dissection in chest pain before giving tPA for presumed stroke or thrombolytics for presumed STEMI. 'Tearing' character is classic but present in only 50% of cases.",
      },
      {
        rank: 3,
        conditionName: "Pulmonary Embolism",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Pleuritic chest pain (worse with inspiration)",
          "Dyspnea at rest, hemoptysis",
          "Risk factors: recent surgery/immobilization, malignancy, OCP/HRT, prior DVT/PE, pregnancy",
          "Recent long-distance travel",
          "Unilateral leg swelling, calf pain",
        ],
        distinguishingExam: [
          "Tachycardia (most common finding, often the only finding)",
          "Hypoxemia disproportionate to clinical appearance",
          "Tachypnea",
          "Unilateral calf swelling or erythema (DVT)",
          "Right heart strain (JVD, loud P2, fixed split S2, RV heave)",
        ],
        keyWorkup: [
          "Wells PE criteria calculation",
          "PERC rule if low pretest probability",
          "D-dimer (age-adjusted) for low/intermediate probability",
          "CTPA for positive D-dimer or high pretest probability",
          "EKG (S1Q3T3, sinus tachycardia, right heart strain pattern)",
        ],
        redFlags: [
          "Hemodynamic instability → massive PE → systemic thrombolysis (alteplase 100 mg IV over 2h)",
          "RV:LV > 0.9 on CT → submassive PE → ICU monitoring, consider catheter-directed therapy",
          "Saddle embolus → high-risk for hemodynamic collapse",
        ],
        clinicalPearl:
          "The PERC rule prevents unnecessary D-dimer testing in truly low-risk patients — if Wells = low probability AND all 8 PERC criteria are negative, no further workup for PE is needed. Do NOT apply PERC to intermediate or high pretest probability patients.",
      },
      {
        rank: 4,
        conditionName: "Pericarditis",
        likelihood: "common",
        distinguishingHistory: [
          "Pleuritic chest pain worse with lying flat, improved sitting forward (classic 'tripod position')",
          "Sharp, positional quality",
          "Recent viral URI or GI illness (viral etiology most common)",
          "Young males most commonly affected",
          "Fever, myalgia",
        ],
        distinguishingExam: [
          "Pericardial friction rub (scratchy, 3-component, positional — best heard with patient leaning forward at left sternal border)",
          "Low-grade fever",
          "Normal or mildly elevated JVP (if effusion develops)",
          "No chest wall tenderness",
        ],
        keyWorkup: [
          "EKG: diffuse ST elevation (saddle-shaped, upwardly concave) in all leads EXCEPT aVR and V1; PR depression (pathognomonic — PR elevation in aVR); electrical alternans if effusion",
          "Troponin (mild elevation if myopericarditis)",
          "CRP, ESR (elevated — monitor treatment response)",
          "Echo (baseline — assess for pericardial effusion)",
        ],
        redFlags: [
          "Pulsus paradoxus > 10 mmHg → pericardial tamponade → pericardiocentesis",
          "Beck's triad (muffled heart sounds + JVD + hypotension) = tamponade",
          "Troponin elevation suggests myopericarditis (reduce exercise intensity, extend recovery)",
        ],
        clinicalPearl:
          "Treat pericarditis with NSAIDs (ibuprofen 600 mg TID × 2 weeks) + colchicine 0.5 mg BID × 3 months (reduces recurrence rate by 50% — COPE and ICAP trials). Avoid NSAIDs in post-MI pericarditis (Dressler syndrome) — aspirin preferred. Avoid NSAIDs and steroids in initial viral pericarditis (steroids increase recurrence).",
      },
      {
        rank: 5,
        conditionName: "Musculoskeletal Chest Pain (Costochondritis)",
        likelihood: "common",
        distinguishingHistory: [
          "Sharp, well-localized chest pain reproducible with movement or palpation",
          "Worsened with inspiration, position changes, arm movement",
          "Young patient, often after cough, physical activity, or trauma",
          "No radiation, no diaphoresis",
          "Onset with movement or activity",
        ],
        distinguishingExam: [
          "Reproducible tenderness on palpation of costochondral junction (2nd–5th ribs most common)",
          "Tietze syndrome: swelling at costochondral junction (vs costochondritis without swelling)",
          "Pain reproduced with chest compression",
          "Normal cardiac and pulmonary exam",
        ],
        keyWorkup: [
          "Diagnosis of exclusion — EKG and troponin to rule out cardiac cause",
          "No specific labs or imaging required if classic presentation",
          "Chest X-ray if pneumonia or PTX suspected",
        ],
        redFlags: [
          "Chest pain reproducible on palpation does NOT exclude ACS — 6% of MI patients have reproducible chest wall tenderness",
          "Always evaluate cardiac risk factors before attributing to musculoskeletal",
        ],
        clinicalPearl:
          "Musculoskeletal chest pain is the most common cause of chest pain in ED (30–40%), but it is a diagnosis of exclusion — never attribute chest pain to musculoskeletal without first excluding cardiac causes in patients with risk factors. 'Reproducible' pain reduces, but does not eliminate, cardiac probability.",
      },
      {
        rank: 6,
        conditionName: "Esophageal Rupture (Boerhaave Syndrome)",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Severe chest pain immediately after violent vomiting or retching",
          "Mackler's triad: vomiting + chest pain + subcutaneous emphysema",
          "Dysphagia, odynophagia",
          "History of endoscopy (iatrogenic perforation most common overall)",
          "Rapidly progressive sepsis after the initial event",
        ],
        distinguishingExam: [
          "Hamman's sign: mediastinal crunch synchronous with heartbeat (mediastinal emphysema)",
          "Subcutaneous emphysema in neck/chest (crepitus on palpation)",
          "Fever, tachycardia, hypotension (mediastinitis develops rapidly)",
          "Left-sided pleural effusion (left pleural space most commonly involved)",
        ],
        keyWorkup: [
          "CXR: mediastinal widening, subcutaneous emphysema, left pleural effusion, pneumomediastinum",
          "CT chest with oral contrast (water-soluble — Gastrografin) to confirm and localize leak",
          "Do NOT perform barium swallow initially (barium causes severe mediastinal inflammation)",
          "Surgical consultation immediately",
        ],
        redFlags: [
          "Rapidly fatal if not recognized — mortality > 50% without surgery",
          "Septic shock from mediastinitis develops within 6–12 hours",
        ],
        clinicalPearl:
          "Boerhaave syndrome is distinguished from Mallory-Weiss tear (mucosal tear only, painless, bright red blood) by the full-thickness esophageal rupture and severe chest pain. Subcutaneous emphysema in the neck after violent vomiting = esophageal rupture until proven otherwise.",
      },
    ],
  },
  {
    rotation: "emergency-medicine",
    chiefComplaint: "Altered Mental Status",
    differentials: [
      {
        rank: 1,
        conditionName: "Hypoglycemia",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Insulin or oral hypoglycemic use",
          "Missed meal or increased activity",
          "Alcohol use (inhibits hepatic gluconeogenesis)",
          "Adrenal insufficiency history",
          "Rapid onset of symptoms (minutes)",
        ],
        distinguishingExam: [
          "Diaphoresis, tremor, tachycardia (adrenergic symptoms at 60–70 mg/dL)",
          "Confusion, slurred speech, seizures (neuroglycopenic at < 50 mg/dL)",
          "Focal neurological deficits mimicking stroke",
          "POC glucose < 70 mg/dL (diagnostic and therapeutic — treat immediately)",
        ],
        keyWorkup: ["POC glucose (immediate — first test in ANY patient with AMS)", "Treat before further workup (D50W or glucagon IM)"],
        redFlags: [
          "Focal neuro deficits + low glucose = treat glucose FIRST, THEN reassess for stroke",
          "Sulfonylurea overdose: prolonged hypoglycemia — admit, octreotide infusion",
        ],
        clinicalPearl:
          "Always check glucose first in AMS — 'dextrostix before CT.' A patient with focal neurological deficits and glucose of 40 mg/dL should receive D50W immediately before any imaging. Hypoglycemia can mimic every neurological emergency including stroke.",
      },
      {
        rank: 2,
        conditionName: "Alcohol/Substance Intoxication",
        likelihood: "common",
        distinguishingHistory: [
          "Known history of alcohol or substance use",
          "Smell of alcohol, history from bystanders",
          "Slurred speech, ataxia, disinhibition",
          "Gradual onset",
        ],
        distinguishingExam: [
          "Nystagmus (alcohol, benzodiazepines, phenytoin)",
          "Ataxia (alcohol, sedatives)",
          "Miosis (opioids), mydriasis (stimulants, anticholinergics)",
          "Odor of alcohol on breath",
        ],
        keyWorkup: [
          "Serum ethanol level",
          "Urine drug screen",
          "POC glucose (always)",
          "CT head if any focal findings or trauma suspected",
          "Observe until sober and reassess — do not discharge intoxicated patients",
        ],
        redFlags: [
          "AMS persisting after expected sobering = concurrent illness (subdural, Wernicke's, meningitis)",
          "Alcohol withdrawal can be fatal — CIWA-Ar protocol, benzodiazepines",
        ],
        clinicalPearl:
          "Never attribute AMS solely to alcohol without ruling out hypoglycemia, head trauma (subdural hematoma), and Wernicke's encephalopathy. Give thiamine 100 mg IV BEFORE dextrose in suspected Wernicke's (alcohol use + AMS + ataxia + ophthalmoplegia).",
      },
      {
        rank: 3,
        conditionName: "Meningitis / Encephalitis",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Fever + headache + neck stiffness = classic triad (present in only 44%)",
          "Photophobia, phonophobia",
          "HSV encephalitis: fever + AMS + temporal lobe symptoms (aphasia, seizures)",
          "Immunocompromised state (HIV, steroids, post-splenectomy) = broader differential",
          "Recent sinusitis, otitis media, URI",
        ],
        distinguishingExam: [
          "Kernig's sign: hip/knee flexion → pain with knee extension",
          "Brudzinski's sign: passive neck flexion → involuntary hip flexion",
          "Nuchal rigidity (stiff neck resisting flexion)",
          "Petechial/purpuric rash = meningococcal septicemia (emergent ceftriaxone)",
          "Papilledema (suggest increased ICP — CT before LP in this case)",
        ],
        keyWorkup: [
          "Do NOT delay antibiotics for LP — give ceftriaxone + vancomycin + dexamethasone immediately, then LP",
          "CT head before LP if: papilledema, focal neuro deficits, immunocompromised, GCS < 15, seizure, age > 60",
          "CSF: opening pressure, cell count, glucose, protein, Gram stain, culture, bacterial antigens, HSV PCR",
          "Blood cultures × 2 before antibiotics",
        ],
        redFlags: [
          "Petechial rash + fever = meningococcemia — ceftriaxone IM/IV BEFORE any workup",
          "Papilledema = elevated ICP — do NOT perform LP without CT first",
          "Viral encephalitis (HSV): ADD IV acyclovir 10 mg/kg q8h empirically for any encephalitis",
        ],
        clinicalPearl:
          "Antibiotics must NOT be delayed for LP in bacterial meningitis — each hour of delay increases mortality. If CT must be done first, give antibiotics immediately, then CT, then LP. A CT before LP is not a reason to delay antibiotics for even one minute.",
      },
      {
        rank: 4,
        conditionName: "Acute Stroke",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Sudden onset focal neurological deficit",
          "Risk factors: AF, HTN, prior TIA/stroke, DM, smoking, CAD",
          "Exact time of symptom onset or 'last known well' — critical for tPA eligibility",
        ],
        distinguishingExam: ["Focal deficits: hemiplegia, aphasia, hemineglect, gaze deviation", "NIHSS assessment", "Glucose (rule out hypoglycemia mimicking stroke)"],
        keyWorkup: [
          "Non-contrast CT head immediately",
          "POC glucose (before CT if AMS)",
          "12-lead EKG (AF?)",
          "CTA head/neck if LVO suspected",
          "tPA if eligible (< 4.5h, no contraindications)",
        ],
        redFlags: [
          "NIHSS ≥ 6 + LVO on CTA → mechanical thrombectomy (up to 24h in selected patients)",
          "Posterior circulation stroke mimics peripheral vertigo — HINTS exam",
        ],
        clinicalPearl:
          "Time is brain — 1.9 million neurons die per minute during stroke. 'Last known well' time is the critical data point, not the time symptoms were noticed. If patient woke from sleep with symptoms, 'last known well' = time they went to sleep.",
      },
      {
        rank: 5,
        conditionName: "Wernicke's Encephalopathy",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Chronic alcohol use (most common), but also: prolonged vomiting (hyperemesis gravidarum), malnutrition, bariatric surgery",
          "Classic triad: confusion + ophthalmoplegia + ataxia (present together in only 16% — do not wait for all three)",
          "History of AMS preceding or concurrent with gait instability",
        ],
        distinguishingExam: [
          "Ophthalmoplegia: horizontal nystagmus, lateral gaze palsy, conjugate gaze palsy (cranial nerve VI most common)",
          "Cerebellar ataxia: wide-based gait, dysmetria",
          "Confusion/delirium (not stupor initially)",
        ],
        keyWorkup: [
          "Clinical diagnosis — do NOT wait for thiamine levels",
          "Thiamine (B1) 100 mg IV BEFORE any glucose administration (IV dextrose without thiamine can precipitate Wernicke's by consuming remaining thiamine stores)",
          "MRI brain: bilateral symmetric signal changes in thalami, periaqueductal gray, mammillary bodies (hyperintense on FLAIR)",
        ],
        redFlags: [
          "Untreated Wernicke's progresses to Korsakoff syndrome (permanent anterograde amnesia, confabulation) — irreversible",
          "Giving IV dextrose WITHOUT thiamine in malnourished patient = precipitating Wernicke's",
        ],
        clinicalPearl:
          "The mnemonic: 'Never give dextrose without thiamine to an alcoholic or malnourished patient.' Thiamine 100 mg IV is cheap, safe, and can prevent permanent neurological devastation. Treat any malnourished, alcoholic, or prolonged vomiting patient with AMS with thiamine empirically.",
      },
    ],
  },
  {
    rotation: "emergency-medicine",
    chiefComplaint: "Shortness of Breath",
    differentials: [
      {
        rank: 1,
        conditionName: "Acute Decompensated Heart Failure (Flash Pulmonary Edema)",
        likelihood: "common",
        distinguishingHistory: [
          "Known CHF, cardiomyopathy, valvular disease",
          "Orthopnea (can't lie flat), paroxysmal nocturnal dyspnea",
          "Leg edema, rapid weight gain",
          "Dietary indiscretion (high-sodium meal), medication non-compliance",
          "Precipitant: AF with RVR, ACS, hypertension",
        ],
        distinguishingExam: [
          "Bibasilar crackles (wet rales)",
          "JVD, S3 gallop",
          "Lower extremity pitting edema",
          "Hypertension (most common with flash pulmonary edema)",
          "Diaphoresis from sympathetic activation",
        ],
        keyWorkup: [
          "BNP or NT-proBNP (BNP > 100 pg/mL, NT-proBNP > 300 pg/mL = heart failure likely)",
          "CXR (cardiomegaly, Kerley B lines, bat-wing pulmonary edema)",
          "EKG (new AF, STEMI trigger?)",
          "Echo (if first presentation or new symptoms)",
          "IV furosemide, nitroglycerin drip, BIPAP for respiratory failure",
        ],
        redFlags: [
          "SpO2 < 90% despite supplemental O2 → BIPAP → intubation",
          "Hypotension with pulmonary edema = cardiogenic shock (inotropes + IABP + emergent revascularization)",
        ],
        clinicalPearl:
          "BNP is the key differentiator between cardiac and pulmonary dyspnea — BNP > 500 is highly specific for cardiac etiology; BNP < 100 effectively excludes CHF as cause of dyspnea. BIPAP reduces intubation need by 60% in cardiogenic pulmonary edema.",
      },
      {
        rank: 2,
        conditionName: "Tension Pneumothorax",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Mechanical ventilation (most common iatrogenic cause in ICU)",
          "Trauma (rib fractures, penetrating chest trauma)",
          "Spontaneous PTX: tall, thin males 20–40 years; Marfan syndrome; COPD/emphysema",
          "Sudden severe respiratory distress + hemodynamic collapse",
        ],
        distinguishingExam: [
          "Absent unilateral breath sounds",
          "Tracheal deviation AWAY from affected side (late finding, only 30%)",
          "JVD (impaired venous return from positive pleural pressure)",
          "Hypotension + tachycardia",
          "Hyperresonance to percussion on affected side",
        ],
        keyWorkup: [
          "CLINICAL DIAGNOSIS — do NOT delay treatment for imaging in unstable patient",
          "eFAST: absent lung sliding on affected side",
          "Needle decompression: 14-gauge at 2nd ICS MCL immediately",
          "Definitive: chest tube at triangle of safety",
        ],
        redFlags: [
          "Tension PTX is rapidly fatal — clinical diagnosis, treat immediately",
          "PEA cardiac arrest + prior intubation + high airway pressures = tension PTX until proven otherwise",
        ],
        clinicalPearl:
          "In any intubated patient with sudden hemodynamic collapse, the mnemonic DOPE covers the causes: Dislodgment (ETT out or in mainstem), Obstruction (mucus plug), Pneumothorax (tension), Equipment failure (O2 disconnected). Tension PTX in a ventilated patient = disconnect from ventilator (decompress the positive pressure) + needle decompression.",
      },
      {
        rank: 3,
        conditionName: "Severe Asthma Exacerbation",
        likelihood: "common",
        distinguishingHistory: [
          "Known asthma diagnosis, prior hospitalizations or intubations",
          "Allergen, cold air, exercise, or viral URI trigger",
          "Medication compliance (ICS, SABA rescue frequency)",
          "NSAID or aspirin sensitivity (AERD)",
        ],
        distinguishingExam: [
          "Wheeze (expiratory > inspiratory); silent chest = severe (no airflow)",
          "Accessory muscle use, paradoxical breathing",
          "Prolonged expiratory phase",
          "Pulsus paradoxus > 25 mmHg = severe",
          "SpO2 < 92%, PEF < 40%",
        ],
        keyWorkup: [
          "Continuous albuterol nebulizer + ipratropium",
          "Systemic corticosteroids (prednisone 40–60 mg PO or IV methylprednisolone)",
          "Magnesium sulfate 2g IV (bronchodilation by calcium channel blocking in smooth muscle — CACHE trial)",
          "Heliox (helium-oxygen mixture) for severe refractory bronchospasm",
          "ABG for pH and PaCO2 (rising PaCO2 = respiratory failure — normal PaCO2 in severe asthma is ominous if rising)",
        ],
        redFlags: [
          "Silent chest (absent wheeze = no air movement) = impending respiratory arrest",
          "Rising PaCO2 with fatigue = imminent respiratory failure → prepare for RSI with ketamine",
          "SpO2 < 90% despite maximal bronchodilator therapy",
        ],
        clinicalPearl:
          "Ketamine is the preferred RSI induction agent in asthma (bronchodilator via catecholamine release). Post-intubation management in severe asthma: permissive hypercapnia (allow PaCO2 to rise slowly), avoid auto-PEEP (long expiratory time, low RR, small VT), expect high peak airway pressures.",
      },
      {
        rank: 4,
        conditionName: "Anaphylaxis",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Exposure to known or potential allergen (food, medication, insect sting, latex)",
          "Rapid onset within minutes",
          "Urticaria, angioedema, throat tightening, dyspnea",
          "Prior allergic reactions or anaphylaxis",
        ],
        distinguishingExam: [
          "Urticaria (present in 90%), angioedema",
          "Stridor (laryngeal edema), wheeze (bronchospasm)",
          "Hypotension, tachycardia",
          "Flushing, pruritus",
        ],
        keyWorkup: [
          "Epinephrine 0.3 mg IM anterolateral thigh IMMEDIATELY",
          "IV access, IV fluids",
          "Antihistamines (H1 + H2) + corticosteroids (adjuncts only)",
          "Observe ≥ 4–6 hours for biphasic reaction",
          "Discharge: epinephrine auto-injector × 2 + allergist referral",
        ],
        redFlags: [
          "Stridor = laryngeal edema → early intubation before complete airway obstruction",
          "Biphasic reaction in 20% at 4–12 hours — observe all anaphylaxis patients minimum 4 hours",
          "Beta-blocked patients: epinephrine less effective → glucagon 1 mg IV",
        ],
        clinicalPearl:
          "Anaphylaxis without urticaria ('silent anaphylaxis') occurs in 10% of cases — do not rule out anaphylaxis based on absence of skin findings. If the diagnosis is plausible (allergen exposure + systemic symptoms), give epinephrine.",
      },
    ],
  },
  {
    rotation: "emergency-medicine",
    chiefComplaint: "Severe Headache",
    differentials: [
      {
        rank: 1,
        conditionName: "Subarachnoid Hemorrhage (SAH)",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "'Thunderclap' onset: 'worst headache of my life' reaching maximum intensity within seconds to 2 minutes",
          "May occur during exertion, Valsalva, or at rest",
          "May have brief LOC at onset",
          "Nausea, vomiting, photophobia",
          "Prior 'sentinel headache' in 20% (similar but milder, days to weeks prior = warning leak)",
        ],
        distinguishingExam: [
          "Meningismus (nuchal rigidity) if subarachnoid blood irritates meninges",
          "Fundoscopic: subhyaloid hemorrhage (vitreous hemorrhage = Terson syndrome)",
          "Third nerve palsy (diplopia, ptosis, fixed dilated pupil) = posterior communicating artery aneurysm",
          "Focal neurological deficits (rare initially — unless large bleed or vasospasm)",
          "Febrile only with meningeal irritation",
        ],
        keyWorkup: [
          "Non-contrast CT head immediately (sensitivity 98% in first 6h, drops to 90% at 12h, 85% at 24h)",
          "LP if CT negative and thunderclap headache suspected (xanthochromia = yellow CSF from bilirubin — pathognomonic; RBC constant across tubes = SAH vs decreasing RBC = traumatic tap)",
          "CTA head (circle of Willis) to identify aneurysm if SAH confirmed",
          "Hunt-Hess grade (severity: I = mild HA, V = coma) determines neurosurgical urgency",
        ],
        redFlags: [
          "Thunderclap headache = SAH until proven otherwise — investigate even with normal CT",
          "Do NOT perform LP within 2 hours of headache onset — xanthochromia takes 2–4h to develop",
          "Re-bleeding: peak first 24 hours (risk 20% in first 2 weeks without intervention)",
        ],
        clinicalPearl:
          "Ottawa Subarachnoid Hemorrhage Rule: 100% sensitive for SAH — if ANY of the following present in patient > 15 years with highest-severity headache: age ≥ 40, neck pain/stiffness, witnessed LOC, onset with exertion, thunderclap onset, limited neck flexion on exam → CT head + LP if CT negative.",
      },
      {
        rank: 2,
        conditionName: "Meningitis",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Fever + headache + neck stiffness (classic triad present in 44%)",
          "Photophobia, phonophobia",
          "Gradual onset over hours-to-days",
          "Recent sinusitis, otitis, URI",
          "Immunocompromised state, asplenia, crowded living (dorms — meningococcal)",
        ],
        distinguishingExam: [
          "Nuchal rigidity",
          "Kernig's sign, Brudzinski's sign",
          "Petechial/purpuric non-blanching rash = meningococcemia (do NOT wait — immediate ceftriaxone)",
          "Altered mental status (bacterial)",
          "Fever > 38.5°C",
        ],
        keyWorkup: [
          "IMMEDIATELY: ceftriaxone 2g IV + vancomycin 15–20 mg/kg IV + dexamethasone 0.15 mg/kg IV (before LP if CT needed)",
          "Blood cultures × 2 (before antibiotics if possible but do NOT delay antibiotics)",
          "CT head before LP if: focal neuro deficit, papilledema, new-onset seizure, immunocompromised, altered GCS",
          "CSF: bacterial meningitis = WBC > 1,000 (PMN predominant), protein > 150, glucose < 40 (CSF:serum ratio < 0.4)",
        ],
        redFlags: [
          "Petechial rash + fever = meningococcal disease — give ceftriaxone IM/IV before anything else",
          "LP contraindicated if: platelets < 50K, INR > 1.5, suspected CNS mass, papilledema",
        ],
        clinicalPearl:
          "Dexamethasone reduces hearing loss and neurological sequelae in bacterial meningitis (Streptococcus pneumoniae especially) — give BEFORE or WITH antibiotics for maximum benefit; it is ineffective if given after the first antibiotic dose.",
      },
      {
        rank: 3,
        conditionName: "Hypertensive Emergency (Hypertensive Encephalopathy/PRES)",
        likelihood: "must_not_miss",
        distinguishingHistory: [
          "Known hypertension, antihypertensive non-compliance",
          "BP > 180/120 with headache, visual changes, confusion",
          "Gradual onset headache (hours)",
          "Pregnancy (preeclampsia/eclampsia)",
          "Cocaine or stimulant use",
        ],
        distinguishingExam: [
          "BP > 180/120 on repeated measurements",
          "Papilledema (hypertensive retinopathy grade IV)",
          "Focal neurological deficits",
          "Altered mental status",
          "Retinal hemorrhages, flame hemorrhages on fundoscopy",
        ],
        keyWorkup: [
          "BP — bilateral arms",
          "MRI brain: PRES = posterior white matter T2/FLAIR hyperintensity (occipital/parietal lobe edema)",
          "Non-contrast CT head (hemorrhage)",
          "Urine pregnancy test in women of reproductive age (preeclampsia)",
          "UA (microhematuria, proteinuria = hypertensive nephropathy)",
        ],
        redFlags: [
          "BP > 180/120 + encephalopathy = hypertensive emergency — lower MAP 25% in first hour only",
          "Eclampsia: seizures in preeclamptic patient → magnesium 4g IV bolus",
        ],
        clinicalPearl:
          "PRES (Posterior Reversible Encephalopathy Syndrome) is the hallmark MRI finding of hypertensive encephalopathy — bilateral posterior white matter edema due to failure of cerebrovascular autoregulation. It is reversible with BP control but permanent injury can occur if untreated. MRI is more sensitive than CT for PRES.",
      },
      {
        rank: 4,
        conditionName: "Migraine",
        likelihood: "common",
        distinguishingHistory: [
          "Recurrent, unilateral, throbbing headache lasting 4–72 hours",
          "Nausea/vomiting, photophobia, phonophobia (≥ 2 for diagnosis)",
          "Known migraineur with typical headache (same as usual)",
          "Preceding visual aura (15–30 min of scintillating scotoma, visual field changes)",
          "Triggers: hormonal changes, stress, food, weather, poor sleep",
          "Family history of migraine",
        ],
        distinguishingExam: [
          "Normal neurological exam (photophobia/phonophobia may make exam difficult)",
          "Appears uncomfortable but neurologically intact",
          "Pallor, diaphoresis",
          "Normal fundoscopic exam",
          "No meningismus, no papilledema",
        ],
        keyWorkup: [
          "Diagnosis of exclusion — CT/LP if first worst headache, thunderclap onset, or atypical features",
          "Prochlorperazine 10 mg IV (dopamine receptor antagonist — superior to opioids for acute migraine)",
          "Metoclopramide 10 mg IV + diphenhydramine 25 mg IV (reduces extrapyramidal side effects)",
          "IV ketorolac 30 mg IV",
          "IV fluid hydration",
          "Sumatriptan SC or PO (not for basilar or hemiplegic migraine)",
        ],
        redFlags: [
          "First or worst headache of life → workup for SAH",
          "New neurological deficit + headache → stroke workup",
          "Migraine with aura + OCP use → increased stroke risk (COCPs contraindicated)",
          "Headache worsening in supine position → ICP elevation",
        ],
        clinicalPearl:
          "Opioids are NOT first-line for migraine in the ED — they worsen migraine-related nausea, do not treat the underlying pathology, and contribute to medication overuse headache (MOH). Dopamine antagonists (prochlorperazine, metoclopramide) are the preferred abortive agents in the ED. Always give IV fluid hydration (dehydration is a common precipitant).",
      },
    ],
  },
];
