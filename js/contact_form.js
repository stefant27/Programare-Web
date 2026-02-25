const oraCurenta = new Date().getHours();
const mesajSalut = document.querySelector('header p');

if (oraCurenta >= 6 && oraCurenta < 12) {
    mesajSalut.textContent = "Bună dimineața! Bine ai venit pe pagina mea.";
} else if (oraCurenta >= 12 && oraCurenta < 18) {
    mesajSalut.textContent = "Bună ziua! Bine ai venit pe pagina mea.";
} else {
    mesajSalut.textContent = "Bună seara! Bine ai venit pe pagina mea.";
}

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;
    const feedback = document.getElementById("form-feedback");

    if (nume.length < 2) {
        feedback.textContent = "Numele este prea scurt!";
        feedback.style.color = "red";
    } else if (!email.includes('@')) {
        feedback.textContent = "Email-ul trebuie să conțină @!";
        feedback.style.color = "red";
    } else if (mesaj.length < 10) {
        feedback.textContent = "Mesajul trebuie să aibă cel puțin 10 caractere!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = `Multumim, ${nume}! Mesajul a fost trimis.`;
        feedback.style.color = "green";
    }
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function(event) {
    event.preventDefault();
    
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});