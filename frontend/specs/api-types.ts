/**
 * Supported operation types for metrics endpoints.
 */
export type OperationType = "income" | "outcome";

/**
 * Supported business lines in metrics endpoints.
 */
export type BusinessType = "B2B" | "B2C";

/**
 * Supported movement categories returned by the API.
 */
export type Category =
  | "suppliers"
  | "sales"
  | "operational"
  | "administrative"
  | "others";

/**
 * Response from GET /api/metrics/facets.
 */
export interface FacetsResponse {
  /**
   * All operation types available in the current dataset.
   */
  operation_types: OperationType[];

  /**
   * All business lines available in the current dataset.
   */
  business_types: BusinessType[];

  /**
   * All categories available in the current dataset.
   */
  categories: Category[];

  /**
   * Earliest date available in the dataset, formatted as YYYY-MM-DD.
   */
  min_date: string;

  /**
   * Latest date available in the dataset, formatted as YYYY-MM-DD.
   */
  max_date: string;
}

/**
 * One anomaly row from GET /api/metrics/alerts.
 */
export interface AlertEntry {
  /**
   * Period identifier returned by the backend grouping (for example YYYY-MM).
   */
  period: string;

  /**
   * Total outcome recorded in the period.
   */
  outcome_total: number;

  /**
   * Rolling baseline average used by the backend for anomaly detection.
   */
  baseline_average: number;

  /**
   * Relative increase ratio compared to baseline (for example 0.35 = 35%).
   */
  increase_ratio: number;
}

/**
 * Response from GET /api/metrics/alerts.
 */
export type AlertsResponse = AlertEntry[];

/**
 * One category row from GET /api/metrics/categories/top.
 */
export interface CategoryEntry {
  /**
   * Category name used by the backend taxonomy.
   */
  category: Category;

  /**
   * Operation type represented by the row.
   */
  operation_type: OperationType;

  /**
   * Aggregated amount for the category in the filtered query scope.
   */
  total_amount: number;
}

/**
 * Response from GET /api/metrics/categories/top.
 */
export type TopCategoriesResponse = CategoryEntry[];
