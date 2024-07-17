document.addEventListener('DOMContentLoaded', () => {
    const videoId = localStorage.getItem('videoId');
    const videoTitle = localStorage.getItem('videoTitle');
    const videoDescription = localStorage.getItem('videoDescription');

    document.getElementById('videoTitle').textContent = videoTitle;
    document.getElementById('videoDescription').textContent = videoDescription;

    const player = document.createElement('iframe');
    player.width = '800';
    player.height = '450';
    player.src = `https://www.youtube.com/embed/${videoId}`;
    player.frameBorder = '0';
    player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    player.allowFullscreen = true;

    document.getElementById('player').appendChild(player);
});

