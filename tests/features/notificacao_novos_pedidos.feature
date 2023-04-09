Feature: Notificação de Novos Pedidos
    In order to manage new orders
    As a restaurant
    I neet do receive updates about these new orders

    Given that o restaurante 'Quentinhas do Almir' está logado na plataforma
    And está com o horário de expediente aberto

Scenario: Notificação de novo pedido solicitado que será aceito
    When o restaurante recebe a notificação de novo pedido de número '#12451'
    And o detalhamento de pedido é aberto na tela
    Then o restaurante confirma o pedido
    And o novo pedido é enviado para a lista de pedidos
    And o status do novo pedido é atualizado para 'Em preparo' na lista de pedidos
    And o cliente recebe o novo status do pedido feito
    
Scenario: Notificação de novo pedido solicitado que será recusado
    When o restaurante recebe a notificação de novo pedido de número '#12452'
    And o detalhamento de pedido é aberto na tela
    Then o restaurante recusa o pedido-
    And adiciona a justificativa 'Não aceitamos pedidos faltAndo menos de 30min para a loja fechar'
    And o cliente recebe o novo status do pedido feito

Scenario: Notificação de Pedido Entregue
    When o restaurante recebe a notificação de entrega do pedido de número '#12453'
    And o detalhamento de pedido é aberto na tela
    Then o status do pedido mostra 'Entregue'

Scenario: Notificação de Cancelamento de Pedido
    When o restaurante recebe a notificação  de cancelamento do pedido de número '#12453'
    And o detalhamento de pedido é aberto na tela
    Then o status do pedido mostra 'Cancelado'
    And é mostrado a justificativa do cliente 'Pedido demorou demais!!'