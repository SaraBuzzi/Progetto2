
//registra utente nel local storage
function registraUtente(utente) {

    let utenti_attuali = JSON.parse(localStorage.getItem("utenti"));

    if (!utenti_attuali) {
        utenti_attuali = [];
    }

    utenti_attuali.push(utente);

    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
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
    
             utenti_attuali[i].cookbook.splice(i,1);
    
        }
    }
    localStorage.setItem("utenti", JSON.stringify(utenti_attuali));
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


//aggiunge la recensione alla ricetta corrispondente
function addReview(review) {
    
}