"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /**
   * Fraction of scroll distance the content lags behind by. 0.1 is subtle,
   * 0.25 is pronounced. Negative values move with the scroll instead.
   */
  speed?: number;
  /**
   * For content clipped by an `overflow-hidden` parent (cover images):
   * the inner layer is scaled up so the drift never exposes the edges.
   */
  fill?: boolean;
  className?: string;
};

/** Shifts its content vertically against the scroll for a depth effect. */
export function Parallax({ children, speed = 0.12, fill = false, className = "" }: Props) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scale = fill ? 1 + Math.abs(speed) * 2.2 : 1;
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = o.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -vh || r.top > vh * 2) return;
      const offset = r.top + r.height / 2 - vh / 2;
      const y = -offset * speed;
      i.style.transform =
        `translate3d(0, ${y.toFixed(1)}px, 0)` + (scale !== 1 ? ` scale(${scale})` : "");
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
      i.style.transform = "";
    };
  }, [speed, fill]);

  return (
    <div ref={outer} className={className}>
      <div ref={inner} className={fill ? "absolute inset-0 will-change-transform" : "will-change-transform"}>
        {children}
      </div>
    </div>
  );
}
