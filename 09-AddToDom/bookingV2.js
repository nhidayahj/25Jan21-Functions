// dynamic adding of list of seatings and services

seatingOptions = [
    {
        name: "table",
        display: "Table"
    },
    {
        name: "counter",
        display: "Counter Table"
    },
    {
        name: "private-room",
        display: "Private Room"
    },
    {
        name: "smoker",
        display: "Smoker Dining"
    },
    {
        name: 'jap-style',
        display: 'Japanese Style'
    }];


servicesOptions = [
    {
        name: "birthday-song",
        display: "Birthday Song"
    },
    {
        name: "seafood",
        display: "Seafood Platter"
    },
    {
        name: "live-band",
        display: "Live Band"
    },
    {
        name: "aquarium",
        display: "Aquarium View"
    },
     {
        name: "sushi-platter",
        display: "Sushi Platter"
    }
];

// creating the seatings options (method 1)
let seatingDiv = document.querySelector("#seating-options")

for (let seat of seatingOptions) {
    let divElement = document.createElement('div')
    divElement.className = "form-check";
    divElement.innerHTML = `
    <input class="form-check-input servicesClass" type="radio" name="seating" value="${seat.name}">
    <label class="form-check-label">${seat.display}</label>
    `;
    seatingDiv.appendChild(divElement);
}



// creating the services options (method 2 - longer)
let servicesElement = document.querySelector("#services-options");
for (let service of servicesOptions) {
  let divElement = document.createElement("div");
  divElement.className = "form-check";

  let checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.value = service.name;
  checkboxElement.className = "services form-check-input";

  let labelElement = document.createElement("label");
  labelElement.className = "form-check-label";
  labelElement.innerHTML = service.display;

  divElement.appendChild(checkboxElement);
  divElement.appendChild(labelElement);

  servicesElement.appendChild(divElement);
}



let bookBtn = document.querySelector("#book-btn");


bookBtn.addEventListener('click', function () {
    let name = document.querySelector("#fullname").value;

    //determine the selected seating area
    let seatingRadios = document.querySelectorAll(".seatingClass")
    let selectedSeat;
    for (let seat of seatingRadios) {
        if (seat.checked) {
            selectedSeat = seat.value;
            //stop the search
            break;
        }
    }

    // determine the type of selected services 
    let servicesCheckBox = document.querySelectorAll(".servicesClass")
    // since checkboxes allows multiple selection
    //store in an array
    let selectedServices = [];
    for (let rb of servicesCheckBox) {
        if (rb.checked) {
            selectedServices.push(rb.value);
        }
    }


    //determine timings in a dropdown
    let timingSelect = document.querySelector("#timing")
    let timing = timingSelect.value;


    console.log("Full Name: ", name);
    console.log("Selected Seating: ", selectedSeat);
    console.log("Selected Services: ", selectedServices);
    console.log("Timing: ", timing);


})