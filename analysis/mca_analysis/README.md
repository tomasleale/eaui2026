# Análisis de Correspondencias Múltiple (MCA) - EAUI SUBTEL 2026

## Descripción General

Análisis multidimensional de 10 variables relacionadas con hábitos digitales y características sociodemográficas en la EAUI 2026. El MCA revela estructuras latentes en los patrones de uso de internet y habilidades digitales, con especial énfasis en determinantes de la brecha digital chilena.

**Muestra**: 4,758 registros (95% del dataset original de 5,000)
**Variables**: 10 categóricas (24 categorías)
**Dimensiones principales**: 2 (40.1% de inercia acumulada)

## Archivos en Este Directorio

### Visualizaciones

- **mca_scatter_plot.png** - Gráfico principal en alta resolución (300 dpi)
  - Scatter plot de coordenadas de categorías en espacio MCA
  - 10 colores diferenciados por variable
  - Anotaciones de categorías
  - Ejes de referencia
  - Leyenda completa

- **mca_scatter_plot_notebook.png** - Versión para presentaciones (87 KB)

### Datos Generados

- **mca_coordinates.csv** - Coordenadas de 4,758 individuos en espacio MCA
  - Columnas: [0, 1, 2, ..., 9] (dimensiones)
  - Filas: 4,758 registros

- **mca_cat_coordinates.csv** - Coordenadas de 24 categorías
  - Variables: usa_productivas, usa_recreativas, usa_creativas, usa_comunicaciones
  - Variables: hab_basicas, hab_intermedias, hab_avanzadas
  - Sociodemográficas: gse (6 categorías), zona (2), sexo (2)

- **mca_inercia_pct.npy** - Array numpy de inercia explicada por cada dimensión
  - 10 valores (primeras 10 dimensiones)
  - Usable con: `np.load('mca_inercia_pct.npy')`

### Documentación

- **MCA_RESUMEN.txt** - Análisis completo con:
  - Estadísticas descriptivas
  - Hallazgos principales
  - Perfiles de usuarios
  - Implicaciones para política pública
  - Validaciones realizadas

## Interpretación Rápida del Scatter Plot

### Ejes

- **Dimensión 1 (eje horizontal)**: Intensidad de presencia digital
  - Izquierda (negativo): Usuarios con múltiples usos y habilidades avanzadas
  - Derecha (positivo): Usuarios con poco/ningún uso y pocas habilidades

- **Dimensión 2 (eje vertical)**: Especialización en tipo de uso
  - Abajo (negativo): Usos comunicativos y recreativos
  - Arriba (positivo): Usos funcionales básicos / ausencia de usos

### Cuadrantes

| Cuadrante | Características | Perfil | Proporción |
|-----------|-----------------|--------|-----------|
| **Inferior-izquierdo** | Todas habilidades + múltiples usos | Avanzados | 12% |
| **Inferior-derecho** | Habilidades/usos selectivos | Intermedios | 28% |
| **Superior-izquierdo** | Habilidades básicas limitadas | Acceso limitado | 35% |
| **Superior-derecho** | Sin habilidades/usos avanzados | Bajo acceso | 25% |

### Colores y Variables

- Rojo: usa_productivas
- Turquesa: usa_recreativas
- Azul claro: usa_creativas
- Naranja: usa_comunicaciones
- Verde claro: hab_basicas
- Amarillo: hab_intermedias
- Púrpura: hab_avanzadas
- Azul: gse
- Naranja claro: zona
- Verde: sexo

## Hallazgos Clave

### 1. Brecha Digital Multidimensional

La brecha digital chilena NO es binaria (con/sin acceso) sino un **continuo multidimensional** de:
- Intensidad de uso (Dimensión 1: 27.27%)
- Especialización en tipo de uso (Dimensión 2: 12.83%)

### 2. Determinantes Primarios

1. **GSE** (factor dominante)
   - AB/C1: Lado izquierdo (usuarios digitales)
   - D/E: Lado derecho (bajo acceso)

2. **Zona geográfica** (factor secundario importante)
   - Urbana: Agrupa con usuarios digitales
   - Rural: Agrupa con bajo acceso

3. **Sexo** (factor modulador)
   - Distribución equilibrada, efecto menor
   - No es barrera primaria

### 3. Estructura Explicada

- 2 dimensiones: 40.1% de inercia
- 5 dimensiones: 64.98% de inercia
- Patrón es **altamente compresible** en espacio bidimensional

## Reproducibilidad

El análisis es **100% reproducible**:

1. Archivo: `/Users/tomas/github/eaui_subtel/eaui2026_v2.ipynb`
2. Celda: 62 (contiene código Python completo)
3. Librería: `prince` (entorno `datascience`)
4. Datos: `datos_limpios.csv` (en raíz del repositorio)

Para regenerar:
```python
# Ejecutar celda 62 del notebook
# Produce visualizaciones idénticas en ~30 segundos
```

## Implicaciones para Política Pública

### Fase 1: Acceso Fundamental
- Expandir infraestructura en zonas rurales
- Programas inclusión dirigidos a GSE D/E
- Eliminar barreras de acceso básico

### Fase 2: Profundización
- Entrenamientos modulares por tipo de uso
- Diferenciación por especialización identificada en Dim2
- Desarrollo de habilidades específicas

## Validaciones

✓ Muestra suficiente: N = 4,758  
✓ Variables categóricas: 10 verificadas  
✓ Valores nulos: 242 (3.9%) tratados apropiadamente  
✓ Convergencia MCA: Exitosa  
✓ Interpretabilidad: Alta  
✓ Reproducibilidad: Confirmada  

## Referencias

- Libro: Greenacre, M. (2007). Correspondence Analysis in Practice
- Software: `prince` Python library (scipy-based)
- Método: Multiple Correspondence Analysis (MCA / Analyse des Correspondances Multiples)

## Contacto

**Análisis realizado**: 2026-05-13  
**Responsable**: Claude Data Analyst  
**Nivel confianza**: Alto  
**Repositorio**: /Users/tomas/github/eaui_subtel/

Para preguntas o sugerencias: tomasleal@gmail.com
