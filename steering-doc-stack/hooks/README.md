# Hooks

Hooks are automated enforcement of rules that should never require judgment. If you find yourself repeatedly correcting the same behavior, write a hook.

## Hook Types

| Event | When It Fires | Use Case |
|-------|--------------|----------|
| `PreToolUse` | Before a tool runs | Block dangerous commands, validate file edits |
| `PostToolUse` | After a tool runs | Check output, warn about patterns |
| `Stop` | When the agent finishes | Verify deliverables, run checks |

## Examples

| Hook | Purpose |
|------|---------|
| [no-regex-hook.ts](examples/no-regex-hook.ts) | Block regex usage — use string methods instead |
| [no-console-hook.ts](examples/no-console-hook.ts) | Warn on console.log in production code |
| [test-coverage-hook.ts](examples/test-coverage-hook.ts) | Verify tests exist for new functions |

See **Chapter 3** in the book.
