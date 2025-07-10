const score = 400;
const balance = new Number(100);

console.log(balance);
console.log(typeof balance);

console.log(balance.toString());
console.log(typeof balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));
console.log(score.toFixed(2));

const otherNumber = 100.563456789;

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));

// *******************************  maths *******************************

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.round(4.4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(2, 4, 8, 1, 5));
console.log(Math.max(1, 8, 4, 2, 6));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

