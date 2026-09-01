# EAUI 2026: variables interpretables como habilidades, capacidades, competencias y conocimientos digitales

Archivo fuente: `data/2026.sav` (5.000 casos, 587 variables). Revisión exhaustiva de etiquetas de variable.

Criterio de inclusión: variables cuya etiqueta remite a (a) capacidad autodeclarada de ejecutar tareas, (b) conocimiento declarado sobre un dominio digital, (c) conductas que solo son ejecutables si existe la competencia, (d) barreras atribuidas explícitamente a falta de habilidad, o (e) modo de adquisición de la competencia. Se distingue el nivel de medición: **hogar** (módulos A y P, respondidos por el jefe de hogar) y **persona** (módulo Q, respondente seleccionado).

Todas las baterías de respuesta múltiple están codificadas 0/1 sin etiquetas de valor asociadas, con `NaN` fuera de filtro. Los ponderadores son `FE_HOGAR` y `FE_PERSONAS`.

---

## 1. Núcleo duro: habilidades digitales autorreportadas (Q8)

Batería central. Enunciado: *"Pensando en el uso del computador y/o smartphone, ¿cuál o cuáles de estas tareas es capaz de realizar por usted mismo?"* Respuesta múltiple, 0/1, base válida n = 4.758.

Es la batería que replica con más fidelidad el indicador de **ICT skills** de la UIT (Manual for Measuring ICT Access and Use by Households and Individuals) y es directamente mapeable a las áreas de competencia de DigComp 2.2.

| Variable | Tarea | Nivel de complejidad sugerido | Área DigComp aproximada |
|---|---|---|---|
| `Q8_1` | Uso de procesador de texto (Word) | Básica | Creación de contenidos |
| `Q8_2` | Fórmulas sencillas en planillas de cálculo (Excel) | Media | Creación de contenidos |
| `Q8_3` | Uso de software de presentación (PowerPoint) | Media | Creación de contenidos |
| `Q8_4` | Duplicar o transferir archivos entre dispositivos o a la nube | Media | Información y datos |
| `Q8_5` | Conectar un nuevo dispositivo (router, cámara, impresora) | Media | Resolución de problemas |
| `Q8_6` | Encontrar, descargar, instalar y configurar apps o software | Media | Resolución de problemas |
| `Q8_7` | Modificar configuraciones de seguridad de equipo, navegador o apps | Avanzada | Seguridad |
| `Q8_8` | Instalar un sistema operativo o programar (Java, PHP, Python) | Avanzada / especializada | Resolución de problemas |
| `Q8_9` | Crear un sitio web | Avanzada / especializada | Creación de contenidos |
| `Q8_10` | Conectarse a plataformas de video, series, música | Básica | Información y datos |
| `Q8_11` | Participar en juegos en línea | Básica | Comunicación |
| `Q8_12` | Revisar redes sociales | Básica | Comunicación |
| `Q8_13` | Subir contenidos o postear en redes sociales | Media | Creación de contenidos |
| `Q8_14` | Editar fotografías o videos | Media | Creación de contenidos |
| `Q8_15` | Realizar videollamadas | Básica | Comunicación |
| `Q8_16` | Enviar y recibir correos con o sin adjuntos | Básica | Comunicación |
| `Q8_17` | Transacciones bancarias, compras y pagos en línea | Media | Seguridad / transacción |
| `Q8_18` | Uso de IA (ChatGPT, etc.) | Emergente | Transversal |
| `Q8_19` | NINGUNA | Indicador de exclusión de habilidades | — |

Nota metodológica: `Q8_19` (NINGUNA) funciona como validador lógico. Debe ser mutuamente excluyente con `Q8_1` a `Q8_18`; conviene verificar consistencia antes de construir índices. `Q8_18` (IA generativa) es la incorporación más relevante respecto de rondas anteriores y probablemente el mejor discriminador de perfiles de vanguardia digital.

Usos posibles: índice sumativo simple (0-18), índice de tres niveles (básicas / medias / avanzadas), análisis de clases latentes o escalograma de Guttman para verificar si las habilidades se acumulan jerárquicamente.

---

## 2. Adquisición de la competencia: cómo se aprendió (Q6)

Respuesta múltiple, 0/1, n = 5.000. Enunciado: *"Respecto del uso del computador, ¿cómo aprendió a hacer uso de él?"*

