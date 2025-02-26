MadLibs Project

Overview

This project is a simple web-based Mad Libs generator that allows users to input words and generate a dynamic story. The user provides different words, which are then inserted into a pre-defined story template.

Features

User Input: Users can enter words to personalize the story.

Dynamic Story Generation: The script replaces placeholders with user-provided words.

Animated UI: The container applies transitions when the story is generated.

Styled UI: Custom fonts and CSS animations for an engaging experience.

Project Structure

📂 Project Root
├── index.html    # Main HTML file
├── style.css     # Styling for the page
├── script.js     # JavaScript functionality
├── package.json  # Project metadata

Installation & Setup

Prerequisites

Node.js installed

Steps to Run Locally

Clone the repository:

git clone <repository-url>
cd <project-directory>

Install dependencies:

npm install

Start the development server:

npm start

Open http://localhost:5000 in your browser.

How It Works

User enters words in the input fields.

Clicking the Generate button replaces placeholders in a predefined story template.

The generated story is displayed in the output section.

Tasks Completed

✅ formValue(id)

Retrieves user input or uses placeholder text if empty.

✅ generate()

Constructs a custom Mad Libs story based on user input and displays it.

✅ addClassToElement(id, className)

Adds a CSS class to an element to trigger animations.

Technologies Used

HTML, CSS, JavaScript

Google Fonts for styling

CSS Transitions & Animations for a smooth UI experience

Future Enhancements

Implement more Mad Libs templates.

Allow users to download or share their generated stories.

Add a randomized story template generator.
