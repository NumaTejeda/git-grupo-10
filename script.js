// Abre y cierra el menu aplicando clases, y cambia el icono 
function openClose() {
    const menu = document.getElementById("menu");
    const burger = document.querySelector('.menu-icon');
    if (menu.className === "ul-nav") {
        menu.className = "active";
        burger.src = './img/minus-solid.svg'
    } else {
        menu.className = "ul-nav"
        menu.style.display = "block"
        burger.src = './img/menu-hamburger.svg'
    }
}