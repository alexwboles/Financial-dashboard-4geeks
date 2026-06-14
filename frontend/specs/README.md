# Frontend Feature Data Contract Specs

This document specifies the frontend data contracts for three requested features without implementing UI or API calls.

## Shared Type Files

- Response types: frontend/specs/api-types.ts
- Query parameter types: frontend/specs/param-types.ts

## Feature 1 - Date Range Filter on Home Dashboard

Endpoints consumed:

- GET /api/metrics/facets
- GET /api/metrics with optional filters start_date and end_date

Request parameter types:

- DateRangeFilter

Response types:

- FacetsResponse
- Existing metrics list response from current dashboard flow (FinancialMovement list)

Valid parameter values and constraints:

- start_date: optional YYYY-MM-DD string
- end_date: optional YYYY-MM-DD string
- Both dates optional; empty means no bound in that direction

UI edge cases and required behavior:

1. Only start_date is filled:
UI sends only start_date and omits end_date.
Dashboard must show all records from start_date forward.

1. Only end_date is filled:
UI sends only end_date and omits start_date.
Dashboard must show all records up to end_date.

1. start_date is later than end_date:
UI must block request and show validation helper text.

1. Facets endpoint fails:
Date inputs remain available and a reference-range error hint is shown.

## Feature 2 - Anomaly Alerts Table on Home Dashboard

Endpoint consumed:

- GET /api/metrics/alerts

Request parameter types:

- AlertsParams
- DateRangeFilter (included via AlertsParams)

Response types:

- AlertsResponse
- AlertEntry

Valid parameter values and constraints:

- threshold: numeric ratio. Feature UI range is 0.01 to 1.0.
- Backend schema allows threshold greater than or equal to 0.
- start_date and end_date follow optional YYYY-MM-DD format.

UI edge cases and required behavior:

1. No anomalies for current threshold:
Render explicit empty state row in the table body.
Table headers remain visible.

1. Threshold input cleared or invalid:
Reset to default 0.3 and re-run query.

1. Date range active with no results:
Render explicit empty state that references current filters.

1. Alerts request fails:
Render inline table-level error state and keep threshold control visible.

## Feature 3 - B2B vs B2C Comparison View

Endpoints consumed:

- GET /api/metrics/categories/top
- GET /api/metrics/facets

Request parameter types:

- TopCategoriesParams
- DateRangeFilter (included via TopCategoriesParams)

Response types:

- TopCategoriesResponse
- CategoryEntry
- FacetsResponse

Valid parameter values and constraints:

- operation_type must be income for this feature.
- limit must be 5 for this feature. API valid range is 1 to 20.
- business_type should be B2B for the left panel and B2C for the right panel.
- start_date and end_date are optional YYYY-MM-DD strings.

UI edge cases and required behavior:

1. B2B panel receives empty top-5 list:
B2B panel shows explicit empty state in table body.
B2C panel and shared chart still render based on available data.

1. B2C panel receives empty top-5 list:
B2C panel shows explicit empty state in table body.
B2B panel and shared chart still render based on available data.

1. Both panel lists are empty:
Both tables show empty states.
Shared chart shows no-data state message.

1. One panel request fails and the other succeeds:
Failed panel shows local error state.
Successful panel remains visible with data.

## Endpoint Contract Notes from /docs

- /api/metrics/facets returns:

  - operation_types: array of income or outcome
  - business_types: array of B2B or B2C
  - categories: array of suppliers, sales, operational, administrative, others
  - min_date and max_date in date format

- /api/metrics/alerts returns an array with:

  - period
  - outcome_total
  - baseline_average
  - increase_ratio

- /api/metrics/categories/top returns an array with:

  - category
  - operation_type
  - total_amount
