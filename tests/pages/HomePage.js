const { locators } = require('./locators');

class HomePage {

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.nespresso.com/ma/fr');
  }

  async acceptCookies() {
    const btn = this.page.locator(locators.home.cookieReject);
    if (await btn.isVisible()) await btn.click();
  }

}

module.exports = { HomePage };