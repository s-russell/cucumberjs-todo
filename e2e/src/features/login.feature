@Login
Feature: Logging In

    Business Rules
    - Logging in successfully should redirect to the user's TODOs
    - When login is not successful, user should still be on login page
    - Attempting to view TODOs when not logged in should redirect to login
    - Logging out should redirect to login

    Scenario: Logging in successfully
        Given I go to login
        When I log in successfully
        Then I see my todos
        And I see my user information

    Scenario: Redirect to login
        Given I am not logged in
        When I try to view TODOs
        Then I am redirected to the login page

    Scenario: Logging in unsuccessfully
        Given I go to login
        When I log in unsuccessfully
        Then I am redirected to the login page

    Scenario: Logging out
        Given I go to login
        And I log in successfully
        When I log out
        Then I am redirected to the login page