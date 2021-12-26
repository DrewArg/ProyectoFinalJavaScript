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

// COMIENZO DE FLUJO

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

            if (verificarCreditosDisponibles(creditosDisponibles, costeAlimento)) {

                productos.push(new Producto(tipoCartaAComprar, nombreAlimento, costeAlimento, idProducto));

                const alimento = devolverProductoPorId(productos, idProducto);

                creditosDisponibles = descontarYDevolverCreditosDisponibles(creditosDisponibles, alimento.getCoste());
                alert("Has comprado un: " + alimento.getNombre() + ".\nTe quedan " + creditosDisponibles + " créditos disponibles.");

            } else {
                alert("Actulamente no tienes créditos suficientes para comprar esta carta.")
            }

            idProducto++;
            break;

        case 2:

            let nombreAnimal = mostrarOpcionesPorTipoYDevolverNombreSeleccion(tipoCartaAComprar);
            let costeAnimal = devolverCosteCartaPorNombreYTipo(tipoCartaAComprar, nombreAnimal);

            if (verificarCreditosDisponibles(creditosDisponibles, costeAnimal)) {

                productos.push(new Producto(tipoCartaAComprar, nombreAnimal, costeAnimal, idProducto));

                const animal = devolverProductoPorId(productos, idProducto);

                creditosDisponibles = descontarYDevolverCreditosDisponibles(creditosDisponibles, animal.getCoste());
                alert("Has comprado un: " + animal.getNombre() + ".\nTe quedan " + creditosDisponibles + " créditos disponibles.");

            } else {
                alert("Actulamente no tienes créditos suficientes para comprar esta carta.")
            }

            idProducto++;
            break;


        case 3:

            let nombreHabilidad = mostrarOpcionesPorTipoYDevolverNombreSeleccion(tipoCartaAComprar);
            let costeHabilidad = devolverCosteCartaPorNombreYTipo(tipoCartaAComprar, nombreHabilidad);

            if (verificarCreditosDisponibles(creditosDisponibles, costeHabilidad)) {
                productos.push(new Producto(tipoCartaAComprar, nombreHabilidad, costeHabilidad, idProducto));

                const habilidad = devolverProductoPorId(productos, idProducto);

                creditosDisponibles = descontarYDevolverCreditosDisponibles(creditosDisponibles, habilidad.getCoste());
                alert("Has comprado un: " + habilidad.getNombre() + ".\nTe quedan " + creditosDisponibles + " créditos disponibles.");

            } else {
                alert("Actulamente no tienes créditos suficientes para comprar esta carta.")
            }

            idProducto++;
            break;



        case 4:

            let nombreHabitat = mostrarOpcionesPorTipoYDevolverNombreSeleccion(tipoCartaAComprar);
            let costeHabitat = devolverCosteCartaPorNombreYTipo(tipoCartaAComprar, nombreHabitat);

            if (verificarCreditosDisponibles(creditosDisponibles, costeHabitat)) {
                productos.push(new Producto(tipoCartaAComprar, nombreHabitat, costeHabitat, idProducto));

                const habitat = devolverProductoPorId(productos, idProducto);

                creditosDisponibles = descontarYDevolverCreditosDisponibles(creditosDisponibles, habitat.getCoste());
                alert("Has comprado un: " + habitat.getNombre() + ".\nTe quedan " + creditosDisponibles + " créditos disponibles.");

            } else {
                alert("Actulamente no tienes créditos suficientes para comprar esta carta.")
            }

            idProducto++;
            break;

    }

    if (creditosDisponibles === 0) {
        alert("Te has quedado sin créditos.")
        salir = true;
    } else {
        let continuarCompra = parseInt(prompt("¿Quiéres seguir comprando?\n1. Sí\n2. No"));

        if (continuarCompra === 1) {
            opcionCorrecta = false;
            tipoCartaAComprar = parseInt(prompt("¿Qué deseas comprar? \n1. Alimento\n2. Animal\n3. Habilidad\n4. Hábitat\nIngresa el número de la opción deseada."));
        } else {
            salir = true;
        }
    }

}

alert("En esta oportunidad has comprado los siguientes productos: ");

for (const producto of productos) {
    alert("Nombre: " + producto.getNombre() + " \nCréditos Gastados: " + producto.getCoste())
}

alert("¡Gracias por tu compra " + nombreUsuario + "!");

