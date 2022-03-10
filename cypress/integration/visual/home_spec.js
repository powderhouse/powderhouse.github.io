describe("Home", function () {
  beforeEach(function () {
    // Load our app before starting each test case
    cy.visit("http://localhost:3000");
  });

  it("Snapshot", function () {
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.percySnapshot();
  });
});
