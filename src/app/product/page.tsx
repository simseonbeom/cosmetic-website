import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/motion/Reveal";
import { LineReveal } from "@/components/motion/LineReveal";
import { Parallax } from "@/components/motion/Parallax";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Disclosure } from "@/components/product/Disclosure";
import { FaqList } from "@/components/product/FaqList";
import { FAQS, HOW_TO_STEPS, PRODUCT_NOTICE, PRODUCT_SHOTS } from "@/content/product";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "제품 상세",
  description: "PDRN과 히알루론산, 두 가지에 집중한 투명 젤 세럼. PDRN HYALURON SERUM 150+ · 50ml.",
};

const SPECS = [
  { value: "150", unit: "ppm+", label: "PDRN" },
  { value: "5", unit: "종", label: "히알루론산" },
  { value: "pH 5.5", label: "약산성" },
  { value: "0", label: "무향 (향료 무첨가)" },
];

const INGREDIENTS = [
  {
    src: "/images/ingredient-pdrn-helix.webp",
    alt: "투명한 젤 방울이 만든 이중나선",
    eyebrow: "SODIUM DNA · 150ppm+",
    title: "PDRN",
    text: "연어에서 유래한 PDRN을 150ppm 이상 담았어요. 피부 컨디션을 케어하는 이 세럼의 중심 성분이에요.",
  },
  {
    src: "/images/ingredient-ha-droplets.webp",
    alt: "크기가 다른 투명한 물방울 다섯 개",
    eyebrow: "HYALURONIC ACID · 5 TYPES",
    title: "히알루론산 5종",
    text: "분자 크기가 다른 히알루론산 5종이 피부에 수분을 층층이 채우고, 오래 머물도록 도와요.",
  },
];

function BuyButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.storeUrl}
      className={`inline-flex items-center justify-center rounded-pill bg-ink-2 font-semibold text-paper no-underline hover:bg-ink hover:text-paper ${className}`}
    >
      스토어에서 구매하기
    </a>
  );
}

