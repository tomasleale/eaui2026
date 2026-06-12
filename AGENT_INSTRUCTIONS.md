# EAUI 2026 — Architecture & Agent Instructions

This document outlines the architecture, data pipeline, variables, and analysis conventions of the **EAUI 2026** (Encuesta de Actividades de Usuarios de Internet 2026) project.

---

## 1. Directory Structure

The repository has the following layout in the workspace:

```
eaui2026/
├── eaui2026.ipynb                 # Core Jupyter Notebook (Single source of truth)
├── README.md                        # Project layout and guidelines
├── GEMINI.md                        # Gemini CLI guidelines
├── AGENT_INSTRUCTIONS.md            # This architecture and instruction file
│
├── data/                            # Raw data and metadata
│   ├── 2026.sav                     # SPSS survey dataset (5,000 rows, 587 columns)
│   └── libro_codigos_EAUI2026.xlsx  # Variable codebook
│
└── notebooks_backups/               # Backups of historical runs
```

---

## 2. Core Data Pipeline (data/ → eaui2026.ipynb)

The dataset progresses through the following sequential stages in the notebook:

### 2.1 Carga (Data Ingestion)
- Loaded via `pyreadstat.read_sav()` from `data/2026.sav`.
- Contains 5,000 individual cases.

### 2.2 Preprocesamiento (Preprocessing)
1. **GSE Derivation (AIM-ESOMAR):** Computed using household head education (`A10`) and occupation (`A11`).
2. **Missing Values (NS/NR):** Values coded as `99` (or `9999999` for amounts) are mapped to `NaN`.
3. **Renaming:** Long SPSS variable codes are mapped to human-readable short names.
4. **Digital Skills Recoding (Q8):** The 18 skill variables (`Q8_1` to `Q8_18`) are mapped to `0` ("No") and `1` ("Sí").
5. **Income Midpoint Estimation:** Monthly household income is mapped to the midpoint of its corresponding tranche.

---

## 3. Key Conventions

### 3.1 Weighting & Expansion Factors
Always use expansion factors for calculations:
- `fe_personas` (Individual weight): Use for individual-level calculations (e.g., demographics, skills).
- `fe_hogar` (Household weight): Use for household-level calculations (e.g., internet connection, home equipment).

### 3.2 Categorical Ordering (`ORDEN_CATEGORIAS`)
To prevent alphabetical sorting of categories in plots and tables, the notebook utilizes the `ORDEN_CATEGORIAS` dictionary for consistent ordering.
Supported variables: `nivel_habilidades`, `sexo`, `tramo_edad`, `gse`, `zona`, `educ_jh`, `ocupacion_jh`, `ingreso_tramo`, `ingreso_grupo`, `acceso_internet_hogar`, `tipo_acceso_fijo`, `tipo_plan`, `tipo_acceso_mas_usado`.

---

## 4. Modeling & Machine Learning

### 4.1 MCA + K-Means Clustering (Individuals)
- **Features:** Categorical indicators of digital skills (`tiene_X` variables) and sociodemographic profile.
- **Method:** Multiple Correspondence Analysis (MCA) using the `prince` library, followed by K-Means on the coordinates.

### 4.2 Classification Models (Skills Prediction)
- **Target:** `nivel_habilidades` ("Sin habilidades", "Básico", "Intermedio", "Avanzado").
- **Features:** Demographics (age, gender, region, zone), GSE, education group, occupation, internet frequency, and access.
- **Models Evaluated:** Logistic Regression, Random Forest, Gradient Boosting.

### 4.3 Model Interpretability (SHAP)
- **Model Explained:** Multiclass `RandomForestClassifier`.
- **Method:** `shap.TreeExplainer` on the preprocessed feature matrix.
- **Plots Generated:** Summary and bar plots of SHAP values for target classes (e.g., "Avanzado" and "Sin habilidades") saved in the `outputs/` directory.

### 4.4 K-Modes Clustering (No-Connection Households)
- **Subset:** Households without internet (`acceso_internet_hogar == "No"`).
- **Features:** Binary reasons for not having internet (`P13_1` to `P13_N`).
- **Method:** K-Modes clustering via the `kmodes` library.
