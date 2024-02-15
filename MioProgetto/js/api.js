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


