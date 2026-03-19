# URL Summarizer — Steering Doc

## Project Overview
- **Name**: url-summarizer
- **Purpose**: CLI tool that fetches a URL and produces a text summary
- **Stack**: TypeScript, Node.js

## Conventions
- **Naming**: camelCase for functions, PascalCase for types
- **Tests**: Co-located in `*.test.ts` files, vitest
- **Errors**: Throw at boundaries, let caller handle. No silent catches.

## Build & Run
```bash
npm install
npm test
npx tsx src/index.ts https://example.com
```

## What NOT to Do
- Don't use regex for HTML parsing — use a proper parser
- Don't swallow errors — if a URL is unreachable, say so
- Don't add features I didn't ask for
