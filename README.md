# EAUI 2026 - Estructura del Proyecto

## Esquema de carpetas

```
eaui2026/
├── eaui2026.ipynb                 # Notebook principal de trabajo
├── README.md                        # Este archivo
├── .gitignore
├── CLAUDE.md                        # Instrucciones del proyecto
│
├── data/                            # Datos brutos y metadatos
│   ├── 2026.sav                     # Dataset principal (SPSS)
│   ├── libro_codigos_EAUI2026.xlsx  # Diccionario de variables
│   └── cluster.txt                  # Metadata de clusters
│
├── notebooks/                       # Notebooks secundarios y backups
│   ├── 20260601_backup_eaui2026.ipynb
│   └── eaui2026_backup_20260527_031401.ipynb
│
├── outputs/                         # Resultados, gráficos, derivados
│   ├── df.csv                       # Dataset procesado exportado
│   └── nivel_habilidades_por_cluster.png
│
├── utils/                           # Funciones y configuraciones reutilizables
│   └── orden_categorias.py          # Diccionario ORDEN_CATEGORIAS y helpers
│
└── docs/                            # Documentación
    ├── AGENTS.md
    └── CLAUDE.md
```

## Razonamiento

**Raíz limpia**
- Solo `eaui2026.ipynb` en raíz. Punto de entrada único para el análisis.
- Documentación de configuración (`CLAUDE.md`) y guía (`README.md`) accesible al abrir la carpeta.

**data/**
- Datos brutos (.sav, xlsx) y metadatos (diccionarios, clusters).
- No se modifica directamente dentro del notebook.
- Fuente de verdad de variable definitions.

**notebooks/**
- Backups versionados del trabajo histórico.
- Aislados del notebook activo para no contaminar búsquedas ni confundir.

**outputs/**
- Gráficos, CSVs exportados, visualizaciones.
- Resultado del análisis, listo para pegar en reportes o dashboards.

**utils/**
- `orden_categorias.py`: configuración central (diccionario, funciones helper).
- Importable directamente en el notebook como módulo Python.
- Separado del notebook para reutilizabilidad y mantenimiento.

**docs/**
- Documentación del proyecto, instrucciones, metadata operacional.
- Separada de ejecución para claridad.

## Convenciones de trabajo

1. **Flujo de datos:** data/ → eaui2026.ipynb → outputs/
2. **Importar utilidades:** `from utils.orden_categorias import ORDEN_CATEGORIAS`
3. **Nuevos gráficos/exports:** guardar siempre en outputs/
4. **Cambios en diccionarios:** actualizar `utils/orden_categorias.py` primero
5. **Backups:** versionados automáticamente en notebooks/ si necesario
