Feature: cancelamento de pedido

    As a usuário do sistema de delivery
    I want to poder cancelar pedidos quando necessário
    So that não vou receber um pedido indesejado
   
    Scenario: cancelar pedido antes da entrega começar
        Given estou logado como "cliente" com o login "lucasvini@gmail.com" e senha "lucasvini"
        And estou na tela "Acompanhamento do Pedido" e fiz um 'Pedido #'
        And o status do pedido é "Pedido em preparação"
        When tento cancelar o pedido
        And escrevo 'Desisti do pedido'
        And confirmo o cancelamento
        Then vejo a mensagem 'Pedido cancelado com sucesso!!'

    Scenario: cancelar pedido antes da entrega começar
        Given eu estou logado como 'cliente' com o login 'lucasvini@gmail.com' e senha 'lucasvini'
        And eu estou na tela "Acompanhamento do Pedido" e fiz um 'Pedido #'
        And status do pedido é "A caminho"
        When eu tento cancelar o pedido
        Then eu vejo a mensagem 'Falha ao cancelar! Entrega em andamento'