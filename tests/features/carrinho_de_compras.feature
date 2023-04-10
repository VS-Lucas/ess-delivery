Feature: Carrinho de compras
  As a usuário do sistema do tipo "cliente"
  I want to ter acesso aos produtos selecionados por mim
  So that eu possa ver todos os produtos e retirar ou adicionar itens

Scenario: Retirar um item do carrinho
  Given Estou logado como "cliente" com o email "severino@gmail.com" e com a senha "biu123"
  And eu estou na página do "Carrinho de compras"
  And o meu carrinho de compras tem o item 'Churrasco Misto', com 1 unidade, e o item 'Cartola Tradicional' com 2 unidades
  When eu excluo o item "Churrasco Misto"
  Then o item 'Churrasco Misto' não aparece mais no meu carrinho

