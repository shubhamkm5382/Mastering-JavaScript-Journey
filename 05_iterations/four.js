const myObject = {
    js : "javaScript",
    py : "python",
    css : "Cascading Style Sheets",
    cpp : "c plus plus",
    }

for (const key in myObject) {
    console.log(key + " :- " + myObject[key]);

}

const programming = ['phython', 'java', 'c++', 'javascript'];

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
    
}

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India");

for (const key in map) {
    console.log(key);  // Nothing
    
}
