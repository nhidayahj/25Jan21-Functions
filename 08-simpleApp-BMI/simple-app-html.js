//Event listener
// when extracting values from a form -- it is imperative
let bmiBtn = document.querySelector('#calcBMI-btn');

function calculateBMI(weight,height,formula) {
    return (weight, height);
}

// the function in this is an event handler 
bmiBtn.addEventListener('click', function() {
    // 1. determine Imperial I or Metrics M
    let unitRadios = document.querySelectorAll(".units");
    let selectedMeasurement; 

    // since radios, do a for loop (Linear Search Algo Technique)
    for (let unit of unitRadios) {
        if (unit.checked) {
            selectedMeasurement = unit.value;
            break;
        }
    }

    let weightValue = parseFloat(document.querySelector("#weight").value);
    let heightValue = parseFloat(document.querySelector("#height").value);

    console.log(selectedMeasurement, weightValue, heightValue);

    let bmi; 
    if (selectedMeasurement == "imperial") {
        bmi = weightValue/heightValue**2*703
    } else {
        bmi = weightValue/heightValue**2
    }

    //console.log("Your BMI is: ", bmi);

    // Advanced JavaScript --- Ternary Operator (NEED TO KNOW)
    // let bmiFormula = selectedMeasurement == "imperial" ? bmi = weightValue/heightValue**2*703 : bmi = weightValue/heightValue**2;
    // let bmi = calculateBMI(weight, height, bmiFormula);
    
    alert("Your BMI is: " + bmi);
    
}); // end add event listener to button 

// select ALL radio buttons
let unitRadioButtons = document.querySelectorAll('.units');
for (let radioButton of unitRadioButtons) {
    radioButton.addEventListener("change", function(){
        // using .units:checked -- only for Radio & checkboxes (look up in pseudo-class)
        let selectedMeasurement = document.querySelector('.units:checked').value
        if (selectedMeasurement = "imperial") {
            document.querySelectorAll('#weight-help-text').innerHTML = "in pounds";
            document.querySelectorAll('#height-help-text').innerHTML = "in inches";
        }
    });
}

