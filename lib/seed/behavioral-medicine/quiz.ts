import type { QuizQuestion } from "@/types";

export const behavioralMedicineQuiz: QuizQuestion[] = [
  {
    id: "bm-q-001",
    rotationSlug: "behavioral-medicine",
    question:
      "A 28-year-old woman presents with 3 weeks of depressed mood, anhedonia, insomnia, fatigue, and passive suicidal ideation. She reports no prior psychiatric history. Before initiating an antidepressant, which of the following tests is MOST important to order?",
    options: [
      "A. MRI brain",
      "B. TSH",
      "C. Urine drug screen",
      "D. Prolactin level",
      "E. Fasting lipid panel",
    ],
    correctAnswer: "B",
    explanation:
      "TSH is the most important initial test before diagnosing MDD. Hypothyroidism is a common, reversible cause of depressive symptoms that must be ruled out before starting antidepressants. Hypothyroidism presents with fatigue, low mood, cognitive slowing, weight gain, constipation, and cold intolerance. Starting an antidepressant for undiagnosed hypothyroidism provides suboptimal relief and delays appropriate treatment (levothyroxine). MRI brain is not routine. Urine drug screen is important but less critical than TSH for a 28-year-old woman with no substance use history.",
    topic: "Mood Disorders — Workup",
    difficulty: "medium",
  },
  {
    id: "bm-q-002",
    rotationSlug: "behavioral-medicine",
    question:
      "A 32-year-old man is started on sertraline for MDD. Two weeks later he calls to say he wants to stop taking the medication because 'it's not working.' He reports mild nausea and feeling slightly more anxious. What is the BEST response?",
    options: [
      "A. Switch to bupropion due to SSRI intolerance",
      "B. Reassure that full antidepressant effects take 4–8 weeks; GI and anxiety symptoms are common early side effects",
      "C. Increase the dose to accelerate therapeutic effect",
      "D. Add buspirone 15 mg BID immediately",
      "E. Stop sertraline and start mirtazapine",
    ],
    correctAnswer: "B",
    explanation:
      "SSRIs typically require 4–8 weeks for full antidepressant effect. Nausea (improved by taking with food) and initial anxiety are common transient side effects in the first 1–2 weeks. Patient education is crucial — premature discontinuation is the most common cause of treatment failure. Switching or augmenting at 2 weeks is premature and inappropriate. An adequate trial requires the therapeutic dose for at least 4–6 weeks before assessing response.",
    topic: "Pharmacology — SSRI Side Effects",
    difficulty: "easy",
  },
  {
    id: "bm-q-003",
    rotationSlug: "behavioral-medicine",
    question:
      "A 45-year-old woman with MDD is started on sertraline. She is also taking ibuprofen for arthritis. Which of the following risks is MOST important to counsel her about regarding this combination?",
    options: [
      "A. Serotonin syndrome",
      "B. QTc prolongation",
      "C. Increased risk of GI bleeding",
      "D. Hypertensive crisis",
      "E. Supratherapeutic sertraline levels",
    ],
    correctAnswer: "C",
    explanation:
      "SSRIs inhibit platelet aggregation by reducing serotonin uptake into platelets. Combined with NSAIDs (which also affect platelet function and GI mucosa), the risk of GI bleeding is significantly increased. Patients on SSRIs + NSAIDs should use acetaminophen when possible, or add a PPI if NSAID use is necessary. Serotonin syndrome requires a serotonergic drug (not ibuprofen). Hypertensive crisis is associated with MAOIs + tyramine. QTc prolongation is not a significant concern with sertraline + ibuprofen.",
    topic: "Pharmacology — Drug Interactions",
    difficulty: "medium",
  },
  {
    id: "bm-q-004",
    rotationSlug: "behavioral-medicine",
    question:
      "A 24-year-old man is diagnosed with his first manic episode: euphoric mood, decreased need for sleep, pressured speech, grandiosity, and risky financial decisions for 10 days. He has no prior psychiatric history. Which of the following is the MOST appropriate next step?",
    options: [
      "A. Start escitalopram 10 mg/day",
      "B. Start lithium + olanzapine and assess need for hospitalization",
      "C. Start sertraline + alprazolam PRN",
      "D. Observe outpatient for 2 more weeks before treatment",
      "E. Start valproate + fluoxetine",
    ],
    correctAnswer: "B",
    explanation:
      "First manic episode = Bipolar I Disorder. Treatment for acute mania: mood stabilizer (lithium or valproate) + atypical antipsychotic (olanzapine, quetiapine, or aripiprazole) — combination is more effective than monotherapy. Assess for hospitalization: this patient has significant impairment from risky financial decisions and likely needs hospitalization. NEVER give antidepressant monotherapy in bipolar disorder — this can worsen mania or cause rapid cycling. Antidepressants should NEVER be used without a mood stabilizer in bipolar patients.",
    topic: "Bipolar Disorder — Acute Management",
    difficulty: "medium",
  },
  {
    id: "bm-q-005",
    rotationSlug: "behavioral-medicine",
    question:
      "A 38-year-old man with bipolar I disorder is stable on lithium 900 mg/day. He develops a urinary tract infection and his PCP prescribes ibuprofen 600 mg TID for pain and trimethoprim-sulfamethoxazole for the infection. Three days later, he develops coarse tremor, confusion, and ataxia. His lithium level is 2.3 mEq/L. What is the MOST appropriate next step?",
    options: [
      "A. Continue lithium and recheck level in 1 week",
      "B. Stop lithium, give aggressive IV normal saline hydration, cardiac monitoring",
      "C. Reduce lithium dose by 50% and recheck level in 3 days",
      "D. Give hemodialysis immediately",
      "E. Start benzodiazepine for tremor",
    ],
    correctAnswer: "B",
    explanation:
      "This is moderate lithium toxicity (level 2.3 mEq/L with coarse tremor, confusion, ataxia). Ibuprofen (NSAID) reduces renal prostaglandin synthesis → reduces renal lithium clearance → lithium toxicity. Treatment: STOP lithium immediately, aggressive IV normal saline hydration (increases renal lithium clearance), cardiac monitoring (QTc). TMP-SMX can also increase lithium levels by reducing renal tubular secretion. Hemodialysis is indicated for: level > 3.5 mEq/L, severe symptoms (seizures, arrhythmias, coma), or failure of conservative management. This patient's level warrants stopping lithium and hydration — not yet dialysis.",
    topic: "Pharmacology — Lithium Toxicity",
    difficulty: "hard",
  },
  {
    id: "bm-q-006",
    rotationSlug: "behavioral-medicine",
    question:
      "A patient with schizophrenia who has failed two adequate trials of antipsychotic medications is being considered for clozapine therapy. Which of the following is the MOST critical monitoring parameter for clozapine use?",
    options: [
      "A. Serum creatinine",
      "B. Absolute neutrophil count (ANC)",
      "C. Serum prolactin",
      "D. QTc interval",
      "E. Fasting glucose",
    ],
    correctAnswer: "B",
    explanation:
      "Clozapine causes agranulocytosis (life-threatening drop in neutrophils) in approximately 1–2% of patients. This is the reason clozapine is only available through the Clozapine REMS (Risk Evaluation and Mitigation Strategy) program, which mandates ANC monitoring: weekly × 6 months, then biweekly × 6 months, then monthly. If ANC < 1500/mm³ (mild) → increase monitoring. If ANC < 1000/mm³ (moderate) → interrupt clozapine. If ANC < 500/mm³ (severe agranulocytosis) → stop clozapine permanently. Clozapine is the gold standard for treatment-resistant schizophrenia (TRS), defined as failure of ≥ 2 adequate antipsychotic trials.",
    topic: "Pharmacology — Clozapine / Treatment-Resistant Schizophrenia",
    difficulty: "medium",
  },
  {
    id: "bm-q-007",
    rotationSlug: "behavioral-medicine",
    question:
      "A 30-year-old woman with schizophrenia is started on haloperidol. Three hours later, she develops a fixed, sustained upward deviation of her eyes that she cannot overcome voluntarily, and her neck is torticollis to the right. She is in significant distress. What is the BEST treatment?",
    options: [
      "A. Propranolol 10 mg PO",
      "B. Benztropine 1–2 mg IM or IV",
      "C. Valbenazine 40 mg PO",
      "D. Clonazepam 1 mg IV",
      "E. Discontinue haloperidol and observe",
    ],
    correctAnswer: "B",
    explanation:
      "This is an acute dystonic reaction — sustained muscle contractions causing oculogyric crisis and torticollis. Acute dystonias occur within hours to days of starting high-potency typical antipsychotics (haloperidol, fluphenazine). Treatment: benztropine (anticholinergic) 1–2 mg IM/IV OR diphenhydramine 50 mg IM/IV — both are rapidly effective. Relief typically occurs within 15–30 minutes. Afterward, prescribe oral benztropine prophylactically if continuing antipsychotic. Propranolol treats akathisia (not dystonia). Valbenazine is for tardive dyskinesia. Dystonia ≠ tardive dyskinesia (tardive = chronic, delayed onset).",
    topic: "Pharmacology — Extrapyramidal Side Effects",
    difficulty: "easy",
  },
  {
    id: "bm-q-008",
    rotationSlug: "behavioral-medicine",
    question:
      "A patient on haloperidol for 2 weeks develops a temperature of 40.2°C, blood pressure 160/100 mmHg, heart rate 120 bpm, diffuse 'lead pipe' rigidity, and diaphoresis. Labs show CK 15,000 U/L, leukocytosis, and elevated creatinine. What is the MOST likely diagnosis and initial treatment?",
    options: [
      "A. Serotonin syndrome — stop haloperidol and give cyproheptadine",
      "B. Neuroleptic Malignant Syndrome — stop haloperidol, give dantrolene and bromocriptine",
      "C. Malignant hyperthermia — stop haloperidol, give dantrolene",
      "D. Anticholinergic toxidrome — give physostigmine",
      "E. Heat stroke — aggressive cooling only",
    ],
    correctAnswer: "B",
    explanation:
      "Neuroleptic Malignant Syndrome (NMS) — caused by dopamine antagonists (antipsychotics). Classic tetrad: hyperthermia + LEAD PIPE rigidity + altered mental status + autonomic instability. Elevated CK (muscle breakdown), leukocytosis, elevated creatinine (rhabdomyolysis → AKI). Treatment: STOP antipsychotic immediately, dantrolene (reduces muscle rigidity/hyperthermia), bromocriptine (dopamine agonist — reverses D2 blockade), cooling measures, aggressive hydration, ICU care. NMS vs. Serotonin Syndrome: NMS = lead pipe rigidity + slow onset (days); SS = clonus/hyperreflexia + rapid onset (hours). Malignant hyperthermia = only with volatile anesthetics/succinylcholine, not antipsychotics.",
    topic: "Pharmacology — NMS vs. Serotonin Syndrome",
    difficulty: "hard",
  },
  {
    id: "bm-q-009",
    rotationSlug: "behavioral-medicine",
    question:
      "A 26-year-old woman with a history of bulimia nervosa presents with MDD requesting treatment. Which antidepressant is CONTRAINDICATED in this patient?",
    options: [
      "A. Sertraline",
      "B. Mirtazapine",
      "C. Bupropion",
      "D. Fluoxetine",
      "E. Escitalopram",
    ],
    correctAnswer: "C",
    explanation:
      "Bupropion is ABSOLUTELY CONTRAINDICATED in bulimia nervosa and anorexia nervosa. Reason: electrolyte derangements from purging (hypokalemia, hypomagnesemia) lower the seizure threshold, and bupropion has dose-dependent pro-convulsant activity. The combination dramatically increases seizure risk. Fluoxetine is actually FDA-approved for bulimia nervosa (60 mg/day) and is the PREFERRED antidepressant in this patient. Sertraline and escitalopram are also acceptable. Mirtazapine is sometimes avoided due to weight gain concern in patients with eating disorders but is not contraindicated.",
    topic: "Pharmacology — Bupropion Contraindications",
    difficulty: "medium",
  },
  {
    id: "bm-q-010",
    rotationSlug: "behavioral-medicine",
    question:
      "A 42-year-old woman with bipolar disorder wants to become pregnant. She is currently stable on valproate 1000 mg/day. Which counseling point regarding valproate and pregnancy is MOST accurate?",
    options: [
      "A. Valproate is safe in pregnancy and does not need to be changed",
      "B. Valproate is associated with neural tube defects and cognitive impairment — transition to a safer alternative before conception",
      "C. Valproate can be continued through the first trimester but must be stopped in the second trimester",
      "D. Valproate is only dangerous if taken with folic acid",
      "E. Valproate is associated with Ebstein's anomaly — switch to lithium instead",
    ],
    correctAnswer: "B",
    explanation:
      "Valproate has the HIGHEST teratogenic risk of any mood stabilizer or anticonvulsant: neural tube defects (spina bifida — 1–5%), cardiac defects, cognitive impairment (IQ reduction of 7–10 points), and increased risk of autism spectrum disorder. This is a BLACK BOX WARNING. The FDA strongly recommends against valproate use in women of reproductive age when alternatives exist. Plan: transition to a safer alternative (lamotrigine has the best safety profile in pregnancy among mood stabilizers) BEFORE conception, supplement folic acid 4 mg/day if valproate cannot be avoided. Ebstein's anomaly is associated with lithium (not valproate).",
    topic: "Pharmacology — Teratogenicity",
    difficulty: "medium",
  },
  {
    id: "bm-q-011",
    rotationSlug: "behavioral-medicine",
    question:
      "A 35-year-old man with MDD and comorbid ADHD presents requesting treatment. He also reports difficulty with sexual dysfunction on his previous SSRI. Which antidepressant is the BEST choice for this patient?",
    options: [
      "A. Paroxetine",
      "B. Sertraline",
      "C. Bupropion",
      "D. Mirtazapine",
      "E. Venlafaxine",
    ],
    correctAnswer: "C",
    explanation:
      "Bupropion (NDRI) is the ideal choice for this patient for three reasons: (1) Effective antidepressant for MDD, (2) Has evidence for ADHD treatment (off-label but commonly used), (3) NO sexual side effects — unlike SSRIs which cause sexual dysfunction in 30–40% of patients. Additionally, bupropion tends to cause weight loss, not gain. Paroxetine has the worst sexual dysfunction and discontinuation syndrome among SSRIs. Sertraline and venlafaxine both cause sexual dysfunction. Mirtazapine has no sexual side effects but causes significant sedation and weight gain, not helpful for ADHD.",
    topic: "Pharmacology — Antidepressant Selection",
    difficulty: "medium",
  },
  {
    id: "bm-q-012",
    rotationSlug: "behavioral-medicine",
    question:
      "A 55-year-old man presents with 18 months of progressive personality change: disinhibition, hypersexual behavior, poor judgment, and compulsive eating. His wife notes he has been making inappropriate jokes at work and was recently fired. His memory is relatively intact. MMSE = 26/30. MRI shows frontal and temporal lobe atrophy. What is the MOST likely diagnosis?",
    options: [
      "A. Alzheimer's disease",
      "B. Vascular dementia",
      "C. Behavioral variant frontotemporal dementia (bvFTD)",
      "D. Bipolar I disorder — manic phase",
      "E. Delirium",
    ],
    correctAnswer: "C",
    explanation:
      "Behavioral variant frontotemporal dementia (bvFTD) presents with PERSONALITY CHANGE and behavioral disinhibition as the primary feature, with relatively preserved memory early on. Key features: disinhibition, impulsivity, hypersexuality, compulsive/ritualistic behaviors, dietary changes (sweet preference), lack of empathy, emotional blunting. Onset typically in 50s-60s (younger than Alzheimer's). MRI: frontal and temporal lobe atrophy (distinct from Alzheimer's which shows parietal > temporal > frontal). MMSE may be relatively preserved early because it doesn't test executive function well. Alzheimer's: memory loss is the primary feature. Bipolar mania: episodic, not progressive, and would have prior mood history.",
    topic: "Neurocognitive Disorders — FTD",
    difficulty: "hard",
  },
  {
    id: "bm-q-013",
    rotationSlug: "behavioral-medicine",
    question:
      "During a psychiatric assessment, a patient with depression states 'I've been thinking about driving my car into a tree.' He says he has thought about this daily for the past week and knows where he would do it. He denies wanting to tell anyone or call for help. Which of the following is the MOST appropriate next step?",
    options: [
      "A. Establish a no-suicide contract and schedule a follow-up appointment in 2 weeks",
      "B. Initiate a psychiatric hold (involuntary hospitalization) and arrange inpatient psychiatric care",
      "C. Increase antidepressant dose and follow up in 1 week",
      "D. Refer to outpatient therapy and provide the crisis hotline number",
      "E. Prescribe a benzodiazepine for anxiety and reassess in 3 days",
    ],
    correctAnswer: "B",
    explanation:
      "This patient has active suicidal ideation with a specific plan (driving into a tree), specific location, and intent — this represents HIGH-RISK suicidality requiring EMERGENCY psychiatric hospitalization. Involuntary psychiatric hospitalization is indicated when a patient poses an imminent danger to themselves and refuses voluntary admission. No-suicide contracts are NOT effective and provide false reassurance. Increasing the antidepressant is insufficient and delayed. Crisis hotline is appropriate as an adjunct but not primary intervention when imminent risk is present. Providing lethal means counseling (access to a car) is also part of the assessment.",
    topic: "Suicide Risk Assessment — Safety",
    difficulty: "medium",
  },
  {
    id: "bm-q-014",
    rotationSlug: "behavioral-medicine",
    question:
      "A 22-year-old college student presents with a 3-month history of intrusive, unwanted thoughts about harming her infant nephew, which she finds horrifying and ego-dystonic. She compulsively checks on him repeatedly to ensure he is safe, spending hours per day doing so. She has no intent to harm him. What is the MOST likely diagnosis and first-line treatment?",
    options: [
      "A. Schizophrenia — start haloperidol",
      "B. OCD with harm obsessions — start sertraline and CBT with ERP",
      "C. Antisocial personality disorder — no medication indicated",
      "D. Psychotic depression — start an antidepressant + antipsychotic",
      "E. PTSD — start trauma-focused CBT",
    ],
    correctAnswer: "B",
    explanation:
      "Obsessive-Compulsive Disorder (OCD) with harm obsessions — a common subtype. Key features: intrusive, unwanted (ego-dystonic) thoughts about harm + compulsive checking rituals to reduce anxiety. CRITICALLY important: ego-dystonic intrusive thoughts about harm in OCD are NOT indicative of violent intent — the patient is horrified by these thoughts. This distinguishes OCD from actual psychosis or homicidal intent. First-line treatment: SSRI (sertraline, fluoxetine, fluvoxamine, or clomipramine) + CBT with Exposure and Response Prevention (ERP — gold standard psychotherapy for OCD). SSRIs require higher doses for OCD (sertraline up to 200 mg/day) and longer trials (8–12 weeks).",
    topic: "Anxiety Disorders — OCD",
    difficulty: "medium",
  },
  {
    id: "bm-q-015",
    rotationSlug: "behavioral-medicine",
    question:
      "A 19-year-old man is brought to the ED with 2 days of agitation, paranoid delusions, and auditory hallucinations. His urine drug screen is positive for THC. His symptoms partially improve after 48 hours of abstinence and antipsychotic treatment, but psychosis persists at 1 month follow-up despite abstinence. What does this clinical course suggest?",
    options: [
      "A. Cannabis-induced psychotic disorder only — stop antipsychotic",
      "B. Emerging primary psychotic disorder (schizophrenia) — continue antipsychotic and follow longitudinally",
      "C. Malingering — no treatment needed",
      "D. Bipolar I disorder — start lithium",
      "E. Brief psychotic disorder — expect full resolution within 1 month",
    ],
    correctAnswer: "B",
    explanation:
      "When psychotic symptoms persist beyond the expected clearance of the substance (typically 1–4 weeks for cannabis), the diagnosis shifts toward a primary psychotic disorder (e.g., schizophrenia). Cannabis-induced psychotic disorder is diagnosed when symptoms resolve with abstinence. Cannabis is a major risk factor for schizophrenia, particularly high-potency THC products. Individuals with a genetic predisposition may be 'unmasked' by cannabis use. This patient needs: continued antipsychotic treatment, psychiatric follow-up, cannabis abstinence counseling, and longitudinal monitoring. Early treatment of first-episode psychosis improves long-term outcomes (duration of untreated psychosis correlates with prognosis).",
    topic: "Psychotic Disorders — Cannabis and Schizophrenia",
    difficulty: "hard",
  },
  {
    id: "bm-q-016",
    rotationSlug: "behavioral-medicine",
    question:
      "A 68-year-old woman with dementia develops agitation and visual hallucinations. Her family asks for medication to help. Neurologic exam shows mild parkinsonism. Which antipsychotic would be SAFEST to use if pharmacologic treatment is necessary?",
    options: [
      "A. Haloperidol 2 mg BID",
      "B. Risperidone 1 mg BID",
      "C. Quetiapine 25 mg QHS",
      "D. Olanzapine 5 mg daily",
      "E. Chlorpromazine 25 mg TID",
    ],
    correctAnswer: "C",
    explanation:
      "This presentation is consistent with Lewy Body Dementia (LBD): dementia + visual hallucinations + parkinsonism. Patients with LBD are exquisitely sensitive to dopamine blockade — high-potency antipsychotics (haloperidol, risperidone) can cause severe, potentially fatal EPS, NMS, and sudden worsening in LBD. Quetiapine (low D2 affinity) and clozapine are the only antipsychotics relatively safe in LBD. ALL antipsychotics carry a black box warning for increased mortality in elderly patients with dementia — they should be used only when non-pharmacologic measures have failed, at the lowest effective dose for the shortest time. Haloperidol and chlorpromazine are high-risk. Risperidone has moderate D2 affinity — risky in LBD.",
    topic: "Geriatric Psychiatry — Lewy Body Dementia",
    difficulty: "hard",
  },
  {
    id: "bm-q-017",
    rotationSlug: "behavioral-medicine",
    question:
      "A 34-year-old veteran with PTSD has chronic nightmares and sleep disturbances. He is already on sertraline 200 mg/day with good response for his daytime PTSD symptoms. Which medication is BEST to add specifically for his nightmares?",
    options: [
      "A. Zolpidem 10 mg QHS",
      "B. Prazosin 1–6 mg QHS",
      "C. Clonazepam 1 mg QHS",
      "D. Quetiapine 50 mg QHS",
      "E. Doxepin 10 mg QHS",
    ],
    correctAnswer: "B",
    explanation:
      "Prazosin is an alpha-1 adrenergic antagonist that specifically reduces PTSD-related nightmares and sleep disturbances by blocking noradrenergic hyperactivation during sleep (the neurobiological basis of PTSD nightmares). It is recommended by the VA/DoD PTSD guidelines for this indication. Start at 1 mg QHS (to minimize orthostatic hypotension), titrate gradually. Warn patient to rise slowly from bed. Zolpidem (Z-drug sedative-hypnotic) is not recommended for PTSD nightmares. Clonazepam has no evidence for nightmares and carries dependence risk. Quetiapine has some evidence but is not first-line for nightmares specifically. Doxepin is FDA-approved for insomnia but not specifically for PTSD nightmares.",
    topic: "PTSD — Pharmacotherapy",
    difficulty: "medium",
  },
  {
    id: "bm-q-018",
    rotationSlug: "behavioral-medicine",
    question:
      "An 8-year-old boy is brought in by his parents for evaluation of poor academic performance and inability to pay attention in class. His teacher reports he frequently stares into space for 5–10 seconds, during which he is unresponsive, then immediately resumes normal activity without confusion. His mother reports these episodes happen 15–20 times per day. EEG shows 3 Hz spike-and-wave discharges. What is the MOST appropriate management?",
    options: [
      "A. Diagnose ADHD and start methylphenidate",
      "B. Diagnose absence epilepsy and start ethosuximide",
      "C. Diagnose depersonalization disorder and start CBT",
      "D. Diagnose absence epilepsy and start valproate",
      "E. Reassure parents and observe — no treatment needed",
    ],
    correctAnswer: "B",
    explanation:
      "Childhood absence epilepsy: brief (5–30 second) staring spells with abrupt onset and offset, no post-ictal confusion, multiple episodes per day, EEG shows 3 Hz spike-and-wave discharges. First-line treatment: ethosuximide (preferred for pure absence seizures — fewer cognitive side effects, no risk of hepatotoxicity or teratogenicity compared to valproate). Valproate is acceptable but second-line due to side effect profile (weight gain, hepatotoxicity, teratogenicity). Lamotrigine is third-line. The key distinction from ADHD: absence seizures have abrupt complete unresponsiveness with immediate return to baseline; ADHD inattention is context-dependent and gradual. Stimulants would worsen seizures.",
    topic: "Neurodevelopmental — Absence Seizures vs. ADHD",
    difficulty: "hard",
  },
  {
    id: "bm-q-019",
    rotationSlug: "behavioral-medicine",
    question:
      "A psychiatrist diagnoses a patient with schizophrenia. During the session, the patient tells the psychiatrist that he plans to 'make his roommate pay' and describes a specific plan to harm him. The roommate is identified by name. What is the psychiatrist's legal obligation?",
    options: [
      "A. Maintain confidentiality — psychiatric information is always protected",
      "B. Warn the identified victim and notify law enforcement (Tarasoff duty to protect)",
      "C. Only document the threat in the medical record",
      "D. Immediately hospitalize the patient and take no further action",
      "E. Consult with colleagues but take no action until patient acts",
    ],
    correctAnswer: "B",
    explanation:
      "Tarasoff v. Regents of the University of California (1976) established the 'duty to protect' (often called 'duty to warn'): when a patient makes a credible, specific threat against an identifiable third party, the clinician has a legal obligation to take steps to protect that person. This typically includes: (1) Warn the identified victim directly, AND (2) Notify law enforcement. This overrides the standard duty of confidentiality. Hospitalization alone is insufficient if the victim is at risk. Simply documenting is insufficient. The duty is triggered by SPECIFIC, IDENTIFIABLE victim + credible threat — vague threats do not typically trigger this obligation. Note: Tarasoff laws vary by state.",
    topic: "Ethics and Law — Tarasoff / Duty to Warn",
    difficulty: "medium",
  },
  {
    id: "bm-q-020",
    rotationSlug: "behavioral-medicine",
    question:
      "A 16-year-old boy is brought in by his parents for evaluation. He has been on methylphenidate for ADHD for 2 years with good effect. His pediatrician notices that his height velocity has slowed. He is now in the 25th percentile for height, down from the 50th percentile 2 years ago. What is the MOST appropriate next step?",
    options: [
      "A. Stop methylphenidate immediately and switch to atomoxetine",
      "B. Continue methylphenidate and reassure that growth suppression is permanent",
      "C. Consider 'drug holidays' (weekends and summers), monitor growth velocity, and discuss risk-benefit with family",
      "D. Increase methylphenidate dose to see if growth improves",
      "E. Add growth hormone injections",
    ],
    correctAnswer: "C",
    explanation:
      "Stimulant medications (methylphenidate, amphetamines) suppress appetite and may cause modest growth suppression in height velocity (approximately 1–2 cm/year reduction). This effect appears to attenuate over time and most studies show catch-up growth occurs. Management: (1) Drug holidays during weekends and summers allow catch-up growth and can also demonstrate continued benefit of medication, (2) Optimize medication timing (take after breakfast to minimize appetite suppression), (3) Ensure adequate nutrition, (4) Monitor height and weight every 3–6 months on a growth chart, (5) Risk-benefit discussion with family. Stopping stimulants entirely is not always appropriate if ADHD is well-controlled and functional impairment is significant. Growth hormone injections are not indicated for stimulant-induced growth suppression.",
    topic: "ADHD — Monitoring and Management",
    difficulty: "medium",
  },
];
