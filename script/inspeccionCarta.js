let cartaAVer = JSON.parse(localStorage.getItem("cartaInspeccionada"));

document.title = cartaAVer.nombre;

$(".informacionCarta").children().remove();

$(".informacionCarta").append(`<div class="carta__contorno${cartaAVer.tipo}" id="tipo${cartaAVer.id}">
 <div class="carta__superior">
            <div class="carta__superior--tipo" id="tipoCarta${cartaAVer.id}">[${cartaAVer.tipo}]</div>
        </div>
        <div class="carta__cartaReal">
            <div class="carta__medio">
                
                <div class="carta__medio--nombre" id="nombreCarta${cartaAVer.id}">${cartaAVer.nombre}</div>
                <div class="carta__medio--imagen" id="imagenCarta${cartaAVer.id}"><img src ="../img/${cartaAVer.imagen}"></div>
            </div>
            <div class="carta__inferior">
                <div class="carta__inferior--efecto" id="efectoCarta${cartaAVer.id}">${cartaAVer.efecto}</div>
        </div>              
        <div class="carta__precio">
        <span>$: ${cartaAVer.coste}</span>
          <button class="btnMenos" id="btnMenos${cartaAVer.id}">-</button>
          <span class="cantidadRequerida" id="cantidadRequerida${cartaAVer.id}">0</span>
          <button class="btnMas" id="btnMas${cartaAVer.id}">+</button>
          <button class="btnCheck" id="btnCheck${cartaAVer.id}">✓</button>
        </div>
  </div></a>`);

switch (cartaAVer.tipo) {
    case "Animal":
        $(".descripcionCarta").append(`<div class="contenedorDescripcion"><div class="tituloDescripción">${cartaAVer.nombre}</div><div class="descripcionGeneral"><div>Los animales son las cartas que se utilizan en la batalla. Todos los animales poseen un coste y un daño.
        Algunos de ellos tienen un efecto.</div><ul><li>Daño: ${cartaAVer.dano}</li><li>
        Coste: ${cartaAVer.coste}</li><li>Efecto: ${cartaAVer.efecto}</li></ul></div>`)
        break;

    case "Alimento":
        $(".descripcionCarta").append(`<div class="contenedorDescripcion"><div class="tituloDescripción">${cartaAVer.nombre}</div><div class="descripcionGeneral"><div>Los alimentos sirven como "moneda" en el juego, se utilizan para "pagar" el coste de los demás tipos de
        cartas y de esta manera ponerlos en juego.</div><ul><li>
        Coste: ${cartaAVer.coste}</li></ul></div>`)
        break;

    case "Habilidad":
        $(".descripcionCarta").append(`<div class="contenedorDescripcion"><div class="tituloDescripción">${cartaAVer.nombre}</div><div class="descripcionGeneral"><div>Las habilidades son cartas que se juegan desde la mano del jugador pagando su coste en alimentos. Estas
        habilidades sirven como modificadores de los animales aliados o enemigos. Las habilidades son cartas que
        luego de utilizadas, se destruyen.</div><ul><li>
        Coste: ${cartaAVer.coste}</li><li>Efecto: ${cartaAVer.efecto}</li></ul></div>`)
        break;

    case "Habitat":
        $(".descripcionCarta").append(`<div class="contenedorDescripcion"><div class="tituloDescripción">${cartaAVer.nombre}</div><div class="descripcionGeneral"><div>Los habitats son cartas similares a las habilidades pero que se mantienen en juego indefinidamente.</div><ul><li>
        Coste: ${cartaAVer.coste}</li><li>Efecto: ${cartaAVer.efecto}</li></ul></div>`)
        break;

    default:
        break;
}

