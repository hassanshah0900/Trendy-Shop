import NextLink from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<typeof NextLink> {}
export default function Link({ className, children, ...props }: Props) {
  return (
    <NextLink
      className={twMerge(
        "text-link hover:text-link-hover transition-colors focus-visible:text-link-hover outline-none",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
