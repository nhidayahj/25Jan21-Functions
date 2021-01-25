const prompt = require("prompt-sync")();
// Practice 1 - BMI Calculator 

/*
Ask user for weight and innerHeight.
Allow user to choose imperial or metrics units 
calculate the BMI formula based on units 
from BMI,output healthy range. 
*/ 


function askForUnitOfMeasurement() {
    //local variable
    let units = prompt("Select system of measurement (I - Imperial or M - metrics): ");
    return units;
}

//global variable 
let units = askForUnitOfMeasurement();

function askForWeightAndHeight(units) {
    // 
}

