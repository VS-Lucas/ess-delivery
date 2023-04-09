const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/cadastrar_restaurantes.feature --require tests/step_definitions/cadastrar_restaurantes.js

setDefaultTimeout(100000);

//////////// Scenario: forgotten password ////////////

Given('I am at the recover password screen', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/passwordrecovery');
});

Given('I can see a request for my restaurants email', async function () {
    
});

When('I enter the email {string}', async function (email) {
    const nomeInput = await this.browser.$('[id="email-address"]');
    await nomeInput.setValue(email);
});

Then('I see a message telling me my new password', async function (email) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"Sua nova senha é:")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 10000});
});

