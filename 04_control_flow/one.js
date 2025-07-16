//if
const isUserLoggedIn = true;
const temperature = 50;

if (temperature < 50) {
  console.log("temperature is less than 50");
} else {
  console.log("temperature is greater than or equal to 50");
}
console.log("executed");

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`);

const ammount = 1000;
if (ammount < 500) console.log("test"), console.log("test2"),
console.log("test3");

const balance = 600;

if (balance < 500) {
  console.log("balance is less than 500");
} else if (balance < 750) {
  console.log("balance is less than 750");
} else if (balance < 1000) {
  console.log("balance is less than 1000");
} else {
  console.log("balance is less than 1200");
}

const UserLoggedIn = true;
const dabitCard = true;

if (UserLoggedIn && dabitCard && 2 == 2) {
  console.log("user is logged in and has debit card");
}

const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user is logged in");
}
