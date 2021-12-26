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

class Animal {
    constructor(rareza, descricpion, dano, coste, efecto) {
        this.rareza = rareza;
        this.descricpion = descricpion;
        this.dano = dano;
        this.coste = coste;
        this.efecto = efecto;
    }

    mostrarOpcionesAnimalYDevolverSeleccion() {

        let seleccionCorrecta = false;
        let seleccion = parseInt(prompt("¿Qué animal deseas comprar?\n1. Lobo Gris\n2. Camaleón\n3. León"));

        while (!seleccionCorrecta) {
            if (seleccion === 1 || seleccion === 2 || seleccion === 3) {
                seleccionCorrecta = true;
            } else {
                seleccion = parseInt(prompt("Has ingresado una opción incorrecta, intenta nuevamente.\n¿Qué animal deseas comprar?\n1. Lobo Gris\n2. Camaleón\n3. León"));
            }
        }

        switch (seleccion) {
            case 1:
                return "Lobo Gris";

            case 2:
                return "Camaleón";

            case 3:
                return "León";

            default:
                break;
        }
    }

    comprarAnimalYDevolverCreditosDisponibles(nombreCarta, creditosDisponibles) {
        switch (nombreCarta) {
            case "Lobo Gris":
                if (creditosDisponibles >= 3) {
                    creditosDisponibles -= 3;
                    alert("Has comprado un " + nombreCarta);
                } else {
                    alert("Actulamente no tienes créditos suficientes para comprar esta carta.")
                }
                return creditosDisponibles;

            case "Camaleón":
                if (creditosDisponibles >= 5) {
                    creditosDisponibles -= 5;
                    alert("Has comprado un " + nombreCarta);
                } else {
                    alert("Actulamente no tienes créditos suficientes para comprar esta carta.")
                }

                return creditosDisponibles;


            case "León":
                if (creditosDisponibles >= 10) {
                    creditosDisponibles -= 10;
                    alert("Has comprado un " + nombreCarta);
                } else {
                    alert("Actulamente no tienes créditos suficientes para comprar esta carta.")
                }

                return creditosDisponibles;

            default:
                break;
        }
    }


}

class Habilidad {
    constructor(rareza, descricpion, coste, efecto) {

        this.rareza = rareza;
        this.descricpion = descricpion;
        this.coste = coste;
        this.efecto = efecto;
    }

    comprarHabilidadYDevolverCreditosDisponibles(nombreCarta, creditosDisponibles) {
        switch (nombreCarta) {
            case "Aullido":
                if (creditosDisponibles >= 1) {
                    creditosDisponibles -= 1;
                    alert("Has comprado un " + nombreCarta);

                } else {
                    alert("Actulamente no tienes créditos suficientes para comprar esta carta.");
                }

                return creditosDisponibles;

            case "Camuflaje":
                if (creditosDisponibles >= 2) {
                    creditosDisponibles -= 2;
                    alert("Has comprado un " + nombreCarta);
                } else {
                    alert("Actulamente no tienes créditos suficientes para comprar esta carta.");
                }
                return creditosDisponibles;


            case "Rugido":
                if (creditosDisponibles >= 5) {
                    creditosDisponibles -= 5;
                    alert("Has comprado un " + nombreCarta);
                } else {
                    alert("Actulamente no tienes créditos suficientes para comprar esta carta.");
                }
                return creditosDisponibles;

            default:
                break;
        }
    }

    mostrarOpcionesHabilidadYDevolverSeleccion() {

        let seleccionCorrecta = false;
        let seleccion = parseInt(prompt("¿Qué habilidad deseas comprar?\n1. Aullido\n2. Camuflaje\n3. Rugido"));

        while (!seleccionCorrecta) {
            if (seleccion === 1 || seleccion === 2 || seleccion === 3) {
                seleccionCorrecta = true;
            } else {
                seleccion = parseInt(prompt("Has ingresado una opción incorrecta, intenta nuevamente.\n¿Qué habilidad deseas comprar?\n1. Aullido\n2. Camuflaje\n3. Rugido"));
            }
        }

        switch (seleccion) {
            case 1:
                return "Aullido";

            case 2:
                return "Camuflaje";

            case 3:
                return "Rugido";

            default:
                break;
        }
    }
}

class Alimento {
    constructor(rareza, descricpion) {

        this.rareza = rareza;
        this.descricpion = descricpion;
    }
}

class Habitat {
    constructor(rareza, descricpion, coste, efecto) {

        this.rareza = rareza;
        this.descricpion = descricpion;
        this.coste = coste;
        this.efecto = efecto;
    }

