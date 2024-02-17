
//Controllo Login
if (getUtenteLoggato()) {
    let elementi_loggato = document.querySelectorAll(".loggato");
    let elementi_non_loggato = document.querySelectorAll(".non-loggato");
    elementi_loggato.forEach((el) => el.classList.remove("d-none"));
    elementi_non_loggato.forEach((el) => el.classList.add("d-none"));
}


//Return the Param 'name' in the URL of the window
function getURLParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

//categoria o area checkata
async function toggleCards(input) {
    let category_name = input.id;
    if (input.checked) {
        let slider_categorie = document.querySelector("#sliding_window_categorie");
        let template_container = document.querySelector("#template_8cards_category")
        let template_card_category = document.querySelector("#template_card");
    
        let recipes = await getByCategory(category_name);
    
        let container;
        let i;
        for (i = 0; i < recipes.length; i++) {
            // se è finito lo spazio del container da 8 carte, ne creiamo un altro
            if (i % 8 == 0) {
                if (container) {
                    container.querySelector(".cards").setAttribute("data-category", category_name);
                    container.querySelector(".category-name").textContent =  category_name;
                    slider_categorie.appendChild(container);
                }
                container = template_container.content.cloneNode(true);
                //console.log(container);
            }
            //Crea recipe e appendi al container corrente
            let recipe = recipes[i];
            let card = template_card_category.content.cloneNode(true);
            card.querySelector(".card-img").src = recipe["strMealThumb"];
            card.querySelector(".card-title").textContent = recipe["strMeal"];
            card.querySelector(".card-save").setAttribute("data-recipe", recipe["idMeal"]);
            card.querySelector(".card-link").href = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipe["idMeal"];
            container.querySelector(".cards").appendChild(card);
        }
        console.log(i);
        if (i % 8 != 0) {
            for (i; i % 8 != 0; i++) {
                console.log(i);
                let card = template_card_category.content.cloneNode(true);
                card.querySelector(".card-img").src = recipes[0]["strMealThumb"];
                card.querySelector(".card-title").textContent = recipes[0]["strMeal"];
                card.querySelector(".card-link").href = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipes[0]["idMeal"];
                card.querySelector("*").style.visibility = "hidden";
                container.querySelector(".cards").appendChild(card);
            }
        }
        container.querySelector(".cards").setAttribute("data-category", category_name);
        container.querySelector(".category-name").textContent =  category_name;
        slider_categorie.appendChild(container);
    
    } else {
        let container_da_eliminare = document.querySelectorAll("[data-category='" + category_name + "']");
        container_da_eliminare.forEach((container) => container.parentElement.remove());
    }
}

//ricerca 
async function search() {
    let name = document.querySelector("#ricerca").value;
    console.log(name)

    if (name.length > 1) {
        let recipe = await getByName(name);
        document.querySelector("#ricerca").href = "../pag/ricetta.html?id=" + recipe["idMeal"]
    } else {
        //ricerca per lettera 


    }

}

function remeberItem(button) {
    button.classList.toggle("da-salvare")
}

function addToCookbook() {

}

const recipe_note = document.getElementById('recipe-note')
if (recipe_note) {
    recipe_note.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipe_id = button.getAttribute('data-recipe')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const saveButton = recipe_note.querySelector('.save-recipe')

    saveButton.setAttribute("data-recipe", recipe_id);
  })
}

function saveRecipe(button) {
    console.log(button.getAttribute("data-recipe"));
}