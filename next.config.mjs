const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/refonte-monstercat/' : '',
  basePath: isProd ? '/refonte-monstercat' : '',
  output: 'export'
};

export default nextConfig;