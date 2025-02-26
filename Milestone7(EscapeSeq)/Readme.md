Escape Sequence - Debug Detox 📸

Overview

This project is an interactive photo gallery designed for the Escape Sequence - Debug Detox event. Users can browse a collection of nature-themed thumbnails and click on them to display a full-sized image.

Features

Thumbnail Display: Renders a list of thumbnail images.

Full-Size Image View: Clicking a thumbnail updates the main image display.

Automatic First Image Display: The first image loads full-size on page load.

Minimalist Design: Styled with Victor Mono font and a clean layout.

Project Structure

📂 Project Root
├── index.html     # Main HTML file
├── style.css      # Styling for the page
├── script.js      # JavaScript logic for interactivity
├── assets/        # Image assets for thumbnails and full-size view
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

Thumbnails are dynamically generated from the imageSources array.

Clicking a thumbnail updates the full-size image.

The first image loads by default when the page is opened.

Tasks Completed

✅ addThumbnail(imageSource)

Creates and appends a thumbnail to the page.

✅ addAllThumbnails()

Loops through imageSources and calls addThumbnail for each image.

✅ displayFullSizeImage(imageSource)

Updates the main display image when a thumbnail is clicked.

Technologies Used

HTML, CSS, JavaScript

Victor Mono Font for styling

Future Enhancements

Implement lightbox functionality.

Add image captions.

Allow users to upload custom images.
