/// <reference types="cypress" />

class SearchPage {
  searchTitle(bookTitle) {
    cy.get("#qtop-title").type(bookTitle);
  }

  searchAuthor(authorName) {
    cy.get("#qtop-author").type(authorName);
  }

  submitSearch() {
    cy.get('button[type="submit"]').click();
  }
  getSearchResults() {
    return cy.get(".search-results-stats");
  }

  getFirstAuthorName(authorName) {
    return cy.get(`a[href="/authors/OL23919A/${authorName}"]`).first();
  }

  addWantToReadList(action) {
    cy.get(`button[type="submit"]:contains("${action}")`).first().click();
  }

  getMyBooksLink(page) {
    return cy.get(`a[href="/account/books"]:contains("${page}")`).first();
  }
}
export default SearchPage;
