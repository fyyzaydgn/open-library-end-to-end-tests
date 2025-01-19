Feature: Manage "Want to Read" List

  As a registered user,
  Firstly I want to log in to Open Library, and manage my "Want to Read" list,
  So that I can keep track of books I intend to read.

  Scenario: Add and remove a book from "Want to Read" list
    Given I am on the Open Library homepage
    When I click on the "Log In" button at the homepage
    And I log in with valid credentials
    And I search for books related to "Software Testing"
    Then I should see the search results
    When I add the first book in the search results to my "Want to Read" list
    And I navigate to "My Books" page
    Then the book should appear in my "Want to Read" list
    When I remove the added book from the "want-to-read" list
    And I navigate to "My Books" page
    Then the book should no longer appear in my "Want to Read" list
