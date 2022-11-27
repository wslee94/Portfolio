/** @type {import('next').NextConfig} */
const IS_PROD = process.env.NODE_ENV === 'production';
const BASE_PATH = 'https://wslee94.github.io/portfolio';
const LOCAL_PATH = 'http://localhost:3000';

const nextConfig = {
  // basePath: IS_PROD ? '/portfolio' : '',
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: IS_PROD ? BASE_PATH : '',
  images: {
    loader: 'imgix',
    path: IS_PROD ? '/portfolio' : LOCAL_PATH,
    domains: [BASE_PATH, LOCAL_PATH],
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
