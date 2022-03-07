let baseURL = "https://powderhouseorg-powderhouse1.vercel.app/";
let pathsToValidate = [
  // TODO: Hardcoded for now, but should talk to CMS or similar
  "/",
  "/about",
  "/team",
  "/team/jobs",
  "/team/jobs/financial-researcher",
  "/team/jobs/legal-researcher",
  "/work",
  "/work/prospect-studio",
  "/work/innovation-school",
  "/work/equitable-enrollment",
  "/work/creative-computing",
  "/work/atlas",
  "/work/digital-storytelling",
  "/work/turtle-geometry",
  "/work/dlcs-standards",
  "/work/fabville",
  "/work/healey-steam",
  "/work/spaghetti-dinners",
  "/work/signs-of-life",
  "/work/flutes-and-waves",
  "/work/bring-your-grandma-to-math",
  "/work/nervous-nature",
  "/work/streetbeest",
  "/news",
];

describe("Validate HTML for all pages", function () {
  pathsToValidate.forEach((path) => {
    it(`${path} should be valid HTML`, () => {
      cy.visit(`${baseURL}${path}`);
      cy.htmlvalidate();
    });
  });
});
