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
    
