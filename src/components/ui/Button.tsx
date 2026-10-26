import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ink" | "light" | "outline" | "dashed";
type Size = "sm" | "md" | "lg";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  /** Trailing arrow that slides right on hover. */
  arrow?: boolean;
};

/*
 * Reference-style buttons: light-grey rounded rectangles whose background
 * fills with ink from the left on hover (see `.btn-fill` in globals.css).
 */
const variants: Record<Variant, string> = {
  primary: "btn-fill bg-paper-2 text-ink hover:text-paper",
  outline: "btn-fill bg-paper-2 text-ink hover:text-paper",
  dashed: "btn-fill bg-paper-2 text-ink hover:text-paper",
  ink: "btn-fill btn-fill-light bg-ink text-paper hover:text-ink",
  light: "btn-fill btn-fill-light bg-paper/15 text-paper backdrop-blur-sm hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-[13px]",
  md: "min-h-12 px-5 text-[14px]",
  lg: "min-h-14 px-6 text-[15px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
  arrow = true,
}: Props) {
  const cls = `group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-[10px] font-medium no-underline transition-colors duration-500 ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      <span className="relative z-1">{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="relative z-1 inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );
  if (external || href.startsWith("http")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
