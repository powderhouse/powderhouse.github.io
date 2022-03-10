let baseURL = "https://powderhouseorg-powderhouse1.vercel.app/";

import { validationPaths } from "../../site-data.js";

describe("Validate HTML for all pages", function () {
  pathsToValidate.forEach((path) => {
    it(`${path} should be valid HTML`, () => {
      cy.visit(`${baseURL}${path}`);
      cy.htmlvalidate();
    });
  });
});
