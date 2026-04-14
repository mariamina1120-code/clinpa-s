import type { LabValue, ImagingFinding } from "@/types";

export const behavioralMedicineLabs: LabValue[] = [
  {
    id: "bm-lab-thyroid",
    name: "Thyroid Function Tests (TSH, Free T4)",
    rotationSlug: "behavioral-medicine",
    normalRange: "TSH: 0.4–4.0 mIU/L; Free T4: 0.8–1.8 ng/dL",
    units: "TSH: mIU/L; Free T4: ng/dL",
    clinicalSignificance:
      "Thyroid dysfunction is a common and reversible cause of psychiatric symptoms. Hypothyroidism causes depression, cognitive slowing, fatigue, and weight gain. Hyperthyroidism causes anxiety, insomnia, irritability, emotional lability, and psychosis (rare). TSH is the most sensitive screening test for thyroid disease. Always check TSH in new-onset depression, anxiety, cognitive complaints, or new psychiatric symptoms.",
    criticalValues: "TSH < 0.1 mIU/L = hyperthyroidism (or TSH-secreting tumor); TSH > 10 mIU/L = overt hypothyroidism requiring treatment",
    interpretation: [
      {
        finding: "Elevated TSH (> 4.0) with normal Free T4 = Subclinical Hypothyroidism",
        meaning: "May cause mild depressive symptoms and cognitive slowing. Treat if TSH > 10, symptomatic, or patient is pregnant.",
      },
      {
        finding: "Elevated TSH with LOW Free T4 = Overt Hypothyroidism",
        meaning: "Classic psychiatric presentations: depression (most common), psychosis ('myxedema madness'), cognitive impairment. Treatment: levothyroxine. Do NOT start antidepressants until hypothyroidism is treated and reassessed.",
      },
      {
        finding: "Suppressed TSH (< 0.4) with elevated Free T4 = Hyperthyroidism",
        meaning: "Psychiatric presentations: anxiety, panic attacks, irritability, insomnia, emotional lability, rarely psychosis. Treat hyperthyroidism first — psychiatric symptoms usually resolve.",
      },
      {
        finding: "Suppressed TSH with NORMAL Free T4 = Subclinical Hyperthyroidism",
        meaning: "May cause palpitations, anxiety, and subtle mood symptoms. Risk of atrial fibrillation. Monitor or treat based on age and cardiac risk.",
      },
    ],
    whenToOrder: [
      "New-onset depression, anxiety, or bipolar symptoms (rule out thyroid cause)",
      "Cognitive complaints or suspected dementia (hypothyroidism = reversible dementia cause)",
      "Patients on lithium (lithium causes hypothyroidism in 20–40% of patients — monitor TSH every 6 months)",
      "Before initiating antidepressants in any patient (establish baseline)",
      "Postpartum psychiatric symptoms (rule out postpartum thyroiditis)",
      "Refractory depression not responding to antidepressants (hypothyroidism or subclinical hypothyroidism may blunt response)",
    ],
    boardRecallTips: [
      "Hypothyroidism = depression, weight gain, constipation, cold intolerance, cognitive slowing",
      "Hyperthyroidism = anxiety, weight loss, heat intolerance, diarrhea, palpitations",
      "TSH is first-line screening test (most sensitive)",
      "Lithium causes hypothyroidism — check TSH every 6 months in all lithium patients",
      "Always rule out thyroid disease before diagnosing primary psychiatric depression",
    ],
  },
  {
    id: "bm-lab-metabolic-panel",
    name: "Comprehensive Metabolic Panel (CMP) + Glucose + HbA1c",
    rotationSlug: "behavioral-medicine",
    normalRange: "Fasting glucose: 70–99 mg/dL; HbA1c: < 5.7% (normal), 5.7–6.4% (prediabetes), ≥ 6.5% (diabetes)",
    units: "mg/dL (glucose); % (HbA1c)",
    clinicalSignificance:
      "Metabolic monitoring is mandatory for patients on antipsychotic medications (especially second-generation/atypical antipsychotics). Atypical antipsychotics cause significant metabolic syndrome: weight gain, insulin resistance, hyperglycemia, and dyslipidemia. Clozapine and olanzapine carry the highest risk. Hypoglycemia can cause psychiatric symptoms (anxiety, confusion, agitation). Hyperglycemia can cause delirium, psychosis, and cognitive impairment.",
    criticalValues: "Glucose < 50 mg/dL = symptomatic hypoglycemia (anxiety, confusion, diaphoresis); Glucose > 600 mg/dL = hyperosmolar hyperglycemic state (HHS); Na < 125 mEq/L = severe hyponatremia (associated with SSRI-induced SIADH)",
    interpretation: [
      {
        finding: "New hyperglycemia (glucose > 126 fasting or HbA1c ≥ 6.5%) in patient on atypical antipsychotic",
        meaning: "Antipsychotic-induced diabetes mellitus. Most common with clozapine and olanzapine. May require switching antipsychotic (aripiprazole or ziprasidone have lower metabolic risk) or adding metformin.",
      },
      {
        finding: "Elevated creatinine or decreased GFR in patient on lithium",
        meaning: "Lithium nephrotoxicity. Lithium is renally excreted — impaired clearance leads to toxicity. Reassess lithium dosing or consider alternative mood stabilizer if GFR < 30 mL/min.",
      },
      {
        finding: "Hyponatremia (Na < 135 mEq/L) in patient on SSRI",
        meaning: "SIADH (Syndrome of Inappropriate ADH secretion) from SSRI. Most common in elderly women. Can cause confusion, lethargy, seizures. Treat with fluid restriction, stop SSRI, consider switching to non-SSRI antidepressant.",
      },
      {
        finding: "Hyperammonemia (NH3 elevated) in patient on valproate",
        meaning: "Valproate inhibits urea cycle → hyperammonemic encephalopathy. Can occur even with normal LFTs. Patient presents with confusion. Treat with L-carnitine and lactulose.",
      },
    ],
    whenToOrder: [
      "Baseline before initiating any antipsychotic medication",
      "Every 3 months in first year of antipsychotic therapy, then annually",
      "When initiating lithium and every 3–6 months thereafter",
      "When initiating valproate and every 6–12 months",
      "Any psychiatric patient with new confusion or altered mental status (check glucose first)",
      "Patients on SSRIs who develop confusion or hyponatremia symptoms (check sodium)",
    ],
    boardRecallTips: [
      "Atypical antipsychotic monitoring: glucose + HbA1c + lipids + weight — baseline, 3 months, then annually",
      "Highest metabolic syndrome risk: CLOZAPINE > olanzapine > quetiapine > risperidone > aripiprazole",
      "SIADH from SSRIs: hyponatremia + confusion in elderly women → stop SSRI, fluid restrict",
      "Lithium toxicity risk increases with renal impairment, dehydration, NSAIDs, ACEi",
      "Hyperammonemia + valproate + normal LFTs = valproate-induced hyperammonemic encephalopathy → L-carnitine",
    ],
  },
  {
    id: "bm-lab-drug-levels",
    name: "Psychiatric Medication Serum Levels",
    rotationSlug: "behavioral-medicine",
    normalRange: "Lithium: 0.6–1.2 mEq/L; Valproate: 50–125 mcg/mL; Clozapine: 350–600 ng/mL (trough); Carbamazepine: 4–12 mcg/mL",
    units: "mEq/L (lithium); mcg/mL (valproate, carbamazepine); ng/mL (clozapine)",
    clinicalSignificance:
      "Serum drug level monitoring is required for medications with narrow therapeutic indices. Levels guide dose adjustments, assess adherence, and identify toxicity before serious adverse events occur. ALWAYS draw TROUGH levels (just before next dose, typically 12 hours after the last dose).",
    criticalValues: "Lithium > 1.5 mEq/L = toxicity concern; > 2.0 mEq/L = moderate toxicity; > 2.5 mEq/L = severe (seizures, death); Carbamazepine > 12 mcg/mL = toxicity (diplopia, ataxia, nystagmus)",
    interpretation: [
      {
        finding: "Lithium level 1.5–2.0 mEq/L with coarse tremor, GI symptoms, confusion",
        meaning: "Mild-moderate lithium toxicity. STOP lithium, aggressive IV normal saline hydration (increases renal lithium clearance), hold all NSAIDs/ACEi, cardiac monitoring.",
      },
      {
        finding: "Lithium level > 2.5 mEq/L with seizures, cardiac arrhythmias, or coma",
        meaning: "Severe lithium toxicity. Emergent hemodialysis required — lithium is dialyzable.",
      },
      {
        finding: "Valproate level < 50 mcg/mL despite adequate dosing",
        meaning: "Subtherapeutic. Consider: poor adherence, drug interactions (carbapenem antibiotics reduce levels 60–70%), or need for dose increase.",
      },
      {
        finding: "Clozapine level < 350 ng/mL with inadequate response",
        meaning: "Subtherapeutic clozapine. Level-guided dosing is particularly important for clozapine. Increase dose or improve adherence.",
      },
    ],
    whenToOrder: [
      "LITHIUM: 5–7 days after dose change (steady state), then every 3–6 months when stable. Also check with any change in renal function, initiation of NSAIDs/ACEi/diuretics, or clinical signs of toxicity",
      "VALPROATE: 5 days after dose change; every 6–12 months when stable; when starting enzyme inducers/inhibitors",
      "CARBAMAZEPINE: 5–7 days after dose change; carbamazepine auto-induces its own metabolism (CYP3A4) — levels may drop after 4 weeks",
      "CLOZAPINE: trough level after 1 week at target dose; every 3–6 months when stable",
    ],
    boardRecallTips: [
      "ALL psychiatric drug levels are TROUGH (12h post-dose for lithium/valproate)",
      "Lithium targets: ACUTE mania 0.8–1.2; MAINTENANCE 0.6–1.0 mEq/L",
      "Lithium toxicity Rx: IV NS + hold offending drugs; hemodialysis if level > 3.5 or severe symptoms",
      "Valproate target: 50–125 mcg/mL",
      "Carbamazepine auto-induces own metabolism (CYP3A4) — levels may drop 4 weeks after starting",
      "Clozapine REMS: ANC monitoring mandatory (risk of agranulocytosis)",
    ],
  },
  {
    id: "bm-lab-urine-drug-screen",
    name: "Urine Drug Screen (UDS) and Alcohol Biomarkers",
    rotationSlug: "behavioral-medicine",
    normalRange: "Negative for all substances of abuse (in absence of prescribed medications)",
    units: "Qualitative positive/negative; quantitative (GC-MS confirmation in ng/mL)",
    clinicalSignificance:
      "Substance use disorders are the most common comorbidity in psychiatric patients. A UDS should be obtained at baseline in all new psychiatric patients and when clinical presentation is atypical or unexplained. Interpreting UDS requires understanding of detection windows, cross-reactants, and limitations of immunoassay screening (false positives/negatives possible).",
    criticalValues: "Positive for PCP, methamphetamine, or cocaine in patient with new psychosis changes management (substance-induced psychosis vs. primary). Positive buprenorphine/methadone in monitored MAT patient = adherence confirmed.",
    interpretation: [
      {
        finding: "Positive cannabinoids (THC) in psychosis workup",
        meaning: "Cannabis use can cause cannabis-induced psychotic disorder or exacerbate underlying schizophrenia. Heavy cannabis use (especially high-THC products) is a major modifiable risk factor for psychosis. Counsel cessation.",
      },
      {
        finding: "Positive cocaine or methamphetamine in patient with acute agitation/psychosis",
        meaning: "Stimulant-induced psychosis. Symptoms typically resolve within 24–72 hours of abstinence. Avoid antipsychotics if possible (hyperthermia risk); use benzodiazepines for agitation.",
      },
      {
        finding: "Positive opioids in patient not prescribed opioids",
        meaning: "Illicit opioid use. Offer naloxone (Narcan) prescription, risk reduction education, and assessment for opioid use disorder. Consider referral for medication-assisted treatment (MAT — buprenorphine or metformin).",
      },
      {
        finding: "Elevated phosphatidylethanol (PEth) or CDT (carbohydrate-deficient transferrin)",
        meaning: "Heavy alcohol use (PEth detects drinking in past 3–4 weeks; CDT sensitive for chronic heavy drinking > 60g/day × 2 weeks). More specific than GGT or MCV for alcohol use disorder detection.",
      },
    ],
    whenToOrder: [
      "All new psychiatric patients at intake",
      "Any patient presenting with new psychosis, mania, or severe agitation (rule out substance-induced)",
      "Patients in substance use treatment programs (monitoring sobriety)",
      "Prior to prescribing controlled substances (benzodiazepines, stimulants)",
      "Unexplained psychiatric symptom exacerbation",
    ],
    boardRecallTips: [
      "UDS detection windows: alcohol 7–12h; THC chronic use up to 30 days; cocaine metabolites 2–4 days; opioids 2–4 days; PCP 7–14 days; benzos 2–4 days (longer for long-acting)",
      "False positives: ibuprofen → cannabinoids; rifampin → opioids; quinolones → opioids; poppy seeds → opioids; sertraline/venlafaxine → phencyclidine (PCP)",
      "Confirm positive immunoassay with GC-MS (gold standard)",
      "PEth = most specific alcohol biomarker (3–4 week detection window)",
      "Stimulant psychosis (cocaine/meth): resolve 24–72h with abstinence; treat agitation with benzos",
    ],
  },
];

