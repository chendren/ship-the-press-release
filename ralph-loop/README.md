# RALPH Loop

Reference implementation of the test-driven autonomous build pattern from *Ship the Press Release* (Chapter 9, Appendix E).

**R**ead · **A**nalyze · **L**ayout · **P**roduce · **H**armonize

## How It Works

```
PR/FAQ + Artifacts
       ↓
   [R] READ — Load and parse all input artifacts
       ↓
   [A] ANALYZE — Extract requirements, surface assumptions, identify gaps
       ↓
   [L] LAYOUT — Generate build plan with ordered phases and test matrix
       ↓
   [P] PRODUCE — Generate code that satisfies the test matrix
       ↓
   [H] HARMONIZE — Run tests, validate output, iterate until green
       ↓
  Shipping Code
```

## Quick Start

```bash
npm install
npm test
```

## Architecture

| File | Phase | Purpose |
|------|-------|---------|
| `src/phases/read.ts` | R | Parse markdown artifacts into structured data |
| `src/phases/analyze.ts` | A | Extract requirements and surface implicit assumptions |
| `src/phases/layout.ts` | L | Generate build plan and test matrix |
| `src/phases/produce.ts` | P | Generate implementation from plan |
| `src/phases/harmonize.ts` | H | Validate output against test matrix |
| `src/loop.ts` | All | Orchestrate phases, handle iteration |
| `src/types.ts` | — | Shared type definitions |

## Book Reference

- **Chapter 9**: The Autonomous Build Loop
- **Appendix E**: Ralph Loop Implementation

Copyright 2026 Chad Hendren. All Rights Reserved.
