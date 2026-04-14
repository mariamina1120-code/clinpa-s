import type { Drug } from "@/types";

export const emergencyMedicinePharmacology: Drug[] = [
  {
    id: "em-drug-alteplase",
    name: "Alteplase (tPA)",
    brandNames: ["Activase"],
    drugClass: "Thrombolytic / Fibrinolytic Agent (Recombinant tissue plasminogen activator)",
    rotations: ["emergency-medicine", "internal-medicine"],
    indications: [
      "Acute ischemic stroke (within 4.5 hours of symptom onset)",
      "Massive pulmonary embolism with hemodynamic instability",
      "Acute STEMI (when primary PCI unavailable and door-to-balloon > 120 min)",
      "Catheter occlusion (Cathflo — smaller dose)",
    ],
    mechanismOfAction:
      "Recombinant tissue plasminogen activator (tPA) — converts plasminogen to plasmin, which cleaves fibrin and dissolves thrombus. Fibrin-selective (preferentially activates clot-bound plasminogen over circulating plasminogen), reducing systemic fibrinolytic state compared to streptokinase.",
    contraindicationsStructured: {
      absolute: [
        "Ischemic stroke: any prior intracranial hemorrhage, active intracranial neoplasm/AVM/aneurysm, significant head trauma or stroke in prior 3 months, active internal bleeding (excluding menses), BP > 185/110 mmHg unresponsive to treatment",
        "Ischemic stroke (expanded, 3–4.5h window): age > 80, NIHSS > 25, oral anticoagulant use regardless of INR, history of prior stroke + diabetes combined",
        "PE/STEMI: active internal bleeding, recent (< 3 months) intracranial or spinal surgery",
        "Glucose < 50 or > 400 mg/dL (correct first — may be mimicking stroke)",
      ],
      relative: [
        "INR > 1.7 or aPTT > 40 (recent anticoagulation)",
        "Thrombocytopenia < 100,000",
        "Recent major surgery or serious trauma within 14 days",
        "Recent arterial puncture at non-compressible site",
        "Lumbar puncture within 7 days",
      ],
    },
    sideEffects: {
      common: [
        "Bleeding at puncture sites (minimize venous sticks during infusion)",
        "Orolingual angioedema (1–5% — especially with concurrent ACEi use; treat with epinephrine, antihistamines, hold tPA if severe)",
        "Nausea, vomiting",
      ],
      serious: [
        "Symptomatic intracranial hemorrhage (sICH) — 6% in stroke trials (NINDS); fatal in ~2.5%",
        "Major systemic hemorrhage (GI, retroperitoneal)",
        "Anaphylaxis (rare)",
        "Orolingual angioedema (can obstruct airway)",
      ],
      blackBox: [
        "Risk of internal bleeding, including intracranial and fatal hemorrhage. Benefits must outweigh risks in each patient.",
      ],
    },
    interactionsStructured: {
      drugs: [
        "Anticoagulants (heparin, warfarin, DOACs) — increased bleeding risk; avoid concurrent therapeutic anticoagulation",
        "Antiplatelet agents (aspirin, clopidogrel) — increased hemorrhagic risk; aspirin still given in STEMI concurrent with tPA",
        "ACEi — increased risk of orolingual angioedema (bradykinin accumulation)",
        "Nitroglycerin IV — reduces alteplase plasma levels (do not mix in same IV line)",
      ],
    },
    monitoring: [
      "BP: q15 minutes × 2 hours, q30 min × 6 hours, q1 hour × 16 hours after stroke tPA (maintain < 180/105 post-tPA)",
      "Neurological assessment every 15 minutes during infusion; stop immediately if new severe headache, acute hypertension, nausea/vomiting, or neurological deterioration (suspect sICH → emergent CT head)",
      "No arterial punctures, NG tube, Foley, or IV starts in non-compressible sites during and 24 hours after tPA",
      "Avoid antiplatelets and anticoagulants for 24 hours after stroke tPA",
      "Hemoglobin, hematocrit, PTT after administration",
    ],
    dosing: {
      adultGeneral:
        "Ischemic stroke: 0.9 mg/kg IV (max 90 mg total) — 10% as IV bolus over 1 minute, remaining 90% as IV infusion over 60 minutes. Massive PE: 100 mg IV over 2 hours (peripheral IV acceptable). STEMI: 15 mg IV bolus, then 0.75 mg/kg (max 50 mg) over 30 min, then 0.5 mg/kg (max 35 mg) over 60 min.",
      renalAdjustment: "No specific dose adjustment for renal impairment, but increased bleeding risk in CKD.",
      pediatricNote:
        "Not FDA-approved for stroke in children; used for PE and DVT in pediatrics at 0.5 mg/kg/hr × 6 hours (off-label).",
    },
    clinicalPearls: [
      "The 3–4.5 hour window has additional exclusion criteria not in the 0–3 hour window: age > 80, prior stroke + DM, severe stroke (NIHSS > 25), oral anticoagulant use — know both windows",
      "Orolingual angioedema occurs in 1–5% of stroke patients receiving tPA, especially those on ACEi — treat with epinephrine IM, diphenhydramine, ranitidine; intubation if airway threatened",
      "Hold 2 units of FFP at bedside when giving tPA for stroke — for reversal if sICH occurs",
      "Door-to-needle time goal for stroke tPA: ≤ 60 minutes from ED arrival",
      "Tenecteplase (TNKase) is being studied as a single-bolus alternative for stroke — similar efficacy, easier administration (single IV bolus)",
    ],
    boardRecallTip:
      "tPA for stroke: 0.9 mg/kg (max 90 mg), 10% bolus + 90% over 60 min, within 4.5 hours. Absolute contraindication: prior intracranial hemorrhage, BP > 185/110. No antiplatelets/anticoagulants for 24h after. Orolingual angioedema = ACEi + tPA interaction. sICH in 6% — stop infusion, stat CT.",
    weightBasedDosing: true,
  },
  {
    id: "em-drug-norepi",
    name: "Norepinephrine",
    brandNames: ["Levophed"],
    drugClass: "Catecholamine / Vasopressor",
    rotations: ["emergency-medicine", "internal-medicine"],
    indications: [
      "First-line vasopressor for septic shock",
      "Vasodilatory shock (anaphylaxis refractory to epinephrine, hepatic failure, post-cardiac surgery vasoplegic syndrome)",
      "Neurogenic shock (adjunct)",
    ],
    mechanismOfAction:
      "Potent alpha-1 adrenergic agonist (dominant effect — vasoconstriction increases SVR) with mild beta-1 activity (slight positive inotropy). Net effect: increased MAP, increased SVR, mild increase in cardiac output. In distributive shock (sepsis): corrects pathologic vasodilation and restores perfusion pressure without significant tachycardia.",
    contraindicationsStructured: {
      absolute: [
        "Hypovolemia without concurrent volume resuscitation (vasopressor in underfilled ventricle → reduced cardiac output)",
        "Mesenteric/peripheral vascular thrombosis (absolute — potent vasoconstriction worsens ischemia)",
      ],
      relative: [
        "Halothane or cyclopropane anesthesia (increased risk of arrhythmias)",
        "Severe hypertension (will worsen afterload)",
      ],
    },
    sideEffects: {
      common: [
        "Hypertension (if dose too high)",
        "Reflex bradycardia (from elevated BP)",
        "Peripheral vasoconstriction: cold, mottled extremities, mesenteric ischemia with prolonged use",
        "Tissue ischemia/necrosis with extravasation (phentolamine antidote for extravasation)",
      ],
      serious: [
        "Tissue necrosis from extravasation — requires central venous access; if peripheral: use large caliber vein in antecubital, treat extravasation with phentolamine 5–10 mg in 10 mL NS subQ",
        "Cardiac arrhythmias (rare with norepinephrine vs dopamine)",
        "Mesenteric and renal ischemia with prolonged high-dose infusion",
      ],
    },
    interactionsStructured: {
      drugs: [
        "MAOIs — severe hypertensive crisis (contraindicated combination)",
        "Tricyclic antidepressants — potentiate vasopressor effect",
        "Alpha-blockers (phentolamine, prazosin) — blunt vasopressor effect",
        "Halothane — ventricular arrhythmias",
      ],
    },
    monitoring: [
      "Continuous arterial line BP monitoring (A-line) preferred over intermittent cuff",
      "MAP target ≥ 65 mmHg in septic shock (higher in chronic hypertensives, traumatic brain injury)",
      "Hourly urine output (target ≥ 0.5 mL/kg/hr)",
      "ScvO2 (central venous oxygen saturation) ≥ 70% or SvO2 ≥ 65%",
      "Serial lactate measurements (goal: clearance ≥ 10% at 2 hours)",
      "ECG monitoring for arrhythmias",
    ],
    dosing: {
      adultGeneral:
        "Start at 0.01–0.1 mcg/kg/min IV, titrate to MAP ≥ 65 mmHg. Range: 0.01–3 mcg/kg/min. Mix in D5W or NS (0.9%). High doses (> 0.5 mcg/kg/min) = high vasopressor load — consider adding vasopressin 0.03 units/min.",
      renalAdjustment: "No specific dose adjustment — titrate to hemodynamic effect.",
    },
    clinicalPearls: [
      "SOAP II trial: norepinephrine superior to dopamine in septic shock — lower 28-day mortality and fewer arrhythmias; dopamine is no longer first-line",
      "If MAP not achieved with ≤ 0.25 mcg/kg/min norepinephrine, add vasopressin 0.03 units/min second (catecholamine-sparing effect, improves MAP without further catecholamine side effects)",
      "Peripheral administration of vasopressors is acceptable short-term (antecubital or above) in resuscitation — do not delay vasopressors to place central line; transition to central line ASAP",
      "Phentolamine antidote for extravasation: dilute 5–10 mg in 10 mL NS, inject subQ into extravasation site within 12 hours",
      "In patients taking chronic beta-blockers, vasopressin may be more effective than catecholamines (beta-receptors are already blocked)",
    ],
    boardRecallTip:
      "Norepinephrine = first-line vasopressor for septic shock (α1 > β1). SOAP II: superior to dopamine (fewer arrhythmias, lower mortality). MAP target ≥ 65 mmHg. Add vasopressin 0.03 units/min as second agent. Extravasation antidote = phentolamine. Requires central line (temporarily: large peripheral IV acceptable).",
    weightBasedDosing: true,
  },
  {
    id: "em-drug-adenosine",
    name: "Adenosine",
    brandNames: ["Adenocard"],
    drugClass: "Antiarrhythmic (Class V / Endogenous Purine Nucleoside)",
    rotations: ["emergency-medicine"],
    indications: [
      "Termination of stable supraventricular tachycardia (SVT) — paroxysmal SVT involving AV node (AVNRT, AVRT)",
      "Diagnosis of wide-complex tachycardia (AV block reveals atrial flutter waves or other underlying rhythm)",
    ],
    mechanismOfAction:
      "Activates A1 adenosine receptors in AV node → transiently hyperpolarizes AV nodal cells → increases AV nodal refractory period → transiently blocks AV conduction (1 circuit is broken → SVT terminates). Also activates GIRK channels → decreases heart rate. Half-life: 10–15 seconds (degraded by cellular uptake and deaminase).",
    contraindicationsStructured: {
      absolute: [
        "Wolff-Parkinson-White (WPW) with atrial fibrillation (preexcited AF) — adenosine blocks AV node → all conduction forced through accessory pathway → very rapid ventricular rate → VF. Use procainamide IV instead",
        "Second or third-degree AV block (without pacemaker)",
        "Sick sinus syndrome (without pacemaker)",
        "Adenosine hypersensitivity",
      ],
      relative: [
        "Asthma (adenosine causes bronchospasm — use caution; not absolute if benefits outweigh risk)",
        "COPD",
        "Dipyridamole use (blocks adenosine deaminase → dramatically prolongs adenosine effect → prolonged AV block; reduce dose to 3 mg if must use)",
        "Carbamazepine (increases AV block risk)",
      ],
    },
    sideEffects: {
      common: [
        "Chest discomfort/tightness (extremely common — 40%; from bronchospasm/vasodilation; very transient)",
        "Flushing and warmth",
        "Dyspnea, sense of breathlessness",
        "Brief asystole (2–6 seconds — expected, expected physiologic effect; warn patient before administration)",
        "Palpitations during and after conversion",
        "Nausea, headache",
      ],
      serious: [
        "Prolonged AV block or asystole (> 15–30 seconds) — have atropine and transcutaneous pacing ready",
        "Bronchospasm (use with great caution in asthma)",
        "New arrhythmias triggered at moment of AV block (atrial flutter, AF — may precipitate or reveal underlying rhythm)",
      ],
    },
    interactionsStructured: {
      drugs: [
        "Dipyridamole — potentiates adenosine effect dramatically (blocks degradation); reduce dose to 3 mg",
        "Methylxanthines (caffeine, theophylline, aminophylline) — competitive adenosine receptor antagonists; BLOCK adenosine effect; higher doses needed or use alternative",
        "Carbamazepine — potentiates AV block",
      ],
      foods: ["Caffeine (significant amounts can reduce effectiveness — competitive receptor antagonist)"],
    },
    monitoring: [
      "Continuous cardiac monitoring during administration (rhythm strip or telemetry)",
      "12-lead EKG immediately after conversion",
      "BP monitoring (transient hypotension common)",
      "Pulse oximetry",
      "Resuscitation equipment available (defibrillator, atropine)",
    ],
    dosing: {
      adultGeneral:
        "6 mg rapid IV bolus (over 1–3 seconds) through largest, most proximal IV available, followed IMMEDIATELY by 20 mL NS rapid flush. If no effect in 1–2 minutes: 12 mg rapid IV bolus + flush. May repeat 12 mg once more if needed. Antecubital or central vein preferred over peripheral hand/forearm IV (half-life 10–15 sec — must reach heart quickly).",
      pediatricNote:
        "0.1 mg/kg rapid IV bolus (max 6 mg); if no effect: 0.2 mg/kg (max 12 mg). Requires same rapid flush technique.",
    },
    clinicalPearls: [
      "The 10–15 second half-life means technique is everything — must give as a FAST bolus immediately followed by large NS rapid flush; slow administration is ineffective",
      "Warn the patient before giving: 'You may feel chest tightness, flushing, and brief racing/fluttering — this is expected and lasts only seconds'",
      "WPW + regular narrow SVT: adenosine is safe and appropriate (if the tachycardia is conducted through the AV node). WPW + irregular wide complex (preexcited AF): NEVER give adenosine (or digoxin, diltiazem, verapamil) — use procainamide IV",
      "Heart transplant recipients: use adenosine 3 mg (denervated heart has supersensitivity to adenosine — exaggerated response)",
      "If adenosine fails to terminate SVT after 3 doses, reconsider the rhythm (may not be reentrant through AV node) — consider diltiazem, verapamil, or synchronized cardioversion",
    ],
    boardRecallTip:
      "Adenosine: 6 mg rapid IV bolus → 20 mL flush; repeat 12 mg × 2. Half-life 10–15 sec. WPW + preexcited AF = NEVER adenosine (use procainamide). Caffeine/theophylline blocks adenosine. Dipyridamole potentiates (reduce dose to 3 mg). Heart transplant = 3 mg (supersensitivity).",
  },
  {
    id: "em-drug-ketamine",
    name: "Ketamine",
    brandNames: ["Ketalar"],
    drugClass: "Dissociative Anesthetic / NMDA Receptor Antagonist",
    rotations: ["emergency-medicine"],
    indications: [
      "Rapid sequence intubation (RSI) — induction agent",
      "Procedural sedation and analgesia",
      "Sub-dissociative dose analgesia (pain management)",
      "Refractory status epilepticus (continuous infusion)",
      "Excited delirium / acute agitation (IM injection)",
      "Severe asthma (bronchodilator effect)",
    ],
    mechanismOfAction:
      "Non-competitive antagonist at NMDA (N-methyl-D-aspartate) glutamate receptors → dissociative state (disconnection between thalamocortical and limbic systems). Also: mu-opioid partial agonist (analgesic effect), sodium channel blockade (local anesthetic), sympathomimetic (catecholamine release → increase BP and HR — ideal for hemodynamically unstable patients). Unique: maintains airway reflexes and spontaneous respirations (unlike propofol).",
    contraindicationsStructured: {
      absolute: [
        "Uncontrolled hypertension (ketamine releases catecholamines → further BP rise — concern in known severe hypertension or hypertensive crisis)",
        "Prior significant adverse reaction to ketamine",
        "Aortic dissection or vascular aneurysm (catecholamine surge contraindicated)",
      ],
      relative: [
        "Elevated ICP (controversial — historical concern; modern evidence suggests ketamine does NOT raise ICP in intubated/ventilated patients; may be BENEFICIAL in TBI by maintaining cerebral perfusion pressure)",
        "Schizophrenia or active psychosis (NMDA antagonism may worsen psychotic symptoms)",
        "Thyrotoxicosis (catecholamine release may precipitate thyroid storm)",
        "Hepatic impairment (reduced metabolism)",
        "Ischemic heart disease (catecholamine surge increases myocardial O2 demand)",
      ],
    },
    sideEffects: {
      common: [
        "Emergence reactions / dysphoria (10–15% adults; rare in children and elderly) — vivid dreams, hallucinations on emergence; premedicate with midazolam 1–2 mg IV in adults",
        "Tachycardia and hypertension (catecholamine release — beneficial in hypotension, concerning in known CAD)",
        "Hypersalivation (increased secretions — consider atropine or glycopyrrolate premedication; important with airway procedures)",
        "Nausea and vomiting (on emergence)",
        "Laryngospasm (rare with IV dosing; more common with IM — have BVM and suction available)",
      ],
      serious: [
        "Laryngospasm — most serious respiratory complication (jaw thrust, BVM, succinylcholine if needed)",
        "Cardiac stimulation — avoid in known CAD at high doses",
        "Prolonged emergence and recovery",
      ],
    },
    interactionsStructured: {
      drugs: [
        "Thyroid hormones — hypertension and tachycardia potentiated",
        "CNS depressants (benzodiazepines, opioids) — additive CNS depression; synergistic sedation (used intentionally in procedural sedation)",
        "Neuromuscular blockers — potentiated by ketamine",
      ],
    },
    monitoring: [
      "Continuous vital signs (BP, HR, SpO2, respiratory rate)",
      "End-tidal CO2 if intubated",
      "Level of sedation (RASS scale for procedural sedation)",
      "Airway assessment (reflexes maintained but not guaranteed)",
      "Recovery monitoring until baseline mental status returns",
    ],
    dosing: {
      adultGeneral:
        "RSI induction: 1–2 mg/kg IV (preferred in hemodynamically unstable patients). Procedural sedation: 1–2 mg/kg IV (onset 30–60 sec, duration 10–15 min) or 4–5 mg/kg IM (onset 3–5 min, duration 15–30 min). Sub-dissociative analgesia: 0.1–0.3 mg/kg IV over 10–15 minutes. Excited delirium: 4–5 mg/kg IM. Refractory status epilepticus: 1.5 mg/kg IV bolus then 1–3 mg/kg/hr infusion.",
      pediatricNote:
        "1–2 mg/kg IV or 4–5 mg/kg IM for procedural sedation. Emergence reactions less common in children < 15 years — midazolam premedication not routinely needed in pediatrics.",
    },
    clinicalPearls: [
      "Ketamine is the preferred RSI induction agent in: (1) hemodynamically unstable patients (catecholamine release maintains BP), (2) active bronchospasm/asthma (bronchodilator), (3) trauma with unknown blood pressure, (4) burn patients",
      "The concern about ketamine raising ICP is outdated — current evidence from ICU literature shows ketamine does NOT increase ICP in ventilated TBI patients and may be beneficial by maintaining CPP",
      "Sub-dissociative ketamine (0.1–0.3 mg/kg) provides excellent analgesia for acute pain (renal colic, musculoskeletal trauma) without dissociation — growing evidence for ED pain management",
      "Ketamine + propofol ('ketofol') 1:1 mixture used for procedural sedation — ketamine's catecholamine release offsets propofol's hypotension; emergence reactions less with propofol",
      "Airway reflexes are MAINTAINED but not guaranteed — always have airway equipment at bedside; laryngospasm is rare but can occur",
    ],
    boardRecallTip:
      "Ketamine: NMDA antagonist, dissociative. RSI dose: 1.5 mg/kg IV. Maintains airway reflexes + BP (catecholamine release — ideal for hypotensive RSI). Bronchodilator (asthma RSI). Emergence reactions in adults — premedicate with midazolam. Hypersalivation — consider glycopyrrolate. ICP concern is outdated (safe in TBI).",
    weightBasedDosing: true,
  },
  {
    id: "em-drug-succinylcholine",
    name: "Succinylcholine",
    brandNames: ["Anectine", "Quelicin"],
    drugClass: "Depolarizing Neuromuscular Blocking Agent",
    rotations: ["emergency-medicine"],
    indications: [
      "Rapid sequence intubation (RSI) — facilitating endotracheal intubation",
      "Laryngospasm treatment",
    ],
    mechanismOfAction:
      "Depolarizing neuromuscular blocker — structurally mimics acetylcholine. Binds nicotinic receptors at neuromuscular junction → sustained depolarization → initial fasciculations (brief muscle twitching) → flaccid paralysis (receptor cannot repolarize while succinylcholine is bound). Rapidly hydrolyzed by plasma pseudocholinesterase (butyrylcholinesterase). Onset: 45–60 seconds. Duration: 10–12 minutes (shortest of any NMB).",
    contraindicationsStructured: {
      absolute: [
        "Hyperkalemia or risk of severe hyperkalemia — succinylcholine raises K+ by 0.5–1 mEq/L (normal patients). FATAL hyperkalemia in: burns (> 72 hours post-injury), crush injury/rhabdomyolysis (> 48 hours), spinal cord injury/UMN lesions (> 72 hours), prolonged immobilization, denervating neuromuscular diseases (Guillain-Barré, ALS, MS — AVOID entirely), severe sepsis",
        "Personal or family history of malignant hyperthermia (life-threatening hypermetabolic crisis — treat with dantrolene)",
        "Personal or family history of pseudocholinesterase deficiency (prolonged paralysis — hours to days)",
        "Myopathies with potential for hyperkalemia (Duchenne muscular dystrophy — risk of rhabdomyolysis + K+ release + cardiac arrest)",
      ],
      relative: [
        "Penetrating eye injury (transient increase in intraocular pressure — risk of extrusion)",
        "Myasthenia gravis (variable response; generally avoid — use rocuronium)",
        "Renal failure (baseline K+ must be < 5.5)",
        "Open globe injury (relative — theoretical risk of increasing IOP)",
      ],
    },
    sideEffects: {
      common: [
        "Fasciculations (brief generalized muscle twitching before paralysis onset — can be minimized with defasciculating dose of rocuronium 0.06 mg/kg)",
        "Post-operative myalgia (from fasciculations — give before intubation)",
        "Transient bradycardia (especially children and with repeat doses — muscarinic effect; premedicate with atropine 0.02 mg/kg in children)",
        "Transient hyperkalemia (0.5–1 mEq/L rise — normal patients; dangerous in at-risk groups)",
        "Increased intraocular pressure (transient)",
        "Increased intragastric pressure (offset by increased LES tone — theoretical aspiration risk debated)",
      ],
      serious: [
        "Malignant hyperthermia — life-threatening hypermetabolic crisis (hyperthermia, rigidity, rhabdomyolysis, hyperkalemia); treat with dantrolene 2.5 mg/kg IV, cooling measures, supportive care",
        "Phase II block — with repeated or high doses, becomes non-depolarizing (paradoxical, prolonged paralysis)",
        "Pseudocholinesterase deficiency — prolonged paralysis (hours to days); requires mechanical ventilation support",
      ],
      blackBox: [
        "Rare reports of acute rhabdomyolysis with hyperkalemia followed by ventricular dysrhythmias, cardiac arrest, and death in pediatric patients with undiagnosed skeletal muscle myopathies (e.g., Duchenne muscular dystrophy). Use only when immediate securing of airway is necessary — avoid routine use in pediatric patients.",
      ],
    },
    interactionsStructured: {
      drugs: [
        "Organophosphate insecticides/nerve agents — inhibit pseudocholinesterase → prolonged paralysis",
        "Echothiophate (glaucoma eye drops) — inhibit pseudocholinesterase",
        "Aminoglycosides — potentiate neuromuscular blockade",
        "Lithium — prolongs duration of neuromuscular block",
      ],
    },
    monitoring: [
      "Train-of-four (TOF) nerve stimulator to assess neuromuscular blockade depth and recovery",
      "Continuous SpO2 and ETCO2 during RSI and post-intubation",
      "Temperature monitoring (malignant hyperthermia surveillance)",
      "Potassium level pre-RSI in at-risk patients",
    ],
    dosing: {
      adultGeneral:
        "RSI: 1.5 mg/kg IV (some sources 1–2 mg/kg). Onset: 45–60 seconds. Duration: 10–12 minutes. For laryngospasm: 0.1–0.5 mg/kg IV. IM route: 3–4 mg/kg (onset 3–4 minutes — use if no IV access, particularly in children).",
      pediatricNote:
        "RSI: 2 mg/kg IV (children < 10 years) or 1.5 mg/kg IV (older children). Always premedicate with atropine 0.02 mg/kg IV in children to prevent bradycardia. Black box warning for pediatric myopathies.",
    },
    clinicalPearls: [
      "When succinylcholine is contraindicated, use rocuronium 1.2 mg/kg IV (high-dose) — provides similar rapid onset (60–90 sec) with duration 45–75 minutes; reverse with sugammadex 16 mg/kg if needed",
      "The 'can't intubate, can't oxygenate' (CICO) scenario is the most feared complication of RSI — succinylcholine's 10-minute duration offers the advantage of returning to spontaneous breathing if intubation fails; rocuronium's 45-minute duration requires sugammadex reversal",
      "Hyperkalemia contraindication timing: burns (risk begins 72 hours after burn, peaks 2–3 weeks); crush injury (risk begins 48 hours); spinal cord injury (risk begins 72 hours, persists 6 months to years)",
      "False emergency use in patients with burns, SCI, or denervation within the danger zone can cause fatal hyperkalemia-induced cardiac arrest",
      "Defasciculating dose: pretreatment with rocuronium 0.06 mg/kg given 3 minutes before succinylcholine reduces fasciculations and post-op myalgia",
    ],
    boardRecallTip:
      "Succinylcholine: depolarizing NMB. Dose: 1.5 mg/kg IV. Onset: 45 sec, duration: 10 min. CONTRAINDICATED: burns > 72h, crush > 48h, SCI > 72h (hyperkalemia!), malignant hyperthermia hx, pseudocholinesterase deficiency, myopathies. Alternative: rocuronium 1.2 mg/kg (reverse with sugammadex). Causes fasciculations + transient K+ rise.",
    weightBasedDosing: true,
  },
  {
    id: "em-drug-naloxone",
    name: "Naloxone",
    brandNames: ["Narcan", "Kloxxado", "EVZIO", "Zimhi"],
    drugClass: "Opioid Receptor Antagonist",
    rotations: ["emergency-medicine", "behavioral-medicine"],
    indications: [
      "Opioid overdose reversal (all routes: IV, IM, intranasal, subcutaneous, endotracheal)",
      "Reversal of opioid-induced respiratory depression in post-anesthesia care",
      "Opioid-induced pruritus (low-dose infusion)",
      "Refractory septic shock (investigational — blocks opioid-like peptides causing vasodilation)",
    ],
    mechanismOfAction:
      "Competitive antagonist at mu (primary), kappa, and delta opioid receptors. Reverses all opioid effects: respiratory depression, sedation, analgesia, miosis, GI motility decrease. Onset: 2–5 minutes IV, 5 minutes IM, 5–8 minutes intranasal. Duration: 30–90 minutes (SHORTER than most opioids → re-sedation is common).",
    contraindicationsStructured: {
      absolute: ["Naloxone hypersensitivity (rare)"],
      relative: [
        "Opioid-dependent patients — precipitates acute opioid withdrawal (severe agitation, hypertension, pulmonary edema, cardiac arrhythmias) — titrate slowly to respirations, not full reversal",
        "Cardiovascular instability — naloxone-induced sympathetic surge can cause hypertension, arrhythmias, pulmonary edema",
      ],
    },
    sideEffects: {
      common: [
        "Acute opioid withdrawal symptoms (sweating, agitation, tremor, anxiety, nausea, vomiting) — especially with large doses in opioid-dependent patients",
        "Hypertension and tachycardia (catecholamine release from withdrawal)",
        "Nausea and vomiting",
      ],
      serious: [
        "Re-sedation (most important clinical concern) — naloxone wears off before opioid → patient becomes sedated again; observe for at least 2 hours after administration; infusion may be required",
        "Pulmonary edema (noncardiogenic — rapid reversal of respiratory depression → sympathetic surge → pulmonary vasoconstriction)",
        "Ventricular arrhythmias (rare — from sympathetic surge in withdrawal)",
        "Seizures (rare — from precipitated withdrawal in opioid-dependent patients)",
      ],
    },
    interactionsStructured: {
      drugs: [
        "Opioids — antagonizes all opioid effects (intended interaction)",
        "Buprenorphine — higher doses of naloxone required (buprenorphine has very high mu receptor affinity; typical 0.4 mg IV dose insufficient — may need 2–10 mg)",
        "Clonidine — does not reverse sedation from clonidine (opioid receptor-independent mechanism; use caution — clonidine overdose may mimic opioid overdose)",
      ],
    },
    monitoring: [
      "Respiratory rate, depth, and SpO2 continuously during and after administration",
      "Level of consciousness (AVPU or GCS)",
      "BP and HR (sympathetic surge with rapid reversal)",
      "Duration of monitoring post-naloxone: at least 2 hours (longer for long-acting opioids — methadone, extended-release formulations; may require continuous naloxone infusion)",
      "Re-sedation assessment: patient must demonstrate sustained breathing > 10 breaths/min before discharge",
    ],
    dosing: {
      adultGeneral:
        "Opioid overdose reversal: 0.4–2 mg IV/IM/SQ q2–3 minutes until adequate respiratory rate (> 10 breaths/min) — titrate to respirations, NOT full reversal. Intranasal (Narcan): 4 mg per nostril (8 mg total available). Maximum cumulative dose per acute event: typically 10 mg. Naloxone infusion for long-acting opioids: two-thirds of effective reversal dose per hour in 250 mL D5W. Community/bystander use: 0.4 mg IM or 4 mg intranasal — give and call 911.",
      renalAdjustment: "No dose adjustment required for renal impairment.",
      pediatricNote:
        "0.01 mg/kg IV/IM q2–3 minutes; titrate to respiratory response. Maximum 2 mg per dose in children.",
    },
    clinicalPearls: [
      "The key clinical pitfall: naloxone wears off in 30–90 minutes but opioids (especially heroin, oxycodone, fentanyl analogs, methadone) last much longer — always observe for at least 2 hours; methadone overdose may require 4–6+ hours observation and naloxone infusion",
      "Titrate to adequate respirations (10–12 breaths/min), NOT to full alertness — fully reversing opioid analgesia in a pain patient precipitates severe withdrawal and often violent behavior",
      "Buprenorphine (Suboxone) has very high mu receptor affinity — requires much higher naloxone doses than standard; 2–10 mg may be needed; often incomplete reversal even at high doses",
      "Intranasal naloxone (Narcan 4 mg) is now widely available as community rescue medication — all patients on chronic opioids and all patients with OUD should be prescribed a naloxone kit",
      "Fentanyl analogs (carfentanil, acetylfentanyl) may require multiple doses of naloxone (100–1,000× more potent than morphine) — repeated dosing critical; infusion likely needed",
    ],
    boardRecallTip:
      "Naloxone: 0.4–2 mg IV/IM/IN, repeat q2–3 min. Duration SHORTER than most opioids → re-sedation risk (observe 2h minimum). Titrate to respirations, NOT full reversal (avoid precipitating withdrawal). Buprenorphine requires 2–10 mg (high receptor affinity). Narcan 4 mg IN = community rescue dose.",
  },
  {
    id: "em-drug-aspirin",
    name: "Aspirin (Acetylsalicylic Acid)",
    brandNames: ["Bayer", "Ecotrin", "Bufferin"],
    drugClass: "Antiplatelet Agent / NSAID (Salicylate)",
    rotations: ["emergency-medicine", "internal-medicine", "family-medicine"],
    indications: [
      "Acute coronary syndrome (ACS) — immediate 325 mg chewed",
      "Secondary prevention of cardiovascular events (MI, stroke, TIA) — 81 mg daily",
      "Acute ischemic stroke and TIA (300 mg initial, then 81 mg daily)",
      "Preeclampsia prevention in high-risk pregnancies (81 mg daily starting 12–16 weeks)",
      "Fever and mild-moderate pain (analgesic/antipyretic — rarely used for this in acute settings)",
      "Kawasaki disease (high-dose anti-inflammatory phase, then low-dose antiplatelet — see pediatrics)",
    ],
    mechanismOfAction:
      "Irreversibly inhibits cyclooxygenase-1 (COX-1) and COX-2 enzymes by acetylation. COX-1 inhibition in platelets → decreased thromboxane A2 (TXA2) production → impaired platelet aggregation. Since platelets lack nuclei, they cannot synthesize new COX — aspirin effect lasts platelet lifetime (7–10 days). Anti-inflammatory effects from COX-2 inhibition (higher doses). Antipyretic: reduces prostaglandin E2 in hypothalamus.",
    contraindicationsStructured: {
      absolute: [
        "Active peptic ulcer disease with active bleeding",
        "Aspirin hypersensitivity or aspirin-exacerbated respiratory disease (AERD / Samter's triad — asthma + nasal polyps + aspirin sensitivity)",
        "Children and teenagers with viral illness (Reye's syndrome — encephalopathy + hepatic failure; avoid aspirin in all pediatric viral illness)",
        "Severe bleeding disorder (hemophilia, severe thrombocytopenia)",
      ],
      relative: [
        "Anticoagulated patients (increased bleeding risk — dual antiplatelet + anticoagulation = triple therapy, high GI bleed risk)",
        "Planned surgery (stop 7–10 days before elective surgery — except in ACS stents where benefit outweighs risk)",
        "Gout (low-dose aspirin increases uric acid levels)",
        "Third trimester pregnancy (premature closure of ductus arteriosus at > 30 weeks gestation)",
      ],
    },
    sideEffects: {
      common: [
        "GI upset, dyspepsia, nausea (give with food; enteric coating reduces but does not eliminate GI effects)",
        "Tinnitus and hearing loss (salicylism — at doses > 150 mg/kg; chronic high-dose use)",
        "Bleeding — increased with dual antiplatelet therapy, anticoagulation",
        "Increased uric acid levels (low-dose 81 mg increases uric acid retention)",
      ],
      serious: [
        "GI bleeding (peptic ulcer, gastritis — add PPI if high GI bleed risk)",
        "Hemorrhagic stroke (especially in combination with anticoagulants)",
        "Aspirin toxicity (overdose) — salicylism, respiratory alkalosis then metabolic acidosis, tinnitus, altered mental status, pulmonary edema",
        "Reye's syndrome in children with viral illness",
      ],
    },
    interactionsStructured: {
      drugs: [
        "Warfarin — increased anticoagulant effect and bleeding risk",
        "Other NSAIDs — ibuprofen competitively blocks aspirin's COX-1 binding site (take aspirin first, wait 30 minutes before ibuprofen — or avoid combination)",
        "SSRIs — additive platelet inhibition (increased GI bleed risk)",
        "Methotrexate — reduced renal clearance → methotrexate toxicity",
        "ACEi/ARBs — high-dose aspirin reduces antihypertensive benefit (from PGE2 antagonism in kidney)",
      ],
    },
    monitoring: [
      "Bleeding signs (stool color, easy bruising, gum bleeding)",
      "Renal function (NSAIDs reduce GFR — more relevant at higher doses)",
      "GI symptoms (add PPI for high-risk patients: age > 65, prior ulcer, concurrent anticoagulation)",
      "Platelet function (platelet aggregation studies — rarely needed clinically)",
    ],
    dosing: {
      adultGeneral:
        "ACS: 325 mg chewed (non-enteric coated) immediately in ED. Secondary prevention: 81 mg PO daily (lower dose equally effective for prevention, lower GI bleed risk). TIA/minor stroke: 300–325 mg initial then 81 mg daily. Preeclampsia prevention: 81 mg PO daily starting 12–16 weeks gestation.",
      renalAdjustment: "Avoid if CrCl < 10 mL/min; reduce dose with moderate CKD.",
      pediatricNote:
        "AVOID in all children with viral illness (Reye's syndrome). Exception: Kawasaki disease (80–100 mg/kg/day × 2 weeks for anti-inflammatory; then 3–5 mg/kg/day for antiplatelet) and mechanical heart valves (specific pediatric indications with specialist guidance).",
    },
    clinicalPearls: [
      "Chewing aspirin (vs swallowing whole) provides faster absorption — important in acute ACS where rapid platelet inhibition is needed; onset of antiplatelet effect within 20 minutes when chewed",
      "Ibuprofen taken before aspirin blocks aspirin's irreversible COX-1 binding — patients on aspirin for cardiac protection should NOT take ibuprofen regularly; acetaminophen is a safer analgesic choice",
      "Aspirin for primary prevention (no prior CVD event) is no longer recommended for most adults ≥ 60 years old (USPSTF 2022) due to bleeding risk exceeding cardiovascular benefit in older low-risk individuals",
      "DAPT (dual antiplatelet therapy) = aspirin 81 mg + P2Y12 inhibitor (clopidogrel, ticagrelor, or prasugrel) — mandatory after coronary stent placement (BMS: 1 month; DES: 6–12 months)",
      "Aspirin and acetaminophen = completely different mechanisms — acetaminophen does NOT affect platelets and is the safe alternative for patients with aspirin allergy",
    ],
    boardRecallTip:
      "ACS: chew 325 mg immediately. Secondary prevention: 81 mg daily. Irreversible COX-1 inhibition (7–10 day platelet effect). NEVER in children with viral illness (Reye's syndrome). Aspirin-exacerbated respiratory disease (AERD): avoid all NSAIDs. DAPT after stent: aspirin + P2Y12 inhibitor (ticagrelor preferred over clopidogrel for ACS).",
    beersCriteria: true,
    beersCriteriaNote:
      "For primary prevention in adults ≥ 70 years without CVD: USPSTF 2022 recommends against aspirin for primary prevention (bleeding risk > benefit). Aspirin remains appropriate for secondary prevention (established CVD/prior MI/stroke) in older adults.",
  },
];
