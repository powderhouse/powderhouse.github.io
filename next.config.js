const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([[withBundleAnalyzer({})]], {
  images: {
    domains: ["powderhouse-strapi-uploads.s3.amazonaws.com"],
  },
  // experimental: {
  //   // Enables the styled-components SWC transform, via https://stackoverflow.com/a/70429669
  //   styledComponents: true,
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
