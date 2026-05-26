import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    loadPaths: ['src'],
    additionalData: `
      @use "styles/abstracts" as *;
    `
  }
};

export default nextConfig;
