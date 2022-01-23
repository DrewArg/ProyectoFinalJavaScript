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

localStorage.setItem("listaUsuarios",JSON.stringify(usuarios));

let usuarioActual = document.getElementById("logueoUsuario").value;

let btnIngreso = document.getElementById("btnIngreso");
btnIngreso.addEventListener("click", validarUsuario);

let btnCrearCuenta = document.getElementById("btnCrearCuenta");
btnCrearCuenta.addEventListener("click",crearUsuario)

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

function validarUsuario(e) {
  if (localStorage.getItem("usuario") !== null) {
    for (let i = 0; i < localStorage.length; i++) {}
  }
}

function crearUsuario(e,usuarioActual) {
    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    const listaNueva = [];

    const usuarioEncontrado = listaUsuarios.find(usuario=>usuario === usuarioActual);

    if(usuarioEncontrado !== undefined){
        alert("Usuario ya existente");
    }else{
        listaNueva.push(new Usuario(usuarioActual))
        alert("Usuario, " + usuarioActual + " agregado al sistema.")
        localStorage.setItem("listaUsuarios",JSON.stringify(listaNueva));
    }

}
