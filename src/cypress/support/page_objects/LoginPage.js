/// <reference types="cypress" />

class LoginPage {
  loginWithValidCredentials() {
    cy.fixture("credentials.json").then((data) => {
      cy.get("#username").type(data.username);
      cy.get("#password").type(data.password);
    });
    cy.get('[type="submit"][name="login"]').click();
  }
}

export default LoginPage;
