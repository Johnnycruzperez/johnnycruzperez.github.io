function envio() {
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("asunto").value = ""


    document.getElementById("enviado").style = "visibility: visible"
    window.setTimeout(borrado_envio, 1500)




    return false;
}

function borrado_envio() {
    document.getElementById("enviado").style = ""

}
