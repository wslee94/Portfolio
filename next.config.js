/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "https://wslee94.github.io/portfolio",
  },
};

module.exports = nextConfig;
