# -*- coding: utf-8 -*-
"""
ORDEN_CATEGORIAS - Diccionario de ordenamiento de categorías

Define el orden correcto para variables categóricas en visualizaciones y tablas.
Previene que pandas ordene alfabéticamente y mantiene un orden lógico/intuitivo.

Ejemplo de uso:
    if var in ORDEN_CATEGORIAS:
        orden = ORDEN_CATEGORIAS[var]
        df = df.reindex([c for c in orden if c in df.index])
"""

ORDEN_CATEGORIAS = {
    # Habilidades digitales
    "nivel_habilidades": ["Sin habilidades", "Básico", "Intermedio", "Avanzado"],

    # Demografía
    "sexo": ["Hombre", "Mujer"],
    "tramo_edad": [
        "15-24", "25-34", "35-44", "45-54", "55-64", "65+"
    ],

    # Socioeconómico
    "gse": ["AB", "C1", "C2", "C3", "D", "E"],
    "zona": ["Urbana", "Rural"],

    # Educación
    "educ_jh": [
        "Sin educación formal",
        "Educación básica",
        "Educación media",
        "Educación técnica",
        "Educación universitaria"
    ],

    # Ocupación
    "ocupacion_jh": [
        "Gerenciales y profesionales",
        "Técnicos y asociados",
        "Trabajadores de apoyo administrativo",
        "Trabajadores de servicios",
        "Trabajadores agrícolas",
        "Oficiales y operarios",
        "Operadores de máquinas",
        "Trabajadores no cualificados",
        "Fuerzas armadas",
        "Inactivos/Pensionados"
    ],

    # Ingresos
    "ingreso_tramo": [
        "$0 - $129.000",
        "$130.000 - $234.000",
        "$235.000 - $416.000",
        "$417.000 - $703.000",
        "$704.000 - $1.173.000",
        "$1.174.000 - $1.966.000",
        "$1.967.000 - $2.950.000",
        "$2.951.000+"
    ],

    "ingreso_grupo": [
        "Bajo",
        "Medio-Bajo",
        "Medio",
        "Medio-Alto",
        "Alto"
    ],

    # Acceso a Internet
    "acceso_internet_hogar": ["Sí", "No"],
    "tipo_acceso_fijo": [
        "ADSL/Modem telefónico",
        "Cable",
        "Fibra óptica",
        "Tecnología inalámbrica (4G/5G/WiFi)"
    ],

    "tipo_plan": [
        "Plan de datos limitado",
        "Plan de datos ilimitado",
        "Plan combinado voz+datos"
    ],

    "tipo_acceso_mas_usado": [
        "ADSL/Modem telefónico",
        "Cable",
        "Fibra óptica",
        "Tecnología inalámbrica (4G/5G)",
        "Smartphone/plan de datos móvil",
        "WiFi público"
    ],

    # Frecuencias y usos
    "frecuencia_internet": [
        "No usa",
        "Usa menos de una vez por semana",
        "Usa 1-2 veces por semana",
        "Usa varios días a la semana",
        "Usa todos los días"
    ],

    "tiempo_diario": [
        "No usa",
        "Menos de 1 hora",
        "1-3 horas",
        "4-7 horas",
        "Más de 8 horas"
    ],

    # Tipos de dispositivos
    "tiene_smartphone": ["No", "Sí"],
    "tiene_computador": ["No", "Sí"],
    "tiene_tablet": ["No", "Sí"],

    # Actividades
    "uso_computador": ["No usa", "Usa"],
    "uso_smartphone": ["No usa", "Usa"],
}


def ordenar_por_categoria(df, variable, ascending=False):
    """Reordena un dataframe según ORDEN_CATEGORIAS si la variable está en el diccionario.

    Parameters:
    -----------
    df : pd.Series o pd.DataFrame
        Serie o DataFrame con índice categórico
    variable : str
        Nombre de la variable para buscar en ORDEN_CATEGORIAS
    ascending : bool
        Si True, mantiene el orden del diccionario; si False, invierte

    Returns:
    --------
    Datos reordenados según el orden especificado
    """
    import pandas as pd

    if variable not in ORDEN_CATEGORIAS:
        return df

    orden = ORDEN_CATEGORIAS[variable]

    # Filtrar solo las categorías que existen en los datos
    orden_valido = [cat for cat in orden if cat in df.index]

    # Agregar categorías que no están en ORDEN_CATEGORIAS al final
    otras = [cat for cat in df.index if cat not in orden_valido]

    # Reordenar
    nuevo_orden = orden_valido if ascending else orden_valido[::-1] if ascending is False else orden_valido
    if not ascending:
        nuevo_orden = orden_valido  # Mantiene orden definido

    return df.reindex(nuevo_orden + otras)


if __name__ == "__main__":
    print("ORDEN_CATEGORIAS loaded with", len(ORDEN_CATEGORIAS), "variables")
    for var, orden in list(ORDEN_CATEGORIAS.items())[:5]:
        print(f"  {var}: {len(orden)} categorías")
