# Rule: UI copy language must follow one explicit policy

## Scope

Applies to user-facing text in frontend components.

## Rule

- New UI copy must follow one project language policy:
  - single-language default, or
  - i18n-managed translations.
- Mixing languages in the same user flow is not allowed unless intentionally documented.

## Rationale

Current repository includes mixed language context (English docs, Spanish UI error text). A defined policy improves UX consistency and maintenance.

## Required checks

- When adding new user-facing strings, verify alignment with project language policy.
- If introducing i18n, document key loading and fallback behavior.

## Evidence in this repository

- `README.md`
- `frontend/src/App.tsx`
