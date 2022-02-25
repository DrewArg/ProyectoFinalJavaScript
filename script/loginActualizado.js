class Usuario {
    constructor(nombre, contrasena) {
        this.nombre = nombre.toUpperCase();
        this.contrasena = contrasena;
        this.creditos = 0;
    }

    descontarCredito(descuento) {
        this.creditos = this.creditos - descuento;
    }

    agregarCreditos(agregado) {
        this.creditos = this.creditos + agregado;
    }
}

const usuarios = [];
const baseDatosUsuarios = localStorage.getItem("listaUsuarios");
let usuarioLogueado = null;

if (baseDatosUsuarios === null || baseDatosUsuarios.length === 0) {
    localStorage.setItem("listaUsuarios",JSON.stringify(usuarios));
}