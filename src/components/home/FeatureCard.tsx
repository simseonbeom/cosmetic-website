import Link from "next/link";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const LINKS = [
  { label: "PDRN · Sodium DNA", value: "150ppm+", href: "/ingredients" },
  { label: "Hyaluronic acid", value: "5종", href: "/ingredients" },
];

/** Black rounded card: product film left, title/description plus small link cards right. */
export function FeatureCard() {
  return (
    <section aria-labelledby="duo" className="px-[clamp(8px,1.5vw,16px)] py-[clamp(24px,4vw,64px)]">
      <Reveal
        effect="scale"
        className="grid overflow-hidden rounded-[24px] bg-ink text-sand md:grid-cols-2"
      >
        <div className="relative min-h-[360px] overflow-hidden md:min-h-[640px]">
          <Parallax fill speed={0.1} className="absolute inset-0">
            <BackgroundVideo
              src="/video/serum-portrait.mp4"
              poster="/video/serum-portrait-poster.jpg"
              position="50% 40%"
            />
          </Parallax>
        </div>
        <div className="flex flex-col justify-between gap-12 p-[clamp(24px,4vw,56px)]">
          <div className="flex flex-col gap-5">
            <Eyebrow tone="dark">Two ingredients</Eyebrow>
            <h2
              id="duo"
              className="m-0 font-display text-[clamp(32px,4vw,56px)] leading-[0.95] font-bold tracking-[-0.03em]"
            >
              두 가지에만
              <br />
              집중했어요
            </h2>
            <p className="m-0 max-w-[420px] text-[16px] leading-[1.8] text-muted-dark">
              연어 유래 PDRN으로 피부 컨디션을 케어하고, 분자 크기가 다른 히알루론산 5종이 수분을
              층층이 채워요. 향료처럼 꼭 필요하지 않은 것은 덜어냈습니다.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="group flex min-h-[140px] flex-col justify-between rounded-2xl border border-line-dark bg-sand/5 p-5 text-sand no-underline transition-colors hover:bg-sand/10 hover:text-sand"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                  {l.label}
                </span>
                <span className="flex items-end justify-between gap-3">
                  <span className="font-display text-3xl font-light">{l.value}</span>
                  <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
