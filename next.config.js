const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

let nextConfig = {
  images: {
    domains: ["powderhouse-strapi-uploads.s3.amazonaws.com"],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

let plugins = [
  // https://github.com/cyrilwanner/next-compose-plugins
  [withBundleAnalyzer],
];

module.exports = withPlugins(plugins, nextConfig);
