const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/cadastrar_restaurantes.feature --require tests/step_definitions/cadastrar_restaurantes.js

setDefaultTimeout(100000);

//////////// Scenario: cadastro de novo restaurante ////////////

Given('eu estou na página "Cadastrar login"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/register-login');
});

When('eu cadastro o email {string} e a senha {string}', async function (email, password) {
    const emailInput = await this.browser.$('[name="email"]');
    const passwordInput = await this.browser.$('[name="password"]');
    await emailInput.setValue(email);
    await passwordInput.setValue(password);
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    const ContinuarCadastro = await this.browser.$('//button[text()="Continuar cadastro"]');
    await ContinuarCadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 15000)); 
});

When('na página "Cadastrar Restaurante" eu registro o nome completo {string}', async function (nomeCompleto) {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/register-restaurant');

    const nomeInput = await this.browser.$('[id="nome"]');
    await nomeInput.setValue(nomeCompleto);
});

When('eu registro o CPF {string}', async function (cpf) {
    const cpfInput = await this.browser.$('[id="cpf"]');
    await cpfInput.setValue(cpf);
});

When('eu registro o RG {string}', async function (rg) {
    const rgInput = await this.browser.$('[id="rg"]');
    await rgInput.setValue(rg);
});

When('eu registro o CNPJ {string}', async function (cnpj) {
    const cnpjInput = await this.browser.$('[id="cnpj"]');
    await cnpjInput.setValue(cnpj);
});

When('eu registro a razão social {string}', async function (razaoSocial) {
    const rzInput = await this.browser.$('[id="razao_social"]');
    await rzInput.setValue(razaoSocial);
});

When('eu registro o nome da loja {string}', async function (nomeLoja) {
    const nlInput = await this.browser.$('[id="nome_loja"]');
    await nlInput.setValue(nomeLoja);
});

When('eu registro o telefone {string}', async function (tel) {
    const telInput = await this.browser.$('[id="telefone"]');
    await telInput.setValue(tel);
});

When('eu registro a especialidade {string}', async function (especialidade) {
    const espInput = await this.browser.$('[id="especialidade"]');
    await espInput.setValue(especialidade);
});

When('eu registro o CEP {string}', async function (cep) {
    const cepInput = await this.browser.$('[id="cep"]');
    await cepInput.setValue(cep);
});

When('eu registro a UF {string}', async function (uf) {
    const ufInput = await this.browser.$('[id="estado_uf"]');
    await ufInput.setValue(uf);
});

When('eu registro a cidade {string}', async function (cidade) {
    const cidadeInput = await this.browser.$('[id="cidade"]');
    await cidadeInput.setValue(cidade);
});

When('eu registro o bairro {string}', async function (bairro) {
    const bairroInput = await this.browser.$('[id="bairro"]');
    await bairroInput.setValue(bairro);
});

When('eu registro o endereço {string}', async function (endereco) {
    const endInput = await this.browser.$('[id="endereco"]');
    await endInput.setValue(endereco);
});

When('eu registro o número {string}', async function (numero) {
    const numInput = await this.browser.$('[id="numero"]');
    await numInput.setValue(numero);
});

When('eu registro o complemento {string}', async function (complemento) {
    const comInput = await this.browser.$('[id="complemento"]');
    await comInput.setValue(complemento);
});

When('eu registro a taxa {string}', async function (taxa) {
    const taxaInput = await this.browser.$('[id="taxa"]');
    await taxaInput.setValue(taxa);
});

When('eu registro o horario {string}', async function (horario) {
    const horaInput = await this.browser.$('[id="horario"]');
    await horaInput.setValue(horario);
});

When('eu registro o tempo de entrega {string}', async function (tempo_entrega) {
    const entregaInput = await this.browser.$('[id="tempo_entrega"]');
    await entregaInput.setValue(tempo_entrega);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cadastro = await this.browser.$('//button[text()="Salvar"]');
    await cadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 20000));
});

Then('sou direcionado para a página "Home Restaurante"', async function () {
    const curUrl = await this.browser.getUrl();
    await expect(curUrl).to.include('http://localhost:8080/home-restaurant');

    await this.browser.deleteSession();
    await new Promise((resolve) => setTimeout(resolve, 10000));
});


//////////// Scenario: cadastro de novo restaurante sem informar a razão social ////////////

Given('estou na página "Cadastrar login"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/register-login');
});

When('cadastro o email {string} e a senha {string}', async function (email, password) {
    const emailInput = await this.browser.$('[name="email"]');
    const passwordInput = await this.browser.$('[name="password"]');
    await emailInput.setValue(email);
    await passwordInput.setValue(password);
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    const ContinuarCadastro = await this.browser.$('//button[text()="Continuar cadastro"]');
    await ContinuarCadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 10000)); 
});

