/// <reference types="cypress" />

class MybooksPage {
  getWantToReadLink(action) {
    return cy.get(`[data-ol-link-track="BookCarousel|HeaderClick|${action}"]`);
  }

  getWantToReadBtn() {
    return cy.get('button[type="submit"] .btn-text:contains("Want to Read")');
  }
}

export default MybooksPage;
