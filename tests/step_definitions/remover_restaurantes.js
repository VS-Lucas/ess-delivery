const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/remover_restaurantes.feature --require tests/step_definitions/remover_restaurantes.js

setDefaultTimeout(100000);


//////////// Scenario: remover restaurante com sucesso ////////////

Given('eu estou logado no perfil de "Restaurante" com login "test_remove@gmail.com" e senha "12345"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/unsubscribe-restaurant');
});

Given('eu estou na página "Descadastramento" e possuo pelo menos um pedido em andamento', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/unsubscribe-restaurant');
});

When('eu descadastro meu restaurante', async function () {
    const descadastro = await this.browser.$('//button[text()="Remover cadastro"]');
    await descadastro.click();
});

Then('eu vejo "Tchau! Obrigado" e sou direcionado para a página "Home"', async function () {
    const curUrl = await this.browser.getUrl();
    await expect(curUrl).to.include('http://localhost:8080/');

    await this.browser.deleteSession();
});


//////////// Scenario: tentativa de remoção de restaurante com pedido em andamento ////////////

Given('estou logado no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/unsubscribe-restaurant');
});
  
Given('estou na página "Descadastramento"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/unsubscribe-restaurant');
});

When('tento descadastrar do meu restaurante', async function () {
    const descadastro = await this.browser.$('//button[text()="Remover cadastro"]');
    await descadastro.click();
});

Then('vejo uma notificação de erro {string}', async function (mensagem) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${mensagem}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
});

Then('permaneço na página "Descadastramento"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/unsubscribe-restaurant');

    await this.browser.deleteSession();
});

