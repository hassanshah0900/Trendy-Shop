import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"input"> {
  icon?: ReactNode;
}
export default function Input({ icon, className, ...props }: Props) {
  if (icon)
    return (
      <input
        className={twMerge(
          "py-3 px-5 bg-secondary text-secondary-foreground rounded-full w-full placeholder:text-body",
          className
        )}
        {...props}
      />
    );
  return (
    <div
      className={twMerge(
        "flex py-3 px-5 has-[input:focus-visible]:outline-white outline-2 outline-offset-2 text-secondary-foreground bg-secondary justify-start items-center rounded-full gap-2 ",
        className
      )}
    >
      <span className="text-body text-xl">{icon}</span>
      <input className="w-full outline-none" {...props} />
    </div>
  );
}
