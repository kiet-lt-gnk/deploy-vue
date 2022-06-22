/// <reference types="cypress" />

describe("Empty Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("We have correct page title", () => {
    cy.contains("GitHub Actions is running!!!");
  });

  it.only("Change to About route correctly", () => {
    cy.contains("About").click();

    cy.url().should("include", "/about");

    cy.contains("This is an about page");
  });
});
