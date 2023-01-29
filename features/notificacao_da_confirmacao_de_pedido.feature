Feature: Notificação da Confirmação de 

Scenario: Ser notificado de que falta apenas o pedido ser confirmado pelo estabelecimento.
Given estou logado com o usuário “José Admilson” e com a senha “senha123”
And eu estou na página do carrinho de compras
And eu forneci informações de um endereço válido
And eu selecionei um método de pagamento válido
And a loja da qual estou pedindo está aberta
And a loja entrega no endereço que forneci
When eu confirmo o meu pedido
And o pagamento é processado com êxito
Then se exibe na tela uma mensagem avisando que o pedido foi feito e aguarda confirmação da loja

Scenario: Ser notificado de que o pedido não pôde ser feito devido à loja estar fechada.
Given estou logado com o usuário “Miguel Wellington” e com a senha “senha234”
And eu estou na página do carrinho de compras
And eu forneci informações de um endereço válido
And eu selecionei um método de pagamento válido
And a loja da qual estou pedindo está fechada no momento
And a loja entrega no endereço que forneci
When eu confirmo o meu pedido
Then se exibe na tela uma mensagem avisando que o pedido não pôde ser concluído pois a loja se encontra fechada no momento

Scenario: Ser notificado de que o pedido não pôde ser concluído devido a um erro no processamento do pagamento.
Given estou logado com o usuário “Rafael Hamilton” e com a senha “senha345”
And eu estou na página do carrinho de compras
And eu forneci informações de um endereço válido
And eu selecionei um método de pagamento válido
And a loja da qual estou pedindo está aberta
And a loja entrega no endereço que forneci
When eu confirmo o meu pedido
And o pagamento não é processado com êxito
Then se exibe na tela uma mensagem avisando que o pedido não pôde ser concluído pois houve um erro no processamento do pagamento

Scenario: Ser notificado de que o pedido não pôde ser realizado devido à loja não entregar no endereço fornecido.
Given estou logado com o usuário “Gabriel McEarlson” e com a senha “senha456”
And eu estou na página do carrinho de compras
And eu forneci informações de um endereço válido
And eu selecionei um método de pagamento válido
And a loja da qual estou pedindo está aberta
And a loja não entrega no endereço que forneci
When eu confirmo o meu pedido
Then se exibe na tela uma mensagem avisando que o pedido não pôde ser concluído pois a loja não entrega no endereço fornecido ###LINHA MODIFICADA 