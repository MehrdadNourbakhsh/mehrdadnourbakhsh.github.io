import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
