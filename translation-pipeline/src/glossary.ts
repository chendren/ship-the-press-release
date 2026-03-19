// Glossary loader and term application
// Copyright 2026 Chad Hendren. All Rights Reserved.

import type { Glossary, GlossaryEntry, SupportedLanguage } from "./types.ts";

/** Load a glossary from JSON data */
export function loadGlossary(data: { language: string; entries: GlossaryEntry[] }): Glossary {
  return { language: data.language, entries: data.entries };
}

/** Apply glossary terms to a text segment */
export function applyGlossary(text: string, glossary: Glossary): { text: string; termsApplied: number } {
  let result = text;
  let termsApplied = 0;

  for (const entry of glossary.entries) {
    if (entry.doNotTranslate) continue;

    const translation = entry.translations[glossary.language];
    if (!translation) continue;

    // Case-insensitive replacement of English terms with translated equivalents
    const pattern = new RegExp(`\\b${escapeForMatch(entry.en)}\\b`, "gi");
    const before = result;
    result = result.split(entry.en).join(translation);
    if (result !== before) termsApplied++;
  }

  return { text: result, termsApplied };
}

function escapeForMatch(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Get all "do not translate" terms */
export function getProtectedTerms(glossary: Glossary): string[] {
  return glossary.entries.filter(e => e.doNotTranslate).map(e => e.en);
}
