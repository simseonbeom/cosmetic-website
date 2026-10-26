import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/cosmetic-website") when hosting under a
// sub-path such as GitHub Pages; leave unset for local dev or a root domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: every route is prerendered into ./out.
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
  // Cache Components / partial prerendering are not available in export mode.
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
