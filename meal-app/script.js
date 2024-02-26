const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];

async function fetchMeals(search) {
  await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  ).then((res) => res.json().then((data) => (meals = data.meals)));
  console.log(meals);
}

function mealsDisplay() {
  if (meals === null) {
    result.innerHTML = "<h2>No result</h2>";
  } else {
    meals.length = 12;

    result.innerHTML = meals
      .map((meal) => {
        let ingredients = [];
        for (i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];

            ingredients.push(`<li>${ingredient} - ${measure}</li>`);
          }
        }
        console.log(meal);
        console.log(ingredients);

        return `
          <li class="card">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strArea}</p>
            <img src=${meal.strMealThumb} alt="${meal.strMeal} picture">
            <ul>${ingredients.join("")}</ul>
          </li>
    `;
      })
      .join("");
  }
}

input.addEventListener("input", (e) => {
  fetchMeals(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});

// quand on utilise .map(), après => c comme si on avait des (). les parenthèses considèrent qu'il y a 1seule ligne.
// On peut utiliser {} mais on DOIT METTRE RETURN avant 1er `
