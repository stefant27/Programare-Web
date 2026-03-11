const educationNodes = document.querySelectorAll('#education ol li');
const educationArray = Array.from(educationNodes).map(item => item.textContent);
console.log(educationArray);

const filterYear = educationArray.filter(item => item.includes('2024'));
console.log(filterYear);

const filterLocation = educationArray.filter(item => item.includes('Brasov') || item.includes('Brașov'));
console.log(filterLocation);

const firstWords = educationArray.map(item => item.split(' ')[0]);
console.log(firstWords);

const totalAni = educationArray.reduce((total, item) => {
    const extragereAni = item.split('(')[1].split(')')[0].split('-');
    const anInceput = parseInt(extragereAni[0].trim());
    const textSfarsit = extragereAni[1].trim();
    const anSfarsit = textSfarsit === 'Prezent' ? new Date().getFullYear() : parseInt(textSfarsit);
    return total + (anSfarsit - anInceput);
}, 0);
console.log(`Total ani de studiu: ${totalAni}`);

async function incarcaProiecte() {
    try {
        const raspuns = await fetch('data/projects.json');
        const projects = await raspuns.json();

        const projectsSection = document.getElementById('projects');

        const listaProiecte = `
            <h3>Proiecte</h3>
            <ul>
                ${projects.map(p => `<li><strong>${p.name}</strong> - ${p.tech} (${p.done ? 'Finalizat' : 'În lucru'})</li>`).join('')}
            </ul>
        `;

        const proiecteFinalizate = projects.filter(p => p.done).length;
        const totalProiecte = projects.length;

        projectsSection.innerHTML = listaProiecte + `<p>Finalizate: ${proiecteFinalizate} din ${totalProiecte}</p>`;
    } catch (eroare) {
        console.error(eroare);
    }
}

incarcaProiecte();