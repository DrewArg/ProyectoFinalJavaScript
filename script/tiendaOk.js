//CLASES

class Producto {
  constructor(tipo, nombre, coste, id) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.coste = coste;
    this.id = id;
  }

  getNombre() {
    return this.nombre;
  }

  getCoste() {
    return this.coste;
  }
}

// // let usuario = prompt("Ingresa tu nombre");
// let creditos = 10;

class Usuario {
  constructor(nombre) {
    this.nombre = nombre.toUpperCase();
    this.creditos = 10;
  }

  descontarCredito(descuento) {
    this.creditos = this.creditos - descuento;
  }

  agregarCreditos(agregado) {
    this.creditos = this.creditos + agregado;
  }
}

const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

const user = new Usuario(usuarioActivo.nombre);

actualizarContenedor();

function actualizarContenedor(){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>Usuario: ${user.nombre}</h3>
                            <h4>Créditos: ${user.creditos}</h4>`;
    
    let seleccionarTienda = document.getElementById("agregarHtml");
    document.body.appendChild(contenedor);
}


let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", cobrarCartaComun);

let seleccion = document.getElementById("tipoCarta");

let tipo = seleccion.options[seleccion.selectedIndex].text;

// function actualizarTipo(e) {
//   tipo = seleccion.options[seleccion.selectedIndex].text;
//   alert(tipo);
// }

function cobrarCartaComun(){
user.descontarCredito(2);
actualizarContenedor();
}