export const behavioralMedicineImaging: ImagingFinding[] = [
  {
    id: "bm-img-ct-head-psychiatric",
    name: "CT Head (Non-contrast) in Psychiatric Emergencies",
    rotationSlug: "behavioral-medicine",
    modality: "CT",
    region: "Head/Brain",
    indication:
      "CT head is indicated in psychiatric emergencies to rule out organic (medical) causes of psychiatric symptoms. NOT routinely performed in stable, established psychiatric patients. Indications: new-onset psychosis in patient > 40 years old, new focal neurological deficits, altered mental status with unknown cause, suspected head trauma, first-time seizure, or acute change in established psychiatric patient.",
    normalFindings:
      "Symmetric cerebral cortex and subcortical structures, normal gray-white matter differentiation, no hyperdense lesions (no acute blood), no midline shift, normal ventricle size, patent sulci.",
    abnormalFindings: [
      {
        finding: "Hyperdense (bright white) lesion in brain parenchyma",
        interpretation: "Acute intracranial hemorrhage (ICH). Cause of acute confusion, personality change, agitation, or altered mental status. Emergent neurosurgery consultation.",
      },
      {
        finding: "Hypodense (dark) area in specific vascular territory",
        interpretation: "Acute ischemic stroke. Can cause acute behavioral changes, personality change, agitation, or depression depending on location. Emergent neurology consultation.",
      },
      {
        finding: "Enlarged ventricles with cortical atrophy (ex vacuo changes)",
        interpretation: "Cerebral atrophy consistent with neurodegenerative disease (Alzheimer's, frontotemporal dementia). Correlates with cognitive decline. Not diagnostic alone — clinical correlation required.",
      },
      {
        finding: "Mass lesion with surrounding edema and midline shift",
        interpretation: "Brain tumor (primary or metastatic) — can cause personality change, cognitive decline, psychosis, or mood symptoms. Emergent neurology/neurosurgery consultation. New-onset psychiatric symptoms in adults > 40 require this to be ruled out.",
      },
      {
        finding: "Frontal and temporal lobe atrophy disproportionate to parietal/occipital",
        interpretation: "Frontotemporal dementia (FTD) pattern — behavioral variant presents with personality change, disinhibition, impulsivity, apathy. Younger onset (50s-60s) than Alzheimer's.",
      },
    ],
    clinicalPearls: [
      "CT head is NOT routinely indicated for stable, established psychiatric diagnoses",
      "New-onset psychosis in patient > 40 years old ALWAYS warrants neuroimaging to rule out organic cause",
      "MRI is superior to CT for detecting subtle brain lesions, white matter changes, limbic encephalitis, and small strokes — order MRI when CT is negative but clinical suspicion remains",
      "Limbic encephalitis (autoimmune — anti-NMDAR, anti-LGI1): presents as new-onset psychosis in young person, may have normal CT — order MRI brain and CSF autoimmune antibody panel",
      "Wernicke's encephalopathy: mammillary body enhancement on MRI (not CT); treat empirically with IV thiamine before glucose in alcoholic patients",
    ],
    boardRecallTips: [
      "New-onset psychosis > 40 years = get CT head (rule out mass, stroke, bleed)",
      "CT shows: hyperdense = acute blood; hypodense = stroke/infarct",
      "MRI > CT for: limbic encephalitis, Wernicke's (mammillary body), white matter disease, small strokes",
      "Anti-NMDAR encephalitis: young female + psychosis + seizures + autonomic instability → CSF antibodies + ovarian teratoma",
      "Frontotemporal dementia: frontal/temporal atrophy → personality change + disinhibition (not memory loss initially)",
    ],
  },
  {
    id: "bm-img-eeg-psychiatric",
    name: "Electroencephalogram (EEG) in Psychiatric Presentations",
    rotationSlug: "behavioral-medicine",
    modality: "EEG",
    region: "Brain (electrical activity)",
    indication:
      "EEG measures brain electrical activity. In psychiatry, EEG is used to rule out seizure disorder (especially temporal lobe epilepsy — TLE, which can present with psychiatric symptoms), diagnose non-convulsive status epilepticus (NCSE) in patients with unexplained altered mental status, evaluate for encephalopathy, and distinguish organic vs. functional symptoms.",
    normalFindings:
      "Alpha rhythm (8–13 Hz) dominant in awake, relaxed state with eyes closed. Beta activity (> 13 Hz) with eyes open. Sleep stages: stage N1 (theta), N2 (sleep spindles, K-complexes), N3 (slow wave/delta). Normal variants documented.",
    abnormalFindings: [
      {
        finding: "Focal spike and wave discharges from temporal lobe",
        interpretation: "Temporal lobe epilepsy (TLE). Can present with psychiatric symptoms: episodic fear, déjà vu, jamais vu, olfactory hallucinations, automatisms, post-ictal psychosis, interictal personality changes (religiosity, hypergraphia, hyposexuality — Geschwind syndrome).",
      },
      {
        finding: "Generalized 3 Hz spike-and-wave discharges",
        interpretation: "Absence seizures (childhood absence epilepsy). Presents as staring spells with brief lapses of consciousness — can be mistaken for inattentive ADHD or dissociation.",
      },
      {
        finding: "Non-convulsive status epilepticus (NCSE) pattern",
        interpretation: "NCSE: continuous or near-continuous seizure activity WITHOUT convulsions. Presents as altered mental status, confusion, or nonresponsiveness — can mimic psychiatric catatonia. Emergent treatment required (benzodiazepines + antiepileptic).",
      },
      {
        finding: "Diffuse slowing (theta/delta predominance in awake patient)",
        interpretation: "Encephalopathy pattern — metabolic (hepatic, uremic, hypoxic), toxic (medication effect, drug intoxication), or infectious. Correlates with delirium clinically.",
      },
      {
        finding: "Periodic lateralized epileptiform discharges (PLEDs)",
        interpretation: "Focal brain injury (stroke, abscess, encephalitis, tumor) — localizes the lesion. Can be seen in herpes simplex encephalitis (HSE) with temporal lobe periodicity.",
      },
    ],
    clinicalPearls: [
      "Temporal lobe epilepsy is the great psychiatric mimicker — it can present with psychosis, mood disorders, anxiety, or personality change",
      "Non-convulsive status epilepticus (NCSE) must be considered in any patient with unexplained persistent altered mental status — EEG is required to diagnose it",
      "Absence seizures vs. ADHD: absence = sudden onset/offset, eyes may deviate, EEG abnormal; ADHD = persistent, context-dependent, EEG normal",
      "Post-ictal psychosis (TLE): brief lucid interval after seizure → frank psychosis → spontaneous resolution. DO NOT give long-term antipsychotics without confirming primary psychotic disorder",
      "Anti-NMDAR receptor encephalitis: EEG often shows extreme delta brush pattern in severe cases",
    ],
    boardRecallTips: [
      "TLE psychiatric symptoms: episodic fear, olfactory hallucinations, déjà vu, post-ictal psychosis",
      "Absence seizures (3 Hz spike-wave) = staring spells → distinguish from ADHD/dissociation",
      "NCSE = seizure without convulsions → altered mental status → emergent EEG + treat",
      "Diffuse EEG slowing = metabolic encephalopathy (correlates with delirium)",
      "Herpes encephalitis: temporal lobe PLEDs + CSF pleocytosis + RBCs → acyclovir immediately",
    ],
  },
];
