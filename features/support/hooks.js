const { After, Before } = require("@cucumber/cucumber");
const { POManager } = require("../../tests/pageObjects/POManager");
const PlaywrightExtra = require('playwright-extra');
const stealth = require('playwright-extra-plugin-stealth');

//Before(function(tags:"@foo")
Before(async function(){
    const browser = await PlaywrightExtra.chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});


After(function(){
    console.log("I am last to execute")
});