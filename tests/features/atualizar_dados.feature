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

Scenario: atualizar CFP do responsável pelo restaurante com formatação inválida
    Given logado no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"
    And na página "Atualizar dados"
    And observo '666.666.666-66' no CPF do responsável do restaurante 
    When tento registrar a atualização do CPF do restaurante para '666.6'    
    Then permaneço na página "Atualizar dados" e vejo a mensagem de erro "É preciso que o formato corresponda ao exigido"

Scenario: atualizar nome do restaurante com um nome já existente
    Given estou no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"
    And me encontro na página "Atualizar dados"
    And visualizo 'TESTE UPDATE' no nome da loja 
    When tento realizar o registro da atualização do nome da loja para 'TEST'    
    Then visualizo a mensagem de erro 'Nome da loja já cadastrado'
    And continuo na página "Atualizar dados"