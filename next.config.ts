import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // Will still allow production builds even if there are type errors
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
