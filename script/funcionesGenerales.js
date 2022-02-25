function deslogueo() {
    localStorage.removeItem("usuarioActivo");
    window.location.reload();
}

function reiniciarLocalStorage() {
    localStorage.clear();
}

function recorrerLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        console.log("Clave: " + clave);
        console.log("Valor: " + localStorage.getItem(clave));
    }
}

function removerElementoPorClase(nombreClase) {
    let elemento = document.getElementsByClassName(nombreClase);
    elemento[0].parentNode.removeChild(elemento[0]);

}

function removerTodosLosElementosPorClase(nombreClase) {
    let elementos = document.getElementsByClassName(nombreClase);

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].parentNode.removeChild(elementos[i]);
    }
}


function existeElementoPorClase(nombreClase) {
    let elemento = document.body.contains(
        document.getElementsByClassName(nombreClase)[0]
    );

    return elemento;
}


function agregarCantidad(carta) {
    let cantidadCarta = parseInt($(`#cantidadRequerida${carta.id}`).text());
    cantidadCarta = cantidadCarta + 1;
    $(`#cantidadRequerida${carta.id}`).text(cantidadCarta);
}

function restarCantidad(carta) {
    let cantidadCarta = parseInt($(`#cantidadRequerida${carta.id}`).text());
    if (cantidadCarta > 0) {
        cantidadCarta = cantidadCarta - 1;
        $(`#cantidadRequerida${carta.id}`).text(cantidadCarta);
    }
}

function confirmarAgregados(carta) {
    let cantidadCarta = parseInt($(`#cantidadRequerida${carta.id}`).text());
    $(`#cantidadRequerida${carta.id}`).text(0);

    carrito = JSON.parse(localStorage.getItem("carritoCompras"));
    let flagIdEncontrado = false;

    for (const producto of carrito) {
        if (carta.id === producto.id) {

            producto.cantidadCarta = producto.cantidadCarta + cantidadCarta;
            flagIdEncontrado = true;
        }
    }

    if (!flagIdEncontrado) {
        carrito.push(new Producto(carta.id, carta.nombre, carta.coste, cantidadCarta));
    }

    localStorage.setItem("carritoCompras", JSON.stringify(carrito));
    actualizarCarrito();

}