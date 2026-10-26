import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  weight: "45 920",
  display: "swap",
  variable: "--font-pretendard",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "PLAIN — PDRN HYALURON SERUM 150+",
    template: "PLAIN — %s",
  },
  description:
    "더하지 않고, 필요한 것만. PLAIN은 성분 중심의 미니멀 스킨케어 브랜드예요. PDRN 150ppm+, 히알루론산 5종, pH 5.5.",
  openGraph: {
    siteName: "PLAIN",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${montserrat.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
