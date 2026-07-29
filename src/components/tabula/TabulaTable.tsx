"use client";

import { useState, useMemo } from "react";
import Papa from "papaparse";
import { cn } from "@/lib/utils";

interface TabulaTableProps {
  headers: string[];
  rows: Record<string, string | number | null>[];
  fileName: string;
}

export function TabulaTable({ headers, rows, fileName }: TabulaTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  // Search Filter
  const filteredRows = useMemo(() => {
    if (!searchTerm.trim()) return rows;
    const term = searchTerm.toLowerCase();
    return rows.filter((row) =>
      headers.some((h) => {
        const val = row[h];
        return val !== null && val !== undefined && String(val).toLowerCase().includes(term);
      })
    );
  }, [rows, headers, searchTerm]);

  // Sort
  const sortedRows = useMemo(() => {
    if (!sortCol) return filteredRows;
    return [...filteredRows].sort((a, b) => {
      const valA = a[sortCol];
      const valB = b[sortCol];

      if (valA === null || valA === undefined) return 1;
      if (valB === null || valB === undefined) return -1;

      if (typeof valA === "number" && typeof valB === "number") {
        return sortDir === "asc" ? valA - valB : valB - valA;
      }

      const strA = String(valA).toLowerCase();
      const strB = String(valB).toLowerCase();
      return sortDir === "asc" ? strA.localeCompare(strB) : strB.localeCompare(strA);
    });
  }, [filteredRows, sortCol, sortDir]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize));
  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedRows.slice(start, start + pageSize);
  }, [sortedRows, currentPage, pageSize]);

  const handleSort = (col: string) => {
    if (sortCol === col) {
      if (sortDir === "asc") {
        setSortDir("desc");
      } else {
        setSortCol(null);
        setSortDir("asc");
      }
    } else {
      setSortCol(col);
      setSortDir("asc");
    }
    setCurrentPage(1);
  };

  const handleExportCsv = () => {
    const csvContent = Papa.unparse({
      fields: headers,
      data: sortedRows.map((r) => headers.map((h) => r[h])),
    });
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `filtered_${fileName}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="rounded-2xl border border-border/30 bg-surface/30 p-5 space-y-4">
      {/* Controls Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search all columns..."
            className="w-full rounded-lg border border-border/40 bg-surface-raised px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary"
            aria-label="Search dataset rows"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">
            Showing {sortedRows.length} of {rows.length} rows
          </span>
          <button
            type="button"
            onClick={handleExportCsv}
            className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
          >
            Export Filtered CSV ↓
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="relative overflow-x-auto rounded-xl border border-border/30 bg-background max-h-[460px]">
        <table className="w-full text-left text-xs text-foreground border-collapse" aria-label="CSV Data Grid">
          <thead className="sticky top-0 z-10 bg-surface-raised border-b border-border/40 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th scope="col" className="px-3 py-2.5 w-12 border-r border-border/20 text-center">
                #
              </th>
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  onClick={() => handleSort(h)}
                  className="px-3 py-2.5 border-r border-border/20 cursor-pointer hover:text-foreground hover:bg-surface/50 transition-colors selection:bg-transparent"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="truncate">{h}</span>
                    <span className="text-[0.65rem] text-primary/80">
                      {sortCol === h ? (sortDir === "asc" ? "▲" : "▼") : "↕"}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/20 font-mono">
            {paginatedRows.map((row, idx) => {
              const globalIdx = (currentPage - 1) * pageSize + idx + 1;
              return (
                <tr key={idx} className="hover:bg-surface/40 transition-colors">
                  <td className="px-3 py-2 text-center text-muted-foreground/60 border-r border-border/20">
                    {globalIdx}
                  </td>
                  {headers.map((h) => {
                    const val = row[h];
                    const isNull = val === null || val === undefined;
                    return (
                      <td
                        key={h}
                        className={cn(
                          "px-3 py-2 truncate max-w-[200px] border-r border-border/20",
                          isNull ? "text-muted-foreground/40 italic" : "text-foreground/90"
                        )}
                      >
                        {isNull ? "null" : String(val)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {paginatedRows.length === 0 && (
              <tr>
                <td colSpan={headers.length + 1} className="px-4 py-8 text-center text-muted-foreground">
                  No matching rows found for &quot;{searchTerm}&quot;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Bottom Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground font-mono pt-1">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="rounded border border-border/40 bg-surface-raised px-2 py-0.5 text-xs text-foreground"
          >
            {[10, 15, 25, 50].map((sz) => (
              <option key={sz} value={sz}>
                {sz}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="rounded border border-border/30 px-2 py-0.5 disabled:opacity-30 hover:border-foreground/30 text-foreground transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="rounded border border-border/30 px-2 py-0.5 disabled:opacity-30 hover:border-foreground/30 text-foreground transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
