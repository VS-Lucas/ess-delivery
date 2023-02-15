Feature: Notificação de Novos Pedidos
    In order to manage new orders
    As a restaurant
    I neet do receive updates about these new orders
...
    GIVEN that o restaurante "Quentinhas do Almir" está logado na plataforma
    AND desde às 8hrs está com o horário de expediente aberto

1st Scenario: Novo Pedido
    WHEN a cliente "Maria Santos" solicita 1 prato "Frango Grelhado" tamanho P
    AND adiciona o endereço válido "Rua Jornalista Aníbal"
    AND adiciona o método de pagamento válido "PIX"
    AND confirma pedido com o valor de 10 reais
    THEN o restaurante recebe a notificação "Um novo pedido foi feito"
    
2nd Scenario: Mudança de Endereço do Pedido
    WHEN a cliente "Dona Gil" confirma o pedido "Frango a Parmegiana"
    THEN o restaurante recebe a notificação "Um novo pedido foi feito"
    WHEN a cliente decide mudar o endereço para "Avenida da Arquitetura"
    AND confirma as novas mudanças no pedido 0256
    THEN o restaurante recebe a notificação "Mudança no Endereço do pedido 0256"

3rd Scenario: Mudança na forma de pagamento
    WHEN a cliente "Dona Gil" confirma o pedido "Salda Ceaser"
    THEN o restaurante recebe a notificação "Um novo pedido foi feito"
    WHEN a cliente decide mudar o método de pagamento para "Dinheiro"
    AND confirma as novas mudanças no pedido 0257
    THEN o restaurante recebe a notificação "Mudança no método de pagamento do pedido 0257"

4th Scenario: Notificação de Avaliação 
    WHEN o pedido 0258 é finalizado e entregue
    AND o cliente avalia o restaurante com 4 estrelas
    THEN o restaurante recebe a notificação "O pedido 0379 avaliou a experiência com 5 estrelas"

5th Scenario: Notificação de Cancelamento de Pedido
    WHEN o restaurante "Bodega Chinesa" recebe a notificação "Pedido 0123 Cancelado"
    AND o prato "combo barca de sushi família" ainda estava sendo preparado
    THEN o restaurante cancela a entrega
    AND cliente "Ana Melo" envia motivo do cancelamento "Mudei de ideia, quero pedir um prato maior"

6th Scenario: (Possible Scenario) Notificação de Pedido Entregue