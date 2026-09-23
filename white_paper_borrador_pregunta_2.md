# Habilidades digitales y digitalización productiva en Chile

## Distribución ocupacional de competencias y su relación con la intensidad digital de la economía

Borrador con resultados empíricos | Fundación País Digital
Versión 2, 1 de septiembre de 2026

**Fuente de los resultados:** Encuesta de Actividades de Usuarios de Internet (EAUI) 2026, SUBTEL. 5.000 casos, 587 variables. Procesamiento propio en `eaui2026_habilidades.ipynb`. Todas las estimaciones son ponderadas por factor de expansión salvo indicación explícita.

---

## Resumen ejecutivo

La EAUI 2026 permite responder de manera parcial la pregunta rectora de este white paper. Permite medir con precisión la distribución de las competencias digitales autorreportadas en la población chilena y ordenarlas según los factores que las estructuran. No permite, en cambio, anclar esa distribución en el sector económico de la actividad, porque la variable de actividad principal (Q2) llegó vacía en el archivo y no existe clasificación CIIU. El mejor aproximador disponible es la ocupación en la clasificación AIM-ESOMAR, que ordena posiciones ocupacionales y no ramas de actividad. Toda la lectura sectorial de este documento debe leerse bajo esa restricción.

**Hallazgos clave.** La población chilena declara dominar en promedio 9,73 de 18 tareas digitales (IC 95% 9,47 a 10,00), sobre una base de 4.758 personas que expanden a 13.810.761. La distribución es marcadamente bimodal por tipo de tarea: las competencias de comunicación son casi universales (revisar redes sociales 84,92%, videollamadas 84,83%) mientras las avanzadas son minoritarias (crear un sitio web 17,66%, instalar sistema operativo o programar 22,98%). El uso de inteligencia artificial generativa alcanza 40,56%, por encima de la capacidad de modificar configuraciones de seguridad (38,58%), lo que indica que una tecnología emergente se difundió más rápido que una competencia básica de protección.

El gradiente ocupacional es fuerte y sistemático. El índice promedio va de 7,13 tareas en hogares cuyo jefe realiza trabajos informales a 13,49 en hogares encabezados por ejecutivos medios o profesionales independientes, una razón de 1,89 veces. Medido sobre la ocupación del propio respondente, el rango se abre a 2,49 veces (5,64 frente a 14,04 tareas). La desagregación por dimensión funcional muestra que la brecha no es homogénea: la comunicación está prácticamente igualada entre ocupaciones (razón 1,30 veces), mientras la competencia operacional y el uso de IA son las dimensiones más estratificadas (2,36 y 2,39 veces respectivamente). La seguridad es débil de manera transversal: ninguna ocupación supera el 78% de la puntuación máxima posible y las de menor calificación no alcanzan el 40%.

Cuando el gradiente ocupacional se somete a control multivariado, se disuelve casi por completo. Controlando edad, educación, grupo socioeconómico e ingreso, ninguna categoría ocupacional conserva un efecto neto significativo salvo la de ejecutivo medio o profesional independiente (razón de probabilidad 8,61 para el nivel avanzado). La conclusión sustantiva es que la desigualdad ocupacional de competencias es en su mayor parte composicional: refleja quién trabaja en cada ocupación, no lo que cada ocupación enseña. El factor estructurante dominante es la educación formal (V de Cramér 0,373; razón de probabilidad 18,42 para educación superior), seguido de la edad (0,289). El territorio, en cambio, resulta despreciable: la diferencia urbano-rural es de 0,97 tareas, nueve veces menor que la brecha educacional de 8,99 tareas.

**Implicancias.** Tres resultados tienen consecuencia directa de política. Primero, el lugar de trabajo no transmite competencia digital: solo 1,28% de la población declara haber aprendido en el trabajo, frente a 50,30% por vías informales y 38,10% por vías formales del sistema educativo. Segundo, existe un problema de falsa seguridad: 33,85% de los usuarios se siente protegido sin ejecutar más de dos de las seis prácticas de protección del listado, y la asociación entre percepción y práctica es estadísticamente despreciable (V de Cramér 0,078). Tercero, la sobredeclaración es alta en las competencias avanzadas: entre quienes dicen saber obtener e instalar software, 78,45% no ejecutó la conducta en los últimos tres meses, y la cifra equivalente para crear un sitio web es 73,37%. Esto obliga a leer el 42,76% clasificado como nivel avanzado como una cota superior optimista.

**Limitaciones principales.** El instrumento mide autopercepción, no desempeño. La clasificación de intensidad digital por ocupación es una construcción teórica ad-hoc de este proyecto, sin validación externa. Los intervalos de confianza usan el tamaño muestral efectivo de Kish, que corrige por variabilidad de los pesos pero no por conglomeración, de modo que son cotas inferiores del error real. Y el nivel avanzado se activa con una sola de tres tareas, lo que lo hace sensible precisamente a los ítems con mayor sobredeclaración.

**Recomendación central.** Reasignar el foco de la política de formación digital desde el eje territorial hacia los ejes etario, educacional y laboral, y crear un instrumento de capacitación digital en el puesto de trabajo, que hoy es el eslabón ausente del sistema. La Sección 6 detalla las recomendaciones por plazo.

---

## Sección 1. Por qué importan las habilidades digitales

La conectividad no se traduce automáticamente en beneficio económico o social. Esta desconexión forma el punto de partida de la economía política de internet en América Latina.

Galperin (2017) mostró que no es falta de deseo, de cobertura o de acceso de última milla lo que explica por qué aproximadamente la mitad de los latinoamericanos adultos está fuera de línea. Es falta de un propósito percibido. Las personas no se conectan porque no encuentran actividades en línea que justifiquen el gasto de dinero o de atención.

Esa observación trasladada al plano de la productividad genera un acertijo análogo. En las últimas dos décadas, América Latina ha aumentado la inversión en TIC, ha mejorado la infraestructura de conectividad y ha incorporado herramientas digitales en procesos de producción. Sin embargo, la brecha de productividad respecto a países desarrollados se ha mantenido estable o se ha ampliado en sectores específicos (OCDE, 2020). La hipótesis que articula este white paper es que existe un desacople entre la disponibilidad de infraestructura digital y la capacidad de los trabajadores de usarla de manera productiva.

Esa desconexión es especialmente importante en economías como la chilena, donde:

1. **La penetración de internet es alta** (aproximadamente 90% de cobertura de banda ancha), lo que hace que las barreras de acceso ya no sean la restricción principal.

2. **La economía enfrenta presión de productividad creciente** en un contexto de estancamiento de los términos de intercambio y de competencia asiática en minerales y agricultura.

3. **La distribución sectorial del empleo es heterogénea**, con sectores primarios que coexisten con servicios sofisticados y manufactura de contenido digital.

4. **No existe caracterización sistemática** de cómo se alinean las habilidades digitales disponibles en la fuerza laboral con los requerimientos de intensidad digital de cada sector productivo.

La OCDE (2020) documenta que en países desarrollados la adopción de tecnología digital en empresas es desigual por sector, y que esa desigualdad correlaciona con brechas de productividad. Pero ese análisis requiere información sobre ambos lados de la ecuación: cuántas personas con qué habilidades están disponibles, y qué demanda de habilidades genera cada sector.

### Diferencia entre literatura de competencias y literatura de digitalización productiva

El corpus de bibliografía sobre habilidades digitales en América Latina es abundante (más de 2.000 artículos en los últimos cinco años). Su énfasis está casi íntegramente en:

- Determinantes individuales y demográficos del acceso y la autopercepción de competencias.
- Desigualdad en competencias entre grupos de población (género, edad, territorio, etnicidad).
- Diseño y evaluación de programas de formación.

En paralelo, existe una literatura sobre digitalización de empresas que trata como variable independiente la "capacidad de adopción tecnológica" pero mide esa capacidad a nivel organizacional (inversión en TIC, gasto en capacitación, cantidad de empleados en puestos TIC) sin descomponerla en la competencia real de los trabajadores.

Entre ambas literaturas hay un vacío. No existe sistematización de cómo se distribuyen las habilidades digitales de la fuerza laboral según sector económico, ni de cómo esa distribución se relaciona con la intensidad digital que cada sector requiere o está implementando.

Ese vacío es el que este white paper propone cerrar para Chile.

### Pregunta rectora

**¿Cómo se distribuyen las habilidades digitales de los trabajadores chilenos según sector económico, y qué relación guarda esa distribución con la intensidad digital de cada sector?**

La pregunta tiene tres componentes:

1. **Medición de competencias por sector.** Uso de encuestas nacionales (SUBTEL 2026, ENUPE, ELE) para caracterizar qué habilidades digitales tienen los trabajadores en cada sector productivo.

2. **Caracterización de requerimientos sectoriales.** Uso del marco de Bukht y Heeks aplicado a la economía digital chilena para clasificar sectores según su intensidad de digitalización.

3. **Identificación de desalineaciones.** Cruce de distribución de competencias con demanda sectorial para identificar brechas y excesos de capital humano digital en cada sector.

El aporte marginal es conectar dos literaluras que hoy se leen por separado, con implicancias directas para política pública: si existe desalineación sectorial, entonces los programas de formación en habilidades digitales deben diseñarse no solo por grupo de población sino también por sector destino.

---

## Sección 2. Qué se mide cuando se miden habilidades digitales

### 2.1 Tres genealogías conceptuales

El término "habilidades digitales" no tiene una definición única. Pangrazio, Godhe y González López Ledesma (2020) muestran que en contextos de habla inglesa domina la acepción instrumental y normativa (*digital literacy*), mientras que en español e idiomas nórdicos prevalece una acepción más crítica y formativa. La presión por estandarizar para comparabilidad internacional tiende a imponer la versión anglosajona más estrecha.

Esta fricción tiene consecuencias políticas. Si un gobierno diseña su estrategia de formación con un marco europeo estandarizado, es probable que esté optimizando para capacidades que sus trabajadores ya poseen, en lugar de para aquellas que efectivamente le faltan.

### 2.2 Dimensiones del constructo

Martínez-Bravo, Sádaba y Serrano-Puche (2022) analizan ocho marcos de competencias del siglo XXI (UNESCO, Unión Europea, OCDE, entre otros) e identifican seis dimensiones recurrentes:

- **Operacional**: manejo de dispositivos, software, herramientas.
- **Cognitiva**: búsqueda, evaluación y análisis de información.
- **Crítica**: evaluación de fuentes, pensamiento crítico en entornos digitales.
- **Social**: comunicación, colaboración en línea.
- **Emocional**: regulación emocional, empatía digital.
- **Proyectiva**: anticipación, diseño de futuros.

La mayoría de instrumentos de medición aplicados en América Latina se concentran en las dimensiones operacional y cognitiva. Esto implica que están midiendo aproximadamente un tercio del constructo teórico.

Van Laar et al. (2020) llegan a conclusión convergente: la investigación empírica subestima comunicación, colaboración, creatividad y pensamiento crítico, y enfatiza excesivamente habilidades técnicas porque son más fáciles de observar y medir.

### 2.3 El problema de la autopercepción

Buena parte de la medición en América Latina se basa en autoreporte. Esto genera un sesgo sistemático documentado en el corpus: la confianza no es la misma que la capacidad.

