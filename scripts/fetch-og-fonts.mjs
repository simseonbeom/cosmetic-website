/**
 * Downloads the TTF fonts used by src/app/opengraph-image.tsx into src/app/fonts/og/.
 * ImageResponse (Satori) can't read woff2, so the OG image uses these TTFs instead
 * of the site's web fonts. Montserrat is fetched in full; Noto Sans KR is subset to
 * the Korean tagline, so re-run this script if that copy changes:
 *
 *   node scripts/fetch-og-fonts.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "src/app/fonts/og");

// Keep in sync with SITE.tagline in src/lib/site.ts.
const KO_TAGLINE = "더하지 않고, 필요한 것만.";

const FONTS = [
  { file: "Montserrat-Bold.ttf", family: "Montserrat:wght@700" },
  { file: "Montserrat-SemiBold.ttf", family: "Montserrat:wght@600" },
  { file: "NotoSansKR-Regular-subset.ttf", family: "Noto+Sans+KR:wght@400", text: KO_TAGLINE },
];

async function fetchTtf({ family, text }) {
  // `family` keeps its literal `+` separators; only `text` is encoded.
  const query = `family=${family}${text ? `&text=${encodeURIComponent(text)}` : ""}`;
  // Node's default user agent makes Google Fonts serve TrueType.
  const css = await (await fetch(`https://fonts.googleapis.com/css2?${query}`)).text();
  // Subset responses omit the format() hint; both forms serve TrueType here.
  const match = css.match(/src: url\((.+?)\)/);
  if (!match) throw new Error(`No font source in CSS for ${family}:\n${css}`);
  return Buffer.from(await (await fetch(match[1])).arrayBuffer());
}

await mkdir(outDir, { recursive: true });
for (const font of FONTS) {
  const data = await fetchTtf(font);
  await writeFile(join(outDir, font.file), data);
  console.log(`${font.file}  ${(data.length / 1024).toFixed(1)} KB`);
}
