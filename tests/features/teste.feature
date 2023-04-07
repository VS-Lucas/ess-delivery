Feature: remoção de restaurante
	As a restaurante que possui uma conta na aplicação
	I want to remover meu perfil da aplicação
	So that os dados do meu restaurante sejam removidos do sistema


Scenario: remover restaurante
    Given estou na página Descadastramento
    When eu descadastro meu restaurante
    Then sou direcionado para a página Home