import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/site";

export const alt = "PLAIN — Nothing more. Just what your skin needs. PDRN HYALURON SERUM 150+";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE = "Nothing more.\nJust what your skin needs.";

// TTF copies for ImageResponse (it can't read the site's woff2 fonts).
// Regenerate with `node scripts/fetch-og-fonts.mjs` if the Korean tagline changes.
const FONT_DIR = join(process.cwd(), "src/app/fonts/og");

async function loadAssets() {
  const [bold, semi, kr, background] = await Promise.all([
    readFile(join(FONT_DIR, "Montserrat-Bold.ttf")),
    readFile(join(FONT_DIR, "Montserrat-SemiBold.ttf")),
    readFile(join(FONT_DIR, "NotoSansKR-Regular-subset.ttf")),
    readFile(join(process.cwd(), "src/app/og-background.jpg")),
  ]);
  return {
    fonts: [
      { name: "Montserrat", data: bold, weight: 700 as const, style: "normal" as const },
      { name: "Montserrat", data: semi, weight: 600 as const, style: "normal" as const },
      { name: "Noto Sans KR", data: kr, weight: 400 as const, style: "normal" as const },
    ],
    backgroundSrc: `data:image/jpeg;base64,${background.toString("base64")}`,
  };
}

export default async function Image() {
  const { fonts, backgroundSrc } = await loadAssets();

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          background: "#B0A99E",
          color: "#2A2825",
        }}
      >
        <img
          src={backgroundSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "60% 50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 0,
            bottom: 0,
            width: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: "0.32em",
            }}
          >
            {SITE.name}
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: 44,
              lineHeight: 1.15,
              whiteSpace: "pre-line",
            }}
          >
            {HEADLINE}
          </p>
          <p style={{ margin: 0, fontFamily: "Noto Sans KR", fontSize: 24 }}>{SITE.tagline}</p>
          <p
            style={{
              margin: 0,
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: "0.24em",
            }}
          >
            {SITE.productName}
          </p>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
