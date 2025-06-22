import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"input"> {
  icon?: ReactNode;
}
export default function Input({ icon, className, ...props }: Props) {
  if (!icon)
    return (
      <input
        className={twMerge(
          "py-2 md:py-3 px-3 md:px-5 bg-secondary text-secondary-foreground rounded-full w-full placeholder:text-body",
          className
        )}
        {...props}
      />
    );
  return (
    <div
      className={twMerge(
        "flex py-2 md:py-3 px-3 md:px-5 text-secondary-foreground bg-secondary justify-start items-center rounded-full gap-2 w-full",
        className
      )}
    >
      <span className="text-body text-xl">{icon}</span>
      <input className="w-full outline-none" {...props} />
    </div>
  );
}
