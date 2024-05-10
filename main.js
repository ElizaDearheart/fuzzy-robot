let calculator = document.querySelector('.fullcalc')
let keys = calculator.querySelector('.calculator-keys')
let firstNumber;
let secondNumber;
let operator;
let display = document.querySelector('.calc-display');
let clicked_keys = document.querySelectorAll('.calculator-keys')

//buttons//

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        let key = e.target
        let op = key.dataset.op
        if (!op) {
            console.log('number key')
        }

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

        if (op === 'clear') {
            console.log('clear key')
        }

        if (op === 'equals') {
            console.log('equals key')
        }

    }
})




//function displayText(e) {
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        let key = e.target;
        let op = key.dataset.op
        let sum = key.dataset.sum
        let keyContent = key.textContent
        let displayedNumber = display.textContent


        if (!op) {
            if (displayedNumber === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNumber + keyContent
                let firstNumber = display.textContent
                console.log(firstNumber)
            }
        }

        if (op) {
            if (op === 'clear') {
                display.textContent = '0'
            }

            else {
                display.textContent = displayedNumber + keyContent
                let operator = keyContent
                console.log(operator)
            }



        }


    }
})




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


/*
const sum = function ([...nums]) {
    let sumNumbers = 0
    for (let num of nums) {
        sumNumbers += Number(num)
    }
    return sumNumbers

};

const power = function (num, power) {
    let powerNumber = Number(num) ** Number(power)
    return powerNumber

};

const factorial = function (num) {
    if (num === Number(0) || num === Number(1)) {
        return Number(1)
    } else if (num > 1) {
        for (let i = num - 1; i >= 1; i--) {
            num *= i
        }

        return num
    }
};
*/
