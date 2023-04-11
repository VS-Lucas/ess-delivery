const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/carrinho_de_compras.feature --require tests/step_definitions/carrinho_de_compras.js

setDefaultTimeout(100000);

/* =================================================== //

    1: Cenário: Proceder para checkout do pedido sem sucesso

// ==================================================== */

Given('fiz login com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('eu me encontro na página do "Carrinho de compras"', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
});

Given('o meu carrinho de compras está "vazio"', async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000));
});

When('eu tento continuar para "Checkout"', async function () {
    const checkout = await this.browser.$('//*[@id="app"]/div/body/div/div/div[2]/button');
    await checkout.click();
});

Then('eu vejo a mensagem na tela {string}', async function (message) {
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
        // Pegando o dish
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${message}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 3000});
    
    await this.browser.deleteSession();
});

// /* =================================================== //

//     2: Cenário: Adicionar um item ao carrinho a partir da página inicial do cliente com o carrinho estando vazio, e ser bem sucedido

 // ==================================================== */

Given('Loguei como "cliente" com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('eu me encontro na página inicial do cliente', async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000));
});

Given('meu carrinho está vazio', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    await this.browser.url('http://localhost:8080/clienthome');
});

When('eu tento adicionar "Churrasco Misto" no meu carrinho', async function () {
    const adicionar = await this.browser.$('//*[@id="app"]/div/div/div[5]/div[2]/button');
    await adicionar.click();
});

When('eu acesso meu carrinho', async function () {
    const acessar = await this.browser.$('//*[@id="app"]/div/div/button');
    await acessar.click();
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
});

Then('o item {string} é exibido no meu carrinho', async function (dish_1) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    // Pegando o dish_1
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_1}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});

    await this.browser.deleteSession();
});

// // /* =================================================== //

// //     3: Cenário: Adicionar um item ao carrinho a partir da página inicial do cliente com o carrinho não vazio, e ser mal sucedido

// // // ==================================================== */

Given('Eu loguei como "cliente" com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('eu me encontro na página inicial', async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
});

Given('meu carrinho não está vazio', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    await this.browser.url('http://localhost:8080/clienthome');
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
});

When('eu tento adicionar "X-Vegan" no meu carrinho', async function () {
    const adicionar = await this.browser.$('//*[@id="app"]/div/div/div[7]/div[5]/button');
    await adicionar.click();

});

Then('eu vejo a mensagem {string}', async function (msg) {
    const mensagemElement = await this.browser.$(`//*[contains(text(),"${msg}")]`);
    const mensagemText = await mensagemElement.getText();
    await assert.strictEqual(mensagemText, msg);
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
    await this.browser.deleteSession();
});

// // /* =================================================== //

// //     4: Cenário: Adicionar um item ao carrinho a partir da página inicial do cliente com o carrinho não vazio, e ser bem sucedido

// // // ==================================================== */

Given('loguei como "cliente" com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('estou presente na página inicial', async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000));
});

Given('o meu carrinho não está vazio', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    await this.browser.url('http://localhost:8080/clienthome');
});

When('eu tento adicionar "Buchada de Bode" no meu carrinho', async function () {
    const adicionar = await this.browser.$('//*[@id="app"]/div/div/div[5]/div[1]/button');
    await adicionar.click();
});

When('acesso meu carrinho', async function () {
    const acessar = await this.browser.$('//*[@id="app"]/div/div/button');
    await acessar.click();
    // Espera 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
});

Then('o item {string} aparece na tela do carrinho', async function (dish_1) {
    // Pegando o dish_1
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_1}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});

    await new Promise((resolve) => setTimeout(resolve, 2000)); 

    await this.browser.deleteSession();
});

// // // /* =================================================== //

// // //     5: Cenário: Adicionar um item que já se encontre no carrinho ao carrinho a partir da página inicial do cliente, e ser bem sucedido

// // // // ==================================================== */

Given('eu loguei com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('me encontro na página inicial', async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000));
});

