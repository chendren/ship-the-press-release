// A — Analyze: Extract requirements, surface assumptions, identify gaps
// Copyright 2026 Chad Hendren. All Rights Reserved.

import type { Artifact, AnalysisResult, Requirement, OpenQuestion } from "../types.ts";
import { parsePrfaq } from "./read.ts";

/** Extract explicit requirements from artifact content */
export function extractExplicitRequirements(artifact: Artifact): Requirement[] {
  const requirements: Requirement[] = [];
  const lines = artifact.content.split("\n");
  let reqCount = 0;

  for (const line of lines) {
    const trimmed = line.trim();

    // Numbered capabilities or features
    if (/^\d+\.\s+\*\*/.test(trimmed) || /^###\s+\d+\./.test(trimmed)) {
      reqCount++;
      requirements.push({
        id: `${artifact.name}-REQ-${String(reqCount).padStart(3, "0")}`,
        description: trimmed.replace(/^\d+\.\s+/, "").replace(/\*\*/g, "").trim(),
        kind: "explicit",
        source: artifact.source,
        testable: true,
        priority: "P0",
      });
    }

    // Bullet points with action verbs
    if (/^[-*]\s+/.test(trimmed) && /\b(must|shall|should|provides?|supports?|enables?|eliminates?)\b/i.test(trimmed)) {
      reqCount++;
      requirements.push({
        id: `${artifact.name}-REQ-${String(reqCount).padStart(3, "0")}`,
        description: trimmed.replace(/^[-*]\s+/, "").trim(),
        kind: "explicit",
        source: artifact.source,
        testable: true,
        priority: "P1",
      });
    }
  }

  return requirements;
}

/** Surface implicit requirements — things the artifact assumes but doesn't state */
export function surfaceImplicitRequirements(artifact: Artifact): Requirement[] {
  const implicit: Requirement[] = [];
  const content = artifact.content.toLowerCase();

  const implicitPatterns: Array<{ signal: string; requirement: string }> = [
    { signal: "available today", requirement: "Deployment infrastructure must exist" },
    { signal: "14-day free trial", requirement: "Trial provisioning and expiration system needed" },
    { signal: "sso integration", requirement: "Identity provider integration required" },
    { signal: "audit log", requirement: "Structured event logging system required" },
    { signal: "encrypted at rest", requirement: "Encryption key management system required" },
    { signal: "multiple availability zones", requirement: "Multi-AZ deployment architecture required" },
    { signal: "export your entire tenant", requirement: "Data export pipeline required" },
    { signal: "pricing starts at", requirement: "Billing and subscription management system required" },
  ];

  let count = 0;
  for (const pattern of implicitPatterns) {
    if (content.includes(pattern.signal)) {
      count++;
      implicit.push({
        id: `${artifact.name}-IMP-${String(count).padStart(3, "0")}`,
        description: pattern.requirement,
        kind: "implicit",
        source: `Implied by: "${pattern.signal}"`,
        testable: true,
        priority: "P1",
      });
    }
  }

  return implicit;
}

/** Generate open questions from analysis gaps */
export function generateOpenQuestions(artifact: Artifact): OpenQuestion[] {
  const questions: OpenQuestion[] = [];
  const content = artifact.content.toLowerCase();

  if (content.includes("pricing") && !content.includes("payment")) {
    questions.push({
      question: "What payment processor will be used?",
      source: artifact.name,
      proposedDefault: "Stripe",
      resolved: false,
    });
  }

  if (content.includes("sso") && !content.includes("identity provider")) {
    questions.push({
      question: "Which identity providers must be supported at launch?",
      source: artifact.name,
      proposedDefault: "Google Workspace and Okta",
      resolved: false,
    });
  }

  if (content.includes("api") && !content.includes("rate limit")) {
    questions.push({
      question: "What are the API rate limits per plan tier?",
      source: artifact.name,
      proposedDefault: "100 req/min Starter, 1000 req/min Team, custom Enterprise",
      resolved: false,
    });
  }

  return questions;
}

/** Run full analysis on a set of artifacts */
export function analyze(artifacts: Artifact[]): AnalysisResult {
  const requirements: Requirement[] = [];
  const openQuestions: OpenQuestion[] = [];
  const contradictions: Array<{ description: string; resolution: string }> = [];
  const technicalImplications: Array<{ requirement: string; implication: string; complexity: "low" | "medium" | "high" }> = [];

  for (const artifact of artifacts) {
    requirements.push(...extractExplicitRequirements(artifact));
    requirements.push(...surfaceImplicitRequirements(artifact));
    openQuestions.push(...generateOpenQuestions(artifact));
  }

  // Generate technical implications for high-priority requirements
  for (const req of requirements.filter(r => r.priority === "P0")) {
    technicalImplications.push({
      requirement: req.description,
      implication: `Implementation needed for: ${req.description}`,
      complexity: req.kind === "implicit" ? "high" : "medium",
    });
  }

  return { requirements, openQuestions, contradictions, technicalImplications };
}