    mostrarOpcionesHabitatYDevolverSeleccion() {

        let seleccionCorrecta = false;
        let seleccion = parseInt(prompt("¿Qué hábitat deseas comprar?\n1. Cueva\n2. Árbol\n3. Sabana"));

        while (!seleccionCorrecta) {
            if (seleccion === 1 || seleccion === 2 || seleccion === 3) {
                seleccionCorrecta = true;
            } else {
                seleccion = parseInt(prompt("Has ingresado una opción incorrecta, intenta nuevamente.\n¿Qué hábitat deseas comprar?\n1. Cueva\n2. Árbol\n3. Sabana"));
            }
        }

        switch (seleccion) {
            case 1:
                return "Cueva";

            case 2:
                return "Árbol";

            case 3:
                return "Sabana";

            default:
                break;
        }
    }

    comprarHabitatYDevolverCreditosDisponibles(nombreCarta, creditosDisponibles) {
        switch (nombreCarta) {
            case "Cueva":
                if (creditosDisponibles >= 6) {
                    creditosDisponibles -= 6;
                    alert("Has comprado un " + nombreCarta);
                } else {
                    alert("Actulamente no tienes créditos suficientes para comprar esta carta.");
                }
                return creditosDisponibles;


            case "Árbol":
                if (creditosDisponibles >= 10) {
                    creditosDisponibles -= 10;
                    alert("Has comprado un " + nombreCarta);
                } else {
                    alert("Actulamente no tienes créditos suficientes para comprar esta carta.");
                }
                return creditosDisponibles;

            case "Sabana":
                if (creditosDisponibles >= 20) {
                    creditosDisponibles -= 20;
                    alert("Has comprado un " + nombreCarta);
                } else {
                    alert("Actulamente no tienes créditos suficientes para comprar esta carta.");
                }
                return creditosDisponibles;

            default:
                break;
        }
    }
}

let nombreUsuario = prompt("Ingresa tu nombre de usuario.")
let creditosDisponibles = 10;

alert("Bienvenid@ " + nombreUsuario + " por ser un nuevo usuario, tienes un total de 10 créditos gratis.");

let tiposDeCarta = ["Alimento", "Animal", "Habilitad", "Hábitat"];

let tipoCartaAComprar = parseInt(prompt(`¿Qué deseas comprar? \n1. ${tiposDeCarta[0]}\n2. ${tiposDeCarta[1]}\n3. ${tiposDeCarta[2]}\n4. ${tiposDeCarta[3]}\nIngresa el número de la opción deseada.`));

let opcionCorrecta = false;
let salir = false;

const productos = [];
let idProducto = 0;

while (!salir) {

    while (!opcionCorrecta) {
        if (tipoCartaAComprar === 1 || tipoCartaAComprar === 2 || tipoCartaAComprar === 3 || tipoCartaAComprar === 4) {
            opcionCorrecta = true;
        } else {
            tipoCartaAComprar = parseInt(prompt(`Opción incorrecta, intenta nuevamente. \n1. ${tiposDeCarta[0]}\n2. ${tiposDeCarta[1]}\n3. ${tiposDeCarta[2]}\n4. ${tiposDeCarta[3]}\nIngresa el número de la opción deseada.`));
        }
    }



    switch (tipoCartaAComprar) {

        case 1:

            let nombreAlimento = mostrarOpcionesPorTipoYDevolverNombreSeleccion(tipoCartaAComprar);
            let costeAlimento = devolverCosteCartaPorNombreYTipo(tipoCartaAComprar, nombreAlimento);

            productos.push(new Producto(tipoCartaAComprar, nombreAlimento, costeAlimento, idProducto));

            const alimento = devolverProductoPorId(productos, idProducto);


            if (verificarCreditosDisponibles(creditosDisponibles, alimento.getCoste())) {
                creditosDisponibles = descontarYDevolverCreditosDisponibles(creditosDisponibles, alimento.getCoste());
                alert("Has comprado un: " + alimento.getNombre() + ".\nTe quedan " + creditosDisponibles + " créditos disponibles.");

            } else {
                alert("Actulamente no tienes créditos suficientes para comprar esta carta.")
            }

            idProducto++;
            break;


        // case 2:
        //     let nombreAnimal = mostrarOpcionesAnimalYDevolverSeleccion();
        //     creditosDisponibles = comprarAnimalYDevolverCreditosDisponibles(nombreAnimal, creditosDisponibles);


        //     break;

        // case 3:
        //     let nombreHabilidad = mostrarOpcionesHabilidadYDevolverSeleccion();
        //     creditosDisponibles = comprarHabilidadYDevolverCreditosDisponibles(nombreHabilidad, creditosDisponibles);

        //     break;

        // case 4:
        //     let = nombreHabitat = mostrarOpcionesHabitatYDevolverSeleccion();
        //     creditosDisponibles = comprarHabitatYDevolverCreditosDisponibles(nombreHabitat, creditosDisponibles);
        //     break;

        default:
            break;

    }


    if (creditosDisponibles === 0) {
        alert("Te has quedado sin créditos.")
        salir = true;
    } else {
        alert("Aún tienes: " + creditosDisponibles + " créditos disponibles.");

        let continuarCompra = parseInt(prompt("¿Quiéres seguir comprando?\n1. Sí\n2. No"));

        if (continuarCompra === 1) {
            opcionCorrecta = false;
            tipoCartaAComprar = parseInt(prompt("¿Qué deseas comprar? \n1. Animal\n2. Habilidad\n3. Hábitat\nIngresa el número de la opción deseada."));
        } else {
            salir = true;
        }
    }

}

