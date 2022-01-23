class Usuario {
  constructor(nombre) {
    this.nombre = nombre.toUpperCase();
    this.creditos = 10;
  }

  getNombre() {
    return this.nombre;
  }

  getCreditos() {
    return this.creditos;
  }

  descontarCredito(descuento) {
    creditos = creditos - descuento;
  }

  agregarCreditos(agregado) {
    creditos = creditos + agregado;
  }
}

const usuarios = [];
const baseDatosUsuarios = localStorage.getItem("listaUsuarios");

if (baseDatosUsuarios === null || baseDatosUsuarios.length === 0) {
  localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
}

let btnIngreso = document.getElementById("btnIngreso");
btnIngreso.addEventListener("click", validarUsuario);

let btnCrearCuenta = document.getElementById("btnCrearCuenta");
btnCrearCuenta.addEventListener("click", crearUsuario);

let btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", recorrerLocalStorage);

function reiniciarLocalStorage(e) {
  localStorage.clear();
}

function recorrerLocalStorage(e) {
  for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
  }
}

function crearUsuario() {
  let usuarioActual = document.getElementById("nombreUsuario").value;
  let contrasenaActual = document.getElementById("contrasena").value;

  const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
  const listaNueva = [];

  const usuarioEncontrado = listaUsuarios.find(
    (usuario) => usuario.nombre === usuarioActual.toUpperCase()
  );

  if (usuarioEncontrado !== undefined) {
    alert("Usuario ya existente.");
  } else {
    for (const usuario of listaUsuarios) {
      listaNueva.push(usuario);
    }
    listaNueva.push(new Usuario(usuarioActual));
    alert("Usuario " + usuarioActual + " agregado al sistema.");
    localStorage.setItem("listaUsuarios", JSON.stringify(listaNueva));
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
  }
}

function validarUsuario() {
  let existeError = document.body.contains(document.getElementsByClassName("login__mensajeError")[0]);

  console.log(existeError);
 
  if (existeError) {
    let errorAnterior = document.getElementsByClassName("login__mensajeError");
    errorAnterior[0].parentNode.removeChild(errorAnterior[0]);
  }

  let usuarioActual = document.getElementById("nombreUsuario").value;
  let contrasenaActual = document.getElementById("contrasena").value;

  const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));

  const usuarioEncontrado = listaUsuarios.find(
    (usuario) => usuario.nombre === usuarioActual.toUpperCase()
  );

  if (usuarioEncontrado !== undefined) {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
    alert("Bienvenido " + usuarioEncontrado.nombre);
    alert(
      "Recuerda que te quedan: " + usuarioEncontrado.creditos + " créditos"
    );
  } else {
    let login = document.getElementsByClassName("login")[0];
    let mensajeError = document.createElement("div");
    mensajeError.innerHTML = `<p class="login__mensajeError">Usuario y/o Contraseña incorrectos.</p>`;

    login.appendChild(mensajeError);
  }
}
