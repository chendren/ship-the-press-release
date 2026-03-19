---
name: prompt-evaluator
description: Evaluate prompt quality, identify over-engineering, and suggest improvements. Use when prompts produce inconsistent results or feel too complex.
---

# Prompt Evaluator

Diagnose prompt engineering problems and recommend the right tool for the job.

## When to Use

- Prompts produce "almost right, but not quite" results (Chapter 10)
- A prompt has grown beyond 3 paragraphs (Chapter 10)
- You're iterating on the same prompt for the 6th time (Prologue)
- You need to decide between prompting, tools, or policies (Chapter 12)

## Evaluation Criteria

| Signal | Diagnosis | Solution |
|--------|-----------|----------|
| 8+ paragraphs of system prompt | Over-engineered | Move to steering doc |
| 17+ examples in prompt | Wrong tool | Use a skill or agent |
| Works 80% of the time | Missing context | Add to CLAUDE.md |
| Different results each run | Underspecified | Write a specification |
| Correct format, wrong content | Knowledge gap | Provide reference material |

## Decision Matrix

```
Is the problem about FORMAT? → Prompt engineering is appropriate
Is the problem about KNOWLEDGE? → Add context (steering doc, skill, reference)
Is the problem about WORKFLOW? → Build a skill or agent
Is the problem about RELIABILITY? → Use tools, policies, or validation
Is the problem about JUDGMENT? → You need a human, not a better prompt
```

## Tips

- "Stop arguing with yourself" — if you're on iteration 6, the problem isn't the prompt
- Context engineering > prompt engineering for production systems
- The right answer is often "don't prompt — build infrastructure"
