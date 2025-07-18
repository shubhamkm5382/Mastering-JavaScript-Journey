// for of

const arr = [4, 5, 6, 7];

for (const num of arr) {
  console.log(num);
}

const arrObj = [{}, {}, {}];

for (const element of arrObj) {
  console.log(element);
}

const greetings = "hello world";

for (const greet of greetings) {
  console.log(greet);
}

const bf = ["gf", "TexrtTrack", "hrtr"];

for (const element of bf) {
  console.log(element);
}

// const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
    // console.log(key);
    console.log(key + " :- " + value);
    
}

// const myObject = {
//     "game1" : "Cricket",
//     "game2" : "Football",
//     "game3" : "Hockey",
// }

// for (const [key , value] of myObject) {
//     console.log( key + " :- " + value );
    
// }