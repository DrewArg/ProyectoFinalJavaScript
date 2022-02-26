const cartas = [];

const JSonCartas = "../JSON/cartas.json";

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


$(`#btnRefresh`).on('click', reiniciarFiltros);

$(`#btnTipo`).on('click', filtrarTipo);

function reiniciarFiltros() {
    $(`#tipoCarta`).prop('selectedIndex', 0);
    filtrarTipo();

    $(`#cartaBuscada`).val('');
    filtrarNombre();
}


function filtrarNombre() {
    mostrarCartas(cartas);
    if (existeElementoPorClase("mensajeError")) {
        removerElementoPorClase("mensajeError");
    }
    let cartaBuscada = $("#cartaBuscada").val();

    const filtroNombre = cartas.filter(x => x.nombre.toUpperCase().includes(cartaBuscada.toUpperCase()));

    if (filtroNombre.length === 0) {
        $(`.filtro__nombre`).append(
            `<p class="mensajeError">No existe ninguna carta con ese nombre.</p>`
        );
    } else {
        mostrarCartas(filtroNombre);
    }

}

function filtrarTipo() {
    if (existeElementoPorClase("mensajeError")) {
        removerElementoPorClase("mensajeError");
    }
    $("#cartaBuscada").val('');
    mostrarCartas(cartas);
    let tipoCarta = $(`#tipoCarta`).val();

    if (tipoCarta !== 'Todos') {
        for (const cartaActual of cartas) {
            if (tipoCarta.toUpperCase() === cartaActual.tipo.toUpperCase()) {
            } else {
                $(`#tipo${cartaActual.id}`).remove();
            }
        }
    }
}

function mostrarCartas(cartas) {

    $(".carta").children().remove();

    for (const carta of cartas) {
        $(".carta").append(
            `<div class="carta__contorno${carta.tipo}" id="tipo${carta.id}">
            <div class = "linkCarta" id="linkCarta${carta.id}"> <div class="carta__superior">
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
                    </div>    
                    </div>         
                    <div class="carta__precio">
                    <span>$: ${carta.coste}</span>
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
            restarCantidad(carta);
        });
        $(`#btnMas${carta.id}`).on("click", () => {
            agregarCantidad(carta);
        });

        $(`#btnCheck${carta.id}`).on("click", () => {
            confirmarAgregados(carta);
        });

        $(function () {
            $(`#linkCarta${carta.id}`).on("click", () => {
                let cartaInspeccionada = new Carta(carta.tipo, carta.nombre, carta.coste, carta.dano, carta.id, carta.imagen, carta.efecto);

                localStorage.setItem("cartaInspeccionada", JSON.stringify(cartaInspeccionada));

                window.location.href = "../pages/informacionCarta.html"
            })
        });
    }
}