Crawford-Visbal et al. (2020) estudiaron estudiantes de comunicación en universidades latinoamericanas que pasaban cinco horas diarias con dispositivos. Pese a la intensidad de uso, mostaban baja competencia en búsqueda de información especializada y creación de contenido. El autoreporte no capturaba esta brecha.

Del Arco et al. (2025) encontraron el mismo patrón en educadores: alta autopercepción en comunicación, baja en creación de contenido y seguridad.

### 2.4 Qué mide efectivamente la EAUI 2026

La verificación de datos anunciada en la versión anterior de este borrador ya está hecha. El resultado condiciona el alcance del análisis y conviene explicitarlo antes de presentar cifras.

La EAUI 2026 contiene una batería central de habilidades autorreportadas (Q8) de 18 ítems dicotómicos más una opción de exclusión, aplicada a 4.758 de los 5.000 casos (95,2%). Junto a ella hay cinco baterías complementarias que amplían el constructo: vías de adquisición de la competencia (Q6, base 5.000), prácticas de seguridad y privacidad (Q32) con autoeficacia percibida (Q31), actividades efectivamente realizadas en los últimos tres meses (Q21), barreras de no uso entre no usuarios (Q34, base 269) y a nivel hogar (P13, base 1.645), uso por delegación a terceros (Q37, base 269) y mediación parental en hogares con menores (P7 y P8, base 1.452 hogares).

Esa riqueza tiene tres límites relevantes para la pregunta rectora.

El primero es la ausencia de sector económico. La variable Q2, actividad principal del respondente, no registra ningún dato válido en el archivo. No existe clasificación CIIU ni rama de actividad. El único aproximador ocupacional disponible es la clasificación AIM-ESOMAR, presente en dos versiones: la ocupación del jefe o jefa de hogar (A11, seis categorías) y la ocupación del propio respondente (Q1_4, siete categorías). Ambas ordenan posiciones ocupacionales por calificación, no ramas productivas. Un contador en minería y un contador en retail caen en la misma categoría. La consecuencia es que este documento describe un gradiente ocupacional y no una distribución sectorial, y que el cruce con el marco de Bukht y Heeks queda como ejercicio exploratorio hasta que se incorporen ENUPE y ELE, que sí traen rama de actividad a nivel de empresa.

El segundo límite es dimensional. Los 18 ítems se agrupan bien en seis dimensiones funcionales del instrumento (operacional, comunicación, creación, consumo, transacciones y seguridad, y emergente), pero esas dimensiones no equivalen a las seis de Martínez-Bravo, Sádaba y Serrano-Puche (2022). La correspondencia es parcial: la dimensión operacional coincide, comunicación se aproxima a la dimensión social, y creación cruza con la cognitiva. Las dimensiones crítica, emocional y proyectiva no están medidas por ningún ítem del instrumento. La advertencia de la Sección 2.2 se confirma en los datos: se está midiendo alrededor de la mitad del constructo teórico, y la mitad más fácil de observar.

El tercer límite es el de autopercepción, y aquí la encuesta ofrece una salida parcial. El cruce entre Q8 (capacidad declarada) y Q21 (conducta ejecutada en los últimos tres meses) permite acotar por arriba la sobredeclaración. La Sección 3.11 reporta ese ejercicio. No resuelve el problema, porque quien sabe hacer algo puede no haber tenido ocasión de hacerlo, pero sí entrega una cota superior cuantificada, que es más de lo que ofrece la mayoría de la literatura revisada en la Sección 2.3.

Decisión metodológica adoptada: se reportan resultados de autopercepción, se acompañan siempre de la base efectiva de cada estimación, y se contrasta con conducta observada donde el instrumento lo permite.

---

## Sección 3. La brecha chilena hoy: distribución de competencias digitales

### 3.0 Datos, base y decisiones de estimación

El análisis usa la EAUI 2026 a nivel persona, con `FE_PERSONAS` como factor de expansión. Las 5.000 filas expanden a 13.810.761 personas. El módulo hogar usa `FE_HOGAR` y expande a 5.651.637 hogares. Los dos marcos cubren las mismas filas y se diferencian únicamente en el ponderador aplicado, de modo que no son combinables sin decisión explícita, tal como se documenta en la Sección 3.14 y en las limitaciones.

La base de la batería Q8 es de 4.758 casos. Su tamaño muestral efectivo de Kish es 1.769, lo que implica un efecto de diseño cercano a 2,69. Todos los intervalos de confianza al 95% de este documento se calculan sobre ese n efectivo, no sobre el n nominal ni sobre los casos expandidos. Las pruebas de chi-cuadrado se ejecutan sobre pesos reescalados al n muestral, como aproximación al ajuste de Rao-Scott, y los p-valores de la batería de cruces están corregidos por Benjamini-Hochberg para comparaciones múltiples.

Se construyen dos medidas resumen. El índice sumativo `hab_total` cuenta cuántas de las 18 tareas declara dominar cada persona, con recorrido de 0 a 18. La variable `nivel_habilidades` clasifica en cuatro categorías con una regla jerárquica tipo Guttman: el nivel lo fija la tarea más difícil declarada. Quien declara al menos una de las tres tareas avanzadas queda clasificado como avanzado, con independencia de cuántas tareas medias o básicas domine. Esta convención es la usada en toda la sección, y su fragilidad se discute en 3.3 y en las limitaciones.

### 3.1 Prevalencia de cada competencia

**Tabla 1. Prevalencia ponderada de cada tarea digital (base Q8 = 4.758; n efectivo = 1.769)**

| Tarea | Nivel | % | IC 95% inf | IC 95% sup | n declara |
|---|---|---|---|---|---|
| Revisar redes sociales | Básica | 84,92 | 83,25 | 86,59 | 3.890 |
| Realizar videollamadas | Básica | 84,83 | 83,16 | 86,50 | 3.886 |
| Enviar y recibir correos | Básica | 73,61 | 71,56 | 75,67 | 3.086 |
| Transacciones bancarias y pagos en línea | Media | 71,72 | 69,63 | 73,82 | 3.074 |
| Editar fotografías o videos | Media | 61,82 | 59,56 | 64,09 | 2.490 |
| Procesador de texto (Word) | Básica | 59,45 | 57,16 | 61,73 | 2.414 |
| Subir contenidos o postear en redes sociales | Media | 57,70 | 55,40 | 60,01 | 2.352 |
| Duplicar o transferir archivos y usar la nube | Media | 53,56 | 51,23 | 55,88 | 2.097 |
| Plataformas de video, series y música | Básica | 53,01 | 50,69 | 55,34 | 2.004 |
| Conectar un nuevo dispositivo | Media | 52,78 | 50,45 | 55,11 | 2.087 |
| Descargar, instalar y configurar aplicaciones | Media | 52,32 | 49,99 | 54,65 | 2.007 |
| Software de presentación (PowerPoint) | Media | 52,01 | 49,69 | 54,34 | 1.995 |
| Fórmulas sencillas en planilla (Excel) | Media | 50,17 | 47,84 | 52,50 | 2.033 |
| Participar en juegos en línea | Básica | 45,67 | 43,35 | 47,99 | 1.646 |
| Uso de IA generativa (ChatGPT y similares) | Emergente | 40,56 | 38,28 | 42,85 | 1.439 |
| Modificar configuración de seguridad | Avanzada | 38,58 | 36,31 | 40,84 | 1.376 |
| Instalar sistema operativo o programar | Avanzada | 22,98 | 21,02 | 24,94 | 788 |
| Crear un sitio web | Avanzada | 17,66 | 15,88 | 19,44 | 558 |
| Ninguna de las anteriores | n/a | 2,32 | 1,62 | 3,02 | 179 |

![Prevalencia ponderada de habilidades digitales por ítem](outputs/habilidades/01_prevalencia_habilidades_q8.png)

La estructura de la tabla es más informativa que cualquier promedio. El repertorio digital de la población chilena está anclado en la comunicación interpersonal y el consumo, no en la producción. Las dos tareas más extendidas son sociales y superan el 84%. La primera tarea de naturaleza productiva, el procesador de texto, aparece recién en sexto lugar con 59,45%, por debajo de editar fotografías o videos. La distancia entre el ítem más extendido y el menos extendido es de 67,26 puntos porcentuales.

Dos resultados merecen atención específica. El primero es que las transacciones bancarias en línea alcanzan 71,72%, muy por encima de la capacidad declarada de modificar configuraciones de seguridad (38,58%). Aproximadamente uno de cada dos chilenos que opera dinero en línea no declara saber ajustar los parámetros de seguridad de sus dispositivos. Esa asimetría es el sustrato del problema de falsa seguridad que documenta la Sección 3.12.

El segundo es la posición de la inteligencia artificial generativa. Con 40,56%, su adopción declarada supera a la competencia de seguridad avanzada y se acerca a la mitad de la población. Una tecnología que no existía comercialmente hace cuatro años tiene hoy más penetración declarada que una competencia de protección que lleva dos décadas en los currículos de alfabetización digital. Esto sugiere que la difusión no está limitada por capacidad técnica general sino por la existencia de un uso percibido como valioso, que es exactamente el argumento de Galperin (2017) trasladado del acceso a la competencia.

### 3.2 Índice sumativo y distribución de niveles

La media ponderada del índice es de 9,73 tareas de 18 (IC 95% 9,47 a 10,00). La distribución por nivel es la siguiente.

**Tabla 2. Distribución ponderada del nivel de habilidades (base Q8 = 4.758)**

| Nivel | n muestral | Casos expandidos | % | IC 95% inf | IC 95% sup |
|---|---|---|---|---|---|
| Sin habilidades | 179 | 308.563 | 2,32 | 1,62 | 3,02 |
| Básico | 801 | 1.596.960 | 12,02 | 10,50 | 13,53 |
| Intermedio | 2.230 | 5.699.059 | 42,89 | 40,59 | 45,20 |
| Avanzado | 1.548 | 5.681.644 | 42,76 | 40,46 | 45,07 |

![Distribución del índice sumativo y del nivel de habilidades](outputs/habilidades/02_distribucion_indice_habilidades.png)

El 42,76% clasificado como avanzado es una cifra que no debe leerse sin su definición. Basta declarar una de las tres tareas avanzadas para caer en la categoría, y la tarea avanzada más extendida (modificar configuración de seguridad, 38,58%) explica casi toda la categoría por sí sola. Dicho de otro modo, el nivel avanzado en esta clasificación significa en la práctica "declara saber cambiar una configuración de seguridad", no "domina un repertorio digital sofisticado". La Sección 3.11 muestra además que esas tres tareas son las de mayor sobredeclaración del instrumento. La lectura prudente del dato es que poco más del 40% de la población alcanza el umbral mínimo de la categoría superior, y que el subconjunto que efectivamente ejerce ese repertorio es sustancialmente menor.

En el otro extremo, el 2,32% que no declara ninguna tarea es un piso muy bajo comparado con el 19,46% que en la batería Q6 declara no saber usar computador o no haberlo usado nunca. La diferencia no es contradictoria: la batería Q8 se aplica a quienes tienen alguna exposición digital, mientras Q6 se aplica a los 5.000 casos. La cifra relevante para dimensionar exclusión digital por competencia es la segunda.

### 3.3 Validez y estructura del índice

Antes de usar el índice para comparar grupos hay que verificar que los 18 ítems midan algo común. Tres controles convergen en la misma conclusión matizada.

