import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles image optimization natively
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Use Vercel's optimized formats
    formats: ["image/avif", "image/webp"],
  },
  // Enable strict mode for better React 19 compatibility
  reactStrictMode: true,
  // Compress responses
  compress: true,
  // Power header off for cleaner responses
  poweredByHeader: false,
};

export default nextConfig;
