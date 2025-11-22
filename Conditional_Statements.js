/* Week-1 Assignment Details:
Assignment Requirements:
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript
Hints to Solve:
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For
`runTests`, use a `switch` statement to handle different `testType` values, including a default case.
Expected Outcome:
Upon completion, you should be able to:
- Understand and implement different conditional statements using Javascript  */

function lauchbrowser(browser){
    if (browser === "Chrome")
        console.log("Launching Chrome Browser");
    else {
        console.log("Not Launching Chrome Browser");
    }   
}   
//lauchbrowser("Chrome"); 
//lauchbrowser("FireFox");

function selectTest(testcasetype){
    switch(testcasetype){
        case "smoke":
            console.log("Execution of Smoke Testcases");
            break   
        case "regression":
            console.log("Execution of Regression Testcases");
            break
        case "sanity":
            console.log("Execution of Sanity Testcases");
            break
        default:
            console.log("Execute the Smoke Testcases by Default");
    }
}

selectTest("smoke");