
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

function actualizarPagina() {
    window.location.reload();
}
