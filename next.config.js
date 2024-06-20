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
    {
      source: "/discord",
      destination: "https://discord.gg/hFeHVAE26P",
      permanent: true,
    },
  ],
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "/api/proxy",
      },
    ];
  },
};

module.exports = nextConfig;

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: true }
);
