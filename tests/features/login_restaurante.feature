# Login do restaurante

Feature: Restaurant's login

    As a restaurant manager
    I want to access my restaurant's account
    So that I can use the platform

# GUI based scenarios

Scenario: successfully logging in

    Given I am at the login screen
    And   I can see a request for my restaurant's email
    And   I can see a request for the account's password
    And   my restaurant is registered to the system with the email "atlantico@gmail.com" with the password "atlantico123"
    When  I enter my restaurant's email "atlantico@gmail.com" with the password "atlantico123"
    Then  I am now at my restaurant's home screen


Scenario: successfully logging out

    Given I am logged in to the system with the email "atlantico@gmail.com"
    And   I am in my restaurant's profile screen
    When  I click the option to log out of the system
    Then  I am logged out
    And   I am now at the login screen


Scenario: invalid data on login

    Given I am at the login screen
    And   I can see a request for my restaurant's email
    And   I can see a request for the account's password
    When  I enter my restaurant's email "12345678000190" with the password "atlantico123"
    Then  I see an error message


Scenario: user not found

    Given I am at the login screen
    And   I never signed up to the system before
    And   I can see a request for my restaurant's email
    And   I can see a request for the account's password
    When  I enter my restaurant's email "atlantico@gmail.com" with the password "atlantico123"
    Then  I see an error message


Scenario: forgotten password

    Given I am at the recover password screen
    And   I can see a request for my restaurant's email
    And   my restaurant is registered to the system with the email "atlantico@gmail.com"
    When  I enter the email "atlantico@gmail.com"
    Then  I see a message telling me my new password


# Service Scenarios

Scenario: successfully logging in

    Given my restaurant is stored on the system with the email "atlantico@gmail.com" with the password "atlantico123"
    When  I ask the system to log in
    And   I pass as inputs the email "atlantico@gmail.com" plus the password "atlantico123"
    Then  the system checks the existence of the combination of the inputs on its stored data
    And   the system approves the login request


Scenario: invalid data on login

    Given my restaurant is stored on the system with the email "atlantico@gmail.com"
    And   it is stored with the password "atlantico123"
    When  I ask the system to log in
    And   I pass as inputs the email "12345678000190" plus the password "atlantico123"
    Then  the system checks if the inputs meet the expected format
    And   the system returns an error message


Scenario: user not found

    Given my restaurant is not stored in the system
    When  I ask the system to log in
    And   I pass as inputs the email "atlantico@gmail.com" plus the password "atlantico123"
    Then  the system checks the existence of the user on its stored data
    And   the system returns an error message


Scenario: forgotten password

    Given my restaurant is stored in the system with the email "atlantico@gmail.com" 
    And   I request the system to reset my password
    When  I enter the email "atlantico@gmail.com"
    Then  the system returns a message to the user
    And   updates the password stored in the system


Scenario: wrong password

    Given my restaurant is stored on the system with the email "atlantico@gmail.com"
    And   it is stored with the password "atlantico123"
    When  I ask the system to log in
    And   I pass as inputs the email "atlantico@gmail.com" plus the password "atlantico123"
    Then  the system checks the existence of the combination of the inputs on its stored data
    And   the system denies the login request
    And   returns an error message