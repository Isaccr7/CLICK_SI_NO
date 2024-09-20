const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    // Genera una posición aleatoria dentro de los límites de la ventana
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.getElementById('yesBtn').addEventListener('click', () => {
    window.location.href = 'floresYelow.html';  // Redirige a la página flowers.html
});
