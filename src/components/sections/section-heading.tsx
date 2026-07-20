import type { HTMLAttributes, ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? <Badge variant="outline">{eyebrow}</Badge> : null}
      <Heading size="title">{title}</Heading>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
