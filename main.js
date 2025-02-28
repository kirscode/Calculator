
let resultField = document.getElementById('result');
let currentInput = '';
let currentOperator = '';
let previousInput = '';
let isResultDisplayed = false;

function clearDisplay() {
    resultField.innerHTML = '';
    currentInput = '';
    currentOperator = '';
    previousInput = '';
}

function changeSign() {
    currentInput = (-parseFloat(currentInput)).toString();
    resultField.innerHTML = currentInput;
}

function percent() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    resultField.innerHTML = currentInput;
}

function appendNumber(number) {
    if (isResultDisplayed) {
        currentInput = number.toString();
        isResultDisplayed = false;
    } else {
        currentInput += number.toString();
    }
    resultField.innerHTML = previousInput + ' ' + currentOperator + ' ' + currentInput;
}

function appendOperator(operator) {
    // console.log('operator', operator);

    if (isResultDisplayed) {
        previousInput = currentInput;
        currentInput = '';
        isResultDisplayed = false;
    }

    if (currentInput === '' && previousInput === '') {
        resultField.innerHTML = operator;
        return;
    }

    if (currentInput === '') {
        currentOperator = operator;
        resultField.innerHTML = previousInput + ' ' + currentOperator;
        return;
    }

    if (previousInput === '') {
        previousInput = currentInput;
        currentInput = '';
        currentOperator = operator;
        resultField.innerHTML = previousInput + ' ' + currentOperator;
    } else {
        calculateResult();
        previousInput = resultField.innerHTML;
        currentInput = '';
        currentOperator = operator;
        resultField.innerHTML = previousInput + ' ' + currentOperator;
    }
}



function calculateResult() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (currentOperator === '*') {
        if (prev === 10 && current === 10) {
            result = "❤️ Thank You 100 Followers ❤️";
            resultField.innerHTML = `<span class="marquee">${result}</span>`;
            return;
        }
    }

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            resultField.classList.remove("marquee");
            break;
        default:
            return;
    }

    resultField.innerHTML = result;
    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
    isResultDisplayed = true;
}

