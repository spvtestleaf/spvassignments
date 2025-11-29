/* Home Assignment <1> Locators
Learning Objective:
Understand how to efficiently select and interact with elements on a web page using different
locator strategies (Playwright getBys, CSS, XPath)
Assignment Details:
Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or
ID, edits details of the lead (such as name, email, or status), and verifies that the changes have
been successfully saved.
Precondition:
- Use a fixture to setup and teardown

Test Steps:
Assignment: 1 Create a Lead
1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Create Lead
8. Fill the Company Name
9. Fill the First Name
10. Fill the Last Name
11. Fill the Salutation
12. Fill the Title
13. Fill the Annual Revenue
14. Fill the Department
15. Fill the Phone number
16. Click Create Lead button
17. Verify the company name, first name, last name and the status
18. Get the page title


Assignment: 2 Edit a Lead
1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Find Leads
8. Enter the first name
9. Click Find Leads button
10. Click the first resulting Lead ID
11. Click Edit
12. Edit Company name
13. Edit Annual Revenue
14. Edit Department
15. Enter Description
16. Click Update
17. Verify the edited fields and print the title of the page


Assignment: 3 Create a new Account
1. Navigate to the url https://login.salesforce.com/
2. Enter username using getByLabel
3. Enter password using getByLabel
4. Click Login
5. Verify the title and url of the page using appropriate assertions
6. Click App Launcher using the class locator
7. Click View All using getByText
8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
9. Click Service using index based XPath
10. Click Accounts using attribute based CSS selector
11. Click New using getByRole
12. Enter Account name using attribute based CSS selector
13. Click Save button using XPath
14. Verify the toast message displayed

Expected Outcome:
Understand the use of Playwright locators to find web elements to validate web page content. */

//Lead Spec
import { chromium, test,  } from "@playwright/test";
import { title } from "process";

test(`launch browser`, async()=>
    {
        
        const browser = await chromium.launch({channel: "chrome"});
        const context= await browser.newContext();
        const page = await context.newPage();
        await page.goto("http://leaftaps.com/opentaps/control/main")
        let title1 = await page.title();
        console.log(title1);

        await page.locator(`#username`).fill(`Demosalesmanager`);
        await page.locator(`#password`).fill(`crmsfa`);
        await page.locator(`.decorativeSubmit`).click();
        await page.locator(`//*[@id="button"]/a/img`).click();
        await page.locator(`//a[contains(text(),'Create Lead')]`).click();
        await page.locator(`//input[@id="createLeadForm_CompanyName"]`).fill(`Salesforce`);
        await page.locator(`//input[@id="createLeadForm_FirstName"]`).fill(`Prassi`);
        await page.locator(`//input[@id="createLeadForm_LastName"]`).fill(`Venki`);
        await page.locator(`//input[@id="createLeadForm_Salutation"]`).fill(`Hello`);
        await page.locator(`//input[@id="createLeadForm_Title"]`).fill(`Mr`);
        await page.locator(`//input[@id="createLeadForm_AnnualRevenue"]`).fill(`180000`);
        await page.locator(`//input[@id="createLeadForm_DepartmentName"]`).fill(`Playwright_Nov2025`);
        await page.locator(`//input[@id="createLeadForm_PhoneNumber"]`).fill(`9993336661`);
        await page.locator(`//input[@class="smallSubmit"]`).click();
        
         
        try {
            
            let logintitle = await page.title();
            console.log(logintitle);
            let expectedTitle = "Leaftaps - TestLeaf Automation Platform"

            
            if (logintitle === expectedTitle) {
                console.log("Title verification passed!");
            } else {
                console.error(` Title verification failed! Expected: "${expectedTitle}", Found: "${logintitle}"`);
            }
        } catch (error) {
            console.error("Error while verifying title:", error);
        }
    
    
    })