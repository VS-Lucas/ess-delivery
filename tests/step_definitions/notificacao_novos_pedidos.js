const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/notificacao_novos_pedidos.feature --require tests/step_definitions/notificacao_novos_pedidos.js

setDefaultTimeout(100000);


// Scenario: Notificação de novo pedido solicitado que será aceito

Given('o restaurante "Bode do Nô" está logado na plataforma', async function(){
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/home-restaurant');
});

When('o restaurante recebe a notificação de novo pedido de número "#12451"', async function(){
    const botaoNotificacao = await this.browser.$('//*[@id="app"]/div/div/div[1]/nav/div/div/button[1]');
    await botaoNotificacao.click();
});

When('o detalhamento do novo pedido de ID "#12451" é aberto na tela', async function(){
    await this.browser.waitUntil(async () => {
        const checharNovo = await this.browser.$(`//*[contains(text(),"Você recebeu um novo pedido")]`);
        return await checharNovo.isDisplayed();
    },  {timeout: 10000});
    const novoPedido = await this.browser.$('//*[contains(text(),"Gabmei")]');
    await novoPedido.click();
    await novoPedido.click();
});

Then('o restaurante confirma o pedido', async function() {
    const botaoNConfirmacao = await this.browser.$('//*[@id="app"]/div/body/div/div/div/div/div[4]/div[2]/button');
    await botaoNConfirmacao.click();
});


// Scenario:Notificação de novo pedido solicitado que será recusado
Given('estou logado no perfil do restaurante "Bode do Nô"', async function(){
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/home-restaurant');
});

When('A notificação de novo pedido de ID "#12452" foi recebida pelo restaurante', async function(){
    const botaoNotificacao = await this.browser.$('//*[@id="app"]/div/div/div[1]/nav/div/div/button[1]');
    await botaoNotificacao.click();
});

When('eu abro o detalhamento de pedido na tela', async function(){
    await this.browser.waitUntil(async () => {
        const checharNovo = await this.browser.$(`//*[contains(text(),"Você recebeu um novo pedido")]`);
        return await checharNovo.isDisplayed();
    },  {timeout: 10000});
    const novoPedido = await this.browser.$('//*[contains(text(),"Gabmei")]');
    await novoPedido.click();
    await novoPedido.click();
});

Then('eu seleciono a opção de recusar pedido', async function() {
    const botaoNConfirmacao = await this.browser.$('//*[@id="app"]/div/body/div/div/div/div/div[4]/div[1]/button');
    await botaoNConfirmacao.click();
});

Then('adiciono a justificativa {string}', async function(input) {
    const justificationInput = await this.browser.$('[name="input"]');
    await justificationInput.setValue(input);
});

Then('o restaurante confirma a recusa', async function() {
    const botaoNConfirmacao = await this.browser.$('//*[@id="app"]/div/body/div/div/div/div/div[4]/div[3]/div/div[2]/div/div/div/div[2]/button');
    await botaoNConfirmacao.click();
});

// Scenario: Notificação de Pedido Entregue
Given('o restaurante "Bode do Nô" está logado no sistema', async function(){
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/home-restaurant');
});

When('o restaurante recebe a notificação de entrega do pedido de ID "#12453"', async function(){
    const botaoNotificacao = await this.browser.$('//*[@id="app"]/div/div/div[1]/nav/div/div/button[1]');
    await botaoNotificacao.click();
});

When('o detalhamento de pedido é aberto na tela', async function(){
    await this.browser.waitUntil(async () => {
        const checharNovo = await this.browser.$(`//*[contains(text(),"foi entregue com sucesso!")]`);
        return await checharNovo.isDisplayed();
    },  {timeout: 50000});
    const novoPedido = await this.browser.$('//*[contains(text(),"Gabmei")]');
    await novoPedido.click();
    await novoPedido.click();
});

Then('o status do pedido mostra "Entregue"', async function() {
    const botaoNConfirmacao = await this.browser.$('///*[@id="app"]/div/body/div/div/div/div/div[4]/button');
    await botaoNConfirmacao.click();
});
