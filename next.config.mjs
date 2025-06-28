/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.hmi-tomrermester.dk',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8888',
        pathname: '/hmi-tomrermster-wp/wp-content/uploads/**',
      }
    ],
  },
  // Du kan tilføje andre konfigurationer her, hvis nødvendigt
};

export default nextConfig;