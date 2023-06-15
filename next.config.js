/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lereacteur-bootcamp-api.herokuapp.com",
      },
    ],
  },
};

module.exports = nextConfig;
