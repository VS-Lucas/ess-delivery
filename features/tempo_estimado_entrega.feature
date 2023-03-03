Feature: calcular tempo estimado de entrega
  As a usuário do sistema com um perfil do tipo “cliente”
  I want to visualizar o tempo estimado da entrega de um pedido
  So that eu possa me manter atualizado sobre a entrega do pedido
  
Scenario: Calcular tempo estimado com sucesso
  Given estou logado no sistema com uma conta do tipo “cliente” com login “xuxa” e senha “123”
  And fiz um pedido no restaurante “outback”
  When eu recebo uma notificação da confirmação do pedido
  And e clico em “acompanhar pedido”
  Then eu vejo o tempo estimado de “30 minutos” para a entrega do meu pedido

Scenario: Atualização do tempo de entrega
  Given eu estou logado no sistema com uma conta do tipo “cliente” com login “CarlosBala” e senha “1234”
  And eu fiz um pedido no restaurante “Marcelinho dos Salgados”
  And eu recebi uma notificação de confirmação do pedido de número "#25461"
  And o tempo estimado de entrega do pedido de número "#25461" é 35 minutos
  When eu checo o painel de acompanhamento de pedido
  Then eu vejo que o tempo de entrega do pedido "#25461" foi atualizado para 40 minutos

Scenario: Tempo estimado para retirada no estabelecimento
  Given eu estou logado no sistema com uma conta do tipo “cliente” com login “CarlosBala” e senha “1234”
  And fiz um pedido no restaurante “Papa Capim” com retirada no estabelecimento
  When eu entro na página “Acompanhar pedido”
  Then vejo o pedido número "#7354" com tempo estimado de "25 min"

Scenario: Endereço inválido
  Given estou logado no sistema com uma conta do tipo “cliente” com o login “nome_cliente” e senha “senha1234”
  And eu estou na página de finalização da compra
  And inseri o endereço de entrega "Rua do Cin, 23"
  When eu tento visualizar o tempo estimado de entrega
  Then vejo que o meu endereço é inválido
  And vejo que o tempo estimado de entrega não pode ser calculado