La consistencia interna es alta. El KR-20, equivalente al alfa de Cronbach para ítems dicotómicos, alcanza 0,932, con una correlación phi media entre ítems de 0,422. Un análisis de componentes principales devuelve un único autovalor mayor que 1, y el primer componente explica 49,5% de la varianza frente a 7,6% del segundo. La batería es sustancialmente unidimensional y el índice sumativo está justificado.

La jerarquía acumulativa, en cambio, no se cumple de manera estricta. El coeficiente de reproducibilidad de Guttman es 0,854, por debajo del umbral convencional de 0,90, con una ganancia de 0,205 sobre el piso marginal de 0,649. Existen perfiles no anidados: personas que dominan tareas de comunicación y entretenimiento sin dominar las ofimáticas. Esto justifica el índice sumativo pero desaconseja interpretar `nivel_habilidades` como una escala ordinal estricta.

![Dimensionalidad y escalograma de Guttman](outputs/habilidades/04_dimensionalidad_guttman.png)

El análisis con correlaciones tetracóricas, que es la métrica correcta para ítems dicotómicos, refuerza y matiza el diagnóstico. La asociación promedio sube de 0,422 con phi a 0,671 con tetracórica, confirmando que la métrica de Pearson atenúa la estructura latente. El criterio de Kaiser sugiere dos factores sobre la matriz tetracórica frente a tres sobre la matriz phi. El primer factor es claramente general, con cargas entre 0,62 y 0,93 en los 18 ítems. El segundo factor es bipolar y opone la ofimática a la sociabilidad: cargas positivas en planilla de cálculo (0,30), software de presentación (0,29) y procesador de texto (0,27), frente a cargas negativas en videollamadas (-0,63), revisar redes sociales (-0,57) y subir contenidos (-0,29).

![Autovalores: correlación tetracórica frente a phi](outputs/habilidades/20_scree_tetracorica.png)

Ese segundo eje es sustantivamente interesante para la pregunta del white paper. Sugiere que, controlando el nivel general de competencia, existe un intercambio entre un perfil orientado a la producción de documentos y un perfil orientado a la interacción y el consumo. Es la traza empírica de la distinción entre competencia digital de mercado laboral y competencia digital de vida cotidiana.

El análisis de clases latentes confirma que la clasificación jerárquica esconde heterogeneidad. Un modelo de clases latentes binario estimado por EM selecciona seis clases según BIC (68.992,5 frente a 75.650,2 con dos clases). Las clases tienen tamaños ponderados de entre 6,43% y 24,36%. El cruce con `nivel_habilidades` muestra que solo dos clases caen casi enteramente en un único nivel jerárquico: la Clase 1 (19,28% de la población) es 100% avanzada y la Clase 3 (15,39%) es 95,90% intermedia. Las demás se reparten entre niveles, con la Clase 2 dividida entre intermedio (28,80%) y avanzado (71,20%) y la Clase 5 entre básico (62,50%), intermedio (23,70%) y sin habilidades (12,60%). La etiqueta única de nivel oculta, por tanto, al menos cuatro combinaciones distintas de competencias.

![Perfiles de las seis clases latentes](outputs/habilidades/19_lca_perfiles.png)

**Implicancia metodológica para el diseño de política.** Si un programa de formación se dirige a "nivel intermedio", está apuntando a un conjunto que combina al menos tres perfiles de competencia distintos. La segmentación por clase latente, y no por nivel jerárquico, es la que permite diseñar contenidos pertinentes.

### 3.4 Caracterización de competencias por ocupación

Esta subsección corresponde a lo que la versión anterior del borrador anunciaba como Tabla 1 sectorial. Se reporta sobre ocupación, con la restricción explicada en 2.4.

**Tabla 3. Índice de habilidades digitales por ocupación del jefe o jefa de hogar (ponderado)**

| Ocupación | n | % de base Q8 | Media (0-18) | Desv. est. | Coef. variación % | IC 95% inf | IC 95% sup |
|---|---|---|---|---|---|---|---|
| Trabajos informales (lavado, aseo, doméstico ocasional, cuidador) | 693 | 14,56 | 7,13 | 5,16 | 72,30 | 6,53 | 7,73 |
| Oficio menor, obrero no calificado, doméstico con contrato | 626 | 13,16 | 7,84 | 5,35 | 68,16 | 7,08 | 8,61 |
| Obrero calificado, capataz, microempresario | 1.656 | 34,80 | 8,13 | 5,25 | 64,53 | 7,71 | 8,56 |
| Empleado administrativo, vendedor, técnico, profesional | 1.395 | 29,32 | 11,17 | 5,34 | 47,76 | 10,73 | 11,62 |
| Ejecutivo medio, gerente, profesional independiente | 361 | 7,59 | 13,49 | 4,82 | 35,75 | 12,72 | 14,26 |
| Alto ejecutivo, empresario propietario | 27 | 0,57 | 12,17 | 5,19 | 42,67 | 9,05 | 15,30 |

![Media y dispersión del índice por ocupación](outputs/habilidades/24_tabla1_indice_ocupacion.png)

El gradiente es monótono hasta la quinta categoría y se quiebra en la sexta, pero ese quiebre no es interpretable: con 27 casos, el intervalo de confianza de los altos ejecutivos va de 9,05 a 15,30 y se solapa con las tres categorías superiores. Toda lectura de esa fila debe considerarse descriptiva.

La razón entre el extremo superior confiable (13,49) y el inferior (7,13) es de 1,89 veces. Medida sobre la ocupación del propio respondente, que es el aproximador más pertinente para caracterizar la fuerza de trabajo, la brecha se amplía: los ejecutivos medios y profesionales universitarios promedian 14,04 tareas y quienes ejercen oficios menores u ocupaciones no calificadas promedian 5,64, una razón de 2,49 veces. La ocupación del respondente también tiene mayor poder estructurante que la del jefe de hogar (V de Cramér 0,225 frente a 0,192), lo que era esperable: la competencia digital es un atributo de la persona, no del hogar.

El coeficiente de variación aporta un hallazgo menos evidente. Decrece de manera sostenida al subir en la escala ocupacional, de 72,30% en trabajos informales a 35,75% en ejecutivos medios. La heterogeneidad interna es mucho mayor en la base de la estructura ocupacional. Esto significa que en las ocupaciones de menor calificación conviven personas sin ninguna competencia con personas de competencia media-alta, mientras que en las ocupaciones calificadas la competencia está comprimida hacia arriba. Para el diseño de programas, esto implica que una intervención dirigida a ocupaciones de baja calificación necesita nivelación diferenciada por perfil de entrada, mientras que una dirigida a ocupaciones calificadas puede asumir un piso común.

### 3.5 Desagregación por dimensión funcional

**Tabla 4. Puntuación media ponderada por dimensión y ocupación del jefe de hogar**

| Dimensión (máximo) | Informales | Oficio menor | Obrero calif. | Empleado, técnico | Ejecutivo medio | Alto ejecutivo |
|---|---|---|---|---|---|---|
| Operacional (7) | 2,28 | 2,50 | 2,53 | 4,17 | 5,38 | 4,88 |
| Comunicación (3) | 2,08 | 2,24 | 2,34 | 2,58 | 2,71 | 2,56 |
| Creación (3) | 1,05 | 1,14 | 1,17 | 1,55 | 1,84 | 1,61 |
| Consumo (2) | 0,67 | 0,83 | 0,88 | 1,11 | 1,32 | 1,02 |
| Transacciones y seguridad (2) | 0,76 | 0,85 | 0,93 | 1,27 | 1,56 | 1,43 |
| Emergente, IA (1) | 0,28 | 0,27 | 0,29 | 0,49 | 0,67 | 0,68 |

![Mapa de calor de dimensiones por ocupación](outputs/habilidades/23_heatmap_dimensiones_ocupacion.png)

![Mapa de calor normalizado de dimensiones por ocupación](outputs/habilidades/23_heatmap_dimensiones_ocupacion_norm.png)

Como las dimensiones tienen distinto número de ítems, la comparación pertinente es en proporción del máximo posible y en razón entre extremos. Expresado así, el resultado es el siguiente. La comunicación está prácticamente saturada y es la dimensión más igualitaria: va de 69,33% del máximo en trabajos informales a 90,33% en ejecutivos medios, una razón de apenas 1,30 veces. En el extremo opuesto, el uso de IA generativa (razón 2,39 veces) y la competencia operacional (2,36 veces) son las dimensiones más estratificadas, seguidas por transacciones y seguridad (2,05) y consumo (1,97). La creación de contenidos queda en un lugar intermedio (1,75).

Dos lecturas se desprenden de ahí.

La primera es que la digitalización de la comunicación en Chile ya ocurrió y es transversal. No es un espacio de política porque no hay brecha que cerrar. Cualquier programa que siga tratando "conectarse y comunicarse" como objetivo formativo está resolviendo un problema que la difusión de mercado resolvió sola.

La segunda es que la brecha se concentra exactamente donde importa para la productividad. La dimensión operacional, que agrupa el manejo de archivos, ofimática, instalación de aplicaciones y conexión de dispositivos, es la que más separa a las ocupaciones y es también la que la literatura de digitalización productiva identifica como prerrequisito para la adopción tecnológica en la empresa. Que la razón sea 2,36 veces significa que un trabajador de ocupación no calificada domina, en promedio, menos de un tercio de las tareas operacionales, mientras un ejecutivo medio domina tres cuartos.

El tercer hallazgo es transversal y no aparece en la comparación entre ocupaciones sino en el nivel general de cada fila. La creación de contenidos no supera 1,84 de 3 en ninguna ocupación, y transacciones y seguridad no supera 1,56 de 2. Incluso en el tramo ocupacional más alto, la competencia de seguridad es el eslabón débil. Es una brecha de nivel, no de distribución, y por lo tanto requiere un instrumento distinto: no focalización, sino cobertura universal.

**Tabla 5. Distribución del nivel de habilidades dentro de cada ocupación (% fila, ponderado)**

| Ocupación | Sin habilidades | Básico | Intermedio | Avanzado |
|---|---|---|---|---|
| Trabajos informales | 6,00 | 21,20 | 47,70 | 25,20 |
| Oficio menor, obrero no calificado | 3,80 | 19,00 | 45,00 | 32,20 |
| Obrero calificado, microempresario | 3,10 | 16,50 | 49,40 | 31,00 |
| Empleado administrativo, técnico | 0,90 | 6,60 | 40,70 | 51,80 |
| Ejecutivo medio, profesional independiente | 0,00 | 2,10 | 27,00 | 70,80 |
| Alto ejecutivo, empresario | 0,00 | 8,00 | 32,60 | 59,40 |

![Niveles de habilidad por ocupación](outputs/habilidades/23_barras_nivel_ocupacion.png)

El salto relevante no está en los extremos sino entre la tercera y la cuarta categoría. Entre obreros calificados y empleados administrativos o técnicos, la proporción de nivel avanzado pasa de 31,00% a 51,80%, un salto de 20,8 puntos que no tiene equivalente en ningún otro peldaño. Ese umbral coincide con la frontera entre trabajo manual y trabajo de oficina, es decir, con la frontera de exposición cotidiana a un computador de trabajo. La Sección 3.9 muestra que, en efecto, la presencia de computador en el hogar es el factor con mayor asociación bivariada de todo el inventario.

