# ============================================================================
# FUNCIÓN DSTATS — Análisis Ponderado (AJUSTADA A NUEVAS VARIABLES)
# ============================================================================
# Uso: dstats(df, "variable", tipo="frecuencia", factor="fe_personas")
# Tipos: "frecuencia", "cruzada", "promedio", "suma"

import pandas as pd
import numpy as np
from IPython.display import display, HTML

# Diccionario de ordenamiento de categorías
# Actualiza según tus necesidades de presentación
ORDEN_CATEGORIAS = {
    "gse": ["AB", "C1", "C2", "C3", "D", "E"],
    "zona": ["URBANA", "RURAL"],
    "region": [
        "Arica", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso",
        "Ohiggins", "Maule", "Biobío", "Araucanía", "Los Lagos", "Los Ríos",
        "Metropolitana", "Ñuble", "Aysen", "Magallanes"
    ],
    "sexo": ["Hombre", "Mujer"],
    "edad": ["15-24", "25-34", "35-44", "45-54", "55-64", "65+"],
    "educ": [
        "Sin educación formal", "Básica incompleta", "Básica completa",
        "Media Científico-Humanista Incompleta", "Media Científico-Humanista Completa",
        "Media Técnico-Profesional Incompleta", "Media Técnico-Profesional Completa",
        "Superior Técnica Incompleta", "Superior Técnica Completa",
        "Superior Universitaria Incompleta", "Superior Universitaria Completa"
    ],
    "ultimo_uso_internet": ["Hoy", "Ayer", "Hace 2-3 días", "Hace una semana o más", "No usa internet"],
    "frecuencia_internet": ["Varias veces al día", "Diaria", "4-5 días a la semana", "2-3 días a la semana", "1 día a la semana", "Rara vez", "Nunca"],
}

def _ordenar(df, variable):
    """Ordena DataFrame según ORDEN_CATEGORIAS si existe."""
    if variable not in ORDEN_CATEGORIAS:
        return df
    
    orden = ORDEN_CATEGORIAS[variable]
    idx_ordenado = [v for v in orden if v in df.index]
    idx_resto = [v for v in df.index if v not in idx_ordenado]
    
    return df.reindex(idx_ordenado + idx_resto)

def _mostrar(df, titulo):
    """Imprime tabla alineada y muestra DataFrame HTML."""
    print(f"\n{'='*80}")
    print(f"{titulo}")
    print(f"{'='*80}\n")
    print(df.to_string())
    print()
    display(df)

