/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "../page_objects/SearchPage";

const searchPage = new SearchPage();

When('I perform an advanced search for {string} by {string}', (bookTitle, authorName) => {
  searchPage.searchTitle(bookTitle);
  searchPage.searchAuthor(authorName);
  searchPage.submitSearch();
});

Then('I should see the search results', () => {
  searchPage.getSearchResults().should('be.visible')
    .invoke('text').then((text) => {
      const resultNumber = parseInt(text);
      expect(resultNumber).to.be.greaterThan(0);
    });;
});

When('I click on the author\'s name {string} from the first result', (authorName) => {
  searchPage.getFirstAuthorName(authorName).click({ force: true });
});

When('I add the first book in the search results to my {string} list', (action) => {
  searchPage.addWantToReadList(action);
});

When('I navigate to {string} page', (page) => {
  searchPage.getMyBooksLink(page).click();
});
