Feature: Exibir historico de pedidos
    As a cliente com pedidos já concluídos
    I want to salvar informações dos pedidos
    So that eu possa vizualizar um histórico de pedidos 

Scenario: visualizando a página de histórico de pedido vazia
    Given Estou logado como 'cliente' com email 'severino@gmail.com' e senha 'biu123' e não fiz nenhum pedido
    When eu clico no botão "Meus pedidos"
    Then eu sou redirecionado para página de "Histórico de pedidos"
    And não vejo nenhum pedido feito anteriormente

Scenario: visualizando a página de histórico de pedido não vazia
    Given eu estou logado como 'cliente' com email 'severino@gmail.com' e senha 'biu123' e não fiz nenhum pedido
    When eu clico no card onde contem o prato "Churrasco misto" clico no botão de "Carrinho de compras"
    And na página de "Carrinho de compras" clico no botão de "Check out"
    And na página de 'Check out' clico no botão de 'Confirmar' após abrir um modal clico em 'Acompanhar'
    And na página de "Acompanhamento de pedido" clico no botão "Ir para página inicial"
    And clico no botão de 'Meus pedidos'
    Then eu sou redirecionado para a página de 'Histórico de pedidos'
    And vejo meu pedido que contém o prato 'Churrasco Misto'
	
Scenario: fazendo novamente um pedido pelo histórico de pedidos
    Given loguei como 'cliente' com email 'severino@gmail.com' e senha 'biu123' e não fiz nenhum pedido
    And estou na página de "Histórico de pedidos"
    And tenho um pedido de um 'Churrasco Misto' já feito antes
    When eu clico no botão para detalhar meu pedido
    And na página de "Detalhes do pedido" clico no botão de "Pedir novamente"
    Then sou redirecionado para a página de "Carrinho de compras"
    And vejo meu pedido com 'Churrasco Misto' incluso no meu carrinho