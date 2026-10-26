import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { LineReveal } from "@/components/motion/LineReveal";
import { ScrubText } from "@/components/motion/ScrubText";
import { Hero } from "@/components/home/Hero";
import { ScatterGallery } from "@/components/home/ScatterGallery";
import { FeatureCard } from "@/components/home/FeatureCard";
import { Carousel, type Slide } from "@/components/home/Carousel";
import { StatsCounter } from "@/components/home/StatsCounter";
import { HOW_TO_STEPS } from "@/content/product";
import { SITE } from "@/lib/site";

const PRINCIPLES = [
  { n: "01", title: "덜어내기", text: "불필요한 성분을 빼고 핵심 성분만 담습니다." },
  { n: "02", title: "투명하게", text: "함량과 전성분을 숫자로 공개합니다." },
  { n: "03", title: "정직하게", text: "과장된 효능 대신 성분의 역할을 설명합니다." },
];

const JOURNAL: Slide[] = [
  ...HOW_TO_STEPS.map((s, i) => ({
    src: s.src,
    alt: s.alt,
    label: `How to use · ${String(i + 1).padStart(2, "0")}`,
    caption: s.text,
  })),
  {
    src: "/images/texture-stone.webp",
    alt: "스톤 위에 펼쳐진 투명한 젤 제형과 세럼 방울",
    label: "Texture",
    caption: "끈적임 없이 빠르게 흡수되는 투명 젤. 바른 직후 다음 단계를 바로 이어갈 수 있어요.",
  },
  {
    src: "/images/model-applying.webp",
    alt: "세럼을 볼에 펴 바르는 모델",
    label: "Daily routine",
    caption: "아침 메이크업 전에도, 저녁 루틴 마지막에도 부담 없이 더하는 한 단계.",
  },
  {
    src: "/images/product-acrylic-travertine.webp",
    alt: "아크릴 블록과 트래버틴 위에 놓인 PLAIN 세럼",
    label: "Light as water",
    caption: "“Light as water, clear as it looks.”",
  },
  {
    src: "/images/ingredient-pdrn-helix.webp",
    alt: "투명한 젤 방울로 이루어진 이중나선",
    label: "Ingredient story",
    caption: "성분은 숫자로, 역할은 있는 그대로. PDRN 150ppm+의 이야기.",
  },
];

