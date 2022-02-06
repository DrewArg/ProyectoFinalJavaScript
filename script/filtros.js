const cartas = [];

const JSonCartas = "../cartas/cartas.json";

(async () => {
    await $.getJSON(JSonCartas, async (respuesta, estado) => {
        if (estado === "success") {
            let cartasJson = respuesta;
            for (const carta of cartasJson) {
                cartas.push(carta);
            }

        }
    });
    mostrarCartas(cartas);
})();


let btnBuscarNombre = document.getElementById("btnNombre");
btnBuscarNombre.addEventListener("click", filtrarNombre);

function filtrarNombre() {
    let cartaBuscada = $("#cartaBuscada").val();

    const filtroNombre = cartas.filter(x => x.nombre.toUpperCase().includes(cartaBuscada.toUpperCase()));

    if (filtroNombre.length === 0) {
        $(`.filtro__nombre`).append(
            `<p class="mensajeError">No existe ninguna carta con ese nombre.</p>`
        );
    }
    mostrarCartas(filtroNombre);
}

function filtrarTipo() {
    let tipoCarta = $(`#tipoCarta`).val();

    for (const cartaActual of cartas) {
        if (tipoCarta.toUpperCase() === cartaActual.tipo.toUpperCase()) {
        } else {
            $(`#tipo${cartaActual.id}`).remove();
        }
    }
}

function mostrarCartas(cartas) {

    $(".carta").children().remove();

    for (const carta of cartas) {
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
                    <span>$ unitario: ${carta.coste}</span>
                      <button class="btnMenos" id="btnMenos${carta.id}">-</button>
                      <span class="cantidadRequerida" id="cantidadRequerida${carta.id}">0</span>
                      <button class="btnMas" id="btnMas${carta.id}">+</button>
                      <button class="btnCheck" id="btnCheck${carta.id}">✓</button>
                    </div>
              </div>`
        );
    }

    for (const carta of cartas) {
        $(`#btnMenos${carta.id}`).on("click", () => {
            restarCantidad(carta.id);
        });
        $(`#btnMas${carta.id}`).on("click", () => {
            agregarCantidad(carta);
        });

        $(`#btnCheck${carta.id}`).on("click", () => {
            confirmarAgregados(carta);
        })
    }

}

