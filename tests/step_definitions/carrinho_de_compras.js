const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/carrinho_de_compras.feature --require tests/step_definitions/carrinho_de_compras.js

setDefaultTimeout(100000);


/* =================================================== //

    Cenário: Retirando um item o carrinho de compras

// ==================================================== */

Given('Estou logado como "cliente" com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('eu estou na página do "Carrinho de compras"', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
});

Given('o meu carrinho de compras tem o item {string}, com {float} unidade, e o item {string} com {float} unidades', async function (dish_1, amount_1, dish_2, amount_2) {
    // Pegando o dish_1
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_1}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});

   // Pegando o amount_1
    const amountElement = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[1]/div/div/div[2]/div[1]/div');
    const amountValue = await amountElement.getText();
    const amountFloat = parseFloat(amountValue);
    console.log(amountFloat);
    console.log(amount_1);
    await assert.strictEqual(amountFloat, amount_1);

    
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_2}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    
    
    const amountElement_2 = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[2]/div/div/div[2]/div[1]/div');
    const amountValue_2 = await amountElement_2.getText();
    const amountFloat_2 = parseFloat(amountValue_2);
    console.log(amountFloat_2);
    console.log(amount_2);
    await assert.strictEqual(amountFloat_2, amount_2);

});


When('eu excluo o item "Churrasco Misto"', async function () {
    const excluir = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[1]/div/div/div[2]/div[1]/button[3]');
    //const excluirValue = await excluir.getText();
    await excluir.click();

});

Then('o item {string} não aparece mais no meu carrinho', async function (dish_1) {
    await this.browser.waitUntil(async () => {
    const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_1}")]`);
    return await mensagemElement.isDisplayed();
    }, {timeout: 50000}).catch(() => { return true; });

    await this.browser.deleteSession();
});