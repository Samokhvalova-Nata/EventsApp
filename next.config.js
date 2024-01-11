/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'hydeparkwinterwonderland.com',
        port: '',
      },
    ],
  },
}


module.exports = nextConfig
