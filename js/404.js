function goBack() {
    window.history.back();
}

const images = [
    'url("../img/img 4.jpg")',
    'url("../img/img 1.jpg")',
    'url("../img/img 6.jpg")',
    'url("../img/img 5.jpg")'
];

let currentIndex = 0;

function changeBackground() {
    const background = document.getElementById('background');
    background.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(changeBackground, 5000);
});



       
const pages = [
    { url: 'multimedia.html', name: 'Multimedia' },
    { url: 'oraciones.html', name: 'Oraciones' },
    { url: 'ministerios.html', name: 'Ministerios' },
    { url: 'escuela.html', name: 'Escuela' },
    // Añade más páginas aquí
];

const sections = [
    { url: 'multimedia.html#horarios', name: 'Horarios en Multimedia' },
    { url: 'oraciones.html#discipulados', name: 'Discipulados en Oraciones' },
    { url: 'ministerios.html#progreso', name: 'Progreso en Ministerios' },
    // Añade más secciones aquí
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const content = document.querySelector('.content');
const blurOverlay = document.createElement('div');
blurOverlay.className = 'blur-overlay';
document.body.appendChild(blurOverlay);

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = '';
    if (query) {
        let results = [...pages, ...sections].filter(item =>
            item.name.toLowerCase().includes(query)
        );
        results.forEach(result => {
            const link = document.createElement('a');
            link.href = result.url;
            link.textContent = result.name;
            searchResults.appendChild(link);
        });
        searchResults.classList.add('show');
        content.classList.add('blur-background');
        blurOverlay.style.display = 'block';
    } else {
        searchResults.classList.remove('show');
        content.classList.remove('blur-background');
        blurOverlay.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.classList.remove('show');
        content.classList.remove('blur-background');
        blurOverlay.style.display = 'none';
    }
});
