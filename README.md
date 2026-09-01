# EAUI 2026 — Encuesta de Actividades de Usuarios de Internet

Análisis de uso de internet y habilidades digitales en Chile. Datos de encuesta a 5,000 personas (587 variables) con pipeline completo de procesamiento, análisis ponderado y modelos predictivos.

## Inicio rápido

```bash
# Setup (requiere Python 3.9+)
uv sync
uv run jupyter notebook eaui2026.ipynb
```

O con pip:
```bash
pip install -e .
jupyter notebook eaui2026.ipynb
```

## Estructura

```
eaui2026/
├── eaui2026.ipynb              # Main analysis (source of truth)
├── eaui_habilidades.ipynb      # Skills-focused supplementary analysis
├── data/                        # Raw SPSS + codebooks
├── utils/                       # Reusable Python utilities
├── docs/                        # Guías de referencia
├── notebooks_backups/           # Exploratory notebooks
├── outputs/                     # Visualizations & results
└── CLAUDE.md                    # Claude Code instructions
```

## Flujo de análisis

**eaui2026.ipynb** (ejecutar primero, orden secuencial):
1. Carga datos SPSS (5k casos, 587 variables)
2. Preprocesamiento: GSE, recodificación de habilidades, imputación
3. Estadísticas descriptivas ponderadas (fe_personas, fe_hogar)
4. Modelos ML: MCA → K-Means clustering, EFA, clasificación (LogReg/RF/GBM)
5. Interpretabilidad SHAP

**eaui_habilidades.ipynb**: análisis profundo de habilidades digitales + perfiles por demografía.

## Conceptos clave

- **Factores expansión:** `fe_personas` (peso individual), `fe_hogar` (peso hogar)
- **GSE:** Derivado de educación (A10) + ocupación (A11) usando AIM-ESOMAR
- **Ordenamiento categorías:** Usar `ORDEN_CATEGORIAS` (utils/orden_categorias.py) en plots
- **Nivel habilidades:** Variable dependiente derivada (0-3: Sin/Bajo/Medio/Avanzado)

## Archivos clave

### Data (`data/`)
- `2026.sav` — Encuesta SPSS (5,000 filas × 587 columnas)
- `libro_codigos_*.xlsx` — Diccionarios de variables
- `EAUI2026_habilidades_socio.csv` — Dataset preprocesado (habilidades)

### Utilities (`utils/`)
- `orden_categorias.py` — Diccionario de ordenamiento para consistencia visual
- `dstats_ajustada.py` — Análisis ponderado (frecuencia, cruces, promedios)
- `gse_ajustado.py` — Cálculo de índice socioeconómico

### Documentación (`docs/`)
- `GUIA_FACTORES_EXPANSION.md` — Cómo usar pesos en análisis
- `PIPELINE_HABILIDADES_GUIA.md` — Derivación de nivel_habilidades

## Imports típicos

```python
from utils.orden_categorias import ORDEN_CATEGORIAS
from utils.dstats_ajustada import dstats
from utils.gse_ajustado import calcular_gse
import pyreadstat
```

## Control de calidad

- ✓ Ejecutar celdas secuencialmente (top-to-bottom)
- ✓ Verificar sumas ponderadas vs marco muestral (Censo)
- ✓ Aplicar `ORDEN_CATEGORIAS` antes de plots
- ✓ Convertir `99` → `NaN` durante preprocesamiento

---

**Version:** 2026-09-01 | **Python:** 3.9+ | **Maintainer:** Tomás Leal
