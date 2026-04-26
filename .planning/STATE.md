# Project State & Memory

**Project:** EAUI 2025 Digital Divides Analysis  
**Status:** Initialized (2026-04-25)  
**Last Updated:** 2026-04-25  

---

## Active Context

### User Profile
- Role: Data analyst/researcher
- Focus: Policy-relevant evidence for SUBTEL stakeholders
- Constraints: 2-week timeline for quick policy spike
- Deliverable: Formal policy report (markdown + visualizations)

### Project Constraints
- **Data:** 2025 EAUI wave only (N=5,000, 587 variables)
- **Scope:** Exclude technology proxies (`tipo_acceso`, `usa_computador`, `usa_smartphone`)
- **Predictors:** Demographics (age, gender, education), SES (GSE, income), territorial (region, urban/rural)
- **Output:** Actionable for government policy makers (non-technical language)

### Key Decisions
1. **Skip domain research** — user provides sufficient context from EAUI documentation
2. **Custom analysis mix** — exploratory + predictive + causal (not pure prediction)
3. **Single-year focus** — 2025 only; no temporal trends
4. **Live in notebooks** — all analysis in `eaui2026_v2.ipynb` (Jupyter)
5. **Weighted analysis** — use `fe_hogar` (households) and `fe_personas` (individuals) correctly

### Known Risks
- Missing income data → mitigation: use GSE/education proxy
- Tech-proxy confounding → mitigation: explicitly exclude tech variables
- Small subgroup sample sizes → mitigation: pre-specify interactions before collapse
- Overfit in logistic model → mitigation: limit features to pre-specified list

---

## Phase Progress

| Phase | Status | ETA | Notes |
|-------|--------|-----|-------|
| Phase 1: Data pipeline & exploration | Not started | Apr 28 | Sections 1–10 + early analysis |
| Phase 2: Predictive modeling | Not started | May 1 | Logistic regression, barrier ranking |
| Phase 3: Causal narrative | Not started | May 5 | Policy findings synthesis |
| Phase 4: Final report | Not started | May 9 | Delivery to stakeholders |

---

## Data Assets

- **Primary source:** `/data/sav/2026.sav` (SPSS, 5,000 rows × 587 cols)
- **Metadata:** `diccionario_variables.csv` (variable definitions, types, nulls)
- **Notebook:** `eaui2026_v2.ipynb` (executable analysis, sections 1–10 = setup)
- **Reference:** `docs/informe_final.pdf` (SUBTEL published report)

---

## Analysis Functions (Define in Phase 1)

```python
# Core functions to define:
dstats(data_df, variables, tipo, cruce=None, factor=None, transponer=False, estilo=False)
  # tipo: 'frecuencia', 'cruzada', 'promedio', 'suma'
  # factor: 'fe_hogar' or 'fe_personas' (always specify)

fordf(df_tabla, titulo)
  # Applies visual styling: int format for counts, 1-decimal for %

analizar_rm(grupo, factor='fe_hogar', top_n=10, estilo=False)
  # Multiple-response analysis for GRUPOS_RM dict keys

ORDEN_CATEGORIAS
  # Dict: variable → list of ordered category labels
  # E.g., {'gse': ['E', 'D', 'C3', 'C2', 'C1', 'AB']}
```

---

## Weighting Guide (Quick Reference)

| Weight | Use | Example |
|--------|-----|---------|
| `fe_hogar` | Household-level vars | access, income, pago_internet |
| `fe_personas` | Individual-level vars | sexo, edad, educ, actividad |
| `pond_hogar` | Household, normalized | Probability models |
| `pond_personas` | Individual, normalized | Probability models |

**Rule:** Always specify `factor` in `dstats()`. Default to `fe_hogar` for SES/household; `fe_personas` for demographics.

---

## Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| NameError: `dstats` not defined | Run section 9 (Funciones de análisis) |
| KeyError: variable name | Check section 6 renaming; confirm execution |
| Weights not summing to population | Verify correct `factor`; check for unintended filtering |
| Missing values in output | NS/NR sentinels (9999999) not replaced → run section 5 |
| Income data sparse | Use GSE / education as proxy; document separately |
| Tech-proxy confounding | Confirm excluded `tipo_acceso`, `usa_computador`, `usa_smartphone` |

---

## Next Steps

1. ✅ **Initialize GSD project** (DONE: PROJECT.md, REQUIREMENTS.md, ROADMAP.md)
2. **Start Phase 1:** Run notebook sections 1–10, produce exploratory analysis
3. **Run `/gsd-plan-phase 1`** to detailed Phase 1 execution plan
4. Execute phases sequentially: 1 → 2 → 3 → 4

---

## References

- **CLAUDE.md:** Project setup, weighting guide, notebook architecture
- **PROJECT.md:** Vision, constraints, success criteria
- **REQUIREMENTS.md:** Functional requirements by phase, acceptance criteria
- **ROADMAP.md:** Timeline, task breakdown, dependencies
