Feature: Advanced Book Search and Validation

  As a user, I want to perform an advanced search to look up a book titled "Harry Potter" by the author "Rowling"
  so that I can validate that her top-rated work is "Harry Potter and the Half-Blood Prince".

  Scenario: Validate top-rated work of J.K. Rowling
    Given I am on the Open Library homepage
    When I click on the "Browse" dropdown and select "Advanced Search"
    And I perform an advanced search for "Harry Potter" by "Rowling"
    Then I should see the search results
    When I click on the author's name "J._K._Rowling" from the first result
    Then I should be navigated to the author's details page
    When I sort the author's works by rating
    Then I should see "Harry Potter and the Prisoner of Azkaban" as the top-rated work
