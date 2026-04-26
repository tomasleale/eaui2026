# EAUI Analysis: Digital Divides & Policy Insights

**Status:** Active Initiative  
**Timeline:** 2 weeks (2026-04-25 → 2026-05-09)  
**Audience:** SUBTEL policy makers / government stakeholders  
**Output:** Formal policy report with statistical evidence

---

## Problem Statement

The Encuesta de Acceso y Usos de Internet (EAUI) is Chile's national survey of internet access and usage. The 2025 wave provides rich data on **who has internet access and why structural factors (not technology) determine digital inequality**.

Current gaps:
- No clear predictive model of internet access for policy targeting
- Unclear which socioeconomic/demographic barriers are primary vs. secondary
- Limited causal evidence linking structural determinants to access

## Core Vision

Produce evidence-based policy insights by:
1. **Predicting** who has internet access using socioeconomic and demographic predictors
2. **Identifying** causal structural determinants (excluding tautological tech proxies like device ownership)
3. **Modeling** which barriers matter most for targeted intervention

## Key Constraints

- **Data scope:** 2025 EAUI wave only (5,000 respondents, 587 variables)
- **Analytical approach:** Exclude `tipo_acceso`, `usa_computador`, `usa_smartphone` (outcome proxies, not predictors)
- **Predictors only:** Demographic (age, gender, education), socioeconomic (GSE, income), territorial (region, urban/rural)
- **Execution:** Python + Jupyter notebooks (live in `eaui2026_v2.ipynb`)

## Success Criteria

✓ Predictive model of internet access with interpretable coefficients  
✓ Evidence of top 3–5 structural barriers to access  
✓ Causal interpretations defensible for policy (no selection bias from tech proxies)  
✓ Report suitable for government stakeholder communication (clear language, no jargon)  
✓ Analysis reproducible in notebook from raw data  

## In Scope

- Exploratory data analysis of digital divides (segmentation by GSE, age, education, region)
- Multiple correspondence analysis (MCA) to visualize demographic-access relationships
- Predictive modeling (logistic regression) with coefficients for policy relevance
- Cross-tabulation analysis by demographic/socioeconomic strata
- Weighted analysis using proper weighting factors (`fe_hogar`, `fe_personas`)

## Out of Scope

- Temporal trends (single year, 2025 only)
- Qualitative research / interviews
- Technology-specific analysis (device types, connection speeds)
- Internet usage patterns (focus on **access**, not **use**)
- International comparison
