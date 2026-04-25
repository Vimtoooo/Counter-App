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
var stepError = document.getElementById("step-error");
// State to track if the error message is currently visible
var isErrorShown = false;
// Event Listeners:
incrementButton.addEventListener('click', function () {
    currentCountValue += currentStepValue;
    currentCountHTML.textContent = String(currentCountValue);
    console.log("Incremented value by ".concat(currentStepValue));
});
decrementButton.addEventListener('click', function () {
    currentCountValue -= currentStepValue;
    currentCountHTML.textContent = String(currentCountValue);
    console.log("Decremented value by ".concat(currentStepValue));
});
resetButton.addEventListener('click', function () {
    currentCountValue = 0;
    currentCountHTML.textContent = "0";
    currentStepValue = 1;
    currentStepHTML.textContent = "1";
});
// Methods:
function validateStepValue(isErrorShown) {
    stepButton.addEventListener('click', function () {
        // Must validate on what the user has passes onto the step input box...
        var stepValue = stepInput.valueAsNumber;
        if (stepValue > 0) {
            currentStepValue = stepValue;
            currentStepHTML.textContent = String(stepValue);
            if (isErrorShown) {
                isErrorShown = false;
                stepError.classList.remove("fade-in");
                stepError.classList.add("fade-away");
            }
        }
        else if (!isErrorShown) {
            // Only trigger fade-in if the error isn't already there
            isErrorShown = true;
            stepError.classList.remove("fade-away");
            stepError.classList.add("fade-in");
        }
    });
}
;
validateStepValue(isErrorShown);