### 3.6 Clasificación de ocupaciones por intensidad digital esperada

El marco de Bukht y Heeks (2017) ordena sectores según su dependencia de datos y tecnología digital. Aplicarlo con rigor requiere una matriz externa de coeficientes de intensidad digital por rama CIIU, que este proyecto no tiene disponible al cierre de esta versión. Se construye, en su lugar, una clasificación teórica ad-hoc que ordena las seis categorías ocupacionales según el requerimiento de TIC esperado en el ejercicio del trabajo.

| Intensidad digital esperada | Ocupación |
|---|---|
| Baja | Trabajos informales (lavado, aseo, doméstico ocasional, cuidador) |
| Baja-Media | Oficio menor, obrero no calificado, doméstico con contrato |
| Media | Obrero calificado, capataz, microempresario |
| Alta | Empleado administrativo, vendedor, técnico, profesional |
| Muy Alta | Ejecutivo medio, gerente, profesional independiente; alto ejecutivo, empresario |

Esta clasificación es explorativa y conviene decirlo sin rodeos: es una hipótesis de requerimiento, no una medición de requerimiento. Su validación exige tres insumos que hoy faltan. Primero, una matriz externa de coeficientes digitales por CIIU4, como la que el proyecto País Digital construyó para la estimación de economía digital. Segundo, una encuesta de requerimientos TIC dirigida a empleadores por rama. Tercero, datos de adopción tecnológica por ocupación provenientes de ELE o encuestas empresariales. Mientras esos insumos no se incorporen, la matriz de la subsección siguiente describe una correlación entre posición ocupacional y competencia, y no una brecha entre oferta y demanda de competencias.

### 3.7 Matriz de desalineación entre competencias e intensidad digital

**Tabla 6. Distribución del nivel de competencia por intensidad digital esperada (% fila, ponderado)**

| Intensidad digital esperada | Sin habilidades | Básico | Intermedio | Avanzado |
|---|---|---|---|---|
| Baja | 6,00 | 21,20 | 47,70 | 25,20 |
| Baja-Media | 3,80 | 19,00 | 45,00 | 32,20 |
| Media | 3,10 | 16,50 | 49,40 | 31,00 |
| Alta | 0,90 | 6,60 | 40,70 | 51,80 |
| Muy Alta | 0,00 | 2,50 | 27,40 | 70,00 |

![Mapa de calor de desalineación](outputs/habilidades/26_tabla3_desalineacion.png)

La matriz muestra un gradiente ordenado: a mayor intensidad digital esperada, mayor concentración en el nivel avanzado, de 25,20% a 70,00%. La correspondencia general entre requerimiento hipotético y competencia observada existe. Lo interesante está en los residuos.

**Desalineación por déficit.** En el tramo de intensidad alta, que agrupa a empleados administrativos, vendedores, técnicos y profesionales, 48,20% de las personas no alcanza el nivel avanzado. En el tramo de intensidad muy alta, esa proporción es todavía 29,90%. Cerca de tres de cada diez personas en hogares encabezados por ejecutivos y profesionales independientes no declaran ninguna de las tres competencias avanzadas del instrumento. Si la clasificación de intensidad es aproximadamente correcta, este es el déficit relevante: no está en la base de la estructura ocupacional sino en su tramo alto, donde el requerimiento es mayor.

**Desalineación por exceso.** En el tramo de intensidad baja, 25,20% alcanza el nivel avanzado y 47,70% el intermedio. Casi tres cuartas partes de las personas en hogares de trabajo informal declaran competencias por encima de lo que su posición ocupacional requeriría según la clasificación. La lectura como desperdicio de talento es una de dos posibles y no la más probable. La otra es que la clasificación ad-hoc subestima el requerimiento digital real de las ocupaciones informales, que hoy incluyen plataformas de intermediación laboral, pagos electrónicos y coordinación por mensajería. Esta segunda lectura es coherente con la evidencia de la Sección 3.1: las competencias más extendidas son de comunicación y transacción, precisamente las que el trabajo informal plataformizado exige.

**Advertencia sobre una inconsistencia en el procesamiento.** El notebook produce, junto a esta matriz, una tabla de diagnóstico automático (celda 26.3) cuyos porcentajes están calculados sin ponderar. Las cifras no coinciden con las de la Tabla 6 (por ejemplo, 18,80% frente a 25,20% de nivel avanzado en intensidad baja). En este documento se usan exclusivamente las cifras ponderadas. La tabla de diagnóstico del notebook debe corregirse para usar el factor de expansión antes de citarse en cualquier versión posterior.

### 3.8 Determinantes: qué queda del efecto ocupacional bajo control multivariado

Las asociaciones bivariadas de las secciones anteriores confunden efectos. Edad, educación, grupo socioeconómico e ingreso están fuertemente correlacionados entre sí en la población chilena, y la ocupación resume parcialmente a los tres. Para separar sus contribuciones se estima una regresión logística multinomial ponderada sobre 4.005 casos con información completa, que expanden a 10.780.196 personas, con "sin habilidades" como categoría de referencia e intervalos por bootstrap ponderado de 200 réplicas.

**Tabla 7. Razones de probabilidad seleccionadas, modelo sin ocupación (referencia: sin habilidades)**

| Nivel | Predictor | OR | IC 95% inf | IC 95% sup | Significativo |
|---|---|---|---|---|---|
| Avanzado | Educación superior | 18,42 | 5,65 | 85,40 | Sí |
| Avanzado | Educación media | 4,15 | 2,14 | 7,87 | Sí |
| Avanzado | Quintil 5 de ingreso | 8,68 | 2,26 | 59,04 | Sí |
| Avanzado | Quintil 4 de ingreso | 3,45 | 1,65 | 13,31 | Sí |
| Avanzado | Edad (por desviación estándar) | 0,12 | 0,07 | 0,16 | Sí |
| Intermedio | Educación superior | 7,65 | 2,48 | 35,34 | Sí |
| Intermedio | Educación media | 4,59 | 2,51 | 8,36 | Sí |
| Intermedio | Edad (por desviación estándar) | 0,22 | 0,14 | 0,30 | Sí |
| Básico | Educación superior | 1,34 | 0,47 | 4,77 | No |
| Básico | Edad (por desviación estándar) | 0,48 | 0,31 | 0,64 | Sí |

La educación superior multiplica por 18,42 las probabilidades relativas de alcanzar el nivel avanzado frente a no tener ninguna habilidad, controlando edad, grupo socioeconómico e ingreso. La educación media las multiplica por 4,15. La edad opera en sentido contrario y con fuerza comparable: cada desviación estándar adicional de edad reduce la razón de probabilidad del nivel avanzado a 0,12. El ingreso conserva efecto propio en los dos quintiles superiores. Es importante notar que la educación no discrimina para el nivel básico: quien solo alcanza el nivel básico no se distingue por educación de quien no tiene ninguna habilidad. La educación separa a los competentes de los no competentes, no gradúa dentro de la competencia baja.

Las razones de probabilidad estimadas para grupo socioeconómico en este modelo son erráticas y no deben usarse. El coeficiente de C2 aparece con OR 8,22 y el de C3 con 0,13, un patrón no monótono que contradice el resto de la evidencia. La causa probable es una combinación de regularización L2 en el estimador y colinealidad entre GSE, educación e ingreso, dado que el GSE se deriva justamente de educación y ocupación del jefe de hogar. Para la lectura del efecto socioeconómico se usa la verificación ordinal, que sí entrega un gradiente limpio.

**Tabla 8. Regresión logística ordinal, verificación de robustez (no ponderada, n = 4.005)**

| Predictor | Coeficiente | Error est. | p |
|---|---|---|---|
| Educación superior | 1,967 | 0,132 | <0,001 |
| Educación media | 1,083 | 0,109 | <0,001 |
| GSE C1 | -0,286 | 0,170 | 0,094 |
| GSE C2 | -0,324 | 0,163 | 0,046 |
| GSE C3 | -0,928 | 0,167 | <0,001 |
| GSE D | -1,000 | 0,176 | <0,001 |
| GSE E | -1,055 | 0,179 | <0,001 |
| Quintil 5 de ingreso | 0,987 | 0,133 | <0,001 |
| Quintil 4 de ingreso | 0,537 | 0,106 | <0,001 |
| Edad estandarizada | -0,899 | 0,038 | <0,001 |

El modelo ordinal, que explota el orden de los cuatro niveles y no aplica ponderación, confirma la dirección y el orden de todos los efectos y entrega el gradiente socioeconómico monótono que el multinomial no logra estimar de manera estable. Tomando el AB como referencia implícita, el descenso es continuo hasta el segmento E. Traducido a probabilidades predichas con edad, educación e ingreso fijos en su valor típico, la probabilidad de alcanzar nivel avanzado es 37,60% en el segmento AB y 12,10% en el segmento E, una razón de 3,11 veces atribuible al grupo socioeconómico una vez descontados los demás factores.

![Probabilidades predichas por grupo socioeconómico](outputs/habilidades/21_probabilidades_predichas_gse.png)

**El efecto neto de la ocupación.** Agregando la ocupación del jefe de hogar al modelo, con trabajos informales como categoría de referencia, el resultado es el siguiente.

**Tabla 9. Razones de probabilidad de la ocupación, controlando edad, educación, GSE e ingreso**

| Nivel | Ocupación (frente a trabajos informales) | OR | IC 95% inf | IC 95% sup |
|---|---|---|---|---|
| Avanzado | Oficio menor, obrero no calificado | 1,21 | 0,59 | 2,81 |
| Avanzado | Obrero calificado, microempresario | 2,14 | 0,54 | 7,09 |
| Avanzado | Empleado administrativo, técnico | 2,87 | 0,51 | 17,06 |
| Avanzado | Ejecutivo medio, profesional independiente | 8,61 | 5,59 | 33,66 |
| Avanzado | Alto ejecutivo, empresario | 1,41 | 0,89 | 5,19 |
| Intermedio | Ejecutivo medio, profesional independiente | 3,29 | 1,82 | 12,05 |
| Intermedio | Empleado administrativo, técnico | 1,49 | 0,24 | 7,37 |

Este es el resultado central de la sección y responde de manera directa la pregunta planteada en la versión anterior del borrador. Una vez controladas edad, educación, grupo socioeconómico e ingreso, la ocupación pierde casi todo su poder explicativo. Solo la categoría de ejecutivo medio y profesional independiente conserva un efecto neto significativo, y lo conserva con magnitud considerable (8,61 para nivel avanzado, 3,29 para intermedio). Las demás categorías tienen intervalos de confianza que cruzan el 1.

La brecha ocupacional de competencias digitales en Chile es, por tanto, mayoritariamente composicional. Las ocupaciones de baja calificación no producen trabajadores con menos competencia digital: emplean a personas que ya tienen menos educación formal y más edad, y esas dos características explican casi todo el diferencial. La excepción del tramo ejecutivo sugiere que ahí sí opera algo propio del puesto, probablemente exposición cotidiana intensiva a herramientas digitales de gestión.

