import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Needed when the dev site is opened through the LAN/WSL address instead of localhost.
  // Without this, Next blocks client chunks/HMR and all client-side interactions appear broken.
  allowedDevOrigins: ["172.30.128.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
