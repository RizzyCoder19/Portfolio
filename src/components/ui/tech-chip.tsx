import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const techChipVariants = cva(
  "inline-flex items-center rounded-md font-medium",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground",
        subtle: "bg-surface-sunken text-muted-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

export type TechChipProps = VariantProps<typeof techChipVariants> & {
  label: string;
};

export function TechChip({ label, variant, size, className }: TechChipProps & { className?: string }) {
  return (
    <span className={cn(techChipVariants({ variant, size }), className)}>
      {label}
    </span>
  );
}

export { techChipVariants };
