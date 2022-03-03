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
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          // TODO: I don't understand why this matches, e.g., /jobs/apply, but it seems to work
          source: `/work/:path(innovation-school/archive[^.]*)`,
          destination: "/:path/index.html",
        },
      ],
      // afterFiles: [
      //   // These rewrites are checked after pages/public files
      //   // are checked but before dynamic routes
      //   {},
      // ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/work/innovation-school/archive/:path*",
          destination: "/innovation-school/archive/:path*",
        },
      ],
    };
  },
};

let plugins = [
  // https://github.com/cyrilwanner/next-compose-plugins
  // [withBundleAnalyzer],
];

module.exports = withPlugins(plugins, nextConfig);
