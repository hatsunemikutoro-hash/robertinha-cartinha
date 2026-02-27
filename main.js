document.addEventListener('DOMContentLoaded', () => {
    const container = document.body;

    for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        
        // Algumas estrelas serão mais azuladas que outras
        const colors = ['#ffffff', '#00d2ff', '#92fe9d']; 
        star.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        
        container.appendChild(star);
    }
});

const imagem_carta = document.getElementById("imagem-carta");

imagem_carta.addEventListener("click", () => {
    window.location.href = "carta.html"
})