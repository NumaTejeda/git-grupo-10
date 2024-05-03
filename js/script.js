// FALTA COPIAR EL NUEVO HEADER EN TODOS LOS ARCHIVOS
function openClose() {
    // Obtengo el elemento con id = menu
    const menu = document.getElementById("menu")
    //obtengo el elemento con clase .menu-icon
    const burger = document.querySelector('#burger-icon')
    // obtengo la etiqueta nav
    const nav = document.querySelector('.nav-menu')

    //Open
    if (nav.style.display === "none") {
        // Agrego clase .active a menu
        menu.className = "active"
        burger.classList.remove("close")
        burger.classList.add("open")
        // Cambio el display del nav para que se vea
        nav.style.display = "block"
    } //Close
    else {
        // vuelvo a darle la clase anterior
        menu.className = "ul-nav"
        burger.classList.remove("open")
        burger.classList.add("close");
        // Vuelvo a ocultar el nav
        nav.style.display = "none"
    }
}
