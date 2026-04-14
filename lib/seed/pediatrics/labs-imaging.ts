// @ts-nocheck
import { LabValue, ImagingFinding } from "@/types/seed";

export const pediatricsLabs: LabValue[] = [
  {
    id: "peds-lab-bilirubin-newborn",
    rotation: "pediatrics",
    name: "Neonatal Bilirubin (Total and Direct) — Bhutani Nomogram",
    normalRange: "Varies by hour-of-life and gestational age — use Bhutani nomogram. Term newborn: < 12 mg/dL (day 3–4 peak)",
    unit: "mg/dL",
    interpretation: [
      {
        range: "First 24 hours — any visible jaundice",
        meaning: "ALWAYS pathological — hemolytic disease of the newborn (ABO, Rh incompatibility), G6PD deficiency, sepsis",
        clinicalAction: "Immediate serum bilirubin, blood type, DAT (Coombs test), CBC + reticulocyte count, G6PD screening. Plot on Bhutani nomogram. Phototherapy and/or exchange transfusion based on nomogram.",
      },
      {
        range: "Total bilirubin at or above Bhutani high-risk zone",
        meaning: "High risk for bilirubin-induced neurological dysfunction (BIND) — kernicterus if untreated",
        clinicalAction: "Intensive phototherapy. Exchange transfusion if bilirubin continues to rise despite phototherapy or approaches exchange transfusion threshold on nomogram.",
      },
      {
        range: "Total bilirubin — physiologic range (day 2–5, term infant)",
        meaning: "Physiologic jaundice: peaks day 3–5 at 12–13 mg/dL in term infants; resolves by day 7–10",
        clinicalAction: "Adequate breastfeeding support (8–12 feeds/day), recheck bilirubin 12–24 hours after discharge, follow up by 3–5 days of life",
      },
      {
        range: "Jaundice persisting > 2 weeks (> 3 weeks in preterm)",
        meaning: "Prolonged neonatal jaundice — must check direct (conjugated) bilirubin fraction",
        clinicalAction: "Order direct bilirubin. If direct bili > 1 mg/dL or > 20% of total = cholestatic jaundice → evaluate for biliary atresia, choledochal cyst, neonatal hepatitis, Alagille syndrome",
      },
      {
        range: "Direct (conjugated) bilirubin > 1 mg/dL (any age)",
        meaning: "ALWAYS pathological — biliary atresia (acholic stools, hepatomegaly, dark urine), neonatal hepatitis, metabolic (galactosemia, alpha-1 antitrypsin deficiency), sepsis",
        clinicalAction: "Urgent evaluation. Biliary atresia: hepatoportoenterostomy (Kasai procedure) most effective if performed before 60 days of life — delays need for liver transplant. HIDA scan and liver biopsy to confirm. Neonatal hepatitis: TORCH workup, metabolic screen.",
      },
    ],
    clinicalPearl:
      "Breastfeeding jaundice (days 2–5) is due to insufficient milk intake and dehydration — support frequent breastfeeding (not formula supplementation as a first step). Breast milk jaundice is a distinct entity (days 7–14) caused by a substance in mature breast milk that inhibits hepatic conjugation — benign, resolves spontaneously; do NOT discontinue breastfeeding. Kernicterus (bilirubin deposition in basal ganglia) causes: acute = hypotonia, poor feeding, high-pitched cry, retrocollis, seizures; chronic = athetoid cerebral palsy, gaze palsy, sensorineural hearing loss, intellectual disability.",
    boardRecallTip: "Jaundice < 24 hours = pathological (hemolysis). Physiologic jaundice: day 2–3 onset, day 3–5 peak, resolves by day 7–10. Direct bili > 1 mg/dL = biliary atresia until proven otherwise → Kasai before 60 days. Breastfeeding vs breast milk jaundice = different entities.",
  },
  {
    id: "peds-lab-hemoglobin-age",
    rotation: "pediatrics",
    name: "Hemoglobin and Hematocrit — Pediatric Age-Specific Normal Values",
    normalRange: "Newborn: Hgb 14–24 g/dL | 2 months: 9–14 g/dL (physiologic nadir) | 6 months–6 years: 10.5–14 g/dL | 7–12 years: 11–16 g/dL | Adolescent male: 13–17 g/dL | Adolescent female: 12–16 g/dL",
    unit: "g/dL",
    interpretation: [
      {
        range: "Newborn Hgb > 22 g/dL (polycythemia neonatorum)",
        meaning: "Polycythemia — venous hct > 65%. Causes: delayed cord clamping, twin-twin transfusion, maternal-fetal transfusion, infant of diabetic mother (IDM), IUGR.",
        clinicalAction: "Partial exchange transfusion if symptomatic (poor feeding, hypoglycemia, respiratory distress, seizures). Supportive care if asymptomatic.",
      },
      {
        range: "2-month nadir: Hgb 9–11 g/dL",
        meaning: "Physiologic anemia of infancy — normal; due to switch from fetal Hgb (high O₂ affinity) to adult Hgb + erythropoietin suppression; premature infants have deeper nadir (7–9 g/dL)",
        clinicalAction: "Reassurance if asymptomatic term infant. Premature infants: iron supplementation, erythropoietin in select cases. Transfuse if Hgb < 7 + symptoms (tachycardia, poor weight gain, apnea).",
      },
      {
        range: "Microcytic anemia (MCV < 70 in infant, < 76 in child)",
        meaning: "Iron deficiency anemia (most common, high RDW), thalassemia trait (normal RDW, normal ferritin), lead poisoning, sideroblastic anemia",
        clinicalAction: "Check ferritin, TIBC, reticulocyte count. Ferritin low → IDA → oral iron 3–6 mg/kg/day. Normal ferritin + normal RDW → thalassemia → hemoglobin electrophoresis.",
      },
      {
        range: "Normocytic anemia + elevated reticulocyte count",
        meaning: "Hemolytic anemia — hereditary spherocytosis (fragmented cells, elevated MCHC), sickle cell disease, autoimmune hemolytic anemia, G6PD deficiency (after oxidant stress)",
        clinicalAction: "Peripheral smear, DAT, G6PD level. Hereditary spherocytosis: osmotic fragility test or eosin-5-maleimide (EMA) binding test → splenectomy in severe cases after age 5.",
      },
      {
        range: "Macrocytic anemia (MCV > 100)",
        meaning: "B₁₂ or folate deficiency, hypothyroidism, liver disease, medications (methotrexate, hydroxyurea), Diamond-Blackfan anemia (congenital pure red cell aplasia)",
        clinicalAction: "Reticulocyte count (low in DBA), B₁₂ and folate levels, thyroid function. Diamond-Blackfan anemia: corticosteroids first-line; HSCT for refractory cases.",
      },
    ],
    clinicalPearl:
      "Sickle cell disease (HbSS) is detected on newborn screening (hemoglobin electrophoresis or HPLC at birth). Management milestones: penicillin prophylaxis from 2 months–5 years (prevents overwhelming pneumococcal sepsis); PCV13 + PPSV23 vaccine (extra doses beyond routine schedule); hydroxyurea from age 9 months (reduces HbS polymerization, decreases vaso-occlusive crises and acute chest syndrome); transcranial Doppler (TCD) starting at age 2 years annually for stroke risk screening; hematopoietic stem cell transplantation (HSCT) is the only cure.",
    boardRecallTip: "Physiologic anemia nadir at 2 months (Hgb ~9–11 g/dL). IDA = most common childhood anemia (microcytic, high RDW, low ferritin). Sickle cell: newborn screen → penicillin prophylaxis + hydroxyurea. TCD for stroke risk in SCD. Thalassemia trait: low MCV but normal RDW + normal ferritin.",
  },
  {
    id: "peds-lab-lead",
    rotation: "pediatrics",
    name: "Blood Lead Level (BLL)",
    normalRange: "No safe level of lead exists. CDC reference value: ≥ 3.5 µg/dL (≥ 97.5th percentile) triggers public health action. Blood lead level < 5 µg/dL historically considered 'normal' but is now recognized as having no established safe threshold.",
    unit: "µg/dL",
    interpretation: [
      {
        range: "< 3.5 µg/dL",
        meaning: "Below reference value — still may impair cognition and neurodevelopment at any detectable level",
        clinicalAction: "Counsel on lead exposure prevention. Universal screening at 12 and 24 months per AAP/CDC in high-risk areas or Medicaid enrollment.",
      },
      {
        range: "3.5–9 µg/dL",
        meaning: "Elevated — identify and eliminate lead sources; significant neurodevelopmental impact at this range",
        clinicalAction: "Environmental investigation of home (lead paint, dust, soil, imported toys, folk remedies). Dietary counseling: iron-rich diet (iron deficiency increases GI lead absorption), calcium-rich foods. Repeat BLL in 1–3 months. Developmental evaluation.",
      },
      {
        range: "10–44 µg/dL",
        meaning: "Elevated — associated with cognitive impairment (decreased IQ, ADHD, behavioral problems), growth impairment, anemia, hearing loss",
        clinicalAction: "Mandatory public health reporting. Urgent home inspection and lead abatement. Nutritional supplementation (iron, calcium, vitamin C). Recheck BLL in 1 month. Developmental testing and intervention.",
      },
      {
        range: "45–69 µg/dL",
        meaning: "High — severe neurotoxicity, hemolytic anemia, renal tubular dysfunction, peripheral neuropathy",
        clinicalAction: "Chelation therapy: oral succimer (DMSA) — first-line for BLL 45–69 µg/dL. Remove from lead-containing environment before chelation (chelation mobilizes lead — if source present, may increase absorption).",
      },
      {
        range: "≥ 70 µg/dL",
        meaning: "Lead encephalopathy — headache, vomiting, ataxia, seizures, coma",
        clinicalAction: "Hospitalize immediately. IV dimercaprol (BAL) + IV CaNa₂EDTA (avoid oral agents in encephalopathy — worsens CNS absorption). Transition to oral DMSA after BLL < 45.",
      },
    ],
    clinicalPearl:
      "Lead is a potent neurotoxin with no antidote for its neurological effects — chelation reduces blood levels but does NOT reverse neurocognitive damage. The most important intervention is PRIMARY PREVENTION: identify and eliminate sources before exposure. High-risk sources: pre-1978 housing (lead-based paint is the most common source in the US — lead dust from deteriorating paint during renovation), imported toys, jewelry, traditional remedies (azarcon, greta), contaminated soil near highways and smelters. All children on Medicaid must be screened at 12 and 24 months. Screening recommended in any child in pre-1978 housing.",
    boardRecallTip: "BLL ≥ 3.5 µg/dL = action threshold. No safe level. Most common source: pre-1978 lead paint dust. BLL 45–69: oral succimer (DMSA). BLL ≥ 70 / encephalopathy: IV BAL + EDTA. Chelation does NOT reverse neurocognitive damage. Universal screen at 12 + 24 months (high-risk areas/Medicaid).",
  },
  {
    id: "peds-lab-csf-pediatric",
    rotation: "pediatrics",
    name: "Cerebrospinal Fluid (CSF) Analysis — Pediatric",
    normalRange: "WBC: Neonates 0–30 (PMN up to 60%); Infants 0–15; Children 0–5 | Glucose: > 50% of serum | Protein: Neonates 20–170 mg/dL; Children 5–40 mg/dL | Opening pressure: 8–20 cmH₂O",
    unit: "Cells/µL, mg/dL, cmH₂O",
    interpretation: [
      {
        range: "WBC ≥ 1,000 (PMN predominant) + low glucose + high protein + turbid CSF",
        meaning: "Bacterial meningitis — S. pneumoniae, N. meningitidis (children > 3 months); GBS, E. coli (neonates); H. influenzae (unvaccinated)",
        clinicalAction: "Blood cultures + immediate antibiotics (do NOT delay). Ceftriaxone + vancomycin (> 3 months). Dexamethasone 0.15 mg/kg q6h × 4 days — before or with first antibiotic dose. Gram stain and culture. Neonates: ampicillin + gentamicin (or cefotaxime).",
      },
      {
        range: "WBC 50–500 (lymphocyte predominant) + normal/mildly low glucose + mildly elevated protein",
        meaning: "Viral (aseptic) meningitis — enterovirus (most common, especially summer/fall), HSV, mumps, HIV, arboviruses",
        clinicalAction: "CSF PCR multiplex panel (enterovirus, HSV, CMV). HSV meningitis/encephalitis: IV acyclovir empirically — especially neonates, immunocompromised, or encephalitic features. Enteroviral: supportive care.",
      },
      {
        range: "WBC 500–2,000 (lymphocytes) + very low glucose + very high protein + positive india ink",
        meaning: "Fungal meningitis — Cryptococcus (immunocompromised, especially HIV/AIDS; meningeal signs often absent in AIDS)",
        clinicalAction: "India ink stain, cryptococcal antigen (most sensitive), fungal culture. Amphotericin B + flucytosine (induction phase) → fluconazole (consolidation/maintenance). Serial LPs for ICP management.",
      },
      {
        range: "Neonatal CSF: PMN up to 60% and protein up to 170 mg/dL can be NORMAL",
        meaning: "Neonatal CSF reference ranges differ significantly from older children — interpret with extreme caution",
        clinicalAction: "In any ill-appearing neonate, treat empirically for meningitis even if CSF appears 'normal' until cultures result — neonatal bacterial meningitis may present with atypical CSF findings.",
      },
      {
        range: "Xanthochromia (yellow-tinged CSF) + elevated RBC + elevated protein",
        meaning: "Subarachnoid hemorrhage (distinguishes from traumatic tap — RBC count does NOT decrease from tube 1 to tube 4 in true SAH; xanthochromia develops within 2–4 hours of hemorrhage)",
        clinicalAction: "CT scan of head (positive in 90–95% if done within 6h of hemorrhage); LP if CT negative and high suspicion. Neurosurgery consult.",
      },
    ],
    clinicalPearl:
      "Herpes simplex virus (HSV) encephalitis in neonates (HSV-2 perinatally acquired) presents differently from older children — fever, lethargy, poor feeding, seizures (often focal), vesicular skin lesions (present in only 50%). MRI shows temporal lobe involvement (as in older patients) but may also show diffuse involvement. CSF may show only modest pleocytosis. Empiric IV acyclovir (20 mg/kg q8h for neonates) should be started without delay in any neonate with CSF pleocytosis, sepsis picture, or skin vesicles — the mortality of untreated neonatal HSV encephalitis approaches 80%.",
    boardRecallTip: "Bacterial meningitis CSF: PMN ↑, glucose ↓, protein ↑, cloudy. Viral: lymphocytes, normal glucose, mildly ↑ protein. Neonatal normal CSF: PMN up to 60%, protein up to 170. Traumatic tap vs SAH: xanthochromia + RBC equal in all tubes = SAH. Neonatal HSV: empiric acyclovir for any septic-appearing neonate.",
  },
  {
    id: "peds-lab-newborn-screen",
    rotation: "pediatrics",
    name: "Newborn Metabolic Screen (NBS) — Recommended Uniform Screening Panel (RUSP)",
    normalRange: "Condition-specific cutoffs — screen is positive if analyte above or below reference range for age",
    unit: "Various (µmol/L, mg/dL, activity ratio)",
    interpretation: [
      {
        range: "Elevated phenylalanine (Phe) > 120 µmol/L",
        meaning: "Phenylketonuria (PKU) — deficiency of phenylalanine hydroxylase → accumulation of Phe → intellectual disability if untreated",
        clinicalAction: "Confirm with quantitative plasma amino acid analysis. Immediate dietary restriction of phenylalanine (low-Phe formula + natural protein restriction). Sapropterin (BH4) for BH4-responsive PKU (30% of patients). Goal Phe < 360 µmol/L during critical developmental period.",
      },
      {
        range: "Elevated TSH (> 25–40 mIU/L screen threshold, lab-dependent)",
        meaning: "Congenital hypothyroidism (CH) — most common congenital endocrine disorder (1:2,000–4,000); dysgenesis (ectopic/absent thyroid — most common), dyshormonogenesis, transient (maternal antibodies or iodine)",
        clinicalAction: "Confirm with serum TSH + free T4. If CH confirmed: levothyroxine immediately (within 2 weeks of birth). Goal: normalize T4 within 2 weeks, TSH within 4 weeks. Developmental outcomes are normal with prompt treatment.",
      },
      {
        range: "Elevated 17-hydroxyprogesterone (17-OHP)",
        meaning: "Congenital adrenal hyperplasia (CAH) — 21-hydroxylase deficiency (most common, 90%); classical salt-wasting form: life-threatening adrenal crisis at day 7–14 with hyponatremia, hyperkalemia, hypotension",
        clinicalAction: "Confirm with serum 17-OHP + electrolytes + ACTH stimulation test. Salt-wasting CAH: hydrocortisone + fludrocortisone + salt supplementation. Stress-dose steroids for illness/surgery.",
      },
      {
        range: "Positive sickle cell screen (hemoglobin electrophoresis — HbSS or HbSC pattern)",
        meaning: "Sickle cell disease — autosomal recessive; HbSS = most severe; HbSC = intermediate; HbS-beta thalassemia = variable",
        clinicalAction: "Confirm diagnosis. Start penicillin prophylaxis (amoxicillin 125 mg BID) by 2 months of age. Hydroxyurea by 9 months. Parental education on fever protocol (fever ≥ 38.5°C = ED visit for blood cultures + antibiotics — risk of overwhelming pneumococcal sepsis). TCD starting at age 2. Hematology follow-up.",
      },
      {
        range: "Elevated galactose or galactose-1-phosphate",
        meaning: "Classic galactosemia — GALT deficiency → galactose-1-phosphate accumulation → liver failure (jaundice, coagulopathy), sepsis (E. coli — galactosemia-associated neonatal E. coli sepsis), cataracts, intellectual disability",
        clinicalAction: "URGENT: switch to galactose-free formula (soy-based) immediately. Life-threatening if breastfed or given cow's milk formula. Even with treatment, intellectual disability and premature ovarian insufficiency common in females.",
      },
      {
        range: "Positive cystic fibrosis screen (elevated immunoreactive trypsinogen, IRT, + CFTR mutation analysis)",
        meaning: "Cystic fibrosis — CFTR chloride channel mutation → thick mucus → pulmonary, GI, reproductive complications",
        clinicalAction: "Confirm with sweat chloride test (> 60 mEq/L = positive). CF diagnosis → refer to CF Foundation-accredited care center. CFTR modulator therapy (elexacaftor/tezacaftor/ivacaftor — Trikafta) for eligible genotypes (≥ 2 years).",
      },
    ],
    clinicalPearl:
      "The newborn screen is a SCREENING test — a positive screen does NOT confirm diagnosis. It requires prompt confirmatory testing and clinical evaluation. Critically, a positive screen for CAH (elevated 17-OHP) or sickle cell disease requires action within 24–48 hours — salt-wasting CAH can kill a neonate by day 10 if untreated, and missing the diagnosis until the child is critically ill is a preventable tragedy. Screen turnaround time varies (typically 2–5 days) — preterm infants screened at 24–48 hours should be rescreened at 1 month because prematurity can cause false-positive or false-negative results for some conditions.",
    boardRecallTip: "NBS: PKU (Phe ↑ → low-Phe diet), congenital hypothyroidism (TSH ↑ → levothyroxine immediately), CAH (17-OHP ↑ → hydrocortisone + fludrocortisone), sickle cell (HbSS → penicillin by 2 months), galactosemia (galactose ↑ → soy formula STAT), CF (IRT + CFTR → sweat chloride).",
  },
];

