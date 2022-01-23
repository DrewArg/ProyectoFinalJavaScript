//CLASES
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

let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

if(usuarioActivo !== null){
  let usuario = new Usuario(usuarioActivo.nombre,usuarioActivo.contrasena);
  usuario.agregarCreditos(usuarioActivo.creditos);

  let titulo = document.getElementById("tituloCambiante");
  titulo.innerHTML=`${usuario.getNombre()}, tienes ${usuario.getCreditos()} créditos disponibles.`;


}
//   let seleccionarTienda = document.getElementById("agregarHtml");
//   document.body.appendChild(contenedor);
// }

// let btnBuscar = document.getElementById("btnBuscar");
// btnBuscar.addEventListener("click", cobrarCartaComun);

// let seleccion = document.getElementById("tipoCarta");

// let tipo = seleccion.options[seleccion.selectedIndex].text;

// // function actualizarTipo(e) {
// //   tipo = seleccion.options[seleccion.selectedIndex].text;
// //   alert(tipo);
// // }

// function cobrarCartaComun() {
//   user.descontarCredito(2);
//   actualizarContenedor();
// }
