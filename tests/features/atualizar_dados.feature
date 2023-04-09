Feature: Atualização dos dados do restaurante
    As a administrador do restaurante com perfil
    I want to alterar dados que constam no perfil
    So that eu possa manter atualizados os dados no perfil


Scenario: atualizar horário de funcionamento do restaurante
    Given estou logado no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"
    And estou na página "Atualizar dados"
    And vejo 'Das 08h às 17h' no horário de funcionamento 
    When atualizo o horário de funcionamento para 'Das 08h às 12h'
    Then observo 'Das 08h às 12h' no horário de funcionamento

Scenario: atualizar CEP do restaurante sem adicionar um novo
    Given eu estou logado no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"
    And eu estou na página "Atualizar dados"
    And eu vejo '66666-666' no CEP do restaurante 
    When eu tento atualizar o CEP do restaurante para ''    
    Then vejo a mensagem "Preencha este campo." e permaneço na página "Atualizar dados"
