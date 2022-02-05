
$(`body`).append
    ("<div class='accion' onclick='toggleAccion();'><span class='icono'></span><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></div>");

function toggleAccion() {
    let accion = document.querySelector('.accion');
    accion.classList.toggle('active');
}
