# Rule: Deterministic data without global RNG side effects

## Scope
Applies to data generation helpers and backend simulation fixtures.

## Rule
- Prefer local random generator instances (`random.Random(seed)`) over mutating global random state.
- Deterministic test/demo data must be reproducible from a fixed seed.
- Functions should avoid side effects that can leak across unrelated tests.

## Rationale
The project relies on seeded mock movements for stable route behavior; preserving determinism is critical for contract tests.

## Required checks
- New generation helpers must document deterministic input controls.
- Test coverage must include reproducibility or stable ordering assertions.

## Evidence in this repository
- `backend/app/routes.py`
- `backend/tests/test_routes.py`
