function renderRestaurants(restaurants) {
  renderHtml = restaurants.map(renderRestaurant).join("");
  return `
        <div class="mt-5 d-flex justify-content-center align-items-start">
            ${renderHtml}
        </div>
    `;
}

function renderRestaurant(restaurant) {
  return `<div class="bg-light rounded w-25 text-left m-2 p-2">
  <h3>${restaurant.name}</h3>
  <h5 class="text-secondary">${restaurant.type}</h5>
  <h4 class="text-success">${"$".repeat(restaurant.priceRating)}</h4>
  </div>
  `;
}

function restaurants() {
  var content = document.getElementById("content");

  var restaurantsAbstraction = [
    {
      name: "McDonald's",
      type: "Fast Food",
      priceRating: 1
    },
    {
      name: "Gunshow",
      type: "Date Night Dining",
      priceRating: 5
    },
    {
      name: "Iron Age",
      type: "Korean BBQ",
      priceRating: 4
    }
  ];

  content.innerHTML = renderRestaurants(restaurantsAbstraction);
}
