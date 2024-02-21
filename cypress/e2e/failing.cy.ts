describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Email field exist", () => {
    cy.get("[data-test='cypress-login-email']").should("exist");
  });
});
