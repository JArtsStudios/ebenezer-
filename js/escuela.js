
document.addEventListener('DOMContentLoaded', function() {
    const avatar = localStorage.getItem('avatar');
    const avatarElement = document.getElementById('avatar');

    if (avatar) {
        avatarElement.setAttribute('src', avatar);
    } else {
        console.log('No se encontró la foto de perfil.');
    }

    // Redireccionar a perfil.html al hacer clic en la imagen de perfil
    avatarElement.addEventListener('click', function() {
        window.location.href = 'perfil.html';
    });
});






// ----card code -----



const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const content = card.querySelector('.content');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * -10;

        content.style.setProperty('--rotateX', `${rotateX}deg`);
        content.style.setProperty('--rotateY', `${rotateY}deg`);
    });

    card.addEventListener('mouseleave', () => {
        content.style.setProperty('--rotateX', `0deg`);
        content.style.setProperty('--rotateY', `0deg`);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const redirectLink2 = document.getElementById('redirectLink2');
    redirectLink2.addEventListener('click', function(event) {
        const claveCorrecta = localStorage.getItem('claveCorrecta');
        if (claveCorrecta !== '1') {
            event.preventDefault();
            window.location.href = 'clave.html';
        } else {
            window.location.href = 'dotrinabasica.html';
        }
    });
});