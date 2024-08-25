/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    baseUrl: process.env.API_ROOT || "http://localhost:8000",
  },
};

export default nextConfig;
