# Introduction 
Welcome to open-library-end-to-end-tests repository. This repository is designed to facilitate efficient and collaborative testing using Cucumber and Cypress. In this repository, we leverage the power of Gherkin syntax and BDD principles to create clear and understandable test scenarios for \"https://openlibrary.org\" website.",


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