
// Obtengo el elemento con id menu
const menu = document.getElementById("menu")
//obtengo el elemento con clase .menu-icon
const burger = document.querySelector('#burger-icon')
// obtengo la etiqueta nav
const nav = document.querySelector('.nav-menu')
function openClose() {

    //Open
    if (menu.className === "ul-nav") {
        // Agrego clase .active a menu
        menu.className = "active"
        burger.classList.remove("close")
        burger.classList.add("open")
    } //Close
    else {
        // vuelvo a darle la clase anterior
        menu.className = "ul-nav"
        burger.classList.remove("open")
        burger.classList.add("close");
    }
}
