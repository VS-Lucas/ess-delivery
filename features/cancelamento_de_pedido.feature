Feature: cancelamento de pedido

    As a usuário do sistema de delivery
    I want to poder cancelar pedidos quando necessário
    So that não vou receber um pedido indesejado
    
    Scenario: cancelar pedido antes da entrega começar
        Given estou logado como "usuário" com o login "lucas" e senha "1234"
        And fiz um pedido
        And o status do pedido é "Sendo preparado"
        And estou na tela "Detalhes do pedido"
        When clico no botão "Cancelar pedido"
        And justifico o motivo do cancelamento
        And clico no botão "Confirmar cancelamento"
        Then vejo a mensagem "Pedido cancelado"

    Scenario: cancelar pedido após a entrega começar 
        Given estou logado como "usuário" com o login "lucas" e senha "1234"
        And fiz um pedido
        And o status do pedido é "Entrega em andamento"
        And estou na tela de informações do pedido
        When clico no botão "Cancelar pedido"
        Then vejo a mensagem "Falha ao cancelar! Entrega em andamento"

    Scenario: pedido consta como cancelado no histórico de pedidos
        Given estou logado como "usuário" com o login "lucas" e senha "1234"
        And fiz um pedido de ID "123"
        And o pedido foi cancelado
        When clico em "Histórico de pedidos"
        Then vejo o pedido de ID "123" cancelado

    Scenario: teste