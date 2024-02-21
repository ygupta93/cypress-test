/* eslint-disable @typescript-eslint/no-namespace */

import "cypress-file-upload";

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>;
//         drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//         dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//         visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import {} from "cypress";

// Extend the Cypress interface directly without declare global
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in programmatically.
       * @example cy.login('email@example.com', 'password')
       */
      login(email: string, password: string): Chainable<Element>;
    }
  }
}

Cypress.Commands.add("login", (email, password) => {
  cy.session([email, password], () => {
    cy.visit("/login");
    cy.get("[data-test='cypress-login-email']").find("input").type(email);
    cy.get("[data-test='cypress-login-password']").find("input").type(password);
    cy.get("[data-test='cypress-login-button']").click();
    cy.url().should("include", "/dashboard");
  });
});
