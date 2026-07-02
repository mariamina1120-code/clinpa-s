import type { Condition } from "@/types";

export const pediatricsConditions: Condition[] = [
  // ── PULMONARY ──────────────────────────────────────────────────────────────
  {
    id: "peds-asthma",
    name: "Pediatric Asthma",
    icdCode: "J45.909",
    rotation: "pediatrics",
    category: "Pulmonology",
    definition:
      "Asthma is the most common chronic disease of childhood, affecting 8–10% of children in the United States. It is characterized by reversible airflow obstruction, airway hyperreactivity, and chronic eosinophilic airway inflammation driven by Th2 immunity. Triggers include viral respiratory infections (most common trigger in children), allergens, exercise, cold air, and tobacco smoke. True asthma is distinguished from transient infant wheezing, which resolves by school age.",
    diagnosticCriteria:
      "NAEPP EPR-4: Clinical diagnosis in children < 5 (spirometry unreliable). Ages ≥ 5: spirometry showing FEV₁/FVC < lower limit of normal + ≥ 12% and ≥ 200 mL improvement in FEV₁ post-bronchodilator = reversible obstruction. Asthma Predictive Index (API): ≥ 3 wheezing episodes/year + 1 major criterion (parental asthma or atopic dermatitis) OR 2 minor criteria (eosinophilia ≥ 4%, allergic rhinitis, wheezing without URI) → high likelihood of persistent asthma. FeNO > 35 ppb supports eosinophilic inflammation. Step classification (GINA Steps 1–5) guides pharmacotherapy.",
    presentation: {
      chiefComplaint: [
        "Episodic wheezing",
        "Nighttime or early-morning cough",
        "Chest tightness",
        "Shortness of breath with exercise",
        "Recurrent respiratory infections that 'go to the chest'",
      ],
      associatedSymptoms: [
        "Expiratory wheezing with prolonged expiratory phase",
        "Use of accessory muscles (retractions, nasal flaring)",
        "Exercise-induced bronchospasm (cough/wheeze 5–10 min after exercise)",
        "Atopic comorbidities: allergic rhinitis, eczema (atopic triad)",
        "Symptoms triggered by cold air, smoke, URIs, allergens",
      ],
      demographics:
        "Most common chronic disease in childhood; prevalence 8–10% in the US. Higher prevalence in Black and Puerto Rican children. Onset before age 5 in most. Boys affected more than girls in childhood; gap narrows in adolescence. Strong association with atopy.",
    },
    distinguishingFeatures:
      "Asthma vs. COPD: younger age, fully reversible, atopic history, variable symptoms. Cough-variant asthma: chronic cough without wheeze (nocturnal/exercise-associated — often misdiagnosed as recurrent URIs or GERD). Transient infant wheeze: resolves by age 3, no atopy, no API. Vocal cord dysfunction: inspiratory stridor, normal spirometry between episodes. Foreign body: abrupt onset, unilateral wheeze, history of choking event.",
    redFlags: [
      "SpO₂ < 90% at rest (severe exacerbation — consider ICU)",
      "Silent chest on auscultation (near-complete obstruction — impending respiratory failure)",
      "Inability to speak in full sentences or audible wheeze from across the room",
      "PaCO₂ rising or normal during active exacerbation (CO₂ should be low in compensatory hyperventilation — normalization = fatigue)",
      "No response to three doses of albuterol in 20-minute intervals (status asthmaticus)",
    ],
    mnemonics: [
      {
        name: "Asthma Step Therapy (NAEPP)",
        content:
          "Step 1: SABA PRN → Step 2: Low-dose ICS (most important controller) → Step 3: Low ICS + LABA or medium ICS → Step 4: Medium ICS + LABA → Step 5: High ICS + LABA ± omalizumab or dupilumab → Step 6: Add oral steroids (minimize). ICS = cornerstone.",
      },
      {
        name: "Status Asthmaticus treatment: SOIM",
        content:
          "S – Supplemental O₂ (target SpO₂ ≥ 94%); O – albuterol (SABA) nebulized q20 min × 3; I – Ipratropium (add in ED for severe); M – Methylprednisolone IV (or prednisolone PO for moderate). Add magnesium sulfate 25–75 mg/kg IV (max 2g) for refractory severe.",
      },
    ],
    pimpingQuestions: [
      "How does the Asthma Predictive Index help predict persistent asthma in children under 5?",
      "What spirometric criteria confirm reversible airflow obstruction in school-age children?",
      "Why is albuterol (SABA) ineffective in bronchiolitis but effective in asthma?",
      "At what step do you add a LABA, and why is LABA monotherapy dangerous in asthma?",
      "What is FeNO and which patients with asthma are most likely to benefit from ICS based on FeNO measurement?",
    ],
  },
  {
    id: "peds-croup",
    name: "Croup (Laryngotracheobronchitis)",
    icdCode: "J05.0",
    rotation: "pediatrics",
    category: "Pulmonology",
    definition:
      "Croup (laryngotracheobronchitis) is a viral upper respiratory infection causing subglottic mucosal edema, resulting in the characteristic 'barky' (seal-like) cough, inspiratory stridor, and hoarse voice. It is the most common cause of acute upper airway obstruction in children. Parainfluenza virus type 1 causes the majority (75%) of cases. Peak age is 6 months to 3 years, with the classic seasonal fall–winter pattern. The subglottis is the narrowest part of the pediatric airway, making even mild edema clinically significant.",
    diagnosticCriteria:
      "Clinical diagnosis: characteristic barky cough + inspiratory stridor + hoarse voice in a child 6 months–3 years after a 1–3 day URI prodrome. Westley Croup Score (0–17): level of consciousness (0–5), cyanosis (0–4), stridor (0–2), air entry (0–2), retractions (0–3) — mild ≤ 2, moderate 3–7, severe ≥ 8. AP neck X-ray (if diagnosis uncertain): 'steeple sign' (subglottic pencil-tip or church-steeple narrowing of trachea) — present in 50%; absence does NOT exclude croup. Lateral neck X-ray: distinguishes from epiglottitis ('thumb sign' = swollen epiglottis).",
    presentation: {
      chiefComplaint: [
        "Barky/brassy cough (seal bark — characteristic)",
        "Stridor (inspiratory, worse with crying/agitation)",
        "Hoarse voice",
        "Woke child from sleep with respiratory distress",
        "Symptoms worsen at night",
      ],
      associatedSymptoms: [
        "1–3 day URI prodrome (rhinorrhea, low-grade fever)",
        "Low to moderate fever (37.5–38.5°C)",
        "Agitation worsens stridor (turbulent flow increases with crying)",
        "Stridor at rest = moderate–severe disease",
        "Retractions (suprasternal, subcostal) with increasing severity",
      ],
      demographics:
        "Most common in 6 months to 3 years (peak 18 months – 2 years). Boys slightly more affected. Seasonal clustering in fall/winter paralleling parainfluenza outbreaks. Spasmodic croup (recurrent, afebrile) may have allergic component.",
    },
    distinguishingFeatures:
      "Croup vs. epiglottitis: croup = barky cough, gradual onset over days, mild–moderate fever; epiglottitis = NO barky cough, toxic-appearing, drooling, tripod posturing, muffled 'hot potato' voice, rapid progression over hours — do NOT agitate, do NOT examine oropharynx, emergent OR airway. Bacterial tracheitis (Staph aureus): toxic appearance, high fever, purulent secretions, barky cough — does NOT respond to steroids or racemic epinephrine. Foreign body: abrupt onset, unilateral findings, history of choking.",
    redFlags: [
      "Stridor at rest (moderate–severe croup — hospitalize)",
      "Toxic appearance, drooling, tripod posturing — epiglottitis until proven otherwise (emergency OR)",
      "SpO₂ < 92% or cyanosis (impending respiratory failure)",
      "Failure to respond to racemic epinephrine within 30 minutes",
      "Westley score ≥ 8 (severe — intensive monitoring, possible intubation with one ETT size smaller than usual)",
    ],
    mnemonics: [
      {
        name: "Croup Treatment: DR. Race",
        content:
          "D – Dexamethasone 0.6 mg/kg PO/IM (single dose, all severities — reduces hospitalization by 75%); R – Racemic epinephrine nebulized (moderate–severe: observe 2–4 hours post-dose for rebound stridor); a – Agitation avoidance (crying worsens obstruction — keep child calm on parent's lap); ce – Consider heliox for refractory severe.",
      },
    ],
    pimpingQuestions: [
      "What is the 'steeple sign' and in what percentage of croup cases is it present?",
      "Why is it dangerous to agitate a child with suspected epiglottitis?",
      "After giving racemic epinephrine for croup, how long must you observe the patient before discharge and why?",
      "What organism causes bacterial tracheitis, and how does it differ clinically from viral croup?",
      "What ETT size adjustment do you make when intubating a child with croup and why?",
    ],
  },
  {
    id: "peds-bronchiolitis",
    name: "Bronchiolitis (RSV)",
    icdCode: "J21.0",
    rotation: "pediatrics",
    category: "Pulmonology",
    definition:
      "Bronchiolitis is an acute lower respiratory infection causing inflammation and obstruction of the small airways (bronchioles), most commonly caused by respiratory syncytial virus (RSV, 75–80% of cases). It is the most common cause of hospitalization in infants under 12 months. The pathophysiology involves viral invasion of bronchiolar epithelium causing necrosis, mucus plugging, and peribronchiolar inflammation — leading to air trapping, V/Q mismatch, and hypoxemia. Treatment is purely supportive; no pharmacological therapy has demonstrated consistent benefit.",
    diagnosticCriteria:
      "Clinical diagnosis in children < 2 years: viral URI prodrome (1–3 days) followed by wheeze, tachypnea, and respiratory distress. Hospitalization criteria: SpO₂ < 90%, RR > 60–70/min, apnea, poor feeding, age < 3 months, prematurity, or significant cardiopulmonary comorbidity. Chest X-ray (not routine): hyperinflation, bilateral patchy atelectasis, peribronchial thickening. RSV antigen or multiplex PCR: used for cohorting/isolation, not for treatment decisions. Not effective: albuterol, corticosteroids, antibiotics, hypertonic saline nebulization (AAP 2014 guideline).",
    presentation: {
      chiefComplaint: [
        "Worsening cough for 2–3 days",
        "Fast or noisy breathing",
        "Won't eat/won't take bottle",
        "Wheezing (first episode in infant)",
        "Stopped breathing briefly (apnea — especially in infants < 2 months)",
      ],
      associatedSymptoms: [
        "Tachypnea (most sensitive sign — RR > 60/min in infants)",
        "Diffuse expiratory wheezing and crackles on auscultation",
        "Subcostal/intercostal retractions, nasal flaring",
        "Prolonged expiratory phase and barrel chest (air trapping)",
        "Low-grade fever (38–39°C)",
        "Apnea (especially in premature infants < 44 weeks post-conceptional age and infants < 2 months)",
      ],
      demographics:
        "RSV infects virtually all children by age 2. Hospitalization peak age: 2–6 months. Seasonal: October–March (November peak). Highest-risk groups for severe disease: premature infants ≤ 29 weeks, congenital heart disease, bronchopulmonary dysplasia.",
    },
    distinguishingFeatures:
      "Bronchiolitis vs. asthma: bronchiolitis = first episode in infant, viral URI trigger, no atopic history, albuterol does NOT help; asthma = recurrent episodes, atopy, reversible with bronchodilators. Bronchiolitis vs. pneumonia: bronchiolitis = diffuse bilateral findings, hyperinflation; bacterial pneumonia = focal consolidation, higher fever, lobar opacity. Bronchiolitis vs. cardiac failure: look for murmur, hepatomegaly, failure to thrive suggesting structural heart disease.",
    redFlags: [
      "SpO₂ < 90% at rest (hospitalization threshold)",
      "Apnea in infants (especially premature or < 2 months — may be presenting sign of RSV bronchiolitis without obvious wheeze)",
      "Respiratory rate > 70/min with significant retractions (impending respiratory failure — consider HFNC or ICU)",
      "Poor feeding leading to dehydration (tachypnea > 60/min makes oral feeding unsafe)",
      "Age < 3 months or prematurity ≤ 29 weeks (highest risk for respiratory failure)",
    ],
    mnemonics: [
      {
        name: "RSV Bronchiolitis — What DOESN'T Work (4 Nos)",
        content:
          "No albuterol (not bronchospasm — mucus plugging), No steroids (no proven benefit), No antibiotics (viral — no bacterial superinfection routinely), No hypertonic saline routinely. What DOES work: Nasal suctioning + O₂ support + IV/NG feeds if needed + HFNC for moderate–severe.",
      },
      {
        name: "RSV Prevention: PNM",
        content:
          "P – Palivizumab (monthly IM) for high-risk infants (prematurity ≤ 29 wks, CHD, CLD); N – Nirsevimab (Beyfortus, FDA 2023 — single dose for all infants born during RSV season, replacing palivizumab for most); M – Maternal RSV vaccine (Abrysvo, FDA 2023 — given 32–36 weeks gestation, passive immunity to newborn).",
      },
    ],
    pimpingQuestions: [
      "Why doesn't albuterol work in bronchiolitis the way it does in asthma?",
      "What is the difference between palivizumab and nirsevimab for RSV prevention?",
      "Which infants are at highest risk for apnea as a presenting sign of RSV bronchiolitis?",
      "What are the SpO₂ threshold and feeding-rate threshold for hospitalizing an infant with bronchiolitis?",
      "What is high-flow nasal cannula (HFNC) and how does it help in bronchiolitis?",
    ],
  },

  // ── EENT / INFECTIOUS DISEASE ─────────────────────────────────────────────
  {
    id: "peds-aom",
    name: "Acute Otitis Media",
    icdCode: "H66.90",
    rotation: "pediatrics",
    category: "EENT",
    definition:
      "Acute otitis media (AOM) is bacterial or viral infection of the middle ear space, most commonly occurring after eustachian tube dysfunction from an upper respiratory infection. It is the most common reason for antibiotic prescriptions in pediatrics. Most common pathogens: Streptococcus pneumoniae (most severe, highest treatment failure), non-typeable Haemophilus influenzae (NTHi — most common since PCV13 vaccine), and Moraxella catarrhalis. Peak age is 6–18 months. The short, horizontal, floppy eustachian tube in young children predisposes to reflux of nasopharyngeal secretions.",
    diagnosticCriteria:
      "AAP 2013 requires all three: (1) Acute onset of middle ear inflammation symptoms; (2) Middle ear effusion (MEE) — decreased/absent light reflex, air-fluid level, opaque TM; (3) Signs of middle ear inflammation: moderate-to-severe bulging of TM, OR new-onset otorrhea not from external otitis, OR mild bulging + acute ear pain or erythema of TM. Tympanometry: Type B (flat) curve = MEE. Distinguished from OME (otitis media with effusion): OME has no acute inflammatory signs (no bulging, no fever) — TM dull and immobile, not erythematous. Culture via tympanocentesis reserved for treatment failure or immunocompromised.",
    presentation: {
      chiefComplaint: [
        "Ear pain (otalgia) — older children",
        "Ear pulling/tugging (infants — nonspecific)",
        "Fever",
        "Irritability and sleep disturbance",
        "Hearing difficulty",
      ],
      associatedSymptoms: [
        "Recent URI (1–7 days prior in most cases)",
        "Acute onset: symptoms develop within 48 hours",
        "Decreased hearing (conductive — from effusion)",
        "Otorrhea if tympanic membrane has perforated (pain often improves after perforation)",
        "Vomiting in young infants",
      ],
      demographics:
        "Most common bacterial infection in children. Peak age 6–18 months; by age 3, 75% of children have had ≥ 1 episode. Risk factors: daycare attendance, pacifier use, bottle-feeding (supine position), secondhand smoke, male sex, Native American/Alaska Native heritage, cleft palate.",
    },
    distinguishingFeatures:
      "AOM vs. OME: AOM has acute onset with bulging/erythematous TM and systemic signs; OME (serous otitis) has effusion without acute infection — TM dull and immobile, no fever, no otalgia — watchful waiting appropriate. AOM vs. otitis externa: otitis externa has tragal tenderness, canal erythema/edema, no TM abnormality, often associated with water exposure. Mastoiditis: postauricular erythema/swelling + protrusion of auricle = suppurative complication requiring IV antibiotics ± surgery.",
    redFlags: [
      "Postauricular erythema, swelling, tenderness, or ear protrusion (acute mastoiditis — CT mastoids + IV antibiotics + ENT)",
      "Facial nerve palsy (VII nerve involvement — urgent ENT referral)",
      "High fever > 39.5°C in toxic-appearing child (bacteremia — blood cultures)",
      "Recurrent AOM: ≥ 3 episodes in 6 months or ≥ 4 in 12 months → ENT referral for PE tube consideration",
      "Hearing loss persisting > 3 months with OME in both ears (bilateral OME → language delay risk → consider PE tubes)",
    ],
    mnemonics: [
      {
        name: "AOM pathogens: SHM",
        content:
          "S – Streptococcus pneumoniae (most severe, penicillin resistance common → high-dose amoxicillin); H – H. influenzae non-typeable (most common since PCV13 — beta-lactamase producer → amoxicillin-clavulanate for failure); M – Moraxella catarrhalis (almost all beta-lactamase positive, but usually self-limited).",
      },
      {
        name: "AOM treatment decision: LABS",
        content:
          "L – Less than 6 months: always treat; A – Age 6–23 months: bilateral AOM or severe symptoms → treat; B – Bilateral AOM in any age with otorrhea or severe symptoms → treat; S – Severity: mild unilateral AOM ≥ 2 years → observation option (safety-net prescription given).",
      },
    ],
    pimpingQuestions: [
      "What is the AAP diagnostic criteria for AOM and how does it differ from OME?",
      "Why do we use high-dose amoxicillin (80–90 mg/kg/day) instead of standard dosing for AOM?",
      "What antibiotic do you use when amoxicillin fails at 48–72 hours and why?",
      "In what age groups is watchful waiting (observation without antibiotics) acceptable for AOM?",
      "What are the indications for tympanostomy tube placement?",
    ],
  },

  // ── INFECTIOUS DISEASE ────────────────────────────────────────────────────
  {
    id: "peds-meningitis",
    name: "Bacterial Meningitis",
    icdCode: "G00.9",
    rotation: "pediatrics",
    category: "Infectious Disease",
    definition:
      "Bacterial meningitis is acute, life-threatening infection of the meninges (pia mater, arachnoid) and CSF. Despite vaccines and antibiotics, it carries significant morbidity (sensorineural hearing loss in 10–30%, neurologic deficits, hydrocephalus) and mortality. Causative organisms vary with age: neonates (Group B Streptococcus, E. coli, Listeria); infants and toddlers (S. pneumoniae, N. meningitidis); school-age/adolescents (N. meningitidis — associated with college dormitories). Empiric antibiotics must NOT be delayed — every 30 minutes of delay worsens outcomes.",
    diagnosticCriteria:
      "Lumbar puncture (LP) — essential, but do NOT delay antibiotics for LP if CT required or clinical concern is high. CSF interpretation: Bacterial = WBC 1,000–10,000/µL (PMN predominant), glucose < 40 mg/dL or CSF:serum glucose < 0.4, protein > 100 mg/dL, turbid appearance, opening pressure elevated. Viral = WBC 100–500 (lymphocytes), normal glucose, protein mildly elevated, clear. CT head before LP required if: papilledema, focal neurologic deficit, immunocompromised, altered mental status, or recent seizure. Blood cultures before antibiotics (draw in seconds — do NOT delay antibiotics for cultures). Kernig's sign: restricted knee extension with hip flexed. Brudzinski's sign: involuntary hip/knee flexion with neck flexion. Both unreliable in infants < 18 months.",
    presentation: {
      chiefComplaint: [
        "Fever + severe headache + neck stiffness (classic triad in older children)",
        "Fever + irritability + bulging fontanelle (infants)",
        "Non-blanching petechial/purpuric rash (meningococcemia — emergency)",
        "Altered mental status, lethargy, confusion",
        "Stiff neck or pain with neck movement",
      ],
      associatedSymptoms: [
        "Photophobia, phonophobia (older children)",
        "Paradoxical irritability in infants (cries MORE when held — meningeal irritation with movement)",
        "High-pitched cry in neonates/young infants",
        "Bulging anterior fontanelle in infants < 18 months",
        "Nausea and vomiting (elevated ICP)",
        "Seizures in 25% of cases",
      ],
      demographics:
        "Bimodal incidence: neonates (< 1 month) and adolescents 15–24 years. S. pneumoniae = most common in children > 2 months. N. meningitidis = most common in adolescents (college dormitory risk). Significant risk reduction from Hib, PCV13, and meningococcal vaccines. Mortality: S. pneumoniae 5–10%; N. meningitidis 3–5%.",
    },
    distinguishingFeatures:
      "Bacterial vs. viral (aseptic) meningitis: bacterial = PMN pleocytosis, low glucose, high protein, toxic appearance, abrupt onset; viral = lymphocytic pleocytosis, normal glucose, normal/mildly elevated protein, less toxic. N. meningitidis: petechial/purpuric rash (nonblanching) is pathognomonic — bacteremia with DIC. S. pneumoniae: highest CNS sequelae, highest dexamethasone benefit. Lyme meningitis: lymphocytic pleocytosis + facial nerve palsy + rash (erythema migrans) + Northeastern US exposure.",
    redFlags: [
      "Non-blanching petechial/purpuric rash + fever = meningococcemia — give ceftriaxone IV IMMEDIATELY before any further workup",
      "Bulging fontanelle in a febrile infant (LP without delay, but give antibiotics first if clinically deteriorating)",
      "Waterhouse-Friderichsen syndrome: bilateral adrenal hemorrhage from N. meningitidis — shock + purpura → high mortality",
      "Signs of herniation: Cushing's triad (hypertension + bradycardia + respiratory changes) — defer LP, give mannitol/hypertonic saline",
    ],
    mnemonics: [
      {
        name: "Empiric antibiotics by age: ACHA",
        content:
          "Age < 1 month: Ampicillin + gentamicin (or cefotaxime) — covers GBS, E. coli, Listeria; Age 1–3 months: Ampicillin + cefotaxime (transitional coverage); Age > 3 months to adolescent: Ceftriaxone + vancomycin — covers Strep pneumo (including PRSP) + N. meningitidis. Dexamethasone 0.15 mg/kg IV q6h × 4 days BEFORE first antibiotic dose.",
      },
    ],
    pimpingQuestions: [
      "What is the most common long-term sequela of bacterial meningitis in children?",
      "Why is dexamethasone given before or with the first antibiotic dose, and for which organism is it most beneficial?",
      "What CSF findings distinguish bacterial meningitis from viral (aseptic) meningitis?",
      "What is the antibiotic of choice for N. meningitidis chemoprophylaxis in close contacts?",
      "Why must you CT the head before LP in some patients, and which specific clinical findings require it?",
    ],
  },
  {
    id: "peds-strep-pharyngitis",
    name: "Group A Streptococcal Pharyngitis",
    icdCode: "J02.0",
    rotation: "pediatrics",
    category: "Infectious Disease",
    definition:
      "Group A Streptococcus (GAS, Streptococcus pyogenes) pharyngitis is a bacterial infection of the oropharynx accounting for 15–30% of sore throats in children ages 5–15. It is the most common cause of bacterial pharyngitis requiring antibiotic treatment. The primary reason to treat is prevention of acute rheumatic fever (ARF), a non-suppurative complication causing permanent valvular heart disease. GAS is transmitted via respiratory droplets and direct contact, with an incubation period of 2–5 days.",
    diagnosticCriteria:
      "Centor/McIsaac criteria (1 point each): tonsillar exudates, tender anterior cervical lymphadenopathy, absence of cough, fever > 38°C, age 3–14 (subtract 1 point if ≥ 45 years). Score 0–1: no testing, no antibiotics; 2–3: rapid antigen detection test (RADT) or throat culture; 4–5: treat empirically OR confirm with RADT. RADT sensitivity 70–90%, specificity > 95%. Throat culture: gold standard, 24–48 hours. Negative RADT in a child requires backup throat culture (higher false-negative rate in children). Monospot test if EBV suspected (splenomegaly, atypical lymphocytes, diffuse lymphadenopathy).",
    presentation: {
      chiefComplaint: [
        "Sore throat (sudden onset)",
        "Fever",
        "Painful swallowing",
        "No cough (absence of cough is highly suggestive)",
        "Headache and abdominal pain (especially in children)",
      ],
      associatedSymptoms: [
        "Tonsillar exudate (white/yellow patches on tonsils)",
        "Tender, swollen anterior cervical lymph nodes",
        "Palatal petechiae (pathognomonic clue)",
        "Strawberry tongue and sandpaper-texture rash (scarlet fever variant — GAS exotoxin)",
        "Absence of cough, rhinorrhea, hoarseness (distinguishes bacterial from viral)",
      ],
      demographics:
        "Most common in children ages 5–15 years. Uncommon in children < 3 (GAS pharyngitis rare, more common URI syndrome). Peaks in winter-spring. School outbreaks common. Family members frequently affected.",
    },
    distinguishingFeatures:
      "GAS vs. viral pharyngitis: viral = cough, rhinorrhea, hoarseness, conjunctivitis present (URTI symptoms); GAS = abrupt onset, no cough, exudate, cervical LAD. EBV (mononucleosis): pharyngitis + diffuse LAD + splenomegaly + atypical lymphocytes + positive monospot — avoid amoxicillin (morbilliform rash in 80–90% of EBV patients given amoxicillin). GAS + palatal petechiae = virtually diagnostic. Peritonsillar abscess (GAS complication): unilateral tonsillar swelling, uvular deviation, 'hot potato' muffled voice, trismus — drainage required.",
    redFlags: [
      "Uvular deviation + unilateral tonsillar swelling + trismus = peritonsillar abscess (ENT emergency — needle aspiration or I&D)",
      "Stridor or drooling (retropharyngeal abscess or epiglottitis — airway emergency)",
      "Prior history of ARF — MUST treat and use IM benzathine penicillin for adherence guarantee",
      "Untreated or inadequately treated GAS → acute rheumatic fever 2–4 weeks later (Aschoff bodies — carditis, Sydenham's chorea, migratory arthritis)",
      "Toxic shock syndrome: high fever + hypotension + diffuse rash + multi-organ failure (GAS exotoxin)",
    ],
    mnemonics: [
      {
        name: "ARF major criteria: JONES",
        content:
          "J – Joint pain (migratory polyarthritis — most common); O – ❤ (heart — carditis, mitral regurgitation); N – Nodules (subcutaneous, Aschoff nodules); E – Erythema marginatum (evanescent rash with pale center); S – Sydenham's chorea ('St. Vitus dance' — involuntary movements). 2 major OR 1 major + 2 minor criteria for ARF.",
      },
    ],
    pimpingQuestions: [
      "What is the primary reason we treat GAS pharyngitis with antibiotics?",
      "What is the first-line antibiotic for GAS pharyngitis, and why is amoxicillin commonly preferred over penicillin V in children?",
      "Why should you NOT give amoxicillin to a patient with pharyngitis before ruling out EBV?",
      "What are the Jones criteria for diagnosing acute rheumatic fever?",
      "How long after GAS pharyngitis does acute rheumatic fever typically appear?",
    ],
  },

  // ── CARDIOVASCULAR ────────────────────────────────────────────────────────
  {
    id: "peds-kawasaki",
    name: "Kawasaki Disease",
    icdCode: "M30.3",
    rotation: "pediatrics",
    category: "Cardiology",
    definition:
      "Kawasaki disease (KD) is an acute, self-limited vasculitis of medium-sized vessels primarily affecting children under 5 years. It is the leading cause of acquired heart disease in children in developed countries. The etiology is unknown (probable infectious trigger in genetically susceptible host). The most feared complication is coronary artery aneurysm (CAA), occurring in 15–25% of untreated children but reduced to 3–5% with timely IVIG + aspirin therapy.",
    diagnosticCriteria:
      "Classic KD (Complete): fever ≥ 5 days + ≥ 4 of 5 principal criteria (CRASH-MC): Conjunctivitis (bilateral, non-purulent, limbic sparing), Rash (polymorphous, non-vesicular), Adenopathy (cervical ≥ 1.5 cm, unilateral), Strawberry tongue + lip changes (cracking/fissuring), Hand/foot changes (erythema/induration acutely → desquamation at fingertips in weeks 2–3 — convalescent phase). Incomplete KD: fever ≥ 5 days + 2–3 criteria — TREAT if supported by labs/echo (especially infants < 6 months who have highest CAA risk with atypical presentation). Echo: CAA defined as z-score ≥ 2.5; giant aneurysm ≥ 8 mm or z-score ≥ 10. Lab support: ESR/CRP elevated, leukocytosis, normocytic anemia, thrombocytosis in second week (classic), elevated transaminases, sterile pyuria, low albumin.",
    presentation: {
      chiefComplaint: [
        "Fever for more than 5 days not responding to antipyretics",
        "Rash with fever",
        "Red eyes (bilateral) — no discharge",
        "Irritability, redness of lips and tongue",
        "Swollen hands and feet",
      ],
      associatedSymptoms: [
        "High spiking fever (often > 39.5°C), unresponsive to ibuprofen/acetaminophen",
        "Strawberry tongue and cracked, erythematous lips",
        "Polymorphous rash (maculopapular to erythema multiforme-like) — truncal, non-vesicular",
        "Bilateral conjunctival injection without pus (limbic sparing = preserved clear ring at limbus)",
        "Periungual desquamation appearing 2–3 weeks after fever onset (convalescent pathognomonic clue)",
        "Hydrops of gallbladder (acalculous cholecystitis — resolves with KD treatment)",
      ],
      demographics:
        "Annual US incidence 9–20 per 100,000 children < 5 years. Peak age: 6 months – 5 years. Male predominance (1.5:1). Higher incidence in Japanese and Korean children (200–300/100,000). Rare after age 8.",
    },
    distinguishingFeatures:
      "KD is the 'great imitator' of childhood — mimics viral exanthems (measles, rubella), sepsis, drug reactions, toxic shock syndrome, juvenile idiopathic arthritis, and SARS-CoV-2 (MIS-C). Key distinguishing clues: prolonged fever unresponsive to antibiotics + combination of conjunctivitis + lip/tongue changes + rash + lymphadenopathy. MIS-C (Multisystem Inflammatory Syndrome in Children, COVID-associated): older age, marked GI symptoms, greater hemodynamic compromise, positive SARS-CoV-2 serology — treated similarly to Kawasaki.",
    redFlags: [
      "Infant < 6 months with unexplained prolonged fever + elevated ESR/CRP + thrombocytosis → echo even if classic criteria not met (highest CAA risk)",
      "Giant coronary aneurysm (z-score ≥ 10 or ≥ 8 mm): requires anticoagulation + lifelong cardiology follow-up (MI risk in childhood)",
      "IVIG resistance (fever persists > 36 hours after IVIG): second IVIG dose or infliximab (anti-TNF-α) — highest aneurysm risk in this group",
      "No live vaccines (MMR, varicella) for 11 months after IVIG (IVIG antibodies impair vaccine immunogenicity)",
    ],
    mnemonics: [
      {
        name: "KD principal criteria: CRASH-MC",
        content:
          "C – Conjunctivitis (bilateral, non-purulent, limbic sparing); R – Rash (polymorphous, truncal); A – Adenopathy (cervical ≥ 1.5 cm, unilateral); S – Strawberry tongue + lips cracked/fissured; H – Hands/feet (erythema, induration → desquamation weeks 2–3). Fever ≥ 5 days + ≥ 4 of 5 = classic KD.",
      },
    ],
    pimpingQuestions: [
      "What is the most feared complication of Kawasaki disease and what percentage of untreated children develop it?",
      "What is the treatment for Kawasaki disease, and what is the window for IVIG to prevent coronary aneurysms?",
      "How does incomplete Kawasaki disease differ from complete, and why must you treat it?",
      "What is the clinical significance of periungual desquamation in Kawasaki disease?",
      "What is MIS-C and how does it differ from Kawasaki disease?",
    ],
  },
  {
    id: "peds-vsd",
    name: "Ventricular Septal Defect (Congenital Heart Disease)",
    icdCode: "Q21.0",
    rotation: "pediatrics",
    category: "Cardiology",
    definition:
      "Ventricular septal defect (VSD) is the most common congenital heart defect (30–35% of all CHD), consisting of a defect in the interventricular septum allowing blood flow between ventricles. Small VSDs (< 3 mm) often close spontaneously by age 2–3. Large VSDs cause left-to-right shunting → pulmonary overcirculation → pulmonary hypertension → if untreated, eventual Eisenmenger syndrome (right-to-left shunt reversal → cyanosis). VSD is the prototypical left-to-right shunt lesion for board testing.",
    diagnosticCriteria:
      "Cardiac auscultation: harsh holosystolic (pansystolic) murmur at LLSB (left lower sternal border), grade III–IV/VI, no radiation to axilla (differentiates from MR). Echocardiography (gold standard): confirms defect location (perimembranous 70%, muscular 20–25%, outlet 5–10%, inlet 5%), size, shunt direction, ventricular function, pulmonary pressure. EKG: small VSD = normal; large VSD = biventricular hypertrophy (left ventricular volume overload + right ventricular pressure overload). CXR: cardiomegaly + increased pulmonary vascular markings (left-to-right shunt). Cardiac catheterization: gold standard for pulmonary vascular resistance calculation (Qp:Qs ratio).",
    presentation: {
      chiefComplaint: [
        "Murmur detected on newborn exam or well-child visit",
        "Poor feeding, fatigue with feeds (large VSD — feeding = exercise for infant)",
        "Failure to thrive (large unrepaired VSD — high caloric expenditure)",
        "Tachypnea and respiratory distress (pulmonary overcirculation)",
        "Cyanosis appearing in older child with uncorrected large VSD (Eisenmenger)",
      ],
      associatedSymptoms: [
        "Harsh holosystolic murmur LLSB (louder = smaller defect — high velocity through small hole)",
        "Diaphoresis with feeding (sympathetic activation from high cardiac output demand)",
        "Recurrent respiratory infections (pulmonary overcirculation predisposes to pneumonia)",
        "Hepatomegaly (right heart failure in large, late-stage VSDs)",
      ],
      demographics:
        "Most common CHD: 30–35% of congenital heart defects. Incidence 2–3 per 1,000 live births. No strong sex predilection for isolated VSD. Small restrictive VSDs often close spontaneously by age 2–3 (50–75% of muscular VSDs). Associated with Down syndrome (AV canal more common), Turner syndrome, other chromosomal anomalies.",
    },
    distinguishingFeatures:
      "Left-to-right shunts (VSD, ASD, PDA) = acyanotic heart disease; blood recirculates through lungs. Right-to-left shunts (Tetralogy of Fallot, transposition) = cyanotic heart disease. VSD murmur: holosystolic, harsh, LLSB — louder murmur paradoxically indicates SMALLER defect (restrictive VSD creates high-velocity turbulent flow). Eisenmenger syndrome: reversal of shunt from sustained pulmonary hypertension → cyanosis, polycythemia, clubbing — contraindication to surgical repair (fixed pulmonary HTN).",
    redFlags: [
      "Failure to thrive + tachypnea + diaphoresis with feeds (large VSD causing heart failure — referral to pediatric cardiology + diuretics + early surgical repair)",
      "Eisenmenger syndrome development (cyanosis in previously acyanotic VSD patient) — surgical repair contraindicated; pulmonary vasodilators may be used",
      "Endocarditis prophylaxis required for unrepaired defects with high-velocity flow and for 6 months after repair or for life if residual defect",
    ],
    mnemonics: [
      {
        name: "Left-to-right shunts: AVP (3 A's wait)",
        content:
          "VSD = Ventricular (most common); ASD = Atrial (fixed split S2, soft systolic murmur); PDA = Patent Ductus Arteriosus (continuous 'machinery' murmur, bounding pulses). All three shunt blood left→right initially. If untreated → Eisenmenger = Reversal → Cyanosis.",
      },
    ],
    pimpingQuestions: [
      "Why does a louder VSD murmur sometimes indicate a smaller defect?",
      "What is Eisenmenger syndrome, and why is surgical repair contraindicated once it develops?",
      "What CXR and EKG findings do you expect in a large unrepaired VSD?",
      "Which chromosomal abnormality is most strongly associated with AV canal defects (not VSDs specifically)?",
      "At what age do most small muscular VSDs spontaneously close?",
    ],
  },

  // ── GASTROINTESTINAL ─────────────────────────────────────────────────────
  {
    id: "peds-intussusception",
    name: "Intussusception",
    icdCode: "K56.1",
    rotation: "pediatrics",
    category: "Gastroenterology",
    definition:
      "Intussusception is the telescoping of a proximal bowel segment (intussusceptum) into the adjacent distal segment (intussuscipiens), causing bowel obstruction and ischemia. It is the most common cause of intestinal obstruction in children between 6 months and 3 years. In 95% of pediatric cases, no pathological lead point is found (idiopathic — likely post-viral lymphoid hypertrophy of Peyer's patches). Ileocolic intussusception (terminal ileum into ascending colon) is the most common type.",
    diagnosticCriteria:
      "Abdominal ultrasound (preferred, no radiation, 98% sensitivity/specificity): 'target sign' or 'bull's-eye' on transverse view — concentric hypoechoic and echogenic rings; 'pseudokidney' sign on longitudinal view. Air enema (pneumatic) under fluoroscopy: both diagnostic AND therapeutic (80–90% success). Contraindications to enema reduction: peritonitis, perforation, hemodynamic instability, frank peritonitis. Plain AXR: paucity of gas in RLQ; crescent sign (intussusception mass). CT: rarely needed; reserved for suspected lead point (> 2 years), atypical presentation, or failed enema planning.",
    presentation: {
      chiefComplaint: [
        "Sudden episodic colicky abdominal pain (child draws knees to chest, cries inconsolably for 15–20 minutes then resolves — classic pattern)",
        "Vomiting",
        "Lethargy between crying episodes (may be misdiagnosed as altered mental status)",
        "Bloody mucous stool ('currant-jelly stool' — late, ischemic finding)",
      ],
      associatedSymptoms: [
        "Classic triad present in only 20–40%: colicky abdominal pain + vomiting + currant-jelly stool (late sign = ischemia)",
        "Child appears well between pain episodes (classic intermittent pattern)",
        "Lethargy or pallor during or between episodes (vagal response to pain)",
        "Palpable sausage-shaped RUQ mass (infrequent but classic finding)",
        "Dance's sign: empty RLQ on palpation (bowel pulled proximally)",
      ],
      demographics:
        "Incidence 1–4 per 1,000 live births. Peak age 6–36 months (85% under 2 years). Slight male predominance. Risk factors: recent adenovirus or rotavirus infection (Peyer's patch hypertrophy). Rotavirus vaccine has a small associated risk of 1–2 per 100,000 doses.",
    },
    distinguishingFeatures:
      "The currant-jelly stool is a LATE, ominous finding — represents ischemic sloughing of intestinal mucosa (blood + mucus). Do NOT wait for it to act. A lethargic infant with periodic inconsolable crying should be considered intussusception until proven otherwise — the lethargy itself can mislead clinicians to evaluate for neurologic causes. Lead points (polyps, Meckel's diverticulum, lymphoma) become more common in children > 2 years and adults — surgical management preferred.",
    redFlags: [
      "Peritonitis or perforation signs: fever + rigid abdomen + generalized tenderness → emergent surgery (contraindication to enema reduction)",
      "Failure of enema reduction after 2–3 attempts → surgical reduction or resection",
      "Age > 2 years (more likely pathological lead point) → greater surgical consideration",
      "Recurrence after air enema (10–15% within 48–72 hours) — parents must be counseled and return for any recurrence",
    ],
    mnemonics: [
      {
        name: "Intussusception classic triad: CVR",
        content:
          "C – Colicky abdominal pain (episodic — child draws knees to chest, resolves between episodes); V – Vomiting (early, bilious); R – Red currant-jelly stool (late — bloody mucus = ischemic bowel). Classic triad present in only 20–40%. Do NOT wait for all three to act.",
      },
    ],
    pimpingQuestions: [
      "What is the bull's-eye (target) sign on ultrasound in intussusception?",
      "What does currant-jelly stool represent, and why is it a late finding?",
      "What are the contraindications to pneumatic (air enema) reduction?",
      "At what age should you suspect a pathological lead point for intussusception?",
      "What is the recurrence rate after air enema reduction, and when does it typically occur?",
    ],
  },
  {
    id: "peds-pyloric-stenosis",
    name: "Hypertrophic Pyloric Stenosis",
    icdCode: "Q40.0",
    rotation: "pediatrics",
    category: "Gastroenterology",
    definition:
      "Hypertrophic pyloric stenosis (HPS) is progressive hypertrophy and hyperplasia of the pyloric circular muscle, causing gastric outlet obstruction. It is the most common surgical cause of vomiting in infants, typically presenting at 2–8 weeks of life (peak at 3–6 weeks). The pyloric muscle progressively thickens, eventually obstructing gastric emptying. The classic metabolic derangement is hypochloremic, hypokalemic metabolic alkalosis from repeated vomiting of gastric acid.",
    diagnosticCriteria:
      "Ultrasound (gold standard, first-line): pyloric muscle thickness ≥ 3 mm, pyloric channel length ≥ 14–16 mm, pyloric diameter ≥ 13 mm. Classic findings: 'cervix sign' or 'donut sign' (transverse view). Upper GI contrast study (if US inconclusive): 'string sign' (contrast forced through elongated, narrowed pyloric channel), 'double track sign'. Metabolic: hypochloremic metabolic alkalosis (pH > 7.45, low Cl⁻, low K⁺) from vomiting HCl. Hypokalemia occurs because renal K⁺ is lost in exchange for H⁺ (paradoxical aciduria preserving intravascular volume). Serum electrolytes mandatory before surgery.",
    presentation: {
      chiefComplaint: [
        "Projectile vomiting after every feed (forceful, non-bilious)",
        "Infant still hungry after vomiting ('hungry vomiter')",
        "Weight loss and poor weight gain",
        "Presents at 3–6 weeks of life",
        "Visible gastric peristaltic waves across epigastrium",
      ],
      associatedSymptoms: [
        "Non-bilious (not green) projectile vomiting — pylorus is proximal to ampulla of Vater",
        "Voracious appetite between vomiting episodes ('hungry vomiter' distinguishes from other causes)",
        "Dehydration and weight loss with continued vomiting",
        "Constipation (nothing passing through to intestines)",
        "Jaundice in 2–3% (hyperbilirubinemia — decreased hepatic glucuronyl transferase from starvation)",
        "Palpable olive-shaped pyloric mass in epigastrium/RUQ (classic but found in only 50–70% on exam)",
      ],
      demographics:
        "Incidence 2–4 per 1,000 live births. Male predominance (4:1 male-to-female ratio). First-born male at highest risk. Familial tendency. Erythromycin use in early infancy or maternal erythromycin in late pregnancy is associated with increased risk.",
    },
    distinguishingFeatures:
      "HPS vs. GERD: GERD = non-projectile, non-bilious vomiting, no metabolic alkalosis, normal growth if mild, begins in first weeks; HPS = forceful projectile vomiting, progressive, weight loss, metabolic alkalosis. HPS vs. duodenal atresia: duodenal atresia = bilious vomiting in first 24 hours, 'double bubble' sign on AXR, associated with Down syndrome. Pyloric stenosis = non-bilious (proximal to bile duct) + onset at 3–6 weeks (not from birth).",
    redFlags: [
      "Severe dehydration and electrolyte imbalance (hypokalemia < 3.0 mEq/L, hypochloremia < 90 mEq/L) — must correct BEFORE surgery (electrolyte abnormality is the anesthetic risk, not the obstruction)",
      "Paradoxical aciduria: despite metabolic alkalosis, urine pH is acidic because kidneys sacrifice H⁺ excretion to preserve Na⁺/volume — seen in severe cases",
    ],
    mnemonics: [
      {
        name: "HPS classic findings: PALM",
        content:
          "P – Projectile non-bilious vomiting; A – Alkalosis (hypochloremic, hypokalemic metabolic alkalosis); L – Lab: low Cl⁻, low K⁺, elevated pH; M – Mass (olive-shaped, palpable in RUQ). Fix electrolytes BEFORE surgery — metabolic alkalosis is the anesthetic risk.",
      },
    ],
    pimpingQuestions: [
      "Why is the vomiting in pyloric stenosis non-bilious?",
      "What is the classic metabolic derangement in pyloric stenosis, and why does it occur?",
      "Why must electrolytes be corrected before performing the pyloromyotomy?",
      "What is the definitive surgical treatment for pyloric stenosis?",
      "What ultrasound measurements confirm hypertrophic pyloric stenosis?",
    ],
  },

  // ── NEUROLOGY ─────────────────────────────────────────────────────────────
  {
    id: "peds-febrile-seizure",
    name: "Febrile Seizures",
    icdCode: "R56.00",
    rotation: "pediatrics",
    category: "Neurology",
    definition:
      "Febrile seizures are the most common seizure disorder of childhood, occurring in 2–5% of children between 6 months and 5 years during a febrile illness (temperature ≥ 38°C/100.4°F) in the absence of CNS infection, metabolic abnormality, or prior afebrile seizures. Simple febrile seizures (90%) are generalized, brief (< 15 minutes), with single occurrence per febrile illness, and return to baseline. Complex febrile seizures (10%) are focal, prolonged (> 15 minutes), or recur within 24 hours. The fever itself — particularly the rapid rise in temperature — lowers the seizure threshold in genetically susceptible children.",
    diagnosticCriteria:
      "Clinical diagnosis: history of fever + characteristic seizure in correct age range. Simple febrile seizure: no LP, no EEG, no imaging required in well-appearing child > 18 months who returns to baseline. Lumbar puncture: strongly consider in < 12 months (meningeal signs unreliable), 12–18 months (variable signs), any age with complex features, prolonged post-ictal state, ill appearance, prior antibiotic use, or meningeal signs. Labs: only if clinically indicated (electrolytes for metabolic workup, CBC for source of fever). EEG: NOT indicated after simple febrile seizure — does not predict recurrence or future epilepsy. Neuroimaging: NOT routine — only for focal neurological deficits or focal seizure features persisting.",
    presentation: {
      chiefComplaint: [
        "Shaking/convulsions with fever (generalized tonic-clonic)",
        "Child went stiff, then shook all over",
        "Eyes rolled back, unresponsive during fever",
        "Returned to normal after 2–3 minutes (post-ictal drowsiness expected < 30 min)",
      ],
      associatedSymptoms: [
        "Rapid-onset high fever (often before parents recognize febrile illness)",
        "Generalized tonic-clonic activity (most common type — symmetric)",
        "Post-ictal sleepiness for up to 30 minutes (expected — prolonged or no return to baseline → CNS infection workup)",
        "HHV-6 (roseola) and influenza A commonly associated viral triggers",
      ],
      demographics:
        "Incidence 2–5% of children ages 6 months – 5 years. Peak age: 18 months. Recurrence rate: 30% overall; 50% if first seizure before age 12 months. Risk of future epilepsy after one simple febrile seizure: only slightly above general population (1–2% vs 1%). Genetic predisposition: first-degree relative with febrile seizures increases risk 2–3×.",
    },
    distinguishingFeatures:
      "Simple vs. complex febrile seizure: simple = < 15 min, generalized, one episode per febrile illness, normal post-ictally; complex = focal features, > 15 min, or recurs within same illness. Febrile seizure vs. febrile meningitis: meningitis = meningeal signs, prolonged post-ictal state, ill appearance, bulging fontanelle, petechiae — LP required. Febrile seizure vs. epilepsy: epilepsy = afebrile seizures; febrile seizures do NOT indicate epilepsy in the vast majority.",
    redFlags: [
      "Bacterial meningitis mimics febrile seizure — MUST be excluded, especially in infants < 12 months (LP more liberally indicated)",
      "Prolonged post-ictal state or failure to return to baseline (evaluate for CNS infection or Todd's paralysis with focal seizure)",
      "Febrile status epilepticus (> 30 minutes): benzodiazepine → fosphenytoin/levetiracetam → anesthesia if refractory; risk of hippocampal injury",
    ],
    mnemonics: [
      {
        name: "Simple vs. Complex Febrile Seizure: 15-1",
        content:
          "Simple: duration < 15 minutes + 1 episode per illness + generalized (not focal) = reassurance. Complex: ≥ 1 of (duration > 15 min, focal features, recurs within same illness) = more workup. LP in infants < 12 months regardless.",
      },
    ],
    pimpingQuestions: [
      "Do antipyretics prevent febrile seizure recurrence in a child with a prior febrile seizure?",
      "What is the lifetime risk of epilepsy after a single simple febrile seizure?",
      "When is lumbar puncture indicated after a febrile seizure?",
      "What is febrile status epilepticus and what is the treatment algorithm?",
      "What is the most common identifiable viral trigger of febrile seizures?",
    ],
  },

  // ── HEMATOLOGIC ───────────────────────────────────────────────────────────
  {
    id: "peds-ida",
    name: "Iron Deficiency Anemia",
    icdCode: "D50.9",
    rotation: "pediatrics",
    category: "Hematology",
    definition:
      "Iron deficiency anemia (IDA) is the most common nutritional deficiency and the most common cause of anemia in children worldwide. It results from inadequate iron intake, malabsorption, or excessive loss. In toddlers (ages 1–3 years), excessive cow's milk intake is the leading cause (cow's milk is low in iron, inhibits iron absorption, and can cause occult GI blood loss). Adolescent girls with menstruation are another high-risk group. IDA has well-documented consequences for neurodevelopment and cognition, even when anemia is mild, making early detection critical.",
    diagnosticCriteria:
      "CBC: microcytic (MCV < 80 fL in children), hypochromic (MCH < 26 pg), elevated RDW (> 14% — red cell size variability). Iron studies: low serum ferritin (< 12 ng/mL — most specific for iron depletion; falls first before Hgb drops), low serum iron, high TIBC (> 400 µg/dL), transferrin saturation < 15%. Note: ferritin is an acute-phase reactant — may be falsely elevated during infection. Therapeutic trial: oral iron 3 mg/kg/day elemental iron → reticulocyte response in 5–7 days + Hgb rise ≥ 1 g/dL in 4 weeks = confirms IDA in classic toddler presentation. Differential: thalassemia trait (MCV low, ferritin normal, HbA₂ elevated on electrophoresis, RDW normal), ACD (ferritin elevated, TIBC low).",
    presentation: {
      chiefComplaint: [
        "Pallor noticed by parents or on well-child exam",
        "Fatigue and irritability",
        "Pica (craving for ice = pagophagia, dirt, starch — highly specific for IDA)",
        "Detected on routine screening hemoglobin at 12 months",
      ],
      associatedSymptoms: [
        "Pallor: conjunctival (pull down lower lid — pale pink instead of red), palmar, circumoral",
        "Fatigue, decreased activity tolerance",
        "Restless legs syndrome (older children/adolescents)",
        "Behavioral changes and decreased attention span (even before frank anemia)",
        "Koilonychia (spoon nails) and glossitis (severe/chronic)",
        "Tachycardia and systolic flow murmur (high-output state in severe anemia)",
      ],
      demographics:
        "Most common nutritional deficiency globally. US prevalence: 7–9% of toddlers (12–36 months), 9–16% of adolescent girls. High-risk groups: toddlers on excessive cow's milk (> 24 oz/day), breastfed infants not receiving iron supplementation after 4–6 months, premature infants (less iron stored at birth), adolescent girls with menorrhagia.",
    },
    distinguishingFeatures:
      "IDA vs. thalassemia trait: both microcytic, but thalassemia trait = normal ferritin, normal RDW (uniform small cells), elevated HbA₂ on electrophoresis; IDA = low ferritin, high RDW (anisocytosis). IDA vs. ACD: ACD = elevated/normal ferritin, low TIBC; IDA = low ferritin, high TIBC. Pica (especially pagophagia/ice craving) is highly specific for IDA. Lead poisoning can cause microcytic anemia — check blood lead level in toddlers with pica.",
    redFlags: [
      "Hgb < 7 g/dL with cardiovascular compromise (transfusion threshold)",
      "Pica — especially geophagia (eating dirt/clay): lead poisoning risk — check blood lead level",
      "IDA in a newborn or very young infant (< 3 months) — suspect blood loss or hemolysis rather than dietary deficiency",
    ],
    mnemonics: [
      {
        name: "IDA labs: FLAT-LIT",
        content:
          "Ferritin Low; Low iron (serum); Anemia microcytic hypochromic; TIBC elevated; Low transferrin saturation; Iron-deficient. Contrast with ACD: Ferritin Normal/High, TIBC Low.",
      },
    ],
    pimpingQuestions: [
      "What is the most reliable single test to diagnose iron deficiency before anemia develops?",
      "Why does excessive cow's milk consumption cause iron deficiency in toddlers?",
      "What is pagophagia and why is it specific for iron deficiency anemia?",
      "How do you distinguish iron deficiency anemia from thalassemia trait?",
      "What is the appropriate duration of oral iron supplementation after hemoglobin normalizes, and why?",
    ],
  },
  {
    id: "peds-sickle-cell",
    name: "Sickle Cell Disease",
    icdCode: "D57.1",
    rotation: "pediatrics",
    category: "Hematology",
    definition:
      "Sickle cell disease (SCD) is an autosomal recessive hemoglobinopathy caused by a point mutation in the beta-globin gene (Glu→Val at position 6), producing hemoglobin S (HbS). Deoxygenation causes HbS polymerization → erythrocyte sickling → vaso-occlusion, hemolytic anemia, and organ damage. HbSS (homozygous) is the most severe form. SCD affects ~100,000 Americans, predominantly of African descent. Newborn screening universally detects SCD in the US.",
    diagnosticCriteria:
      "Newborn screening: hemoglobin electrophoresis or HPLC — detects HbS at birth. Peripheral smear: sickle cells (crescent-shaped RBCs), target cells, Howell-Jolly bodies (functional asplenia). Labs in acute crisis: CBC (baseline Hgb typically 6–8 g/dL in HbSS), reticulocyte count elevated (hemolytic anemia), elevated LDH and indirect bilirubin, low haptoglobin. HbS proportion on HPLC determines genotype. Sickle cell trait (HbAS): < 40% HbS, generally benign, no chronic hemolytic anemia.",
    presentation: {
      chiefComplaint: [
        "Painful crisis (vaso-occlusive pain — most common SCD presentation): sudden severe pain in extremities, back, chest",
        "Fever + pain (infection must be excluded — functional asplenia increases sepsis risk)",
        "Swollen, painful hands and feet in infant (dactylitis — earliest manifestation, < 2 years)",
        "Sudden pallor and lethargy (aplastic crisis or splenic sequestration)",
      ],
      associatedSymptoms: [
        "Jaundice and scleral icterus (chronic hemolysis)",
        "Functional asplenia by age 5 (splenic infarction from repeated sickling) → overwhelming sepsis risk with encapsulated organisms",
        "Acute chest syndrome (ACS): fever + chest pain + new pulmonary infiltrate + hypoxemia — most common cause of death in SCD",
        "Stroke (ischemic — 11% lifetime risk without prophylaxis; hemorrhagic in older adults)",
        "Dactylitis (hand-foot syndrome): earliest SCD manifestation in infants 6–24 months",
      ],
      demographics:
        "Affects ~100,000 Americans; 1 in 365 Black Americans born with SCD. Autosomal recessive — both parents must carry HbS allele (trait in 1 in 13 Black Americans). Malaria resistance in HbAS trait explains high allele frequency in malaria-endemic regions.",
    },
    distinguishingFeatures:
      "Vaso-occlusive crisis (VOC) vs. acute chest syndrome: VOC = musculoskeletal pain, no respiratory compromise; ACS = fever + new pulmonary infiltrate + hypoxemia + chest pain — treat with exchange transfusion + antibiotics. Aplastic crisis (Parvovirus B19): acute severe anemia with low reticulocyte count (parvovirus stops RBC production — reticulocytopenia). Splenic sequestration: sudden enlargement of spleen + rapid anemia + hypovolemia — FIRST emergency in young children with SCD.",
    redFlags: [
      "Fever ≥ 38.5°C in a child with SCD: sepsis from S. pneumoniae (functional asplenia) — blood cultures + IV ceftriaxone IMMEDIATELY (even if well-appearing)",
      "Acute chest syndrome: requires urgent exchange transfusion, antibiotics (atypical coverage + cephalosporin), supplemental O₂, bronchodilators — leading cause of death",
      "Stroke symptoms (focal neurologic deficit) → emergent exchange transfusion (transcranial Doppler screening annually to detect high-risk patients)",
      "Splenic sequestration: acute painful splenomegaly + rapid Hgb drop > 2 g/dL + hypovolemic shock → IV fluids + pRBC transfusion",
      "Priapism > 4 hours: pain + erection → IV hydration + exchange transfusion consideration (urologic emergency if > 4 hours)",
    ],
    mnemonics: [
      {
        name: "SCD prophylaxis essentials: PHAP",
        content:
          "P – Penicillin V (prophylaxis from 2 months until at least age 5 — prevents pneumococcal sepsis); H – Hydroxyurea (increases HbF, reduces sickling, prevents crises — FDA-approved from 9 months); A – Annually: transcranial Doppler (stroke risk screening, ages 2–16); P – Pneumococcal + Meningococcal vaccines (PCV13 + PPSV23 + MenACWY + MenB — asplenic protection).",
      },
    ],
    pimpingQuestions: [
      "What is the mechanism of acute chest syndrome in sickle cell disease?",
      "Why are children with sickle cell disease functionally asplenic, and what infections does this predispose them to?",
      "What is the mechanism by which hydroxyurea reduces sickle cell crises?",
      "What is dactylitis and at what age does it typically present in sickle cell disease?",
      "Which virus causes aplastic crisis in sickle cell disease, and why does the anemia become so severe?",
    ],
  },

  // ── PSYCHIATRIC / BEHAVIORAL ──────────────────────────────────────────────
  {
    id: "peds-adhd",
    name: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
    icdCode: "F90.2",
    rotation: "pediatrics",
    category: "Psychiatry / Behavioral",
    definition:
      "ADHD is the most common neurodevelopmental disorder of childhood, characterized by developmentally inappropriate levels of inattention, hyperactivity, and impulsivity causing functional impairment across multiple settings. DSM-5 requires symptoms present before age 12 in ≥ 2 settings. Heritability is 70–80%. Pathophysiology involves dopamine and norepinephrine dysregulation in prefrontal cortex circuits governing executive function, working memory, and impulse control. ADHD persists into adulthood in 60–80% of cases.",
    diagnosticCriteria:
      "DSM-5: ≥ 6 inattentive symptoms (or ≥ 6 hyperactive-impulsive) for children < 17 years, present for ≥ 6 months, before age 12, in ≥ 2 settings, causing functional impairment, not better explained by another disorder. Presentations: predominantly inattentive (ADHD-I), predominantly hyperactive-impulsive (ADHD-H), combined (ADHD-C). Clinical diagnosis — no lab tests or imaging required. Validated rating scales: Vanderbilt (most used in primary care — requires parent AND teacher), Conners', SNAP-IV. Rule out: vision/hearing impairment, thyroid disease, lead toxicity, iron deficiency, seizure disorder, anxiety, learning disability.",
    presentation: {
      chiefComplaint: [
        "Teacher reports difficulty staying on task, doesn't finish work",
        "Can't sit still in class — constantly out of seat",
        "Impulsive behavior, blurts out answers, interrupts others",
        "Losing things, forgetting assignments, disorganized",
        "Homework takes 3 hours (should take 30 minutes)",
      ],
      associatedSymptoms: [
        "Inattentive: careless mistakes, doesn't listen, loses things, easily distracted, forgetful",
        "Hyperactive: fidgets, leaves seat, runs/climbs inappropriately, can't play quietly, 'always on the go'",
        "Impulsive: blurts answers, can't wait turn, interrupts, acts before thinking",
        "High comorbidity: ODD (50%), anxiety (25–30%), learning disorders (30–40%), depression (15–20%)",
        "Sleep difficulties (often comorbid — insomnia, restless sleep)",
      ],
      demographics:
        "Prevalence 9–10% of school-age children. Male:female 3:1 in childhood (converges in adulthood). Mean age of diagnosis: 7 years. Higher prevalence in children of lower socioeconomic status (partial access issues, not truly higher incidence). Strong genetic component — risk 5–7× higher if parent has ADHD.",
    },
    distinguishingFeatures:
      "ADHD vs. anxiety: anxiety = inattention confined to worry-provoking situations, child can concentrate when not anxious; ADHD = pervasive inattention across all contexts. ADHD vs. mood disorder/bipolar: ADHD = chronic/stable neurodevelopmental pattern; bipolar = episodic, with discrete mood episodes. ADHD vs. learning disability: learning disability = difficulty in a specific domain; ADHD = difficulty across all domains requiring sustained attention. Multiple informants (parent + teacher) required — if problem only at home, consider anxiety or ODD.",
    redFlags: [
      "Stimulant use in a child with known cardiac disease or unexplained syncope — EKG and cardiology consultation before initiating",
      "Tics worsening with stimulant treatment (consider non-stimulant: guanfacine, clonidine)",
      "Suicidal ideation (atomoxetine black box warning in children — monitor closely)",
      "Substance use disorder in family (stimulant diversion risk — consider ADHD-specific formulations with lower abuse potential: lisdexamfetamine, osmotic methylphenidate)",
    ],
    mnemonics: [
      {
        name: "ADHD treatment approach: BMS",
        content:
          "B – Behavior therapy FIRST for preschoolers (4–5 years): parent training in behavior management before medications (AAP guideline). M – Medications: stimulants first-line for ≥ 6 years — methylphenidate (Ritalin, Concerta) or amphetamine salts (Adderall, Vyvanse). 70–80% response rate. S – School supports: IEP (Individualized Education Program) or 504 Plan — classroom accommodations essential alongside medication.",
      },
    ],
    pimpingQuestions: [
      "What is the AAP-recommended first-line treatment for ADHD in preschool children (ages 4–5)?",
      "What are the two classes of stimulant medications for ADHD, and how do they differ mechanistically?",
      "Why does the ADHD diagnosis require impairment in at least two settings?",
      "What is atomoxetine, when is it used over stimulants, and what is its black box warning?",
      "How do you distinguish ADHD from normal developmental hyperactivity in a 4-year-old?",
    ],
  },

  // ── ENDOCRINE ─────────────────────────────────────────────────────────────
  {
    id: "peds-t1dm",
    name: "Type 1 Diabetes Mellitus (Pediatric)",
    icdCode: "E10.9",
    rotation: "pediatrics",
    category: "Endocrinology",
    definition:
      "Type 1 diabetes mellitus (T1DM) is an autoimmune disease characterized by T-cell-mediated destruction of pancreatic beta cells, resulting in absolute insulin deficiency. It accounts for > 95% of diabetes in children under 10 years. T1DM requires lifelong insulin therapy. Diabetic ketoacidosis (DKA) is the most serious acute complication and may be the presenting manifestation (30% of new T1DM diagnoses present in DKA, especially in younger children). Genetic susceptibility (HLA-DR3 and HLA-DR4) combined with environmental triggers (viral infections, dietary factors) underlies pathogenesis.",
    diagnosticCriteria:
      "ADA: any one of: Fasting glucose ≥ 126 mg/dL (8-hour fast); 2-hour glucose ≥ 200 mg/dL during 75g OGTT; HbA1c ≥ 6.5%; or Random glucose ≥ 200 mg/dL + classic symptoms (polyuria, polydipsia, unexplained weight loss). T1DM vs T2DM: T1DM = normal/low weight, anti-GAD antibodies, low C-peptide, rapid progression; T2DM = obese, acanthosis nigricans, family history, normal/high C-peptide. DKA criteria: glucose > 200 + pH < 7.3 + HCO₃ < 15 + ketonuria/ketonemia. Autoantibodies: anti-GAD (most sensitive), anti-IA2, anti-ZnT8, anti-insulin (especially in young children).",
    presentation: {
      chiefComplaint: [
        "Polyuria and polydipsia ('drinking a lot, going to the bathroom constantly')",
        "Unexplained weight loss despite normal or increased appetite",
        "Bedwetting in a previously dry child (enuresis)",
        "Fatigue and weakness",
        "Nausea, vomiting, abdominal pain (DKA presenting signs)",
      ],
      associatedSymptoms: [
        "Polyphagia (paradoxical hunger despite hyperglycemia — glucose not entering cells)",
        "Blurred vision (osmotic lens changes from hyperglycemia)",
        "Candidal infections (vaginal or oral — glucose-rich environment promotes fungal growth)",
        "Kussmaul respirations (deep, rapid breathing — respiratory compensation for metabolic acidosis in DKA)",
        "Fruity breath (acetone from ketosis — a classic DKA sign)",
      ],
      demographics:
        "Peak incidence ages 10–14 (puberty — insulin resistance of puberty unmasks borderline beta-cell reserve). Bimodal distribution: ages 5–7 (viral triggers) and puberty. Equal sex distribution. Higher incidence in white/European-descent children. Familial risk: 5% if one parent affected, 10–15% if sibling affected.",
    },
    distinguishingFeatures:
      "T1DM vs. T2DM in children: T1DM = lean/normal weight, abrupt onset, ketosis-prone, autoantibody-positive, low C-peptide, requires insulin from diagnosis; T2DM in children = obese, gradual onset, acanthosis nigricans, strong family history, responds to metformin initially, rare autoantibodies. MODY (Maturity Onset Diabetes of the Young): monogenic, autosomal dominant, usually non-ketotic, responds to sulfonylureas (MODY 2 and 3 most common), single-gene testing. DKA more common at T1DM diagnosis in younger children (< 5 years) — subtle symptoms missed.",
    redFlags: [
      "DKA: glucose > 200 + acidosis (pH < 7.3) + ketonemia — IV insulin + fluid resuscitation (cerebral edema is the most feared pediatric DKA complication: headache + altered mentation 4–6 hours into treatment → mannitol)",
      "Cerebral edema in pediatric DKA: most common cause of DKA-related death in children — avoid rapid osmolarity shifts, use LR (not NS) if possible, conservative fluid repletion",
      "Hypoglycemia with insulin therapy (most common acute complication): < 70 mg/dL → treat with 15g fast-acting carbs (Rule of 15)",
    ],
    mnemonics: [
      {
        name: "T1DM classic presentation: 3 P's + W + K",
        content:
          "3 P's: Polyuria + Polydipsia + Polyphagia. W: Weight loss (unexplained). K: Ketosis/DKA (fruity breath, Kussmaul respirations, abdominal pain). In a lean child: these 5 findings = T1DM until proven otherwise. Confirm with glucose ≥ 200 + autoantibodies.",
      },
    ],
    pimpingQuestions: [
      "What is the most feared neurological complication of DKA treatment in children, and what causes it?",
      "How do you distinguish T1DM from T2DM in an adolescent with new-onset hyperglycemia?",
      "What HLA types are associated with T1DM susceptibility?",
      "What is MODY and how does it differ from T1DM and T2DM?",
      "What is the target HbA1c for children with T1DM and why is it higher than for adults?",
    ],
  },

  // ── RENAL / GENITOURINARY ─────────────────────────────────────────────────
  {
    id: "peds-uti",
    name: "Urinary Tract Infection (Pediatric)",
    icdCode: "N39.0",
    rotation: "pediatrics",
    category: "Nephrology",
    definition:
      "Urinary tract infections (UTIs) in children are bacterial infections of the bladder (cystitis) or kidney (pyelonephritis). UTI is one of the most common serious bacterial infections in young children, occurring in 8% of girls and 2% of boys by age 7. E. coli causes 80–85% of UTIs. Pyelonephritis in children carries risk of renal scarring and long-term hypertension and chronic kidney disease. Young infants (< 2 months) may present atypically with fever only — UTI is the most common serious bacterial infection causing fever without source in this age group.",
    diagnosticCriteria:
      "Urine collection method matters: suprapubic aspiration (gold standard), urethral catheterization (preferred in infants), or clean-catch midstream (acceptable in toilet-trained children). Urinalysis: pyuria (> 5 WBC/hpf), positive leukocyte esterase, positive nitrites (only if gram-negative organism has been present ≥ 4 hours), bacteriuria. Urine culture: gold standard — ≥ 10⁵ CFU/mL (catheter or SPA) or ≥ 10⁴ CFU/mL (catheter from female). Do NOT interpret bag cultures for diagnosis (high contamination rate — use for a negative screen only). Imaging: renal/bladder ultrasound for first febrile UTI in child < 24 months or atypical/recurrent UTI. VCUG (voiding cystourethrogram): for febrile UTI in < 2 years with abnormal US or recurrent febrile UTI — evaluates for vesicoureteral reflux (VUR).",
    presentation: {
      chiefComplaint: [
        "Fever without obvious source in infant (UTI = most common serious bacterial infection)",
        "Dysuria, urinary frequency, urgency (older toilet-trained children)",
        "Crying with urination, poor feeding in infant",
        "Foul-smelling or cloudy urine",
        "Flank pain/back pain (pyelonephritis in older children)",
      ],
      associatedSymptoms: [
        "Neonates/young infants: fever, irritability, poor feeding, vomiting — no localizing urinary symptoms",
        "Toddlers: abdominal pain, hematuria, new-onset enuresis",
        "Older children: classic LUTS (lower urinary tract symptoms) — dysuria, frequency, urgency, suprapubic pain",
        "Pyelonephritis: fever > 38.5°C + systemic illness + costovertebral angle tenderness + nausea/vomiting",
      ],
      demographics:
        "Girls > boys overall (shorter urethra, proximity of urethral meatus to anus); boys > girls in first year (uncircumcised boys have 10× risk of circumcised); highest risk in infants < 24 months. Risk factors: female sex, VUR (vesicoureteral reflux), urinary tract anomalies, catheterization, uncircumcised male infancy.",
    },
    distinguishingFeatures:
      "Cystitis vs. pyelonephritis in children: cystitis = lower UTI symptoms, afebrile or low fever, no systemic illness; pyelonephritis = fever > 38.5°C, systemic toxicity, CVA tenderness, elevated CRP/ESR. VUR (vesicoureteral reflux): urine flows backward from bladder into ureter/kidney → recurrent febrile UTIs → renal scarring → hypertension and CKD. Grade I–V (V = severe — intrarenal reflux). DMSA scintigraphy: gold standard for renal scar detection.",
    redFlags: [
      "Febrile infant < 2 months with UTI: IV antibiotics (potential sepsis from renal/hematogenous spread), hospitalization",
      "Pyelonephritis with renal abscess, urosepsis, or poor response to oral antibiotics → IV ceftriaxone + renal/GU imaging",
      "Recurrent febrile UTIs: must evaluate for VUR with VCUG and DMSA scan for renal scars",
    ],
    mnemonics: [
      {
        name: "Pediatric UTI diagnosis: CUPS",
        content:
          "C – Clean specimen (catheter or SPA — not bag sample for diagnosis); U – Urinalysis (pyuria + LE + nitrites); P – Pyuria (> 5 WBC/hpf) must be present for diagnosis; S – Send culture BEFORE antibiotics. ≥ 10⁵ CFU/mL = positive. Bag urine with positive UA → reconfirm with catheter specimen.",
      },
    ],
    pimpingQuestions: [
      "Why are bag urine cultures unreliable for diagnosing UTI in infants?",
      "What is vesicoureteral reflux, and how does it predispose to recurrent UTIs and renal scarring?",
      "Which imaging should be performed after a first febrile UTI in a child under 24 months?",
      "Why are young male infants at higher UTI risk than female infants in the first year of life?",
      "What is the preferred antibiotic for outpatient treatment of pyelonephritis in a child > 3 months?",
    ],
  },

  // ── MUSCULOSKELETAL ───────────────────────────────────────────────────────
  {
    id: "peds-ddh",
    name: "Developmental Dysplasia of the Hip (DDH)",
    icdCode: "Q65.89",
    rotation: "pediatrics",
    category: "Musculoskeletal",
    definition:
      "Developmental dysplasia of the hip (DDH) is a spectrum of hip abnormalities ranging from mild acetabular dysplasia to complete dislocation of the femoral head from the acetabulum. It is the most common pediatric hip disorder, affecting approximately 1–3 per 1,000 live births. Early detection and treatment (ideally before 6 months) is essential — delayed treatment leads to persistent dysplasia, early-onset arthritis, and significant hip disability. Universal screening with Barlow and Ortolani maneuvers is performed at each well-child visit until the child is walking.",
    diagnosticCriteria:
      "Newborn/infant physical examination: Barlow maneuver (adduction + posterior pressure on proximal femur) = dislocates an unstable hip (positive = 'clunk out'); Ortolani maneuver (abduction + anterior lift of trochanter) = relocates a dislocated hip back into acetabulum (positive = 'clunk in'). After 3 months (soft tissue stabilizes): Galeazzi sign (knee height asymmetry with hips/knees flexed — shorter side = dislocated hip), limited abduction of the hip (< 60°), leg length discrepancy. Imaging: Hip ultrasound (gold standard for infants < 4–6 months — cartilaginous femoral head not visible on X-ray); Alpha angle < 60° = dysplasia (Graf method). Hip X-ray (preferred > 4–6 months when femoral head ossifies): Hilgenreiner and Perkin lines define quadrants — dislocated hip in outer/upper quadrant.",
    presentation: {
      chiefComplaint: [
        "Abnormal clunk on newborn hip screening exam",
        "Asymmetric inguinal or thigh skin folds",
        "Leg length discrepancy (Galeazzi positive)",
        "Waddling or asymmetric gait in toddler (late presentation)",
        "Positive hip screening by NP or MD on well-child visit",
      ],
      associatedSymptoms: [
        "Asymmetric hip abduction (restricted abduction on affected side)",
        "Galeazzi sign: with hips and knees flexed 90°, affected knee appears lower",
        "Asymmetric skin folds: extra inguinal/gluteal fold on affected side",
        "Hip 'clunk' on Barlow (dislocates) or Ortolani (relocates) maneuvers",
        "Often asymptomatic and painless in infants — detected on exam",
      ],
      demographics:
        "Incidence 1–3 per 1,000. Predominantly female (6:1 female predominance — relaxin hormone effects). Left hip more commonly affected (LOP fetal position — left hip against mother's sacrum). Risk factors: breech presentation (#1 risk factor), positive family history, firstborn, oligohydramnios, twin, neuromuscular disorders (e.g., cerebral palsy).",
    },
    distinguishingFeatures:
      "DDH vs. septic arthritis: septic arthritis = acutely ill child, fever, pain with ANY passive movement, refusal to move leg, elevated WBC/ESR/CRP — emergency joint aspiration and IV antibiotics. DDH = chronic asymptomatic, detected on screening, no fever, stable on aspiration. DDH vs. transient synovitis: synovitis = 4–10-year-old, hip pain after viral illness, low-grade fever, responds to NSAIDs, ultrasound may show joint effusion — differentiated by Kocher criteria.",
    redFlags: [
      "Late diagnosis (> 18 months) requires open reduction + femoral/pelvic osteotomy — outcomes significantly worse than early Pavlik harness treatment",
      "Avascular necrosis (AVN) of the femoral head: complication of Pavlik harness treatment (too tight), surgical reduction, or cast — resulting in significant long-term disability",
    ],
    mnemonics: [
      {
        name: "DDH exam maneuvers: B-OUT, O-IN",
        content:
          "Barlow = pushes hip OUT (adduction + posterior pressure): tests for a dislocatable hip. Ortolani = brings hip IN (abduction + anterior lift): tests for a relocatable hip. Both produce a 'clunk' (not a 'click' — ligaments). Positive after 3 months is rare (soft tissue stabilization) — use Galeazzi sign and limited abduction instead.",
      },
    ],
    pimpingQuestions: [
      "What is the difference between the Barlow and Ortolani maneuvers?",
      "Why is the left hip more commonly affected in DDH?",
      "What is the gold-standard imaging for DDH in an infant less than 4 months of age?",
      "What is the first-line treatment for DDH diagnosed before 6 months of age?",
      "What are the major risk factors for developmental dysplasia of the hip?",
    ],
  },

  // ── DERMATOLOGIC ─────────────────────────────────────────────────────────
  {
    id: "peds-eczema",
    name: "Atopic Dermatitis (Eczema)",
    icdCode: "L20.9",
    rotation: "pediatrics",
    category: "Dermatology",
    definition:
      "Atopic dermatitis (AD) is a chronic, relapsing, pruritic inflammatory skin condition and the most common chronic skin disease of childhood, affecting 15–20% of children in developed countries. It is the first step of the 'atopic march' — progression from AD to food allergy, allergic rhinitis, and asthma. The pathophysiology involves filaggrin (FLG) gene mutations causing impaired epidermal barrier function → increased transepidermal water loss → allergen penetration + microbial colonization (Staphylococcus aureus) → Th2-mediated inflammation. AD rarely lasts into adulthood (~30% persist).",
    diagnosticCriteria:
      "Clinical diagnosis using Hanifin and Rajka criteria. Major criteria (must have ≥ 1): (1) Pruritus; (2) Typical morphology and distribution (infants: cheeks/scalp/extensor surfaces; children/adults: flexural surfaces — antecubital and popliteal fossae); (3) Chronic or chronically relapsing course; (4) Personal or family history of atopy (asthma, allergic rhinitis, atopic dermatitis). Severity assessment: SCORAD or EASI tool. Skin culture if superinfected (S. aureus — most common, manifests as exudation, crusting, weeping, worsening despite topical steroids). Dupilumab (anti-IL-4Rα) approved for moderate–severe AD from age 6 months.",
    presentation: {
      chiefComplaint: [
        "Itchy rash since early infancy",
        "Dry, rough patches on cheeks, arms (in babies)",
        "Itching worse at night, disturbing sleep",
        "Rash that comes and goes — flares with infections or sweat",
        "Rash in elbow creases and behind knees (older child)",
      ],
      associatedSymptoms: [
        "Intense pruritus (hallmark) — children scratch until they bleed",
        "Xerosis (dry skin) between flares",
        "Lichenification (skin thickening from chronic scratching)",
        "Dennie-Morgan infraorbital lines (extra fold under eyes — atopic facies)",
        "Keratosis pilaris (rough bumps on upper arms — associated with atopy)",
        "Secondary S. aureus superinfection: honey-colored crusting, increased exudate, worsening redness",
      ],
      demographics:
        "Prevalence 15–20% of children in the US. Onset: 60% by age 1, 85% by age 5. Family history of atopy is the strongest risk factor. Atopic march: AD → food allergy (especially egg, milk, peanut) → allergic rhinitis → asthma. Higher prevalence in Black children and lower-income households (environmental factors, barrier disruption).",
    },
    distinguishingFeatures:
      "AD vs. contact dermatitis: AD = chronic, diffuse, atopic history, starts in infancy; contact = localized, geometric, reaction to specific allergen (nickel in belt buckle, rubber). AD vs. psoriasis: psoriasis = well-demarcated plaques, extensor surfaces, silvery scale, not primarily pruritic. AD vs. seborrheic dermatitis: seborrheic = cradle cap, greasy yellowish scale, scalp/face/diaper area in first 3 months — self-limited, not pruritic. AD vs. scabies: scabies = burrows, interdigital spaces, genital area, family members affected, extremely pruritic at night.",
    redFlags: [
      "Eczema herpeticum: widespread Herpes simplex superinfection on eczematous skin — punched-out erosions + clustered vesicles + fever → IV acyclovir (ophthalmology if near eyes)",
      "Extensive secondary S. aureus superinfection with systemic signs (fever, cellulitis) → oral or IV antibiotics",
      "MRSA colonization in AD patients (very common) — consider mupirocin nasal ointment for decolonization before escalating systemic treatment",
    ],
    mnemonics: [
      {
        name: "AD age-based distribution: CIA",
        content:
          "C – Cheeks (infants < 2 years) + scalp + extensor surfaces; I – (school-age) Flexural surfaces (antecubital/popliteal fossae, wrists, ankles — 'I' for In the folds); A – Adults: hands, feet, eyelids, generalized. The rash MOVES from extensor to flexor as child ages.",
      },
    ],
    pimpingQuestions: [
      "What is the 'atopic march' and what is the order of conditions?",
      "What gene mutation impairs epidermal barrier function in atopic dermatitis?",
      "What is eczema herpeticum, and how is it treated?",
      "What is the first-line treatment for acute AD flares?",
      "What is the mechanism of dupilumab, and which cytokine pathways does it block?",
    ],
  },

  // ─── EENOT ────────────────────────────────────────────────────────────────

  {
    id: "peds-eenot",
    name: "EENOT: Conjunctivitis, Periorbital/Orbital Cellulitis, and Mastoiditis",
    icdCode: "H10.9",
    rotation: "pediatrics",
    category: "EENOT / Eyes and Ears",
    definition:
      "Conjunctivitis: inflammation of conjunctiva — bacterial (S. pneumoniae, H. influenzae — mucopurulent discharge, bilateral involvement common, chemosis), viral (adenovirus — watery discharge, preauricular lymphadenopathy, epidemic keratoconjunctivitis), allergic (itching hallmark, bilateral, seasonal). Neonatal conjunctivitis (ophthalmia neonatorum): chemical (silver nitrate — first 24h), chlamydial (1–2 weeks, profuse discharge — most common in US — treat with oral erythromycin), gonococcal (2–5 days, copious purulent, risk corneal perforation — treat with ceftriaxone IM + eye irrigation). Orbital vs. periorbital cellulitis: periorbital (preseptal) — anterior to orbital septum, no proptosis/pain with movement, mild; orbital (postseptal) — posterior, proptosis, restricted/painful eye movement, chemosis → vision threatening, intracranial extension risk. Mastoiditis: complication of AOM — postauricular erythema, swelling, tenderness, ear displacement (auricle pushed down and forward), fever — CT head confirms; treat with IV antibiotics ± myringotomy ± mastoidectomy.",
    diagnosticCriteria:
      "Conjunctivitis: clinical. Neonatal: culture/Gram stain to distinguish GC vs. chlamydia (GC = Gram-negative intracellular diplococci). Periorbital cellulitis: CT orbits with contrast if orbital involvement suspected (proptosis, ophthalmoplegia, pain with movement). Mastoiditis: CT temporal bone — destruction of mastoid air cells, fluid in mastoid. CBC, blood cultures for orbital cellulitis and mastoiditis.",
    presentation: {
      chiefComplaint: [
        "\"My child's eye is red with yellow discharge\"",
        "\"My child's eye is swollen and bulging and she can't look around\"",
        "\"My child had an ear infection and now has a swollen lump behind the ear\"",
      ],
      associatedSymptoms: [
        "Bacterial conjunctivitis: bilateral mucopurulent discharge, eyelids stuck together in morning, no pain",
        "Orbital cellulitis: proptosis, restricted/painful eye movement (ophthalmoplegia), fever, headache, leukocytosis",
        "Mastoiditis: postauricular erythema and fluctuance, pinna displaced inferolaterally, fever, severe ear pain",
      ],
      demographics: "Periorbital cellulitis: children <5; sinusitis (ethmoid most commonly extends to orbit) is the most common cause. Orbital cellulitis: S. aureus, Strep, H. influenzae. Mastoiditis: children <2; most common complication of AOM.",
    },
    distinguishingFeatures:
      "Periorbital vs. orbital cellulitis: periorbital = NO proptosis, NO limitation of eye movement, NO pain with movement — treat with oral antibiotics; orbital = proptosis + limitation of movement → IV antibiotics + emergent CT + ophthalmology. Neonatal conjunctivitis timing: chemical (day 1), GC (days 2–5), chlamydia (days 7–14). GC requires ceftriaxone (not topical — systemic spread). Mastoiditis: don't miss in child with AOM and postauricular swelling.",
    redFlags: [
      "Proptosis + ophthalmoplegia: orbital cellulitis → emergent CT + IV antibiotics + ophthalmology; risk of intracranial extension, blindness",
      "Gonococcal neonatal conjunctivitis: copious purulent discharge in first week → corneal perforation risk → IV ceftriaxone immediately",
      "Mastoiditis with fluctuance: subperiosteal abscess requiring surgical drainage + IV antibiotics",
    ],
    mnemonics: [
      {
        name: "Neonatal Conjunctivitis Timing",
        content:
          "Day 1: Chemical (silver nitrate, now rare)\nDays 2–5: Gonococcal (GC) — urgent, corneal perforation risk → IV ceftriaxone\nDays 7–14: Chlamydial — most common in US → oral erythromycin (also treats coexisting chlamydia pneumonia)\n\nOrbital vs. Periorbital:\nPROPTOSIS + OPHTHALMOPLEGIA = ORBITAL (post-septal) → IV Abx + CT + Ophth\nNo proptosis = PERIORBITAL (pre-septal) → Oral Abx",
      },
    ],
    pimpingQuestions: [
      "How do you distinguish periorbital from orbital cellulitis and why does it matter?",
      "What is the most common cause of orbital cellulitis in children?",
      "What is the timing and treatment for each type of neonatal conjunctivitis?",
      "What are the complications of untreated mastoiditis?",
      "What is the most common organism in bacterial conjunctivitis in children?",
    ],
  },

  {
    id: "peds-ent-infections",
    name: "Pediatric ENT: Peritonsillar Abscess, Allergic Rhinitis, and Epiglottitis",
    icdCode: "J36",
    rotation: "pediatrics",
    category: "EENOT / Throat and Nose",
    definition:
      "Peritonsillar abscess (PTA): most common deep neck infection in children/adolescents — pus collection between tonsil and superior pharyngeal constrictor muscle. Most common organism: Group A Streptococcus (+ anaerobes). Presents with 'hot potato' voice, uvular deviation AWAY from abscess, trismus, drooling. Retropharyngeal abscess (RPA): infection of retropharyngeal lymph nodes — younger children (<4 years); presents with neck stiffness, stridor, fever, refusal to extend neck. Allergic rhinitis: IgE-mediated reaction to aeroallergens — perennial (dust mites, pet dander) vs. seasonal (pollens); cobblestone appearance of posterior pharynx, allergic shiners, nasal crease. Epiglottitis: life-threatening supraglottic inflammation — now rare due to Hib vaccine; Haemophilus influenzae type b historically; now Strep most common. Tripod/sniffing position, drooling, stridor — do NOT examine throat (laryngospasm).",
    diagnosticCriteria:
      "PTA: clinical diagnosis; needle aspiration or I&D is both diagnostic and therapeutic. Intraoral ultrasound or CT for equivocal cases. RPA: CT neck with contrast (rim-enhancing collection in retropharyngeal space). Allergic rhinitis: clinical; skin prick testing or serum specific IgE (RAST) for allergen identification. Epiglottitis: lateral neck X-ray — 'thumbprint sign' (swollen epiglottis); do NOT get X-ray if hemodynamically unstable — go directly to OR for airway management. Secure airway in OR with ENT and anesthesia present before any examination.",
    presentation: {
      chiefComplaint: [
        "\"My child's voice sounds strange and they can't open their mouth all the way\"",
        "\"My child has a runny nose all year and keeps rubbing their nose\"",
        "\"My child is drooling, won't swallow, and is sitting upright leaning forward\"",
      ],
      associatedSymptoms: [
        "PTA: severe unilateral sore throat, odynophagia, trismus (can't open mouth), muffled 'hot potato' voice, drooling, uvular deviation",
        "Allergic rhinitis: clear rhinorrhea, sneezing, nasal congestion, itchy/watery eyes, allergic salute (rubbing nose upward), allergic shiners (dark circles under eyes)",
        "Epiglottitis: sudden high fever, severe sore throat, drooling, tripod position (leaning forward on hands), stridor, toxic-appearing",
      ],
      demographics: "PTA: adolescents and young adults (most common between 15–35). Allergic rhinitis: 10–15% of US children; strong family history. Epiglottitis: now rare (Hib vaccine); any age, especially unvaccinated.",
    },
    distinguishingFeatures:
      "PTA vs. pharyngitis: pharyngitis = bilateral tonsillar inflammation, no trismus, uvula midline; PTA = unilateral swelling, trismus, uvular deviation AWAY from abscess, 'hot potato' voice. RPA vs. PTA: RPA = younger child (<4), posterior pharyngeal wall bulging, stiff neck; PTA = older, peritonsillar bulge, uvular deviation. Epiglottitis vs. croup: epiglottitis = abrupt onset, toxic, no barking cough, do NOT examine throat; croup = barky cough, steeple sign, less toxic-appearing.",
    redFlags: [
      "Epiglottitis: do NOT examine throat, no tongue depressor — can precipitate laryngospasm; secure airway in OR immediately",
      "RPA or PTA with airway compromise (stridor, drooling, inability to handle secretions): emergent airway management before I&D",
      "PTA unresponsive to needle aspiration: surgical drainage, tonsillectomy consideration",
    ],
    mnemonics: [
      {
        name: "Croup vs. Epiglottitis vs. PTA",
        content:
          "CROUP:\nC — Cold (gradual onset)\nR — Responds to racemic epinephrine/steroids\nO — Obstructive (subglottic, steeple sign)\nU — Under 5 years (parainfluenza)\nP — Barky cough\n\nEPIGLOTTITIS:\nE — Emergency airway\nP — Posture (tripod, sniffing)\nI — Immunization status (Hib vaccine gaps)\nG — Go to OR (do NOT examine)\nL — Looks toxic\n\nPTA: Hot potato voice + Uvular deviation AWAY from abscess = drain it",
      },
    ],
    pimpingQuestions: [
      "How do you distinguish peritonsillar abscess from retropharyngeal abscess?",
      "Why should you NOT use a tongue depressor in suspected epiglottitis?",
      "What is the 'thumbprint sign' on lateral neck X-ray?",
      "What is the treatment for allergic rhinitis — step-up approach?",
      "What organism historically caused epiglottitis before the Hib vaccine?",
    ],
  },

  // ─── Pulmonary ────────────────────────────────────────────────────────────

  {
    id: "peds-pneumonia",
    name: "Pediatric Pneumonia",
    icdCode: "J18.9",
    rotation: "pediatrics",
    category: "Pulmonary / Infectious",
    definition:
      "Community-acquired pneumonia (CAP) in children — etiology varies by age: Neonates (GBS, E. coli, Listeria); Infants 1–3 months (Chlamydia trachomatis — afebrile pneumonia, staccato cough; RSV, parainfluenza); Children 4 months–5 years (viral most common: RSV, parainfluenza; bacterial: S. pneumoniae most common); School-age/adolescents (Mycoplasma pneumoniae — 'walking pneumonia', most common atypical). S. pneumoniae: most common cause of lobar/bacterial CAP in children of all ages. RSV: most common cause of pneumonia in infants. Mycoplasma pneumoniae ('atypical'): gradual onset, school-age children, CXR findings worse than symptoms.",
    diagnosticCriteria:
      "Clinical: fever + tachypnea (most sensitive sign in children — RR >60 infants, >50 ages 1–5, >40 ages 5–12) + decreased breath sounds/crackles/consolidation. CXR: lobar consolidation (bacterial), interstitial infiltrates (viral/atypical), pleural effusion. Pulse oximetry. Blood culture (moderate-severe). Sputum culture in older children. Rapid RSV antigen, influenza testing. Procalcitonin/CRP: help distinguish viral from bacterial.",
    presentation: {
      chiefComplaint: [
        "\"My child has been coughing, breathing fast, and has a fever\"",
        "\"My toddler is breathing hard and their lips look bluish\"",
      ],
      associatedSymptoms: [
        "Fever, productive cough, tachypnea, increased work of breathing (retractions, nasal flaring, grunting)",
        "Auscultation: decreased breath sounds, crackles, bronchial breath sounds over consolidation, egophony (E to A change)",
        "Atypical (Mycoplasma): gradual onset, dry cough, low-grade fever, headache, mild respiratory symptoms — 'walking pneumonia', may have bullous myringitis",
        "Chlamydia trachomatis (infant): staccato cough, afebrile, eosinophilia, prominent chest X-ray hyperinflation",
      ],
      demographics: "RSV: infants <2 years, peak in winter. S. pneumoniae: all ages; unvaccinated at higher risk. Mycoplasma: school-age (5–15 years), can cause small epidemics in schools/summer camps.",
    },
    distinguishingFeatures:
      "Tachypnea is the most sensitive sign of pneumonia in children. Lobar consolidation on CXR = bacterial etiology until proven otherwise. Atypical pneumonia (Mycoplasma): insidious onset, CXR disproportionately worse than clinical picture, no response to beta-lactams → treat with azithromycin. Chlamydia trachomatis infant pneumonia: afebrile + staccato cough + eosinophilia = treat with erythromycin (or azithromycin).",
    redFlags: [
      "SpO2 <90%, severe tachypnea, grunting, significant retractions: hospitalization needed",
      "Pleural effusion on CXR: empyema risk → may need thoracentesis or chest tube",
      "Rapid deterioration in infant with RSV: respiratory failure → mechanical ventilation consideration",
    ],
    mnemonics: [
      {
        name: "Pneumonia Etiology by Age — VIRAL STREP MYCO",
        content:
          "Neonates: GBS, E. coli, Listeria\nInfants 1–3 months: RSV, Chlamydia trachomatis (afebrile, staccato cough)\n1 month–5 years: RSV, parainfluenza, then S. pneumoniae\n5–18 years: Mycoplasma pneumoniae (#1 atypical)\nAll ages: S. pneumoniae = #1 bacterial cause\n\nTachypnea = most sensitive sign of pneumonia in children\nAtypical = azithromycin\nBacterial CAP = amoxicillin (mild) or ampicillin/ceftriaxone (hospitalized)",
      },
    ],
    pimpingQuestions: [
      "What is the most common bacterial cause of CAP in children?",
      "What organism causes 'walking pneumonia' and how do you treat it?",
      "What is the classic presentation of Chlamydia trachomatis pneumonia in infants?",
      "What is the most sensitive sign of pneumonia in children?",
      "What features of pneumonia in a child require hospitalization?",
    ],
  },

  {
    id: "peds-cystic-fibrosis",
    name: "Cystic Fibrosis",
    icdCode: "E84.9",
    rotation: "pediatrics",
    category: "Pulmonary / Genetic",
    definition:
      "Autosomal recessive mutation in CFTR gene (chromosome 7q31) — most common: ΔF508 (phenylalanine deletion at codon 508). CFTR = chloride channel; dysfunction → thick viscous secretions in lungs, pancreas, liver, GI tract, reproductive system. Pulmonary: chronic obstructive lung disease → Pseudomonas aeruginosa (most important pathogen), S. aureus (early); bronchiectasis, repeated exacerbations. GI: exocrine pancreatic insufficiency (steatorrhea, fat-soluble vitamin deficiency — ADEK), meconium ileus (newborn), DIOS (distal intestinal obstruction syndrome). Sweat glands: increased sweat chloride (pathognomonic). Male infertility: bilateral absence of vas deferens (CBAVD). Life expectancy ~50 years with modern therapy.",
    diagnosticCriteria:
      "Newborn screening: immunoreactive trypsinogen (IRT) — positive triggers sweat chloride test. Sweat chloride >60 mEq/L = diagnostic; 30–59 = borderline; <30 = normal. CFTR gene testing: confirmation, carrier detection. Pulmonary function tests: obstructive pattern (FEV1/FVC <0.70); FEV1 = best predictor of survival. Annual PFTs, sputum culture, CXR. Hyperinflation and bronchiectasis on chest imaging (CT shows dilated bronchi with thick walls, mucus plugging).",
    presentation: {
      chiefComplaint: [
        "\"My newborn hasn't passed his first stool\" (meconium ileus)",
        "\"My child has chronic cough with thick sputum and frequent lung infections\"",
        "\"My child is not gaining weight despite eating a lot\"",
      ],
      associatedSymptoms: [
        "Pulmonary: productive cough (thick green/yellow), recurrent pneumonia (Staph, then Pseudomonas), wheezing, dyspnea, digital clubbing (chronic hypoxia), barrel chest",
        "GI: steatorrhea, malabsorption, failure to thrive, bulky/greasy/foul-smelling stools, meconium ileus (newborn — no stool in first 24–48h), rectal prolapse",
        "Sinus: chronic sinusitis, nasal polyps",
        "Pancreatic insufficiency: fat-soluble vitamin deficiency (vitamins A, D, E, K) → night blindness, rickets, neuropathy, coagulopathy",
        "Male: azoospermia (CBAVD) — infertile but can still have erection/libido",
      ],
      demographics: "Most common life-shortening autosomal recessive disease in Caucasians (1:2,500–3,500 white births). Carrier frequency 1:25 in European-Americans. ΔF508 mutation in ~70% of CF alleles in US.",
    },
    distinguishingFeatures:
      "CF in infant: meconium ileus (10% of CF newborns — obstruction at terminal ileum) + failure to thrive + recurrent respiratory infections. CF vs. asthma: CF has productive cough, failure to thrive, abnormal sweat test; asthma = episodic wheeze, normal sweat test. CFTR modulator therapy (ivacaftor, lumacaftor-ivacaftor, elexacaftor-tezacaftor-ivacaftor — 'triple therapy'): revolutionized CF — targets specific mutations to improve CFTR function.",
    redFlags: [
      "Meconium ileus: no meconium in first 24h → contrast enema (Gastrografin — hyperosmolar, draws water into bowel) or surgical intervention",
      "CF exacerbation (↑ cough, ↑ sputum, ↓ FEV1, ↑ respiratory rate): IV anti-Pseudomonal antibiotics (tobramycin + piperacillin-tazobactam or ceftazidime)",
      "Hemoptysis in CF: bronchial artery embolization for massive; never aggressive chest PT during active bleeding",
      "Cor pulmonale (late disease): severe pulmonary HTN from chronic hypoxia — supplemental O2, diuretics, lung transplant evaluation",
    ],
    mnemonics: [
      {
        name: "CF — CFTR and ABCDEF Complications",
        content:
          "CFTR = Chromosome 7, ΔF508 most common\nAutosomal Recessive\nSweat Chloride >60 = Diagnostic\n\nComplications — ABCDEF:\nA — Azoospermia (male infertility, CBAVD)\nB — Bronchiectasis / Pseudomonas\nC — Chronic pancreatitis / insufficiency\nD — Diabetes (CF-related diabetes, CFRD)\nE — Exocrine pancreatic insufficiency → ADEK deficiency\nF — Failure to thrive + Meconium ileus at birth\n\nModulators: Triple therapy (Trikafta) = most effective for ΔF508",
      },
    ],
    pimpingQuestions: [
      "What is the most common mutation in CF and what protein does CFTR encode?",
      "What is the diagnostic threshold for sweat chloride in CF?",
      "What organisms chronically colonize the lungs of CF patients?",
      "What is meconium ileus and how is it treated?",
      "What fat-soluble vitamins are deficient in CF and why?",
    ],
  },

  {
    id: "peds-pertussis",
    name: "Pertussis (Whooping Cough)",
    icdCode: "A37.00",
    rotation: "pediatrics",
    category: "Pulmonary / Infectious",
    definition:
      "Bordetella pertussis: Gram-negative coccobacillus; highly contagious respiratory infection. Three clinical stages: (1) Catarrhal stage (1–2 weeks): URI symptoms, low-grade fever — most contagious; (2) Paroxysmal stage (2–6 weeks): characteristic paroxysms of coughing followed by inspiratory 'whoop' (children) or post-tussive vomiting/apnea (infants — may not have classic whoop); (3) Convalescent stage (weeks–months): gradual improvement. Most dangerous in infants <6 months who cannot receive full vaccine series — apnea, pneumonia, hypoxia, death. Tdap vaccine: booster for adolescents and adults (cocooning strategy to protect infants).",
    diagnosticCriteria:
      "Nasopharyngeal swab: PCR (most sensitive, use in paroxysmal stage) or culture (gold standard but takes weeks, best in catarrhal stage). CBC: lymphocytosis (very high WBC >30,000 with lymphocyte predominance — characteristic). Serologic IgG pertussis toxin antibody (for retrospective diagnosis). Clinical diagnosis often sufficient in paroxysmal stage. Whooping cough should be reported to public health authorities.",
    presentation: {
      chiefComplaint: [
        "\"My child has been coughing for weeks and turns blue during coughing fits\"",
        "\"My baby keeps stopping breathing after coughing\"",
      ],
      associatedSymptoms: [
        "Catarrhal: runny nose, sneezing, mild cough — appears like common cold",
        "Paroxysmal: severe coughing paroxysms (strings of coughs without breathing) → inspiratory whoop (airway reopening) → post-tussive vomiting → cyanosis during attacks",
        "Infants: apnea, cyanosis, poor feeding — may NOT have classic whoop",
        "Lymphocytosis: very high WBC (30,000–50,000+) with predominant lymphocytes",
      ],
      demographics: "Highest morbidity/mortality in infants <6 months (too young for complete vaccine series). Adolescents and adults: milder disease, often unrecognized — reservoir for transmission to infants. Waning immunity after vaccination contributes to adolescent disease.",
    },
    distinguishingFeatures:
      "Classic whoop is absent in young infants (too weak to generate the whoop) — present as apnea. Very high WBC with lymphocytosis (not neutrophilia like bacterial pneumonia). 'Chinese restaurant syndrome' — coughing triggered by eating. Treatment: azithromycin (drug of choice — clarithromycin or erythromycin alternatives); treat household contacts regardless of vaccination status. PCR most useful in paroxysmal stage; culture in catarrhal stage.",
    redFlags: [
      "Infants <6 months with pertussis: hospitalization, cardiac monitoring, respiratory support; leukocytosis >50,000 = very poor prognosis (ECMO may be needed)",
      "Household contacts of infant cases: immediate post-exposure prophylaxis with azithromycin (regardless of vaccination status)",
      "Secondary bacterial pneumonia (most common cause of death): worsening fever + lobar infiltrate in a pertussis patient",
    ],
    mnemonics: [
      {
        name: "Pertussis 3 Stages — CPC",
        content:
          "C — Catarrhal (1–2 wks): cold-like, MOST CONTAGIOUS\nP — Paroxysmal (2–6 wks): Whoop + Post-tussive vomiting + cyanosis\nC — Convalescent (weeks–months): gradual improvement\n\nInfants: No whoop → Apnea (watch for apnea in infants!)\n\nLab clue: VERY HIGH WBC (30–50k) with LYMPHOCYTOSIS\n\nTreatment: Azithromycin (shortens contagious period; most effective if given in catarrhal stage)\n\nPrevention: Tdap booster + Cocooning strategy",
      },
    ],
    pimpingQuestions: [
      "What are the three stages of pertussis and which is most contagious?",
      "Why don't young infants have the characteristic whoop?",
      "What CBC finding is characteristic of pertussis?",
      "What is the treatment and post-exposure prophylaxis for pertussis?",
      "What is 'cocooning' and why is it used for pertussis prevention?",
    ],
  },

  // ─── GI ───────────────────────────────────────────────────────────────────

  {
    id: "peds-gi",
    name: "Pediatric GI: GERD, Appendicitis, Hirschsprung, Celiac, and Constipation",
    icdCode: "K21.0",
    rotation: "pediatrics",
    category: "Gastroenterology / Pediatric",
    definition:
      "GERD in infants: physiologic reflux (spitting up) vs. pathologic GERD (weight loss, irritability, apnea, aspiration, esophagitis). Treat physiologic reflux with positioning, thickened feeds. Appendicitis in children: RLQ pain + fever + nausea; perforation rate much higher in young children (omentum thin, less able to wall off — up to 80–90% in <2 year olds). Hirschsprung disease: congenital absence of ganglion cells in distal colon (rectum always affected) → functional obstruction; associated with Down syndrome. Celiac disease: immune-mediated enteropathy triggered by gluten (wheat, rye, barley) → villous atrophy → malabsorption; associated with HLA-DQ2/DQ8; tissue transglutaminase IgA (tTG-IgA) screening test. Functional constipation: most common in children; encopresis (fecal soiling) from overflow incontinence around hard stool in rectum.",
    diagnosticCriteria:
      "GERD: clinical in infants; pH probe, impedance study, or endoscopy if needed. Appendicitis: Alvarado/PAS score; ultrasound (first-line in children — avoids radiation); CT if US inconclusive. Hirschsprung: rectal biopsy (gold standard — absence of ganglion cells + submucosal nerve hypertrophy); barium enema shows transition zone (dilated proximal colon, narrow distal/aganglionic segment). Celiac: tTG-IgA + total IgA (rule out selective IgA deficiency — gives false negative); confirm with upper endoscopy + small bowel biopsy (villous atrophy, crypt hyperplasia, intraepithelial lymphocytes). Constipation: clinical; abdominal X-ray for severe impaction.",
    presentation: {
      chiefComplaint: [
        "\"My baby spits up constantly and is fussy\" (GERD)",
        "\"My child hasn't passed meconium and has a distended belly\" (Hirschsprung)",
        "\"My child has diarrhea and isn't growing well\" (Celiac)",
        "\"My child keeps soiling their underwear\" (Encopresis)",
      ],
      associatedSymptoms: [
        "GERD: recurrent emesis, weight loss, irritability, arching (Sandifer syndrome — back arching associated with esophageal pain), feeding refusal, apnea",
        "Hirschsprung: failure to pass meconium within 48h (classic), abdominal distension, bilious vomiting, explosive diarrhea after rectal exam (decompression of obstruction)",
        "Celiac: diarrhea, bloating, failure to thrive, iron deficiency anemia, short stature, dermatitis herpetiformis (intensely pruritic vesicular rash on extensor surfaces)",
        "Appendicitis in young children: vague abdominal pain (not always RLQ), fever, vomiting, diarrhea — high perforation rate",
      ],
      demographics: "GERD: universal in infants, typically resolves by 12–18 months. Hirschsprung: 1:5,000 births; male 4:1; 10–15% associated with Down syndrome. Celiac: 1% prevalence; HLA-DQ2 (95%) or DQ8; associated with Type 1 DM, thyroid disease, Down syndrome, Turner syndrome.",
    },
    distinguishingFeatures:
      "Hirschsprung vs. functional constipation: Hirschsprung = no stool in rectum on rectal exam (empty rectum — stool above aganglionic segment), failure to pass meconium in first 48h, history from birth; functional = stool palpable in rectum, encopresis, onset after toilet training. Celiac vs. other malabsorption: celiac = specifically triggered by gluten, positive anti-tTG IgA, biopsy confirms. Treatment: strict lifelong gluten-free diet (wheat, rye, barley — remember 'W-R-B' NOT oats unless cross-contaminated).",
    redFlags: [
      "Hirschsprung with enterocolitis (Hirschsprung-associated enterocolitis, HAEC): explosive diarrhea + fever + distension → septic shock risk; IV antibiotics + rectal washouts urgently",
      "Appendicitis in child <5: very high perforation rate; lower threshold for CT if ultrasound non-diagnostic",
      "Celiac crisis: severe diarrhea + dehydration + electrolyte abnormalities + malnutrition; IV steroids sometimes needed",
      "Dermatitis herpetiformis: gluten-free diet is treatment (dapsone for skin lesions)",
    ],
    mnemonics: [
      {
        name: "Hirschsprung vs. Functional Constipation",
        content:
          "HIRSCHSPRUNG (Think: No ganglion cells → No movement → No stool in rectum):\nH — History from birth (no meconium in 48h)\nI — Inherited (AD incomplete penetrance)\nR — Rectal exam: EMPTY rectum (stool is ABOVE the blockage)\nS — Squirt of stool upon rectal exam (decompression)\n\nFUNCTIONAL CONSTIPATION:\nF — Fecal impaction IN rectum\nU — Usually starts after toilet training\nN — Not from birth\nC — Common + benign → PEG (Miralax)\n\nCeliac: tTG-IgA → confirm with biopsy\nGluten-free diet = only treatment",
      },
    ],
    pimpingQuestions: [
      "What is the difference between physiologic reflux and GERD in infants?",
      "Why do young children have higher appendicitis perforation rates?",
      "What does the rectal exam finding differentiate Hirschsprung from functional constipation?",
      "What is the screening test for celiac disease and what confirms the diagnosis?",
      "What foods must be avoided in celiac disease?",
    ],
  },

  {
    id: "peds-neonatal-jaundice",
    name: "Neonatal Hyperbilirubinemia",
    icdCode: "P59.9",
    rotation: "pediatrics",
    category: "Gastroenterology / Neonatal",
    definition:
      "Jaundice in the newborn — most common condition requiring medical evaluation and treatment in neonates. Physiologic jaundice: appears day 2–3 (unconjugated/indirect bilirubin elevation from RBC breakdown + immature liver conjugation); resolves by day 7 (term) or day 14 (preterm). Pathologic jaundice: appears <24 hours (think hemolysis — ABO incompatibility, Rh disease, G6PD deficiency), or very high levels, or conjugated (direct) hyperbilirubinemia (biliary atresia, neonatal hepatitis, sepsis). Kernicterus: unconjugated bilirubin deposits in basal ganglia/brain → permanent neurological damage (athetoid cerebral palsy, hearing loss, intellectual disability).",
    diagnosticCriteria:
      "Total serum bilirubin (TSB) or transcutaneous bilirubinometry. Bhutani nomogram: plots TSB vs. age in hours → treatment thresholds for phototherapy and exchange transfusion based on risk factors. Coombs test (DAT): positive in hemolytic jaundice (ABO incompatibility, Rh disease). CBC + reticulocyte count: hemolysis. Blood type + Rh status (mother and infant). Fractionated bilirubin: if conjugated fraction >20% of total or >2 mg/dL → investigate for biliary atresia (urgent — acholic stools + hepatomegaly + direct hyperbilirubinemia → HIDA scan + liver biopsy + Kasai procedure before 60 days).",
    presentation: {
      chiefComplaint: [
        "\"My baby looks yellow\" or \"The nurses say my baby is jaundiced\"",
        "\"My baby is yellow and is not waking up to feed\"",
      ],
      associatedSymptoms: [
        "Yellow sclera/skin progressing cephalocaudally (from head to feet — higher bilirubin correlates with lower extent)",
        "Poor feeding, decreased activity with rising bilirubin",
        "Dark urine + pale/acholic stools = conjugated hyperbilirubinemia (cholestatic — urgent workup)",
        "Hydrops fetalis (severe Rh disease): massive hemolysis → severe edema, ascites, pleural effusion",
        "Kernicterus signs: lethargy, hypotonia, high-pitched cry, opisthotonus (backward arching), seizures, hearing loss",
      ],
      demographics: "60% of term newborns develop visible jaundice. Risk factors for severe hyperbilirubinemia: isoimmune hemolytic disease (ABO or Rh incompatibility), G6PD deficiency, breastfeeding jaundice, late preterm (35–36 weeks), previous sibling with severe jaundice, East Asian ethnicity.",
    },
    distinguishingFeatures:
      "Jaundice <24h = always pathologic (hemolysis). Physiologic: day 2–3, peaks day 3–5, resolves by day 7. Breastfeeding jaundice (early, week 1): inadequate intake, poor caloric intake → treat with more frequent nursing or supplemental formula. Breast milk jaundice (late, weeks 2–3): substance in breast milk inhibits conjugation → can continue breastfeeding, levels should drop. Biliary atresia: conjugated hyperbilirubinemia + acholic (clay-colored) stools + hepatomegaly → Kasai procedure before 60 days of life (critical window).",
    redFlags: [
      "Jaundice in first 24 hours: always pathologic — hemolysis, sepsis → immediate evaluation",
      "Conjugated (direct) hyperbilirubinemia in any neonate: biliary atresia or metabolic/infectious — urgent hepatology referral; Kasai procedure before 60 days",
      "Signs of kernicterus: immediate exchange transfusion — irreversible brain damage if delayed",
      "Bhutani nomogram high-risk zone: phototherapy immediately; exchange transfusion if >25 mg/dL or neurological signs",
    ],
    mnemonics: [
      {
        name: "Neonatal Jaundice Classification",
        content:
          "Physiologic: Day 2–3, peaks day 3–5, resolves by day 7\n→ Phototherapy if above Bhutani nomogram threshold\n\nPathologic (think '24–7-14'):\n<24h = hemolysis (ABO, Rh, G6PD)\n>7 days term, >14 days preterm = evaluate further\nDirect bilirubin = ALWAYS pathologic → urgent workup\n\nBiliary Atresia: Acholic stools + Direct bili + Hepatomegaly\n→ HIDA scan + Kasai procedure before 60 days!\n\nKernicterus = bilirubin deposits in basal ganglia\n→ Athetoid CP + Hearing loss + Intellectual disability",
      },
    ],
    pimpingQuestions: [
      "When is jaundice in a newborn considered pathologic?",
      "What is the difference between breastfeeding jaundice and breast milk jaundice?",
      "What is kernicterus and what are its sequelae?",
      "How do you diagnose biliary atresia and what is the time-critical treatment?",
      "What are the risk factors for severe neonatal hyperbilirubinemia?",
    ],
  },

  // ─── Dermatology ─────────────────────────────────────────────────────────

  {
    id: "peds-derm-infections",
    name: "Pediatric Skin Infections: Impetigo, Tinea, Scabies, and Molluscum",
    icdCode: "L01.00",
    rotation: "pediatrics",
    category: "Dermatology / Infectious",
    definition:
      "Impetigo: most common bacterial skin infection in children — non-bullous (honey-crusted lesions, Strep or Staph) and bullous (Staph aureus toxin, large fluid-filled blisters). Tinea: dermatophyte fungal infections — tinea capitis (scalp, children; kerion = inflammatory nodular reaction; treat with oral antifungals — topical does NOT penetrate hair shaft), tinea corporis (ringworm), tinea pedis (athlete's foot). Scabies: Sarcoptes scabiei mite — intensely pruritic, worse at night, web spaces/wrists/genitalia; treat with permethrin 5% cream. Molluscum contagiosum: poxvirus — umbilicated papules, self-limited in immunocompetent children (resolves in 6–18 months); treat only if extensive or immunocompromised. Pediculosis capitis (head lice): pruritic scalp, nits on hair shafts; treat with permethrin 1% or spinosad.",
    diagnosticCriteria:
      "Impetigo: clinical; culture if MRSA suspected or treatment failure. Tinea capitis: Wood's lamp (Microsporum fluoresces — but Trichophyton tonsurans, most common US, does NOT fluoresce); KOH prep of skin scraping (hyphae); fungal culture. Scabies: skin scraping and microscopy (mites/eggs/feces); clinical diagnosis sufficient. Molluscum: clinical (umbilicated papules); dermoscopy if uncertain.",
    presentation: {
      chiefComplaint: [
        "\"My child has honey-colored crusty sores around the mouth\"",
        "\"My child has a ring-shaped rash\"",
        "\"My child can't stop scratching at night\"",
        "\"My child has small bumps with a dimple in the center\"",
      ],
      associatedSymptoms: [
        "Impetigo: honey-crusted or golden-crusted lesions on face (around nose/mouth), very contagious, regional lymphadenopathy",
        "Bullous impetigo: large fragile bullae → erythematous raw base; if generalized: Staphylococcal scalded skin syndrome (SSSS)",
        "Tinea capitis: patchy alopecia with scaling; kerion = boggy inflammatory mass (looks infected but is allergic response to fungus)",
        "Scabies: intense pruritus (worse at night), linear burrows in web spaces of fingers, wrists, genitalia — entire family/close contacts usually affected",
        "Molluscum: multiple discrete umbilicated (central dimple) flesh-colored papules; spreads by autoinoculation",
      ],
      demographics: "Impetigo: preschool-age children (2–5 years); Strep can cause poststreptococcal GN (PSGN). Tinea capitis: school-age children; most common US species is Trichophyton tonsurans. Scabies: any age, outbreaks in daycare centers, nursing homes. Molluscum: children 2–12 years; immunocompromised → widespread lesions.",
    },
    distinguishingFeatures:
      "Tinea capitis treatment: MUST be oral (griseofulvin first-line or terbinafine) — topical antifungals do NOT penetrate hair follicle. Kerion: do NOT incise and drain (antifungal ± short-course steroids). SSSS vs. Stevens-Johnson syndrome: SSSS = positive Nikolsky's sign + skin splits at granular layer (superficial), mucous membranes SPARED, Staph toxin; SJS = mucous membranes ALWAYS involved, epidermal-dermal split. Scabies: treat all household contacts simultaneously with permethrin 5%.",
    redFlags: [
      "SSSS (Staphylococcal scalded skin syndrome): widespread skin sloughing in infant/child — hospitalize, IV antistaphylococcal antibiotics (oxacillin/nafcillin or vancomycin if MRSA), wound care",
      "Tinea capitis with kerion: treat with oral antifungals + short-course oral steroids (reduces scarring and permanent alopecia)",
      "Post-streptococcal GN from impetigo: hematuria + hypertension + edema 1–3 weeks after skin infection — supportive care; rheumatic fever does NOT follow skin strep (only throat strep)",
    ],
    mnemonics: [
      {
        name: "Tinea Capitis — Why Topical Fails",
        content:
          "Tinea capitis = ORAL antifungal (griseofulvin or terbinafine)\nNOT topical — cannot penetrate hair follicle\n\nKerion: Boggy inflamed mass on scalp\n→ Looks infected, but it's allergic\n→ Do NOT drain\n→ Antifungals + steroids\n\nSSS vs. SJS:\nSSS (SSSS): Mucous membranes SPARED, Staph toxin, Nikolsky's +\nSJS: Mucous membranes ALWAYS involved, drug reaction, Nikolsky's +\n\nScabies: Treat ENTIRE household at same time (permethrin 5%)",
      },
    ],
    pimpingQuestions: [
      "Why must tinea capitis be treated with oral rather than topical antifungals?",
      "What is a kerion and how should it be treated?",
      "How does SSSS differ from Stevens-Johnson syndrome?",
      "What is the treatment for scabies and why must you treat household contacts?",
      "What organisms cause non-bullous vs. bullous impetigo?",
    ],
  },

  {
    id: "peds-acne-varicella",
    name: "Acne Vulgaris and Varicella",
    icdCode: "L70.0",
    rotation: "pediatrics",
    category: "Dermatology / Common Conditions",
    definition:
      "Acne vulgaris: most common skin condition in adolescents — multifactorial (androgen-driven sebum production, Cutibacterium acnes colonization, follicular hyperkeratinization, inflammation). Types: comedonal (blackheads open, whiteheads closed), inflammatory (papules, pustules), nodular/cystic (most severe — risk of scarring). Varicella (chickenpox): Varicella-zoster virus (VZV) — primary infection; highly contagious (airborne + contact); rash classically 'dew drop on a rose petal' — vesicles on erythematous base in various stages (hallmark — simultaneous lesions at different stages). Herpes zoster (shingles): reactivation of latent VZV in dorsal root ganglion — dermatomal distribution, pain precedes rash; treat with valacyclovir within 72h.",
    diagnosticCriteria:
      "Acne: clinical grading (comedonal, mild inflammatory, moderate, severe/nodulocystic). Varicella: clinical diagnosis (pruritic vesicular rash in crops, fever); VZV PCR or DFA (direct fluorescent antibody) from vesicle scraping for atypical or immunocompromised cases. Tzanck smear: multinucleated giant cells (positive in both herpes simplex and VZV — does not distinguish).",
    presentation: {
      chiefComplaint: [
        "\"My teenager has pimples all over their face\"",
        "\"My child has an itchy rash with blisters in different stages\"",
      ],
      associatedSymptoms: [
        "Acne: comedones (blackheads/whiteheads), inflammatory papules/pustules, nodules/cysts; typically on face, upper chest, upper back; worsens premenstrually",
        "Varicella: prodrome 1–2 days (fever, malaise, headache) → rash begins on trunk → spreads to face and extremities → lesions in simultaneous stages (macules → papules → vesicles → crusts)",
        "Pruritic lesions; child is contagious until all lesions crusted over (usually 5–7 days after rash onset)",
        "Complications: secondary bacterial superinfection (S. aureus, GAS — impetigo), pneumonia, encephalitis, Reye syndrome (aspirin in varicella → do NOT give aspirin)",
      ],
      demographics: "Acne: 85% of adolescents 12–25 years; hormonal influence. Varicella: now rare in US due to varicella vaccine (2-dose schedule at 12–15 months and 4–6 years); unvaccinated children or immunocompromised at risk.",
    },
    distinguishingFeatures:
      "Varicella hallmark: MULTIPLE STAGES at same time (some crusting, some blistering, some new macules). Herpes simplex: localized, does not cover body like varicella. Acne grading determines treatment: comedonal → topical retinoids (tretinoin); mild-moderate inflammatory → topical benzoyl peroxide + topical antibiotics (clindamycin); moderate-severe → oral doxycycline (or tetracycline); severe nodulocystic → oral isotretinoin (Accutane — requires iPLEDGE program due to teratogenicity, monthly pregnancy tests).",
    redFlags: [
      "Varicella in immunocompromised patient (leukemia, HIV, chronic steroids): IV acyclovir immediately — can be fatal",
      "Aspirin + varicella = Reye syndrome risk: never give aspirin (or salicylates) to children with varicella or influenza",
      "Varicella during pregnancy: severe maternal pneumonia + congenital varicella syndrome (limb hypoplasia, skin scarring, neurologic deficits) → VZIG for exposures in susceptible pregnant women",
      "Isotretinoin (Accutane): severe teratogen (category X); requires pregnancy tests, two forms of contraception, monthly prescriptions (iPLEDGE program)",
    ],
    mnemonics: [
      {
        name: "Acne Treatment Ladder",
        content:
          "Mild (comedonal): Topical retinoids (tretinoin) ± benzoyl peroxide\nMild-Moderate (inflammatory): Add topical antibiotics (clindamycin)\nModerate (inflammatory): Oral antibiotics (doxycycline, tetracycline)\nSevere (nodulocystic): Oral isotretinoin (Accutane) — iPLEDGE\n\nFor females: OCP + spironolactone can help (anti-androgenic)\n\nVaricella: 'Dew drop on a rose petal'\nSimultaneous stages = diagnostic hallmark\nContagious until ALL lesions crusted\nNEVER give aspirin (Reye syndrome risk)\nTreatment: antiviral for high-risk; supportive care otherwise",
      },
    ],
    pimpingQuestions: [
      "What is the hallmark feature of varicella rash that distinguishes it from other viral exanthems?",
      "Why is aspirin contraindicated in varicella?",
      "What are the requirements for prescribing isotretinoin (iPLEDGE)?",
      "What is the acne treatment ladder from mild to severe?",
      "How do you manage varicella in an immunocompromised child?",
    ],
  },

  // ─── Infectious Disease ───────────────────────────────────────────────────

  {
    id: "peds-viral-exanthems",
    name: "Viral Exanthems: Roseola, Fifth Disease, HFMD, and Mononucleosis",
    icdCode: "B09",
    rotation: "pediatrics",
    category: "Infectious Disease / Viral",
    definition:
      "Roseola infantum (Exanthem Subitum): HHV-6 (rarely HHV-7) — infants 6 months–3 years; high fever for 3–5 days → sudden defervescence → rose-colored maculopapular rash on trunk. Rash appears AS fever breaks — hallmark. Erythema infectiosum (Fifth disease): Parvovirus B19 — school-age children; 'slapped cheek' appearance (bright red cheeks) → lacy reticular rash on body; aplastic crisis in patients with hemolytic anemia (SCD); hydrops fetalis if mother infected during pregnancy. Hand-foot-mouth disease (HFMD): Coxsackie A16 (classic) or Enterovirus 71 (more severe, neurological complications); painful oral ulcers + vesicular rash on palms and soles; very common in daycare. Infectious mononucleosis: Epstein-Barr virus (EBV) — adolescents; classic triad: fever + sore throat + lymphadenopathy; atypical lymphocytes; heterophile antibody (Monospot test — may be negative in young children/early disease); splenomegaly (avoid contact sports). Amoxicillin in mono → maculopapular rash (NOT true allergy).",
    diagnosticCriteria:
      "Roseola: clinical (post-fever rash). Fifth disease: clinical; parvovirus B19 IgM/IgG serology (for pregnant women and immunocompromised). HFMD: clinical. Mono: CBC (atypical lymphocytes >10%), heterophile antibody (Monospot — 85–90% sensitivity in adolescents), EBV-specific antibodies (VCA IgM/IgG, EA, EBNA) for confirmation; LFTs (hepatitis common); ultrasound for splenomegaly if exam equivocal.",
    presentation: {
      chiefComplaint: [
        "\"My baby had a high fever for 3 days and now has a rash\" (Roseola)",
        "\"My child's cheeks look like they were slapped\" (Fifth disease)",
        "\"My child has mouth sores and blisters on their hands and feet\" (HFMD)",
        "\"My teenager has a terrible sore throat, fever, and swollen glands for weeks\" (Mono)",
      ],
      associatedSymptoms: [
        "Roseola: high fever (>40°C) for 3–5 days, irritable infant, febrile seizures (most common cause of febrile seizures in infants), rash appears as fever breaks",
        "Fifth disease: bright red cheeks ('slapped cheeks'), low-grade fever, lacy reticular rash on trunk/extremities (may recur with sun/heat exposure), arthralgia (more in adults/adolescents)",
        "HFMD: fever → painful oral ulcers (anterior mouth — herpangina = posterior) → vesicular rash on palms, soles, buttocks",
        "Mono: fever, exudative pharyngitis (may look like strep), massive posterior cervical lymphadenopathy, splenomegaly, atypical lymphocytes, hepatitis (↑ LFTs), fatigue lasting weeks",
      ],
      demographics: "Roseola: peak 6–18 months. Fifth disease: school-age children 5–14. HFMD: <5 years, outbreaks in daycare settings. Mono: adolescents and young adults (15–25 peak).",
    },
    distinguishingFeatures:
      "Roseola: rash AFTER fever breaks (most characteristic). Fifth disease: 'slapped cheeks' + lacy rash + pregnant women at risk (parvovirus B19 → hydrops fetalis). HFMD: palms + soles involvement (distinguishes from herpangina which is only posterior oral lesions). Mono: avoid contact sports for 3–4 weeks (splenic rupture risk — most serious complication); do NOT give amoxicillin/ampicillin (causes diffuse maculopapular rash). Monospot can be negative in young children (<4 years) and early in disease — use EBV-specific antibodies.",
    redFlags: [
      "Parvovirus B19 in patient with hemolytic anemia (SCD, hereditary spherocytosis): aplastic crisis — sudden severe anemia from cessation of erythropoiesis → transfusion support needed",
      "Parvovirus B19 exposure in pregnant woman: IgM serology → if infected, fetal ultrasound for hydrops fetalis q1–2 weeks for 8–10 weeks",
      "Mono with severe airway obstruction from massive tonsils: steroids (dexamethasone) to reduce tonsillar swelling; ENT evaluation",
      "Monospot positive + splenomegaly: no contact sports, heavy lifting, or strenuous activity for minimum 3–4 weeks (risk of splenic rupture)",
      "EV71 HFMD: watch for neurological complications (brainstem encephalitis, pulmonary edema) in high-risk areas (Southeast Asia)",
    ],
    mnemonics: [
      {
        name: "Viral Exanthem Memory Chart",
        content:
          "ROSEOLA (HHV-6): Rash Rises After fever breaks (3 days fever → defervescence → rash)\nFIFTH DISEASE (Parvo B19): Slapped Cheeks + Lacy rash + Aplastic crisis in SCD\nHFMD (Coxsackie A16): Hands + Feet + Mouth (palms/soles/oral)\nMONO (EBV): Monospot + atypical lymphocytes + No amoxicillin + No sports\n\nPregnancy Dangers:\nRubella = birth defects\nParvo B19 = hydrops fetalis\nCMV = #1 congenital infection\nToxoplasma = chorioretinitis",
      },
    ],
    pimpingQuestions: [
      "What is the characteristic timing of the rash in roseola?",
      "What is the danger of parvovirus B19 in patients with sickle cell disease?",
      "Why should you avoid giving amoxicillin in a patient with mono?",
      "What is the most serious complication of mono and how long should contact sports be avoided?",
      "What distinguishes HFMD from herpangina?",
    ],
  },

  {
    id: "peds-sepsis-fever",
    name: "Sepsis and Fever in the Infant",
    icdCode: "P36.9",
    rotation: "pediatrics",
    category: "Infectious Disease / Sepsis",
    definition:
      "Fever in infants <3 months is a medical emergency — immature immune system cannot localize infection. Risk-stratified approach by age: <28 days: full sepsis workup + empiric antibiotics (all febrile neonates — high risk); 29–60 days: stratify by risk criteria (Rochester, Philadelphia, Boston criteria, or Step-by-Step); 61–90 days: lower risk, may be observed with follow-up if reliable caregiver and low-risk criteria. Sepsis in pediatrics: dysregulated immune response to infection → organ dysfunction. Neonatal sepsis: early-onset (<72h — GBS, E. coli, Listeria); late-onset (>72h — GBS, Staph, gram-negatives). Pediatric sepsis: S. pneumoniae, H. influenzae (now rare due to vaccine), N. meningitidis.",
    diagnosticCriteria:
      "Full sepsis workup: CBC, blood culture, urinalysis + urine culture (catheterization), CSF (lumbar puncture — cell count, glucose, protein, Gram stain, culture), CXR. Procalcitonin + CRP: biomarkers for invasive bacterial infection risk. Low-risk criteria (Rochester): well-appearing, previously healthy, WBC 5,000–15,000, band count <1,500, UA with <10 WBC/hpf, stool with <5 WBC/hpf if diarrhea. Pediatric SIRS/Sepsis: HR, RR, temperature, and WBC thresholds adjusted by age. Early goal-directed therapy: fluid resuscitation (20 mL/kg normal saline boluses), vasopressors if fluid-refractory.",
    presentation: {
      chiefComplaint: [
        "\"My 3-week-old has a temperature of 38.1°C (100.6°F)\"",
        "\"My infant is not feeding well and seems lethargic\"",
      ],
      associatedSymptoms: [
        "Febrile infant: fever ≥38.0°C (rectal temperature in <3 months) is the threshold — any fever in neonate (<28 days) requires full workup",
        "Septic infant: poor feeding, irritability or paradoxical irritability (worse when held — meningismus), bulging fontanelle, decreased activity, hypotonia, poor perfusion",
        "Meningococcemia: petechial/purpuric rash that does not blanch — N. meningitidis bacteremia — empiric ceftriaxone immediately",
        "Early-onset neonatal sepsis: respiratory distress, temperature instability, poor feeding — maternal risk factors (GBS+, prolonged ROM, chorioamnionitis)",
      ],
      demographics: "Febrile neonate: 3% prevalence of serious bacterial infection (SBI) in neonates. GBS most common cause of early-onset neonatal sepsis in US. E. coli most common cause of neonatal meningitis. N. meningitidis: adolescents/young adults — outbreaks in college dormitories.",
    },
    distinguishingFeatures:
      "Any temperature ≥38°C rectally in infant <28 days: full sepsis workup + empiric antibiotics (ampicillin + gentamicin ± cefotaxime). Paradoxical irritability: infant cries MORE when picked up (due to meningeal irritation from movement) — classic sign of bacterial meningitis. Petechial rash in febrile child: meningococcemia until proven otherwise → ceftriaxone NOW before workup results. Well-appearing 29–60 day old with fever: use structured approach (Rochester criteria) to risk-stratify — may avoid lumbar puncture if low-risk and reliable follow-up.",
    redFlags: [
      "Any febrile neonate <28 days: FULL workup + IV ampicillin + gentamicin (do NOT observe)",
      "Petechial/purpuric non-blanching rash in febrile child: N. meningitidis until proven otherwise → IV ceftriaxone immediately",
      "Signs of septic shock (hypotension, altered consciousness, poor perfusion): 20 mL/kg NS bolus + vasopressors + broad-spectrum antibiotics",
      "Bulging fontanelle + fever: meningitis → LP (unless signs of herniation → CT first)",
    ],
    mnemonics: [
      {
        name: "Fever in Infant Age-Based Approach",
        content:
          "< 28 days: Full workup ALWAYS + Ampicillin + Gentamicin (ALL febrile neonates)\n28–60 days: Risk stratify (Rochester/Step-by-Step) → Low risk can be observed with follow-up\n61–90 days: Lower threshold for observation if low-risk + reliable follow-up\n\nEarly-onset neonatal sepsis (<72h): GBS, E. coli, Listeria\nLate-onset neonatal sepsis (>72h): GBS, Staph, gram-negatives\n\nPetechiae + Fever = Meningococcemia → Ceftriaxone NOW\nParadoxical irritability = Meningitis sign\nBulging fontanelle = Increased ICP → LP needed",
      },
    ],
    pimpingQuestions: [
      "What is the management of a febrile neonate (< 28 days)?",
      "What organisms cause early-onset vs. late-onset neonatal sepsis?",
      "What is paradoxical irritability and what does it suggest?",
      "What is the significance of a non-blanching petechial rash in a febrile child?",
      "What are the Rochester low-risk criteria for febrile infants?",
    ],
  },

  // ─── Growth and Development ───────────────────────────────────────────────

  {
    id: "peds-development",
    name: "Developmental Milestones, Failure to Thrive, and SIDS",
    icdCode: "Z00.110",
    rotation: "pediatrics",
    category: "Growth and Development",
    definition:
      "Developmental milestones: expected skills by age — gross motor, fine motor, language, and social/personal domains. Key ages: 2 months (smile, head control); 4 months (rolls front to back, coos); 6 months (sits with support, babbles); 9 months (object permanence, pincer grasp beginning); 12 months (walks with support, 1–3 words, points); 18 months (walks well, 10–15 words, stack 3–4 blocks); 2 years (runs, 2-word phrases, 50+ words); 3 years (tricycle, 3-word sentences); 4 years (hops, draws person 4 parts); 5 years (skips, 10-word sentences). Failure to thrive (FTT): inadequate weight gain — organic (cardiac, renal, malabsorption) vs. non-organic (psychosocial — most common). SIDS (Sudden Unexplained Infant Death): leading cause of post-neonatal infant mortality; peak 2–4 months; ABC prevention: Alone, Back, Crib (firm surface, no soft bedding).",
    diagnosticCriteria:
      "Developmental screening: M-CHAT (Modified Checklist for Autism in Toddlers, 16–30 months), ASQ (Ages and Stages Questionnaire), Bayley Scales. FTT: weight <3rd–5th percentile or weight crossing ≥2 major percentiles on growth chart. Labs for FTT: CBC, metabolic panel, urinalysis, thyroid function, lead level, celiac screen (tTG-IgA). FTT evaluation: 3-day food diary, feeding observation, social history. SIDS: diagnosis of exclusion on autopsy — no identifiable cause.",
    presentation: {
      chiefComplaint: [
        "\"My child isn't walking or talking like other kids his age\"",
        "\"My baby isn't gaining weight\"",
        "\"My infant was found unresponsive in his crib\"",
      ],
      associatedSymptoms: [
        "Developmental delay: not meeting age-appropriate milestones across one or more domains",
        "FTT: poor weight gain, crossing percentiles downward, irritability (hunger), edema (kwashiorkor — protein deficiency), hair/skin changes",
        "SIDS risk factors: prone sleeping, soft bedding, co-sleeping, maternal smoking, low birth weight, prematurity, pacifier non-use (pacifier is protective)",
      ],
      demographics: "SIDS: peak age 2–4 months; African American and Native American infants at higher risk; more common in winter. FTT: most commonly non-organic (psychosocial/behavioral feeding difficulties). Developmental delay: 10–15% of children have some form of delay.",
    },
    distinguishingFeatures:
      "Global developmental delay vs. autism: global delay = behind in ALL domains; autism = social communication deficit + restricted/repetitive behaviors (social domain disproportionately affected). Non-organic FTT: normal appetite and activity, improves with supervised feeding in hospital; growth spurt with adequate nutrition. Organic FTT: underlying disease (CHD, renal tubular acidosis, cystic fibrosis) doesn't improve with nutrition alone. SIDS: 'Back to Sleep' campaign reduced SIDS deaths by 50%.",
    redFlags: [
      "Loss of previously acquired developmental milestones: regression (not just delay) suggests neurodegenerative disease (Rett syndrome, Tay-Sachs, lead poisoning) — urgent neurological evaluation",
      "FTT with signs of neglect or abuse: mandatory child protective services report",
      "SIDS near-miss (apparent life-threatening event, ALTE / BRUE): hospitalize, monitor, search for underlying cause (GERD, arrhythmia, seizure, sepsis, child abuse)",
      "Isolated language delay without social deficit: rule out hearing loss (hearing test first, always)",
    ],
    mnemonics: [
      {
        name: "Developmental Milestones — Key Ages",
        content:
          "2 months: Smile, head control, tracks past midline\n4 months: Rolls F→B, coos, recognizes parents\n6 months: Sits with support, babbles, object permanence begins\n9 months: Pincer grasp beginning, waves bye-bye, stranger anxiety\n12 months: Walks with support, 1–3 words, points, drinks from cup\n18 months: Walks well, 10–15 words, stacks 4 blocks, uses spoon\n2 years: Runs, 2-word phrases, 50+ words, parallel play\n3 years: Tricycle, 3-word sentences, knows colors\n\nSIDS Prevention: SAFE SLEEP = ALONE + BACK + CRIB (firm, no soft bedding)\nPacifier is PROTECTIVE (reduces SIDS)\nCo-sleeping = RISK FACTOR",
      },
    ],
    pimpingQuestions: [
      "What are the developmental milestones at 12 months?",
      "What is the difference between organic and non-organic failure to thrive?",
      "What are the ABC's of safe sleep for SIDS prevention?",
      "What is the difference between developmental delay and regression?",
      "What developmental screening tool is used specifically for autism between 16–30 months?",
    ],
  },

  {
    id: "peds-chromosomal",
    name: "Chromosomal Abnormalities: Down, Turner, Klinefelter Syndromes",
    icdCode: "Q90.9",
    rotation: "pediatrics",
    category: "Growth and Development / Genetics",
    definition:
      "Down syndrome (Trisomy 21): most common chromosomal abnormality — 95% nondisjunction, 4% translocation (Robertsonian translocation — familial!), 1% mosaicism. Characteristic facies, intellectual disability (variable), cardiac defects (AVSD most common — 50% have CHD), atlantoaxial instability, increased risk ALL/AML, Alzheimer's disease (early onset). Turner syndrome (45,X): females only; short stature, webbed neck, widely spaced nipples, primary amenorrhea, horseshoe kidney, bicuspid aortic valve, coarctation; streak ovaries → infertility; normal intelligence. Klinefelter syndrome (47,XXY): males only; tall stature, small testes, gynecomastia, infertility (azoospermia), learning difficulties (especially language); testosterone deficiency; XXY mnemonic: eXtra X → eXtra Y-chromosome man with phenotypically male but hypogonadism.",
    diagnosticCriteria:
      "Down syndrome: prenatal (first trimester screen: nuchal translucency + free β-hCG + PAPP-A; second trimester quad screen; NIPT — non-invasive prenatal testing); postnatal: chromosome karyotype. Turner syndrome: karyotype (45,X or mosaic 45,X/46,XX); Echocardiogram (bicuspid AV, coarctation); renal ultrasound (horseshoe kidney); bone age, growth hormone deficiency evaluation. Klinefelter: karyotype (47,XXY); testosterone, LH, FSH (↑ LH/FSH, ↓ testosterone); semen analysis (azoospermia).",
    presentation: {
      chiefComplaint: [
        "\"My newborn looks different — eyes slant upward, small ears, single crease in palm\"",
        "\"My daughter hasn't started her period and is very short\"",
        "\"My teenage son has breast development and small testicles\"",
      ],
      associatedSymptoms: [
        "Down syndrome: upslanting palpebral fissures, epicanthal folds, single palmar crease (simian crease), sandal gap (between 1st and 2nd toes), hypotonia ('floppy'), Brushfield spots (gray spots in iris), macroglossia, flat nasal bridge, short neck",
        "Turner syndrome: short stature (final height ~147 cm), lymphedema of hands/feet in newborns (clue to diagnosis at birth), webbed neck, shield chest, widely-spaced nipples, cubitus valgus (wide carrying angle at elbow), primary amenorrhea",
        "Klinefelter: tall, slim, small testes (most characteristic), gynecomastia (10–20%), language-based learning difficulties, may present with infertility in adulthood",
      ],
      demographics: "Down syndrome: risk increases with maternal age (age 35 = 1:350, age 45 = 1:25). Turner: 1:2,000–5,000 live female births; most common cause of primary amenorrhea with short stature. Klinefelter: 1:500–1,000 male births; often diagnosed in adulthood during infertility workup.",
    },
    distinguishingFeatures:
      "Down syndrome cardiac: AVSD (atrioventricular septal defect, also called endocardial cushion defect) most common; VSD second. Atlantoaxial instability in Down: screen with lateral cervical spine X-ray before contact sports/surgery. Turner: NOT associated with Down syndrome or intellectual disability — normal IQ (may have specific learning disabilities in math/spatial). Klinefelter: XXY — extra X is inactivated but still causes phenotype; testosterone replacement therapy for hypogonadism.",
    redFlags: [
      "Down syndrome + signs of leukemia (lymphadenopathy, hepatosplenomegaly, pallor): ALL/AML risk is 10–20× higher; also transient myeloproliferative disorder (TMD) in neonates",
      "Down syndrome + neck pain after minor trauma: atlantoaxial instability — avoid contact sports until cleared; lateral X-ray in flexion/extension",
      "Turner syndrome + cardiac symptoms (chest pain, syncope): bicuspid aortic valve or coarctation — aortic dissection risk in adulthood; annual cardiac imaging",
      "Turner syndrome + estrogen deficiency (no puberty): cyclic estrogen + progesterone replacement; growth hormone for height",
    ],
    mnemonics: [
      {
        name: "Trisomies and Sex Chromosome Abnormalities",
        content:
          "Trisomy 21 (Down): ABCD\nA — AVSD (most common cardiac defect)\nB — Brushfield spots (iris)\nC — Cognitive impairment + Congenital hypothyroidism risk\nD — Duodenal atresia ('double bubble' on X-ray)\n\nTurner (45,X): SHORT NECK\nS — Short stature\nH — Horseshoe kidney\nO — Ovarian dysgenesis (streak ovaries)\nR — Renal abnormalities\nT — Turner → Bicuspid aortic valve + Coarctation\n\nKlinefelter (XXY): KLINEFELTER\nK — Karyotype 47,XXY\nL — Learning difficulties (language-based)\nT — Tall, thin, small Testes\n\nCan diagnose Turner at birth: lymphedema of hands and feet!",
      },
    ],
    pimpingQuestions: [
      "What is the most common cardiac defect in Down syndrome?",
      "What is atlantoaxial instability and why is it important in Down syndrome?",
      "How does Turner syndrome present in a newborn?",
      "What distinguishes Turner syndrome from other causes of short stature?",
      "What is the karyotype of Klinefelter syndrome and what is the most characteristic physical finding?",
    ],
  },

  // ─── Cardiovascular ───────────────────────────────────────────────────────

  {
    id: "peds-congenital-heart",
    name: "Congenital Heart Disease: TOF, ASD, Coarctation, and PDA",
    icdCode: "Q21.3",
    rotation: "pediatrics",
    category: "Cardiovascular / Congenital Heart Disease",
    definition:
      "Cyanotic CHD (right-to-left shunt → deoxygenated blood into systemic circulation): Tetralogy of Fallot (TOF — most common cyanotic CHD after 1 year), Transposition of the Great Vessels (TGA — most common cyanotic CHD presenting in neonatal period), Truncus arteriosus, Total anomalous pulmonary venous return (TAPVR), Tricuspid atresia, Hypoplastic left heart syndrome. Acyanotic CHD (left-to-right shunt): VSD (most common CHD overall), ASD, PDA, Coarctation of the aorta (CoA). TOF = PROVE: Pulmonary stenosis + Right ventricular hypertrophy + Overriding aorta + VSD. TGA: aorta from RV, pulmonary artery from LV → parallel (not series) circulation — survival requires mixing (ASD, VSD, or PDA). PDA: failure of ductus arteriosus to close after birth (closes physiologically by day 1–2 in term infants, day 7 in preterm).",
    diagnosticCriteria:
      "Pulse oximetry newborn screening (24–48h): SpO2 <95% in any extremity or ≥3% difference between right hand and foot → cardiac workup. Echocardiography: definitive diagnosis and anatomy. CXR: TOF = 'boot-shaped heart' (upturned cardiac apex due to RVH + concave pulmonary artery segment); TGA = 'egg on a string' (narrow mediastinum); CoA = 'figure-3 sign' (notching of ribs). EKG: RVH (TOF), RAD. PDA: continuous 'machinery murmur' at left upper sternal border.",
    presentation: {
      chiefComplaint: [
        "\"My baby turns blue when he cries\" (TOF)",
        "\"My baby is blue immediately after birth\" (TGA)",
        "\"My infant has a heart murmur and sweats during feeding\" (PDA, ASD)",
        "\"My baby has no pulses in the legs\" (Coarctation)",
      ],
      associatedSymptoms: [
        "TOF: cyanotic spells ('Tet spells') — hypoxic episodes triggered by crying, feeding, defecation; relieved by squatting (increases SVR → ↓ R-to-L shunt); clubbing; boot-shaped heart on CXR",
        "TGA: severe cyanosis at birth unresponsive to O2; duct-dependent lesion — give prostaglandin E1 (PGE1) to keep PDA open; needs Rashkind balloon septostomy + arterial switch operation",
        "PDA: continuous 'machinery murmur,' wide pulse pressure, bounding pulses; preterm infants at high risk; can cause pulmonary over-circulation and CHF",
        "Coarctation: upper extremity hypertension + absent/weak femoral pulses; lower extremity hypotension; rib notching on CXR (intercostal artery collaterals); 'figure-3 sign'",
        "ASD: usually asymptomatic in childhood; fixed split S2 (hallmark); right heart enlargement; atrial arrhythmias in adults",
      ],
      demographics: "CHD: 8:1,000 live births. VSD: most common overall. TOF: most common cyanotic CHD presenting after the neonatal period. TGA: most common cyanotic CHD presenting in first day of life. Down syndrome: AVSD most common. Turner: coarctation, bicuspid aortic valve. Williams syndrome: supravalvular aortic stenosis.",
    },
    distinguishingFeatures:
      "Cyanotic vs. Acyanotic: Cyanosis not relieved by 100% O2 = intracardiac R-to-L shunt (hyperoxia test: PaO2 <100 mmHg on 100% O2 = cyanotic CHD). PDA in preterm: indomethacin (NSAIDs — closes PDA by blocking prostaglandins); PDA in duct-dependent cyanotic CHD: PGE1 (keeps PDA open — SAVES LIFE). Tet spell management: knee-chest position (squatting) + 100% O2 + IV morphine + IV fluid + IV propranolol — surgery (complete repair or palliative Blalock-Taussig shunt).",
    redFlags: [
      "Duct-dependent lesion (TGA, hypoplastic left heart, pulmonary atresia): PGE1 immediately — closing PDA = death",
      "Tet spell: place child in knee-chest position first; give 100% O2, morphine (reduces hyperpnea), IV propranolol; if refractory → phenylephrine (increases SVR)",
      "Coarctation with differential cyanosis (pink upper extremities, blue lower extremities): critical — PGE1 to maintain ductal flow to lower body",
      "SpO2 difference ≥3% between right hand (pre-ductal) and foot (post-ductal): critical coarctation or aortic arch obstruction",
    ],
    mnemonics: [
      {
        name: "TOF = PROVE + 5 Ts of Cyanotic CHD",
        content:
          "TOF (Most common cyanotic CHD >1 yr) = PROVE:\nP — Pulmonary stenosis\nR — RVH (right ventricular hypertrophy)\nO — Overriding aorta\nV — VSD\nE — (boot-shaped heart on CXR)\n\nTet Spell Relief: Squatting / Knee-chest position\n→ ↑ SVR → ↓ R-to-L shunt → ↑ pulmonary flow\n\n5 T's of Cyanotic CHD:\nTOF, TGA, Truncus arteriosus, TAPVR, Tricuspid atresia\n+ Hypoplastic Left Heart Syndrome\n\nPDA in preterm: Indomethacin (closes it)\nPDA in duct-dependent lesion: PGE1 (keeps it open!)",
      },
    ],
    pimpingQuestions: [
      "What are the four components of Tetralogy of Fallot?",
      "What is a Tet spell and how is it managed acutely?",
      "Why is prostaglandin E1 used in transposition of the great vessels?",
      "How do you distinguish cyanotic from acyanotic CHD using the hyperoxia test?",
      "What is the hallmark murmur of PDA and what is the first-line pharmacologic treatment in premature infants?",
    ],
  },

  // ─── Neurology and Behavioral ─────────────────────────────────────────────

  {
    id: "peds-autism-behavioral",
    name: "Autism Spectrum Disorder, Cerebral Palsy, and Child Abuse",
    icdCode: "F84.0",
    rotation: "pediatrics",
    category: "Neurology / Behavioral Health",
    definition:
      "Autism spectrum disorder (ASD): neurodevelopmental disorder characterized by persistent deficits in social communication/interaction + restricted, repetitive behaviors/interests (DSM-5). Spectrum — mild (Asperger's-like) to severe. Screening: M-CHAT-R/F at 16 and 24 months. Associated with intellectual disability (50%), seizures (25%), GI problems, sensory sensitivities. No proven single cause — NOT caused by vaccines. Cerebral palsy (CP): non-progressive motor disorder from brain injury/malformation before/during/shortly after birth — spastic CP most common (65–70%), dyskinetic, ataxic. Hypoxic-ischemic encephalopathy (HIE): most common cause. Child abuse (non-accidental trauma): leading preventable cause of death in infants; classic injuries: bilateral retinal hemorrhages (abusive head trauma), posterior rib fractures (squeezing), classic metaphyseal lesions (bucket-handle fractures), unexplained bruising at various healing stages.",
    diagnosticCriteria:
      "ASD: DSM-5 criteria (deficits in social communication + RRBs); M-CHAT-R/F screening at 16 and 24 months; comprehensive neuropsychological evaluation; hearing test (rule out hearing loss as cause of language delay); genetics workup (fragile X syndrome, chromosomal microarray). CP: clinical diagnosis; brain MRI (periventricular leukomalacia in preterm, basal ganglia injury in term HIE); evaluate for comorbidities (intellectual disability, epilepsy). Child abuse: skeletal survey (screen for occult fractures); ophthalmologic exam (retinal hemorrhages); CT head or brain MRI; liver enzymes (abdominal trauma); STI testing if sexual abuse; report to CPS mandatory.",
    presentation: {
      chiefComplaint: [
        "\"My child doesn't look at me and isn't talking like other kids\"",
        "\"My child was born premature and is stiff and not reaching milestones\"",
        "\"My baby has bruising and I'm not sure how it happened\"",
      ],
      associatedSymptoms: [
        "ASD: lack of pointing (12 months), no words by 16 months, no 2-word phrases by 24 months, loss of language, poor eye contact, preference for solitary play, rigid routines, stereotyped movements (hand flapping, spinning)",
        "CP — Spastic diplegia (most common in preterm): increased tone in lower extremities, scissor gait, toe-walking, hyperreflexia; preterm prematurity + periventricular leukomalacia",
        "CP — Spastic hemiplegia: unilateral (one arm + same side leg), arm more affected than leg; term birth + middle cerebral artery territory injury",
        "Child abuse: inappropriate delay in seeking care, changing or implausible history, injury inconsistent with developmental stage (e.g., femur fracture in non-ambulatory infant), bruising in unusual locations (buttocks, back, ears, torso)",
      ],
      demographics: "ASD: 1 in 36 children (CDC 2023); 4:1 male:female. CP: 2–3 per 1,000 live births; preterm infants highest risk. Child abuse: highest risk in infants <1 year; poverty and caregiver stress are risk factors.",
    },
    distinguishingFeatures:
      "ASD vs. global developmental delay: ASD has disproportionate social communication deficit with relative sparing of motor/adaptive skills; global delay affects all domains equally. ASD vs. hearing loss: critical — all children with language delay need formal hearing evaluation (audiologic testing) first. Classic CP in premature infant: spastic diplegia (legs > arms) from periventricular leukomalacia (white matter injury). Shaken baby syndrome (abusive head trauma): retinal hemorrhages + SDH + no external head trauma in infant — classic presentation.",
    redFlags: [
      "Any bilateral retinal hemorrhages in infant without explanation: abusive head trauma until proven otherwise — report to CPS, ophthalmology, CT head",
      "Posterior rib fractures in infant: pathognomonic for non-accidental trauma (requires extreme force — squeezing chest) — skeletal survey + CPS report",
      "Classic metaphyseal lesions ('bucket-handle' or 'corner' fractures in long bone metaphyses): highly specific for child abuse — violent yanking or twisting",
      "Any delay or loss of language: hearing test FIRST (audiologic evaluation) before developmental evaluation",
    ],
    mnemonics: [
      {
        name: "Child Abuse Injury Patterns",
        content:
          "High specificity for ABUSE:\n1. Posterior rib fractures (squeeze injury)\n2. Classic metaphyseal lesions (corner/bucket-handle — yanking)\n3. Bilateral retinal hemorrhages (shaken baby)\n4. SDH without skull fracture in infant\n5. Bruising in non-ambulatory infant (can't bruise themselves)\n6. Spiral fractures in non-ambulatory infant\n\nASD Screening: M-CHAT at 18 AND 24 months\nASD hallmarks: No pointing + No joint attention + No back-and-forth communication\n\nCP Types:\nPreterm: Spastic DIPLEGIA (legs > arms) ← PVL\nTerm: Spastic HEMIPLEGIA (one side) ← MCA territory",
      },
    ],
    pimpingQuestions: [
      "What are the DSM-5 core diagnostic criteria for autism spectrum disorder?",
      "What developmental milestone should trigger M-CHAT screening?",
      "What injury pattern is pathognomonic for abusive head trauma?",
      "What are posterior rib fractures a classic sign of in infants?",
      "How does spastic diplegia differ from spastic hemiplegia in CP, and what lesion causes each?",
    ],
  },

  // ─── Renal/GU ────────────────────────────────────────────────────────────

  {
    id: "peds-renal",
    name: "Pediatric Renal: Nephrotic Syndrome, Wilms Tumor, and Enuresis",
    icdCode: "N04.9",
    rotation: "pediatrics",
    category: "Renal / Genitourinary",
    definition:
      "Nephrotic syndrome in children: massive proteinuria (>3.5 g/day in adults, >40 mg/m²/hr in children) + hypoalbuminemia + edema + hyperlipidemia + lipiduria. Most common cause: minimal change disease (MCD) — 85% of nephrotic syndrome in children 1–8 years — responds to steroids. Focal segmental glomerulosclerosis (FSGS): second most common; steroid-resistant; worse prognosis. Wilms tumor (Nephroblastoma): most common renal malignancy in children (peak 3–4 years); presents as asymptomatic abdominal mass; associated with WAGR syndrome (Wilms, Aniridia, GU anomalies, Retardation — WT1 deletion) and Beckwith-Wiedemann syndrome. DO NOT palpate vigorously (risk of tumor rupture). Enuresis: involuntary urination in a child ≥5 years — primary (never achieved dryness) or secondary (previously dry ≥6 months then relapsed).",
    diagnosticCriteria:
      "Nephrotic: urinalysis (3+ protein, oval fat bodies, fatty casts, lipid droplets), 24h urine protein or spot protein:creatinine ratio, serum albumin <2.5 g/dL, lipid panel (hyperlipidemia). Kidney biopsy: for steroid-resistant disease, age <1 or >8 years, atypical features (hematuria, HTN, reduced complement). Wilms tumor: abdominal ultrasound (preferred — avoids radiation); CT chest/abdomen for staging; do NOT biopsy before nephrectomy (risks tumor spillage). Enuresis: urinalysis (UTI, diabetes), consider renal US, urine osmolality, voiding diary. Defects in urine concentrating ability suggest DI.",
    presentation: {
      chiefComplaint: [
        "\"My child's face and legs are very swollen\" (Nephrotic)",
        "\"I felt a lump in my baby's belly during bath time\" (Wilms)",
        "\"My 6-year-old is still wetting the bed\" (Enuresis)",
      ],
      associatedSymptoms: [
        "Nephrotic: periorbital edema (worse in morning), ascites, scrotal/labial edema, pleural effusion, foamy urine (proteinuria)",
        "Wilms: large abdominal mass (smooth, firm, not crossing midline — distinguishes from neuroblastoma which crosses midline), abdominal pain, hematuria (15–20%), hypertension (renin secretion)",
        "Enuresis: nocturnal enuresis most common; secondary enuresis associated with stress, UTI, constipation, OSA, diabetes",
      ],
      demographics: "Nephrotic — MCD: peak 2–7 years; boys > girls. Wilms: peak 3–4 years; bilateral in 5–10% (Wilms is bilateral more often than other renal tumors). Nocturnal enuresis: 15–20% at age 5, 5% at age 10, 1% at age 15; positive family history strongly predictive.",
    },
    distinguishingFeatures:
      "Wilms vs. neuroblastoma: Wilms = intrarenal, does NOT cross midline, smooth mass, children 2–5 years, good prognosis; Neuroblastoma = retroperitoneal, CROSSES midline, younger children (< 2 years), calcified on X-ray, may cause opsoclonus-myoclonus, worse prognosis. Nephrotic vs. nephritic syndrome: nephrotic = massive proteinuria + edema + hypoalbuminemia + NO hematuria; nephritic = hematuria + RBC casts + hypertension + mild proteinuria + decreased GFR. MCD treatment: prednisone — 80–90% respond; relapse common; steroid-resistant → cyclophosphamide or tacrolimus.",
    redFlags: [
      "Wilms tumor: avoid vigorous abdominal palpation (risk of tumor rupture and seeding); treat with radical nephrectomy ± chemotherapy/radiation",
      "Nephrotic syndrome complications: hypercoagulability (loss of protein C/S, antithrombin III) → DVT risk; spontaneous bacterial peritonitis (SBP) from low IgG; infection with encapsulated organisms",
      "Secondary enuresis after ≥6 months of dryness: look for psychosocial stressor, UTI, sexual abuse, OSA, or new onset diabetes (polydipsia/polyuria)",
    ],
    mnemonics: [
      {
        name: "Nephrotic vs. Nephritic + Wilms vs. Neuroblastoma",
        content:
          "NEPHROTIC (SPELL):\nS — Swelling (edema)\nP — Proteinuria (massive, >3.5g/day)\nE — Empty albumin (hypoalbuminemia)\nL — Lipiduria + Lipidemia\nL — Lots of edema\n→ MCD in children = steroids\n\nNEPHRITIC:\nHematuria + RBC casts + HTN + Azotemia + Mild proteinuria\n→ Post-Strep GN (days 7–21 after strep)\n\nWilms vs. Neuroblastoma:\nWilms: Within kidney, Does NOT cross midline, 3–4 years\nNeuroblastoma: Not in kidney, Crosses midline, <2 years, Calcified, Catecholamine elevation",
      },
    ],
    pimpingQuestions: [
      "What is the most common cause of nephrotic syndrome in children and how is it treated?",
      "How do you distinguish Wilms tumor from neuroblastoma?",
      "What are the complications of nephrotic syndrome related to protein loss?",
      "What syndrome is associated with bilateral Wilms tumor and what gene is involved?",
      "What is the difference between primary and secondary enuresis?",
    ],
  },

  // ─── Hematology ───────────────────────────────────────────────────────────

  {
    id: "peds-hematology",
    name: "Pediatric Hematology: ITP, ALL, Thalassemia, and Lead Poisoning",
    icdCode: "D69.3",
    rotation: "pediatrics",
    category: "Hematologic / Pediatric",
    definition:
      "ITP (Immune Thrombocytopenic Purpura): autoantibody-mediated destruction of platelets (anti-GPIIb/IIIa); typically follows viral infection 1–3 weeks prior. Self-limited in children (80–90% resolve spontaneously). ALL (Acute Lymphoblastic Leukemia): most common childhood cancer and most common pediatric malignancy. Peak age 2–5 years; B-cell ALL most common; 80–90% cure rate. Thalassemia: hereditary hemoglobin synthesis disorders — alpha (deletions — 4 alpha gene loci) and beta (point mutations — 2 beta gene loci); beta-thalassemia major (Cooley's anemia) = most severe — requires regular transfusions and iron chelation. Lead poisoning: most common environmental toxicity in children — lead-based paint in homes pre-1978 is most common source; causes microcytic anemia + developmental/cognitive impairment (lowered IQ is irreversible).",
    diagnosticCriteria:
      "ITP: isolated thrombocytopenia (<100,000) + normal CBC otherwise + no splenomegaly (splenomegaly = think leukemia or infection) — usually clinical diagnosis; bone marrow biopsy only if atypical features or before rituximab. ALL: CBC (blasts on peripheral smear, anemia, thrombocytopenia), bone marrow biopsy (>20% blasts = leukemia), flow cytometry, cytogenetics. Thalassemia: CBC (microcytic, hypochromic anemia), reticulocyte count (elevated), peripheral smear (target cells, nucleated RBCs, Heinz bodies), hemoglobin electrophoresis (β-thal: ↑ HbA2, ↑ HbF; α-thal: α-chain gene deletion analysis). Lead poisoning: blood lead level (BLL): <5 μg/dL normal; 5–14 = environmental intervention; 15–44 = chelation therapy consideration; ≥45 μg/dL = chelation with DMSA or CaNa2EDTA; ≥70 μg/dL = encephalopathy = emergency chelation + hospitalize.",
    presentation: {
      chiefComplaint: [
        "\"My child has bruises all over and little red dots on the skin\" (ITP)",
        "\"My child is pale, has bone pain, and won't walk\" (ALL)",
        "\"My Mediterranean child has severe anemia requiring blood transfusions\" (Thalassemia)",
        "\"My child has developmental delay and I tested their blood lead level\" (Lead poisoning)",
      ],
      associatedSymptoms: [
        "ITP: petechiae (non-blanching small red-purple dots), purpura, easy bruising, mucosal bleeding (gum bleeding, nosebleeds); PLATELET <20,000 → spontaneous bleeding risk; NO lymphadenopathy, NO hepatosplenomegaly, NO bone pain (if present → leukemia until proven otherwise)",
        "ALL: 'HALL' symptoms — Hemorrhage (petechiae), Anemia (pallor, fatigue), Leukocytosis (infection), Lymphadenopathy/hepatosplenomegaly + bone pain (leukemic infiltration), nightsweats",
        "Beta-thal major: severe hemolytic anemia beginning at 6 months (when HbF switches to HbA), transfusion-dependent, 'chipmunk facies' (extramedullary hematopoiesis causing maxillary bone marrow expansion), hepatosplenomegaly",
        "Lead poisoning: typically asymptomatic at low levels; high levels: abdominal pain, constipation, cognitive decline, behavioral problems, irritability; encephalopathy (BLL >70) — seizures, altered consciousness",
      ],
      demographics: "ITP: peak 2–8 years; often follows viral illness. ALL: peak 2–5 years; more common in boys; Down syndrome = 15× increased risk. Beta-thalassemia major: Mediterranean, Middle Eastern, Southeast Asian backgrounds. Lead poisoning: children <6 most vulnerable; inner-city housing pre-1978.",
    },
    distinguishingFeatures:
      "ITP vs. ALL: ITP = isolated thrombocytopenia, normal WBC, no organomegaly, no bone pain, child appears well; ALL = pancytopenia (low RBC + WBC + platelets), bone pain, lymphadenopathy, hepatosplenomegaly, constitutional symptoms. Thalassemia trait (minor) vs. iron deficiency anemia: both microcytic; thalassemia trait = normal ferritin + elevated RBC count (microcytosis with normal RBC number); iron deficiency = low ferritin + low RBC. RBC distribution width (RDW): elevated in iron deficiency (variable sizes); normal in thalassemia trait.",
    redFlags: [
      "ITP with platelet <10,000 + mucosal bleeding or intracranial hemorrhage: IVIG immediately; consider platelet transfusion if life-threatening bleeding",
      "Hyperleukocytosis in ALL (WBC >100,000): leukostasis risk (pulmonary, CNS) → urgent cytoreduction (hydroxyurea, leukapheresis)",
      "Blood lead level ≥70 μg/dL: encephalopathy risk → hospitalize + IV chelation (CaNa2EDTA + BAL/dimercaprol)",
      "Beta-thalassemia major with iron overload from transfusions: iron chelation with deferoxamine or deferasirox; cardiac iron deposition = most common cause of death",
    ],
    mnemonics: [
      {
        name: "ITP vs. ALL — Key Distinction",
        content:
          "ITP: Isolated thrombocytopenia, looks WELL, no HSM, no bone pain, follows viral illness\n→ Observation if mild; IVIG or steroids if platelets <10k with bleeding\n\nALL: HALL\nH — Hemorrhage (thrombocytopenia)\nA — Anemia (pallor)\nL — Leukocytosis or leukopenia\nL — Lymphadenopathy + bone pain\n→ Bone marrow biopsy confirms (>20% blasts)\n\nThalassemia: Target cells + Elevated HbA2 + Microcytic anemia\nIron Deficiency: ↑ RDW + ↓ ferritin\nThal trait: Normal ferritin + ↑ RBC count\n\nLead: BLL ≥45 → chelation (DMSA)\nBLL ≥70 → EMERGENCY → hospital chelation",
      },
    ],
    pimpingQuestions: [
      "How do you distinguish ITP from ALL in a child with thrombocytopenia?",
      "What is the natural history of ITP in children?",
      "What is the hallmark of beta-thalassemia major on hemoglobin electrophoresis?",
      "How do you distinguish thalassemia trait from iron deficiency anemia?",
      "At what blood lead level is chelation therapy indicated?",
    ],
  },

  // ─── MSK ─────────────────────────────────────────────────────────────────

  {
    id: "peds-msk",
    name: "Pediatric MSK: SCFE, Osgood-Schlatter, JIA, and Nursemaid's Elbow",
    icdCode: "M93.002",
    rotation: "pediatrics",
    category: "Musculoskeletal / Pediatric Orthopedics",
    definition:
      "Slipped capital femoral epiphysis (SCFE): posterior-inferior displacement of femoral head epiphysis through growth plate; peak in obese adolescents during puberty growth spurt; obese Black male 11–13 years. Osgood-Schlatter disease: traction apophysitis of tibial tuberosity from repetitive quadriceps stress — active adolescents; self-limited. Juvenile idiopathic arthritis (JIA): most common pediatric rheumatic disease — chronic arthritis >6 weeks, onset <16 years; systemic JIA (Still's disease) = spiking fever + salmon-pink rash + arthritis + serositis. Radial head subluxation (nursemaid's elbow): annular ligament entrapment — toddler, pulled by hand; immediate radial head reduction. Scoliosis: lateral spinal curvature >10° by Cobb angle; adolescent idiopathic scoliosis most common; Adams forward bend test screening.",
    diagnosticCriteria:
      "SCFE: X-ray (AP + frog-leg lateral) — Klein's line (line along superior femoral neck fails to intersect epiphysis); posterior displacement. Osgood-Schlatter: clinical; X-ray may show soft tissue swelling or fragmentation of tibial tuberosity. JIA: clinical (arthritis ≥6 weeks, onset <16 years); ANA (positive in oligoarticular JIA — uveitis risk), RF (positive in polyarticular RF-positive = worst prognosis), CRP/ESR, ophthalmologic slit-lamp exam (uveitis screening in all JIA). Nursemaid's elbow: clinical (arm held pronated and flexed; refuses to move arm); diagnosis confirmed by successful reduction. Scoliosis: X-ray full-length spine standing (Cobb angle); MRI if early onset or neurological signs.",
    presentation: {
      chiefComplaint: [
        "\"My overweight teen has hip pain and a limp\" (SCFE)",
        "\"My active teen has pain below the knee that worsens with activity\" (Osgood-Schlatter)",
        "\"My child won't move their arm after I pulled them\" (Nursemaid's elbow)",
        "\"My daughter's spine looks curved\" (Scoliosis)",
      ],
      associatedSymptoms: [
        "SCFE: hip pain radiating to medial thigh or knee (can present as knee pain only — classic board question), antalgic gait, external rotation of hip, limited internal rotation; urgent — avascular necrosis (AVN) risk if untreated",
        "Osgood-Schlatter: tender palpable bump over tibial tuberosity, pain with running/jumping/squatting, worsens with kneeling; resolves with skeletal maturity",
        "JIA systemic: daily quotidian fever spikes (to >39°C then returns to normal), salmon-pink evanescent rash (appears with fever), arthritis, hepatosplenomegaly",
        "Oligoarticular JIA: most common type (<5 joints); ANA positive; HIGH RISK for chronic uveitis (anterior — often asymptomatic until severe vision loss) → mandatory regular slit-lamp exams",
        "Nursemaid's elbow: toddler 1–4 years, arm pulled, forearm pronated + elbow flexed, refuses to use arm, tenderness over radial head",
      ],
      demographics: "SCFE: obese adolescents, males, ages 11–13 (boys), 10–12 (girls). Osgood-Schlatter: active adolescents, peak 10–15 years. JIA: <16 years; oligoarticular most common in young girls. Nursemaid's elbow: 1–4 years; more common in girls.",
    },
    distinguishingFeatures:
      "SCFE: knee pain in obese teenager = think hip! (referred pain via obturator nerve). Urgent: non-weight-bearing + orthopedic surgery consult (in situ percutaneous pinning). AVN and chondrolysis are feared complications of SCFE. Osgood-Schlatter vs. patellar tendonitis: Osgood = tibial tuberosity tenderness; patellar tendonitis = inferior pole of patella tenderness. JIA uveitis: chronic anterior uveitis in oligoarticular JIA is often ASYMPTOMATIC and causes blindness without regular screening — MUST screen with slit lamp q3–6 months. Nursemaid's elbow reduction: supination + flexion technique (most common) OR hyperpronation technique; feel/hear a click with successful reduction.",
    redFlags: [
      "SCFE: acute severe pain with inability to bear weight = unstable SCFE → emergent non-weight-bearing + ortho surgery (risk of complete displacement and AVN)",
      "JIA uveitis: asymptomatic chronic anterior uveitis → BILATERAL BLINDNESS if missed — slit-lamp screening every 3–6 months for at-risk JIA subtypes",
      "Scoliosis >25°: orthopedic referral for bracing; >45–50°: surgical correction (Harrington rod or spinal fusion)",
      "Scoliosis with rapid progression, neurological symptoms, pain, or left convexity: MRI spine (may indicate syringomyelia, Chiari malformation, or neoplasm)",
    ],
    mnemonics: [
      {
        name: "SCFE and JIA Key Points",
        content:
          "SCFE: Obese Teen + Hip Pain + External Rotation\n→ Klein's line on X-ray doesn't cross femoral head\n→ URGENT: non-weight bearing + ortho consult\n→ 'Knee pain in obese teenager = think HIP'\n\nJIA Uveitis Risk: Oligoarticular JIA + ANA positive + Young female\n→ Asymptomatic chronic anterior uveitis → BLINDNESS\n→ Slit-lamp exam every 3–6 months\n\nNursemaid's Elbow: Pulled arm + Pronated + Ages 1–4\n→ Supination + Flexion → feel click = reduced\n→ Child moves arm immediately after\n\nOsgood-Schlatter: Tibial TUBEROSITY pain in active teen\n→ Self-limited → Rest, ice, NSAIDs",
      },
    ],
    pimpingQuestions: [
      "What is the classic presentation of SCFE and what X-ray finding confirms it?",
      "Why must you think of hip pathology when an obese teenager presents with knee pain?",
      "What is the most feared complication of untreated JIA oligoarticular type and how do you screen for it?",
      "How do you reduce a nursemaid's elbow?",
      "At what Cobb angle should scoliosis be referred for bracing vs. surgical correction?",
    ],
  },

  // ─── Endocrine ────────────────────────────────────────────────────────────

  {
    id: "peds-dka-endocrine",
    name: "Pediatric DKA, Congenital Hypothyroidism, and Growth Disorders",
    icdCode: "E10.10",
    rotation: "pediatrics",
    category: "Endocrine / Pediatric",
    definition:
      "DKA in children: most common cause = missed insulin doses or new diagnosis T1DM. Higher risk of cerebral edema than adults (most common cause of death in pediatric DKA — 0.3–1%). Congenital hypothyroidism: most common preventable cause of intellectual disability worldwide — screened on newborn screen (elevated TSH, low T4); most commonly from thyroid dysgenesis (aplasia, hypoplasia) or dyshormonogenesis. Immediate levothyroxine replacement essential — treatment within first 2 weeks prevents intellectual disability. Growth hormone deficiency: proportionate short stature, delayed bone age, low IGF-1; treat with recombinant GH. Precocious puberty: sexual development before age 8 (girls) or age 9 (boys); central (GnRH-dependent) vs. peripheral (GnRH-independent — McCune-Albright, adrenal tumor, gonadal tumor).",
    diagnosticCriteria:
      "DKA: blood glucose >250 mg/dL + pH <7.3 or bicarbonate <15 mEq/L + ketonemia/ketonuria + anion gap metabolic acidosis. Cerebral edema in pediatric DKA: headache, altered consciousness, bradycardia, hypertension during treatment → give mannitol or 3% saline immediately. Congenital hypothyroidism: newborn screen (TSH elevated → confirm with free T4 + TSH); if positive → start levothyroxine immediately, confirm with repeat labs. Growth failure: bone age X-ray (left hand/wrist — delayed bone age in GH deficiency, hypothyroidism; advanced bone age in precocious puberty), IGF-1 level, growth hormone stimulation test.",
    presentation: {
      chiefComplaint: [
        "\"My child with diabetes is vomiting and breathing strangely\" (DKA)",
        "\"My newborn failed the thyroid test on newborn screening\" (Congenital hypothyroid)",
        "\"My child is much shorter than classmates\" (Growth disorder)",
      ],
      associatedSymptoms: [
        "DKA: polyuria, polydipsia, weight loss, nausea/vomiting, abdominal pain, Kussmaul breathing (deep rapid — compensatory for metabolic acidosis), fruity breath (acetone), dehydration, altered consciousness",
        "Congenital hypothyroidism: often asymptomatic at birth (maternal T4 crosses placenta); classic late signs (if unscreened): prolonged neonatal jaundice (>2 weeks), constipation, large posterior fontanelle, hypotonia ('floppy baby'), macroglossia, umbilical hernia, hoarse cry",
        "GH deficiency: proportionate short stature, normal weight-to-height ratio, delayed bone age, micropenis, chubby appearance",
      ],
      demographics: "Pediatric DKA: most common in T1DM children; risk higher with new diagnosis (25–40% present with DKA at diagnosis). Congenital hypothyroidism: 1:2,000–4,000 newborns; maternal autoimmune thyroid disease. GH deficiency: 1:4,000–10,000; associated with midline defects (septo-optic dysplasia, cleft palate).",
    },
    distinguishingFeatures:
      "Pediatric DKA vs. adult DKA: children have higher risk of cerebral edema during treatment (rapid correction of osmolality) → use 2-bag system for fluid management, correct SLOWLY; do NOT bolus unless shock. Cerebral edema warning: headache + bradycardia + hypertension after starting DKA treatment → mannitol immediately. Congenital hypothyroidism: MUST treat within first 2 weeks of life or intellectual disability is permanent. 'Hoarse cry' + 'large tongue' + prolonged jaundice in neonate = hypothyroidism until proven otherwise.",
    redFlags: [
      "Pediatric DKA with headache, bradycardia, hypertension, or neurological changes during treatment: cerebral edema → mannitol 0.5–1 g/kg IV or 3% saline immediately",
      "Congenital hypothyroidism on newborn screen: start levothyroxine IMMEDIATELY (within 2 weeks) without waiting for repeat confirmatory labs — urgency of treatment",
      "New-onset diabetes with severe DKA: resuscitate gently; rule out concurrent infection (source of stress); monitor potassium (will drop during insulin therapy — supplement aggressively)",
    ],
    mnemonics: [
      {
        name: "Pediatric DKA — Cerebral Edema Warning",
        content:
          "Pediatric DKA Treatment: NEVER rapid fluid correction\nUse 2-bag method: slow, controlled rehydration over 24–48h\nDO NOT give insulin bolus\nPotassium: must replace BEFORE starting insulin (hypokalemia worsens with insulin)\n\nCEREBRAL EDEMA SIGNS during DKA treatment:\nHeadache\nBradycardia\nHypertension\nAMS/neuro changes\n→ MANNITOL 0.5–1 g/kg IV immediately\n\nCongenital Hypothyroidism:\nNewborn Screen: high TSH, low T4\nSymptoms: Prolonged jaundice + Large tongue + Umbilical hernia + Hoarse cry + Hypotonia\nTreat: Levothyroxine within 2 weeks of life\n(prevents INTELLECTUAL DISABILITY)",
      },
    ],
    pimpingQuestions: [
      "What is the most feared complication of DKA treatment in children and how do you treat it?",
      "How does the approach to fluid replacement in pediatric DKA differ from adult DKA?",
      "What are the classic signs of congenital hypothyroidism in an unscreened neonate?",
      "Why is it critical to treat congenital hypothyroidism within the first 2 weeks of life?",
      "What is the difference between central and peripheral precocious puberty?",
    ],
  },
];
