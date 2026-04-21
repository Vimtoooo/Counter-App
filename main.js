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
stepButton.addEventListener('click', function () {
    // Must validate on what the user has passes onto the step input box...
    validateStep(stepInput, stepError);
});
// Methods:
function validateStep(stepInput, stepError) {
    stepInput.addEventListener('input', function () {
        var stepValue = this.valueAsNumber;
        if (stepValue > 0) {
            stepError.classList.remove("fade");
            currentStepValue = stepValue;
            currentStepHTML.textContent = String(stepValue);
        }
        else {
            stepError.classList.add("fade");
        }
    });
}
;
