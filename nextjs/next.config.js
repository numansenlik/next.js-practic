/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.google.com',
            port: '',
            pathname: '/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
          },
        ],
      },
}

module.exports = nextConfig
