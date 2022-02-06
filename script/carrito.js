
class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
const carritoComprasStorage = localStorage.getItem("carritoCompras");

if (carritoComprasStorage === null || carritoComprasStorage.length === 0) {
    localStorage.setItem("carritoCompras", JSON.stringify([]));
}

$(`body`).append
    ("<div class='accion' onclick='toggleAccion();'><span class='icono'></span><ul class='accion__ul'></ul></div>");

actualizarCarrito();


function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carritoCompras"));

    if (carrito.length > 0) {
        for (const producto of carrito) {
            $(`.accion__ul`).append(`<li>${producto.nombre} - ${producto.cantidad}</li>`)
        }
    }
}

function toggleAccion() {
    let accion = document.querySelector('.accion');
    accion.classList.toggle('active');
}
