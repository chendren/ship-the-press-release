# Example: Tests Directory

## Purpose
End-to-end tests using Playwright. Each test file covers one user flow.

## Rules
- One test file per user flow (login.test.ts, checkout.test.ts)
- Use page objects from `./pages/` — never query selectors directly in tests
- Tests must be independent — no shared state between test files
- Use `test.describe` for grouping, `test` for individual assertions

## Patterns
```typescript
import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/login-page";

test.describe("Login flow", () => {
  test("valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("user@test.com", "password");
    await expect(page).toHaveURL("/dashboard");
  });
});
```

## Do NOT
- Don't use `page.locator()` directly — wrap in page objects
- Don't sleep — use `waitFor` or assertions
- Don't test implementation details — test user-visible behavior
