Marriott Bonvoy Homes and Villas - Portfolio Project

Overview

This project is a web-based prototype for the Marriott Bonvoy Homes and Villas platform, designed to enhance the user experience when searching for vacation rentals. It allows users to browse various destinations, filter by location type, and interact with an interactive map to explore properties.

Features

Dynamic Search and Filtering: Users can search by location and filter destinations by type (city, beach, mountains).

Interactive Map: Displays recommended destinations with clickable markers.

Recommendations: Users receive destination suggestions based on their selected preference.

Bootstrap Integration: Ensures a responsive and visually appealing design.

SweetAlert Integration: Provides a user-friendly modal for location selection.

Project Structure

📂 Project Root
├── index.html             # Main HTML file
├── style.css              # Custom styles
├── script.js              # JavaScript functionality
├── places.js              # Destination data
├── provided.js            # Provided OpenLayers API configuration
├── package.json           # Project metadata
└── marketUsersPrototype.md # Market research and prototype details

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

When the page loads, a modal prompts the user to choose a destination type.

Based on the selection, relevant locations are displayed in the "Recommended for You" section.

Users can interact with the map to explore locations.

Clicking a destination centers the map on that location.

Tasks Completed

✅ filterPlacesByType(typePreference)

Filters destinations based on the selected category (e.g., "beach").

✅ createCard(place)

Generates dynamic cards for destinations.

✅ populateRecommendationCards(filteredPlaces)

Populates the recommended destinations based on user selection.

✅ findPlaceByName(placeName)

Locates a place in the dataset by name for mapping functionality.

Technologies Used

HTML, CSS, JavaScript

Bootstrap 5 (for responsive UI components)

OpenLayers API (for interactive mapping)

SweetAlert (for better user interactions)

Future Enhancements

Implement user authentication for saving favorites.

Add additional filters (e.g., price, amenities).

Improve map interactions with detailed property overlays.
