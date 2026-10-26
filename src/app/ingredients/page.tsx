import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "성분 이야기",
  description: "PLAIN PDRN HYALURON SERUM 150+에 담은 성분과, 일부러 담지 않은 것을 소개해요.",
};

const BASICS = [
  { n: "5.5", title: "pH 5.5 약산성", text: "피부와 가까운 약산성으로 맞췄어요." },
  { n: "0", title: "향료 무첨가", text: "꼭 필요하지 않은 향료는 덜어냈어요." },
  { n: "100%", title: "전성분 공개", text: "제품 페이지에서 전성분을 그대로 확인할 수 있어요." },
];

/** Oversized Montserrat figure with a small unit, e.g. 150ppm+. */
function BigNumber({ value, unit }: { value: string; unit: string }) {
  return (
    <p className="m-0 font-display text-[clamp(72px,8vw,112px)] leading-none font-light text-ink-2">
      {value}
      <span className="text-[0.32em]">{unit}</span>
    </p>
  );
}

export default function IngredientsPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        {/* Title */}
        <section
          aria-labelledby="ing-title"
          className="px-6 pt-[clamp(128px,16vw,200px)] pb-[clamp(56px,7vw,96px)]"
        >
          <Container>
            <Reveal className="flex flex-col gap-6">
            <Eyebrow>INGREDIENT STORY</Eyebrow>
            <LineReveal
              as="h1"
              id="ing-title"
              trigger="load"
              delay={0.2}
              lines={["성분은 숫자로,", "역할은 있는 그대로."]}
              className="m-0 max-w-[900px] font-display text-[clamp(40px,6vw,88px)] leading-[0.95] font-bold tracking-[-0.03em]"
            />
            <ScrubText
              text="PLAIN PDRN HYALURON SERUM 150+에 담은 성분과, 일부러 담지 않은 것을 소개해요."
              className="m-0 max-w-[640px] text-[clamp(18px,1.6vw,22px)] leading-[1.6] font-medium"
            />
            </Reveal>
          </Container>
        </section>

        {/* PDRN */}
        <section aria-labelledby="pdrn-h" className="px-6 pb-[clamp(80px,11vw,160px)]">
          <Container className="flex flex-wrap items-center gap-x-20 gap-y-12">
            <Reveal className="min-w-0 flex-[1_1_380px]">
              <Figure
                src="/images/ingredient-pdrn-helix.webp"
                alt="투명한 젤 방울로 이루어진 이중나선"
                preload
                parallax={0.12}
              />
            </Reveal>
            <Reveal delay={0.12} className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
              <BigNumber value="150" unit="ppm+" />
              <h2
                id="pdrn-h"
                className="m-0 font-display text-[clamp(26px,2.8vw,36px)] font-bold"
              >
                PDRN <span className="font-normal text-muted">Sodium DNA</span>
              </h2>
              <p className="m-0 text-[17px] leading-[1.9] text-muted">
                연어에서 유래한 DNA 성분이에요. 이 세럼에는 PDRN을 150ppm 이상 담아, 피부
                컨디션을 케어하는 중심 성분으로 삼았어요.
              </p>
              <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-line pt-5 text-[15px]">
                <dt className="font-semibold">성분명</dt>
                <dd className="m-0 text-muted">Sodium DNA</dd>
                <dt className="font-semibold">유래</dt>
                <dd className="m-0 text-muted">연어</dd>
                <dt className="font-semibold">함량</dt>
                <dd className="m-0 text-muted">150ppm 이상</dd>
              </dl>
            </Reveal>
          </Container>
        </section>

        {/* Hyaluronic acid */}
        <section
          aria-labelledby="ha-h"
          className="bg-paper px-6 py-[clamp(80px,11vw,160px)]"
        >
          <Container className="flex flex-wrap-reverse items-center gap-x-20 gap-y-12">
            <Reveal delay={0.12} className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
              <BigNumber value="5" unit="types" />
              <h2 id="ha-h" className="m-0 text-[clamp(26px,2.8vw,36px)] font-semibold">
                히알루론산 5종
              </h2>
              <p className="m-0 text-[17px] leading-[1.9] text-muted">
                분자 크기가 다른 히알루론산 5종을 함께 담았어요. 크기가 다른 만큼 머무는 층도
                달라서, 수분을 층층이 채우고 오래 머물도록 도와요.
              </p>
              <p className="m-0 border-t border-line pt-5 text-[15px] text-muted">
                [5종 히알루론산 성분명 입력]
              </p>
            </Reveal>
            <Reveal className="min-w-0 flex-[1_1_380px]">
              <Figure
                src="/images/ingredient-ha-droplets.webp"
                alt="크기가 다른 투명한 물방울 다섯 개가 대각선으로 떠 있는 모습"
                parallax={0.12}
              />
            </Reveal>
          </Container>
        </section>

        {/* Basics */}
        <section aria-labelledby="left-out" className="px-6 py-[clamp(80px,11vw,160px)]">
          <Container className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-3">
              <Eyebrow>THE BASICS</Eyebrow>
              <LineReveal
                as="h2"
                id="left-out"
                lines={["그리고,", "기본에 충실하게"]}
                className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.1] font-semibold tracking-[-0.02em]"
              />
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
              {BASICS.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.12} className="flex flex-col gap-3.5 bg-paper px-8 py-10">
                  <p className="m-0 font-display text-[56px] leading-none font-light">{b.n}</p>
                  <h3 className="m-0 text-xl font-semibold">{b.title}</h3>
                  <p className="m-0 text-base leading-[1.8] text-muted">{b.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <Button href="/product" className="self-start">
                전성분 확인하기
              </Button>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
