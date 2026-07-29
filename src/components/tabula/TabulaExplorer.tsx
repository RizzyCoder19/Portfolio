"use client";

import { useState } from "react";
import { TabulaUploader } from "./TabulaUploader";
import { TabulaSummaryPanel } from "./TabulaSummaryPanel";
import { TabulaStatsPanel } from "./TabulaStatsPanel";
import { TabulaChart } from "./TabulaChart";
import { TabulaTable } from "./TabulaTable";
import { analyzeDataset, SAMPLE_DATASETS } from "./utils";
import type { DatasetAnalysis } from "./types";

export function TabulaExplorer() {
  const [analysis, setAnalysis] = useState<DatasetAnalysis | null>(() => {
    const defaultDs = SAMPLE_DATASETS[0]!;
    return analyzeDataset(defaultDs.filename, defaultDs.csv);
  });

  const [selectedColumn, setSelectedColumn] = useState<string>("");

  const handleLoadCsv = (fileName: string, csvContent: string) => {
    const result = analyzeDataset(fileName, csvContent);
    setAnalysis(result);
    // Auto-select first numeric column if available
    const firstNum = result.columnSummaries.find((s) => s.type === "numeric");
    setSelectedColumn(firstNum ? firstNum.name : "");
  };

  const activeNumericSummary = analysis?.columnSummaries.find(
    (s) => s.name === (selectedColumn || analysis?.columnSummaries.find((c) => c.type === "numeric")?.name)
  );

  return (
    <div className="space-y-6">
      {/* Workspace Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/30 pb-4">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-wider block">
            Interactive Live Application
          </span>
          <h3 className="text-lg font-semibold text-foreground">
            Tabula Workspace {analysis ? `— ${analysis.fileName}` : ""}
          </h3>
        </div>

        {analysis && (
          <button
            type="button"
            onClick={() => setAnalysis(null)}
            className="self-start sm:self-auto rounded-lg border border-border/30 bg-surface/50 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer"
          >
            Change Dataset ↑
          </button>
        )}
      </div>

      {/* Upload Zone (or show uploader if no analysis) */}
      {!analysis ? (
        <TabulaUploader onLoadCsv={handleLoadCsv} />
      ) : (
        <>
          {/* Summary Metric Cards */}
          <TabulaSummaryPanel analysis={analysis} />

          {/* Numeric Column Statistics */}
          <TabulaStatsPanel
            summaries={analysis.columnSummaries}
            selectedColumn={selectedColumn || activeNumericSummary?.name || ""}
            onSelectColumn={setSelectedColumn}
          />

          {/* Simple Visual Trend Chart */}
          <TabulaChart
            rows={analysis.rows}
            activeColumn={selectedColumn || activeNumericSummary?.name}
            summary={activeNumericSummary}
          />

          {/* Data Grid Table */}
          <TabulaTable
            headers={analysis.headers}
            rows={analysis.rows}
            fileName={analysis.fileName}
          />

          {/* Dataset Switcher Footer */}
          <div className="pt-2">
            <TabulaUploader onLoadCsv={handleLoadCsv} />
          </div>
        </>
      )}
    </div>
  );
}
