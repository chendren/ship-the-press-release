---
name: artifact-analyzer
description: Analyze end-state artifacts (PR/FAQs, wireframes, sample outputs) to extract requirements, surface assumptions, and identify gaps. Use before creating a build plan.
---

# Artifact Analyzer

Systematic analysis of end-state artifacts to extract everything needed for planning.

## When to Use

- Analyzing a PR/FAQ before building (Chapter 7)
- Reviewing wireframes, sample outputs, or dialog transcripts
- Surfacing implicit requirements and contradictions
- Preparing input for the build planner

## Analysis Framework

For each artifact, extract:

1. **Explicit requirements** — what the artifact directly states
2. **Implicit requirements** — what it assumes but doesn't say
3. **Open questions** — what it doesn't address
4. **Contradictions** — where it says two incompatible things
5. **Technical implications** — what each requirement means for the build

## Template

See [templates/artifact-analysis/](../../templates/artifact-analysis/) for the structured analysis template.

## Tips

- Implicit requirements are where builds go wrong — spend the most time here
- Every open question needs a proposed default answer
- Contradictions must be resolved before building, not during
