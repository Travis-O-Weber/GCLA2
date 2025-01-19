function filterByCity(targetCity, listingCityArray) {
  return listingCityArray
    .map((city, index) =>
      city.toLowerCase() === targetCity.toLowerCase() ? index : -1
    )
    .filter((index) => index !== -1);
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  return listingPriceArray
    .map((price, index) =>
      price >= minPrice && price <= maxPrice ? index : -1
    )
    .filter((index) => index !== -1);
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  return listingTypeArray
    .map((type, index) => (targetTypes.includes(type) ? index : -1))
    .filter((index) => index !== -1);
}