Mide **origen o vía de adquisición** de la habilidad, no su nivel. Es la variable clave para distinguir capital digital adquirido informalmente del adquirido vía sistema educativo o formación formal.

| Variable | Categoría |
|---|---|
| `Q6_11` | Aprendí solo (autodidacta) |
| `Q6_2` | Me enseñó un familiar, amigo o contacto |
| `Q6_3` | Parte central del currículum escolar o de educación superior |
| `Q6_4` | Clases optativas o complementarias (no currículum central) |
| `Q6_5` | Curso particular (clases particulares, municipio, centro social) |
| `Q6_10` | En el trabajo |
| `Q6_111` | A través del ciber |
| `Q6_6` | Otro (especificar) |
| `Q6_OTRA` | Texto abierto de la anterior |
| `Q6_7` | **No sé usar computador o nunca he usado uno** |
| `Q6_8` | No usa |
| `Q6_9` | No tiene |
| `Q6_12` | No sabe |

`Q6_7` es una **declaración directa de ausencia de competencia** y debe tratarse como indicador sustantivo, no como no-respuesta. `Q6_8` y `Q6_9` son distintos: refieren a acceso, no a habilidad. Esta distinción es analíticamente importante y con frecuencia se colapsa mal.

Complemento: `Q6_1` (el computador que usa es de uso propio o compartido) y `Q5` (usó computador la última semana) son condiciones de ejercicio, no de competencia.

---

## 3. Competencias de seguridad y privacidad (Q32)

Respuesta múltiple, 0/1, n = 4.731. Enunciado: *"En los últimos 3 meses, ¿qué actividades ha realizado usted en términos de seguridad y privacidad de la información?"*

Estrictamente son **conductas**, pero cada una presupone una competencia específica de gestión de seguridad. Es la mejor aproximación disponible al área "Seguridad" de DigComp.

| Variable | Conducta / competencia implicada |
|---|---|
| `Q32_1` | Uso de herramientas de protección (antivirus, antispam, firewall) |
| `Q32_2` | No descargar ni abrir archivos o links sospechosos (reconocimiento de phishing) |
| `Q32_3` | Borrar o editar contenido propio publicado para proteger privacidad |
| `Q32_4` | Cambiar ajustes de privacidad en una red social |
| `Q32_5` | Borrar historial de búsqueda del navegador |
| `Q32_6` | Cambio de contraseñas en cuentas y servicios en línea |
| `Q32_15` | Usar VPN (categoría emergente de respuesta espontánea) |
| `Q32_9`, `Q32_10`, `Q32_11`, `Q32_12`, `Q32_13`, `Q32_14`, `Q32_16`, `Q32_17` | Otras conductas codificadas a posteriori (bloqueo de llamadas, no contestar desconocidos, TrueCaller, no prestar el teléfono, seguir recomendaciones de bancos, reformatear, cambio de equipo, borrar archivos) |
| `Q32_18` | Ninguna de las anteriores |
| `Q32_7` | NET OTROS (variable agregada, no usar junto con sus componentes) |
| `Q32_8`, `Q32_19`, `Q32_OTRA` | Otro / No sabe / texto abierto |

Advertencia: `Q32_7` es un NET (agregado). Incluirlo en un índice junto con `Q32_8` a `Q32_17` produce doble conteo.

Complemento perceptual: `Q31` (*"¿cuán protegido se siente usted?"*, escala 1 Muy protegido a 4 Muy desprotegido, 99 Ns/Nr). Mide **autoeficacia percibida en seguridad**, no competencia efectiva. El cruce `Q31` × índice `Q32` permite identificar el cuadrante de riesgo relevante: personas que se sienten protegidas sin ejecutar ninguna práctica de protección.

Contexto de exposición (consecuencias, no habilidades): `Q33_1` a `Q33_4` (virus, mal uso de información personal, pérdidas financieras por fraude, suplantación de identidad).

---

## 4. Barreras de uso atribuidas a falta de habilidad (Q34, Q36, P13)

### 4.1 Nivel persona: razones de no uso de internet (Q34)
Base restringida a no usuarios, n = 269. El submódulo NET USABILIDAD es habilidad pura.

