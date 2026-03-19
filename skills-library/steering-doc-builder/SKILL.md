---
name: steering-doc-builder
description: Generate CLAUDE.md steering documents for projects, directories, and global configuration. Use when setting up a new project or improving AI-assisted development workflow.
---

# Steering Doc Builder

Create effective steering documents that replace prompt engineering with structured context.

## When to Use

- Setting up a new project (Chapter 3)
- Onboarding a new team member to AI-assisted development
- Improving AI output quality for an existing project
- Moving from prompt engineering to context engineering

## Steering Doc Layers

| Layer | File | Scope |
|-------|------|-------|
| Global | `~/.claude/CLAUDE.md` | All projects |
| Project | `./CLAUDE.md` | One repository |
| Directory | `./src/CLAUDE.md` | One folder |

## Templates

See [steering-doc-stack/](../../steering-doc-stack/) for templates and examples at every level.

## Tips

- The steering doc is the most important file in your project for AI-assisted development
- Write it once, write it well — then your prompts can be short
- Update it when you make architecture decisions
- Specific layers override general ones