La consecuencia de política es incómoda para el enfoque sectorial que motivó este white paper. Si la brecha es composicional, un programa de formación focalizado por sector estará, en la práctica, focalizando por educación y edad de manera indirecta e imprecisa. Focalizar directamente por esos dos atributos es más eficiente. El enfoque sectorial recupera sentido solo en dos casos: cuando el contenido formativo debe ser específico de la tarea productiva (el argumento de pertinencia contextual de la Sección 5) y cuando el sector es la vía de acceso a la población objetivo, no el criterio de focalización.

**Advertencias sobre estos modelos.** Tres. El estimador multinomial aplica regularización L2 con C = 10, lo que sesga los coeficientes hacia cero y explica parte de la amplitud de los intervalos. El notebook imprime como categoría de referencia de ocupación la moda de la variable, que no es la referencia efectiva: la referencia que usa el diseño de matriz es trabajos informales, y así se interpreta aquí. Los intervalos por bootstrap ponderado con 200 réplicas son suficientes para detectar dirección pero estrechos en precisión para los extremos con pocos casos.

### 3.9 Mapa de factores estructurantes

Se calculó la V de Cramér de 32 variables de cruce contra el nivel de habilidades, con corrección de Benjamini-Hochberg. Treinta resultaron significativas. La tabla siguiente ordena las más relevantes excluyendo la variable de uso de computador en la última semana (V = 0,474), cuya asociación con la habilidad es en parte tautológica.

**Tabla 10. Factores ordenados por tamaño de efecto sobre el nivel de habilidades**

| Factor | Dominio | V de Cramér | Interpretación |
|---|---|---|---|
| Hay computador en el hogar | Hogar | 0,383 | Fuerte |
| Nivel educacional agrupado | Educación | 0,373 | Fuerte |
| Internet facilita trabajo o estudio | Percepción | 0,358 | Fuerte |
| Nivel educacional del respondente | Educación | 0,338 | Fuerte |
| Generación | Demográfica | 0,293 | Moderada |
| Tramo de edad | Demográfica | 0,289 | Moderada |
| Educación del jefe o jefa de hogar | Educación | 0,265 | Moderada |
| Tiempo diario de conexión | Exposición | 0,233 | Moderada |
| Acceso a internet en el hogar | Hogar | 0,227 | Moderada |
| Ocupación del respondente | Ocupacional | 0,225 | Moderada |
| Grupo socioeconómico | Socioeconómica | 0,218 | Moderada |
| Quintil de ingreso familiar | Socioeconómica | 0,207 | Moderada |
| Ocupación del jefe o jefa de hogar | Ocupacional | 0,192 | Débil |
| Situación laboral del hogar | Laboral | 0,166 | Débil |
| Sexo | Demográfica | 0,161 | Débil |
| Región | Territorial | 0,119 | Débil |
| Macrozona | Territorial | 0,072 | Despreciable |
| Zona urbana o rural | Territorial | 0,066 | Despreciable |
| Tiene trabajo remunerado | Laboral | 0,048 | Despreciable |
| Pertenencia a pueblo originario | Demográfica | 0,040 | No significativa |

![Ranking de factores por tamaño de efecto](outputs/habilidades/05_ranking_factores.png)

El resultado más contraintuitivo de todo el análisis está en el pie de esta tabla. El territorio, que organiza buena parte del discurso público sobre brecha digital en Chile, tiene un efecto despreciable sobre la competencia. La zona urbana o rural alcanza V = 0,066 y la macrozona 0,072. En medias del índice, la diferencia es de 9,85 tareas en zona urbana frente a 8,88 en zona rural, menos de una tarea de 18. La brecha educacional, en cambio, es de 8,99 tareas entre educación superior y educación básica o menos. La brecha educacional es 9,3 veces mayor que la territorial.

Esto no significa que no exista un problema rural. Significa que el problema rural es de acceso e infraestructura, no de competencia, y que un programa de alfabetización digital focalizado territorialmente estará mal dirigido. La pertenencia a pueblo originario, por su parte, no muestra asociación significativa con el nivel de competencia una vez aplicada la corrección por comparaciones múltiples.

**Tabla 11. Media del índice por factor sociodemográfico (ponderada, base Q8)**

| Factor y categoría | Media (0-18) | IC 95% | n | Diferencia frente al total |
|---|---|---|---|---|
| Edad: menor de 18 | 12,30 | 10,30 a 14,30 | 40 | +2,57 |
| Edad: 18-29 | 12,44 | 11,93 a 12,96 | 876 | +2,71 |
| Edad: 30-44 | 11,55 | 11,11 a 11,99 | 1.335 | +1,81 |
| Edad: 45-59 | 8,16 | 7,69 a 8,64 | 1.248 | -1,57 |
| Edad: 60 y más | 4,82 | 4,44 a 5,20 | 1.259 | -4,92 |
| Educación: básica o menos | 3,72 | 3,26 a 4,19 | 651 | -6,01 |
| Educación: media | 7,69 | 7,36 a 8,03 | 2.303 | -2,04 |
| Educación: superior | 12,71 | 12,35 a 13,07 | 1.804 | +2,98 |
| GSE: AB | 13,53 | 12,72 a 14,33 | 339 | +3,79 |
| GSE: C1 | 12,66 | 12,00 a 13,31 | 530 | +2,92 |
| GSE: C2 | 10,52 | 9,99 a 11,05 | 973 | +0,78 |
| GSE: C3 | 8,46 | 7,98 a 8,93 | 1.273 | -1,28 |
| GSE: D | 7,76 | 7,11 a 8,41 | 769 | -1,98 |
| GSE: E | 6,35 | 5,80 a 6,90 | 874 | -3,38 |
| Ingreso: quintil 1 | 7,53 | 6,87 a 8,18 | 850 | -2,55 |
| Ingreso: quintil 5 | 14,00 | 13,42 a 14,57 | 515 | +3,92 |
| Zona rural | 8,88 | 8,57 a 9,20 | 1.312 | -0,85 |
| Zona urbana | 9,85 | 9,55 a 10,16 | 3.446 | +0,12 |

![Medias del índice por factor sociodemográfico](outputs/habilidades/06_brechas_por_factor.png)

![Composición del nivel de habilidades por factor](outputs/habilidades/07_composicion_nivel_por_factor.png)

La brecha etaria merece un comentario aparte porque su forma no es lineal. Entre menores de 18 y el tramo 30-44 la variación es modesta, de 12,30 a 11,55. El descenso se produce de golpe entre los 44 y los 45 años, y se acelera después de los 60: de 11,55 a 8,16 y luego a 4,82. La cohorte que hoy tiene entre 45 y 59 años entró al mercado laboral antes de la masificación de internet en Chile y no adquirió las competencias en el sistema educativo. La Sección 3.13 confirma esa lectura desde el lado de la vía de adquisición.

![Mapa de calor de tareas por edad y educación](outputs/habilidades/08_heatmap_items_edad_educacion.png)

### 3.10 Brecha de género

El sexo tiene asociación débil con el nivel de habilidades (V = 0,161), pero esa cifra global esconde un patrón sistemático por tipo de tarea.

**Tabla 12. Brecha de género por tarea (puntos porcentuales, hombres menos mujeres)**

| Tarea | Nivel | Hombres % | Mujeres % | Brecha pp |
|---|---|---|---|---|
| Realizar videollamadas | Básica | 82,78 | 86,78 | -3,99 |
| Revisar redes sociales | Básica | 84,25 | 85,55 | -1,30 |
| Transacciones bancarias | Media | 73,02 | 70,50 | +2,52 |
| Editar fotografías o videos | Media | 63,82 | 59,93 | +3,88 |
| Enviar y recibir correos | Básica | 76,48 | 70,90 | +5,58 |
| Subir contenidos a redes sociales | Media | 60,68 | 54,88 | +5,80 |
| Plataformas de video, series, música | Básica | 57,50 | 48,77 | +8,73 |
| Uso de IA generativa | Emergente | 45,56 | 35,83 | +9,73 |
| Procesador de texto (Word) | Básica | 64,75 | 54,42 | +10,33 |
| Crear un sitio web | Avanzada | 23,19 | 12,42 | +10,76 |
| Software de presentación | Media | 57,89 | 46,45 | +11,44 |
| Duplicar o transferir archivos | Media | 59,77 | 47,67 | +12,10 |
| Fórmulas sencillas en planilla | Media | 56,41 | 44,25 | +12,16 |
| Conectar un nuevo dispositivo | Media | 59,25 | 46,65 | +12,60 |
| Participar en juegos en línea | Básica | 52,52 | 39,18 | +13,34 |
| Descargar, instalar y configurar apps | Media | 59,67 | 45,36 | +14,31 |
| Modificar configuración de seguridad | Avanzada | 46,47 | 31,10 | +15,38 |
| Instalar sistema operativo o programar | Avanzada | 31,21 | 15,19 | +16,02 |

![Brecha de género en habilidades por tramo de edad](outputs/habilidades/09_brecha_genero.png)

El orden de la tabla es el hallazgo. Las mujeres aventajan a los hombres únicamente en las dos tareas de comunicación interpersonal, y la brecha se abre progresivamente al avanzar hacia lo operacional y lo avanzado, hasta llegar a 16,02 puntos en instalar sistema operativo o programar y 15,38 en modificar configuraciones de seguridad. La brecha en uso de IA generativa, 9,73 puntos, es del mismo orden que la de procesador de texto, lo que indica que la tecnología emergente está reproduciendo la desigualdad de género existente en lugar de reordenarla.

Este resultado debe leerse con la advertencia de la Sección 2.3. La literatura documenta que el autorreporte sobreestima competencia en hombres y la subestima en mujeres. Las brechas de esta tabla son brechas de declaración, y su componente de competencia efectiva no es separable con este instrumento. Lo que sí es interpretable es el patrón: cualquiera sea la magnitud del sesgo de declaración, opera de manera creciente con la dificultad y el carácter técnico de la tarea, lo que es consistente con la evidencia de estereotipo de dominio antes que con una diferencia uniforme de autoconfianza.

### 3.11 Validación conductual: cuánto de la competencia declarada se ejerce

El cruce entre la capacidad declarada (Q8) y la conducta efectivamente realizada en los últimos tres meses (Q21) permite acotar la sobredeclaración por arriba. Es un control poco frecuente en encuestas de este tipo y su resultado obliga a matizar todo lo anterior.

**Tabla 13. Capacidad declarada frente a conducta ejecutada (base 4.652)**

| Competencia | Declara capacidad % | Ejecutó conducta % | Ejecuta si declara % | Sobredeclaración % | Ejecuta sin declarar % |
|---|---|---|---|---|---|
| Obtener e instalar software | 53,01 | 12,95 | 21,55 | 78,45 | 3,24 |
| Crear un sitio web | 17,90 | 10,01 | 26,63 | 73,37 | 6,39 |
| Subir contenidos a redes sociales | 58,47 | 55,25 | 76,34 | 23,66 | 25,56 |
| Transacciones bancarias | 72,66 | 64,10 | 78,71 | 21,29 | 25,25 |

![Sobredeclaración por competencia](outputs/habilidades/15_sobredeclaracion.png)

La sobredeclaración es una cota superior, no una medida de error: incluye a quienes saben hacer algo pero no tuvieron ocasión de hacerlo en el período de referencia. Con esa salvedad, la diferencia entre los dos pares de filas es demasiado grande para atribuirse solo a falta de ocasión. Las competencias de uso frecuente y motivación clara, como la banca en línea y las redes sociales, muestran sobredeclaración en torno a 22%. Las competencias técnicas muestran sobredeclaración sobre 73%. Solo uno de cada cinco de quienes declaran saber obtener e instalar software lo hizo efectivamente en tres meses.

