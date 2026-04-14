import type { PhysicalExamFinding } from "@/types";

export const behavioralMedicinePhysicalExam: PhysicalExamFinding[] = [
  {
    id: "bm-pe-mental-status-exam",
    conditionIds: [
      "bm-cond-01",
      "bm-cond-schizophrenia",
      "bm-cond-mania",
      "bm-cond-anxiety",
      "bm-cond-delirium",
    ],
    findingName: "Mental Status Examination (MSE)",
    category: "Psychiatric Assessment",
    description:
      "The Mental Status Examination (MSE) is the structured psychiatric equivalent of the physical exam. It systematically documents a patient's current mental functioning across 9 domains. Every psychiatric encounter requires a documented MSE. The MSE documents CURRENT CROSS-SECTIONAL presentation; the psychiatric history documents the longitudinal course.",
    technique:
      "OBSERVATIONS begin from the moment you see the patient (before any direct interaction). The MSE is observed and elicited throughout the clinical interview — do not administer it as a separate checklist. Use the mnemonic ASEPTIC or ATOMIC to remember the components.",
    steps: [
      {
        stepNumber: 1,
        title: "Appearance",
        description:
          "Observe: age/race/gender apparent, stated vs. apparent age (looking older than stated age suggests neglect, substance use, or medical comorbidity), grooming (hair, hygiene, nail care), dress (appropriate to weather, occasion, or bizarre/disheveled), nutritional status (cachectic vs. obese), body habitus, tattoos, scars, piercings, level of apparent distress. Document objectively: 'A 35-year-old man appearing stated age, disheveled with malodorous clothing and poor personal hygiene, who appears agitated.'"
      },
      {
        stepNumber: 2,
        title: "Behavior / Psychomotor Activity",
        description:
          "Psychomotor agitation: excessive purposeless motor activity (pacing, hand-wringing, inability to sit still) — seen in anxiety, akathisia, mania, agitated depression, delirium. Psychomotor retardation: slowed movements, long latency before responding, decreased spontaneous activity — seen in MDD, hypothyroidism, medication side effects (antipsychotics), catatonia. Eye contact: maintained, averted, poor (depression, autism), or staring (mania, psychosis). Abnormal movements: tardive dyskinesia (orofacial), tics (Tourette), tremor (benign, lithium-induced, parkinsonian), EPS (akathisia, dystonia). Catatonia: waxy flexibility (rigidity with ability to be molded into position), posturing, echopraxia (mimicking examiner movements), stupor, mutism, negativism."
      },
      {
        stepNumber: 3,
        title: "Speech",
        description:
          "Rate: normal, fast (pressured speech — mania, anxiety), slow (depression, psychomotor retardation). Rhythm/fluency: normal, stuttering, cluttered (tachyphemia). Tone: normal, monotone (depression, psychosis, Parkinson's), dysarthric (slurred — intoxication, medication toxicity, neurologic). Volume: normal, loud (mania, hearing loss), soft (depression, guarded). Amount: talkative, laconic (depression, negative symptoms), mute (catatonia, selective mutism). Latency: normal, increased (depression), decreased (mania). PRESSURED SPEECH: rapid, loud, difficult to interrupt — cardinal mania symptom."
      },
      {
        stepNumber: 4,
        title: "Mood and Affect",
        description:
          "MOOD: Subjective — the patient's OWN description of their emotional state. Quote directly: 'I feel down,' 'I'm on top of the world,' 'I feel nothing.' Document in QUOTATION MARKS. AFFECT: Objective — the clinician's OBSERVATION of the patient's emotional expression. Assess: Range (full vs. restricted vs. blunted vs. flat), Intensity (normal, heightened, diminished), Quality (euthymic, dysphoric, euphoric, anxious, irritable, labile), Congruence with mood and content (congruent or incongruent — incongruent affect with grandiose thought content = psychosis or mania). EXAMPLES: Flat affect = no variation in expression (schizophrenia, severe depression, Parkinson's). Blunted = reduced but not absent. Labile = rapid shifts (mania, borderline PD, TBI). Expansive = elevated, elated (mania)."
      },
      {
        stepNumber: 5,
        title: "Thought Process and Thought Content",
        description:
          "THOUGHT PROCESS (Form — how they think): Goal-directed/linear: normal. Circumstantial: eventually reaches goal but with many tangents. Tangential: never reaches goal, keeps going off topic. Flight of ideas (FOI): rapidly shifting between loosely associated topics — mania hallmark. Loose associations: illogical connections between thoughts. Word salad: completely incoherent mixture of words (severe psychosis). Clang associations: words connected by sound not meaning ('I need a beat, seat, feet, neat'). Perseveration: repetitive word/phrase/topic. Thought blocking: sudden stopping mid-sentence (patient reports mind going blank). THOUGHT CONTENT (What they think): Delusions (fixed false beliefs not amenable to logic): grandiose (I am God), persecutory (they are plotting against me), referential (TV talking to me), erotomanic, somatic, nihilistic. Ideas of reference. Suicidal ideation (see Safety Assessment section). Homicidal ideation. Obsessions (intrusive unwanted thoughts — OCD). Preoccupations. Phobias."
      },
      {
        stepNumber: 6,
        title: "Perception",
        description:
          "Hallucinations: sensory perceptions WITHOUT external stimuli. Auditory (most common in psychosis): command hallucinations (most dangerous), running commentary, conversing voices. Visual (more common in delirium, dementia, substance intoxication/withdrawal). Tactile: formication (feeling bugs crawling on skin — stimulant use or alcohol withdrawal). Olfactory: rare — can indicate temporal lobe epilepsy or schizophrenia. Gustatory. Illusions: misinterpretation of real stimuli (seeing a coat rack as a person in the dark). Derealization: the world feels unreal (dissociation). Depersonalization: feeling detached from one's own body/mind. Assess by asking: 'Do you see or hear things others cannot? Do you hear voices when no one is around?'"
      },
      {
        stepNumber: 7,
        title: "Cognition",
        description:
          "Level of consciousness: alert, lethargic, stuporous, comatose. Orientation: person (name), place (where are we?), time (date, month, year, day of week), situation. Orientation × 4. Attention and concentration: digit span (repeat 5-7 digits forward, 3-5 backward), serial 7s (count backward from 100 by 7s), WORLD backward (W-D-L-R-O). Memory: Immediate recall (repeat 3 words now), Short-term (3-word recall after 5 min), Long-term (recall historical personal or public events — ask about president, major life events). Language: naming (watch, pen), repetition ('no ifs, ands, or buts'), comprehension (follow 3-step command). Visuospatial: MMSE or MoCA clock drawing. Executive function: COGNISTAT, Trail Making Test B, verbal fluency. Mini-Mental State Exam (MMSE): 30 points; ≤ 23 = cognitive impairment. MoCA: 30 points; ≤ 25 = possible impairment (more sensitive for mild neurocognitive disorder)."
      },
      {
        stepNumber: 8,
        title: "Insight and Judgment",
        description:
          "INSIGHT: Patient's awareness and understanding of their illness. Graded as: Full insight (acknowledges illness, understands need for treatment), Partial insight (acknowledges something is wrong but doesn't believe it's psychiatric), Poor insight (denies illness — 'I'm fine, everyone else is crazy'), No insight (anosognosia — common in severe psychosis, mania). Poor insight is the #1 predictor of medication non-adherence and relapse in psychotic disorders. JUDGMENT: Patient's ability to make safe, reasonable decisions. Assess with hypothetical situations: 'What would you do if you found a stamped, addressed envelope on the sidewalk?' OR 'What would you do if you smelled smoke in a movie theater?' OR observe real-life decision-making (spending, relationships, self-care). Also assess reality testing and impulse control."
      },
      {
        stepNumber: 9,
        title: "Safety Assessment — Suicidal Ideation (Required at Every Visit)",
        description:
          "Use a structured suicide risk assessment at EVERY psychiatric visit. Columbia Suicide Severity Rating Scale (C-SSRS) — standard: (1) Wish to be dead: 'Have you wished you were dead or wished you could go to sleep and not wake up?' (2) Suicidal ideation: 'Have you had thoughts of killing yourself?' (3) Ideation with method: 'Have you thought about how you might do this?' (4) Ideation with intent: 'Have you had some intention of acting on these thoughts?' (5) Ideation with plan and intent: 'Have you started to work out the details of how to kill yourself? Do you intend to carry out this plan?' (6) Suicide attempt: 'Have you made a suicide attempt?' Protective factors: social support, religious beliefs, children at home, reasons for living, future orientation. Risk factors: previous attempts (STRONGEST predictor), male sex, older age, white race, divorced/widowed, hopelessness (Beck Hopelessness Scale), firearms access, recent loss, chronic pain, SUD comorbidity. HOMICIDAL IDEATION: always assess — 'Have you had thoughts of hurting anyone else?' Duty to warn (Tarasoff) — if specific identifiable victim is threatened, warn that person AND law enforcement."
      },
    ],
    normalFindings:
      "Well-groomed appearance, appropriate dress, calm cooperative behavior, maintained eye contact, normal rate and rhythm of speech, euthymic mood reported, full range congruent affect, linear goal-directed thought process, no delusions or hallucinations, alert and oriented × 4, intact immediate recall and short-term memory, full insight into illness, intact judgment.",
    abnormalFindings: [
      "Disheveled, malodorous — suggests self-neglect (depression, psychosis, substance use, dementia)",
      "Psychomotor agitation — mania, akathisia, anxiety, stimulant intoxication, delirium",
      "Pressured speech, flight of ideas — mania",
      "Thought blocking, loose associations, word salad — psychosis (schizophrenia)",
      "Flat/blunted affect — negative symptoms of schizophrenia, severe MDD, Parkinson's",
      "Labile affect — mania, borderline personality disorder, TBI, pseudobulbar affect",
      "Auditory command hallucinations — imminent danger, requires immediate safety assessment",
      "Poor insight — predicts non-adherence and relapse",
      "Disorientation, impaired recall — delirium vs. dementia (delirium = acute onset + fluctuating)",
      "Active suicidal ideation with plan, intent, and means — requires emergent psychiatric evaluation",
    ],
    clinicalPearls: [
      "Delirium vs. Dementia: Delirium = ACUTE onset, FLUCTUATING consciousness, inattention, often reversible; Dementia = insidious onset, no fluctuating consciousness initially, progressive",
      "Insight and judgment are the most prognostically important MSE elements for treatment adherence",
      "Never skip the safety assessment — document it explicitly at every visit",
      "Thought PROCESS = how they think (form); Thought CONTENT = what they think — distinguish these carefully",
      "MOOD vs. AFFECT: Mood (subjective — what they say), Affect (objective — what you observe). They can be incongruent (patient says 'I feel fine' while crying)",
      "Asking about suicide does NOT increase suicide risk — it often provides relief and reduces risk",
    ],
    boardRecallTips: [
      "MSE domains: Appearance, Behavior, Speech, Mood/Affect, Thought process/content, Perception, Cognition, Insight, Judgment — Mnemonic: ABSTMPICIJ or 'A Big Sandwich Makes The Perfect Contribution In June'",
      "Mood = subjective (patient's words, in quotes); Affect = objective (clinician's observation)",
      "Pressured speech + flight of ideas = MANIA",
      "Thought blocking + loose associations = PSYCHOSIS/SCHIZOPHRENIA",
      "Flat affect + negative symptoms = schizophrenia (vs. blunted = MDD)",
      "Auditory hallucinations most common in schizophrenia; Visual hallucinations most common in DELIRIUM",
      "Delirium vs. dementia: DELIRIUM = acute onset + inattention + fluctuating",
      "Poor insight = #1 predictor of medication non-adherence in psychiatric illness",
    ],
  },
  {
    id: "bm-pe-suicide-risk-assessment",
    conditionIds: ["bm-cond-01", "bm-cond-bipolar", "bm-cond-ptsd", "bm-cond-borderline-pd"],
    findingName: "Suicide Risk Assessment and Safety Planning",
    category: "Safety Assessment",
    description:
      "Comprehensive suicide risk stratification is a mandatory component of every psychiatric assessment. It integrates static and dynamic risk factors, protective factors, and clinical judgment to determine the appropriate level of care. A systematic approach reduces clinician liability and improves patient outcomes.",
    technique:
      "Use a validated structured tool (C-SSRS, SAD PERSONS scale, or Columbia Protocol). Ask directly and calmly about suicidal thoughts — use normalization ('Many patients with depression have thoughts like these...'). Assess intensity, duration, frequency, controllability, deterrents, and reasons.",
    steps: [
      {
        stepNumber: 1,
        title: "Direct Inquiry — Ask the Five Questions",
        description:
          "(1) Passive ideation: 'Have you wished you were dead or that you could go to sleep and not wake up?' (2) Active ideation without plan: 'Have you had thoughts of killing yourself?' (3) Ideation with method: 'Have you thought about how you might do it?' (4) Intent: 'Do you have any intention of acting on these thoughts?' (5) Plan: 'Have you made a plan for how you would kill yourself? Do you have access to [method stated]?' ALWAYS assess: Duration (how long have thoughts been present), Frequency (how often), Intensity (on a scale of 0–10), Controllability (can they resist?), Deterrents (what's stopping them?)"
      },
      {
        stepNumber: 2,
        title: "Risk Stratification Using SAD PERSONS",
        description:
          "S — Sex (male sex = higher completion risk; female sex = higher attempt risk). A — Age (bimodal: adolescents and elderly ≥ 65). D — Depression (current depressive episode). P — Previous attempt (STRONGEST single risk factor). E — Ethanol/substance use. R — Rational thinking loss (psychosis, confusion, intoxication). S — Social support lacking (divorced, widowed, isolated). O — Organized plan. N — No future orientation/hopelessness. S — Stated intent to attempt. Score 0–10: 0–4 = low risk, 5–6 = moderate, 7–10 = high risk. Clinical judgment ALWAYS supersedes scale score."
      },
      {
        stepNumber: 3,
        title: "Identify Modifiable Risk Factors",
        description:
          "Hopelessness (Beck Hopelessness Scale ≥ 9 = high risk), Current intoxication, Impulsivity, Agitation (psychomotor agitation dramatically increases imminent risk), Insomnia, Access to lethal means (especially firearms — ask directly). LETHAL MEANS COUNSELING: ask about firearm access for EVERY patient with suicidal ideation. Recommend temporary transfer of firearm to trusted person or gun lock — this single intervention reduces firearm suicide by 50–70%."
      },
      {
        stepNumber: 4,
        title: "Protective Factors",
        description:
          "Social support (strong relationships, loved ones), Religious or spiritual beliefs against suicide, Pregnancy or new parenthood, Sense of responsibility for children or pets, Reasons for living (ask: 'What has stopped you before?'), Engaged in mental health treatment, Future orientation (plans, goals, hope), Problem-solving coping style, Fear of death or dying."
      },
      {
        stepNumber: 5,
        title: "Level of Care Determination",
        description:
          "LOW RISK: Passive ideation, no plan, strong protective factors → outpatient treatment with safety plan, close follow-up within 1 week. MODERATE RISK: Active ideation without clear plan or intent, some protective factors → intensive outpatient (IOP), consider voluntary admission, safety plan, means restriction, crisis line. HIGH RISK: Active ideation with plan AND intent AND means, poor protective factors, recent attempt → INPATIENT psychiatric hospitalization required. May require involuntary commitment (5150 in California, Baker Act in Florida — varies by state) if patient refuses voluntary admission and poses imminent danger to self."
      },
      {
        stepNumber: 6,
        title: "Safety Planning (Stanley-Brown Safety Planning Intervention)",
        description:
          "Collaboratively developed with patient — NOT just a promise not to harm themselves (no-suicide contracts are ineffective). Components: (1) Personal warning signs (what are your internal triggers?). (2) Internal coping strategies (things I can do alone without contacting anyone). (3) Social contacts who can distract (list names and numbers). (4) Family/friends to contact for help (list names and numbers). (5) Professionals and crisis lines: therapist, psychiatrist, 988 Suicide & Crisis Lifeline, local emergency services. (6) Means restriction: remove or restrict access to lethal means. Give written copy to patient; put in chart; review at every subsequent visit."
      },
    ],
    normalFindings:
      "No suicidal or homicidal ideation. Patient expresses future orientation, identifies reasons for living, describes support network, demonstrates problem-solving ability. Safety plan in place and reviewed.",
    abnormalFindings: [
      "Passive death wish only — low risk but document and monitor closely",
      "Active suicidal ideation with vague ideation but no plan — moderate risk",
      "Active ideation with specific plan and means available — HIGH RISK, requires hospitalization",
      "Prior suicide attempt within the past year — significantly elevated risk",
      "Command auditory hallucinations to harm self — imminent danger, hospitalize",
      "Hopelessness (Beck Hopelessness Scale ≥ 9) — most predictive of completed suicide",
      "Psychomotor agitation with suicidal ideation — markedly elevated imminent risk",
    ],
    clinicalPearls: [
      "Prior suicide attempt is the SINGLE STRONGEST predictor of future completed suicide",
      "Hopelessness is a STRONGER predictor of suicide than depression severity itself",
      "Asking about suicide DOES NOT increase suicide risk — it often provides therapeutic relief",
      "Lethal means counseling (especially firearms) is one of the most evidence-based interventions to prevent suicide — ask every time",
      "No-suicide contracts are NOT effective and may provide false reassurance — use Stanley-Brown Safety Planning instead",
      "Agitation significantly increases imminent suicide risk — treat it urgently",
      "Male patients are less likely to disclose suicidal ideation — ask directly and repeatedly",
    ],
    boardRecallTips: [
      "Strongest risk factor for future suicide = PRIOR ATTEMPT",
      "Most predictive cognitive factor = HOPELESSNESS (not depression severity)",
      "Duty to hospitalize involuntarily if: imminent danger to self or others, unable to contract for safety",
      "Duty to warn (Tarasoff): identifiable third party threatened → warn them AND law enforcement",
      "Safety plan (not no-suicide contract) = evidence-based standard of care",
      "Firearms access: ALWAYS ask — lethal means counseling is mandatory",
      "988 = National Suicide & Crisis Lifeline (USA)",
    ],
  },
  {
    id: "bm-pe-neuropsychiatric-exam",
    conditionIds: [
      "bm-cond-delirium",
      "bm-cond-dementia",
      "bm-cond-01",
    ],
    findingName: "Neuropsychiatric Examination — Delirium vs. Dementia vs. Depression",
    category: "Cognitive Assessment",
    description:
      "Distinguishing delirium, dementia, and severe depression ('pseudodementia') is one of the most important and clinically challenging tasks in behavioral medicine. A structured cognitive and neuropsychiatric examination, combined with careful history-taking regarding time course, is essential for correct diagnosis.",
    technique:
      "Administer the Mini-Mental State Examination (MMSE) or Montreal Cognitive Assessment (MoCA). Assess attention as the first step (inattention = delirium until proven otherwise). Elicit collateral history from family/caregivers regarding time course and prior baseline.",
    steps: [
      {
        stepNumber: 1,
        title: "Assess Level of Consciousness and Attention First",
        description:
          "DELIRIUM hallmark: impaired attention + fluctuating consciousness. Test attention with: Digit Span (normally ≥ 5 forward, ≥ 3 backward; delirium = impaired), Serial 7s (100-93-86-79-72-65; count errors), Months of year backward, Days of week backward. CONFUSED ASSESSMENT METHOD (CAM): Delirium if (1 AND 2) AND (3 OR 4): (1) Acute onset AND fluctuating course, (2) Inattention, (3) Disorganized thinking, (4) Altered level of consciousness. CAM sensitivity 94–100%, specificity 90–95% for delirium."
      },
      {
        stepNumber: 2,
        title: "Orientation",
        description:
          "Assess orientation × 4 (person, place, time, situation). Scoring: Oriented × 4 = normal. Disoriented to time first = normal aging. Disoriented to place = significant impairment. Disoriented to person = severe impairment. COMPARISON: Delirium — may fluctuate between oriented and disoriented throughout the day ('sundowning' in the afternoon/evening). Dementia — progressive worsening of orientation over months-years; initially time, then place, then person. Depression — usually fully oriented despite complaints of memory problems."
      },
      {
        stepNumber: 3,
        title: "Memory Assessment",
        description:
          "Immediate recall: register 3 words (e.g., apple, table, penny) — repeat immediately. Normal = 3/3. Short-term recall: ask for the 3 words after 5 minutes of distraction. Normal = 3/3; MCI = 1–2/3; Dementia = 0/3. Provide cues if fails: semantic cue (it was a fruit) then multiple choice (was it apple, orange, or banana?). CUED RECALL helps distinguish: Encoding deficit (can't form new memories — Alzheimer's): cues don't help. Retrieval deficit (information is stored but can't access it — depression, frontal lobe disorders): cues DO help. Long-term memory: remote memory (historical events, family members, past presidents) — preserved longer in Alzheimer's but impaired in severe dementia."
      },
      {
        stepNumber: 4,
        title: "MMSE Administration (30 points)",
        description:
          "ORIENTATION (10 pts): Year, Season, Month, Date, Day (5 pts); Country, State, City, Hospital, Floor (5 pts). REGISTRATION (3 pts): Name 3 objects; patient repeats immediately. ATTENTION (5 pts): Serial 7s (5 subtractions) OR WORLD backward. RECALL (3 pts): Ask the 3 registered words after Serial 7s. LANGUAGE (8 pts): Name 2 objects (watch, pencil), repeat 'No ifs, ands, or buts,' 3-stage command ('Take paper in right hand, fold in half, place on floor'), Read and obey 'Close your eyes,' Write a sentence, Copy intersecting pentagons. TOTAL /30: ≥ 24 = normal; 18–23 = mild impairment; 10–17 = moderate impairment; < 10 = severe impairment. Limitations: education and language affect performance; low sensitivity for mild cognitive impairment."
      },
      {
        stepNumber: 5,
        title: "MoCA (Montreal Cognitive Assessment — 30 points)",
        description:
          "More sensitive than MMSE for mild cognitive impairment and executive function. VISUOSPATIAL/EXECUTIVE (5 pts): Trail B alternating (1-A-2-B-3-C), Clock drawing (contour, numbers, hands), Copy cube. NAMING (3 pts): lion, rhinoceros, camel. MEMORY (no points — tests delayed recall): 5 words, recalled after 5 min = 5 pts. ATTENTION (6 pts): Digit span 5 forward/3 backward, tap for A letter, serial 7s. LANGUAGE (3 pts): Repeat sentences, verbal fluency (F words in 1 min ≥ 11). ABSTRACTION (2 pts): How are train and bicycle alike? Watch and ruler? DELAYED RECALL (5 pts): 5 words from memory encoding. ORIENTATION (6 pts): Date, month, year, day, place, city. TOTAL /30: ≥ 26 = normal; 18–25 = mild; 10–17 = moderate; < 10 = severe. Add 1 point if ≤ 12 years of education."
      },
      {
        stepNumber: 6,
        title: "Delirium vs. Dementia vs. Depression Table",
        description:
          "ONSET: Delirium = hours to days; Dementia = months to years; Depression = weeks. COURSE: Delirium = fluctuating (worse at night); Dementia = slowly progressive; Depression = relatively stable, worse in AM. ATTENTION: Delirium = markedly impaired; Dementia = mildly impaired early, severe late; Depression = mildly impaired (poor concentration). CONSCIOUSNESS: Delirium = impaired/fluctuating; Dementia = alert until late stages; Depression = alert. MEMORY: Delirium = impaired (especially short-term); Dementia = impaired (encoding deficit, no cuing benefit); Depression = impaired (retrieval deficit, CUING HELPS). HALLUCINATIONS: Delirium = visual most common; Dementia = visual (Lewy Body), auditory; Depression = absent (unless psychotic depression). REVERSIBILITY: Delirium = reversible if cause treated; Dementia = irreversible; Depression = reversible with treatment. KEY: 'Pseudodementia' = depression presenting as cognitive impairment — treat depression and cognition improves."
      },
    ],
    normalFindings:
      "Alert, oriented × 4, attention intact (digit span ≥ 5 forward), 3/3 word recall at 5 min, MMSE ≥ 24 or MoCA ≥ 26, no perceptual disturbances, CAM negative for delirium.",
    abnormalFindings: [
      "CAM positive (acute onset + inattention + disorganized thinking) = DELIRIUM until proven otherwise — find underlying cause",
      "MMSE ≤ 23 or MoCA ≤ 25 = cognitive impairment requiring further workup",
      "Encoding memory deficit (cuing doesn't help) = Alzheimer's disease pattern",
      "Retrieval deficit (cuing helps) = frontal subcortical disease, depression-related pseudodementia",
      "Visual hallucinations in elderly + parkinsonism + cognitive fluctuations = Lewy Body Dementia",
      "Gradual memory loss + aphasia + agnosia + apraxia = Alzheimer's disease",
      "Stepwise decline + vascular risk factors + focal neurological signs = Vascular Dementia",
    ],
    clinicalPearls: [
      "DELIRIUM is a MEDICAL EMERGENCY — always look for the underlying cause: AEIOU-TIPS (Alcohol/Arrhythmia, Epilepsy, Infection, Overdose/O2, Uremia, Trauma/Temperature, Insulin/Intracranial, Psychosis, Stroke/Structural)",
      "MoCA is more sensitive than MMSE for mild cognitive impairment and frontal lobe dysfunction",
      "Depression-related cognitive impairment ('pseudodementia'): cuing improves recall — key distinguishing feature from Alzheimer's",
      "Sundowning is NOT a separate diagnosis — it refers to worsening delirium/dementia symptoms in the afternoon/evening",
      "In delirium: treat the CAUSE, minimize deliriogenic medications, avoid benzodiazepines (worsen delirium), mobilize early, reorient frequently",
    ],
    boardRecallTips: [
      "CAM = Confusion Assessment Method: Delirium requires (1 + 2) AND (3 or 4): Acute onset/fluctuating, Inattention, Disorganized thinking, Altered consciousness",
      "Delirium vs. Dementia: DELIRIUM = acute + fluctuating + inattention; DEMENTIA = insidious + stable + alert",
      "MMSE ≤ 23 or MoCA ≤ 25 = cognitive impairment",
      "Encoding deficit (Alzheimer's) = cuing DOES NOT help recall",
      "Retrieval deficit (depression/frontal) = cuing DOES help recall",
      "Visual hallucinations + parkinsonism + cognitive fluctuations = Lewy Body Dementia",
      "Delirium treatment: identify/treat cause; avoid benzos; minimize polypharmacy; reorient; mobilize",
    ],
  },
];
