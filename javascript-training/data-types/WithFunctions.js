// Testcase-01: Verify the home page
console.log("************************Testcase-1: Verify the home page*********************************");
lunchBrowserAndLogin("Chrome");
console.log("Verify the Home page is displayed ");
logourAndCloseBrowser();

// Testcase-02: Verify the account balance

console.log("************************Testcase-2: Verify the account balance****************************");
lunchBrowserAndLogin("Edge");
console.log("Verify the Home page is displayed ");
console.log("Verify the account balance is displayed as:" +getAccountBalance());
logourAndCloseBrowser();

// Testcase-03: Verify the account statement

console.log("************************Testcase-3: Verify the account statement****************************");
lunchBrowserAndLogin("Firefox");
console.log("Verify the Home page is displayed ");
console.log("Navigate the account statment page");
console.log("Verify the account statement is displayed with the following details");
logourAndCloseBrowser();



function lunchBrowserAndLogin(browserName){
    console.log("Launch the " + browserName + " browser");
console.log("Enter the URL: http://www.hdfc.com/");
console.log("Enter the username as 'Martin' and password as 'Martin@123'");
console.log("Click the login button");

}

function logourAndCloseBrowser(){
    console.log("Logout the application");
console.log("Close the browser");
}

function getAccountBalance(){
  console.log("Navigate to the account balance page");
let accountBalance = 5000;
return accountBalance;
}

