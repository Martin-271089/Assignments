// 1. initialization
// 2. Re-assigment
// 3. Re-declaration
// 4. Scope

// 1. initialization - Adding the value at the time of declaration
const a = 30; // constant value must be initialized
let b; // can be initialized later
var c; // can be initialized later

// 2. Re-assigment - Changing the value at the time of a variable after it has been declared

// a=20; // Error: Assignment to constant variable.
b=20; // Allowed, we can reassign a variable declared with let
c=20; // Allowed, we can reassign a variable declared with var


console.log("Execution completed successfully");

// 3. Re-declaration - Using the same variable name to store someother data in the same file.

// const a='abc'; // Error: It is not allowed to re-declare a constant variable
// let b='sdf';    // Error: It is not allowed to re-declare a variable declared with let
var c='xdf'; // Allowed, we can re-declare a variable declared with var


console.log(c); // 

// 4. Scope ==> where we can store the data

// const and let are block scoped, which means they are only accessible within the block they are defined in (e.g., inside a function, loop, or if statement). var is function scoped, which means it is accessible throughout the entire function it is defined in.
// var is not block scoped

{
    const x=100;
    let y=200;
    var z=300;

    console.log(x);
    console.log(y);
    console.log(z);
}