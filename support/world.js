const { setWorldConstructor } = require('@cucumber/cucumber');
const playwright = require('playwright');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
  }
}

setWorldConstructor(CustomWorld);
