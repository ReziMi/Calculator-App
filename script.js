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


document.getElementById('toggle').addEventListener('input', function() {
    var selectedStyleIndex = this.value;
    var stylesheetTitle = 'Styles' + selectedStyleIndex;
    var existingStylesheet = document.querySelector('link[title="' + stylesheetTitle + '"]');
    
    // Create or update the link element
    var linkElement = existingStylesheet || document.createElement('link');
    
    // Set attributes for the link element
    linkElement.rel = 'stylesheet';
    linkElement.href = 'styles' + selectedStyleIndex + '.css';
    linkElement.title = stylesheetTitle;
    
    // If it's a new link element, append it to the head
    if (!existingStylesheet) {
        document.head.appendChild(linkElement);
    } else {
        // Toggle the disabled property to enable/disable the stylesheet
        linkElement.disabled = !linkElement.disabled;
    }
    
});




const delButton = document.getElementById('del-button');
const resetButton = document.getElementById('reset-button');

delButton.addEventListener('click', clearDisplay);
resetButton.addEventListener('click', resetDisplay);
