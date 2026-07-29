"use client";

import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import { SAMPLE_DATASETS } from "./utils";
import { cn } from "@/lib/utils";

interface TabulaUploaderProps {
  onLoadCsv: (fileName: string, csvContent: string) => void;
}

export function TabulaUploader({ onLoadCsv }: TabulaUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.name.endsWith(".csv") && file.type !== "text/csv") {
      alert("Please select a valid .csv file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      if (content) {
        onLoadCsv(file.name, content);
      }
    };
    reader.readAsText(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Dropzone area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        className={cn(
          "relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-200",
          isDragging
            ? "border-primary bg-primary/[0.08]"
            : "border-border/40 bg-surface/30 hover:border-primary/40 hover:bg-surface/50"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleInputChange}
          className="hidden"
          aria-label="Upload CSV File"
        />

        <div className="mb-3 size-10 rounded-full border border-border/40 bg-surface-raised flex items-center justify-center text-primary font-mono text-lg">
          ↑
        </div>
        <h4 className="text-sm font-semibold text-foreground mb-1">
          Drop your CSV file here, or click to browse
        </h4>
        <p className="text-xs text-muted-foreground max-w-sm">
          Processing happens 100% locally inside your browser. No data is ever sent to a server.
        </p>
      </div>

      {/* Sample dataset buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="font-mono text-xs text-muted-foreground/60">Or load a sample dataset:</span>
        {SAMPLE_DATASETS.map((ds) => (
          <button
            key={ds.name}
            type="button"
            onClick={() => onLoadCsv(ds.filename, ds.csv)}
            className="rounded-full border border-border/30 bg-surface/40 px-3 py-1 text-xs font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors cursor-pointer"
          >
            {ds.name}
          </button>
        ))}
      </div>
    </div>
  );
}
