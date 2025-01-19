/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

// Deliverable 1: chooseRandomGenre function
function chooseRandomGenre() {
  const genres = ["drama", "fantasy", "comedy"];
  const randomIndex = getRandomNumber(0, genres.length - 1);
  return genres[randomIndex];
}

// Deliverable 2: displayRandomShow function
function displayRandomShow(genre) {
  // If genre is "random", choose a random genre
  if (genre === "random") {
    genre = chooseRandomGenre();
  }

  let show;
  // Select a random show based on the genre
  if (genre === "drama") {
    show = dramaShows[getRandomNumber(0, dramaShows.length - 1)];
  } else if (genre === "fantasy") {
    show = fantasyShows[getRandomNumber(0, fantasyShows.length - 1)];
  } else if (genre === "comedy") {
    show = comedyShows[getRandomNumber(0, comedyShows.length - 1)];
  }

  // Display the selected show
  displayShow(show);
}
