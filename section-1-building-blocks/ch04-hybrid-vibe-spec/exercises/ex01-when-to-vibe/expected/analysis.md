# Mode Classification — Reference Answers

| # | Scenario | Mode | Rationale |
|---|----------|------|-----------|
| 1 | Exploring Stripe API | **Vibe** | Exploration — you're learning, not building to spec |
| 2 | Login page with JWT | **Spec** | Security-critical, well-defined requirements, one right answer |
| 3 | Prototype dashboard | **Vibe** | Speed matters, fidelity doesn't. Throwaway code. |
| 4 | Timezone bug | **Spec** | Known root cause, specific fix needed, testable |
| 5 | CSV export | **Spec** | 15 fields with formatting rules = specification |
| 6 | Refactoring 500-line function | **Hybrid** | Vibe to explore structure, spec to define module boundaries |
| 7 | Marketing landing page | **Hybrid** | Vibe for design exploration, spec for responsive breakpoints |
| 8 | Rate limiting | **Spec** | Configurable thresholds, per-tier rules = needs a spec |
| 9 | Writing tests | **Spec** | Tests ARE specifications — you need to define expected behavior |
| 10 | Slack bot | **Hybrid** | Vibe to prototype, spec once you define "summarize" precisely |

## The Decision Framework

- **Vibe when**: exploring, prototyping, learning, throwaway code
- **Spec when**: security, data integrity, specific formats, testable behavior
- **Hybrid when**: the shape is unclear but the quality bar is high
