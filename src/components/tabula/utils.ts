import Papa from "papaparse";
import type { DatasetAnalysis, ColumnSummary } from "./types";

export const SAMPLE_DATASETS = [
  {
    name: "System Telemetry & Performance",
    filename: "system_telemetry.csv",
    csv: `timestamp,server_id,cpu_usage_pct,mem_usage_mb,response_time_ms,status_code,region
2026-07-29T10:00:00,srv-east-01,42.5,1024,45,200,us-east
2026-07-29T10:00:05,srv-east-01,68.1,1420,120,200,us-east
2026-07-29T10:00:10,srv-west-02,89.4,2048,340,500,us-west
2026-07-29T10:00:15,srv-west-02,91.2,2100,410,500,us-west
2026-07-29T10:00:20,srv-east-01,35.0,980,38,200,us-east
2026-07-29T10:00:25,eu-central-01,15.2,512,18,200,eu-central
2026-07-29T10:00:30,eu-central-01,18.4,530,22,200,eu-central
2026-07-29T10:00:35,srv-west-02,74.0,1850,210,200,us-west
2026-07-29T10:00:40,srv-east-01,55.3,1200,85,200,us-east
2026-07-29T10:00:45,eu-central-01,22.1,580,25,200,eu-central`,
  },
  {
    name: "E-Commerce Order Analytics",
    filename: "ecommerce_orders.csv",
    csv: `order_id,customer_tier,item_count,total_amount_usd,shipping_days,discount_applied,payment_method
ORD-8921,Premium,3,149.50,2,TRUE,Credit Card
ORD-8922,Standard,1,29.99,5,FALSE,PayPal
ORD-8923,Premium,5,340.00,1,TRUE,Credit Card
ORD-8924,Basic,2,54.20,4,FALSE,Debit Card
ORD-8925,Standard,4,199.00,3,TRUE,PayPal
ORD-8926,Premium,2,120.00,2,FALSE,Credit Card
ORD-8927,Basic,1,15.50,6,FALSE,Debit Card
ORD-8928,Standard,3,88.75,3,TRUE,Credit Card`,
  },
];

export function analyzeDataset(fileName: string, csvString: string): DatasetAnalysis {
  const parsed = Papa.parse<Record<string, string>>(csvString, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: false,
  });

  const headers = parsed.meta.fields || [];
  const rawRows = parsed.data || [];

  let missingValuesCount = 0;
  const rowStrings = new Set<string>();
  let duplicateRowsCount = 0;

  // Process rows
  const cleanRows = rawRows.map((row) => {
    const rowStr = JSON.stringify(row);
    if (rowStrings.has(rowStr)) {
      duplicateRowsCount++;
    } else {
      rowStrings.add(rowStr);
    }

    const cleanRow: Record<string, string | number | null> = {};
    headers.forEach((h) => {
      const rawVal = row[h];
      if (rawVal === undefined || rawVal === null || rawVal.trim() === "") {
        cleanRow[h] = null;
        missingValuesCount++;
      } else {
        const num = Number(rawVal);
        if (!isNaN(num) && rawVal.trim() !== "") {
          cleanRow[h] = num;
        } else {
          cleanRow[h] = rawVal.trim();
        }
      }
    });
    return cleanRow;
  });

  // Calculate Column Summaries
  let numericCount = 0;
  let textCount = 0;

  const columnSummaries: ColumnSummary[] = headers.map((colName) => {
    const values = cleanRows.map((r) => r[colName]);
    const nonNullValues = values.filter((v) => v !== null && v !== undefined);
    const nullCount = values.length - nonNullValues.length;

    const uniqueSet = new Set(nonNullValues.map((v) => String(v)));
    const uniqueCount = uniqueSet.size;

    // Check if numeric column
    const numericValues = nonNullValues.filter((v): v is number => typeof v === "number");
    const isNumeric = nonNullValues.length > 0 && numericValues.length / nonNullValues.length > 0.8;

    if (isNumeric && numericValues.length > 0) {
      numericCount++;
      const sorted = [...numericValues].sort((a, b) => a - b);
      const min = sorted[0]!;
      const max = sorted[sorted.length - 1]!;
      const sum = sorted.reduce((acc, val) => acc + val, 0);
      const mean = Math.round((sum / sorted.length) * 100) / 100;

      let median: number;
      const mid = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        median = Math.round(((sorted[mid - 1]! + sorted[mid]!) / 2) * 100) / 100;
      } else {
        median = sorted[mid]!;
      }

      return {
        name: colName,
        type: "numeric",
        nullCount,
        uniqueCount,
        min,
        max,
        mean,
        median,
      };
    } else {
      textCount++;
      return {
        name: colName,
        type: "text",
        nullCount,
        uniqueCount,
      };
    }
  });

  return {
    fileName,
    totalRows: cleanRows.length,
    totalCols: headers.length,
    missingValues: missingValuesCount,
    duplicateRows: duplicateRowsCount,
    numericCount,
    textCount,
    columnSummaries,
    headers,
    rows: cleanRows,
  };
}
