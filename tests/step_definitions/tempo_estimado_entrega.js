const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
// const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/tempo_estimado_entrega.feature --require tests/step_definitions/tempo_estimado_entrega.js

setDefaultTimeout(100000);


/* =================================================== //

    Cenário: Calcular tempo estimado com sucesso

// ==================================================== */
 

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
    await new Promise((resolve) => setTimeout(resolve, 15000)); 
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

Then('eu sou redirecionado para a página de {string}', async function (string) {
    await new Promise((resolve) => setTimeout(resolve, 15000)); 
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/order-tracking');
});

Then('vejo o tempo estimado de entrega para {string}', async function (time) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${time}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 50000});

    await this.browser.deleteSession();
});