const menu = document.querySelector(".menu");
const menuHamburguer = document.querySelector(".menu-hamburguer");


menuHamburguer.addEventListener('click', showMenu);

function showMenu() {
    menu.style.display === 'block' ?
    menu.style.display = 'none':
    menu.style.display = 'block';
}