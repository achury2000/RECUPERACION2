const menuIcon = document.getElementById('menu-icon');
const closeMenuIcon = document.getElementById('close-menu-icon');
const sideMenu = document.getElementById('side-menu');

menuIcon.addEventListener('click', () => {
    sideMenu.classList.toggle('show');
});

closeMenuIcon.addEventListener('click', () => {
    sideMenu.classList.remove('show');
});