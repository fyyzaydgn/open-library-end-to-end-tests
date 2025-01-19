/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AuthorPage from "../page_objects/AuthorPage";

const authorPage = new AuthorPage();

Then("I should be navigated to the author's details page", () => {
  cy.url().should("include", "/authors");
  cy.get("h1").should("contain", "J. K. Rowling");
});

When("I sort the author's works by rating", () => {
  authorPage.sortWorksByRating();
});

Then("I should see {string} as the top-rated work", (expectedTitle) => {
  authorPage.getTopRatedWork().should("contain", expectedTitle);
});