alert("¡Gracias por tu compra " + nombreUsuario + "!");

function devolverNombreProductoPorId(productos, id) {
    return productos[id].getNombre();

}

function verificarExistenciaProducto(productos, seleccion) {
    for (let index = 0; index < productos.length; index++) {
        if (seleccion === index) {
            return true;
        }
    }

    return false;
}


function mostrarOpcionesPorTipoYDevolverNombreSeleccion(tipoCartaAComprar) {
    let seleccionCorrecta = false;

    switch (tipoCartaAComprar) {
        case 1:
            let alimentos = ["Alimento Común", "Alimento Raro", "Alimento Épico", "Alimento Legendario"];
            let alimentoSeleccionado = parseInt(prompt(`¿Qué alimento deseas comprar?\n1. ${alimentos[0]}\n2. ${alimentos[1]}\n3. ${alimentos[2]}\n4. ${alimentos[3]}`));

            while (!seleccionCorrecta) {
                alimentoSeleccionado -= 1;

                if (verificarExistenciaProducto(alimentos, alimentoSeleccionado)) {
                    seleccionCorrecta = true;
                } else {
                    alimentoSeleccionado = parseInt(prompt(`Has ingresado una opción incorrecta, intenta nuevamente.\n¿Qué alimento deseas comprar?\n1. ${alimentos[0]}\n2. ${alimentos[1]}\n3. ${alimentos[2]}\n4. ${alimentos[3]}`));
                }
            }
            return alimentos[alimentoSeleccionado];

        case 2:
            let seleccion = parseInt(prompt("¿Qué animal deseas comprar?\n1. Lobo Gris\n2. Camaleón\n3. León"));

            while (!seleccionCorrecta) {
                if (seleccion === 1 || seleccion === 2 || seleccion === 3) {
                    seleccionCorrecta = true;
                } else {
                    seleccion = parseInt(prompt("Has ingresado una opción incorrecta, intenta nuevamente.\n¿Qué animal deseas comprar?\n1. Lobo Gris\n2. Camaleón\n3. León"));
                }
            }

            switch (seleccion) {
                case 1:
                    return "Lobo Gris";

                case 2:
                    return "Camaleón";

                case 3:
                    return "León";

                default:
                    break;
            }
            break;

        default:
            break;
    }

}

function devolverCosteCartaPorNombreYTipo(tipoCartaAComprar, nombreCarta) {

    let tiposAlimento = ["Alimento Común", "Alimento Raro", "Alimento Épico", "Alimento Legendario"];
    let costeCartaComun = 1;
    let costeCartaRara = 3;
    let costeCartaEpica = 6;
    let costeCartaLegendaria = 10;

    switch (tipoCartaAComprar) {
        case 1:
            switch (nombreCarta) {
                case tiposAlimento[0]:
                    return costeCartaComun;

                case tiposAlimento[1]:
                    return costeCartaRara;

                case tiposAlimento[2]:
                    return costeCartaEpica;

                case tiposAlimento[3]:
                    return costeCartaLegendaria;

            }
        default:
            break;

    }
}

function verificarCreditosDisponibles(creditosDisponibles, costeCarta) {
    if (creditosDisponibles >= costeCarta) {
        return true;
    } else {
        return false;
    }

}

function descontarYDevolverCreditosDisponibles(creditosDisponibles, costeCarta) {
    creditosDisponibles = creditosDisponibles - costeCarta;
    return creditosDisponibles;
}

function devolverProductoPorId(productos, id) {
    const producto = productos.find(p => p.id === id);
    return producto;
}







