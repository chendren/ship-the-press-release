---
name: deploy-to-staging
description: Deploy the current branch to the staging environment. Use when asked to deploy, ship to staging, or push to test.
---

# Deploy to Staging

Deploy the current git branch to the staging environment for testing.

## When to Use

- When asked to deploy or ship to staging
- After a feature is complete and needs testing
- Before creating a pull request

## Workflow

1. Run `npm test` — abort if tests fail
2. Run `npm run build` — abort if build fails
3. Run `./scripts/deploy-staging.sh` — deploys to staging.example.com
4. Verify: `curl -s https://staging.example.com/health` returns `{"status":"ok"}`
5. Report the staging URL and health check result

## Tips

- Always run tests before deploying — never skip this step
- The staging environment resets every night at midnight UTC
- If deploy fails with "port in use", run `./scripts/kill-staging.sh` first
