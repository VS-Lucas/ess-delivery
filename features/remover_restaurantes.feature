Feature: remoção de restaurante
	As a restaurante que possui uma conta na aplicação
	I want to remover meu perfil da aplicação
	So that os dados do meu restaurante sejam removidos do sistema


Scenario: remover restaurante
    Given: eu estou logado no perfil de “Restaurante” com login “lvll@hotmail.com” e senha “1234”
        AND estou na página “Seu Restaurante”
        AND estou na aba "Descadastramento"
    When: eu descadastro o restaurante “Food”    
    Then: vejo a mensagem "Descadastramento bem sucedido”
        AND sou direcionado para a página “Seu Perfil”

Scenario: tentativa de remoção de restaurante com pedido em andamento
    Given: eu estou logado no perfil de “Restaurante” com login “biu@hotmail.com” e senha “1234”
        AND estou na página “Seu Restaurante”
        AND estou na aba "Descadastramento"
        AND possuo um pedido em andamento
    When: eu tento descadastrar o restaurante “Food”
    Then: eu vejo uma notificação de erro "O restaurante não pode ser romovido com pedido em andamento"
    
