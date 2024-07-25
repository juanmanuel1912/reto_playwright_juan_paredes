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

Given('I am logged in as an admin', async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.waitForSelector('selector-for-dashboard', { timeout: 60000 });
});

When('I navigate to the employee management page', async function () {
  await page.click('a[href="/web/index.php/pim/viewEmployeeList"]'); 
});

When('I add the following new employee:', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="firstName"]', data['First Name']);
  await page.fill('input[name="middleName"]', data['Middle Name']);
  await page.fill('input[name="lastName"]', data['Last Name']);
  await page.fill('input[name="employeeId"]', data['Employee ID']);
  await page.click('button[type="submit"]');
});

Then('I should see {string} in the employee list', async function (employeeId) {
  await page.waitForSelector(`text=${employeeId}`, { timeout: 60000 });
});

Then('I should see an error message indicating missing fields', async function () {
  await page.waitForSelector('text=Error: Missing fields', { timeout: 60000 });
});


