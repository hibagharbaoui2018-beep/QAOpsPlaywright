const { locators } = require('./locators');

class SearchPage {
  constructor(page) {
    this.page = page;
  }

  async searchProduct(productName) {

 
  await this.page.locator(locators.search.openButton).click();

  
  const searchInput = this.page.locator(locators.search.input);
  await searchInput.waitFor({ state: 'visible' });

  
  await searchInput.fill(productName);

  
  await searchInput.press('Enter');

 
  //await this.page.waitForLoadState('networkidle');
}

  async selectExactProduct(productName) {

    // filtrer produit EXACT
    const product = this.page.locator(locators.products.productLink)
     .filter({ hasText: productName });

    await product.first().click();
  }
}

module.exports = { SearchPage };