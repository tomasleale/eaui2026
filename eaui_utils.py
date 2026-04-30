import pandas as pd
import numpy as np
import re
import matplotlib.pyplot as plt
import seaborn as sns

# --- MAPPINGS ---

MAPA_EDUC = {
    1: 'Sin educación formal', 2: 'Básica incompleta', 3: 'Básica completa',
    4: 'Media CH incompleta', 5: 'Media TP incompleta', 6: 'Media CH completa', 7: 'Media TP completa',
    8: 'Superior técnica incompleta', 9: 'Superior técnica completa',
    10: 'Superior universitaria incompleta', 11: 'Superior universitaria completa'
}

MAPA_OCUP = {
    1: 'Trabajos ocasionales e informales', 2: 'Oficio menor - obrero no calificado',
    3: 'Obrero calificado - microempresario', 4: 'Empleado medio - técnico - prof. independiente',
    5: 'Ejecutivo medio - prof. universitario', 6: 'Alto ejecutivo - empresario - directivo'
}

ORDEN_GSE = ['AB', 'C1', 'C2', 'C3', 'D', 'E']

ORDEN_CATEGORIAS = {
    'sexo': ['Hombre', 'Mujer'],
    'zona': ['Urbana', 'Rural'],
    'region': ['Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo', 'Valparaíso', "O'Higgins", 'Maule',
               'Biobío', 'Araucanía', 'Los Lagos', 'Aysén', 'Magallanes', 'Metropolitana',
               'Los Ríos', 'Arica y Parinacota', 'Ñuble'],
    'educ': list(MAPA_EDUC.values()),
    'educ_grupo': ['Básica o menos', 'Media', 'Superior'],
    'tramo_edad': ['Menor de 18', '18-29', '30-44', '45-59', '60 y más'],
    'actividad': ['Trabajador independiente', 'Empleador/patrón', 'Empleado dependiente',
                  'Familiar no remunerado', 'FFAA y de orden', 'Cesante',
                  'Jubilado/pensionado', 'Estudiante', 'Labores del hogar'],
    'ocupacion_jh': list(MAPA_OCUP.values()),
    'ocupacion_encuestado': list(MAPA_OCUP.values()) + ['Sin trabajo remunerado'],
    'gse': ORDEN_GSE,
    'ingreso_tramo': ['Hasta $384 mil', '$384 mil a $540 mil', '$540 mil a $798 mil',
                      '$798 mil a $1,1 millón', '$1,1 millón a $1,7 millones', 'Más de $1,7 millones'],
    'ingreso_grupo': ['Bajo', 'Medio', 'Alto'],
    'acceso_internet_hogar': ['Sí', 'No'],
    'uso_computador': ['Sí', 'No'],
    'uso_smartphone': ['Sí', 'No'],
    'internet_mejora_vida': ['Sí', 'No'],
    'internet_facilita_trabajo': ['Sí', 'No'],
    'ultimo_uso_internet': ['Hoy', 'Entre 2 y 3 días', 'Entre 3 y 7 días',
                             'Entre 1 y 4 semanas', 'Más de 4 semanas', 'Más de 12 meses', 'Nunca'],
    'frecuencia_internet': ['Todos los días', 'Varias veces por semana',
                             'Al menos una vez al mes', 'Menos de una vez al mes'],
    'tiempo_diario_internet': ['Menos de 1 hora', 'Entre 1 y 2 horas', 'Entre 2 y 4 horas', 'Más de 4 horas'],
    'percepcion_proteccion': ['Muy protegido', 'Protegido', 'Desprotegido', 'Muy desprotegido', 'NS/NR'],
    'velocidad_contratada': ['Hasta 10 Mbps', 'Más de 10 a 100 Mbps', 'Más de 100 a 500 Mbps',
                             'Más de 500 Mbps a 1 Gbps', 'Más de 1 Gbps', 'NS/NR'],
}

# --- CLEANING FUNCTIONS ---

def limpiar_etiqueta(label):
    """Extrae la parte descriptiva útil de una etiqueta SPSS."""
    if not label: return label
    label = label.strip()
    # Patrón B/C: empieza con código de variable (P3_1 .-, Q1.3.-)
    if re.match(r'^[A-Z]\w+[\._]\w+\s*\.-?', label):
        if ':' in label:
            r = label.split(':')[-1].strip()
            if r: return r
        if '?' in label:
            r = label.split('?')[-1].strip().lstrip(':').strip()
            if r: return r
        r = re.sub(r'^[A-Z]\w+[\._]\w+[\s\._\-]+', '', label).strip()
        return r.lstrip('.-').strip()
    # Patrón A: etiqueta + [pregunta padre]
    if '[' in label:
        r = label[:label.index('[')].strip()
        return re.sub(r'^\d+[\.-]+\s*', '', r).strip()
    # Patrón D: numeración inicial
    return re.sub(r'^\d+[\.-]+\s*', '', label).strip()

