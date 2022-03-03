const withPlugins = require("next-compose-plugins");
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

let nextConfig = {
  images: {
    domains: ["powderhouse-strapi-uploads.s3.amazonaws.com"],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: "preact/compat",
  //       "react-dom/test-utils": "preact/test-utils",
  //       "react-dom": "preact/compat",
  //     });
  //   }

  //   return config;
  // },
  rewrites: async () => {
    return [
      // {
      //   source: `/work/powderhouse-studios-archive/:path/:last(.+(?!\..+))`,
      //   destination: "/powderhouse-studios-archive/:path/:last/index.html",
      // },
      {
        source: "/work/powderhouse-studios-archive/:path*/:last",
        destination: "/powderhouse-studios-archive/:path*/:last",
      },
    ];
  },
};

let plugins = [
  // https://github.com/cyrilwanner/next-compose-plugins
  // [withBundleAnalyzer],
];

module.exports = withPlugins(plugins, nextConfig);
