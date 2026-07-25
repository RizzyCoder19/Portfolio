"use client";

import { useCallback } from "react";

import { cn } from "@/lib/utils";
import { useScrollTo } from "@/utils/scroll";

interface NavbarItemProps {
  label: string;
  sectionId: string;
  isActive: boolean;
  onItemClick?: () => void;
}

export function NavbarItem({
  label,
  sectionId,
  isActive,
  onItemClick,
}: NavbarItemProps) {
  const scrollTo = useScrollTo();

  const handleClick = useCallback(() => {
    scrollTo(`#${sectionId}`, { offset: 80 });
    onItemClick?.();
  }, [scrollTo, sectionId, onItemClick]);

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
          isActive
            ? "bg-primary/10 text-foreground"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
        aria-current={isActive ? "true" : undefined}
      >
        {label}
      </button>
    </li>
  );
}
