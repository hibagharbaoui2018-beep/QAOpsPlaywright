const { test, expect }  = require('@playwright/test');
const { chromium }      = require('playwright-extra');
const StealthPlugin     = require('puppeteer-extra-plugin-stealth'); //  puppeteer, pas playwright
const { HomePage }      = require('./pages/HomePage');
const { LoginPage }     = require('./pages/LoginPage');
const { SearchPage } = require('./pages/SearchPage');
const { CartPage } = require('./pages/CartPage');

// Activer le plugin stealth
chromium.use(StealthPlugin());

test('Nespresso - Login', async ({ }) => {

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport:  { width: 1280, height: 720 },
    locale:    'fr-MA',
  });
  const page = await context.newPage();

  const homePage  = new HomePage(page);
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);
  const cartPage = new CartPage(page);

  await homePage.goto();
  await homePage.acceptCookies();
  await loginPage.login('hibagharbaoui2018@gmail.com','Hibaensam2024+');

  await expect(page).toHaveURL(/customer\/account/);
  console.log('✅ Login réussi !');

  await searchPage.searchProduct("CREATISTA PRO");
  await searchPage.selectExactProduct("CREATISTA PRO");

  await cartPage.addToCart(2);

  await browser.close();

});