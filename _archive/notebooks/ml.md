## 4.6 Explicación simplificada: ¿Qué nos dice el análisis de machine learning?

### ¿Qué es lo que hicimos?

Usamos **inteligencia artificial** para encontrar patrones ocultos en los datos sobre habilidades digitales. Específicamente, entrenamos un "sistema inteligente" (llamado Random Forest) que aprende a predecir qué tan hábil es una persona con computadores e internet, basándose en características como:

- **Edad** — personas más jóvenes tienden a tener más habilidades
- **Nivel socioeconómico (GSE)** — personas con más recursos tienen más acceso a tecnología
- **Educación** — personas con más años de estudio tienen más facilidad con computadores
- **Zona** — si vive en ciudad o campo
- **Dispositivos que posee** — cantidad de computadores, tablets, smartphones
- **Actividades online que realiza** — cuántas cosas diferentes hace en internet

### ¿Cómo funciona este "sistema inteligente"?

Imaginemos que quisiera enseñar a alguien a adivinar el nivel de habilidades de una persona solo mirando estos datos. Le muestro 3,500 ejemplos de personas reales (edad, educación, cuántos dispositivos tiene, etc.) y le digo cuál era su nivel de habilidades real (Avanzado, Intermedio, Básico o Sin habilidades).

Después de ver muchos ejemplos, el sistema detecta patrones automáticamente:
- "Si alguien tiene menos de 30 años Y tiene educación superior Y posee 3+ dispositivos → probablemente tenga habilidades Avanzadas"
- "Si alguien tiene más de 60 años Y solo posee un celular → probablemente tenga habilidades Básicas"

### ¿Qué tan bueno es este sistema?

**Acertó un 62% de las veces** (usando 1,500 personas que el sistema nunca había visto).

Esto significa que, si usted eligiera una persona al azar y el sistema adivinara su nivel, estaría correcto 6 de cada 10 veces. No es perfecto, pero es mejor que lanzar una moneda (que sería 25%).

**¿Por qué no acierta más?** Porque las habilidades digitales dependen de muchas cosas que nosotros no medimos (curiosidad, acceso a cursos, amigos que enseñen, etc.). El sistema solo ve edad, educación y algunos datos más, pero no puede "ver" la personalidad o la motivación de una persona.

### ¿Cuáles son los factores más importantes?

Usamos una técnica llamada **SHAP** (Shapley) que nos permite saber exactamente cuánto contribuye cada factor a las predicciones. Es como preguntar: "¿Cuál de estas 8 características es la que más importa para predecir habilidades?"

Los resultados muestran:

1. **Edad es el factor más fuerte** — La edad hace la mayor diferencia. Personas más jóvenes tienden a predecirse con habilidades más altas; personas mayores, más bajas. Cada año de edad "tira hacia abajo" la predicción en promedio.

2. **Cantidad de dispositivos** — Si una persona tiene muchos dispositivos (computador, tablet, celular), el sistema la predice con habilidades más altas. Es como una "señal" de que esa persona usa tecnología.

3. **GSE (nivel socioeconómico)** — Personas con más recursos tienen acceso a computadores desde niños y mejor educación, así que el sistema las predice con habilidades más altas.

4. **Educación** — Personas con más años de estudio formal predicen con habilidades más altas. La educación construye capacidad de aprendizaje.

5. **Actividades online** — Si alguien usa muchos servicios diferentes en internet (redes sociales, compras, banca, video), el sistema predice más habilidades (porque probablemente necesita tenerlas para hacer eso).

### ¿Qué significa esto en la práctica?

La inteligencia artificial confirma lo que la sociología ya sabía:
- **La edad es un destino** — a mayor edad, menos habilidades digitales (en promedio)
- **El dinero abre puertas** — gente con más recursos tiene más habilidades
- **La educación prepara** — la escuela te enseña a aprender, incluyendo tecnología

Pero también vemos que no todo es destino: aunque la edad importa mucho, hay abuelos que son más hábiles que jóvenes. Aunque el dinero importa, hay personas sin recursos que aprenden mucho. **Las diferencias son tendencias, no reglas.**

### Una limitación importante

Este "sistema inteligente" no explica **por qué** existe la brecha. Solo nos dice que existe. No sabe si alguien tiene pocas habilidades porque:
- Nació en 1960 en una zona rural sin internet
- Tuvo un accidente que le impide usar un teclado
- Simplemente no le interesa la tecnología
- No tuvo oportunidad de aprender

Para entender el "por qué", necesitamos hablar con personas, no solo mirar números.