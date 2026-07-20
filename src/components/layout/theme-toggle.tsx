"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const themeOptions = ["light", "dark", "system"] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentIndex = themeOptions.indexOf(
    (theme as (typeof themeOptions)[number]) ?? "system",
  );
  const nextTheme = themeOptions[(currentIndex + 1) % themeOptions.length] ?? "system";
  const label = `Theme: ${theme ?? "system"}. Switch to ${nextTheme}.`;

  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <Button
      aria-label={label}
      disabled={!mounted}
      size="icon"
      variant="ghost"
      onClick={() => setTheme(nextTheme)}
    >
      <Icon aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </Button>
  );
}
