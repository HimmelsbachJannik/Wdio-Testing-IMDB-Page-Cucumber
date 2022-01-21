Feature: IMDB.com Websites - The Dark Knight

    Scenario: TC-002 Validate that after navigating to "The Dark Knight" the trailer is displayed.

        Given I am on the home page
        When I navigate to the Top 250 Movies section
        Then I shall see "The Dark Knight" listed and be able to select it
        Then I shall see the video player and its not playing

    Scenario: TC-003 Validate that after searching und selecting "The Dark Knight" the trailer is playing.

        Given I am on the home page
        When I search for "The Dark Knight"
        Then I shall see "The Dark Knight" listed in the results and select the first result
        Then I shall see the trailer playing