const name = "shubham";
const repoCount = 50;

console.log(name + repoCount + " Value");
console.log(`${name} ${repoCount} value`);

const gameName = new String("Football");
const gameName2 = "Badminton";

console.log(gameName); // [String: 'Football']
console.log(gameName2); // 'Badminton'

console.log(typeof gameName); // object (String object)
console.log(typeof gameName2); // string (Primitive string)

console.log(gameName == "Football"); // true (loose equality) 
console.log(gameName === "Football"); // false (strict equality) 
console.log(gameName2 === "Badminton"); // true (strict equality)

console.log(gameName.__proto__);
console.log(gameName2.__proto__);

console.log(gameName[0]); // 'F' (accessing character at index 0)
console.log(gameName2[0]); // 'B' (accessing character at index 0)

console.log(gameName.toUpperCase()); // 'FOOTBALL'
console.log(gameName2.toLowerCase()); // 'badminton'

console.log(gameName.length); // 8 (length of the string)
console.log(gameName.charAt(1)); // 'o' (character at index 1)
console.log(gameName.indexOf("a")); // 5 (index of first occurrence of 'a')
console.log(gameName.indexOf("x")); // -1 (not found)
console.log(gameName.lastIndexOf("o")); // 2 (last occurrence of 'o')
console.log(gameName.startsWith("Foo")); // true (starts with 'Foo')
console.log(gameName.endsWith("ball")); // true (ends with 'ball')
console.log(gameName.includes("ot")); // true (contains 'ot')

// ================ substring ===================
const str = "Football";
console.log(str.substring(0, 4)); // 'Foot'
console.log(str.substring(4, 0)); // 'Foot'
console.log(str.substring(-3, 4)); // 'Foot'
console.log(str.substring(4, -2)); // 'Foot'
console.log(str.substring(-2, -4)); // ''
console.log(str.substring(0)); // 'Football' (0 to end)
console.log(str.substring(-4)); // 'Football' 
/* 
substring(start, end) 
1️. If start > end  It swaps them → substring(end, start)
2️. substring() negative index को हमेशा 0 बना देता है — चाहे start हो या end, और चाहे दोनों ही क्यों न हों.
*/

// ================ slice ===================
console.log(str.slice(0, 4));   // 'Foot'
console.log(str.slice(4, 0));   // ''
console.log(str.slice(-3, 4));  // ''          -3 => (8 - 3 = 5) => index 5
console.log(str.slice(4, -2));  // 'tb'        -2 => (8 - 2 = 6) => index 6
console.log(str.slice(-2, -4)); // ''          -2 = index 6, -4 = index 4
console.log(str.slice(0));      // 'Football'  0 to end
console.log(str.slice(-4));     // 'ball'     -4 = index 4 → 4 to end
console.log(str.slice(-40));    // 'Football' -40 is out of bounds, treated as 0
/*
slice(start, end)
1️. If start > end → returns empty string
2️. Negative index (start, end, or both): counts from end of string 
      e.g. -1 => str.length - 1
*/

const newStringOne = "   shubham kumar   ";
console.log(newStringOne);
console.log(newStringOne.trim());  // 'shubham kumar'

const url = "https://www.google.com/shubham%20mahato";
console.log(url.replace('%20', '_'));
console.log(url.includes('sundar'));

const name1 = "shubham_kumar_mahato";
console.log(name1.split('_'));

console.log(name1.split('_').join(' '));