const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/cancelamento_de_pedido.feature --require tests/step_definitions/cancelamento_de_pedido.js

setDefaultTimeout(100000);

//////////// Scenario: cancelamento de pedido ////////////

Given('eu estou na página "Acompanhemento de Pedido"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/order-tracking');
});