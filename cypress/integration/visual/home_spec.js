describe("Home", function () {
  beforeEach(function () {
    // Load our app before starting each test case
    cy.visit("https://powderhouseorg-powderhouse1.vercel.app/");
  });

  it("Snapshot", function () {
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.percySnapshot();
  });
});
