/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.bravotelecom.com", "daisyui.com", "www.seiu1000.org"],
  },
  server: {
    target: "server",
    host: "192.168.10.16",
    port: 3000,
  },
};

module.exports = nextConfig;