| Variable | Ítem |
|---|---|
| `Q34_5` | NET USABILIDAD (agregado) |
| `Q34_6` | **No sé utilizar el computador y/o smartphone** |
| `Q34_7` | **No sé cómo utilizar el internet** |
| `Q34_8` | **No creo que ser capaz de aprender a usar internet** (autoeficacia negativa) |
| `Q34_9` | No me dan ganas de aprender a usarlo (disposición, no capacidad) |
| `Q34_10` | Otras personas navegan por mí / me ayudan (delegación) |
| `Q34_11` | Discapacidad o limitación que impide el uso |
| `Q34_2` | No sé bien para qué sirve internet / no conozco los beneficios (**conocimiento**, no destreza) |

`Q34_8` es conceptualmente distinta de `Q34_6` y `Q34_7`: mide expectativa de autoeficacia (en el sentido de Bandura), no habilidad actual. Vale la pena tratarla separadamente en cualquier modelo de brecha de segundo nivel.

`Q35` identifica la razón más importante entre las anteriores.

### 4.2 Texto codificado de desinterés (Q36)
`Q36_CODIF_1` (NET NO SE MANEJA TECNOLÓGICAMENTE) y `Q36_CODIF_2` (No se maneja, no sabe usar) recogen la atribución espontánea a falta de habilidad. `Q36_CODIF_9` (Desconfianza) roza el dominio de seguridad percibida.

### 4.3 Nivel hogar: razones de no tener banda ancha fija (P13)
Base n = 1.645.

| Variable | Ítem |
|---|---|
| `P13_4` | **No saben utilizar el computador y/o smartphone** |
| `P13_5` | **No saben / no les han informado cómo utilizar internet** |
| `P13_1` | No saben / no les han informado qué beneficios ofrece internet (conocimiento) |
| `P13_2` | Conocen beneficios pero no lo encuentran útil (evaluación informada, no ignorancia) |
| `P13_6` | Falta de confianza |
| `P13_19` | Preocupación por privacidad o seguridad |

`P13_1` frente a `P13_2` permite separar desconocimiento de rechazo informado, distinción central para diseño de política pública de alfabetización digital.

---

## 5. Habilidad por delegación (proxy inverso): Q37 y Q38

Base n = 269 (no usuarios). Enunciado: *"¿Ha solicitado a algún amigo, vecino, familiar o conocido que realice en internet por usted alguna de las siguientes actividades?"*

| Variable | Actividad delegada |
|---|---|
| `Q37_1` | Obtener algún formulario |
| `Q37_2` | Buscar información sobre estudio, trabajo u otros temas |
| `Q37_3` | Recibir o enviar correo electrónico |
| `Q37_4` | Revisar alguna red social |
| `Q37_5` | Realizar un trámite o pagar una cuenta |
| `Q37_6` | Realizar una compra |
| `Q37_7` | Ninguna de las anteriores |

`Q38_1` a `Q38_6` repiten el listado (probablemente jerarquización o frecuencia; conviene verificar el cuestionario original porque las etiquetas de `Q38` no incluyen el enunciado matriz).

Estas variables miden **uso por intermediación** (proxy use, en la literatura de Helsper y van Deursen): acceso a los beneficios de internet sin poseer la competencia. Son especialmente valiosas para caracterizar el segmento de "conectados por delegación", que suele quedar invisible en indicadores dicotómicos de uso.

Las bases son muy pequeñas (n = 269 sin ponderar, y `Q37_1` registra solo 12 respuestas afirmativas). No permiten desagregación por región ni cruces multivariados; sirven para caracterización descriptiva ponderada con reporte explícito de n.

---

## 6. Conocimiento sobre riesgos digitales y competencia de mediación parental

### 6.1 Conocimiento declarado (nivel hogar, base n = 1.452: hogares con menores)

| Variable | Ítem |
|---|---|
| `P8_1` | **¿Conoce usted los delitos y vulneraciones sexuales que existen en el mundo digital y a las que se pueden enfrentar NNA?** (Sí / No) |
| `P8_2` | **¿Conoce usted respecto a la violencia digital a la que se pueden enfrentar NNA?** (Sí / No) |

Son las dos únicas variables del instrumento formuladas explícitamente como **conocimiento declarado** (verbo "conoce"), lo que las hace conceptualmente distintas de las baterías de "es capaz de".

