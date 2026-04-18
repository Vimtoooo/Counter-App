var currentStep = document.getElementById("step-display");
if (currentStep) {
    console.log("Found element: ".concat(typeof currentStep.textContent));
}
else {
    console.error("Element with ID 'step-display' not found.");
}
