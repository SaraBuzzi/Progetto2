async function random() {
    let random;
    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(response => {
            //Elaborazione
            random = response.meals[0];
        })
        .catch(err => console.error(err));
    return random;
}

// SEARCH   



// GET BY
async function getById(id) {
    let meal;
    await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
        .then(response => response.json())
        .then(response => {
            //Elaborazione
            meal = response.meals[0];
        })
        .catch(err => console.error(err));
    return meal;
}

async function getByArea(areaName) {
    let areaRecipes;
    await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + areaName)
        .then(response => response.json())
        .then(response => {
            //Elaborazione
            areaRecipes = response;
        })
        .catch(err => console.error(err));
    return areaRecipes;
}



async function getByCategory(category) {
    let categoryRecipes;
    await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)
        .then(response => response.json())
        .then(response => {
            //Elaborazione
            categoryRecipes = response;
        })
        .catch(err => console.error(err));
    return categoryRecipes;
}


async function getByIngredient(ingredient) {
    let ingredientRecipes;
    await fetch("www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient)
        .then(response => response.json())
        .then(response => {
            //Elaborazione
            ingredientRecipes = response;
        })
        .catch(err => console.error(err));
    return ingredientRecipes;
}



// CATEGORIES

async function getCategoriesInfo() {
    let categoriesInfo;
    await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(response => {
            //Elaborazione
            categoriesInfo = response;
        })
        .catch(err => console.error(err));
    return categoriesInfo;
}

async function getCategories() {
    let categories;
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
        .then(response => response.json())
        .then(response => {
            //Elaborazione
            categories = response.meals;
        })
        .catch(err => console.error(err));
    return categories;
}

function randomCategories() {
    let num;
    num = Math.floor(Math.random() * 10) + 4;
    return num;
}

//container.querySelectorAll("[data-category='beef'").forEach((el ) => el.remove();)

// AREAS

async function getAreas() {
    let areas;
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(response => response.json())
        .then(response => {
            //Elaborazione
            areas = response.meals;
        })
        .catch(err => console.error(err));
    return areas;
}

function randomAreas() {
    let num;
    num = Math.floor(Math.random() * 10) + 18;
    return num;
}






