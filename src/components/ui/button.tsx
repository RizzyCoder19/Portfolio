import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform,filter] duration-200 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-elevation-1 focus-visible:outline-primary hover:-translate-y-0.5 hover:shadow-[0_8px_24px_oklch(var(--primary)/0.25),0_2px_8px_oklch(0_0_0/0.03)] hover:drop-shadow-[0_0_12px_oklch(var(--primary)/0.15)] active:translate-y-0",
        secondary:
          "bg-secondary text-secondary-foreground focus-visible:outline-secondary hover:bg-accent hover:text-accent-foreground",
        outline:
          "border border-border bg-transparent text-foreground focus-visible:outline-foreground hover:border-foreground/25 hover:bg-secondary",
        ghost: "text-foreground focus-visible:outline-foreground hover:bg-secondary",
        link: "h-auto p-0 text-primary underline-offset-4 focus-visible:outline-primary hover:underline",
        danger:
          "bg-danger text-danger-foreground focus-visible:outline-danger shadow-elevation-1 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-5 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  type,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...(!asChild ? { type: type ?? "button" } : {})}
      {...props}
    />
  );
}

export { buttonVariants };
