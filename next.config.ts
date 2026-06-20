import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  outputFileTracingExcludes: {
    "*": ["./public/images/**"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
