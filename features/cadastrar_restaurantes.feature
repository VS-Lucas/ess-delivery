Feature: Cadastrar novo restaurante
    As a restaurante que não possui conta na aplicação
    I want to inserir dados para o cadastro de um novo restaurante
    So that eu possa ter um perfil e vender meus produtos


Scenario: cadastro de novo restaurante
    Given: eu estou na página “Cadastrar Restaurante”
    When: eu adiciono “lvll@hotmail.com” no email; “1234” na senha; “Pessoa física” no tipo de cadastro;
        “Lucas Van-Lume Lima” no nome completo; “123.759.375-22” no CPF; “24.345.343/0001-22” no CNPJ do restaurante;
        “CinFood” no nome da empresa; “51430012” no CEP; “PE” na UF; “R. Conde da Boa Vista, 345” no complemento;
        “Vegana” no tipo de comida    
    Then: vejo a mensagem “Cadastro bem sucedido” 
        AND sou direcionado para a página “Seu Restaurante”
