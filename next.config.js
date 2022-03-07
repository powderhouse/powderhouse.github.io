const withPlugins = require("next-compose-plugins");

let nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["powderhouse-strapi-uploads.s3.amazonaws.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // compiler: {
  //   // ssr and displayName are configured by default
  //   styledComponents: true,
  //   ssr: true,
  //   displayName: true,
  // },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: `/en/work/:path(innovation-school/archive[^.]*)`,
          destination: "/:path/index.html",
          locale: false,
        },
        {
          source: `/en/work/:path(sprout/archive[^.]*)`,
          destination: "/:path/index.html",
          locale: false,
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        // {}
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/en/work/innovation-school/archive/:path*",
          destination: "/innovation-school/archive/:path*",
          locale: false,
        },
        {
          source: "/en/work/sprout/archive/:path*",
          destination: "/sprout/archive/:path*",
          locale: false,
        },
      ],
    };
  },
};

let plugins = [
  // https://github.com/cyrilwanner/next-compose-plugins
  [
    // stylelint
    new (require("stylelint-webpack-plugin"))(),
    // bundle-analyzer
    // require("@next/bundle-analyzer")({
    //   enabled: process.env.ANALYZE === "true",
    // }),
  ],
];

module.exports = withPlugins(plugins, nextConfig);
