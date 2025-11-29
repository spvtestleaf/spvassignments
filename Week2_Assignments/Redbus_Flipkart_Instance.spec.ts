/* Home Assignment <2.2>
Red Bus and Flipkart in Edge and Webkit Browser Instances (Week2.Day2)
Learning Objective:
• Learn how to automate basic navigation to two different websites (Red Bus and Flipkart) in
two separate browser instances (Edge and Webkit) using Playwright.
Expected Completion Time:
• Best Case: 15 minutes
• Average Case: 20 minutes
Assignment Details:
Task:
Your task is to launch two separate browser instances using Playwright:
1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Webkit browser instance and verify the page title and URL.
Preconditions:
1. Use Playwright to launch Edge and Webkit.
2. Create two separate browser instances.
3. Use the following URLs: o Red Bus: https://www.redbus.in o Flipkart:
https://www.flipkart.com
Requirements:
• Red Bus (Edge): o Load the home page and print the page title and current URL.
Flipkart (Webkit): o Load the home page and print the page title and current URL.
Hints:
• Use page.title() to retrieve the page title.
• Use page.url() to retrieve the current page URL.
Expected Outcome:
• Upon completion, you should be able to navigate two websites in two separate browser
instances (Edge and Webkit), retrieve page information, and print the page titles and URLs */

import { chromium, test, webkit } from "@playwright/test";

test(`Test to learn CSS Selectors`, async () => {

//Red Bus (Edge) Browser:
const browser1 = await chromium.launch({ channel: "msedge" });
const context1 = await browser1.newContext();
const page1 = await context1.newPage(); 


await page1.goto(`https://www.redbus.in/`)
const pageTitle=await page1.title();
console.log('The title of Redbus page is '+pageTitle);
const url=page1.url();
console.log('The URL of Redbus page is '+url);

//Flipkart (Webkit) Browser:
const browser2 = await webkit.launch();
const context2 = await browser2.newContext();
const page2 = await context2.newPage();

await page1.goto(`https://www.flipkart.com/`)
const pageTitle2=await page1.title();
console.log('The title of Flipkart page is '+pageTitle2);
const url2=page1.url();
console.log('The URL of Flipkart page is '+url2);

})  