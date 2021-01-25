fruits = ['apples','bananas','oranges'];

console.log(fruits);

// addding an element in a list 
numbers = [];
numbers.push(33);
numbers.push(34);
numbers.push(35);

console.log(numbers)

// remove an element using index 
numbers.splice(1,1);
console.log(numbers);

//whether an element exists in an array
if (fruits.includes("bananas")) {
    console.log("This is bananas")
}