

usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));


if (usuarioActivo !== null) {
    let usuario = new Usuario(usuarioActivo.nombre, usuarioActivo.contrasena);
    usuario.agregarCreditos(usuarioActivo.creditos);

    let titulo = document.getElementById("tituloCambiante");
    titulo.innerHTML = `Tu Carrito`;

    let nombre = `<div class="informacionInterna">${usuario.nombre}, actualmente tienes un total de ${usuario.creditos} créditos.</div>`;

    let carritoUsuario = JSON.parse(localStorage.getItem("carritoCompras"));

    let totalPrecio = 0;

    if (carritoUsuario.length > 0) {

        for (producto of carritoUsuario) {
            totalPrecio = totalPrecio + (producto.precio) * (producto.cantidadCarta);
        }

    }

    let opcionCompra, botones;

    console.log(totalPrecio);

    if (totalPrecio <= usuarioActivo.creditos) {
        opcionCompra = `<div class="informacionInterna">Tu carrito vale un total de ${totalPrecio} créditos.</div><div class="informacionInterna">¿Quieres finalizar la compra?</div>`

        botones = `<div class="botonesCarrito"><button class ="btnSi" id="btnSi">Sí, quiero comprar todo</button><button class="btnNo" id="btnNo">Seguir comprando</button></div>`

        $(".informacionCarrito").append(nombre);
        $(".informacionCarrito").append(opcionCompra);
        $(".informacionCarrito").append(botones);

        $(function () {
            $("#btnNo").on("click", () => {
                window.location.href = "../pages/tienda.html"
            });
        })

        $("#btnSi").on("click", () => {
            usuario.descontarCredito(totalPrecio);
            console.log("usuario: " + usuario.creditos);

            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

            let usuarios = JSON.parse(localStorage.getItem("listaUsuarios"));

            for (user of usuarios) {
                if (user.nombre === usuario.nombre) {
                    let usuarioComprador = new Usuario(user.nombre, user.contrasena, user.recordar);
                    usuarioComprador.agregarCreditos(user.creditos)
                    usuarioComprador.descontarCredito(totalPrecio);

                    usuarios.pop(user);
                    usuarios.push(usuarioComprador);
                }
            }

            localStorage.removeItem("listaUsuarios");
            localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));

        });

    }



}
