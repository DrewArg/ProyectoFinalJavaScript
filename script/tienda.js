let nombreUsuario = prompt("Ingresa tu nombre de usuario.")
let creditosDisponibles = 10;
alert("Bienvenid@ " + nombreUsuario + " por ser un nuevo usuario, tienes un total de 10 créditos gratis.");

let tipoCartaAComprar = parseInt(prompt("¿Qué deseas comprar? \n1. Animal\n2. Habilidad\n3. Hábitat\nIngresa el número de la opción deseada."));

let opcionCorrecta = false;
let salir = false;

while (salir === false) {

    while (opcionCorrecta === false) {
        if (tipoCartaAComprar === 1 || tipoCartaAComprar === 2 || tipoCartaAComprar === 3) {
            opcionCorrecta = true;
        } else {
            tipoCartaAComprar = parseInt(prompt("Opción incorrecta, intenta nuevamente.\n¿Qué deseas comprar? \n1. Animal\n2. Habilidad\n3. Hábitat\nIngresa el número de la opción deseada."));
        }
    }

    switch (tipoCartaAComprar) {
        case 1:
            let nombreAnimal = mostrarOpcionesAnimalYDevolverSeleccion();
            creditosDisponibles = comprarAnimalYDevolverCreditosDisponibles(nombreAnimal, creditosDisponibles);


            break;

        case 2:
            let nombreHabilidad = mostrarOpcionesHabilidadYDevolverSeleccion();
            creditosDisponibles = comprarHabilidadYDevolverCreditosDisponibles(nombreHabilidad, creditosDisponibles);

            break;

        case 3:
            let = nombreHabitat = mostrarOpcionesHabitatYDevolverSeleccion();
            creditosDisponibles = comprarHabitatYDevolverCreditosDisponibles(nombreHabitat, creditosDisponibles);
            break;

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

alert("¡Gracias por tu compra " + nombreUsuario + "!")


function mostrarOpcionesAnimalYDevolverSeleccion() {

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

function mostrarOpcionesHabilidadYDevolverSeleccion() {

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

function mostrarOpcionesHabitatYDevolverSeleccion() {

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

function comprarAnimalYDevolverCreditosDisponibles(nombreCarta, creditosDisponibles) {
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

function comprarHabilidadYDevolverCreditosDisponibles(nombreCarta, creditosDisponibles) {
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

function comprarHabitatYDevolverCreditosDisponibles(nombreCarta, creditosDisponibles) {
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




