//1.number ==> The data type that we are going to use to store numbers with decimals or without decimals without any quotations.
let num1 = 10;
let num2 = 10.5;
console.log(num1);
console.log(num2);

//2. String ==> The data type that we are going to use to store text or characters with single quotes, double quotes, or backticks.
let empName = "Martin";
let empCity = "Kumbakonam";
console.log(empName);
console.log(empCity);

let greeting = 'He told me, "Good morning"';
let newGreeting = "I told him, 'Very Good Morning'";
let anotherGreeting = "I told him,'Very Good Morning' and \"Nice to meet you\"";
console.log(greeting);
console.log(newGreeting);
console.log(anotherGreeting);

//backtick ==> Backtick is used to store the template literals.
let message = `Hello, ${empName} welcome to ${empCity}`;
console.log(message);

//3. Boolean ==> The data type that we are going to use to store true or false values.
let isRaining = true;
let isSunny = false;
console.log(isRaining);
console.log(isSunny);
console.log(10 > 5);

// 4. undefined ==>undefined represent a varaiable that has been declared but not assigned a value. It is a primitive data type in JavaScript.
let age;
console.log(age); // Output: undefined

//5. null ==> null represent a variable that has been declared and assigned a value of null.

let salary = 10000;
salary = null;
console.log(salary);

// 6. Symbol ==> Symbol represent a unique idnetifier.

let countryOfOrigin = Symbol();
let productInfo = {
    productName: "onePlus",
    price: 45000,
    color: "White",
    [countryOfOrigin] : "China"
}

console.log(productInfo);

console.log("***********************************************************");

let custAccNo = Symbol();

let bankDetails = {

customerName: "Martin",
[custAccNo]: 4569258,
custBranch: "Nanganallur",
custCity: "Chennai"

}

console.log(bankDetails); 

/**********************************************/
/***********NON-PRIMITIVE DATA TYPE IN JAVASCRIPT ***********/
/**********************************************/

// 1. Object ==> object data type represent a colection of key-value pairs.
let person = {
    name: "Martin Goms Snow",
    age: 36,
    empId: 10025,
    visaStatus: true,
    address: {
        city: "Kumbakonam",
        state: "Tamilnadu",
        country: "India"
    }
}
console.log(person);

// Print the name of the person
console.log(person.name);   //method 1: dot notation
console.log(person["age"]); // method 2: bracket notation

// print the country of the person
console.log(person.address.country);

//2. Array ==> Array that represent the list of values.
let fruits = ["Apple", "Banana", "Orange", "Grapes"];
console.log(fruits);
let prices = [10, 20, 30, 40];
console.log(prices);

let fruitsAndPrices = ["Apple", 10, "Banana", 20, "Orange", 30, "Grapes", 40];
console.log(fruitsAndPrices);
console.log(fruitsAndPrices[0]);
console.log(fruitsAndPrices[1]);

let employees = ["Martin", "John", "Raghu", "Mahender"]

console.log(employees);
console.log(employees[0]);
console.log(employees[2]);

// 3. Function ==> Function is a block of code or collection of statement that perform a specific task.

function lunchBrowserAndLogin(browserName) {
    console.log("Launch the " + browserName + " browser");
    console.log("Enter the URL: http://www.hdfc.com/");
    console.log("Enter the username as 'Martin' and password as 'Martin@123'");
    console.log("Click the login button");

}

// 4. Set ==> Set is a collection of unique values. It does not allow duplicate values .

let empIds = new Set();
empIds.add(123);
empIds.add(124);
empIds.add(125);
empIds.add(124);
empIds.add(126);

console.log(empIds);
console.log(empIds.size);
console.log(empIds.size[2]); // it will provide result as undefined because set does not support index based access.
console.log(empIds.has(125)); // true


//5. Map ==> Map can store multiple key-value pairs. Maps allow the duplicate values, but they won't allow duplicate keys.
let empMap = new Map();
empMap.set(123, "Bharath");
empMap.set(121, "Sarath");
empMap.set(123, "Anurag");
empMap.set(125, "Admin");
empMap.set(126, "Amit");
empMap.set(127, "Amit");

console.log(empMap);
console.log(empMap.get(123)); // Anurag
console.log(empMap.size);
console.log(empMap.has(125)); // true

empMap.delete(126);
console.log(empMap);
console.log(empMap.get(127));

//6. Date ==> Date represent data and time in javascript.

let currentDate = new Date();
console.log("CurrentDate:"+ currentDate);

// Current year
console.log("Current Year: " + currentDate.getFullYear());

// Current month
console.log("Current month" + currentDate.getMonth() + 1); //0 to 11

// Current date
console.log("Current date: " + currentDate.getDate());

// Current day
console.log("Current day: " + currentDate.getDay())

// Current hours
console.log("Current Hours:" + currentDate.getHours());

// Current minutes
console.log("Current minutes:" + currentDate.getMinutes());

// Current seconds
console.log("Current seconds:" + currentDate.getSeconds());

console.log("*******************************");


