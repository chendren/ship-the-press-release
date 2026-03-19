// Example: No files longer than 200 lines

export default function maxFileLengthHook(input: {
  content: string;
  filePath: string;
}): { decision: "allow" | "block"; message?: string } {
  if (input.filePath.includes(".test.")) {
    return { decision: "allow" }; // Tests can be long
  }

  const lineCount = input.content.split("\n").length;
  if (lineCount > 200) {
    return {
      decision: "block",
      message: `File is ${lineCount} lines (max 200). Split into smaller modules.`,
    };
  }

  return { decision: "allow" };
}
