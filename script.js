const imagem = document.getElementById('imagem');
const overlay = document.getElementById('overlay');

imagem.addEventListener('mouseenter', () => {
  imagem.style.transform = 'scale(1.2)';
  overlay.style.opacity = '0.5'; // Ajuste a opacidade conforme necessário
});

imagem.addEventListener('mouseleave', () => {
  imagem.style.transform = 'scale(1)';
  overlay.style.opacity = '0';
});