def calcular_gse(df):
    """Calcula el GSE derivado usando las variables A10 (educación JH) y A11 (ocupación JH)."""
    def _educ_group(e):
        if pd.isna(e): return None
        e = int(e)
        if e <= 3:  return 'basica'
        if e <= 7:  return 'media'
        if e <= 9:  return 'tecnica'
        return 'universitaria'

    matrix = {
        (1,'basica'):'E',  (1,'media'):'E',  (1,'tecnica'):'D',  (1,'universitaria'):'D',
        (2,'basica'):'E',  (2,'media'):'D',  (2,'tecnica'):'D',  (2,'universitaria'):'C3',
        (3,'basica'):'D',  (3,'media'):'C3', (3,'tecnica'):'C3', (3,'universitaria'):'C2',
        (4,'basica'):'C3', (4,'media'):'C2', (4,'tecnica'):'C2', (4,'universitaria'):'C1',
        (5,'basica'):'C2', (5,'media'):'C1', (5,'tecnica'):'C1', (5,'universitaria'):'AB',
        (6,'basica'):'C1', (6,'media'):'AB', (6,'tecnica'):'AB', (6,'universitaria'):'AB',
    }
    
    eg = df['A10'].apply(_educ_group)
    gse_col = df['A11'].combine(eg, lambda o, e: np.nan if pd.isna(o) or e is None else matrix.get((int(o), e), np.nan))
    return pd.Categorical(gse_col, categories=ORDEN_GSE, ordered=True)

def calcular_ingresos(df):
    """Calcula el punto medio de ingresos y grupos de ingresos."""
    rangos = {
        11:(0,129000),12:(130000,226000),13:(227000,393000),14:(394000,686000),15:(687000,1100000),16:(1200000,2000000),17:(2100000,None),
        21:(0,210000),22:(211000,366000),23:(367000,639000),24:(640000,1100000),25:(1200000,1900000),26:(2000000,3300000),27:(3400000,None),
        31:(0,279000),32:(280000,487000),33:(488000,849000),34:(850000,1400000),35:(1500000,2500000),36:(2600000,4500000),37:(4600000,None),
        41:(0,341000),42:(342000,595000),43:(596000,1000000),44:(1100000,1800000),45:(1900000,3100000),46:(3200000,5500000),47:(5600000,None),
        51:(0,399000),52:(400000,696000),53:(697000,1200000),54:(1300000,2100000),55:(2200000,3600000),56:(3700000,6400000),57:(6500000,None),
        61:(0,453000),62:(454000,791000),63:(792000,1300000),64:(1400000,2400000),65:(2500000,4100000),66:(4200000,7300000),67:(7400000,None),
        71:(0,505000),72:(506000,881000),73:(882000,1500000),74:(1600000,2600000),75:(2700000,4600000),76:(4700000,8100000),77:(8200000,None),
        81:(0,555000),82:(556000,967000),83:(968000,1600000),84:(1700000,2900000),85:(3000000,5100000),86:(5200000,8900000),87:(9000000,None),
        91:(0,602000),92:(603000,1000000),93:(1100000,1800000),94:(1900000,3100000),95:(3200000,5500000),96:(5600000,9700000),97:(9800000,None),
        101:(0,648000),102:(649000,1100000),103:(1200000,1900000),104:(2000000,3400000),105:(3500000,5900000),106:(6000000,10400000),107:(10500000,None),
    }
    mapa_pm = {float(k): (v[0]*1.5 if v[1] is None else (v[0]+v[1])/2) for k, v in rangos.items()}
    
    df['ingreso_pm'] = df['ingreso_hogar'].map(mapa_pm)
    df['ingreso_tramo'] = pd.cut(
        df['ingreso_pm'],
        bins=[0, 384000, 540000, 798000, 1100000, 1700000, float('inf')],
        labels=ORDEN_CATEGORIAS['ingreso_tramo'],
        right=True
    )
    df['ingreso_grupo'] = df['ingreso_tramo'].map({
        'Hasta $384 mil':'Bajo', '$384 mil a $540 mil':'Bajo',
        '$540 mil a $798 mil':'Medio', '$798 mil a $1,1 millón':'Medio',
        '$1,1 millón a $1,7 millones':'Alto', 'Más de $1,7 millones':'Alto',
    })
    return df

