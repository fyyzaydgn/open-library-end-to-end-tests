/// <reference types="cypress" />

class HomePage {
  selectAdvancedSearch(dropdownName, option) {
    cy.get(
      `[class="browse-component header-dropdown"]:contains("${dropdownName}")`
    )
      .first()
      .click();
    cy.get(`[href="/advancedsearch"]:contains("${option}")`).first().click();
  }
  getLoginButton() {
    return cy.get('.btn[href="/account/login"]');
  }

  searchBook(bookTitle) {
    cy.get('.search-bar-input input[type="text"]').type(bookTitle);
    cy.get('.search-bar-input input[type="submit"]').click();
  }
}

export default HomePage;
