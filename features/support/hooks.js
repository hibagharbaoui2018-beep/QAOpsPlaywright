import { After, Before } from "@cucumber/cucumber";
import { POManager } from "../../tests/pageObjects/POManager";

//Before(function(tags:"@foo")
Before(function(){
    const browser = await PlaywrightExtra.chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager=new POManager(this.page);
});


After(function(){
    console.log("I am last to execute")
});