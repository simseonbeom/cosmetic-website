import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** 1200px is the standard content width; 1280px is used by the header pill and product showcase. */
  size?: "default" | "wide" | "narrow" | "prose";
};

const widths = {
  default: "max-w-[1200px]",
  wide: "max-w-[1280px]",
  narrow: "max-w-[880px]",
  prose: "max-w-[760px]",
};

export function Container({ children, className = "", size = "default" }: Props) {
  return (
    <div className={`${widths[size]} mx-auto w-full ${className}`}>{children}</div>
  );
}
