# Introduction 
Welcome to open-library-end-to-end-tests repository. This repository is designed to facilitate efficient and collaborative testing using Cucumber and Cypress. In this repository, we leverage the power of Gherkin syntax and BDD principles to create clear and understandable test scenarios for \"https://openlibrary.org\" website.",

## Chosen Tools and Technologies
This project was developed using the following tools and technologies:

### **JavaScript**
JavaScript is used for both the front-end and back-end of this project, as it is a powerful, widely-used language with excellent community support and versatility.

### **Cypress**
Cypress is used for **end-to-end testing** in this project. It provides a fast, reliable, and developer-friendly way to test web applications. With its simple syntax and real-time reloading, Cypress allows for an efficient test process, ensuring the application functions as expected throughout the development lifecycle.

#### Why Cypress?
- It integrates well with JavaScript and is easy to set up, especially for end-to-end testing.
- Cypress provides an interactive interface that shows tests running in real-time, which improves the debugging process.

### **Cucumber BDD**
To write tests in a more human-readable format, I used **Cucumber BDD** (Behavior-Driven Development). This approach allows for tests to be written in plain English, which is beneficial for communication between technical and non-technical team members.

#### Why Cucumber BDD?
- **Readability**: Cucumber's Gherkin syntax (`Given-When-Then`) allows test cases to be written in a language that is easy to understand, which improves collaboration across different stakeholders.
- **Maintainability**: By decoupling test logic from implementation details, Cucumber promotes more maintainable and scalable tests.
- **Collaboration**: It helps foster better communication between developers, testers, and business stakeholders, ensuring everyone understands the system's behavior.

# Getting Started

1. To get started with using this repository, follow these steps:
    - Clone the Repository
    - Install Dependencies
    - Write Feature Files (with Gherkin syntax),
    - Implement Step Definitions and Page Object Model design pattern accordingly
    - Run the Tests from the scripts in package.json or from terminal directly
    - Analyze Test Reports

2.	Installation process :  
    - First check if node.js and npm is downloaded 
        - node -v, 
        - npm -v (if not, download from "node.js" official website)
    - Download cypress:
        - npm install cypress (while at src directory)   
    - Click your “cypress.config.ts” file. If you see the errors, to fix the errors first download the cucumber: 
        - npm install @badeball/cypress-cucumber-preprocessor
    - Then download the additional dependency to fully initialize cucumber plugin:
        - npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
    - Add cucumber dependencies in your "settings.json" file like the following: (To do that, In your Visual Studio Code, go to Settings—> Settings or Preferences —>Search “cucumber”, then click “Edit in settings.json” file)
        - "cucumber.features": [ "src/cypress/e2e/**/*.{feature,cy.js}", ],
        - "cucumber.glue": [ "src/cypress/support/step_definitions/*.js", ],

3.	Recommended dependencies :
    - Download "Cucumber (Gherkin) Full Support" extension from VS Code Extension Marketplace
    - "Material Icon Theme" is also be advised for a good visibility of files (useful for Cucumber icon etc.)
    - Prettier - Code formatter is advisable
    - npm install ts-loader --save-dev (if needed)

# Build and Test
To run the tests of application use the commands below:
- 'npx cypress open' (navigates to cypress UI screen (GLI mode) where you can select E2E testing and then browser type)
- 'npm run all-scenarios-headed-chrome' (runs all scenarios in headed mode by chrome browser)
- 'npm run all-scenarios-headless-chrome' (runs all scenarios in headless mode by chrome browser)
- You can also see the scripts in 'package.json' file and run the tests with using these commands

# Contribute
We appreciate your interest in contributing to our testing repository. Together, we can create a robust and reliable testing solution for our project!