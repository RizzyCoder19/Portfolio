/*
 * Next.js build hardening for Windows.
 *
 * Root issue observed: Next build sometimes fails after compilation with
 * JSON parse errors and/or ENOENT for manifest files inside `.next/`.
 *
 * Strategy: always delete `.next/` immediately before `next build`
 * to guarantee artifact integrity.
 */

import fs from "node:fs";
import path from "node:path";

function rmrf(targetPath) {
  try {
    if (!fs.existsSync(targetPath)) return;
    fs.rmSync(targetPath, { recursive: true, force: true });
  } catch (err) {
    // Best-effort: if a file is locked, Next will regenerate what it can.
    console.warn(`[clean-next] Failed to remove ${targetPath}:`, err?.message || err);
  }
}

const repoRoot = process.cwd();

rmrf(path.join(repoRoot, ".next"));
rmrf(path.join(repoRoot, "out"));

console.log("[clean-next] Cleaned Next build artifacts.");

