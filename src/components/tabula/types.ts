export interface ColumnSummary {
  name: string;
  type: "numeric" | "text";
  nullCount: number;
  uniqueCount: number;
  min?: number;
  max?: number;
  mean?: number;
  median?: number;
}

export interface DatasetAnalysis {
  fileName: string;
  totalRows: number;
  totalCols: number;
  missingValues: number;
  duplicateRows: number;
  numericCount: number;
  textCount: number;
  columnSummaries: ColumnSummary[];
  headers: string[];
  rows: Record<string, string | number | null>[];
}