# --- ANALYSIS FUNCTIONS ---

def style_dataframe(df_tabla, titulo=None):
    """Formato visual: enteros sin decimales para conteos, porcentajes con 1 decimal."""
    num_cols = df_tabla.select_dtypes(include=['number']).columns
    
    estilo = df_tabla.style.format({
        col: '{:,.0f}' if any(x in str(col).lower() for x in ['ponderado', 'total']) or str(col).startswith('n ') else '{:.1f}'
        for col in num_cols
    })
    
    if titulo: 
        estilo = estilo.set_caption(titulo)
    return estilo

def _ordenar_categorias(df_res, var, cruzada=False):
    """Ordena las categorías de un DataFrame según el diccionario de órdenes."""
    if var not in ORDEN_CATEGORIAS: return df_res
    orden = ORDEN_CATEGORIAS[var]
    
    if cruzada:
        ok  = [v for v in orden if v in df_res.index]
        rst = [v for v in df_res.index if v not in ok and v != 'Total']
        fin = ok + rst + (['Total'] if 'Total' in df_res.index else [])
        return df_res.reindex(fin)
    
    ok  = [v for v in orden if v in df_res[var].values]
    rst = [v for v in df_res[var].values if v not in ok and v != 'Total']
    df_res[var] = pd.Categorical(df_res[var], categories=ok+rst+['Total'], ordered=True)
    return df_res.sort_values(var).reset_index(drop=True)

def dstats(data_df, variables, tipo='frecuencia', cruce=None, factor=None, transponer=False, estilo=True):
    """
    Análisis ponderado de variables simples.
    tipo: 'frecuencia' | 'cruzada' | 'promedio' | 'suma'
    """
    if isinstance(variables, str): variables = [variables]
    if factor not in data_df.columns:
        raise ValueError(f"El factor de ponderación '{factor}' no existe.")

    if tipo == 'frecuencia':
        var = variables[0]
        tot = data_df[factor].sum()
        res = data_df.groupby(var, observed=True)[factor].sum().reset_index().rename(columns={factor:'n_ponderado'})
        res['porcentaje'] = (res['n_ponderado'] / tot * 100)
        res = pd.concat([res, pd.DataFrame({var:['Total'],'n_ponderado':[res['n_ponderado'].sum()],'porcentaje':[100.0]})], ignore_index=True)
        res = _ordenar_categorias(res, var).set_index(var)
        
        if estilo:
            titulo = f"Frecuencia: '{var}' — base ponderada: {tot:,.0f} ({factor})"
            return style_dataframe(res, titulo=titulo)
        return res

    if tipo == 'cruzada':
        var = variables[0]
        tot = data_df[factor].sum()
        t   = data_df.pivot_table(values=factor, index=var, columns=cruce, aggfunc='sum', fill_value=0, observed=False)
        tp  = t.div(t.sum(axis=0), axis=1).mul(100)
        
        if var in ORDEN_CATEGORIAS:
            of = [v for v in ORDEN_CATEGORIAS[var] if v in t.index];  t, tp = t.reindex(of), tp.reindex(of)
        if cruce in ORDEN_CATEGORIAS:
            oc = [v for v in ORDEN_CATEGORIAS[cruce] if v in t.columns]; t, tp = t[oc], tp[oc]
        
        if transponer: t, tp = t.T, tp.T
        
        t.loc['Total'], tp.loc['Total'] = t.sum(numeric_only=True), 100.0
        cols = [s for c in t.columns for s in [t[c].rename(f'n {c}'), tp[c].rename(f'% {c}')]]
        res = pd.concat(cols, axis=1)
        
        if estilo:
            titulo = f"Cruce: '{var}' según '{cruce}' — base ponderada: {tot:,.0f} ({factor})"
            return style_dataframe(res, titulo=titulo)
        return res

    # Promedio y Suma logic
    def _wavg(sub, v, f):
        d = sub[[v, f]].dropna()
        return float(np.average(d[v], weights=d[f])) if len(d) > 0 and d[f].sum() > 0 else np.nan

    def _wsum(sub, v, f):
        d = sub[[v, f]].dropna()
        return float((d[v]*d[f]).sum())

    fn = _wavg if tipo == 'promedio' else _wsum
    col_name = 'promedio_ponderado' if tipo == 'promedio' else 'suma_ponderada'

    if not cruce:
        res = pd.DataFrame([(v, fn(data_df, v, factor)) for v in variables], columns=['variable', col_name])
        if estilo:
            return style_dataframe(res, titulo=f"{tipo.capitalize()} de variables — factor: {factor}")
        return res

    filas = {g: {v: fn(sg, v, factor) for v in variables} for g, sg in data_df.groupby(cruce, observed=True)}
    filas['Total'] = {v: fn(data_df, v, factor) for v in variables}
    res = pd.DataFrame(filas).T
    res.index.name = cruce
    res = _ordenar_categorias(res, cruce, cruzada=True)
        
    if estilo:
        return style_dataframe(res, titulo=f"{tipo.capitalize()} cruzado por '{cruce}' — factor: {factor}")
    return res

