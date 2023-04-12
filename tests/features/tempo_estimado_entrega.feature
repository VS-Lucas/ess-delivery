Feature: calcular tempo estimado de entrega
  As a usuário do sistema com um perfil do tipo “cliente”
  I want to visualizar o tempo estimado da entrega de um pedido
  So that eu possa me manter atualizado sobre a entrega do pedido
  
Scenario: Calcular tempo estimado com sucesso
  Given eu estou logado como 'cliente' com email 'severino@gmail.com' e senha 'biu123'
    When eu clico no card onde contem o prato "Churrasco misto" clico no botão de "Carrinho de compras"
    And na página de "Carrinho de compras" clico no botão de "Check out"
    And na página de 'Check out' clico no botão de 'Confirmar' após abrir um modal clico em 'Acompanhar'
    Then eu sou redirecionado para a página de 'Acompanhamento de pedidos'
    And vejo o tempo estimado de entrega para '15min-30min'


