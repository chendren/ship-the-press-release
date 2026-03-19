// Exercise 5.3: Validation Script
// This script checks prerequisites before running the skill's workflow.

async function validate(): Promise<{ valid: boolean; issues: string[] }> {
  const issues: string[] = [];

  // TODO: Add your validation checks here
  // Example: Check that a required tool is installed
  // Example: Check that a config file exists
  // Example: Check that environment variables are set

  return { valid: issues.length === 0, issues };
}

const result = await validate();
if (!result.valid) {
  console.error("Validation failed:");
  result.issues.forEach(i => console.error(`  - ${i}`));
  process.exit(1);
}
console.log("Validation passed.");
