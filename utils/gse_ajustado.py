import pandas as pd
import numpy as np

# Leer datos
df = pd.read_csv('/tmp/EAUI2026_habilidades_socio.csv', dtype={'educ_jh': str, 'ocupacion_jh': str})

# ============================================================================
# DERIVACIÓN DE GSE (Índice Socioeconómico AIM-ESOMAR)
# ============================================================================
# Mapea educación y ocupación del jefe/a de hogar a nivel socioeconómico
# Educación (educ_jh): Nuevas etiquetas mapeadas a categorías
# Ocupación (ocupacion_jh): Códigos 1-6 extraídos de la etiqueta
# GSE resultante: AB (alto), C1, C2, C3, D, E (bajo)

def _educ_g(e):
    """Mapea etiqueta educacional a categoría."""
    if pd.isna(e):
        return None
    
    e = str(e).lower()
    
    # Mapeo de etiquetas a categorías
    if "sin educación" in e or "básica incompleta" in e:
        return "basica"
    elif "básica completa" in e:
        return "basica"
    elif "media" in e and "incompleta" in e:
        return "media"
    elif "media" in e and "completa" in e:
        return "media"
    elif "técnica" in e or "tecnica" in e:
        return "tecnica"
    elif "universitaria" in e:
        return "universitaria"
    
    return None

def _ocup_code(o):
    """Extrae código de ocupación (1-6) de la etiqueta."""
    if pd.isna(o):
        return None
    
    o = str(o).strip()
    # Extraer número al inicio (ej: "3.Obrero..." → 3)
    if o[0].isdigit():
        return int(o[0])
    
    return None

# Matriz de cruce educación × ocupación → GSE
_M = {
    (1,"basica"):"E",  (1,"media"):"E",  (1,"tecnica"):"D",  (1,"universitaria"):"D",
    (2,"basica"):"E",  (2,"media"):"D",  (2,"tecnica"):"D",  (2,"universitaria"):"C3",
    (3,"basica"):"D",  (3,"media"):"C3", (3,"tecnica"):"C3", (3,"universitaria"):"C2",
    (4,"basica"):"C3", (4,"media"):"C2", (4,"tecnica"):"C2", (4,"universitaria"):"C1",
    (5,"basica"):"C2", (5,"media"):"C1", (5,"tecnica"):"C1", (5,"universitaria"):"AB",
    (6,"basica"):"C1", (6,"media"):"AB", (6,"tecnica"):"AB", (6,"universitaria"):"AB",
}

_ORDEN_GSE = ["AB", "C1", "C2", "C3", "D", "E"]

# Aplicar mapeos
educ_cat = df["educ_jh"].apply(_educ_g)
ocup_code = df["ocupacion_jh"].apply(_ocup_code)

# Combinar para obtener GSE
gse_values = []
for o, e in zip(ocup_code, educ_cat):
    if pd.isna(o) or e is None:
        gse_values.append(np.nan)
    else:
        gse_values.append(_M.get((int(o), e), np.nan))

# Crear variable categórica ordenada
df["gse"] = pd.Categorical(
    gse_values,
    categories=_ORDEN_GSE,
    ordered=True
)

# Resumen
print("="*80)
print("GSE DERIVADO — Distribución")
print("="*80)
print(df["gse"].value_counts().reindex(_ORDEN_GSE))
print(f"\nValores faltantes: {df['gse'].isna().sum()}")
print(f"Total casos: {len(df)}")
print(f"Cobertura: {(len(df) - df['gse'].isna().sum()) / len(df) * 100:.1f}%")

# Guardar
print("\nGuardando...")
df.to_csv('/tmp/EAUI2026_habilidades_socio.csv', index=False)
print("✓ Archivo actualizado con GSE")

