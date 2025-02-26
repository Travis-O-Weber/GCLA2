Words of Encouragement Project

Overview

This project is a web-based application that provides words of encouragement through text and speech synthesis. The application dynamically reads out positive messages to users using the browser's SpeechSynthesis API.

Features

Text-to-Speech (TTS): Converts text into spoken words.

Bootstrap Styling: Ensures a clean and responsive UI.

Dynamic Voice Selection: Uses Google UK English Female for vocal output.

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

The user interacts with the page.

The application triggers the renderTTS(text) function.

The SpeechSynthesis API reads the text aloud.

Tasks Completed

✅ renderTTS(text)

Converts text into speech using the browser's built-in speech synthesis.

Technologies Used

HTML, CSS, JavaScript

Bootstrap 5 for styling

SpeechSynthesis API for text-to-speech functionality

Future Enhancements

Allow users to select from multiple voices.

Add user-customized text input for encouragement messages.

Implement a randomized encouragement message generator.
