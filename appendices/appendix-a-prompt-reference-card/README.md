# Appendix A: Prompt Engineering Reference Card

Quick-reference card for the prompt engineering guidance from Chapters 10-14.

## When to Prompt

| Problem Type | Right Tool |
|-------------|-----------|
| Output format | Prompt |
| Architecture | Specification |
| Domain knowledge | Steering doc / Skill |
| Solved problem | Library |
| Reliability | Tool + Policy |
| Judgment | Human |

## Prompt Patterns

1. **Constraint**: "Do X. Do NOT do Y."
2. **Example**: "Like this: [example]"
3. **Structure**: "Return JSON: {field: type}"
4. **Role**: Not recommended — use steering docs instead

## Anti-Patterns

- 8+ paragraphs of system prompt → move to steering doc
- 17+ examples → build a skill
- Works 80% of time → wrong tool, not wrong prompt
- Iteration 6+ → stop. Write a spec.
