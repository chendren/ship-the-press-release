<p align="center">
  <img src="acmeclaw-mascot.png" alt="AcmeClaw — Tool Up. Build On." width="500">
</p>

<h1 align="center">Ship the Press Release</h1>
<h3 align="center">Companion Repository</h3>

<p align="center">
  <em>How the AcmeClaw PR/FAQ Was Written, Every Test Defined, and Zero Code Existed — Then the Agent Built It</em>
</p>

<p align="center">
  <a href="https://acmeclaw.ai"><img src="https://img.shields.io/badge/🦞_AcmeClaw.ai-Visit_Website-dc3c32?style=for-the-badge&labelColor=0a0e17" alt="Visit AcmeClaw.ai"></a>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/chad-david-hendren/"><img src="https://img.shields.io/badge/LinkedIn-Chad_Hendren-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://huggingface.co/chendren"><img src="https://img.shields.io/badge/🤗_Hugging_Face-chendren-FFB340?style=for-the-badge" alt="Hugging Face"></a>
  <a href="https://github.com/chendren/AcmeClaw"><img src="https://img.shields.io/badge/AcmeClaw-Source-181717?style=for-the-badge&logo=github&logoColor=white" alt="AcmeClaw"></a>
  <a href="LICENSE-CODE"><img src="https://img.shields.io/badge/Code-MIT_License-blue?style=for-the-badge" alt="MIT License"></a>
  <a href="LICENSE-CONTENT"><img src="https://img.shields.io/badge/©_2026-Chad_Hendren-dc3c32?style=for-the-badge" alt="Copyright"></a>
</p>

---

## About This Repository

This is the companion repository for **Ship the Press Release** by Chad Hendren. It contains every exercise, template, reference implementation, and shared skill referenced in the book. All code is runnable. All exercises have starter files and expected outputs.

> *"The exercises throughout the book are not optional. This is a practitioner's guide, and practitioners learn by building, not by reading."*

## Quick Start

```bash
git clone https://github.com/chendren/ship-the-press-release.git
cd ship-the-press-release
npm install
npm test
```

## What's Inside

| Directory | What It Contains | Book Reference |
|-----------|-----------------|----------------|
| [`acmeclaw-prfaq/`](acmeclaw-prfaq/) | The AcmeClaw PR/FAQ artifact | After Prologue |
| [`section-1-building-blocks/`](section-1-building-blocks/) | Exercises for Chapters 1–5 | Section 1 |
| [`section-2-working-backwards/`](section-2-working-backwards/) | Exercises for Chapters 6–9 | Section 2 |
| [`section-3-prompt-engineering/`](section-3-prompt-engineering/) | Exercises for Chapters 10–14 | Section 3 |
| [`section-4-non-english/`](section-4-non-english/) | Exercises for Chapters 15–18 | Section 4 |
| [`templates/`](templates/) | PR/FAQ, build plan, project state, analysis templates | Appendices C, H |
| [`steering-doc-stack/`](steering-doc-stack/) | CLAUDE.md templates at every level + examples | Appendix G |
| [`skills-library/`](skills-library/) | 9 shared skills in OpenClaw SKILL.md format | Appendix B |
| [`ralph-loop/`](ralph-loop/) | RALPH Loop reference implementation (TypeScript) | Appendix E |
| [`translation-pipeline/`](translation-pipeline/) | Translation pipeline reference implementation | Appendix D |
| [`artifact-collection/`](artifact-collection/) | 6 PR/FAQ examples + build plans + specifications | Chapters 7, 9 |
| [`appendices/`](appendices/) | All 10 appendices (A–J) | Appendices |

## Book Navigation

### The AcmeClaw PR/FAQ
- [`acmeclaw-prfaq/`](acmeclaw-prfaq/) — The Working Backwards artifact, annotated

### Section 1: Modes, Infrastructure, and the Building Blocks
| Chapter | Title | Exercises |
|---------|-------|-----------|
| 1 | [Vibe Coding: The Art of Intuitive Development](section-1-building-blocks/ch01-vibe-coding/) | 2 exercises |
| 2 | [Specification Coding: Building with Precision](section-1-building-blocks/ch02-specification-coding/) | 2 exercises |
| 3 | [Steering Docs and Hooks](section-1-building-blocks/ch03-steering-docs-and-hooks/) | 2 exercises + reference |
| 4 | [Hybrid Vibe/Spec Coding](section-1-building-blocks/ch04-hybrid-vibe-spec/) | 2 exercises |
| 5 | [Building and Using AI Agents and Skills](section-1-building-blocks/ch05-agents-and-skills/) | 3 exercises + reference |

