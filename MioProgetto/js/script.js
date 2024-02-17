
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
function check(input) {
    input.classList.toggle("checked");
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