/** @type {import('next').NextConfig} */
const IS_PROD = process.env.NODE_ENV === 'production';
const BASE_PATH = 'https://wslee94.github.io/portfolio';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: IS_PROD ? BASE_PATH : '',
  images: {
    domains: [IS_PROD ? 'https://wslee94.github.io/portfolio/' : 'http://localhost:3000/'],
  },
  env: {
    basePath: IS_PROD ? BASE_PATH : '',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
