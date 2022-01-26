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
  constructor(tipo, nombre, coste, id, imagen, efecto) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.coste = coste;
    this.id = id;
    this.imagen = imagen;
    this.efecto = efecto;
  }

  getTipo() {
    return this.tipo;
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

  getImagen() {
    return this.imagen;
  }

  getEfecto() {
    return this.efecto;
  }
}

const cartas = [];

cartas.push(
  new Carta(
    "Animal",
    "Lobo Gris",
    3,
    1,
    "loboGris.jpg",
    "Gana +1 de daño por cada Lobo Gris además de este en tu tablero."
  )
);
cartas.push(
  new Carta(
    "Animal",
    "Camaleón",
    3,
    2,
    "camaleon.jpg",
    "Puede tomar el ataque de un enemigo en reposo y sumarlo al suyo hasta el final del turno."
  )
);
cartas.push(
  new Carta(
    "Animal",
    "Tortuga Marina",
    3,
    3,
    "tortugaMarina.jpg",
    "Puede sacrificarse para evitar que el enemigo siga atacando este turno."
  )
);
cartas.push(new Carta("Animal", "Pez Payaso", 1, 5, "pezPayaso.jpg", ""));
cartas.push(
  new Carta(
    "Habilidad",
    "Coraza",
    2,
    6,
    "coraza.png",
    "Un animal pasa a ser indestructible por este turno."
  )
);
cartas.push(
  new Carta(
    "Habilidad",
    "Captura",
    3,
    7,
    "captura.jpg",
    "Evita que un enemigo pueda pasar a la línea de batalla por 2 turnos."
  )
);
cartas.push(
  new Carta(
    "Habilidad",
    "Aullido",
    2,
    8,
    "aullido.jpg",
    "Si tienes un Lobo Gris en juego, puedes jugar a otro desde tu mazo o tu cementerio sin pagar su coste."
  )
);
cartas.push(
  new Carta(
    "Habitat",
    "Alcantarilla",
    3,
    9,
    "alcantarilla.jpg",
    "Puedes revivir una rata por turno pagando su coste y ponerla en tu línea de reposo."
  )
);
cartas.push(
  new Carta(
    "Habitat",
    "Costa",
    6,
    10,
    "costa.jpg",
    "Si tienes un Tiburón Blanco en juego, puedes consumir 5 alimentos para activar su efecto una segunda vez este turno."
  )
);
cartas.push(new Carta("Alimento", "Alimento", 0, 11, "alimento.jpg", ""));

let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

if (usuarioActivo !== null) {
  let usuario = new Usuario(usuarioActivo.nombre, usuarioActivo.contrasena);
  usuario.agregarCreditos(usuarioActivo.creditos);

  let titulo = document.getElementById("tituloCambiante");
  titulo.innerHTML = `${usuario.getNombre()}, tienes ${usuario.getCreditos()} créditos disponibles.`;
}

for (const carta of cartas) {
  $(".carta").append(
    `<div class="carta__contorno${carta.getTipo()}" id="tipo${carta.getId()}">
                <div class="carta__superior">
                    <div class="carta__superior--nombre" id="nombreCarta${carta.getId()}">${carta.getNombre()}</div>
                    <div class="carta__superior--imagen" id="imagenCarta${carta.getId()}"><img src ="../img/${carta.getImagen()}"></div>
                </div>
                <div class="carta__inferior">
                    <div class="carta__inferior--efecto" id="efectoCarta${carta.getId()}">${carta.getEfecto()}</div>
                    <div class="carta__inferior--id" id="idCarta${carta.getId()}">[${carta.getId()}]</div>
                </div>

                <div class="carta__precio">
                  <button class="btnMenos" id="btnMenos${carta.getId()}">-</button>
                  <span class="cantidadRequerida" id="cantidadRequerida${carta.getId()}">0</span>
                  <button class="btnMas" id="btnMas${carta.getId()}">+</button>
                </div>
          </div>`
  );
}

let btnBuscarNombre = document.getElementById("btnNombre");
btnBuscarNombre.addEventListener("click", filtrarNombre);

$(`#btnRefresh`).click(actualizarPagina);

$(`#btnTipo`).click(filtrarTipo);

for (const carta of cartas) {
  $(`#btnMenos${carta.getId()}`).click(() => {
    restarCantidad(carta.getId());
  });
  $(`#btnMas${carta.getId()}`).click(() => {
    agregarCantidad(carta.getId());
  });
}

function agregarCantidad(idCarta) {
  let cantidadCarta = parseInt($(`#cantidadRequerida${idCarta}`).text());
  cantidadCarta = cantidadCarta + 1;
  $(`#cantidadRequerida${idCarta}`).text(cantidadCarta);
}

function restarCantidad(idCarta) {
  let cantidadCarta = parseInt($(`#cantidadRequerida${idCarta}`).text());
  if (cantidadCarta > 0) {
    cantidadCarta = cantidadCarta - 1;
    $(`#cantidadRequerida${idCarta}`).text(cantidadCarta);
  }
}

function filtrarNombre() {
  let cartaEncontrada = false;
  let cartaBuscada = $("#cartaBuscada").val();

  for (const carta of cartas) {
    let contornoCarta = $(`.carta__contorno${carta.getTipo()}`);

    if (cartaBuscada.toUpperCase() === carta.getNombre().toUpperCase()) {
      cartaEncontrada = true;
    } else {
      $(`#tipo${carta.getId()}`).remove();
    }
  }

  if (!cartaEncontrada) {
    $(`.filtro__nombre`).append(
      `<p class="mensajeError">No existe ninguna carta con ese nombre.</p>`
    );
  }
}
function filtrarTipo() {
  let tipoCarta = $(`#tipoCarta`).val();

  for (const cartaActual of cartas) {

    if (tipoCarta.toUpperCase() === cartaActual.getTipo().toUpperCase()) {
      
    } else {
     $(`#tipo${cartaActual.getId()}`).remove();
    }
  }
}

function actualizarPagina() {
  window.location.reload();
}
