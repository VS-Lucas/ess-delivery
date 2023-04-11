Feature: Carrinho de compras
  As a usuário do sistema do tipo "cliente"
  I want to ter acesso aos produtos selecionados por mim
  So that eu possa ver todos os produtos e retirar ou adicionar itens

Scenario: Proceder para checkout do pedido sem sucesso
  Given fiz login com o email "severino@gmail.com" e com a senha "biu123"
  And eu me encontro na página do "Carrinho de compras"
  And o meu carrinho de compras está "vazio"
  When eu tento continuar para "Checkout"
  Then eu vejo a mensagem na tela 'Preencha seu carrinho antes de proceder para checkout!'

Scenario: Adicionar um item ao carrinho a partir da página inicial do cliente com o carrinho estando vazio, e ser bem sucedido
  Given Loguei como "cliente" com o email "severino@gmail.com" e com a senha "biu123"
  And eu me encontro na página inicial do cliente
  And meu carrinho está vazio
  When eu tento adicionar "Churrasco Misto" no meu carrinho
  And eu acesso meu carrinho
  Then o item 'Churrasco Misto' é exibido no meu carrinho

Scenario: Adicionar um item ao carrinho a partir da página inicial do cliente com o carrinho não vazio, e ser mal sucedido
  Given Eu loguei como "cliente" com o email "severino@gmail.com" e com a senha "biu123"
  And eu me encontro na página inicial
  And meu carrinho não está vazio
  When eu tento adicionar "X-Vegan" no meu carrinho
  Then eu vejo a mensagem 'Só é possível acrescentar ao carrinho itens de um mesmo restaurante!'

Scenario: Adicionar um item ao carrinho a partir da página inicial do cliente com o carrinho não vazio, e ser bem sucedido
  Given loguei como "cliente" com o email "severino@gmail.com" e com a senha "biu123"
  And estou presente na página inicial
  And o meu carrinho não está vazio
  When eu tento adicionar "Buchada de Bode" no meu carrinho
  And acesso meu carrinho
  Then o item 'Buchada de Bode' aparece na tela do carrinho

Scenario: Adicionar um item que já se encontre no carrinho ao carrinho a partir da página inicial do cliente, e ser bem sucedido
  Given eu loguei com o email "severino@gmail.com" e com a senha "biu123"
  And me encontro na página inicial
  And o meu carrinho de compras tem os itens 'Churrasco Misto' com 1 unidade e 'Buchada de Bode' com 1 unidade
  When eu tento acrescentar o item "Buchada de Bode" que já existe no carrinho
  And eu acesso o carrinho
  Then o item 'Buchada de Bode' aparece no meu carrinho com 2 unidades

Scenario: Aumentar a quantidade de algum item no carrinho
  Given estou logado com o usuário "severino@gmail.com" e com a senha "biu123"
  And encontro-me na página do "Carrinho de compras"
  And o meu carrinho de compras tem o item 'Churrasco Misto' com 1 unidade e o item 'Buchada de Bode' com 2 unidades
  When eu altero a quantidade do item "Churrasco Misto" para 2 unidades
  Then aparece que tem 2 unidades do item "Churrasco Misto" no meu carrinho

Scenario: Diminuir a quantidade de algum item no carrinho
  Given Estou conectado com o usuário "severino@gmail.com" e com a senha "biu123"
  And Eu estou na página do "Carrinho de compras"
  And o meu carrinho tem o item 'Churrasco Misto' com 2 unidades e o item 'Buchada de Bode' com 2 unidades
  When eu tento alterar a quantidade do item "Churrasco Misto" para 1 unidade
  Then eu vejo que tem 1 unidade do item 'Churrasco Misto' no meu carrinho

Scenario: Diminuir a quantidade de algum item no carrinho até removê-lo
  Given Conectei no sistema com o usuário "severino@gmail.com" e com a senha "biu123"
  And localizo-me na página do "Carrinho de compras"
  And meu carrinho de compras tem o item 'Churrasco Misto' com 1 unidade e o item 'Buchada de Bode' com 2 unidades
  When eu tento diminuir a quantidade do item "Churrasco Misto"
  Then eu vejo que o item 'Churrasco Misto' não se encontra mais no meu carrinho

Scenario: Retirar um item do carrinho
  Given Estou logado como "cliente" com o email "severino@gmail.com" e senha "biu123"
  And eu estou na página do "Carrinho de compras"
  And o meu carrinho de compras tem o item 'Buchada de Bode' com 2 unidades
  When eu excluo o item "Buchada de Bode"
  Then o item 'Buchada de Bode' não aparece mais no meu carrinho

Scenario: Adicionar um item ao carrinho a partir da página de restaurantes com o carrinho estando vazio, e ser bem sucedido
  Given estou logado no sistema como "cliente" com o email "severino@gmail.com" e com a senha "biu123"
  And eu me encontro presente na página de restaurantes
  And meu carrinho se encontra sem itens
  When eu tento adicionar "X-Bacon" no meu carrinho
  And eu acesso meu carrinho de compras
  Then o item 'X-Bacon' aparece no meu carrinho

Scenario: Adicionar um item ao carrinho a partir da página de restaurantes com o carrinho não vazio, e ser mal sucedido
  Given encontro-me logado no sistema como "cliente" com o email "severino@gmail.com" e com a senha "biu123"
  And eu me encontro na página de restaurantes
  And meu carrinho não se encontra vazio
  When eu tento adicionar "Cartola Tradicional" no meu carrinho
  Then eu vejo a mensagem de erro 'Só é possível acrescentar ao carrinho itens de um mesmo restaurante!'

Scenario: Adicionar um item ao carrinho a partir da página de restaurantes com o carrinho não vazio, e ser bem sucedido
  Given eu me encontro logado no sistema como "cliente" com o email "severino@gmail.com" e com a senha "biu123"
  And encontro-me na página de restaurantes
  And o meu carrinho não se encontra vazio
  When eu tento adicionar "X-Ratão" no meu carrinho
  And eu prossigo para o meu carrinho de compras
  Then o item 'X-Ratão' aparece no carrinho