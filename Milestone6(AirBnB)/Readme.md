Airbnb Clone 🛅

Overview

This project is a prototype for an improved search and filtering experience for Airbnb listings. Users can filter results based on city, price range, and type of stay.

Features

Search Listings by City: Users can enter a city name to see matching listings.

Price Range Filtering: Users can set a minimum and maximum price.

Stay Type Filtering: Listings can be filtered by entire place, private room, or shared room.

Project Structure

📂 Project Root
├── index.html     # Main HTML file
├── style.css      # Custom styles
├── script.js      # JavaScript functionality
├── provided.js    # Predefined helper functions
├── listings.js    # List of Airbnb-style property listings
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

Users search for a city in the search bar.

Listings update dynamically based on filtering criteria.

Users can apply additional filters for price and stay type.

Tasks Completed

✅ filterByCity(targetCity, listingCityArray)

Finds listings in the selected city.

✅ filterByPrice(minPrice, maxPrice, listingPriceArray)

Filters listings within the price range.

✅ filterByTypes(targetTypes, listingTypeArray) (Extra Credit)

Filters listings based on the selected stay type.

Technologies Used

HTML, CSS, JavaScript

Bootstrap 5 for styling

Future Enhancements

Implement sorting options (e.g., lowest to highest price).

Allow multiple cities to be selected.

Add a user review system.
