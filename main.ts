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

const stepInput: HTMLInputElement = document.getElementById("step-input") as HTMLInputElement;
const stepError: HTMLElement = document.getElementById("step-error") as HTMLElement;

// Event Listeners:
incrementButton.addEventListener('click', function() {
    currentCountValue += currentStepValue;
    currentCountHTML.textContent = String(currentCountValue);
    console.log(`Incremented value by ${currentStepValue}`);

});

decrementButton.addEventListener('click', function() {
    currentCountValue -= currentStepValue;
    currentCountHTML.textContent = String(currentCountValue);
    console.log(`Decremented value by ${currentStepValue}`);
});

resetButton.addEventListener('click', function() {
    currentCountValue = 0;
    currentCountHTML.textContent = "0";
    currentStepValue = 1;
    currentStepHTML.textContent = "1";
});

stepButton.addEventListener('click', function() {
    // Must validate on what the user has passes onto the step input box...
    
});

// Methods:
function validateStep(stepInput: HTMLInputElement, stepError: HTMLElement): void {
    stepInput.addEventListener('input', function() {
        const stepValue: number = this.valueAsNumber;

        if (stepValue > 0) return true;
        return false;
    });
};