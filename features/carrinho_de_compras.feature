Scenario: Retirar um item do carrinho
Given estou logado com o usuário "@Lara2462" e com a senha "senha1234"
And eu estou na página do carrinho de compras
And o meu carrinho de compras tem o item "A", com "1 unidade", e o item "B" com "2 unidades"
When eu excluo o item "A"
Then o item "A" não aparece mais no meu carrinho

Scenario: Alterar a quantidade de algum item no carrinho e ser bem sucedido
Given estou logado com o usuário "@Lara2462" e com a senha "senha1234"
And eu estou na página do carrinho de compras
And o meu carrinho de compras tem apenas o item "A", com "1 unidade"
When eu altero a quantidade do item "A" para "3 unidades"
Then aparece que tem 3 unidade do item "A" no meu carrinho

Scenario: Alterar a quantidade de algum item no carrinho e ser mal sucedido
Given estou logado com o usuário "@Lara2462" e com a senha "senha1234"
And eu estou na página do carrinho de compras
And o meu carrinho de compras tem apenas o item "B", com "1 unidade"
When eu altero a quantidade do item "B" para "2 unidades"
Then aparece uma mensagem dizendo "Não há estoque o suficiente para essa quantidade"

Scenario: Acessar informações sobre algum item a partir do carrinho de compras
Given estou logado com o usuário "@Lara2462" e com a senha "senha1234"
And eu estou na página do carrinho de compras
And o meu carrinho de compras tem o item "A"
When eu aperto para visualizar mais informações a respeito do item "A"
Then aparece uma tela com mais informações a respeito do item "A", fornecidas pelo restaurante

Scenario: Finalizar a compra
Given estou logado com o usuário "@Lara2462" e com a senha "senha1234"
And eu estou na página do carrinho de compras
And o meu carrinho de compras tem o item "A", o item "B" e o item "C"
When eu finalizo a compra 
Then eu sou direcionado para uma página com o resumo do meu pedido, contendo o valor e um espaço para inserir a forma de pagamento

Scenario: Acessar o carrinho de compras
Given estou logado com o usuário "@Lara2462" e com a senha "senha1234"
And eu estou na página inicial do sistema
And eu tenho os itens "A" e "B" adicionados no meu carrinho de compras
When eu acesso o meu carrinho de compras
Then eu sou direcionado para a página do carrinho de compras
And eu vejo os itens "A" e "B"
