# EAUI 2025 Analysis — Requirements

**Status:** Active  
**Data:** 2025 EAUI wave (N=5,000 households, 587 variables)  
**Deliverable:** Policy report (markdown + embedded visualizations)  
**Timeline:** 2 weeks

---

## Functional Requirements

### FR-1: Data Pipeline & Setup
- [ ] Load 2025 SPSS data (`data/sav/2026.sav`) via `pyreadstat`
- [ ] Derive GSE from education + household-head occupation (A10 + A11)
- [ ] Clean NS/NR sentinels (replace 9999999 with NaN in money/amount columns)
- [ ] Rename 53 SPSS codes to readable short names (e.g., `COD_REGION` → `region`)
- [ ] Recode numeric values to text labels in-place (no `_rec` suffix)
- [ ] Derive age groups and education groups from raw variables
- [ ] Derive continuous income (`ingreso_pm`) from banded income codes
- [ ] Define all analysis functions (`dstats`, `analizar_rm`, `fordf`)
- [ ] Validate weights sum correctly to population totals

**Acceptance:** Sections 1–10 of `eaui2026_v2.ipynb` execute without error; `dstats()` and `fordf()` functions callable

---

### FR-2: Exploratory Analysis — Digital Divides
- [ ] Frequency distribution of internet access by GSE (weighted)
- [ ] Cross-tabulation: internet access vs. education level (by age group)
- [ ] Cross-tabulation: internet access vs. region (urban/rural split)
- [ ] Segmentation analysis: demographic profiles of internet users vs. non-users
- [ ] Weighted mean/median income by access status
- [ ] Visualizations: stacked bar charts, heatmaps, distribution plots

**Acceptance:** Produce 6–8 exploratory tables/charts showing clear digital divide patterns; all weighted correctly

---

### FR-3: Predictive Modeling — Internet Access
- [ ] Logistic regression predicting binary internet access from:
  - Demographics: age, gender, education
  - Socioeconomic: GSE, household income
  - Territorial: region, urban/rural
- [ ] Exclude technology proxies (`tipo_acceso`, `usa_computador`, `usa_smartphone`)
- [ ] Report odds ratios with 95% CIs for all predictors
- [ ] Model diagnostics: AIC/BIC, classification accuracy, confusion matrix
- [ ] Feature importance visualization (coefficient magnitudes)
- [ ] Segmented model: run separately by age group / region if data supports

**Acceptance:** Model coefficients interpretable for policy (e.g., "odds of access decrease 30% per GSE category drop"); AUC ≥ 0.70

---

### FR-4: Causal Evidence — Primary Barriers
- [ ] Identify top 3–5 predictors driving access (largest effect sizes)
- [ ] Quantify barrier impact: e.g., "GSE accounts for 25% of variance; education 15%"
- [ ] Test for interaction effects (e.g., education × region)
- [ ] Rule out selection bias: confirm no tech-proxy confounding (document exclusions)
- [ ] Report policy-actionable interpretation (e.g., "increasing education attainment would lift access by X%")

**Acceptance:** Clear ranking of barriers with quantified impact; no tech-proxy confounding evident

---

### FR-5: Report & Documentation
- [ ] Write policy-focused narrative (3–5 key findings, non-technical language)
- [ ] Embed all analyses with tables and visualizations
- [ ] Cite data source (EAUI 2025, SUBTEL)
- [ ] Methods section explaining weighting, variable selection, modeling approach
- [ ] Limitations section (single year, cross-sectional design, excluded proxies)
- [ ] Recommendations for policy makers (2–3 actionable insights)

**Acceptance:** Report readable by non-statistician policy maker; all claims supported by embedded tables/charts

---

## Quality Requirements

| Requirement | Standard |
|-------------|----------|
| **Data integrity** | All weights validated; no NA values in categorical analysis (expected for income) |
| **Weighting correctness** | Household-level analyses use `fe_hogar`; individual-level use `fe_personas` |
| **Reproducibility** | All code in notebook; no external scripts; results replicable from raw `.sav` |
| **Visualization quality** | Colorblind-safe palettes, clear labels, legend, units specified |
| **Statistical rigor** | CI for all estimates; no p-hacking (pre-specified hypotheses) |
| **Policy relevance** | Findings actionable; language accessible to non-technical audience |

---

## Constraints & Assumptions

| Constraint | Implication |
|-----------|------------|
| Single-year data (2025 only) | Cannot establish causal effects; descriptive/predictive only |
| Cross-sectional design | No longitudinal follow-up; generalization to future cohorts uncertain |
| Excluded tech proxies | Model captures structural barriers but misses proximate mechanisms |
| Sample: N=5,000 | Standard errors reasonable for national estimates; small subgroup estimates less stable |
| Household-level weighting | Region/GSE aggregates represent population; individual-level adjusts for survey design |

---

## Risk Mitigations

| Risk | Mitigation |
|-----|-----------|
| Missing data in income → breaks income model | Impute or analyze by education/GSE proxy; document separately |
| Weights don't sum to population | Validate in section 1; recalculate if data filtered |
| Small cell sizes in interaction analyses | Pre-specify interactions; collapse categories if n < 30 per cell |
| Tech-proxy confounding | Explicitly exclude `tipo_acceso` etc.; report what was excluded |
| Over-fitting in logistic model | Use L2 regularization or limit features to pre-specified list |

---

## Definition of Done

**Analysis is complete when:**
1. Sections 1–10 + 11–14 (exploratory + modeling) all execute without error
2. Predictive model produces interpretable coefficients for all predictors
3. Report identifies top 3 structural barriers with quantified impact
4. All tables use correct weighting factors
5. Policy narrative drafted with 3 actionable recommendations
6. Notebook committed to git with clear markdown annotations
