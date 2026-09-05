import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#F59E0B] text-[#0F172A] hover:bg-[#D97706] font-extrabold shadow-xs hover:shadow-md",
        secondary:
          "bg-[#1E3A8A] text-white hover:bg-[#1e293b] font-bold shadow-xs",
        outline:
          "border border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#1E3A8A] font-semibold",
        ghost:
          "text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#1E3A8A]",
        glass:
          "bg-white/80 backdrop-blur-md border border-white/40 text-[#0F172A] hover:bg-white/95 shadow-xs",
        dark:
          "bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-xs",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 px-3.5 text-xs rounded-md",
        lg: "h-13 px-8 text-base rounded-xl font-extrabold",
        icon: "h-10 w-10 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
