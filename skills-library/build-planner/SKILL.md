---
name: build-planner
description: Create architecture and build plans from analyzed PR/FAQ artifacts. Use when transitioning from analysis to implementation.
---

# Build Planner

Transform analyzed artifacts into actionable build plans with phased implementation and dependency mapping.

## When to Use

- After completing artifact analysis (Chapter 7 → Chapter 8)
- Planning a new feature or project
- Breaking a large task into ordered phases

## Build Plan Structure

See [templates/build-plan/](../../templates/build-plan/) for the complete template.

Key sections:
1. **Architecture** — components, data flow, key decisions
2. **Build sequence** — ordered phases with validation gates
3. **Test matrix** — comprehensive test plan
4. **Open questions** — decisions needed before or during build

## Tips

- Each phase should produce a shippable increment
- Validation gates prevent building on a broken foundation
- Dependencies flow forward — Phase 2 depends on Phase 1's output
- The build plan IS the steering doc for the autonomous build loop
