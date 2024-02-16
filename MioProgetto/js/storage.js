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
        console.log("Trovato");
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