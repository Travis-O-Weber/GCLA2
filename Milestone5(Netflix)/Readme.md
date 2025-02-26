Netflix Clone 🎥

Overview

This project is a prototype of a Netflix feature that allows users to receive random show suggestions based on their selected genre. Users can choose from Drama, Fantasy, Comedy, or get a completely random selection.

Features

Random Show Suggestion: Users can select a genre to receive a random show recommendation.

Predefined Genre Lists: Each genre contains five curated TV shows.

User Interaction: Dropdown selection updates the displayed show dynamically.

Project Structure

📂 Project Root
├── index.html     # Main HTML file
├── style.css      # Custom styles
├── script.js      # JavaScript functionality
├── provided.js    # Helper functions
├── shows.js       # Predefined list of TV shows
├── HINTS.md       # Guidance for completing the milestone
├── README.md      # Project documentation
└── package.json   # Project metadata

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

Users select a genre from the dropdown menu.

Based on the selection, a random show is displayed.

If "Random" is selected, a show is chosen randomly from all genres.

Tasks Completed

✅ chooseRandomGenre()

Randomly selects "drama", "fantasy", or "comedy".

✅ displayRandomShow(genre)

Displays a random show from the selected genre.

Technologies Used

HTML, CSS, JavaScript

Bootstrap 5 for styling

Future Enhancements

Add more genres and shows.

Implement a "watch trailer" feature.

Enable user ratings for suggestions.
