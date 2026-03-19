// Hook: Warn on console.log in production code
// Why: Use structured logging in production. console.log is for debugging only.

export default function noConsoleHook(input: { content: string; filePath: string }): { decision: "allow" | "block"; message?: string } {
  if (input.filePath.includes(".test.") || input.filePath.includes("/tests/")) {
    return { decision: "allow" };
  }

  if (input.content.includes("console.log(")) {
    return {
      decision: "block",
      message: "console.log detected in production code. Use the project logger instead. console.log is allowed in test files only.",
    };
  }

  return { decision: "allow" };
}
