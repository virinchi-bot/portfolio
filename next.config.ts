import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows importing images from /public cleanly
  images: {
    unoptimized: false,
  },
  // Strict mode catches animation bugs early
  reactStrictMode: true,
};

export default nextConfig;