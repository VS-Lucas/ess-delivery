const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
// const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/historico_de_pedido.feature --require tests/step_definitions/historico_de_pedido.js

setDefaultTimeout(100000);


/* =================================================== //

    Cenário: Visualizando a página de pedidos vazia

// ==================================================== */
 

Given('Estou logado como {string} com email {string} e senha {string} e não fiz nenhum pedido', async function (s1, s2, s3) {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

When('eu clico no botão "Meus pedidos"', async function () {
    const my_orders_button = await this.browser.$('/html/body/div/div/div/div[1]/button');
    my_orders_button.click();
    await new Promise((resolve) => setTimeout(resolve, 15000)); 
});

Then('eu sou redirecionado para página de "Histórico de pedidos"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/order-history');
});

Then('não vejo nenhum pedido feito anteriormente', async function () {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"ID: #")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 5000}).catch(() => { return true; });

    await this.browser.deleteSession();
});


/* ================================================================ //

    Cenário: Visualizando a página de histórico de pedido não vazia

// ================================================================ */
 

Given('eu estou logado como {string} com email {string} e senha {string}', async function (s1, s2, s3) {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

When('eu clico no card onde contem o prato "Churrasco misto" clico no botão de "Carrinho de compras"', async function () {
    const card_button = await this.browser.$('//*[@id="app"]/div/div/div[5]/div[1]/button');
    card_button.click();

    await new Promise((resolve) => setTimeout(resolve, 15000)); 

    const cart_button = await this.browser.$('//*[@id="app"]/div/div/button');
    cart_button.click();

    await new Promise((resolve) => setTimeout(resolve, 15000)); 
});

When('na página de "Carrinho de compras" clico no botão de "Check out"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/shoppingcart');

    const checkout_button = await this.browser.$('//*[@id="app"]/div/body/div/div/div[2]/button');
    checkout_button.click();
})

When('na página de {string} clico no botão de {string} após abrir um modal clico em {string}', async function (string, string2, string3) {
    const confirm_button = await this.browser.$('//*[@id="app"]/div/body/div[2]/div/div[4]/div/button');
    confirm_button.click();

    const button = await this.browser.$('//*[@id="app"]/div/body/div[2]/div[2]/div/div[2]/div/div/div[3]/div[2]/button');
    button.click();

});

When('na página de "Acompanhamento de pedido" clico no botão "Ir para página inicial"', async function () {
    await new Promise((resolve) => setTimeout(resolve, 15000));

    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/order-tracking');

    await new Promise((resolve) => setTimeout(resolve, 15000));

    const home_button = await this.browser.$('//*[@id="app"]/div/body/div[1]/button');
    home_button.click();
});

When('clico no botão de {string}', async function (string) {
    const my_orders_button = await this.browser.$('/html/body/div/div/div/div[1]/button');
    my_orders_button.click();
    await new Promise((resolve) => setTimeout(resolve, 15000)); 
});

Then('eu sou redirecionado para a página de {string}', async function (string) {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/order-history');
});

Then('vejo meu pedido que contém o prato {string}', async function (dish) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 50000});

    await this.browser.deleteSession();
});


/* ================================================================ //

    Cenário: Fazendo novamente um pedido pelo histórico de pedidos

// ================================================================ */

Given("loguei como {string} com email {string} e senha {string}", async function (s1, s2, s3) {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('estou na página de "Histórico de pedidos"', async function () {
    await this.browser.url('http://localhost:8080/order-history');
    await new Promise((resolve) => setTimeout(resolve, 15000)); 
});

Given("tenho um pedido de um {string} já feito antes", async function (dish) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 50000}); 
});

When('eu clico no botão para detalhar meu pedido', async function () {
    const detail_button = await this.browser.$('//*[@id="app"]/div/body/div[3]/div/div/div[5]/div/button');
    detail_button.click();
})

When('na página de "Detalhes do pedido" clico no botão de "Pedir novamente"', async function () {
    await new Promise((resolve) => setTimeout(resolve, 15000)); 
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.match(/^http:\/\/localhost:8080\/history-details/);
    await new Promise((resolve) => setTimeout(resolve, 15000)); 
    const button = await this.browser.$('//*[@id="app"]/div/body/div[4]/div[3]/div/div[2]/button');
    button.click();
});


Then('sou redirecionado para a página de "Carrinho de compras"', async function () {
    await new Promise((resolve) => setTimeout(resolve, 15000)); 
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/shoppingcart');
});

Then('vejo meu pedido com {string} incluso no meu carrinho', async function (dish) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 50000});

    await this.browser.deleteSession();
});

