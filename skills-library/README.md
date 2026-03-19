# Shared Skills Library

Nine skills referenced in *Ship the Press Release*. Each follows the OpenClaw SKILL.md format and can be installed directly into an OpenClaw or AcmeClaw instance.

## Catalog

| Skill | Purpose | Book Reference |
|-------|---------|----------------|
| [research](research/) | Search and analyze artifacts, documents, and codebases | Ch 7, Ch 9 |
| [spec-writer](spec-writer/) | Generate specifications from requirements or PR/FAQs | Ch 2, Ch 8 |
| [test-generator](test-generator/) | Generate test matrices and test files from build plans | Ch 9 |
| [build-planner](build-planner/) | Create build plans from analyzed artifacts | Ch 8 |
| [prfaq-writer](prfaq-writer/) | Write PR/FAQ artifacts using the Working Backwards method | Ch 6 |
| [artifact-analyzer](artifact-analyzer/) | Analyze end-state artifacts for requirements and gaps | Ch 7 |
| [steering-doc-builder](steering-doc-builder/) | Generate CLAUDE.md steering docs for projects | Ch 3 |
| [translation](translation/) | Translate documentation and prompts for non-English devs | Ch 16-18 |
| [prompt-evaluator](prompt-evaluator/) | Evaluate prompt quality and suggest improvements | Ch 11, Ch 13 |

## Installation

Copy any skill directory into your OpenClaw skills folder:

```bash
cp -r skills-library/research ~/.openclaw/skills/research
```

Or for AcmeClaw instances, skills are deployed via the admin dashboard.

## Skill Format

Every skill uses the [SKILL.md frontmatter format](https://docs.openclaw.ai/skills/creating-skills):

```yaml
---
name: skill-name
description: One-line description used by the agent to decide when to invoke this skill.
---

# Skill Title

[Skill content — instructions, workflows, examples]
```

The `description` field is the most important line. It determines whether the agent activates the skill for a given request.
