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