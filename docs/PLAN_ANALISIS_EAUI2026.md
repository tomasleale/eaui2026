# Plan de Análisis — EAUI 2026

**Base de datos:** `encuesta_uso_internet_chile_2026.csv` (5.000 casos, ~500 variables)
**Diccionario:** `EAUI_2026_Diccionario_Variables.csv`
**Notebook base:** `eaui2026_v3_clean.ipynb`
**Fecha plan:** 2026-05-03

Este documento define la hoja de ruta analítica para responder las preguntas sustantivas de la EAUI 2026 sobre acceso, uso, habilidades y percepciones digitales en Chile. Está organizado en cuatro bloques que aumentan en complejidad: descriptivo bivariado, multivariado, inferencial y machine learning supervisado.

---

## 0. Preparación previa (común a todas las secciones)

Antes de cualquier análisis conviene dejar resuelto lo siguiente. Estos pasos ya están parcialmente implementados en `eaui2026_v3_clean.ipynb`, pero deben verificarse.

**Variables objetivo (outcomes) que aparecerán repetidamente.** Son las preguntas sustantivas que queremos explicar o predecir:

- `acceso_internet_hogar` (binaria) — brecha de acceso.
- `nivel_habilidades` (ordinal: Sin habilidades / Básico / Intermedio / Avanzado) — brecha de habilidades.
- `tipo_acceso_fijo` y `velocidad_contratada` — calidad/cobertura.
- `intensidad_uso`, `n_actividades`, `frecuencia_internet`, `tiempo_diario_internet` — intensidad de uso.
- `internet_facilita_trabajo`, `internet_mejora_vida`, `percepcion_proteccion` — percepciones.

**Predictores estructurales clave.** Dado el marco socioeconómico chileno, los más relevantes son:

- Sociodemográficos: `edad`, `tramo_edad`, `sexo`, `educ_grupo`, `ocupacion_encuestado`.
- Socioeconómicos: `gse`, `ingreso_grupo`, `ingreso_pm`.
- Geográficos: `region`, `zona` (urbana/rural).
- Hogar: `educ_jh`, `ocupacion_jh`, `n_smartphones_hogar`, `n_computadores_hogar`.

**Factores de expansión.** El dataset incluye `fe_hogar` y `fe_personas`. Toda estimación poblacional (porcentajes, medias, totales, intervalos de confianza, pruebas) debe ponderarse con el factor que corresponda a la unidad de análisis. Para esto conviene usar:

```python
# Estadística descriptiva ponderada
import numpy as np
def media_ponderada(x, w):
    return np.average(x, weights=w)

# Para inferencia ponderada (SE correctos): statsmodels
import statsmodels.api as sm
modelo = sm.WLS(y, X, weights=df["fe_personas"]).fit()
```

