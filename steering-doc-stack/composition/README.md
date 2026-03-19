# Composition: The AcmeClaw Steering Stack

This directory shows how all three layers of the steering doc stack work together, using the AcmeClaw project as the worked example.

```
~/.claude/CLAUDE.md                  → Global (identity, preferences)
~/AcmeClaw/CLAUDE.md                 → Project (architecture, conventions)
~/AcmeClaw/src/CLAUDE.md             → Directory (source-specific rules)
~/AcmeClaw/test/CLAUDE.md            → Directory (test-specific rules)
~/AcmeClaw/.claude/hooks.json        → Hooks (automated enforcement)
```

The model reads all applicable layers top-to-bottom. Specific layers override general ones.
