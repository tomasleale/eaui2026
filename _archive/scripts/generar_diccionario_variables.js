const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, WidthType, BorderStyle, ShadingType, HeadingLevel,
        PageBreak, TableOfContents } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 6, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

// ===== DICCIONARIO DE VARIABLES CON DEFINICIONES COMPLETAS =====
const variableInfo = {
  // IDENTIFICACIÓN
  id: {
    label: "Número de registro",
    original: "REGISTRO",
    type: "float64",
    definition: "Identificador único del hogar/persona encuestada. Rango 1-5000.",
    values: "1 a 5,000",
    nullCount: 0,
    unit: "Identificador",
    category: "Identificación"
  },
  fecha_fin: {
    label: "Fecha de fin de entrevista",
    original: "FECHAFIN",
    type: "object (date)",
    definition: "Fecha en que se completó la entrevista. 81 fechas únicas en el período de levantamiento.",
    values: "Fechas desde primer entrevistado hasta último",
    nullCount: 0,
    unit: "Fecha (YYYY-MM-DD)",
    category: "Identificación"
  },
  region: {
    label: "Región",
    original: "COD_REGION",
    type: "object",
    definition: "Región de Chile donde reside el hogar. 16 regiones administrativas.",
    values: "Tarapacá, Antofagasta, Atacama, Coquimbo, Valparaíso, O'Higgins, Maule, Biobío, Araucanía, Los Lagos, Aysén, Magallanes, Metropolitana, Los Ríos, Arica y Parinacota, Ñuble",
    nullCount: 0,
    unit: "Región",
    category: "Geografía"
  },
  zona: {
    label: "Zona geográfica",
    original: "ZONA",
    type: "object",
    definition: "Clasificación de ubicación del hogar.",
    values: "1 = Urbana, 2 = Rural",
    nullCount: 0,
    unit: "Categoría",
    category: "Geografía"
  },

  // JEFE DE HOGAR
  educ_jh: {
    label: "Educación jefe de hogar",
    original: "A10",
    type: "object",
    definition: "Nivel educativo máximo alcanzado por el jefe de hogar.",
    values: "Sin educación formal, Básica incompleta, Básica completa, Media CH incompleta, Media TP incompleta, Media CH completa, Media TP completa, Superior técnica incompleta, Superior técnica completa, Superior universitaria incompleta, Superior universitaria completa",
    nullCount: 0,
    unit: "Nivel educativo",
    category: "Jefe de Hogar",
    recoding: "Recodificado de valores numéricos 1-11"
  },
  ocupacion_jh: {
    label: "Ocupación jefe de hogar",
    original: "A11",
    type: "object",
    definition: "Categoría ocupacional del jefe de hogar, basada en profesión y nivel socioeconómico.",
    values: "Trabajos ocasionales e informales, Oficio menor - obrero no calificado, Obrero calificado - microempresario, Empleado medio - técnico - prof. independiente, Ejecutivo medio - prof. universitario, Alto ejecutivo - empresario - directivo",
    nullCount: 0,
    unit: "Categoría ocupacional",
    category: "Jefe de Hogar",
    recoding: "Recodificado de valores numéricos 1-6"
  },

  // INDIVIDUALES DEL ENCUESTADO
  edad: {
    label: "Edad del encuestado",
    original: "Q1_1",
    type: "float64",
    definition: "Edad en años cumplidos del encuestado al momento de la entrevista.",
    values: "0 a 99 años",
    nullCount: 0,
    unit: "Años",
    category: "Sociodemografía"
  },
  sexo: {
    label: "Sexo del encuestado",
    original: "Q1_2",
    type: "object",
    definition: "Sexo del encuestado.",
    values: "1 = Hombre, 2 = Mujer",
    nullCount: 0,
    unit: "Categoría",
    category: "Sociodemografía",
    recoding: "Recodificado a Hombre/Mujer"
  },
  educ: {
    label: "Educación del encuestado",
    original: "Q1_3",
    type: "object",
    definition: "Nivel educativo máximo alcanzado por el encuestado.",
    values: "11 categorías (igual a educ_jh)",
    nullCount: 0,
    unit: "Nivel educativo",
    category: "Sociodemografía"
  },
  educ_grupo: {
    label: "Educación agrupada",
    original: "Derivada",
    type: "object",
    definition: "Agrupación simplificada de educación en tres categorías para análisis.",
    values: "Básica o menos, Media, Superior",
    nullCount: 0,
    unit: "Nivel educativo agrupado",
    category: "Sociodemografía"
  },
  tramo_edad: {
    label: "Tramo de edad",
    original: "Derivada",
    type: "category",
    definition: "Edad agrupada en tramos para análisis de patrones por generación.",
    values: "Menor de 18, 18-29, 30-44, 45-59, 60 y más",
    nullCount: 0,
    unit: "Rango etario",
    category: "Sociodemografía"
  },
  ocupacion_encuestado: {
    label: "Ocupación del encuestado",
    original: "Q1_4",
    type: "object",
    definition: "Categoría ocupacional del encuestado. Incluye opción 'Sin trabajo remunerado'.",
    values: "Trabajos ocasionales e informales, Oficio menor, Obrero calificado, Empleado medio, Ejecutivo medio, Alto ejecutivo, Sin trabajo remunerado",
    nullCount: 0,
    unit: "Categoría ocupacional",
    category: "Sociodemografía"
  },
  actividad: {
    label: "Actividad económica",
    original: "Q2",
    type: "object",
    definition: "Tipo de actividad económica o laboral del encuestado.",
    values: "Trabajador independiente, Empleador/patrón, Empleado dependiente, Familiar no remunerado, FFAA y de orden, Cesante, Jubilado/pensionado, Estudiante, Labores del hogar",
    nullCount: 5000,
    unit: "Categoría",
    category: "Sociodemografía",
    note: "Variable sin datos (todos NaN)"
  },
  ingreso_grupo: {
    label: "Ingreso del hogar agrupado",
    original: "Derivada de A12_1",
    type: "object",
    definition: "Ingreso mensual del hogar agrupado en tres categorías para análisis.",
    values: "Bajo, Medio, Alto",
    nullCount: 0,
    unit: "Categoría de ingreso",
    category: "Sociodemografía"
  },
  gse: {
    label: "Nivel socioeconómico",
    original: "Derivada de A10 + A11",
    type: "category",
    definition: "Índice Socioeconomico calculado combinando educación de jefe de hogar y ocupación. 6 categorías ordenadas de mayor a menor.",
    values: "AB (alto), C1, C2, C3, D, E (bajo)",
    nullCount: 0,
    unit: "Categoría ordenada",
    category: "Sociodemografía",
    methodology: "AB=342 (7%), C1=533 (11%), C2=988 (20%), C3=1316 (26%), D=833 (17%), E=988 (20%)"
  },

  // ACCESO A INTERNET
  acceso_internet_hogar: {
    label: "Acceso a internet en el hogar",
    original: "P1",
    type: "object",
    definition: "¿Tiene acceso a internet en su hogar? Pregunta binaria.",
    values: "1 = Sí, 2 = No",
    nullCount: 0,
    unit: "Sí/No",
    category: "Acceso a Internet",
    recoding: "Recodificado a Sí/No"
  },
  n_smartphones_hogar: {
    label: "Número de smartphones en el hogar",
    original: "P2",
    type: "float64",
    definition: "Cantidad de teléfonos inteligentes (smartphones) disponibles en el hogar.",
    values: "0 a 20",
    nullCount: 159,
    unit: "Número de dispositivos",
    category: "Dispositivos"
  },
  n_computadores_hogar: {
    label: "Número de computadores en el hogar",
    original: "P2_1",
    type: "float64",
    definition: "Cantidad de computadores disponibles en el hogar.",
    values: "0 a 12",
    nullCount: 159,
    unit: "Número de dispositivos",
    category: "Dispositivos"
  },

  // TIPO DE ACCESO
  tipo_acceso_fijo: {
    label: "Tipo de acceso fijo a internet",
    original: "P10",
    type: "object",
    definition: "Tecnología utilizada para la conexión fija de internet en el hogar.",
    values: "ADSL, Cable/Módem, Fibra óptica, Inalámbrica, Satelital, WiFi, Antena, Banda ancha, Acceso telefónico, No sabe",
    nullCount: 1645,
    unit: "Tipo de tecnología",
    category: "Acceso a Internet"
  },
  tipo_plan: {
    label: "Tipo de plan de internet",
    original: "P12_2",
    type: "object",
    definition: "Estructura del plan de internet contratado (servicios incluidos).",
    values: "Banda ancha desnuda, BA + TV Cable, BA + Telefonía fija, Triple pack (BA+TV+Tel), Otros planes",
    nullCount: 1720,
    unit: "Tipo de plan",
    category: "Acceso a Internet"
  },
  pago_mensual_internet: {
    label: "Pago mensual por internet",
    original: "P11",
    type: "float64",
    definition: "Monto mensual pagado por servicio de internet fijo en pesos chilenos.",
    values: "Variable, hasta $200,000+ CLP",
    nullCount: 1873,
    unit: "Pesos chilenos (CLP)",
    category: "Acceso a Internet",
    note: "NS/NR (9,999,999) reemplazado por NaN"
  },
  velocidad_contratada: {
    label: "Velocidad de internet contratada",
    original: "P11_3",
    type: "object",
    definition: "Velocidad nominal del plan de banda ancha.",
    values: "Hasta 10 Mbps, Más de 10 a 100 Mbps, Más de 100 a 500 Mbps, Más de 500 Mbps a 1 Gbps, Más de 1 Gbps, NS/NR",
    nullCount: 1720,
    unit: "Megabits por segundo (Mbps)",
    category: "Acceso a Internet"
  },

  // USO INDIVIDUAL
  uso_computador: {
    label: "¿Usa computador?",
    original: "Q5",
    type: "object",
    definition: "¿Utiliza computador (escritorio, laptop, notebook)?",
    values: "1 = Sí, 2 = No",
    nullCount: 0,
    unit: "Sí/No",
    category: "Uso de Dispositivos"
  },
  uso_smartphone: {
    label: "¿Usa smartphone?",
    original: "Q7",
    type: "object",
    definition: "¿Utiliza teléfono inteligente (smartphone)?",
    values: "1 = Sí, 2 = No",
    nullCount: 0,
    unit: "Sí/No",
    category: "Uso de Dispositivos"
  },
  smartphone_propio: {
    label: "¿Smartphone propio?",
    original: "Q7_1",
    type: "float64",
    definition: "¿Posee un smartphone propio?",
    values: "1 = Sí, 2 = No",
    nullCount: 266,
    unit: "Sí/No",
    category: "Uso de Dispositivos"
  },
  pago_mensual_movil: {
    label: "Pago mensual por plan móvil",
    original: "Q7_4",
    type: "float64",
    definition: "Monto mensual pagado por servicio de telefonía móvil en pesos chilenos.",
    values: "Variable, hasta $200,000+ CLP",
    nullCount: 443,
    unit: "Pesos chilenos (CLP)",
    category: "Uso de Dispositivos",
    note: "NS/NR (9,999,999) reemplazado por NaN"
  },

  // FRECUENCIA Y TIEMPO DE USO
  ultimo_uso_internet: {
    label: "Último uso de internet",
    original: "Q9",
    type: "object",
    definition: "Cuándo fue la última vez que utilizó internet.",
    values: "Hoy, Entre 2 y 3 días, Entre 3 y 7 días, Entre 1 y 4 semanas, Más de 4 semanas, Más de 12 meses, Nunca",
    nullCount: 0,
    unit: "Categoría temporal",
    category: "Uso de Internet"
  },
  frecuencia_internet: {
    label: "Frecuencia de uso de internet",
    original: "Q10",
    type: "object",
    definition: "Con qué frecuencia utiliza internet.",
    values: "Todos los días, Varias veces por semana, Al menos una vez al mes, Menos de una vez al mes",
    nullCount: 269,
    unit: "Categoría",
    category: "Uso de Internet"
  },
  tiempo_diario_internet: {
    label: "Tiempo diario usando internet",
    original: "Q11",
    type: "object",
    definition: "Promedio de horas diarias utilizando internet.",
    values: "Menos de 1 hora, Entre 1 y 2 horas, Entre 2 y 4 horas, Más de 4 horas",
    nullCount: 801,
    unit: "Horas",
    category: "Uso de Internet"
  },
  tipo_acceso_mas_usado: {
    label: "Tipo de acceso más utilizado",
    original: "Q13",
    type: "object",
    definition: "Medio principal de acceso a internet.",
    values: "Banda Ancha Fija / WiFi, Banda Ancha Móvil, Internet Móvil (Smartphone/Tablet), Conexión Satelital",
    nullCount: 2710,
    unit: "Tipo de acceso",
    category: "Uso de Internet"
  },

  // HABILIDADES DIGITALES
  nivel_habilidades: {
    label: "Nivel de habilidades digitales",
    original: "Derivada de Q8",
    type: "object",
    definition: "Clasificación jerárquica del nivel de habilidades digitales del usuario. El nivel más alto alcanzado determina la categoría.",
    values: "Avanzado (31%), Intermedio (44.5%), Básico (16.1%), Sin habilidades (8.4%)",
    nullCount: 0,
    unit: "Nivel",
    category: "Habilidades Digitales",
    methodology: "Avanzado: posee Q8_7, Q8_8 o Q8_9. Intermedio: posee Q8_1-6, Q8_14, Q8_17-18. Básico: posee Q8_10-13, Q8_15-16. Sin habilidades: no reporta ninguna"
  },

  // Q8: HABILIDADES ESPECÍFICAS (ÍTEMS INDIVIDUALES)
  Q8_1: {
    label: "Procesador de texto (Word)",
    original: "Q8_1",
    type: "float64",
    definition: "¿Sabe usar procesador de texto (Microsoft Word o similar)?",
    values: "1 = Sí, 0 = No",
    nullCount: 242,
    unit: "Sí/No",
    category: "Habilidades Digitales - Ofimática",
    prevalence: "50.7%"
  },
  Q8_2: {
    label: "Planilla de cálculo (Excel)",
    original: "Q8_2",
    type: "float64",
    definition: "¿Sabe usar planilla de cálculo (Microsoft Excel o similar)?",
    values: "1 = Sí, 0 = No",
    nullCount: 242,
    unit: "Sí/No",
    category: "Habilidades Digitales - Ofimática",
    prevalence: "42.7%"
  },
  Q8_7: {
    label: "Configurar seguridad del dispositivo",
    original: "Q8_7",
    type: "float64",
    definition: "¿Sabe configurar medidas de seguridad en su dispositivo (contraseñas, antivirus)?",
    values: "1 = Sí, 0 = No",
    nullCount: 242,
    unit: "Sí/No",
    category: "Habilidades Digitales - Seguridad",
    prevalence: "28.9%"
  },
  Q8_12: {
    label: "Revisar redes sociales",
    original: "Q8_12",
    type: "float64",
    definition: "¿Sabe revisar y usar redes sociales?",
    values: "1 = Sí, 0 = No",
    nullCount: 242,
    unit: "Sí/No",
    category: "Habilidades Digitales - Comunicación",
    prevalence: "81.8%"
  },
  Q8_18: {
    label: "Usar herramientas de IA",
    original: "Q8_18",
    type: "float64",
    definition: "¿Sabe usar herramientas de inteligencia artificial (ChatGPT, Copilot, etc.)?",
    values: "1 = Sí, 0 = No",
    nullCount: 242,
    unit: "Sí/No",
    category: "Habilidades Digitales - Avanzado",
    prevalence: "30.2%"
  },

  // PERCEPCIONES Y ACTITUDES
  internet_facilita_trabajo: {
    label: "Internet facilita el trabajo",
    original: "Q23",
    type: "object",
    definition: "¿Considera que internet facilita su trabajo?",
    values: "1 = Sí, 2 = No",
    nullCount: 269,
    unit: "Sí/No",
    category: "Percepciones"
  },
  internet_mejora_vida: {
    label: "Internet mejora la vida",
    original: "Q25",
    type: "object",
    definition: "¿Considera que tener acceso a internet ha mejorado su vida?",
    values: "1 = Sí, 2 = No",
    nullCount: 3428,
    unit: "Sí/No",
    category: "Percepciones"
  },
  percepcion_proteccion: {
    label: "Percepción de protección en internet",
    original: "Q31",
    type: "object",
    definition: "¿Qué tan protegido se siente usando internet?",
    values: "Muy protegido, Protegido, Desprotegido, Muy desprotegido, NS/NR",
    nullCount: 269,
    unit: "Escala de percepción",
    category: "Seguridad y Privacidad"
  },

  // PONDERACIÓN
  fe_hogar: {
    label: "Factor de expansión hogar",
    original: "FE_HOGAR",
    type: "float64",
    definition: "Factor de ponderación para expandir resultados a nivel de hogar. Ajusta la muestra por no-respuesta y por representatividad.",
    values: "47 valores únicos",
    nullCount: 0,
    unit: "Factor numérico",
    category: "Metodología",
    note: "Utilizado para análisis ponderados"
  },
  fe_personas: {
    label: "Factor de expansión personas",
    original: "FE_PERSONAS",
    type: "float64",
    definition: "Factor de ponderación para expandir resultados a nivel de personas. Ajusta por estructura de hogares.",
    values: "243 valores únicos",
    nullCount: 0,
    unit: "Factor numérico",
    category: "Metodología",
    note: "Utilizado para análisis ponderados"
  }
};

