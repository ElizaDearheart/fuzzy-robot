let calculator = document.querySelector('.fullcalc')
let keys = calculator.querySelector('.calculator-keys')
let inputNumber = "";
let operator;
let operatorChosen = ""
let display = document.querySelector('.calc-display');
let clicked_keys = document.querySelectorAll('.calculator-keys')

function calculate() {

    keys.addEventListener('click', e => {
        let key = e.target
        let op = key.dataset.op
        let sum = key.dataset.sum
        let dec = key.dataset.dec
        let keyContent = key.textContent
        let displayedNumber = display.textContent

        if (e.target.matches('button')) {

            if (!op && !sum) {

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
            /*
            else if (dec) {

            }
            */
            else if (op) {
                if (op === 'clear') {
                    display.textContent = '0'
                    inputNumber = ""
                    operatorChosen = ""
                    console.log('clear')
                } else if (op === 'add' ||
                    op === 'subtract' ||
                    op === 'multiply' ||
                    op === 'divide') {
                    display.textContent = displayedNumber + keyContent
                    operator = keyContent
                    operatorChosen = operator
                    console.log(operator + 'op')
                }

            }

            else if (sum) {
                let array = inputNumber.split(operatorChosen)
                let firstNumber = array[0]
                let secondNumber = array[1]
                console.log('equals key')
                if (operatorChosen === '+') {
                    let answer = parseFloat(+firstNumber + +secondNumber).toPrecision(3)
                    display.textContent = answer
                    console.log('equals' + answer)

                } else if (operatorChosen === '-') {
                    let answer = parseFloat(+firstNumber - +secondNumber).toPrecision(3)
                    display.textContent = answer
                    console.log('equals' + answer)
                } else if (operatorChosen === 'x') {
                    let answer = parseFloat(firstNumber * secondNumber).toPrecision(3)
                    display.textContent = answer
                    console.log('equals' + answer)
                } else if (operatorChosen === '/') {
                    if (secondNumber === '0') {
                        display.textContent = 'error'
                    }
                    else {
                        let answer = parseFloat(firstNumber / secondNumber).toPrecision(3)
                        display.textContent = answer
                        console.log('equals' + answer)
                    }
                }


            }
        }
    })
}


calculate()



