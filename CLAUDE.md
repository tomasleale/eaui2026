# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**EAUI 2026** — Encuesta de Actividades de Usuarios de Internet 2026. Data analysis project for internet usage and digital skills in Chile. Single Jupyter notebook (`eaui2026.ipynb`) with supporting Python utilities and data files.

### Data Pipeline
- **Input:** `data/2026.sav` (SPSS survey, 5,000 rows, 587 columns)
- **Process:** `eaui2026.ipynb` (preprocessing → descriptive stats → ML models → SHAP interpretability)
- **Output:** `outputs/` (processed datasets, visualizations, model artifacts)

### Key Concepts
- **Expansion factors:** Always use `fe_personas` (individual weight) or `fe_hogar` (household weight) in weighted calculations
- **Categorical ordering:** Use `ORDEN_CATEGORIAS` dict from `utils/orden_categorias.py` to maintain consistent category order in plots/tables
- **GSE derivation:** Socioeconomic index computed from household head education (A10) and occupation (A11) using AIM-ESOMAR method

---

## Running & Development

### Python Version
Uses Python 3.14.6 (see `.python-version`). Minimum supported: 3.9.

### Environment Setup

**Using uv (preferred):**
```bash
uv sync
uv run jupyter notebook eaui2026.ipynb
```

**Using pip:**
```bash
pip install -e .
jupyter notebook eaui2026.ipynb
```

**Manual dependency install (if needed):**
```bash
pip install pyreadstat prince scikit-learn kmodes shap pandas matplotlib seaborn scipy ipykernel jupyter
```

### Open Notebooks
- **Main analysis:** `eaui2026.ipynb` (primary source of truth)
- **Skills analysis:** `eaui_habilidades.ipynb` (supplementary skills-focused analysis)

### Utility Modules

**`utils/orden_categorias.py`**
- Dictionary of category orderings for consistent plotting/table output
- Use before any visualization to prevent alphabetical sorting
- Import: `from utils.orden_categorias import ORDEN_CATEGORIAS`
- Covers: `nivel_habilidades`, `sexo`, `tramo_edad`, `gse`, `zona`, `educ_jh`, `ocupacion_jh`, `ingreso_*`, `acceso_internet_hogar`, `tipo_acceso_*`, `tipo_plan`

**`dstats_ajustada.py`**
- Helper for weighted statistical analysis (univariate/bivariate, cross-tabs)
- Used in notebook for quick exploratory stats with expansion factors
- Function: `dstats(df, "variable", tipo="frecuencia", factor="fe_personas")`

**`gse_ajustado.py`**
- GSE (Socioeconomic Group) calculation utilities
- Used in preprocessing step (derives GSE from education A10 + occupation A11)

### Common Operations
- **Reload data:** `pyreadstat.read_sav("data/2026.sav")`
- **Export processed data:** Save to `outputs/` directory
- **Import utilities:** `from utils.orden_categorias import ORDEN_CATEGORIAS`
- **Weighted aggregations:** Use `.groupby(...).apply(lambda x: (x * df.loc[x.index, 'fe_personas']).sum())`

---

## Notebook Structure

### eaui2026.ipynb (Main Analysis Notebook)
**CRITICAL:** Run cells top-to-bottom sequentially. Downstream cells depend on preprocessed DataFrames from prior cells.

Sections in order:
1. **Libraries & configuration** — imports all dependencies
2. **Data loading from SPSS** — `pyreadstat.read_sav("data/2026.sav")` → raw df
3. **Preprocessing** (produces `df_clean`):
   - GSE derivation (AIM-ESOMAR from education A10 + occupation A11)
   - Missing values: `99` → `NaN` (amounts: `9999999` → `NaN`)
   - Variable renaming (SPSS codes to human-readable names)
   - Skill recoding (Q8_1 to Q8_18 → 0/"No", 1/"Sí")
   - Income midpoint estimation
4. **Weighted descriptive stats** — univariate & bivariate with `fe_personas`/`fe_hogar`
5. **Statistical inference** — chi-square tests, Cramér's V
6. **Advanced models** (each produces outputs/ artifacts):
   - **MCA + K-Means clustering:** Digital skills profiles by demographic/socioeconomic group
   - **Exploratory Factor Analysis:** Latent skill dimensions
   - **Classification models:** LogReg/Random Forest/GBM → `nivel_habilidades` prediction
   - **SHAP interpretability:** Feature importance plots for model classes (e.g., "Avanzado", "Sin habilidades")

### eaui_habilidades.ipynb (Skills Analysis)
Supplementary notebook focused on skills-specific deep-dives (clustering, profiles, patterns).

---

## Directory Structure

