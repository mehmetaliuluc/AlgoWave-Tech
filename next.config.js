/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure we're not looking for pages directory
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Configure output for better stability
  output: 'standalone',
  // Increase timeout for slow operations
  staticPageGenerationTimeout: 120,
  // Add distDir to specify output directory
  distDir: '.next'
};

module.exports = nextConfig; 