export default function HomePage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <Hero />

        {/* Intro: two columns, copy on the right */}
        <section aria-label="소개" className="px-[clamp(16px,3vw,48px)] py-[clamp(72px,9vw,140px)]">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="hidden md:block" />
            <Reveal className="flex max-w-[640px] flex-col gap-8">
              <p className="m-0 text-[clamp(22px,2.2vw,30px)] leading-[1.4] font-medium tracking-[-0.01em]">
                피부에 필요한 것만, 숨김없이. PLAIN은 성분 중심의 미니멀 스킨케어 브랜드예요.
                향료처럼 꼭 필요하지 않은 것은 빼고, PDRN과 히알루론산 두 가지에 집중한 투명 젤
                세럼 하나로 시작합니다.
              </p>
              <Button href="/story" className="self-start">
                브랜드 스토리
              </Button>
            </Reveal>
          </div>
        </section>

        <ScatterGallery />

        {/* Product showcase — full-viewport card */}
        <section
          aria-labelledby="product"
          className="flex min-h-svh items-stretch px-[clamp(8px,1.5vw,16px)] py-[clamp(8px,1.5vw,16px)]"
        >
          <Reveal
            effect="scale"
            className="relative flex min-h-[calc(100svh-clamp(16px,3vw,32px))] w-full flex-col overflow-hidden rounded-[24px] bg-cream p-[clamp(16px,2vw,28px)]"
          >
            <div className="relative z-3 flex flex-wrap items-center justify-between gap-2">
              <Button href="/product" variant="outline" size="sm" arrow={false}>
                Products
              </Button>
              <div className="flex flex-wrap gap-2">
                <Chip>PDRN 150ppm+</Chip>
                <Chip>Hyaluronic ×5</Chip>
                <Chip>pH 5.5</Chip>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col justify-center pb-[clamp(96px,14vh,160px)] max-md:pb-0">
              <Parallax speed={0.08} className="relative z-1">
                <p
                  aria-hidden="true"
                  className="m-0 text-center font-display text-[clamp(92px,23vw,330px)] leading-[0.86] font-bold tracking-[-0.04em] whitespace-nowrap text-ink"
                >
                  PLAIN<span className="text-ink-2">·</span>
                </p>
              </Parallax>
              <Parallax
                speed={-0.1}
                className="relative z-2 mt-[clamp(-150px,-11vw,-40px)] flex justify-center"
              >
                <Image
                  src="/images/product-solo.webp"
                  alt="PLAIN PDRN 하이알루론 세럼 150+ 제품 단독컷"
                  width={988}
                  height={1507}
                  sizes="(max-width: 768px) 60vw, 40vw"
                  className="h-[clamp(320px,56svh,640px)] w-auto animate-float drop-shadow-[0_28px_36px_rgba(42,40,37,0.16)]"
                />
              </Parallax>
            </div>

            <div className="absolute bottom-[clamp(16px,2vw,28px)] left-[clamp(16px,2vw,28px)] z-3 box-border flex w-[min(320px,100%)] flex-col gap-1.5 rounded-[18px] border border-line bg-cream px-[22px] pt-[22px] pb-5 max-md:static max-md:mx-auto max-md:mt-4">
              <Eyebrow>for skin · {SITE.volume}</Eyebrow>
              <h2 id="product" className="m-0 text-2xl leading-[1.3] font-medium">
                {SITE.productNameDisplay[0]}
                <br />
                {SITE.productNameDisplay[1]}
              </h2>
              <div className="mt-3.5 flex items-center justify-between gap-3">
                <span className="text-[26px] font-semibold">{SITE.price}</span>
                <Button href={SITE.storeUrl} variant="ink" size="sm">
                  구매하기
                </Button>
              </div>
            </div>
            <Link
              href="/product"
              className="absolute right-[clamp(20px,2.4vw,36px)] bottom-[clamp(20px,2.4vw,32px)] z-3 py-3 text-[15px] font-medium max-md:static max-md:block max-md:text-center"
            >
              제품 자세히 보기 →
            </Link>
          </Reveal>
        </section>

        <FeatureCard />

        {/* Statement: short bold title left, scroll-filled paragraph right */}
        <section
          aria-labelledby="statement"
          className="px-[clamp(16px,3vw,48px)] py-[clamp(72px,9vw,140px)]"
        >
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <LineReveal
                as="h2"
                id="statement"
                lines={["PLAIN은", "덜어내는 데서", "시작합니다."]}
                className="m-0 text-[clamp(28px,2.6vw,36px)] leading-[1.15] font-semibold tracking-[-0.02em]"
              />
            </Reveal>
            <div className="flex max-w-[640px] flex-col gap-10">
              <ScrubText
                text="무엇을 넣었는지보다 무엇을 뺐는지가 더 중요하다고 생각해요. 향료처럼 피부에 꼭 필요하지 않은 것은 빼고 핵심 성분만 담았습니다. 그래서 PLAIN은 형용사 대신 숫자로, 약속 대신 성분의 역할로 이야기합니다."
                className="m-0 text-[clamp(22px,2.2vw,30px)] leading-[1.4] font-medium tracking-[-0.01em]"
              />
              <Reveal as="ol" stagger={0.12} className="m-0 flex list-none flex-col border-t border-line p-0">
                {PRINCIPLES.map((p) => (
                  <li key={p.n} className="flex gap-6 border-b border-line py-5">
                    <span className="min-w-7 font-mono text-[11px] tracking-[0.12em] text-muted">{p.n}</span>
                    <div className="flex flex-col gap-1">
                      <strong className="text-[17px] font-semibold">{p.title}</strong>
                      <span className="text-[15px] leading-[1.7] text-muted">{p.text}</span>
                    </div>
                  </li>
                ))}
              </Reveal>
              <Reveal>
                <Button href="/ingredients" className="self-start">
                  성분 이야기
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* In numbers */}
        <section aria-labelledby="numbers" className="px-[clamp(16px,3vw,48px)] pb-[clamp(72px,9vw,140px)]">
          <Container size="wide" className="flex flex-col gap-10">
            <Reveal className="flex items-end justify-between gap-6">
              <h2 id="numbers" className="m-0 text-[clamp(22px,2vw,28px)] font-semibold tracking-[-0.01em]">
                숫자로 보는 PLAIN
              </h2>
              <Eyebrow>{SITE.productName}</Eyebrow>
            </Reveal>
            <StatsCounter />
          </Container>
        </section>

        {/* Stacked pair: the carousel stays put while the CTA card slides over it */}
        <div className="relative">
          <section aria-labelledby="journal" className="sticky top-0 bg-sand pt-[clamp(48px,6vw,96px)] pb-[clamp(96px,12vw,180px)]">
            <Reveal className="mb-2 flex items-center gap-6 px-[clamp(8px,1.5vw,16px)]">
              <h2 id="journal" className="m-0 text-[clamp(26px,2.6vw,36px)] font-semibold tracking-[-0.02em]">
                하루 두 번, 두 펌프
              </h2>
              <Link href="/product" className="text-[14px] text-muted no-underline hover:text-ink">
                제품 자세히 보기 ↗
              </Link>
            </Reveal>
            <Carousel slides={JOURNAL} />
          </section>

          <section
            aria-labelledby="cta"
            className="relative z-10 flex min-h-svh items-center justify-center overflow-hidden rounded-t-[28px] bg-ink px-6 py-[clamp(96px,12vw,160px)] text-paper"
          >
            <Parallax fill speed={0.1} className="absolute inset-0">
              <Image
                src="/images/model-holding.webp"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-[50%_28%] brightness-[0.45]"
              />
            </Parallax>
            <div className="relative flex max-w-[900px] flex-col items-center gap-10 text-center">
              <LineReveal
                as="h2"
                id="cta"
                lines={["지금,", "필요한 것만", "채워보세요.", "Nothing more."]}
                className="m-0 font-display text-[clamp(48px,8.5vw,136px)] leading-[0.9] font-bold tracking-[-0.035em]"
              />
              <Reveal delay={0.4} className="flex flex-col items-center gap-7">
                <p className="m-0 max-w-[420px] text-[16px] leading-[1.7] text-sand/80">
                  {SITE.productName} · {SITE.volume} · {SITE.price}
                  <br />
                  구매는 외부 스토어에서 진행돼요.
                </p>
                <Button href={SITE.storeUrl} variant="light" size="lg">
                  스토어에서 구매하기
                </Button>
              </Reveal>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
