// Menu Mobile
const menuButton = document.querySelector('.menu');
const navSite = document.querySelector('.nav-site');
const navLinks = document.querySelectorAll('.nav-site a');

// Toggle do menu ao clicar no botão hamburger
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  navSite.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuButton.classList.remove('active');
    navSite.classList.remove('active');
  });
});