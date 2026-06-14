# Phase 2 - Engineering Practices Analysis and Rule Proposals

## Objective
Identify strong and risky engineering practices from real code evidence, then convert findings into explicit, project-specific rule proposals.

## Good practices (with evidence)

### 1) Deterministic backend fixtures for stable API behavior
Category: Testing, backend reliability

Evidence:
- `backend/app/routes.py` uses `generate_mock_movements(seed=42)` in route handlers to keep data deterministic.

Why this is good:
- Reduces flaky tests and makes expected API outputs reproducible.

### 2) Typed API models and constrained query values
Category: API contracts, data validation

Evidence:
- `backend/app/routes.py` defines Pydantic models (`FinancialMovement`, `MetricsSummaryItem`, etc.).
- Uses Literal type constraints for `OperationType`, `BusinessType`, `GroupBy`, `Category`.

Why this is good:
- Enforces response/request consistency and reduces invalid value handling.

### 3) Focused utility testing on frontend calculations
Category: Frontend testing

Evidence:
- `frontend/src/lib/financial-utils.test.ts` validates KPI aggregation, chronological month grouping, and value formatting.

Why this is good:
- Protects core business calculations from regression independent of UI rendering.

### 4) Separation of concerns in frontend dashboard
Category: Architecture, maintainability

Evidence:
- `frontend/src/App.tsx` orchestrates data loading and composes dedicated components.
- Dashboard rendering split across `frontend/src/components/dashboard/*`.

Why this is good:
- Keeps orchestration, visualization, and formatting responsibilities separated.

### 5) Local containerized dev setup documented and configured
Category: DX, operability

Evidence:
- `README.md` documents `docker compose up --build`.
- `docker-compose.yml` maps services and ports.
- `frontend/vite.config.ts` proxies `/api` to backend service.

Why this is good:
- Aligns local environment behavior and lowers setup friction for contributors.

## Bad or risky practices (with evidence)

### 1) Overly permissive CORS in backend
Category: Security

Evidence:
- `backend/app/main.py` sets `allow_origins=["*"]`, `allow_methods=["*"]`, `allow_headers=["*"]`.

Risk:
- Acceptable for demo but unsafe if deployed unchanged.

### 2) Global random state mutation inside generator
Category: Reliability, test isolation

Evidence:
- `backend/app/routes.py` uses `random.seed(seed)` directly.

Risk:
- Mutates global RNG state and may leak effects across future logic/tests.

### 3) Missing API timeout/abort handling in frontend fetch
Category: Resilience, UX

Evidence:
- `frontend/src/App.tsx` fetches without timeout, cancellation, or retry policy.

Risk:
- Stuck network calls can degrade UX and complicate failure behavior.

### 4) Localization inconsistency in user-facing messaging
Category: Product consistency

Evidence:
- `frontend/src/App.tsx` error copy is Spanish while primary docs are English.

Risk:
- Inconsistent language strategy can confuse users and maintainers.

### 5) No production-vs-development backend config boundary
Category: Configuration governance

Evidence:
- `backend/app/main.py` has static CORS/open policy and no environment-aware safety profile.

Risk:
- Operational defaults may drift into production unintentionally.

## Proposed rules derived from findings

### Rule proposal A - Security defaults must be environment-aware
- Keep permissive CORS only in explicit development mode.
- Require environment variables or settings module to control allowed origins/methods.

### Rule proposal B - Determinism without global side effects
- Use local random generator instances (e.g., `rng = random.Random(seed)`) instead of mutating global RNG.

### Rule proposal C - API client requests must define failure behavior
- Add timeout/abort strategy for network requests.
- Standardize error handling and user-facing fallback messaging.

### Rule proposal D - Language consistency standard
- Define a project language policy for UI text (single language or i18n framework).

### Rule proposal E - Route contract protection
- Every new endpoint requires at least one backend test validating contract shape and filter behavior.

### Rule proposal F - Utility/domain logic must be unit tested
- If calculation logic is extracted to utility functions, include deterministic unit tests.

## Applicability check to current workflow
- Backend endpoints are actively expanded (`/api/metrics/*` family), so route-testing and contract rules are directly applicable.
- Frontend currently performs all KPI transforms client-side, so utility-test and API failure-handling rules are immediately actionable.
- Current CORS policy and static config reveal immediate need for environment-aware security rules.

## Phase 2 completion checklist
- [x] At least 5 good practices identified with concrete evidence.
- [x] At least 5 risky practices identified with concrete evidence.
- [x] Findings grouped by categories.
- [x] Actionable project rule proposals created.
- [x] Artifact prepared for dedicated Phase 2 commit.