Given('o meu carrinho de compras tem os itens {string} com {float} unidade e {string} com {float} unidade', async function (dish1, amount1, dish2, amount2) {
    await this.browser.url('http://localhost:8080/shoppingcart');
    // Pegando o dish1
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish1}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    console.log('foi aqui')

   // Pegando o amount1
    const amountElement = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[1]/div/div/div[2]/div[1]/div');
    const amountValue = await amountElement.getText();
    const amountFloat = parseFloat(amountValue);
    console.log(amountFloat);
    console.log(amount1);
    await assert.strictEqual(amountFloat, amount1);
    await new Promise((resolve) => setTimeout(resolve, 1500)); 

    // Pegando o dish2
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish2}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    console.log('foi aqui 2')
    
    //Pegando o amount2
    const amountElement_2 = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[2]/div/div/div[2]/div[1]/div');
    console.log('entrou aqui')
    const amountValue_2 = await amountElement_2.getText();
    const amountFloat_2 = parseFloat(amountValue_2);
    console.log(amountFloat_2);
    console.log(amount2);
    await assert.strictEqual(amountFloat_2, amount2);

    await new Promise((resolve) => setTimeout(resolve, 1000));
});

When('eu tento acrescentar o item "Buchada de Bode" que já existe no carrinho', async function () {
    await this.browser.url('http://localhost:8080/clienthome');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const adicionar = await this.browser.$('//*[@id="app"]/div/div/div[5]/div[1]/button');
    await adicionar.click();
});

When('eu acesso o carrinho', async function () {
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
    const acessar = await this.browser.$('//*[@id="app"]/div/div/button');
    await acessar.click();
    // Espera 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
});

Then('o item {string} aparece no meu carrinho com {float} unidades', async function (dish, amount) {
    // Pegando o dish_1
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    console.log('passou aqui')

    //Pegando o amount2
    const amountElement_2 = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[2]/div/div/div[2]/div[1]/div');
    const amountValue_2 = await amountElement_2.getText();
    const amountFloat_2 = parseFloat(amountValue_2);
    console.log(amountFloat_2);
    console.log('depois do amountfloat')
    console.log(amount);
    console.log('depois do amount')
    await assert.strictEqual(amountFloat_2, amount);
    console.log('PASSOU')

    await this.browser.deleteSession();
});

// /* =================================================== //

//     6: Cenário: Aumentar a quantidade de algum item no carrinho

// // ==================================================== */

Given('estou logado com o usuário "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('encontro-me na página do "Carrinho de compras"', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
});

Given('o meu carrinho de compras tem o item {string} com {float} unidade e o item {string} com {float} unidades', async function (dish, amount, dish2, amount2) {
    // Pegando o dish
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    

   // Pegando o amount
    const amountElement = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div/div/div/div[2]/div[1]/div');
    const amountValue = await amountElement.getText();
    const amountFloat = parseFloat(amountValue);
    console.log(amountFloat);
    console.log(amount);
    await assert.strictEqual(amountFloat, amount);

    // Pegando o dish2
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish2}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    
    //Pegando o amount2
    const amountElement_2 = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[2]/div/div/div[2]/div[1]/div');
    const amountValue_2 = await amountElement_2.getText();
    const amountFloat_2 = parseFloat(amountValue_2);
    console.log(amountFloat_2);
    console.log(amount2);
    await assert.strictEqual(amountFloat_2, amount2);

    await new Promise((resolve) => setTimeout(resolve, 2000)); 
});


When('eu altero a quantidade do item "Churrasco Misto" para 2 unidades', async function () {
    const excluir = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div/div/div/div[2]/div[1]/button[2]');
    //const excluirValue = await excluir.getText();
    await excluir.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
});

Then('aparece que tem {float} unidades do item {string} no meu carrinho', async function (amount, dish) {
        // Pegando o dish
        await this.browser.waitUntil(async () => {
            const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish}")]`);
            return await mensagemElement.isDisplayed();
        }, {timeout: 15000});
        console.log('foi aqui 2')
    
       // Pegando o amount
        const amountElement2 = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div/div/div/div[2]/div[1]/div');
        const amountValue2 = await amountElement2.getText();
        const amountFloat2 = parseFloat(amountValue2);
        console.log(amountFloat2);
        console.log(amount);
        await assert.strictEqual(amountFloat2, amount);

    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    await this.browser.deleteSession();
});

