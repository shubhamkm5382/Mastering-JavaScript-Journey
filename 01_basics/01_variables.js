const accountId = 19283;
let accountEmail = "danish@bhai.com";
var accountPassword = "34768";
accountCity = "Mumbai";
let accountState;

// accountId = 787432 --> Not Allowed
accountEmail = "deepak@kalal.com";
accountPassword = "653346";
accountCity = "Pune";
accountState = "Maharashtra";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// let => let is a block scope variable, it is not available outside the block it is declared in .
// var => var is a function scope variable, it is available in the entire function it is declared in .
// const => const is a block scope variable, it is not available outside the block it is declared in, it
// cannot be reassigned once it is declared.
