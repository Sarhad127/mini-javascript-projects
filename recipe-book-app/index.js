const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const ListElement = document.getElementById('recipe-list');

function displayRecipes(recipes) {

  ListElement.innerHTML = '';

  recipes.forEach((recipe) => {
    const ItemElement = document.createElement('li');
    ItemElement.classList.add('recipe-item');

    ImageElement = document.createElement('img');
    ImageElement.src = recipe.image;
    ImageElement.alt = 'recipe image';

    TitleElement = document.createElement('h2');
    TitleElement.innerText = recipe.title;

    IngredientElement = document.createElement('p');
    IngredientElement.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
        .map((ingredient) => ingredient.original)
        .join(", ")}
    `;

    LinkElement = document.createElement('a');
    LinkElement.href = recipe.sourceUrl;
    LinkElement.innerText = 'View Recipe';

    ItemElement.appendChild(ImageElement);
    ItemElement.appendChild(TitleElement);
    ItemElement.appendChild(IngredientElement);
    ItemElement.appendChild(LinkElement);
    ListElement.appendChild(ItemElement);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}
init();