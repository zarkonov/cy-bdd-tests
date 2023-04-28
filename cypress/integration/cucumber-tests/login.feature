Feature: Login to Appication
    
    As a invalid user
    I cannot login to the Scenario
    
    As a valid user
    I want to login to the application
    @focus
    Scenario: Invalid login
        Given I open login page
        And I want to wait 2000 miliseconds
        And I see "Zero - Log in" in the title
        And I see "/login" in the url
        And I reload the browser
        When I fill username with "invalid username"
        And I fill password with "invalid password"
        And I click on submit login
        Then I should see error message


    Scenario: Valid login
        Given I open login page
        # When I submit login
        When I fill username with "username"
        And I fill password with "password"
        And I click on submit login
        Then I should see homepage