// /* =================================================== //

//     7: Cenário: Diminuir a quantidade de um item no carrinho

// // ==================================================== */

Given('Estou conectado com o usuário "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('Eu estou na página do "Carrinho de compras"', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
});

Given('o meu carrinho tem o item {string} com {float} unidades e o item {string} com {float} unidades', async function (dish_1, amount_1, dish_2, amount_2) {
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

    // Pegando o dish_2
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_2}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    
    // Pegando o amount_2
    const amountElement_2 = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[2]/div/div/div[2]/div[1]/div');
    const amountValue_2 = await amountElement_2.getText();
    const amountFloat_2 = parseFloat(amountValue_2);
    console.log(amountFloat_2);
    console.log(amount_2);
    await assert.strictEqual(amountFloat_2, amount_2);
});


When('eu tento alterar a quantidade do item "Churrasco Misto" para 1 unidade', async function () {
    const alterar = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[1]/div/div/div[2]/div[1]/button[1]');
    //const excluirValue = await excluir.getText();
    await alterar.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
});

Then('eu vejo que tem {float} unidade do item {string} no meu carrinho', async function (amount, dish) {
    // Pegando o dish_1
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});

   // Pegando o amount_1
    const amountElement = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[1]/div/div/div[2]/div[1]/div');
    const amountValue = await amountElement.getText();
    const amountFloat = parseFloat(amountValue);
    await assert.strictEqual(amountFloat, amount);

    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    await this.browser.deleteSession();
});

// /* =================================================== //

//     8: Cenário: Diminuir a quantidade de algum item no carrinho até removê-lo

// // ==================================================== */

Given('Conectei no sistema com o usuário "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('localizo-me na página do "Carrinho de compras"', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
});

Given('meu carrinho de compras tem o item {string} com {float} unidade e o item {string} com {float} unidades', async function (dish_1, amount_1, dish_2, amount_2) {
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

    // Pegando o dish_2
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_2}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    
    // Pegando o amount_2
    const amountElement_2 = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[2]/div/div/div[2]/div[1]/div');
    const amountValue_2 = await amountElement_2.getText();
    const amountFloat_2 = parseFloat(amountValue_2);
    console.log(amountFloat_2);
    console.log(amount_2);
    await assert.strictEqual(amountFloat_2, amount_2);
});


When('eu tento diminuir a quantidade do item "Churrasco Misto"', async function () {
    const alterar = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[1]/div/div/div[2]/div[1]/button[1]');
    await alterar.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
});

Then('eu vejo que o item {string} não se encontra mais no meu carrinho', async function (dish) {
    await this.browser.waitUntil(async () => {
    const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish}")]`);
    return await mensagemElement.isDisplayed();
    }, {timeout: 5000}).catch(() => { return true; });

    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    await this.browser.deleteSession();
});
/* =================================================== //

    9: Cenário: Retirar um item do carrinho

// ==================================================== */

Given('Estou logado como "cliente" com o email "severino@gmail.com" e senha "biu123"', async function () {
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

Given('o meu carrinho de compras tem o item {string} com {float} unidades', async function (dish_1, amount_1) {
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

    await new Promise((resolve) => setTimeout(resolve, 2000)); 

});


When('eu excluo o item "Buchada de Bode"', async function () {
    const excluir = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[1]/div/div/div[2]/div[1]/button[3]');
    await excluir.click();

});

Then('o item {string} não aparece mais no meu carrinho', async function (dish_1) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    await this.browser.waitUntil(async () => {
    const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_1}")]`);
    return await mensagemElement.isDisplayed();
    }, {timeout: 5000}).catch(() => { return true; });

    await this.browser.deleteSession();
});

// /* =================================================== //

//     10: Cenário: Adicionar um item ao carrinho a partir da página de restaurantes com o carrinho estando vazio, e ser bem sucedido

// // ==================================================== /

