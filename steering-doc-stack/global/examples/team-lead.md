# Example: Team Lead

## Identity & Context
- Engineering manager, team of 8, B2B SaaS
- Mac, Linux CI/CD, AWS infrastructure
- Projects: platform-api, admin-dashboard, data-pipeline

## Code Style Preferences
- TypeScript with strict mode
- Follow existing patterns — don't introduce new ones without discussion
- JSDoc on public APIs, no comments on internal code
- Error handling at system boundaries only

## Workflow Preferences
- Always create PR, never push to main
- Plan mode for anything touching >2 files
- Include test plan in every PR description
- Default effort: high for architecture, medium for features

## Tools Available
- GitHub CLI for PRs and issues
- AWS CLI for infrastructure
- DataDog for monitoring
- Playwright for E2E

## Communication Style
- Lead with the decision, then the reasoning
- Flag risks explicitly
- Use markdown tables for options comparison

## What NOT to Do
- Never merge without tests
- Never push directly to main
- Never refactor code you're not actively changing
- Never add dependencies without checking bundle size
