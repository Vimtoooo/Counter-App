// Counter and Step displays:
var currentStepHTML = document.getElementById("step-display");
var currentStepValue = Number(currentStepHTML.textContent);
var currentCountHTML = document.getElementById("count-display");
var currentCountValue = Number(currentCountHTML.textContent);
// Interactives:
var incrementButton = document.getElementById("increment-btn");
var decrementButton = document.getElementById("decrement-btn");
var resetButton = document.getElementById("reset-btn");
var stepButton = document.getElementById("step-btn");
var stepInput = document.getElementById("step-input");
// Event Listeners:
incrementButton.addEventListener('click', function () {
    if (currentStepValue > 0) {
        currentCountValue += currentStepValue;
        currentCountHTML.textContent = String(currentCountValue);
        console.log("Incremented value by ".concat(currentStepValue));
    }
    else {
        // Create a error message that pops up if the step value is less than one!
        var stepError = document.getElementById("step-error");
        stepError.textContent = "The step value must be 1 or above!";
        console.log("The step of ".concat(currentStepValue, " is invalid!"));
    }
    ;
});
decrementButton.addEventListener('click', function () {
    // Decrements based on the step value...
});
resetButton.addEventListener('click', function () {
    currentCountValue = 0;
    currentCountHTML.textContent = "0";
    currentStepValue = 1;
    currentStepHTML.textContent = "1";
    // stepInput
});
stepButton.addEventListener('click', function () {
    // Must validate on what the user has passes onto the step input box...
});
// Methods:
