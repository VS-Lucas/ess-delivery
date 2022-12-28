Feature: Atualização dos dados do restaurante
    As a restaurante com perfil
    I want to alterar dados que constam no perfil
    So that eu possa manter atualizado os dados no perfil


Scenario: atualizar horário de funcionamento do restaurante
    Given eu estou logado no perfil de “Restaurante” com login “lvll@hotmail.com” e senha “1234”
    And estou na página “Seu Restaurante”
    And estou na aba “Atualizar dados cadastrais”
    And vejo “17h-22h” no horário de funcionamento 
    When eu atualizo o horário de funcionamento para “16h-23h”    
    Then vejo a mensagem “Atualização bem sucedido”

Scenario: atualizar nome do restaurante
    Given eu estou logado no perfil de “Restaurante” com login “lvll@hotmail.com” e senha “123”
    And estou na página “Seu Restaurante”
    And estou na aba “Atualizar dados cadastrais”
    And vejo “Bar PST” no nome do restaurante 
    When eu atualizo o nome do restaurante para “Restaurante PST”    
    Then vejo a mensagem “Atualização bem sucedido” 
