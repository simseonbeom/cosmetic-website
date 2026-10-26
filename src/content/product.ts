export type Shot = {
  src: string;
  width: number;
  height: number;
  label: string;
  alt: string;
};

/** Product gallery shots, in display order. */
export const PRODUCT_SHOTS: Shot[] = [
  {
    src: "/images/product-pedestal.webp",
    width: 1120,
    height: 1400,
    label: "히어로 컷",
    alt: "원기둥 받침대 위에 놓인 PLAIN 세럼",
  },
  {
    src: "/images/product-acrylic-travertine.webp",
    width: 1120,
    height: 1400,
    label: "오브제 컷",
    alt: "아크릴 블록과 트래버틴 위에 놓인 PLAIN 세럼",
  },
  {
    src: "/images/product-water.webp",
    width: 1120,
    height: 1400,
    label: "워터 컷",
    alt: "잔잔한 물결 위에 선 PLAIN 세럼",
  },
  {
    src: "/images/product-gel-splash.webp",
    width: 1120,
    height: 1400,
    label: "젤 스플래시 컷",
    alt: "투명한 젤 물결에 둘러싸인 PLAIN 세럼",
  },
  {
    src: "/images/texture-stone.webp",
    width: 1120,
    height: 1400,
    label: "텍스처 컷",
    alt: "스톤 위에 펼쳐진 투명한 젤 제형과 세럼",
  },
  {
    src: "/images/model-holding.webp",
    width: 1194,
    height: 1600,
    label: "모델 컷 1",
    alt: "PLAIN 세럼을 두 손으로 들고 있는 모델",
  },
  {
    src: "/images/model-cheek.webp",
    width: 1194,
    height: 1600,
    label: "모델 컷 2",
    alt: "PLAIN 세럼을 볼에 대고 있는 모델",
  },
];

export const FAQS = [
  {
    q: "다른 세럼과 함께 써도 되나요?",
    a: "네, 함께 쓸 수 있어요. 토너 다음 단계에 PLAIN 세럼을 먼저 바르고, 이후 쓰시던 제품을 이어서 발라 주세요.",
  },
  {
    q: "민감한 피부도 쓸 수 있나요?",
    a: "향료를 넣지 않은 pH 5.5 약산성 포뮬러예요. 처음 쓰실 때는 귀 뒤처럼 좁은 부위에 먼저 발라 보고 사용해 주세요.",
  },
  {
    q: "개봉 후 얼마나 쓸 수 있나요?",
    a: "개봉 후 [○개월] 안에 사용하는 것을 권장해요. 직사광선을 피해 서늘한 곳에 보관해 주세요.",
  },
];

/** 제품 정보제공고시 rows. Bracketed values are placeholders. */
export const PRODUCT_NOTICE: { label: string; value: string }[] = [
  { label: "용량", value: "50ml" },
  { label: "사용기한", value: "[제조일로부터 ○개월 / 개봉 후 ○개월]" },
  { label: "제조국", value: "[제조국]" },
  { label: "제조업자", value: "[제조업자명]" },
  { label: "책임판매업자", value: "[책임판매업자명]" },
  {
    label: "사용 시 주의사항",
    value:
      "화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은 반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우 전문의 등과 상담할 것. 상처가 있는 부위 등에는 사용을 자제할 것. 어린이의 손이 닿지 않는 곳에 보관할 것. 직사광선을 피해서 보관할 것.",
  },
];

export const HOW_TO_STEPS = [
  {
    src: "/images/howto-1-pump.webp",
    alt: "펌프를 눌러 손끝에 세럼을 덜어내는 모습",
    text: "토너로 피부 결을 정돈한 뒤",
  },
  {
    src: "/images/howto-2-spread.webp",
    alt: "손끝 사이로 투명한 젤 세럼을 펴는 모습",
    text: "1~2펌프를 손끝에 덜어",
  },
  {
    src: "/images/howto-3-pat.webp",
    alt: "손등에 손끝으로 톡톡 두드려 흡수시키는 모습",
    text: "톡톡 두드려 흡수시켜요",
  },
];
