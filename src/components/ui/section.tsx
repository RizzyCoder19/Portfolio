import type { ComponentPropsWithoutRef, ElementType } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  container?: "default" | "wide" | "narrow" | "full" | false;
  spacing?: "default" | "tight" | "none";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

const spacingClasses = {
  default: "py-section",
  tight: "py-section-tight",
  none: "",
} as const;

export function Section<T extends ElementType = "section">({
  as,
  className,
  children,
  container = "default",
  spacing = "default",
  ...props
}: SectionProps<T>) {
  const Comp = as ?? "section";
  const content = container ? (
    <Container size={container}>{children}</Container>
  ) : (
    children
  );

  return (
    <Comp className={cn(spacingClasses[spacing], className)} {...props}>
      {content}
    </Comp>
  );
}
