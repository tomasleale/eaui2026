import pandas as pd
import json

# Diccionario completo de variables
variables_data = {
    "Identificación": [
        ("id", "REGISTRO", "float64", "Identificador único del hogar (1-5000)", "1-5000", 0, "ID", "N/A"),
        ("fecha_fin", "FECHAFIN", "object", "Fecha de fin de entrevista", "Fechas levantamiento", 0, "YYYY-MM-DD", "N/A"),
    ],
    "Geografía": [
        ("region", "COD_REGION", "object", "Región de Chile (16 regiones)", "Tarapacá, Antofagasta, ... Ñuble", 0, "Región", "N/A"),
        ("zona", "ZONA", "object", "Zona geográfica", "Urbana, Rural", 0, "Categoría", "N/A"),
    ],
    "Sociodemografía": [
        ("edad", "Q1_1", "float64", "Edad en años cumplidos", "0-99 años", 0, "Años", "N/A"),
        ("sexo", "Q1_2", "object", "Sexo del encuestado", "Hombre, Mujer", 0, "Sí/No", "Recodificado de 1=Hombre, 2=Mujer"),
        ("educ", "Q1_3", "object", "Nivel educativo (11 niveles)", "Sin educación formal - Superior universitaria completa", 0, "Nivel educativo", "Recodificado de valores numéricos"),
        ("educ_grupo", "Derivada", "object", "Educación agrupada", "Básica o menos, Media, Superior", 0, "Nivel agrupado", "Derivada de educ"),
        ("tramo_edad", "Derivada", "category", "Edad agrupada en tramos", "Menor 18, 18-29, 30-44, 45-59, 60+", 0, "Rango etario", "Derivada de edad"),
        ("ocupacion_encuestado", "Q1_4", "object", "Ocupación del encuestado", "7 categorías incluidas", 0, "Categoría ocupacional", "Recodificado"),
        ("actividad", "Q2", "object", "Actividad económica", "9 categorías", 5000, "Categoría", "Sin datos (todos NaN)"),
        ("ingreso_grupo", "Derivada de A12_1", "object", "Ingreso hogar agrupado", "Bajo, Medio, Alto", 0, "Categoría ingreso", "Derivada de A12_1"),
        ("gse", "Derivada de A10+A11", "category", "Nivel socioeconómico", "AB, C1, C2, C3, D, E", 0, "Categoría ordenada", "AB=7%, C1=11%, C2=20%, C3=26%, D=17%, E=20%"),
    ],
    "Jefe de Hogar": [
        ("educ_jh", "A10", "object", "Educación jefe de hogar", "11 niveles educativos", 0, "Nivel educativo", "Recodificado de valores numéricos"),
        ("ocupacion_jh", "A11", "object", "Ocupación jefe de hogar", "6 categorías ocupacionales", 0, "Categoría ocupacional", "Recodificado de valores numéricos"),
    ],
    "Acceso a Internet": [
        ("acceso_internet_hogar", "P1", "object", "¿Acceso a internet en hogar?", "Sí, No", 0, "Sí/No", "Recodificado de 1=Sí, 2=No"),
        ("tipo_acceso_fijo", "P10", "object", "Tipo de acceso fijo", "ADSL, Cable, Fibra, Inalámbrica, Satelital, WiFi, etc.", 1645, "Tipo tecnología", "Solo si tiene acceso fijo"),
        ("tipo_plan", "P12_2", "object", "Tipo de plan de internet", "5 opciones desde desnuda a triple play", 1720, "Tipo plan", "Solo si tiene acceso contratado"),
        ("pago_mensual_internet", "P11", "float64", "Pago mensual internet fijo", "Variable, hasta $200k+ CLP", 1873, "Pesos chilenos", "NS/NR reemplazado por NaN"),
        ("velocidad_contratada", "P11_3", "object", "Velocidad de internet", "Hasta 10 Mbps - Más 1 Gbps", 1720, "Mbps", "Recodificado de rangos numéricos"),
    ],
    "Dispositivos": [
        ("n_smartphones_hogar", "P2", "float64", "N° smartphones en hogar", "0-20", 159, "Número dispositivos", "NS/NR → NaN"),
        ("n_computadores_hogar", "P2_1", "float64", "N° computadores en hogar", "0-12", 159, "Número dispositivos", "NS/NR → NaN"),
        ("uso_computador", "Q5", "object", "¿Usa computador?", "Sí, No", 0, "Sí/No", "Recodificado de 1=Sí, 2=No"),
        ("uso_smartphone", "Q7", "object", "¿Usa smartphone?", "Sí, No", 0, "Sí/No", "Recodificado de 1=Sí, 2=No"),
        ("smartphone_propio", "Q7_1", "float64", "¿Smartphone propio?", "1=Sí, 2=No", 266, "Sí/No", "Solo si usa smartphone"),
        ("pago_mensual_movil", "Q7_4", "float64", "Pago mensual plan móvil", "Variable, hasta $200k+ CLP", 443, "Pesos chilenos", "NS/NR → NaN"),
    ],
    "Uso de Internet": [
        ("ultimo_uso_internet", "Q9", "object", "Último uso de internet", "Hoy a Nunca (7 opciones)", 0, "Categoría temporal", "Recodificado de valores numéricos"),
        ("frecuencia_internet", "Q10", "object", "Frecuencia de uso internet", "Todos días a Menos 1 vez/mes", 269, "Categoría", "Recodificado de valores numéricos"),
        ("tiempo_diario_internet", "Q11", "object", "Tiempo diario usando internet", "Menos 1h a Más 4h", 801, "Horas", "Recodificado de categorías"),
        ("tipo_acceso_mas_usado", "Q13", "object", "Tipo acceso más utilizado", "BA Fija, BA Móvil, Móvil, Satelital", 2710, "Tipo acceso", "Recodificado de valores numéricos"),
    ],
    "Habilidades Digitales": [
        ("nivel_habilidades", "Derivada de Q8", "object", "Nivel habilidades digitales", "Avanzado, Intermedio, Básico, Sin habilidades", 0, "Nivel jerárquico", "31%, 44.5%, 16.1%, 8.4%"),
        ("Q8_1", "Q8_1", "float64", "Procesador de texto (Word)", "1=Sí, 0=No", 242, "Sí/No", "Prevalencia: 50.7%"),
        ("Q8_2", "Q8_2", "float64", "Planilla de cálculo (Excel)", "1=Sí, 0=No", 242, "Sí/No", "Prevalencia: 42.7%"),
        ("Q8_7", "Q8_7", "float64", "Configurar seguridad dispositivo", "1=Sí, 0=No", 242, "Sí/No", "Prevalencia: 28.9%"),
        ("Q8_12", "Q8_12", "float64", "Revisar redes sociales", "1=Sí, 0=No", 242, "Sí/No", "Prevalencia: 81.8%"),
        ("Q8_18", "Q8_18", "float64", "Usar herramientas IA", "1=Sí, 0=No", 242, "Sí/No", "Prevalencia: 30.2%"),
    ],
    "Percepciones": [
        ("internet_facilita_trabajo", "Q23", "object", "Internet facilita trabajo", "Sí, No", 269, "Sí/No", "Recodificado de 1=Sí, 2=No"),
        ("internet_mejora_vida", "Q25", "object", "Internet mejora vida", "Sí, No", 3428, "Sí/No", "Recodificado de 1=Sí, 2=No"),
        ("percepcion_proteccion", "Q31", "object", "Percepción protección internet", "Muy protegido a Muy desprotegido, NS/NR", 269, "Escala percepción", "5 categorías + NS/NR"),
    ],
    "Metodología": [
        ("fe_hogar", "FE_HOGAR", "float64", "Factor expansión hogar", "47 valores únicos", 0, "Factor numérico", "Usados en análisis ponderados"),
        ("fe_personas", "FE_PERSONAS", "float64", "Factor expansión personas", "243 valores únicos", 0, "Factor numérico", "Usados en análisis ponderados"),
    ]
}

# Crear DataFrame
rows = []
for category, vars_list in variables_data.items():
    for var_name, original, dtype, definition, values, nulls, unit, notes in vars_list:
        rows.append({
            "Categoría": category,
            "Variable": var_name,
            "Original SPSS": original,
            "Tipo de Dato": dtype,
            "Definición": definition,
            "Valores/Rango": values,
            "Valores Faltantes": nulls,
            "% Faltantes": f"{nulls/5000*100:.1f}%",
            "Unidad de Medida": unit,
            "Notas": notes
        })

df = pd.DataFrame(rows)

# Guardar como CSV
df.to_csv("EAUI_2026_Diccionario_Variables.csv", index=False, encoding='utf-8')
print("Diccionario CSV generado: EAUI_2026_Diccionario_Variables.csv")
print(f"Total de variables: {len(df)}")
print(f"Categorías: {df['Categoría'].nunique()}")

# También crear un resumen por categoría
resumen = df.groupby("Categoría").agg({
    "Variable": "count",
    "Valores Faltantes": ["min", "max", "mean"]
}).round(2)
print("\nResumen por Categoría:")
print(resumen)
