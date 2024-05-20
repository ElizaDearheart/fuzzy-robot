let calculator = document.querySelector('.fullcalc')
let keys = calculator.querySelector('.calculator-keys')
let inputNumber = "";
let operator;
let operatorChosen = ""
let display = document.querySelector('.calc-display');
let clicked_keys = document.querySelectorAll('.calculator-keys')

// finding values
function first() {

    keys.addEventListener('click', e => {
        let key = e.target
        let op = key.dataset.op
        let keyContent = key.textContent
        let displayedNumber = display.textContent

        if (e.target.matches('button')) {

            if (!op) {

                if (displayedNumber === '0') {
                    display.textContent = keyContent
                    inputNumber = display.textContent

                    console.log(inputNumber + "input")

                } else {
                    display.textContent = displayedNumber + keyContent
                    inputNumber = display.textContent

                    console.log(inputNumber + "input")
                    console.log(inputNumber.length)

                }
            }


        }

    })
}


function determineOperator() {

    keys.addEventListener('click', e => {
        let key = e.target
        let op = key.dataset.op
        let sum = key.dataset.sum
        let keyContent = key.textContent
        let displayedNumber = display.textContent
        if (e.target.matches('button')) {
            if (op) {
                if (op === 'clear') {
                    display.textContent = '0'
                    inputNumber = ""
                    operatorChosen = ""
                    console.log('clear')
                } else {
                    display.textContent = displayedNumber + keyContent
                    operator = keyContent
                    operatorChosen = operator
                    console.log(operator + 'op')
                }

            }
        }
    })

}



// making calculations
function calculate() {

    first()
    determineOperator()

}



calculate()





/*
    if (
        op === 'add' ||
        op === 'subtract' ||
        op === 'multiply' ||
        op === 'divide'
    ) {
        console.log('op key')
    }
 
    if (op === 'decimal') {
        console.log('decimal key')
    }
 
    if (op === 'equals') {
        console.log('equals key')
    }
 
}

-----
const add = function (firstNumber, secondNumber) {
    let addNumbers = firstNumber + secondNumber
    return addNumbers

};

const subtract = function (firstNumber, secondNumber) {
    let subtractNumbers = firstNumber - secondNumber
    return subtractNumbers

};

const multiply = function (firstNumber, secondNumber) {
    let multNumbers = firstNumber * secondNumber
    return multNumbers
};

const divide = function (firstNumber, secondNumber) {
    let divNumbers = firstNumber / secondNumber
    return divNumbers
}

const operate = function (operator, firstNumber, secondNumber) {
    if (operator === "+") {
        add(firstNumber, secondNumber)
    } else if (operator === "-") {
        subtract(firstNumber, secondNumber)
    } else if (operator === "*") {
        multiply(firstNumber, secondNumber)
    } else if (operator === "/") {
        divide(firstNumber, secondNumber)
    }
}
--------
} */

