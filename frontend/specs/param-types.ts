import type { BusinessType, OperationType } from "./api-types";

/**
 * String date format used by query parameters: YYYY-MM-DD.
 */
export type YYYYMMDDString = `${number}-${number}-${number}`;

/**
 * Optional date range filters shared across dashboard features.
 */
export interface DateRangeFilter {
  /**
   * Optional inclusive lower bound date, formatted as YYYY-MM-DD.
   */
  start_date?: YYYYMMDDString;

  /**
   * Optional inclusive upper bound date, formatted as YYYY-MM-DD.
   */
  end_date?: YYYYMMDDString;
}

/**
 * Query parameters for GET /api/metrics/alerts.
 */
export interface AlertsParams extends DateRangeFilter {
  /**
   * Spike threshold ratio for anomaly detection.
   * Valid range for the feature UI: 0.01 to 1.0.
   * Backend accepts values greater than or equal to 0.
   */
  threshold?: number;

  /**
   * Optional business line scope.
   */
  business_type?: BusinessType;
}

/**
 * Query parameters for GET /api/metrics/categories/top.
 */
export interface TopCategoriesParams extends DateRangeFilter {
  /**
   * Operation type to aggregate in top categories.
   * Feature 3 must use income.
   */
  operation_type: OperationType;

  /**
   * Maximum number of categories to return.
   * API valid range: integer from 1 to 20.
   * Feature 3 must use 5.
   */
  limit: number;

  /**
   * Optional business line scope.
   */
  business_type?: BusinessType;
}
