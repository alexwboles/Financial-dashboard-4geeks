# Phase 3 - Repository Rule Implementation and Validation

## Implemented rule set
Rules were added in `.agents/rules` with project-specific scope, rationale, and checks:
- `backend-security-config.md`
- `backend-deterministic-data-generation.md`
- `api-contract-and-filter-testing.md`
- `frontend-api-resilience.md`
- `ui-language-consistency.md`
- `frontend-domain-logic-testing.md`

## Validation against real workflow tasks

### Workflow task A
Task: Add new backend filter parameter to `/api/metrics/summary`.

Applicable rules:
- `api-contract-and-filter-testing.md`
- `backend-deterministic-data-generation.md`

Validation result:
- Rule set requires filter behavior tests and deterministic fixture usage, directly matching existing backend patterns in `backend/tests/test_routes.py`.

### Workflow task B
Task: Harden backend configuration for non-local deployment.

Applicable rules:
- `backend-security-config.md`

Validation result:
- Rule explicitly prevents shipping wildcard CORS defaults without environment-aware controls.

### Workflow task C
Task: Add a new frontend KPI transformation helper.

Applicable rules:
- `frontend-domain-logic-testing.md`

Validation result:
- Rule mandates deterministic unit tests and edge-case coverage consistent with existing `financial-utils.test.ts` style.

### Workflow task D
Task: Add a second API call in dashboard page.

Applicable rules:
- `frontend-api-resilience.md`

Validation result:
- Rule requires timeout/abort strategy plus explicit loading/error behavior; this closes current resilience gap in `frontend/src/App.tsx`.

### Workflow task E
Task: Add alert banner with new copy.

Applicable rules:
- `ui-language-consistency.md`

Validation result:
- Rule enforces copy policy, reducing mixed-language drift.

## Iteration notes
- Initial rule drafts were generic; refined to reference concrete repository paths and existing workflows.
- Each rule now includes direct evidence and required checks to guide real pull request decisions.

## Phase 3 completion checklist
- [x] `.agents/rules` created.
- [x] Multiple actionable rule files added.
- [x] Rules validated against repository-specific workflow tasks.
- [x] Ambiguous wording reduced via explicit scope/checks/rationale.
- [x] Artifact prepared for dedicated Phase 3 commit.
