let a = 12;
let b = a
a++ 
//console.log(b);

// ------- difference between values vs Reference 

let numbers = [1,2,3];
let numbers2 = numbers;
numbers.push(4);
//console.log(numbers2);

console.log("-----------")

// Example1 -- PASS BY VALUES
// these 2 x's are DIFFERENT 
function plusOne(x) {
    x++;
}

let x = 42;  // x is a primitive value
plusOne(x);
console.log("Passed by value " + x);


function pushItem(n) {
    n.push(4);
}

let arr = [1,2,3];  // arr is a reference 
pushItem(arr);
console.log("Passed by Reference: " + arr);


console.log("-----------")
// PASS BY REFERENCE
// p is a reference variable
// Example2 
function addAgeByOne(p) {
    p.age++;
}

let person = {
    firstname: "John",
    lastname:"Doe",
    age: 33
}

addAgeByOne(person);
console.log("Passed by Reference: " + person.age);
 