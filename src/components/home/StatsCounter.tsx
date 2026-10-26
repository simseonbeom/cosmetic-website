"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Stat = { value: number; decimals: number; suffix?: string; title: string; caption: string };

const STATS: Stat[] = [
  { value: 150, decimals: 0, suffix: "+", title: "PDRN 150ppm 이상", caption: "Sodium DNA 함량" },
  { value: 5, decimals: 0, title: "히알루론산 5종", caption: "분자 크기가 다른 5가지" },
  { value: 5.5, decimals: 1, title: "pH 5.5 약산성", caption: "피부와 가까운 산도" },
];

const SUB = [
  { k: "향료", v: "0" },
  { k: "용량", v: "50ml" },
  { k: "전성분 공개", v: "100%" },
  { k: "제형", v: "투명 젤" },
];

/**
 * Thin-rule layout: large figures count up when the block enters, then the
 * small indicators beneath stagger in.
 */
export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((num) => {
        const target = Number(num.dataset.count);
        const decimals = Number(num.dataset.decimals);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power3.out",
          onUpdate: () => (num.textContent = obj.v.toFixed(decimals)),
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        });
      });
      gsap.fromTo(
        el.querySelectorAll("[data-sub]"),
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.4,
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="grid border-t border-line md:grid-cols-3">
        {STATS.map((s, i) => (
          <div
            key={s.title}
            className={`flex flex-col gap-3 py-10 pr-6 ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""} max-md:border-b max-md:border-line`}
          >
            <p className="m-0 font-display text-[clamp(80px,8vw,120px)] leading-[0.9] font-light tracking-[-0.03em]">
              <span data-count={s.value} data-decimals={s.decimals}>
                {s.value.toFixed(s.decimals)}
              </span>
              {s.suffix && <span className="text-[0.4em]">{s.suffix}</span>}
            </p>
            <p className="m-0 text-[16px] font-semibold">{s.title}</p>
            <p className="m-0 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">{s.caption}</p>
          </div>
        ))}
      </div>
      <dl className="m-0 grid grid-cols-2 gap-y-6 border-t border-line pt-6 md:grid-cols-4">
        {SUB.map((s) => (
          <div key={s.k} data-sub className="flex flex-col gap-1">
            <dt className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">{s.k}</dt>
            <dd className="m-0 text-[18px] font-medium">{s.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
