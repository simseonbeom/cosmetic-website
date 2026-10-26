import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Use `dark` on ink-colored sections. */
  tone?: "light" | "dark";
  as?: "p" | "h2" | "span";
  id?: string;
  className?: string;
};

/** Small monospace uppercase label above headings. */
export function Eyebrow({ children, tone = "light", as = "p", id, className = "" }: Props) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={`m-0 font-mono text-[11px] font-medium tracking-[0.18em] uppercase ${
        tone === "dark" ? "text-muted-dark" : "text-muted"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
