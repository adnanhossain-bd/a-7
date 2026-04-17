/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  /* আপনার অন্য কোনো কনফিগ অপশন থাকলে এখানে থাকবে */
};

export default nextConfig;