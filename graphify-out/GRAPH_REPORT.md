# Graph Report - .  (2026-04-30)

## Corpus Check
- Corpus is ~1,441 words - fits in a single context window. You may not need a graph.

## Summary
- 39 nodes · 45 edges · 12 communities detected
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.74)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Analysis Pipeline|Analysis Pipeline]]
- [[_COMMUNITY_Analysis Output & Formatting|Analysis Output & Formatting]]
- [[_COMMUNITY_Data Transformation|Data Transformation]]
- [[_COMMUNITY_Socioeconomic Classification|Socioeconomic Classification]]
- [[_COMMUNITY_Digital Skills Classification|Digital Skills Classification]]
- [[_COMMUNITY_Text Cleaning|Text Cleaning]]
- [[_COMMUNITY_Income Calculation|Income Calculation]]
- [[_COMMUNITY_GSE Calculation|GSE Calculation]]
- [[_COMMUNITY_Skill Level Categorization|Skill Level Categorization]]
- [[_COMMUNITY_Education Mapping|Education Mapping]]
- [[_COMMUNITY_Matplotlib Visualization|Matplotlib Visualization]]
- [[_COMMUNITY_Seaborn Visualization|Seaborn Visualization]]

## God Nodes (most connected - your core abstractions)
1. `pandas` - 8 edges
2. `dstats` - 6 edges
3. `style_dataframe()` - 5 edges
4. `dstats()` - 4 edges
5. `calcular_gse` - 4 edges
6. `style_dataframe` - 4 edges
7. `analizar_rm` - 4 edges
8. `calcular_nivel_habilidades` - 4 edges
9. `_ordenar_categorias()` - 3 edges
10. `analizar_rm()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `dstats()` --calls--> `style_dataframe()`  [EXTRACTED]
  eaui_utils.py → eaui_utils.py  _Bridges community 1 → community 2_
- `calcular_gse` --calls--> `pandas`  [EXTRACTED]
  /Users/tomas/github/eaui_subtel/eaui_utils.py → /Users/tomas/github/eaui_subtel/eaui_utils.py  _Bridges community 3 → community 0_
- `calcular_nivel_habilidades` --calls--> `pandas`  [EXTRACTED]
  /Users/tomas/github/eaui_subtel/eaui_utils.py → /Users/tomas/github/eaui_subtel/eaui_utils.py  _Bridges community 4 → community 0_

## Hyperedges (group relationships)
- **** — eaui_utils_dstats, eaui_utils_analizar_rm, eaui_utils_analizar_rm_cruce [EXTRACTED 0.85]
- **** — eaui_utils_calcular_gse, eaui_utils_calcular_ingresos, eaui_utils_calcular_nivel_habilidades [EXTRACTED 0.90]
- **** — eaui_utils_orden_gse, eaui_utils_orden_categorias, eaui_utils_mapa_educ, eaui_utils_mapa_ocup [EXTRACTED 0.95]

## Communities

### Community 0 - "Analysis Pipeline"
Cohesion: 0.39
Nodes (9): analizar_rm, analizar_rm_cruce, calcular_ingresos, dstats, limpiar_etiqueta, ORDEN_CATEGORIAS, _ordenar_categorias, pandas (+1 more)

### Community 1 - "Analysis Output & Formatting"
Cohesion: 0.33
Nodes (6): analizar_rm(), analizar_rm_cruce(), Formato visual: enteros sin decimales para conteos, porcentajes con 1 decimal., Analiza un grupo de respuesta múltiple., Analiza un grupo de respuesta múltiple cruzado por una variable demográfica., style_dataframe()

### Community 2 - "Data Transformation"
Cohesion: 0.5
Nodes (4): dstats(), _ordenar_categorias(), Ordena las categorías de un DataFrame según el diccionario de órdenes., Análisis ponderado de variables simples.     tipo: 'frecuencia' | 'cruzada' | 'p

### Community 3 - "Socioeconomic Classification"
Cohesion: 0.5
Nodes (4): calcular_gse, MAPA_OCUP, numpy, ORDEN_GSE

### Community 4 - "Digital Skills Classification"
Cohesion: 0.5
Nodes (4): calcular_nivel_habilidades, Q8_AVANZADO, Q8_BASICO, Q8_INTERMEDIO

### Community 5 - "Text Cleaning"
Cohesion: 0.67
Nodes (2): limpiar_etiqueta(), Extrae la parte descriptiva útil de una etiqueta SPSS.

### Community 6 - "Income Calculation"
Cohesion: 1.0
Nodes (2): calcular_ingresos(), Calcula el punto medio de ingresos y grupos de ingresos.

### Community 7 - "GSE Calculation"
Cohesion: 1.0
Nodes (2): calcular_gse(), Calcula el GSE derivado usando las variables A10 (educación JH) y A11 (ocupación

### Community 8 - "Skill Level Categorization"
Cohesion: 1.0
Nodes (2): calcular_nivel_habilidades(), Categoriza el nivel de habilidades digitales (Q8).

### Community 9 - "Education Mapping"
Cohesion: 1.0
Nodes (1): MAPA_EDUC

### Community 10 - "Matplotlib Visualization"
Cohesion: 1.0
Nodes (1): matplotlib.pyplot

### Community 11 - "Seaborn Visualization"
Cohesion: 1.0
Nodes (1): seaborn

## Knowledge Gaps
- **19 isolated node(s):** `Extrae la parte descriptiva útil de una etiqueta SPSS.`, `Calcula el GSE derivado usando las variables A10 (educación JH) y A11 (ocupación`, `Calcula el punto medio de ingresos y grupos de ingresos.`, `Formato visual: enteros sin decimales para conteos, porcentajes con 1 decimal.`, `Ordena las categorías de un DataFrame según el diccionario de órdenes.` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Text Cleaning`** (3 nodes): `limpiar_etiqueta()`, `Extrae la parte descriptiva útil de una etiqueta SPSS.`, `eaui_utils.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Income Calculation`** (2 nodes): `calcular_ingresos()`, `Calcula el punto medio de ingresos y grupos de ingresos.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `GSE Calculation`** (2 nodes): `calcular_gse()`, `Calcula el GSE derivado usando las variables A10 (educación JH) y A11 (ocupación`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Skill Level Categorization`** (2 nodes): `calcular_nivel_habilidades()`, `Categoriza el nivel de habilidades digitales (Q8).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Education Mapping`** (1 nodes): `MAPA_EDUC`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Matplotlib Visualization`** (1 nodes): `matplotlib.pyplot`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Seaborn Visualization`** (1 nodes): `seaborn`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pandas` connect `Analysis Pipeline` to `Socioeconomic Classification`, `Digital Skills Classification`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Why does `calcular_nivel_habilidades` connect `Digital Skills Classification` to `Analysis Pipeline`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Why does `calcular_gse` connect `Socioeconomic Classification` to `Analysis Pipeline`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `pandas` (e.g. with `dstats` and `limpiar_etiqueta`) actually correct?**
  _`pandas` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `dstats` (e.g. with `pandas` and `analizar_rm`) actually correct?**
  _`dstats` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Extrae la parte descriptiva útil de una etiqueta SPSS.`, `Calcula el GSE derivado usando las variables A10 (educación JH) y A11 (ocupación`, `Calcula el punto medio de ingresos y grupos de ingresos.` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._