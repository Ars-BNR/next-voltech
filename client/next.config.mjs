/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9375",
      },
      {
        protocol: "http",
        hostname: "server",
        port: "9375",
      },
    ],
  },
};

export default nextConfig;
