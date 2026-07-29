import type { DatasetAnalysis } from "./types";

interface TabulaSummaryPanelProps {
  analysis: DatasetAnalysis;
}

export function TabulaSummaryPanel({ analysis }: TabulaSummaryPanelProps) {
  const metrics = [
    { label: "Total Rows", value: analysis.totalRows.toLocaleString() },
    { label: "Total Columns", value: analysis.totalCols.toString() },
    { label: "Missing Values", value: analysis.missingValues.toLocaleString() },
    { label: "Duplicate Rows", value: analysis.duplicateRows.toString() },
    { label: "Numeric Fields", value: analysis.numericCount.toString() },
    { label: "Text Fields", value: analysis.textCount.toString() },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-xl border border-border/30 bg-surface/40 p-3.5 flex flex-col justify-between"
        >
          <span className="font-mono text-[0.6875rem] text-muted-foreground uppercase tracking-wider">
            {m.label}
          </span>
          <span className="mt-1 font-mono text-lg font-semibold text-foreground">
            {m.value}
          </span>
        </div>
      ))}
    </div>
  );
}
