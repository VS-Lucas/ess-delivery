# Login do restaurante

Feature: Restaurant's login

    As a restaurant manager
    I want to access my restaurant's account
    So that I can use the platform

# GUI based scenarios

Scenario: successfully logging in

    Given I am at the login screen
    And   I can see a request for my restaurant's CNPJ or email, and password
    And   my restaurant is registered to the system
    When  I enter my restaurant's CNPJ "12345678000190" and the password "P@ssword1234"
    Then  I am logged in


Scenario: successfully logging out

    Given I am logged in to the system
    And   I can see an option to log out of my account
    When  I click the option to log out of the system
    Then  I am logged out


Scenario: invalid data on login

    Given I am at the login screen
    And   I can see a request for my restaurant's CNPJ or email, and password
    When  I enter my restaurant's CNPJ "1234567800019o" and the password "P@ssword1234"
    Then  I see an error message


Scenario: user not found

    Given I am at the login screen
    And   I never signed up to the system
    And   I can see a request for my restaurant's CNPJ or email and password
    When  I enter my restaurant's CNPJ "98765432000110" and the password "P@ssword4321"
    Then  I see an error message


Scenario: forgotten password

    Given I am at the recover password screen
    And   I can see a request for my restaurant's email and CNPJ
    When  I enter the email "restaurant@ess.com" and the CNPJ "12345678000190"
    Then  I see a message telling me my new password was sent to my email


# Service Scenarios

Scenario: successfully logging in

    Given my restaurant is stored on the system with the CNPJ "12345678000190" and the password "P@ssword1234"
    When  I ask the system to log in
    And   I pass as inputs the CNPJ "12345678000190" and the password "P@ssword1234"
    Then  the system checks the existence of the right combination of the inputs on its stored data
    And   the system approves the login request


Scenario: invalid data on login

    Given my restaurant is stored on the system with the CNPJ "12345678000190" and the password "P@ssword1234"
    When  I ask the system to log in
    And   I pass as inputs the CNPJ "1234567800019o" and the password "P@ssword1234"
    Then  the system checks if the inputs meet the expected data types
    And   the system returns an error message


Scenario: user not found

    Given my restaurant is not stored in the system
    When  I ask the system to log in
    And   I pass as inputs the CNPJ "98765432000110" and the password "P@ssword4321"
    Then  the system checks the existence of the user on its stored data
    And   the system returns an error message


Scenario: forgotten password

    Given my restaurant is stored in the system
    And   I request the system to reset my password
    When  I enter the email "restaurant@ess.com" and the CNPJ "12345678000190"
    Then  the system sends a new password to my email
    And   returns a message to the user informing about the email
    And   updates the password stored in the system