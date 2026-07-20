import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-semibold text-balance text-foreground", {
  variants: {
    size: {
      display: "text-display",
      title: "text-title",
      heading: "text-heading",
      h4: "text-xl leading-tight tracking-[-0.025em]",
    },
  },
  defaultVariants: {
    size: "heading",
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

export function Heading({ as: Comp = "h2", className, size, ...props }: HeadingProps) {
  return <Comp className={cn(headingVariants({ size }), className)} {...props} />;
}

export { headingVariants };
