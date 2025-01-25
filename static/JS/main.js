let number1 = "";
let operator = "";
let number2 = "";
let result;

function updateDisplay(number) {
    const display = document.getElementById("display");
    if (operator == "") {
        number1 += number;
        display.innerText = number1;
    } else {
        number2 += number;
        display.innerText = number2;
    }
}

function updateOperator(operator_value) {
    operator = operator_value;
}

function calculateResult() {
    const display = document.getElementById("display");
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Error";
    }
    display.innerText = result;
    number1 = "";
    operator = "";
    number2 = "";
}

