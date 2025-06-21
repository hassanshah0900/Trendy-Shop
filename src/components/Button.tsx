import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  primary: "bg-btn-primary text-btn-primary-foreground",
  secondary: "bg-btn-secondary text-btn-secondary-foreground",
  outline:
    "border border-border text-primary hover:bg-btn-primary hover:text-btn-primary-foreground focus-visible:bg-btn-primary focus-visible:text-btn-primary-foreground outline-none",
};

const displays = {
  inline: "py-3 px-15",
  block: "w-full py-3",
  icon: "p-3",
};

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  display?: "inline" | "block" | "icon";
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
        "font-satoshi transition-colors rounded-full cursor-pointer font-medium",
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
