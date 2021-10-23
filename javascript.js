const navbar = document.querySelector('.navbar');
const login = document.querySelector('.login');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
login.addEventListener('click', close1);

function show(){
    navbar.style.display = 'flex';
    navbar.style.top = '0';
}

function close1(){
    navbar.style.top = '-100%';
}