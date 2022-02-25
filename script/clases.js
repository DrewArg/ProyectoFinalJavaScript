class Usuario {
    constructor(nombre, contrasena, recordar) {
        this.nombre = nombre.toUpperCase();
        this.contrasena = contrasena;
        this.recordar = recordar;
        this.creditos = 0;
    }

    descontarCredito(descuento) {
        this.creditos = this.creditos - descuento;
    }

    agregarCreditos(agregado) {
        this.creditos = this.creditos + agregado;
    }
}


class Producto {
    constructor(id, nombre, precio, cantidadCarta) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadCarta = cantidadCarta;
    }

    setCantidadCarta(cantidadCarta) {
        this.cantidadCarta = cantidadCarta;
    }
}


class Carta {
    constructor(tipo, nombre, coste, dano, id, imagen, efecto) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.coste = coste;
        this.dano = dano;
        this.id = id;
        this.imagen = imagen;
        this.efecto = efecto;
    }

}