// Counter and Step displays:
const currentStepHTML: HTMLElement = document.getElementById("step-display") as HTMLElement;
const currentCountHTML: HTMLElement = document.getElementById("count-display") as HTMLElement;

// Interactives:
const incrementButton: HTMLElement = document.getElementById("increment-btn") as HTMLElement;
const decrementButton: HTMLElement = document.getElementById("decrement-btn") as HTMLElement;
const resetButton: HTMLElement = document.getElementById("reset-btn") as HTMLElement;
const stepButton: HTMLElement = document.getElementById("step-btn") as HTMLElement;

const stepInput: HTMLInputElement = document.getElementById("step-input") as HTMLInputElement;
const stepError: HTMLElement = document.getElementById("step-error") as HTMLElement;

// Constants:
const DEFAULT_COUNT: number = 0;
const DEFAULT_STEP: number = 1;

// Tracking Variables:
let count: number = DEFAULT_COUNT;
let step: number = DEFAULT_STEP;
let isErrorShown: boolean = false;

// Event Listeners:
incrementButton.addEventListener('click', function() {
    count += step;
    syncDisplay();
    console.log(`Incremented value by ${step}`);
});

decrementButton.addEventListener('click', function() {
    count -= step;
    syncDisplay();
    console.log(`Decremented value by ${step}`);
});

resetButton.addEventListener('click', function() {
    count = DEFAULT_COUNT;
    step = DEFAULT_STEP;
    syncDisplay();
    console.log("Reset activated");
});

stepButton.addEventListener('click', function () {
    const stepValue: number = stepInput.valueAsNumber;
    
    if (stepValue > 0) {
        step = stepValue;
        syncDisplay();
        console.log(`Modified step value to ${stepValue}`);
        
        if (isErrorShown) {
            isErrorShown = false;
            stepError.classList.remove("fade-in");
            stepError.classList.add("fade-away");
        }
    } else if (!isErrorShown) {
        isErrorShown = true;
        stepError.classList.remove("fade-away");
        stepError.classList.add("fade-in");
        console.log(`Invalid step value: ${stepValue}`);
    }
});

// Methods:
function syncDisplay(): void {
    // Sync the count and step values correctly into the UI!
    currentCountHTML.textContent = String(count);
    currentStepHTML.textContent = String(step);
}

// Function Calls:
syncDisplay();