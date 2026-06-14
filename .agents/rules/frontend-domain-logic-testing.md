# Rule: Financial computation logic requires deterministic unit tests

## Scope

Applies to frontend domain utilities in `frontend/src/lib/*`.

## Rule

- Any extracted financial computation or formatter helper must include deterministic unit tests.
- Tests should cover at least one normal case and one edge case (e.g., zero income).

## Rationale

The dashboard depends on derived KPI/chart values. Utility-level tests catch regressions before UI behavior degrades.

## Required checks

- Add tests alongside utility changes in `*.test.ts`.
- Keep fixtures small and explicit.

## Evidence in this repository

- `frontend/src/lib/financial-utils.ts`
- `frontend/src/lib/financial-utils.test.ts`
