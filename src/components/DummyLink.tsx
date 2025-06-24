"use client";

import { ComponentProps } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"button"> {}
export default function DummyLink({ className, children, ...props }: Props) {
  return (
    <button
      onClick={() => toast("This is a dummy link.", { closeButton: true })}
      className={twMerge(
        "text-link cursor-pointer hover:text-link-hover transition-colors focus-visible:text-link-hover outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
