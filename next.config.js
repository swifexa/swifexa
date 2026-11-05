/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
