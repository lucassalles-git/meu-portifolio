const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('ativo');
    menu.classList.toggle('aberto');
});