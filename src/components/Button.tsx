import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  primary:
    "bg-btn-primary text-btn-primary-foreground focus-visible:outline-btn-primary outline-offset-2",
  secondary: "bg-btn-secondary text-btn-secondary-foreground",
  outline:
    "border border-border bg-btn-secondary text-btn-secondary-foreground hover:bg-btn-primary hover:text-btn-primary-foreground focus-visible:bg-btn-primary focus-visible:text-btn-primary-foreground outline-none",
  destructive:
    "border border-destructive text-destructive hover:bg-destructive hover:text-secondary focus-visible:bg-destructive focus-visible:text-secondary outline-none",
};

const displays = {
  inline: "py-2 sm:py-3 px-12 sm:px-15",
  block: "w-full py-2 sm:py-3",
  iconRound: "p-2 md:p-3",
  iconSquare: "p-2 md:p-3 rounded-md",
};

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  display?: "inline" | "block" | "iconRound" | "iconSquare";
}
export default function Button({
  variant = "primary",
  display = "inline",
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={twMerge(
        "font-satoshi transition-colors rounded-full cursor-pointer font-medium h-max",
        displays[display],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
