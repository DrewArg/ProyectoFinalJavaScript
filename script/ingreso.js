
document.querySelector("#showLogin").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");

    if (existeElementoPorClase("mensajeError")) {
        removerElementoPorClase("mensajeError");
    }
    $('.body').css("background-color", "blur(2px)");

});

document.querySelector(".popup .closeBtn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
    if ($("#recordarUsuario") !== undefined) {
        resetearLogin();
    }
});

const usuarios = [];
const baseDatosUsuarios = localStorage.getItem("listaUsuarios");
let usuarioLogeado = null;

if (baseDatosUsuarios === null || baseDatosUsuarios.length === 0) {
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
}

let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
if (usuarioActivo !== null) {

    let usuario = new Usuario(usuarioActivo.nombre, usuarioActivo.contrasena, usuarioActivo.recordar);
    usuario.agregarCreditos(usuarioActivo.creditos);

    mostrarMensajeLoginExitoso(usuario);


} else {
    let btnIngreso = document.getElementById("btnIngreso");
    btnIngreso.addEventListener("click", validarUsuario);
    localStorage.setItem("carritoCompras", JSON.stringify([]));
}

function crearUsuario() {
    if (existeElementoPorClase("mensajeError")) {
        removerElementoPorClase("mensajeError");
    }

    let usuarioActual = document
        .getElementById("nombreUsuario")
        .value.toUpperCase();
    let contrasenaActual = document.getElementById("contrasena").value;

    let recordarUsuario = $('#recordar:checked').val();

    if (recordarUsuario === 'on') {
        recordarUsuario = true;
    } else {
        recordarUsuario = false;
    }

    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    const listaValidada = [];

    for (const objeto of listaUsuarios) {
        let usuario = new Usuario(objeto.nombre, objeto.contrasena, objeto.recordar);
        usuario.agregarCreditos(objeto.creditos);
        listaValidada.push(usuario);
    }

    let usuarioDisponible = true;
    for (const usuario of listaValidada) {
        if (usuario.nombre === usuarioActual) {
            usuarioDisponible = false;
            break;
        }
    }

    if (usuarioDisponible) {
        let nuevoUsuario = new Usuario(usuarioActual, contrasenaActual, recordarUsuario);
        nuevoUsuario.agregarCreditos(10);

        listaValidada.push(nuevoUsuario);

        localStorage.setItem("listaUsuarios", JSON.stringify(listaValidada));
        localStorage.setItem("usuarioActivo", JSON.stringify(nuevoUsuario));

        mostrarMensajeLoginExitoso(nuevoUsuario);
        removerElementoPorClase("popup");
    } else {
        let login = document.getElementsByClassName("popup")[0];
        let mensajeError = document.createElement("div");
        mensajeError.innerHTML = `<p class="mensajeError">Usuario ya existente.</p>`;

        login.appendChild(mensajeError);
    }
}


function validarUsuario() {
    if (existeElementoPorClase("mensajeError")) {
        removerElementoPorClase("mensajeError");
    }

    let usuarioActual = document.getElementById("nombreUsuario").value.toUpperCase();

    let contrasenaActual = document.getElementById("contrasena").value;

    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    const listaValidada = [];

    for (const objeto of listaUsuarios) {
        let usuario = new Usuario(objeto.nombre, objeto.contrasena);
        usuario.agregarCreditos(objeto.creditos);
        listaValidada.push(usuario);
    }

    if (listaValidada.length > 0) {
        for (const usuario of listaValidada) {
            if (
                usuario.nombre === usuarioActual &&
                usuario.contrasena === contrasenaActual
            ) {
                //usuario validado
                usuarioLogeado = usuario;

                localStorage.setItem("usuarioActivo", JSON.stringify(usuarioLogeado));

                if (existeElementoPorClase("popup")) {
                    removerElementoPorClase("popup");
                    removerElementoPorClase("center");
                }

                mostrarMensajeLoginExitoso(usuarioLogeado);

                break;
            } else {
                usuarioLogeado = null;
            }
        }

        if (usuarioLogeado === null) {
            let popup = document.getElementsByClassName("popup")[0];
            let mensajeError = document.createElement("div");
            mensajeError.innerHTML = `<p class="mensajeError">Usuario y/o Contraseña incorrectos.</p>`;

            popup.appendChild(mensajeError);
        }
    }
}


