const name = "shubham";
const repoCount = 50;

console.log(name + repoCount + " Value");
console.log(`${name} ${repoCount} value`);

const gameName = new String("Football");
const gameName2 = "Badminton";

console.log(gameName);
console.log(gameName2);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

console.log(gameName.substring(-6,4));
console.log(gameName.slice(-6,4));

const newStringOne = "   shubham kumar   ";
console.log(newStringOne);
console.log(newStringOne.trim());  // 'shubham kumar'

const url = "https://www.google.com/shubham%20mahato";
console.log(url.replace('%20', '_'));
console.log(url.includes('sundar'));

const name1 = "shubham_kumar_mahato";
console.log(name1.split('_'));
