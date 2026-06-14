# Rule: Environment-aware backend security defaults

## Scope
Applies to backend bootstrap and middleware configuration in `backend/app/*`.

## Rule
- Do not hardcode permissive production-unsafe defaults.
- CORS origins, methods, headers, and credentials must be configurable through environment-aware settings.
- Wildcard CORS (`*`) is allowed only for explicit development mode.

## Rationale
Current backend bootstrap is permissive (`allow_origins=["*"]`). This is acceptable for local demos but risky if copied to production.

## Required checks
- New backend config changes must include an explicit development/production behavior note.
- If security-related defaults change, add or update tests for expected configuration behavior.

## Evidence in this repository
- `backend/app/main.py`
