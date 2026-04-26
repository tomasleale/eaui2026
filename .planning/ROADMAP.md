# EAUI 2025 Analysis — Roadmap

**Project Duration:** 2 weeks (2026-04-25 → 2026-05-09)  
**Milestone:** Complete policy report with predictive model + causal evidence  
**Audience:** SUBTEL policy makers  

---

## Phase 1: Data Pipeline & Exploratory Analysis (Days 1–3, ~3 days)

**Goal:** Establish clean, weighted dataset and visualize digital divides

**Deliverables:**
- Sections 1–10 of `eaui2026_v2.ipynb` execute without error
- GSE derived; weights validated; all 53 variables renamed and recoded
- Analysis functions (`dstats`, `fordf`, `analizar_rm`) defined and tested
- Initial exploratory tables: access by GSE, education, region, age

**Tasks:**
1. Verify data loads: 5,000 rows × 587 columns
2. Derive GSE from education + occupation
3. Replace NS/NR sentinels (9999999 → NaN)
4. Rename and recode all 53 SPSS variables
5. Define `ORDEN_CATEGORIAS` for consistent ordering
6. Build analysis functions with proper weighting
7. Generate 6–8 exploratory crosstabs: access × demographic / SES strata
8. Produce visualizations: stacked bars, heatmaps

**Success Criteria:**
- [ ] All sections 1–10 run cleanly
- [ ] Weights sum correctly to population totals
- [ ] Exploratory tables show clear digital divide patterns
- [ ] Visualizations are publication-ready

**Owner:** Primary analyst  
**Blocker:** None (data already loaded in existing notebook)

---

## Phase 2: Predictive Modeling — Internet Access (Days 4–6, ~3 days)

**Goal:** Build logistic regression model predicting internet access; identify key barriers

**Deliverables:**
- Logistic regression model with odds ratios for all predictors
- Model diagnostics (AIC, AUC, confusion matrix)
- Coefficient interpretation for policy (e.g., GSE odds ratios)
- Interaction tests (education × region, etc.)
- Feature importance chart

**Tasks:**
1. Prepare modeling data: exclude tech proxies, handle missing income
2. Fit logistic regression: access ~ age + gender + education + GSE + income + region + urban
3. Report odds ratios with 95% CIs
4. Evaluate model: AUC, accuracy, cross-validation (if time permits)
5. Test interactions: education × age, GSE × region, etc.
6. Quantify effect sizes: "GSE accounts for X% of explained variance"
7. Visualize coefficients: forest plot or coefficient magnitude chart

**Success Criteria:**
- [ ] Model AUC ≥ 0.70
- [ ] All coefficients interpretable for policy (e.g., not wildly implausible)
- [ ] Top 3 barriers identified and ranked
- [ ] No tech-proxy confounding (document exclusions)

**Owner:** Primary analyst  
**Depends on:** Phase 1 (dataset)  
**Blocker:** Missing income data (mitigation: use GSE / education proxy if needed)

---

## Phase 3: Causal Evidence & Policy Narrative (Days 7–10, ~4 days)

**Goal:** Synthesize predictive findings into policy-actionable insights with causal framing

**Deliverables:**
- Written policy narrative (3–5 key findings)
- Causal interpretation: "Which structural barriers matter most?"
- Recommendations for policy makers (2–3 actionable interventions)
- Methods & limitations section
- Draft report (markdown)

**Tasks:**
1. Synthesize model results into 3–5 key findings
2. Quantify policy impact: e.g., "if education increased 1 level, access odds increase by X%"
3. Address confounding: document tech proxies excluded; rule out reverse causality
4. Identify vulnerable subgroups (e.g., low-GSE, low-education, rural)
5. Draft policy recommendations (evidence-based, targeted interventions)
6. Write methods section: data, weighting, variable selection, modeling approach
7. Write limitations: cross-sectional design, single year, excluded mechanisms
8. Create report outline: executive summary, findings, methods, recommendations

**Success Criteria:**
- [ ] 3–5 findings are clear, quantified, and defensible
- [ ] Policy recommendations are actionable (not vague)
- [ ] No causal claims without proper caveats
- [ ] Report readable by non-statistician audience

**Owner:** Primary analyst  
**Depends on:** Phase 2 (model results)

---

## Phase 4: Final Report & Publication (Days 11–14, ~4 days)

**Goal:** Finalize report with embedded visualizations and deliver to stakeholders

**Deliverables:**
- Complete markdown report with embedded tables/charts
- Jupyter notebook sections 1–14+ annotated and reproducible
- GitHub commit with clear message and linked policy insights
- Optional: presentation slides for stakeholder meeting

**Tasks:**
1. Embed all exploratory tables and charts in report markdown
2. Add figure captions with interpretation
3. Review and edit narrative for clarity (non-technical language)
4. Double-check all citations (data source: EAUI 2025, SUBTEL)
5. Run full notebook top-to-bottom to verify reproducibility
6. Commit to git with descriptive message
7. (Optional) Create summary presentation for policy stakeholders
8. Document any code changes or assumptions for future reference

**Success Criteria:**
- [ ] Report is self-contained (all tables/charts embedded)
- [ ] Language is accessible to policy makers
- [ ] Notebook runs cleanly from raw `.sav` file
- [ ] All claims are data-backed and caveated appropriately
- [ ] Ready for delivery to SUBTEL / government stakeholders

**Owner:** Primary analyst  
**Depends on:** Phase 3 (narrative)

---

## Timeline

```
Week 1 (Apr 25–May 1)
├─ Phase 1: Data pipeline & exploration (Fri–Sun)
└─ Phase 2: Predictive modeling (Mon–Wed)

Week 2 (May 2–9)
├─ Phase 3: Causal evidence & narrative (Thu–Sun)
└─ Phase 4: Final report & delivery (Mon–Fri, May 5–9)
```

**Milestones:**
- **Apr 28 (End Day 3):** Exploratory analysis complete; dataset clean
- **May 1 (End Day 6):** Predictive model fitted; barriers ranked
- **May 5 (End Day 10):** Policy narrative drafted
- **May 9 (End Day 14):** Final report delivered

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Data integrity | 100% of analysis functions defined; weights validated |
| Model performance | AUC ≥ 0.70; all coefficients interpretable |
| Barrier identification | Top 3 barriers clearly ranked with quantified impact |
| Report quality | Readable by non-statistician; findings actionable |
| Reproducibility | Full analysis in notebook; runs cleanly from raw data |
| Timeline adherence | Phases complete by scheduled dates |

---

## Post-Delivery

Once report is delivered:
- [ ] Archive analysis notebook with clear section annotations
- [ ] Document any follow-up questions from stakeholders
- [ ] If approved, consider temporal analysis (2012–2025 trends) as Phase 5
- [ ] Maintain data dictionary for future EAUI waves (2026+)