### 6.2 Capacidad de detección (P8_3)
`P8_3_1` (cyberbullying), `P8_3_2` (intentos de captación o grooming), `P8_3_3` (engaños, estafas o robo de información), `P8_3_4` (no he podido detectar ninguna situación), `P8_3_5` (Ns/Nr). El verbo es "ha detectado": mide capacidad de reconocimiento situado, no solo exposición.

### 6.3 Competencia de mediación parental (P7, n = 1.452)
Las medidas técnicas presuponen competencia digital del adulto; las medidas conversacionales presuponen competencia comunicativa.

| Variable | Medida | Tipo |
|---|---|---|
| `P7_1` | Reglas acordadas sobre uso (horarios, tiempo, condiciones) | Restrictiva no técnica |
| `P7_2` | **Instalación de filtros / software de control parental** | Técnica |
| `P7_3` | Supervisión y monitoreo (presencia adulta, revisar historial) | Activa |
| `P7_4` | Acceso solo desde lugares comunes de la casa | Restrictiva no técnica |
| `P7_5` | **Educar sobre uso seguro y responsable** | Habilitadora / mediación activa |
| `P7_6` | **Filtro de contenido para sitios inapropiados** | Técnica |
| `P7_7` | **Restricción o bloqueo de aplicaciones o plataformas** | Técnica |
| `P7_8` | Restricción de acceso a redes sociales y mensajería | Técnica |
| `P7_9` | Restricción de descargas o instalación sin permiso | Técnica |
| `P7_10` | **Uso de controles parentales en los dispositivos** | Técnica |
| `P7_11` | No es necesario tener medidas | Ausencia |
| `P7_12` | Ns/Nr | — |

Un índice de mediación técnica (`P7_2`, `P7_6`, `P7_7`, `P7_8`, `P7_9`, `P7_10`) cruzado con el índice `Q8` del respondente permite testear si la mediación parental técnica está condicionada por la competencia digital del adulto. Es uno de los cruces más interesantes que habilita este dataset.

---

## 7. Actividades de uso que operan como manifestación de competencia (Q21)

`Q21_1` a `Q21_48` registran actividades realizadas en los últimos 3 meses. La mayoría son de uso, no de habilidad, pero un subconjunto solo es ejecutable con competencias específicas y funciona como **validación conductual** de la batería Q8.

| Variable | Actividad | Competencia implicada |
|---|---|---|
| `Q21_40` | Elaborar y mantener un sitio web para empresa o negocio propio | Avanzada, coincide con `Q8_9` |
| `Q21_47` | Crear páginas web | Avanzada, coincide con `Q8_9` |
| `Q21_48` | Obtener software, parches o actualizaciones | Media-avanzada, coincide con `Q8_6` |
| `Q21_28` | Completar formularios en línea o enviarlos | Media, transaccional con el Estado |
| `Q21_30` | Realizar pagos en línea a organismos del Estado | Media, transaccional |
| `Q21_31` | Trámites para certificados o beneficios del Estado | Media, transaccional |
| `Q21_34` | Realizar transacciones bancarias | Media, coincide con `Q8_17` |
| `Q21_46` | Realizar estudios, cursos o capacitación en línea (e-learning) | Media, aprendizaje autodirigido |
| `Q21_15`, `Q21_16` | Crear y subir contenidos propios a la web o redes sociales | Media, coincide con `Q8_13` |
| `Q21_32` | Participar o votar electrónicamente en iniciativas del gobierno | Ciudadanía digital |
| `Q21_43` | Teletrabajo | Uso laboral avanzado |

Los NET agregados de esta batería (`Q21_1`, `Q21_10`, `Q21_19`, `Q21_26`, `Q21_33`, `Q21_38`, `Q21_44`) no deben incluirse junto con sus componentes.

El cruce `Q8_9` (declara saber crear un sitio web) contra `Q21_47`/`Q21_40` (efectivamente lo hizo) permite estimar **sobredeclaración de habilidad**, un control de calidad poco frecuente en este tipo de encuestas y metodológicamente atractivo.

---

## 8. Actitudes sobre autorregulación (Q30)

`Q30_1` (deberían existir regulaciones legales que controlen el acceso a contenidos), `Q30_2` (las familias deberían controlar lo que ven los integrantes del hogar), `Q30_3` (**cada uno debería ser capaz de fijarse sus propios límites**). Escala Sí / No / Ns-Nr.

