import type { Procedure } from "@/types";

export const behavioralMedicineProcedures: Procedure[] = [
  {
    id: "bm-proc-psychiatric-interview",
    name: "Structured Psychiatric Interview and MSE",
    rotationSlug: "behavioral-medicine",
    overview:
      "The psychiatric interview is the primary diagnostic tool in behavioral medicine. Unlike other specialties, psychiatry depends almost entirely on the clinical interview rather than laboratory findings or imaging. A structured approach gathers a comprehensive psychiatric history and mental status examination (MSE), leading to diagnosis, risk stratification, and treatment planning.",
    indications: [
      "New patient psychiatric evaluation",
      "Psychiatric consultation on medical/surgical patients",
      "Emergency psychiatric evaluation for acute behavioral changes",
      "Medication management follow-up",
      "Capacity assessment",
      "Suicidality or safety evaluation",
    ],
    contraindications: [
      "No absolute contraindications — however, safety must be ensured first in agitated patients",
      "Conduct interview in safe environment with panic button or staff backup available",
      "For acutely agitated or violent patients: de-escalate first, intervene pharmacologically if needed, then interview when safe",
    ],
    equipment: [
      "Quiet, private room with minimal distractions",
      "Seats at equal level (not interviewer elevated over patient) — promotes rapport",
      "Panic button or staff nearby for safety",
      "Structured scales: PHQ-9, GAD-7, MDQ, C-SSRS, YMRS, PANSS, AIMS — printed or electronic",
      "DSM-5 criteria for reference",
      "EMR or paper for documentation",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Opening and Rapport",
        description:
          "Introduce yourself by name and role. Explain purpose of the interview. Ensure patient knows the time available. Establish rapport — use open-ended questions initially: 'What brings you in today?' or 'Tell me what's been going on.' Normalize symptoms: 'Many people feel this way; tell me more.' Sit at eye level, use open body language, minimize interruptions. In emergency settings: acknowledge distress first — 'I can see you're having a very difficult time. I'm here to help.'",
      },
      {
        stepNumber: 2,
        title: "Chief Complaint and History of Present Illness (HPI)",
        description:
          "Document chief complaint in patient's own words (in quotes). HPI: use OLDCARTS or SIG E CAPS for depressive symptoms. Key elements: Onset (when did symptoms start?), Duration (how long?), Precipitating factors (stressors, life events, substance use changes, medication changes), Previous episodes (this happened before?), Treatment tried. For mood disorders: timeline of mood episodes, longest period of wellness, shortest period. For psychosis: first episode, duration, response to treatment, current medications.",
      },
      {
        stepNumber: 3,
        title: "Psychiatric History",
        description:
          "Prior psychiatric diagnoses and when established. Previous psychiatric hospitalizations (how many, where, when, duration, why). Prior suicide attempts (number, method, intent, lethality, medical consequences). Prior violence or homicidal behavior. Current and past psychotropic medications (doses, duration, response, reason for discontinuation). Previous psychiatric providers. History of trauma (ask sensitively: 'Have you ever experienced any traumatic events in your life?'). Legal history (arrests, incarcerations — relevant to antisocial personality disorder).",
      },
      {
        stepNumber: 4,
        title: "Medical History, Medications, and Allergies",
        description:
          "Medical history: chronic conditions (especially those causing psychiatric symptoms — hypothyroidism, epilepsy, HIV, lupus, Cushing's, Parkinson's). Recent medical hospitalizations or surgeries. Current medications (ALL — OTC, supplements, herbals — many interact with psychiatric medications). Drug allergies and adverse reactions to medications (distinguish allergy from intolerance). Review of systems: especially neurological (headaches, seizures, head trauma), endocrine (weight changes, temperature intolerance), and sleep (insomnia, hypersomnia, nightmares).",
      },
      {
        stepNumber: 5,
        title: "Substance Use History",
        description:
          "Ask ALL patients about ALL substances — normalize the inquiry: 'I ask everyone these questions.' CAGE-AID: (1) Have you felt you should Cut down? (2) Do people Annoy you by criticizing your use? (3) Have you felt Guilty about your use? (4) Do you use first thing in the morning (Eye-opener)? ≥ 2 = positive screen for alcohol/substance use disorder. AUDIT-C for alcohol: 3 questions, score ≥ 3 (women) or ≥ 4 (men) = positive. Document: substance type, frequency, quantity, duration of use, tolerance, withdrawal symptoms, prior treatment (detox, rehab, MAT). LAST USE date (critical for withdrawal risk assessment).",
      },
      {
        stepNumber: 6,
        title: "Social and Developmental History",
        description:
          "Current living situation (alone, homeless, with family, shelter). Social support network (quality and quantity of relationships). Relationship status, children, custody. Employment/education (current status, education level, change from baseline function). Trauma history: adverse childhood experiences (ACEs — abuse, neglect, household dysfunction). Immigration/cultural factors. Religion/spirituality (can be protective factor against suicide). Military service (PTSD risk, access to firearms). Childhood: developmental milestones, early trauma, abuse, school performance.",
      },
      {
        stepNumber: 7,
        title: "Family History",
        description:
          "Family psychiatric history (first-degree relatives): depression, bipolar disorder, schizophrenia, anxiety, substance use disorder, suicide attempts or completions. Family medical history: thyroid disease, neurological conditions. Family response to psychiatric medications (if a first-degree relative responded well to a specific antidepressant, patient has higher likelihood of responding similarly — pharmacogenomics principle). Family history of suicide is an independent risk factor for suicide in the patient.",
      },
      {
        stepNumber: 8,
        title: "Mental Status Examination (MSE)",
        description:
          "Conduct the full MSE as observations throughout the interview — do not administer as a separate checklist. Document: Appearance (grooming, dress, age), Behavior (psychomotor agitation/retardation, eye contact, movements), Speech (rate, rhythm, tone, volume, amount, latency), Mood (patient's own words, in quotes), Affect (objective: range, intensity, quality, congruence), Thought Process (linear/goal-directed vs. circumstantial, tangential, FOI, loose associations, thought blocking), Thought Content (delusions, ideas of reference, suicidal/homicidal ideation, obsessions), Perceptions (hallucinations, illusions, derealization, depersonalization), Cognition (orientation × 4, attention, memory — immediate, short-term, long-term, language), Insight (full, partial, poor, none), Judgment (good, fair, poor). Administer formal cognitive testing (MMSE or MoCA) if cognitive concerns exist.",
      },
      {
        stepNumber: 9,
        title: "Suicide and Safety Assessment",
        description:
          "Use C-SSRS or equivalent structured tool at EVERY psychiatric encounter. Assess: passive ideation (wish to be dead), active ideation (want to kill myself), ideation with method, intent, and plan. Assess access to lethal means — especially FIREARMS (most lethal method; ask specifically). Assess protective factors (reasons for living, religious beliefs, children, support). Risk stratify: Low (passive ideation, no plan, protective factors) → outpatient with safety plan and close follow-up; Moderate (active ideation, no clear plan) → intensive outpatient or voluntary admission; High (plan + intent + means, poor protective factors, recent attempt) → inpatient hospitalization, may require involuntary commitment. Complete Stanley-Brown Safety Plan collaboratively.",
      },
      {
        stepNumber: 10,
        title: "Formulation, Diagnosis, and Treatment Plan",
        description:
          "Biopsychosocial Formulation: Biological (genetic predisposition, medical comorbidities, medications, substance use), Psychological (trauma history, attachment patterns, cognitive distortions, personality), Social (stressors, support, culture, environment). DSM-5 Diagnosis: all 5 axes conceptually (diagnosis + functional impairment). Treatment plan: pharmacotherapy (medication choice, dose, rationale), psychotherapy (type, frequency, referral), safety plan, referrals (labs, specialty, community resources), follow-up interval. Share plan with patient using shared decision-making: 'Here is what I'm recommending and why — what do you think?'",
      },
    ],
    clinicalPearls: [
      "The quality of the psychiatric interview determines diagnostic accuracy more than any lab or imaging test",
      "Always ask about BIPOLAR symptoms before diagnosing MDD — antidepressant monotherapy in bipolar disorder can trigger mania",
      "Medication history: ask about past failures AND successes — a prior partial response to an SSRI guides next steps",
      "Collateral information (family, prior records) is invaluable — patients may underreport substance use, minimize symptoms, or have impaired insight",
      "Safety assessment is non-negotiable at EVERY visit — document it explicitly every time",
      "Therapeutic relationship: the working alliance between patient and clinician is one of the strongest predictors of treatment outcome across all psychiatric diagnoses",
    ],
    boardRecallTips: [
      "MSE domains: Appearance, Behavior, Speech, Mood, Affect, Thought process, Thought content, Perception, Cognition, Insight, Judgment",
      "Mood = subjective (quote patient); Affect = objective (clinician observation)",
      "C-SSRS: screens passive ideation → active ideation → method → intent → plan",
      "Stanley-Brown Safety Plan (not no-suicide contract) = evidence-based standard",
      "CAGE-AID ≥ 2 = positive screen for substance use disorder",
      "Biopsychosocial formulation: Biological + Psychological + Social factors",
    ],
  },
  {
    id: "bm-proc-capacity-assessment",
    name: "Decision-Making Capacity Assessment",
    rotationSlug: "behavioral-medicine",
    overview:
      "Decision-making capacity is the clinical determination of a patient's ability to make a specific medical decision. It is NOT the same as legal competence (which is determined by a court). Capacity is decision-specific (a patient can have capacity for one decision but not another) and time-specific (capacity can fluctuate). Psychiatry is frequently consulted to perform formal capacity evaluations, but ANY physician can assess capacity.",
    indications: [
      "Patient refuses recommended medical treatment (especially life-sustaining)",
      "Patient agrees to treatment but clinical team questions whether consent is truly informed",
      "Altered mental status complicating informed consent (delirium, intoxication, dementia, acute psychiatric illness)",
      "Surrogate decision-making is being considered",
      "Patient wants to leave hospital AMA (Against Medical Advice) when this poses significant risk",
      "Patient requests do-not-resuscitate (DNR) order",
    ],
    contraindications: [
      "No contraindications to assessing capacity — it can be performed at any time",
      "In emergencies: if patient lacks capacity AND consent cannot be obtained AND delay would cause serious harm → implied consent (treat first, assess capacity when stable)",
    ],
    equipment: [
      "MacCAT-T (MacArthur Competence Assessment Tool for Treatment) — validated instrument for capacity assessment",
      "Quiet private environment",
      "Relevant medical information to present to patient (diagnosis, proposed treatment, alternatives, risks/benefits)",
      "Documentation template (capacity assessment note)",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "The Four Standards of Decision-Making Capacity",
        description:
          "Capacity requires ALL FOUR of the following (Appelbaum's criteria): (1) UNDERSTANDING: patient understands the medical information presented (diagnosis, proposed treatment, alternatives, risks and benefits). (2) APPRECIATION: patient appreciates HOW the information applies to THEIR OWN situation (not just abstract knowledge). Lack of appreciation common in psychosis ('yes, other people might need surgery for appendicitis, but my appendix is fine because I'm protected by God'). (3) REASONING: patient can engage in a reasoning process to weigh options (does not require logical choice, but must show ability to weigh pros/cons). (4) EXPRESSING A CHOICE: patient can communicate a consistent choice over time (cannot be changing mind repeatedly every few minutes).",
      },
      {
        stepNumber: 2,
        title: "UNDERSTAND — Assess Factual Understanding",
        description:
          "Explain the diagnosis, proposed treatment, alternatives, and risks/benefits in plain language. Then ask patient to 'teach back': 'In your own words, what did I just tell you about your condition?' 'What do you understand your diagnosis to be?' 'What would happen if you chose not to have this treatment?' Score: Can patient accurately paraphrase the key medical information? Impaired understanding is addressed by re-explaining in simpler terms, using a different language, using visuals, or providing written information. If understanding cannot be established after attempts → capacity is impaired.",
      },
      {
        stepNumber: 3,
        title: "APPRECIATE — Assess Personal Application",
        description:
          "Beyond knowing the facts, does the patient accept that THEY personally have this condition and that the treatment applies to them? Common examples of impaired appreciation: 'I know the doctor says I have cancer, but I feel fine so I don't really have it' (denial), or 'They're trying to poison me with the medication' (paranoid delusion), or 'God will heal me so I don't need chemotherapy' (may or may not impair capacity — cultural/religious beliefs alone do not equal impaired capacity). Ask: 'Do you believe you have [diagnosis]?' 'Do you believe this treatment could help you specifically?' 'Why do you think the doctors are recommending this?'",
      },
      {
        stepNumber: 4,
        title: "REASON — Assess Reasoning Process",
        description:
          "The patient must be able to manipulate information logically to weigh options. They do NOT need to make the choice the medical team recommends — the right to make a 'bad' choice is preserved as long as reasoning is intact. Ask: 'How did you arrive at your decision?' 'What factors are you weighing?' 'What concerns do you have?' 'Can you tell me the pros and cons as you see them?' Examples of impaired reasoning: severe cognitive disorganization (can't follow logical chain), fixed delusional framework that overrides all other reasoning, or profound cognitive impairment preventing abstract reasoning.",
      },
      {
        stepNumber: 5,
        title: "EXPRESSING A CONSISTENT CHOICE",
        description:
          "Patient must be able to state a clear, consistent choice. This is the lowest bar — even a demented patient can often express a consistent choice. Impaired when: patient cannot communicate (aphasia, stupor), or patient changes decision every few minutes (delirium, severe ambivalence). Ask: 'So what have you decided?' 'Is this your final decision?' If patient flip-flops repeatedly over a short period → may indicate delirium or impaired capacity. Document the stated choice verbatim.",
      },
      {
        stepNumber: 6,
        title: "When Capacity Is Found to Be Absent",
        description:
          "If any of the four standards is significantly impaired AND the clinical situation is time-sensitive: (1) Identify the surrogate decision-maker hierarchy: legal healthcare proxy or durable power of attorney for healthcare (DPOA-HC) → spouse/registered domestic partner → adult children → parents → siblings → extended family → court-appointed guardian. (2) Surrogate uses SUBSTITUTED JUDGMENT standard: 'What would THIS patient want if they could speak for themselves?' — not 'What do YOU want for the patient?' (3) For emergency situations where delay would cause harm → implied consent: proceed with treatment. (4) If surrogate decision is controversial or disputed → ethics consultation or court (for legal competence determination). (5) Psychiatric conditions causing incapacity (acute psychosis, severe depression) should be TREATED — capacity may be restored.",
      },
      {
        stepNumber: 7,
        title: "Documentation of Capacity Assessment",
        description:
          "Document formal capacity assessment note including: Date and time, Nature of the specific decision being assessed, Summary of medical information presented to patient (in plain language), Assessment of all four capacity standards with patient's verbatim responses, Conclusion (has capacity vs. lacks capacity for THIS specific decision), Any factors affecting capacity (delirium, intoxication, psychiatric illness), Interventions to restore capacity if impaired (treating delirium, translating language, repeating explanation), Surrogate decision-maker identified if patient lacks capacity, Follow-up plan (reassess capacity if condition improves).",
      },
    ],
    clinicalPearls: [
      "Capacity ≠ Competence: Capacity is a clinical determination made by a physician; Competence is a legal determination made by a judge",
      "Capacity is DECISION-SPECIFIC — a patient can lack capacity for one decision (complex chemotherapy regimen) while having capacity for another (choosing what to eat for lunch)",
      "Refusing treatment does NOT equal lack of capacity — patients have the right to refuse even lifesaving treatment if they have capacity",
      "The threshold for capacity is inversely related to risk: low-risk decisions require less evidence of understanding; high-stakes/high-risk decisions require MORE rigorous capacity demonstration",
      "Delirium is the most common cause of acute loss of capacity in hospitalized patients — it is often reversible, so treat the underlying cause and reassess",
      "A patient who is psychotic, depressed, or intoxicated may or may not have impaired capacity — assess the specific decision, not just the diagnosis",
    ],
    boardRecallTips: [
      "Four standards of capacity: Understanding, Appreciation, Reasoning, Expressing a choice (remember UARE or Appelbaum's criteria)",
      "Capacity = clinical; Competence = legal (court-determined)",
      "Capacity is decision-specific AND time-specific",
      "Refusing treatment ≠ lacking capacity",
      "Surrogate hierarchy: DPOA-HC → spouse → adult children → parents → siblings",
      "Surrogate uses SUBSTITUTED JUDGMENT (what patient would want) NOT best interests (what surrogate wants)",
      "Most common cause of acute loss of capacity in hospitalized patients = DELIRIUM (often reversible)",
    ],
  },
  {
    id: "bm-proc-involuntary-hold",
    name: "Psychiatric Holds and Involuntary Hospitalization",
    rotationSlug: "behavioral-medicine",
    overview:
      "Involuntary psychiatric hospitalization (civil commitment) allows clinicians to detain patients for psychiatric evaluation and treatment without consent when patients pose a danger to themselves or others, or are gravely disabled. Laws vary by state but share common principles. In California, this is a '5150 hold' (WIC § 5150). In Florida, it is a 'Baker Act.' Understanding the legal framework, ethical principles, and clinical criteria is essential.",
    indications: [
      "Danger to self: imminent risk of suicide or serious self-harm AND patient refuses voluntary hospitalization",
      "Danger to others: credible threat of harm to an identifiable person AND patient refuses hospitalization",
      "Grave disability: unable to provide food, clothing, or shelter for oneself due to psychiatric illness",
      "Patient lacks insight into need for treatment (common in acute mania, psychosis)",
    ],
    contraindications: [
      "Patient voluntarily agrees to hospitalization — voluntary admission preferred when possible",
      "Substance intoxication as sole cause — involuntary medical hold may be more appropriate if medical",
      "Danger due to medical (non-psychiatric) condition — different legal pathway",
    ],
    equipment: [
      "State-specific involuntary hold form (5150 in California, Baker Act form in Florida)",
      "Documentation of clinical findings supporting hold criteria",
      "Transport documentation if transferring to psychiatric facility",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Clinical Determination — Does Patient Meet Criteria?",
        description:
          "Document specific clinical findings supporting ONE or MORE of the three criteria: (1) DANGER TO SELF: specific suicidal plan or recent high-lethality attempt. Not just passive ideation — must have IMMINENT risk. (2) DANGER TO OTHERS: credible, specific threat toward identifiable person with ability and intent to harm. (3) GRAVE DISABILITY: patient is unable to provide for basic needs (food, clothing, shelter) because of a mental disorder — NOT simply because they are poor or homeless. Determine that LESS RESTRICTIVE alternatives are insufficient (outpatient, voluntary admission).",
      },
      {
        stepNumber: 2,
        title: "Offer Voluntary Hospitalization First",
        description:
          "Before initiating an involuntary hold, offer voluntary admission and explain why hospitalization is recommended. If patient accepts → voluntary admission (preferred — maintains therapeutic alliance, patient retains more rights). If patient refuses → consider involuntary hold if criteria are met. Document patient's specific reasons for refusal verbatim.",
      },
      {
        stepNumber: 3,
        title: "Initiate the Hold — Authorized Clinicians",
        description:
          "In most states, a psychiatric hold can be initiated by: licensed physicians (MD/DO), licensed psychologists (in many states), licensed clinical social workers (in some states), law enforcement officers (based on observed behavior). Complete the state-specific hold form. Document: clinical criteria met, specific behaviors/statements supporting criteria, less restrictive alternatives considered and why they are insufficient. Notify the patient that they are being placed on a hold and explain their rights.",
      },
      {
        stepNumber: 4,
        title: "Patient Rights on Involuntary Hold",
        description:
          "Even on an involuntary hold, patients retain specific rights: Right to be informed of the reason for the hold, Right to refuse medications (in most states — may require additional court order for involuntary medication in non-emergency), Right to communicate with an attorney, Right to a patient advocate or ombudsman, Right to least restrictive environment, Right to a hearing (in most states, an independent hearing is triggered if hold is extended beyond initial period). EXCEPTION: Emergency medication can be given without consent if patient is an IMMINENT danger to self or others AND less restrictive measures have failed.",
      },
      {
        stepNumber: 5,
        title: "Hold Duration and Extension",
        description:
          "Initial hold duration varies by state: California 5150 = 72 hours maximum; Florida Baker Act = 72 hours; New York = up to 6 months with court approval for involuntary commitment. If patient still meets criteria at the end of the initial hold: petition for extension (5250 in California — 14 additional days, requires administrative law judge hearing). Long-term involuntary commitment: typically requires formal civil commitment proceedings with court hearing. Patient can be discharged before hold expires if: no longer meets criteria, voluntarily agrees to treatment plan, or appropriate outpatient resources are in place.",
      },
      {
        stepNumber: 6,
        title: "Ethical Principles Underlying Involuntary Commitment",
        description:
          "Beneficence (act in patient's best interest) vs. Autonomy (respect patient's right to self-determination) — the fundamental tension in all psychiatric commitment decisions. Involuntary commitment overrides autonomy only when: (1) patient poses imminent danger AND (2) psychiatric illness is impairing their ability to make free choices AND (3) treatment may restore capacity and autonomy. Parens patriae: state's authority to act as guardian for those who cannot care for themselves. Police power: state's authority to protect public safety. Least restrictive alternative principle: always use the least coercive intervention that achieves safety goals. Document all decisions and reasoning thoroughly.",
      },
    ],
    clinicalPearls: [
      "Danger to self requires IMMINENT risk with specific plan, intent, or recent behavior — passive ideation alone rarely justifies involuntary commitment",
      "Grave disability is often underutilized — it is appropriate for patients with severe psychosis who cannot provide food, clothing, or shelter due to their illness",
      "Offering voluntary hospitalization first preserves therapeutic alliance — patients who agree voluntarily have better treatment engagement",
      "On a hold, patients can STILL refuse medications in non-emergency situations — an additional court order (Riese hearing in California) is needed for involuntary medication beyond emergency",
      "Tarasoff duty: if patient on a psychiatric hold makes a specific threat against an identifiable person → you STILL have a duty to warn that person (confidentiality exception)",
    ],
    boardRecallTips: [
      "Three criteria for involuntary hold: Danger to SELF, Danger to OTHERS, GRAVE DISABILITY",
      "California 5150 = 72-hour hold; 5250 = 14-day extension (requires hearing)",
      "Voluntary admission = preferred (maintains therapeutic alliance and patient rights)",
      "Patient rights on hold: informed of reason, attorney contact, patient advocate, least restrictive environment",
      "Emergency medication: can be given involuntarily if IMMINENT danger to self/others AND alternatives failed",
      "Involuntary hold ≠ involuntary medication (different legal process in most states)",
      "Least restrictive alternative principle: always document why less restrictive options are insufficient",
    ],
  },
];
