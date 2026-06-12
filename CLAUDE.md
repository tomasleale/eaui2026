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

### Open the Notebook
```bash
jupyter notebook eaui2026.ipynb
```

### Python Environment
Install dependencies as needed:
```bash
pip install pyreadstat prince scikit-learn kmodes shap pandas matplotlib seaborn scipy
```

### Common Operations
- **Reload data:** `pyreadstat.read_sav("data/2026.sav")`
- **Export processed data:** Save to `outputs/` directory
- **Import utilities:** `from utils.orden_categorias import ORDEN_CATEGORIAS`
- **Weighted aggregations:** Use `.groupby(...).apply(lambda x: (x * df.loc[x.index, 'fe_personas']).sum())`

---

## Notebook Structure

Sections in order (run top-to-bottom):
1. Libraries & configuration
2. Data loading from SPSS
3. Preprocessing: GSE, missing values (99 → NaN), variable renaming, skill recoding (Q8), income estimation
4. Weighted descriptive stats (univariate & bivariate)
5. Statistical inference (chi-square, Cramér's V)
6. Advanced models:
   - MCA + K-Means clustering (digital skills profiles)
   - Exploratory factor analysis
   - Classification models (LogReg/RF/GBM) → skill level prediction
   - SHAP feature importance plots

---

## Directory Structure

```
eaui2026/
├── eaui2026.ipynb                   # Main analysis notebook (single source of truth)
├── README.md                        # Project layout & conventions
├── AGENT_INSTRUCTIONS.md            # Architecture & data pipeline details
├── CLAUDE.md                        # This file
│
├── data/                            # Raw input (DO NOT modify directly)
│   ├── 2026.sav                     # SPSS survey data
│   └── libro_codigos_EAUI2026.xlsx  # Variable codebook
│
├── outputs/                         # Results (CSVs, plots, artifacts)
│
└── notebooks_backups/               # Historical backups of notebook runs
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

## Control de calidad
- Si te pido modificar código, refactorizarlo o hacer modificaciones funcionales al código, asegurate siempre de que el código que insertes no arroje errores. No adivines el código a insertar. También siempre asegurate de que la ejecución secuencial de las celdas del notebook se mantenga intacta siempre.
