class Usuario {
    constructor(nombre, contrasena) {
        this.nombre = nombre.toUpperCase();
        this.contrasena = contrasena;
        this.creditos = 0;
    }

    descontarCredito(descuento) {
        this.creditos = this.creditos - descuento;
    }

    agregarCreditos(agregado) {
        this.creditos = this.creditos + agregado;
    }
}

document.querySelector("#showLogin").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .closeBtn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});

const usuarios = [];
const baseDatosUsuarios = localStorage.getItem("listaUsuarios");
let usuarioLogeado = null;

if (baseDatosUsuarios === null || baseDatosUsuarios.length === 0) {
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
}

let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
if (usuarioActivo !== null) {
    let usuario = new Usuario(usuarioActivo.nombre, usuarioActivo.contrasena);
    usuario.agregarCreditos(usuarioActivo.creditos);

    mostrarMensajeLoginExitoso(usuario);
} else {
    let btnIngreso = document.getElementById("btnIngreso");
    btnIngreso.addEventListener("click", validarUsuario);

    let btnCrearCuenta = document.getElementById("btnUsuarioNuevo");
    btnCrearCuenta.addEventListener("click", crearUsuario);
}


function crearUsuario() {
    if (existeElementoPorClase("mensajeError")) {
        removerElementoPorClase("mensajeError");
    }

    let usuarioActual = document
        .getElementById("nombreUsuario")
        .value.toUpperCase();
    let contrasenaActual = document.getElementById("contrasena").value;

    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    const listaValidada = [];

    for (const objeto of listaUsuarios) {
        let usuario = new Usuario(objeto.nombre, objeto.contrasena);
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
        let nuevoUsuario = new Usuario(usuarioActual, contrasenaActual);
        nuevoUsuario.agregarCreditos(10);

        listaValidada.push(nuevoUsuario);

        localStorage.setItem("listaUsuarios", JSON.stringify(listaValidada));
        localStorage.setItem("usuarioActivo", JSON.stringify(nuevoUsuario));

        mostrarMensajeLoginExitoso(nuevoUsuario);
    } else {
        let login = document.getElementsByClassName("login")[0];
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

function existeElementoPorClase(nombreClase) {
    let elemento = document.body.contains(
        document.getElementsByClassName(nombreClase)[0]
    );

    return elemento;
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