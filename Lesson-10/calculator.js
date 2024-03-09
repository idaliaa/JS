
let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value){
    calculation += value;
    
    // Display the calculation on the page instead console
    displayCalculation();

    localStorage.setItem('calculation', calculation);
}

function saveCalculation(){
    localStorage.setItem('calculation', calculation);
}

function displayCalculation(){
    document.querySelector('.js-result').innerHTML = calculation;
}
