import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure image optimization if needed
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable compression
  compress: true,
};

export default nextConfig;
