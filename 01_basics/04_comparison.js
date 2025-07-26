// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log("02" > 1); // true ("02" is coerced to 2)
// console.log(2 == "02"); // true ("02" is coerced to 2)
// console.log("2" == "02"); // false (JavaScript does not do type coercion because Both are strings (same types))
// console.log(2 != "2"); // false 
// console.log(2 === "2"); // false (strict equality, no coercion)
// console.log(2 !== "2"); // true

// console.log(false == 0); // true → false को 0 माना गया
// console.log(true == 1); // true → true को 1 माना गया
// console.log(true == "1"); // true → "1" string को 1 माना गया
// console.log(false == "0"); // true → "0" string को 0 माना गया
// console.log("" == 0); // true → empty string को 0 माना गया
// console.log(" " == 0); // true → space भी number 0 बनता है
// console.log(true === 1); // false → strict equality, type different

// console.log(null > 0); // false - null को 0 माना गया
// console.log(null < 0); // false - null को 0 माना गया
// console.log(null == 0); //false -because null को 0 नहीं माना गया
// console.log(null >= 0); // true → null को 0 माना गया 
// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined <= 0); // false
// console.log(undefined == null); // true → special case
// console.log(undefined === null); // false → type different
null == undefined       // ✅ true
null == 0               // ❌ false
undefined == 0          // ❌ false