

usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

if (usuarioActivo !== null) {
    let usuario = new Usuario(usuarioActivo.nombre, usuarioActivo.contrasena);
    usuario.agregarCreditos(usuarioActivo.creditos);

    let titulo = document.getElementById("tituloCambiante");
    titulo.innerHTML = `${usuario.nombre}, tienes ${usuario.creditos} créditos disponibles.`;
}

$(`#btnRefresh`).on('click', reiniciarFiltros);

$(`#btnTipo`).on('click', filtrarTipo);

function reiniciarFiltros() {
    $(`#tipoCarta`).prop('selectedIndex', 0);
    filtrarTipo();

    $(`#cartaBuscada`).val('');
    filtrarNombre();
}
    