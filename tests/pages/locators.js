const locators = {

  home: {
    cookieReject:"#onetrust-reject-all-handler",
    loginLink:    '#header-login-link',
    loginUrl:'https://www.nespresso.com/ma/fr/customer/account/login/',
  },

  login: {
    email: 'input[placeholder="Votre adresse e-mail"]',
    password: '#pass:visible',
    submit: '#send2:visible',
  },

  search: {
  openButton: '[data-role="minisearch-label"]',
  input: '#search',
  },
  products: {
  productLink: '.product-item-link',
 },

  cart: {
  addToCartMain: 'button.tocart.primary',
  quantityOption: '[data-qtyitem]',
  quantityInput: '#qty',
  confirmAddToCart: '#product-addtocart-button',
},

  checkout: {
    proceedBtn:     'button:has-text("Proceed to Checkout")',
    firstName:      '#firstname',
    lastName:       '#lastname',
    phone:          '#telephone',
    address:        '#street_1',
    city:           '#city',
    nextBtn:        'button:has-text("Next")',
  }

};

module.exports = { locators };