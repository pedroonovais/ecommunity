/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:slug*', 
          destination: 'http://179.111.200.106:8888/api/:slug*',
        },
      ]
    },
  }
  
  module.exports = nextConfig
  