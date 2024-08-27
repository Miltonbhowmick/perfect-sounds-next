/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_API_ROOT || "http://localhost:8000",
  },
};

export default nextConfig;
