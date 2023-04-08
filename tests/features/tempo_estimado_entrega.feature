Feature: calcular tempo estimado de entrega
  As a usuário do sistema com um perfil do tipo “cliente”
  I want to visualizar o tempo estimado da entrega de um pedido
  So that eu possa me manter atualizado sobre a entrega do pedido
  
Scenario: Calcular tempo estimado com sucesso
  Given eu estou logado como “cliente” com login 'Carlos Silva' e senha “123”
  And estou na página "Acompanhamento de pedido"
  And fiz o pedido do prato 'Cartola Tradicional'
  When eu recebo uma notificação com status 'Confirmado' do pedido '#2345'
  Then vejo o tempo estimado de '15min-30min' para a entrega do meu pedido

|
Scenario: Atualização do tempo de entrega
  Given eu estou logado no sistema com uma conta do tipo “cliente” com login 'CarlosBala' e senha “1234”
  And eu me encontro na página "Acompanhamento de pedido"
  And eu fiz um pedido no restaurante "Marcelinho dos Salgados”
  And eu recebi uma notificação do pedido '#25461' com status 'Confirmado'
  And o tempo estimado de entrega do pedido de número "#25461" é 35 minutos
  When eu checo o painel de acompanhamento de pedido
  Then eu vejo que o tempo de entrega do pedido "#25461" foi atualizado para 40 minutos

Scenario: Tempo estimado para retirada no estabelecimento
  Given estou logado com uma conta do tipo “cliente” com login 'Lucas Van'
  And fiz um pedido no restaurante “Papa Capim” com retirada no estabelecimento
  When eu entro na página “Acompanhar pedido”
  Then vejo o pedido número "#7354" com tempo estimado de "25 min"
|


