# Pipeline Completo: Análisis de Habilidades Digitales y Factores Sociodemográficos
## EAUI 2026

**Archivo:** `analisis_habilidades_sociodemografico.ipynb`

---

## 📋 Estructura del Pipeline

### Sección 1: Configuración e Importaciones
- Carga de librerías estándar (pandas, numpy, matplotlib, seaborn, scikit-learn)
- Configuración de estilos visuales y opciones de display

### Sección 2: Carga de Datos
- Lectura del CSV `EAUI2026_habilidades_socio.csv` (5,000 registros)
- Verificación de variables clave presentes
- Análisis del factor de expansión `fe_personas`:
  - Media: ~2,700 (población ponderada per cápita)
  - Suma total: población expandida (~13.5 millones)

### Sección 3: Definición de Variables
**Habilidades digitales (Q8_1 a Q8_18):**
- Q8_1 a Q8_3: Office (Word, Excel, PowerPoint)
- Q8_4 a Q8_7: Sistemas y dispositivos (archivos, conexiones, apps, seguridad)
- Q8_8 a Q8_9: Desarrollo (programación, web)
- Q8_10 a Q8_15: Multimedia y comunicación (videos, juegos, redes, edición, videollamadas)
- Q8_16 a Q8_18: Servicios digitales (emails, transacciones, IA)

**Variables sociodemográficas:**
- Edad → Grupos: 15-19, 20-29, 30-39, 40-49, 50-59, 60+
- Sexo
- Educación (del encuestado)
- Ocupación
- Ingreso del hogar
- GSE (A, B, C3, C2, D, E)
- Zona (Urbana/Rural)
- Región

### Sección 4: Limpieza y Preprocesamiento
- Conversión de habilidades: Sí/No → 1/0
- Eliminación de registros con `fe_personas` o edad nula
- **Indicadores calculados:**
  - `num_habilidades`: suma de habilidades (0-18)
  - `nivel_habilidades`: clasificación
    - Sin habilidades (0 habilidades)
    - Básico (1-3 habilidades)
    - Intermedio (4-8 habilidades)
    - Avanzado (9-18 habilidades)
  - `grupo_edad`: agrupación en 6 categorías

### Sección 5: Funciones Auxiliares
Implementadas 4 funciones de análisis ponderado por `fe_personas`:

1. **`frecuencia_ponderada(df, variable)`**
   - Calcula distribución % de categorías
   - Retorna: población ponderada (%), n real, suma fe_personas

2. **`tablas_cruzadas_ponderadas(df, var_filas, var_columnas)`**
   - Tabla cruzada normalizada por filas
   - % de var_columnas dentro de cada categoría de var_filas

3. **`prevalencia_habilidad_ponderada(df, habilidad, var_grupo)`**
   - % de personas con una habilidad específica por grupo
   - Útil para análisis detallados por habilidad

4. **`chi_cuadrado_ponderado(df, var1, var2)`**
   - Test de independencia χ² ponderado
   - Retorna: χ², p-valor, significancia (p < 0.05), grados de libertad

---

## 📊 Secciones de Análisis

### Sección 6: Análisis Descriptivo General
- **Prevalencia de cada habilidad:** % población con cada habilidad (ponderado)
  - Gráfico horizontal: prevalencia ordenada (menor a mayor)
  - Identifica habilidades masivas vs. niche
  
- **Distribución de nivel de habilidades:**
  - Tabla: % población en cada nivel
  - Gráfico de barras: proporciones de Sin habilidades, Básico, Intermedio, Avanzado

### Sección 7: Análisis Cruzado — Edad
- Tabla cruzada: Grupo de Edad × Nivel de Habilidades
- Test χ² para evaluar independencia
- Gráfico stacked bar: distribución de niveles por edad
- Línea de tendencia: promedio de habilidades por grupo
- **Insight esperado:** Decaimiento de habilidades con edad

### Sección 8: Análisis Cruzado — Sexo
- Tabla cruzada: Sexo × Nivel de Habilidades
- Test χ² para brecha de género
- Gráficos: distribución de niveles y promedio de habilidades por sexo
- **Insight esperado:** Brecha de género en habilidades (si la hay)

### Sección 9: Análisis Cruzado — Educación
- Tabla cruzada: Educación × Nivel de Habilidades (tabular)
- Test χ² para asociación educación-habilidades
- Gráfico horizontal stacked: distribución por nivel educativo
- Ranking: promedio de habilidades por nivel educativo
- **Insight esperado:** Educación es predictor fuerte

### Sección 10: Análisis Cruzado — GSE
- Tabla cruzada: GSE × Nivel de Habilidades (ordenado A→E)
- Test χ² para desigualdad socioeconómica
- Gráfico stacked: distribución por GSE
- Ranking: promedio de habilidades por GSE
- **Insight esperado:** Brecha importante A/B vs D/E