export default function ProductPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        {/* Gallery + purchase panel */}
        <section
          aria-labelledby="pname"
          className="px-6 pt-[clamp(104px,12vw,160px)] pb-[clamp(80px,10vw,140px)]"
        >
          <Container className="flex flex-wrap items-start gap-x-20 gap-y-12">
            <div className="min-w-0 flex-[1_1_420px]">
              <ProductGallery shots={PRODUCT_SHOTS} />
            </div>
            <div className="sticky top-24 flex min-w-0 flex-[1_1_400px] flex-col gap-6">
              <Eyebrow>PLAIN · SERUM</Eyebrow>
              <LineReveal
                as="h1"
                id="pname"
                trigger="load"
                delay={0.2}
                lines={["PDRN HYALURON", "SERUM 150+"]}
                className="m-0 font-display text-[clamp(32px,3.6vw,48px)] leading-[0.95] font-bold tracking-[-0.02em]"
              />
              <p className="m-0 text-lg leading-[1.7] text-muted">
                PDRN과 히알루론산, 두 가지에 집중한 투명 젤 세럼
              </p>
              <div className="flex items-baseline justify-between gap-4 border-y border-line py-5">
                <span className="text-base text-muted">{SITE.volume}</span>
                <span className="text-2xl font-semibold">{SITE.price}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SPECS.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1 bg-paper p-[18px]">
                    <span className="font-display text-[32px] leading-none font-light">
                      {s.value}
                      {s.unit && <span className="text-lg">{s.unit}</span>}
                    </span>
                    <span className="text-sm text-muted">{s.label}</span>
                  </div>
                ))}
              </div>
              <BuyButton className="flex min-h-14 text-[17px]" />
              <p className="m-0 text-[13px] text-muted">구매는 외부 스토어에서 진행돼요.</p>
            </div>
          </Container>
        </section>

        {/* Ingredients */}
        <section
          aria-labelledby="ing"
          className="bg-paper px-6 py-[clamp(80px,10vw,140px)]"
        >
          <Container className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-3">
              <Eyebrow>INGREDIENTS</Eyebrow>
              <LineReveal
                as="h2"
                id="ing"
                lines={["두 가지 성분,", "각자의 역할"]}
                className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.1] font-semibold tracking-[-0.02em]"
              />
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              {INGREDIENTS.map((item, i) => (
                <Reveal as="article" key={item.title} delay={i * 0.14} className="flex flex-col bg-sand">
                  <Figure
                    src={item.src}
                    alt={item.alt}
                    aspect="aspect-[16/10]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    parallax={0.1}
                  />
                  <div className="flex flex-col gap-3 p-8">
                    <Eyebrow className="tracking-[0.2em]!">{item.eyebrow}</Eyebrow>
                    <h3 className="m-0 text-[22px] font-semibold">{item.title}</h3>
                    <p className="m-0 text-base leading-[1.8] text-muted">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6">
              <p className="m-0 text-base font-semibold">이런 피부에 추천해요</p>
              <p className="m-0 text-base text-muted">건조하고 탄력이 떨어진 피부 · 모든 피부 타입</p>
            </Reveal>
          </Container>
        </section>

        {/* Routine */}
        <section aria-labelledby="routine" className="bg-paper-2">
          <div className="flex flex-wrap items-stretch">
            <div className="relative min-h-[clamp(460px,44vw,700px)] min-w-0 flex-[1_1_360px] overflow-hidden">
              <Parallax fill speed={0.12} className="absolute inset-0">
                <Image
                  src="/images/model-applying.webp"
                  alt="세럼을 볼에 펴 바르는 모델"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[50%_30%]"
                />
              </Parallax>
            </div>
            <Reveal className="flex min-w-0 flex-[1_1_360px] flex-col justify-center gap-5 px-[clamp(24px,5vw,72px)] py-[clamp(56px,7vw,96px)]">
              <Eyebrow>DAILY ROUTINE</Eyebrow>
              <LineReveal
                as="h2"
                id="routine"
                lines={["매일의 루틴에,", "가볍게 한 단계"]}
                className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.1] font-semibold tracking-[-0.02em]"
              />
              <p className="m-0 text-[17px] leading-[1.8] text-muted">
                끈적임 없는 투명 젤이라 아침 메이크업 전에도, 저녁 루틴 마지막에도 부담 없이 더할
                수 있어요.
              </p>
            </Reveal>
            <div className="relative min-h-[clamp(460px,44vw,700px)] min-w-0 flex-[1_1_360px] overflow-hidden">
              <Parallax fill speed={0.12} className="absolute inset-0">
                <Image
                  src="/images/model-holding.webp"
                  alt="PLAIN 세럼을 두 손으로 들고 있는 모델"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[50%_30%]"
                />
              </Parallax>
            </div>
          </div>
        </section>

        {/* How to use */}
        <section aria-labelledby="use" className="px-6 py-[clamp(80px,10vw,140px)]">
          <Container className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-3">
              <Eyebrow>HOW TO USE</Eyebrow>
              <h2 id="use" className="m-0 text-[clamp(26px,2.8vw,36px)] font-semibold">
                하루 두 번, 두 펌프
              </h2>
            </Reveal>
            <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 p-0">
              {HOW_TO_STEPS.map((step, i) => (
                <Reveal as="li" key={step.src} delay={i * 0.12} className="flex flex-col gap-3.5">
                  <Figure
                    src={step.src}
                    alt={step.alt}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    parallax={0.08}
                  />
                  <p className="m-0 text-base leading-[1.6]">
                    <strong className="mr-2 font-display font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </strong>
                    {step.text}
                  </p>
                </Reveal>
              ))}
              <Reveal as="li" delay={0.36} className="flex flex-col gap-3.5">
                <Figure
                  src="/images/texture-stone.webp"
                  alt="스톤 위에 펼쳐진 투명한 젤 제형"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  parallax={0.08}
                />
                <p className="m-0 text-base leading-[1.6] text-muted">
                  끈적임 없이 빠르게 흡수되는 투명 젤 제형
                </p>
              </Reveal>
            </ol>
          </Container>
        </section>

        {/* Info: full ingredients, notice, FAQ */}
        <section
          aria-labelledby="info"
          className="bg-paper px-6 py-[clamp(80px,10vw,140px)]"
        >
          <Container size="narrow" className="flex flex-col gap-14">
            <Reveal className="flex flex-col gap-4">
              <h2 id="info" className="m-0 text-[clamp(24px,2.4vw,30px)] font-semibold">
                전성분
              </h2>
              <div className="border-t border-ink">
                <Disclosure summary="전성분 보기">
                  <p className="m-0">[전성분 목록 — 성분명을 함량 순으로 입력]</p>
                </Disclosure>
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-4">
              <h2 className="m-0 text-[clamp(24px,2.4vw,30px)] font-semibold">제품 정보제공고시</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-[15px] leading-[1.7]">
                  <tbody>
                    {PRODUCT_NOTICE.map((row, i) => (
                      <tr
                        key={row.label}
                        className={`border-b border-line ${i === 0 ? "border-t border-t-ink" : ""}`}
                      >
                        <th
                          scope="row"
                          className="w-[30%] px-3 py-4 text-left align-top font-semibold"
                        >
                          {row.label}
                        </th>
                        <td className="px-3 py-4 text-muted">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-4">
              <h2 className="m-0 text-[clamp(24px,2.4vw,30px)] font-semibold">자주 묻는 질문</h2>
              <FaqList faqs={FAQS} />
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />

      {/* Mobile purchase bar */}
      <div className="sticky bottom-0 z-20 hidden items-center justify-between gap-3 border-t border-line bg-paper px-4 py-3 max-sm:flex">
        <div className="flex min-w-0 flex-col">
          <span className="truncate font-display text-[13px] font-bold tracking-[0.04em]">
            {SITE.productName}
          </span>
          <span className="text-[13px] text-muted">
            {SITE.volume} · {SITE.price}
          </span>
        </div>
        <BuyButton className="min-h-12 flex-none px-5 text-[15px]" />
      </div>
    </PageShell>
  );
}
