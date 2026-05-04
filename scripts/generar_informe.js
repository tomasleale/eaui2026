const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, WidthType, BorderStyle, ShadingType, HeadingLevel,
        PageBreak, ExternalHyperlink } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 6, color: "D3D3D3" };
const borders = { top: border, bottom: border, left: border, right: border };

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
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 26, bold: true, font: "Calibri", color: "3D7BA8" },
        paragraph: { spacing: { before: 120, after: 80 }, outlineLevel: 2 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: {
          width: 12240,
          height: 15840
        },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // ===== PORTADA =====
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 1200, after: 1200 },
        children: [new TextRun({
          text: "ENCUESTA DE ACCESO Y USO DE INTERNET",
          bold: true,
          size: 36,
          color: "1F4E78"
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [new TextRun({
          text: "EAUI 2026 — SUBTEL",
          size: 28,
          color: "2E5C8A"
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 800, after: 1200 },
        children: [new TextRun({
          text: "Informe Analítico: Acceso, Uso y Habilidades Digitales",
          italic: true,
          size: 24
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 600, after: 600 },
        children: [new TextRun({
          text: "Mayo 2026",
          size: 22
        })]
      }),
      new Paragraph({
        text: "",
        pageBreakBefore: true
      }),

      // ===== RESUMEN EJECUTIVO =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Resumen Ejecutivo")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Este informe presenta los hallazgos principales de la Encuesta de Acceso y Uso de Internet (EAUI 2026) realizada por SUBTEL. El análisis abarca una muestra de 5,000 hogares chilenos y examina patrones de acceso a internet, conectividad, uso de dispositivos y capacidades digitales.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Los resultados revelan un panorama de significativo acceso a internet en el país (96.8% de los hogares), pero con importantes disparidades en la calidad de la conexión, la disponibilidad de dispositivos y las habilidades digitales según variables sociodemográficas clave como género, zona geográfica, nivel educativo e ingresos.",
          size: 22
        })]
      }),

      // ===== HALLAZGOS CLAVE =====
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Hallazgos Clave")]
      }),

      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Acceso generalizado: 96.8% de hogares tienen acceso a internet, solo 3.2% carece de conectividad.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Brecha de habilidades: 75.5% de usuarios poseen habilidades digitales intermedias o avanzadas, mientras 8.4% carece de habilidades.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Disparidades demográficas: La edad, el nivel educativo y el nivel socioeconómico son predictores significativos del nivel de habilidades digitales.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Actividades digitales centrales: Uso de redes sociales (81.8%), videollamadas (81.7%), correo electrónico (64.9%) y transacciones en línea (64.6%) lideran.",
          size: 22
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),

      // ===== CONTEXTO =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("1. Contexto y Antecedentes")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "La transformación digital de Chile es una prioridad estratégica para el desarrollo económico y social. El Ministerio de Transportes y Telecomunicaciones (SUBTEL) realiza la Encuesta de Acceso y Uso de Internet (EAUI) para evaluar el estado de la conectividad digital en el país, identificar brechas y fundamentar políticas públicas orientadas a la inclusión digital.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "La metodología de este análisis incluye: (i) recodificación de datos SPSS; (ii) cálculo de indicadores de acceso, uso y habilidades; (iii) análisis ponderado por factores de expansión; y (iv) modelado predictivo mediante Random Forest y SHAP para identificar determinantes de las habilidades digitales.",
          size: 22
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),

      // ===== ACCESO A INTERNET =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("2. Acceso a Internet: Diagnóstico General")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.1 Cobertura de Acceso")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "La cobertura de acceso a internet en hogares chilenos alcanza 96.8%, representando una cifra positiva que refleja la penetración masiva de la conectividad digital. Sin embargo, el 3.2% de hogares sin acceso sigue representando aproximadamente 159,000 hogares en la muestra ponderada, una cifra que no debe subestimarse en contextos de política pública.",
          size: 22
        })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.2 Tipos de Acceso Contratado")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Entre los hogares con acceso, el 96.8% contrata alguna forma de internet pagado. Los principales tipos de conexión fija son:",
          size: 22
        })]
      }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "1F4E78", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({
                  children: [new TextRun({ text: "Tipo de Acceso Fijo", bold: true, color: "FFFFFF", size: 22 })]
                })]
              }),
              new TableCell({
                borders,
                shading: { fill: "1F4E78", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: "Prevalencia", bold: true, color: "FFFFFF", size: 22 })]
                })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Fibra óptica", size: 22 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: "Principal (creciente)", size: 22 })]
                })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Cable/Módem", size: 22 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: "Secundaria", size: 22 })]
                })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Inalámbrica / Satelital", size: 22 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: "Áreas rurales/remotas", size: 22 })]
                })]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "La expansión de fibra óptica es positiva para la calidad de la conexión, pero requiere continuo monitoreo en zonas rurales y remotas donde tecnologías satelitales e inalámbricas siguen siendo opciones críticas.",
          size: 22,
          italic: true
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),

      // ===== HABILIDADES DIGITALES =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("3. Habilidades Digitales: Análisis Jerárquico")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.1 Clasificación por Nivel")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Las habilidades digitales se clasifican en cuatro niveles según complejidad y sofisticación técnica:",
          size: 22
        })]
      }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2340, 2340, 2340, 2340],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "1F4E78", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Nivel", bold: true, color: "FFFFFF", size: 20 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "1F4E78", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Prevalencia", bold: true, color: "FFFFFF", size: 20 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "1F4E78", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Características", bold: true, color: "FFFFFF", size: 20 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "1F4E78", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "N Ejemplos", bold: true, color: "FFFFFF", size: 20 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Avanzado", bold: true, size: 20 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "31.0%", size: 20 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Configuración de seguridad, programación, desarrollo web", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Q8_7, Q8_8, Q8_9", size: 18 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Intermedio", bold: true, size: 20 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "44.5%", size: 20 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Ofimática, transferencia archivos, transacciones, IA", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Q8_1-6, Q8_14, Q8_17-18", size: 18 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Básico", bold: true, size: 20 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "16.1%", size: 20 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Redes sociales, comunicación, streaming", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Q8_10-13, Q8_15-16", size: 18 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "Sin habilidades", bold: true, size: 20 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8.4%", size: 20 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ children: [new TextRun({ text: "No reporta ninguna habilidad", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 80, right: 80 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "—", size: 18 })] })]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.2 Distribución de Habilidades Específicas")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Las habilidades más comunes entre los usuarios (base = 4,758 respondentes Q8) son:",
          size: 22
        })]
      }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [6300, 3060],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "2E5C8A", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Habilidad", bold: true, color: "FFFFFF", size: 22 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "2E5C8A", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: "Prevalencia", bold: true, color: "FFFFFF", size: 22 })]
                })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Revisar redes sociales", size: 22 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "81.8%", size: 22 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Videollamadas", size: 22 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "81.7%", size: 22 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Transacciones y pagos en línea", size: 22 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "64.6%", size: 22 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Correo electrónico", size: 22 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "64.9%", size: 22 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Editar fotos/videos", size: 22 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "52.3%", size: 22 })] })]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Brecha crítica: Solo 30.2% utiliza herramientas de IA (ChatGPT, etc.), lo que evidencia baja adopción de tecnologías emergentes, suministrando una oportunidad para programas de capacitación.",
          size: 22,
          italic: true
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),

      // ===== DETERMINANTES DEMOGRÁFICOS =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("4. Análisis de Determinantes Demográficos")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("4.1 Variables Predictoras de Habilidades Digitales")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Se desarrolló un modelo Random Forest que predice el nivel de habilidades digitales (Avanzado/Intermedio/Básico/Sin habilidades) basado en características demográficas y de uso. El modelo logró una precisión del 80.0% en el set de prueba.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Los cinco factores más influyentes (según importancia SHAP) son:",
          size: 22
        })]
      }),

      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({
          text: "Edad: Factor crítico. Usuarios más jóvenes demuestran mayores habilidades digitales. Patrón esperado y consistente con literatura internacional.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({
          text: "Número de dispositivos: Correlaciona positivamente. Mayor acceso a múltiples dispositivos (smartphone, tablet, computador) facilita práctica y aprendizaje.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({
          text: "Intensidad de uso: Horas diarias de internet multiplicadas por frecuencia (diaria, semanal, etc.). Práctica consistente refuerza habilidades.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({
          text: "Gasto en conectividad: Tanto para internet fijo como móvil. Usuarios dispuestos a invertir más tienden a adoptar servicios de mejor calidad.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({
          text: "Zona geográfica y género: Variables categóricas con efectos secundarios. Brecha urbano-rural y diferencias por sexo persisten.",
          size: 22
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("4.2 Disparidades Clave")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Zona: Brecha urbano-rural observable en acceso a infraestructura de banda ancha de calidad y disponibilidad de programas de capacitación.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Nivel socioeconómico (GSE): La distribución de habilidades varía significativamente según GSE, con el segmento AB mostrando mayores proporciones de habilidades avanzadas.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Educación: El nivel educativo de jefatura de hogar predice correlaciones positivas con habilidades digitales del usuario, pero no es determinante único.",
          size: 22
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),

      // ===== RECOMENDACIONES =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("5. Recomendaciones de Política Pública")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("5.1 Cerrar Brechas de Acceso")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Si bien el acceso es alto, el 3.2% excluido sigue siendo relevante. Se recomienda:",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Acelerar expansión de fibra óptica en zonas rurales y remotas, priorizando municipios con baja cobertura.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Subsidios focalizados para hogares de bajo ingreso, similar a programas piloto en otros países (ej. Brasil, Colombia).",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Mejorar accesibilidad de dispositivos: descuentos en equipos refurbished, programas de intercambio.",
          size: 22
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 200 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("5.2 Fortalecer Habilidades Digitales")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "La brecha de habilidades (8.4% sin habilidades) requiere intervención sistémica:",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Programas de capacitación estratificados: básica (redes sociales, comunicación), intermedia (ofimática, seguridad), avanzada (programación, desarrollo).",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Enfoque en población adulta (45+ años) y zonas rurales, donde disparidades son mayores.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Integración de certificación digital reconocida para mejorar empleabilidad.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Alfabetización en IA y herramientas emergentes: crítica para competitividad futura.",
          size: 22
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 200 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("5.3 Seguridad y Privacidad en Línea")]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Campañas de sensibilización: solo 28.9% configura seguridad de dispositivos.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Legislación fortalecida: protección de datos personales, responsabilidad de plataformas.",
          size: 22
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 200 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("5.4 Monitoreo Continuo")]
      }),
      new Paragraph({
        spacing: { after: 100 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({
          text: "Repetición bienal de la EAUI para monitorear progreso e identificar tendencias emergentes.",
          size: 22
        })]
      }),

      new Paragraph({ text: "", spacing: { after: 300 } }),

      // ===== REFERENCIAS =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Referencias Bibliográficas")]
      }),

      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "OCDE (2019). &#x201C;Going Digital: Shaping Policies for Success Worldwide.&#x201D; OECD Publishing.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "Unión Europea (2020). &#x201C;European Skills Agenda for Sustainable Competitiveness, Social Fairness and Resilience.&#x201D; European Commission.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "UNESCO (2021). &#x201C;Digital Skills for Girls Initiative: Building Digital Competence.&#x201D; UNESCO Digital Library.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "ITU (2022). &#x201C;The State of ICT Accessibility in the Americas.&#x201D; International Telecommunication Union, Regional Office for the Americas.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "CEPAL (2021). &#x201C;La Agenda Digital de América Latina: Transformación Digital para la Igualdad.&#x201D; Comisión Económica para América Latina y el Caribe.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "Marta, A. & Marques, J. (2017). &#x201C;Digital Literacy and Inclusion: An Evaluation of the Digital Divide.&#x201D; International Journal of Education and Research, 5(9), 1&#x2013;15.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "van Dijk, J.A. (2012). &#x201C;The Evolution of the Digital Divide: The Digital Divide Turns to Inequality of Skills and Usage.&#x201D; Digital Enlightenment Yearbook, 13&#x2013;25.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "Helsper, E. & van Deursen, A. (2015). &#x201C;Digital Skills: Unlocking the Information Society.&#x201D; Palgrave Macmillan.",
          size: 22
        })]
      }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({
          text: "SUBTEL (2024). &#x201C;Encuesta de Acceso y Uso de Internet 2026 — Metodología y Estructura de Datos.&#x201D; Ministerio de Transportes y Telecomunicaciones, Chile.",
          size: 22
        })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("./EAUI_2026_Informe_Analítico.docx", buffer);
  console.log("Documento generado exitosamente.");
});
