// H — Harmonize: Validate output against test matrix, iterate until green
// Copyright 2026 Chad Hendren. All Rights Reserved.

import type { BuildPlan, ProduceResult, HarmonizeResult } from "../types.ts";

/** Validate that every requirement has a corresponding test */
export function validateCoverage(plan: BuildPlan, output: ProduceResult): string[] {
  const testedRequirements = new Set(plan.testMatrix.map(t => t.requirementId));
  const allRequirements = new Set(plan.components.map(c => c.name));
  const uncovered: string[] = [];

  for (const req of allRequirements) {
    if (!testedRequirements.has(req)) {
      uncovered.push(req);
    }
  }

  return uncovered;
}

/** Validate that all generated files have content */
export function validateFiles(output: ProduceResult): Array<{ path: string; issue: string }> {
  const issues: Array<{ path: string; issue: string }> = [];

  for (const file of [...output.files, ...output.testFiles]) {
    if (!file.content || file.content.trim().length === 0) {
      issues.push({ path: file.path, issue: "Empty file" });
    }
    if (file.content.includes("TODO: implement") || file.content.includes("Not implemented")) {
      issues.push({ path: file.path, issue: "Contains unimplemented stubs" });
    }
  }

  return issues;
}

/** Run the Harmonize phase */
export function harmonize(plan: BuildPlan, output: ProduceResult, iteration: number): HarmonizeResult {
  const coverageGaps = validateCoverage(plan, output);
  const fileIssues = validateFiles(output);
  const totalTests = plan.testMatrix.length;

  // In a real implementation, this would run the actual test suite.
  // For the reference implementation, we validate structure and coverage.
  const failures = [
    ...coverageGaps.map(gap => ({ testId: gap, reason: `No test covers requirement: ${gap}` })),
    ...fileIssues.map(issue => ({ testId: issue.path, reason: issue.issue })),
  ];

  return {
    passed: failures.length === 0,
    totalTests,
    passedTests: totalTests - failures.length,
    failedTests: failures.length,
    failures,
    iteration,
  };
}
