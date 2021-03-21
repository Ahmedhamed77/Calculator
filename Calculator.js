class Calculator {

    constructor(previousValue, currentValue) {  //constructor will take previous Value and Current Value
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.clear();
    }

    // methods of calculator

    back() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendNumber(number) { // so when i click the number will display on the screen
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    calculate() {
        let calculation;
        const current = parseFloat(this.currentOperand);
        const prev = parseFloat(this.previousOperand);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                calculation = prev + current;
                break;
            case '-':
                calculation = prev - current;
                break;
            case '*':
                calculation = prev * current;
                break;
            case '/':
                calculation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = calculation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentValue.innerHTML = this.currentOperand;
        this.previousValue.innerHTML = this.previousOperand;
    }

}