### Section 2: Working Backwards
| Chapter | Title | Exercises |
|---------|-------|-----------|
| 6 | [Starting at the End](section-2-working-backwards/ch06-starting-at-the-end/) | 2 exercises |
| 7 | [Ingesting and Analyzing End-State Content](section-2-working-backwards/ch07-ingesting-end-state/) | 2 exercises + artifact collection |
| 8 | [Planning with the LLM](section-2-working-backwards/ch08-planning-with-llm/) | 2 exercises |
| 9 | [The Autonomous Build Loop](section-2-working-backwards/ch09-autonomous-build-loop/) | 3 exercises |

### Section 3: Stop Arguing with Yourself When Prompt Engineering
| Chapter | Title | Exercises |
|---------|-------|-----------|
| 10 | [The Prompt Engineering Trap](section-3-prompt-engineering/ch10-prompt-engineering-trap/) | 1 exercise |
| 11 | [Best Practices That Actually Work](section-3-prompt-engineering/ch11-best-practices/) | 2 exercises |
| 12 | [When Prompting Is Not Enough](section-3-prompt-engineering/ch12-when-prompting-not-enough/) | 1 exercise |
| 13 | [Scenarios, Criteria, and Exercises](section-3-prompt-engineering/ch13-scenarios-criteria-exercises/) | 2 exercises |
| 14 | [Advanced Techniques and Edge Cases](section-3-prompt-engineering/ch14-advanced-techniques/) | 2 exercises |

### Section 4: For Non-Native English Speakers
| Chapter | Title | Exercises |
|---------|-------|-----------|
| 15 | [The Language Gap in AI Development](section-4-non-english/ch15-language-gap/) | 1 exercise |
| 16 | [Semantic Maps, Vocabulary Alignment, and the Prompt Library](section-4-non-english/ch16-semantic-maps/) | 2 exercises |
| 17 | [Models Trained in Non-English Languages](section-4-non-english/ch17-non-english-models/) | 1 exercise |
| 18 | [Translation Pipelines and Global Best Practices](section-4-non-english/ch18-translation-pipelines/) | 1 exercise |

### Appendices
| Appendix | Title | Location |
|----------|-------|----------|
| A | [Prompt Engineering Reference Card](appendices/appendix-a-prompt-reference-card/) | Appendix |
| B | [Shared Skills Library Reference](skills-library/) | `/skills-library/` |
| C | [Artifact Analysis and Build Plan Templates](templates/) | `/templates/` |
| D | [Translation Pipeline Implementation](translation-pipeline/) | `/translation-pipeline/` |
| E | [Ralph Loop Implementation](ralph-loop/) | `/ralph-loop/` |
| F | [Bibliography](appendices/appendix-f-bibliography/) | Appendix |
| G | [Steering Doc Stack Reference](steering-doc-stack/) | `/steering-doc-stack/` |
| H | [Project State and Continuity Template](templates/project-state/) | `/templates/project-state/` |
| I | [Glossary of Key Terms](appendices/appendix-i-glossary/) | Appendix |
| J | [Building AcmeClaw — A Working Backwards Walk-Through](appendices/appendix-j-building-acmeclaw/) | Appendix |

## Reference Implementations

### RALPH Loop (`ralph-loop/`)
The test-driven autonomous build pattern for Claude Code and similar agents. Five phases: **R**ead, **A**nalyze, **L**ayout, **P**roduce, **H**armonize.

```bash
cd ralph-loop && npm install && npm test
```

### Translation Pipeline (`translation-pipeline/`)
Infrastructure for non-English developers: glossary management, markdown-aware segmentation, translation memory, and quality validation.

```bash
cd translation-pipeline && npm install && npm test
```

## Exercise Convention

Every exercise follows this structure:
```
exercises/ex01-name/
├── README.md        # Description, goals, instructions
├── starter.*        # Files to begin with
└── expected/        # Reference output to compare against
```

Read the exercise README, work with the starter files, then compare your results against `expected/`.

## Licenses

- **Code** (`.ts`, `.js`, `.json`): [MIT License](LICENSE-CODE)
- **Content** (`.md`, prose, templates): [Copyright 2026 Chad Hendren. All Rights Reserved.](LICENSE-CONTENT)

## About the Author

**Chad Hendren** — Inventor, Author, 30+ years in CX & Telco, 33 patents.

*Ship the Press Release. Then build everything else.*

---

<p align="center">
  <a href="https://acmeclaw.ai">acmeclaw.ai</a> · <a href="https://www.linkedin.com/in/chad-david-hendren/">LinkedIn</a> · <a href="https://huggingface.co/chendren">Hugging Face</a> · <a href="mailto:chad@acmeclaw.ai">chad@acmeclaw.ai</a>
</p>
