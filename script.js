const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav-list a");

// abre e fecha menu ao clicar no ícone
menu.addEventListener("click", () => {
    menu.classList.toggle("active"); // transforma em X
    nav.classList.toggle("active");  // abre/fecha menu
});

// fecha menu ao clicar em um link
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        nav.classList.remove("active");
    });
});