const burger = document.getElementsByClassName('burger')[0]
const navMenu = document.getElementsByClassName('nav-menu')[0]
burger.addEventListener('click', () => {
    navMenu.classList.toggle('active')

})