// Crear secciones para cada categoría
function createVariableSection(categoryName, variables) {
  const section = [
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun(categoryName)]
    })
  ];

  variables.forEach((varName, idx) => {
    const info = variableInfo[varName];
    if (!info) return;

    section.push(new Paragraph({
      spacing: { before: 150, after: 80 },
      children: [new TextRun({
        text: `${idx + 1}. ${info.label}`,
        bold: true,
        size: 24
      })]
    }));

    const rows = [
      ['Campo', 'Valor'],
      ['Original (SPSS)', info.original || '—'],
      ['Tipo de dato', info.type],
      ['Definición', info.definition],
      ['Valores', info.values],
      ['Valores faltantes', `${info.nullCount} (${(info.nullCount / 5000 * 100).toFixed(1)}%)`],
      ['Unidad de medida', info.unit],
      ...(info.recoding ? [['Recodificación', info.recoding]] : []),
      ...(info.methodology ? [['Metodología', info.methodology]] : []),
      ...(info.prevalence ? [['Prevalencia', info.prevalence]] : []),
      ...(info.note ? [['Nota', info.note]] : [])
    ];

    const table = new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [2340, 7020],
      rows: rows.map((row, rowIdx) =>
        new TableRow({
          children: [
            new TableCell({
              borders,
              shading: rowIdx === 0 ? { fill: "2E5C8A", type: ShadingType.CLEAR } : { fill: "F0F0F0", type: ShadingType.CLEAR },
              margins: { top: 60, bottom: 60, left: 100, right: 100 },
              children: [new Paragraph({
                children: [new TextRun({
                  text: row[0],
                  bold: rowIdx === 0,
                  color: rowIdx === 0 ? "FFFFFF" : "000000",
                  size: 20
                })]
              })]
            }),
            new TableCell({
              borders,
              shading: rowIdx === 0 ? { fill: "2E5C8A", type: ShadingType.CLEAR } : { fill: "FAFAFA", type: ShadingType.CLEAR },
              margins: { top: 60, bottom: 60, left: 100, right: 100 },
              children: [new Paragraph({
                children: [new TextRun({
                  text: row[1],
                  bold: rowIdx === 0,
                  color: rowIdx === 0 ? "FFFFFF" : "000000",
                  size: 20
                })]
              })]
            })
          ]
        })
      )
    });

    section.push(table);
    section.push(new Paragraph({ text: "", spacing: { after: 200 } }));
  });

  return section;
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Calibri", size: 22 },
        paragraph: { spacing: { line: 360 } }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, font: "Calibri", color: "1F4E78" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Calibri", color: "2E5C8A" },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // PORTADA
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 1200, after: 600 },
        children: [new TextRun({
          text: "DICCIONARIO DE VARIABLES",
          bold: true,
          size: 40,
          color: "1F4E78"
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [new TextRun({
          text: "EAUI 2026 — ENCUESTA DE ACCESO Y USO DE INTERNET",
          size: 28,
          color: "2E5C8A"
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 600, after: 1200 },
        children: [new TextRun({
          text: "Documento Completo de Especificación de Variables",
          italic: true,
          size: 24
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 800 },
        children: [new TextRun({
          text: "Mayo 2026",
          size: 22
        })]
      }),
      new Paragraph({ text: "", pageBreakBefore: true }),

      // INTRODUCCIÓN
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Introducción")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Este diccionario proporciona especificaciones técnicas completas para todas las variables incluidas en la base de datos procesada de la EAUI 2026. Incluye información sobre nombres originales (SPSS), tipos de datos, definiciones, categorías, valores faltantes y unidades de medida.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Información general del dataset:",
          bold: true,
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Total de registros: 5,000 hogares", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Total de variables: 588 (después del procesamiento)", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Período de levantamiento: 2026", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Cobertura geográfica: 16 regiones de Chile", size: 22 })]
      }),
      new Paragraph({ text: "", spacing: { after: 300 } }),

      // ESTRUCTURA Y CATEGORÍAS
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Estructura de Variables por Categoría")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Las variables se organizan en las siguientes categorías temáticas:",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Identificación: id, fecha_fin", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Geografía: región, zona", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Sociodemografía: edad, sexo, educación, ocupación, ingreso, GSE", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Acceso a Internet: conectividad, tipo de acceso, velocidad, pago", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Dispositivos: smartphones, computadores", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Uso de Internet: frecuencia, tiempo diario, último uso", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Habilidades Digitales: 19 ítems + clasificación jerárquica", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Percepciones: seguridad, confianza, impacto en vida", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Metodología: factores de expansión (fe_hogar, fe_personas)", size: 22 })]
      }),
      new Paragraph({ text: "", spacing: { after: 300 } }),

      // SECCIONES POR CATEGORÍA
      ...createVariableSection("1. Identificación", ["id", "fecha_fin"]),
      ...createVariableSection("2. Geografía", ["region", "zona"]),
      ...createVariableSection("3. Sociodemografía", ["edad", "sexo", "educ", "educ_grupo", "tramo_edad", "ocupacion_encuestado", "actividad", "ingreso_grupo", "gse"]),
      ...createVariableSection("4. Características del Jefe de Hogar", ["educ_jh", "ocupacion_jh"]),
      ...createVariableSection("5. Acceso a Internet", ["acceso_internet_hogar", "tipo_acceso_fijo", "tipo_plan", "pago_mensual_internet", "velocidad_contratada"]),
      ...createVariableSection("6. Dispositivos", ["n_smartphones_hogar", "n_computadores_hogar", "uso_computador", "uso_smartphone", "smartphone_propio", "pago_mensual_movil"]),
      ...createVariableSection("7. Uso de Internet", ["ultimo_uso_internet", "frecuencia_internet", "tiempo_diario_internet", "tipo_acceso_mas_usado"]),
      ...createVariableSection("8. Habilidades Digitales", ["nivel_habilidades", "Q8_1", "Q8_2", "Q8_7", "Q8_12", "Q8_18"]),
      ...createVariableSection("9. Percepciones y Actitudes", ["internet_facilita_trabajo", "internet_mejora_vida", "percepcion_proteccion"]),
      ...createVariableSection("10. Factores de Ponderación", ["fe_hogar", "fe_personas"]),

      new Paragraph({ text: "", spacing: { after: 300 } }),

      // NOTAS TÉCNICAS
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Notas Técnicas")]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "1. Valores faltantes:",
          bold: true,
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "Se expresan como NaN (Not a Number) en pandas. Para variables de montos (P11, Q7_4, etc.), el código original NS/NR (9,999,999) fue reemplazado por NaN. Para variables de respuesta múltiple, NaN indica no-respuesta a esa pregunta específica.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "2. Recodificación de variables:",
          bold: true,
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "Las variables originales SPSS (códigos numéricos) se recodificaron a etiquetas de texto para facilitar interpretación. Las variables derivadas (educ_grupo, tramo_edad, gse, nivel_habilidades) se crearon a partir de combinaciones de variables existentes.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "3. Factores de expansión:",
          bold: true,
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "fe_hogar y fe_personas deben usarse para análisis ponderados que representen correctamente la población total de Chile. Sin ponderación, los resultados representan solo la muestra de 5,000 hogares.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "4. Categorías ordenadas:",
          bold: true,
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "Algunas variables como gse, educ_grupo, y tramo_edad tienen orden lógico (de mayor a menor o de menor a mayor). En análisis, estos deben preservarse.",
          size: 22
        })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("./EAUI_2026_Diccionario_Completo.docx", buffer);
  console.log("Diccionario de variables generado exitosamente.");
});
