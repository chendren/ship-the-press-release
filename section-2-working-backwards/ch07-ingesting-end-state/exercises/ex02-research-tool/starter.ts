// Exercise 7.2: Research Tool
//
// Build a CLI tool that:
// 1. Reads a PR/FAQ markdown file (path as CLI argument)
// 2. Parses it into sections
// 3. Extracts requirements (explicit and implicit)
// 4. Generates open questions
// 5. Outputs a structured analysis
//
// Hint: Look at ralph-loop/src/phases/read.ts and analyze.ts for inspiration.

import { readFileSync } from "node:fs";

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: npx tsx starter.ts <path-to-prfaq.md>");
  process.exit(1);
}

const content = readFileSync(filePath, "utf-8");

// TODO: Implement analysis
console.log("Analyzing:", filePath);
console.log("Content length:", content.length, "characters");
