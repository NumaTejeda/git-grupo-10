// Abre y cierra el menu aplicando clases, y cambia el icono.
function openClose() {
    const menu = document.getElementById("menu");
    const burger = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    //Open
    if (menu.className === "ul-nav") {
        menu.className = "active"; //Agrego clase .active a menu
        burger.src = './img/minus-solid.svg' //Cmabio el icono
        nav.style.display = "block";
    } //Close
    else {
        menu.className = "ul-nav"
        menu.style.display = "block"
        burger.src = './img/menu-hamburger.svg'
        nav.style.display = "none"
    }
}