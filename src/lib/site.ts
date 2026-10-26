/** Site-wide constants. Bracketed values are placeholders awaiting real data. */
export const SITE = {
  name: "PLAIN",
  tagline: "더하지 않고, 필요한 것만.",
  taglineEn: "Nothing more. Just what your skin needs.",
  productName: "PDRN HYALURON SERUM 150+",
  productNameDisplay: ["PDRN Hyaluron", "Serum 150+"],
  volume: "50ml",
  /** External store URL — not yet provided. */
  storeUrl: "#",
  /** Retail price — not yet provided. */
  price: "[가격]",
} as const;

export const NAV_LINKS = [
  { href: "/story", label: "브랜드 스토리" },
  { href: "/product", label: "제품" },
  { href: "/ingredients", label: "성분 이야기" },
  { href: "/#support", label: "고객지원" },
] as const;

export const LEGAL = {
  company: "[상호]",
  ceo: "[이름]",
  businessNo: "[번호]",
  mailOrderNo: "[번호]",
  phone: "[전화번호]",
  hours: "[운영 시간]",
  email: "[문의 이메일]",
} as const;
