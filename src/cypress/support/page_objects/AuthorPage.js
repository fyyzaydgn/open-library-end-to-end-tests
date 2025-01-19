/// <reference types="cypress" />

class AuthorPage {
  sortWorksByRating() {
    cy.get(".sort-dropper").click();
    cy.get('[data-ol-link-track="SearchSort|Rating"]').click();
  }

  getTopRatedWork() {
    return cy.get(".list-books .details .resultTitle").first();
  }
}

export default AuthorPage;
