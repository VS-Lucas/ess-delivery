Feature: Cadastrar novo restaurante
    As a administrador do restaurante que não possui conta na aplicação
    I want to inserir dados para o cadastro de um novo restaurante
    So that eu possa ter um perfil e vender meus produtos


Scenario: cadastro de novo restaurante
    Given eu estou na página "Cadastrar login"
    When eu cadastro o email 'lvll_test@hotmail.com' e a senha '1234'
    And registro o nome completo 'Lucas Lima'
    And registro o CPF '123.759.375-22'
    And registro o RG '5.764.358'
    And registro o CNPJ '35.088.752/8735-45'
    And registro a razão social 'lvll_test'
    And registro o nome da loja 'lvll_test'
    And registro o telefone '(81) 97352-5825'
    And registro a especialidade 'Nosdestina'
    And registro o CEP '83652-658'
    And registro a UF 'Pernambuco'
    And registro a cidade 'Olinda'
    And registro o bairro 'Rio Doce'
    And registro o endereço 'Av. Nápoles'
    And registro o número '324'
    And registro o complemento 'Apto 202'    
    Then sou direcionado para a página "Home Restaurante"


#Scenario: cadastro de novo restaurante sem informar a razão social
#    Given eu estou na página "Cadastrar login"
#    When eu cadastro o email 'lvvv_test@hotmail.com' e a senha '1234'
#    And registro o nome completo 'Lucas Van'
#    And registro o CPF '123.759.375-22'
#    And registro o RG '5.764.358'
#    And registro o CNPJ '35.088.752/8735-45'
#    And registro a razão social 'lvll_test'
#    And registro o nome da loja 'lvll_test'
#    And registro o telefone '(81) 97352-5825'
#    And registro a especialidade 'Nosdestina'
#    And registro o CEP '83652-658'
#    And registro a UF 'Pernambuco'
#    And registro a cidade 'Olinda'
#    And registro o bairro 'Rio Doce'
#    And registro o endereço 'Av. Nápoles'
#    And registro o número '324'
#    And registro o complemento 'Apto 202'    
#    Then sou direcionado para a página "Home Restaurante"

#Scenario: cadastro de novo restaurante com CNPJ já registrado
#    Given eu estou na página “Cadastrar Restaurante”
#    When eu adiciono “dog@hotmail.com” no email; “1234” na senha; “Pessoa jurídica” no tipo de cadastro;
#        “Lucas Van-Lume Lima” no nome completo; “222.859.405-23” no CNPJ da pessoa; “55.567.343/0001-33” no CNPJ do restaurante;
#        “DOGFood” no nome da empresa; “44455012” no CEP; “PE” na UF; “R. Boa Vista, 567” no complemento;
#        “Japonesa” no tipo de comida    
#    Then vejo a mensagem “Erro - CNPJ já registrado”
#    And permaneço na página "Cadastrar Restaurante"
