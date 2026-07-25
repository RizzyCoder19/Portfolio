import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-kicker font-semibold uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        featured: "border border-primary/10 bg-primary/10 text-primary",
        completed: "border border-success/20 bg-success/15 text-success-foreground",
        progress: "border border-border bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "progress",
    },
  },
);

export type StatusBadgeProps = VariantProps<typeof statusBadgeVariants> & {
  label: string;
};

export function StatusBadge({
  label,
  variant,
  className,
}: StatusBadgeProps & { className?: string }) {
  return (
    <span className={cn(statusBadgeVariants({ variant }), className)}>{label}</span>
  );
}

export { statusBadgeVariants };
