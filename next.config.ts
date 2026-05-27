import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    loadPaths: ['src'],
    additionalData: `
      @use "styles/abstracts/tokens" as *;
      @use "styles/abstracts/_mixins.scss" as *;
    `
  }
}

export default nextConfig
