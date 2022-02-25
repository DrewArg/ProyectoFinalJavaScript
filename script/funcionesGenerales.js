function deslogueo() {
    localStorage.removeItem("usuarioActivo");
    window.location.reload();
}

function reiniciarLocalStorage() {
    localStorage.clear();
}

function recorrerLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        console.log("Clave: " + clave);
        console.log("Valor: " + localStorage.getItem(clave));
    }
}

function removerElementoPorClase(nombreClase) {
    let elemento = document.getElementsByClassName(nombreClase);
    elemento[0].parentNode.removeChild(elemento[0]);

}

function removerTodosLosElementosPorClase(nombreClase) {
    let elementos = document.getElementsByClassName(nombreClase);

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].parentNode.removeChild(elementos[i]);
    }
}


function existeElementoPorClase(nombreClase) {
    let elemento = document.body.contains(
        document.getElementsByClassName(nombreClase)[0]
    );

    return elemento;
}
