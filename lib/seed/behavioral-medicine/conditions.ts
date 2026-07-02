import type { Condition } from "@/types";

export const behavioralMedicineConditions: Condition[] = [
  {
    id: "bm-cond-01",
    name: "Major Depressive Disorder",
    icdCode: "F32.1",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Mood Disorders",
    definition:
      "A mood disorder characterized by persistent depressed mood or loss of interest/pleasure lasting at least 2 weeks, causing significant functional impairment, not attributable to substances or another medical condition.",
    diagnosticCriteria:
      "DSM-5: Five or more of the following during the same 2-week period, representing a change from baseline; at least one must be (1) depressed mood or (2) anhedonia: (1) Depressed mood most of the day, nearly every day; (2) Markedly diminished interest or pleasure in all/almost all activities; (3) Significant weight loss/gain (>5% body weight in 1 month) or decrease/increase in appetite; (4) Insomnia or hypersomnia; (5) Psychomotor agitation or retardation observable by others; (6) Fatigue or loss of energy; (7) Feelings of worthlessness or excessive/inappropriate guilt; (8) Diminished ability to think, concentrate, or indecisiveness; (9) Recurrent thoughts of death, suicidal ideation, or suicide attempt. Criteria B: Symptoms cause clinically significant distress or functional impairment. Criteria C: Not due to substances or medical condition. Criteria D: Not better explained by psychotic disorder. Criteria E: No history of manic/hypomanic episode.",
    presentation: {
      chiefComplaint: [
        "I feel sad all the time",
        "I have no energy",
        "I can't enjoy anything anymore",
        "I can't sleep / I sleep too much",
        "I feel worthless",
      ],
      associatedSymptoms: [
        "Anhedonia",
        "Psychomotor retardation or agitation",
        "Concentration difficulties",
        "Appetite changes with weight loss or gain",
        "Recurrent thoughts of death",
        "Social withdrawal",
        "Somatic complaints (headaches, GI upset)",
      ],
      demographics:
        "Lifetime prevalence ~17%; women affected 2x more than men; peak onset 20s-30s; common in those with chronic illness, trauma history, family history of depression.",
    },
    distinguishingFeatures:
      "Persistent low mood AND anhedonia lasting ≥2 weeks distinguishes MDD from normal grief or adjustment disorder. Absence of manic/hypomanic episodes distinguishes from bipolar disorder. Rule out hypothyroidism, anemia, and substance use as organic causes.",
    redFlags: [
      "Active suicidal ideation with plan or intent",
      "Psychotic features (hallucinations, delusions)",
      "Inability to care for self or dependents",
      "Rapid weight loss with refusal to eat",
      "New-onset depression in elderly (rule out dementia, malignancy)",
    ],
    mnemonics: [
      {
        name: "SIG E CAPS",
        content:
          "Sleep (insomnia or hypersomnia), Interest (anhedonia), Guilt (worthlessness), Energy (fatigue), Concentration (difficulty), Appetite (increased or decreased), Psychomotor (agitation or retardation), Suicidality. Need 5/9 symptoms for ≥2 weeks.",
      },
      {
        name: "Depressed MAPS",
        content:
          "Mood depressed, Anhedonia, Psychomotor changes, Sleep changes — the 4 hallmark features to anchor your assessment.",
      },
    ],
    pimpingQuestions: [
      "What neurotransmitter systems are implicated in MDD and what is the monoamine hypothesis?",
      "How does the HPA axis dysfunction contribute to MDD, and what is the significance of the dexamethasone suppression test?",
      "What is the difference between MDD single episode (F32) and recurrent MDD (F33)?",
      "How many weeks of adequate SSRI trial at therapeutic dose before declaring non-response?",
      "What distinguishes MDD with psychotic features from schizoaffective disorder?",
      "Name three medical conditions that must be ruled out before diagnosing MDD.",
    ],
  },
  {
    id: "bm-cond-02",
    name: "Generalized Anxiety Disorder",
    icdCode: "F41.1",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Anxiety Disorders",
    definition:
      "A chronic anxiety disorder characterized by excessive, uncontrollable worry about multiple domains of life (work, health, family, finances) occurring more days than not for at least 6 months, associated with somatic symptoms and functional impairment.",
    diagnosticCriteria:
      "DSM-5 Criteria: (A) Excessive anxiety and worry about multiple events/activities, occurring more days than not for ≥6 months. (B) Difficulty controlling the worry. (C) Three or more of the following (only one required in children): (1) restlessness or feeling keyed up/on edge, (2) easily fatigued, (3) difficulty concentrating or mind going blank, (4) irritability, (5) muscle tension, (6) sleep disturbance. (D) Clinically significant distress or functional impairment. (E) Not attributable to substances or medical condition. (F) Not better explained by another mental disorder.",
    presentation: {
      chiefComplaint: [
        "I worry about everything all the time",
        "I can't relax",
        "My muscles are always tense",
        "I'm always tired but can't sleep",
        "My mind races constantly",
      ],
      associatedSymptoms: [
        "Muscle tension",
        "Fatigue",
        "Irritability",
        "Sleep disturbance (difficulty falling or staying asleep)",
        "Headaches",
        "GI complaints (nausea, diarrhea, IBS-like symptoms)",
        "Difficulty concentrating",
      ],
      demographics:
        "Lifetime prevalence ~5.7%; female:male ratio 2:1; often begins in young adulthood; commonly comorbid with MDD and other anxiety disorders.",
    },
    distinguishingFeatures:
      "Worry is pervasive and covers multiple life domains (not one specific trigger as in phobias). No discrete panic attacks (as in panic disorder). No obsessions/compulsions (as in OCD). Worry is ego-dystonic and difficult to control. Somatic symptoms of chronic tension are prominent.",
    redFlags: [
      "Comorbid depression with suicidal ideation",
      "Panic attacks suggesting panic disorder",
      "Cardiac palpitations — rule out arrhythmia",
      "Weight loss — rule out hyperthyroidism or malignancy",
      "Sudden onset in older adult — rule out organic cause",
    ],
    mnemonics: [
      {
        name: "RESTIM",
        content:
          "Restlessness, Energy (fatigue), Sleep disturbance, Tension (muscle), Irritability, Mind going blank — the 6 associated symptoms of GAD (need 3 of 6 in adults).",
      },
    ],
    pimpingQuestions: [
      "What is the role of the amygdala and prefrontal cortex in anxiety regulation?",
      "How does GAD differ from normal worry on a neuroscientific basis?",
      "What is the first-line pharmacotherapy for GAD and what is its mechanism of action?",
      "Why is long-term benzodiazepine use avoided in GAD, and what is the risk?",
      "Name the cognitive distortions most commonly seen in GAD patients.",
      "How does hyperthyroidism mimic GAD and what lab would you order?",
    ],
  },
  {
    id: "bm-cond-03",
    name: "Panic Disorder",
    icdCode: "F41.0",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Anxiety Disorders",
    definition:
      "A disorder characterized by recurrent unexpected panic attacks — abrupt surges of intense fear or discomfort reaching a peak within minutes — followed by persistent concern about future attacks or maladaptive behavioral changes lasting at least 1 month.",
    diagnosticCriteria:
      "DSM-5: (A) Recurrent unexpected panic attacks defined as abrupt surge of intense fear with ≥4 of 13 symptoms: palpitations/racing heart, sweating, trembling, shortness of breath, choking sensation, chest pain, nausea/abdominal distress, dizziness/lightheadedness, chills or hot flashes, paresthesias, derealization/depersonalization, fear of losing control, fear of dying. (B) At least one attack followed by ≥1 month of: persistent concern about more attacks or their consequences, OR significant maladaptive behavioral change (agoraphobia, avoidance). (C) Not due to substances or medical condition. (D) Not better explained by another mental disorder.",
    presentation: {
      chiefComplaint: [
        "I thought I was having a heart attack",
        "I suddenly couldn't breathe",
        "I had an episode where I thought I was dying",
        "I'm afraid to go out because it might happen again",
        "My heart races out of nowhere",
      ],
      associatedSymptoms: [
        "Palpitations",
        "Diaphoresis",
        "Dyspnea",
        "Chest tightness or pain",
        "Paresthesias",
        "Derealization or depersonalization",
        "Anticipatory anxiety between attacks",
        "Agoraphobic avoidance",
      ],
      demographics:
        "Lifetime prevalence ~4.7%; 2:1 female predominance; onset typically late adolescence to mid-30s; often presents to ED or cardiology before psychiatric diagnosis.",
    },
    distinguishingFeatures:
      "Attacks are unexpected (not cued by specific trigger) and reach peak intensity within 10 minutes. History of multiple ED visits with negative cardiac workup is classic. Agoraphobia (fear/avoidance of situations where escape is difficult) is a common complication. Distinguish from cardiac arrhythmia, hypoglycemia, pheochromocytoma, and hyperthyroidism.",
    redFlags: [
      "Chest pain with EKG changes — must rule out ACS",
      "Onset after age 45 without prior psychiatric history — suspect organic cause",
      "Diaphoresis, hypertension, headache — rule out pheochromocytoma",
      "Hypoglycemia symptoms — check blood glucose",
      "Agoraphobia with functional impairment requiring intensive treatment",
    ],
    mnemonics: [
      {
        name: "STUDENTS Fear the 3 Cs",
        content:
          "Sweating, Trembling, Unsteady/dizzy, Derealization, Excessive heart rate (palpitations), Numbness (paresthesias), Tight chest, Shortness of breath — Fear of dying, Fear of losing control, Fear of Choking (13 panic attack symptoms).",
      },
    ],
    pimpingQuestions: [
      "What is the role of the locus coeruleus in panic attacks?",
      "How does the noradrenergic system contribute to the autonomic symptoms of panic?",
      "What is the sodium lactate provocation test and what does it demonstrate?",
      "Distinguish between expected (cued) and unexpected panic attacks — why does this matter diagnostically?",
      "What is the first-line treatment for panic disorder (pharmacologic and psychotherapeutic)?",
      "What three medical conditions must be ruled out in a first panic attack presentation?",
    ],
  },
  {
    id: "bm-cond-04",
    name: "Social Anxiety Disorder",
    icdCode: "F40.10",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Anxiety Disorders",
    definition:
      "A marked fear or anxiety about social situations in which the individual may be scrutinized by others, fearing humiliation or embarrassment, leading to avoidance or endured distress and significant functional impairment lasting ≥6 months.",
    diagnosticCriteria:
      "DSM-5: (A) Marked fear/anxiety about social situations with possible scrutiny. (B) Fear of acting in ways that will be negatively evaluated. (C) Social situations nearly always provoke fear/anxiety. (D) Situations are avoided or endured with intense anxiety. (E) Fear is out of proportion to actual threat. (F) Persistent ≥6 months. (G) Clinically significant distress or impairment. (H) Not due to substances or medical condition. (I) Not better explained by another disorder. Specifier: Performance only (if fear restricted to speaking/performing in public).",
    presentation: {
      chiefComplaint: [
        "I'm terrified of being embarrassed in public",
        "I avoid speaking in meetings",
        "I can't eat in front of others",
        "I blush and shake whenever people look at me",
        "I turned down a promotion because of public speaking",
      ],
      associatedSymptoms: [
        "Blushing",
        "Sweating",
        "Trembling",
        "Nausea in social situations",
        "Difficulty making eye contact",
        "Selective mutism in some",
        "Anticipatory anxiety before social events",
      ],
      demographics:
        "Lifetime prevalence ~12.1%; slight female predominance; onset typically in early adolescence (median age 13); often undiagnosed for years; high comorbidity with alcohol use disorder.",
    },
    distinguishingFeatures:
      "Fear is specifically about negative evaluation by others (not about having a panic attack in public as in agoraphobia). Distinct from shyness by degree of functional impairment. Performance-only specifier when fear is limited to public performance. Comorbid alcohol use disorder common as self-medication.",
    redFlags: [
      "Alcohol or substance use as self-medication",
      "Complete social isolation with inability to work",
      "Comorbid depression with suicidal ideation",
      "Onset after head trauma — rule out organic cause",
    ],
    mnemonics: [
      {
        name: "FEAR checklist",
        content:
          "Fear of negative evaluation, Embarrassment as core fear, Avoidance of situations, Recognized as excessive by patient — the core features of Social Anxiety Disorder.",
      },
    ],
    pimpingQuestions: [
      "What is the neurobiological basis for the exaggerated amygdala response in social anxiety?",
      "How does cognitive behavioral therapy (CBT) target the 'catastrophizing' thought patterns in social anxiety?",
      "What SSRI is FDA-approved for social anxiety disorder?",
      "Why is benzodiazepine use particularly risky in patients with social anxiety disorder?",
      "Distinguish social anxiety disorder from avoidant personality disorder.",
    ],
  },
  {
    id: "bm-cond-05",
    name: "Posttraumatic Stress Disorder",
    icdCode: "F43.10",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Trauma and Stressor-Related Disorders",
    definition:
      "A disorder that develops after exposure to actual or threatened death, serious injury, or sexual violence, characterized by intrusion symptoms, avoidance of trauma-related stimuli, negative alterations in cognition/mood, and alterations in arousal/reactivity lasting more than 1 month.",
    diagnosticCriteria:
      "DSM-5 Criterion A: Exposure to actual or threatened death, serious injury, or sexual violence (directly experienced, witnessed, learned about, or repeated exposure to aversive details). Criterion B: ≥1 intrusion symptom (flashbacks, nightmares, distressing memories, psychological/physiological distress to cues). Criterion C: ≥1 avoidance symptom (internal reminders or external reminders). Criterion D: ≥2 negative alterations in cognition/mood (inability to remember aspects of trauma, persistent negative beliefs, distorted blame, persistent negative emotions, diminished interest, detachment, inability to experience positive emotions). Criterion E: ≥2 alterations in arousal/reactivity (irritability/aggression, reckless behavior, hypervigilance, exaggerated startle, concentration problems, sleep disturbance). Criterion F: Duration >1 month. Criterion G: Functional impairment. Criterion H: Not due to substances or medical condition.",
    presentation: {
      chiefComplaint: [
        "I keep having nightmares about what happened",
        "I feel like I'm reliving the trauma",
        "I avoid anything that reminds me of it",
        "I feel numb and detached from everyone",
        "I'm always on edge and can't sleep",
      ],
      associatedSymptoms: [
        "Intrusive flashbacks",
        "Nightmares",
        "Hypervigilance",
        "Exaggerated startle response",
        "Emotional numbing",
        "Dissociation",
        "Guilt or shame",
        "Anger outbursts",
        "Self-destructive behavior",
      ],
      demographics:
        "Lifetime prevalence ~8%; women 2x more likely than men; highest risk in combat veterans, sexual assault survivors, first responders; symptoms may be delayed (delayed expression specifier if full criteria not met until ≥6 months post-trauma).",
    },
    distinguishingFeatures:
      "Requires identifiable traumatic event (Criterion A). The 4 symptom clusters (BCED) must all be present. Distinguish from Acute Stress Disorder (duration <1 month). Flashbacks are unique — patient transiently believes they are re-experiencing the trauma, not just remembering it.",
    redFlags: [
      "Suicidal ideation — PTSD has high suicide risk",
      "Homicidal ideation, particularly in combat veterans",
      "Substance use as self-medication",
      "Psychotic features — rule out comorbid psychosis",
      "Domestic violence or ongoing unsafe situation",
    ],
    mnemonics: [
      {
        name: "PTSD = BCED",
        content:
          "B — Intrusion (flashBacks, nightmares), C — avoidanCe (internal and external cues), E — nEgative cognitions/mood, D — hyperarousal/Dysregulation. All 4 clusters required for diagnosis.",
      },
    ],
    pimpingQuestions: [
      "What is the role of the amygdala and hippocampus in the pathophysiology of PTSD?",
      "What two medications are FDA-approved for PTSD?",
      "What is EMDR and what is its proposed mechanism of action?",
      "Distinguish between Acute Stress Disorder and PTSD by duration criteria.",
      "What is the significance of 'moral injury' as distinct from classical PTSD?",
      "How does the HPA axis dysfunction manifest in PTSD (cortisol levels low or high compared to MDD)?",
    ],
  },
  {
    id: "bm-cond-06",
    name: "Bipolar I Disorder",
    icdCode: "F31.10",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Bipolar and Related Disorders",
    definition:
      "A mood disorder characterized by at least one manic episode (lasting ≥7 days or requiring hospitalization) that is not attributable to substances or another medical/psychiatric condition. Depressive episodes are common but not required for diagnosis.",
    diagnosticCriteria:
      "DSM-5: At least one manic episode. Manic Episode: (A) Distinct period of abnormally elevated, expansive, or irritable mood AND increased goal-directed activity or energy, lasting ≥7 days (or any duration if hospitalization required). (B) ≥3 of the following (4 if mood is only irritable): (1) inflated self-esteem/grandiosity, (2) decreased need for sleep, (3) more talkative/pressured speech, (4) flight of ideas/racing thoughts, (5) distractibility, (6) increased goal-directed activity/psychomotor agitation, (7) excessive involvement in high-risk activities. (C) Marked functional impairment or hospitalization required, or psychotic features. (D) Not due to substances or medical condition.",
    presentation: {
      chiefComplaint: [
        "I haven't slept in days but feel great",
        "I have huge plans and can accomplish anything",
        "My family says I'm not myself",
        "I maxed out my credit cards on things I don't need",
        "My thoughts are racing so fast I can't keep up",
      ],
      associatedSymptoms: [
        "Grandiosity",
        "Pressured speech",
        "Flight of ideas",
        "Decreased need for sleep without fatigue",
        "Hypersexuality",
        "Impulsive spending",
        "Irritability or agitation",
        "Psychotic features in severe mania",
      ],
      demographics:
        "Lifetime prevalence ~1%; equal sex distribution for Bipolar I; onset typically late teens to mid-20s; strong genetic component (heritability ~85%); often misdiagnosed as MDD if hypomanic/manic episode is missed.",
    },
    distinguishingFeatures:
      "Full manic episode (≥7 days, marked impairment, or hospitalization) distinguishes Bipolar I from Bipolar II (hypomania only). Psychotic features during mood episode distinguish from schizoaffective disorder (where psychosis occurs independently of mood). Grandiosity and decreased need for sleep (without fatigue) are hallmark manic features.",
    redFlags: [
      "Psychotic features requiring urgent evaluation",
      "Danger to self or others during manic episode",
      "First manic episode — rule out secondary mania (steroids, thyroid, CNS lesion, substance intoxication)",
      "Rapid cycling (≥4 mood episodes/year) — poor prognosis",
      "Mixed features — increased suicide risk",
    ],
    mnemonics: [
      {
        name: "DIG FAST",
        content:
          "Distractibility, Impulsivity/Irresponsibility (high-risk behaviors), Grandiosity, Flight of ideas, Activity increased (goal-directed), Sleep decreased, Talkativeness (pressured speech) — 7 manic symptoms; need 3 (or 4 if only irritable mood).",
      },
    ],
    pimpingQuestions: [
      "What neurotransmitters are dysregulated in mania vs. depression in bipolar disorder?",
      "Why is prescribing an SSRI monotherapy dangerous in bipolar disorder?",
      "What is kindling theory and how does it explain episode sensitization in bipolar disorder?",
      "What is the lithium therapeutic window and at what level does toxicity occur?",
      "Distinguish Bipolar I, Bipolar II, and Cyclothymia by duration and severity of mood episodes.",
      "What is the role of valproic acid in acute mania vs. maintenance treatment?",
    ],
  },
  {
    id: "bm-cond-07",
    name: "Bipolar II Disorder",
    icdCode: "F31.81",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Bipolar and Related Disorders",
    definition:
      "A mood disorder characterized by at least one hypomanic episode (lasting ≥4 days, not requiring hospitalization, no psychotic features) and at least one major depressive episode, without any full manic episode.",
    diagnosticCriteria:
      "DSM-5: (A) At least one hypomanic episode meeting criteria. (B) At least one major depressive episode. (C) No history of a full manic episode. (D) Not better explained by schizoaffective, schizophrenia, or other psychotic disorders. (E) Clinically significant distress or functional impairment. Hypomanic Episode: Same symptom criteria as mania (DIG FAST) but duration ≥4 days, change is observable by others, no marked impairment, no hospitalization required, no psychotic features.",
    presentation: {
      chiefComplaint: [
        "I get periods where I'm really productive and need less sleep, then crash into deep depression",
        "My depression is my main problem",
        "I feel great for a few days then fall apart for weeks",
        "People say I have mood swings",
      ],
      associatedSymptoms: [
        "Depressive episodes (often longer and more frequent than hypomanic episodes)",
        "Brief periods of elevated mood and productivity",
        "Irritability during hypomania",
        "High-achieving behavior during hypomania mistaken for 'normal'",
        "Suicidal ideation (higher suicide risk than Bipolar I)",
      ],
      demographics:
        "Lifetime prevalence ~1.1%; female predominance; often initially misdiagnosed as MDD; patients frequently present during depressive phase and may not report hypomanic episodes spontaneously.",
    },
    distinguishingFeatures:
      "No full manic episode (distinguishes from Bipolar I). The depressive episodes dominate the clinical picture. Hypomania is often ego-syntonic — patients may not identify it as abnormal. Higher completed suicide rate than Bipolar I due to more time spent in depression. SSRI monotherapy risk of switch to hypomania/mania.",
    redFlags: [
      "Suicidal ideation — particularly high risk in Bipolar II",
      "SSRI monotherapy triggering hypomanic switch",
      "Substance use comorbidity (common)",
      "Missed diagnosis of hypomania leading to inadequate treatment",
    ],
    mnemonics: [
      {
        name: "Bipolar II = Hypo + Depresso",
        content:
          "HYPOmania (4 days, no impairment, no hospitalization) + MDD (2 weeks, impairment) + NO full mania ever = Bipolar II. Remember: Hypo means 'under' — less than full mania.",
      },
    ],
    pimpingQuestions: [
      "What is the minimum duration for a hypomanic episode in DSM-5?",
      "Why do patients with Bipolar II have a higher suicide completion rate than those with Bipolar I?",
      "What is the risk of prescribing an antidepressant without a mood stabilizer in Bipolar II?",
      "How does lamotrigine differ from other mood stabilizers in its spectrum of activity?",
      "What is 'soft bipolar spectrum' and how does it affect clinical decision-making?",
    ],
  },
  {
    id: "bm-cond-08",
    name: "Schizophrenia",
    icdCode: "F20.9",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Schizophrenia Spectrum Disorders",
    definition:
      "A chronic psychotic disorder characterized by positive symptoms (hallucinations, delusions, disorganized speech/behavior), negative symptoms (flat affect, alogia, avolition, anhedonia, asociality), and cognitive dysfunction lasting ≥6 months with ≥1 month of active-phase symptoms, causing significant functional decline.",
    diagnosticCriteria:
      "DSM-5 Criterion A: ≥2 of the following, each present for significant portion of 1 month (at least one must be 1, 2, or 3): (1) Delusions, (2) Hallucinations, (3) Disorganized speech, (4) Grossly disorganized or catatonic behavior, (5) Negative symptoms. Criterion B: Level of functioning markedly below previous level. Criterion C: Duration ≥6 months (including prodrome/residual). Criterion D: Not schizoaffective or mood disorder with psychotic features. Criterion E: Not substances or medical condition. Criterion F: No autism spectrum disorder unless prominent hallucinations/delusions for ≥1 month.",
    presentation: {
      chiefComplaint: [
        "The voices tell me to do things",
        "The government is monitoring me",
        "My thoughts are being broadcast on TV",
        "Someone is controlling my mind",
        "I see things others can't see",
      ],
      associatedSymptoms: [
        "Auditory hallucinations (most common — third-person commentary, command)",
        "Persecutory or referential delusions",
        "Thought insertion, thought broadcasting, thought withdrawal",
        "Flat or blunted affect",
        "Alogia (poverty of speech)",
        "Avolition (lack of motivation)",
        "Cognitive impairment",
        "Social withdrawal",
      ],
      demographics:
        "Lifetime prevalence ~1%; equal sex distribution but men have earlier onset (late teens/early 20s vs. mid-20s in women); strong genetic component; cannabis use is a risk factor; 10x increased suicide risk.",
    },
    distinguishingFeatures:
      "Auditory hallucinations (hearing voices) are most characteristic. Negative symptoms (the 5 As: flat Affect, Alogia, Avolition, Anhedonia, Asociality) cause most long-term disability. Prodromal phase of functional decline before active psychosis is key. Must exclude bipolar disorder with psychotic features, schizoaffective disorder, and substance-induced psychosis.",
    redFlags: [
      "Command auditory hallucinations to harm self or others",
      "Suicidal ideation (10% lifetime suicide rate)",
      "Catatonia requiring urgent intervention",
      "First episode psychosis — requires comprehensive medical workup",
      "Non-adherence to antipsychotics — highest relapse risk factor",
    ],
    mnemonics: [
      {
        name: "5 As of Negative Symptoms",
        content:
          "flat Affect, Alogia (poverty of speech), Avolition (lack of motivation), Anhedonia, Asociality — the 5 negative symptoms of schizophrenia that cause long-term disability.",
      },
      {
        name: "DDSBB",
        content:
          "Delusions, Disorganized speech, disorganized/catatonic Behavior, hallucinations (By ear), Blunted affect/negative symptoms — 5 Criterion A symptoms; need 2, at least one from first 3.",
      },
    ],
    pimpingQuestions: [
      "What is the dopamine hypothesis of schizophrenia and which dopamine pathways are implicated in positive vs. negative symptoms?",
      "What are the 4 dopamine pathways and what are the clinical consequences of antipsychotic blockade in each?",
      "How does the glutamate (NMDA receptor) hypothesis explain negative symptoms and why did it emerge from PCP data?",
      "What is the difference between typical (first-generation) and atypical (second-generation) antipsychotics in receptor binding profiles?",
      "Define and distinguish tardive dyskinesia, akathisia, and acute dystonia.",
      "What is the duration of active-phase symptoms required in Criterion A, and how does this differ from schizophreniform disorder?",
    ],
  },
  {
    id: "bm-cond-09",
    name: "Schizoaffective Disorder",
    icdCode: "F25.0",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Schizophrenia Spectrum Disorders",
    definition:
      "A disorder characterized by psychotic symptoms meeting Criterion A for schizophrenia occurring concurrently with a major mood episode (manic or depressive), where psychotic symptoms must also be present for ≥2 weeks in the absence of mood episodes during the lifetime course.",
    diagnosticCriteria:
      "DSM-5: (A) An uninterrupted period of illness with a major mood episode (MDD or mania) concurrent with Criterion A of schizophrenia. (B) Delusions or hallucinations for ≥2 weeks in the absence of a major mood episode. (C) Major mood episode symptoms present for the majority of the total duration of active and residual portions of illness. (D) Not due to substances or medical condition. Bipolar type: if manic episode is part of presentation. Depressive type: if only MDD.",
    presentation: {
      chiefComplaint: [
        "I hear voices and also get very depressed",
        "I have manic episodes and see things",
        "I can't tell if my mood or the voices are worse",
      ],
      associatedSymptoms: [
        "Persistent psychotic symptoms (hallucinations, delusions)",
        "Concurrent mood episodes (depressive or manic)",
        "Cognitive impairment",
        "Functional decline",
        "Social isolation",
      ],
      demographics:
        "Prevalence ~0.3%; more common in women than men (in contrast to schizophrenia); onset typically in early adulthood; better prognosis than schizophrenia but worse than mood disorders alone.",
    },
    distinguishingFeatures:
      "The key distinction from schizophrenia: mood episode is present for majority of illness duration. Key distinction from bipolar with psychotic features: psychosis must persist for ≥2 weeks WITHOUT mood symptoms. This 2-week criterion is the diagnostic linchpin.",
    redFlags: [
      "Suicidal ideation (elevated risk)",
      "Manic symptoms with impulsive behavior",
      "Non-adherence leading to psychotic relapse",
      "Misdiagnosis as schizophrenia or bipolar disorder leading to inadequate treatment",
    ],
    mnemonics: [
      {
        name: "Schizoaffective = Schizo + Affective TOGETHER, then Schizo ALONE",
        content:
          "Must have psychosis WITH mood episode AND psychosis for ≥2 weeks WITHOUT mood episode. Think: they can exist together AND alone.",
      },
    ],
    pimpingQuestions: [
      "What is the critical 2-week criterion in schizoaffective disorder and why does it matter diagnostically?",
      "How is schizoaffective disorder treated — what agents address both psychosis and mood?",
      "What is the prognosis of schizoaffective disorder compared to schizophrenia and bipolar disorder?",
      "How does clozapine fit into the treatment algorithm for schizoaffective disorder?",
    ],
  },
  {
    id: "bm-cond-10",
    name: "Attention-Deficit/Hyperactivity Disorder (Adult)",
    icdCode: "F90.2",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Neurodevelopmental Disorders",
    definition:
      "A neurodevelopmental disorder characterized by persistent inattention and/or hyperactivity-impulsivity that interferes with functioning, with several symptoms present before age 12, occurring in multiple settings, and not solely due to another disorder.",
    diagnosticCriteria:
      "DSM-5: (A) Inattention: ≥5 symptoms for adults (≥17 years) from list of 9 (or Hyperactivity-Impulsivity: ≥5 symptoms for adults from list of 9). Inattention symptoms: careless mistakes, difficulty sustaining attention, not listening, not following through, disorganization, avoids tasks requiring sustained mental effort, loses things, easily distracted, forgetful. H-I symptoms: fidgeting, leaving seat, inappropriate running/climbing, can't engage quietly, 'on the go', talks excessively, blurts answers, can't wait turn, interrupts others. (B) Symptoms present before age 12. (C) Present in ≥2 settings. (D) Clear functional impairment. (E) Not better explained by another disorder. Specifiers: Predominantly Inattentive, Predominantly Hyperactive-Impulsive, Combined.",
    presentation: {
      chiefComplaint: [
        "I can't focus on anything",
        "I start projects but never finish them",
        "I'm always late and disorganized",
        "I act before thinking",
        "My mind wanders constantly in meetings",
      ],
      associatedSymptoms: [
        "Chronic procrastination",
        "Poor time management",
        "Forgetfulness in daily activities",
        "Emotional dysregulation (often not in DSM but clinically prominent)",
        "Restlessness (more internal in adults vs. physical in children)",
        "Impulsive decision-making",
        "Sleep difficulties",
        "Low frustration tolerance",
      ],
      demographics:
        "Prevalence in adults ~4.4%; male predominance in childhood (3:1), converges in adulthood; often inattentive presentation predominates in adult women; high comorbidity with anxiety, depression, substance use disorders, and learning disabilities.",
    },
    distinguishingFeatures:
      "In adults, hyperactivity manifests more as internal restlessness than observable fidgeting. Must have symptom onset before age 12 (childhood onset required). Inattention is pervasive across settings, not just at work. Distinguish from anxiety-driven inattention, depression with concentration difficulties, and substance intoxication/withdrawal.",
    redFlags: [
      "Stimulant misuse or diversion potential",
      "Comorbid substance use disorder",
      "Cardiovascular risk before prescribing stimulants (check HR, BP, EKG if indicated)",
      "Mania or bipolar disorder mimicking ADHD",
      "Adult onset of symptoms — consider anxiety, sleep disorder, thyroid disease",
    ],
    mnemonics: [
      {
        name: "ADHD Adults = DISOFO",
        content:
          "Difficulty sustaining attention, Impulsivity, Starts tasks but doesn't finish, Organization problems, Forgetfulness, Often distracted — key adult ADHD presentation features.",
      },
    ],
    pimpingQuestions: [
      "What is the role of dopamine and norepinephrine in the prefrontal cortex in ADHD pathophysiology?",
      "Explain the paradox of why stimulants (which increase dopamine) reduce hyperactivity.",
      "What are the DSM-5 symptom count differences between children and adults for diagnosis?",
      "What non-stimulant options exist for ADHD and when are they preferred?",
      "How do you distinguish ADHD from bipolar disorder with racing thoughts?",
      "What cardiovascular screening should be performed before initiating stimulant therapy?",
    ],
  },
  {
    id: "bm-cond-11",
    name: "Borderline Personality Disorder",
    icdCode: "F60.3",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Personality Disorders",
    definition:
      "A personality disorder characterized by a pervasive pattern of instability in interpersonal relationships, self-image, and affect, and marked impulsivity, beginning by early adulthood and present in multiple contexts, causing significant distress or functional impairment.",
    diagnosticCriteria:
      "DSM-5: ≥5 of the following 9 criteria: (1) Frantic efforts to avoid real or imagined abandonment; (2) Pattern of unstable and intense interpersonal relationships alternating between idealization and devaluation (splitting); (3) Identity disturbance (unstable self-image or sense of self); (4) Impulsivity in ≥2 potentially self-damaging areas (spending, sex, substance use, reckless driving, binge eating); (5) Recurrent suicidal behavior, gestures, threats, or self-mutilating behavior; (6) Affective instability due to marked mood reactivity (intense dysphoria, irritability, or anxiety usually lasting hours to days); (7) Chronic feelings of emptiness; (8) Inappropriate, intense anger or difficulty controlling anger; (9) Transient, stress-related paranoid ideation or severe dissociative symptoms.",
    presentation: {
      chiefComplaint: [
        "I can't stand to be alone",
        "People either love me or hate me — there's no in between",
        "I cut myself to feel something",
        "My emotions go from 0 to 100 instantly",
        "I don't know who I am",
      ],
      associatedSymptoms: [
        "Splitting (idealization/devaluation)",
        "Non-suicidal self-injury (NSSI)",
        "Suicidal gestures or threats",
        "Emotional dysregulation",
        "Identity disturbance",
        "Impulsive behaviors",
        "Fear of abandonment",
        "Brief psychotic episodes under stress",
      ],
      demographics:
        "Prevalence ~1.6-5.9%; female predominance in clinical settings (3:1), likely equal in community; high comorbidity with MDD, PTSD, substance use, eating disorders; high rate of childhood trauma/abuse history.",
    },
    distinguishingFeatures:
      "Splitting (alternating idealization and devaluation of others) is pathognomonic. Distinguish from bipolar disorder: mood instability in BPD is reactive to interpersonal events and lasts hours, not days-weeks. NSSI is common but distinct from suicidal intent (though suicide completion rate is ~10%). DBT (dialectical behavior therapy) is the gold-standard treatment.",
    redFlags: [
      "Active suicidal plan or intent (10% lifetime completed suicide)",
      "Acute psychotic break (micro-psychotic episodes under stress)",
      "Comorbid substance use reducing impulse control",
      "Escalating self-harm behavior",
      "Provider countertransference affecting care",
    ],
    mnemonics: [
      {
        name: "I DESPAIRR",
        content:
          "Impulsivity, Dissociation (stress-related), Emptiness (chronic), Suicidal/self-harm behavior, Paranoia (stress-related), Abandonment fear, Identity disturbance, Relationships (unstable, intense), Rage (inappropriate anger) — 9 DSM-5 BPD criteria.",
      },
    ],
    pimpingQuestions: [
      "What is dialectical behavior therapy (DBT) and what are its four skill modules?",
      "What is the biosocial theory of BPD proposed by Marsha Linehan?",
      "Distinguish NSSI from suicidal behavior — why does this distinction matter clinically?",
      "What is 'splitting' and how does it manifest in a clinical setting (including toward the treatment team)?",
      "What is the role of serotonin dysfunction in BPD impulsivity?",
    ],
  },
  {
    id: "bm-cond-12",
    name: "Obsessive-Compulsive Disorder",
    icdCode: "F42.2",
    rotation: "behavioral-medicine",
    category: "Psychiatric / OCD and Related Disorders",
    definition:
      "A disorder characterized by the presence of obsessions (recurrent, persistent, intrusive thoughts/urges/images that cause distress) and/or compulsions (repetitive behaviors or mental acts performed to reduce distress), which are time-consuming (>1 hour/day) or cause significant functional impairment.",
    diagnosticCriteria:
      "DSM-5: (A) Presence of obsessions, compulsions, or both. Obsessions: (1) Recurrent, persistent thoughts/urges/images experienced as intrusive and unwanted causing anxiety/distress; (2) Person attempts to ignore/suppress or neutralize with other thought or action. Compulsions: (1) Repetitive behaviors or mental acts felt driven to perform in response to obsession or rigid rules; (2) Aimed at preventing distress or feared event, but not connected in realistic way or excessive. (B) Obsessions/compulsions are time-consuming (>1 hour/day) or cause significant distress/impairment. (C) Not due to substances or medical condition. (D) Not better explained by another disorder. Insight specifier: good/fair insight, poor insight, absent insight/delusional beliefs.",
    presentation: {
      chiefComplaint: [
        "I wash my hands hundreds of times a day",
        "I can't leave the house without checking the locks 20 times",
        "I have horrible thoughts I can't stop",
        "I have to count or something bad will happen",
        "I spend hours arranging things perfectly",
      ],
      associatedSymptoms: [
        "Contamination fears with washing/cleaning compulsions",
        "Harm obsessions (fear of hurting others)",
        "Symmetry/ordering obsessions",
        "Hoarding behavior",
        "Ego-dystonic intrusive thoughts (sexual, religious, aggressive)",
        "Depression secondary to OCD burden",
        "Avoidance of triggers",
      ],
      demographics:
        "Lifetime prevalence ~2.3%; equal sex distribution in adults; onset bimodal (early teens in males, early adulthood in females); strongly heritable; often delayed diagnosis (~17 years from onset to treatment).",
    },
    distinguishingFeatures:
      "Obsessions are ego-dystonic (unwanted, distressing, recognized as excessive) — distinguishes OCD from OCD personality disorder (OCPD) where traits are ego-syntonic. Compulsions reduce anxiety temporarily but are not pleasurable. Insight specifier is critical — poor insight approaches delusional thinking. Most common obsession themes: contamination, harm, symmetry, forbidden thoughts.",
    redFlags: [
      "Poor insight specifier — may require antipsychotic augmentation",
      "Suicidal ideation (elevated risk in OCD)",
      "PANDAS/PANS in children — sudden onset after strep infection",
      "Severe functional impairment (housebound)",
      "Comorbid major depression",
    ],
    mnemonics: [
      {
        name: "OCD = Obsess + Compel + Can't STOP",
        content:
          "Obsessions are intrusive, unwanted, ego-dystonic thoughts. Compulsions are repetitive acts to reduce distress. Together they STOP normal life for >1 hour/day.",
      },
    ],
    pimpingQuestions: [
      "What is the role of serotonin in OCD and why do SSRIs require higher doses than for depression?",
      "What brain circuit is implicated in OCD (orbitofrontal cortex-thalamus-striatum loop)?",
      "What is exposure and response prevention (ERP) and why is it the gold-standard psychotherapy for OCD?",
      "Distinguish OCD from OCPD (obsessive-compulsive personality disorder) on the ego-syntonic/dystonic axis.",
      "What is the first-line pharmacotherapy for OCD and what response rate is expected?",
      "What is clomipramine and when is it used in OCD treatment?",
    ],
  },
  {
    id: "bm-cond-13",
    name: "Alcohol Use Disorder",
    icdCode: "F10.20",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Substance-Related Disorders",
    definition:
      "A problematic pattern of alcohol use leading to clinically significant impairment or distress, manifested by ≥2 of 11 DSM-5 criteria within a 12-month period, classified as mild (2-3), moderate (4-5), or severe (≥6).",
    diagnosticCriteria:
      "DSM-5: ≥2 of 11 in 12 months: (1) Taking in larger amounts or over longer period than intended; (2) Persistent desire or unsuccessful efforts to cut down; (3) Great deal of time spent obtaining, using, recovering; (4) Craving; (5) Failure to fulfill major role obligations; (6) Continued use despite social/interpersonal problems; (7) Important activities given up; (8) Recurrent use in hazardous situations; (9) Continued use despite physical/psychological problems caused/exacerbated by alcohol; (10) Tolerance; (11) Withdrawal. Mild: 2-3 criteria, Moderate: 4-5, Severe: ≥6.",
    presentation: {
      chiefComplaint: [
        "I need a drink to feel normal",
        "I shake in the morning until I have a drink",
        "I can't stop once I start",
        "I've lost my job and family because of drinking",
        "I came in with a seizure",
      ],
      associatedSymptoms: [
        "Tremors (alcohol withdrawal)",
        "Diaphoresis",
        "Blackouts (alcohol-induced amnesia)",
        "Tolerance (drinking more for same effect)",
        "Withdrawal seizures (6-48 hours after last drink)",
        "Delirium tremens (48-72 hours)",
        "Wernicke-Korsakoff syndrome (thiamine deficiency)",
        "Liver disease (elevated LFTs, cirrhosis)",
      ],
      demographics:
        "12-month prevalence ~13.9% in US adults; male predominance (2:1); high comorbidity with mood disorders, PTSD, and other SUD; alcohol withdrawal is the only commonly lethal withdrawal syndrome.",
    },
    distinguishingFeatures:
      "Alcohol withdrawal is medically dangerous and potentially fatal (distinguish from opioid withdrawal which is rarely fatal). The CIWA-Ar scale quantifies withdrawal severity and guides treatment. Wernicke encephalopathy (confusion, ophthalmoplegia, ataxia) requires immediate IV thiamine before glucose. Disulfiram-alcohol reaction is a clinical teaching point.",
    redFlags: [
      "Alcohol withdrawal seizures or delirium tremens — medical emergency",
      "Wernicke encephalopathy — give IV thiamine BEFORE glucose",
      "Suicidal ideation (common in AUD)",
      "Hepatic encephalopathy",
      "Pancreatitis (acute or chronic)",
    ],
    mnemonics: [
      {
        name: "CAGE",
        content:
          "Cut down (ever felt you should?), Annoyed (by criticism about drinking?), Guilty (ever felt guilty?), Eye opener (ever had a morning drink?) — 2/4 positive = likely AUD.",
      },
      {
        name: "AWS = SHAKES",
        content:
          "Sweating, Hypertension, Anxiety/Agitation, Kindled seizures (prior withdrawal), Elevated pulse, Severe (DTs 48-72h) — alcohol withdrawal symptoms in order of severity.",
      },
    ],
    pimpingQuestions: [
      "What is the mechanism of alcohol withdrawal and why is it dangerous (GABA/glutamate imbalance)?",
      "What is the CIWA-Ar scale and how does a score >10 change management?",
      "Why must thiamine be given BEFORE glucose in a patient with suspected alcohol use disorder?",
      "What is kindling phenomenon in alcohol withdrawal?",
      "Compare and contrast naltrexone, acamprosate, and disulfiram for AUD maintenance treatment.",
      "What is the mechanism of disulfiram and the alcohol-disulfiram reaction?",
    ],
  },
  {
    id: "bm-cond-14",
    name: "Opioid Use Disorder",
    icdCode: "F11.20",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Substance-Related Disorders",
    definition:
      "A problematic pattern of opioid use leading to clinically significant impairment or distress, manifested by ≥2 of 11 DSM-5 criteria within a 12-month period, including features of tolerance, withdrawal, and compulsive use despite adverse consequences.",
    diagnosticCriteria:
      "DSM-5: ≥2 of 11 criteria in 12 months (same framework as AUD but applied to opioids): craving, loss of control, role impairment, social impairment, hazardous use, continued use despite problems, tolerance, withdrawal, time spent, giving up activities, failed quit attempts. Opioid withdrawal: dysphoric mood, nausea/vomiting, muscle aches, lacrimation, rhinorrhea, pupillary dilation, piloerection, diaphoresis, diarrhea, yawning, fever, insomnia.",
    presentation: {
      chiefComplaint: [
        "I can't stop using heroin/pills",
        "I'm sick when I don't use — sweating, vomiting, aching",
        "I started on pain pills after surgery and now I can't stop",
        "I want to get on Suboxone",
        "I overdosed and survived",
      ],
      associatedSymptoms: [
        "Miosis (pinpoint pupils) with intoxication",
        "Mydriasis (dilated pupils) with withdrawal",
        "Rhinorrhea and lacrimation with withdrawal",
        "Piloerection ('goosebumps') with withdrawal",
        "Constipation (chronic use)",
        "Track marks (IV use)",
        "Hepatitis C or HIV risk",
        "Fentanyl test strip education",
      ],
      demographics:
        "Prevalence ~0.7% (heroin) with much higher rates for prescription opioid misuse; affects all demographics; opioid overdose is leading cause of accidental death in US; fentanyl-adulterated supply has dramatically increased mortality.",
    },
    distinguishingFeatures:
      "Opioid withdrawal is extremely uncomfortable but rarely life-threatening (unlike alcohol/benzo withdrawal). Overdose triad: miosis, respiratory depression, altered consciousness. Naloxone reverses overdose. Buprenorphine/naloxone (Suboxone) induction requires patient to be in mild-moderate withdrawal (COWS score ≥8) to avoid precipitated withdrawal.",
    redFlags: [
      "Opioid overdose — respiratory depression, cyanosis, unresponsive",
      "Precipitated withdrawal from premature buprenorphine induction",
      "Fentanyl exposure — may require multiple naloxone doses",
      "IV drug use with fever — rule out endocarditis",
      "Suicidal ideation",
    ],
    mnemonics: [
      {
        name: "COWS score = Clinical Opiate Withdrawal Scale",
        content:
          "Score ≥8 required before buprenorphine induction to avoid precipitated withdrawal. Key COWS items: Pulse rate, Sweating, Restlessness, Pupil size, Bone/joint aches, Runny nose, GI upset, Tremor, Yawning, Anxiety/irritability, Goosebumps.",
      },
    ],
    pimpingQuestions: [
      "What is the mechanism of action of buprenorphine and why does partial agonism make it safer?",
      "Why must a patient be in withdrawal before initiating buprenorphine?",
      "What is precipitated withdrawal and how is it caused by naloxone or buprenorphine?",
      "What is the ceiling effect of buprenorphine and what are its clinical implications?",
      "Describe the mechanism of naloxone and its half-life compared to fentanyl.",
      "What is the COWS score and what threshold indicates readiness for buprenorphine induction?",
    ],
  },
  {
    id: "bm-cond-15",
    name: "Cannabis Use Disorder",
    icdCode: "F12.20",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Substance-Related Disorders",
    definition:
      "A problematic pattern of cannabis use causing clinically significant impairment or distress, with ≥2 of 11 DSM-5 criteria in 12 months, including evidence of tolerance, withdrawal, and compulsive use. Cannabis withdrawal syndrome is now recognized in DSM-5.",
    diagnosticCriteria:
      "DSM-5: ≥2 of 11 criteria in 12 months. Cannabis Withdrawal (F12.288): Cessation after heavy prolonged use (daily or near-daily use over months) with ≥3 of: irritability/anger/aggression, nervousness/anxiety, sleep difficulty, decreased appetite/weight loss, restlessness, depressed mood, somatic discomfort (abdominal pain, shakiness, sweating, fever, chills, headache). Symptoms within 1 week of cessation, cause significant distress, not due to another substance.",
    presentation: {
      chiefComplaint: [
        "I smoke weed every day and want to stop",
        "I can't function without it",
        "I've been using more and more",
        "I get anxious and can't sleep when I don't use",
      ],
      associatedSymptoms: [
        "Red eyes (conjunctival injection)",
        "Increased appetite ('munchies') with acute use",
        "Psychomotor slowing",
        "Memory impairment",
        "Motivational syndrome with chronic use",
        "Anxiety and paranoia (especially with high-THC products)",
        "Cannabis hyperemesis syndrome (cyclic vomiting relieved by hot showers)",
        "Precipitation/worsening of psychosis in vulnerable individuals",
      ],
      demographics:
        "Most commonly used illicit drug in US; prevalence ~2% for CUD; higher rates in adolescents and young adults; increasing THC potency in modern products increasing risk of psychosis and dependence.",
    },
    distinguishingFeatures:
      "Cannabis hyperemesis syndrome (CHS) is a unique clinical presentation — cyclic vomiting relieved by compulsive hot showers in heavy users. Cannabis is a risk factor for psychosis in genetically vulnerable individuals (increases risk 2-3x). Withdrawal is real but medically non-dangerous.",
    redFlags: [
      "New-onset psychosis in heavy cannabis user — may trigger latent schizophrenia",
      "Cannabis hyperemesis syndrome with severe dehydration",
      "Heavy use in adolescents — neurodevelopmental risk",
      "Driving under influence",
      "Legal consequences with continued use despite them",
    ],
    mnemonics: [
      {
        name: "CHS = Hot Shower + Cyclic Vomiting + Heavy Cannabis",
        content:
          "Cannabis Hyperemesis Syndrome: the pathognomonic finding is relief of vomiting with compulsive hot showers or bathing. The mechanism may involve TRPV1 receptor activity.",
      },
    ],
    pimpingQuestions: [
      "What is the endocannabinoid system and the role of CB1 vs. CB2 receptors?",
      "How does THC differ from CBD in psychoactive effects?",
      "What is the amotivational syndrome associated with chronic cannabis use?",
      "How does heavy cannabis use increase the risk of schizophrenia in vulnerable populations?",
      "What is cannabis hyperemesis syndrome and what is the classic bedside test?",
    ],
  },
  {
    id: "bm-cond-16",
    name: "Anorexia Nervosa",
    icdCode: "F50.01",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Feeding and Eating Disorders",
    definition:
      "An eating disorder characterized by restriction of energy intake relative to requirements leading to significantly low body weight, intense fear of weight gain, and disturbance in self-perceived weight or shape, associated with serious medical complications.",
    diagnosticCriteria:
      "DSM-5: (A) Restriction of energy intake relative to requirements leading to significantly low body weight (defined as below minimally normal or expected for age, sex, developmental trajectory, and physical health). (B) Intense fear of gaining weight or becoming fat, or persistent behavior interfering with weight gain. (C) Disturbance in body weight/shape experience, undue influence of weight/shape on self-evaluation, or lack of recognition of seriousness of current low weight. Types: Restricting type (no bingeing/purging in last 3 months), Binge-eating/purging type.",
    presentation: {
      chiefComplaint: [
        "I need to lose more weight",
        "I'm fat even though everyone says I'm not",
        "I haven't had my period in months",
        "I'm always cold and tired",
        "I count every calorie I eat",
      ],
      associatedSymptoms: [
        "Amenorrhea (although no longer required in DSM-5)",
        "Lanugo hair (fine downy hair on body)",
        "Bradycardia and hypotension",
        "Hypothermia",
        "Electrolyte abnormalities (hypokalemia)",
        "Osteoporosis",
        "Denial of illness severity",
        "Hyperactivity despite low weight",
      ],
      demographics:
        "Lifetime prevalence ~0.6-1% in women; female:male ~10:1; onset typically adolescence to young adulthood; highest mortality of any psychiatric disorder (~5-10% per decade); strong comorbidity with OCD, anxiety, and depression.",
    },
    distinguishingFeatures:
      "Highest mortality of any psychiatric disorder — primarily from cardiac arrhythmias (from hypokalemia, QTc prolongation) and suicide. Patients often lack insight (ego-syntonic — they want to be thin). Refeeding syndrome is a life-threatening risk during nutritional rehabilitation (hypophosphatemia, hypokalemia, hypomagnesemia). BMI <17.5 is severe, <15 is extreme.",
    redFlags: [
      "BMI <15, rapid weight loss, syncopal episodes",
      "QTc prolongation — arrhythmia risk",
      "Hypokalemia (<3.0) — cardiac risk",
      "Refeeding syndrome during nutritional rehabilitation",
      "Suicidal ideation (very high risk)",
      "Refusal of treatment — may require involuntary hospitalization",
    ],
    mnemonics: [
      {
        name: "ANOREXIA = Weight Restriction + Fear + Distortion",
        content:
          "A — low weight (Amazingly thin), N — No insight or denied severity, O — Overpowering fear of weight gain, R — Restriction of intake, E — body image distortion (sees fat where none exists), X — eXcluded binge/purge in restricting type.",
      },
    ],
    pimpingQuestions: [
      "What is refeeding syndrome and what electrolyte must be monitored (and why does it drop)?",
      "What cardiac complication causes most deaths in anorexia nervosa?",
      "Why is BMI not sufficient as the sole diagnostic criterion in DSM-5?",
      "What is the role of Family-Based Treatment (FBT/Maudsley approach) in adolescent anorexia?",
      "Distinguish restricting type from binge/purge type of anorexia nervosa.",
      "What lab abnormalities are expected in severe restriction vs. purging behaviors?",
    ],
  },
  {
    id: "bm-cond-17",
    name: "Bulimia Nervosa",
    icdCode: "F50.2",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Feeding and Eating Disorders",
    definition:
      "An eating disorder characterized by recurrent episodes of binge eating followed by inappropriate compensatory behaviors to prevent weight gain (purging, laxatives, excessive exercise, fasting), occurring at least once weekly for 3 months, with self-evaluation unduly influenced by body shape and weight.",
    diagnosticCriteria:
      "DSM-5: (A) Recurrent binge eating: (1) eating in a discrete time period an amount larger than most would eat, (2) sense of lack of control during episode. (B) Recurrent inappropriate compensatory behavior to prevent weight gain (self-induced vomiting, misuse of laxatives/diuretics/enemas, fasting, excessive exercise). (C) Binge eating and compensatory behaviors occur on average ≥1x/week for 3 months. (D) Self-evaluation unduly influenced by body shape and weight. (E) Does not occur exclusively during anorexia nervosa.",
    presentation: {
      chiefComplaint: [
        "I binge and purge multiple times a day",
        "I feel out of control when I eat",
        "My teeth are deteriorating",
        "My cheeks are swollen",
        "I use laxatives to control my weight",
      ],
      associatedSymptoms: [
        "Russell's sign (calluses on dorsum of hand from self-induced vomiting)",
        "Parotid gland enlargement (bilateral 'chipmunk cheeks')",
        "Dental erosion from acid",
        "Hypokalemia, hypochloremia, metabolic alkalosis (from purging)",
        "Esophageal tears or rupture (Mallory-Weiss)",
        "Normal or slightly above-normal weight (differs from anorexia)",
        "Secretive eating behavior",
        "Shame and depression",
      ],
      demographics:
        "Lifetime prevalence ~1-3% in women; female:male ~10:1; typically onset late adolescence; often normal weight making it less visually apparent; high comorbidity with mood disorders, anxiety, substance use.",
    },
    distinguishingFeatures:
      "Normal weight (unlike anorexia where low weight is required). Russell's sign and parotid hypertrophy are physical exam clues. Metabolic alkalosis with hypokalemia and hypochloremia is the classic lab pattern from purging. Must not be occurring exclusively during anorexia nervosa.",
    redFlags: [
      "Severe hypokalemia — cardiac arrhythmia risk",
      "Esophageal rupture (Boerhaave syndrome) — chest pain, subcutaneous emphysema",
      "Suicidal ideation",
      "Ipecac misuse — myopathy and cardiomyopathy",
      "Comorbid substance use disorder",
    ],
    mnemonics: [
      {
        name: "BULIMIA Physical Signs = RPED",
        content:
          "Russell's sign (hand calluses), Parotid enlargement, Erosion of teeth (enamel), Dyselectrolytemia (hypokalemia, alkalosis) — the 4 classic physical findings of purging behaviors.",
      },
    ],
    pimpingQuestions: [
      "What is Russell's sign and how does it form?",
      "What is the classic acid-base and electrolyte pattern in purging bulimia?",
      "What is the first-line pharmacotherapy for bulimia nervosa (only FDA-approved drug)?",
      "Why is bupropion contraindicated in eating disorders?",
      "Distinguish bulimia nervosa from binge eating disorder by the presence or absence of compensatory behaviors.",
    ],
  },
  {
    id: "bm-cond-18",
    name: "Insomnia Disorder",
    icdCode: "G47.00",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Sleep-Wake Disorders",
    definition:
      "A sleep disorder characterized by dissatisfaction with sleep quantity or quality, with difficulty initiating or maintaining sleep, or early-morning awakening, occurring ≥3 nights per week for ≥3 months, causing significant distress or daytime impairment despite adequate opportunity for sleep.",
    diagnosticCriteria:
      "DSM-5: (A) Predominant complaint of dissatisfaction with sleep quantity or quality: difficulty initiating sleep (latency >30 min), maintaining sleep (≥3 awakenings/night), or early-morning awakening with inability to return to sleep. (B) Clinically significant distress or functional impairment. (C) Occurs ≥3 nights/week. (D) Present for ≥3 months. (E) Despite adequate opportunity for sleep. (F) Not explained by another sleep-wake disorder. (G) Not due to substances or medication. (H) Comorbid mental/medical conditions do not adequately explain.",
    presentation: {
      chiefComplaint: [
        "I can't fall asleep no matter how tired I am",
        "I wake up at 3 AM and can't get back to sleep",
        "I haven't slept well in months",
        "I'm exhausted all day but wired at night",
        "I've tried everything — melatonin, Benadryl, wine",
      ],
      associatedSymptoms: [
        "Daytime fatigue and sleepiness",
        "Irritability and mood changes",
        "Difficulty concentrating",
        "Hyperarousal at night",
        "Clock-watching behavior",
        "Conditioned arousal to the bed/bedroom",
        "Performance anxiety about sleep",
      ],
      demographics:
        "Prevalence ~10% chronic, 33% transient; increases with age; higher in women; major risk factor for depression, anxiety, cardiovascular disease; highly comorbid with psychiatric disorders.",
    },
    distinguishingFeatures:
      "Sleep opportunity must be adequate (not sleep deprivation). Hyperarousal model: conditioned arousal to the bedroom environment perpetuates insomnia. CBT-I (Cognitive Behavioral Therapy for Insomnia) is superior to pharmacotherapy long-term. Rule out obstructive sleep apnea (polysomnography if suspected), restless leg syndrome, and circadian rhythm disorders.",
    redFlags: [
      "Snoring with witnessed apneas — rule out OSA",
      "Restless legs or periodic limb movements",
      "Comorbid depression or anxiety driving insomnia",
      "Chronic benzodiazepine use for insomnia",
      "Parasomnias (sleepwalking, REM sleep behavior disorder)",
    ],
    mnemonics: [
      {
        name: "3-3-3 Rule for Insomnia Diagnosis",
        content:
          "≥3 nights per week, ≥3 months duration, adequate opportunity for sleep (≥3 components of sleep difficulty: onset, maintenance, early awakening).",
      },
    ],
    pimpingQuestions: [
      "What is the first-line treatment for chronic insomnia disorder according to AASM guidelines?",
      "Describe the 5 components of CBT-I (stimulus control, sleep restriction, relaxation, cognitive therapy, sleep hygiene).",
      "What is sleep restriction therapy and why does it initially worsen sleep before improving it?",
      "Why are benzodiazepines not recommended as long-term treatment for chronic insomnia?",
      "How does the two-process model of sleep (Process S and Process C) explain insomnia pathophysiology?",
    ],
  },
  {
    id: "bm-cond-19",
    name: "Adjustment Disorder",
    icdCode: "F43.20",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Trauma and Stressor-Related Disorders",
    definition:
      "Emotional or behavioral symptoms in response to an identifiable stressor, developing within 3 months of the stressor onset, that are either disproportionate to the stressor or cause significant distress/impairment, and resolve within 6 months of stressor termination.",
    diagnosticCriteria:
      "DSM-5: (A) Emotional or behavioral symptoms in response to an identifiable stressor(s), developing within 3 months of stressor onset. (B) Symptoms are either: (1) marked distress out of proportion to severity/intensity of stressor (considering context/cultural factors), or (2) significant impairment in social, occupational, or other areas. (C) Does not meet criteria for another mental disorder. (D) Not bereavement. (E) Once stressor terminates, symptoms do not persist >6 months. Subtypes: with depressed mood, with anxiety, with mixed anxiety and depressed mood, with disturbance of conduct, with mixed disturbance of emotions and conduct, unspecified.",
    presentation: {
      chiefComplaint: [
        "I've been a mess since my divorce",
        "I can't cope since losing my job",
        "Everything fell apart when I got my diagnosis",
        "I'm struggling since moving to a new city",
        "I can't function since my breakup",
      ],
      associatedSymptoms: [
        "Depressed mood or tearfulness",
        "Anxiety and worry",
        "Difficulty concentrating at work",
        "Social withdrawal",
        "Sleep disturbance",
        "Irritability",
        "No symptoms consistent with MDD or other disorder",
      ],
      demographics:
        "One of the most common psychiatric diagnoses in primary care and outpatient settings; affects all ages; associated with medical illness diagnoses, relationship stressors, work difficulties, financial stress.",
    },
    distinguishingFeatures:
      "Temporal relationship to identifiable stressor (within 3 months). Must NOT meet criteria for MDD, GAD, or PTSD. Resolves within 6 months of stressor ending — if persistent, reconsider diagnosis. Often a 'threshold' diagnosis before symptoms escalate to full disorder. Treatment is primarily psychotherapeutic.",
    redFlags: [
      "Suicidal ideation — Adjustment Disorder is a risk factor for suicide (especially in medically ill patients)",
      "Symptoms evolving to meet criteria for MDD or anxiety disorder",
      "Behavioral disturbance (conduct subtype) with legal consequences",
      "Failure to improve as stressor resolves",
    ],
    mnemonics: [
      {
        name: "Adjustment Disorder = 3-6 Rule",
        content:
          "Starts within 3 months of stressor, resolves within 6 months of stressor ending. If it doesn't fit this rule, reconsider the diagnosis.",
      },
    ],
    pimpingQuestions: [
      "How do you distinguish adjustment disorder from MDD when both follow a stressor?",
      "What is the recommended treatment for adjustment disorder?",
      "Why is adjustment disorder considered a 'threshold' diagnosis?",
      "What is the mortality risk associated with adjustment disorder in medically ill patients?",
      "Which adjustment disorder subtype carries the highest risk of suicide?",
    ],
  },
  {
    id: "bm-cond-20",
    name: "Suicidal Ideation (Presenting Condition)",
    icdCode: "R45.851",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Crisis Presentations",
    definition:
      "Thoughts of ending one's own life, ranging from passive death wishes to active suicidal ideation with or without a plan, intent, or history of attempts. Suicidal ideation is a psychiatric emergency requiring structured risk assessment and appropriate level-of-care determination.",
    diagnosticCriteria:
      "Not a DSM-5 diagnosis but a presenting symptom requiring structured assessment. Columbia Suicide Severity Rating Scale (C-SSRS): Ideation intensity (passive wish to be dead, active ideation without plan, ideation with some plan, ideation with specific plan, ideation with intent and plan). Behavior scale: preparatory behavior, aborted attempt, interrupted attempt, actual attempt. Risk stratification: Low (passive ideation, no plan, no intent, no access to means, strong protective factors), Moderate (active ideation, vague plan, some intent), High (active ideation, specific plan, intent, access to means, few protective factors).",
    presentation: {
      chiefComplaint: [
        "I want to kill myself",
        "I've been thinking about ending it",
        "I don't see the point in living",
        "I wish I were dead",
        "I've been researching methods online",
      ],
      associatedSymptoms: [
        "Hopelessness (strongest predictor of completed suicide)",
        "Giving away possessions",
        "Saying goodbyes",
        "Recent access to firearms or medications",
        "Recent discharge from psychiatric hospitalization",
        "Recent significant loss",
        "Previous suicide attempt (strongest risk factor for future attempt)",
        "Agitation and insomnia",
      ],
      demographics:
        "Suicide is the 10th leading cause of death in US; highest rates in white males 45-64 and Native Americans; adolescents and young adults (15-24) have high rates; firearms are most lethal method (~85% fatality rate).",
    },
    distinguishingFeatures:
      "Risk factors vs. protective factors must be balanced. Static risk factors (demographics, history) vs. dynamic risk factors (hopelessness, agitation, access to means). Protective factors: reasons for living, social support, religious beliefs, children at home, engaged in treatment. Means restriction counseling is evidence-based intervention (especially firearm access).",
    redFlags: [
      "Specific plan with lethal means and stated intent",
      "Recent attempt or preparatory behaviors",
      "Access to firearms — must address means restriction",
      "Comorbid intoxication — impairs judgment and increases lethality",
      "Discharge against medical advice from ED after suicidal crisis",
    ],
    mnemonics: [
      {
        name: "IS PATH WARM",
        content:
          "Ideation, Substance abuse, Purposelessness, Anxiety/agitation, Trapped feeling, Hopelessness, Withdrawal (social), Anger, Recklessness, Mood changes — warning signs of suicide risk.",
      },
      {
        name: "SAD PERSONS",
        content:
          "Sex (male), Age (elderly or adolescent), Depression, Previous attempt, Ethanol/substance use, Rational thinking loss (psychosis), Social support lacking, Organized plan, No significant other, Sickness (chronic illness) — suicide risk mnemonic (1 point each, >6 = high risk).",
      },
    ],
    pimpingQuestions: [
      "What is the single strongest predictor of a future suicide attempt?",
      "What is the difference between passive suicidal ideation and active suicidal ideation with plan and intent?",
      "What is the Columbia Suicide Severity Rating Scale and how is it used to stratify risk?",
      "What is means restriction counseling and what is the evidence for firearm safety counseling?",
      "Name five static and five dynamic risk factors for suicide.",
      "What is the appropriate disposition for a patient presenting with high-risk suicidal ideation?",
    ],
  },

  // ─── Additional PAEA Blueprint Conditions ─────────────────────────────────

  {
    id: "bm-cond-21",
    name: "Persistent Depressive Disorder, Cyclothymia, and PMDD",
    icdCode: "F34.1",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Depressive and Mood Disorders",
    definition:
      "Persistent Depressive Disorder (PDD, formerly dysthymia): depressed mood for ≥2 years (adults) or 1 year (children/adolescents) + ≥2 of: poor appetite or overeating, insomnia or hypersomnia, low energy, low self-esteem, poor concentration, hopelessness. Less severe than MDD but more chronic — greater lifetime burden in some. 'Double depression': MDD episode superimposed on PDD. Cyclothymic Disorder: numerous periods of hypomanic symptoms AND depressive symptoms over ≥2 years (1 year in children) that do NOT meet criteria for hypomanic or MDD episodes; never symptom-free >2 months. Premenstrual Dysphoric Disorder (PMDD): severe mood and physical symptoms in luteal phase (1–2 weeks before menses) → dramatic improvement within days of menses onset. Core: marked mood lability, irritability, anxiety, depressed mood + physical symptoms (bloating, breast tenderness, joint pain). Must track prospectively for 2 menstrual cycles to confirm pattern.",
    diagnosticCriteria:
      "PDD: DSM-5 — depressed mood most of the day, more days than not, ≥2 years, never symptom-free >2 months. PHQ-9 (screening). Cyclothymia: mood chart tracking; rule out Bipolar I/II. PMDD: prospective symptom tracking × 2 cycles (Daily Record of Severity of Problems — DRSP); at least 5 symptoms in luteal phase, markedly improve after menstruation, absent in follicular phase. Lab: TSH (hypothyroidism mimics PDD), CBC (anemia), vitamin D level.",
    presentation: {
      chiefComplaint: [
        "\"I've been feeling mildly depressed for as long as I can remember\"",
        "\"Every month before my period I become a completely different person\"",
        "\"I go from feeling great to feeling low constantly — never stable\"",
      ],
      associatedSymptoms: [
        "PDD: chronic low-grade depression; patients often do not recognize it as depression ('I've always been like this'); anhedonia, low energy, poor self-esteem; treatment: SSRIs (first-line) + psychotherapy",
        "PMDD: marked mood symptoms in luteal phase, typically resolving within 2–3 days of menstrual onset; anger/irritability may be the dominant symptom (not just sadness); impairs daily functioning and relationships",
        "Cyclothymia: mood instability, impulsivity, difficult interpersonal relationships; does not meet full hypomanic or MDD criteria; must rule out substance use, medical causes",
      ],
      demographics: "PDD: lifetime prevalence 2–6%; women 2× men. PMDD: 3–8% of menstruating women; distinct from PMS (less severe). Cyclothymia: 0.4–1%; equal sex ratio; onset adolescence/early adulthood.",
    },
    distinguishingFeatures:
      "PDD vs. MDD: PDD = ≥2 years duration, less severe, chronic; MDD = ≥2 weeks, more severe, episodic. PMDD vs. PMS: PMS = milder, common (80%); PMDD = severe, functional impairment, met by only 3–8%, treated with SSRIs (daily or luteal phase) or OCP (drospirenone — Yaz). Cyclothymia vs. Bipolar II: Cyclothymia does NOT meet full criteria for hypomanic or depressive episodes; Bipolar II has full hypomanic AND full depressive episodes.",
    redFlags: [
      "Double depression (PDD + MDD episode): more severe, harder to treat — may need combination SSRI + augmentation",
      "PMDD with suicidal ideation in luteal phase: psychiatric evaluation; track mood with menstrual cycle — if suicidality is luteal-phase specific, that is still a crisis",
      "Cyclothymia evolving to Bipolar II: watch for emergence of full hypomanic or major depressive episodes",
    ],
    mnemonics: [
      {
        name: "Depressive Spectrum — Duration Criteria",
        content:
          "MDD: ≥2 weeks (5 of 9 SIGECAPS symptoms, depressed mood or anhedonia required)\nPDD (Dysthymia): ≥2 YEARS (2 of 6 symptoms)\nBereavement: normal grief → 1 year (per DSM-5-TR for Prolonged Grief Disorder)\nCyclothymia: ≥2 years of subthreshold hypomania AND depression\n\nPMDD: Luteal phase symptoms → resolve with menses\nTreatment: SSRIs (continuous or luteal phase) → OCPs (drospirenone/EE)\n\nDouble Depression = PDD + MDD episode on top\n→ Treat the MDD episode first, then address underlying PDD",
      },
    ],
    pimpingQuestions: [
      "What is the duration criterion for persistent depressive disorder?",
      "How does PMDD differ from PMS?",
      "What is 'double depression'?",
      "What is the first-line treatment for PMDD?",
      "How does cyclothymia differ from Bipolar II disorder?",
    ],
  },

  {
    id: "bm-cond-22",
    name: "Somatic Symptom Disorder, Illness Anxiety Disorder, and Factitious Disorder",
    icdCode: "F45.1",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Somatic and Functional Disorders",
    definition:
      "Somatic Symptom Disorder (SSD): ≥1 somatic symptom causing distress/disruption + excessive thoughts/feelings/behaviors regarding symptoms (health anxiety, catastrophizing, disproportionate time/energy spent on symptoms); ≥6 months. NOT 'medically unexplained' — symptoms may or may not have medical explanation; it's the PSYCHOLOGICAL response that is disordered. Illness Anxiety Disorder (IAD, formerly hypochondriasis): preoccupation with having or acquiring a serious illness despite absence of significant somatic symptoms (or only mild symptoms); high health anxiety + maladaptive health behaviors (excessive checking, avoidance of healthcare); ≥6 months. Factitious Disorder (Munchausen syndrome): intentional production/feigning of symptoms in oneself (Factitious Disorder Imposed on Self) or another (Factitious Disorder Imposed on Another — FDIA, formerly Munchausen by Proxy); no external incentives (vs. malingering = external gain).",
    diagnosticCriteria:
      "SSD: DSM-5 criteria; rule out all medical causes first. IAD: excessive preoccupation despite reassurance; either 'care-seeking' (frequent appointments) or 'care-avoidant' (refuses tests/doctors for fear of bad news). Factitious Disorder: pattern of recurrent hospitalizations, inconsistent lab findings (urine shows exogenous insulin C-peptide suppressed, factitious hypoglycemia), condition only deteriorates when unobserved; legal considerations for reporting FDIA (child abuse). Malingering vs. Factitious: Malingering = conscious feigning for EXTERNAL gain (money, avoiding prison, obtaining medications); Factitious = conscious feigning for INTERNAL gain (sick role, attention).",
    presentation: {
      chiefComplaint: [
        "\"I have this pain that no doctor can find a cause for — I know something is seriously wrong\"",
        "\"I keep reading about diseases online and I'm convinced I have cancer\"",
        "\"This patient keeps coming to the ER with different complaints that never pan out\"",
      ],
      associatedSymptoms: [
        "SSD: high utilization of healthcare, multiple specialists, frustration with medical system; underlying anxiety or depression common; does NOT mean symptoms are 'fake' — real distress",
        "IAD: despite negative workup and physician reassurance, cannot be comforted; temporarily relieved then returns with new concern (anxiety cycles); avoidant subtype avoids all medical care (denial)",
        "Factitious Disorder: inconsistencies in history and exam; symptoms improve only with attention; patient has medical knowledge, history in healthcare; resistance to psychiatric evaluation; 'symptom wandering'",
        "FDIA: a child with recurrent unexplained illness that only occurs around primary caregiver — improvement when separated from caregiver is diagnostic clue; report to CPS",
      ],
      demographics: "SSD: women > men; middle-aged. IAD: equal sex ratio; peaks 20–40s. Factitious Disorder: more common in healthcare workers; FDIA perpetrators are typically mothers of young children.",
    },
    distinguishingFeatures:
      "SSD vs. IAD: SSD = distressing somatic symptoms are central; IAD = preoccupation with having illness despite minimal/no symptoms. Both require psychotherapy (CBT most evidence); SSRIs help both. Factitious vs. Malingering: Factitious = no external gain, internal motivation (sick role); Malingering = external incentive (not a mental disorder per DSM-5). Conversion Disorder (Functional Neurological Symptom Disorder, FND): neurological symptoms (weakness, non-epileptic seizures, blindness) inconsistent with known neurological disease; positive signs (Hoover's sign — hip extension weakness with voluntary hip flexion normalizes on contralateral hip extension).",
    redFlags: [
      "Factitious Disorder Imposed on Another (FDIA): mandatory reporting to child protective services; separate child from suspected perpetrator",
      "SSD or IAD with severe functional impairment: inpatient or intensive outpatient psychiatric treatment; avoid unnecessary procedures (harm from iatrogenesis)",
      "Physician who treats functional disorder with excessive workup: reinforces illness behavior; use 'no unnecessary tests' contract",
    ],
    mnemonics: [
      {
        name: "Somatic Spectrum — Key Distinctions",
        content:
          "SSD: Symptoms ARE present + EXCESSIVE psychological response\nIAD: Symptoms minimal/absent + Excessive FEAR of illness\nConversion: Neurological symptoms inconsistent with anatomy (positive Hoover's sign)\nMalingering: CONSCIOUS feigning for EXTERNAL gain (not a mental disorder)\nFactitious: CONSCIOUS feigning for INTERNAL gain (sick role)\n\nFDIA (Munchausen by Proxy):\nChild with recurrent unexplained illness\nImproves AWAY from caregiver\n→ Mandatory CPS report\n\nTreatment for SSD/IAD:\n1. Therapeutic alliance (validate, don't dismiss)\n2. CBT (most evidence)\n3. Scheduled regular appointments (reduces ER use)\n4. SSRIs (especially with comorbid depression/anxiety)",
      },
    ],
    pimpingQuestions: [
      "How do you distinguish somatic symptom disorder from illness anxiety disorder?",
      "What is the key difference between factitious disorder and malingering?",
      "What is FDIA and what are the mandatory reporting obligations?",
      "What is conversion disorder and what is Hoover's sign?",
      "What is the treatment approach for somatic symptom disorder?",
    ],
  },

  {
    id: "bm-cond-23",
    name: "Brief Psychotic Disorder, Delusional Disorder, and Psychotic Spectrum",
    icdCode: "F23",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Schizophrenia Spectrum",
    definition:
      "Brief Psychotic Disorder: sudden onset of ≥1 psychotic symptom (delusions, hallucinations, disorganized speech, disorganized/catatonic behavior) lasting ≥1 day but <1 month; full return to premorbid level of functioning. Often precipitated by stress ('brief reactive psychosis'). Delusional Disorder: ≥1 delusion(s) ≥1 month; behavior not markedly odd or bizarre outside the delusion; functioning relatively preserved; auditory/visual hallucinations not prominent. Delusion types: Erotomanic, Grandiose, Jealous, Persecutory (most common), Somatic. Shared Psychotic Disorder (Folie à Deux): delusional belief adopted from another person in a close relationship. Catatonia: motor syndrome — immobility, mutism, rigidity, waxy flexibility, echolalia/echopraxia; can occur in psychosis, mood disorders, medical causes; treat with benzodiazepines (lorazepam test) and ECT if refractory; Neuroleptic Malignant Syndrome (NMS): life-threatening reaction to antipsychotics — FALTER mnemonic.",
    diagnosticCriteria:
      "Brief Psychotic Disorder: rule out substance use, medical causes, other psychiatric disorders. Delusional Disorder: no schizophrenia spectrum symptoms (negative symptoms, disorganized behavior outside delusion). Catatonia: Bush-Francis Catatonia Rating Scale; lorazepam 1–2 mg IV test (improvement = catatonia); rule out NMS (elevated CK, fever, rigidity, autonomic instability — STOP antipsychotic immediately; dantrolene + bromocriptine). NMS: rigidity + hyperthermia + autonomic instability + mental status change + elevated CK (often >1,000 IU/L); onset hours to days after antipsychotic start or dose change.",
    presentation: {
      chiefComplaint: [
        "\"My patient suddenly became psychotic after a huge stressor\"",
        "\"My patient is convinced their spouse is cheating without evidence\"",
        "\"My patient is on an antipsychotic and now has extreme rigidity and fever\"",
      ],
      associatedSymptoms: [
        "Brief Psychotic Disorder: sudden onset delusions/hallucinations/disorganization, often after identifiable stressor; patient often appears confused, frightened; resolves completely within 1 month",
        "Delusional Disorder: fixed belief not amenable to reason; outside the delusion, behavior appears normal; may be seen by other MDs for somatic delusions (convinced have parasites — Ekbom syndrome — or smell bad)",
        "Catatonia: waxy flexibility (limbs maintain position placed by examiner — 'lead pipe'), stupor, mutism, negativism, stereotypies, or excited catatonia (hyperactive, dangerous)",
        "NMS: hyperthermia (>38°C), severe rigidity ('lead pipe'), autonomic instability (BP fluctuations, diaphoresis, tachycardia), altered consciousness; associated with typical and atypical antipsychotics, STOP immediately",
      ],
      demographics: "Brief Psychotic Disorder: young adults, often postpartum trigger (postpartum psychosis can be brief psychotic disorder or bipolar with psychotic features). Delusional Disorder: middle-aged to older adults. NMS: any age, any antipsychotic; higher risk with depot formulations, rapid dose escalation, dehydration.",
    },
    distinguishingFeatures:
      "Brief Psychotic Disorder vs. Schizophreniform vs. Schizophrenia: duration differentiates — <1 month = brief psychotic; 1–6 months = schizophreniform; >6 months = schizophrenia. Delusional Disorder vs. Schizophrenia: delusional disorder = 1 type of delusion, preserved function, no prominent hallucinations or negative symptoms. NMS vs. Serotonin Syndrome: NMS = SLOW onset (days to weeks), lead-pipe rigidity, antipsychotics; Serotonin syndrome = FAST onset (hours), clonus/hyperreflexia, serotonergic drugs. Both have hyperthermia + altered MS; key distinguishing feature = clonus (SS) vs. rigidity (NMS).",
    redFlags: [
      "NMS (Neuroleptic Malignant Syndrome): STOP antipsychotic immediately; supportive care (cooling, IV fluids, Foley); dantrolene (muscle relaxant) + bromocriptine (dopamine agonist); ICU level care; do not rechallenge with antipsychotics for ≥2 weeks",
      "Catatonia with NMS features: do NOT give benzodiazepines in NMS (worsens); use dantrolene; electroconvulsive therapy (ECT) for severe/refractory catatonia",
      "Postpartum psychosis: psychiatric emergency — remove mother from infant until stabilized; high risk of infanticide and suicide; hospitalize; mood stabilizer (lithium) + antipsychotic",
    ],
    mnemonics: [
      {
        name: "NMS vs. Serotonin Syndrome — FALTER",
        content:
          "NMS: FALTER\nF — Fever (hyperthermia)\nA — Autonomic instability (BP fluctuations, diaphoresis)\nL — Lead-pipe Rigidity\nT — Tremor\nE — Elevated CK\nR — Reduced consciousness / confusion\n→ Caused by antipsychotics (dopamine blockade)\n→ Treatment: STOP drug + Dantrolene + Bromocriptine\n\nSerotonin Syndrome: CLONUS (key distinguishing feature)\n→ Caused by serotonergic drugs\n→ Treatment: STOP drug + Cyproheptadine + Benzodiazepines\n\nDuration Spectrum:\n<1 month: Brief Psychotic Disorder\n1–6 months: Schizophreniform Disorder\n>6 months: Schizophrenia (with 6+ months of continuous disturbance)",
      },
    ],
    pimpingQuestions: [
      "How does brief psychotic disorder differ from schizophrenia by duration?",
      "What is delusional disorder and how does it differ from schizophrenia?",
      "What is NMS and what is the management?",
      "How do you distinguish NMS from serotonin syndrome?",
      "What is the lorazepam test for catatonia?",
    ],
  },

  {
    id: "bm-cond-24",
    name: "Stimulant, Sedative, and Tobacco Use Disorders",
    icdCode: "F15.10",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Substance Use Disorders",
    definition:
      "Stimulant Use Disorder (cocaine, amphetamines/methamphetamine): pattern of stimulant use causing impairment — intoxication: euphoria, tachycardia, hypertension, mydriasis, diaphoresis, decreased appetite, paranoia/psychosis with heavy use; withdrawal: 'crash' (fatigue, hypersomnia, increased appetite, depression — unlike opioid/alcohol withdrawal, not medically dangerous but psychologically difficult). Sedative/Hypnotic/Anxiolytic Use Disorder (benzodiazepines, Z-drugs, barbiturates): CNS depression class; withdrawal: DANGEROUS (seizures, delirium — similar to alcohol withdrawal) — must taper; tolerance develops rapidly; DO NOT abruptly stop. Tobacco Use Disorder: nicotine dependence — most common preventable cause of premature death in US; nicotine withdrawal: irritability, anxiety, insomnia, increased appetite, difficulty concentrating (within 24h of cessation). Pharmacotherapy: varenicline (Chantix — partial nicotinic receptor agonist, most effective), bupropion SR, NRT (patch, gum, lozenge, inhaler, nasal spray).",
    diagnosticCriteria:
      "DSM-5 SUD criteria apply across all substance classes (11 criteria — 2+ = SUD; 6+ = severe). Stimulant: UDS (urine drug screen — cocaine metabolite benzoylecgonine detectable 2–4 days; amphetamines 1–3 days; methamphetamine 3–5 days). Benzodiazepine withdrawal: CIWA-B (modified CIWA for benzo withdrawal); seizure risk requires medical monitoring. Tobacco: Fagerström Test for Cigarette Dependence; CO breath test for recent use; biomarker cotinine (nicotine metabolite).",
    presentation: {
      chiefComplaint: [
        "\"I've been using cocaine and I want to stop but I can't\"",
        "\"I've been on Xanax for years and my doctor wants me to stop but when I try I have seizures\"",
        "\"I want help quitting smoking\"",
      ],
      associatedSymptoms: [
        "Cocaine intoxication: euphoria, grandiosity, paranoia, tactile hallucinations (formication — 'cocaine bugs'), perforated nasal septum (chronic snorting), coronary vasospasm (chest pain/MI in young patients), rhabdomyolysis",
        "Methamphetamine: severe dental decay ('meth mouth'), weight loss, formication (picking at skin — excoriations), paranoid psychosis indistinguishable from schizophrenia during intoxication",
        "Benzodiazepine withdrawal: similar to alcohol withdrawal — tremors, anxiety, diaphoresis, seizures (24–72h), delirium; must be medically managed with slow taper",
        "Nicotine withdrawal: anxiety, irritability, insomnia, difficulty concentrating, increased appetite, craving (peaks 24–48h, subsides in 3–4 weeks); not physically dangerous but causes relapse",
      ],
      demographics: "Cocaine: urban, young adults. Methamphetamine: rural/suburban, affects diverse demographics. Benzo use disorder: often iatrogenic (prescribed for anxiety/insomnia then escalated); older women with anxiety. Tobacco: 14% of US adults; higher rates in psychiatric patients, low-income populations.",
    },
    distinguishingFeatures:
      "Stimulant withdrawal vs. opioid withdrawal: stimulant = dysphoric 'crash' (no physical danger, just psychological); opioid = flu-like physical withdrawal. Benzo vs. alcohol withdrawal: both DANGEROUS (seizures, DTs) — benzo withdrawal often needs longer taper (weeks to months for high-dose chronic users). Varenicline (Chantix) is most effective smoking cessation aid — must monitor for neuropsychiatric effects (rare: depression, suicidal ideation). NRT doubles cessation rates vs. placebo.",
    redFlags: [
      "Cocaine/stimulant chest pain: assume MI until proven otherwise — coronary vasospasm can occur without plaque; treat with benzodiazepines + aspirin + nitrates; AVOID beta-blockers (unopposed alpha-adrenergic stimulation)",
      "Abrupt benzodiazepine discontinuation after chronic high-dose use: life-threatening withdrawal — hospitalize for monitored taper; use long-acting benzodiazepine (diazepam or chlordiazepoxide) for taper",
      "Stimulant-induced psychosis: may be indistinguishable from schizophrenia during intoxication; UDS to distinguish; typically resolves with abstinence",
    ],
    mnemonics: [
      {
        name: "Smoking Cessation — Effectiveness Ranking",
        content:
          "Most → Least Effective:\n1. Varenicline (Chantix) — partial nicotinic receptor agonist; most effective\n2. Combination NRT (patch + short-acting) — better than single NRT\n3. Bupropion SR (Wellbutrin) — also used for depression\n4. Single NRT (patch alone, gum alone)\n5. Behavioral counseling alone\n\nCombination (Chantix + NRT or Chantix + Bupropion) = even more effective\n\nCocaine MI: NO beta-blockers → Benzodiazepines + Phentolamine\nBenzo Withdrawal: DANGEROUS = medical taper (DO NOT abruptly stop)\nAlcohol + Benzos: CROSS-TOLERANT (benzos treat alcohol withdrawal too)\n\nStimulant Withdrawal: Dysphoric 'crash' = Not life-threatening (no seizures)",
      },
    ],
    pimpingQuestions: [
      "What is the most effective pharmacotherapy for tobacco use disorder?",
      "Why are beta-blockers contraindicated in cocaine-induced chest pain?",
      "Why is abrupt benzodiazepine discontinuation dangerous?",
      "How does stimulant withdrawal differ from opioid withdrawal in terms of medical danger?",
      "What is 'formication' and which substance is it associated with?",
    ],
  },

  {
    id: "bm-cond-25",
    name: "Acute Stress Disorder, Prolonged Grief, and Abuse/Neglect",
    icdCode: "F43.0",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Trauma and Stress-Related Disorders",
    definition:
      "Acute Stress Disorder (ASD): trauma response identical to PTSD criteria (intrusions, avoidance, negative cognitions, hyperarousal) but duration ≥3 days and <1 month after trauma. If symptoms persist ≥1 month → PTSD diagnosis. Prolonged Grief Disorder (PGD, DSM-5-TR): grief lasting ≥1 year after bereavement (6 months in DSM-5-TR, 12 months in ICD-11) with intense yearning for deceased, difficulty accepting the death, persistent suffering causing functional impairment. Intimate Partner Violence (IPV): physical, sexual, emotional, or financial abuse between current or former intimate partners; universal screening recommended (USPSTF B recommendation); SAFE mnemonic for screening. Child abuse: physical, sexual, emotional abuse and neglect — mandatory reporting in all 50 states. Elder abuse/neglect: similarly reportable; financial abuse most common form of elder abuse.",
    diagnosticCriteria:
      "ASD: trauma exposure (directly or as witness) + PTSD-like symptoms (intrusions, dissociation, negative mood, avoidance, arousal) + 3 days–1 month duration + functional impairment. PTSD if >1 month. Prolonged Grief: DSM-5-TR requires ≥1 year; ongoing yearning + ≥3 of: identity disruption, disbelief, intense emotional pain, difficulty re-engaging with life, emotional numbness, bitterness, meaninglessness, loneliness. IPV screening: HITS (Hurt, Insult, Threaten, Scream) or SAFE (Stressed, Afraid, Friends/Family, Emergency plan). Elder abuse: APS (Adult Protective Services) report; mandatory in most states.",
    presentation: {
      chiefComplaint: [
        "\"I was in a car accident 2 weeks ago and I keep having flashbacks\"",
        "\"My husband died 18 months ago and I still can't function or stop thinking about him\"",
        "\"I want to be screened for domestic violence\"",
      ],
      associatedSymptoms: [
        "ASD: flashbacks, nightmares, intrusive memories (intrusions), avoiding trauma reminders, hypervigilance, startle response, difficulty sleeping, dissociation (feeling detached from oneself/surroundings — derealization/depersonalization)",
        "Prolonged Grief: intense yearning for the deceased, disbelief or difficulty accepting the loss, avoidance of reminders OR excessive focus on the deceased, bitterness about the loss, loss of interest in ongoing life; does NOT respond to standard antidepressants alone",
        "IPV: unexplained or inconsistent injuries, frequent ED visits, partner controlling or present during examination, delayed care-seeking, depression/PTSD, substance use as coping",
        "Child abuse indicators: pattern of injuries at different stages of healing, injuries inconsistent with developmental stage, delay in seeking care, implausible explanation for injuries",
      ],
      demographics: "IPV: 1 in 4 women (25%) and 1 in 9 men (11%) experience severe IPV; LGBTQ+ individuals at higher risk. ASD: 20–30% of individuals exposed to trauma develop ASD. Prolonged Grief: 10–15% of bereaved individuals; higher risk with sudden/violent death, prior trauma, poor social support.",
    },
    distinguishingFeatures:
      "ASD vs. PTSD: ASD = 3 days to 1 month post-trauma; PTSD = >1 month. Early CBT treatment for ASD reduces progression to PTSD. Normal grief vs. Prolonged Grief Disorder: normal grief = gradually improving over time with maintained function; PGD = persists with functional impairment >1 year. IPV safety planning: safety plan with patient (does NOT require mandatory reporting in most states for adults — patient autonomy; only mandated for minors and elders in most states).",
    redFlags: [
      "ASD with active suicidal ideation or self-harm: psychiatric evaluation; early trauma-focused CBT is first-line treatment",
      "Child abuse/neglect: MANDATORY REPORT to CPS in all 50 states; do not need proof — only reasonable suspicion; failure to report = criminal offense in most states",
      "IPV with immediate danger: safety plan; offer hotline (National DV Hotline: 1-800-799-7233); do NOT pressure leaving immediately (most dangerous time is when leaving)",
      "Elder abuse: APS report; assess for capacity; consider guardianship evaluation if cognitive impairment present",
    ],
    mnemonics: [
      {
        name: "ASD vs. PTSD Duration + Abuse Reporting",
        content:
          "ASD: 3 DAYS to 1 MONTH after trauma → treat with trauma-focused CBT\nPTSD: >1 MONTH after trauma → SSRIs (sertraline, paroxetine FDA-approved) + Trauma-focused CBT\nAdjustment Disorder: emotional response to identified stressor, does NOT meet ASD/PTSD criteria\n\nMandatory Reporting:\nChild abuse → CPS (all 50 states — mandatory for all providers)\nElder abuse → APS (most states — mandatory for most providers)\nIPV in adults → NOT mandatory (patient autonomy — offer support, safety plan)\n\nIPV Screening: SAFE\nS — Stress/Safety: Are you safe at home?\nA — Afraid: Are you afraid of your partner?\nF — Friends/Family: Can you call them?\nE — Emergency: Do you have a safety plan?\n\nProlonged Grief: >1 year + ongoing yearning + functional impairment\n→ Grief-specific therapy (complicated grief treatment)",
      },
    ],
    pimpingQuestions: [
      "What is the duration criterion that distinguishes ASD from PTSD?",
      "What is prolonged grief disorder and how does it differ from normal bereavement?",
      "What are the mandatory reporting laws for child abuse?",
      "What is the mandatory reporting requirement for IPV in adult patients?",
      "What is the most dangerous time for a victim of IPV and why?",
    ],
  },

  {
    id: "bm-cond-26",
    name: "Autism Spectrum Disorder (Adult Presentation) and Dissociative Disorders",
    icdCode: "F84.0",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Neurodevelopmental and Dissociative",
    definition:
      "Autism Spectrum Disorder (ASD) adult presentation: persistent deficits in social communication/interaction across multiple contexts + restricted/repetitive behaviors (DSM-5 Level 1–3 severity). Many adults receive late diagnosis (especially women who 'mask' or camouflage). Associated: sensory sensitivities, co-occurring anxiety/depression (70%), ADHD (50%), intellectual disability (varies). Dissociative Disorders: disruption in normal integration of consciousness, memory, identity, emotion, behavior, perception, or cognition. Types: Dissociative Identity Disorder (DID, formerly MPD — multiple distinct personality states; history of severe childhood trauma), Dissociative Amnesia (inability to recall autobiographical information, usually trauma-related; may include dissociative fugue — traveling/taking on new identity), Depersonalization/Derealization Disorder (persistent feeling of being detached from one's mind/body or that surroundings are unreal; intact reality testing distinguishes from psychosis).",
    diagnosticCriteria:
      "ASD: DSM-5 — persistent deficits in social communication (impaired reciprocal social interaction, nonverbal communication, developing/maintaining relationships) + restricted/repetitive behaviors (stereotypies, insistence on sameness, restricted interests, sensory abnormalities) + present from early developmental period + functional impairment. Screening: Adult ASD assessment tools (RAADS-R, AQ-10). Dissociative Amnesia: psychological testing; structured clinical interviews. DID: evaluate for childhood trauma history; dissociative experiences scale (DES). Rule out medical causes (seizure — SPECT, EEG; neurological).",
    presentation: {
      chiefComplaint: [
        "\"I've always struggled socially and never understood unwritten rules\"",
        "\"I lose periods of time and find myself in places I don't remember going to\"",
        "\"I feel like I'm watching myself from outside my body\"",
      ],
      associatedSymptoms: [
        "ASD adult: difficulty with theory of mind (understanding others' perspectives), literal interpretation of language (sarcasm/humor difficult), preference for routines, intense focused interests, sensory sensitivities (over/under-reactive to light/sound/touch); high-functioning ASD women often camouflage through imitation ('masking') — delayed diagnosis",
        "DID: recurrent gaps in recall of events, finding themselves with no memory of how they got somewhere, others reporting behaviors they don't recall, hearing internal 'voices' (internal voices of alters, not psychosis), distinct identity states with different names, ages, mannerisms",
        "Depersonalization/derealization: feeling like an outside observer of one's own body or thoughts; surroundings seem dreamlike, foggy, artificial; intact reality testing ('I know this is not real but it feels that way')",
      ],
      demographics: "ASD: prevalence 1:36 (US, 2023 CDC); 4:1 male:female (underdiagnosis in females). DID: 1–3% prevalence; nearly all have history of severe childhood trauma. Depersonalization/derealization: second most common dissociative symptom after dissociative amnesia; peak onset 16 years.",
    },
    distinguishingFeatures:
      "ASD masking in women: women with ASD often perform social behaviors through learned imitation — 'masking' — leading to exhaustion, burnout, and late diagnosis; anxiety and depression as presenting complaint. DID vs. schizophrenia: DID = distinct identity states, childhood trauma, dissociative amnesia between states; schizophrenia = auditory hallucinations perceived as external voices, thought insertion, negative symptoms. Depersonalization vs. derealization vs. psychosis: key = REALITY TESTING IS INTACT in dissociative disorders ('I feel unreal but I know I'm real').",
    redFlags: [
      "ASD adult with co-occurring severe depression or suicidal ideation: higher suicide risk than neurotypical population — proactive screening and safety planning",
      "DID misdiagnosed as schizophrenia: antipsychotics unhelpful and may harm; trauma-focused psychotherapy is the treatment",
      "Dissociative fugue: legal implications — establish identity, safety, medical clearance; rule out medical causes (postictal, TBI, encephalitis)",
    ],
    mnemonics: [
      {
        name: "Dissociative Disorders — DIRt",
        content:
          "D — DID (Dissociative Identity Disorder): multiple identity states, childhood trauma, amnesia between alters\nI — Identity disruption + amnesia + trauma history\nR — Reality testing INTACT (distinguishes from psychosis)\nt — trauma-focused psychotherapy is treatment\n\nDepersonalization/Derealization: '2-D's'\nDerealization = Surroundings feel unreal/dreamlike\nDepersonalization = Detached from OWN body/thoughts\nReality testing intact: 'I know it's not real but it feels that way'\n\nASD in Women — MASKING:\nM — Mimicking social behavior\nA — Anxiety/depression as presenting symptoms\nS — Sensory differences (often hidden)\nK — 'Knowing the rules' but not naturally\nI — Intense interests\nN — Neurological but missed diagnosis\nG — Girls/women under-recognized and diagnosed later",
      },
    ],
    pimpingQuestions: [
      "What is 'masking' in autism spectrum disorder and why does it lead to underdiagnosis in women?",
      "How do you distinguish DID from schizophrenia?",
      "What is depersonalization and how does it differ from derealization?",
      "Why is the presence of intact reality testing important in dissociative disorders?",
      "What is the treatment for dissociative identity disorder?",
    ],
  },

  {
    id: "bm-cond-27",
    name: "Binge Eating Disorder, ARFID, and Other Eating/Personality Disorders",
    icdCode: "F50.81",
    rotation: "behavioral-medicine",
    category: "Psychiatric / Eating and Personality Disorders",
    definition:
      "Binge Eating Disorder (BED): most common eating disorder in the US — recurrent binge eating episodes (eating large amounts in discrete period + feeling out of control) ≥1×/week × 3 months + marked distress + NO compensatory behaviors (unlike bulimia). Associated with obesity. Treatment: CBT + SSRIs; lisdexamfetamine (Vyvanse) — first FDA-approved medication for BED. ARFID (Avoidant/Restrictive Food Intake Disorder): persistent failure to meet nutritional needs, NOT driven by body image concerns; based on sensory characteristics, fear of choking/vomiting, or apparent lack of interest in food; common in children with ASD. Personality disorders overview: Cluster A (odd/eccentric) — Paranoid, Schizoid, Schizotypal; Cluster B (dramatic/emotional) — Antisocial (ASPD), Borderline (BPD), Histrionic, Narcissistic; Cluster C (anxious/fearful) — Avoidant, Dependent, Obsessive-Compulsive (OCPD). Antisocial PD (ASPD): pervasive disregard for/violation of rights of others since age 15; prior conduct disorder before 15.",
    diagnosticCriteria:
      "BED: DSM-5 — binge eating ≥1×/week × 3 months + ≥3 of: eating faster than normal, eating until uncomfortably full, eating large amounts when not hungry, eating alone due to embarrassment, feeling disgusted/depressed/guilty after binge + marked distress + NO purging/compensation. ARFID: nutritional/energy deficiency + ≥1 of: significant weight loss, nutritional deficiency, dependence on supplements, or interfering with psychosocial functioning; not due to food unavailability or cultural practice, not explained by body dysmorphia. Cluster B PD diagnosis: persistent maladaptive pattern from adolescence/early adulthood across multiple contexts.",
    presentation: {
      chiefComplaint: [
        "\"I eat huge amounts of food in one sitting and can't stop myself, and then I feel disgusted\"",
        "\"My child only eats 5 foods and is losing weight — not because they think they're fat\"",
        "\"My patient has repeatedly been arrested and shows no remorse\"",
      ],
      associatedSymptoms: [
        "BED: overweight/obesity in most; bingeing occurs in response to negative emotions; episodes feel out of control; significant shame/guilt; NOT followed by purging (distinguishes from bulimia)",
        "ARFID: extreme picky eating in child beyond normal toddler stage; limited food repertoire based on texture/color/smell; avoids based on fear of choking/vomiting; not about weight or appearance",
        "ASPD: deceitfulness, impulsivity, irritability, aggression, reckless disregard for safety, irresponsibility, lack of remorse; history of conduct disorder; often presents in legal/forensic context; diagnosis requires age ≥18 (but conduct disorder symptoms before 15)",
        "Narcissistic PD: grandiose sense of self-importance, preoccupation with fantasies of success/power, belief in being special, need for admiration, lack of empathy, envious of others",
      ],
      demographics: "BED: affects 3.5% of women, 2% of men; all ethnic groups (more common in Latinx and white individuals in US studies). ARFID: more common in males, children with ASD or anxiety disorders. ASPD: 3% in men, 1% in women; highly represented in incarcerated populations (up to 40–70%).",
    },
    distinguishingFeatures:
      "BED vs. Bulimia Nervosa: BED = binge without compensatory behaviors; bulimia = binge WITH purging/compensation (vomiting, laxatives, exercise). BED associated with obesity; bulimia patients often normal weight. OCPD vs. OCD: OCPD = ego-syntonic (consistent with self, not distressing to patient — 'perfectionism is a virtue'); OCD = ego-dystonic (intrusive, unwanted, distressing). ASPD vs. BPD: ASPD = consistent callousness, exploitation, disregard for others, criminal behavior, lacks empathy (predatory); BPD = emotional dysregulation, fear of abandonment, identity disturbance, impulsivity driven by emotional pain (not predatory).",
    redFlags: [
      "ARFID with severe malnutrition: may require medical stabilization (NG feeds); nutritional rehabilitation before behavioral interventions",
      "BED with comorbid depression/suicidality: treat eating disorder AND mood disorder (SSRIs help both); lisdexamfetamine is first-line FDA-approved for BED",
      "ASPD in therapeutic setting: no FDA-approved pharmacotherapy; therapy has limited efficacy; focus on managing specific comorbidities (depression, SUD); do not prescribe controlled substances",
    ],
    mnemonics: [
      {
        name: "Personality Disorder Clusters — 'Weird, Wild, Worried'",
        content:
          "Cluster A — WEIRD (Odd/Eccentric):\nParanoid (suspicious)\nSchizoid (detached, no interest in relationships)\nSchizotypal (magical thinking, odd perceptions, eccentric)\n\nCluster B — WILD (Dramatic/Emotional/Erratic):\nAntisocial (callous, violates rights — 'Bad')\nBorderline (emotional dysregulation, splitting — 'Borderline')\nHistrionic (attention-seeking, dramatic — 'Hello!')\nNarcissistic (grandiose, lacks empathy — 'Number 1')\n\nCluster C — WORRIED (Anxious/Fearful):\nAvoidant (avoids relationships, fears rejection)\nDependent (excessive need to be cared for)\nOCPD (perfectionism, rigid, orderly)\n\nBED vs Bulimia: BED = Binge Only (no purge)\nASPD: Must have Conduct Disorder BEFORE age 15\nVyvanse (lisdexamfetamine) = FDA-approved for BED",
      },
    ],
    pimpingQuestions: [
      "How does binge eating disorder differ from bulimia nervosa?",
      "What is the first FDA-approved medication for binge eating disorder?",
      "What is ARFID and how does it differ from anorexia nervosa?",
      "What are the three personality disorder clusters and which disorders fall in each?",
      "What is the key distinction between OCPD and OCD?",
    ],
  },
];
