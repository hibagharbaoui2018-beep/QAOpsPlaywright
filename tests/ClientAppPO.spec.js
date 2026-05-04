const {test, expect} =  require('@playwright/test');
const { POManager} = require('./pageObjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require("../utils/TestData.json")));

for (const data of dataSet)
{
    test(`POM test - login ${data.email}`, async ({page}) =>
    {
    const poManager = new POManager(page);
    //const email ="hibagharbaouI@gmail.com";
    //const password = "Hibaensam2024+";
    await page.goto("https://www.nespresso.com/ma/fr");
    await page.locator('#onetrust-reject-all-handler').click();
    await page.locator('text=Sign In / Register').click();
    const loginPage = poManager.getLoginPage();
    loginPage.validLogin(data.email,data.password);
    //await page.locator("").waitFor();
    //await page.waitForLoadState('networkidle');


    });
}