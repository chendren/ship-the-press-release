// Hook: Block regex usage in code
// Why: Regex is fragile and hard to maintain. Use string methods or LLM parsing.
//
// Install: Add to .claude/hooks.json under PreToolUse for Edit/Write tools

export default function noRegexHook(input: { content: string }): { decision: "allow" | "block"; message?: string } {
  const regexPatterns = [
    "/new RegExp\\(/",
    "/\\.match\\(/",
    "/\\.replace\\(\\//",
    "/\\/[^/]+\\/[gimsuy]*/",
  ];

  for (const pattern of regexPatterns) {
    if (input.content.includes("RegExp") || input.content.includes(".match(")) {
      return {
        decision: "block",
        message: "Regex detected. Use string methods (includes, startsWith, endsWith, split, indexOf) or LLM-based parsing instead. See CLAUDE.md code style preferences.",
      };
    }
  }

  return { decision: "allow" };
}