def dstats(data_df, variables, tipo="frecuencia", cruce=None, cruce2=None, factor=None,
           transponer=False, imprimir=True):
    """
    Análisis ponderado. Devuelve un DataFrame.

    Parámetros:
    -----------
    data_df : DataFrame
        Datos con variables y factor de expansión
    variables : str o list
        Variable(s) a analizar
    tipo : str
        "frecuencia" → recuento y %, "cruzada" → tabla pivote,
        "promedio" → promedio ponderado, "suma" → suma ponderada
    factor : str
        Factor de expansión ("fe_personas" o "fe_hogar")
    cruce : str
        Variable para cruzar (solo tipos "cruzada", "promedio", "suma")
    cruce2 : str
        Segunda variable de cruce (solo tipo "cruzada")
    transponer : bool
        Transpone tabla de cruces
    imprimir : bool
        Si True, imprime tabla y muestra HTML

    Retorna: DataFrame con análisis solicitado
    """
    if isinstance(variables, str):
        variables = [variables]
    
    # Validar columnas
    cols_requeridas = variables + ([factor] if factor else []) + ([cruce] if cruce else []) + ([cruce2] if cruce2 else [])
    for col in cols_requeridas:
        if col and col not in data_df.columns:
            raise ValueError(f"Columna '{col}' no existe.")

    # FRECUENCIA
    if tipo == "frecuencia":
        var = variables[0]
        tot = data_df[factor].sum()
        res = (data_df.groupby(var, observed=True)[factor].sum()
               .reset_index().rename(columns={factor: "n_ponderado"}))
        res["porcentaje"] = (res["n_ponderado"] / tot * 100).round(2)
        res = _ordenar(res, var).set_index(var)
        titulo = f"Frecuencia: '{var}' — base ponderada: {int(tot):,} ({factor})"
        if imprimir:
            _mostrar(res, titulo)
        return res

    # CRUZADA
    if tipo == "cruzada":
        var = variables[0]
        tot = data_df[factor].sum()

        # Cruce triple (var × cruce × cruce2)
        if cruce2:
            t = data_df.pivot_table(
                values=factor,
                index=var,
                columns=[cruce, cruce2],
                aggfunc="sum",
                fill_value=0,
                observed=True,
            )
            tp = t.div(t.sum(axis=0), axis=1).mul(100).round(2)

            # Ordenar índice
            if var in ORDEN_CATEGORIAS:
                of = [v for v in ORDEN_CATEGORIAS[var] if v in t.index]
                if of:
                    otros = [v for v in t.index if v not in of]
                    t, tp = t.reindex(of + otros), tp.reindex(of + otros)

            # Ordenar nivel 0 de columnas (cruce)
            if cruce in ORDEN_CATEGORIAS:
                oc = [v for v in ORDEN_CATEGORIAS[cruce] if v in t.columns.get_level_values(0)]
                if oc:
                    otros = [v for v in t.columns.get_level_values(0).unique() if v not in oc]
                    orden_cols = [(c, c2) for c in (oc + otros) for c2 in t.columns.get_level_values(1).unique() 
                                  if (c, c2) in t.columns]
                    t = t[orden_cols]
                    tp = tp[orden_cols]

            # Ordenar nivel 1 de columnas (cruce2)
            if cruce2 in ORDEN_CATEGORIAS:
                oc2 = [v for v in ORDEN_CATEGORIAS[cruce2] if v in t.columns.get_level_values(1)]
                if oc2:
                    columnas_ordenadas = [col for col in t.columns if col[1] in oc2]
                    columnas_otras = [col for col in t.columns if col[1] not in oc2]
                    t = t[columnas_ordenadas + columnas_otras]
                    tp = tp[columnas_ordenadas + columnas_otras]

            if transponer:
                t, tp = t.T, tp.T

            # Combinar n y % por columna
            cols = []
            for c1, c2 in t.columns:
                cols.append(t[(c1, c2)].rename(f"n {c1}|{c2}"))
                cols.append(tp[(c1, c2)].rename(f"% {c1}|{c2}"))
            
            res = pd.concat(cols, axis=1) if cols else pd.DataFrame()
            titulo = f"Cruce: '{var}' x '{cruce}' x '{cruce2}' — base: {int(tot):,} ({factor})"
            if imprimir:
                _mostrar(res, titulo)
            return res

        # Cruce simple (dos variables)
        t = data_df.pivot_table(
            values=factor,
            index=var,
            columns=cruce,
            aggfunc="sum",
            fill_value=0,
            observed=True,
        )
        tp = t.div(t.sum(axis=0), axis=1).mul(100).round(2)
        
        # Ordenar índice
        if var in ORDEN_CATEGORIAS:
            of = [v for v in ORDEN_CATEGORIAS[var] if v in t.index]
            if of:
                otros = [v for v in t.index if v not in of]
                t, tp = t.reindex(of + otros), tp.reindex(of + otros)
        
        # Ordenar columnas
        if cruce in ORDEN_CATEGORIAS:
            oc = [v for v in ORDEN_CATEGORIAS[cruce] if v in t.columns]
            if oc:
                otros = [v for v in t.columns if v not in oc]
                t, tp = t[oc + otros], tp[oc + otros]
        
        if transponer:
            t, tp = t.T, tp.T
        
        # Combinar n y %
        cols = []
        for c in t.columns:
            cols.append(t[c].rename(f"n {c}"))
            cols.append(tp[c].rename(f"% {c}"))
        
        res = pd.concat(cols, axis=1) if cols else pd.DataFrame()
        titulo = f"Cruce: '{var}' x '{cruce}' — base: {int(tot):,} ({factor})"
        if imprimir:
            _mostrar(res, titulo)
        return res

    # PROMEDIO y SUMA
    def _wavg(sub, v, f):
        """Promedio ponderado."""
        d = sub[[v, f]].dropna()
        if len(d) > 0 and pd.to_numeric(d[v], errors='coerce').notna().any():
            return float(round(np.average(pd.to_numeric(d[v], errors='coerce'), 
                                         weights=d[f], returned=False), 4))
        return np.nan

    def _wsum(sub, v, f):
        """Suma ponderada."""
        d = sub[[v, f]].dropna()
        if len(d) > 0:
            return float(round((pd.to_numeric(d[v], errors='coerce') * d[f]).sum(), 4))
        return np.nan

    fn = _wavg if tipo == "promedio" else _wsum
    col_name = "promedio_ponderado" if tipo == "promedio" else "suma_ponderada"

    # Sin cruce
    if not cruce:
        res = pd.DataFrame([(v, fn(data_df, v, factor)) for v in variables],
                           columns=["variable", col_name]).set_index("variable")
        titulo = f"{tipo.capitalize()} de variables — factor: {factor}"
        if imprimir:
            _mostrar(res, titulo)
        return res

    # Con cruce
    filas = {}
    for g, sg in data_df.groupby(cruce, observed=True):
        filas[g] = {v: fn(sg, v, factor) for v in variables}
    
    res = pd.DataFrame(filas).T
    res.index.name = cruce
    
    # Ordenar
    if cruce in ORDEN_CATEGORIAS:
        ok = [v for v in ORDEN_CATEGORIAS[cruce] if v in res.index]
        rst = [v for v in res.index if v not in ok]
        res = res.reindex(ok + rst)
    
    titulo = f"{tipo.capitalize()} cruzado por '{cruce}' — factor: {factor}"
    if imprimir:
        _mostrar(res, titulo)
    return res


# ============================================================================
# EJEMPLOS DE USO
# ============================================================================

# Cargar datos
# df = pd.read_csv('EAUI2026_habilidades_socio.csv')

# Frecuencia simple
# dstats(df, "gse", factor="fe_personas")
# dstats(df, "zona", factor="fe_personas")

# Cruce simple
# dstats(df, "gse", cruce="zona", factor="fe_personas", tipo="cruzada")
# dstats(df, "gse", cruce="sexo", factor="fe_personas", tipo="cruzada")

# Cruce triple
# dstats(df, "gse", cruce="zona", cruce2="sexo", factor="fe_personas", tipo="cruzada")

# Promedios cruzados (ej: edad promedio por GSE)
# dstats(df, "edad", cruce="gse", factor="fe_personas", tipo="promedio")

