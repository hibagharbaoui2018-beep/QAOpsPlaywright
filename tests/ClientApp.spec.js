const {test, expect} =  require('@playwright/test');


test('Page Playwright test', async ({page}) =>
{

    await page.goto("https://www.nespresso.com/ma/fr");
    await page.locator('#onetrust-reject-all-handler').click();
    await page.locator('text=Sign In / Register').click();
    await page.locator('#email').fill("hibagharbaoui2018@gmail.com");
    await page.locator('#pass').fill("Hibaensam2024+");
    await page.locator('#send2').click();
    //await page.locator("").waitFor();
    //await page.waitForLoadState('networkidle');


});