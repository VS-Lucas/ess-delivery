Feature: Cadastrar novo restaurante
    As a administrador do restaurante que não possui conta na aplicação
    I want to inserir dados para o cadastro de um novo restaurante
    So that eu possa ter um perfil e vender meus produtos


Scenario: cadastrar restaurante com CNPJ existente 
    Given encontro-me na página "Cadastrar login"
    When registro o email 'vvvl_test@hotmail.com' e a senha '12345'
    And na página "Cadastrar Restaurante" cadastro o nome completo 'Lucca Silva'
    And cadastro o CPF '555.652.156-02'
    And cadastro o RG '5.595.013'
    And cadastro o CNPJ '66.666.666/6666-66'
    And cadastro a razão social 'vvvl_test'
    And cadastro o nome da loja 'vvvl_test'
    And cadastro o telefone '(81) 99832-3248'
    And cadastro a especialidade 'Japonesa'
    And cadastro o CEP '40123-091'
    And cadastro a UF 'Pernambuco'
    And cadastro a cidade 'Recife'
    And cadastro o bairro 'Madalena'
    And cadastro o endereço 'Rua Batista'
    And cadastro o número '823'
    And cadastro o complemento 'Apto 122'
    And cadastro a taxa 'R$ 10'
    And cadastro o horario 'Das 12h às 18h'
    And cadastro o tempo de entrega 'De 30min a 45min' 
    Then vejo a mensagem 'CNPJ já cadastrado'    
    And continuo na página "Cadastrar Restaurante"


Scenario: cadastro de novo restaurante
    Given eu estou na página "Cadastrar login"
    When eu cadastro o email 'lvll_test@hotmail.com' e a senha '1234'
    And na página "Cadastrar Restaurante" eu registro o nome completo 'Lucas Lima'
    And eu registro o CPF '123.759.375-22'
    And eu registro o RG '5.764.358'
    And eu registro o CNPJ '35.088.752/8735-45'
    And eu registro a razão social 'lvll_test'
    And eu registro o nome da loja 'lvll_test'
    And eu registro o telefone '(81) 97352-5825'
    And eu registro a especialidade 'Nosdestina'
    And eu registro o CEP '83652-658'
    And eu registro a UF 'Pernambuco'
    And eu registro a cidade 'Olinda'
    And eu registro o bairro 'Rio Doce'
    And eu registro o endereço 'Av. Nápoles'
    And eu registro o número '324'
    And eu registro o complemento 'Apto 202'
    And eu registro a taxa 'R$ 12'
    And eu registro o horario 'Das 08h às 17h'
    And eu registro o tempo de entrega 'De 15min a 30min'
    Then sou direcionado para a página "Home Restaurante"


Scenario: novo restaurante sem informar a razão social
    Given estou na página "Cadastrar login"
    When cadastro o email 'lvvv_test@hotmail.com' e a senha '12345'
    And na página "Cadastrar Restaurante" registro o nome completo 'Lucas Van'
    And registro o CPF '723.652.156-02'
    And registro o RG '5.291.013'
    And registro o CNPJ '75.132.570/1257-78'
    And registro o nome da loja 'lvvv_test'
    And registro o telefone '(81) 99365-2648'
    And registro a especialidade 'Italiana'
    And registro o CEP '50123-801'
    And registro a UF 'Pernambuco'
    And registro a cidade 'Recife'
    And registro o bairro 'Setúbal'
    And registro o endereço 'Rua Almirante Batista Leão'
    And registro o número '94'
    And registro o complemento 'Apto 111'
    And registro a taxa 'R$ 15'
    And registro o horario 'Das 08h às 12h'
    And registro o tempo de entrega 'De 30min a 45min'    
    Then permaneço na página "Cadastrar Restaurante"


Scenario: registrar restaurante com formatação de CPF inválida 
    Given na página "Cadastrar login"
    When realizo o registro do email 'lvvl_test@hotmail.com' e da senha '12345'
    And na página "Cadastrar Restaurante" eu cadastro o nome completo 'Carlos Silva'
    And eu cadastro o CPF '555.652.32'
    And eu cadastro o RG '6.595.331'
    And eu cadastro o CNPJ '91.443.505/3441-04'
    And eu cadastro a razão social 'lvvl_test'
    And eu cadastro o nome da loja 'lvvl_test'
    And eu cadastro o telefone '(81) 99899-3249'
    And eu cadastro a especialidade 'Sertaneja'
    And eu cadastro o CEP '30144-094'
    And eu cadastro a UF 'Pernambuco'
    And eu cadastro a cidade 'Recife'
    And eu cadastro o bairro 'Pina'
    And eu cadastro o endereço 'Av. Antônio de Goes'
    And eu cadastro o número '27'
    And eu cadastro o complemento ''
    And eu cadastro a taxa 'R$ 11'
    And eu cadastro o horario 'Das 14h às 00h'
    And eu cadastro o tempo de entrega 'De 45min a 1h'
    Then mantenho-me na página "Cadastrar Restaurante"


Scenario: cadastro de restaurante com email existente 
    Given eu esteja na página "Cadastrar login"
    When eu registro o email 'lvll@gmail.com' e a senha '12345'
    Then observo a mensagem 'Email já cadastrado'
    And permaneço na página "Cadastrar login"


Scenario: restaurante novo com formatação de email inválida 
    Given me vejo na página "Cadastrar login"
    When realizo o cadastro do email 'lvll' e da senha '12345'
    Then eu vejo a mensagem 'Digite um email válido'
    And localizo-me na página "Cadastrar login"
