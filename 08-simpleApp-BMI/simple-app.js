const prompt = require("prompt-sync")();

// FUNCTIONAL PROGRMMING for BMI Practice 

function calcBMI(weight, height, formula) {
    return formula(weight, height);}

function adviseHealth(bmi) {
    if (bmi < 18.5) {
        return "underweight";
    } else if (bmi < 25) {
        return "healthy";
    } else if (bmi < 38) {
        return "overweight";
    } else {
        return "obese";
    }
}

let unitOFMe = prompt("Imperial I or Metrics, M: ");

let weight = prompt("Enter weight: ");
let height = prompt("Enter height: ");

// BMI formula is a Function 
let bmi; 
if (unitOFMe == 'I') {
    bmi = calcBMI(weight, height, (weight, height)=>weight/height**2*703)
} else {
    bmi = calcBMI(weight, height, (weight, height)=>weight/height**2)
}

console.log("You BMI is: ",bmi);
console.log(adviseHealth(bmi));