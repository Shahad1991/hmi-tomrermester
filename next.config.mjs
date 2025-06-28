/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.hmi-tomrermester.dk',
        // Fjern port da det er standard HTTPS (443)
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;