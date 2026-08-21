import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-100 text-emerald-800 border border-emerald-200",
        secondary:
          "bg-sky-100 text-sky-800 border border-sky-200",
        accent:
          "bg-amber-100 text-amber-900 border border-amber-200",
        outline:
          "border border-slate-300 text-slate-700 bg-white/80",
        danger:
          "bg-rose-100 text-rose-800 border border-rose-200",
        dark:
          "bg-slate-900 text-white shadow-sm",
        glass:
          "bg-white/80 text-slate-900 backdrop-blur-md border border-white/40 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
