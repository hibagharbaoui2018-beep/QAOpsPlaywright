const {test,expect} = require ('@playwright/test')

test('Popup validations', async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://www.nespresso.com/ma/fr");
    //await page.goto("https://google.com");
    //await page.goBack();
    //await page.goForward();
    await expect (page.locator("#displayed-text")).toBeVisible();
    await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    //await page.pause();
    page.on('dialog', dialog=> dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator("#mousehover").hover();
    await page.getByText("Top").click();
    page.screenshot({path:'screenshot.png'});
    const framesPage = page.frameLocator("#courses-iframe");
    framesPage.locator("li a[href*=lifetime-access]:visible").click();
    const textCheck = await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);

    //await page.getByText('Sign In / Register').click();
    //await expect (page.locator(".login-form-dropdown ui-dialog-content ui-widget-content")).toBeVisible();
    //await expect (page.getByText('Sign In / Register').click()).toBeHidden();
});

//screenshot-store->screenshot

test('visual',async({page})=>
{
    await page.goto("https://www.flightware.com/");
    expect (await page.screenshot()).toMatchSnapshot('landing.png');

});
