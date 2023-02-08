/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'media.discordapp.net',
      port: '',

    }]
  }
}

module.exports = nextConfig
