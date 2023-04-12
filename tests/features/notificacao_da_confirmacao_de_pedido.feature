Feature: Notificação da Confirmação de Pedido

  As a usuário do sistema do tipo "cliente"
  I want to acompanhar o status do meu pedido
  So that eu possa saber se o meu pedido foi concluído com êxito

# Pedido confirmado
Scenario: Notificação de pedido confirmado

  Given estou logado como o cliente "Ana Carla Guerra de Albuquerque Melo"
  And   estou na tela de Home do Cliente aguardando uma resposta do restaurante ao meu pedido cujo "id" é "1"
  When  entro na tela de Histórico de Pedidos
  Then  eu vejo o "status" "Confirmado" no pedido de "id" igual a "1"

# Pedido recusado
Scenario: Notificação de pedido recusado

  Given fiz login no sistema como o cliente "Ana Carla Guerra de Albuquerque Melo"
  And   estou na tela de Home do Cliente aguardando uma resposta do restaurante ao meu pedido cujo "id" é "2"
  When  eu entro na tela de Histórico de Pedidos
  Then  eu vejo o "status" "Recusado" no pedido de "id" igual a "2"

# Pedido a caminho
Scenario: Notificação de pedido a caminho

  Given entrei no sistema como o cliente "Ana Carla Guerra de Albuquerque Melo"
  And   estou na tela de Home do Cliente esperando o meu pedido de "id" igual a "3" mudar de status para A caminho
  When  acesso a tela de Histórico de Pedidos
  Then  eu vejo o "status" "A caminho" no pedido de "id" igual a "3"

# Cliente confirma a entrega
Scenario: Entrega realizada com sucesso

  Given loguei no sistema como o cliente "Ana Carla Guerra de Albuquerque Melo"
  And   estou na tela de Home do Cliente esperando o pedido de "id" igual a "4" chegar para confirmar a entrega
  When  chego na tela de Histórico de Pedidos
  And   eu vejo o "status" "A caminho" no pedido de "id" igual a "4"
  And   entro na tela de Detalhamento de Pedido
  Then  eu vejo uma opção para "Confirmar entrega"
