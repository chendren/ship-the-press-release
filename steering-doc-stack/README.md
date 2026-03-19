# Steering Doc Stack

The steering doc system is the highest immediate-return practice in this book. It produces visible improvements on the first project where it's applied.

A steering doc stack has three layers:

| Layer | Scope | File | Purpose |
|-------|-------|------|---------|
| **Global** | All projects | `~/.claude/CLAUDE.md` | Your identity, preferences, tools, style |
| **Project** | One repo | `./CLAUDE.md` | Architecture, conventions, terminology |
| **Directory** | One folder | `./src/CLAUDE.md` | Local rules for a specific area |

Plus **hooks** — automated enforcement of rules that should never require judgment.

## What's Here

| Directory | Contents |
|-----------|----------|
| [global/](global/) | Global CLAUDE.md template + examples by role |
| [project/](project/) | Project CLAUDE.md template + examples by project type |
| [directory/](directory/) | Directory CLAUDE.md template + examples by directory purpose |
| [hooks/](hooks/) | Hook templates and examples |
| [composition/](composition/) | Full working example: the AcmeClaw steering stack |

## The Key Insight

> "The meaningful unit of investment is not the cleverly worded per-request instruction. It is the structured project context: the CLAUDE.md file that tells the model what this project is, the persistent specification that tells it what you are building, the shared skill library that encodes how your team works. Write that context once. Write it well. Then your prompts can be short, because the context is doing the work that prompts were never the right tool for."

See **Chapter 3** and **Appendix G** in the book.
