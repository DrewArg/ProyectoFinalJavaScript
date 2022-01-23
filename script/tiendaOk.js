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

// let usuario = prompt("Ingresa tu nombre");
let creditos = 10;

let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", actualizarTipo);

let seleccion = document.getElementById("tipoCarta");

let tipo = seleccion.options[seleccion.selectedIndex].text;

function actualizarTipo(e) {
  tipo = seleccion.options[seleccion.selectedIndex].text;
  alert(tipo);
}
