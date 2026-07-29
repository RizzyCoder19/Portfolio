"use client";

import type { ColumnSummary } from "./types";

interface TabulaChartProps {
  rows: Record<string, string | number | null>[];
  activeColumn?: string;
  summary?: ColumnSummary;
}

export function TabulaChart({ rows, activeColumn, summary }: TabulaChartProps) {
  if (!activeColumn || !summary || summary.type !== "numeric" || rows.length === 0) {
    return null;
  }

  const numericValues = rows
    .map((r) => r[activeColumn])
    .filter((v): v is number => typeof v === "number");

  if (numericValues.length === 0) {
    return null;
  }

  const maxVal = summary.max || Math.max(...numericValues);
  const minVal = summary.min || 0;
  const range = Math.max(1, maxVal - (minVal < 0 ? minVal : 0));

  // Cap SVG chart bars to first 30 values for clean readability
  const displayValues = numericValues.slice(0, 30);

  return (
    <div className="rounded-2xl border border-border/30 bg-surface/30 p-5">
      <div className="flex items-center justify-between border-b border-border/20 pb-3 mb-4">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-wider block">
            Visual Trend
          </span>
          <h4 className="text-sm font-semibold text-foreground">
            Distribution of &quot;{activeColumn}&quot; (First {displayValues.length} rows)
          </h4>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          Min: {minVal} | Max: {maxVal}
        </span>
      </div>

      {/* SVG Bar Chart */}
      <div className="relative h-40 w-full overflow-hidden flex items-end gap-1 pt-4">
        {displayValues.map((val, i) => {
          const heightPct = Math.max(8, Math.min(100, (val / range) * 100));
          return (
            <div
              key={i}
              className="group relative flex-1 bg-primary/20 hover:bg-primary/80 rounded-t transition-colors duration-150"
              style={{ height: `${heightPct}%` }}
              aria-label={`Row ${i + 1}: ${val}`}
            >
              {/* Hover Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block z-20 whitespace-nowrap rounded bg-surface-raised border border-border/40 px-2 py-1 font-mono text-[0.625rem] text-foreground shadow-elevation-2">
                Row {i + 1}: {val}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
