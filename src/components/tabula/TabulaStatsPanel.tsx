import type { ColumnSummary } from "./types";

interface TabulaStatsPanelProps {
  summaries: ColumnSummary[];
  selectedColumn: string;
  onSelectColumn: (colName: string) => void;
}

export function TabulaStatsPanel({
  summaries,
  selectedColumn,
  onSelectColumn,
}: TabulaStatsPanelProps) {
  const numericSummaries = summaries.filter((s) => s.type === "numeric");
  const activeSummary =
    numericSummaries.find((s) => s.name === selectedColumn) || numericSummaries[0];

  if (numericSummaries.length === 0) {
    return (
      <div className="rounded-xl border border-border/30 bg-surface/30 p-4 text-xs text-muted-foreground">
        No numeric columns detected in this dataset for statistical calculation.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border/30 bg-surface/30 p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-border/20 pb-3">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-wider block">
            Column Statistics
          </span>
          <h4 className="text-sm font-semibold text-foreground">
            Statistical Breakdown for &quot;{activeSummary?.name}&quot;
          </h4>
        </div>

        {/* Selector if multiple numeric columns */}
        {numericSummaries.length > 1 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-mono">Select Column:</span>
            <select
              value={activeSummary?.name}
              onChange={(e) => onSelectColumn(e.target.value)}
              className="rounded-lg border border-border/40 bg-surface-raised px-2.5 py-1 text-xs font-mono text-foreground focus:outline-none focus:border-primary"
            >
              {numericSummaries.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {activeSummary && (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="rounded-lg border border-border/25 bg-surface/50 p-3 text-center">
            <span className="font-mono text-[0.65rem] text-muted-foreground uppercase">Min</span>
            <span className="block font-mono text-sm font-semibold text-foreground mt-0.5">
              {activeSummary.min}
            </span>
          </div>

          <div className="rounded-lg border border-border/25 bg-surface/50 p-3 text-center">
            <span className="font-mono text-[0.65rem] text-muted-foreground uppercase">Max</span>
            <span className="block font-mono text-sm font-semibold text-foreground mt-0.5">
              {activeSummary.max}
            </span>
          </div>

          <div className="rounded-lg border border-border/25 bg-surface/50 p-3 text-center">
            <span className="font-mono text-[0.65rem] text-muted-foreground uppercase">Mean</span>
            <span className="block font-mono text-sm font-semibold text-foreground mt-0.5">
              {activeSummary.mean}
            </span>
          </div>

          <div className="rounded-lg border border-border/25 bg-surface/50 p-3 text-center">
            <span className="font-mono text-[0.65rem] text-muted-foreground uppercase">Median</span>
            <span className="block font-mono text-sm font-semibold text-foreground mt-0.5">
              {activeSummary.median}
            </span>
          </div>

          <div className="rounded-lg border border-border/25 bg-surface/50 p-3 text-center">
            <span className="font-mono text-[0.65rem] text-muted-foreground uppercase">Unique Values</span>
            <span className="block font-mono text-sm font-semibold text-foreground mt-0.5">
              {activeSummary.uniqueCount}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
