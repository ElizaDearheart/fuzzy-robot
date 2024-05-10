let calculator = document.querySelector('.fullcalc')
let keys = calculator.querySelector('.calculator-keys')
let firstNumber;
let secondNumber;
let operator;
let display = document.querySelector('.calc-display');
let clicked_keys = document.querySelectorAll('.calculator-keys')

function first() {

    keys.addEventListener('click', e => {
        let key = e.target
        let op = key.dataset.op
        let sum = key.dataset.sum
        let keyContent = key.textContent
        let displayedNumber = display.textContent
        if (e.target.matches('button')) {

            if (!op) {
                if (displayedNumber === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNumber + keyContent
                    let firstNumber = display.textContent
                    console.log(firstNumber + "first number")
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
                    console.log('clear')
                } else {
                    display.textContent = displayedNumber + keyContent
                    let operator = keyContent
                    console.log(operator + 'op')
                }

            }
        }
    })

}

function second() {
    keys.addEventListener('click', e => {
        let key = e.target
        let op = key.dataset.op
        let sum = key.dataset.sum
        let keyContent = key.textContent
        let displayedNumber = display.textContent
        if (e.target.matches('button')) {


            if (!op) {
                display.textContent = displayedNumber + keyContent
                let secondNumber = display.textContent
                console.log(secondNumber + "second number")
            }
        }
    })

}

first()
determineOperator()





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

