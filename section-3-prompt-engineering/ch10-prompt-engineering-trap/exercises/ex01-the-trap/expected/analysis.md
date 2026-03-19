# Diagnosis

| # | Symptom | Real Problem | Fix |
|---|---------|-------------|-----|
| 1 | Inconsistent architecture | **Missing specification** — too many valid approaches | Write a spec: choose bcrypt, auth middleware pattern, specific schema |
| 2 | Generic insights | **Missing domain context** — model doesn't know your domain | Provide a steering doc with domain terminology and what "insight" means for your data |
| 3 | Diminishing returns after iteration 3 | **Wrong tool** — RFC email validation is a solved problem | Use a library (zod, validator.js), not a prompt |
| 4 | Behavioral regressions | **Missing tests as specification** — "keep the same behavior" is not testable | Write tests first, then refactor to pass them |
| 5 | 80% reliability | **Over-engineered prompt** — 47 lines of system prompt is a policy, not a prompt | Move to tools + policies: escalation rules as tool calls, prohibited phrases as a blocklist |

## The Pattern

Prompts solve FORMAT problems. Everything else needs a different tool:
- **Architecture**: Specification
- **Domain knowledge**: Context (steering doc, skill)
- **Solved problems**: Libraries
- **Behavior preservation**: Tests
- **Reliability**: Tools + policies
