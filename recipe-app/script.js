getRandomMeal();

async function getRandomMeal() {
   const randomMeal = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
   const randomMeal = await Response.json();
   const randomMeal = respData.meals[0];    
   console.log(randomMeal);
   
   loadRandomMeal();
}

async function getMealById(id) {
   const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'+id);
}

async function getMealsbySearch(term) {
  const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'+term);
}