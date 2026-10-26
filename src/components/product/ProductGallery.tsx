"use client";

import Image from "next/image";
import { useState } from "react";
import type { Shot } from "@/content/product";

/** Large product image with a row of thumbnail buttons beneath it. */
export function ProductGallery({ shots }: { shots: Shot[] }) {
  const [index, setIndex] = useState(0);
  const current = shots[index];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          preload={index === 0}
          className="object-cover"
        />
      </div>
      <div
        role="group"
        aria-label="제품 이미지 선택"
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${shots.length}, minmax(0, 1fr))` }}
      >
        {shots.map((shot, i) => {
          const selected = i === index;
          return (
            <button
              key={shot.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${shot.label} 보기`}
              aria-pressed={selected}
              className={`min-h-11 cursor-pointer border-0 bg-transparent p-0 outline-2 outline-offset-2 ${
                selected ? "outline-ink" : "outline-transparent"
              }`}
            >
              <span className="relative block aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 14vw, 7vw"
                  className="object-cover"
                />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
