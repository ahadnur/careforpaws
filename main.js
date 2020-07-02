const button = document.getElementById('btn');
const menu = document.getElementById('menu');

button.addEventListener('click', () =>{
    menu.classList.toggle('active');
})