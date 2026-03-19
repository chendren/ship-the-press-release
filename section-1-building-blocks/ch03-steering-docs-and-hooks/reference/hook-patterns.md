# Hook Patterns Reference

Common hook patterns for enforcing coding standards.

| Pattern | Event | Purpose |
|---------|-------|---------|
| Content guard | PreToolUse (Edit/Write) | Block banned patterns in code |
| File size guard | PreToolUse (Write) | Enforce max file length |
| Test presence check | Stop | Verify tests exist for new code |
| Naming convention | PreToolUse (Edit) | Enforce naming patterns |
| Import guard | PreToolUse (Edit) | Block banned dependencies |

See [steering-doc-stack/hooks/](/steering-doc-stack/hooks/) for implementations.