Given('estou logado no sistema como "cliente" com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('eu me encontro presente na página de restaurantes', async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    const restaurantes = await this.browser.$('//*[@id="app"]/div/div/div[3]/div[1]/button');
    await restaurantes.click();
});

Given('meu carrinho se encontra sem itens', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    await this.browser.url('http://localhost:8080/restaurants-list');
});

When('eu tento adicionar "X-Bacon" no meu carrinho', async function () {
    const adicionar = await this.browser.$('//*[@id="app"]/div/div/div[3]/div/div[2]/div/div[2]/div[1]/button');
    await adicionar.click();
});

When('eu acesso meu carrinho de compras', async function () {
    const acessar = await this.browser.$('//*[@id="app"]/div/div/button');
    await acessar.click();
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
});

Then('o item {string} aparece no meu carrinho', async function (dish_1) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    // Pegando o dish_1
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_1}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});

    await this.browser.deleteSession();
});

// /* =================================================== //

//     11: Cenário: Adicionar um item ao carrinho a partir da página de restaurantes com o carrinho não vazio, e ser mal sucedido

// // ==================================================== */

Given('encontro-me logado no sistema como "cliente" com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('eu me encontro na página de restaurantes', async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const restaurantes = await this.browser.$('//*[@id="app"]/div/div/div[3]/div[1]/button');
    await restaurantes.click();
});

Given('meu carrinho não se encontra vazio', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    await this.browser.url('http://localhost:8080/restaurants-list');
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
});

When('eu tento adicionar "Cartola Tradicional" no meu carrinho', async function () {
    const adicionar = await this.browser.$('//*[@id="app"]/div/div/div[3]/div/div[4]/div/div[2]/div[3]/button');
    await adicionar.click();

});

Then('eu vejo a mensagem de erro {string}', async function (msg) {
    const mensagemElement = await this.browser.$(`//*[contains(text(),"${msg}")]`);
    const mensagemText = await mensagemElement.getText();
    await assert.strictEqual(mensagemText, msg);
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
    await this.browser.deleteSession();
});

/* =================================================== //

    12: Cenário: Adicionar um item ao carrinho a partir da página de restaurantes com o carrinho não vazio, e ser bem sucedido

// ==================================================== */

Given('eu me encontro logado no sistema como "cliente" com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('encontro-me na página de restaurantes', async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const restaurantes = await this.browser.$('//*[@id="app"]/div/div/div[3]/div[1]/button');
    await restaurantes.click();
});

Given('o meu carrinho não se encontra vazio', async function () {
    await this.browser.url('http://localhost:8080/shoppingcart');
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    await this.browser.url('http://localhost:8080/restaurants-list');
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
});

When('eu tento adicionar "X-Ratão" no meu carrinho', async function () {
    const adicionar = await this.browser.$('//*[@id="app"]/div/div/div[3]/div/div[2]/div/div[2]/div[3]/button');
    await adicionar.click();
    await new Promise((resolve) => setTimeout(resolve, 3000));

});

When('eu prossigo para o meu carrinho de compras', async function () {
    const acessar = await this.browser.$('//*[@id="app"]/div/div/button');
    await acessar.click();
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
});

Then('o item {string} aparece no carrinho', async function (dish_1) {
    // Pegando o dish_1
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_1}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});

    await new Promise((resolve) => setTimeout(resolve, 2000)); 

    await this.browser.deleteSession();
});

// /* =================================================== //

//     13: Cenário: Adicionar um item que já se encontre no carrinho ao carrinho a partir da página de restaurantes, e ser bem sucedido

// // ==================================================== */

Given('eu estou logado no sistema como "cliente" com o email "severino@gmail.com" e com a senha "biu123"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/clienthome');
});

Given('estou presente na página de restaurantes', async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const restaurantes = await this.browser.$('//*[@id="app"]/div/div/div[3]/div[1]/button');
    await restaurantes.click();
});

