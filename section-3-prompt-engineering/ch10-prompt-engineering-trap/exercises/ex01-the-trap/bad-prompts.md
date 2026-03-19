# Prompts That Don't Work

Diagnose each one. The answer is rarely "add more to the prompt."

## Prompt 1
"Generate a REST API for user management with authentication, password reset, email verification, role-based access control, and audit logging. Use Express, PostgreSQL, and JWT. Follow best practices."

**Problem**: Output is different every time. Sometimes it uses bcrypt, sometimes argon2. Sometimes it puts auth in middleware, sometimes in each route.

## Prompt 2
"Analyze this CSV file and give me insights."

**Problem**: The "insights" are always generic (mean, median, max). Never domain-specific.

## Prompt 3
"Write a function that validates an email address. It should handle all edge cases including international domains, plus addressing, quoted local parts, and IP address literals per RFC 5321."

**Problem**: Every attempt has bugs. The 15th iteration is worse than the 3rd.

## Prompt 4
"Refactor this 800-line React component into smaller components. Keep the same behavior."

**Problem**: The refactored version has subtle behavioral differences. Tests break.

## Prompt 5
System prompt (47 lines) that describes exactly how a customer support chatbot should respond, with 12 examples covering tone, formatting, escalation rules, and prohibited phrases.

**Problem**: Works 80% of the time. The 20% failure cases are unpredictable.
