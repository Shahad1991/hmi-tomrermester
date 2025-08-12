/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.hmi-tomrermester.dk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hmi-tomrermester.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hmi-tomrermester.dk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hmi-tomrermester.dk',
        port: '',
        pathname: '/**',
      }
    ],
    // Fallback for legacy domains config
    domains: ['api.hmi-tomrermester.dk', 'hmi-tomrermester.vercel.app', 'hmi-tomrermester.dk', 'www.hmi-tomrermester.dk'],
  },
};

export default nextConfig;