La implicancia para este white paper es directa y afecta la lectura de la Sección 3.2. El nivel avanzado se activa con una sola de tres tareas, dos de las cuales (crear un sitio web e instalar software o sistema operativo) están entre las de mayor sobredeclaración del instrumento. El 42,76% clasificado como avanzado es, en consecuencia, una cota superior optimista. Cualquier estimación de oferta de capital humano digital avanzado en Chile basada en autorreporte debería aplicar un descuento explícito.

El resultado también valida el interés del ejercicio: la subdeclaración existe y no es menor (25,56% ejecuta conductas de publicación en redes sin declarar la capacidad, 25,25% en banca), lo que confirma que el autorreporte tiene error en ambas direcciones y que las brechas entre grupos deben leerse como brechas de declaración.

### 3.12 Seguridad digital y falsa seguridad

**Tabla 14. Prácticas de seguridad y privacidad (base 4.731)**

| Práctica | % | IC 95% |
|---|---|---|
| No abrir archivos o enlaces sospechosos | 55,07 | 52,75 a 57,39 |
| Cambio de contraseñas | 41,49 | 39,19 a 43,79 |
| Herramientas de protección (antivirus o cortafuegos) | 35,02 | 32,80 a 37,25 |
| Cambiar ajustes de privacidad en redes sociales | 32,01 | 29,83 a 34,19 |
| Borrar historial de búsqueda | 30,43 | 28,28 a 32,57 |
| Borrar o editar contenido propio publicado | 22,17 | 20,23 a 24,11 |
| Ninguna de las anteriores | 21,43 | 19,51 a 23,34 |

El índice de seguridad, construido sobre las seis prácticas del núcleo de la batería, promedia 2,16 de 6 (IC 95% 2,08 a 2,25). Uno de cada cinco usuarios no ejecuta ninguna práctica de protección. La correlación entre el índice de habilidades y el de seguridad es de 0,521, sustancial pero lejos de la identidad: la competencia general no garantiza la conducta de protección.

**Tabla 15. Cuadrante de riesgo: percepción de protección frente a práctica efectiva (% del total, n = 4.500)**

| | Practica 3 o más | Practica menos de 3 |
|---|---|---|
| Se siente protegido | 26,38 | 33,85 |
| Se siente desprotegido | 14,29 | 25,48 |

![Cuadrante de riesgo](outputs/habilidades/11_cuadrante_riesgo.png)

El cuadrante superior derecho es el hallazgo. Un 33,85% de los usuarios se siente protegido pese a ejecutar menos de tres de las seis prácticas. Es el grupo más numeroso de los cuatro y el más expuesto, porque su percepción de seguridad suprime la demanda de formación. La asociación entre percepción y práctica es estadísticamente significativa pero de magnitud despreciable (V de Cramér 0,078). En términos prácticos, saber cuán protegida se siente una persona no permite predecir si se protege.

**Tabla 16. Exposición declarada a incidentes por nivel de habilidades (%)**

| Nivel | Ataque de virus | Mal uso de información personal | Pérdidas financieras por fraude | Suplantación de identidad |
|---|---|---|---|---|
| Sin habilidades | 9,11 | 2,04 | 3,47 | 1,31 |
| Básico | 6,84 | 2,70 | 2,03 | 1,47 |
| Intermedio | 11,37 | 5,75 | 5,67 | 3,05 |
| Avanzado | 11,79 | 7,19 | 7,74 | 4,13 |

La relación es la inversa de la esperada por una lectura ingenua: quienes tienen mayor competencia declaran más incidentes, no menos. Las pérdidas financieras por fraude pasan de 2,03% en el nivel básico a 7,74% en el avanzado, y la suplantación de identidad casi se triplica. Dos mecanismos compiten para explicarlo y los datos no permiten separarlos. El primero es exposición: quien opera más en línea tiene más superficie de ataque. El segundo es detección: quien tiene más competencia reconoce e identifica incidentes que otros no advierten. Ambos mecanismos apuntan en la misma dirección de política, que es no tratar la competencia digital como sustituto de la protección.

### 3.13 Adquisición de la competencia y barreras

**Tabla 17. Vía de adquisición de la competencia digital (base 5.000)**

| Vía | Tipo | % | IC 95% |
|---|---|---|---|
| Aprendí solo, autodidacta | Informal | 37,66 | 35,45 a 39,86 |
| Currículum central escolar o superior | Formal | 29,14 | 27,08 a 31,21 |
| No sé usar computador o nunca lo he usado | Ausencia de competencia | 19,46 | 17,65 a 21,26 |
| Me enseñó familiar, amigo o contacto | Informal | 16,18 | 14,50 a 17,85 |
| Clases optativas o complementarias | Formal | 7,24 | 6,06 a 8,42 |
| Curso particular, municipal o de centro social | Formal | 5,12 | 4,12 a 6,13 |
| En el trabajo | Laboral | 1,28 | 0,77 a 1,79 |

Agregando por tipo: 50,30% adquirió alguna competencia por vía informal, 38,10% por alguna vía formal y 1,28% en el trabajo.

**Tabla 18. Vía de adquisición por generación (% de cada generación)**

| Vía | Gen Z (≤27) | Millennial (28-43) | Gen X (44-59) | Boomer (60-78) | Silent (79+) |
|---|---|---|---|---|---|
| Autodidacta | 55,97 | 44,37 | 30,71 | 16,73 | 10,16 |
| Currículum central | 35,28 | 44,39 | 22,72 | 7,88 | 1,07 |
| Familiar, amigo o contacto | 21,90 | 12,29 | 17,07 | 16,04 | 6,44 |
| Clases optativas | 7,78 | 9,43 | 5,68 | 5,28 | 3,74 |
| Curso particular o municipal | 1,53 | 3,86 | 9,89 | 6,11 | 3,14 |
| En el trabajo | 0,00 | 0,27 | 1,62 | 4,04 | 1,17 |

![Vía de adquisición por generación](outputs/habilidades/10_adquisicion_por_generacion.png)

El dato de 1,28% de adquisición en el trabajo es, a juicio de este análisis, el resultado con mayor implicancia de política de todo el documento. El sistema productivo chileno no transmite competencia digital a sus trabajadores de manera perceptible. Ni siquiera en la generación X, que atravesó la digitalización de las empresas en plena vida laboral, la vía laboral supera 1,62%. El aprendizaje ocurre por cuenta propia o en el sistema educativo, y el lugar de trabajo es un espacio de aplicación pero no de formación.

Esto conecta directamente con la hipótesis de desacople planteada en la Sección 1. Si la infraestructura digital de las empresas crece pero la competencia de sus trabajadores se forma fuera de la empresa y antes de entrar a ella, entonces la adopción tecnológica está limitada por el stock de competencias que la firma hereda del sistema educativo, no por lo que la firma puede desarrollar. La brecha de productividad tiene ahí un canal plausible.

La tabla por generación agrega dos matices. El currículum escolar cubre bien a millennials (44,39%) y de manera decreciente a Gen Z (35,28%), lo que sugiere que la generación más joven aprende cada vez más por su cuenta y menos en la escuela. Y los cursos particulares o municipales tienen su punto máximo en Gen X (9,89%), que es la generación con mayor déficit relativo. La oferta de formación de adultos existe y llega justamente al grupo que más la necesita, pero su cobertura es de un dígito.

**Barreras atribuidas a falta de competencia.** Entre los 269 no usuarios de internet, 30,86% declara no saber utilizar computador o teléfono inteligente y 22,86% no saber usar internet. Un 9,70% adicional declara no creerse capaz de aprender, que es una barrera de autoeficacia y no de competencia. El agregado de usabilidad del propio cuestionario alcanza 46,30%. Estas cifras tienen base pequeña y no admiten desagregación.

A nivel hogar, entre los 1.645 hogares sin banda ancha fija, 9,27% atribuye la ausencia a no saber usar computador o teléfono y 8,41% a no saber usar internet. La distinción entre desconocimiento y rechazo informado es relevante para el diseño: 6,63% declara no conocer los beneficios de internet mientras 7,19% dice conocerlos y no encontrarlo útil. El primer grupo es objeto de alfabetización digital, el segundo es una decisión informada que no se revierte informando.

**Uso por delegación.** Entre los 269 no usuarios, 18,10% delega al menos una actividad digital en un tercero. La actividad más delegada es realizar un trámite o pagar una cuenta (12,82%), seguida de correo electrónico (5,49%) y búsqueda de información (4,34%). Es el segmento de conectados por delegación que describen Helsper y van Deursen: acceden a los beneficios de internet sin poseer la competencia, y son invisibles en cualquier indicador dicotómico de uso. Varias celdas de esta batería tienen menos de 20 casos y sirven para caracterización cualitativa, no para inferencia poblacional.

![Actividades delegadas a terceros](outputs/habilidades/13_delegacion.png)

### 3.14 Reproducción intergeneracional: mediación parental

Esta subsección usa el marco hogar, con `FE_HOGAR` sobre los 1.452 hogares con menores de edad, de los cuales 1.428 tienen batería Q8 completa del respondente. El cruce es válido porque la misma persona contesta ambos módulos.

**Tabla 19. Medidas técnicas de mediación parental adoptadas según competencia digital del adulto (media de 0 a 6)**

| Nivel de habilidades del adulto | Medidas técnicas | IC 95% | n hogares |
|---|---|---|---|
| Sin habilidades | 0,79 | 0,11 a 1,47 | 27 |
| Básico | 0,53 | 0,28 a 0,77 | 156 |
| Intermedio | 1,09 | 0,89 a 1,29 | 703 |
| Avanzado | 1,92 | 1,64 a 2,21 | 542 |

![Mediación parental según competencia del adulto](outputs/habilidades/14_mediacion_por_competencia.png)

El gradiente es claro entre básico y avanzado: un adulto de nivel avanzado adopta 3,7 veces más medidas técnicas de protección que uno de nivel básico. La asociación entre nivel de habilidades y uso de mediación técnica es moderada (V de Cramér 0,209, p < 0,001, n = 1.428). El valor de 0,79 en el grupo sin habilidades no rompe el patrón: con 27 hogares y un intervalo que va de 0,11 a 1,47, no es distinguible del grupo básico.

Una verificación de robustez restringió el análisis a los 803 hogares donde el informante es el jefe o jefa de hogar. La diferencia máxima con el criterio amplio es de 0,29 medidas, y el gradiente se mantiene. La conclusión no depende del criterio de informante.

El hallazgo importa porque describe un mecanismo de reproducción. Los hijos de adultos con baja competencia digital crecen en entornos con menos protección técnica, lo que los expone a riesgos que sus pares en hogares de mayor competencia no enfrentan. La desigualdad de competencia digital de una generación se convierte en desigualdad de exposición al riesgo de la siguiente. Es un argumento adicional, y de naturaleza distinta a la productiva, para tratar la formación digital de adultos como política de infancia.

---

## Sección 4. Chile en perspectiva regional

*Sección pendiente. No se ejecutó análisis comparado en esta versión.*

