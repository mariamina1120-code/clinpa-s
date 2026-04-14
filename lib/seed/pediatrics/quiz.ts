// @ts-nocheck
import { QuizQuestion } from "@/types/seed";

export const pediatricsQuiz: QuizQuestion[] = [
  {
    id: "peds-q-001",
    rotation: "pediatrics",
    question:
      "A 3-year-old boy presents with 6 days of fever, bilateral conjunctival injection, cracked red lips, a strawberry tongue, a diffuse maculopapular rash, and cervical lymphadenopathy measuring 1.5 cm. Echocardiogram shows a left anterior descending coronary artery z-score of +3.1. Which of the following is the correct initial treatment?",
    options: [
      "IVIG 1 g/kg IV single dose plus aspirin 3–5 mg/kg/day",
      "IVIG 2 g/kg IV single dose plus aspirin 80–100 mg/kg/day in the acute phase",
      "Aspirin 80–100 mg/kg/day alone; IVIG is reserved for coronary artery aneurysms",
      "Methylprednisolone 30 mg/kg IV for 3 days plus aspirin 3–5 mg/kg/day",
      "IVIG 2 g/kg IV plus infliximab 5 mg/kg for IVIG-resistant disease at initial presentation",
    ],
    correctAnswer: 1,
    explanation:
      "Kawasaki disease (KD) treatment requires IVIG 2 g/kg as a single infusion over 10–12 hours — this is the evidence-based dose that reduces coronary artery aneurysm (CAA) risk from 25% to < 5%. High-dose aspirin (80–100 mg/kg/day divided every 6 hours) is given in the acute febrile phase for its anti-inflammatory effect. Once the child is afebrile for 48–72 hours, aspirin is reduced to low-dose (3–5 mg/kg/day) for its antiplatelet effect and continued for 6–8 weeks if no CAAs, or indefinitely if CAAs persist. Echocardiography should be performed at diagnosis, 2 weeks, and 6–8 weeks after onset. A z-score ≥ 2.5 defines a small aneurysm. Infliximab and methylprednisolone are second-line options for IVIG-resistant KD (persistent fever 36 hours after IVIG infusion), not first-line.",
    topic: "Kawasaki Disease",
    difficulty: "medium",
  },
  {
    id: "peds-q-002",
    rotation: "pediatrics",
    question:
      "A 14-day-old full-term infant is brought in by parents for a rectal temperature of 38.3°C. The infant appears irritable but is feeding adequately. Physical examination is unremarkable. Which of the following is the most appropriate management?",
    options: [
      "Reassure parents, encourage breastfeeding, and return precautions",
      "Urine culture only; discharge with close follow-up in 24 hours",
      "Full sepsis evaluation (CBC, blood culture, urinalysis, urine culture, LP for CSF analysis), hospitalization, and empiric IV antibiotics",
      "Blood culture and IV ampicillin only; LP deferred unless clinical worsening",
      "Rapid influenza testing; if negative, discharge home with oral amoxicillin",
    ],
    correctAnswer: 2,
    explanation:
      "Any infant younger than 28 days with fever (rectal temperature ≥ 38.0°C) requires a full sepsis evaluation and empiric antibiotic therapy regardless of appearance, because neonates lack mature immune responses and can deteriorate rapidly. The workup includes CBC with differential, blood culture, urinalysis and urine culture (catheterized specimen), and lumbar puncture with CSF cell count, protein, glucose, Gram stain, and culture. Empiric antibiotics cover GBS, E. coli, and Listeria: ampicillin 50 mg/kg IV every 8 hours plus gentamicin (for gram-negative coverage) or cefotaxime if meningitis is suspected. Acyclovir should be added if HSV is possible (maternal history of HSV, skin/eye/mouth lesions, CSF pleocytosis). Observation without LP or antibiotics is not appropriate in this age group. The Philadelphia, Rochester, and Boston criteria apply to infants 28–90 days — not younger.",
    topic: "Febrile Infant < 28 Days",
    difficulty: "hard",
  },
  {
    id: "peds-q-003",
    rotation: "pediatrics",
    question:
      "A 2-year-old boy is brought to the ED at midnight with a 1-day history of low-grade fever, barky (seal-like) cough, and inspiratory stridor at rest. He is alert, sitting upright in his mother's lap, and oxygen saturation is 97% on room air. The Westley croup score is 4 (moderate croup). Which of the following is the most appropriate treatment?",
    options: [
      "Nebulized racemic epinephrine 0.05 mL/kg/dose (max 0.5 mL) only; no steroids needed for moderate croup",
      "Dexamethasone 0.6 mg/kg IM or PO (max 10 mg) as a single dose",
      "Budesonide 2 mg nebulized — steroids must be inhaled to reach the subglottic area",
      "Humidified air or cool mist — evidence strongly supports this as first-line",
      "Intubation with a half-size smaller endotracheal tube due to subglottic edema",
    ],
    correctAnswer: 1,
    explanation:
      "Dexamethasone 0.6 mg/kg as a single oral or IM dose (maximum 10 mg) is the first-line treatment for moderate-to-severe croup and should be given to all children with croup requiring medical attention. Dexamethasone has a 36–54 hour duration of action, making it ideal for this viral condition. The oral route is equally effective as IM and preferred if the child is cooperative. Budesonide 2 mg nebulized is an alternative when oral administration is impossible, but dexamethasone is preferred. For moderate croup with stridor at rest, nebulized racemic epinephrine (or L-epinephrine 5 mL of 1:1000 solution via nebulizer) is added as a bridge therapy for faster relief, but its effect lasts only 2 hours and must be paired with dexamethasone. Patients who receive epinephrine require 2–4 hours of observation for rebound. Cool mist has not been shown to improve outcomes in randomized trials and is no longer recommended.",
    topic: "Croup",
    difficulty: "easy",
  },
  {
    id: "peds-q-004",
    rotation: "pediatrics",
    question:
      "An 8-month-old infant is admitted with a 3-day history of nasal congestion, low-grade fever, and progressive respiratory distress. Exam reveals diffuse wheezing and crackles, respiratory rate 62 breaths/min, and SpO2 88% on room air. Nasal wash is RSV antigen positive. Which of the following interventions is NOT indicated in the management of this patient?",
    options: [
      "Supplemental oxygen titrated to SpO2 ≥ 90–92%",
      "High-flow nasal cannula (HFNC) if work of breathing is significant",
      "IV or nasogastric fluid hydration if unable to maintain adequate oral intake",
      "Albuterol 2.5 mg nebulized every 4 hours to relieve bronchospasm",
      "Nasal suctioning to clear secretions and improve feeding",
    ],
    correctAnswer: 3,
    explanation:
      "RSV bronchiolitis is managed with supportive care only. Albuterol (and other bronchodilators, including epinephrine) are NOT recommended by the American Academy of Pediatrics (AAP) 2014 Clinical Practice Guideline for bronchiolitis. Multiple randomized controlled trials demonstrate that albuterol does not improve oxygenation, reduce hospitalization duration, or decrease admission rates in bronchiolitis. The pathophysiology is primarily mucosal edema and mucus plugging — not bronchospasm — making beta-agonists ineffective. Corticosteroids and antibiotics are also not indicated unless secondary bacterial pneumonia or apnea of prematurity complicates the picture. Evidence-based management focuses on supplemental oxygen for SpO2 < 90%, hydration support, and nasal suctioning. High-flow nasal cannula (HFNC) is increasingly used for moderate-severe bronchiolitis to reduce work of breathing and avoid intubation.",
    topic: "RSV Bronchiolitis",
    difficulty: "easy",
  },
  {
    id: "peds-q-005",
    rotation: "pediatrics",
    question:
      "A 4-week-old male infant presents with projectile, non-bilious vomiting after every feeding for the past week. He appears hungry immediately after vomiting. On exam, you palpate an olive-shaped mass in the right upper quadrant, and visible peristaltic waves are noted across the abdomen. Labs are ordered. Which electrolyte pattern is most consistent with this diagnosis?",
    options: [
      "Hypernatremia, hyperchloremia, metabolic acidosis (HCO3 10 mEq/L)",
      "Hyponatremia, hypokalemia, respiratory alkalosis",
      "Hypochloremia, hypokalemia, metabolic alkalosis (HCO3 32 mEq/L)",
      "Hyperkalemia, hypernatremia, normal anion gap metabolic acidosis",
      "Normal electrolytes with a mildly elevated creatinine",
    ],
    correctAnswer: 2,
    explanation:
      "Hypertrophic pyloric stenosis (HPS) causes hypochloremic, hypokalemic metabolic alkalosis — the classic electrolyte abnormality. Repeated vomiting of gastric contents (rich in hydrochloric acid and potassium) leads to loss of H+, Cl-, and K+. The body compensates by retaining HCO3-, resulting in metabolic alkalosis (elevated serum bicarbonate, often 30–40 mEq/L). Paradoxical aciduria may occur: the kidney preferentially excretes H+ in the distal tubule to conserve Na+ and preserve perfusion when volume depleted. The classic presentation is a 3–6 week old male (4:1 male predominance) with non-bilious projectile vomiting and a palpable olive-shaped pyloric mass. Diagnosis is confirmed with ultrasound (pyloric muscle thickness ≥ 4 mm, pyloric channel length ≥ 14 mm). Surgical correction (Ramstedt pyloromyotomy) is performed after metabolic correction with normal saline and potassium supplementation.",
    topic: "Pyloric Stenosis",
    difficulty: "medium",
  },
  {
    id: "peds-q-006",
    rotation: "pediatrics",
    question:
      "A 9-month-old girl is brought to the ED with 12 hours of intermittent, severe, colicky abdominal pain with periods of drawing up her knees to her chest. Between episodes she appears lethargic and pale. The parents note red, jelly-like material in her diaper. Abdominal ultrasound confirms a 'target sign' in the right upper quadrant. What is the most appropriate next step?",
    options: [
      "Emergent surgical laparotomy — all intussusceptions require operative reduction",
      "CT abdomen with IV contrast to better characterize the lesion before any intervention",
      "Air (pneumatic) or hydrostatic (saline/water-soluble contrast) enema reduction performed by radiology",
      "Barium enema — gold standard for both diagnosis and treatment of intussusception",
      "Nasogastric decompression and IV antibiotics; monitor for 24 hours before intervention",
    ],
    correctAnswer: 2,
    explanation:
      "Intussusception (telescoping of bowel, most commonly ileocolic in children) is diagnosed by ultrasound showing the classic 'target sign' or 'donut sign' — a 3–5 cm hypoechoic mass with a hyperechoic center on transverse view. The first-line treatment in a hemodynamically stable patient without signs of perforation is pneumatic (air) enema or hydrostatic (saline or water-soluble contrast) enema reduction performed under fluoroscopy by a pediatric radiologist. Air enema has a success rate of 80–90% and lower radiation exposure than contrast enema. Absolute contraindications to enema reduction include: peritoneal signs, perforation, or hemodynamic instability — these require emergent surgical laparotomy. Barium enema was historically used but is largely abandoned due to the danger of barium peritonitis if perforation occurs. After successful reduction, patients are observed for 24 hours for recurrence (5–10% recurrence rate). A pathologic lead point (e.g., Meckel's diverticulum, polyp, lymphoma) is present in < 5% of pediatric cases.",
    topic: "Intussusception",
    difficulty: "medium",
  },
  {
    id: "peds-q-007",
    rotation: "pediatrics",
    question:
      "A previously healthy 8-month-old presents with 12 hours of high fever, irritability, bulging fontanelle, and nuchal rigidity. LP reveals: WBC 1,200 cells/mm³ (92% PMNs), protein 180 mg/dL, glucose 18 mg/dL (serum glucose 90 mg/dL). Gram stain shows gram-negative diplococci. Which empiric antibiotic regimen is most appropriate for this patient?",
    options: [
      "Ampicillin 100 mg/kg/day IV divided every 6 hours — Listeria coverage is the priority under 1 month",
      "Ceftriaxone 100 mg/kg/day IV plus vancomycin 60 mg/kg/day IV plus dexamethasone 0.15 mg/kg IV every 6 hours for 4 days",
      "Cefotaxime 300 mg/kg/day IV alone — gram-negative diplococci means N. meningitidis, and cephalosporins are sufficient",
      "Vancomycin alone — gram-negative diplococci are less common and broader coverage is not needed",
      "Meropenem 120 mg/kg/day IV — broadest coverage is preferred in critically ill infants",
    ],
    correctAnswer: 1,
    explanation:
      "For bacterial meningitis in infants 1–3 months and older children, empiric therapy requires: (1) a third-generation cephalosporin (ceftriaxone 100 mg/kg/day IV divided every 12–24 hours, OR cefotaxime 300 mg/kg/day divided every 6–8 hours) to cover gram-negative organisms including N. meningitidis (gram-negative diplococci) and H. influenzae, plus (2) vancomycin 60 mg/kg/day divided every 6 hours to cover penicillin-resistant Streptococcus pneumoniae — this combination is essential because empiric therapy must cover all likely pathogens. For infants < 28 days (neonates), add ampicillin to cover Listeria and GBS. Dexamethasone 0.15 mg/kg IV every 6 hours for 4 days given before or with the first antibiotic dose reduces neurologic sequelae in S. pneumoniae meningitis (especially hearing loss); its benefit in gram-negative meningitis is less clear but widely recommended. Never delay antibiotics for LP — if LP is not immediately possible, draw blood cultures and start antibiotics.",
    topic: "Bacterial Meningitis",
    difficulty: "hard",
  },
  {
    id: "peds-q-008",
    rotation: "pediatrics",
    question:
      "A 7-year-old with persistent asthma is currently on low-dose inhaled corticosteroid (ICS) monotherapy. His mother reports he uses his albuterol rescue inhaler 3–4 days per week and wakes at night with cough 3–4 times per month. His FEV1 is 78% of predicted. According to NAEPP EPR-4 guidelines, which step is this patient on currently, and what is the next step in management?",
    options: [
      "Step 1 (intermittent) — step up to Step 2 (low-dose ICS)",
      "Step 2 (low-dose ICS) — step up to Step 3 (medium-dose ICS or low-dose ICS + LABA)",
      "Step 3 (medium-dose ICS) — add montelukast as adjunct therapy",
      "Step 2 (low-dose ICS) — add as-needed SABA and reassess in 6 months",
      "Step 4 (medium-dose ICS + LABA) — consider referral to pulmonology",
    ],
    correctAnswer: 1,
    explanation:
      "This child has persistent asthma that is NOT well-controlled on Step 2 therapy (low-dose ICS). Classification of control: rescue inhaler use > 2 days/week AND nighttime awakenings ≥ 1–2 per month AND FEV1 < 80% predicted all indicate not well-controlled asthma. NAEPP EPR-4 guidelines recommend stepping up therapy when asthma is not well-controlled. Step 3 options for children 5–11 years include: (a) medium-dose ICS alone, OR (b) low-dose ICS plus an adjunct controller (LABA — approved in children ≥ 5 years with caution, LTRA, or theophylline). LABAs must never be used as monotherapy in asthma — always in combination with ICS. Before stepping up, verify inhaler technique, medication adherence, and trigger avoidance. The stepwise approach also includes a short course of oral steroids for acute exacerbations and reassessment every 1–6 months.",
    topic: "Pediatric Asthma",
    difficulty: "medium",
  },
  {
    id: "peds-q-009",
    rotation: "pediatrics",
    question:
      "A 15-month-old girl is brought in for her well-child visit. Her mother reports she drinks approximately 32 oz of whole cow's milk per day and eats only a small variety of solid foods. CBC shows: hemoglobin 8.2 g/dL, MCV 62 fL, RDW 18%, MCHC low. Peripheral smear reveals microcytic hypochromic red cells. Serum ferritin is 4 ng/mL. What is the most appropriate management?",
    options: [
      "Reassure the mother; cow's milk is an excellent source of iron and these values are normal for age",
      "Elemental iron 3–6 mg/kg/day divided once or twice daily, limit cow's milk to ≤ 16 oz/day, and recheck CBC in 4 weeks",
      "Immediate referral to hematology for bone marrow biopsy to rule out thalassemia",
      "Switch to iron-fortified formula; cow's milk should be resumed at age 2",
      "Intravenous iron sucrose — oral iron has insufficient bioavailability in toddlers",
    ],
    correctAnswer: 1,
    explanation:
      "This toddler has iron deficiency anemia (IDA) — the most common nutritional deficiency in children — caused by excessive cow's milk consumption. Cow's milk is low in iron, inhibits non-heme iron absorption, can cause occult GI blood loss by irritating the gut mucosa, and displaces iron-rich solid foods from the diet. The AAP recommends limiting cow's milk to ≤ 16 oz (480 mL) per day in children 12–24 months. Treatment is elemental iron 3–6 mg/kg/day (typically as ferrous sulfate 3 mg/kg/day elemental iron, given on an empty stomach with vitamin C to enhance absorption). Response is confirmed by a reticulocytosis at 1 week and a rise in hemoglobin of ≥ 1 g/dL at 4 weeks. Iron supplementation should continue for 2–3 months after hemoglobin normalizes to replenish stores. Hemoglobin electrophoresis can distinguish IDA from thalassemia trait (normal ferritin, elevated HbA2 in beta-thalassemia trait).",
    topic: "Iron Deficiency Anemia",
    difficulty: "easy",
  },
  {
    id: "peds-q-010",
    rotation: "pediatrics",
    question:
      "A 9-year-old boy with ADHD (combined presentation) is started on methylphenidate. His mother asks how the medication works and what monitoring is required. Which of the following correctly describes the mechanism of action and essential monitoring for methylphenidate?",
    options: [
      "Methylphenidate increases norepinephrine by inhibiting its reuptake; monitor renal function every 6 months",
      "Methylphenidate blocks dopamine and norepinephrine reuptake in the presynaptic neuron, increasing catecholamine availability in the synapse; monitor height, weight, heart rate, and blood pressure at every visit",
      "Methylphenidate is a direct dopamine agonist; baseline EEG is required before initiation",
      "Methylphenidate primarily increases serotonin; baseline liver function tests and CBC are required",
      "Methylphenidate releases stored norepinephrine from presynaptic vesicles; no laboratory monitoring is needed but thyroid function should be checked annually",
    ],
    correctAnswer: 1,
    explanation:
      "Methylphenidate is a central nervous system stimulant that blocks the reuptake of both dopamine and norepinephrine via the dopamine transporter (DAT) and norepinephrine transporter (NET), increasing the availability of these neurotransmitters in the prefrontal cortex — the area primarily implicated in ADHD. This is distinct from amphetamines (e.g., amphetamine salts, lisdexamfetamine), which additionally cause presynaptic release of catecholamines. Required monitoring: height and weight at every visit (stimulants can suppress appetite and slow growth velocity — a 'drug holiday' in the summer may be considered), heart rate and blood pressure (stimulants cause modest increases; obtain baseline EKG if cardiac history is present or family history of sudden cardiac death), and psychological assessment for worsening anxiety or tics. A baseline cardiac evaluation is recommended by the AAP before starting stimulants if there are any cardiac symptoms or family history of sudden cardiac death.",
    topic: "ADHD Pharmacology",
    difficulty: "medium",
  },
  {
    id: "peds-q-011",
    rotation: "pediatrics",
    question:
      "A newborn girl is flagged on the state newborn screening panel for elevated TSH (> 40 mIU/L) and low free T4. She is now 10 days old. Physical examination reveals a large posterior fontanelle, prolonged jaundice, macroglossia, and hypotonia. What is the most appropriate management?",
    options: [
      "Repeat newborn screen at 2 weeks of age; treatment is not started until two abnormal results",
      "Start levothyroxine 10–15 mcg/kg/day orally as soon as possible, with the goal of normalizing TSH within 2 weeks",
      "Start methimazole 0.2 mg/kg/day to suppress the elevated TSH",
      "Refer to endocrinology and defer treatment until after thyroid ultrasound and radionuclide scan",
      "Start liothyronine (T3) because it is more biologically active than T4",
    ],
    correctAnswer: 1,
    explanation:
      "Congenital hypothyroidism (CH) is one of the most common preventable causes of intellectual disability. Treatment must be initiated immediately — ideally within the first 2 weeks of life — with levothyroxine (T4) at a dose of 10–15 mcg/kg/day orally. The clinical features described (large posterior fontanelle, prolonged jaundice > 3 weeks, macroglossia, hypotonia) are classic signs of untreated CH. The urgency of treatment cannot be overstated: thyroid hormone is essential for brain myelination during the first 2–3 years of life, and every week of delay increases the risk of permanent neurodevelopmental impairment. Treatment goals: normalize TSH to < 5 mIU/L within 2–4 weeks and maintain free T4 in the upper half of the normal range. Thyroid imaging (ultrasound, radionuclide scan) can be performed after treatment is initiated to determine etiology (aplasia, dysgenesis, dyshormonogenesis) but should never delay therapy. Methimazole is a hyperthyroid medication — it would worsen hypothyroidism. Liothyronine (T3) is not used because T4 is peripherally converted to T3 and oral T4 provides stable levels.",
    topic: "Congenital Hypothyroidism",
    difficulty: "medium",
  },
  {
    id: "peds-q-012",
    rotation: "pediatrics",
    question:
      "A 3-year-old boy with homozygous sickle cell disease (HbSS) presents to the ED with a temperature of 39.8°C. He appears ill. His parents report he has been on penicillin V prophylaxis. Which of the following is correct regarding his management?",
    options: [
      "Send blood cultures and discharge with oral amoxicillin — penicillin prophylaxis makes serious infection unlikely",
      "Admit for IV ceftriaxone empirically; all febrile SCD patients < 5 years require hospitalization",
      "Immediate full sepsis evaluation (CBC, reticulocyte count, blood cultures), IV ceftriaxone 50–75 mg/kg (max 2 g) empirically, and reassess after culture and clinical response",
      "Reassure parents that fever in SCD is common; follow up in 24 hours with primary care",
      "Start hydroxyurea immediately to prevent vaso-occlusive crisis triggered by the infection",
    ],
    correctAnswer: 2,
    explanation:
      "Children with sickle cell disease (HbSS or HbSβ0 thalassemia) are functionally asplenic by age 2–3 years due to auto-infarction of the spleen, making them highly susceptible to overwhelming sepsis from encapsulated organisms (S. pneumoniae, H. influenzae, N. meningitidis). Fever ≥ 38.5°C in a child with SCD is a medical emergency. Management: (1) immediate CBC with reticulocyte count (check for acute splenic sequestration — splenomegaly + rapidly dropping hemoglobin + reticulocytosis; or aplastic crisis — low reticulocyte count); (2) blood culture before antibiotics; (3) empiric IV ceftriaxone 50–75 mg/kg (max 2 g) immediately — do not wait for culture results; (4) hospitalize if ill-appearing, WBC < 5,000 or > 30,000, hemoglobin < 5 g/dL, platelets < 100,000, history of prior bacteremia, or no reliable follow-up. Prophylactic penicillin (penicillin V 125 mg BID under age 3; 250 mg BID ages 3–5) is required starting at 2 months of age and continued at least until age 5. Pneumococcal vaccination (PCV15/PCV20 and PPSV23) is essential.",
    topic: "Sickle Cell Disease",
    difficulty: "hard",
  },
  {
    id: "peds-q-013",
    rotation: "pediatrics",
    question:
      "A 14-month-old boy is brought to the ED after his parents found him unresponsive. On exam, he is irritable, with a bulging fontanelle, retinal hemorrhages, and bruising in multiple stages of healing over his torso. Skeletal survey reveals healing posterior rib fractures and bilateral classic metaphyseal lesions (corner fractures) of the distal femurs. Which of the following is most consistent with the fracture patterns seen in non-accidental trauma (child abuse)?",
    options: [
      "Spiral fracture of the mid-shaft humerus — this is pathognomonic for abuse",
      "Supracondylar humerus fracture — the most common abuse fracture",
      "Posterior rib fractures and classic metaphyseal lesions (bucket-handle or corner fractures) — highly specific for non-accidental trauma",
      "Clavicle fracture during birth — common accidental birth trauma, should not raise concern",
      "Toddler's fracture (spiral tibial fracture) in an ambulatory child — classic for abuse",
    ],
    correctAnswer: 2,
    explanation:
      "Posterior rib fractures and classic metaphyseal lesions (CMLs, also called 'bucket-handle' or 'corner' fractures) are the fracture patterns most specific for non-accidental trauma (NAT) in young children. Posterior rib fractures result from forceful thoracic squeezing, as occurs in abusive shaking — an accidental mechanism producing isolated posterior rib fractures in infants is extremely rare. CMLs occur at the metaphysis of long bones and result from violent shaking or yanking forces transmitted to the weaker metaphyseal bone. Fractures in multiple stages of healing — indicating repeated trauma — increase suspicion. Retinal hemorrhages plus subdural hematoma (bulging fontanelle + altered mental status) constitute the triad of abusive head trauma. Mandatory reporting to child protective services (CPS) is required. The workup includes full skeletal survey, ophthalmology exam, head MRI, and labs (CBC, coagulation studies, liver enzymes to exclude bleeding disorders or occult abdominal injury). A toddler's fracture is actually a low-suspicion finding in an ambulatory child who fell.",
    topic: "Child Abuse",
    difficulty: "hard",
  },
  {
    id: "peds-q-014",
    rotation: "pediatrics",
    question:
      "A mother brings her 18-month-old daughter for a well-child visit, concerned because she has stopped saying words she previously knew. At 12 months, the child said 'mama,' 'dada,' and 'baba.' Now she says nothing, avoids eye contact, and has repetitive hand movements. She walks independently. Which of the following is the most appropriate immediate next step?",
    options: [
      "Reassure the mother that speech regression is normal between 12–24 months and recheck at age 2",
      "Refer for audiologic evaluation and developmental assessment; loss of previously acquired language is always a developmental red flag requiring immediate evaluation",
      "Start speech therapy and reassess in 6 months — early intervention is beneficial regardless of diagnosis",
      "Order brain MRI immediately to rule out a progressive neurologic condition",
      "Obtain metabolic panel and serum ammonia to rule out metabolic encephalopathy",
    ],
    correctAnswer: 1,
    explanation:
      "Loss of previously acquired language or social skills at any age is a significant developmental red flag that requires immediate evaluation — this is never normal. Language regression combined with social withdrawal (avoiding eye contact) and stereotyped movements (repetitive hand movements) in an 18-month-old is highly concerning for autism spectrum disorder (ASD) or, less commonly, Rett syndrome (MECP2 gene mutation — classic hand wringing in girls after 6–18 months of normal development). The first steps are: (1) formal hearing evaluation (audiogram or auditory brainstem response — hearing loss is the most common reversible cause of speech delay), and (2) developmental screening with the M-CHAT-R/F (Modified Checklist for Autism in Toddlers, Revised with Follow-up) at 18 and 24 months. An M-CHAT-R score ≥ 3 requires a follow-up interview; ≥ 8 requires immediate referral. Early Intervention (Part C of IDEA, birth–3 years) referral should be made concurrently — do not wait for a formal diagnosis to begin services. Reassurance without workup is inappropriate when regression is present.",
    topic: "Developmental Red Flags",
    difficulty: "medium",
  },
  {
    id: "peds-q-015",
    rotation: "pediatrics",
    question:
      "A 2-year-old boy has been treated for his second episode of acute otitis media in 3 months with high-dose amoxicillin (90 mg/kg/day divided BID). His mother returns after 3 days, reporting that he continues to have fever and ear pain, and otoscopy shows an erythematous, bulging, non-mobile tympanic membrane. What is the most appropriate next step?",
    options: [
      "Switch to azithromycin 5-day course — macrolides cover atypical organisms in AOM treatment failure",
      "Watchful waiting for 48 more hours — amoxicillin failures are common and most resolve",
      "Amoxicillin-clavulanate (Augmentin) 90 mg/kg/day amoxicillin component divided BID — beta-lactamase producing H. influenzae and M. catarrhalis are the most common causes of treatment failure",
      "Cefdinir 14 mg/kg/day — oral cephalosporins are first-line for amoxicillin failure",
      "Trimethoprim-sulfamethoxazole — sulfonamides are effective against penicillin-resistant S. pneumoniae",
    ],
    correctAnswer: 2,
    explanation:
      "Acute otitis media (AOM) treatment failure after 48–72 hours of high-dose amoxicillin is most commonly caused by beta-lactamase producing bacteria — particularly non-typeable H. influenzae and M. catarrhalis, which produce beta-lactamase enzymes that destroy amoxicillin. Amoxicillin-clavulanate (Augmentin) at 90 mg/kg/day of the amoxicillin component (using the 14:1 ratio formulation to avoid GI side effects from excess clavulanate) is the recommended second-line agent by the AAP. Clavulanate inhibits beta-lactamase, restoring amoxicillin's activity. Azithromycin has poor activity against S. pneumoniae strains in the U.S. and is not recommended for AOM. TMP-SMX has high rates of resistance (> 50% S. pneumoniae). If amoxicillin-clavulanate fails (third failure or persistent fever after 3 days), a single dose of ceftriaxone 50 mg/kg IM/IV is indicated. Tympanostomy tubes are indicated for recurrent AOM (3+ episodes in 6 months, or 4+ in 1 year) or persistent OME ≥ 3 months with hearing loss.",
    topic: "Otitis Media",
    difficulty: "medium",
  },
  {
    id: "peds-q-016",
    rotation: "pediatrics",
    question:
      "A 5-year-old boy is brought to the ED by EMS for respiratory distress. He is sitting in a tripod position, leaning forward with his mouth open, drooling, and appears toxic. His voice is muffled. Temperature is 39.6°C. There is no barky cough. Stridor is present but inspiratory only. Which of the following is the most appropriate IMMEDIATE management?",
    options: [
      "Perform laryngoscopy immediately at the bedside to confirm the diagnosis",
      "Administer nebulized racemic epinephrine and dexamethasone IM — treat as croup empirically",
      "Keep child calm, do not agitate, call anesthesia and ENT for controlled intubation in the OR, and administer oxygen via blow-by",
      "Obtain lateral neck X-ray immediately to look for the 'thumb sign' before any intervention",
      "Perform bag-mask ventilation and prepare for emergent cricothyrotomy",
    ],
    correctAnswer: 2,
    explanation:
      "This presentation is classic for epiglottitis: toxic-appearing child in tripod position (leaning forward on outstretched arms), drooling (dysphagia and inability to manage secretions), muffled ('hot potato') voice, high fever, NO barky cough (which distinguishes it from croup), and inspiratory stridor. Epiglottitis is a life-threatening supraglottic infection (most commonly H. influenzae type b pre-vaccine; now also Streptococcus, Staphylococcus) that can cause complete airway obstruction within minutes. CRITICAL management principle: DO NOT agitate the child — any distress can cause laryngospasm and complete obstruction. Do NOT attempt laryngoscopy, nasopharyngoscopy, or blood draws until the airway is secured. The correct approach is: (1) keep child seated and calm with a caregiver, (2) provide supplemental O2 via blow-by or face mask held at a distance, (3) immediately activate anesthesia and ENT for emergent controlled intubation in the OR under inhalational anesthesia, (4) IV antibiotics (ceftriaxone) after airway is secured. Croup has a barky (seal-like) cough, lower fever, and no drooling — managed with dexamethasone ± epinephrine.",
    topic: "Epiglottitis vs Croup",
    difficulty: "hard",
  },
  {
    id: "peds-q-017",
    rotation: "pediatrics",
    question:
      "A 4-day-old male newborn has not passed meconium since birth. He is now vomiting bilious material and has a distended abdomen. Digital rectal examination causes explosive passage of a large amount of stool and gas with immediate decompression of the abdomen. Which of the following confirms the diagnosis, and what finding is expected on the confirmatory test?",
    options: [
      "Abdominal ultrasound showing a hyperechoic bowel wall; Hirschsprung disease is an ultrasound diagnosis",
      "Barium enema showing a transition zone with a narrow aganglionic segment proximally and dilated bowel distally",
      "Full-thickness rectal biopsy showing absence of ganglion cells in the Auerbach (myenteric) and Meissner (submucosal) plexuses — the gold standard for diagnosis",
      "Anorectal manometry showing paradoxical internal sphincter relaxation with rectal balloon inflation",
      "Colonoscopy showing a narrowed rectum without mucosal abnormality",
    ],
    correctAnswer: 2,
    explanation:
      "Hirschsprung disease (congenital aganglionic megacolon) results from failure of neural crest cells to migrate into the distal colon during fetal development, resulting in absence of ganglion cells in both the myenteric (Auerbach) and submucosal (Meissner) plexuses. The aganglionic segment cannot relax, causing functional obstruction. Classic presentation: delayed passage of meconium beyond 48 hours of life (normal infants pass meconium within 24–48 hours), abdominal distension, bilious vomiting, and the 'squirt sign' (explosive decompression on rectal exam). The gold standard for diagnosis is full-thickness rectal biopsy showing absence of ganglion cells and hypertrophied nerve trunks. Suction biopsy (transanal, less invasive) is the preferred initial approach and sufficient if adequate tissue is obtained. Barium enema shows a transition zone between narrow aganglionic rectum and dilated proximal colon (helpful in planning surgery but not diagnostic). Anorectal manometry in HD shows failure of internal anal sphincter relaxation (the rectoanal inhibitory reflex is absent) — useful in older children but less reliable in neonates. Treatment is surgical resection of the aganglionic segment (pull-through procedure).",
    topic: "Hirschsprung Disease",
    difficulty: "hard",
  },
  {
    id: "peds-q-018",
    rotation: "pediatrics",
    question:
      "A 14-year-old obese male presents with 3 weeks of right hip and groin pain that worsens with activity. He walks with a limp and externally rotates his right leg. On exam, passive internal rotation of the hip causes pain and the hip automatically externally rotates with flexion. Which imaging study best confirms the diagnosis, and what is the characteristic finding?",
    options: [
      "Hip ultrasound showing joint effusion — this confirms Legg-Calvé-Perthes disease",
      "AP pelvis and frog-leg lateral X-ray showing posterior and inferior displacement of the femoral epiphysis (the 'ice cream falling off the cone' sign) and a widened physeal plate",
      "MRI of the hip showing avascular necrosis of the femoral head — needed before any surgical decision",
      "CT scan of the pelvis with 3D reconstruction — provides the best view of the slip",
      "AP pelvis X-ray alone showing a decreased head-shaft angle of less than 130 degrees",
    ],
    correctAnswer: 1,
    explanation:
      "Slipped capital femoral epiphysis (SCFE) is the most common hip disorder in adolescents and is particularly associated with obesity. The femoral epiphysis slips posteriorly and inferiorly off the femoral neck through the growth plate (physis). Classic presentation: obese adolescent (male, 12–16 years; female, 10–14 years) with groin, thigh, or knee pain and an antalgic limp, with the hip held in passive external rotation. The obligate external rotation sign: when the hip is passively flexed, it automatically externally rotates — this is pathognomonic. Imaging: AP pelvis AND frog-leg lateral X-ray are both required. The frog-leg lateral is essential and often demonstrates the slip when the AP view appears normal (early/stable SCFE). The slip appears as posterior displacement of the epiphysis — on the AP view, a line drawn along the superior femoral neck (Klein's line) should intersect the epiphysis; if it does not, SCFE is present. Treatment is urgent surgical in situ pin fixation (single cannulated screw) to prevent further slipping and avoid avascular necrosis. SCFE is bilateral in 20–40% — evaluate the contralateral hip.",
    topic: "SCFE",
    difficulty: "medium",
  },
  {
    id: "peds-q-019",
    rotation: "pediatrics",
    question:
      "A 2-year-old boy who lives in a pre-1978 home with peeling paint has a blood lead level (BLL) of 52 mcg/dL on confirmatory venous testing. He is asymptomatic. Which of the following is the most appropriate management?",
    options: [
      "Chelation is not indicated below 70 mcg/dL; perform environmental abatement and recheck in 3 months",
      "Administer BAL (British anti-Lewisite, dimercaprol) IM plus CaNa2EDTA IV — this combination is reserved for BLL ≥ 70 mcg/dL or symptomatic lead encephalopathy",
      "Succimer (DMSA) 10 mg/kg/dose every 8 hours for 5 days, then every 12 hours for 14 days, combined with environmental lead abatement and removal from the lead source",
      "Calcium disodium EDTA (CaNa2EDTA) IV alone — oral chelation is inadequate for BLL > 45 mcg/dL",
      "Iron supplementation and dietary calcium; nutritional interventions alone are sufficient for BLL < 60 mcg/dL",
    ],
    correctAnswer: 2,
    explanation:
      "Lead chelation thresholds per the CDC and AAP guidelines: (1) BLL 45–69 mcg/dL: oral succimer (DMSA, dimercaptosuccinic acid) 10 mg/kg/dose (350 mg/m²/dose) every 8 hours for 5 days, then every 12 hours for 14 days (total 19-day course); this is the first-line chelator for asymptomatic children with BLL 45–69 mcg/dL. (2) BLL ≥ 70 mcg/dL OR symptomatic lead encephalopathy (seizures, ataxia, altered consciousness): hospitalize immediately and administer BAL (dimercaprol) 75 mg/m² IM every 4 hours PLUS CaNa2EDTA (calcium EDTA) 1,500 mg/m²/day continuous IV — BAL must always precede EDTA by 4 hours to prevent redistribution of lead to the brain. Most critical step for ALL cases: environmental lead abatement and removal of the child from the lead source — chelation without source removal is ineffective because reabsorption continues. Succimer does NOT cross the blood-brain barrier, so neurological injury from high-level exposure is not reversed by chelation alone.",
    topic: "Lead Poisoning",
    difficulty: "hard",
  },
  {
    id: "peds-q-020",
    rotation: "pediatrics",
    question:
      "A 5-day-old female infant presents with poor feeding, vomiting, and lethargy. On exam she is hypotensive, has ambiguous genitalia (virilized clitoris), and hyperpigmentation of the labia. Labs show: Na+ 121 mEq/L, K+ 7.2 mEq/L, glucose 38 mg/dL. Serum 17-hydroxyprogesterone (17-OHP) is markedly elevated. Which of the following best describes the pathophysiology and treatment?",
    options: [
      "11-beta-hydroxylase deficiency causing salt-wasting; treat with fludrocortisone alone",
      "21-hydroxylase deficiency causing accumulation of 17-OHP and androgen precursors, with impaired cortisol and aldosterone synthesis; treat with hydrocortisone, fludrocortisone, and sodium chloride supplementation",
      "17-alpha-hydroxylase deficiency causing hypertension and hypokalemia; treat with dexamethasone",
      "3-beta-hydroxysteroid dehydrogenase deficiency causing salt-wasting in males only; females are unaffected",
      "Congenital adrenal hyperplasia due to ACTH deficiency; treat with ACTH replacement therapy",
    ],
    correctAnswer: 1,
    explanation:
      "Classic congenital adrenal hyperplasia (CAH) is caused by 21-hydroxylase deficiency in 90–95% of cases. The enzyme block prevents conversion of 17-OHP to 11-deoxycortisol (cortisol precursor) and progesterone to deoxycorticosterone (aldosterone precursor). The consequences are: (1) cortisol deficiency → loss of negative feedback → elevated ACTH → adrenal hyperplasia and buildup of 17-OHP and upstream androgen precursors (DHEA, androstenedione, testosterone); (2) aldosterone deficiency → salt-wasting (hyponatremia, hyperkalemia, hypovolemia, hypotension — classic adrenal crisis in the salt-wasting form at 5–14 days of life); (3) androgen excess → virilization of XX female external genitalia (clitoromegaly, labial fusion) while internal structures remain normal. Markedly elevated 17-OHP is the diagnostic marker. Newborn screen includes 17-OHP in all U.S. states. Treatment: hydrocortisone (cortisol replacement, suppresses ACTH-driven androgen excess) + fludrocortisone (mineralocorticoid replacement for salt-wasting form) + sodium chloride supplementation in infancy. In adrenal crisis: IV hydrocortisone stress dosing (50–100 mg/m²), IV normal saline, and dextrose for hypoglycemia.",
    topic: "Congenital Adrenal Hyperplasia",
    difficulty: "hard",
  },
];
