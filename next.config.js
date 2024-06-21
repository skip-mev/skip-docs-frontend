// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/docs/:path*",
      destination: "/products/:path*",
      permanent: true,
    }, 
  ],
  rewrites: async () => {
    return [
      {
        source: "/slinky",
        destination: "https://skip-slinky.mintlify.app",
      },
      {
        source: "/slinky/:match*",
        destination: "https://skip-slinky.mintlify.app/:match*"
      },
      { source: "/skip-api",
        destination: "https://skip-api.mintlify.app"
      },
      { 
        source: "/skip-api/:match*",
        destination: "https://skip-api.mintlify.app/:match*"
      }
    ];
  },
};

module.exports = nextConfig;

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: true }
);
