---
name: test-generator
description: Generate test matrices, test files, and test plans from build plans or specifications. Use when implementing test-first development.
---

# Test Generator

Create comprehensive test suites before writing implementation code.

## When to Use

- Starting a test-first build (Chapter 9)
- Creating a test matrix from a build plan
- Generating test files from a specification
- Ensuring edge cases are covered

## Test Matrix Format

```markdown
| ID | Category | Test | Input | Expected | Priority |
|----|----------|------|-------|----------|----------|
| U01 | Unit | [Description] | [Input] | [Output] | P0 |
| I01 | Integration | [Description] | [Setup] | [Behavior] | P0 |
| E01 | Edge | [Description] | [Input] | [Behavior] | P1 |
| F01 | Failure | [Description] | [Trigger] | [Response] | P0 |
```

## Priorities

- **P0**: Must pass before any code merges
- **P1**: Must pass before release
- **P2**: Should pass; investigate failures but don't block

## Test File Template

```typescript
import { describe, it, expect } from "vitest";

describe("[Component]", () => {
  describe("[capability from spec]", () => {
    it("[specific behavior]", () => {
      // Arrange
      const input = /* test input */;
      
      // Act
      const result = /* call function */;
      
      // Assert
      expect(result).toEqual(/* expected */);
    });
  });
});
```

## Tips

- Write tests that describe behavior, not implementation
- Each test should fail for exactly one reason
- Name tests as sentences: "it handles empty input gracefully"
- P0 tests are the contract — everything else is insurance