Para análisis muestrales más estrictos (errores estándar de diseño complejo), considerar la librería [`samplics`](https://samplics-org.github.io/samplics/).

**Limpieza recurrente.** Verificar codificación de no-respuesta (NS/NR → NaN), tipos `category` con orden para variables ordinales (`gse`, `tramo_edad`, `nivel_habilidades`), y tratar variables filtro (`uso_smartphone == "Sí"` antes de analizar `pago_mensual_movil`).

---

## 1. Análisis descriptivo bivariado

**Propósito:** describir cómo se distribuyen las variables clave entre subgrupos, e identificar las brechas más relevantes que luego serán formalizadas con inferencia y ML.

### 1.1 Matriz de cruces prioritarios

La idea es cubrir cada variable objetivo contra los predictores estructurales. Un buen punto de partida es esta matriz:

| Outcome \ Predictor | edad/tramo_edad | sexo | educ_grupo | gse | zona | region | ingreso_grupo |
|---|---|---|---|---|---|---|---|
| acceso_internet_hogar | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| nivel_habilidades | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| tipo_acceso_fijo | — | — | ✔ | ✔ | ✔ | ✔ | ✔ |
| velocidad_contratada | — | — | ✔ | ✔ | ✔ | ✔ | ✔ |
| intensidad_uso | ✔ | ✔ | ✔ | ✔ | ✔ | — | ✔ |
| internet_mejora_vida | ✔ | ✔ | ✔ | ✔ | ✔ | — | — |
| percepcion_proteccion | ✔ | ✔ | ✔ | ✔ | ✔ | — | — |

### 1.2 Tipo de cruce y técnica adecuada

**Categórica × categórica.** Tabla de contingencia con porcentajes por fila (proporciones condicionales) y test chi-cuadrado de independencia. Reportar también el coeficiente V de Cramer para tener una idea del tamaño del efecto, no sólo de la significancia.

```python
tabla = pd.crosstab(df["nivel_habilidades"], df["gse"], normalize="columns") * 100
from scipy.stats import chi2_contingency
chi2, p, _, _ = chi2_contingency(pd.crosstab(df["nivel_habilidades"], df["gse"]))
```

**Categórica × numérica.** Estadísticos descriptivos por grupo (media, mediana, p25/p75, n) y boxplots. Si la categoría es ordinal (ej. `gse`), ordenar los grupos en el eje X para que el patrón se vea.

```python
df.groupby("gse")["pago_mensual_internet"].describe()
sns.boxplot(data=df, x="gse", y="pago_mensual_internet", order=["AB","C1","C2","C3","D","E"])
```

**Numérica × numérica.** Scatterplot + correlación de Pearson (si lineal) o Spearman (si monotónica no necesariamente lineal). En esta encuesta hay pocas pares puramente numéricas; las más interesantes son `edad` vs `n_actividades` o `pago_mensual_internet` vs `velocidad_contratada` (recodificada a numérica).

### 1.3 Visualizaciones recomendadas

- **Mapas de calor** (heatmap) de tablas de contingencia normalizadas — muy útiles para ver de un vistazo dónde están las brechas (ej. `nivel_habilidades × tramo_edad`).
- **Gráficos de barras apiladas al 100%** para mostrar composición (ej. tipo de plan por GSE).
- **Mapa de Chile por región** (con `geopandas` + shapefile de regiones) para `acceso_internet_hogar` y `nivel_habilidades` — esto da una capa territorial que las tablas no transmiten.

### 1.4 Productos esperados de esta sección

Un cuaderno con ~20–30 cruces clave, cada uno acompañado de: tabla, visualización, una frase interpretativa y el p-valor del test correspondiente. Esto define la "narrativa" del informe.

---

## 2. Análisis multivariado

**Propósito:** entender la estructura latente de las variables (cómo se agrupan), reducir dimensionalidad y construir tipologías de hogares/personas.

### 2.1 Análisis factorial de habilidades digitales

Las 19 variables `Q8_1` … `Q8_19` (habilidades específicas) son binarias y muy correlacionadas. Aplicar:

- **MCA (Análisis de Correspondencias Múltiples)** si se mantienen como categóricas, usando `prince`:
  ```python
  from prince import MCA
  mca = MCA(n_components=3).fit(df[habilidades_cols])
  ```
- Alternativamente, **TFA (análisis factorial de variables tetracóricas)** si se quiere extraer dimensiones latentes interpretables (p.ej. "habilidades ofimáticas", "habilidades sociales", "habilidades avanzadas"). Esto valida o refina las categorías ya derivadas (`cat_ofimatica`, `cat_rrss_y_comunicacion`, `cat_seguridad`, etc.).

El resultado debiera ser un mapa de las habilidades en 2–3 dimensiones que permita ver qué habilidades co-ocurren y cómo se posicionan las personas.

### 2.2 Reducción de dimensionalidad sobre el dataset

Para tener una visión panorámica de cómo se estructuran los respondentes:

- **PCA** sobre el subset de variables numéricas (edad, n_actividades, n_dispositivos, intensidad_uso, freq_num, horas_num, pago_mensual_internet). Visualizar PC1 vs PC2 coloreando por `gse` o `nivel_habilidades`.
- **FAMD** (Factor Analysis of Mixed Data, también en `prince`) si se quieren incluir variables categóricas.

### 2.3 Clustering / segmentación

Construir una **tipología de usuarios** combinando dimensiones de acceso, intensidad y habilidades. Procedimiento sugerido:

1. Seleccionar features estandarizadas (StandardScaler).
2. Determinar número de clusters (codo + silhouette score, probar k=3 a 6).
3. Ajustar **K-means** o **K-prototypes** (este último maneja mixto numérico/categórico).
4. Caracterizar cada cluster cruzándolo con `gse`, `tramo_edad`, `zona`, `nivel_habilidades`.

Output esperado: 4–5 perfiles tipo (ej. "jóvenes hiperconectados con habilidades avanzadas", "adultos mayores con acceso pero sin habilidades", "rurales desconectados", etc.) con su tamaño relativo y caracterización.

### 2.4 Análisis de correspondencias clásico

Para una variable categórica con muchos niveles vs otra (ej. `region` × `tipo_acceso_fijo`), el **AC simple** (`prince.CA`) produce un mapa biplot que muestra qué regiones se asocian con qué tecnologías de acceso. Más informativo que una tabla 16×6.

---

## 3. Análisis inferencial

**Propósito:** pasar de "lo que se observa en la muestra" a "lo que probablemente ocurre en la población", usando los factores de expansión y reportando incertidumbre.

### 3.1 Estimaciones poblacionales con intervalos de confianza

Para todas las proporciones y medias clave del informe, reportar IC 95% **ponderados**. Con `statsmodels`:

```python
from statsmodels.stats.weightstats import DescrStatsW
d = DescrStatsW(df["pago_mensual_internet"].dropna(),
                weights=df.loc[df["pago_mensual_internet"].notna(), "fe_personas"])
print(d.mean, d.tconfint_mean())
```

Para proporciones, usar `proportion_confint` o calcularlas manualmente con varianza ponderada.

### 3.2 Pruebas de hipótesis

A partir de los cruces del bloque 1, formalizar las que son sustantivas:

- **Chi-cuadrado** para independencia entre categóricas (¿el acceso depende de la zona? ¿el nivel de habilidades depende del GSE?).
- **t-test / Mann-Whitney** para diferencias de medias entre dos grupos (ej. pago_mensual_internet urbano vs rural).
- **ANOVA / Kruskal-Wallis** para 3+ grupos (ej. tiempo_diario_internet por tramo_edad).
- **Correlación con test de significancia** (`scipy.stats.pearsonr`, `spearmanr`).

Importante aplicar **corrección por comparaciones múltiples** (Bonferroni o, mejor, Benjamini-Hochberg) si se hacen muchos tests, para no inflar la tasa de falsos positivos.

### 3.3 Modelos de regresión

Aquí es donde se controla por confusores y se aíslan efectos parciales.

**Regresión logística binaria** — outcomes binarios:
- `acceso_internet_hogar` ~ `gse + zona + tramo_edad + educ_jh + region`.
- `internet_facilita_trabajo` ~ `nivel_habilidades + ocupacion + edad + sexo`.

**Regresión logística ordinal** — `nivel_habilidades` (4 niveles ordenados):
```python
from statsmodels.miscmodels.ordinal_model import OrderedModel
m = OrderedModel(df["nivel_habilidades"], df[predictores], distr="logit").fit()
```

**Regresión logística multinomial** — `tipo_acceso_fijo` (categórica sin orden).

**Regresión lineal (OLS o WLS)** — outcomes continuos como `pago_mensual_internet`, `n_actividades`, `tiempo_diario_internet` (recodificado a horas).

Para todos: reportar coeficientes, OR/IRR según el modelo, IC 95%, y probar la calidad de ajuste (pseudo-R², AIC, residuos). **Usar pesos de expansión** y, si hay clustering geográfico (comuna/región), considerar errores estándar robustos por cluster.

### 3.4 Extensión: regresión con efectos fijos por región

Para separar el efecto del territorio del de las características individuales, agregar `C(region)` como dummies, o usar modelos multinivel (`statsmodels` o `pymer4`) con region/comuna como nivel 2.

---

## 4. Machine Learning supervisado

**Propósito:** construir modelos predictivos para los outcomes clave y, sobre todo, **interpretarlos** para identificar qué factores realmente explican las brechas. Aquí el objetivo no es sólo predecir bien, es entender.

> Ya existe trabajo previo en `eaui2026_v3_clean.ipynb` (modelo mejorado de habilidades, 66.4% accuracy con LR). Este plan extiende eso a otros outcomes y formaliza el pipeline.

### 4.1 Outcomes a modelar

| # | Outcome | Tipo | Modelos sugeridos |
|---|---|---|---|
| A | `nivel_habilidades` | Clasificación multiclase ordinal | LogReg, RandomForest, GradientBoosting, XGBoost |
| B | `acceso_internet_hogar` | Clasificación binaria | LogReg, RF, GradientBoosting |
| C | `tipo_acceso_fijo` | Clasificación multiclase | RF, GradientBoosting (clases desbalanceadas → SMOTE o `class_weight`) |
| D | `velocidad_contratada` (recodificada a Mbps numérica) | Regresión | OLS, RandomForestRegressor, GradientBoostingRegressor |
| E | `intensidad_uso` o `n_actividades` | Regresión | Mismos que D |
| F | `internet_facilita_trabajo` | Clasificación binaria | LogReg, RF |

### 4.2 Pipeline estándar

Para todos los modelos seguir el mismo esqueleto, varía sólo el outcome y los hiperparámetros:

```python
from sklearn.model_selection import train_test_split, cross_val_score, StratifiedKFold
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import GradientBoostingClassifier

num_features = ["edad", "n_actividades", "n_dispositivos", "ingreso_pm"]
cat_features = ["gse", "zona", "educ_grupo", "sexo", "region"]

pre = ColumnTransformer([
    ("num", StandardScaler(), num_features),
    ("cat", OneHotEncoder(handle_unknown="ignore"), cat_features),
])

pipe = Pipeline([("pre", pre), ("clf", GradientBoostingClassifier(random_state=42))])

X_train, X_test, y_train, y_test = train_test_split(
    df[num_features + cat_features], df["nivel_habilidades"],
    test_size=0.2, stratify=df["nivel_habilidades"], random_state=42
)

scores = cross_val_score(pipe, X_train, y_train, cv=StratifiedKFold(5), scoring="accuracy")
pipe.fit(X_train, y_train)
```

### 4.3 Métricas

- **Clasificación binaria:** accuracy, precision, recall, F1, ROC-AUC, matriz de confusión.
- **Clasificación multiclase:** accuracy, F1 macro y weighted, matriz de confusión normalizada por fila. Si es ordinal (`nivel_habilidades`), reportar también **Quadratic Weighted Kappa** que penaliza más los errores entre clases distantes.
- **Regresión:** RMSE, MAE, R², gráfico de predicho vs observado.

### 4.4 Manejo de problemas comunes

- **Clases desbalanceadas** (`tipo_acceso_fijo`, `nivel_habilidades`): usar `class_weight="balanced"` o oversampling con `imbalanced-learn` (SMOTE / SMOTENC para mixto).
- **Variables filtro y NaN estructurales** (ej. `pago_mensual_internet` sólo definido para quienes tienen acceso): filtrar el universo o imputar explícitamente con un marcador.
- **Leakage**: cuidado con incluir como predictores variables derivadas que ya contienen el outcome (ej. `nivel_habilidades` se construye desde Q8_*; no usar Q8_* como features para predecir `nivel_habilidades`).

### 4.5 Interpretación de modelos

Esta es la parte más importante. Un modelo opaco con 70% accuracy es menos útil que un modelo con 65% que explica por qué.

- **Permutation importance** (sklearn) — robusta y agnóstica al modelo.
- **SHAP values** (`shap` library) — descompone la predicción de cada caso en contribuciones por feature. Permite responder "¿por qué este perfil tiene baja probabilidad de habilidades avanzadas?".
  ```python
  import shap
  explainer = shap.TreeExplainer(modelo)
  shap_values = explainer.shap_values(X_test)
  shap.summary_plot(shap_values, X_test)
  ```
- **Partial Dependence Plots (PDP)** y **ICE plots** para entender la forma de la relación entre un predictor y el outcome.

Ya existe un análisis SHAP previo (`SHAP_ANALYSIS.md`, `shap_ranking_habilidades.csv`); replicarlo y extenderlo a los outcomes B–F.

### 4.6 Validación adicional

- **Validación cruzada estratificada** (StratifiedKFold k=5 o 10) en lugar de un único split.
- **Calibración de probabilidades** (`CalibratedClassifierCV`) si las probabilidades predichas se van a interpretar (ej. "X% de probabilidad de tener acceso").
- **Estabilidad de feature importance**: correr el modelo con varias semillas y reportar rangos, no un único número.

---

## 5. Cronograma sugerido y entregables

| Fase | Bloque | Entregable | Tiempo estimado |
|---|---|---|---|
| 1 | Preparación | Notebook con limpieza y variables derivadas validadas | 1 semana |
| 2 | Bivariado | Notebook + galería de tablas/gráficos clave | 1–2 semanas |
| 3 | Multivariado | Notebook con factorial, clustering y tipología | 2 semanas |
| 4 | Inferencial | Tabla con todos los modelos de regresión + IC | 2 semanas |
| 5 | ML | Notebook con pipeline, métricas y SHAP por outcome | 2–3 semanas |
| 6 | Síntesis | Capítulo del informe + visualizaciones finales | 1–2 semanas |

---

## 6. Notas prácticas para la implementación

- Mantener **una notebook por bloque** (descriptivo, multivariado, inferencial, ML) para que cada una sea reproducible y no se vuelva inmanejable.
- Versionar resultados intermedios en `data/derivados/` (no sobre-escribir `data/2026_procesado.csv`).
- Para cada hallazgo importante: guardar la cifra/coeficiente y el código que lo generó, idealmente con un `.csv` o `.pkl` exportado. Esto facilita rehacer el informe sin re-ejecutar todo.
- Documentar siempre **qué universo se está usando** (¿total muestra? ¿sólo quienes tienen acceso? ¿sólo usuarios de smartphone?). Es la fuente más común de confusiones en encuestas con tantas variables filtro.
