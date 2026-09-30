import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static (no server rendering, API routes, or next/image),
  // so we export plain HTML. This serves reliably on Vercel and any static host.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
