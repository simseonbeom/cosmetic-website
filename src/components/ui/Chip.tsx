import type { ReactNode } from "react";

/** Small outlined pill used for spec badges. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-h-10 items-center rounded-pill border border-line bg-cream px-4 text-sm">
      {children}
    </span>
  );
}