When('na página "Cadastrar Restaurante" registro o nome completo {string}', async function (nomeCompleto) {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/register-restaurant');

    const nomeInput = await this.browser.$('[id="nome"]');
    await nomeInput.setValue(nomeCompleto);
});

When('registro o CPF {string}', async function (cpf) {
    const cpfInput = await this.browser.$('[id="cpf"]');
    await cpfInput.setValue(cpf);
});

When('registro o RG {string}', async function (rg) {
    const rgInput = await this.browser.$('[id="rg"]');
    await rgInput.setValue(rg);
});

When('registro o CNPJ {string}', async function (cnpj) {
    const cnpjInput = await this.browser.$('[id="cnpj"]');
    await cnpjInput.setValue(cnpj);
});

When('registro o nome da loja {string}', async function (nomeLoja) {
    const nlInput = await this.browser.$('[id="nome_loja"]');
    await nlInput.setValue(nomeLoja);
});

When('registro o telefone {string}', async function (tel) {
    const telInput = await this.browser.$('[id="telefone"]');
    await telInput.setValue(tel);
});

When('registro a especialidade {string}', async function (especialidade) {
    const espInput = await this.browser.$('[id="especialidade"]');
    await espInput.setValue(especialidade);
});

When('registro o CEP {string}', async function (cep) {
    const cepInput = await this.browser.$('[id="cep"]');
    await cepInput.setValue(cep);
});

When('registro a UF {string}', async function (uf) {
    const ufInput = await this.browser.$('[id="estado_uf"]');
    await ufInput.setValue(uf);
});

When('registro a cidade {string}', async function (cidade) {
    const cidadeInput = await this.browser.$('[id="cidade"]');
    await cidadeInput.setValue(cidade);
});

When('registro o bairro {string}', async function (bairro) {
    const bairroInput = await this.browser.$('[id="bairro"]');
    await bairroInput.setValue(bairro);
});

When('registro o endereço {string}', async function (endereco) {
    const endInput = await this.browser.$('[id="endereco"]');
    await endInput.setValue(endereco);
});

When('registro o número {string}', async function (numero) {
    const numInput = await this.browser.$('[id="numero"]');
    await numInput.setValue(numero);
});

When('registro o complemento {string}', async function (complemento) {
    const comInput = await this.browser.$('[id="complemento"]');
    await comInput.setValue(complemento);
});

When('registro a taxa {string}', async function (taxa) {
    const taxaInput = await this.browser.$('[id="taxa"]');
    await taxaInput.setValue(taxa);
});

When('registro o horario {string}', async function (horario) {
    const horaInput = await this.browser.$('[id="horario"]');
    await horaInput.setValue(horario);
});

When('registro o tempo de entrega {string}', async function (tempo_entrega) {
    const entregaInput = await this.browser.$('[id="tempo_entrega"]');
    await entregaInput.setValue(tempo_entrega);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cadastro = await this.browser.$('//button[text()="Salvar"]');
    await cadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
});

Then('permaneço na página "Cadastrar Restaurante"', async function () {
    const curUrl = await this.browser.getUrl();
    await expect(curUrl).to.include('http://localhost:8080/register-restaurant');

    await this.browser.deleteSession();
    await new Promise((resolve) => setTimeout(resolve, 10000));
});


//////////// Scenario: cadastrar restaurante com CNPJ existente ////////////

Given('encontro-me na página "Cadastrar login"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/register-login');
});

When('registro o email {string} e a senha {string}', async function (email, password) {
    const emailInput = await this.browser.$('[name="email"]');
    const passwordInput = await this.browser.$('[name="password"]');
    await emailInput.setValue(email);
    await passwordInput.setValue(password);
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    const ContinuarCadastro = await this.browser.$('//button[text()="Continuar cadastro"]');
    await ContinuarCadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 10000)); 
});

When('na página "Cadastrar Restaurante" cadastro o nome completo {string}', async function (nomeCompleto) {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/register-restaurant');

    const nomeInput = await this.browser.$('[id="nome"]');
    await nomeInput.setValue(nomeCompleto);
});

When('cadastro o CPF {string}', async function (cpf) {
    const cpfInput = await this.browser.$('[id="cpf"]');
    await cpfInput.setValue(cpf);
});

When('cadastro o RG {string}', async function (rg) {
    const rgInput = await this.browser.$('[id="rg"]');
    await rgInput.setValue(rg);
});

When('cadastro o CNPJ {string}', async function (cnpj) {
    const cnpjInput = await this.browser.$('[id="cnpj"]');
    await cnpjInput.setValue(cnpj);
});

