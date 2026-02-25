const oraCurenta = new Date().getHours();
const mesajSalut = document.querySelector('header p');

if (oraCurenta >= 6 && oraCurenta < 12) {
    mesajSalut.textContent = "Bună dimineața! Bine ai venit pe pagina mea.";
} else if (oraCurenta >= 12 && oraCurenta < 18) {
    mesajSalut.textContent = "Bună ziua! Bine ai venit pe pagina mea.";
} else {
    mesajSalut.textContent = "Bună seara! Bine ai venit pe pagina mea.";
}

function submitForm() {
    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;

    console.log("Nume:", nume);
    console.log("Email:", email);
    console.log("Mesaj:", mesaj);

    console.warn("Goodbye World!");
}