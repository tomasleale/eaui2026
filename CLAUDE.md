
## Reglas
- Siempre usar Read o Grep antes de Edit/Write.
- Nunca asumir la estructura de un archivo: verificarla.

## Tono
- Respuestas directas, sin saludos ni cierres.
- Nunca decir "¡Claro!" o "¡Excelente pregunta!".
- Nunca resumir lo que acabás de hacer después de hacerlo.

## Edits
- Usar siempre la herramienta Edit con old_string/new_string para cambios chicos.
- Solo usar Write cuando el archivo es nuevo o requiere rewrite completo justificado.
- Cambios quirúrgicos. No rewrites de novela.

## Contexto
- Si un archivo ya fue leído en esta conversación, no volverlo a leer.
- Confiar en el contexto actual antes de pedir más información.

## Exploración
- Para búsquedas en >3 archivos, usar el subagente Explore.
- Los resultados vuelven resumidos, sin saturar el contexto principal.

## Respuestas
- Una oración si alcanza con una oración.
- Sin markdown innecesario (listas de 1 item, headers para 2 líneas).
- Solo expandir si el usuario pide explícitamente más detalle.

## Contexto saturado
- Usar /compact antes de empezar una conversación nueva.
- Mantener el contexto histórico comprimido en lugar de descartarlo.

## Convenciones
- Usamos pnpm, no npm.
- Imports con alias @/ en vez de rutas relativas.
- Tailwind con prefix "tw-", nunca sin prefix.
- Tests en Vitest, no Jest.
