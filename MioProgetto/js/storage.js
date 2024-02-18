function registraUtente(utente) {

    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));

    if (!utenti_attuali) {
        utenti_attuali = [];
    }

    utenti_attuali.push(utente);

    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
}

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

function getUtenteLoggato() {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));
    let email = sessionStorage.getItem("utente_loggato");

    if (email) {
        let trovati = utenti_attuali.filter((utente) => utente.email == email);
        return trovati[0];
    }
    return null;
}

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

function modificaDatiUtente(nuovo_utente) {
    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));

    for (let i = 0; i < utenti_attuali.length; i++) {
        if (utenti_attuali[i].email == nuovo_utente.email) {
            utenti_attuali[i] = nuovo_utente;
        }
    }

    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
}

//Cancella utente loggato
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

function addReview(review) {
    
}