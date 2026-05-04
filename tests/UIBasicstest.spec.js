const {test, expect} =  require('@playwright/test');
const { text } = require('node:stream/consumers');

// run tests parallely from the same file
test.describe.configure({mode:'parallel'});
//async function() == async () => 
test('Browser Context Playwright test', async ({browser}) =>
{
// playwright code-
//chrome - plugins/cookies

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.google.com");
//get title - assertion
console.log(await page.title());
await expect(page).toHaveTitle("Google");
});



test('Page Playwright test', async ({page}) =>
{
// playwright code-
const titles = await page.locator('.featured-category-link ');

const UserEmail = page.locator("[aria-label ='Email Address']");
const signIn = page.locator("[type ='submit']");

await page.goto("https://www.fortnumandmason.com/login");
// 👇 Fermer le popup pays
  const closeBtn = page.locator('.p-dialog-header-icon');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }     
console.log(await page.title());
await UserEmail.click();

//css, type, fill
await page.locator("[aria-label ='Email Address']").fill("hibagharbaoui2018@gmail.com");
await page.locator('#main-content').locator("[aria-label='Login']").click();

await page.locator("[type ='password']").fill("rGKdm7WTGt8uL:M");
await page.locator("[type ='submit']").click();
console.log(await page.locator(".p-toast-message-content").textContent());
//console.log(await page.locator(".p-toast-message-content").first().textContent());
//console.log(await page.locator(".p-toast-message-content").nth(0).textContent());


await expect(page.locator('.p-toast-message-content .message'))
  .toContainText('invalid email or password');

await page.locator('#toast-ok-button').click();

// fill : you can modify the value

await UserEmail.fill("");
await UserEmail.fill("hibatallahelgharbaoui.pro@gmail.com");
await signIn.click();


//const allTitles = await titles.allTextContents();
//console.log(allTitles);
await page.evaluate(() => window.scrollBy(0, 500));
await page.waitForTimeout(1000); 

const firstTitle = await page.locator('.featured-category-link').first().textContent();
console.log(firstTitle);

const Title = await page.locator('.featured-category-link').allTextContents();
console.log(Title);

});

test('UI Controls',async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractice/");
    const userName = page.locator('#');
    const signIn = page.locator('#');
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption("consultant");
    //await expect(page.locator("")).toBeChecked();
    //await expect(page.locator("")).isChecked();
    //await expect(page.locator("")).uncheck();
    //expect(await page.locator("").isChecked).toBeFalsy();
    await page.pause();


});

test('Child windows handling', async ({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/");
const joinFree = page.locator("[href*='sign_up']");


//switch to another context
const [newPage] = Promise.all(
[context.waitForEvent(page), //listen for any new page
joinFree.click(),

] ) //new page is opened

// await text = newPage.locator("").textContent();
//console.log(text);

});



