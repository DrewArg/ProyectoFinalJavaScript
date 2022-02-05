
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

if (usuarioActivo !== null) {
    let usuario = new Usuario(usuarioActivo.nombre, usuarioActivo.contrasena);
    usuario.agregarCreditos(usuarioActivo.creditos);

    let titulo = document.getElementById("tituloCambiante");
    titulo.innerHTML = `${usuario.nombre}, tienes ${usuario.creditos} créditos disponibles.`;
}



usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));


$(`#btnRefresh`).on('click', actualizarPagina);

$(`#btnTipo`).on('click', filtrarTipo);

for (const carta of cartas) {
    $(`#btnMenos${carta.id}`).on(() => {
        restarCantidad(carta.id);
    });
    $(`#btnMas${carta.id}`).on(() => {
        agregarCantidad(carta.id);
    });
}

function agregarCantidad(idCarta) {
    let cantidadCarta = parseInt($(`#cantidadRequerida${idCarta}`).text());
    cantidadCarta = cantidadCarta + 1;
    $(`#cantidadRequerida${idCarta}`).text(cantidadCarta);
}

function restarCantidad(idCarta) {
    let cantidadCarta = parseInt($(`#cantidadRequerida${idCarta}`).text());
    if (cantidadCarta > 0) {
        cantidadCarta = cantidadCarta - 1;
        $(`#cantidadRequerida${idCarta}`).text(cantidadCarta);
    }
}

function actualizarPagina() {
    window.location.reload();
}