`Q30_3` es la única que apela a una capacidad individual de autorregulación. Es actitudinal, no una medición de competencia, pero resulta pertinente como variable de contexto en modelos de alfabetización digital crítica.

---

## 9. Variables de exposición y contexto (no son habilidad, pero condicionan su medición)

Se listan porque funcionan como filtros de las baterías anteriores y como controles obligatorios en cualquier modelo:

- `Q5` uso de computador en la última semana (Sí/No)
- `Q6_1` uso del computador: propio o compartido
- `Q7` uso habitual de smartphone; `Q7_1` propiedad del equipo
- `Q9` última vez que usó internet (7 categorías, incluye "nunca he utilizado internet")
- `Q10` frecuencia de uso en los últimos 3 meses
- `Q11`, `Q16`, `Q19` tiempo diario de conexión
- `Q11_1_1` a `Q11_1_9` y `Q20_1` a `Q20_8` lugares de uso (la diversidad de lugares es un proxy razonable de autonomía de uso)
- `Q23` internet ha facilitado la actividad académica o laboral; `Q25` ha mejorado condiciones de vida o acceso a derechos
- `Q24_CODIF_*` y `Q26_CODIF_*` respuestas abiertas codificadas sobre esos beneficios. Dentro de ellas hay categorías con contenido de competencia: `Q24_CODIF_8` (capacitarme de manera personal), `Q24_CODIF_9` (buscar o hacer cursos), `Q24_CODIF_10` (para aprender), `Q26_CODIF_7` (aprender), `Q26_CODIF_8` (para capacitarse)

Controles sociodemográficos del respondente: `Q1_1` edad, `Q1_2` sexo, `Q1_3` nivel educacional, `Q1_4` ocupación, `Q2` actividad principal, `Q1_5_*` pertenencia a pueblos indígenas, `Q1_6_*` condiciones de larga duración (relevante para `Q34_11`), `A12_1` tramo de ingreso familiar, `COD_REGION`, `ZONA`.

---

## Síntesis operativa

Si se quiere construir una medida única de competencia digital con este instrumento, la ruta más defendible es:

1. **Índice principal**: suma ponderada de `Q8_1` a `Q8_18` (excluyendo `Q8_19`), base n = 4.758. Verificar dimensionalidad con análisis factorial de correlaciones tetracóricas o análisis de clases latentes, dado que son ítems dicotómicos.
2. **Subíndices por nivel**: básicas (`Q8_1`, `Q8_10`, `Q8_11`, `Q8_12`, `Q8_15`, `Q8_16`), medias (`Q8_2`, `Q8_3`, `Q8_4`, `Q8_5`, `Q8_6`, `Q8_13`, `Q8_14`, `Q8_17`), avanzadas (`Q8_7`, `Q8_8`, `Q8_9`), emergente (`Q8_18`).
3. **Subíndice de seguridad**: `Q8_7` más `Q32_1` a `Q32_6`, contrastado con la autoeficacia percibida en `Q31`.
4. **Segmento de exclusión por habilidad**: `Q6_7`, `Q34_6`, `Q34_7`, `Q34_8`, `P13_4`, `P13_5`, complementado con `Q37_*` para identificar uso por delegación.
5. **Módulo parental**: `P8_1`, `P8_2`, `P8_3_*` y `P7_*`, aplicable solo a los 1.452 hogares con menores.

## Limitaciones a documentar

- Toda la batería Q8 es **autorreporte de capacidad**, no evaluación de desempeño. La literatura documenta sesgo sistemático de sobreestimación en hombres y de subestimación en mujeres y adultos mayores, lo que afecta la interpretación de brechas de género y edad.
- Las baterías de habilidad se miden a nivel de persona (`FE_PERSONAS`), las de mediación parental y barreras de acceso a nivel de hogar (`FE_HOGAR`). No son combinables sin decisión metodológica explícita.
- Las bases de `Q34`, `Q36` y `Q37` (n = 269) son insuficientes para inferencia desagregada.
- Varias baterías contienen variables NET agregadas mezcladas con sus componentes. Requieren depuración previa a cualquier índice.
- `Q38_1` a `Q38_6` carecen de enunciado matriz en las etiquetas. Su interpretación exige consultar el cuestionario original.
