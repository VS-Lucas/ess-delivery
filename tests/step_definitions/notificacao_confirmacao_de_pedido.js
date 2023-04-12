const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/notificacao_da_confirmacao_de_pedido.feature --require tests/step_definitions/notificacao_confirmacao_de_pedido.js

setDefaultTimeout(100000);

//////////// Scenario: Notificação de pedido confirmado ////////////

Given('estou logado como o cliente "Ana Carla Guerra de Albuquerque Melo"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('estou na tela de Home do Cliente aguardando uma resposta do restaurante ao meu pedido cujo "id" é "1"', async function () {
    await this.browser.url('http://localhost:8080/clienthome');
    await new Promise((resolve) => setTimeout(resolve, 15000));
});

When('entro na tela de Histórico de Pedidos', async function () {
    await this.browser.url('http://localhost:8080/order-history');
    await new Promise((resolve) => setTimeout(resolve, 15000));
});

Then('eu vejo o "status" "Confirmado" no pedido de "id" igual a "1"', async function () {
    await this.browser.waitUntil(async () => {
        const status = await this.browser.$(`//*[contains(text(), "ID: #1")]`);
        return await status.isDisplayed();
    }, {timeout: 15000});
    await this.browser.waitUntil(async () => {
        const status = await this.browser.$(`//*[contains(text(), "Confirmado")]`);
        return await status.isDisplayed();
    }, {timeout: 15000});
});


//////////// Scenario: Notificação de pedido recusado ////////////

Given('fiz login no sistema como o cliente "Ana Carla Guerra de Albuquerque Melo"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('estou na tela de Home do Cliente aguardando uma resposta do restaurante ao meu pedido cujo "id" é "2"', async function () {
    await this.browser.url('http://localhost:8080/clienthome');
    await new Promise((resolve) => setTimeout(resolve, 15000));
});

When('eu entro na tela de Histórico de Pedidos', async function () {
    await this.browser.url('http://localhost:8080/order-history');
    await new Promise((resolve) => setTimeout(resolve, 15000));
});

Then('eu vejo o "status" "Recusado" no pedido de "id" igual a "2"', async function () {
    await this.browser.waitUntil(async () => {
        const status = await this.browser.$(`//*[contains(text(), "ID: #2")]`);
        return await status.isDisplayed();
    }, {timeout: 15000});
    await this.browser.waitUntil(async () => {
        const status = await this.browser.$(`//*[contains(text(), "Recusado")]`);
        return await status.isDisplayed();
    }, {timeout: 15000});
});


//////////// Scenario: Notificação de pedido a caminho ////////////

Given('entrei no sistema como o cliente "Ana Carla Guerra de Albuquerque Melo"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('estou na tela de Home do Cliente esperando o meu pedido de "id" igual a "3" mudar de status para A caminho', async function () {
    await this.browser.url('http://localhost:8080/clienthome');
    await new Promise((resolve) => setTimeout(resolve, 15000));
});

When('acesso a tela de Histórico de Pedidos', async function () {
    await this.browser.url('http://localhost:8080/order-history');
    await new Promise((resolve) => setTimeout(resolve, 15000));
});

Then('eu vejo o "status" "A caminho" no pedido de "id" igual a "3"', async function () {
    await this.browser.waitUntil(async () => {
        const status = await this.browser.$(`//*[contains(text(), "ID: #3")]`);
        return await status.isDisplayed();
    }, {timeout: 15000});
    await this.browser.waitUntil(async () => {
        const status = await this.browser.$(`//*[contains(text(), "A caminho")]`);
        return await status.isDisplayed();
    }, {timeout: 15000});
});


//////////// Scenario: Entrega realizada com sucesso ////////////

Given('loguei no sistema como o cliente "Ana Carla Guerra de Albuquerque Melo"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('estou na tela de Home do Cliente esperando o pedido de "id" igual a "4" chegar para confirmar a entrega', async function () {
    await this.browser.url('http://localhost:8080/clienthome');
    await new Promise((resolve) => setTimeout(resolve, 15000));
});

When('chego na tela de Histórico de Pedidos', async function () {
    await this.browser.url('http://localhost:8080/order-history');
    await new Promise((resolve) => setTimeout(resolve, 15000));
});

When('eu vejo o "status" "A caminho" no pedido de "id" igual a "4"', async function () {
    await this.browser.waitUntil(async () => {
        const status = await this.browser.$(`//*[contains(text(), "ID: #4")]`);
        return await status.isDisplayed();
    }, {timeout: 15000});
    await this.browser.waitUntil(async () => {
        const status = await this.browser.$(`//*[contains(text(), "A caminho")]`);
        return await status.isDisplayed();
    }, {timeout: 15000});
});

When('entro na tela de Detalhamento de Pedido', async function () {
    await this.browser.url('http://localhost:8080/history-details/4/https:%2F%2Fbodedono.com.br%2Fwp-content%2Fuploads%2F2020%2F06%2FLOGO-1.png/Bode%20do%20Nô/11%2F04%2F2023/89.90/Cartão%20de%20crédito/Buchada%20de%20Bode/A%20caminho/89.9/[%7B"preco":"89,90","restaurante":"Bode%20do%20Nô","nome":"Buchada%20de%20Bode","quantidade":"1","url":"https:%2F%2Ftagmeimages.azureedge.net%2F%3Fq=90&url=https:%2F%2Ftagmepub.azureedge.net%2Fpubimg%2Fthumbs%2FMenuItem%2Ff43f8520-8543-11ed-be60-85bb8d91a573.jpg&il&output=jpg","descricao":"Tradicional%20buchada%20de%20bode%20para%202%20"%7D]/22:34:37/15min-30min/%7B"0":%7B"preco":"89,90","restaurante":"Bode%20do%20Nô","nome":"Buchada%20de%20Bode","quantidade":"1","url":"https:%2F%2Ftagmeimages.azureedge.net%2F%3Fq=90&url=https:%2F%2Ftagmepub.azureedge.net%2Fpubimg%2Fthumbs%2FMenuItem%2Ff43f8520-8543-11ed-be60-85bb8d91a573.jpg&il&output=jpg","descricao":"Tradicional%20buchada%20de%20bode%20para%202%20"%7D%7D/Ana%20Carla%20Guerra%20de%20Albuquerque%20Melo');
    await new Promise((resolve) => setTimeout(resolve, 15000));
});

Then('eu vejo uma opção para "Confirmar entrega"', async function () {
    await this.browser.waitUntil(async () => {
        const status = await this.browser.$(`//*[contains(text(), "Confirmar entrega")]`);
        return await status.isDisplayed();
    }, {timeout: 15000});
});
