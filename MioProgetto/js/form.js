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
    } else {
        password2.classList.remove("is-valid");
        password2.classList.add("is-invalid");
    }

}