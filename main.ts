// Counter and Step displays:
const currentStepHTML: HTMLElement = document.getElementById("step-display") as HTMLElement;
let currentStepValue: number = Number(currentStepHTML.textContent);

const currentCountHTML: HTMLElement = document.getElementById("count-display") as HTMLElement;
let currentCountValue: number = Number(currentCountHTML.textContent);

// Interactives:
const incrementButton: HTMLElement = document.getElementById("increment-btn") as HTMLElement;
const decrementButton: HTMLElement = document.getElementById("decrement-btn") as HTMLElement;
const resetButton: HTMLElement = document.getElementById("reset-btn") as HTMLElement;
const stepButton: HTMLElement = document.getElementById("step-btn") as HTMLElement;

const stepInput: HTMLElement = document.getElementById("step-input") as HTMLElement;

// Event Listeners:
incrementButton.addEventListener('click', function() {
    if (currentStepValue > 0) {
        currentCountValue += currentStepValue;
        currentCountHTML.textContent = String(currentCountValue);
        console.log(`Incremented value by ${currentStepValue}`);
    } else {
        // Create a error message that pops up if the step value is less than one!
        const stepError: HTMLElement = document.getElementById("step-error") as HTMLElement;
        stepError.textContent = "The step value must be 1 or above!";
        console.log(`The step of ${currentStepValue} is invalid!`);
    };
});

decrementButton.addEventListener('click', function() {
    // Decrements based on the step value...
});

resetButton.addEventListener('click', function() {
    // Resets the count to 0 and step to 1...
});

stepButton.addEventListener('click', function() {
    // Must validate on what the user has passes onto the step input box...
});

// Methods: