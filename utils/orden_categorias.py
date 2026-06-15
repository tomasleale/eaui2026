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
    "tramo_edad": ["Menor de 18", "18-29", "30-44", "45-59", "60 y más"],
    "zona": ["Urbana", "Rural"],

    # Socioeconómico
    "gse": ["AB", "C1", "C2", "C3", "D", "E"],
    "ingreso_tramo": [
        "Hasta $384 mil",
        "$384 mil a $540 mil",
        "$540 mil a $798 mil",
        "$798 mil a $1,1 millón",
        "$1,1 millón a $1,7 millones",
        "Más de $1,7 millones"
    ],
    "ingreso_grupo": ["Bajo", "Medio", "Alto"],

    # Educación
    "educ_jh": [
        "Sin educación formal",
        "Básica incompleta",
        "Básica completa",
        "Media CH incompleta",
        "Media TP incompleta",
        "Media CH completa",
        "Media TP completa",
        "Superior técnica incompleta",
        "Superior técnica completa",
        "Superior universitaria incompleta",
        "Superior universitaria completa"
    ],
    "educ_grupo": ["Básica o menos", "Media", "Superior"],

    # Ocupación
    "ocupacion_jh": [
        "Trabajos ocasionales e informales",
        "Oficio menor - obrero no calificado",
        "Obrero calificado - microempresario",
        "Empleado medio - técnico - prof. independiente",
        "Ejecutivo medio - prof. universitario",
        "Alto ejecutivo - empresario - directivo"
    ],
    "ocupacion_encuestado": [
        "Trabajos ocasionales e informales",
        "Oficio menor - obrero no calificado",
        "Obrero calificado - microempresario",
        "Empleado medio - técnico - prof. independiente",
        "Ejecutivo medio - prof. universitario",
        "Alto ejecutivo - empresario - directivo",
        "Sin trabajo remunerado"
    ],
    "actividad": [
        "Trabajador independiente",
        "Empleador/patrón",
        "Empleado dependiente",
        "Familiar no remunerado",
        "FFAA y de orden",
        "Cesante",
        "Jubilado/pensionado",
        "Estudiante",
        "Labores del hogar"
    ],

    # Acceso a Internet
    "acceso_internet_hogar": ["Sí", "No"],
    "tipo_acceso_fijo": [
        "ADSL",
        "Cable/Módem",
        "Fibra óptica",
        "Inalámbrica",
        "Satelital",
        "WiFi",
        "Antena",
        "Banda ancha",
        "Acceso telefónico",
        "No sabe"
    ],
    "velocidad_contratada": [
        "Hasta 10 Mbps",
        "Más de 10 a 100 Mbps",
        "Más de 100 a 500 Mbps",
        "Más de 500 Mbps a 1 Gbps",
        "Más de 1 Gbps",
        "NS/NR"
    ],
    "tipo_plan": [
        "Banda ancha desnuda",
        "BA + TV Cable",
        "BA + Telefonía fija",
        "Triple pack (BA+TV+Tel)",
        "Otros planes"
    ],
    "tipo_acceso_mas_usado": [
        "Banda Ancha Fija / WiFi",
        "Banda Ancha Móvil",
        "Internet Móvil (Smartphone/Tablet)",
        "Conexión Satelital"
    ],

    # Frecuencias y usos
    "frecuencia_internet": [
        "Todos los días",
        "Varias veces por semana",
        "Al menos una vez al mes",
        "Menos de una vez al mes"
    ],
    "tiempo_diario_internet": [
        "Menos de 1 hora",
        "Entre 1 y 2 horas",
        "Entre 2 y 4 horas",
        "Más de 4 horas"
    ],
    "ultimo_uso_internet": [
        "Hoy",
        "Entre 2 y 3 días",
        "Entre 3 y 7 días",
        "Entre 1 y 4 semanas",
        "Más de 4 semanas",
        "Más de 12 meses",
        "Nunca"
    ],

    # Percepciones y otros
    "percepcion_proteccion": [
        "Muy protegido",
        "Protegido",
        "Desprotegido",
        "Muy desprotegido",
        "NS/NR"
    ],
    "internet_mejora_vida": ["Sí", "No"],
    "internet_facilita_trabajo": ["Sí", "No"],
    "uso_computador": ["Sí", "No"],
    "uso_smartphone": ["Sí", "No"]
}