export const pediatricsImaging: ImagingFinding[] = [
  {
    id: "peds-img-cxr-pneumonia",
    rotation: "pediatrics",
    modality: "Chest X-Ray (CXR)",
    findingName: "Pediatric Pneumonia Patterns",
    classicFindings: [
      "Lobar/segmental consolidation: alveolar infiltrates with air bronchograms — classic for bacterial pneumonia (Strep pneumoniae). Most common in right lower lobe.",
      "Interstitial pattern (bilateral, diffuse, perihilar): atypical (Mycoplasma pneumoniae — 'walking pneumonia') — classic 'worse than it looks clinically'; RSV; viral pneumonia",
      "Round pneumonia: well-circumscribed round opacity (looks like a mass) — unique to children < 8 years (incomplete segmentation allows bacteria to fill entire segment). Almost always S. pneumoniae.",
      "Perihilar adenopathy: TB (primary complex — Ghon focus + hilar LAD = Ranke complex), lymphoma, sarcoid",
      "Pleural effusion: parapneumonic effusion (most common complication of pneumonia — S. aureus and S. pneumoniae most common causes); empyema if complex",
      "Hyperinflation: bilateral, flattened diaphragms, increased AP diameter — viral bronchiolitis (RSV), asthma",
    ],
    keyDifferentials: [
      "Atelectasis vs consolidation: both are opaque; distinguish by volume effect (atelectasis = volume loss, shift of structures toward opacity; consolidation = volume preserved or increased, air bronchograms)",
      "Foreign body aspiration: asymmetric hyperinflation, mediastinal shift AWAY from affected side (air trapping on expiratory film) — get bilateral decubitus films or fluoroscopy",
      "Congenital pulmonary airway malformation (CPAM): cystic lesion in lung field; prenatally diagnosed on US; post-natal CXR confirms",
      "Mediastinal mass: widened superior mediastinum — lymphoma (anterior mediastinum — 'T4 mass'), thymus (thymic sail sign — normal in infants), aortic arch anomaly",
    ],
    clinicalCorrelation:
      "CXR is not required for outpatient diagnosis of pneumonia in children — diagnosis is clinical (fever + signs of lower respiratory tract infection). CXR is indicated for: hospitalized patients, severe or worsening illness, suspected complications (effusion, empyema, abscess), or recurrent pneumonia in same lobe (suspect anatomical abnormality or airway obstruction). In children < 5 years, the most common pathogen for community-acquired pneumonia is viral; for children > 5 years, Mycoplasma pneumoniae is common (atypical pattern on CXR). Lobar consolidation → suspect bacterial (Strep pneumo) → amoxicillin first-line.",
    boardRecallTip: "Round pneumonia in children = Strep pneumoniae. Atypical pattern (interstitial, bilateral) = Mycoplasma ('walking pneumonia') → azithromycin. CXR not required for outpatient CAP diagnosis in children. Effusion + pneumonia → parapneumonic effusion → thoracentesis if complex (pH < 7.2).",
  },
  {
    id: "peds-img-us-pyloric-stenosis",
    rotation: "pediatrics",
    modality: "Abdominal Ultrasound",
    findingName: "Hypertrophic Pyloric Stenosis",
    classicFindings: [
      "Pyloric muscle thickness ≥ 4 mm (normal < 2 mm)",
      "Pyloric channel length ≥ 17 mm (normal < 14 mm)",
      "'Cervix sign' or 'target sign' — hypertrophied pylorus in transverse view",
      "No passage of gastric contents through pylorus (dynamic real-time observation)",
      "Distended stomach with hyperperistaltic waves visible on real-time ultrasound",
    ],
    keyDifferentials: [
      "Gastroesophageal reflux (GER) — physiologic spitting, not projectile; weight gain adequate; pyloric US normal",
      "Pylorospasm — intermittent, not fixed; US may show transient narrowing without hypertrophy",
      "Malrotation with midgut volvulus — bilious vomiting (green) is a surgical emergency; upper GI series shows corkscrew duodenum; malrotation = no bilious vomiting → can be non-bilious, but bilious always raises concern for volvulus",
      "Hirschsprung disease (in neonates) — distal obstruction, failure to pass meconium, abdominal distension",
      "Duodenal atresia — bilious vomiting on day 1 of life; 'double bubble' on plain film; associated with Down syndrome",
    ],
    clinicalCorrelation:
      "Hypertrophic pyloric stenosis (HPS) typically presents at 3–6 weeks of age (range 2–8 weeks) with non-bilious, projectile vomiting (forceful, olive-pit-sized vomitus after feeding). Classic presentation: 'hungry vomiter' who feeds eagerly immediately after vomiting. Metabolic consequence: prolonged vomiting → hypochloremic, hypokalemic metabolic alkalosis (paradoxical aciduria due to urinary H⁺ excretion as kidneys preferentially retain K⁺). First-born males more commonly affected. Management: NOT a surgical emergency — MEDICAL EMERGENCY is the metabolic correction first (correct electrolytes and hydration) → then Ramstedt pyloromyotomy (laparoscopic preferred). Operate when electrolytes normalized.",
    boardRecallTip: "HPS: 3–6 weeks, first-born male, non-bilious projectile vomiting, olive-shaped mass palpable, 'hungry vomiter.' Metabolic: hypochloremic, hypokalemic metabolic alkalosis. US: pyloric thickness ≥ 4 mm, length ≥ 17 mm. Fix electrolytes BEFORE surgery (not a surgical emergency). Surgery: pyloromyotomy.",
  },
  {
    id: "peds-img-babygram",
    rotation: "pediatrics",
    modality: "Plain Radiographs (Babygram / Skeletal Survey)",
    findingName: "Child Physical Abuse — Non-accidental Trauma (NAT)",
    classicFindings: [
      "Classic metaphyseal lesions (corner fractures / bucket-handle fractures): shearing of immature metaphysis — highly specific for non-accidental trauma in infants",
      "Posterior rib fractures: from forceful squeezing of chest — high specificity for NAT in infants < 2 years (birth trauma rarely causes posterior rib fractures)",
      "Multiple fractures in different stages of healing (different ages): indicates repetitive trauma",
      "Fractures inconsistent with developmental stage: femur fracture in a non-ambulatory infant, spiral humerus fracture without explanation",
      "Subdural hematoma (SDH) without accidental explanation: particularly bilateral SDH, mixed-density SDH → abusive head trauma ('shaken baby syndrome')",
      "Retinal hemorrhages: bilateral, extensive, extending to periphery — highly associated with abusive head trauma (not from CPR or minor impact)",
    ],
    keyDifferentials: [
      "Osteogenesis imperfecta (OI): multiple fractures but blue sclerae, dentinogenesis imperfecta, family history, low bone density; genetic testing (COL1A1/COL1A2) for confirmation",
      "Rickets: metaphyseal fraying and cupping, osteopenia; check 25-OH vitamin D, phosphorus, alkaline phosphatase",
      "Normal birth trauma: clavicle fracture (most common birth fracture), linear skull fracture — resolve without treatment, not specific for NAT",
      "Copper deficiency (Menkes disease): metaphyseal changes similar to NAT; kinky hair, hypotonia, developmental regression",
    ],
    clinicalCorrelation:
      "When NAT is suspected, the evaluation includes: (1) Skeletal survey (whole-body plain radiographs — 21-view series per ACR standards — looking for occult fractures); repeat survey at 10–14 days (healing fractures become more visible); (2) CT head (subdural hematoma, parenchymal injury); (3) MRI brain (more sensitive for DAI, ischemia, posterior fossa injury); (4) Ophthalmology for dilated fundal exam (retinal hemorrhages); (5) Liver and pancreatic enzymes (AST, ALT, lipase — abdominal trauma); (6) Complete blood count, coagulation studies (rule out bleeding disorder). Mandatory reporting to Child Protective Services is REQUIRED in all US states.",
    boardRecallTip: "NAT red flags: posterior rib fractures, classic metaphyseal lesions, multiple fractures in different stages, bilateral SDH, retinal hemorrhages. Skeletal survey = 21-view series. CT/MRI head for intracranial injury. Ophthalmology consult. Mandatory CPS report. OI can mimic — check sclerae color, genetics.",
  },
];
