/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images: {
    unoptimized:true,
    remotePatterns: [{
      protocol:'https',
      hostname: 'trialanderror.ai'
    }]
  },
};

module.exports = nextConfig;
