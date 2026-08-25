# Guía: Uso de Factores de Expansión (fe_personas, fe_hogares)

## Resumen Ejecutivo

Los factores de expansión (`FE_PERSONAS`, `FE_HOGAR`) permiten que los resultados de la encuesta representen a toda la población chilena, no solo a la muestra de 5,000 respondentes.

## Variables de Expansión

| Variable | Tipo | Uso | Rango |
|----------|------|-----|-------|
| `FE_PERSONAS` | float64 | Datos individuales (encuestado, sus habilidades, actividades) | 405-22,122 |
| `FE_HOGAR` | float64 | Datos de hogar (acceso a internet del hogar, ingresos) | 194-5,584 |

## Diferencia: Muestra vs. Población

### Muestra (sin ponderación)
- Refleja a los 5,000 encuestados
- Puede tener sesgos (p. ej., más jóvenes educados)
- Útil para análisis de calidad de datos

**Ejemplo:**
```python
df['Q8_1'].sum() / len(df) * 100  # % que domina correos en muestra
# → 50.7% (de los 5,000 respondentes)
```

### Población (con ponderación)
- Representa ~13.5M de personas en Chile (según fe_personas)
- Corrige sesgos de muestreo
- Usado para reportes oficiales

**Ejemplo:**
```python
(df[df['Q8_1'] == 1.0]['FE_PERSONAS'].sum() / 
 df['FE_PERSONAS'].sum() * 100)
# → 50.4% (de los ~13.5M de chilenos)
```

## Fórmulas Estándar

### 1. Proporción Ponderada

**Pregunta:** ¿Qué % de la población domina correos?

```python
# Sin ponderación (muestra)
pct_muestra = (df['Q8_1'] == 1.0).sum() / df['Q8_1'].notna().sum() * 100

# Con ponderación (población)
df_no_na = df[df['Q8_1'].notna()]
pct_poblacion = (df_no_na[df_no_na['Q8_1'] == 1.0]['FE_PERSONAS'].sum() / 
                 df_no_na['FE_PERSONAS'].sum() * 100)
```

### 2. Promedio Ponderado

**Pregunta:** ¿Cuántas habilidades tiene el promedio de chilenos?

```python
# Sin ponderación (muestra)
promedio_muestra = df['n_habilidades'].mean()

# Con ponderación (población)
promedio_poblacion = (df['n_habilidades'] * df['FE_PERSONAS']).sum() / df['FE_PERSONAS'].sum()
```

### 3. Total Ponderado (Población Estimada)

**Pregunta:** ¿Cuántos chilenos usan internet casi todos los días?

```python
# Número de personas en la muestra
n_muestra = (df['Q10'] == 1.0).sum()

# Estimación de población
n_poblacion = df[df['Q10'] == 1.0]['FE_PERSONAS'].sum()
print(f"{n_muestra:,d} en muestra → ~{n_poblacion:,.0f} en población")
```

### 4. Desviación Estándar Ponderada

```python
media = (df['n_habilidades'] * df['FE_PERSONAS']).sum() / df['FE_PERSONAS'].sum()
varianza = ((df['n_habilidades'] - media)**2 * df['FE_PERSONAS']).sum() / df['FE_PERSONAS'].sum()
desv = np.sqrt(varianza)
```

## Análisis por Grupos Demográficos

### Estrategia: Agrupar → Ponderar

```python
# Comparar correos por grupo de edad (ponderado)
for grupo in ['<18', '18-25', '26-35', '36-45', '46-55', '56-65', '65+']:
    df_g = df[df['grupo_edad'] == grupo]
    df_g_no_na = df_g[df_g['Q8_1'].notna()]
    
    # Proporción ponderada en grupo
    pct = (df_g_no_na[df_g_no_na['Q8_1'] == 1.0]['FE_PERSONAS'].sum() / 
           df_g_no_na['FE_PERSONAS'].sum() * 100)
    
    # Población estimada del grupo
    pop_grupo = df_g['FE_PERSONAS'].sum()
    
    print(f"{grupo}: {pct:.1f}% (n_est ~{pop_grupo:,.0f})")
```

## Análisis de Hogares

Para datos de hogar (acceso a internet del hogar, dispositivos, ingresos), usar `FE_HOGAR`:

```python
# ¿Qué % de hogares tiene banda ancha fija?
df_no_na = df[df['Q12_1'].notna()]
pct_hogares = (df_no_na[df_no_na['Q12_1'] == 1.0]['FE_HOGAR'].sum() / 
               df_no_na['FE_HOGAR'].sum() * 100)

print(f"{pct_hogares:.1f}% de hogares (~{total_hogares:,.0f} hogares)")
```

