describe("powderhouse.org Home", function () {
  beforeEach(function () {
    // Load our app before starting each test case
    cy.visit("https://powderhouseorg-powderhouse1.vercel.app/");
  });

  it("Loads the homepage", function () {
    cy.get("title").should("contain", "Powderhouse");
  });

  it("Loads fonts correctly", function () {
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.percySnapshot();
  });
});
