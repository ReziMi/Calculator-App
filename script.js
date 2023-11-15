// Declare a variable to store the current input in the calculator
let currentInput = "";

// Function to append a value to the current input
function appendToDisplay(value) {
    currentInput += value; 
    updateDisplay(); 
}

// Function to clear the last character from the current input
function clearDisplay() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(); 
}

// Function to completely reset the display and input
function resetDisplay() {
    currentInput = "";
    updateDisplay(); 
}

// Function to perform the calculation and update the display
function calculate() {
    try {
        const result = eval(currentInput);

        // Check if there are non-zero digits after the decimal point
        const hasNonZeroDecimal = /\.\d*[1-9]/.test(result);

        // Update the current input based on whether to round to 3 decimal places
        currentInput = hasNonZeroDecimal ? result.toFixed(3) : result.toString();

        updateDisplay(); 
    } catch (error) {
        // If an error occurs during evaluation, display an error message
        currentInput = "Error";
        updateDisplay(); 
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput; 
}


document.addEventListener("DOMContentLoaded", function () {
    // Get the range input element
    let themeRange = document.getElementById("toggle");

    // Add an event listener to the range input
    themeRange.addEventListener("input", function () {
        // Get the selected value of the range input
        let selectedTheme = themeRange.value;

        // Get elements by class name
        let bodyElement = document.body;
        let calcElement = document.querySelector('.calc');
        let themeElement = document.querySelector('.theme');
        let numsElement = document.querySelector('.nums');
        let rangeElement = document.querySelector('.range');
        let dialElement = document.querySelector('.dial');
        let calculatorGridElement = document.querySelector('.calculator-grid');
        let delElement = document.querySelector('.del');
        let calculatorButtonElements = document.querySelectorAll('.calculator-grid button');
        let resetElement = document.querySelector('.reset');
        let equalSignElement = document.querySelector('.equalSign');
        let resetActiveElement = document.querySelector('.reset:active');
        let equalSignActiveElement = document.querySelector('.equalSign:active');


        // Add the selected theme class
        if (selectedTheme === '2') {               
            bodyElement.classList.add('style2');
            calcElement.classList.add('style2');
            themeElement.classList.add('style2');
            numsElement.classList.add('style2');
            rangeElement.classList.add('style2');
            dialElement.classList.add('style2');
            calculatorGridElement.classList.add('style2');
            delElement.classList.add('style2');
            calculatorButtonElements.forEach(button => button.classList.add('style2'));
            resetElement.classList.add('style2');
            equalSignElement.classList.add('style2');
            resetActiveElement.classList.add('style2');
            equalSignActiveElement.classList.add('style2');
        } else if (selectedTheme === '3') {
            bodyElement.classList.add('style3');
            calcElement.classList.add('style3');
            themeElement.classList.add('style3');
            numsElement.classList.add('style3');
            rangeElement.classList.add('style3');
            dialElement.classList.add('style3');
            calculatorGridElement.classList.add('style3');
            delElement.classList.add('style3');
            calculatorButtonElements.forEach(button => button.classList.add('style3'));
            resetElement.classList.add('style3');
            equalSignElement.classList.add('style3');
            resetActiveElement.classList.add('style3');
            equalSignActiveElement.classList.add('style3');
        }else{
            // Remove any theme classes that might have been added before
            bodyElement.classList.remove('style2', 'style3');
            calcElement.classList.remove('style2', 'style3');
            themeElement.classList.remove('style2', 'style3');
            numsElement.classList.remove('style2', 'style3');
            rangeElement.classList.remove('style2', 'style3');
            dialElement.classList.remove('style2', 'style3');
            calculatorGridElement.classList.remove('style2', 'style3');
            delElement.classList.remove('style2', 'style3');
            calculatorButtonElements.forEach(button => button.classList.remove('style2', 'style3'));
            resetElement.classList.remove('style2', 'style3');
            equalSignElement.classList.remove('style2', 'style3');
            resetActiveElement.classList.remove('style2', 'style3');
            equalSignActiveElement.classList.remove('style2', 'style3');
        }
    });
});





const delButton = document.getElementById('del-button');
const resetButton = document.getElementById('reset-button');

delButton.addEventListener('click', clearDisplay);
resetButton.addEventListener('click', resetDisplay);
