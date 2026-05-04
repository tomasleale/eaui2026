# EAUI 2026 Analysis — Encuesta de Acceso y Uso de Internet en Chile

Análisis integral de acceso, habilidades digitales e intensidad de uso de internet en Chile 2026, con énfasis en factores sociodemográficos, brecha socioeconómica y predictores de comportamiento digital.

## Contenido

### Notebooks (Análisis Principal)

- **[`notebooks/eaui2026_analisis_bloques.ipynb`](notebooks/eaui2026_analisis_bloques.ipynb)** — Pipeline completo de análisis (5 bloques)
  - **Bloque 1:** Análisis bivariante descriptivo (chi-cuadrado, V de Cramér)
  - **Bloque 2:** Análisis multivariante (MCA, PCA, FAMD, clustering)
  - **Bloque 3:** Análisis inferencial (IC 95%, pruebas de hipótesis, regresión)
  - **Bloque 4:** Aprendizaje automático supervisado (Random Forest, SHAP)
  - **Bloque 5:** Síntesis ejecutiva, 15 insights clave, recomendaciones

### Documentación

- **[`docs/PLAN_ANALISIS_EAUI2026.md`](docs/PLAN_ANALISIS_EAUI2026.md)** — Plan metodológico detallado
- **[`docs/diccionario/`](docs/diccionario/)** — Diccionario de variables y códigos
- **[`analysis/documentation/`](analysis/documentation/)** — Reportes de hallazgos

### Análisis & Visualizaciones

- **[`analysis/graphify-out/graph.html`](analysis/graphify-out/graph.html)** — Grafo de conocimiento interactivo
- **[`analysis/graphify-out/GRAPH_REPORT.md`](analysis/graphify-out/GRAPH_REPORT.md)** — Reporte de comunidades y conexiones

## Resultados Principales

### Hallazgos Clave

1. **Brecha Socioeconómica Dominante** — Diferencial GSE (AB: 70% avanzado vs E: 21%) supera factores demográficos
2. **Edad Negativa en Habilidades** — Efecto no lineal: peak ~35 años, declina en ambos extremos
3. **Comportamiento > Demografía** — 68% importancia predictiva vs 32% para factores estáticos
4. **Acceso Secundario** — Internet en hogar casi irrelevante (-0.2%) sin actividades
5. **Efecto Educación Parental** — Modelado: 66% hijos universidad si madre/padre univ, 26% si sin educación

### Rendimiento Modelos

| Outcome | Baseline | Mejorado | Mejora |
|---------|----------|----------|--------|
| Habilidades digitales | 57.2% | 66.4% | +9.2pp |
| Acceso internet hogar | — | — | Estratificado por GSE |
| Intensidad uso | — | — | Dominado por comportamiento |

## Requisitos

```bash
# Entorno Python (recomendado: pyenv-virtualenv)
pip install pandas pyreadstat scikit-learn scipy statsmodels shap matplotlib seaborn

# Para Jupyter
pip install jupyter jupyterlab
```

## Usar

```bash
# Activar entorno (si usa pyenv-virtualenv)
pyenv activate datascience

# Iniciar Jupyter
jupyter notebook

# Abrir: notebooks/eaui2026_analisis_bloques.ipynb
```

## Estructura de Carpetas

```
eaui-subtel/
├── README.md                              # Este archivo
├── notebooks/
│   ├── eaui2026_analisis_bloques.ipynb   # PRINCIPAL — Análisis completo
│   └── archivos/                         # Iteraciones anteriores
├── docs/
│   ├── PLAN_ANALISIS_EAUI2026.md        # Plan metodológico
│   ├── diccionario/                     # Diccionarios de variables
│   └── reportes/                        # Reportes narrativos
├── analysis/
│   ├── documentation/                   # Hallazgos detallados
│   └── graphify-out/                    # Grafo de conocimiento
├── scripts/                             # Utilidades (generación dicts)
├── data/
│   ├── raw/                             # Datos originales (no publicado)
│   └── processed/                       # Derivados
└── .gitignore
```

## Variables Principales

- **Outcomes:** nivel_habilidades, acceso_internet_hogar, tipo_acceso_fijo, velocidad_contratada, intensidad_uso, internet_facilita_trabajo
- **Predictores estructurales:** GSE, edad, educación jefe hogar, zona (urbano/rural)
- **Predictores conductuales:** N actividades online, frecuencia, tipos de uso
- **Factores de expansión:** fe_hogar, fe_personas (ponderación)

## Métodos

### Análisis Bivariante
- Chi-cuadrado con corrección Yates
- V de Cramér (tamaño efecto)
- Análisis estratificado por GSE y zona

### Análisis Multivariante
- **MCA:** 19 variables de habilidades (Q8)
- **PCA:** 5 variables numéricas normalizadas
- **FAMD:** Datos mixtos (cat + num)
- **Clustering:** K-means (k=3-8), silueta óptima

### Inferencia
- IC 95% ponderados (DescrStatsW)
- t-tests, Kruskal-Wallis, ANOVA
- Regresión logística, ordinal, OLS, WLS
- Comparación SHAP vs permutation importance

### ML
- Random Forest (6 modelos, 1 por outcome)
- Feature importance + SHAP force/decision plots
- Validación: hold-out test set

## Citas & Referencias

Para citar este análisis:
```bibtex
@misc{eaui2026,
  title={EAUI 2026: Análisis de Acceso y Uso de Internet en Chile},
  author={Leal Elgueda, Tomás},
  year={2026},
  url={https://github.com/tomas/eaui-subtel}
}
```

## Contacto

- **Análisis:** tomasleal@gmail.com
- **Datos:** Subtel (Subsecretaría de Telecomunicaciones, Chile)

## Licencia

[Especificar licencia: MIT, CC BY, etc.]

---

**Última actualización:** 2026-05-03  
**Status:** Análisis completo (Bloques 1-5 ejecutados)