def analizar_rm(df, etiquetas, grupo_config, factor='fe_hogar', top_n=None, estilo=True):
    """Analiza un grupo de respuesta múltiple."""
    desc, cols = grupo_config
    cols = [c for c in cols if c in df.columns]
    base = df.loc[df[cols].notna().any(axis=1), factor].sum()
    
    filas = []
    for c in cols:
        n_pond = df.loc[df[c]==1, factor].sum()
        filas.append({
            'variable': c,
            'etiqueta': etiquetas.get(c, c),
            'n_ponderado': int(n_pond),
            'porcentaje': (n_pond / base * 100) if base > 0 else 0
        })
        
    res = pd.DataFrame(filas).sort_values('porcentaje', ascending=False).reset_index(drop=True)
    if top_n: res = res.head(top_n)
    res.index += 1
    
    if estilo:
        return style_dataframe(res, titulo=f"{desc} — base ponderada: {int(base):,} ({factor})")
    return res

def analizar_rm_cruce(df, etiquetas, grupo_config, cruce, factor='fe_personas', estilo=True):
    """Analiza un grupo de respuesta múltiple cruzado por una variable demográfica."""
    desc, cols = grupo_config
    cols = [c for c in cols if c in df.columns]
    
    base_cruce = df.loc[df[cols].notna().any(axis=1)].groupby(cruce, observed=True)[factor].sum()
    
    resultados = {}
    for categoria in base_cruce.index:
        base = base_cruce[categoria]
        df_cat = df[df[cruce] == categoria]
        
        pcts = {
            etiquetas.get(c, c): (df_cat.loc[df_cat[c]==1, factor].sum() / base * 100) if base > 0 else 0 
            for c in cols
        }
        resultados[categoria] = pcts
        
    res_df = pd.DataFrame(resultados)
    # Ordenar filas por la primera columna
    res_df = res_df.sort_values(by=res_df.columns[0], ascending=False)
    
    if estilo:
        return style_dataframe(res_df, titulo=f"{desc} cruzado por '{cruce}' — factor: {factor}")
    return res_df

# --- SKILLS ANALYSIS ---

Q8_BASICO = {
    'Q8_10': 'Streaming (video/música)', 'Q8_11': 'Juegos en línea', 'Q8_12': 'Revisar redes sociales',
    'Q8_13': 'Publicar en redes sociales', 'Q8_15': 'Videollamadas', 'Q8_16': 'Correo electrónico',
}
Q8_INTERMEDIO = {
    'Q8_1':  'Procesador de texto (Word)', 'Q8_2':  'Planilla de cálculo (Excel)', 'Q8_3':  'Presentaciones (PowerPoint)',
    'Q8_4':  'Transferir archivos / nube', 'Q8_5':  'Conectar nuevo dispositivo', 'Q8_6':  'Instalar y configurar apps',
    'Q8_14': 'Editar fotos o videos', 'Q8_17': 'Transacciones y pagos en línea', 'Q8_18': 'Uso de IA (ChatGPT, etc.)',
}
Q8_AVANZADO = {
    'Q8_7': 'Configurar seguridad del dispositivo', 'Q8_8': 'Instalar SO / programar (Python, Java…)', 'Q8_9': 'Crear un sitio web',
}

def calcular_nivel_habilidades(df):
    """Categoriza el nivel de habilidades digitales (Q8)."""
    cols_b = list(Q8_BASICO.keys())
    cols_i = list(Q8_INTERMEDIO.keys())
    cols_a = list(Q8_AVANZADO.keys())
    
    def _get_level(row):
        if row[cols_a].eq(1).any(): return 'Avanzado'
        if row[cols_i].eq(1).any(): return 'Intermedio'
        if row[cols_b].eq(1).any(): return 'Básico'
        return 'Sin habilidades'
    
    return df.apply(_get_level, axis=1)
