import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/motion/Reveal";
import { LineReveal } from "@/components/motion/LineReveal";
import { ScrubText } from "@/components/motion/ScrubText";
import { Parallax } from "@/components/motion/Parallax";

export const metadata: Metadata = {
  title: "브랜드 스토리",
  description: "더하지 않고, 필요한 것만. PLAIN은 성분 중심의 미니멀 스킨케어 브랜드예요.",
};

const PRINCIPLES = [
  {
    src: "/images/principle-pebble.webp",
    alt: "매끈한 조약돌 하나",
    n: "01 — SUBTRACT",
    title: "덜어내기",
    text: "향료 등 불필요한 성분을 빼고 핵심 성분만 담아요.",
  },
  {
    src: "/images/principle-glass-cube.webp",
    alt: "빛을 굴절시키는 투명 유리 큐브",
    n: "02 — TRANSPARENT",
    title: "투명하게",
    text: "함량과 전성분을 숫자로 공개해요. PDRN 150ppm+, pH 5.5처럼요.",
  },
  {
    src: "/images/principle-paper-card.webp",
    alt: "아무것도 인쇄되지 않은 접힌 종이 카드",
    n: "03 — HONEST",
    title: "정직하게",
    text: "과장된 효능 대신, 각 성분이 하는 역할을 담백하게 설명해요.",
  },
];

export default function StoryPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section
          aria-labelledby="story-title"
          className="relative flex min-h-[clamp(520px,50vw,760px)] overflow-hidden bg-tan"
        >
          <Parallax fill speed={0.16} className="absolute inset-0">
            <Image
              src="/images/story-hero-linen.webp"
              alt="트래버틴 블록 위에 늘어진 오프화이트 리넨과 창문 그림자"
              fill
              preload
              sizes="100vw"
              className="object-cover object-[20%_50%]"
            />
          </Parallax>
          <Container className="relative box-border flex items-center justify-end px-6 py-16">
            <Reveal className="flex max-w-[640px] flex-col gap-5 bg-paper/88 p-[clamp(28px,4vw,48px)]">
              <Eyebrow>BRAND STORY</Eyebrow>
              <LineReveal
                as="h1"
                id="story-title"
                trigger="load"
                delay={0.3}
                lines={["Nothing more.", "Just what your", "skin needs."]}
                className="m-0 font-display text-[clamp(32px,3.6vw,52px)] leading-[0.95] font-bold tracking-[-0.03em]"
              />
              <p className="m-0 text-lg leading-[1.8]">
                피부에 필요한 것만, 숨김없이.
                <br />
                PLAIN은 성분 중심의 미니멀 스킨케어 브랜드예요.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Why */}
        <section aria-labelledby="why" className="px-6 py-[clamp(80px,11vw,160px)]">
          <Container size="prose">
            <Reveal className="flex flex-col items-center gap-7 text-center">
            <Eyebrow>WHY PLAIN</Eyebrow>
            <h2
              id="why"
              className="m-0 text-[clamp(28px,3.2vw,42px)] leading-[1.4] font-semibold"
            >
              더하지 않고, 필요한 것만.
            </h2>
            <ScrubText
              text="무엇을 넣었는지보다 무엇을 뺐는지가 더 중요하다고 생각해요. 그래서 PLAIN은 형용사 대신 숫자로, 약속 대신 성분의 역할로 이야기합니다."
              className="m-0 text-[clamp(20px,2vw,28px)] leading-[1.45] font-medium"
            />
            </Reveal>
          </Container>
        </section>

        {/* Principles */}
        <section aria-labelledby="principles" className="px-6 pb-[clamp(80px,11vw,160px)]">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <Eyebrow as="h2" id="principles">
                OUR PRINCIPLES
              </Eyebrow>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-8 gap-y-10">
              {PRINCIPLES.map((p, i) => (
                <Reveal as="article" key={p.n} delay={i * 0.14} className="flex flex-col gap-5">
                  <Figure
                    src={p.src}
                    alt={p.alt}
                    aspect="aspect-square"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    parallax={0.08}
                  />
                  <div className="flex flex-col gap-2.5">
                    <p className="m-0 font-display text-[15px] font-light text-muted">{p.n}</p>
                    <h3 className="m-0 text-2xl font-semibold">{p.title}</h3>
                    <p className="m-0 text-base leading-[1.8] text-muted">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* First product */}
        <section
          aria-labelledby="first"
          className="bg-paper px-6 py-[clamp(80px,11vw,160px)]"
        >
          <Container className="flex flex-wrap items-center gap-x-20 gap-y-12">
            <Reveal className="relative min-w-0 flex-[1_1_360px] pb-[clamp(40px,6vw,80px)]">
              <Figure
                src="/images/model-cheek.webp"
                alt="PLAIN 세럼을 볼에 대고 있는 모델"
                className="w-[86%]!"
                imgClassName="object-[50%_30%]"
                parallax={0.08}
              />
              <Parallax speed={-0.08} className="absolute right-0 bottom-0 w-[34%]">
                <Figure
                  src="/images/product-packshot.webp"
                  alt="PLAIN PDRN 하이알루론 세럼 150+"
                  className="border-8 border-paper bg-sand"
                  imgClassName="object-contain!"
                  sizes="(max-width: 768px) 34vw, 17vw"
                />
              </Parallax>
            </Reveal>
            <Reveal delay={0.12} className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
              <Eyebrow>THE FIRST PRODUCT</Eyebrow>
              <LineReveal
                as="h2"
                id="first"
                lines={["첫 번째 제품은", "두 가지 성분에서", "시작했어요"]}
                className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.15] font-semibold tracking-[-0.02em]"
              />
              <p className="m-0 text-[17px] leading-[1.8] text-muted">
                PDRN과 히알루론산. 꼭 필요한 두 가지만 남기고, 나머지는 덜어냈습니다.
              </p>
              <Button href="/product" className="self-start">
                제품 보기
              </Button>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
