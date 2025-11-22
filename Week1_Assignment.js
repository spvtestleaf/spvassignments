//let browser;
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