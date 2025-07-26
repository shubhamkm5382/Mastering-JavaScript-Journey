// Type Conversion in JavaScript

// 1. Explicit Type Conversion
// Explicit Type Conversion is when you manually convert a value from one type to another using functions like Number(), String(), or Boolean().

//example:
let scoreString = "33";
let scoreNumber = Number(scoreString); // Converts string to number
console.log(typeof scoreNumber); // "number"
console.log(scoreString); // "33"

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

// let value = 3
// let negValue = -value
// console.log(negValue);


// ➕ + operator में अगर किसी एक operand की type string है → तो वो उसे string में बदल देता है (concatenation करता है । )
// console.log(2+2); // 4 
// console.log("2" + "2"); // "22" 
// console.log(2 + "2"); // "22" 
// console.log("2" + 2); // "22" 
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// ************ spaecal cases ************

// **** Console.log(+"2"); // 2 (because "2" is converted to number 2) ****
// console.log(2 + "2"); // "22" (because "2" is a string, so concatenation happens)
// console.log(2 + +"2"); // 4 (because "2" is converted to number 2, then added to 2, resulting in 4)
// console.log("2" + +"2"); // "22" (because "2" is a string, and + converts "2" to number 2, then concatenation happens)
// console.log("2" + -2); // "2-2" (because "2" is a string, and -2 is a number, so concatenation happens)
// console.log(2 + -"2"); // 0 (because "2" is converted to number 2, then subtracted from 2, resulting in 0)

// **** console.log(+"hitesh"); // NaN (because "hitesh" cannot be converted to a number, resulting in NaN) ****
// console.log(2 + "hitesh"); // "2hitesh" (2 is converted to string and concatenated with "hitesh")
// console.log(2 + +"hitesh"); // NaN (because "hitesh" is converted to NaN, then added to 2, resulting in NaN)
// console.log("2" + +"hitesh"); // "2NaN" (because "2" is a string, and +"hitesh" is NaN, so concatenation happens)
// console.log("2" + -"hitesh"); // "2NaN" (because "2" is a string, and -"hitesh" is NaN, so concatenation happens)
// console.log(2 + -"hitesh"); // NaN (because "hitesh" is converted to NaN, then subtracted from 2, resulting in NaN)

// ***** console.log(+""); // 0 (empty string is converted to 0) ******
// console.log( 5 +""); // "5" (5 is converted to string, so concatenation happens)
// console.log(5 + +""); // 5 (because empty string is converted to 0, so 5 + 0 = 5)
// console.log("5" + +""); // "50" (because "5" is a string, and +"" is 0, so concatenation happens)
// console.log(5 + -"" ); // 5 (because empty string is converted to 0, so 5 + 0 = 5)
// console.log("5" + -"" ); // "5-0" (because "5" is a string, and -"" is 0, so concatenation happens)

// ***** console.log(+" "); // 0 (space is treated as empty string) ******
// console.log( 5 +" "); // "5 " (5 is converted to string, so concatenation happens)
// console.log(5 + +" "); // 5 (because space is treated as empty string
// console.log("5" + +" "); // "50" (because "5" is a string, and +"" is 0, so concatenation happens)
// console.log(5 + -"" ); // 5 (because space is treated as empty string, so 5 + 0 = 5)
// console.log("5" + -"" ); // "5-0" (because "5" is a string, and -"" is 0, so concatenation happens)

// console.log(5 + true) // 6 (because true is converted to 1 in numeric contexts.)
// console.log("5" + true) // "5true" ("5" is a string, so concatenation happens)
// console.log("5" + +true) // "51" ("5" is a string, +true converts true to 1, so concatenation happens)
// console.log("5" + -true) // "5-1" ("5" is a string, -true converts true to -1, so concatenation happens)

// console.log(5 + false) // 5 (because false is converted to 0 in numeric contexts.)
// console.log("5" + false) // "5false" ("5" is a string, so concatenation happens)
// console.log("5" + +false) // "50" ("5" is a string, +false converts false to 0, so concatenation happens)

// console.log(2 + null); // 2 (because null is automatically converted to 0 in numeric contexts.)
// console.log("2" + null); // "2null" ("2" is a string, so concatenation happens)
// console.log("2" + +null); // "20" ("2" is a string, +null converts null to 0, so concatenation happens)

// console.log(2 + undefined); // NaN (because undefined is converted to NaN when used in numeric contexts.)
// console.log("2" + undefined); // "2undefined" ("2" is a string, so concatenation happens)
// console.log("2" + +undefined); // "2NaN" ("2" is a string, +undefined converts undefined to NaN, so concatenation happens)

// console.log(true + false); // 1 (true is converted to 1, false is converted to 0, so 1 + 0 = 1)


// console.log(2-2); // 0
// console.log("2" - "2"); // 0 "2" is converted to the number 2 (conversion happens before subtraction)
// console.log("2" - 2); // 0 
// console.log(2 - "2"); // 0 
// console.log(4 + "2" - 2 ); // 40 (subtraction before addition)
// console.log("2" - 2 + "2"); // "02" 
// console.log(5 - true); // 4 (true is converted to 1)
// console.log("5" - true); // 4 ("5" is converted to the number 5, then 1 is subtracted)
// console.log(5 - false); // 5 (false is converted to 0)
// console.log("5" - false); // 5 ("5" is converted to the number 5, then 0 is subtracted)
// console.log(2 - null); // 2 (because null is automatically converted to 0 in numeric contexts.)
// console.log(2 - undefined); // NaN (because undefined is converted to NaN when used in numeric contexts.)
// console.log(2 - "hitesh"); // NaN ("hitesh" is converted to the number NaN )
// console.log(true - false); // 1 (true is converted to 1, false is converted to 0)

// console.log(2*2); // 4 
// console.log("2" * "2"); // 4 
// console.log("2" * 2); // 4 
// console.log(2 * "2"); // 4 
// console.log("2" + 2 * 2); // "24"
// console.log(2 + 2 * "2"); // 6 

// console.log(2/2); // 1
// console.log("20" / "2"); // 10 
// console.log("20" / 2); // 10 
// console.log(20 / "2"); // 10 

// console.log(2**3); // 8
// console.log("2" ** "3"); // 8 
// console.log("2" ** 3); // 8
// console.log(2 ** "3"); // 8

// console.log(2 % 3); // 2 (modulus operator gives remainder)
// console.log("2" % "3"); // 2 
// console.log("2" % 3); // 2 
// console.log(2 % "3"); // 2 

// ==============================================
// 📘 JavaScript Arithmetic Operators Precedence
// ==============================================
/*
| Precedence               | Operator | Description             | Associativity     |
(किस को पहले चलाया जाएगा।)  |          |                         | जब दो operators की precedence same हो, तो किस direction में चलेंगे।
|--------------------------|----------|-------------------------|-------------------|
| 1                        | ()       | Parentheses             | n/a               |
| 2                        | **       | Exponentiation (Power)  | Right to Left     |
| 3                        | *, /, %  | Multiply / Divide / Mod | Left to Right     |
| 4                        | +, -     | Add / Subtract          | Left to Right     |
*/
/*
📌 Tip:
- जब doubt हो, parentheses () use करें।
- + operator में अगर किसी एक operand की type string है, तो वो उसे string में बदल देता है (concatenation).
- बाक़ी arithmetic operators (-, *, /, %, **) हमेशा operands को number में convert करते हैं।
*/


// console.log( (3 + 4) * 5 % 3); // 2



let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
// console.log(str3);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion