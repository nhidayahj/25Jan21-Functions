let addBtn = document.querySelector("#add-btn")
let totalValue = 0; 


addBtn.addEventListener('click', function(){
    let numberText = parseInt(document.querySelector('#number-text').value);

    let newNumberList = document.querySelector('#number-list');

    //1. create a new <li> element 
    let newListElement = document.createElement('li');
    

    //2. Set the contents for the new list item 
    newListElement.innerHTML = numberText;
    //2.i set each list item to have a class name -- see line 35
    newListElement.className = 'eachNumberItem';

    //3. Add the new child element to its parent element.
     newNumberList.appendChild(newListElement);
    
     // Add the total value:
     totalValue += numberText;
     let totalArea = document.querySelector('#total')
     totalArea.innerHTML= `The total value is ${totalValue}`
     
});


// When there is a change of input in the Limit Text InputBox
let limitTextBox = document.querySelector('#limit-number');

limitTextBox.addEventListener('input', ()=>{
    let limitNum = parseFloat(limitTextBox.value);
    let listNumItem = document.querySelectorAll('.eachNumberItem');
    for (let num of listNumItem){
        if (parseFloat(num.innerHTML) >= limitNum) {
            num.style.backgroundColor = "yellow";
        } else {
            num.style.backgroundColor ="white"
        }
    }
}
)