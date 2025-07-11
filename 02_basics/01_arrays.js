// Array

const myArr = [1, 2, 3, 4, 5, 6, true, "string"];
const myHeroes = ["shaktiman", "naagraj"];
const myArr2 = new Array(66, 55)

console.log(myArr[5]);

// Array Methods

myArr.push(11, 12);
myArr.pop()
myArr.unshift(9, 10)
myArr.shift()
console.log(myArr);

console.log(myArr.indexOf("string"))
console.log(myArr.includes(10));
console.log(myArr.join());
console.log(typeof myArr.join());

//slice, splice

//slice
console.log("slice ", myArr.slice(1, 3));
console.log("orignal ", myArr);

// splice
console.log("splice ", myArr.splice(1,3));
console.log("now orignal ", myArr);

//splice
console.log("splice", myArr.splice(1, 2, "new", "new2"));
console.log("now orignal ", myArr);




// concat,reverse,sort,forEach,filter,reduce,find,findIndex,includes

//concat
console.log("concat ", myArr.concat(myArr2));
console.log("now orignal ", myArr);

//reverse
console.log("reverse ", myArr.reverse());
console.log("now orignal ", myArr);

//sort
console.log("sort ", myArr.sort());
console.log("now orignal ", myArr);



//forEach
myArr.forEach(function (item, index) {
    console.log("item_index ", item, index);
});
console.log("now orignal ", myArr);

//filter
const filteredArr = myArr.filter(item => item % 2 === 0);
console.log("filter ", filteredArr);

//reduce
const reducedArr = myArr.reduce((acc, item) => {
    return acc + item
}, 0);
console.log("reduce ", reducedArr);

//find
const foundItem = myArr.find(item => item === 10);
console.log("find ", foundItem);

//findIndex
const foundIndex = myArr.findIndex(item => item === 10);
console.log("Index of 10 ", foundIndex);


//includes
console.log(myArr.includes(10));