```
eaui2026/
├── eaui2026.ipynb                   # Main analysis notebook (single source of truth)
├── eaui_habilidades.ipynb           # Skills-focused supplementary analysis
├── CLAUDE.md                        # This file (Claude Code guidance)
├── AGENT_INSTRUCTIONS.md            # Architecture & data pipeline details
├── README.md                        # Project layout & conventions
│
├── pyproject.toml                   # Dependency declarations (uv/pip)
├── uv.lock                          # Lockfile for reproducible environments
├── Pipfile & Pipfile.lock          # Legacy pipenv configuration
│
├── utils/                           # Reusable Python utilities
│   └── orden_categorias.py          # Category ordering dict for consistent visualizations
│
├── dstats_ajustada.py               # Weighted statistical analysis helper (for notebook use)
├── gse_ajustado.py                  # GSE calculation utilities
├── main.py                          # Placeholder script
│
├── data/                            # Raw input (DO NOT modify directly)
│   ├── 2026.sav                     # SPSS survey (5,000 rows, 587 columns)
│   ├── libro_codigos_EAUI2026.xlsx  # Variable codebook
│   ├── libro_codigos_EAUI2026_habilidades_socio.xlsx  # Skills & socioeconomic codebook
│   └── EAUI2026_habilidades_socio.csv  # Pre-processed skills data
│
├── outputs/                         # Analysis results (plots, CSVs, model artifacts)
│   ├── *.png                        # SHAP & clustering visualizations
│   └── (model artifacts, if exported)
│
└── notebooks_backups/               # Historical snapshots of notebook runs
```

---

## Style & Conventions

### Code Style
- Siempre usar Read o Grep antes de Edit/Write.
- Nunca asumir la estructura de un archivo: verificarla.
- Usar Edit con old_string/new_string para cambios quirúrgicos.
- Solo Write para archivos nuevos o rewrites completos justificados.

### Tone (Spanish)
- Respuestas directas, sin saludos ni cierres.
- Nunca decir "¡Claro!" o "¡Excelente pregunta!".
- Nunca resumir lo que acabás de hacer después de hacerlo.

### Python Conventions
- Pandas with expansion factors: `grouped_stat = (series * weights).sum() / weights.sum()`
- Category ordering: Always import and apply `ORDEN_CATEGORIAS` before plotting
- Missing values: Coded as `99` (or `9999999` for amounts) → converted to `NaN` during preprocessing
- Imports: `import pyreadstat`, `from sklearn...`, `from utils.orden_categorias import...`

---

## Context & Efficiency

- Si un archivo ya fue leído en esta conversación, no volverlo a leer. Confiar en el contexto actual.
- Para búsquedas en >3 archivos, usar el subagente Explore (resultados resumidos).
- Una oración si alcanza con una oración. Sin markdown innecesario.
- Usar /compact antes de empezar una conversación nueva.

## Renombrado de archivos
- Si pido hacer un respaldo, inicia el nombre de archivo con la fecha en este formato: YYYY.MM.DD - 'filename' - backup.'extension'
- Si te pido fechar un archivo, sigue el mismo formato de fecha

## Working with Notebooks

### Before Modifying Cells
- Run the notebook top-to-bottom first to establish baseline state
- Note which cells depend on prior outputs (especially `df`, `df_clean`, models)
- When editing a cell, verify its input variables exist in prior cells
- After editing: restart kernel and rerun from the modified cell onward to validate chain

### Common Pitfalls
- **Missing `fe_personas` in aggregations:** Weighted stats require expansion factor multiplication
- **Alphabetical category ordering:** Always apply `ORDEN_CATEGORIAS` before plotting
- **Missing value codes:** `99` and `9999999` must be converted to `NaN` during preprocessing
- **Model reproducibility:** Set random seeds if regenerating models (K-Means, RF, GBM)

## Control de Calidad
- Cuando se pida modificar, refactorizar o hacer cambios funcionales al código: 
  - Verificar siempre que el código insertado no arroje errores (nunca adivinar)
  - Mantener intacta la ejecución secuencial de celdas del notebook
  - Probar cambios ejecutando desde la celda modificada en adelante
- No cambiar el orden de celdas sin justificación (rompe dependencias de datos)

---

## Knowledge Graph (Graphify)

Codebase has a queryable knowledge graph at `graphify-out/graph.json` with community detection and cross-document relationships.

**Available commands:**

```bash
# View interactive graph (open in browser after running)
open graphify-out/graph.html

# Update graph with new/changed files
/graphify update

# Query the graph (natural language questions)
/graphify query "How does preprocessing connect to clustering?"
/graphify query "What are the expansion factors used for?" --dfs

# Find shortest path between concepts
/graphify path "eaui2026.ipynb" "SHAP interpretability"

# Explain a specific concept
/graphify explain "ORDEN_CATEGORIAS"
```

**Graph structure (10 communities):**
- Data Loading & Format: SPSS files, pandas, utilities
- Analysis & Statistics: documentation, project overview
- ML Models & Clustering: feature engineering, weights
- Configuration & Setup: preprocessing pipeline
- Skill Classification: nivel_habilidades, scikit-learn, SHAP

**View report:** `graphify-out/GRAPH_REPORT.md` contains god nodes, surprising connections, and suggested exploration paths.
