// Syntax to store data in Typescript

// VariableDeclaration variable:Data type = value;

// Data type in javascript are divided into two different categories

// 1. Primitive data type (immutable)
// 2. Non-primitive data type (mutable)

/**********************************************/
/***********PRIMITIVE DATA TYPE IN TYPESCRIPT ***********/

//1.number ==> The data type that we are going to use to store numbers with decimals or without decimals without any quotations.

let num1: number = 10;
let num2: number = 10.5;
console.log(num1);
console.log(num2);

//2. String ==> The data type that we are going to use to store text or characters with single quotes, double quotes, or backticks.
let empName: string = "Martin";
let empCity: string = "Kumbakonam";
console.log(empName);
console.log(empCity);

//3. Boolean ==> The data type that we are going to use to store true or false values.
let isRaining: boolean = true;
let isSunny: boolean = false;
console.log(isRaining);
console.log(isSunny);
console.log(10 > 5);


// 4. undefined ==>undefined represent a varaiable that has been declared but not assigned a value. It is a primitive data type in JavaScript.
let undefinedValue: undefined;
console.log(undefinedValue); // Output: undefined

//5. null ==> null represent a variable that has been declared and assigned a value of null.

let nullValue: null = null;
console.log(nullValue); // Output: null

// Union data type ==> Union represents more than one data type allowed within the variable 

