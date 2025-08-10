/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.hmi-tomrermester.dk', "hmi-tomrermester.vercel.app", "hmi-tomrermester.dk"], // Tillad billeder fra underdomænet
  },
};

export default nextConfig;