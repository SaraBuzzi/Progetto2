
//registra utente nel local storage
function registraUtente(utente) {

    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));

    if (!utenti_attuali) {
        utenti_attuali = [];
    }

    utenti_attuali.push(utente);

    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
}

function utenteDoppio(utente) {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));
    
    for (let i=0; i < utenti_attuali.length; i++) {
        if (utenti_attuali[i].email == utente.email) {
            return false;
        }
    }

}

//effettua login se i dati inseriti corrispondono ad un utente esistente
function provaLogin(email, password) {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));

    if (!utenti_attuali) {
        return false;
    }

    let trovato = utenti_attuali.filter((utente) => utente.email == email && utente.password == password);

    if (trovato.length > 0) {
        sessionStorage.setItem("utente_loggato", email);
        return true;
    }
    return false;
}

//restituisce l'utente loggato
function getUtenteLoggato() {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));
    let email = sessionStorage.getItem("utente_loggato");


    if (email) {
        let trovati = utenti_attuali.filter((utente) => utente.email == email);
        return trovati[0];
    }
    return null;
}

function getNomeCognome(email) {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));
  
    if (email) {
        let trovati = utenti_attuali.filter((utente) => utente.email == email);
        return trovati[0].nome + " " + trovati[0].cognome;
        
    }
    return null;
}


//aggiunge la ricetta al ricettario dell'utente loggato
function addToCookbook(recipe) {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));
    let email = sessionStorage.getItem("utente_loggato");

    for (let i = 0; i < utenti_attuali.length; i++) {
        if (utenti_attuali[i].email == email) {

            utenti_attuali[i].cookbook.push(recipe);
        }
    }
    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
}



function remToCookbook(recipe) {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));
    let email = sessionStorage.getItem("utente_loggato");

    for (let i = 0; i < utenti_attuali.length; i++) {
        if (utenti_attuali[i].email == email) {

            utenti_attuali[i].cookbook.splice(i, 1);

        }
    }
    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
}

//aggiunge la ricetta che ha recensioni
function addReview(review) {
    let reviews = JSON.parse(localStorage.getItem("recensioni"));

    if (!reviews) {
        reviews = {};
       
    }
    if (!reviews[review.title]) {
        reviews[review.title] = [];
    }
   
    reviews[review.title].push(review);
    localStorage.setItem("recensioni", JSON.stringify(reviews))
}

function remReview(review) {
    let reviews = JSON.parse(localStorage.getItem("utenti"));
    let email = sessionStorage.getItem("utente_loggato");

    for (let i = 0; i < utenti_attuali.length; i++) {
        if (utenti_attuali[i].email == email) {

            utenti_attuali[i].cookbook.splice(i, 1);

        }
    }
    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
}


function getUserReviews() {
    let email = sessionStorage.getItem("utente_loggato")
    let reviews = JSON.parse(localStorage.getItem("recensioni"));
    let user_reviews = []
    for (let i= 0; i < reviews.length; i++) {
        if (reviews[i].utente == email) {
            user_reviews.push(review)
        }
    }
    return user_reviews;


}

function getReviewsById(id) {
    let reviews = JSON.parse(localStorage.getItem("recensioni"));
    return reviews[id];

}

function getRecipeReviewStats(id) {
    let reviews = JSON.parse(localStorage.getItem("recensioni"));
    if (reviews) {
        let related_reviews = reviews[id];
        if (related_reviews && related_reviews.length > 0) {
            return {
                taste: (related_reviews.map((review) => parseInt(review.taste)).reduce((a, b) => a + b, 0) / related_reviews.length).toFixed(1),
                difficulty: (related_reviews.map((review) => parseInt(review.difficulty)).reduce((a, b) => a + b, 0) / related_reviews.length).toFixed(1),
            }
        }
    } else {
        localStorage.setItem("recensioni", JSON.stringify({}));
    }
    return {
        taste: '-',
        difficulty: '-',
    }
}

//modifica i campi dell'utente loggato
function modificaDatiUtente(nuovo_utente) {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));

    for (let i = 0; i < utenti_attuali.length; i++) {
        if (utenti_attuali[i].email == nuovo_utente.email) {
            utenti_attuali[i] = nuovo_utente;
        }
    }

    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
}

function logout() {
    sessionStorage.removeItem("utente_loggato");
    location.reload();
}

//cancella utente loggato
function cancellaUtente() {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));
    let email = sessionStorage.getItem("utente_loggato");

    for (let i = 0; i < utenti_attuali.length; i++) {
        if (utenti_attuali[i].email == email) {
            utenti_attuali.splice(i, 1);
        }
    }

    sessionStorage.removeItem("utente_loggato");
    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
}


