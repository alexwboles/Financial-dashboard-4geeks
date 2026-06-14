# Component Specifications

## Feature 1 - Date Range Filter on Home Dashboard

### Component: DateRangeFilterBar

Purpose:
- Renders start and end date inputs at the top of the home dashboard.
- Shows available range reference from facets data.

Props:
- minDate: string
- maxDate: string
- startDate?: string
- endDate?: string
- onStartDateChange: (value: string | undefined) => void
- onEndDateChange: (value: string | undefined) => void

Conditional rendering rules:
- If facets are loading, show disabled inputs and a loading hint for date range reference.
- If facets fail, show inline error text and keep inputs enabled for manual filtering retry.
- If only one date input is filled, apply partial filtering with the provided bound only.
- If start date is after end date, prevent request dispatch and show validation message.

### Component: HomeDashboardDataScopeBanner

Purpose:
- Displays the active data scope summary near filters.

Props:
- minDate: string
- maxDate: string
- startDate?: string
- endDate?: string

Conditional rendering rules:
- If both dates are empty, show full available range message.
- If one date is set, show open-ended range message.
- If both are set, show closed range message.

## Feature 2 - Anomaly Alerts Table on Home Dashboard

### Component: AlertsThresholdControl

Purpose:
- Renders numeric threshold input used by anomalies feature.

Props:
- threshold: number
- onThresholdChange: (value: number) => void
- min: number
- max: number
- step: number

Conditional rendering rules:
- Clamp user input to 0.01 to 1.0 in the UI.
- If user clears input, restore default value 0.3.

### Component: AlertsTable

Purpose:
- Shows anomaly rows for current filters and threshold.

Props:
- rows: Array<{ period: string; outcomeTotal: number; rollingAverage: number; increasePercent: number }>
- loading: boolean
- error?: string
- emptyMessage: string

Conditional rendering rules:
- Loading state: keep table header visible with skeleton rows.
- Error state: render inline error row spanning all columns.
- Empty state: render explicit empty message row; table must not disappear.
- Data state: format percentage increase using percent notation.

## Feature 3 - B2B vs B2C Comparison View

### Component: BusinessLineTopCategoriesPanel

Purpose:
- Renders one panel for either B2B or B2C top income categories.

Props:
- title: "B2B" | "B2C"
- rows: Array<{ category: string; totalIncome: number; sharePercent: number }>
- loading: boolean
- error?: string
- emptyMessage: string

Conditional rendering rules:
- If top-5 response is empty for the panel, render empty message inside table body.
- If panel request fails, render panel-specific error without hiding sibling panel.
- If rows exist, each row shows category, total income, and percentage of panel total.

### Component: B2BvsB2CTotalIncomeChart

Purpose:
- Compares B2B vs B2C totals visually.

Props:
- b2bTotalIncome: number
- b2cTotalIncome: number
- loading: boolean

Conditional rendering rules:
- If both totals are zero, render no-data state with explanatory text.
- If one side is zero and the other is positive, render one-bar-dominant chart with label.

### Component: ComparisonDateRangeFilterBar

Purpose:
- Reuses date range behavior for comparison page.

Props:
- minDate: string
- maxDate: string
- startDate?: string
- endDate?: string
- onStartDateChange: (value: string | undefined) => void
- onEndDateChange: (value: string | undefined) => void

Conditional rendering rules:
- Same validation and partial-filter behavior as home date range filter.
- Date range selection applies to both panels and the shared chart.
