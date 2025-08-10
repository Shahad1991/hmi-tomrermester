/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.hmi-tomrermester.dk', "hmi-tomrermester.vercel.app"], // Tillad billeder fra underdomænet
  },
};

export default nextConfig;