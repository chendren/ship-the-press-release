# Build Plan Template

> Generated from PR/FAQ analysis. This is the bridge between "what we're building" and "how we're building it."

## Project Overview

- **Product**: [NAME]
- **PR/FAQ**: [Link to press release artifact]
- **Target completion**: [DATE or SPRINT]
- **Build mode**: [Vibe / Spec / Hybrid — and why]

## Architecture

### System Components

| Component | Responsibility | Technology |
|-----------|---------------|------------|
| [Component 1] | [What it does] | [Stack choice] |
| [Component 2] | [What it does] | [Stack choice] |
| [Component 3] | [What it does] | [Stack choice] |

### Data Flow

```
[USER INPUT] → [COMPONENT 1] → [COMPONENT 2] → [OUTPUT]
```

### Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| [Decision 1] | [What we chose] | [Why — one sentence] |
| [Decision 2] | [What we chose] | [Why] |

## Build Sequence

> Order matters. Each phase produces artifacts the next phase depends on.

### Phase 1: [FOUNDATION]
- [ ] [Task 1.1 — specific, testable]
- [ ] [Task 1.2]
- **Validation**: [How you know Phase 1 is done]

### Phase 2: [CORE FUNCTIONALITY]
- [ ] [Task 2.1]
- [ ] [Task 2.2]
- **Validation**: [How you know Phase 2 is done]

### Phase 3: [INTEGRATION]
- [ ] [Task 3.1]
- [ ] [Task 3.2]
- **Validation**: [How you know Phase 3 is done]

## Test Matrix

| Test | Input | Expected Output | Priority |
|------|-------|----------------|----------|
| [Test 1] | [Input] | [Output] | P0 |
| [Test 2] | [Input] | [Output] | P1 |

## Open Questions

- [ ] [Question that needs answering before build starts]
- [ ] [Question that can be answered during build]

## Steering Doc Requirements

- [ ] Project-level CLAUDE.md created
- [ ] Test conventions documented
- [ ] Architecture decisions recorded
- [ ] Build sequence dependencies mapped