When('cadastro a razão social {string}', async function (razao_social) {
    const rzInput = await this.browser.$('[id="razao_social"]');
    await rzInput.setValue(razao_social);
});

When('cadastro o nome da loja {string}', async function (nomeLoja) {
    const nlInput = await this.browser.$('[id="nome_loja"]');
    await nlInput.setValue(nomeLoja);
});

When('cadastro o telefone {string}', async function (tel) {
    const telInput = await this.browser.$('[id="telefone"]');
    await telInput.setValue(tel);
});

When('cadastro a especialidade {string}', async function (especialidade) {
    const espInput = await this.browser.$('[id="especialidade"]');
    await espInput.setValue(especialidade);
});

When('cadastro o CEP {string}', async function (cep) {
    const cepInput = await this.browser.$('[id="cep"]');
    await cepInput.setValue(cep);
});

When('cadastro a UF {string}', async function (uf) {
    const ufInput = await this.browser.$('[id="estado_uf"]');
    await ufInput.setValue(uf);
});

When('cadastro a cidade {string}', async function (cidade) {
    const cidadeInput = await this.browser.$('[id="cidade"]');
    await cidadeInput.setValue(cidade);
});

When('cadastro o bairro {string}', async function (bairro) {
    const bairroInput = await this.browser.$('[id="bairro"]');
    await bairroInput.setValue(bairro);
});

When('cadastro o endereço {string}', async function (endereco) {
    const endInput = await this.browser.$('[id="endereco"]');
    await endInput.setValue(endereco);
});

When('cadastro o número {string}', async function (numero) {
    const numInput = await this.browser.$('[id="numero"]');
    await numInput.setValue(numero);
});

When('cadastro o complemento {string}', async function (complemento) {
    const comInput = await this.browser.$('[id="complemento"]');
    await comInput.setValue(complemento);
});

When('cadastro a taxa {string}', async function (taxa) {
    const taxaInput = await this.browser.$('[id="taxa"]');
    await taxaInput.setValue(taxa);
});

When('cadastro o horario {string}', async function (horario) {
    const horaInput = await this.browser.$('[id="horario"]');
    await horaInput.setValue(horario);
});

When('cadastro o tempo de entrega {string}', async function (tempo_entrega) {
    const entregaInput = await this.browser.$('[id="tempo_entrega"]');
    await entregaInput.setValue(tempo_entrega);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cadastro = await this.browser.$('//button[text()="Salvar"]');
    await cadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
});

Then('vejo a mensagem {string}', async function (mensagem) {
    const mensagemElement = await this.browser.$(`//*[contains(text(),"${mensagem}")]`);
    const mensagemText = await mensagemElement.getText();
    await assert.strictEqual(mensagemText, mensagem);
});

Then('continuo na página "Cadastrar Restaurante"', async function () {
    const curUrl = await this.browser.getUrl();
    await expect(curUrl).to.include('http://localhost:8080/register-restaurant');

    await this.browser.deleteSession();
    await new Promise((resolve) => setTimeout(resolve, 10000));
});


//////////// Scenario: registrar restaurante com formatação de CPF inválida ////////////

Given('na página "Cadastrar login"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/register-login');
});

When('realizo o registro do email {string} e da senha {string}', async function (email, password) {
    const emailInput = await this.browser.$('[name="email"]');
    const passwordInput = await this.browser.$('[name="password"]');
    await emailInput.setValue(email);
    await passwordInput.setValue(password);
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    const ContinuarCadastro = await this.browser.$('//button[text()="Continuar cadastro"]');
    await ContinuarCadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 10000)); 
});

When('na página "Cadastrar Restaurante" eu cadastro o nome completo {string}', async function (nomeCompleto) {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/register-restaurant');

    const nomeInput = await this.browser.$('[id="nome"]');
    await nomeInput.setValue(nomeCompleto);
});

When('eu cadastro o CPF {string}', async function (cpf) {
    const cpfInput = await this.browser.$('[id="cpf"]');
    await cpfInput.setValue(cpf);
});

When('eu cadastro o RG {string}', async function (rg) {
    const rgInput = await this.browser.$('[id="rg"]');
    await rgInput.setValue(rg);
});

When('eu cadastro o CNPJ {string}', async function (cnpj) {
    const cnpjInput = await this.browser.$('[id="cnpj"]');
    await cnpjInput.setValue(cnpj);
});

When('eu cadastro a razão social {string}', async function (razao_social) {
    const rzInput = await this.browser.$('[id="razao_social"]');
    await rzInput.setValue(razao_social);
});

When('eu cadastro o nome da loja {string}', async function (nomeLoja) {
    const nlInput = await this.browser.$('[id="nome_loja"]');
    await nlInput.setValue(nomeLoja);
});

