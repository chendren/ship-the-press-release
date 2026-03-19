# Expected: A working CLI tool that produces structured analysis

Your tool should output something like:

```
=== Analysis: sample-prfaq-saas-dashboard.md ===

Explicit Requirements (3):
  1. Feature One: ...
  2. Feature Two: ...
  3. Feature Three: ...

Implicit Requirements (2+):
  1. User authentication (implied by per-user features)
  2. Data persistence (implied by dashboard)

Open Questions (2+):
  1. What's the pricing model?
  2. What integrations are supported?
```
