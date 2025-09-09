import * as React from "react";
import { cn } from "./utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

export function Button({ asChild, variant = "default", size = "md", className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  const variants: Record<string, string> = {
    default: "bg-neutral-900 text-white hover:bg-neutral-800",
    outline: "border border-neutral-300 text-neutral-900 hover:bg-neutral-100",
    ghost: "text-neutral-900 hover:bg-neutral-100"
  };
  const sizes: Record<string, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-base"
  };

  const classes = cn(base, variants[variant], sizes[size], "rounded-2xl", className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      className: cn((children as any).props?.className, classes)
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
