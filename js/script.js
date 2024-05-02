// Abre y cierra el menu aplicando clases, y cambia el icono.

//Obtengo la url de donde es llamado el script
let urlActual = window.location.href;

//array con los nombres de los html que estan en la raiz
let raiz = ["index", "carrito", "contacto", "sobre-nosotros"]

//Busca si la url contiene alguna de las parabras del array
let ifRaiz = raiz.some(e => urlActual.includes(e));


function openClose() {
    // Obtengo el elemento con id = menu
    const menu = document.getElementById("menu")
    //obtengo el elemento con clase .menu-icon
    const burger = document.querySelector('.menu-icon')
    // obtengo la etiqueta nav
    const nav = document.querySelector('.nav-menu')

    //Open
    if (nav.style.display === "none") {
        // Agrego clase .active a menu
        menu.className = "active"
        if (ifRaiz) {
            // Cambio el icono abierto
            burger.src = './img/menu-open.svg'
        } else {
            // Cambio el icono abierto
            burger.src = '../img/menu-open.svg'
        }
        // Cambio el display del nav para que se vea
        nav.style.display = "block"
    } //Close
    else {
        // vuelvo a darle la clase anterior
        menu.className = "ul-nav"
        if (ifRaiz) {
            // Cambio el icono cerrado
            burger.src = './img/menu-close.svg'
        } else {
            // Cambio el icono cerrado
            burger.src = '../img/menu-close.svg'
        }
        // Vuelvo a ocultar el nav
        nav.style.display = "none"
    }
}