### Sección 11: Análisis Cruzado — Zona
- Tabla cruzada: Zona (Urbana/Rural) × Nivel de Habilidades
- Test χ² para brecha urbano-rural
- Gráficos: distribución de niveles y promedio por zona
- **Insight esperado:** Urbano > Rural

### Sección 12: Matriz de Correlación
- Matriz 18×18: correlaciones de Pearson entre habilidades
- Heatmap visual: colores rojo (negativa), amarillo (neutra), verde (positiva)
- Tabla: pares de habilidades fuertemente correlacionadas (r > 0.5)
- **Insight:** Identifica clusters de habilidades correlacionadas

### Sección 13: Análisis de Clústeres (K-Means)
- Método del codo: gráfico de inercia vs. k
- Clustering con k=3 perfiles
- Caracterización por clúster:
  - Tamaño (n real y ponderado)
  - Promedio de habilidades
  - Top 5 habilidades más prevalentes
- **Insight:** Perfiles naturales de usuarios (sin habilidades, intermedio, avanzado)

### Sección 14: Resumen de Insights Clave
- Puntos clave por dimensión sociodemográfica
- Brecha digital por edad, género, educación, GSE, zona
- Habilidades críticas de mayor adopción

---

## 🎯 Cómo Usar el Notebook

### Ejecución Inicial
```bash
# En terminal
cd /Users/tomas/github/eaui2026
jupyter notebook analisis_habilidades_sociodemografico.ipynb
```

### Flujo Recomendado
1. **Ejecutar celdas 1-5:** Cargar datos y definir variables
2. **Ejecutar sección 6:** Ver prevalencia general de habilidades
3. **Ejecutar secciones 7-11:** Analizar brechas por cada factor sociodemográfico
4. **Revisar tests χ²:** Identificar asociaciones significativas (p < 0.05)
5. **Ejecutar secciones 12-13:** Entender correlaciones y perfiles de usuarios
6. **Leer resumen final:** Consolidar insights

### Modificaciones Posibles
- **Cambiar punto de corte de nivel:**
  - Sección 4, función `clasificar_habilidades()`
  - Ej: Avanzado = 9-18 vs 10-18
  
- **Agregar más grupos de edad:**
  - Sección 4, función `crear_grupo_edad()`
  - Ej: 15-25, 26-35, 36-45, etc.
  
- **Cambiar k en clustering:**
  - Sección 13: `k_final = 3` → cambiar a 4, 5, etc.

- **Agregar nuevas variables sociodemográficas:**
  - Agregar a `socio_vars` en Sección 3
  - Repetir Sección 7-11 para nueva variable

---

## 📈 Salidas del Pipeline

### Tablas de Resultados
- Prevalencia de habilidades (18 filas)
- Cruces ponderados (variable × 4 niveles)
- Tests χ² (p-valor de independencia)
- Rankings de promedio de habilidades

### Visualizaciones
- 15+ gráficos (barras, líneas, stacked, heatmap)
- Todos salvados en memoria (ejecutables nuevamente)

### Datos de Salida
Almacenados en memoria durante sesión:
- `df_clean`: dataset procesado (con fe_personas ponderado)
- `prev_df`: tabla de prevalencias
- Múltiples dataframes de cruces (edad_hab_df, sexo_hab_df, etc.)
- Matriz de correlación: `corr_hab`

**Para exportar resultados:**
```python
# Al final del notebook, agregar:
edad_hab_df.to_csv('outputs/habilidades_por_edad.csv', index=False)
prev_df.to_csv('outputs/prevalencia_habilidades.csv')
corr_hab.to_csv('outputs/correlacion_habilidades.csv')
```

---

## 🔑 Puntos Clave del Análisis

### Factor de Expansión
- **fe_personas** expande cada registro a población nacional
- Todas las agregaciones usan `groupby(...)[factor].sum()`
- Porcentajes siempre basados en población ponderada, no n real

### Significancia Estadística
- Tests χ² evalúan si asociaciones son estadísticamente significativas
- **p < 0.05:** Asociación significativa (rechazar independencia)
- **p ≥ 0.05:** No hay evidencia de asociación

### Interpretación de Niveles
- **Sin habilidades:** No puede realizar ninguna tarea
- **Básico:** Tareas muy simples (redes sociales, youtube)
- **Intermedio:** Tareas cotidianas (emails, transferencias)
- **Avanzado:** Tareas técnicas (programación, edición, web)

---

## 📝 Próximas Pasos Recomendados

1. **Análisis de Segmentación:** Crear perfiles de usuario + targets de políticas
2. **Análisis Causal:** Variables que más impulsan habilidades (educación > edad?)
3. **Modelado Predictivo:** Predecir nivel de habilidades desde variables sociodemográficas
4. **Análisis Temporal:** Comparar con EAUI 2024 si está disponible
5. **Profundización:** Analizar desigualdades interseccionales (edad + género + GSE)
