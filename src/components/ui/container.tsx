import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow" | "full";
};

const sizes = {
  default: "max-w-7xl",
  wide: "max-w-[90rem]",
  narrow: "max-w-3xl",
  full: "max-w-none",
} as const;

export function Container({ className, size = "default", ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-page", sizes[size], className)} {...props} />
  );
}
