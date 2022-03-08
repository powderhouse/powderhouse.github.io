/** @type {import('next-sitemap').IConfig} */

const path = require("path"),
  fs = require("fs");

const searchWithin = function (startPath, regex, excludeRegexes = []) {
  let results = [];

  let filteredPaths = fs
    .readdirSync(startPath)
    .filter((p) => !excludeRegexes.some((regex) => regex.test(p)));

  filteredPaths.map((f) => {
    let filename = path.join(startPath, f);
    let fIsDirectory = fs.lstatSync(filename).isDirectory();
    if (fIsDirectory) {
      Array.prototype.push.apply(results, searchWithin(filename, regex));
    } else if (regex.test(filename)) {
      results.push(filename);
    }
  });

  return results;
};

module.exports = {
  siteUrl: "https://powderhouse.org",
  changefreq: "daily",
  priority: 0.7,
  generateRobotsTxt: true,
  exclude: [],
  alternateRefs: [
    // {
    //   href: "https://es.example.com",
    //   hreflang: "es",
    // },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    let sproutPaths = searchWithin("./public/sprout/archive", /\.html$/).map(
      (p) => p.replace(/^public/, "work")
    );
    let innovationSchoolPaths = searchWithin(
      "./public/innovation-school/archive",
      /\.html$/
    ).map((p) => p.replace(/^public/, "work"));

    // TODO: Add changefreq, priority, lastmod
    [...sproutPaths, ...innovationSchoolPaths].forEach((p) =>
      result.push({ loc: p })
    );

    return result;
  },
  // additionalPaths: async (config) => {
  //   // let sproutPaths = await Promise.all(
  //   //   searchWithin("./public/sprout/archive", /\.html$/).map(async (p) => {
  //   //     return await config.transform(config, p);
  //   //   })
  //   // );
  //   [
  //     await config.transform(config, "/public/sprout/archive/work/index.html"),
  //     // ...sproutPaths,
  //   ];
  // },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      // {
      //   userAgent: "test-bot",
      //   allow: ["/path", "/path-2"],
      // },
      // {
      //   userAgent: "black-listed-bot",
      //   disallow: ["/sub-path-1", "/path-2"],
      // },
    ],
    additionalSitemaps: [
      // "https://example.com/my-custom-sitemap-1.xml",
    ],
  },
};
