const imageSources = [
  "assets/trail.jpeg",
  "assets/lakesunset.jpeg",
  "assets/cabin.jpeg",
  "assets/doe.jpeg",
  "assets/starrynight.jpeg",
];

// Function to add a single thumbnail
function addThumbnail(imageSource) {
  // 1.1 Create the element
  const thumbnail = document.createElement("img");

  // 1.2 Customize the element
  thumbnail.src = imageSource;
  thumbnail.classList.add("thumbnail"); // Assumes there's styling for .thumbnail in CSS

  // 1.3 Append the element
  document.getElementById("thumbnail-container").appendChild(thumbnail);

  // 1.4 Add the onclick event to display the full-size image
  thumbnail.onclick = () => displayFullSizeImage(imageSource);
}

// Function to add all thumbnails
function addAllThumbnails() {
  // 2.1 Loop through imageSources
  imageSources.forEach((source) => {
    // 2.2 Call addThumbnail each iteration
    addThumbnail(source);
  });
}

// Function to display a full-size image in the container
function displayFullSizeImage(imageSource) {
  const fullsizeImage = document.getElementById("fullsize-image");
  fullsizeImage.src = imageSource;
  document.getElementById("image-container").classList.remove("hidden");
}

// 2.3 Call addAllThumbnails to populate thumbnails
addAllThumbnails();

// LevelUp: Display the first image on page load
displayFullSizeImage(imageSources[0]);