When('eu cadastro o telefone {string}', async function (tel) {
    const telInput = await this.browser.$('[id="telefone"]');
    await telInput.setValue(tel);
});

When('eu cadastro a especialidade {string}', async function (especialidade) {
    const espInput = await this.browser.$('[id="especialidade"]');
    await espInput.setValue(especialidade);
});

When('eu cadastro o CEP {string}', async function (cep) {
    const cepInput = await this.browser.$('[id="cep"]');
    await cepInput.setValue(cep);
});

When('eu cadastro a UF {string}', async function (uf) {
    const ufInput = await this.browser.$('[id="estado_uf"]');
    await ufInput.setValue(uf);
});

When('eu cadastro a cidade {string}', async function (cidade) {
    const cidadeInput = await this.browser.$('[id="cidade"]');
    await cidadeInput.setValue(cidade);
});

When('eu cadastro o bairro {string}', async function (bairro) {
    const bairroInput = await this.browser.$('[id="bairro"]');
    await bairroInput.setValue(bairro);
});

When('eu cadastro o endereço {string}', async function (endereco) {
    const endInput = await this.browser.$('[id="endereco"]');
    await endInput.setValue(endereco);
});

When('eu cadastro o número {string}', async function (numero) {
    const numInput = await this.browser.$('[id="numero"]');
    await numInput.setValue(numero);
});

When('eu cadastro o complemento {string}', async function (complemento) {
    const comInput = await this.browser.$('[id="complemento"]');
    await comInput.setValue(complemento);
});

When('eu cadastro a taxa {string}', async function (taxa) {
    const taxaInput = await this.browser.$('[id="taxa"]');
    await taxaInput.setValue(taxa);
});

When('eu cadastro o horario {string}', async function (horario) {
    const horaInput = await this.browser.$('[id="horario"]');
    await horaInput.setValue(horario);
});

When('eu cadastro o tempo de entrega {string}', async function (tempo_entrega) {
    const entregaInput = await this.browser.$('[id="tempo_entrega"]');
    await entregaInput.setValue(tempo_entrega);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cadastro = await this.browser.$('//button[text()="Salvar"]');
    await cadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
});

Then('mantenho-me na página "Cadastrar Restaurante"', async function () {
    const curUrl = await this.browser.getUrl();
    await expect(curUrl).to.include('http://localhost:8080/register-restaurant');

    await this.browser.deleteSession();
    await new Promise((resolve) => setTimeout(resolve, 10000));
});


//////////// Scenario: cadastro de restaurante com email existente ////////////

Given('eu esteja na página "Cadastrar login"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/register-login');
});

When('eu registro o email {string} e a senha {string}', async function (email, password) {
    const emailInput = await this.browser.$('[name="email"]');
    const passwordInput = await this.browser.$('[name="password"]');
    await emailInput.setValue(email);
    await passwordInput.setValue(password);
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    const ContinuarCadastro = await this.browser.$('//button[text()="Continuar cadastro"]');
    await ContinuarCadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 10000)); 
});

Then('observo a mensagem {string}', async function (mensagem) {
    const mensagemElement = await this.browser.$(`//*[contains(text(),"${mensagem}")]`);
    const mensagemText = await mensagemElement.getText();
    await assert.strictEqual(mensagemText, mensagem);
});

Then('permaneço na página "Cadastrar login"', async function () {
    const curUrl = await this.browser.getUrl();
    await expect(curUrl).to.include('http://localhost:8080/register-login');

    await this.browser.deleteSession();
    await new Promise((resolve) => setTimeout(resolve, 10000));
});


//////////// Scenario: cadastro de restaurante com email inválido ////////////

Given('me vejo na página "Cadastrar login"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/register-login');
});

When('realizo o cadastro do email {string} e da senha {string}', async function (email, password) {
    const emailInput = await this.browser.$('[name="email"]');
    const passwordInput = await this.browser.$('[name="password"]');
    await emailInput.setValue(email);
    await passwordInput.setValue(password);
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    const ContinuarCadastro = await this.browser.$('//button[text()="Continuar cadastro"]');
    await ContinuarCadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 10000)); 
});

Then('eu vejo a mensagem {string}', async function (mensagem) {
    const mensagemElement = await this.browser.$(`//*[contains(text(),"${mensagem}")]`);
    const mensagemText = await mensagemElement.getText();
    await assert.strictEqual(mensagemText, mensagem);
});

Then('localizo-me na página "Cadastrar login"', async function () {
    const curUrl = await this.browser.getUrl();
    await expect(curUrl).to.include('http://localhost:8080/register-login');

    await this.browser.deleteSession();
}); 