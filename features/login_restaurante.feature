# Login do restaurante

Feature: Restaurant's login

    As a restaurant manager
    I want to access my restaurant's account
    So that I can use the platform

# GUI based scenarios

Scenario: successfully logging in

    Given I am at the login screen
    And   I can see a request for my restaurant's CNPJ or email
    And   I can see a request for the account's password
    And   my restaurant is registered to the system with the CNPJ "12345678000190" with the password "P@ssword1234"
    When  I enter my restaurant's CNPJ "12345678000190" with the password "P@ssword1234"
    Then  I am now at my restaurant's home screen


Scenario: successfully logging out

    Given I am logged in to the system with the CNPJ "12345678000190"
    And   I am in my restaurant's profile screen
    When  I click the option to log out of the system
    Then  I am logged out
    And   I am now at the login screen


Scenario: invalid data on login

    Given I am at the login screen
    And   I can see a request for my restaurant's CNPJ or email
    And   I can see a request for the account's password
    When  I enter my restaurant's CNPJ "1234567800019o" with the password "P@ssword1234"
    Then  I see an error message


Scenario: user not found

    Given I am at the login screen
    And   I never signed up to the system before
    And   I can see a request for my restaurant's CNPJ or email
    And   I can see a request for the account's password
    When  I enter my restaurant's CNPJ "98765432000110" with the password "P@ssword4321"
    Then  I see an error message


Scenario: forgotten password

    Given I am at the recover password screen
    And   I can see a request for my restaurant's email and CNPJ
    And   my restaurant is registered to the system with the email "restaurant@ess.com"
    And   the registered CNPJ is "12345678000190"
    When  I enter the email "restaurant@ess.com"
    And   I enter the CNPJ "12345678000190"
    Then  I see a message telling me my new password was sent to my email


# Service Scenarios

Scenario: successfully logging in

    Given my restaurant is stored on the system with the CNPJ "12345678000190" with the password "P@ssword1234"
    When  I ask the system to log in
    And   I pass as inputs the CNPJ "12345678000190" plus the password "P@ssword1234"
    Then  the system checks the existence of the combination of the inputs on its stored data
    And   the system approves the login request


Scenario: invalid data on login

    Given my restaurant is stored on the system with the CNPJ "12345678000190" 
    And   it is stored with the password "P@ssword1234"
    When  I ask the system to log in
    And   I pass as inputs the CNPJ "1234567800019o" plus the password "P@ssword1234"
    Then  the system checks if the inputs meet the expected data types
    And   the system returns an error message


Scenario: user not found

    Given my restaurant is not stored in the system
    When  I ask the system to log in
    And   I pass as inputs the CNPJ "98765432000110" plus the password "P@ssword4321"
    Then  the system checks the existence of the user on its stored data
    And   the system returns an error message


Scenario: forgotten password

    Given my restaurant is stored in the system with the CNPJ "12345678000190" 
    And   it is stored with the email "restaurante@ess.com"
    And   I request the system to reset my password
    When  I enter the email "restaurant@ess.com" plus the CNPJ "12345678000190"
    Then  the system sends a new password to my email
    And   returns a message to the user informing about the email
    And   updates the password stored in the system


Scenario: wrong password

    Given my restaurant is stored on the system with the CNPJ "12345678000190"
    And   it is stored with the password "P@ssword1234"
    When  I ask the system to log in
    And   I pass as inputs the CNPJ "12345678000190" plus the password "P@ssword1111"
    Then  the system checks the existence of the combination of the inputs on its stored data
    And   the system denies the login request
    And   returns an error message

# Não consegui pensar em algum outro cenário de serviço que seja relevante para esta feature, portanto, deixarei
# comentado um cenário de GUI. 
# PS: Este comentário refere-se à questão 7, alternativa d, do roteiro de gerência de configuração

# Scenario: wrong password
#
#    Given I am at the login screen
#    And   I can see a request for my restaurant's CNPJ or email, and password
#    And   my restaurant is registered to the system with the CNPJ "12345678000190" and the password "P@ssword1234"
#    When  I enter my restaurant's CNPJ "12345678000190" and the password "P@ssword1111"
#    Then  I see an error message

# Commit teste 1 para a questão 14 do roteiro de gerência de configuração