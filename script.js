// Abre y cierra el menu aplicando clases, y cambia el icono.
function openClose() {
    const menu = document.getElementById("menu")
    const burger = document.querySelector('.menu-icon')
    const nav = document.querySelector('nav')
    //Open
    if (nav.style.display === "none") {
        menu.className = "active" //Agrego clase .active a menu
        burger.src = './img/menu-open.svg' //Cmabio el icono
        nav.style.display = "block"
    } //Close
    else {
        menu.className = "ul-nav"
        menu.style.display = "block"
        burger.src = './img/menu-close.svg'
        nav.style.display = "none"
    }
}