function mostrarMensajeLoginExitoso(usuarioIngresado) {
    removerTodosLosElementosPorClase("center");

    let titulo = document.getElementsByClassName("titulo")[0];

    if (titulo !== undefined) {
        let contenedorMensaje = document.createElement("div");
        contenedorMensaje.className = "titulo__contenedorMensaje";

        titulo.appendChild(contenedorMensaje);

        let mensajeBienvenida = document.createElement("div");

        mensajeBienvenida.innerHTML = `<h3 class="titulo__bienvenida">¡Bienvenid@ ${usuarioIngresado.nombre}!`;
        contenedorMensaje.appendChild(mensajeBienvenida);

        let mensajeCreditos = document.createElement("div");

        mensajeCreditos.innerHTML = `<h3 class = "titulo__creditos">Créditos disponibles: ${usuarioIngresado.creditos}`;

        contenedorMensaje.appendChild(mensajeCreditos);

        let botonesContenedorMensaje = document.createElement("div");
        botonesContenedorMensaje.className = "titulo__contenedorMensaje--botones"
        contenedorMensaje.appendChild(botonesContenedorMensaje);

        let btnAccesoTienda = document.createElement("div");

        btnAccesoTienda.innerHTML = `<a href="./pages/tienda.html"><button class = "titulo__btnTienda">Tienda</button></a>`;

        botonesContenedorMensaje.appendChild(btnAccesoTienda);

        let btnSalir = document.createElement("div");
        btnSalir.innerHTML = `<button class = "titulo__btnSalir">Salir</button>`;

        botonesContenedorMensaje.appendChild(btnSalir);

        btnSalir.addEventListener("click", deslogueo);
    }
}

function recordarContrasena() {
    if (existeElementoPorClase("mensajeError")) {
        removerElementoPorClase("mensajeError");
    }

    if (existeElementoPorClase("mensajePositivo")) {
        removerElementoPorClase("mensajePositivo");
    }

    $("#form").empty();

    let h2 = "<h2>Recordar Contraseña</h2>";
    let recordarUsuario = '<div class="form__element"><label for="text"> Usuario</label> <input type="text" id="recordarUsuario" placeholder="Ingresa tu usuario"></div>';
    let botones = '<div class="form__footer"> <div class="form__element"><a href="#" onclick="buscarContrasena()">Buscar</a></div><div class="form__element"><a href="#" onclick="resetearLogin()">Volver</a></div></div>';

    $("#form").append(h2);
    $("#form").append(recordarUsuario);
    $("#form").append(botones);
}

function buscarContrasena() {
    if (existeElementoPorClase("mensajeError")) {
        removerElementoPorClase("mensajeError");
    }

    if (existeElementoPorClase("mensajePositivo")) {
        removerElementoPorClase("mensajePositivo");
    }
    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));


    let usuarioARecordar = document
        .getElementById("recordarUsuario")
        .value.toUpperCase();

    let flagUsuarioEncontrado = false;

    for (const usuario of listaUsuarios) {
        if (usuario.nombre === usuarioARecordar) {
            let contrasenaEncontrada = `<div class="mensajePositivo" id="contrasenaEncontrada">Como actualmente esto es una simulación, te dejaremos tu contraseña aquí: "${usuario.contrasena}", anotala y guardala.</div>`;
            $("#form").append(contrasenaEncontrada);
            flagUsuarioEncontrado = true;
        }
    }

    if (!flagUsuarioEncontrado) {
        let contrasenaNoEncontrada = `<div class="mensajeError">Tu usuario no existe en el sistema.</div>`;
        $("#form").append(contrasenaNoEncontrada);
    }

    if ($("#contrasenaEncontrada") === undefined || listaUsuarios.length === 0) {
        $("#form").append(contrasenaNoEncontrada);
    }
}

function resetearLogin() {
    $("#form").empty();

    let h2 = "<h2>Ingresa</h2>";
    let nombreUsuario = '<div class="form__element"><label for="text"> Usuario</label> <input type="text" id="nombreUsuario" placeholder="Ingresa tu usuario"></div>';
    let contrasena = '<div class="form__element"><label for="password"> Contraseña</label> <input type="password" id="contrasena" placeholder="Ingresa tu contraseña"></div>';
    let checkbox = '<div clas="form__element"><input type="checkbox" id="recordar"><label for="recordar">Recordar</label></div>';
    let botonIngreso = '<div class="form__element">    <button class="btnIngreso" id="btnIngreso">Ingresar</button></div>';
    let formFooter = '<div class="form__footer"><div class="form__element">    <a href="#" onclick="recordarContrasena()">Olvidé mi contraseña</a></div>   <div class="form__element"><a href="#" onclick="crearUsuario()">Crear Usuario</a> </div></div>';

    $("#form").append(h2);
    $("#form").append(nombreUsuario);
    $("#form").append(contrasena);
    $("#form").append(checkbox);
    $("#form").append(botonIngreso);
    $("#form").append(formFooter);

    $("#btnIngreso").on("click", validarUsuario);
}
