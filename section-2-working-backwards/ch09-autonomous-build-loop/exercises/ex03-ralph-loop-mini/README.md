# Exercise 9.3: Mini RALPH Loop

## Goal
Run the RALPH Loop reference implementation against a sample PR/FAQ.

## Instructions

1. Install the ralph-loop package: `cd ../../ralph-loop && npm install`
2. Write a small PR/FAQ (or use one from the artifact collection)
3. Feed it through the RALPH Loop programmatically
4. Examine the output: analysis, build plan, test matrix, scaffold

```typescript
import { runLoop } from "@acmeclaw/ralph-loop";

const result = runLoop({
  maxIterations: 3,
  artifacts: [{ name: "my-product", type: "prfaq", content: myPrfaq, source: "exercise" }],
  outputDir: "./output",
  verbose: true,
});

console.log("Requirements found:", result.analysis.requirements.length);
console.log("Tests generated:", result.plan.testMatrix.length);
console.log("Files produced:", result.output.files.length);
```
