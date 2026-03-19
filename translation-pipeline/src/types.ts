// Translation Pipeline — Shared Types
// Copyright 2026 Chad Hendren. All Rights Reserved.

export interface GlossaryEntry {
  en: string;
  translations: Record<string, string>;
  context?: string;
  doNotTranslate?: boolean;
}

export interface Glossary {
  language: string;
  entries: GlossaryEntry[];
}

export interface Segment {
  id: number;
  type: "heading" | "paragraph" | "code" | "list" | "frontmatter" | "other";
  source: string;
  translated?: string;
  skip: boolean;
}

export interface TranslationMemoryEntry {
  source: string;
  target: string;
  language: string;
  timestamp: string;
  confidence: number;
}

export interface QualityIssue {
  segmentId: number;
  severity: "error" | "warning" | "info";
  message: string;
  source: string;
  translated: string;
}

export interface TranslationResult {
  language: string;
  segments: Segment[];
  qualityIssues: QualityIssue[];
  stats: {
    totalSegments: number;
    translatedSegments: number;
    skippedSegments: number;
    fromMemory: number;
    glossaryTermsApplied: number;
  };
}

export type SupportedLanguage = "zh-CN" | "ja-JP" | "ko-KR" | "es" | "pt-BR";
