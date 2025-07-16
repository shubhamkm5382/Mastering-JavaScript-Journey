"use strict"; //treat all JS code as newer version

//alert ("Hello, World!"); //we are using nodejs, not browser so alert is not available

// **** code readability should be high ****
// ⇩⇩ this is not good practice, but it works ⇩⇩
console.log(11 
    + 
    11);
console.log("2 statements in a singal line"); console.log("this is not good practice");

// ⇩⇩ this is good practice, each statement on a new line. ⇩⇩
console.log("this is good practice");
console.log("each statement on a new line");

let name = "Shubham";
let age = 21;
let isLoggedIn = true;
let state = null;
let country;

// *** data types ***
// number => 2 to power 53
// bigint => big integer, (for large numbers) 2 to power 64 
// string => "" or '' or ``  --> "assembly of characters"
// boolean => true/false
// null => standalone value  (type = object)
// undefined => variable is declared but not assigned a value
// symbol => unique value; 

// typeof is a function, it returns the type of the variable
console.log(typeof name); // string
console.log(typeof "shubham"); // string
console.log(typeof age); // number
console.log(typeof 21); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof true); // boolean
console.log(typeof state); // null is an object in JS
console.log(typeof null);  // null is an object in JS
console.log(typeof country); // undefined because it is declared but not assigned a value
console.log(typeof undefined); // undefined
console.log(typeof first); // this is undefined because first is not declared anywhere in the code