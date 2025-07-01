/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.hmi-tomrermester.dk'], // Tillad billeder fra underdomænet
  },
};

export default nextConfig;