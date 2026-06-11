## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

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

## Context Navigation (Graphify)

### 3-Layer Query Rule
1. **First:** query `graphify-out/graph.json` or `graphify-out/wiki/index.md`
   to understand code structure and connections
2. **Second:** query the Obsidian vault for decisions, progress, and project context
3. **Third:** only read raw code files when editing
   or when the first two layers don't have the answer

### When to rebuild the graph
- After structural changes (new modules, major refactors)
- Headless: `graphify update .` (only processes modified files)
- Skill: `/graphify . --update` (same behavior, runs through the skill — also accepts `--obsidian` to refresh the vault)
- The graph is persistent — NO need to rebuild every session

### Do NOT
- Don't manually modify files inside `graphify-out/`
- Don't re-read the entire codebase if the graph already has the information