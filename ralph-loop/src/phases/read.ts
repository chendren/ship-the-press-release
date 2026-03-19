// R — Read: Load and parse input artifacts into structured data
// Copyright 2026 Chad Hendren. All Rights Reserved.

import type { Artifact } from "../types.ts";

/** Parse a markdown PR/FAQ into sections */
export function parsePrfaq(content: string): { title: string; sections: Map<string, string> } {
  const lines = content.split("\n");
  const title = lines.find(l => l.startsWith("# "))?.slice(2).trim() ?? "Untitled";
  const sections = new Map<string, string>();
  let currentSection = "";
  let currentContent: string[] = [];

  for (const line of lines) {
    if (line.startsWith("## ") || line.startsWith("### ")) {
      if (currentSection) {
        sections.set(currentSection, currentContent.join("\n").trim());
      }
      currentSection = line.replace(/^#+\s*/, "").trim();
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }

  if (currentSection) {
    sections.set(currentSection, currentContent.join("\n").trim());
  }

  return { title, sections };
}

/** Detect artifact type from content heuristics */
export function detectArtifactType(content: string): Artifact["type"] {
  const lower = content.toLowerCase();
  if (lower.includes("press release") || lower.includes("for immediate release") || lower.includes("faq")) return "prfaq";
  if (lower.includes("wireframe") || lower.includes("mockup")) return "wireframe";
  if (lower.includes("sample output") || lower.includes("expected output")) return "sample-output";
  if (lower.includes("dialog") || lower.includes("conversation")) return "dialog";
  if (lower.includes("specification") || lower.includes("requirements")) return "specification";
  return "other";
}

/** Read and structure a collection of artifacts */
export function readArtifacts(rawArtifacts: Array<{ name: string; content: string; source: string }>): Artifact[] {
  return rawArtifacts.map(raw => ({
    name: raw.name,
    type: detectArtifactType(raw.content),
    content: raw.content,
    source: raw.source,
  }));
}

/** Extract headings from markdown for quick structure overview */
export function extractHeadings(content: string): string[] {
  return content
    .split("\n")
    .filter(line => line.startsWith("#"))
    .map(line => line.replace(/^#+\s*/, "").trim());
}
