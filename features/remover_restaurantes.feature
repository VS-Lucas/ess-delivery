Feature: remoção de restaurante
	As a restaurante que possui uma conta na aplicação
	I want to remover meu perfil da aplicação
	So that os dados do meu restaurante sejam removidos do sistema


Scenario: remover restaurante
    Given eu estou logado no perfil de “Restaurante” com login “lvll@hotmail.com” e senha “1234”
    And estou na página “Seu Restaurante”
    And estou na aba "Descadastramento"
    When eu descadastro o restaurante “Food”
    Then vejo a mensagem "Descadastramento realizado”
    And sou direcionado para a página “Seu Perfil”

Scenario: tentativa de remoção de restaurante com pedido em andamento
    Given eu estou logado no perfil de “Restaurante” com login “biu@hotmail.com” e senha “1234”
    And estou na página “Seu Restaurante”
    And estou na aba "Descadastramento"
    And possuo pelo menos um pedido em andamento
    When eu tento descadastrar o restaurante “Food”
    Then eu vejo uma notificação de erro "O restaurante não pode ser romovido com pedido em andamento"

Scenario: remoção de restaurante cancelada
    Given eu estou logado no perfil de “Restaurante” com login “lvll@gmail.com” e senha “1234”
    And estou na página "Restaurantes removidos recentemente"
    When eu solicito o recadastramento do restaurante “IFood”    
    Then vejo a mensagem "Recadastramento realizado”
    And sou direcionado para a página “Seu Restaurante”
    
