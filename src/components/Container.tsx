import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function Container({ children }: Props) {
  return <div className="max-w-[1200px] w-full mx-auto px-4">{children}</div>;
}
