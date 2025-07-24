// Type Conversion in JavaScript

// 1. Explicit Type Conversion
// Explicit Type Conversion is when you manually convert a value from one type to another using functions like Number(), String(), or Boolean().

//example:
let scoreString = "33";
let scoreNumber = Number(scoreString); // Converts string to number
console.log(typeof scoreNumber); // "number"
console.log(scoreString);

// Number(): Converts a value to a number.
Number('123');  // 123
Number('abc');  // NaN (Not a Number)
Number('');    // 0
Number(false);  // 0
Number(true);   // 1
Number(null);   // 0
Number(undefined); // NaN
Number([1, 2, 3]); // NaN (Not a Number)
Number([]); // 0 (empty array becomes 0)
Number({name: "John"}); // NaN (Not a Number)
Number({}) // NaN (Not a Number)


let someNumber = 33
let stringNumber = String(someNumber) // Converts number to string
console.log(typeof stringNumber); // "string"
console.log(stringNumber); // "33"

// String(): Converts a value to a string.
String(123);    // "123"
String(true);   // "true"
String(false);  // "false"
String(null);   // "null"
String(undefined); // "undefined"
String([1, 2, 3]); // "1,2,3"
String([]); // "" (empty array becomes empty string)
String({name: "John"}); // "[object Object]"
String({}); // "[object Object]"


let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn) // Converts string to boolean
console.log(typeof booleanIsLoggedIn); // "boolean"
console.log(booleanIsLoggedIn); // true

// Boolean(): Converts a value to a boolean.
Boolean(1);    // true
Boolean(1423);    // true
Boolean(0);    // false
Boolean('');   // false
Boolean('Hello');  // true
Boolean(null); // false
Boolean(undefined); // false
Boolean([]);   // true (empty array is truthy)
Boolean([1, 2, 3]); // true (non-empty array is truthy)
Boolean({}); // true (empty object is truthy)
Boolean({name: "John"}); // true (non-empty object is truthy)


// 2. Implicit Type Conversion (Coercion)
// Implicit Type Conversion is when JavaScript automatically converts a value from one type to another during operations, such as arithmetic or string concatenation.

// Example:
let implicitConversion = 5 + "10"; // "510" (number to string)
let implicitConversion2 = 5 * "10"; // 50 (string to number)


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// *********************** Special Cases ***********************

// Special Case: Null and Undefined 

// Example:
let a = null + 1;  // 1, because null is automatically converted to 0 in numeric contexts.
let b = undefined + 1;  // NaN, because undefined is converted to NaN when used in numeric contexts.


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion