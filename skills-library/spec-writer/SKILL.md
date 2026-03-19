---
name: spec-writer
description: Generate precise specifications from requirements, PR/FAQs, or verbal descriptions. Use when transitioning from "what to build" to "how to build it."
---

# Specification Writer

Transform vague requirements into testable specifications.

## When to Use

- Converting a PR/FAQ into a technical specification (Chapter 2)
- Translating verbal requirements into structured documents
- Creating API contracts, data models, or interface definitions
- Moving from vibe coding to spec coding mode (Chapter 4)

## Specification Structure

```markdown
# [Feature Name] Specification

## Overview
[One paragraph: what this feature does and why it matters]

## Requirements

### Functional
1. [MUST] [Requirement — specific, testable]
2. [MUST] [Requirement]
3. [SHOULD] [Requirement]

### Non-Functional
1. [Performance requirement — with number]
2. [Security requirement]

## Data Model
[Types, interfaces, schemas]

## API Contract
[Endpoints, request/response shapes]

## Edge Cases
1. [Edge case — expected behavior]
2. [Edge case — expected behavior]

## Out of Scope
- [Explicitly not included in this spec]

## Open Questions
- [Decision needed before implementation]
```

## Tips

- Every requirement should be testable — if you can't write a test for it, it's not specific enough
- Include "Out of Scope" explicitly — it prevents scope creep during build
- Use MUST/SHOULD/MAY (RFC 2119) to prioritize requirements
