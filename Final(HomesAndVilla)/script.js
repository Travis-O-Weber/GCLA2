// Task 1: Filter PLACES by type
function filterPlacesByType(typePreference) {
  // Filter PLACES based on the type property
  return PLACES.filter((place) => place.type === typePreference);
}

// Task 2: Create a card element
function createCard(place) {
  // Create a new div element
  const card = document.createElement("div");

  // Add the col class to the div
  card.classList.add("col");

  // Set the innerHTML of the card with template strings
  card.innerHTML = `
    <div class="card h-100">
      <img src="${place.img}" class="card-img-top h-100" alt="${place.name}" />
      <div class="card-body">
        <h5 class="card-title">${place.name}</h5>
        <p class="card-text">${place.location}</p>
      </div>
    </div>
  `;

  // Return the element
  return card;
}

// Task 3: Populate recommendation cards
function populateRecommendationCards(filteredPlaces) {
  // Store the DOM element with the id of "recommendations" in a variable
  const recommendations = document.getElementById("recommendations");

  // Clear the "recommendations" innerHTML
  recommendations.innerHTML = "";

  // Loop through the filteredPlaces array
  filteredPlaces.forEach((place) => {
    // Create a card for each place
    const card = createCard(place);

    // Append the card to the recommendations DOM element
    recommendations.appendChild(card);
  });
}

// Task 4: Find a place by name
function findPlaceByName(placeName) {
  // Loop through the PLACES array
  for (let place of PLACES) {
    // Check if the place name matches the placeName parameter
    if (place.name === placeName) {
      return place; // Return the matching place object
    }
  }
  return null; // Return null if no match is found
}

// Debugging Logs
console.log("Script.js loaded");
console.log("filterPlacesByType function loaded");
