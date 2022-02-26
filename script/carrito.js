
const carritoComprasStorage = localStorage.getItem("carritoCompras");

if (carritoComprasStorage === null || carritoComprasStorage.length === 0) {
    localStorage.setItem("carritoCompras", JSON.stringify([]));
}

$(`body`).append("<div class='accion' onclick='toggleAccion();'><span class='icono'></span><ul class='accion__ul'></ul></div>");

actualizarCarrito();

function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carritoCompras"));

    if (carrito.length === 0) {

    } else {
        $(".accion__ul").children().remove();
        for (const producto of carrito) {
            $(`.accion__ul`).append(`<li id="itemCarrito${producto.id}"><div class = "itemCarrito"><div class="itemCarrito1"><button class="btnQuitarItem" id="btnQuitarItem${producto.id}">-</button></div> <div class="itemCarrito2">${producto.nombre}</div>  <div class="itemCarrito3">${producto.cantidadCarta}</div> <div class="itemCarrito4">$${multiplicar(producto.cantidadCarta, producto.precio)}</div></div></li>`);
        }

        $(`.accion__ul`).prepend(`<li class="carritoTitulo"><div class="itemCarrito"><div class="itemCarrito1"></div><div class="itemCarrito2">Nombre</div><div class="itemCarrito3">Cant.</div><div class ="itemCarrito4">Precio</div></div></li>`);

        $(`.accion__ul`).append(`<li class="carritoTotal"><div class="itemCarrito"><div class="itemCarrito1">Total:</div> <div class="itemCarrito2"></div><div class="itemCarrito3"></div><div class="itemCarrito4">$${calcularTotal()}</div></div></li>`);

        $(".accion__ul").append(`<button class="comprar" id="comprar">Comprar</button>`)
    }

    $("#comprar").on("click", () => {
        window.location.href = "../pages/carritoCompras.html";
    });

    let removerCarrito = [];

    for (const producto of carrito) {
        $(`#btnQuitarItem${producto.id}`).on("click", () => {
            $(`#itemCarrito${producto.id}`).remove();
            removerCarrito.push(producto);
            carrito = carrito.filter((item) => !removerCarrito.includes(item));
            localStorage.setItem("carritoCompras", JSON.stringify(carrito));
            actualizarCarrito();
        });
    }
}

function toggleAccion() {
    let accion = document.querySelector('.accion');
    accion.classList.toggle('active');
}

function multiplicar(cantidad, precio) {
    return cantidad * precio;
}
function calcularTotal() {
    let carrito = JSON.parse(localStorage.getItem("carritoCompras"));

    if (carrito.length === 0) {
        return 0;
    } else {
        let total = 0;
        for (const producto of carrito) {
            total = total + (producto.precio * producto.cantidadCarta);

        }
        return total;
    }

}
