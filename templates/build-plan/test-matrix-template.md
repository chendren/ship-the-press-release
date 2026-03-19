# Test Matrix Template

> Define every test before writing code. This is the contract between intent and implementation.

## Conventions

- **P0**: Must pass before any PR merges
- **P1**: Must pass before release
- **P2**: Should pass; failures investigated but don't block

## Unit Tests

| ID | Component | Test Description | Input | Expected Output | Priority |
|----|-----------|-----------------|-------|----------------|----------|
| U01 | [Component] | [What it tests] | [Input] | [Output] | P0 |
| U02 | [Component] | [What it tests] | [Input] | [Output] | P0 |

## Integration Tests

| ID | Flow | Test Description | Setup | Expected Behavior | Priority |
|----|------|-----------------|-------|-------------------|----------|
| I01 | [Flow] | [What it tests] | [Setup] | [Behavior] | P0 |
| I02 | [Flow] | [What it tests] | [Setup] | [Behavior] | P1 |

## Edge Cases

| ID | Scenario | Input | Expected Behavior | Priority |
|----|----------|-------|-------------------|----------|
| E01 | [Edge case] | [Input] | [Behavior] | P1 |
| E02 | [Edge case] | [Input] | [Behavior] | P2 |

## Error Cases

| ID | Failure Mode | Trigger | Expected Response | Priority |
|----|-------------|---------|-------------------|----------|
| F01 | [Failure] | [How triggered] | [Response] | P0 |
| F02 | [Failure] | [How triggered] | [Response] | P1 |
