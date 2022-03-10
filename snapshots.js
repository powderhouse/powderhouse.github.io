const validationPaths = [
  // TODO: Hardcoded for now from `site-data.js` but should be imported
  "/",
  // "/about",
  // "/team",
  // "/team/jobs",
  // "/team/jobs/financial-researcher",
  // "/team/jobs/legal-researcher",
  // "/work",
  // "/work/prospect-studio",
  // "/work/innovation-school",
  // "/work/equitable-enrollment",
  // "/work/creative-computing",
  // "/work/atlas",
  // "/work/digital-storytelling",
  // "/work/turtle-geometry",
  // "/work/dlcs-standards",
  // "/work/fabville",
  // "/work/healey-steam",
  // "/work/spaghetti-dinners",
  // "/work/signs-of-life",
  // "/work/flutes-and-waves",
  // "/work/bring-your-grandma-to-math",
  // "/work/nervous-nature",
  // "/work/streetbeest",
  // "/news",
];

module.exports = validationPaths.map((path) => {
  let href = new URL(path, "http://localhost:3000").href;
  return {
    name: path,
    // URL constructor for joining paths correctly, via https://stackoverflow.com/a/16301947/37772
    url: href,
    waitForSelector: "body",
  };
});
