import type { DifferentialSet } from "@/types";

export const behavioralMedicineDifferentials: DifferentialSet[] = [
  {
    id: "bm-diff-depression",
    chiefComplaint: "Depressed Mood / Low Energy / Anhedonia",
    rotationSlug: "behavioral-medicine",
    differentials: [
      {
        condition: "Major Depressive Disorder (MDD)",
        likelihood: "common",
        distinguishingFeatures:
          "Persistent depressed mood OR anhedonia ≥ 2 weeks + ≥ 4 additional SIG E CAPS symptoms. No manic/hypomanic episodes. Not substance-induced or due to medical condition. PHQ-9 score ≥ 10.",
        mustNotMiss: false,
        workup: ["PHQ-9 depression scale", "TSH (rule out hypothyroidism)", "CBC (rule out anemia)", "BMP", "Urine drug screen", "Vitamin B12 and folate"],
      },
      {
        condition: "Bipolar Disorder (Depressive Phase)",
        likelihood: "common",
        distinguishingFeatures:
          "Depressive episode identical to MDD BUT patient has history of manic (Bipolar I) or hypomanic (Bipolar II) episodes. Ask about: prior periods of decreased sleep without fatigue, grandiosity, impulsivity, spending sprees, hypersexuality. Misdiagnosed as MDD in 40% of cases for years. CRITICAL: antidepressants without mood stabilizer can trigger mania in bipolar disorder.",
        mustNotMiss: true,
        workup: ["MDQ (Mood Disorder Questionnaire) — screening tool", "Thorough psychiatric history including hypomanic symptoms", "Family history of bipolar disorder"],
      },
      {
        condition: "Hypothyroidism",
        likelihood: "common",
        distinguishingFeatures:
          "Can present identically to MDD: fatigue, low mood, weight gain, cognitive slowing, constipation, cold intolerance, dry skin, hair loss. TSH will be elevated (> 4.0 mIU/L). Treat hypothyroidism FIRST — psychiatric symptoms often resolve completely.",
        mustNotMiss: true,
        workup: ["TSH (first-line)", "Free T4 if TSH abnormal", "Anti-TPO antibodies (Hashimoto's)"],
      },
      {
        condition: "Persistent Depressive Disorder (Dysthymia)",
        likelihood: "common",
        distinguishingFeatures:
          "Depressed mood for ≥ 2 YEARS (≥ 1 year in children), with at least 2 of: poor appetite/overeating, insomnia/hypersomnia, fatigue, low self-esteem, poor concentration, hopelessness. Less severe than MDD but chronic. Can have 'double depression' (MDD episode superimposed on dysthymia).",
        mustNotMiss: false,
        workup: ["PHQ-9 at baseline", "Rule out medical causes (TSH, CBC)", "Longitudinal history essential"],
      },
      {
        condition: "Adjustment Disorder with Depressed Mood",
        likelihood: "common",
        distinguishingFeatures:
          "Emotional/behavioral symptoms in response to identifiable stressor within 3 months. Does NOT meet full criteria for MDD. Symptoms resolve within 6 months of stressor removal. Do not over-medicalize — therapy is primary treatment.",
        mustNotMiss: false,
        workup: ["Clinical diagnosis", "Rule out MDD if symptoms severe or prolonged"],
      },
      {
        condition: "Substance-Induced Depressive Disorder",
        likelihood: "common",
        distinguishingFeatures:
          "Depressive symptoms directly caused by substance use or withdrawal. ALCOHOL is the most common substance causing depression (also a depressant, worsens MDD). Cocaine/stimulant withdrawal causes profound depression. Opioid withdrawal causes dysphoria. Symptoms should improve with sobriety.",
        mustNotMiss: false,
        workup: ["Urine drug screen", "Alcohol use assessment (AUDIT-C)", "CBC/LFTs (chronic alcohol use)"],
      },
      {
        condition: "Grief / Bereavement",
        likelihood: "common",
        distinguishingFeatures:
          "Normal grief after loss can include sadness, sleep disturbance, and appetite changes. DSM-5 eliminated the 'bereavement exclusion' — MDD CAN be diagnosed in bereaved patients if full criteria met. Distinguish: grief = waves of sadness, preserved self-esteem, thoughts center on the deceased; MDD = persistent hopelessness, worthlessness, pervasive anhedonia.",
        mustNotMiss: false,
        workup: ["PHQ-9 if meeting MDD criteria", "Risk stratification for suicidality"],
      },
    ],
    keyPearls: [
      "ALWAYS screen for manic episodes before diagnosing MDD — bipolar disorder treated with antidepressant monotherapy can cause manic switch",
      "ALWAYS check TSH in new-onset depression — hypothyroidism is a reversible, common mimic",
      "PHQ-9 ≥ 10 = moderate depression requiring treatment; ≥ 20 = severe (consider hospitalization if safety concerns)",
      "Suicidality assessment is MANDATORY in all depressed patients — use C-SSRS at every visit",
    ],
  },
  {
    id: "bm-diff-psychosis",
    chiefComplaint: "New-Onset Psychosis (Hallucinations, Delusions, Disorganized Behavior)",
    rotationSlug: "behavioral-medicine",
    differentials: [
      {
        condition: "Schizophrenia",
        likelihood: "common",
        distinguishingFeatures:
          "Positive symptoms (hallucinations — auditory most common, delusions, disorganized speech/behavior) + negative symptoms (flat affect, alogia, avolition, anhedonia) for ≥ 6 months. Prodrome precedes psychosis by months-years. Age of onset: men 18–25, women 25–35. Must rule out all organic causes first.",
        mustNotMiss: false,
        workup: ["Rule out organic causes first (see below)", "CT head or MRI brain", "Urine drug screen", "TSH, CBC, CMP, LFTs", "HIV, syphilis (RPR)", "B12, folate"],
      },
      {
        condition: "Substance-Induced Psychotic Disorder",
        likelihood: "common",
        distinguishingFeatures:
          "Cannabis (THC) is the most common cause of substance-induced psychosis, especially with high-potency products. Cocaine, methamphetamine, and PCP can cause acute psychosis indistinguishable from schizophrenia. Symptoms typically resolve within 24–72 hours of abstinence (cannabis can last weeks). UDS is essential.",
        mustNotMiss: true,
        workup: ["Urine drug screen (mandatory in ALL first-episode psychosis)", "Quantitative blood THC if available", "Blood alcohol level"],
      },
      {
        condition: "Delirium",
        likelihood: "common",
        distinguishingFeatures:
          "Acute onset + fluctuating course + inattention. Visual hallucinations more common than auditory. Disoriented. Identifiable medical cause (infection, metabolic, medication, hypoxia). CAM positive. Distinguish from schizophrenia: delirium = acute, fluctuating, inattention present; schizophrenia = subacute onset, full consciousness, predominantly auditory hallucinations.",
        mustNotMiss: true,
        workup: ["CAM assessment", "CBC, CMP, LFTs, TSH, glucose", "UA and urine culture (infection)", "Chest X-ray", "Blood cultures if febrile", "CT head if acute onset", "Review all medications"],
      },
      {
        condition: "Bipolar I Disorder with Psychotic Features",
        likelihood: "common",
        distinguishingFeatures:
          "Psychotic features (mood-congruent delusions, hallucinations) occurring during a manic episode. Pressured speech, flight of ideas, decreased sleep, grandiosity. Psychosis resolves with mood episode. History of mood episodes essential. YMRS (Young Mania Rating Scale) elevated.",
        mustNotMiss: false,
        workup: ["MDQ screening", "Longitudinal mood history", "Family history", "Drug screen"],
      },
      {
        condition: "Anti-NMDAR Receptor Encephalitis",
        likelihood: "rare",
        distinguishingFeatures:
          "Young female (peak) with rapid-onset psychiatric symptoms (psychosis, agitation, bizarre behavior) PLUS neurological symptoms: seizures, autonomic instability, movement disorders (orofacial dyskinesias). MUST NOT MISS — treatable if caught early. 50% have ovarian teratoma.",
        mustNotMiss: true,
        workup: ["CSF: anti-NMDAR antibodies (most sensitive)", "Serum anti-NMDAR antibodies", "MRI brain with FLAIR", "EEG (extreme delta brush pattern)", "CT pelvis or transvaginal US for teratoma", "Pelvic/abdominal MRI"],
      },
      {
        condition: "Brief Psychotic Disorder",
        likelihood: "uncommon",
        distinguishingFeatures:
          "Sudden onset of psychotic symptoms lasting > 1 day but < 1 month, with full return to baseline. Often triggered by severe stress ('reactive psychosis'). Favorable prognosis if truly brief.",
        mustNotMiss: false,
        workup: ["Organic workup to rule out medical/substance cause", "Monitor course — diagnosis requires full remission within 1 month"],
      },
      {
        condition: "Temporal Lobe Epilepsy (TLE) with Interictal Psychosis",
        likelihood: "rare",
        distinguishingFeatures:
          "TLE can cause episodic psychiatric symptoms: pre-ictal fear, olfactory hallucinations, déjà vu, post-ictal psychosis. Interictal psychosis: chronic psychosis between seizures resembling schizophrenia. EEG shows temporal lobe foci. Anti-epileptic treatment may resolve psychiatric symptoms.",
        mustNotMiss: true,
        workup: ["EEG (routine + sleep-deprived)", "MRI brain (hippocampal sclerosis)", "Ambulatory EEG if episodic symptoms"],
      },
    ],
    keyPearls: [
      "EVERY first-episode psychosis requires medical workup to rule out organic cause before diagnosing primary psychiatric disorder",
      "Anti-NMDAR encephalitis presents as acute psychiatric illness — test FIRST in young patients with rapid-onset psychosis + neurological features",
      "Cannabis is the #1 substance-induced psychosis cause — always order UDS",
      "Delirium causes visual hallucinations predominantly; schizophrenia causes auditory hallucinations predominantly",
      "Age of onset clue: schizophrenia men peak 18–25; women 25–35; late-onset (> 45) = suspect organic or affective cause",
    ],
  },
  {
    id: "bm-diff-anxiety",
    chiefComplaint: "Anxiety / Panic / Excessive Worry",
    rotationSlug: "behavioral-medicine",
    differentials: [
      {
        condition: "Generalized Anxiety Disorder (GAD)",
        likelihood: "common",
        distinguishingFeatures:
          "Excessive, uncontrollable worry about multiple life domains ≥ 6 months + ≥ 3 somatic symptoms (muscle tension, fatigue, sleep disturbance, concentration difficulty, restlessness, irritability). GAD-7 ≥ 10. Not better explained by another disorder.",
        mustNotMiss: false,
        workup: ["GAD-7 scale", "TSH (rule out hyperthyroidism)", "Urine drug screen (stimulants)", "CBC (anemia)"],
      },
      {
        condition: "Panic Disorder",
        likelihood: "common",
        distinguishingFeatures:
          "Recurrent UNEXPECTED panic attacks: 4+ symptoms peaking within 10 minutes (palpitations, chest pain, dyspnea, dizziness, paresthesias, chills, sweating, depersonalization, fear of dying/losing control). PLUS persistent worry about having more attacks OR significant behavioral change (agoraphobia). Must rule out cardiac and pulmonary causes of symptoms.",
        mustNotMiss: false,
        workup: ["ECG (rule out arrhythmia)", "TSH", "Holter monitor if palpitations are prominent", "Consider echocardiogram (MVP)"],
      },
      {
        condition: "Hyperthyroidism",
        likelihood: "common",
        distinguishingFeatures:
          "Can mimic GAD and panic disorder exactly: anxiety, palpitations, tremor, heat intolerance, weight loss, diarrhea, insomnia. TSH will be suppressed. Graves' disease: exophthalmos, pretibial myxedema. Treat hyperthyroidism first.",
        mustNotMiss: true,
        workup: ["TSH (first-line)", "Free T4", "Free T3 (if TSH suppressed + normal T4 = T3 toxicosis)", "Thyroid antibodies (anti-TPO, anti-TSH receptor for Graves')"],
      },
      {
        condition: "Cardiac Arrhythmia",
        likelihood: "common",
        distinguishingFeatures:
          "Palpitations, racing heart, chest discomfort, lightheadedness — can trigger panic-like attacks. SVT, WPW, atrial flutter. Must rule out cardiac cause before psychiatric diagnosis. ECG and Holter monitor are essential for episodic palpitations.",
        mustNotMiss: true,
        workup: ["12-lead ECG", "Holter monitor × 24–48h (or event monitor for infrequent episodes)", "Echocardiogram if structural heart disease suspected"],
      },
      {
        condition: "Pheochromocytoma",
        likelihood: "rare",
        distinguishingFeatures:
          "Classic triad: episodic headache + diaphoresis + hypertension. Can cause panic-like episodes. Think of it when panic attacks are associated with severe hypertension, weight loss, or pallor (not flushing). 'Rule of 10s' — 10% bilateral, 10% extra-adrenal, 10% malignant.",
        mustNotMiss: true,
        workup: ["24h urine fractionated metanephrines and catecholamines (gold standard)", "Plasma free metanephrines (sensitive)", "CT or MRI adrenal glands if biochemically confirmed"],
      },
      {
        condition: "Social Anxiety Disorder",
        likelihood: "common",
        distinguishingFeatures:
          "Marked fear/anxiety in social situations where exposed to possible scrutiny by others. Physical symptoms: blushing, trembling, sweating. Avoidance of social situations. Must be disproportionate to actual threat. Duration ≥ 6 months.",
        mustNotMiss: false,
        workup: ["LSAS (Liebowitz Social Anxiety Scale)", "Rule out specific phobia vs. agoraphobia"],
      },
      {
        condition: "PTSD",
        likelihood: "common",
        distinguishingFeatures:
          "Anxiety following traumatic event exposure. Four clusters: re-experiencing (flashbacks, nightmares), avoidance (of trauma reminders), negative cognitions/mood (guilt, estrangement), hyperarousal (hypervigilance, exaggerated startle, insomnia). PCL-5 ≥ 33 = probable PTSD.",
        mustNotMiss: false,
        workup: ["PCL-5 screening", "PHQ-9 (comorbid depression in > 50%)", "Columbia C-SSRS (high suicide risk in PTSD)"],
      },
    ],
    keyPearls: [
      "Always rule out MEDICAL causes before diagnosing primary anxiety: TSH (hyperthyroidism), ECG (arrhythmia), glucose (hypoglycemia), UDS (stimulants)",
      "Pheochromocytoma is rare but MUST NOT MISS — 24h urine metanephrines if hypertension present with panic episodes",
      "SSRIs/SNRIs may worsen anxiety in the first 1–2 weeks before improving it — warn patients",
      "Benzodiazepines are effective for acute anxiety but carry dependence risk — use for short-term or PRN only",
      "Caffeine is a major anxiogenic — counsel all patients on caffeine reduction",
    ],
  },
  {
    id: "bm-diff-mania",
    chiefComplaint: "Elevated / Expansive Mood, Decreased Sleep, Grandiosity",
    rotationSlug: "behavioral-medicine",
    differentials: [
      {
        condition: "Bipolar I Disorder — Manic Episode",
        likelihood: "common",
        distinguishingFeatures:
          "Abnormally elevated, expansive, or irritable mood + increased goal-directed activity for ≥ 7 days (or any duration if hospitalized). ≥ 3 DIG FAST symptoms: Distractibility, Insomnia (decreased sleep without fatigue), Grandiosity, Flight of ideas, Activity increase, Speech (pressured), Thoughtlessness (risky behavior). Causes significant impairment or requires hospitalization.",
        mustNotMiss: false,
        workup: ["YMRS (Young Mania Rating Scale)", "Urine drug screen (stimulants)", "TSH (hyperthyroidism)", "CBC, CMP", "CT head (new mania > 40 years old)"],
      },
      {
        condition: "Substance-Induced Manic Episode",
        likelihood: "common",
        distinguishingFeatures:
          "Cocaine, methamphetamine, MDMA, and corticosteroids can all cause manic-like states. Antidepressant-induced mania: if antidepressant given without mood stabilizer in undiagnosed bipolar disorder. Duration of symptoms: stimulant-induced mania resolves with drug clearance.",
        mustNotMiss: true,
        workup: ["Urine drug screen", "Medication review (corticosteroids, stimulants)", "Blood alcohol level"],
      },
      {
        condition: "Hyperthyroidism (Thyroid Storm)",
        likelihood: "uncommon",
        distinguishingFeatures:
          "Hyperthyroidism can cause irritability, decreased sleep, racing thoughts, and even frank psychosis resembling mania. Thyroid storm: extreme hyperthyroidism with fever, tachycardia, cardiovascular collapse. TSH suppressed, T4 markedly elevated.",
        mustNotMiss: true,
        workup: ["TSH (suppressed in hyperthyroidism)", "Free T4 and T3"],
      },
      {
        condition: "Frontotemporal Dementia (Behavioral Variant — bvFTD)",
        likelihood: "uncommon",
        distinguishingFeatures:
          "Disinhibition, impulsivity, perseveration, hypersexuality, and inappropriate social behavior can mimic mania. However: age of onset typically 50s-60s, gradual progression, executive dysfunction, and aphasia. MRI shows frontal/temporal atrophy.",
        mustNotMiss: true,
        workup: ["MRI brain (frontal/temporal atrophy)", "Neuropsychological testing", "FDG-PET (hypometabolism in frontal/temporal lobes)"],
      },
      {
        condition: "Corticosteroid-Induced Mania",
        likelihood: "common",
        distinguishingFeatures:
          "High-dose corticosteroids (prednisone > 40 mg/day equivalent) can cause mood episodes — mania/hypomania most common, but also depression and psychosis. Dose-dependent. Resolves with dose reduction or discontinuation.",
        mustNotMiss: false,
        workup: ["Medication review", "Timing correlation with steroid initiation"],
      },
      {
        condition: "Secondary Mania (Medical Cause)",
        likelihood: "uncommon",
        distinguishingFeatures:
          "Mania due to CNS lesions (right hemisphere stroke, TBI, MS plaques in limbic regions), HIV encephalopathy, syphilis (neurosyphilis — 'great imitator'), or metabolic causes. Consider in any patient with new-onset mania > 40 years or without family history.",
        mustNotMiss: true,
        workup: ["MRI brain", "HIV test", "RPR/VDRL (syphilis)", "LP if CNS infection suspected", "B12"],
      },
    ],
    keyPearls: [
      "DIG FAST mnemonic for mania: Distractibility, Insomnia (decreased need for sleep), Grandiosity, Flight of ideas, Activity increase, Speech (pressured), Thoughtlessness (risky behavior)",
      "New-onset mania in patient > 40 years without psychiatric history — assume organic cause until proven otherwise",
      "Steroid-induced mania: reduce dose; if severe, add valproate or atypical antipsychotic",
      "Antidepressant monotherapy in undiagnosed bipolar disorder = risk of manic switch (5–15%)",
      "Bipolar I mania requires hospitalization if patient is dangerous, unable to care for self, or psychotic",
    ],
  },
];
