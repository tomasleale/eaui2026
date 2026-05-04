# Graph Report - .  (2026-05-03)

## Corpus Check
- 8 files · ~75,000 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 45 nodes · 33 edges · 12 communities detected
- Extraction: 79% EXTRACTED · 21% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.85)
- Token cost: 82,940 input · 12,500 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Advanced Analysis|Advanced Analysis]]
- [[_COMMUNITY_Behavior-Driven Performance|Behavior-Driven Performance]]
- [[_COMMUNITY_Classification & Feature Importance|Classification & Feature Importance]]
- [[_COMMUNITY_Bivariate Analysis|Bivariate Analysis]]
- [[_COMMUNITY_Project Infrastructure|Project Infrastructure]]
- [[_COMMUNITY_ML Interpretation|ML Interpretation]]
- [[_COMMUNITY_Key Predictors|Key Predictors]]
- [[_COMMUNITY_Youth Resilience|Youth Resilience]]
- [[_COMMUNITY_Access Requirements|Access Requirements]]
- [[_COMMUNITY_Pipeline Orchestration|Pipeline Orchestration]]
- [[_COMMUNITY_GSE Derivation|GSE Derivation]]
- [[_COMMUNITY_Skills Classification|Skills Classification]]

## God Nodes (most connected - your core abstractions)
1. `EAUI 2026 Analysis Plan` - 8 edges
2. `Permutation Importance vs sklearn Feature Importance` - 4 edges
3. `Block 4: Supervised Machine Learning (Classification, Interpretation)` - 3 edges
4. `Cross-Tabulation Analysis` - 3 edges
5. `Block 1: Bivariate Descriptive Analysis` - 2 edges
6. `Block 2: Multivariate Analysis (MCA, PCA, Clustering)` - 2 edges
7. `Block 3: Inferential Analysis (Hypothesis Testing, Regression)` - 2 edges
8. `EAUI Subtel Project Overview` - 2 edges
9. `eaui2026_v3.ipynb (Latest Version)` - 2 edges
10. `Summary: Model Improvement Achievements` - 2 edges

## Surprising Connections (you probably didn't know these)
- `EAUI 2026 Analysis Plan` --rationale_for--> `Bloque 5: Executive summary, 15 insights, recommendations, limitations`  [INFERRED]
  PLAN_ANALISIS_EAUI2026.md → eaui2026_analisis_bloques.ipynb
- `N_actividades_online: 57.5% True Importance` --rationale_for--> `Key Insight: Behavior > Demographics (68% vs 32%)`  [INFERRED]
  SHAP_ANALYSIS.md → SUMMARY.md
- `Bloque 1: Chi-square & Cramér's V on 28 bivariates` --conceptually_related_to--> `Cross-Tabulation Analysis`  [INFERRED]
  eaui2026_analisis_bloques.ipynb → README_ANALYSIS.md
- `Block 1: Bivariate Descriptive Analysis` --rationale_for--> `Bloque 1: Chi-square & Cramér's V on 28 bivariates`  [EXTRACTED]
  PLAN_ANALISIS_EAUI2026.md → eaui2026_analisis_bloques.ipynb
- `Block 2: Multivariate Analysis (MCA, PCA, Clustering)` --rationale_for--> `Bloque 2: MCA (Q8), PCA (5 numeric), FAMD (mixed), clustering`  [EXTRACTED]
  PLAN_ANALISIS_EAUI2026.md → eaui2026_analisis_bloques.ipynb

## Communities (15 total, 5 thin omitted)

### Community 0 - "Advanced Analysis"
Cohesion: 0.22
Nodes (9): Bloque 2: MCA (Q8), PCA (5 numeric), FAMD (mixed), clustering, Bloque 3: 95% CI, t-tests, logit, ordinal regression, WLS, Bloque 5: Executive summary, 15 insights, recommendations, limitations, EAUI 2026 Analysis Plan, Expansion Factors (fe_hogar, fe_personas), Block 3: Inferential Analysis (Hypothesis Testing, Regression), Block 2: Multivariate Analysis (MCA, PCA, Clustering), Target Variables (Outcomes) (+1 more)

### Community 1 - "Behavior-Driven Performance"
Cohesion: 0.33
Nodes (6): N_actividades_online: 57.5% True Importance, Summary: Model Improvement Achievements, Baseline Classification Model (57.2% accuracy), Feature Engineering: 4 New Behavioral Variables, Improved Classification Model (66.4% accuracy), Key Insight: Behavior > Demographics (68% vs 32%)

### Community 2 - "Classification & Feature Importance"
Cohesion: 0.33
Nodes (6): Feature Importance: Age Dominates (46.4%), Gradient Boosting Classifier (57.2%), Classification Model (Original): 6 Features, Internet Access Almost Irrelevant (-0.2%), GSE Effect Mediated Through Behavior (6% → 1.1%), Permutation Importance vs sklearn Feature Importance

### Community 3 - "Bivariate Analysis"
Cohesion: 0.4
Nodes (5): Bloque 1: Chi-square & Cramér's V on 28 bivariates, Block 1: Bivariate Descriptive Analysis, Cross-Tabulation Analysis, Graphify: Project Architecture Analysis, Resilience Analysis (Youth Defying Barriers)

### Community 4 - "Project Infrastructure"
Cohesion: 0.5
Nodes (4): Data Directory Structure, EAUI Subtel Project Overview, eaui2026_v3.ipynb (Latest Version), pyreadstat Library (SPSS Reader)

### Community 5 - "ML Interpretation"
Cohesion: 0.67
Nodes (3): Bloque 4: 6 RF models, SHAP interpretation, Block 4: Supervised Machine Learning (Classification, Interpretation), SHAP Values and Permutation Importance

### Community 6 - "Key Predictors"
Cohesion: 0.67
Nodes (3): Head Education: Parental Modeling Effect (66% university vs 26% no education), GSE: 3.3× Multiplier (AB 70% vs E 21% Advanced), Urban/Rural Gap: 10pp (42% vs 32% advanced)

## Knowledge Gaps
- **23 isolated node(s):** `Target Variables (Outcomes)`, `Structural Predictors`, `Expansion Factors (fe_hogar, fe_personas)`, `SHAP Values and Permutation Importance`, `Data Directory Structure` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.