# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MoreValidations.spec.js >> visual
- Location: tests\MoreValidations.spec.js:32:6

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  59283 pixels (ratio 0.07 of all image pixels) are different.

  Snapshot: landing.png

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - paragraph [ref=e8]: Call us today 816-774-3500
      - generic [ref=e10]:
        - link [ref=e11] [cursor=pointer]:
          - /url: /site/login
          - img [ref=e12]
        - link "0" [ref=e13] [cursor=pointer]:
          - /url: /site/login
          - img [ref=e14]
          - text: "0"
        - link "Make a Payment" [ref=e15] [cursor=pointer]:
          - /url: /site/payment
    - navigation [ref=e16]:
      - generic [ref=e17]:
        - link [ref=e18] [cursor=pointer]:
          - /url: /
          - img [ref=e19]
        - list [ref=e21]:
          - listitem [ref=e22]:
            - link "HOME" [ref=e23] [cursor=pointer]:
              - /url: /site/index
          - listitem [ref=e24]:
            - link "ABOUT US" [ref=e25] [cursor=pointer]:
              - /url: /site/about
          - listitem [ref=e26]:
            - link "HARDWARE" [ref=e27] [cursor=pointer]:
              - /url: /site/hardware
          - listitem [ref=e28]:
            - link "SOFTWARE" [ref=e29] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e30]:
            - link "CONSULTING SERVICES" [ref=e31] [cursor=pointer]:
              - /url: /site/consulting
          - listitem [ref=e32]:
            - link "WEB TOOLS" [ref=e33] [cursor=pointer]:
              - /url: /site/web-tools
          - listitem [ref=e34]:
            - link "SUPPORT" [ref=e35] [cursor=pointer]:
              - /url: /site/support
          - listitem [ref=e36]:
            - link "CONTACT US" [ref=e37] [cursor=pointer]:
              - /url: /site/contact
  - generic [ref=e39]:
    - generic [ref=e42]: Flightware Solutions provides an innovative, powerful suite of software and hardware solutions and consulting services for all types of retail and wholesale businesses.
    - list [ref=e43]:
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
      - listitem [ref=e46] [cursor=pointer]
      - listitem [ref=e47] [cursor=pointer]
  - generic [ref=e49]:
    - generic [ref=e50]:
      - generic [ref=e51]: SEE WHAT OUR CUSTOMERS
      - generic [ref=e52]: SAY ABOUT US
    - list
  - generic [ref=e54]:
    - generic [ref=e59]:
      - img [ref=e60]
      - generic [ref=e61]: What to know more
    - generic [ref=e64]:
      - generic [ref=e67]:
        - generic [ref=e68]: give us a call
        - text: 816-774-3500
      - link "send us a question" [ref=e70] [cursor=pointer]:
        - /url: https://flightware.com/site/support
        - generic [ref=e71]:
          - generic [ref=e72]: send us
          - text: a question
      - link "Back to Flightware Home" [ref=e74] [cursor=pointer]:
        - /url: https://flightware.com
        - generic [ref=e75]:
          - generic [ref=e76]: Back to
          - text: Flightware Home
  - contentinfo [ref=e77]:
    - list [ref=e78]:
      - listitem [ref=e79]:
        - link "HOME" [ref=e80] [cursor=pointer]:
          - /url: /site/index
      - listitem [ref=e81]:
        - link "ABOUT US" [ref=e82] [cursor=pointer]:
          - /url: /site/about
      - listitem [ref=e83]:
        - link "HARDWARE" [ref=e84] [cursor=pointer]:
          - /url: /site/hardware
      - listitem [ref=e85]:
        - link "SOFTWARE" [ref=e86] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e87]:
        - link "CONSULTING SERVICES" [ref=e88] [cursor=pointer]:
          - /url: /site/consulting
      - listitem [ref=e89]:
        - link "WEB TOOLS" [ref=e90] [cursor=pointer]:
          - /url: /site/web-tools
      - listitem [ref=e91]:
        - link "SUPPORT" [ref=e92] [cursor=pointer]:
          - /url: /site/support
      - listitem [ref=e93]:
        - link "CONTACT US" [ref=e94] [cursor=pointer]:
          - /url: /site/contact
    - generic [ref=e95]: © 2019 FLIGHTWARE SOLUTIONS. All rights reserved.
```

# Test source

```ts
  1  | const {test,expect} = require ('@playwright/test')
  2  | 
  3  | test('Popup validations', async({page}) =>
  4  | {
  5  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  6  |     //await page.goto("https://www.nespresso.com/ma/fr");
  7  |     //await page.goto("https://google.com");
  8  |     //await page.goBack();
  9  |     //await page.goForward();
  10 |     await expect (page.locator("#displayed-text")).toBeVisible();
  11 |     await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
  12 |     await page.locator("#hide-textbox").click();
  13 |     await expect(page.locator("#displayed-text")).toBeHidden();
  14 |     //await page.pause();
  15 |     page.on('dialog', dialog=> dialog.accept());
  16 |     await page.locator('#confirmbtn').click();
  17 |     await page.locator("#mousehover").hover();
  18 |     await page.getByText("Top").click();
  19 |     page.screenshot({path:'screenshot.png'});
  20 |     const framesPage = page.frameLocator("#courses-iframe");
  21 |     framesPage.locator("li a[href*=lifetime-access]:visible").click();
  22 |     const textCheck = await framesPage.locator(".text h2").textContent();
  23 |     console.log(textCheck.split(" ")[1]);
  24 | 
  25 |     //await page.getByText('Sign In / Register').click();
  26 |     //await expect (page.locator(".login-form-dropdown ui-dialog-content ui-widget-content")).toBeVisible();
  27 |     //await expect (page.getByText('Sign In / Register').click()).toBeHidden();
  28 | });
  29 | 
  30 | //screenshot-store->screenshot
  31 | 
  32 | test.only('visual',async({page})=>
  33 | {
  34 |     await page.goto("https://www.flightware.com/");
> 35 |     expect (await page.screenshot()).toMatchSnapshot('landing.png');
     |                                      ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  36 | 
  37 | });
  38 | 
```