const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/atualizar_dados.feature --require tests/step_definitions/atualizar_dados.js

setDefaultTimeout(100000);


//////////// Scenario: atualizar horário de funcionamento do restaurante ////////////

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
  
Then('observo {string} no horário de funcionamento', async function (horario) {
    const horarioElement = await this.browser.$('#horario');
    const horarioValue = await horarioElement.getValue();
    const horarioText = await horarioElement.$(`option[value="${horarioValue}"]`).getText();
    await assert.strictEqual(horarioText, horario);

    await this.browser.deleteSession();
    await new Promise((resolve) => setTimeout(resolve, 5000));
});


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
    await new Promise((resolve) => setTimeout(resolve, 5000));
});

  
//////////// Scenario: atualizar CFP do responsável pelo restaurante com formatação inválida ////////////

Given('logado no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/update-register');
});
  
Given('na página "Atualizar dados"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/update-register');
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
});
  
Given('observo {string} no CPF do responsável do restaurante', async function (cep) {
    const cpfElement = await this.browser.$('#cpf');
    const cpfValue = await cpfElement.getValue();
    await assert.strictEqual(cpfValue, cep);
});

When('tento registrar a atualização do CPF do restaurante para {string}', async function (novoCpf) {
    
    const botaoEditar = await this.browser.$('//*[@id="app"]/div/div/div/div/div/form/div/div[1]/div[2]/button[1]');
    await botaoEditar.click();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cpfInput = await this.browser.$('[id="cpf"]');
    await cpfInput.setValue(novoCpf);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const botaoSalvar = await this.browser.$('//*[@id="app"]/div/div/div/div/div/form/div/div[1]/div[2]/button[2]');
    await botaoSalvar.click();

});
  
Then('permaneço na página "Atualizar dados" e vejo a mensagem de erro "É preciso que o formato corresponda ao exigido"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/update-register');

    await this.browser.deleteSession();
    await new Promise((resolve) => setTimeout(resolve, 5000));
});


//////////// Scenario: atualizar nome do restaurante com um nome já existente ////////////

Given('estou no perfil de "Restaurante" com login "test@gmail.com" e senha "12345"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/update-register');
});
  
Given('me encontro na página "Atualizar dados"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/update-register');
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
});
  
Given('visualizo {string} no nome da loja', async function (nomeLoja) {
    const lojaElement = await this.browser.$('#nome_loja');
    const lojaValue = await lojaElement.getValue();
    await assert.strictEqual(lojaValue, nomeLoja);
});

When('tento realizar o registro da atualização do nome da loja para {string}', async function (novoNome) {
    
    const botaoEditar = await this.browser.$('//*[@id="app"]/div/div/div/div/div/form/div/div[2]/div[2]/button[1]');
    await botaoEditar.click();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const lojaInput = await this.browser.$('[id="nome_loja"]');
    await lojaInput.setValue(novoNome);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const botaoSalvar = await this.browser.$('//*[@id="app"]/div/div/div/div/div/form/div/div[2]/div[2]/button[2]');
    await botaoSalvar.click();

});
  
Then('visualizo a mensagem de erro {string}', async function (erro) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"${erro}")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 10000});
});

Then('continuo na página "Atualizar dados"', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/update-register');

    await this.browser.deleteSession();
});
  


