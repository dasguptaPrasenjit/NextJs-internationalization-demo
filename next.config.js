/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // This is important for i18n static export
  trailingSlash: true,
};

module.exports = nextConfig;