/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../page_objects/HomePage";

const homePage = new HomePage();

Given("I am on the Open Library homepage", () => {
  cy.visit("");
});

When(
  "I click on the {string} dropdown and select {string}",
  (dropdownName, option) => {
    homePage.selectAdvancedSearch(dropdownName, option);
  }
);

When('I click on the "Log In" button at the homepage', () => {
  homePage.getLoginButton().click();
});

When("I search for books related to {string}", (bookTitle) => {
  homePage.searchBook(bookTitle);
});
