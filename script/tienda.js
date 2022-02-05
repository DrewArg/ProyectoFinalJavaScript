
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


const cartas = [];

const urlJSONCartas = "../cartas/cartas.json";

$.getJSON(urlJSONCartas, (respuesta, estado) => {
    if (estado === "success") {

        let cartasJson = respuesta;
        console.log("json:" + cartasJson.length);
        for (const carta of cartasJson) {
            cartas.push(carta);

        }

        mostrarCartas();
    }


});

usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

function mostrarCartas() {
    for (const carta of cartas) {
        console.log(carta.nombre);
        console.log(carta.id);
        $(".carta").append(
            `<div class="carta__contorno${carta.tipo}" id="tipo${carta.id}">
                    <div class="carta__superior">
                        <div class="carta__superior--tipo" id="tipoCarta${carta.id}">[${carta.tipo}]</div>
                    </div>
                    <div class="carta__cartaReal">
                        <div class="carta__medio">
                            
                            <div class="carta__medio--nombre" id="nombreCarta${carta.id}">${carta.nombre}</div>
                            <div class="carta__medio--imagen" id="imagenCarta${carta.id}"><img src ="../img/${carta.imagen}"></div>
                        </div>
                        <div class="carta__inferior">
                            <div class="carta__inferior--efecto" id="efectoCarta${carta.id}">${carta.efecto}</div>
                    </div>                   
                    <div class="carta__precio">
                      <button class="btnMenos" id="btnMenos${carta.id}">-</button>
                      <span class="cantidadRequerida" id="cantidadRequerida${carta.id}">0</span>
                      <button class="btnMas" id="btnMas${carta.id}">+</button>
                    </div>
              </div>`
        );
    }
}


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
