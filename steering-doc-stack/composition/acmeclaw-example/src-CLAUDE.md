# AcmeClaw Source — Directory Rules

## Purpose
Rebranded OpenClaw 2026.2.13 source code. UI, gateway, extensions, skills.

## Rules
- All user-facing text says "AcmeClaw", never "OpenClaw"
- Brand color is #dc3c32 (AcmeClaw red), not #ff5c5c (OpenClaw orange)
- Favicon is the robot mascot, not the lobster
- Build UI with `cd ui && npx vite build`
- After build, copy dist/control-ui/* to live installation

## Do NOT
- Don't modify node_modules
- Don't commit .env files
- Don't change the OpenClaw MIT license — it's upstream
