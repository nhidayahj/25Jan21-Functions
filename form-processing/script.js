let bookBtn = document.querySelector("#book-btn");


bookBtn.addEventListener('click', function(){
    let name = document.querySelector("#fullname").value;
    
    //determine the selected seating area
    let seatingRadios = document.querySelectorAll(".seatingClass")
    let selectedSeat;
    for (let seat of seatingRadios) {
        if(seat.checked) {
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
        if(rb.checked) {
            selectedServices.push(rb.value);
        }
    }
    

    //determine timings in a dropdown
    let timingSelect = document.querySelector("#timing")
    let timing = timingSelect.value;


    console.log("Full Name: ",name);
    console.log("Selected Seating: ",selectedSeat);
    console.log("Selected Services: ",selectedServices);
    console.log("Timing: ",timing);


})