"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";

export type Slide = { src: string; alt: string; label: string; caption: string };

type Props = { slides: Slide[] };

/**
 * Horizontal slider showing ~3.2 cards. Prev/Next buttons, pointer drag,
 * and a gentle zoom on image hover. Scroll-snap keeps cards aligned.
 */
export function Carousel({ slides }: Props) {
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  const step = () => {
    const el = track.current;
    if (!el) return 0;
    const first = el.querySelector("li");
    return first ? first.getBoundingClientRect().width + 16 : el.clientWidth / 3;
  };
  const go = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * step(), behavior: "smooth" });

  const onDown = (e: PointerEvent<HTMLUListElement>) => {
    const el = track.current;
    if (!el) return;
    drag.current = { x: e.clientX, left: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
    el.style.scrollSnapType = "none";
  };
  const onMove = (e: PointerEvent<HTMLUListElement>) => {
    const el = track.current;
    const d = drag.current;
    if (!el || !d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4) d.moved = true;
    el.scrollLeft = d.left - dx;
  };
  const onUp = (e: PointerEvent<HTMLUListElement>) => {
    const el = track.current;
    if (!el) return;
    el.releasePointerCapture(e.pointerId);
    el.style.scrollSnapType = "";
    drag.current = null;
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current?.moved) e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-end gap-6 px-[clamp(8px,1.5vw,16px)] text-[14px] font-medium">
        <button
          type="button"
          onClick={() => go(-1)}
          className="cursor-pointer border-0 bg-transparent p-2 text-muted transition-colors hover:text-ink"
        >
          Prev.
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="cursor-pointer border-0 bg-transparent p-2 text-ink transition-colors hover:text-muted"
        >
          Next
        </button>
      </div>
      <ul
        ref={track}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onClickCapture={onClickCapture}
        className="no-scrollbar m-0 flex cursor-grab list-none gap-4 overflow-x-auto scroll-smooth px-[clamp(8px,1.5vw,16px)] pb-2 select-none active:cursor-grabbing [scroll-snap-type:x_mandatory]"
      >
        {slides.map((s) => (
          <li
            key={s.src}
            className="group w-[calc((100%-2*16px)/3.2)] shrink-0 snap-start max-md:w-[78%]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                draggable={false}
                sizes="(max-width: 768px) 78vw, 30vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <p className="mt-4 mb-2 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {s.label}
            </p>
            <p className="m-0 text-[16px] leading-[1.5]">{s.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
