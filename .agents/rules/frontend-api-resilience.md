# Rule: Frontend API requests must define failure strategy

## Scope

Applies to frontend data access in `frontend/src/*`.

## Rule

- Network calls must include explicit failure behavior:
  - user-visible fallback state,
  - request timeout or abort strategy,
  - safe handling for non-2xx responses.
- Error messages should be actionable and consistent with project language policy.

## Rationale

Dashboard rendering depends on API availability. Resilience requirements reduce hanging calls and unclear failures.

## Required checks

- For new data-fetching logic, verify loading, success, and error states.
- If introducing shared fetch utilities, add unit tests for error branches.

## Evidence in this repository

- `frontend/src/App.tsx`
