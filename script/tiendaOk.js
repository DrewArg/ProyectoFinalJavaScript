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
class Carta {
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

  getId() {
    return this.id;
  }
}

const cartas = [];

cartas.push(new Carta("Animal", "Lobo Gris", 3, 1));
cartas.push(new Carta("Animal", "Camaleón", 3, 2));
cartas.push(new Carta("Animal", "Tortuga Marina", 3, 3));
cartas.push(new Carta("Animal", "Pez Payaso", 1, 5));
cartas.push(new Carta("Habilidad", "Coraza", 2, 6));
cartas.push(new Carta("Habilidad", "Captura", 3, 7));
cartas.push(new Carta("Habilidada", "Aullido", 2, 8));
cartas.push(new Carta("Hábitat", "Alcantarilla", 3, 9));
cartas.push(new Carta("Hábitat", "Costa", 6, 10));
cartas.push(new Carta("Alimento", "Alimento", 0, 11));

let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

if (usuarioActivo !== null) {
  let usuario = new Usuario(usuarioActivo.nombre, usuarioActivo.contrasena);
  usuario.agregarCreditos(usuarioActivo.creditos);

  let titulo = document.getElementById("tituloCambiante");
  titulo.innerHTML = `${usuario.getNombre()}, tienes ${usuario.getCreditos()} créditos disponibles.`;
}

let btnBuscarNombre = document.getElementById("btnNombre");
btnBuscarNombre.addEventListener("click", filtrarNombre);

function filtrarNombre() {
  let cartaBuscada = document.getElementById("cartaBuscada").value;

  for (const carta of cartas) {
    if (cartaBuscada.toUpperCase() === (carta.getNombre()).toUpperCase()) {
      let idCarta = document.getElementsByClassName("carta__id")[0];
      idCarta.innerHTML = `[${carta.getId()}]`;

      let nombreCarta = document.getElementsByClassName("carta__nombre")[0];
      nombreCarta.innerHTML = `${carta.getNombre()}`;
    }
  }
}
