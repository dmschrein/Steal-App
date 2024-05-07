/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
  },
  webpack: (config, { isServer }) => {
    // Enables source maps in production
    if (!isServer) {
      config.devtool = 'eval-source-map';
    }

    // Additional Webpack config adjustments can go here
    
    return config;
  },
};

module.exports = nextConfig;
