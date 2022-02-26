

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

            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

            let usuarios = JSON.parse(localStorage.getItem("listaUsuarios"));

            for (user of usuarios) {
                if (user.nombre === usuario.nombre) {
                    let usuarioComprador = new Usuario(user.nombre, user.contrasena, user.recordar);
                    usuarioComprador.agregarCreditos(user.creditos)
                    if (usuarioComprador.creditos < totalPrecio) {
                        usuarioComprador.descontarCredito(usuarioComprador.creditos);
                    } else {
                        usuarioComprador.descontarCredito(totalPrecio);
                    }
                    usuarios.pop(user);
                    usuarios.push(usuarioComprador);
                }
            }

            localStorage.setItem("carritoCompras", JSON.stringify([]))
            localStorage.removeItem("listaUsuarios");
            localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));

            $(".accion__ul").children().remove();

            $(".carritoUsuario").children().remove();

            $(".accion").remove();

            $(".carritoUsuario").append(`<div class="mensajeCompraRealizada">¡Muchas gracias por tu compra ${usuario.nombre}!</div>`);

        });

    } else {
        opcionCompra = `<div class="informacionInterna">No te alcanzan los créditos para comprar la totalidad del carrito. Si quieres remover un item, quitalo desde el carrito de la esquina inferior izquierda.</div><div class="informacionInterna">¿Quieres comprar más créditos?</div>`

        botones = `<div class="botonesCarrito"><button class ="btnSi" id="btnSi">Sí, quiero comprar</button><button class="btnNo" id="btnNo">No, estoy mirando</button></div>`

        $(".informacionCarrito").append(nombre);
        $(".informacionCarrito").append(opcionCompra);
        $(".informacionCarrito").append(botones);

        $(function () {
            $("#btnNo").on("click", () => {
                window.location.href = "../pages/tienda.html";
            });
        })

        $("#btnSi").on("click", buttonSi);
    }

    function buttonSi() {
        $(".carritoUsuario").children().remove();

        $(".carritoUsuario").append(`<div class="mensajeCompraRealizada">¿Qué método de pago prefieres ${usuario.nombre}?</div><div class="botonesPago"><button class="btnTarjeta" id="btnTarjeta">Tarjeta de Crédito</button><button class="btnTransferencia" id="btnTransferencia">Transferencia</button><button class="btnCrypto" id="btnCrypto">Cryptomonedas</button></div>`);

        $("#btnTarjeta").on("click", () => {
            $(".carritoUsuario").children().remove();

            $(".carritoUsuario").append(`<div class="mensajeCompraRealizada">En esta simulación el pago con tarjeta de crédito no está habilitado. A modo de disculpas, te regalamos 10 nuevos créditos.</div>`);

            usuario.agregarCreditos(10);

            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

            let usuarios = JSON.parse(localStorage.getItem("listaUsuarios"));

            for (user of usuarios) {
                if (user.nombre === usuario.nombre) {
                    usuarios.pop(user);
                    usuarios.push(usuario);
                }
            }

            localStorage.removeItem("listaUsuarios");
            localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));

            botones = `<div class="botonesCarrito"><button class="btnNo" id="btnNo">Seguir comprando</button></div>`


            $(".informacionCarrito").append(botones);

            $(function () {
                $("#btnNo").on("click", () => {
                    window.location.href = "../pages/tienda.html";
                });
            })

        });


        $("#btnTransferencia").on("click", () => {
            $(".carritoUsuario").children().remove();

            $(".carritoUsuario").append(`<div class="mensajeCompraRealizada">En esta simulación el pago por transferencia bancaria no está habilitado. A modo de disculpas, te regalamos 20 nuevos créditos.</div>`);

            usuario.agregarCreditos(20);

            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

            let usuarios = JSON.parse(localStorage.getItem("listaUsuarios"));

            for (user of usuarios) {
                if (user.nombre === usuario.nombre) {
                    usuarios.pop(user);
                    usuarios.push(usuario);
                }
            }


            localStorage.removeItem("listaUsuarios");
            localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));

            botones = `<div class="botonesCarrito"><button class="btnNo" id="btnNo">Seguir comprando</button></div>`


            $(".informacionCarrito").append(botones);

            $(function () {
                $("#btnNo").on("click", () => {
                    window.location.href = "../pages/tienda.html";
                });
            })

        });


        $("#btnCrypto").on("click", () => {
            $(".carritoUsuario").children().remove();

            $(".carritoUsuario").append(`<div class="mensajeCompraRealizada">En esta simulación el pago de cryptomonedas no está habilitado. Por al menos intentarlo, te regalamos 100 nuevos créditos.</div>`);

            usuario.agregarCreditos(100);

            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

            let usuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
            
            for (user of usuarios) {
                if (user.nombre === usuario.nombre) {
                    usuarios.pop(user);
                    usuarios.push(usuario);
                }
            }

            localStorage.removeItem("listaUsuarios");
            localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));

            botones = `<div class="botonesCarrito"><button class="btnNo" id="btnNo">Seguir comprando</button></div>`


            $(".informacionCarrito").append(botones);

            $(function () {
                $("#btnNo").on("click", () => {
                    window.location.href = "../pages/tienda.html";
                });
            })

        });
    }
}
