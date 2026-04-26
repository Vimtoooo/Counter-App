# Counter App

A sleek, interactive counter application built with **TypeScript**, **HTML**, and **CSS**. This project demonstrates clean DOM manipulation, state management, and CSS animations.

## Features

- **Core Counting**: Increment and decrement the total count.
- **Custom Steps**: Define a specific "step" value to change how much the counter moves per click.
- **Input Validation**: Prevents non-natural integers for step values.
- **Visual Feedback**: Smooth fade-in and fade-away error messages using CSS keyframe animations.
- **Responsive Reset**: Instantly clear state back to default values.

## Tech Stack

- **Logic**: TypeScript (compiled to ES2020)
- **Styling**: Modern CSS3 with Grid and Flexbox
- **Runtime**: Node.js & npm
- **Development**: TypeScript Compiler (`tsc`)

## Brief Demonstration

![Brief Demonstration](assets/counterApp_preview.gif)

## Getting Started

### Prerequisites
Ensure you have Node.js installed on your machine.

### Installation
1. Clone the repository or download the source code.
2. Open your terminal in the project directory.
3. Install the development dependencies:
   ```bash
   npm install
   ```

### Running the App
This project requires active compilation of TypeScript files.

1. **Start the Compiler**: Open two terminal windows and keep them open simultaneously. Now with one terminal window, run the following command in a terminal to watch for changes and auto-build the `dist/` folder:
   ```bash
   npm run watch
   ```
2. **Launch the Server**: In a second terminal window, start the local development server:
   ```bash
   npm run start
   ```
3. Open your browser to the URL provided in the terminal (usually `http://localhost:3000`).

## License

This repository is assigned to the MIT license.