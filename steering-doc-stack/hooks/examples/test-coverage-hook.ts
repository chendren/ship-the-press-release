// Hook: Verify tests exist for new exports
// Why: Every public function should have at least one test.
// Fires on: Stop event (after agent finishes a task)

export default function testCoverageHook(input: { changedFiles: string[] }): { decision: "allow" | "block"; message?: string } {
  const sourceFiles = input.changedFiles.filter(
    (f) => f.endsWith(".ts") && !f.includes(".test.") && !f.includes("/tests/") && f.startsWith("src/")
  );

  const testFiles = input.changedFiles.filter(
    (f) => f.includes(".test.") || f.includes("/tests/")
  );

  if (sourceFiles.length > 0 && testFiles.length === 0) {
    return {
      decision: "block",
      message: `${sourceFiles.length} source file(s) changed but no test files were modified. Add or update tests for: ${sourceFiles.join(", ")}`,
    };
  }

  return { decision: "allow" };
}
