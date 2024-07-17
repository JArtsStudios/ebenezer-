// Mostrar la imagen de perfil almacenada localmente

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




// Añadir un efecto parallax con retraso al scroll
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    document.getElementById('layer1').style.transform = 'translateY(' + offset * 0.2 + 'px)';
    document.getElementById('layer2').style.transform = 'translateY(' + offset * 0.4 + 'px)';
    document.getElementById('layer3').style.transform = 'translateY(' + offset * 0.6 + 'px)';
    document.getElementById('layer4').style.transform = 'translateY(' + offset * 0.8 + 'px)';
    document.getElementById('layer3').style.opacity = 1 - offset / 2000; // Esconde el h1 gradualmente
});

// Restablecer la opacidad del h1 al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('layer3').style.opacity = 1;
});



function openNav() {
    document.getElementById("menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}




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