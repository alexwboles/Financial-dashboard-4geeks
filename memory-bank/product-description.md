# Product Description

## Product scope
This repository implements a financial metrics dashboard with:
- A React + TypeScript frontend for visualization.
- A FastAPI backend that serves deterministic mock financial movement data.

The project is used as a repository stewardship exercise focused on maintainability, governance rules, and knowledge continuity.

## Functional behavior observed in code
- Frontend requests movement data from `/api/metrics` and computes KPI and monthly chart data before rendering dashboard components.
- Backend exposes health and metrics endpoints, including filters, summary views, category ranking, period comparison, and anomaly alerts.
- B2B and B2C segmented endpoints are available.

## Core user-facing outputs
- KPI row (income, outcome, profit, profit percentage).
- Income/outcome trend chart.
- Profit percent chart.
- Error state when backend data cannot be loaded.

## Evidence sources
- `frontend/src/App.tsx`
- `frontend/src/lib/financial-utils.ts`
- `backend/app/routes.py`
- `backend/app/main.py`
