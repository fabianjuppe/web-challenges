console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let result;
    const numberA = Number(event.target.elements.numberA.value);
    const numberB = Number(event.target.elements.numberB.value);
    const operatorValue = event.target.elements.operator.value;

    // --v-- write your code here --v--
    if (operatorValue === "addition") {
        result = add(numberA, numberB);
    } else if (operatorValue === "subtraction") {
        result = subtract(numberA, numberB);
    } else if (operatorValue === "multiplication") {
        result = multiply(numberA, numberB);
    } else {
        result = divide(numberA, numberB);
    }
    // --^-- write your code here --^--

    resultOutput.textContent = result;
});
