---
name: research
description: Search, retrieve, and analyze documents, artifacts, and codebases. Use when investigating requirements, surveying prior art, or gathering context before building.
---

# Research

Systematic investigation of documents, codebases, and external sources to build understanding before building software.

## When to Use

- Analyzing a PR/FAQ or end-state artifact (Chapter 7)
- Gathering context before writing a build plan (Chapter 8)
- Investigating existing code before modifying it
- Surveying prior art or competitive products

## Workflow

1. **Define the question** — What specifically do you need to know?
2. **Identify sources** — Where might the answer live? (code, docs, web, artifacts)
3. **Search systematically** — Don't stop at the first result
4. **Extract findings** — Structured output: finding, source, confidence level
5. **Identify gaps** — What didn't you find that you expected to?

## Output Format

```markdown
## Research Findings

### Question: [What you investigated]

| Finding | Source | Confidence |
|---------|--------|------------|
| [Finding 1] | [File/URL] | High/Medium/Low |
| [Finding 2] | [File/URL] | High/Medium/Low |

### Gaps
- [What you expected to find but didn't]

### Recommendations
- [What to do next based on findings]
```

## Tips

- Search for what you expect AND what would contradict your assumption
- When analyzing artifacts, look for implicit requirements — what the document assumes but doesn't say
- Always note confidence level — "I found this" vs "I inferred this"
