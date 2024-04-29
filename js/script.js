// Abre y cierra el menu aplicando clases, y cambia el icono.
function openClose() {
    const menu = document.getElementById("menu") // Obtengo el elemento con id = menu
    const burger = document.querySelector('.menu-icon') //obtengo el elemento con clase .menu-icon
    const nav = document.querySelector('.nav-menu') // obtengo la etiqueta nav
    //Open
    if (nav.style.display === "none") {
        menu.className = "active" // Agrego clase .active a menu
        burger.src = './img/menu-open.svg' // Cambio el icono abierto
        nav.style.display = "block" // Cambio el display del nav para que se vea
    } //Close
    else {
        menu.className = "ul-nav" // vuelvo a darle la clase anterior
        burger.src = './img/menu-close.svg' // Cmabio icono cerrado
        nav.style.display = "none" // Vuelvo a ocultar el nav
    }
}

