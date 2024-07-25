const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('chai');

let browser;
let page;

Before(async function () {
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
});

After(async function () {
  await page.close();
});

Given('I am on the login page', async function () {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I log in as an admin with username {string} and password {string}', async function (username, password) {
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
});

Then('I should be redirected to the dashboard', async function () {
  // Espera que el selector del dashboard esté presente
  await page.waitForSelector('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module', { timeout: 10000 });
  // Validar que el texto esté presente en la página
  const dashboardText = await page.textContent('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module');
  expect(dashboardText).contain('Dashboard');
});

Then('I should see an error message indicating incorrect credentials', async function () {
  // Espera que el mensaje de error esté presente
  const errorMessage = await page.waitForSelector('.oxd-alert-content.oxd-alert-content--error', { timeout: 10000 });
  const errorText = await errorMessage.textContent();
  expect(errorText).toContain('Invalid credentials');
});