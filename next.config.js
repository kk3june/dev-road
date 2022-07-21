/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['image.kyobobook.co.kr', 'img.ridicdn.net', 'image.yes24.com'],
  },
};

module.exports = nextConfig;
