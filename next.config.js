const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// module.exports = withBundleAnalyzer({});

module.exports = {
  images: {
    domains: ["powderhouse-strapi-uploads.s3.amazonaws.com"],
  },
};
