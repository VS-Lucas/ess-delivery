const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { remote } = require('webdriverio');

// npx cucumber-js tests/features/login_restaurante.feature --require tests/step_definitions/login_restaurante.js
// rodar cenários separadamante 
setDefaultTimeout(100000);


//////////// Scenario: successfully logging in ////////////

Given('I am at the login screen', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/login');
});

Given('I can see a request for my restaurants email', async function () {
    await this.browser.waitUntil(async () => {
        const emailInput = await this.browser.$('[placeholder="CNPJ ou Email"]');
        return await emailInput.isDisplayed();
    }, {timeout: 5000});
});

Given('I can see a request for the accounts password', async function () {
    await this.browser.waitUntil(async () => {
        const passwordInput = await this.browser.$('[placeholder="Senha"]');
        return await passwordInput.isDisplayed();
    }, {timeout: 5000});
});

Given('my restaurant is registered to the system with the email "atlantico@gmail.com" with the password "CkRGTXN7"', async function () {
    // está registrado no sistema, mas não executa nenhuma ação.
});

When('I enter my restaurants email {string} with the password {string}', async function (email, password) {
    const emailInput = await this.browser.$('[id="email-address"]');
    await emailInput.setValue(email);

    const passwordInput = await this.browser.$('[id="password"]');
    await passwordInput.setValue(password);

    const login = await this.browser.$('//*[@id="app"]/div/div/div/div/form/div[3]/button');
    await login.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
});

Then('I am now at my restaurants home screen', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/home-restaurant');

    await this.browser.deleteSession();
});


//////////// Scenario: successfully logging out ////////////

Given('I am logged in to the system with the email "atlantico@gmail.com"', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/home-restaurant');
});

Given('I am in my restaurants home screen', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/home-restaurant');
});

When('I open my profile options', async function () {
    const profileButton = await this.browser.$('//*[@id="app"]/div/div/div[1]/nav/div/div/button[2]');
    await profileButton.click();
});

When('I click the option to log out of the system', async function () {
    const logout = await this.browser.$('//*[@id="profile"]/button[3]');
    await logout.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
});

Then('I am logged out', async function () {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.not.equal('http://localhost:8080/home-restaurant');
});

Then('I am now at the login screen', async function (email) {
    const currentUrl = await this.browser.getUrl();
    expect(currentUrl).to.include('http://localhost:8080/login');

    await this.browser.deleteSession();
});


//////////// Scenario: cadastro de restaurante com email inválido ////////////

Given('I am at the login screen', async function () {
    this.browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });
    await this.browser.url('http://localhost:8080/login');
});

Given('I can see a request for my restaurants email', async function () {
    await this.browser.waitUntil(async () => {
        const emailInput = await this.browser.$('[placeholder="CNPJ ou Email"]');
        return await emailInput.isDisplayed();
    }, {timeout: 5000});
});

Given('I can see a request for the accounts password', async function () {
    await this.browser.waitUntil(async () => {
        const passwordInput = await this.browser.$('[placeholder="Senha"]');
        return await passwordInput.isDisplayed();
    }, {timeout: 5000});
});

When('I enter my restaurants email {string} with the password {string}', async function (email, password) {
    const emailInput = await this.browser.$('[id="email-address"]');
    await emailInput.setValue(email);

    const passwordInput = await this.browser.$('[id="password"]');
    await passwordInput.setValue(password);

    const login = await this.browser.$('//*[@id="app"]/div/div/div/div/form/div[3]/button');
    await login.click();
});

Then('I see an error message', async function (error) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"Email/CPNJ ou senha inválidos")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 10000});

    await this.browser.deleteSession();
});



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
    await this.browser.waitUntil(async () => {
        const emailInput = await this.browser.$('[placeholder="E-mail address"]');
        return await emailInput.isDisplayed();
    }, {timeout: 5000});
});

Given('my restaurant is registered to the system with the email "atlantico@gmail.com"', async function () {
    // está registrado no sistema, mas não executa nenhuma ação.
});

When('I enter the email {string}', async function (email) {
    const nomeInput = await this.browser.$('[id="email-address"]');
    await nomeInput.setValue(email);

    const enviar = await this.browser.$('//*[@id="app"]/div/div/div/div/form/div[2]/button');
    await enviar.click();
});

Then('I see a message telling me my new password', async function (email) {
    await this.browser.waitUntil(async () => {
        const mensagemElement = await this.browser.$(`//*[contains(text(),"Sua nova senha é:")]`);
        return await mensagemElement.isDisplayed();
    }, {timeout: 10000});

    const enviar = await this.browser.$('//*[@id="app"]/div/div/div/div/div[2]/div[2]/button');
    await enviar.click();

    await this.browser.deleteSession();
});

