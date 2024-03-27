/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Fran',
    description: 'Test workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://flopez9t-systems.github.io/kasm-tsystems/',
    contactUrl: 'https://github.com/flopez9t-systems/kasm-tsystems/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-tsystems/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
