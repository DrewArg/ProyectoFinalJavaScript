
class Carta {
    constructor(tipo, nombre, coste, id, imagen, efecto) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.coste = coste;
        this.id = id;
        this.imagen = imagen;
        this.efecto = efecto;
    }

}


usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

if (usuarioActivo !== null) {
    let usuario = new Usuario(usuarioActivo.nombre, usuarioActivo.contrasena);
    usuario.agregarCreditos(usuarioActivo.creditos);

    let titulo = document.getElementById("tituloCambiante");
    titulo.innerHTML = `${usuario.nombre}, tienes ${usuario.creditos} créditos disponibles.`;
}

$(`#btnRefresh`).on('click', actualizarPagina);

$(`#btnTipo`).on('click', filtrarTipo);

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

    const agregadoCarrito = [];

    if (carrito.length > 0) {
        for (const producto of carrito) {
            for (let i = 0; i < carrito.length; i++) {
                console.log(producto.id);
                console.log(carrito[i].id);
                console.log("");
                if (producto.id === carrito[i].id) {
                    carrito[i].cantidadCarta += producto.cantidadCarta;
                } else {
                    agregadoCarrito.push(new Producto(producto.id, producto.nombre, producto.precio, producto.cantidadCarta));
                }
            }

        }
    }

    agregadoCarrito.push(new Producto(carta.id, carta.nombre, carta.coste, cantidadCarta));

    localStorage.setItem("carritoCompras", JSON.stringify(agregadoCarrito));
    actualizarCarrito();

}

function actualizarPagina() {
    window.location.reload();
}
