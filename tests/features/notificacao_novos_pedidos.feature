Feature: Notificação de Novos Pedidos

    As a restaurant
    I need do receive updates about these new orders
    So I can manage them

Scenario: Notificação de novo pedido solicitado que será aceito
    Given o restaurante "Bode do Nô" está logado na plataforma
    When o restaurante recebe a notificação de novo pedido de número "#12451"
    And o detalhamento do novo pedido de ID "#12451" é aberto na tela
    Then o restaurante confirma o pedido
    
Scenario: Notificação de novo pedido solicitado que será recusado
    Given estou logado no perfil do restaurante "Bode do Nô"
    When A notificação de novo pedido de ID "#12452" foi recebida pelo restaurante
    And eu abro o detalhamento de pedido na tela
    Then eu seleciono a opção de recusar pedido
    And adiciono a justificativa 'Não aceitamos pedidos faltAndo menos de 30min para a loja fechar'
    And o restaurante confirma a recusa

Scenario: Notificação de Pedido Entregue
    Given o restaurante "Bode do Nô" está logado no sistema
    When o restaurante recebe a notificação de entrega do pedido de ID "#12453"
    And o detalhamento de pedido é aberto na tela
    Then o status do pedido mostra 'Entregue'

Scenario: Notificação de Cancelamento de Pedido
    Given eu estou logado no perfil do restaurante "Bode do Nô"
    When o restaurante recebe a notificação  de cancelamento do pedido de ID "#12453"
    And o detalhamento de pedido é aberto na tela
    Then o status do pedido mostra 'Cancelado'
    And é mostrado a justificativa do cliente "Pedido demorou demais!!"