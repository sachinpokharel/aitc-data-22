import withPlaiceholder from '@plaiceholder/next';
import { codeInspectorPlugin } from 'code-inspector-plugin';
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
];

const nextConfig = {
  // Other Next.js configurations
  // output: 'standalone',
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }));
    return config;
  },
  swcMinify: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd1q13i93c33suk.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd12d62u8f14w9u.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd2u2fal3qllrtj.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'random.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.aitc.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd1q13i93c33suk.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd2u2fal3qllrtj.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/why-us', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/services/:slug',
        destination: '/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};

export default withPlaiceholder(nextConfig);
