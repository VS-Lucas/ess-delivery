const assert = require('assert');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
//const { Given, When, Then } = require('../step_definitions/stepdefs');
const { remote } = require('webdriverio');
const { expect } = require('chai');
const puppeteer = require('puppeteer');

// Comando: npx cucumber-js tests/features/teste.feature --require tests/step_definitions/stepdefs.js

setDefaultTimeout(100000);
let browser

Given('estou na página Descadastramento', async function () {
  // código para verificar se a página atual é a página de descadastramento
    // Inicializa o navegador usando o WebdriverIO
    browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })
    await browser.url('http://localhost:8080/unsubscribe-restaurant');
    const urlAtual = await browser.getUrl();
    await expect(urlAtual).to.equal('http://localhost:8080/unsubscribe-restaurant');
});

When('eu descadastro meu restaurante', async function () {
  // código para clicar no botão de descadastrar o restaurante atual
  const removerCadastroBtn = await browser.$('//button[text()="Remover cadastro"]');
  await removerCadastroBtn.click();
  await browser.waitUntil(async () => {
    const urlAtual = await browser.getUrl();
    return urlAtual === 'http://localhost:8080/';
  }, {timeout: 50000});
});

Then('sou direcionado para a página Home', async function () {
  // código para direcionar e verificar se a página atual é a página inicial (Home)
  //await browser.url('http://localhost:8080/');
  const urlAtual = await browser.getUrl();
  await expect(urlAtual).to.equal('http://localhost:8080/');
});



