const { locators } = require('./locators');

class LoginPage {

  constructor(page) {
    this.page = page;
  }

  async login(email, password) {

  await this.page.waitForLoadState('domcontentloaded');

  // Simuler un vrai utilisateur — mouvement de souris avant le click
  await this.page.mouse.move(100, 100);
  
  await this.page.locator(locators.home.loginLink).click();
  //await this.page.goto(locators.home.loginUrl);
  

  await this.page.locator(locators.login.email).fill(email);
  

  await this.page.locator(locators.login.password).fill(password);
  
 
 await this.page.locator(locators.login.submit).click();


}

  
}

module.exports = { LoginPage };