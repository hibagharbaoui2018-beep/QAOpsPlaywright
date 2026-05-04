const { locators } = require('./locators');

class CartPage {
  constructor(page) {
    this.page = page;
  }

  async addToCart(quantity = 1) {

    // 1. cliquer sur bouton principal
    await this.page.locator(locators.cart.addToCartMain).first().click();

    // 2. attendre popup (si elle existe)
    const qtyInput = this.page.locator(locators.cart.quantityInput);

    try {
      await qtyInput.waitFor({ state: 'visible', timeout: 3000 });

      // 3. gérer quantité
      if (quantity <= 5) {
        await this.page.locator(`${locators.cart.quantityOption}[data-qtyitem="${quantity}"]`).click();
      } else {
        await qtyInput.fill(quantity.toString());
      }

      // 4. confirmer
      await this.page.locator(locators.cart.confirmAddToCart).click();

    } catch (e) {
      // 👉 pas de popup → produit ajouté directement
      console.log("Popup quantité non affichée, ajout direct");
    }
  }
}

module.exports = { CartPage };