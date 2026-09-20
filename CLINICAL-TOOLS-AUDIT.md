# ClinPA-S Clinical Tools Audit — Per Rotation

*Generated July 16, 2026. Content counts from the live seed data; exam weights from the official PAEA blueprints (2026 updates; Surgery 2023).*

## Current content inventory

| Rotation | Conditions | Drug cards | Quiz Qs | Guidelines | Procedures | Differentials |
|---|---|---|---|---|---|---|
| Family Medicine | 58 | 15 | 25 | 12 | 7 | 0 ⚠️ |
| Internal Medicine | 95 | 10 | 15 | 12 | 4 | 6 |
| Emergency Medicine | 25 | 7 | 20 | 12 | 4 | 0 ⚠️ |
| Pediatrics | 37 | 7 | 20 | 6 | 4 | 4 |
| Behavioral Medicine | 27 | 7 | 20 | **0** ⚠️ | 3 | 4 |
| Women's Health | 26 | 6 | 20 | 6 | 4 | 4 |
| General Surgery | 29 | 6 | 20 | 6 | 4 | 4 |

Every rotation has all 8 content types wired (conditions, pharm, quiz, guidelines, procedures, differentials, labs, physical exam). **No interactive clinical calculators exist anywhere in the app yet** — that's the biggest tools gap and a strong differentiator to build.

## Priority fixes (content gaps)

1. **Behavioral Medicine has zero guidelines.** Students expect at minimum: depression treatment algorithm (SSRI selection/switching), lithium monitoring, alcohol withdrawal (CIWA-driven), and involuntary hold basics.
2. **FM and EM differentials files appear empty** — verify and seed; both are chief-complaint-driven rotations where differentials are the core skill.
3. **EM musculoskeletal content is thin vs its weight.** MSK is 12% of the 2026 EM blueprint (2nd largest category) but only ~2 EM conditions are MSK. Add fracture/dislocation, septic joint, compartment syndrome coverage.
4. **Surgery has no pain medicine/anesthesia content** (7% of the exam) and only one trauma item (8%). Add ASA classification, local anesthetic basics/toxicity, post-op pain regimens, primary/secondary survey.
5. **EM condition count (25) is low overall** for a 13-category blueprint — target 35–40.

## Missing clinical calculators & decision tools (per rotation)

These are the MDCalc-style tools students reach for daily. Building them in-app keeps users on ClinPA-S during clinic hours — which supports the patient-tracking-as-daily-habit strategy.

### Family Medicine
ASCVD 10-year risk, CHA₂DS₂-VASc, HAS-BLED, Centor/McIsaac strep score, Wells DVT, FRAX (osteoporosis), PHQ-9 & GAD-7 (interactive), BMI + eAG/A1c converter.

### Internal Medicine
CURB-65, Wells PE + PERC, CHA₂DS₂-VASc, CKD-EPI GFR, corrected calcium, anion gap + delta gap, FENa, MELD-Na, Child-Pugh, Light's criteria (pleural effusion), HEART score.

### Emergency Medicine
HEART score, PERC rule, Wells PE, Canadian CT Head, NEXUS / Canadian C-spine, Ottawa ankle + knee rules, qSOFA, Glasgow Coma Scale, Alvarado (appendicitis), tPA eligibility checklist.

### Pediatrics
Weight-based dosing calculator (mg/kg with max-dose warnings — the single highest-value peds tool), APGAR, PECARN head injury, Kocher criteria (septic hip), bilirubin nomogram helper, asthma severity classifier, immunization schedule quick reference.

### Behavioral Medicine
PHQ-9, GAD-7, CIWA-Ar (alcohol withdrawal), COWS (opioid withdrawal), AUDIT-C, MoCA/MMSE score interpretation, QTc calculator (antipsychotic monitoring).

### Women's Health
EDD/gestational age calculator (Naegele + ultrasound dating), Bishop score, preeclampsia severe-features checklist, GBS prophylaxis decision helper, Rotterdam PCOS criteria (interactive), US MEC contraception eligibility quick reference.

### General Surgery
RCRI (revised cardiac risk index), ASA classification reference, Caprini VTE risk, Alvarado, Ranson criteria / BISAP, surgical wound classification, NPO guidelines quick reference.

## Recommended build order

1. **Pediatric weight-based dosing calculator** — highest daily utility, no equivalent in competitors aimed at PA students.
2. **The "big six" scores used across rotations** (CHA₂DS₂-VASc, Wells PE/DVT, PERC, CURB-65, HEART, GCS) as one reusable calculator component — covers FM/IM/EM at once.
3. **Behavioral Medicine guidelines seed** (closes the zero-guidelines gap).
4. **Rotation-specific tools** in blueprint-weight order (EM first — highest tool usage in real time).

A single `ClinicalCalculator` component with a config-driven schema (inputs, scoring logic, interpretation bands, citation) would let you ship all of these without new UI work per tool.
