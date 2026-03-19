| # | Need | Right Tool | Why |
|---|------|-----------|-----|
| 1 | Date format | **Prompt** — format is a prompt's sweet spot | Simple output formatting |
| 2 | Docker check | **Tool/API** — shell command, not language task | Deterministic check, not inference |
| 3 | Commit convention | **Steering doc** — write it once in CLAUDE.md | Convention = context, not per-request |
| 4 | No API keys | **Policy + hook** — must be 100% reliable | Safety can't depend on probabilistic compliance |
| 5 | Domain terminology | **Skill** — encapsulate domain knowledge | Too much context for a prompt, too specific for a steering doc |
