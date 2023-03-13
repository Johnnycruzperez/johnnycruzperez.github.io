function envio() {
    document.getElementById("nombre").value = ""
    document.getElementById("email").value = ""
    document.getElementById("asunto").value = ""
    document.getElementById("enviado").style = "visibility: visible"
    window.setTimeout(borrado_envio, 1500)
    return false;
}

function borrado_envio() {
    document.getElementById("enviado").style = ""

}

function cambio_de_fondo() {
    document.getElementById("experiencia").value = ""

}