El análisis de la Sección 3 se realizó exclusivamente sobre EAUI 2026. La comparación regional requiere armonizar instrumentos con métricas distintas, y ese trabajo no está hecho. Se documenta aquí lo que la comparación debería resolver, para no confundir estructura esperada con resultado obtenido.

Las comparaciones previstas son con Brasil (Nishijima et al., 2017) en distribución ocupacional, con México (Martínez-Domínguez y Mora-Rivera, 2020) en ruralidad y digitalización desigual, y con los microdatos de PIAAC para contrastar autopercepción contra desempeño en países de la región. El contraste con PIAAC es el más valioso porque es el único que permitiría estimar el sesgo de autorreporte con una medida externa, en lugar de acotarlo por arriba como hace la Sección 3.11.

Dos resultados de la Sección 3 modifican las hipótesis que la versión anterior de este borrador anticipaba para esta sección. Primero, la hipótesis de que Chile presentaría una distribución más desigual en sectores primarios pierde sustento en la medida en que el efecto ocupacional resultó mayoritariamente composicional. La comparación pertinente no es de dispersión ocupacional sino de retorno educacional a la competencia digital. Segundo, la hipótesis de una brecha territorial comparable a la mexicana queda desmentida por los datos chilenos, donde el territorio tiene efecto despreciable. Si el contraste con México se mantiene, será para explicar por qué dos países con distinta geografía de la conectividad producen brechas de competencia de estructura distinta.

---

## Sección 5. Qué funciona en formación: lecciones para intervención sectorial

*A partir de corpus ya revisado:*

### Lecciones generales

Choudhary y Bansal (2022) sistematizan qué características predicen éxito en programas de alfabetización digital:

1. **Pertinencia contextual**: alineación con oportunidades económicas específicas del territorio.
2. **Modularidad**: permitir entrada y avance según ritmo del participante.
3. **Docencia preparada**: formadores con dominio del contenido y capacidad pedagógica.
4. **Acompañamiento prolongado**: formación no es un evento sino un proceso.
5. **Evaluación de impacto**: medición de cambio en capacidad, no solo en satisfacción.

### Intervenciones sectorizadas

Los casos que mejor funcionan en América Latina son aquellos diseñados para un sector o ocupación específica:

- **Agricultura**: el programa Llanos Orientales en Colombia (TIC aplicadas a cultivos y riego) produjo incrementos de productividad documentados porque enseñaba lo que los agricultores necesitaban para esa actividad específica.
- **Manufactura pyme**: Laboratorio para la Prosperidad en Chile enseña gestión de inventarios y ventas en línea. La retención y efectividad fueron altas porque el contenido era directamente aplicable.
- **Servicios financieros**: plataformas de microcrédito requieren seguridad digital mínima. Programas cortos (8-12 horas) de seguridad básica han mostrado mayor adopción que cursos generales de 40 horas.

### Riesgos conocidos

OCDE (2020) documenta que programas de educación digital abierta tienden a reproducir desigualdades preexistentes: quienes tienen más educación previa avanzan más, mientras que quienes cuentan con niveles más bajos de literacidad se encuentran con brechas de prerequisitos.

Implicancia: la formación en habilidades digitales de población adulta debe incluir componentes simultáneos de fortalecimiento de lectoescritura y cálculo, no asumir que están consolidados.

---

## Sección 6. Recomendaciones

Las recomendaciones se derivan de cuatro resultados de la Sección 3 y se ordenan por plazo. Cuando una recomendación de la versión anterior de este borrador queda desmentida por los datos, se indica de manera explícita.

### Corto plazo (0 a 6 meses)

*Dirigidas a SUBTEL, Ministerio de Economía, SENCE y CORFO.*

**Crear un instrumento de formación digital en el puesto de trabajo.** Es la recomendación principal y se sostiene en el resultado de la Sección 3.13: solo 1,28% de la población adquirió competencia digital en el trabajo. El sistema productivo es hoy un espacio de aplicación y no de formación. La franquicia tributaria de capacitación administrada por SENCE es el instrumento existente más cercano, y la pregunta previa a cualquier diseño nuevo es por qué no está produciendo formación digital detectable en la encuesta. Un diagnóstico del uso efectivo de la franquicia en contenidos digitales, cruzado por tamaño de empresa y rama, es el primer paso y puede ejecutarse con registros administrativos existentes.

**Priorizar seguridad digital con cobertura universal, no focalizada.** La Sección 3.5 muestra que la competencia de transacciones y seguridad es débil en todas las ocupaciones, incluida la de mayor calificación, y la Sección 3.12 muestra que 33,85% de los usuarios se siente protegido sin ejecutar prácticas de protección. Es una brecha de nivel y no de distribución, de modo que la focalización no corresponde. La prioridad de contenido son las prácticas concretas del listado Q32, no la conciencia de riesgo, porque el problema documentado no es de percepción sino de conducta.

**Reasignar el eje de focalización desde el territorio hacia la edad y la educación.** La Sección 3.9 muestra que la zona urbana o rural explica una diferencia de 0,97 tareas de 18, mientras la educación explica 8,99 y la edad 7,63. Esto contradice la orientación territorial dominante en los programas de alfabetización digital. La recomendación no es abandonar la política rural, que sigue justificada por acceso e infraestructura, sino separar el objetivo de acceso del objetivo de competencia y dejar de usar el territorio como criterio de focalización para el segundo.

**Piloto dirigido a la cohorte de 45 a 59 años.** Es el punto donde la Sección 3.9 detecta la caída abrupta del índice, de 11,55 a 8,16 tareas, y es también la generación que la Sección 3.13 muestra recurriendo en mayor proporción a cursos particulares o municipales (9,89%). Existe demanda revelada y existe déficit. Es la cohorte con mayor retorno esperado por unidad de gasto, porque además le quedan entre 10 y 20 años de vida laboral activa.

### Mediano plazo (6 a 18 meses)

*Dirigidas a instituciones formadoras y a ChileValora.*

**Rediseñar los currículos por dimensión, no por nivel.** La Sección 3.3 muestra que el nivel jerárquico de competencia agrupa al menos cuatro perfiles distintos y que un segundo eje factorial opone ofimática a sociabilidad. Un programa dirigido a "nivel intermedio" está apuntando a un conjunto heterogéneo. La segmentación pertinente es por perfil de competencias, y las dimensiones con mayor déficit y mayor estratificación son la operacional y la de creación de contenidos, no la de comunicación, que ya está saturada.

**Certificar competencias específicas y verificables, no autopercepción.** La Sección 3.11 muestra sobredeclaración de 78,45% en instalación de software y 73,37% en creación de sitios web. Cualquier sistema de certificación basado en declaración reproducirá ese error. La certificación debe apoyarse en ejecución observada de tareas, aunque sea a escala reducida.

**Corregir la orientación sectorial del enfoque formativo.** La Sección 3.8 muestra que, controlando edad, educación, GSE e ingreso, la ocupación pierde poder explicativo salvo en el tramo ejecutivo. La recomendación de la versión anterior de este borrador, que proponía diseñar los programas por sector destino, queda matizada: el sector sirve como vía de acceso a la población objetivo y como fuente de pertinencia del contenido, pero no como criterio de focalización, porque focalizar por sector es focalizar por educación y edad de manera indirecta e imprecisa.

### Largo plazo (18 meses o más)

*Dirigidas a MINEDUC, Ministerio del Trabajo, INE y SUBTEL.*

**Corregir el instrumento de medición.** Tres correcciones concretas para la próxima aplicación de EAUI. Recuperar la variable de actividad principal (Q2), que llegó vacía y es la pérdida más costosa del archivo. Incorporar clasificación CIIU de rama de actividad para el ocupado, sin la cual la pregunta sectorial de este white paper no tiene respuesta posible. Y agregar un módulo corto de tareas ejecutadas que permita estimar sobredeclaración en todos los ítems y no solo en cuatro.

**Integrar medición de competencias digitales en CASEN y en la Encuesta Nacional de Empleo.** Una batería reducida y estable, aplicada en encuestas que sí traen rama de actividad y situación laboral completa, permitiría responder la pregunta rectora de este white paper con datos propios del sistema estadístico y con seguimiento en el tiempo.

**Vincular certificación de competencias digitales con reconocimiento de aprendizajes previos.** Dado que 50,30% de la población adquirió sus competencias por vía informal, un sistema que solo reconozca formación formal deja fuera a la mitad de los competentes.

---

## Limitaciones

Las limitaciones se ordenan de mayor a menor consecuencia sobre las conclusiones.

**1. El sector económico no está observado.** La variable de actividad principal (Q2) no tiene ningún dato válido en el archivo y no existe clasificación CIIU. La pregunta rectora, que interroga por la distribución sectorial de competencias, se responde con un aproximador ocupacional (AIM-ESOMAR) que ordena posiciones por calificación y no ramas productivas. Este documento describe un gradiente ocupacional. La respuesta sectorial requiere incorporar ENUPE y ELE, que están fuera de esta versión.

**2. La clasificación de intensidad digital es una construcción propia sin validación externa.** El ordenamiento de ocupaciones por requerimiento de TIC de la Sección 3.6 es una hipótesis teórica del equipo, no una medición. La matriz de desalineación de la Sección 3.7 debe leerse como ejercicio exploratorio. Su validación requiere coeficientes digitales por CIIU4, una encuesta de requerimientos TIC a empleadores, o datos de adopción tecnológica por ocupación.

**3. Todo el instrumento es autorreporte de capacidad.** La Sección 3.11 acota la sobredeclaración por arriba en cuatro competencias y encuentra valores de hasta 78,45%. Las brechas de género y edad estimadas son brechas de declaración; su componente de competencia efectiva no es separable con este instrumento. La literatura documenta sobreestimación sistemática en hombres y subestimación en mujeres y adultos mayores, lo que implica que la brecha de género de la Sección 3.10 es probablemente una cota superior.

**4. El nivel avanzado se activa con un solo ítem.** La regla jerárquica clasifica como avanzado a quien declara al menos una de tres tareas, dos de las cuales están entre las de mayor sobredeclaración. El 42,76% de la Sección 3.2 no debe interpretarse como proporción de población con repertorio digital sofisticado.

**5. Los intervalos de confianza son cotas inferiores del error real.** El archivo no incluye identificadores de estrato ni de conglomerado, por lo que no es posible estimar la varianza con el diseño muestral completo. Los intervalos usan el tamaño muestral efectivo de Kish, que corrige por variabilidad de los pesos pero no por conglomeración. Las pruebas de chi-cuadrado usan pesos reescalados al n muestral, que es una aproximación al ajuste de Rao-Scott y no el ajuste exacto.

**6. Los modelos multivariados tienen dos problemas identificados.** El estimador multinomial aplica regularización L2 con C = 10, que sesga los coeficientes hacia cero. Las razones de probabilidad de grupo socioeconómico resultan no monótonas e inestables, probablemente por colinealidad con educación e ingreso, dado que el GSE se deriva de educación y ocupación del jefe de hogar. Para el efecto socioeconómico se usa la verificación ordinal, que no está ponderada. Ningún modelo de esta versión es causal.

**7. Varias bases son pequeñas.** Q34 y Q37 tienen 269 casos, Q36 tiene 48, y la categoría de alto ejecutivo tiene 27 casos con un intervalo de confianza de 6,25 puntos de ancho en el índice. Estas cifras sirven para caracterización descriptiva con n explícito, no para inferencia desagregada.

