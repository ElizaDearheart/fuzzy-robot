let firstNumber;
let secondNumber;
let operator;

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