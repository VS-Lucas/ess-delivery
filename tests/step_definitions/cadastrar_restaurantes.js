const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { remote } = require('webdriverio');


setDefaultTimeout(100000);
//let browser

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
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Espera 5 segundos
    const ContinuarCadastro = await this.browser.$('//button[text()="Continuar cadastro"]');
    await ContinuarCadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 10000)); // Espera 60 segundos
});

//When('sou direcionado à página "Cadastrar restaurante"', async function () {
//    const currentUrl = await this.browser.getUrl();
//    expect(currentUrl).to.include('http://localhost:8080/register-restaurant');
//});

When('registro o nome completo {string}', async function (nomeCompleto) {
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

When('registro a razão social {string}', async function (razaoSocial) {
    const rzInput = await this.browser.$('[id="razao_social"]');
    await rzInput.setValue(razaoSocial);
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

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cadastro = await this.browser.$('//button[text()="Salvar"]');
    await cadastro.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
});

Then('sou direcionado para a página "Home Restaurante"', async function () {
    const curUrl = await this.browser.getUrl();
    await expect(curUrl).to.include('http://localhost:8080/update-register');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await this.browser.deleteSession();
});

