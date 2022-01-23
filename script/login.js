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

let btnIngreso = document.getElementById("btnIngreso");
btnIngreso.addEventListener("click", validarUsuario);

let btnCrearCuenta = document.getElementById("btnCrearCuenta");
btnCrearCuenta.addEventListener("click", crearUsuario);

let btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", recorrerLocalStorage);

let btnReiniciar = document.getElementById("btnReiniciar");
btnReiniciar.addEventListener("click", reiniciarLocalStorage);

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
    listaNueva.push(new Usuario(usuarioActual, contrasenaActual));
    alert("Usuario " + usuarioActual + " agregado al sistema.");
    localStorage.setItem("listaUsuarios", JSON.stringify(listaNueva));
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
  }
}

function validarUsuario() {
  if (existeElementoPorClase("login__mensajeError")) {
    removerElementoPorClase("login__mensajeError");
  }

  let usuarioActual = document
    .getElementById("nombreUsuario")
    .value.toUpperCase();
  let contrasenaActual = document.getElementById("contrasena").value;

  const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
  const listaValidada = [];

  for (const objeto of listaUsuarios) {
    let usuario = new Usuario(objeto.nombre,objeto.contrasena);
    usuario.agregarCreditos(objeto.creditos);
    listaValidada.push(usuario);
  }

  if (listaValidada.length > 0) {
    for (const usuario of listaValidada) {
      console.log("nombre usuario: " + usuario.getNombre());
      console.log("contrasena usuario: " + usuario.getContrasena());
      console.log("");
      console.log("usuario actual: " + usuarioActual);
      console.log("contraseña actual: " + contrasenaActual);
      console.log("");
      if (
        usuario.getNombre() === usuarioActual &&
        usuario.getContrasena() === contrasenaActual
      ) {
        //usuario validado
        usuarioLogeado = usuario;
        alert("Usuario: " + usuarioLogeado.getNombre());
        alert("Contraseña: " + usuarioLogeado.getContrasena());
        alert("Créditos: " + usuarioLogeado.getCreditos());
        break;
      }else{
        usuarioLogeado = null;
      }
    }

    if(usuarioLogeado === null){
      let login = document.getElementsByClassName("login")[0];
      let mensajeError = document.createElement("div");
      mensajeError.innerHTML = `<p class="login__mensajeError">Usuario y/o Contraseña incorrectos.</p>`;
  
      login.appendChild(mensajeError);
    }
    
  }

  // const usuarioEncontrado = listaUsuarios.find(
  //   (usuario) => usuario.nombre === usuarioActual.toUpperCase()
  // );

  // if (usuarioEncontrado !== undefined) {
  //   localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
  //   alert("Bienvenido " + usuarioEncontrado.nombre);
  //   alert(
  //     "Recuerda que te quedan: " + usuarioEncontrado.creditos + " créditos"
  //   );
  // } else {
  //   let login = document.getElementsByClassName("login")[0];
  //   let mensajeError = document.createElement("div");
  //   mensajeError.innerHTML = `<p class="login__mensajeError">Usuario y/o Contraseña incorrectos.</p>`;

  //   login.appendChild(mensajeError);
  // }
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
