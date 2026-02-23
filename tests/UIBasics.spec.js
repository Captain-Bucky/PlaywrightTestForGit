 const {test} = require('@playwright/test');

// If you don't declare playwright package it will not recognize below test annotation

 test('First Playwright test', async({browser})=>
{
    //this is nameless function
    // async function() can be written as async()=> making code ligher
    //playwright code
    // if you are using wait, you need async function as JS is async
    //using browser inside {} indicates it is playwright fixture and is a global variable

    const context = await browser.newContext();
    //helps to open new instance of browser with proxy or for injecting cookies etc.

    const page = context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});
    /*Alternative way*/
test('Page Playwright test', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
}); 