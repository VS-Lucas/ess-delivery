const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/cancelamento_de_pedido.feature --require tests/step_definitions/cancelamento_de_pedido.js

setDefaultTimeout(100000);

//////////// Scenario: cancelamento de pedido ////////////
//////////// RODAR SEPARADO                  ////////////

Given('estou logado como "cliente" com o login "lucasvini@gmail.com" e senha "lucasvini"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/order-tracking');
});

Given('estou na tela "Acompanhamento do Pedido" e fiz um {string}', async function (pedido) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${pedido}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 2000});
});

Given('o status do pedido é "Pedido em preparação"', async function () {
    const elementoSpan = await this.browser.$('//*[@id="app"]/div/body/div[2]/div/ol/li[3]/div/span');
    const classeDoSpan = await elementoSpan.getAttribute('class');
    const targetAt = 'flex items-center justify-center w-10 h-10 bg-[#F26938] border-2 border-[#F26938] rounded-full lg:h-24 lg:w-24 shrink-0';

    await assert.strictEqual(classeDoSpan, targetAt);
});

When('tento cancelar o pedido', async function () {
    const cancButton = await this.browser.$('//button[text()="Cancelar pedido"]');
    cancButton.click();
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
});

When('escrevo {string}', async function (just) {
    const justInput = await this.browser.$('[name="input"]');
    await justInput.setValue(just);

    await new Promise((resolve) => setTimeout(resolve, 2000)); 
});

When('confirmo o cancelamento', async function () {
    const confirmButton = await this.browser.$('//*[@id="app"]/div/body/div[4]/div/div[2]/div/div/div/div[2]/button');
    confirmButton.click();
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
});

Then('vejo a mensagem {string}', async function (mensagem) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${mensagem}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 5000});

    // await this.browser.deleteSession();
});

Given('eu estou logado como {string} com o login {string} e senha {string}', async function (string, string2, string3) {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/order-tracking');
});

Given('eu estou na tela "Acompanhamento do Pedido" e fiz um {string}', async function (pedido) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${pedido}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 2000});
});

Given('status do pedido é "A caminho"', async function () {
    const elementoSpan = await this.browser.$('//*[@id="app"]/div/body/div[2]/div/ol/li[3]/div/span');
    const classeDoSpan = await elementoSpan.getAttribute('class');
    const targetAt = 'flex items-center justify-center w-10 h-10 bg-[#F26938] border-2 border-[#F26938] rounded-full lg:h-24 lg:w-24 shrink-0';

    await assert.strictEqual(classeDoSpan, targetAt);
});

When('eu tento cancelar o pedido', async function () {
    const cancButton = await this.browser.$('//button[text()="Cancelar pedido"]');
    cancButton.click();
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
});

Then('eu vejo a mensagem {string}', async function (mensagem) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${mensagem}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 5000});
});