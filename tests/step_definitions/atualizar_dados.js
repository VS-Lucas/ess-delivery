const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/atualizar_dados.feature --require tests/step_definitions/atualizar_dados.js

setDefaultTimeout(100000);


//////////// Scenario: atualizar horário de funcionamento do restaurante ////////////
/*
Given('estou logado no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/update-register');
});
  
Given('estou na página "Atualizar dados"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/update-register');
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
});
  
Given('vejo {string} no horário de funcionamento', async function (horarioAtual) {
    const horarioElement = await this.browser.$('#horario');
    const horarioValue = await horarioElement.getValue();
    const horarioText = await horarioElement.$(`option[value="${horarioValue}"]`).getText();
    await assert.strictEqual(horarioText, horarioAtual);
});

When('atualizo o horário de funcionamento para {string}', async function (novoHorario) {
    
    const botaoEditar = await this.browser.$('//*[@id="app"]/div/div/div/div/div/form/div/div[4]/div[2]/button[1]');
    await botaoEditar.click();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const hrInput = await this.browser.$('#horario');
    await hrInput.selectByIndex(2);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const botaoSalvar = await this.browser.$('//*[@id="app"]/div/div/div/div/div/form/div/div[4]/div[2]/button[2]');
    await botaoSalvar.click();

});
  
Then('observo {string} no horário de funcionamento', async function (horario, hora) {
    const horarioElement = await this.browser.$('#horario');
    const horarioValue = await horarioElement.getValue();
    const horarioText = await horarioElement.$(`option[value="${horarioValue}"]`).getText();
    await assert.strictEqual(horarioText, horario);

    await this.browser.deleteSession();
    await new Promise((resolve) => setTimeout(resolve, 2000));
});*/


//////////// Scenario: atualizar CEP do restaurante sem adicionar um novo ////////////

Given('eu estou logado no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/update-register');
});
  
Given('eu estou na página "Atualizar dados"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/update-register');
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
});
  
Given('eu vejo {string} no CEP do restaurante', async function (cep) {
    const cepElement = await this.browser.$('#cep');
    const cepValue = await cepElement.getValue();
    await assert.strictEqual(cepValue, cep);
});

When('eu tento atualizar o CEP do restaurante para {string}', async function (novoCep) {
    
    const botaoEditar = await this.browser.$('//*[@id="app"]/div/div/div/div/div/form/div/div[3]/div[2]/button[1]');
    await botaoEditar.click();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cepInput = await this.browser.$('[id="cep"]');
    await cepInput.setValue(novoCep);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const botaoSalvar = await this.browser.$('//*[@id="app"]/div/div/div/div/div/form/div/div[3]/div[2]/button[2]');
    await botaoSalvar.click();

});
  
Then('vejo a mensagem "Preencha este campo." e permaneço na página "Atualizar dados"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/update-register');

    await this.browser.deleteSession();
});

  

