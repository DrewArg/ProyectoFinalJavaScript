let btnBuscarNombre = document.getElementById("btnNombre");
btnBuscarNombre.addEventListener("click", filtrarNombre);

function filtrarNombre() {
    let cartaEncontrada = false;
    let cartaBuscada = $("#cartaBuscada").val();

    for (const carta of cartas) {
        let contornoCarta = $(`.carta__contorno${carta.tipo}`);

        if (cartaBuscada.toUpperCase() === carta.nombre.toUpperCase()) {
            cartaEncontrada = true;
        } else {
            $(`#tipo${carta.id}`).remove();
        }
    }

    if (!cartaEncontrada) {
        $(`.filtro__nombre`).append(
            `<p class="mensajeError">No existe ninguna carta con ese nombre.</p>`
        );
    }
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