# Skill Anatomy Reference

```
my-skill/
├── SKILL.md           # Required: frontmatter + instructions
├── scripts/           # Optional: executable scripts
│   ├── validate.ts
│   └── run.ts
├── references/        # Optional: reference documents
│   └── patterns.md
└── assets/            # Optional: templates, configs
    └── template.md
```

## SKILL.md Frontmatter

```yaml
---
name: skill-name          # Required: kebab-case identifier
description: One line.    # Required: determines agent activation
---
```

## The Description Is Everything

The `description` field is how the agent decides whether to activate this skill. A vague description means the skill activates when it shouldn't (or doesn't when it should).

**Bad**: "Helps with deployment"
**Good**: "Deploy the current branch to staging. Use when asked to deploy, ship, or push to test."
