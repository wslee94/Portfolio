/** @type {import('next').NextConfig} */
const IS_PROD = process.env.NODE_ENV === "production";
const BASE_PATH = "https://wslee94.github.io/portfolio";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: IS_PROD ? BASE_PATH : "",
  images: {
    loader: "imgix",
    path: BASE_PATH,
  },
  env: {
    basePath: IS_PROD ? BASE_PATH : BASE_PATH,
  },
};

module.exports = nextConfig;
