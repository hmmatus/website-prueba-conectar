/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com/prueba-conectar.appspot.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