**8. La cobertura dimensional del constructo es parcial.** Las seis dimensiones funcionales usadas en la Sección 3.5 son agrupaciones del instrumento y no equivalen a las seis dimensiones de Martínez-Bravo et al. (2022). Las dimensiones crítica, emocional y proyectiva no están medidas por ningún ítem.

**9. Corte transversal.** No es posible atribuir causalidad ni rastrear cambios en el tiempo. Las diferencias por generación mezclan efecto de edad, efecto de cohorte y efecto de período, y con una sola ola no son separables.

**10. Población cubierta.** La encuesta cubre personas en viviendas particulares. La unidad de análisis de las competencias es la persona (`FE_PERSONAS`) y la de mediación parental y barreras de acceso es el hogar (`FE_HOGAR`). No son combinables sin decisión explícita. En el módulo hogar, cerca del 40% de los informantes no es el jefe o jefa de hogar; la Sección 3.14 verifica que ese criterio no altera la conclusión sustantiva.

**11. Inconsistencia detectada en el procesamiento.** La tabla de diagnóstico automático de desalineación del notebook (celda 26.3) calcula porcentajes sin ponderar y sus cifras difieren de la matriz ponderada. Este documento usa solo las cifras ponderadas. La celda debe corregirse.

**12. La armonización del ingreso descansa en un supuesto.** La variable de ingreso familiar (A12_1) aplica diez tarjetas de tramos distintas. La armonización asume que la posición relativa es comparable entre tarjetas. Si las tarjetas se asignaron por tamaño del hogar, el ingreso resultante es ingreso del hogar sin ajustar por número de miembros.

---

## Anexo metodológico

### A.1 Fuente de datos

Encuesta de Actividades de Usuarios de Internet (EAUI) 2026, SUBTEL. Archivo `data/2026.sav`, formato SPSS, 5.000 casos y 587 variables. Procesamiento en Python con `pyreadstat` para lectura de datos y metadatos de etiquetas.

Factores de expansión: `FE_PERSONAS` expande a 13.810.761 personas y se aplica al módulo persona; `FE_HOGAR` expande a 5.651.637 hogares y se aplica a los módulos de hogar. Existen versiones normalizadas (`POND_PERSONAS`, `POND_HOGAR`) que suman el n muestral y se usan para las pruebas de asociación.

Bases efectivas por batería: Q6 y Q8 se aplican sobre 5.000 y 4.758 casos respectivamente; Q32 sobre 4.731; Q21 sobre 4.652; Q34 y Q37 sobre 269 no usuarios; P13 sobre 1.645 hogares sin banda ancha fija; P7 y P8 sobre 1.452 hogares con menores.

Se verificó la consistencia lógica de la batería Q8 contra su opción de exclusión, sin inconsistencias que requirieran depuración.

### A.2 Construcción de los índices

`hab_total` es la suma simple de los 18 ítems dicotómicos de Q8, con recorrido de 0 a 18, definida solo para quienes tienen la batería completa. Se construyen además subíndices por nivel de dificultad (básicas 0 a 6, medias 0 a 8, avanzadas 0 a 3, emergente 0 a 1) y sus proporciones respectivas para permitir comparación entre niveles con distinto número de ítems.

`nivel_habilidades` clasifica en cuatro categorías ordenadas mediante regla jerárquica tipo Guttman: sin habilidades si el índice es cero; avanzado si declara al menos una tarea avanzada; intermedio si declara al menos una media sin declarar avanzadas; básico en el resto.

`idx_seguridad` suma las seis prácticas del núcleo de Q32, excluyendo el agregado del cuestionario para evitar doble conteo.

Validación: KR-20 de 0,932; correlación phi media entre ítems de 0,422; un solo autovalor mayor que 1 en componentes principales, con 49,5% de varianza en el primero; coeficiente de reproducibilidad de Guttman de 0,854 sobre un piso marginal de 0,649. Análisis factorial complementario sobre matriz de correlaciones tetracóricas estimadas por máxima verosimilitud bajo normalidad bivariada latente, con factorización de eje principal y dos factores retenidos por criterio de Kaiser.

### A.3 Dimensiones funcionales

| Dimensión | Ítems | Máximo |
|---|---|---|
| Operacional | Q8_1 a Q8_6, Q8_8 | 7 |
| Comunicación | Q8_12, Q8_15, Q8_16 | 3 |
| Creación | Q8_9, Q8_13, Q8_14 | 3 |
| Consumo | Q8_10, Q8_11 | 2 |
| Transacciones y seguridad | Q8_7, Q8_17 | 2 |
| Emergente (IA) | Q8_18 | 1 |

Advertencia: estas dimensiones son agrupaciones funcionales del instrumento, no las dimensiones de Martínez-Bravo et al. (2022). Ver limitación 8.

### A.4 Estimación e inferencia

Proporciones y medias ponderadas por factor de expansión. Intervalos de confianza al 95% calculados sobre el tamaño muestral efectivo de Kish, definido como el cuadrado de la suma de los pesos dividido por la suma de los pesos al cuadrado. Para la batería Q8 el n efectivo es 1.769 sobre 4.758 casos, con efecto de diseño implícito de 2,69.

Asociación mediante chi-cuadrado sobre pesos reescalados al n muestral, V de Cramér como tamaño de efecto y corrección de Benjamini-Hochberg sobre 32 comparaciones.

### A.5 Especificación de los modelos

Modelo principal: regresión logística multinomial ponderada, con `nivel_habilidades` como respuesta y "sin habilidades" como referencia. Predictores: edad estandarizada, educación agrupada, grupo socioeconómico y quintil de ingreso. Base de 4.005 casos completos. Estimación con regularización L2 (C = 10) y pesos normalizados a media uno. Intervalos por bootstrap ponderado de 200 réplicas.

Modelo con ocupación: idéntico al anterior más la ocupación del jefe de hogar, con trabajos informales como categoría de referencia efectiva.

Verificación de robustez: regresión logística ordinal no ponderada sobre la misma base, bajo supuesto de odds proporcionales.

Clases latentes: modelo binario sobre los 18 ítems, estimado por EM con ocho reinicios aleatorios, independencia local, selección por BIC entre 2 y 6 clases.

### A.6 Verificaciones de robustez ejecutadas

Control de informante en el módulo hogar (sección 7.3 del notebook), reproducción del resultado parental restringiendo a jefes de hogar (diferencia máxima de 0,29 medidas), contraste de la clasificación jerárquica contra clases latentes, contraste de dimensionalidad phi contra tetracórica, y contraste del multinomial ponderado contra el ordinal no ponderado.

Verificaciones pendientes: resultados bajo umbrales alternativos de competencia, exclusión de categorías con n menor a 30 (afecta a alto ejecutivo, n = 27), y comparación sistemática de resultados con y sin ponderación.

### A.7 Salidas del análisis

Todas las tablas y figuras de la Sección 3 se generan en `eaui2026_habilidades.ipynb` y se exportan a `outputs/habilidades/`. El dataset analítico derivado, con 5.000 filas y 93 columnas, está en `outputs/habilidades/eaui2026_habilidades_analitico.csv`. El diccionario de variables derivadas está en `outputs/habilidades/17_diccionario_variables_derivadas.csv`.

---

## Referencias

Arangurí et al. (2026). *Impact of digital literacy on adoption of precision agriculture*.

Bukht & Heeks (2017). *Defining, conceptualising and measuring the digital economy*.

Choudhary & Bansal (2022). *Addressing digital divide through digital literacy training programs*.

Crawford-Visbal et al. (2020). *Assessment of digital competences in communication students*.

Del Arco et al. (2025). *Assessing digital competencies: A self-evaluation approach*.

Galperin (2017). *Why are half of Latin Americans not online?*

Galperin & Arcidiacono (2021). *Employment and the gender digital divide in Latin America*.

Martínez-Bravo, Sádaba & Serrano-Puche (2022). *Dimensions of digital literacy in 21st century competency frameworks*.

Martínez-Domínguez & Mora-Rivera (2020). *Internet adoption and usage patterns in rural Mexico*.

Nishijima et al. (2017). *Digital divide and internet adoption*.

OCDE (2020). *Skills for the digital era*.

Pangrazio, Godhe & González López Ledesma (2020). *Three genealogies of digital literacy*.

Ricardo-Barreto et al. (2018). *Factores determinantes de la adopción de tecnologías*.

Suárez, Yang & Chacón (2024). *Habilidades digitales: Serie Habilidades para la Vida*.

Van Laar et al. (2020). *The relation between 21st-century skills and digital tools*.

Vuorikari, Pokropek & Castaño Muñoz (2025). *Introducing mini-21 and nano-6 versions of DigComp*.

---

## Notas de proceso para redacción

### Estado de la versión 2

Esta versión incorpora los resultados empíricos de `eaui2026_habilidades.ipynb`. Las secciones 1, 2.1 a 2.3 y 5 provienen de la versión anterior y no fueron modificadas. La sección 2.4 se reescribió con la verificación efectiva de los datos. La sección 3 es nueva en su totalidad. Las secciones 6, limitaciones y anexo se reescribieron sobre resultados. La sección 4 sigue pendiente.

### Decisiones tomadas

1. **Pregunta rectora**: se mantiene, con alcance acotado a gradiente ocupacional mientras no se incorporen ENUPE y ELE.
2. **Audiencia**: híbrida, tomadores de decisión y académicos.
3. **Extensión**: 28 a 35 páginas.
4. **Umbral de competencia**: se reportan los cuatro niveles completos en lugar de fijar un umbral binario, dado que la regla jerárquica resultó frágil (reproducibilidad de Guttman 0,854).
5. **Desagregación dimensional**: se reportan las seis dimensiones funcionales del instrumento, con advertencia explícita de que no equivalen a las de Martínez-Bravo et al.
6. **Ponderación**: todas las cifras del documento son ponderadas, con excepción declarada del modelo ordinal de verificación.

### Decisiones pendientes

1. **Componente cualitativo**: entrevistas a referentes sectoriales. Su valor aumentó tras el resultado de la Sección 3.13, porque la ausencia de formación en el trabajo requiere explicación que la encuesta no entrega.
2. **Cobertura temporal**: análisis de corte transversal en esta versión. La comparación 2020-2026 requiere armonizar olas anteriores de EAUI.
3. **Incorporación de ENUPE 2022 y ELE 7**: es la vía para responder la pregunta sectorial. Requiere decidir si el análisis se hace a nivel de empresa (ELE, ENUPE) y se contrasta con el de personas (EAUI), o si se intenta una imputación de rama.

### Correcciones pendientes en el notebook

1. La celda 26.3 (diagnóstico de desalineación) calcula porcentajes sin ponderar. Debe usar el factor de expansión.
2. La celda 27.1 imprime como categoría de referencia de ocupación la moda de la variable, que no es la referencia efectiva del diseño de matriz. El texto del print debe corregirse.
3. Evaluar reemplazar el estimador multinomial regularizado por uno sin penalización, para evitar el sesgo hacia cero en las razones de probabilidad.

### Próximos pasos

1. Redactar Sección 4 con comparación regional armonizada.
2. Incorporar ENUPE 2022 y ELE 7 para la dimensión sectorial.
3. Buscar o construir la matriz de coeficientes de intensidad digital por CIIU4 del proyecto País Digital.
4. Revisión externa.