//FUNCIONES

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

            let animales = ["Foca", "Liebre", "Lobo", "Oso Polar"];
            let animalSeleccionado = parseInt(prompt(`¿Qué animal deseas comprar?\n1. ${animales[0]}\n2. ${animales[1]}\n3. ${animales[2]}\n4. ${animales[3]}`));

            while (!seleccionCorrecta) {
                animalSeleccionado -= 1;

                if (verificarExistenciaProducto(animales, animalSeleccionado)) {
                    seleccionCorrecta = true;
                } else {
                    animalSeleccionado = parseInt(prompt(`Has ingresado una opción incorrecta, intenta nuevamente.\n¿Qué animal deseas comprar?\n1. ${animales[0]}\n2. ${animales[1]}\n3. ${animales[2]}\n4. ${animales[3]}`));
                }
            }
            return animales[animalSeleccionado];

        case 3:
            let habilidades = ["Buceo", "Salto", "Aullido", "Rugido"];
            let habilidadSeleccionada = parseInt(prompt(`¿Qué habilidad deseas comprar?\n1. ${habilidades[0]}\n2. ${habilidades[1]}\n3. ${habilidades[2]}\n4. ${habilidades[3]}`));

            while (!seleccionCorrecta) {
                habilidadSeleccionada -= 1;

                if (verificarExistenciaProducto(habilidades, habilidadSeleccionada)) {
                    seleccionCorrecta = true;
                } else {
                    habilidadSeleccionada = parseInt(prompt(`Has ingresado una opción incorrecta, intenta nuevamente.\n¿Qué habilidad deseas comprar?\n1. ${habilidades[0]}\n2. ${habilidades[1]}\n3. ${habilidades[2]}\n4. ${habilidades[3]}`));
                }
            }
            return habilidades[habilidadSeleccionada];

        case 4:
            let habitats = ["Glaciar", "Madrigera", "Cueva", "Polo Norte"];
            let habitatSeleccionado = parseInt(prompt(`¿Qué hábitat deseas comprar?\n1. ${habitats[0]}\n2. ${habitats[1]}\n3. ${habitats[2]}\n4. ${habitats[3]}`));

            while (!seleccionCorrecta) {
                habitatSeleccionado -= 1;

                if (verificarExistenciaProducto(habitats, habitatSeleccionado)) {
                    seleccionCorrecta = true;
                } else {
                    habitatSeleccionado = parseInt(prompt(`Has ingresado una opción incorrecta, intenta nuevamente.\n¿Qué hábitat deseas comprar?\n1. ${habitats[0]}\n2. ${habitats[1]}\n3. ${habitats[2]}\n4. ${habitats[3]}`));
                }
            }
            return habitats[habitatSeleccionado];

        default:
            break;
    }

}

function devolverNombreProductoPorId(productos, id) {
    return productos[id].getNombre();

}

function devolverProductoPorId(productos, id) {
    const producto = productos.find(p => p.id === id);
    return producto;
}

function devolverCosteCartaPorNombreYTipo(tipoCartaAComprar, nombreCarta) {

    let tiposAlimento = ["Alimento Común", "Alimento Raro", "Alimento Épico", "Alimento Legendario"];
    let tiposAnimal = ["Foca", "Liebre", "Lobo", "Oso Polar"];
    let tiposHabilidad = ["Buceo", "Salto", "Aullido", "Rugido"];
    let tiposHabitat = ["Glaciar", "Madrigera", "Cueva", "Polo Norte"];

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
        case 2:
            switch (nombreCarta) {
                case tiposAnimal[0]:
                    return costeCartaComun;

                case tiposAnimal[1]:
                    return costeCartaRara;

                case tiposAnimal[2]:
                    return costeCartaEpica;

                case tiposAnimal[3]:
                    return costeCartaLegendaria;
            }

        case 3:
            switch (nombreCarta) {
                case tiposHabilidad[0]:
                    return costeCartaComun;

                case tiposHabilidad[1]:
                    return costeCartaRara;

                case tiposHabilidad[2]:
                    return costeCartaEpica;

                case tiposHabilidad[3]:
                    return costeCartaLegendaria;
            }

        case 4:
            switch (nombreCarta) {
                case tiposHabitat[0]:
                    return costeCartaComun;

                case tiposHabitat[1]:
                    return costeCartaRara;

                case tiposHabitat[2]:
                    return costeCartaEpica;

                case tiposHabitat[3]:
                    return costeCartaLegendaria;
            }
    }
}

function descontarYDevolverCreditosDisponibles(creditosDisponibles, costeCarta) {
    creditosDisponibles = creditosDisponibles - costeCarta;
    return creditosDisponibles;
}

function verificarExistenciaProducto(productos, seleccion) {
    for (let index = 0; index < productos.length; index++) {
        if (seleccion === index) {
            return true;
        }
    }

    return false;
}

function verificarCreditosDisponibles(creditosDisponibles, costeCarta) {
    if (creditosDisponibles >= costeCarta) {
        return true;
    } else {
        return false;
    }

}









