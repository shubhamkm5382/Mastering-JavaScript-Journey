const coding = ['java', 'cpp', 'python', 'javaScript', 'ruby', 'swift'];

coding.forEach(function (lang) {
    console.log(lang);
    
})

coding.forEach( (lang) => { 
    console.log(lang); 
} );

function prinMe(item) {
    console.log(item);
} 

coding.forEach(prinMe)

coding.forEach((item, index, arr) => {
    console.log(item , index, arr);
    
})

coding.forEach(function (lang, index, arr) {
    console.log(lang, index, arr);

})

const myCoding = [
    { name: 'java', age: 10 },
    { name: 'cpp', age: 20 },
    { name: 'python', age: 30 },
    { name: 'javaScript', age: 40 },
    { name: 'ruby', age: 50 },
    { name: 'swift', age: 60 }
];

myCoding.forEach((item) => {
    console.log(item.name);
    
})
