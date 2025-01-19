/// <reference types="cypress" />

import { When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/LoginPage";

const loginPage = new LoginPage();

When(`I log in with valid credentials`, () => {
  loginPage.loginWithValidCredentials();
});
