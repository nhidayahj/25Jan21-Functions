let calcBtn = document.querySelector('#calc-bmi');

//separate function for calculating BMI formula
// function calcMetric (w, h) {
//      return w/h**2;
// }

// function calcImp (w,h) {
//     return w/h**2 * 703;
// }

// using Arrow formula for BMI calculator 
let calcMetric = (w,h) => w/h**2;
let calcImp = (w,h) => w/h**2*703;

function adviseHealth(bmi) {
    if (bmi < 18.5) {
        return"Underweight"
    } else if (bmi < 25) {
        return "Healthy"
    } else if (bmi < 30) {
        return "Overweight"
    } else if(bmi < 30) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

// add the very beginning when page loads, the "form-result div" is not displayed
document.querySelector("#form-result").style.display ="none";


calcBtn.addEventListener('click', function(){
    let unitRadio = document.querySelectorAll(".unit") 
    let selectedUnit;
    for (let rb of unitRadio) 
    {
        if (rb.checked) {
            selectedUnit = rb.value;
            break;
        }
    }


    let weightValue = parseFloat(document.querySelector("#weight").value);
    let heightValue = parseFloat(document.querySelector("#height").value);

    // let bmi;
    // if (selectedUnit == "imperial") {
    //     bmi = weightValue/heightValue**2 * 703;
    // } else if (selectedUnit == "metric") {
    //     bmi = weightValue/heightValue**2;
    // }


    // using a Ternary Operator 
    let bmi = selectedUnit == "imperial" ? calcImp(weightValue, heightValue) : calcMetric(weightValue,heightValue)
    let advise = adviseHealth(bmi)
    
    // alert("Your bmi is: "+ bmi.toFixed(2) + " and your health advise is: " + advise);

    //hide the bmi form 
    document.querySelector("#bmi-form").style.display ="none";

    // display the results form 
    document.querySelector("#form-result").style.display ="block";

    let resultText = document.querySelector("#health-res") 
    resultText.innerHTML = `
    <h2>Your Result: </h2>
    <ul>
        <li>Your BMI is: ${bmi.toFixed(2)}</li>
        <li>Your weight status is: ${advise}</li>
    </ul>
    `;
      
})


// depending on Imperial / Metric, a new HTML text is added in the weight & height display text
let allRadioUnit = document.querySelectorAll(".unit")
// go thru all the radio button
for(let rb of allRadioUnit) {
    // add an event listener to the radio button when user selects the units
    rb.addEventListener('change', function(){
        let unitOfMeasurement = document.querySelector(".unit:checked").value
        if (unitOfMeasurement == "imperial") {
            document.querySelector("#weight-unit").innerHTML = "in pounds";
            document.querySelector("#height-unit").innerHTML = "in inches";
        } else {
            document.querySelector("#weight-unit").innerHTML = "in kg";
            document.querySelector("#height-unit").innerHTML = "in m";
        }
    })
}

// Hiding and displaying the result on a new page 
let backBtn = document.querySelector("#back-btn");
backBtn.addEventListener('click', function(){
    document.querySelector("#bmi-form").style.display = "block";
    document.querySelector("#form-result").style.display="none"
}); 