# GEMINI.md - EAUI 2026

## Project Overview
**EAUI 2026** (Encuesta de Actividades de Usuarios de Internet 2026) is a data science project dedicated to the consolidated and linear analysis of internet user activity survey data. The project employs a structured Python-based workflow within a Jupyter Notebook to perform everything from data cleaning and preprocessing to advanced statistical modeling and machine learning.

### Core Technologies
- **Language:** Python 3.12+
- **Data Handling:** `pandas`, `numpy`, `pyreadstat` (for SPSS .sav files)
- **Visualization:** `matplotlib`, `seaborn`
- **Statistical Modeling:** `prince` (MCA), `scikit-learn` (Clustering, Classification, Regression), `kmodes`
- **Interpretability:** `shap`

## Project Structure
The project follows a "single source of truth" approach for analysis:
- `eaui2026.ipynb`: The primary, consolidated analysis notebook.
- `data/`: Contains raw datasets and metadata.
    - `2026.sav`: Main SPSS dataset.
    - `libro_codigos_EAUI2026.xlsx`: Variable dictionary and coding book.
- `notebooks_backups/`: Historical versions and backups of the analysis.
- `README.md`: Architectural design and project reasoning.
- `CLAUDE.md`: Operational instructions and AI interaction rules.

*Note: Some directories mentioned in README.md (utils/, outputs/, docs/) may be created as the project matures.*

## Key Concepts & Conventions
- **Weighting:** Always use expansion factors for analysis:
    - `fe_personas`: For individual-level analysis.
    - `fe_hogar`: For household-level analysis.
- **Data Flow:** `data/` → `eaui2026.ipynb` → `outputs/` (intended).
- **Categorical Order:** Follow established category orders (previously defined in `utils/orden_categorias.py` or within the notebook).
- **Linear Execution:** The notebook is designed for top-to-bottom execution without state errors.

## Operational Guidelines for Gemini CLI
- **Tone:** Direct, technical, and concise. Avoid conversational filler or redundant summaries.
- **Workflow:** Prioritize reading `eaui2026.ipynb` to understand current analysis logic.
- **Modifications:** Perform surgical edits to notebook cells or documentation. Always verify structure before editing.
- **Tooling:** Use `rtk` (Rust Token Killer) proxy for shell commands as per global configuration.

## Common Tasks (TODO)
- [ ] Implement export logic to `outputs/`.
- [ ] Extract re-usable logic to `utils/orden_categorias.py`.
- [ ] Complete SHAP-based model interpretation.
