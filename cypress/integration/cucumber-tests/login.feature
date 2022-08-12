Feature: Login to Appication

    I want to login to the application

    @focus
    Scenario: Valid login
        Given I open login page
        When I submin login
        Then I should see homepage