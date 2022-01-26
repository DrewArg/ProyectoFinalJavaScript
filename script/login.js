class Usuario {
  constructor(nombre, contrasena) {
    this.nombre = nombre.toUpperCase();
    this.contrasena = contrasena;
    this.creditos = 0;
  }

  getNombre() {
    return this.nombre;
  }

  getContrasena() {
    return this.contrasena;
  }

  getCreditos() {
    return this.creditos;
  }

  descontarCredito(descuento) {
    this.creditos = this.creditos - descuento;
  }

  agregarCreditos(agregado) {
    this.creditos = this.creditos + agregado;
  }
}

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

  let btnCrearCuenta = document.getElementById("btnCrearCuenta");
  btnCrearCuenta.addEventListener("click", crearUsuario);

  let btnVerificar = document.getElementById("btnVerificar");
  btnVerificar.addEventListener("click", recorrerLocalStorage);

  let btnReiniciar = document.getElementById("btnReiniciar");
  btnReiniciar.addEventListener("click", reiniciarLocalStorage);
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
    if (usuario.getNombre() === usuarioActual) {
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

  if (listaValidada.length > 0) {
    for (const usuario of listaValidada) {
      if (
        usuario.getNombre() === usuarioActual &&
        usuario.getContrasena() === contrasenaActual
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
      let login = document.getElementsByClassName("login")[0];
      let mensajeError = document.createElement("div");
      mensajeError.innerHTML = `<p class="mensajeError">Usuario y/o Contraseña incorrectos.</p>`;

      login.appendChild(mensajeError);
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

function mostrarMensajeLoginExitoso(usuarioIngresado) {
  removerTodosLosElementosPorClase("login");

  let titulo = document.getElementsByClassName("titulo")[0];

  let mensajeBienvenida = document.createElement("div");

  mensajeBienvenida.innerHTML = `<h3 class="titulo__bienvenida">¡Bienvenid@ ${usuarioIngresado.getNombre()}!`;
  titulo.appendChild(mensajeBienvenida);

  let mensajeCreditos = document.createElement("div");

  mensajeCreditos.innerHTML = `<h3 class = "titulo__creditos">Créditos disponibles: ${usuarioIngresado.getCreditos()}`;

  titulo.appendChild(mensajeCreditos);

  let btnAccesoTienda = document.createElement("div");

  btnAccesoTienda.innerHTML = `<a href="./pages/tiendaOk.html"><button class = "titulo__btnTienda">Tienda</button></a>`;

  titulo.appendChild(btnAccesoTienda);

  let btnSalir = document.createElement("div");
  btnSalir.innerHTML = `<button class = "titulo__btnSalir">Salir</button>`;

  titulo.appendChild(btnSalir);

  btnSalir.addEventListener("click", deslogueo);
}

function deslogueo() {
  localStorage.removeItem("usuarioActivo");
  window.location.reload();
}

function reiniciarLocalStorage() {
  localStorage.clear();
}

function recorrerLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
  }
}