Given('meu carrinho de compras tem os itens {string} com {float} unidade e {string} com {float} unidade', async function (dish1, amount1, dish2, amount2) {
    await this.browser.url('http://localhost:8080/shoppingcart');
    // Pegando o dish1
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish1}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    console.log('foi aqui')

   // Pegando o amount1
    const amountElement = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[1]/div/div/div[2]/div[1]/div');
    const amountValue = await amountElement.getText();
    const amountFloat = parseFloat(amountValue);
    console.log(amountFloat);
    console.log(amount1);
    await assert.strictEqual(amountFloat, amount1);
    await new Promise((resolve) => setTimeout(resolve, 1500)); 

    // Pegando o dish2
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish2}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    console.log('foi aqui 2')
    
    //Pegando o amount2
    const amountElement_2 = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div[2]/div/div/div[2]/div[1]/div');
    console.log('entrou aqui')
    const amountValue_2 = await amountElement_2.getText();
    const amountFloat_2 = parseFloat(amountValue_2);
    console.log(amountFloat_2);
    console.log(amount2);
    await assert.strictEqual(amountFloat_2, amount2);

    await new Promise((resolve) => setTimeout(resolve, 1000));
});

When('eu tento acrescentar "X-Bacon" no meu carrinho', async function () {
    await this.browser.url('http://localhost:8080/restaurants-list');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const adicionar = await this.browser.$('//*[@id="app"]/div/div/div[3]/div/div[2]/div/div[2]/div[1]/button');
    await adicionar.click();
    await new Promise((resolve) => setTimeout(resolve, 3000));
});

When('prossigo para o meu carrinho de compras', async function () {
    const acessar = await this.browser.$('//*[@id="app"]/div/div/button');
    await acessar.click();
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
});

Then('o prato {string} aparece no meu carrinho com {float} unidades', async function (dish, amount) {
    // Pegando o dish_1
    console.log('Entrou no Then')
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 15000});
    console.log('passou aqui')

    //Pegando o amount2
    const amountElement_2 = await this.browser.$('//*[@id="app"]/div/body/div/div/div[1]/div/div/div/div[2]/div[1]/div');
    const amountValue_2 = await amountElement_2.getText();
    const amountFloat_2 = parseFloat(amountValue_2);
    console.log(amountFloat_2);
    console.log('depois do amountfloat')
    console.log(amount);
    console.log('depois do amount')
    await assert.strictEqual(amountFloat_2, amount);
    console.log('PASSOU')

    await this.browser.deleteSession();
});
// /* =================================================== //

//     18: Cenário: Proceder para checkout do pedido com sucesso

// // ==================================================== */

// Given('Fiz login com o email "severino@gmail.com" e com a senha "biu123"', async function () {
//     this.browser = await remote({
//         capabilities: {
//             browserName: 'chrome'
//         }
//     });
//     await this.browser.url('http://localhost:8080/clienthome');
// });

// Given('estou na página do "Carrinho de compras"', async function () {
//     await this.browser.url('http://localhost:8080/shoppingcart');
// });

// Given('o meu carrinho de compras tem o item {string}, o item {string} e o item {string}', async function (dish_1, dish_2, dish_3) {
//     // Pegando o dish_1
//     await this.browser.waitUntil(async () => {
//         const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_1}")]`);
//         return await mensagemElement.isDisplayed();
//     }, {timeout: 15000});

//     // Pegando o dish_2
//     await this.browser.waitUntil(async () => {
//         const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_2}")]`);
//         return await mensagemElement.isDisplayed();
//     }, {timeout: 15000});
    
//     // Pegando o dish_3
//     await this.browser.waitUntil(async () => {
//         const mensagemElement = await this.browser.$(`//*[contains(text(),"${dish_3}")]`);
//         return await mensagemElement.isDisplayed();
//     }, {timeout: 15000});

//     // Espera 3 segundos
//     await new Promise((resolve) => setTimeout(resolve, 3000)); 
    
// });

// When('eu tento proceder para checkout do pedido', async function () {
//     const excluir = await this.browser.$('//*[@id="app"]/div/body/div/div/div[2]/button');
//     await excluir.click();
// });

// Then('eu sou direcionado para a página de checkout', async function () {
//     //  await this.browser.url('http://localhost:8080/checkout/');
//     console.log("passou")
//     await new Promise((resolve) => setTimeout(resolve, 3000)); 
//     await this.browser.deleteSession();
// });