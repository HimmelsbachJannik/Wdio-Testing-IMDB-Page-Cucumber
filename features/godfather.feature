Feature: IMDB.com Website - The Godfather

    Scenario: TC-001 Verify place and rating of the movie "The Godfather"

        Given I am on the home page
        When I navigate to the Top 250 Movies section
        Then I see the movie "The Godfather" in second place with a rating of "9.1"