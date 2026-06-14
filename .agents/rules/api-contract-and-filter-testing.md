# Rule: Every metrics endpoint change needs contract + filter tests

## Scope

Applies to backend routes under `/api/metrics*`.

## Rule

- Any new endpoint or filter parameter requires backend tests validating:
  - response status code,
  - response schema keys/types,
  - filtering behavior (when filters apply),
  - ordering assumptions when relevant.

## Rationale

Current test suite protects route behavior for multiple endpoint families. Maintaining this pattern prevents silent contract regressions.

## Required checks

- Add tests in `backend/tests/test_routes.py` or equivalent test module.
- Ensure tests use deterministic fixtures.

## Evidence in this repository

- `backend/tests/test_routes.py`
