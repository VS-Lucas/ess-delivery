Feature: remoção de restaurante
	As a administrador de um restaurante que possui uma conta na aplicação
	I want to remover meu perfil da aplicação
	So that os dados do meu restaurante sejam removidos do sistema


Scenario: remover restaurante com sucesso
    Given eu estou logado no perfil de "Restaurante" com login "test_remove@gmail.com" e senha "12345"
    And eu estou na página "Descadastramento" e possuo pelo menos um pedido em andamento
    When eu descadastro meu restaurante
    Then eu vejo "Tchau! Obrigado" e sou direcionado para a página "Home"


Scenario: tentativa de remoção de restaurante com pedido em andamento
    Given estou logado no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"
    And estou na página "Descadastramento"
    When tento descadastrar do meu restaurante
    Then vejo uma notificação de erro 'O restaurante não pode ser removido com pedido em andamento'
    And permaneço na página "Descadastramento"

    
