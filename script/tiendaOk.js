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
  constructor(tipo, nombre, coste, id,imagen,efecto) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.coste = coste;
    this.id = id;
    this.imagen = imagen;
    this.efecto = efecto;
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

  getImagen(){
    return this.imagen;
  }

  getEfecto(){
    return this.efecto;
  }
}

const cartas = [];

cartas.push(new Carta("Animal", "Lobo Gris", 3, 1,"loboGris.jpg","Gana +1 de daño por cada Lobo Gris además de este en tu tablero."));
cartas.push(new Carta("Animal", "Camaleón", 3, 2,"camaleon.jpg","Puede tomar el ataque de un enemigo en reposo y sumarlo al suyo hasta el final del turno."));
cartas.push(new Carta("Animal", "Tortuga Marina", 3, 3,"tortugaMarina.jpg","Puede sacrificarse para evitar que el enemigo siga atacando este turno."));
cartas.push(new Carta("Animal", "Pez Payaso", 1, 5,"pezPayaso.jpg",""));
cartas.push(new Carta("Habilidad", "Coraza", 2, 6,"coraza.png","Un animal pasa a ser indestructible por este turno."));
cartas.push(new Carta("Habilidad", "Captura", 3, 7,"captura.jpg","Evita que un enemigo pueda pasar a la línea de batalla por 2 turnos."));
cartas.push(new Carta("Habilidada", "Aullido", 2, 8,"aullido.jpg","Si tienes un Lobo Gris en juego, puedes jugar a otro desde tu mazo o tu cementerio sin pagar su coste."));
cartas.push(new Carta("Hábitat", "Alcantarilla", 3, 9,"alcantarilla.jpg","Puedes revivir una rata por turno pagando su coste y ponerla en tu línea de reposo."));
cartas.push(new Carta("Hábitat", "Costa", 6, 10,"costa.jpg","Si tienes un Tiburón Blanco en juego, puedes consumir 5 alimentos para activar su efecto una segunda vez este turno."));
cartas.push(new Carta("Alimento", "Alimento", 0, 11,"alimento.jpg",""));

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

      let imgCarta = document.getElementsByClassName("carta__imagen")[0];
      imgCarta.innerHTML = `<img src ="../img/${carta.getImagen()}">`

      let nombreCarta = document.getElementsByClassName("carta__nombre")[0];
      nombreCarta.innerHTML = `${carta.getNombre()}`;
    }
  }
}
