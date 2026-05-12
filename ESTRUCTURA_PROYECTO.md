# EAUI Subtel 2026 — Estructura Activa

**Última actualización:** 12 mayo 2026

## 🔴 Núcleo del Proyecto

```
eaui2026_analisis_bloques_ordenado.ipynb  ← NOTEBOOK PRINCIPAL
  ↓ procesa
data/
  ├── sav/         datos SPSS originales (2008-2026)
  ├── csv/         exportaciones CSV
  ├── xlsx/        exportaciones Excel
  ├── raw/         datasets crudos adicionales
  └── processed/   datos procesados intermedios
```

## 📋 Documentación Activa

`docs/`
- **PLAN_ANALISIS_EAUI2026.md** — plan metodológico
- **ROBUSTEZ_Y_MANTENIMIENTO.md** — guía de robustez
- **PUBLICAR_DASHBOARD.md** — notas de publicación
- **README_DASHBOARD_EXPANDIDO.md** — docs dashboard
- **informe_final.pdf** — análisis principal completado
- **diccionario/** — diccionarios de variables

## 📊 Análisis y Resultados

`analysis/`
- **documentation/** — reportes finales
  - CLASSIFICATION_MODEL_IMPROVED.md
  - ANALISIS_SHAP.md
  - GRAPH_INSIGHTS.md
  - README_ANALYSIS.md
  - SUMMARY.md
- **shap_ranking_habilidades.csv** — ranking SHAP
- **outputs/** — visualizaciones procesadas

## 📁 Otros

`notebooks/` — notebook principal en raíz, versiones viejas en `_archive/notebooks/`

`agent-os/` — configuración Agent-OS

`_archive/` — histórico (ver README_ARCHIVO.md)

---

**Notebooks antes:** todas las versiones anteriores están en `_archive/notebooks/`

**Datos:** nunca modificar `/data/sav/` directamente; salidas procesadas van en `/data/processed/`

