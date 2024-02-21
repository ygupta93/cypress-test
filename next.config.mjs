/** @type {import('next').NextConfig} */
const nextConfig = {
  // add the domain to the images
  images: {
    domains: ["localhost", "api-cdn.zeus.fidelissd.com"],
  },
};

export default nextConfig;
