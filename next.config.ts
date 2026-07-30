import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.0.3"],
  reactCompiler: true,
  images: {
    /*
     * DEV ONLY: placeholder photography host. Remove these patterns once real
     * club assets live in `public/` and `lib/content.ts` points at local paths.
     */
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "fastly.picsum.photos", pathname: "/**" },
    ],
  },
};

export default nextConfig;
