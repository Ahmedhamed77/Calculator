let numberButtons = document.querySelectorAll('.calc-button-number');
let addBtn = document.querySelector('.calc-button-add');
let subtractionBtn = document.querySelector('.calc-button-subtract');
let multiplicationBtn = document.querySelector('.calc-button-multiply');
let divisionBtn = document.querySelector('.calc-button-divide');

let commaBtn = document.querySelector('.calc-button-comma');
let backBtn = document.querySelector('.calc-button-back');
let clearBtn = document.querySelector('.calc-button-clear');
let equalBtn = document.querySelector('.calc-button-equals');

let previousValue = document.querySelector('.calc-result-previous-value');
let currentValue = document.querySelector('.calc-result-current-value');


const calculator = new Calculator(previousValue, currentValue);


commaBtn.addEventListener('click', function () {
    calculator.appendNumber(commaBtn.innerHTML);
    calculator.updateDisplay();
});

numberButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        calculator.appendNumber(btn.innerHTML);
        calculator.updateDisplay();
    })
});

addBtn.addEventListener('click', function () {
    calculator.chooseOperation(addBtn.innerHTML);
    calculator.updateDisplay();
})

subtractionBtn.addEventListener('click', function () {
    calculator.chooseOperation(subtractionBtn.innerHTML);
    calculator.updateDisplay();
})

multiplicationBtn.addEventListener('click', function () {
    calculator.chooseOperation(multiplicationBtn.innerHTML);
    calculator.updateDisplay();
})

divisionBtn.addEventListener('click', function () {
    calculator.chooseOperation(divisionBtn.innerHTML);
    calculator.updateDisplay();
})

equalBtn.addEventListener('click', function () {
    calculator.calculate();
    calculator.updateDisplay();
})


clearBtn.addEventListener('click', function () {
    calculator.clear();
    calculator.updateDisplay();
})

backBtn.addEventListener('click',function () {
    calculator.back();
    calculator.updateDisplay();
})