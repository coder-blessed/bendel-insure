import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.3"],

  reactCompiler: true,

  images: {
    remotePatterns: [
      // Existing placeholders
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },

      // Football logos
      {
        protocol: "https",
        hostname: "assets.football-logos.cc",
      },
      {
        protocol: "https",
        hostname: "r2.thesportsdb.com",
      },
      {
        protocol: "https",
        hostname: "galaxytv-api-s3-prod.s3.eu-west-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;