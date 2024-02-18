function mostraPassword(bottone) {
    let icone = bottone.querySelectorAll("svg");

    icone.forEach((icona) => {
        icona.classList.toggle("d-none");
    });

    let passwords = document.querySelectorAll("input.password");

    passwords.forEach((password) => {
        if (password.type == "text") {
            password.type = "password";
        } else {
            password.type = "text";
        }
    })
}

//Comportamento standard (Controlla solo il Default)
function controllaCampo(campo) {
    if (campo.checkValidity()) {
        campo.classList.add("is-valid");
        campo.classList.remove("is-invalid");
    } else {
        campo.classList.remove("is-valid");
        campo.classList.add("is-invalid");
    }
}

function controllaUguaglianzaPassword(password2) {
    let password1 = document.registration_form.password;

    if (password1.value == password2.value) {
        password2.classList.add("is-valid");
        password2.classList.remove("is-invalid");
        return true;
    } else {
        password2.classList.remove("is-valid");
        password2.classList.add("is-invalid");;
        return false;
    }

}


//Controllo che la data non sia futura
function controllaData(date) {
    let dateValue = Date.parse(date.value);
    let today = new Date().getTime();

    if (dateValue <= today) {
        date.classList.add("is-valid");
        date.classList.remove("is-invalid");
        return true;
    } else {
        date.classList.remove("is-valid");
        date.classList.add("is-invalid");
        return false;
    }

}

function controllaERegistraUtente(form) {
    let inputs = form.querySelectorAll("input");

    for (let input of inputs) {
        if (!input.checkValidity) {
            return false; //Non inviare il form
        }
    }

    if (!controllaData(form.querySelector("input#birthdate"))) {
        return false;
    }

    if (!controllaUguaglianzaPassword(form.querySelector("input#password2"))) {
        return false;
    }

    //Form è valido

    let dati = new FormData(form);

    let nuovo_utente = {
        email: dati.get("email"),
        password: dati.get("password"),
        nome: dati.get("nome"),
        cognome: dati.get("lname"),
        genere: dati.get("gender"),
        data: dati.get("date"),
    }

    registraUtente(nuovo_utente);

    let settings = document.querySelector("#modify-form")
    settings.querySelector("#password-modifiy").setAttribute("placeholder", dati.get("password"));
    settings.querySelector("#nome-modifiy").setAttribute("placeholder", dati.get("nome"));
    settings.querySelector("#lname-modifiy").setAttribute("placeholder", dati.get("lname"));
    settings.querySelector("#gender-modifiy").setAttribute("placeholder", dati.get("gender"));
    settings.querySelector("#date-modifiy").setAttribute("placeholder", dati.get("date"));

    return true;

}

function controllaEModificaUtente(form) {
    let inputs = form.querySelectorAll("input");

    for (let input of inputs) {
        if (!input.checkValidity) {
            return false; //Non inviare il form
        }
    }

    if (!controllaData(form.querySelector("input#birthdate"))) {
        return false;
    }

    if (!controllaUguaglianzaPassword(form.querySelector("input#password2"))) {
        return false;
    }

    //form valido 

    let utente = getUtenteLoggato();

    utente = {
        password: dati.get("password-modify"),
        nome: dati.get("nome-modify"),
        cognome: dati.get("lname-modify"),
        genere: dati.get("gender-modify"),
        data: dati.get("date-modify"),
    }

    //
}



function controllaELogin(form) {
    let dati = new FormData(form);

    let email = dati.get("email");
    let password = dati.get("password");

    if (provaLogin(email, password)) {
        document.querySelector(".login-errato").classList.add("d-none");
        return true;
    }
    document.querySelector(".login-errato").classList.remove("d-none");
    return false;
}

function controllaERegistraRecensione(form) {
    let inputs = form.querySelectorAll("input");

    for (let input of inputs) {
        if (!input.checkValidity) {
            return false; //Non inviare il form
        }
    }

    if (!controllaData(form.querySelector("input#preparation-date"))) {
        return false;
    }

    // form valido

    let dati = new FormData(form);

    let review = {

        title: "", //nome ricetta o id
        utente: "", //autore ricetta
        text: dati.get("review-text"),
        difficulty: dati.get("difficoltà"),
        taste: dati.get("gusto"),
        date: dati.get("preparation-date")
    }


    addReview(review);

    return true;
}