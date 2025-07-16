// dates
let myDate = new Date();
console.log(myDate);
// output: 2023-03-15T14:30:00.000Z
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 15);
console.log(myCreatedDate.toDateString());

let myCreatedDateAndTime = new Date(2025, 0, 15, 12, 30);
console.log(myCreatedDateAndTime.toLocaleString());

let myCreatedDate2 = new Date("2025-01-16");
console.log(myCreatedDate2.toDateString());

let myCreatedDate3 = new Date("01-17-2025");
console.log(myCreatedDate3.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // output: 1752502873792
console.log(myCreatedDate3.getTime()); // output: 1737052200000

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()); 
// or 
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

console.log(`date ${newDate.getDate()} and the time ${newDate.getHours()}`);

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    }));


