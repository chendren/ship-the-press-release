# AcmeClaw — Project Steering Doc

## Project Overview
- **Name**: AcmeClaw
- **Purpose**: Managed OpenClaw hosting platform + services company website
- **Stack**: TypeScript, Node.js, HTML/CSS (static site), AWS (S3, CloudFront, Lambda, DynamoDB)

## Directory Structure
```
AcmeClaw/
├── index.html          # Main website (static, S3-hosted)
├── acmeclaw-theme/     # OpenClaw branding overlay
├── src/                # Rebranded OpenClaw source
└── deploy.sh           # S3 + CloudFront deployment
```

## Conventions
- Website is a single index.html with inline CSS/JS — no build step
- Theme overlay uses apply/revert scripts, not source modification
- All AWS resources use the `kinkeeper` CLI profile
- Videos autoplay muted with speaker toggle button

## Key Terminology
- **Working Backwards**: Write the PR/FAQ before code exists
- **Ralph Loop**: Test-driven autonomous build pattern (Read, Analyze, Layout, Produce, Harmonize)
- **Steering Doc**: CLAUDE.md context file that replaces prompt engineering
