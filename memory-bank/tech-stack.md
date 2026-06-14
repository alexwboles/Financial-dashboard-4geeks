# Tech Stack

## Frontend
- Runtime/framework: React 19 + TypeScript.
- Build/dev: Vite 8.
- Styling: Tailwind CSS v4 (via Vite plugin), utility helpers (`clsx`, `tailwind-merge`, `class-variance-authority`).
- Charts/icons: Recharts, Lucide React.
- Testing: Vitest (`test`, `test:watch`, `test:coverage`).
- Linting: ESLint with TypeScript and React hooks plugins.

Key files:
- `frontend/package.json`
- `frontend/vite.config.ts`
- `frontend/src/lib/financial-utils.test.ts`

## Backend
- Framework: FastAPI.
- Server: Uvicorn.
- Debug tooling: debugpy.
- Testing: pytest, pytest-cov, httpx, FastAPI TestClient.

Key files:
- `backend/requirements.txt`
- `backend/app/main.py`
- `backend/tests/test_routes.py`

## Infra and local orchestration
- Docker Compose orchestrates `frontend` and `backend` services.
- Port mapping in compose:
  - frontend `5173:5173`
  - backend `8000:8000`
- Frontend `/api` requests are proxied to `http://backend:8000` in Vite dev server config.

Key files:
- `docker-compose.yml`
- `frontend/vite.config.ts`
- `README.md`

## Governance artifacts added in this handover
- Rules: `.agents/rules/*.md`
- Handover analysis docs: `handover/*.md`
- Memory bank docs: `memory-bank/*.md`
