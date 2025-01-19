/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MyBooksPage from "../page_objects/MyBooksPage";

const myBooksPage = new MyBooksPage();

Then("the book should appear in my {string} list", () => {
  cy.get('img.bookcover[title*="Software Testing"]').should("be.visible");
});

When("I remove the added book from the {string} list", (action) => {
  myBooksPage.getWantToReadLink(action).click();
  myBooksPage.getWantToReadBtn().click();
});

Then("the book should no longer appear in my {string} list", () => {
  cy.get('img.bookcover[title*="Software Testing"]').should("not.exist");
});
