// Exercise 3.2: Your First Hook
//
// Implement a hook that enforces a rule from your CLAUDE.md.
// This hook fires on the PreToolUse event for Edit/Write tools.

export default function myHook(input: {
  content: string;
  filePath: string;
}): { decision: "allow" | "block"; message?: string } {
  // TODO: Implement your rule check here
  //
  // Examples:
  // - Check if content contains a banned pattern
  // - Check if file is too long
  // - Check if a new function lacks a test

  return { decision: "allow" };
}
