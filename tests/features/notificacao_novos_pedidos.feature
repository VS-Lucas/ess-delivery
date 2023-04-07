Feature: Notificação de Novos Pedidos
    In order to manage new orders
    As a restaurant
    I neet do receive updates about these new orders

    GIVEN that o restaurante "Quentinhas do Almir" está logado na plataforma
    AND está com o horário de expediente aberto

Scenario: Notificação de novo pedido solicitado que será aceito
    WHEN o restaurante recebe a notificação de novo pedido de número #12451
    AND o detalhamento de pedido é aberto na tela
    THEN o restaurante confirma o pedido
    AND o novo pedido é enviado para a lista de pedidos
    AND o status do novo pedido é atualizado para "Em preparo" na lista de pedidos
    AND o cliente recebe o novo status do pedido feito
    
Scenario: Notificação de novo pedido solicitado que será recusado
    WHEN o restaurante recebe a notificação de novo pedido de número #12452
    AND o detalhamento de pedido é aberto na tela
    THEN o restaurante recusa o pedido-
    AND adiciona a justificativa "Não aceitamos pedidos faltando menos de 30min para a loja fechar"
    AND o cliente recebe o novo status do pedido feito

Scenario: Notificação de Pedido Entregue
    WHEN o restaurante recebe a notificação de entrega do pedido de número #12453
    AND o detalhamento de pedido é aberto na tela
    THEN o status do pedido mostra "Entregue"

Scenario: Notificação de Avaliação 
    WHEN o pedido 0258 é finalizado e entregue
    AND o cliente avalia o restaurante com 4 estrelas
    THEN o restaurante recebe a notificação "O pedido 0379 avaliou a experiência com 5 estrelas"

Scenario: Notificação de Cancelamento de Pedido
    WHEN o restaurante recebe a notificação  de cancelamento do pedido de número #12453
    AND o detalhamento de pedido é aberto na tela
    THEN o status do pedido mostra "Cancelado"
    AND é mostrado a justificativa do cliente "Pedido demorou demais!!"

6th Scenario: (Possible Scenario) Notificação de Pedido Entregue
nothing to add
...