**Filtrado por jefe de hogar** (si necesario):
```python
# Q1 = 1.0 indica "Jefe de hogar"
df_jefes = df[df['Q1'] == 1.0]  # Normalmente ya está filtrado
```

## Interpretación de Diferencias Muestra ↔ Población

| Diferencia | Interpretación |
|------------|---|
| Pob % > Muestra % | La población real tiene más prevalencia (muestra subreprenta) |
| Pob % < Muestra % | La población real tiene menos prevalencia (muestra sobrerepresenta) |
| Diferencia pequeña (<2pp) | Muestreo fue representativo |
| Diferencia grande (>5pp) | Sesgo de muestreo significativo |

**Ejemplo:**
```
Correos - Muestra: 50.7% | Población: 50.4% → Diferencia: -0.3pp
→ Muestra fue muy representativa
```

## Casos de Uso Comunes

### 1. Reporte Nacional
**Siempre usar POBLACIÓN (con fe_personas)**

```python
# "El 50.4% de los chilenos domina correos electrónicos"
(df[df['Q8_1'] == 1.0]['FE_PERSONAS'].sum() / 
 df['FE_PERSONAS'].sum() * 100)
```

### 2. Análisis Interno / QA
**Usar MUESTRA (sin ponderación)**

```python
# Verificar que la encuesta se ejecutó correctamente
print(f"Tasa de respuesta Q8_1: {df['Q8_1'].notna().sum() / len(df) * 100:.1f}%")
```

### 3. Comparaciones Demográficas
**Usar POBLACIÓN ponderada por grupo**

```python
# "El 76.3% de universitarios vs 6.8% de educación básica dominan correos"
pct_univ = ...  # con FE_PERSONAS
pct_basic = ...  # con FE_PERSONAS
```

### 4. Segmentación de Mercado
**Usar población estimada**

```python
# "Hay ~6.8M de chilenos en segmento de riesgo (educación básica)"
pop_riesgo = df[df['educ_agrupada'] == 'Básica']['FE_PERSONAS'].sum()
```

## Errores Comunes a Evitar

❌ **Mezclar ponderaciones:**
```python
# INCORRECTO: df tiene ~13.5M (fe_personas) pero Q8_1.sum() es solo 5,000
habilidades_totales = df['n_habilidades'].sum()  # ← Suma real, no ponderada
```

✅ **Usar ponderación consistente:**
```python
# CORRECTO: Ponderar todo con la misma fe
habilidades_totales = (df['n_habilidades'] * df['FE_PERSONAS']).sum()
```

---

❌ **Olvidar filtrar NaN:**
```python
# INCORRECTO: NaN puede sesgar resultados
df['Q8_1'].sum() / len(df)  # Divide por 5,000 incluyendo NaN
```

✅ **Filtrar NaN primero:**
```python
# CORRECTO: Solo usar datos válidos
df_no_na = df[df['Q8_1'].notna()]
df_no_na['Q8_1'].sum() / len(df_no_na)
```

---

❌ **Usar fe_personas para datos de hogar:**
```python
# INCORRECTO: Ingresos del hogar con fe_personas
(df[df['A12_1'] == 1.0]['FE_PERSONAS'].sum())  # ← Débería usar FE_HOGAR
```

✅ **Usar fe_hogar para datos de hogar:**
```python
# CORRECTO: Ingresos del hogar con fe_hogar
(df[df['A12_1'] == 1.0]['FE_HOGAR'].sum())
```

## Referencias

- **Documentación SPSS/pyreadstat:** Los factores se incluyen como columnas normales
- **Metodología EAUI:** Los pesos reflejan el diseño de muestreo estratificado
- **Representatividad:** fe_personas ajusta por no-respuesta y distribución poblacional

## Código Rápido (Copy-Paste)

```python
import pandas as pd
import numpy as np
import pyreadstat

# Cargar datos
df, meta = pyreadstat.read_sav('data/2026.sav')

# Template: Análisis ponderado
variable = 'Q8_1'  # Cambiar según necesidad
grupo_var = 'grupo_edad'  # 'educ_agrupada', 'gse', etc.

print(f"Análisis ponderado de {variable} por {grupo_var}:")
print("="*60)

for grupo in df[grupo_var].unique():
    if pd.notna(grupo):
        df_g = df[df[grupo_var] == grupo]
        df_g_no_na = df_g[df_g[variable].notna()]
        
        # Proporción ponderada
        pct = (df_g_no_na[df_g_no_na[variable] == 1.0]['FE_PERSONAS'].sum() / 
               df_g_no_na['FE_PERSONAS'].sum() * 100)
        
        # Población estimada
        pop_est = df_g['FE_PERSONAS'].sum()
        
        print(f"{grupo:20s}: {pct:5.1f}% (n_est ~{pop_est:>10,.0f})")
```

